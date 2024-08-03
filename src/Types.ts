export type TUser = {
    username: string;
    password: string;
    profilePic: string;
}

export type TLoginStatus = 'LoggedOut' | 'LoggedIn' | "SignUp";

export type TPhrase = {
    level: number;
    phrase: string;
    description: string;
}