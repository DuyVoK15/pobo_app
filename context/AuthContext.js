import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [userInfoRegisger, setUserInfoRegisger] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false)
  const register = (name, username, email, password) => {
    // console.log(name + username + email + password)
    setIsLoading(true);
    axios
      .post("http://192.168.1.5:8448/api/v1/auth/register", {
        name,
        username,
        email,
        password,
      })
      .then((response) => {
        let userInfoRegisger = response.data;
        setUserInfoRegisger(userInfoRegisger);
        AsyncStorage.setItem("userInfoRegisger", JSON.stringify(userInfoRegisger));
        setIsLoading(false);
        console.log(userInfoRegisger);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const login = (username, password) => {
    setIsLoading(true);
    axios
      .post("http://192.168.1.5:8448/api/v1/auth/login", {
        username,
        password,
      })
      .then((response) => {
        let userInfo = response.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
        setIsLogin(true)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsLogin(false)
      });
  }
  
  return (
    <AuthContext.Provider value={{ isLoading, userInfo, userInfoRegisger, register, login, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
