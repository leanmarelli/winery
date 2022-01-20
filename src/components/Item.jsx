import React from "react";
import { Card, Container, CardGroup } from 'react-bootstrap';
import '../styles.css';
import ItemCount from './ItemCount'

const Item = ({ name, description, img }) => {

    return (
        <Card border="danger" className="text-center m-3">
            <Card.Img variant="top" src={img} style={{ width: '20rem', height: '20rem' }} className="p-3 mx-auto" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <ItemCount stock="5" initial="1"/>
            </Card.Body>
        </Card>
    )
}

export default Item;
