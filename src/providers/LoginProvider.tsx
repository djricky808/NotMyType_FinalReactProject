import { createContext, ReactNode, useEffect, useState } from "react";
import { TUser, TLoginStatus } from "../Types";
import { LoginRequests } from "../api/UserAPI";

type TLoginProvider = {
  user: TUser | null;
  loginStatus: TLoginStatus;
  register: ({ username, password, profilePic }: TUser, verifiedPassword:string) => Promise<void>;
  signUp: () => void;
  loginPage: () => void;
  login: ({ username, password }: Omit<TUser, "profilePic">) => Promise<void>;
  logout: () => void;
};

export const LoginContext = createContext<TLoginProvider>({} as TLoginProvider);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [loginStatus, setLoginStatus] = useState<TLoginStatus>("LoggedOut");

  const register = (
    { username, password, profilePic }: TUser,
    verifiedPassword: string
  ) => {
    return LoginRequests.checkServerIfUsernameExists(username)
    .then(() => {
      if (password !== verifiedPassword) {
        throw new Error("Passwords do not match!");
      }
      return LoginRequests.registerFetch({
        username,
        password,
        profilePic,
      }).then((user: TUser) => {
        localStorage.setItem("user", JSON.stringify(user));
        setLoginStatus("LoggedIn");
        return setUser(user);
      });
    });
  };

  const signUp = () => {
    setLoginStatus("SignUp");
  };

  const loginPage = () => {
    setLoginStatus("LoggedOut")
  }

  const login = async ({ username, password }: Omit<TUser, "profilePic">) => {
    const user = await LoginRequests.getUserFromServer(username);
    if (user.password !== password) {
      throw new Error("Incorrect Password");
    }
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    setLoginStatus("LoggedIn");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setLoginStatus("LoggedOut");
  };

  useEffect(() => {
    const maybeUser = localStorage.getItem("user");
    if (maybeUser) {
      setUser(JSON.parse(maybeUser));
      setLoginStatus("LoggedIn");
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        user,
        loginStatus,
        register,
        signUp,
        loginPage,
        login,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
