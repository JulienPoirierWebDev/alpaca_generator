import React from 'react';
import { useAlpacaContext } from '../../context/AlpacaProvider';

import styles from './Button.module.css';

type ButtonProps = {
    element: string,
    handleClick: (...el:string[]) => void ,
    id?: string,
}

const Button = ({element, handleClick, id} : ButtonProps) => {

    const {actualAccessory, alpaca} = useAlpacaContext();
    let isAccessory = actualAccessory === element;
    // @ts-ignore
    let isStyle = alpaca[actualAccessory] === element;

    let otherStyle = isAccessory || isStyle ? styles.active : null;
    return (
        <>
            <button id={id} className={styles.button + " " + otherStyle} onClick={() => handleClick(element)}>{element}</button>
        </>
    );
};

export default Button;
