
import axios from 'axios';
import { useEffect,useState} from 'react';
import './index.css'

interface Data{
  id: String,
  name: String,
  items: {id: String, itemName: String , subItems: {id: String, subItemName: String}[]}[]
}

export default function fetchData(){
    const [data, setData] = useState<Data[]>([]);

    var fetchChats = async () => {
     var data = await axios.get<Data[]>('http://localhost:5000/apis/data');
        setData(data.data);

        
    }
    useEffect(()=> {fetchChats();},[]);
    return (
        <div className="text-xl font-medium text-black bg-green-400">
          {data.map((category,index) => (
            <div key={index}>
              <h2>{category.name}</h2>
              <ul>
                {category.items.map((item, index) => (
                  <li key={index}>
                    {item.itemName}
                    <ul>
                      {item.subItems.map((subItem,index) => (
                        <li key={index}>
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
    

