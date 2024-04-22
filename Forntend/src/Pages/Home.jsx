import React, {useState, useEffect} from 'react';
import './Home.css';
import Home1 from '../Components/Assets/Home.png';
import Home2 from '../Components/Assets/Home2.png';
import Home3 from '../Components/Assets/Home3.png';

const Home = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    Home1,
    Home3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval); 

  }, [slideIndex]);

  return (
    <div  >
      <div className='hConatiner'>
      <img
        src={images[slideIndex]}
        alt={`Image ${slideIndex + 1}`}
        style={{ width: '100%', height: '555px' }}
      />
      </div>
      <div className='imgtext' >
        <p>
          "Embark on a journey of a lifetime. Where you go, the adventure follows"
        </p>
      </div>
      <div className='footer'>
        <footer>
           <div class="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    <div class="footer-bottom">
      <p>&copy; 2023  Company. All rights reserved.</p>
    </div>
  </footer>
      </div>

    </div>
  )
};

export default Home;
