import './App.css';
import { Container } from 'react-bootstrap';
import Input from "./components/Input";
import DisplayTasks from './components/DisplayTasks';

// min-vh-100 d-flex justify-content-center align-items-center

function App() {
  return (
    <Container className="d-flex flex-column text-center align-items-center mt-5 border border-dark gap-3">
      <h1 className='main-heading'>Shawaz's To Do List</h1>
      <Input /> 
      <DisplayTasks />
    </Container>
  );
}

export default App;
