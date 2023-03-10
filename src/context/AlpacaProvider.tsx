import React, { createContext, ComponentPropsWithoutRef } from 'react';

type Alpaca = {
    hair: Styles["hair"][number],
    ears: Styles["ears"][number],
    eyes: Styles["eyes"][number],
    mouth: Styles["mouth"][number],
    neck: Styles["neck"][number],
    leg: Styles["leg"][number],
    accessories: Styles["accessories"][number],
    background: Styles["background"][number],
}

export type AlpacaElements = "hair" | "ears" | "eyes" | "mouth" | "neck" | "leg" | "accessories" | "background";

type Styles = {
    [key: string]: string[]
}

type AlpacaContextType = {
    actualAccessory: string,
    setActualAccessory: (el:string) => string,
    alpaca: Alpaca,
    setAlpaca: (alpaca:Alpaca) => Alpaca,
    changeAlpaca: (alpaca:Alpaca, changedKey:string, changedValue:string) => Alpaca,
    alpacaElements: string[],
    styles: Styles,
};

const AlpacaContext = createContext({} as AlpacaContextType);

type Props =  ComponentPropsWithoutRef<'div'>;

const useAlpacaContext = () => {
    const context = React.useContext(AlpacaContext);
    if (context === undefined) {
        throw new Error('useAlpacaContext must be used within a AlpacaProvider');
    }
    return context;
}

const AlpacaProvider = ({children}:Props) => {

    const [actualAccessory, setActualAccessory] = React.useState("hair");

    const [alpaca, setAlpaca] = React.useState({
        hair: "default",
        ears: "default",
        eyes: "default",
        mouth: "default",
        neck: "default",
        leg: "default",
        accessories: "earings",
        background: "blue50"
    });

    const changeAlpaca = (alpaca:Alpaca, changedKey:AlpacaElements, changedValue:string) => {
        let newAlpaca:Alpaca = {...alpaca};
        newAlpaca[changedKey] = changedValue;
        setAlpaca(newAlpaca);
    }

    const alpacaElements = ["hair","ears", "eyes", "mouth", "neck", "leg", "accessories", "background"];
    
    const styles:Styles= {
        hair: ["default", "bang", "curls", "elegant", "fancy", "short"],
        ears: ["default", "tilt-backward", "tilt-forward"],
        eyes: ["default", "angry", "naughty", "smart", "star"],
        mouth: ["default", "astonished", "eating", "laugh", "tongue"],
        neck: ["default", "bend-backward", "bend-forward"],
        leg: ["default", "bubble-tea", "cookie", "game-console", "tilt-backward", "tilt-forward"],
        accessories: ["earings", "flower", "glasses", "headphone"],
        background: ["transparent", "blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70", "green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", "yellow50", "yellow60", "yellow70"]
    };

    const values = { actualAccessory, setActualAccessory, alpaca, setAlpaca, changeAlpaca, alpacaElements, styles };

    return (
        // @ts-ignore
        <AlpacaContext.Provider value={values} >
            {children}
        </AlpacaContext.Provider>
    );
};

export default AlpacaProvider;

export { useAlpacaContext };
