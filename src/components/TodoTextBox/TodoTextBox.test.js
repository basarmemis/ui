import { render, screen } from '@testing-library/react';
import TodoTextBox from './TodoTextBox';

//Renders New Todo Text Box Element
test('Renders New Todo Text Box Element', () => {
    render(<TodoTextBox />);
    const inputElement = screen.getByTestId('test-inputElement');
    expect(inputElement).toBeInTheDocument();
});


//Renders the Header Element With Name Todos List
test('Renders New Todo Text Box Element With Placeholder Named "Enter a New Todo"', () => {
    render(<TodoTextBox />);
    const inputElement = screen.getByTestId('test-inputElement');
    expect((inputElement).getAttribute("placeholder")).toBe("Enter a New Todo");
});
