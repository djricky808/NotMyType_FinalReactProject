import { Navbar } from './components/Navbar'
import './App.css'
import { useLogin } from './providers/UseLogin';
import { Login } from './components/Login';
import { Toaster } from 'react-hot-toast';
import { SignUp } from './components/SignUp';
import { PhraseSelection } from './components/PhraseSelection';
import { useTutorial } from './providers/UseTutorial';
import { HowToPlay } from './components/HowToPlay';



function App() {
  const {loginStatus} = useLogin();
  const {isTutorialActive} = useTutorial();

  return (
    <>
      <Toaster/>
      <Navbar/>
      {isTutorialActive && <HowToPlay/>}
      {loginStatus === 'LoggedOut' && <Login/>}
      {loginStatus === "SignUp" && <SignUp/>}
      {loginStatus === 'LoggedIn' && <PhraseSelection/>}

    </>
  )
}

export default App
