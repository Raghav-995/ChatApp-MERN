import {Routes,Route} from 'react-router-dom';
import App from '../App';
import Chats from '../components/chats';
import Data from '../components/data';

const  Router = ()=>{
return (
<Routes>
    <Route path='/' Component={App}/><Route path='/chat' Component={Chats}/>
    <Route path='/data' Component={Data}></Route>
    
    
    
</Routes>
)
}

export default Router;