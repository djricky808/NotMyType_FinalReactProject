import { useLogin } from "../providers/LoginProvider"



export const Navbar = () => {
    const {user, loginStatus} = useLogin();
    return (
        <nav className="navbar-main">
            <div className="navbar-left">
                <h3>NOT MY TYPE</h3>  
            </div>
            <div className="navbar-right">
                <a href="#">HOW TO PLAY</a>
                {loginStatus === "LoggedIn" && <a>Welcome <span>{user?.username}</span></a>}
                {loginStatus === "LoggedOut" && <a>LOGIN</a>}
                <img className="user-img" src={loginStatus === "LoggedIn" ? `${user}` : "../../public/profiles/nullUser.png"} />
            </div>
        </nav>
    )
}
    
