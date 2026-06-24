import { createContext, useState } from "react";

export const CounterContext = createContext(0);

export function CounterContextProvider(props){
    const [counter, setCounter] = useState(0);
    const [userName, setUserName] = useState(10);

  

    return <>
    <CounterContext.Provider value={ {counter , userName , setCounter} }>
        {props.children}
    </CounterContext.Provider>
</>
}