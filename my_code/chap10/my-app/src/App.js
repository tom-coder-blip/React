import logo from './logo.svg';
import './App.css';
import CounterButton from './CounterButton';
import GreetingCard from './GreetingCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterButton label="Click Me" />
        <GreetingCard name="Bruce Lee" />
      </header>
    </div>
  );
}

export default App;

