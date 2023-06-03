import React, { useEffect, useState } from 'react';
import AppRoutes from "./AppRoutes";
import Cart from "./cart/Cart";
import UserContext from "./user/UserContext";
import CartContext from "./cart/CartContext";
import NoodleHutApi from './api/api';
import useLocalStorage from "./hooks/useLocalStorage";
import * as jose from 'jose';
import Loading from "./common/Loading";


import './App.css';


function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(null);


  async function signup(data) {
    try{
      let token = await NoodleHutApi.signup(data);
      setToken(token);
      return { success: true }
    } catch(e) {
      console.error("signup failed", e);
      return { success: false, e}
    }
  };

  async function signin(data) {
    try{
      let token = await NoodleHutApi.login(data);
      setToken(token);
      return { success: true }
    } catch (e) {
      console.error("signin failed", e);
      return { success: false, e };
    }
  };

  async function signout() {
    setCurrentUser(null);
    setToken(null);
  };

  useEffect(
    function getUserData() {
      async function getCurrentUser() {
        try{
          //decode the token to get username
          if(token){
            const { username } = jose.decodeJwt(token);
            NoodleHutApi.token = token;
            const user = await NoodleHutApi.currentUser(username);
            setCurrentUser(user);
            console.log('current user:', user);
          }
        } catch (e){
          console.error("getCurrentUser failed", e);
        }
        setIsLoading(false);
      }
      getCurrentUser();
    },
    [token]
  );


  /** Functions to set items in Cart.
   * the form of the cart state: [ { id, quantity }, { id, quantity }...]
   * 
   */
  
  //helper method for addToCart/removeFromCart
  function getItemQuantity(id){
    //if item is not in cart, it won't try to get quantity
    cart.find(item => item.id === id)?.quantity;

    if(quantity === undefined) {
      return 0;
    };
    return quantity;
  };

  //function to increment item in the cart
  function addToCart(id) {
    const quantity = getItemQuantity(id);

    if (quantity === 0){
      setCart([
        ...cart,
        {
          id: id, 
          quantity: 1
        }
      ])

    }else{ //if the item is already in cart
      setCart(cart.map(item => item.id === id
        ? {...item, quantity: item.quantity + 1}
        : item))
    }
    //update the cart item in localStorage
    //display the cart component\
    console.log('cart:', cart)
  };

  //function to delete the item from cart
  function deleteFromCart(id) {
    setCart(cartItems => cartItems.filter(currentItem => {
      return currentItem.id != id
    }))
  };

  //function to decrement item in the cart
  function removeOneFromCart(id){
    const quantity = getItemQuantity(id);

    if(quantity === 1){
      deleteFromCart(id);
    }else{
      setCart(cart.map(item => item.id === id
        ? {...item, quantity: item.quantity - 1}
        : item))
    }
  };

  //function to remove everything from the cart
  function deleteAllFromCart(){
  }

  function getTotalCost() {
    let total = 0;
    cart.map((cartItem) => {
      const itemData = NoodleHutApi.get()
    })
  }

  
  







  if (isLoading){
    return (
      <Loading />
      );
  };
  

  return (
    <div className="App">
      <UserContext.Provider
        value={{ token, currentUser, setCurrentUser, signup, signin, signout }}
      >
        <CartContext.Provider
          value={{ cart, setCart, addToCart, removeFromCart }}
        >
         <Cart />
         <AppRoutes />
        </CartContext.Provider>       
      </UserContext.Provider>
    </div>
  );
}


export default App;
