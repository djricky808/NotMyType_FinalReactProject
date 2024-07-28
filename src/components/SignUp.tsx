import { useState } from "react";
import { useLogin } from "../providers/UseLogin";
import { profilePictures } from "../profilePictures";
import toast from "react-hot-toast";

export const SignUp = () => {
  const { register } = useLogin();

  const defaultImage = profilePictures.nullImage;

  const [usernameinput, setUsernameInput] = useState<string>("");
  const [passwordinput, setPasswordInput] = useState<string>("");
  const [verifiedPassword, setVerifiedPassword] = useState<string>("");
  const [image, setimage] = useState<string>(defaultImage);

  return (
    <>
      <h1>Sign Up</h1>
      <form
        id="Create-New-User"
        onSubmit={(e) => {
          e.preventDefault();
          register(
            {
              username: usernameinput,
              password: passwordinput,
              profilePic: image,
            },
            verifiedPassword
          )
            .then(() => {
              toast.success("Registration successful, enjoy the game");
            })
            .catch((e: Error) => toast.error(e.message));
        }}
      >
        <label htmlFor="username">Create a username.</label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsernameInput(e.target.value)}
          value={usernameinput}
        />
        <label htmlFor="password">Create a password.</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPasswordInput(e.target.value)}
          value={passwordinput}
        />
        <label htmlFor="verified-password">
          Please re-enter your password.
        </label>
        <input
          id="verified-password"
          type="password"
          onChange={(e) => setVerifiedPassword(e.target.value)}
          value={verifiedPassword}
        />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};
