import React, { useState } from 'react';
import './Navbar.css';
import icon from '../Assets/RJICON2.png';
import cart from '../Assets/cart1.png';
import user from '../Assets/User.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import person from '../Assets/Person1.png';
import Editprofile from '../Assets/Editprofile.png';
import Logout from '../Assets/Logout.png';
import Settings from '../Assets/Settings.png';
import Help from '../Assets/Help.png';
import { Users } from '../../Pages/Data';


const Navbar = ({ isLogin, setIsLogin, cartcount, setcartcount, setUserId, userId }) => {
  const navigate = useNavigate();
  const [menu, setmenu] = useState('home');
  const [Profile, setProfile] = useState(false);
  const UserName = Users[userId-1].Name

  const handleLogout = () => {
    if(!isLogin)
    return
    setIsLogin(false);
    setmenu('home');
    setcartcount(0);
    navigate('/home');
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={icon} alt=" " width={70} height={50} />
        <p>PROJECT -T </p>
      </div>
      <ul className= 'nav-menu'>
        <li onClick={() => { setmenu('home') ; setProfile(false) }}><Link to='/' >Home</Link> {menu === 'home' ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu('about') ; setProfile(false)}}><Link to='/about'>About</Link> {menu === 'about' ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu('contact'); setProfile(false) }}><Link to='/contact'>Contact</Link> {menu === 'contact' ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu('services'); setProfile(false) }}><Link to='/services'>Services</Link> {menu === 'services' ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'></div>
      {isLogin && <li onClick={() => { setmenu('cart') }}><Link to='/cart'> <img className='nav-cart' src={cart} alt=" " width={40} height={40} /></Link></li>}
      {isLogin && <div className='nav-cart-count'>{cartcount}</div>}
      {isLogin && <li onClick={() => { setProfile(true) }}><Link> <img className='nav-cart' src={user} alt=" " width={40} height={40} /></Link></li>}
      <li onClick={handleLogout}><Link to='/login'><button className='nav-login-button'>{isLogin ? 'Logout' : 'Login'}</button></Link></li>

      <div className={Profile ?'sub-menu-wrap' : 'notsub-menu-wrap'}    >
        <div className='sub-menu'>
        <span onClick={() => {setProfile(false)}}>&times;</span>
          <div className='user-info'>
            <img src={person} alt=''/>
            <h3>{UserName}</h3>
            </div>
            <hr></hr>
            <a href='#' className='sub-menu-link'>
              <img src={Editprofile} alt=''/>
              <p>Edit Profile</p>
              <span> &gt;</span>
            </a>
            <a href='#' className='sub-menu-link'>
              <img src={Help} alt=''/>
              <p>Help</p>
              <span> &gt;</span>
            </a>
            <a href='#' className='sub-menu-link'>
              <img src={Settings} alt=''/>
              <p>Settings</p>
              <span> &gt;</span>
            </a>
            <a href='#' className='sub-menu-link'>
              <img src={Logout} alt=''/>
              <p>Logout</p>
              <span> &gt;</span>
            </a>
        </div>
       </div>
   
   
    </div>

  );
};

export default Navbar;
