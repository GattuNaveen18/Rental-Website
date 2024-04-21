import React, { useState } from "react";

function ServiceItem({ image, name, price, mileage, rating, IsOrder, onOrder}) { 

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1>Name : {name} </h1>
      <p>Rent: ${price} </p>
      <p>Mileage: {mileage}</p>
      <p>Rating :{rating}</p>
      <button className="vbutton" onClick={onOrder}>{IsOrder ?'Go to cart' :'Add to Cart'}</button>
      <button className="gbutton">View Details</button>

      <div>
        <div className="IsOder">
          <h1></h1>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
