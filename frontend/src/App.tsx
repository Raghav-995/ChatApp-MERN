import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Vite from './components/vite';
import Chats from './components/chats';
import fetchData from './components/data';


const  App = ()=>{
return (
    <BrowserRouter>
<Routes>
    <Route path='/'/>
    <Route path='/vite' Component={Vite}/><Route path='/chat' Component={Chats}/>
    <Route path='/data' Component={fetchData}></Route>
    </Routes>  
    </BrowserRouter>
)
}

export default App;