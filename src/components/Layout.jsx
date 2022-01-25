import React, { Fragment, useState, useEffect } from "react";
import NavBar from './NavBar';
import Loading from './Loading';

const Layout = () => {

    const [loading, setLoading] = useState(false);

    return (
        <Fragment>
            <NavBar />
            {/* <Outlet context={[loading, setLoading]}/>
            {loading ? <Loading /> : null} */}
        </Fragment>
    )
}

export default Layout;