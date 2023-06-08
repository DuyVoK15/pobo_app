import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { saveDataToStorage } from "./AsyncStorage";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState({});
  const [userTokenRegister, setUserTokenRegister] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const getUserInfo = async (userToken) => {
    // setIsLoading(true);
    try {
      const response = await axios.get(
        "http://192.168.1.7:8448/api/v1/auth/info",
        {
          headers: {
            Authorization: `Bearer ${userToken.accessToken}`,
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        }
      );

      let userInfo = response.data;
      console.log("Thông tin user: " + JSON.stringify(userInfo));
      setUserInfo(userInfo);
      saveDataToStorage(
        "userInfo",
        JSON.stringify(userInfo)
      );
      
      
    } catch (error) {
      console.log(error);
    }
  };

  const register = (name, username, email, password) => {
    // console.log(name + username + email + password)
    setIsLoading(true);
    axios
      .post("http://192.168.1.7:8448/api/v1/auth/register", {
        name,
        username,
        email,
        password,
      })
      .then((response) => {
        let userTokenRegister = response.data;
        setUserTokenRegister(userTokenRegister);
        saveDataToStorage(
          "userTokenRegister",
          JSON.stringify(userTokenRegister)
        );
        setIsLoading(false);
        console.log(userTokenRegister);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const login = (username, password) => {
    setIsLoading(true);
    axios
      .post("http://192.168.1.7:8448/api/v1/auth/login", {
        username,
        password,
      })
      .then((response) => {
        let userToken = response.data;
        setUserToken(userToken);
        saveDataToStorage("userToken", JSON.stringify(userToken))
        setIsLoading(false);
        console.log(userToken);
        getUserInfo(userToken);
        // setIsLogin(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        // setIsLogin(false);
      });
  };

  const logout = () => {
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userTokenRegister");
    AsyncStorage.removeItem("userInfo");
    setUserToken({});
    setUserInfo({});
    setUserTokenRegister({})
  };

  const updateProfile = async (name, phone, email, gender, dob, avatarUrl, userToken) => {
    setIsLoading(true);
    await axios
      .put("http://192.168.1.7:8448/api/v1/user/profile", {
        name,
        phone,
        email,
        gender,
        dob,
        avatarUrl,
      }, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      })
      .then((response) => {
        setIsLoading(false);
        saveDataToStorage(
          "userInfo",
          JSON.stringify(response.data)
        );
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        // setIsLogin(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
        userTokenRegister,
        register,
        login,
        logout,
        updateProfile,
        isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
