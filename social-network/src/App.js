import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

const name = 'Петя';

function App() {
  return (
    <div className="App">
      <Message name={name} />
    </div>
  );
}

export default App;
