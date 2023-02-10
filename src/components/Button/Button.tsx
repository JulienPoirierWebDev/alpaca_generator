import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    element: string,
    handleClick: (el:string) => string
}

const Button = ({element, handleClick} : ButtonProps) => {
    return (
        <>
            <button className={styles.button} onClick={() => handleClick(element)}>{element}</button>
        </>
    );
};

export default Button;
