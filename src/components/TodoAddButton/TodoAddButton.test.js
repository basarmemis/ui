import { render, screen } from '@testing-library/react';
import TodoAddButton from './TodoAddButton';

//Renders the AddTodo Button Element
test('renders AddTodo Button Element', () => {
    render(<TodoAddButton />);
    const addButtonElement = screen.getByTestId('test-addButton');
    expect(addButtonElement).toBeInTheDocument();
});


//Renders Button element With Name Add Todo
test('renders button element with name Add Todo', () => {
    render(<TodoAddButton />);
    const addButtonElement = screen.getByTestId('test-addButton');
    expect(addButtonElement).toHaveTextContent("Add Todo");
});
