import React, { Fragment } from "react";
import { Cart } from 'react-bootstrap-icons';
import '../styles.css';

const CartWidget = () => {

    return (
        <Fragment>
            <Cart className="me-3 texto-primario" size={22} />
        </Fragment>
    )
}

export default CartWidget