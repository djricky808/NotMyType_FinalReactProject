
export type TUser = {
    username: string;
    password: string;
    profilePic: string;
}

export type TLoginStatus = 'LoggedOut' | 'LoggedIn' | "SignUp";

export type TPhrase = {
    level: string;
    phrase: string;
    description: string;
}

export type TTimes = {
    phraseId: string;
    userId: string;
    profilePic: string;
    time: number;
    id: string;
}