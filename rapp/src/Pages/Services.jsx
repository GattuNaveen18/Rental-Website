import React, { useState } from 'react';
import Bike from '../Components/Assets/Bike.png';
import Car from '../Components/Assets/Car.png';
import Truck from '../Components/Assets/Truck.png';
import Bus from '../Components/Assets/Bus.png';
import Other from '../Components/Assets/Other.png';
import './Services.css';
import { Link } from 'react-router-dom';
import { vehicles } from './Data';
import ServiceItems from './ServiceItems.jsx';
import { useNavigate } from 'react-router-dom';


const Services = ({isLogin, setIsLogin, cartcount, setcartcount}) => {

  const navigate = useNavigate();
  const [sidemenu, setsidemenu] = useState('bike');
  const [IsOrder, setIsOrder] = useState(false);


  console.log(IsOrder)
  const handleorder = () =>{
    console.log(isLogin)
    isLogin? setIsOrder(true): navigate('/login');
    alert('Item added to cart')
    setcartcount(cartcount+1)
    console.log(IsOrder);
}  
  return (
    <div>
    <div className='scontainer'>
      <ul className='menu-list'>

        <p className='scontainer-Pp'>Services</p>

        <li onClick={() => { setsidemenu('bike') }} className={sidemenu==='bike' ?'onclick' : ''}>
          <Link>
        <img src={Bike} alt=''/>
        <p className='scontainer-P'>Bike</p>
        </Link></li>

        <li  onClick={() => { setsidemenu('car') }} className={sidemenu==='car' ?'onclick' : ''}>
          <Link >
        <img src={Car} alt=''/>
      <p className='scontainer-P'>Car</p>
      </Link> </li>

      <li  onClick={() => { setsidemenu('bus') }} className={sidemenu==='bus' ?'onclick' : ''}>
          <Link >
            <img src={Bus} alt='' />
            <p className='scontainer-P'>Bus</p>
          </Link></li>

        <li  onClick={() => { setsidemenu('truck') }} className={sidemenu==='truck' ?'onclick' : ''}>
          <Link >
        <img src={Truck} alt=''/>
      <p className='scontainer-P'>Truck</p>
      </Link> </li>

        <li  onClick={() => { setsidemenu('other') }} className={sidemenu==='other' ?'onclick' : ''}>
          <Link >
        <img src={Other} alt=''/>
        <p className='scontainer-P'>Other</p>
        </Link></li>
      </ul>
    </div>
    <div className='menu'>
      <div className='menuList'>
      {vehicles.map((menuItem, key) => {
  if (menuItem.Category === sidemenu) {
    return (
      <ServiceItems
        key={key} 
        image={menuItem.Image}
        name={menuItem.Name}
        price={menuItem.Price}
        mileage = {menuItem.Mileage}
        rating = {menuItem.Rating}
        IsOrder = {IsOrder}
        onOrder ={handleorder}
      />
    );
  }
  return null;
})}
    
      </div>
    </div>
    </div>
    
  );
};

export default Services;
