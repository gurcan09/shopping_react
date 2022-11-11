import React from 'react'
import './Product.css';

function Product(props) {
  return (
    <div className="product-card">
        <img className="product-image" src={props.image} alt={props.title}/>
        <div classname="product-info">
          <h3>{props.title}</h3>
          <p>{props.price}</p>
          <p>{props.category}</p>
        </div>  

    </div>
  )
}

export default Product