import React from 'react';

import Aux from '../../../hoc/Aux';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translatey(0)' : 'translatey(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    );

}

export default Modal;