import './App.css';
import React, { Fragment, useState, useEffect } from "react";
import Home from './components/Home';
import Layout from './components/Layout';
import NoPage from './components/NoPage';
import Loading from './components/Loading';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout/>} />
          <Route index element={<Home/>} />
          <Route path="/product" exact element={< ItemDetailContainer />} />
          <Route path="/*" exact element={<NoPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
