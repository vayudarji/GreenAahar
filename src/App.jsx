import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/Signin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='/Signup' element={<Login />}/>
        <Route path='/home'element={<Home />}/>
        <Route path='/Signin' element={<Signin />}/>
          {/* <h1 className='text-orange-500 text-xl'>Basi khana lelo</h1>
          <Login /> */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
