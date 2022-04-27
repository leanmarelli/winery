import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css';
import Item from './Item';
import Loading from './Loading';
import { getProductsFromCategory } from '../services/Products';
import { useOutletContext } from 'react-router-dom';


const ItemList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useOutletContext();

    return (
        <Fragment>
            <h1 className="text-center">Nuestros vinos</h1>
            <h5 className="text-center">Los mejores vinos seleccionados para pagar con Cryptodivisas</h5>
            <br />
            <Container>
                {loading ? <Loading /> : null}
                <Row xs={1} md={4} className="g-4">
                    {products.map((product) => (
                        <Col>
                            <Item stock={product.sold_quantity} name={product.title} description={product.description} img={product.thumbnail} price={product.price} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    )
}

export default ItemList;