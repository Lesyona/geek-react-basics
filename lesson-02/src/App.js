import './App.css';
import Message from './components/Message/';
import Form from './components/Form/';
import { useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === 'HUMAN') {
      setTimeout(() => {
        setMessageList((messageList) => [...messageList, { text: 'I am bot', author: 'BOT' }]);
      }, 1500)
    }
  }, [messageList]);

  return (
    <div className="App">
      <Form setMessageList={setMessageList} />

      {messageList.map((message, index) => <Message key={index} text={message.text} author={message.author} />)}
    </div>
  );
}

export default App;
