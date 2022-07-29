import {ChatEngine} from 'react-chat-engine';

import './App.css';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="27af66fe-8d56-43e1-8b62-4f772471c539"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;