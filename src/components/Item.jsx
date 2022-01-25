import React from "react";
import { Card, Button } from 'react-bootstrap';
import '../styles.css';
import ItemCount from './ItemCount'
import Price from './Price'

const Item = ({ name, img, stock, price }) => {

    return (
        <Card border="danger" className="text-center m-3 item-card">
            <Card.Img variant="top" src={img} className="p-3 mx-auto" />
            <Card.Body className="alineacion-contenido">
                <Card.Title>{name}</Card.Title>
                <Price price={`${price}`}/>    
                {/* <Card.Text>
                    {description} / cantidad: {stock}
                </Card.Text> */}
                <ItemCount className="d-flex" stock={stock} initial="1"/>           
            </Card.Body>
        </Card>
    )
}

export default Item;
