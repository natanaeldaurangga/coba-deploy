import React, { useState, createContext } from 'react';

export const CobaContext = createContext();

export const CobaProvider = (props) => {
    
    const [text, setText] = useState('cek');

    const [text2, setText2] = useState('cok');

    const userContext = {
        text,
        setText,
        text2,
        setText2
    }

    return (
        <CobaContext.Provider value={userContext} >
            {props.children}
        </CobaContext.Provider>
    );

};

