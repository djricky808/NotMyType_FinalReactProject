import { useState } from "react";
import { TUser } from "../Types";
import { useLogin } from "../providers/UseLogin";

export const SignUp = () => {
    const {user, signUp} = useLogin();
    
    const [usernameinput, setUsernameInput] = useState<string>('');
    const [passwordinput, setPasswordInput] = useState<string>('');
    const [image, setimage] = useState<string>(nullUser)

}