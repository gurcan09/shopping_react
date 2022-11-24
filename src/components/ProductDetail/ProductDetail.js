import React from 'react'
import axios from 'axios'
import {useParams, UseParams} from 'react-router-dom'
import './ProductDetail.css'

function ProductDetail(props) {

  console.log('need the param');
  const params = useParams();
  console.log(params.id);

  //need state to store the info of this product
  const [selectedProduct, setselectedProduct] = React.useState();

  //call api to get details when the page loads
  React.useEffect( () =>{
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then(res =>{
      console.log(res.data);
      //save this info to state
      setselectedProduct(res.data);
    })
  }, [])
  return (
    <div className='product-cont'>
      <img src={selectedProduct?.image} alt={selectedProduct?.title} />
      <div className='product-info'>
        <h3>{selectedProduct?.title}</h3>
        <p>{selectedProduct?.category}</p>
        <p>{selectedProduct?.price}</p>
        <p>{selectedProduct?.description}</p>
        <button onClick= {()=>props.addProductToCart(selectedProduct)}>Add to Cart</button>

      </div>
    </div>
  )
}

export default ProductDetail