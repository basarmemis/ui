import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap';
import { TodosAPI } from './../../api/todos';

const api = new TodosAPI(process.env.REACT_APP_API_BASE_URL);

function TodosList({ todos, setTodos }) {
    useEffect(() => {
        api.getAll()
            .then(response => setTodos(response));
    }, [setTodos]);
    return (
        <ListGroup
            data-testid="test-listGroup"
        >
            {
                todos.map(todo => {
                    return (
                        <ListGroup.Item
                            style={{ marginTop: "10px", marginBottom: "10px", borderTopWidth: "1px" }}
                            key={todo.id}
                            data-testid={`test-listItem${todo.id}`}
                        >
                            {todo.name}
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    )
}

export default TodosList
