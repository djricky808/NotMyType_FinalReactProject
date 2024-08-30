import { Navbar } from './components/Navbar'
import './App.css'
import { useLogin } from './providers/UseLogin';
import { Login } from './components/Login';
import { Toaster } from 'react-hot-toast';
import { SignUp } from './components/SignUp';
import { PhraseSelection } from './components/PhraseSelection';
import { Game } from './components/Game';
import { useTutorial } from './providers/UseTutorial';
import { HowToPlay } from './components/HowToPlay';
import { useGame } from './providers/UseGame';



function App() {
  const {loginStatus} = useLogin();
  const {isTutorialActive} = useTutorial();
  const {isGameRunning} = useGame();

  return (
    <>
      <Toaster/>
      <Navbar/>
      {isTutorialActive && <HowToPlay/>}
      {loginStatus === 'LoggedOut' && <Login/>}
      {loginStatus === "SignUp" && <SignUp/>}
      {loginStatus === 'LoggedIn'&& !isGameRunning && <PhraseSelection/>}
      {isGameRunning && <Game/>}

    </>
  )
}

export default App
