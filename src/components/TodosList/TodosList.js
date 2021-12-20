import React from 'react'
import { ListGroup } from 'react-bootstrap';


function TodosList({ todos, setTodos }) {

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
