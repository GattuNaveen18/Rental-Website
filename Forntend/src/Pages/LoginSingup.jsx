import React, { useEffect, useState } from 'react';
import './Login.css';
import user_icon from '../Components/Assets/Person.png';
import pass_icon from '../Components/Assets/password.png';
import email_icon from '../Components/Assets/Email.png';
import { initialFormData } from './Data.jsx';
 import {Users} from './Data.jsx';
import { useNavigate } from 'react-router-dom';

const LoginSingup = ({isLogin, setIsLogin, setUserId}) => {
  const navigate = useNavigate();
  const [action, setAction] = useState("login");
  const [formData, setFormData] = useState(initialFormData);
  const [count, setCount] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [users, setUsers] = useState(Users);
  const [loginMessage, setLoginMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  const addItem = (newItem) => {
    setUsers([...users, newItem]);
  };

  const isValidUser = () => {
    if (formData.Email==="" && formData.Password==="")
    return

     const user = users.find((u) => u.Email === formData.Email);
    if (user && user.Password === formData.Password) {
      setIsLogin(true);
      setUserId(user.Id)
      setLoginMessage("Login Successful");
      setFormData(initialFormData);
       navigate('/home');
    } 
    else {
      setIsLogin(false);
      setLoginMessage("Invalid email or password");
      return;
    }
  };

  const handleSubmit = () => {
    if (formData.Name==="" || formData.Email==="" || formData.Password==="")
    return
    const newItem = {
      id: count,
      Name: formData.Name,
      Email: formData.Email,
      Password: formData.Password,
    };

      addItem(newItem);
      setRegisterMessage("Registration Successful");
      setSubmit(true);
      setAction("Login");
      setCount(count + 1);
      setFormData(initialFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const listsData = localStorage.getItem('lists');
    const existingLists = listsData ? JSON.parse(listsData) : [];
    const updatedData =[...existingLists, users];
  
    localStorage.setItem('lists', JSON.stringify(updatedData));
  }, [users]);
  

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {submit && !loginMessage && (
          <p className='ErrorMessage'>{registerMessage}</p>
        )}
        {action === 'Login' && formData.Email && formData.Password && (
          <p className='ErrorMessage'>{loginMessage}</p>
        )}

        {action === 'Sign Up' && (
          <div className='input'>
            <img src={user_icon} alt='' width={20} height={20} />
            <input
              type='text'
              placeholder='Name'
              name='Name'
              value={formData.Name}
              onChange={handleChange}
            />
          </div>
        )}
         <div className='input'>
          <img src={email_icon} alt='' width={20} height={20} />
          <input
            type='text'
            placeholder='Email'
            name='Email'
            value={formData.Email}
            onChange={handleChange}
          />
        </div>
       <div className='input'>
          <img src={pass_icon} alt='' width={20} height={20} />
          <input
            type='password'
            placeholder='Password'
            name='Password'
            value={formData.Password}
            onChange={handleChange}
          />
        </div>
      </div>
      {action === 'Login' && (
        <div className='forget-password'>
          Forget Password? <span> Click Here</span>
        </div>
      )}
      <div className='submit-container'>
        <div
          className={action === 'Login' ? 'submit-grey' : 'submit'}
          onClick={() => {
            setAction('Sign Up');
            handleSubmit();
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit-grey' : 'submit'}
          onClick={() => {
            setAction('Login');
            isValidUser();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
