
import axios from 'axios';
import { useEffect,useState} from 'react';

interface Chat{
    _id : String,
    users: {name: String, email: String}[],
    chatName: String,
    key: String,
}

const Chats = ()=> {
    const [chats, setChats] = useState<Chat[]>([]);

    var fetchChats = async () => {
     var response = await axios.get<Chat[]>('http://localhost:5000/apis/chat');
        setChats(response.data);
    }
    useEffect(()=> {fetchChats();},[]);
     return (
        <div>
          <h2>Chat List</h2>
          <ul>
            {chats.map(chat => (
              <li key = {chat._id} > {/* Ensure chat._id is a string or can be converted to a string */}
                <strong>{chat.chatName}</strong> - {chat.users.map(user => user.email).join(', ')}
              </li>
            ))}
          </ul>
        </div>
      );
    
}

export default Chats;