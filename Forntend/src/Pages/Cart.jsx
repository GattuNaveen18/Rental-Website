import React, { useState } from 'react';
import { Users, vehicles } from './Data';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ isLogin, setIsLogin, userId }) => {
  const [countItem, setCountItem] = useState(1);
  const [placedOrder, setplacedOrder] = useState(false);
  const [TotalCost, setTotalCost] = useState(0);
  const [checked, setChecked] = useState(false);
  const [next, setNext] =useState(false);
  const [sucess, setsucess] = useState(false);
  const navigate = useNavigate();

  const items = Users[userId - 1].MyCartItems.map(item => item.id);
  const quantities = Users.flatMap(user => user.MyCartItems.map(item => item.quantity));

  const handleChecked = () =>{
    setChecked(!checked);
  }

  const handleContinue =() =>{
    navigate('/services')

  }
  const handleOrderSubmit =(e)=>{
    e.preventDefault();
  }

  const handleAddItem = itemId => {
    console.log('userId', userId);
    Users.forEach(user => {
      if (user.Id === userId) {
        const cartItem = user.MyCartItems.find(item => item.id === itemId);
        const vehcost = vehicles.find(item => item.Id === itemId).Price
        if (cartItem) {
          cartItem.quantity += 1;
          setTotalCost(TotalCost+ vehcost*1)
          console.log(cartItem.quantity);
        } else {
          console.log(`Item with ID ${itemId} not found in the user's cart.`);
        }
      }
    });
    setCountItem(countItem + 1);
  };

  const handleSubItem = itemId => {
    if (countItem === 1) return;
    Users.forEach(user => {
      if (user.Id === userId) {
        const cartItem = user.MyCartItems.find(item => item.id === itemId);
        const vehcost = vehicles.find(item => item.Id === itemId).Price
        console.log(cartItem);
        if (cartItem) {
          if (cartItem.quantity === 1) return;
          cartItem.quantity -= 1;
          setTotalCost(TotalCost - vehcost)
          console.log(cartItem.quantity);
        } else {
          console.log(`Item with ID ${itemId} not found in the user's cart.`);
        }
      }
    });
    if (countItem === 1) return;
    setCountItem(countItem - 1);
  };

  return (
    <div>
    <div className='ccontainer'>
      <div className='title'>
        <h1>Shopping Cart</h1>
        <h4>Remove All</h4>
      </div>
      <ul className='cul'>
        {items.map((itemId, index) => {
          const matchingProduct = vehicles.find(product => product.Id === itemId);

          return (
            <li key={itemId}>
              <ul>
                {matchingProduct && (
                  <li key={matchingProduct.Id}>
                    <img className='img1' src={matchingProduct.Image} alt={matchingProduct.Name} />
                    <li className='details'>
                      Name: {matchingProduct.Name} <br />
                      Rent: {matchingProduct.Price} <br />
                      Mileage: {matchingProduct.Mileage}
                    </li>
                    <button className='vButton' onClick={() => handleAddItem(itemId)}>
                      +
                    </button>
                    <button className='xButton'>{quantities[index]}</button>
                    <button className='yButton' onClick={() => handleSubItem(itemId)}>
                      -
                    </button>
                    <div>
                      <h2>₹{matchingProduct.Price * quantities[index]}</h2>
                      <h6>Remove</h6>
                    </div>
                  </li>
                )}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className='separator'>
        <button className='pButton' onClick={() => {setplacedOrder(true)}}>Place an order</button>
        <h4 className='total'> Total = ₹{TotalCost} </h4>
      </div>

        <diV className={ placedOrder? 'Booking' : 'NotBooking'}>
          <div>
              <h2 className='tle'>Shipping Details</h2>
              <form onSubmit={handleOrderSubmit}>
              <div class="name">
                <div>
                    <label for="f-name">First Name</label>
                    <input type="text" name="f-name"/>
                </div>
                <div>
                    <label for="l-name">Last Name</label>
                    <input type="text" name="l-name"/>
                </div>
            </div>
            <div class="street">
                <label for="name">Street</label>
                <input type="text" name="address"/>
            </div>
            <div class="address-info">
                <div>
                    <label for="city">City</label>
                    <input type="text" name="city"/>
                </div>
                <div>
                    <label for="state">State</label>
                    <input type="text" name="state"/>
                </div>
                <div>
                    <label for="zip">PIN</label>
                    <input type="text" name="zip"/>
                </div>
            </div>
            <div>
            <h2 className='tle'>Payment Information</h2>
            <div class="street">
                <label for="name">Card No</label>
                <input type="text" name="address"/>
            </div>
            <div class="address-info">
                <div>
                    <label for="city">Name</label>
                    <input type="text" name="city"/>
                </div>
                <div>
                    <label for="state">Expiry</label>
                    <input type="text" name="state" placeholder='00/00'/>
                </div>
                <div>
                    <label for="zip">CVV</label>
                    <input type="text" name="zip"/>
                </div>
            </div>
            <button className='cancel' onClick={()=>{setplacedOrder(false)}}>Cancel</button>
            <button className='next' onClick={() =>setNext(true)}>Next</button>
            </div>
                </form>
          </div>
        </diV>

    </div>
            <div className={next?'sscontainer' :'notsscontainer'}>
              <div>
                  <h2 className='tle'>Terms & Conditions:</h2>
                  <li className='tle'>I agree to the terms and conditions.</li>
                  <li className='tle'>I have reviewed the product details.</li>
                  <li className='tle'>I am aware of the return policy.</li>
                  <li className='tle'>I have checked the shipping address.</li>
                  <li className='tle'>I have read and understood the payment details.</li>
                  <li className='tle'>I acknowledge any additional fees or charges.</li>
                  <li className='tle'>I understand that order changes may not be possible.</li>
                  <li className='tle'>I have read the product reviews, if available.</li>
                  <diV className= 'chkbox'>
                <input type="checkbox" className='chk' onClick={handleChecked }/> 
                <li>I accept all above conditions.</li> 

                <button className= 'Scqancel' onClick={() =>{setNext(false)}}>Back</button>
                <button className= {checked ?'confirm' : 'notconfirm'} onClick={() =>checked ?setsucess(true):setsucess(false) } >Confirm</button>
                </diV>
              </div>
            </div>


            <div className={sucess?'SucContainer' : 'notSucContainer'} >
              <div>
              <i class="checkmark">✓</i>
              </div>
              <h1 className='smessage'>Success</h1> 
               <p className='pmessage'> Thanks for Ordering!</p>
               <button className= 'cshopping' onClick={handleContinue}>Continue</button>
            </div>
    </div>
  );
};

export default Cart;
