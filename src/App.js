import React, { useEffect, useState } from 'react';
import AppRoutes from "./AppRoutes";
// import UserContext from "./user/UserContext";
// import NoodleHutApi from './api/api';
// import useLocalStorage from "./hooks/useLocalStorage";
import jwt from "jsonwebtoken";
import './App.css';


function App() {
  // const [token, setToken] = useLocalStorage("token", null);
  // const [currentUser, setCurrentUser] = useState(null);

  // async function signup(data) {
  //   try{
  //     let token = await NoodleHutApi.signup(data);
  //     setToken(token);
  //     return { success: true }
  //   } catch(e) {
  //     console.error("signup failed", e);
  //     return { success: false, e}
  //   }
  // };

  // async function login(data) {
  //   try{
  //     let token = await NoodleHutApi.login(data);
  //     setToken(token);
  //     return { success: true }
  //   } catch (e) {
  //     console.error("login failed", e);
  //     return { success: false, e };
  //   }
  // };

  // async function logout() {
  //   setCurrentUser(null);
  //   setToken(null);
  // };

  // useEffect(
  //   function getUserData() {
  //     async function getCurrentUser() {
  //       try{
  //         //decode the token to get username
  //         if(token){
  //           const { username } = jwt.decode(token);
  //           NoodleHutApi.token = token;
  //           const user = await NoodleHutApi.currentUser(username);
  //           setCurrentUser(user);
  //         }
  //       } catch (e){
  //         console.error("getCurrentUser failed", e);
  //       }
  //     }
  //     getCurrentUser();
  //   },
  //   [token]
  // );



  return (
    <div className="App">
      {/* <UserContext.Provider
        value={{ token, currentUser, setCurrentUser, signup, login, logout }}
      > */}
        <AppRoutes />
      {/* </UserContext.Provider> */}
    </div>
  );
}


export default App;
