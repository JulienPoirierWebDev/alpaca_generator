import React, { useEffect } from 'react';
import { useAlpacaContext } from '../../context/AlpacaProvider';
import { loadImage } from '../../utils/loadImage';
import Avatar from '../Avatar/Avatar';
import Ui from '../Ui/Ui';

const Alpaca = () => {
    const myCanvas = React.useRef<HTMLCanvasElement>(null);

    const {alpaca, alpacaImages} = useAlpacaContext();


    const draw = ( alpaca: any, actualAccessory?: string, style?: any) => {
        const canvas = myCanvas.current;

        let newAlpaca = {...alpaca};




        if(actualAccessory && style) {
            newAlpaca[actualAccessory] = style;
            // @ts-ignore
            newAlpacaImages[actualAccessory].src = `/${actualAccessory}/${style}.png`;
            // @ts-ignore
            console.log(newAlpacaImages[actualAccessory].src)
        }

        const imagesUrls = [
            "/backgrounds/" + newAlpaca.background + ".png",
            "/neck/" + newAlpaca.neck + ".png",
            "/hair/" + newAlpaca.hair + ".png",
            "/leg/" + newAlpaca.leg + ".png",
            "/ears/" + newAlpaca.ears + ".png",
            "/nose.png",
            "/mouth/" + newAlpaca.mouth + ".png",
            "/eyes/" + newAlpaca.eyes + ".png",
            '/accessories/' + newAlpaca.accessories + '.png'
        ];


        // @ts-ignore
        const ctx = canvas?.getContext('2d');
        if(canvas && ctx) {
            // @ts-ignore
            const canvasWidth = canvas.width;
            // @ts-ignore
            const canvasHeight = canvas.height;


            let noseImg = new Image(720,720);
            noseImg.src = "/nose.png";

            if (ctx) {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                Promise.all(imagesUrls.map(loadImage)).then((images) => {
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
        <>
            <Avatar myCanvas={myCanvas}/>
            <Ui draw={draw}/>
        </>
    );
};

export default Alpaca;
