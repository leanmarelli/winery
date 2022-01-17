import React, { Fragment, useState, useEffect } from "react";
import { Card, Container, CardGroup } from 'react-bootstrap';
import '../styles.css';
import ItemCount from './ItemCount'



const ItemList = () => {

    const [itemsQty, setItemsQty] = useState(0);

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
            <Container>
                <CardGroup>
                    <Card border="danger" className="text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://luigiboscaar.vteximg.com.br/arquivos/ids/156755-650-650/200928-Luigi_Bosca-T1-Malbec-CAM2.png?v=637588102544070000" />
                        <Card.Body>
                            <Card.Title>Vino Luigi Bosca</Card.Title>
                            <Card.Text>
                                Tinto Malbec 2019
                            </Card.Text>
                            <ItemCount />
                        </Card.Body>
                    </Card>
                    <Card border="danger" className="text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://luigiboscaar.vteximg.com.br/arquivos/ids/156755-650-650/200928-Luigi_Bosca-T1-Malbec-CAM2.png?v=637588102544070000" />
                        <Card.Body>
                            <Card.Title>Vino Luigi Bosca</Card.Title>
                            <Card.Text>
                                Tinto Malbec 2019
                            </Card.Text>
                            <ItemCount />
                        </Card.Body>
                    </Card>
                    <Card border="danger" className="text-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://luigiboscaar.vteximg.com.br/arquivos/ids/156755-650-650/200928-Luigi_Bosca-T1-Malbec-CAM2.png?v=637588102544070000" />
                        <Card.Body>
                            <Card.Title>Vino Luigi Bosca</Card.Title>
                            <Card.Text>
                                Tinto Malbec 2019
                            </Card.Text>
                            <ItemCount />
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </Fragment>
    )
}

export default ItemList;