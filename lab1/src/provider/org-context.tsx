import React from "react";

interface OrgContext {
    org: string;
    setOrg: (value: string) => void;
}

export const OrgContext = React.createContext<OrgContext>({
    org: "Provider is not injected.",
    setOrg: (value) => {
        console.log("Provider is not injected.");
    }
});

interface Props {
    children?: React.ReactElement
}

export const OrgContextProvider: React.FC<Props> = (props: Props) => {
    const [org, setOrg] = React.useState("lemoncode");
    return (
        <OrgContext.Provider value={{org, setOrg}}>
            {props.children}
        </OrgContext.Provider>
    );
}