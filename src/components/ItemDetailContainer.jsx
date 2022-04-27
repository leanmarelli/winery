import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css';
import { useOutletContext, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import { getProductDetail, getProductDescription } from '../services/Products'



const ItemDetailContainer = () => {

    /* const { id } = useParams(); */
    const [loading, setLoading] = useOutletContext(false); 

    const [product, setProducts] = useState([
        { id: 1, name: "Luigi Bosca", description: "Vino tinto", stock: 15, price: 140, img: "https://luigiboscaar.vteximg.com.br/arquivos/ids/156755-650-650/200928-Luigi_Bosca-T1-Malbec-CAM2.png?v=637588102544070000" },
        { id: 2, name: "Felipe Rutini", description: "Vino tinto", stock: 1, price: 150, img: "https://images.vivino.com/thumbs/hljzKlrcQLW9kiYwechDbQ_pb_600x600.png" },
        { id: 3, name: "La Linda", description: "Vino blanco", stock: 3, price: 94, img: "https://www.jordanwines.com/wp-content/uploads/2018/05/Jordan-Unoaked-Chardonnay-NV.png" },
        { id: 4, name: "Luigi Bosca", description: "Vino tinto", stock: 6, price: 290, img: "https://luigiboscaar.vteximg.com.br/arquivos/ids/156755-650-650/200928-Luigi_Bosca-T1-Malbec-CAM2.png?v=63758810254407000" },
        { id: 5, name: "Felipe Rutini", description: "Vino tinto", stock: 8, price: 89, img: "https://images.vivino.com/thumbs/hljzKlrcQLW9kiYwechDbQ_pb_600x600.png" },
        { id: 6, name: "Trumpeter", description: "Vino tinto", stock: 3, price: 214, img: "https://www.jordanwines.com/wp-content/uploads/2018/05/Jordan-Unoaked-Chardonnay-NV.png" },
        { id: 7, name: "Luigi Bosca", description: "Vino tinto", stock: 5, price: 243, img: "https://luigiboscaar.vteximg.com.br/arquivos/ids/156755-650-650/200928-Luigi_Bosca-T1-Malbec-CAM2.png?v=63758810254407000" },
        { id: 8, name: "Felipe Rutini", description: "Vino tinto", stock: 2, price: 212, img: "https://images.vivino.com/thumbs/hljzKlrcQLW9kiYwechDbQ_pb_600x600.png" },
        { id: 9, name: "Cosecha tardia", description: "Vino blanco", stock: 4, price: 999, img: "https://www.jordanwines.com/wp-content/uploads/2018/05/Jordan-Unoaked-Chardonnay-NV.png" }
    ]);

    return (
        <Fragment>
            <Col>
                <h2 className="text-light text-center my-3">Detalle de "{product.name}"</h2>
                {product ? <ItemDetail product={product.id}/> : null}
            </Col>
        </Fragment>
    )
}

export default ItemDetailContainer;