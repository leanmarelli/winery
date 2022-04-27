import React, { Fragment, useState, useEffect } from "react";
import NavBar from './NavBar';
import Loading from './Loading';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../styles.css';


const Layout = () => {

    const [loading, setLoading] = useState(false);

    return (
        <Fragment>
            <div className="background">
                <NavBar />
                <Outlet context={[loading, setLoading]}/>
                {loading ? <Loading /> : null}
            <Footer />
            </div>
        </Fragment>
    )
}

export default Layout;