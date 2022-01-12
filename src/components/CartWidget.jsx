import React, { Fragment } from "react";
import { Cart } from 'react-bootstrap-icons';
import '../styles.css';

const CartWidget = () => {

    return (
        <Fragment>
            <Cart color="white" className="me-3" size={22} />
        </Fragment>
    )
}

export default CartWidget