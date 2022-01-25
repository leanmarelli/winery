import React, { Fragment, useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap'; 

const Loading = ({ price }) => {

    return (
        <Fragment>
            <Spinner animation="grow" variant="danger" />
        </Fragment>
    )
}

export default Loading;