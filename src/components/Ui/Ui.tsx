import React, { useContext } from 'react';
import { useAlpacaContext } from '../../context/AlpacaProvider';
import Button from "../Button/Button";

// @ts-ignore
const Ui = ({draw}) => {

    const alpacaContext = useAlpacaContext();

    const { alpacaElements, changeAlpaca, alpaca, setAlpaca, actualAccessory, setActualAccessory, styles } = alpacaContext;

    const handleChange = (style: string) => {
        changeAlpaca(alpaca,actualAccessory,style);
        draw(alpaca,actualAccessory,style);
    }
    return (
        <div>
            <div>
                <h2>Accessorize the alpaca's</h2>
                {alpacaElements?.map((accessory:string) => {
                    return <Button key={accessory} element={accessory} handleClick={setActualAccessory}/>
                } )}
            </div>
            <div>
                <h2>Style</h2>
                {styles[actualAccessory].map((style:string) => {
                    return <Button key={style} element={style} handleClick={ () => handleChange(style)}/>
                } )}
            </div>
        </div>
    );
};

export default Ui;
