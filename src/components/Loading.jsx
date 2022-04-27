import React, { Fragment, useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap'; 

const Loading = ({ price }) => {

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <iframe src="https://embed.lottiefiles.com/animation/77415"></iframe>
            </div>
        </Fragment>
    )
}

export default Loading;