import React, { useEffect } from 'react';
import {AlpacaElements, useAlpacaContext } from '../../context/AlpacaProvider';
import styles from './Avatar.module.css';

// @ts-ignore
const Avatar = ({myCanvas}) => {



    console.log('render')


        /*
    useEffect(() => {
        const canvas = myCanvas.current;
        // @ts-ignore
        const ctx = canvas.getContext('2d');

        // @ts-ignore
        const canvasWidth = canvas.width;
        // @ts-ignore
        const canvasHeight = canvas.height;


        let noseImg = new Image(720,720);
        noseImg.src = "/nose.png";

        if (ctx) {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            if(alpacaImages.background?.src) {
                ctx.drawImage(alpacaImages.background, 0, 0, canvasWidth, canvasHeight);
            }

            if(alpacaImages.neck?.src) {
                ctx.drawImage(alpacaImages.neck, 0, 0, canvasWidth, canvasHeight);
            }

            if(alpacaImages.hair?.src) {
                ctx.drawImage(alpacaImages.hair, 0, 0, canvasWidth, canvasHeight);
            }

            if(alpacaImages.leg?.src) {
                ctx.drawImage(alpacaImages.leg, 0, 0, canvasWidth, canvasHeight);
            }

            if(alpacaImages.ears?.src) {
                ctx.drawImage(alpacaImages.ears, 0, 0, canvasWidth, canvasHeight);
            }

            if(noseImg?.src) {
                ctx.drawImage(noseImg, 0, 0, canvasWidth, canvasHeight);
            }

            if(alpacaImages.mouth?.src) {
                ctx.drawImage(alpacaImages.mouth, 0, 0, canvasWidth, canvasHeight);
            }

            if(alpacaImages.eyes?.src) {
                ctx.drawImage(alpacaImages.eyes, 0, 0, canvasWidth, canvasHeight);
            }

            if(alpacaImages.accessories?.src) {
                ctx.drawImage(alpacaImages.accessories, 0, 0, canvasWidth, canvasHeight);
            }

        }
        }, [alpaca]);
        
         */

    return (
        <canvas ref={myCanvas} className={styles.avatar_container} width={720} height={720}>
        </canvas>
    );
};

export default Avatar;
