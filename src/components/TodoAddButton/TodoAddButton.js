import React from 'react'
import { Button } from 'react-bootstrap'
import { TodosAPI } from './../../api/todos';

const api = new TodosAPI(process.env.REACT_APP_API_BASE_URL);

function TodoAddButton({ setTodos, input, setInput }) {


    //#region for testing purpose
    /*const handleClick = () => {
        let newTodos = [...todos];
        const todo = { id: todos.length + 1, name: "Do HomeWork", completed: false };
        newTodos.push(todo);
        setTodos(newTodos);
    }*/
    //#endregion



    //#region for production
    const handleClick = async () => {
        if(input === "") return;
        await api.addTodo(input);
        setTodos(await api.getAll());
        await setInput("");
    }
    //#endregion

    return (
        <Button
            style={{ float: "right" }}
            data-testid="test-addButton"
            onClick={handleClick}>
            Add Todo
        </Button>
    )
}

export default TodoAddButton
