import './App.css';
import { CobaProvider } from './context/CobaContext';
import { TodoProvider } from './context/TodoContext';

//Import component
import TodoWrap from './components/TodoWrap';

const App = () => {
  return (
    
    <TodoProvider>
      <div>
        <TodoWrap />
      </div>
    </TodoProvider>
    
  );
}

export default App;
