import React, { Fragment, useState } from "react";
import { Button } from 'react-bootstrap';
import { CartPlus, CartDash } from 'react-bootstrap-icons';
import '../styles.css';



const ItemCount = ({stock, initial, onAdd}) => {
    console.log(stock)
    const [itemsQty, setItemsQty] = useState(1);

    const setRealStock = (qty) => {
        if (itemsQty < stock) {
            setItemsQty(qty);
        }
    }

    const removeFromStock = (qty) => {
        if (itemsQty >  1) {
            setItemsQty(qty);
        }
    }
    return (
        <Fragment>
            <h6>{itemsQty} de {stock}</h6>
            <div className="add-dash-cart mx-auto">
                <Button onClick={() => removeFromStock(itemsQty - 1)} variant="danger btn-sm"><CartDash color="white" size={19} /></Button>
                <Button className="px-2" variant="outline-danger">Ver detalle</Button> 
                <Button onClick={() => setRealStock(itemsQty + 1)} variant="danger btn-sm"> <CartPlus color="white" size={19} /></Button>
            </div>
        </Fragment>
    )
}

export default ItemCount;