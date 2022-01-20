import React, { Fragment, useState, useEffect } from "react";
import { Container, CardGroup, Row, Col } from 'react-bootstrap';
import '../styles.css';
import Item from './Item'



const ItemList = () => {

    const [products, setProducts] = useState([
    { name: "Luigi Bosca", description: "Vino tinto", img: "https://luigiboscaar.vteximg.com.br/arquivos/ids/156755-650-650/200928-Luigi_Bosca-T1-Malbec-CAM2.png?v=637588102544070000"},
    { name: "Felipe Rutini", description: "Vino tinto", img: "https://images.vivino.com/thumbs/hljzKlrcQLW9kiYwechDbQ_pb_600x600.png"},
    { name: "Jordan", description: "Vino blanco", img: "https://www.jordanwines.com/wp-content/uploads/2018/05/Jordan-Unoaked-Chardonnay-NV.png"},
    { name: "Luigi Bosca", description: "Vino tinto", img: "https://luigiboscaar.vteximg.com.br/arquivos/ids/156755-650-650/200928-Luigi_Bosca-T1-Malbec-CAM2.png?v=63758810254407000" },
    { name: "Felipe Rutini", description: "Vino tinto", img: "https://images.vivino.com/thumbs/hljzKlrcQLW9kiYwechDbQ_pb_600x600.png" },
    { name: "Jordan", description: "Vino blanco", img: "https://www.jordanwines.com/wp-content/uploads/2018/05/Jordan-Unoaked-Chardonnay-NV.png" }
  ]);

    return (
        <Fragment>
            <h1 className="text-center">Nuestros vinos</h1>
            <h5 className="text-center">Los mejores vinos seleccionados para pagar con Cryptodivisas</h5>
            <br />
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {products.map((product) => (
                        <Col>
                            <Item name={product.name} description={product.description} img={product.img} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    )
}

export default ItemList;