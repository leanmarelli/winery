import React from "react";
import { Button } from 'react-bootstrap';

const Title = () => {

    return (
        <div>
            <div className="index-container d-flex justify-content-center align-items-center">
                <div className="index-content">
                    <h1 className="text-light jacques">Compra tus vinos con Crypto</h1>
                    <h4 className="text-light text-end jacques">-Life is too short to drink bad wines</h4>
                    <div className="d-flex justify-content-center pt-2">
                        <Button variant="outline-danger" className="d-flex btn justiy-content-center">Ver vinos</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Title;