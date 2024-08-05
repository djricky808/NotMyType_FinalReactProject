import { useLogin } from "../providers/UseLogin";
import { usePhrases } from "../providers/UsePhrases";
import { useTutorial } from "../providers/UseTutorial";

export const Navbar = () => {
  const { user, loginStatus, logout } = useLogin();
  const { activateTutorial } = useTutorial();
  const { exitLevelModal } = usePhrases();
  return (
    <nav className="navbar-main">
      <div className="navbar-left">
        <h3>NOT MY TYPE</h3>
      </div>
      <div className="navbar-right">
        <a
          onClick={() => {
            exitLevelModal();
            activateTutorial();
          }}
        >
          HOW TO PLAY
        </a>
        {loginStatus === "LoggedIn" && (
          <a>
            Welcome <span>{user?.username}</span>
          </a>
        )}
        {loginStatus === "LoggedOut" && <a>LOGIN</a>}
        <div className="profile-container">
          <img
            className="user-img"
            src={
              loginStatus === "LoggedIn"
                ? user?.profilePic
                : "/profiles/nullUser.png"
            }
          />
        </div>
        {loginStatus === "LoggedIn" && <a onClick={() => logout()}>Logout</a>}
      </div>
    </nav>
  );
};
