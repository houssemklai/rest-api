
import './App.css';
import AddEddit from './components/AddEddit';
import Contacts from './components/Contacts';
import Homee from './components/homee';
import Navee from './components/Navee';
import { Routes,Route} from 'react-router-dom'
import NotFound from './components/NotFound';
function App() {
  
  return (
    <div className="App">
      
<Navee/>
<Routes>
<Route path ='/' element= {<Homee/>} />
<Route path ='/contacts' element= {<Contacts/>} /> 
<Route path ='/AddEddit' element= {<AddEddit/>} />
<Route path ="*" element= {<NotFound/>} />
</Routes>
    </div>
  );
}

export default App;
