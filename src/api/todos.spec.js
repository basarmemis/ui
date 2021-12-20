import TodosAPI from "./todos";
import nock from "nock";

describe("TodosAPI", () => {

    test("get all todos", async () => {
        const todos = [
            {
                id: 1,
                name: "Do HomeWork",
                completed: false
            },
            {
                id: 2,
                name: "Do Shopping",
                completed: false
            }
        ];
        nock(TodosAPI.url)
            .get('/todos')
            .reply(200,
                todos,
                { 'Access-Control-Allow-Origin': '*' });
        const respTodos = await TodosAPI.getAll();
        expect(respTodos).toStrictEqual(todos);
    });

    test("add todo with name 'Go Shopping'", async () => {
        const todo = {
            id: 1,
            name: "Do HomeWork",
            completed: false
        };

        const requestBody = {
            name: todo.name
        }
        nock(TodosAPI.url)
            .post('/todos', requestBody)
            .reply(200, todo, { 'Access-Control-Allow-Origin': '*' });
        const respTodo = await TodosAPI.addTodo(todo.name);
        expect(respTodo.name).toEqual(todo.name);
        expect(respTodo.completed).toEqual(todo.completed);
    });
});