import { useContext } from "react";
import { LoginContext } from "./LoginProvider";

export const useLogin = () => {
  const context = useContext(LoginContext);

  return {
    user: context.user,
    loginStatus: context.loginStatus,
    register: context.register,
    signUp: context.signUp,
    loginPage: context.loginPage,
    login: context.login,
    logout: context.logout,
  };
};
