import { useLogin } from "../providers/LoginProvider";
import { useState } from "react";
import { toast } from "react-toastify";

export const Login = () => {
  const { login, loginStatus } = useLogin;
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  return (
    <div className="login-form">
      <h2>PLEASE SIGN IN</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault;
          login({
            username: usernameInput,
            password: passwordInput,
          })
            .then(() => toast.success("Logged in successfully."))
            .catch((e: Error) => toast.error(e.message));
        }}
      >
        <label htmlFor="gamer-ID">Gamer ID</label>
        <input
          id="gamer-ID"
          type="text"
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
          value={usernameInput}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
          value={passwordInput}
        />
        <input type="submit" className="submit" value="LOGIN" />
      </form>
    </div>
  );
};
