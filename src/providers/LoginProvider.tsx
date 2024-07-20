import { createContext, ReactNode, useContext, useState } from "react";

type TLoginProvider = {
    
}

const LoginContext = createContext <TLoginProvider>({} as TLoginProvider)

export const LoginProvider = ({children}:{children:ReactNode}) =>{
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
}