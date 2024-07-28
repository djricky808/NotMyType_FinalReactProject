import { Navbar } from './components/Navbar'
import './App.css'
import { useLogin } from './providers/UseLogin';
import { Login } from './components/Login';
import { Toaster } from 'react-hot-toast';
import { SignUp } from './components/SignUp';



function App() {
  const {loginStatus} = useLogin();

  return (
    <>
      <Toaster/>
      <Navbar/>
      {loginStatus === 'LoggedOut' && <Login/>}
      {loginStatus === "SignUp" && <SignUp/>}
    </>
  )
}

export default App
