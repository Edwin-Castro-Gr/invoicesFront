
import { createContext, useContext, useState } from 'react';

// Crea el contexto del token
const TokenContext = createContext();
const TokenLogInContext = createContext();
const TokenLogOutContext = createContext();

// Exporta los contextos(Encapsular)
export const useTokenContext = () => {
    return useContext(TokenContext);
};

export const useTokenLogInContext = () => {
    return useContext(TokenLogInContext);
}

export const useTokenLogOutContext=()=>{
    return useContext(TokenLogOutContext);
}


export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState('');

    const logIn = (newToken) => {
        setToken(newToken);
    }

    const logOut=()=>{
        setToken('');
    }

    return (
        <TokenContext.Provider value={token}>
            <TokenLogInContext.Provider value={logIn}>
                <TokenLogOutContext.Provider value={logOut}>
                    {children}
                </TokenLogOutContext.Provider>
            </TokenLogInContext.Provider>
        </TokenContext.Provider>
    );
};