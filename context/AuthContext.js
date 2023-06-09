import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { saveDataToStorage } from "./AsyncStorage";
import { BASE_URL, IPv4 } from "../utils/config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState({});
  const [userTokenRegister, setUserTokenRegister] = useState({});
  const [bookingList, setBookingList] = useState([])
  const [bookingListByStatus, setBookingListByStatus] = useState([])
  const [photographerList, setPhotographerList] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const getUserInfo = async (userToken) => {
    // setIsLoading(true);
    try {
      const response = await axios.get(`http://${IPv4}:8448/api/v1/auth/info`, {
        headers: {
          Authorization: `Bearer ${userToken.accessToken}`,
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });

      let userInfo = response.data;
      console.log("Thông tin user: " + JSON.stringify(userInfo));
      setUserInfo(userInfo);
      saveDataToStorage("userInfo", JSON.stringify(userInfo));
    } catch (error) {
      console.log(error);
    }
  };

  const register = (name, username, email, password) => {
    // console.log(name + username + email + password)
    setIsLoading(true);
    axios
      .post(`http://${IPv4}:8448/api/v1/auth/register`, {
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
      .post(`http://${IPv4}:8448/api/v1/auth/login`, {
        username,
        password,
      })
      .then((response) => {
        let userToken = response.data;
        setUserToken(userToken);
        saveDataToStorage("userToken", JSON.stringify(userToken));
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
    setUserTokenRegister({});
  };

  const updateProfile = async (
    name,
    phone,
    email,
    gender,
    dob,
    avatarUrl,
    userToken
  ) => {
    setIsLoading(true);
    await axios
      .put(
        `http://${IPv4}:8448/api/v1/user/profile`,
        {
          name,
          phone,
          email,
          gender,
          dob,
          avatarUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        }
      )
      .then((response) => {
        setIsLoading(false);
        saveDataToStorage("userInfo", JSON.stringify(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        // setIsLogin(false);
      });
  };

  const getListBooking = async (accessToken) => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        hl: "en",
        select: '["$all"]',
        where: "{}",
        limit: "unlimited",
        page: 1,
        order: "[]",
      },
    };
    try {
      const res = await axios.get(
        `http://${IPv4}:8448/api/v1/user/booking`,
        config
      );
      console.log("AccessToken: " + accessToken)
      console.log("List Booking: " + JSON.stringify(res.data.row));
      
      const data = await Promise.all(
        res.data.row.map(async (booking) => {
          const photographerData = await getPhotographerById(booking.photographerId);
          return {
            ...booking,
            photographerData
          };
        })
      );
      setBookingData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getListBookingByStatus = async (status, accessToken) => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        hl: "en",
        select: '["$all"]',
        where: `{"bookingStatus": ${status}}`,
        limit: "unlimited",
        page: 1,
        order: "[]",
      },
    };
    try {
      const res = await axios.get(
        `http://${IPv4}:8448/api/v1/user/booking`,
        config
      );
      console.log("AccessToken: " + accessToken)
      console.log("List Booking By Status: " + JSON.stringify(res.data.row));
      setBookingListByStatus(res.data.row)
    } catch (error) {
      console.error(error);
    }
  };

  const getPhotographerById = async (id) => {
    try {
      const res = await axios.get(
        `http://${IPv4}:8448/api/v1/photographer/${id}`   
      );      
      console.log("Photographer: " + JSON.stringify(res.data));
      return res.data
    } catch (error) {
      console.error(error);
    }
  }

  const getAllPhotographer = async () => {
    const params = {
      hl: "en",
      select: '["$all"]',
      where: "{}",
      limit: "unlimited",
      page: 1,
      order: "[]",
    };
    try {
      const res = await axios.get(
        `http://${IPv4}:8448/api/v1/photographer`,
        { params }
      );
      console.log("Whats: " + res.data);
      setPhotographerList(res.data.row);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
        userTokenRegister,
        bookingList,
        photographerList,
        bookingListByStatus,
        bookingData,
        register,
        login,
        logout,
        updateProfile,
        getListBooking,
        getListBookingByStatus,
        getAllPhotographer,
        getPhotographerById,
        isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
