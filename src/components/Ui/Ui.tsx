import React from 'react';
import Button from "../Button/Button";

const Ui = () => {

    // TODO
    // create reducer ?? context for state management

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

    const [actualAccessory, setActualAccessory] = React.useState("hair");


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
                    return <Button key={style} element={style} handleClick={function () {console.log("clic")}}/>
                } )}
            </div>
        </div>
    );
};

export default Ui;
