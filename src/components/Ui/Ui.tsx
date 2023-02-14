import React, { useContext } from 'react';
import { useAlpacaContext } from '../../context/AlpacaProvider';
import Button from "../Button/Button";

const Ui = () => {

    const alpacaContext = useAlpacaContext();

    const { accessories, changeAlpaca, alpaca, setAlpaca, actualAccessory, setActualAccessory, styles } = alpacaContext;

    return (
        <div>
            <div>
                <h2>Accessorize the alpaca's</h2>
                {accessories?.map((accessory:string) => {
                    return <Button key={accessory} element={accessory} handleClick={setActualAccessory}/>
                } )}
            </div>
            <div>
                <h2>Style</h2>
                {styles[actualAccessory].map((style:string) => {
                    return <Button key={style} element={style} handleClick={ () => {changeAlpaca(alpaca,actualAccessory,style)}}/>
                } )}
            </div>
        </div>
    );
};

export default Ui;
