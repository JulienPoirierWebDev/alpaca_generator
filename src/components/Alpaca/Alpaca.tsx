import React, { useEffect } from 'react';
import { useAlpacaContext } from '../../context/AlpacaProvider';
import { loadImage } from '../../utils/loadImage';
import Avatar from '../Avatar/Avatar';
import Ui from '../Ui/Ui';
import styles from './Alpaca.module.css';

const Alpaca = () => {
    const myCanvas = React.useRef<HTMLCanvasElement>(null);

    const {alpaca} = useAlpacaContext();


    const draw = ( alpaca: any, actualAccessory?: string, style?: any) => {
        const canvas = myCanvas.current;

        
        const imagesUrls = [
            "/backgrounds/" + alpaca.background + ".png",
            "/neck/" + alpaca.neck + ".png",
            "/hair/" + alpaca.hair + ".png",
            "/leg/" + alpaca.leg + ".png",
            "/ears/" + alpaca.ears + ".png",
            "/nose.png",
            "/mouth/" + alpaca.mouth + ".png",
            "/eyes/" + alpaca.eyes + ".png",
            '/accessories/' + alpaca.accessories + '.png'
        ];

    
        const ctx = canvas?.getContext('2d');
        if(canvas && ctx) {
            // @ts-ignore
            const canvasWidth = canvas.width;
            // @ts-ignore
            const canvasHeight = canvas.height;


            let noseImg = new Image(720,720);
            noseImg.src = "/nose.png";

            if (ctx) {
                Promise.all(imagesUrls.map(loadImage)).then((images) => {
                    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

                    // @ts-ignore
                    images.forEach((image:HTMLImageElement) => {
                        ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
                    });
                } );
                }

        }
    }

    useEffect(() => {
        draw(alpaca);

    }, [alpaca])

    return (
        <div className={styles.alpaca_container}>
            <Avatar myCanvas={myCanvas}/>
            <Ui draw={draw}/>
        </div>
    );
};

export default Alpaca;
