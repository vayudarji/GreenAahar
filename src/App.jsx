import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/Signin';
import Rest_profil from './components/restaurant/Rest_profil';
import SignInSignUp from './components/SignInSignUp';
import RestList from './components/restaurant/RestList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/layout' element={<Layout />}/>
        <Route path='/' element={<SignInSignUp />}/>
        <Route path='/home'element={<Home />}/>
        {/* <Route path='/Signin' element={<Signin />}/> */}
        <Route path='/RestaurantProfile' element={<Rest_profil />}></Route>
        <Route path='/RestaurantList' element={<RestList />}></Route>
          {/* <h1 className='text-orange-500 text-xl'>Basi khana lelo</h1>
          <Login /> */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
