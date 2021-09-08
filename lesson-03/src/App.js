import './App.css';
import Message from './components/Message/';
import Form from './components/Form/';
import ChatList from './components/ChatList/';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

function App() {
  const initialChats = [
    { name: 'Chat 1', id: 'chat-1' },
    { name: 'Chat 2', id: 'chat-2' },
  ];
  const [messageList, setMessageList] = useState([]);
  const [chats, setChats] = useState(initialChats);

  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1]?.author === 'HUMAN') {
      timeout = setTimeout(() => {
        setMessageList((messageList) => [...messageList, { text: 'I am bot', author: 'BOT', id: `mess-${Date.now()}` }]);
      }, 1500)
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  return (
    <div className="App">
      <Form setMessageList={setMessageList} />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ChatList chats={chats}/>
        </Grid>
        <Grid item xs={12} md={6}>
          {messageList.map((message, index) => <Message key={message.id} text={message.text} author={message.author} />)}
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
