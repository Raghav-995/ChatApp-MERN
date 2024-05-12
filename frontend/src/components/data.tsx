
import axios from 'axios';
import { useEffect,useState} from 'react';

export default function Data(){
    const [data, setData] = useState([]);

    var fetchChats = async () => {
     var data = await axios.get('http://localhost:5000/apis/data');
        setData(data.data);

        
    }
    useEffect(()=> {fetchChats();},[]);
    return (
        <div>
          {data.map(category => (
            <div key={category.id}>
              <h2>{category.name}</h2>
              <ul>
                {category.items.map(item => (
                  <li key={item.id}>
                    {item.itemName}
                    <ul>
                      {item.subItems.map(subItem => (
                        <li key={subItem.id}>
                          {subItem.subItemName}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
    

