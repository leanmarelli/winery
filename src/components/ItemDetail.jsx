import React from "react";
import { Card } from 'react-bootstrap';
import '../styles.css';
import ItemCount from './ItemCount'
import Price from './Price'

const ItemDetail = ({ name, img, stock, price, description }) => {

    return (
        <Card border="danger" className="text-center m-3 item-card">
            <Card.Img variant="top" src={img} className="p-3 mx-auto" />
            <Card.Body className="alineacion-contenido">
                <Card.Title>{name}</Card.Title>
                <Price price={`${price}`} />
                <Card.Text>
                    Descripcion: {description}
                </Card.Text>
                <Card.Text>
                    Cantidad de unidades: {stock}
                </Card.Text>
                <ItemCount className="d-flex" stock={stock} initial="1" />
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;
