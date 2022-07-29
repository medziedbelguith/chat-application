
import axios from 'axios';
import { useState } from 'react';
const LoginForm=() =>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const handleSubmit=async(e)=>{
     e.preventDefault();
     const authObject={'Project-ID':"27af66fe-8d56-43e1-8b62-4f772471c539",'User-Name':username,'User-Secret':password};
     try {
      await  axios.get('https://api.chatengine.io/chats', { headers: authObject })
      localStorage.setItem('username',username);
      localStorage.setItem('password',password);
      window.location.reload()
     } catch (error) {
       setError('Oops,incorrect credentials.')
     }
    }
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
         <div align="center">
         <button type="submit" className="button">
           <span>Start Chatting</span>
         </button>
         
         </div>
         <div align="center">
         <h2 className="error" style={{alignText:'center'}}>{error}</h2>
         </div>
        </form>
      </div>

    </div>
  )
}
export default LoginForm