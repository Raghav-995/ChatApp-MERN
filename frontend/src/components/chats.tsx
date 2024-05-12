
import axios from 'axios';
import { useEffect,useState} from 'react';

export default function Chats(){
    const [chats, setChats] = useState([]);

    var fetchChats = async () => {
     var response = await axios.get('http://localhost:5000/apis/chat');
        setChats(response.data);
    }
    useEffect(()=> {fetchChats();},[]);
    return <div>{chats.map((chat)=> <div><h2>{chat.chatName }</h2><h3>{chat.users.map((user)=>user.email)}</h3></div>)}</div>;
}

