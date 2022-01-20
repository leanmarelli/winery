
import './App.css';
import React, { Fragment, useState, useEffect } from "react";
import NavBar from './components/NavBar';
import Title from './components/Title'; 
import ItemList from './components/ItemList'; 
import Item from './components/Item'; 
import Index from './components/Index';
import Footer from './components/Footer';
import { getPricesFromBlockchain } from './services/Prices.js';

const App = () => {
/*   const [name, setName] = useState("Lean"); */

  return (
    <div className="App background">
      <NavBar />
      
      <Title />

      {/* <Index /> */}

      <ItemList />
    
      <Footer />
      
    </div>
  );
}

export default App;
