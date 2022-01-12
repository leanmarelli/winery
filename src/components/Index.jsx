import React, { Fragment } from "react";
import { Container } from 'react-bootstrap'; 

import '../styles.css';

const Index = () => {

    return (
        <Fragment>
            <Container>
            <div className="index-container">
                <h1 className="text-light">Crypto Winery</h1>
            </div>
            </Container>
        </Fragment>
    )
}

export default Index