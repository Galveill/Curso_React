import React from "react";

interface ImgContext {
    cart: string[]
    setCart: (value: string[]) => void;
}

export const ImgContext = React.createContext<ImgContext>({
    cart: [],
    setCart: (value) => {
        console.log("Provider is not injected.");
    }
});

interface Props {
    children?: React.ReactElement | React.ReactElement[]
}

export const ImgContextProvider: React.FC<Props> = (props: Props) => {
    const [cart, setCart] = React.useState([]);
    return (
        <ImgContext.Provider value={{cart, setCart}}>
            {props.children}
        </ImgContext.Provider>
    );
}