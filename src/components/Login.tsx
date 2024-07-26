import { useLogin } from "../providers/UseLogin";
import { useState } from "react";
import { toast } from "react-toastify";

export const Login = () => {
  const { login, signUp } = useLogin();
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  return (
    <section className="login-screen">
      <h1>
        Welcome to <span>NOT MY TYPE</span>
      </h1>
      <h2>The Game Where the keyboard is QUIRKY, not QWERTY</h2>
      <div className="login-form">
        <h1>PLEASE SIGN IN</h1>
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
        <p>
          New to the game <span onClick={() => signUp()}>Sign up here!</span>
        </p>
      </div>
    </section>
  );
};
