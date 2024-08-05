import { useState } from "react";
import { useLogin } from "../providers/UseLogin";
import { profilePictures } from "../profilePictures";
import toast from "react-hot-toast";
import { useTutorial } from "../providers/UseTutorial";


export const SignUp = () => {
  const { register, loginPage } = useLogin();
  const {activateTutorial} = useTutorial();

  const defaultImage = profilePictures.nullUser;

  const [usernameinput, setUsernameInput] = useState<string>("");
  const [passwordinput, setPasswordInput] = useState<string>("");
  const [verifiedPassword, setVerifiedPassword] = useState<string>("");
  const [image, setimage] = useState<string>(defaultImage);

   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [isImageSelected, setIsImageSelected] = useState(false);

  return (
    <>
      <section className="signup-screen">
        <h1>SIGN UP</h1>
        <form
          id="create-new-user-form"
          onSubmit={(e) => {
            e.preventDefault();
            setIsFormSubmitted(true);
            if(image === defaultImage){
                return;
            }
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
                activateTutorial();
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
            required
          />
          <label htmlFor="password">Create a password.</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
            value={passwordinput}
            required
          />
          <label htmlFor="verified-password">
            Please re-enter your password.
          </label>
          <input
            id="verified-password"
            type="password"
            onChange={(e) => setVerifiedPassword(e.target.value)}
            value={verifiedPassword}
            required
          />
          <label htmlFor="select-picture">Select Profile Picture</label> 
          {isFormSubmitted===true && image === defaultImage && <p className="error-message">Please select a profile picture</p>}
          <div className="picture-options">
           
            {Object.entries(profilePictures).slice(1).map(([value, pictureValue]) => {
              return (
                <label className="picture-option">
                  <input
                    type="radio"
                    id={value}
                    name="select-picture"
                    value={pictureValue}
                    key={pictureValue}
                    onChange={(e) => setimage(e.target.value)}
                  />
                  <span className="radio-label">
                    <img
                      src={`../../public/profiles/${value}.png`}
                      alt={value}
                    />
                  </span>
                </label>
              );
            })}
          </div>
          <input type="submit" value="Register" />
        </form>
        <p>
          Already a user <span onClick={() => loginPage()}>Login here!</span>
        </p>
      </section>
    </>
  );
};
