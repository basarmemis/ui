import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import './App.css';
import TodoTextBox from './components/TodoTextBox/TodoTextBox';
import TodoAddButton from './components/TodoAddButton/TodoAddButton';
import TodosList from './components/TodosList/TodosList';
import { TodosAPI } from './api/todos';

const api = new TodosAPI(process.env.REACT_APP_API_BASE_URL);

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //#region For Test Purposes

  //#endregion

  useEffect(() => {
    api.getAll()
      .then(response => setTodos(response));
  }, [setTodos]);

  return (
    <Container>
      <Row>
        <Row className='row-style'>
          <Col style={{ textAlign: "center", marginTop: "50px" }}>
            <Header />
          </Col>
        </Row>
        <Row className='row-style'>
          <Col lg={10} md={8} sm={7} xs={6}>
            <TodoTextBox
              setInput={setInput}
              input={input}
            />
          </Col>
          <Col lg={2} md={4} sm={5} xs={6}>
            <TodoAddButton
              todos={todos}
              setTodos={setTodos}
              input={input}
              setInput={setInput}
            />
          </Col>
        </Row>
        <Row className='row-style'>
          <Col>
            {todos.length > 0 ?
              <TodosList
                todos={todos}
                setTodos={setTodos}
              /> : <div data-testid="test-emptyDiv"></div>}
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
