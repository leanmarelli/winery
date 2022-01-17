
import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title'; 
import ItemList from './components/ItemList'; 
import Index from './components/Index';
import { CardGroup } from 'react-bootstrap'; 

const App = () => {
/*   const [name, setName] = useState("Lean"); */
  return (
    <div className="App background">
      <NavBar />
      
      <Title />

      <Index />

      <ItemList />
      
      
    </div>
  );
}

export default App;
