import { render, screen } from '@testing-library/react';
import TodosList from './TodosList';

//Renders Todos List Element
test('renders Todos List Element', () => {
    render(<TodosList
        todos={[]}
        setTodos={() => { return; }}
    />);
    const addButtonElement = screen.getByTestId('test-listGroup');
    expect(addButtonElement).toBeInTheDocument();
});


//Renders Todos List Element With Todo in it
test('Renders Todos List Element With Todo in it', () => {
    render(<TodosList
        todos={[{ id: 1, name: "Do HomeWork", completed: false }]}
        setTodos={() => { return; }}
    />);
    const todoListItem = screen.queryByTestId(/test-listItem/);
    expect(todoListItem).toHaveTextContent("Do HomeWork");
});

//Renders Todos List Element Without todo in it
test('Renders Todos List Element Without todo in it', () => {
    render(<TodosList
        todos={[]}
        setTodos={() => { return; }}
    />);
    const todoListItem = screen.queryByTestId(/test-listItem/);
    expect(todoListItem).toBe(null);
});
