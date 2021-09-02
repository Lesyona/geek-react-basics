import './App.css';
import Message from './components/Message/';
import { useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [inputTextMessage, setInputTextMessage] = useState('');

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === 'HUMAN') {
      setTimeout(() => {
        setMessageList((messageList) => [...messageList, { text: 'I am bot', author: 'BOT' }]);
      }, 1500)
    }
    console.log('Added message');
  }, [messageList]);

  const getInputTextMessage = (event) => {
    setInputTextMessage(event.target.value);
  }

  function sendMessage(event) {
    event.preventDefault();
    setMessageList(messageList => [...messageList, { text: inputTextMessage, author: 'HUMAN' }])
  }

  return (
    <div className="App">

      <form action="/" onSubmit={sendMessage}>
        <input className="form-input" type="text" placeholder="Your message" value={inputTextMessage} onChange={getInputTextMessage} />
        <br />
        <button className="form-button">Send message</button>
      </form>

      {messageList.map((message, index) => <Message key={index} text={message.text} author={message.author} />)}
    </div>
  );
}

export default App;
