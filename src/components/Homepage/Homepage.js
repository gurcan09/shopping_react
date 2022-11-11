import React from 'react'

function Homepage() {

    //create function to get the products
    const fetchProducts = ()=>{
        console.log("fetch");
    }
  return (
    <button onClick = {fetchProducts}>Fetch Products</button>
  )
}

export default Homepage