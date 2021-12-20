import { render, screen } from '@testing-library/react';
import Header from './Header';

//Renders the Header Element
test('renders h1 element', () => {
    render(<Header />);
    const h1Element = screen.getByTestId('test-H1');
    expect(h1Element).toBeInTheDocument();
});


//Renders the Header Element With Name Todos List
test('renders h1 element with name Todos List', () => {
    render(<Header />);
    const h1Element = screen.getByTestId('test-H1');
    expect(h1Element).toHaveTextContent("Todos List");
});
