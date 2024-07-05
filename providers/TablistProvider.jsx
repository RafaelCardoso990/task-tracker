import React, { createContext, useState } from 'react';

//Context
export const AppContext = createContext();

//Provider //arrow function for providers :D
export const PageProvider = ({children}) => {
    const [page, setPage] = useState(null);
    const [modal, setModal] = useState(false)
    return (
        <AppContext.Provider value={{page, setPage, modal, setModal}}>
            {children}
        </AppContext.Provider>
    )
}
