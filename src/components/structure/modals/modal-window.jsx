import './modal-window.components.scss';
import Images from "../../common/local-images.jsx";
import React, { useState } from 'react';

const ModalWindow = ({ isModalShow, handleChange, width = "average", content = "" }) => {
    let availableWidth = [ 'small', 'average', 'big' ];

    let windowStyle = "modal-window " + width;
    if (!availableWidth.includes(width))
        windowStyle = "modal-window average";

    function modalHandler () {
        handleChange(!isModalShow);
    }

    return (
        <div className={ isModalShow ? "modal": "modal closed" }>
            <div className={windowStyle}>
                <div className='modal-window-navigation'>
                    <img src={Images.Close} className='modal-window-close' onClick={modalHandler}/>
                </div>
                <div className='modal-window-content'>
                    {content}
                </div>
            </div>
        </div>        
    );
}

export default ModalWindow;