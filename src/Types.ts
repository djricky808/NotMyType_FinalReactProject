export type TUser = {
    username: string;
    password: string;
}

export type TUserNameOnly = {
    username: string;
}

export type TLoginStatus = 'LoggedOut' | 'LoggedIn' | "SignUp";