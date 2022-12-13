import React from "react";

export type PictureInfo = {
    id: string;
    picUrl: string;
    title: string;
}

interface AnimalContext {
    dogs: PictureInfo[];
    setDogs: (dogs: PictureInfo[]) => void;
    cats: PictureInfo[];
    setCats: (cats: PictureInfo[]) => void;
}

export const AnimalContext = React.createContext<AnimalContext>({
    dogs: [],
    setDogs: (dogs) => {
        console.log("Provider is not injected.");
    },
    cats: [],
    setCats: (cats) => {
        console.log("Provider is not injected.");
    }
});

interface Props {
    children?: React.ReactElement | React.ReactElement[]
}

export const AnimalContextProvider: React.FC<Props> = (props: Props) => {
    const [dogs, setDogs] = React.useState(
        [
            {
                id: "a",
                picUrl: "perro.jpg",
                title: "Perro 1 A"
            },
            {
                id: "b",
                picUrl: "perro.jpg",
                title: "Perro 2 B"
            },
            {
                id: "c",
                picUrl: "perro.jpg",
                title: "Perro 3 C"
            },
            {
                id: "d",
                picUrl: "perro.jpg",
                title: "Perro 4 D"
            }
        ]
    );
    const [cats, setCats] = React.useState(
        [
            {
                id: "ca",
                picUrl: "gato.jpg",
                title: "Gato 1 A"
            },
            {
                id: "cb",
                picUrl: "gato.jpg",
                title: "Gato 2 B"
            },
            {
                id: "cc",
                picUrl: "gato.jpg",
                title: "Gato 3 C"
            },
            {
                id: "cd",
                picUrl: "gato.jpg",
                title: "Gato 4 D"
            }
        ]
    );
    
    return (
        <AnimalContext.Provider value={{dogs, setDogs, cats, setCats}}>
            {props.children}
        </AnimalContext.Provider>
    );
}