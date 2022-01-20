import React, { Fragment, useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { CartPlus, CartDash } from 'react-bootstrap-icons';
import '../styles.css';


const ItemCount = ({stock, initial, onAdd}) => {

    const [itemsQty, setItemsQty] = useState(1);

    //usa el ciclo de vida de la app
    useEffect(() => {
        console.log("Cambie el item de cantidad", "ahora tengo", itemsQty)
        console.log("Cambio en la fecha", new Date())

        //lo que se ejecuta cuando se desmonta el componente
        return () => {
            console.log("se desmonto el componente")
        }
    }, [itemsQty])
    

    return (
        <Fragment>
            <div className="add-dash-cart mx-auto">
                <Button onClick={() => setItemsQty(itemsQty - 1)} variant="danger"><CartDash color="white" size={19} /></Button>
                <h4>{itemsQty}</h4>
                <Button onClick={() => setItemsQty(itemsQty + 1)} variant="danger"> <CartPlus color="white" size={19} /></Button>
            </div>
        </Fragment>
    )
}

export default ItemCount;