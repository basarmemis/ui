import React from 'react'
import { Form } from 'react-bootstrap';

function TodoTextBox({ setInput,input }) {
    const handleChange = (event) => {
        setInput(event.target.value);
    }
    return (
        <Form.Control
            data-testid="test-inputElement"
            type="text"
            placeholder="Enter a New Todo"
            onChange={handleChange}
            value={input}
        />
    )
}

export default TodoTextBox;
