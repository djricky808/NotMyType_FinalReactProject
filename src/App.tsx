import { Navbar } from './components/Navbar'
import './App.css'
import { useLogin } from './providers/UseLogin';
import { Login } from './components/Login';
import { Toaster } from 'react-hot-toast';



function App() {
  const {loginStatus} = useLogin();

  return (
    <>
      <Toaster/>
      <Navbar/>
      {loginStatus === 'LoggedOut' && <Login/>}
    </>
  )
}

export default App
