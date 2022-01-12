
import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title'; 
import ItemList from './components/ItemList'; 
import Index from './components/Index';

const App = () => {
/*   const [name, setName] = useState("Lean"); */
  return (
    <div className="App background">
      <NavBar />
      {/* <Title titulo="Soy un titulo" />
      <Title titulo="Soy otro titulo" /> */}
      <Title />

      <Index />

{/*       <div onClick={()=>setName("Leo")}>
        <h1>{name}</h1>
      </div> */}

      <ItemList />
      
    </div>
  );
}

export default App;
