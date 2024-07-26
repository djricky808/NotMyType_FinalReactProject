import { Navbar } from './components/Navbar'
import './App.css'
import { useLogin } from './providers/UseLogin';
import { Login } from './components/Login';

function App() {
  const {loginStatus} = useLogin();

  return (
    <>
      <Navbar/>
      {loginStatus === 'LoggedOut' && <Login/>}
    </>
  )
}

export default App
