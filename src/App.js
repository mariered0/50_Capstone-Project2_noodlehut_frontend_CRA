import React, { useEffect, useState } from 'react';
import AppRoutes from "./AppRoutes";
import UserContext from "./user/UserContext";
import NoodleHutApi from './api/api';
import useLocalStorage from "./hooks/useLocalStorage";
import * as jose from 'jose';
import Loading from "./common/Loading";


import './App.css';


function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        // setIsLoading(false);
      }
      getCurrentUser();
    },
    [token]
  );

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
        <AppRoutes />
      </UserContext.Provider>
    </div>
  );
}


export default App;
