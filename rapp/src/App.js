import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Rent from './Pages/Rent';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Services from './Pages/Services';
import LoginSingup from './Pages/LoginSingup';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import { Users } from './Pages/Data';

function App() {
  const[userId, setUserId]= useState(1);
  const cartitemcount = Users[userId-1].cartCount;
  const [isLogin, setIsLogin] = useState(false);
  const [cartcount, setcartcount] = useState(cartitemcount);

  return (
    <div className="App">
      <Router>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} cartcount={cartcount} setcartcount={setcartcount} setUserId={setUserId} userId ={userId} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services isLogin={isLogin} setIsLogin={setIsLogin} cartcount={cartcount} setcartcount={setcartcount}/>} />
          {/* <Route path='/user' element={<Profile/>} /> */}
          <Route path='/product' element={<Product />} />
          <Route
            path='/cart'
            element={<Cart isLogin={isLogin} setIsLogin={setIsLogin} userId ={userId} />}
          />
          <Route
            path='/login'
            element={<LoginSingup isLogin={isLogin} setIsLogin={setIsLogin} setUserId={setUserId}/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
