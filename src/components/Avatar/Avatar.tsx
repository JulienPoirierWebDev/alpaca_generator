import React, { useEffect } from 'react';
import { useAlpacaContext } from '../../context/AlpacaProvider';
import styles from './Avatar.module.css';

const Avatar = () => {

    const {alpaca} = useAlpacaContext();

    const myCanvas = React.useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = myCanvas.current;
        // @ts-ignore
        const ctx = canvas.getContext('2d');

        // @ts-ignore
        const canvasWidth = canvas.width;
        // @ts-ignore
        const canvasHeight = canvas.height;
        let hairImg = new Image(720,720);
        hairImg.src = "/hair/" + alpaca.hair + ".png";

        let earsImg = new Image(720,720);
        earsImg.src = "/ears/" + alpaca.ears + ".png";

        let eyesImg = new Image(720,720);
        eyesImg.src = "/eyes/" + alpaca.eyes + ".png";

        let mouthImg = new Image(720,720);
        mouthImg.src = "/mouth/" + alpaca.mouth + ".png";

        let neckImg = new Image(720,720);
        neckImg.src = "/neck/" + alpaca.neck + ".png";

        let legImg = new Image(720,720);
        legImg.src = "/leg/" + alpaca.leg + ".png";

        let accessoryImg = new Image(720,720);
        accessoryImg.src = "/accessories/" + alpaca.accessory + ".png";

        let backgroundImg = new Image(720,720);
        backgroundImg.src = "/backgrounds/" + alpaca.background + ".png";

        let noseImg = new Image(720,720);
        noseImg.src = "/nose.png";

        if (ctx) {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(neckImg, 0, 0, canvasWidth, canvasHeight);

            ctx.drawImage(hairImg, 0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(eyesImg, 0, 0, canvasWidth, canvasHeight);



            ctx.drawImage(legImg, 0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(earsImg, 0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(noseImg, 0, 0, canvasWidth, canvasHeight);

            ctx.drawImage(mouthImg, 0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(eyesImg, 0, 0, canvasWidth, canvasHeight);


            ctx.drawImage(accessoryImg, 0, 0, canvasWidth, canvasHeight);



        }

        console.log(alpaca);
    }, [alpaca]);

    return (
        <canvas ref={myCanvas} className={styles.avatar_container} width={720} height={720}>
        </canvas>
    );
};

export default Avatar;
