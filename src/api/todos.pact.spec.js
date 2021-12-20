import path from "path";
import { Pact } from "@pact-foundation/pact";
import { TodosAPI } from "./todos";
import { eachLike, like } from "@pact-foundation/pact/src/dsl/matchers";

const provider = new Pact({
    consumer: 'ui',
    provider: 'api',
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    logLevel: "warn",
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2
});

describe("API Pact test", () => {

    beforeAll(() => provider.setup());
    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());

    describe("getting all todos", () => {
        test("todos exists", async () => {
            // set up Pact interactions
            await provider.addInteraction({
                state: 'todos exist',
                uponReceiving: 'get all todos',
                withRequest: {
                    method: 'GET',
                    path: '/todos',
                    headers: {
                        "Content-Type": like("application/json; charset=utf-8"),
                    }
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    //body: eachLike({ id: 1, name: "Do HomeWork", completed: false }),
                    body: [],
                },
            });
            const api = new TodosAPI(provider.mockService.baseUrl);

            // make request to Pact mock server
            const todos = await api.getAll();

            expect(todos).toStrictEqual([]);

            /*expect(todos).toStrictEqual([
                { id: 1, name: "Do HomeWork", completed: false }
            ]);*/
        });
    });

    describe("adding a new todo", () => {

        const newTodoName = "newTodo"
        test("Name NewTodo Not Exists", async () => {
            // set up Pact interactions
            await provider.addInteraction({
                state: 'todo with Name NewTodo not exists',
                uponReceiving: 'Create Todo With Name NewTodo',
                withRequest: {
                    method: 'POST',
                    path: '/todos',
                    headers: {
                        "Content-Type": like("application/json; charset=utf-8"),
                    },
                    body: {
                        name: newTodoName
                    }
                },
                willRespondWith: {
                    status: 201,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: {
                        id: like(5),
                        name: newTodoName,
                        completed: false,
                        editable: false,
                    }

                },
            });

            const api = new TodosAPI(provider.mockService.baseUrl);

            // make request to Pact mock server
            const todo = await api.addTodo(newTodoName);

            todo.id = like(3);
            expect(todo.name).toStrictEqual(newTodoName);
            expect(todo.completed).toStrictEqual(false);
            expect(todo.editable).toStrictEqual(false);
        });
    });


});