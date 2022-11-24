
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Cart from './components/Cart/Cart';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import ProductDetail from './components/ProductDetail/ProductDetail';
import React from 'react'


function App() {

  //create state to hold all the products ordered
  const [cartProducts, setCartProducts] = React.useState([]);

  //create a function used by ProductDetail component
  //to add product to cart
  function addProductCard(productToAdd){
    console.log(productToAdd);
  //if productToAdd is NOT already in the cart,
  //add it with a quantity of 1,
  //otherwise increment quantity of item already in cart

  //look for productToAdd in cartProducts
  const match = cartProducts.find(prod => prod.id === productToAdd.id);
  console.log('match is' + match);
  //if not match is undefined which is "falsy"
  if (!match){
    console.log("first buy");
    let newCart = [...cartProducts, {...productToAdd, quantity: 1}]
    console.log(newCart);
    //make this the new state
    setCartProducts(newCart);
  }else{
    console.log("increase qty")
    updateCartQuantity(match, true);
  }

    //replace the state
    //setCardProducts([...cartProducts, productToAdd]);
  }

  function updateCartQuantity(productToChange, increase){
    //if increase is true, add 1 to quantity
    //if false, subtract 1 from quantity

    let newqty = productToChange.quantity + 1;
    if (!increase){
      newqty = productToChange.quantity - 1;
    }
    const newCart = cartProducts.map(
      prod => productToChange.id === prod.id ?
      {...productToChange, quantity: newqty} : prod
      )
      console.log('newCart', newCart);
      //replace the state with this 
      setCartProducts(newCart);
  }

  function removeFromCart(productToRemove){
    console.log(productToRemove)
    //use filter to create a new array without this product
    const newCartProducts = cartProducts.filter(
      item => item.id !== productToRemove.id
    )
    console.log(newCartProducts)
        //make this the new cartProducts
    setCartProducts(newCartProducts);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/products/:id' element={<ProductDetail
           addProductToCart={addProductCard}/>} />
          <Route path='/cart' element={<Cart 
          cartProducts={cartProducts}
          removeFromCart={removeFromCart}
          updateCartQuantity={updateCartQuantity} />} />
          <Route exact path='/products' element={<Homepage />} />
          <Route path='*' element={<Navigate to="/products" replace />} /> 
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;


 /*
  const product1 = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    };

    const product2 ={
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
      "rate": 4.1,
      "count": 259
      }
      };

      */