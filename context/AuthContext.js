import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { saveDataToStorage } from "./AsyncStorage";
import { BASE_URL, IPv4 } from "../utils/config";
export const AuthContext = createContext();
import ApiService from "./ApiService";

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userTokenRegister, setUserTokenRegister] = useState(null);
  const [bookingList, setBookingList] = useState([]);
  const [countAllBooking, setCountAllBooking] = useState("");
  const [countPendingBooking, setCountPendingBooking] = useState("");
  const [countAcceptBooking, setCountAcceptBooking] = useState("");
  const [countDoneBooking, setCountDoneBooking] = useState("");
  const [countCancelBooking, setCountCancelBooking] = useState("");
  const [photographerList, setPhotographerList] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [bookingAfterCreating, setBookingAfterCreating] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [packageShooting, setPackageShooting] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      // Kiểm tra xem userToken có tồn tại hay không
      if (userToken !== null) {
        // Đã đăng nhập trước đó, thực hiện các thao tác tiếp theo
        console.log(userToken);
        setIsLoggedIn(true);
      } else {
        // Chưa đăng nhập
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log("Error retrieving userToken from AsyncStorage:", error);
    }
  };

  const getUserInfo = async () => {
    // setIsLoading(true);
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      const res = await axios.get(`http://${IPv4}:8448/api/v1/auth/info`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(userToken).accessToken}`,
        },
      });
      
      console.log("Thông tin user: " + JSON.stringify(res.data));
      setUserInfo(res.data);
      saveDataToStorage("userInfo", JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (name, username, email, password) => {
    // console.log(name + username + email + password)
    setIsLoading(true);
    await axios
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

  const login = async (username, password) => {
    setIsLoading(true);
    await axios
      .post(`http://${IPv4}:8448/api/v1/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        console.log("DUYDEPTRAI: " + JSON.stringify(res.data));
        const userToken = res.data;
        setUserToken(userToken);
        saveDataToStorage("userToken", JSON.stringify(userToken));
        setIsLoggedIn(true);
        getUserInfo();
        setIsLoading(false);
        // console.log(userToken);

        // setIsLogin(true);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        // setIsLogin(false);
      });
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem("userToken");
      await AsyncStorage.removeItem("userTokenRegister");
      await AsyncStorage.removeItem("userInfo");
      setIsLoggedIn(false);
      setUserToken({});
      setUserInfo({});
      setUserTokenRegister({});
      setIsLoading(false);
      console.log("Bạn vừa đăng xuất!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const updateProfile = async (name, phone, email, gender, dob, avatarUrl) => {
    setIsLoading(true);
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      const res = await axios.put(
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
            Authorization: `Bearer ${JSON.parse(userToken).accessToken}`,
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        }
      );

      setIsLoading(false);
      saveDataToStorage("userInfo", JSON.stringify(res.data));
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const sendOtp = async (username) => {
    try {
      const res = await ApiService.sendOtp(username);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async (username, otp, newPassword) => {
    try {
      const res = await ApiService.verifyOtp(username, otp, newPassword);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getListBooking = async () => {
    setIsLoading(true);

    try {
      const userToken = await AsyncStorage.getItem("userToken");
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(userToken).accessToken}`,
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
      const res = await axios.get(
        `http://${IPv4}:8448/api/v1/user/booking`,
        config
      );
      console.log("AccessToken: ");
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
      setIsLoading(false);
      console.log("[COUNT] " + res.data.count);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getListBookingByStatus = async (status) => {
    setIsLoading(true);
    const userToken = await AsyncStorage.getItem('userToken');
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(userToken).accessToken}`,
      },
      params: {
        hl: "en",
        select: '["$all"]',
        where: `{"bookingStatus": "${status}"}`,
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
      // setBookingList(res.data.row);
      // setBookingData(data);
      // setCountAllBooking(res.data.count);
      if(status==="PENDING"){
        setCountPendingBooking(res.data.count);
      } else if (status==="ACCEPT"){
        setCountAcceptBooking(res.data.count)
      } else if (status==="DONE") {
        setCountDoneBooking(res.data.count)
      } else {
        setCountCancelBooking(res.data.count)
      }
      setIsLoading(false);
      console.log("[COUNT] " + res.data.count);
      return data;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
      console.log(error);
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
      console.log(error);
    }
  };

  const createBookingById = async (startTime, address, packageShootingId) => {
    setIsLoading(true);
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      const res = await axios.post(
        `http://${IPv4}:8448/api/v1/booking`,
        {
          startTime,
          address,
          packageShootingId,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken).accessToken}`,
          },
        }
      );

      console.log("Tạo lịch thành công: \n" + JSON.stringify(res.data));
      setIsLoading(false);
      setBookingAfterCreating(res.data);
      setBookingSuccess(true);
      return res.data;
    } catch (error) {
      console.log(error);
      console.log("Tạo lịch thất bại!");
      setIsLoading(false);
      setBookingSuccess(false);
    }
  };

  const getAllListPackageShooting = async () => {
    try {
      const res = await ApiService.getAllListPackageShooting();
      // console.log("Dữ liệu gói chụp tổng: \n" + JSON.stringify(res.data));

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
      console.log(error);
    }
  };

  const getAllListPackageShootingByPhotographerId = async (photographerId) => {
    try {
      const res = await ApiService.getAllListPackageShootingByPhotographerId(
        photographerId
      );

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
      // console.log(
      //   JSON.stringify(data) + "getAllListPackageShootingByPhotographerId"
      // );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPackageShootingById = async (id) => {
    setIsLoading(true);
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
      saveDataToStorage("packageShootingById", JSON.stringify(data));
      setIsLoading(false);
      setPackageShooting(data);
      console.log("Dữ liệu CÓ PHOTOGRAPHER: \n" + JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(error);
      console.log("KHÔNG CÓ getPackageShootingById");
      setIsLoading(false);
    }
  };

  const buyCoinRequest = async (amount, platform) => {
    setIsLoading(true);
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      const res = await ApiService.buyCoinRequest(
        amount,
        platform,
        JSON.parse(userToken).accessToken
      );
      console.log("Dữ liệu MUA TIỀN: \n" + JSON.stringify(res.data));
      getUserInfo();
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const updateBookingStatus = async (id, bookingStatus) => {
    const userToken = await AsyncStorage.getItem("userToken");
    try {
      const res = await ApiService.updateBookingStatus(id, bookingStatus, JSON.parse(userToken).accessToken);
      console.log(JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      
    }
  }



  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
        userInfo,
        userTokenRegister,
        bookingList,
        photographerList,
        bookingData,
        countAllBooking,
        bookingAfterCreating,
        bookingSuccess,
        packageShooting,
        countPendingBooking,
        countAcceptBooking,
        countDoneBooking,
        countCancelBooking,
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
        buyCoinRequest,
        updateBookingStatus,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
