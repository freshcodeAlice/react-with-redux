import './App.css';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
const App = props => {
  return (
    <>
      <Counter />
      {/* <TaskForm />
      <TaskList /> */}
      <UserForm />
      <UsersList />
    </>
  );
};

export default App;
