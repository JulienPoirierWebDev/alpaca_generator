import React, { createContext, ComponentPropsWithoutRef, ProviderProps, useEffect } from 'react';

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

type AlpacaImages = {
    hair: HTMLImageElement,
    ears: HTMLImageElement,
    eyes: HTMLImageElement,
    mouth: HTMLImageElement,
    neck: HTMLImageElement,
    leg: HTMLImageElement,
    accessories: HTMLImageElement,
    background: HTMLImageElement,
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
    accessories: string[],
    styles: Styles,
    alpacaImages: AlpacaImages
} | undefined;


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

    const [alpacaImages, setAlpacaImages] = React.useState({
        hair: new Image(720, 720),
        ears: new Image(720, 720),
        eyes: new Image(720, 720),
        mouth: new Image(720, 720),
        neck: new Image(720, 720),
        leg: new Image(720, 720),
        accessories: new Image(720, 720),
        backgrounds: new Image(720, 720)
    }) as unknown as [AlpacaImages, React.Dispatch<React.SetStateAction<AlpacaImages>>];

    const changeOneImage = (key:AlpacaElements, value:string) => {
        const newImages = {...alpacaImages};
        if(newImages[key]) {
            newImages[key].src = `/${key}/${value}.png`;
            setAlpacaImages((prev) => ({...prev, [key]: newImages[key]}));
        }

    }

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

        changeOneImage(changedKey, changedValue);

        setAlpaca(newAlpaca);
    }

    const accessories = ["hair","ears", "eyes", "mouth", "neck", "leg", "accessories", "background"];
    const styles:Styles= {
        hair: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],
        ears: ["default", "tilt-backward", "tilt-forward"],
        eyes: ["default", "angry", "naughty", "smart", "star"],
        mouth: ["default", "astonished", "eating", "happy", "laugh", "tongue"],
        neck: ["default", "bend-backward", "bend-forward"],
        leg: ["default", "bubble-tea", "cookie", "game-console", "tilt-backward", "tilt-forward"],
        accessories: ["earings", "flower", "glasses", "headphone"],
        background: ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70", "green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", "yellow50", "yellow60", "yellow70"]
    };

    const values = { actualAccessory, setActualAccessory, alpaca, setAlpaca, changeAlpaca, accessories, styles, alpacaImages };

    useEffect(() => {

        if(alpaca !== undefined) {
            changeOneImage('ears', alpaca.ears);
            changeOneImage('eyes', alpaca.eyes);
            changeOneImage('mouth', alpaca.mouth);
            changeOneImage('neck', alpaca.neck);
            changeOneImage('leg', alpaca.leg);
            changeOneImage('accessories', alpaca.accessories);
            changeOneImage('background', alpaca.background);
        }




    }, []);

    return (
        // @ts-ignore
        <AlpacaContext.Provider value={values} >
            {children}
        </AlpacaContext.Provider>
    );
};

export default AlpacaProvider;

export { useAlpacaContext };
