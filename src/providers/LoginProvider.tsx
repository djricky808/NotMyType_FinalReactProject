import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { TUser, TLoginStatus } from "../Types";
import { LoginRequests } from "../api/UserAPI";

type TLoginProvider = {
  user: TUser | null;
  loginStatus: TLoginStatus;
  register: ({ username, password }: TUser) => Promise<void>;
  login: ({ username, password }: TUser) => Promise<void>;
  logout: () => void;
};

const LoginContext = createContext<TLoginProvider>({} as TLoginProvider);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [loginStatus, setLoginStatus] = useState<TLoginStatus>("LoggedOut");

  const register = ({ username, password }: TUser) => {
    return LoginRequests.registerFetch({ username, password }).then(
      (user: TUser) => {
        localStorage.setItem("user", JSON.stringify(user));
        return setUser(user);
      }
    );
  };

  const login = async ({ username, password }: TUser) => {
    const user = await LoginRequests.getUserFromServer(username);
    if (user.password !== password) {
      throw new Error("Incorrect Password");
    }
    setUser(user);
    setLoginStatus("LoggedIn");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setLoginStatus("LoggedOut");
  };

  useEffect(()=> {
    const maybeUser = localStorage.getItem('user');
    if(maybeUser) {
        setUser(JSON.parse(maybeUser));
        setLoginStatus("LoggedIn");
    }
  }, [])

  return (
    <LoginContext.Provider
      value={{
        user,
        loginStatus,
        register,
        login,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);



  return {
    user: context.user,
    loginStatus: context.loginStatus,
    register: context.register,
    login: context.login,
    logout: context.logout,
  };
};
