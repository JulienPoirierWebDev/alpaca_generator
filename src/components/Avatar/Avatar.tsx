import React, { useEffect } from 'react';
import {AlpacaElements, useAlpacaContext } from '../../context/AlpacaProvider';
import styles from './Avatar.module.css';

// @ts-ignore
const Avatar = ({myCanvas}) => {
    
    return (
        <canvas ref={myCanvas} className={styles.avatar_container} width={720} height={720}>
        </canvas>
    );
};

export default Avatar;
