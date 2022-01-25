import React, { Fragment, useState, useEffect } from "react";
import NavBar from './NavBar';
import Title from './Title';
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import Item from './Item';
import Index from './Index';
import Footer from './Footer';
import ItemDetailContainer from './ItemDetailContainer';

const Home = () => {
    return (
        <Fragment>

            <div className="App background">
                <NavBar />
                

                <Title />

                <ItemList />

                <ItemDetailContainer />

                <Footer />

            </div>
            
        </Fragment>
    );
}

export default Home;
