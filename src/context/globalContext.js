import React, { useContext } from 'react';

const GlobalContext = React.createContext();

export const GlobalContextContainer=GlobalContext.Provider;

export const  useGlobalContext=()=> useContext(GlobalContext);