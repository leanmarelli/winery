import React, { Fragment, useState, useEffect } from "react";
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

            <div className="App">
                <Title />

                <ItemList />
            </div>
            
        </Fragment>
    );
}

export default Home;
