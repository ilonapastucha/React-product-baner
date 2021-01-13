import React from 'react';

function handleClick(e, link){
  e.preventDefault();
  console.log(link);
}

const Product = ({ pid, img, link, name, price }) => (
  <div key={pid} className='productCard'>
    <div className='text'>{name}</div> 
    <div className='text'></div>
    <div className='text'>
      {price.toString().replace('.', ',')}
    </div>
    <div className='imgContent'>
      <img src={img}></img>
    </div>
    <a onClick={(e) => handleClick(e, link)}>kup teraz</a>
  </div>
);

export default Product;
