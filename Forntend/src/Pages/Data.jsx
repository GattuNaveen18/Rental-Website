import Sbike1 from '../Components/Assets/Sbike1.png';
import Sbike2 from '../Components/Assets/Sbike2.png';
import Sbike3 from '../Components/Assets/Sbike3.png';
import Sbike4 from '../Components/Assets/Sbike4.png';
import Sbike5 from '../Components/Assets/Sbike5.png';
import Sbike6 from '../Components/Assets/Sbike6.png';
import Scar1 from '../Components/Assets/Scar1.png';
import Scar2 from '../Components/Assets/Scar2.png';
import Scar3 from '../Components/Assets/Scar3.png';
import Sbus1 from '../Components/Assets/Sbus1.png';
import Sbus2 from '../Components/Assets/Sbus2.png';
import Struck1 from '../Components/Assets/Struck1.png';
import Struck2 from '../Components/Assets/Struck2.png';

// users.js
const Users = [
    {
      Id: 1,
      Name: "Naveen",
      Email: "n@gmail.com",
      Password: "123",
      cartCount: 2,
      MyCartItems : [
        {id:1, quantity :1},
        {id:2, quantity :1}
      ]
    },
    {
      Id: 2,
      Name: "Hero",
      Email: "k@gmail.com",
      Password: "123",
      cartCount: 2,
      MyCartItems : [
        {id:2, quantity :1}
      ]
    }
  ];
  
  export { Users };
  
  // data.js
  const initialFormData = {
    Name: "",
    Email: "",
    Password: "",
  };
  
  export { initialFormData };
  

  const vehicles =  [
    {
    Id : 1,
    Name : 'Royal Enfield',
    Price : '1000',
    Image : Sbike1,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'bike'
   },
   {
    Id : 2,
    Name : 'Rx100',
    Price : '100',
    Image : Sbike5,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'bike'
   },
   {
    Id : 3,
    Name : 'R15',
    Price : '1000',
    Image : Sbike4,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'bike'
   },
   {
    Id : 6,
    Name : 'Java',
    Price : '1000',
    Image : Sbike6,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'bike'
   },

  {
    Id : 7,
    Name : 'Scar1',
    Price : '1000',
    Image : Scar1,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'car'
   },
   {
    Id : 8,
    Name : 'Scar2',
    Price : '10000',
    Image : Scar2,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'car'
   },
   {
    Id : 9,
    Name : 'Scar3',
    Price : '1000',
    Image : Scar3,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'car'
   },
   {
    Id : 10,
    Name : 'Sbus1',
    Price : '1000',
    Image : Sbus1,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'bus'
   },
   {
    Id : 11,
    Name : 'Sbus2',
    Price : '1000',
    Image : Sbus2,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'bus'
   },
   {
    Id : 12,
    Name : 'Struck1',
    Price : '1000',
    Image : Struck1,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'truck'
   },
   {
   Id : 13,
    Name : 'Struck2',
    Price : '1000',
    Image : Struck2,
    Mileage : '40kmph',
    Rating : '5',
    Category: 'truck'
   }
]

export {vehicles};