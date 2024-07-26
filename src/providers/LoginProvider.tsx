import { createContext, ReactNode,  useEffect, useState } from "react";
import { TUser, TLoginStatus } from "../Types";
import { LoginRequests } from "../api/UserAPI";

type TLoginProvider = {
  user: TUser | null;
  loginStatus: TLoginStatus;
  register: ({ username, password, profilePic }: TUser) => Promise<void>;
  signUp: () => void;
  login: ({ username, password }: TUser) => Promise<void>;
  logout: () => void;

};

export const LoginContext = createContext<TLoginProvider>({} as TLoginProvider);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [loginStatus, setLoginStatus] = useState<TLoginStatus>("LoggedOut");

  const register = ({ username, password, profilePic }: TUser) => {
    return LoginRequests.registerFetch({ username, password, profilePic }).then(
      (user: TUser) => {
        localStorage.setItem("user", JSON.stringify(user));
        return setUser(user);
      }
    );
  };

  const signUp = () => {
    setLoginStatus('SignUp');
  }

  const login = async ({ username, password }: Omit<TUser,"profilePic">) => {
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
        signUp,
        login,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};


