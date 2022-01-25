import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css';
import { useOutletContext, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import { getProductDetail, getProductDescription } from '../services/Products'



const ItemDetailContainer = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false); 
    const [product, setProduct] = useState(null);

    useEffect(()=> {
        let mounted = true;
        setLoading(true);
        Promise.all([ getProductDetail(id), getProductDescription(id) ])
        .then(results => {
            console.log(results)
            let item = results[0]; // el item esta el el result 0 dela rray
            item.description = results[1].plain_text //donde se encuentra la descripción
            if(mounted){
                setProduct(item);
                setTimeout(()=> {
                    setLoading(false);
                }, 3000)
            }
    }) 
      return()=> mounted = false;
    }, [id]);

    return (
        <Fragment>
            <h2>Detalle de "{id}"</h2>
            {product ? <ItemDetail product={product} /> : null }
        </Fragment>
    )
}

export default ItemDetailContainer;