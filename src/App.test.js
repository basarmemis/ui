import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';



//input element should be in the document
test('renders input element for creating todo', () => {
  render(<App />);
  const inputElement = screen.getByTestId('test-inputElement');
  expect(inputElement).toBeInTheDocument();
});


//addButton element should be in the document
test('renders button element for creating todo', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('test-addButton');
  expect(buttonElement).toBeInTheDocument();
});


//List element should not be in the document at start
test('Not Renders List Element IF There Is no Todo', () => {
  render(<App />);
  const listGroup = screen.queryByTestId('test-listGroup');
  expect(listGroup).toBeNull();
});

//List element should not be in the document at start
test('Renders Empty Div If There Is no Todo', () => {
  render(<App />);
  const emptyDiv = screen.getByTestId('test-emptyDiv');
  expect(emptyDiv).toBeInTheDocument();
});



//#region To Test This Part Of Test, Change TodoAddButton.js handleClick to test mode
//Clik on AddTodo Button Should Add a new Item To List
/*
test('Renders List Group After Adding A Todo', () => {
  render(<App />);
  const addButton = screen.getByTestId('test-addButton');
  fireEvent.click(addButton);

  const listGroup = screen.getByTestId('test-listGroup');
  expect(listGroup).toBeInTheDocument();
});
*/

//#endregion