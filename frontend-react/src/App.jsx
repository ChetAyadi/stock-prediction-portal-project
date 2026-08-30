import './App.css'
import './assets/css/style.css'
import Main from './components/Main.jsx'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Registration from './components/Registration'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/register' element={<Registration />}/>
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
