import React from 'react';
import Button from "../Button/Button";

const Ui = () => {

    // TODO
    // create reducer ?? context for state management

    const [actualAccessory, setActualAccessory] = React.useState("hair");

    type Alpaca = {
        hair: string,
        ears: string,
        eyes: string,
        mouth: string,
        neck: string,
        leg: string,
        accessory: string,
        background: string
    }

    type AlpacaElements = "hair" | "ears" | "eyes" | "mouth" | "neck" | "leg" | "accessory" | "background";

    const [alpaca, setAlpaca] = React.useState({
        hair: "default",
        ears: "default",
        eyes: "default",
        mouth: "default",
        neck: "default",
        leg: "default",
        accessory: "earrings",
        background: "blue50"
    });

    const changeAlpaca = (alpaca:Alpaca, changedKey:AlpacaElements, changedValue:string) => {
        let newAlpaca:Alpaca = {...alpaca};
        newAlpaca[changedKey] = changedValue;

        setAlpaca(newAlpaca);
    }

    type Styles = {
        [key: string]: string[]
    }

    const accessories = ["hair","ears", "eyes", "mouth", "neck", "leg", "accessories", "background"];
    const styles:Styles= {
        hair: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],
        ears: ["default", "tilt-backward", "tilt-forward"],
        eyes: ["default", "angry", "naughty", "smart", "star"],
        mouth: ["default", "astonished", "eating", "happy", "laugh", "tongue"],
        neck: ["default", "bend-backward", "bend-forward"],
        leg: ["default", "bubble-tea", "cookie", "game-console", "tilt-backward", "tilt-forward"],
        accessories: ["earrings", "flower", "glasses", "headphone"],
        background: ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70", "green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", "yellow50", "yellow60", "yellow70"]
    };



    return (
        <div>
            <div>
                <h2>Accessorize the alpaca's</h2>
                {accessories.map((accessory) => {
                    // @ts-ignore
                    return <Button key={accessory} element={accessory} handleClick={setActualAccessory}/>
                } )}
            </div>
            <div>
                <h2>Style</h2>
                {styles[actualAccessory].map((style:string) => {
                    // @ts-ignore
                    return <Button key={style} element={style} accessory={actualAccessory} handleClick={ () => {changeAlpaca(alpaca,actualAccessory,style)}}/>
                } )}
            </div>
            <div>
                {actualAccessory}
                {Object.keys(alpaca).map((alpacaKey:string) => {
                    // @ts-ignore
                    return <div>{alpaca[alpacaKey]}</div>
                })}
            </div>
        </div>
    );
};

export default Ui;
