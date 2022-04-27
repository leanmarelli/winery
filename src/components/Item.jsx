import React from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import '../styles.css';
import ItemCount from './ItemCount'
import Price from './Price'

const Item = ({ product }) => {

    const {id, name, img, stock, price, description} = product;

    const navigate = useNavigate()

    const goToProduct = () => {
        navigate(`/product/${id}`)
    }
    
    return (
        <Card border="danger" className="text-center m-3 item-card">
            <Card.Img variant="top" src={img} className="p-3 mx-auto" />
            <Card.Body className="alineacion-contenido">
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Price price={`${price}`}/>    
                <ItemCount className="d-flex" stock={stock} initial="1"/>           
            </Card.Body>
            <Button onClick={() => goToProduct()} className="px-2" variant="outline-danger">Ver detalle</Button>
        </Card>
    )
}

export default Item;
