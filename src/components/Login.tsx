import { useLogin } from "../providers/LoginProvider"

export const Login = () => {
    return (
        <div className="login-form">
             <h2>PLEASE SIGN IN</h2>
             <form>
                <label htmlFor="gamer-ID">Gamer ID</label>
                <input id="gamer-ID" type="text" />
                <label htmlFor="password">Password</label>
                <input type="password" />
            </form>
        </div>
    )
}