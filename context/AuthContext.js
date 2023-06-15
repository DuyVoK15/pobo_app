import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { saveDataToStorage } from "./AsyncStorage";
import { BASE_URL, IPv4 } from "../utils/config";
export const AuthContext = createContext();
import ApiService from "./ApiService";

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState({});
  const [userTokenRegister, setUserTokenRegister] = useState({});
  const [bookingList, setBookingList] = useState([]);
  const [countAllBooking, setCountAllBooking] = useState("");
  const [bookingListByStatus, setBookingListByStatus] = useState([]);
  const [photographerList, setPhotographerList] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [bookingAfterCreating, setBookingAfterCreating] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const getUserInfo = async () => {
    // setIsLoading(true);
    try {
      const res = await axios.get(`http://${IPv4}:8448/api/v1/auth/info`, {
        headers: {
          Authorization: `Bearer ${userToken.accessToken}`,
        },
      });

      console.log("Thông tin user: " + JSON.stringify(res.data));
      setUserInfo(res.data);
      saveDataToStorage("userInfo", JSON.stringify(res.data));
      return res.data
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
        console.error(error);
        setIsLoading(false);
        // setIsLogin(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    try {
      AsyncStorage.removeItem("userToken");
      AsyncStorage.removeItem("userTokenRegister");
      AsyncStorage.removeItem("userInfo");
      setUserToken({});
      setUserInfo({});
      setUserTokenRegister({});
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
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

  const sendOtp = async (username) => {
    try {
      const res = await ApiService.sendOtp(username);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async (username, otp, newPassword) => {
    try {
      const res = await ApiService.verifyOtp(username, otp, newPassword);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getListBooking = async (accessToken) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken.accessToken}`,
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
      console.log("AccessToken: " + accessToken);
      console.log("List Booking: " + JSON.stringify(res.data.row));

      const data = await Promise.all(
        res.data.row.map(async (booking) => {
          const packageShootingData = await getPackageShootingById(
            booking.packageShootingId
          );
          return {
            ...booking,
            packageShootingData,
          };
        })
      );
      setBookingList(res.data.row);
      setBookingData(data);
      setCountAllBooking(res.data.count);
      console.log("[COUNT] " + res.data.count);
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
      console.log("AccessToken: " + accessToken);
      console.log("List Booking By Status: " + JSON.stringify(res.data.row));
      setBookingListByStatus(res.data.row);
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
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

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
      const res = await axios.get(`http://${IPv4}:8448/api/v1/photographer`, {
        params,
      });
      console.log("Whats: " + res.data);
      setPhotographerList(res.data.row);
    } catch (error) {
      console.error(error);
    }
  };

  const createBookingById = async (
    startTime,
    endTime,
    address,
    photographerId
  ) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `http://${IPv4}:8448/api/v1/booking`,
        {
          startTime,
          endTime,
          address,
          photographerId,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken.accessToken}`,
          },
        }
      );

      console.log("Tạo lịch thành công: \n" + JSON.stringify(res.data));
      setIsLoading(false);
      setBookingAfterCreating(res.data);
      setBookingSuccess(true);
    } catch (error) {
      console.error(error);
      console.log("Tạo lịch thất bại!");
      setIsLoading(false);
      setBookingSuccess(false);
    }
  };

  const getAllListPackageShooting = async () => {
    try {
      const res = await ApiService.getAllListPackageShooting();
      console.log("Dữ liệu gói chụp tổng: \n" + JSON.stringify(res.data));

      const data = await Promise.all(
        res.data.row.map(async (packageShooting) => {
          const photographerData = await getPhotographerById(
            packageShooting.photographerId
          );
          return {
            ...packageShooting,
            photographerData,
          };
        })
      );

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllListPackageShootingByPhotographerId = async (photographerId) => {
    try {
      const res = await ApiService.getAllListPackageShootingByPhotographerId(photographerId);

      const data = await Promise.all(
        res.data.row.map(async (packageShooting) => {
          const photographerData = await getPhotographerById(
            packageShooting.photographerId
          );
          return {
            ...packageShooting,
            photographerData,
          };
        })
      );
        console.log(JSON.stringify(data) + "getAllListPackageShootingByPhotographerId")
      return data;
    } catch (error) {
      console.error(error)
    }
  }

  const getPackageShootingById = async (id) => {
    try {
      const res = await ApiService.getPackageShootingById(id);
      console.log("Dữ liệu package by id: \n" + JSON.stringify(res.data));

      const data = await (async () => {
        const photographerData = await getPhotographerById(
          res.data.photographerId
        );
        return {
          ...res.data,
          photographerData,
        };
      })();
      return data;
      console.log("Dữ liệu CÓ PHOTOGRAPHER: \n" + JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
        userInfo,
        userTokenRegister,
        bookingList,
        photographerList,
        bookingListByStatus,
        bookingData,
        countAllBooking,
        bookingAfterCreating,
        bookingSuccess,
        register,
        login,
        logout,
        getUserInfo,
        updateProfile,
        getListBooking,
        getListBookingByStatus,
        getAllPhotographer,
        getPhotographerById,
        createBookingById,
        sendOtp,
        verifyOtp,
        getAllListPackageShooting,
        getPackageShootingById,
        getAllListPackageShootingByPhotographerId,
        isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
