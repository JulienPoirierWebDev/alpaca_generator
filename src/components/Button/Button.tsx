import React from 'react';
import { useAlpacaContext } from '../../context/AlpacaProvider';

import styles from './Button.module.css';

type ButtonProps = {
    element: string,
    handleClick: (...el:string[]) => void
}

const Button = ({element, handleClick} : ButtonProps) => {

    const {actualAccessory, alpaca} = useAlpacaContext();
    let isAccessory = actualAccessory === element;
    // @ts-ignore
    let isStyle = alpaca[actualAccessory] === element;

    let otherStyle = isAccessory || isStyle ? styles.active : null;
    return (
        <>
            <button className={styles.button + " " + otherStyle} onClick={() => handleClick(element)}>{element}</button>
        </>
    );
};

export default Button;
