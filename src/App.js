import './App.css';
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
const App = props => {
  return (
    <>
      <Counter />
      <TaskForm />
      <TaskList />
    </>
  );
};

export default App;
