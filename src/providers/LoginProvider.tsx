import { createContext, ReactNode, useContext, useState } from "react";
import { TUser, TLoginStatus } from "../Types";

type TLoginProvider = {
    user: TUser | null;
    loginStatus: TLoginStatus,
}

const LoginContext = createContext <TLoginProvider>({} as TLoginProvider)

export const LoginProvider = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<TUser | null>(null);
    const [loginStatus, setLoginStatus] = useState<TLoginStatus>('LoggedOut')

    return (
        <LoginContext.Provider value={{
            user,
            loginStatus
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => {
const context = useContext(LoginContext)

    return {
        user: context.user,
        loginStatus: context.loginStatus
    }
}