import React, { Fragment } from "react";
import '../styles.css';


const ItemCount = ({ price }) => {

    return (
        <Fragment>
            <div className="mx-auto">
                <h6>${price}</h6>
            </div>
        </Fragment>
    )
}

export default ItemCount;