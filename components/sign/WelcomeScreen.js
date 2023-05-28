import React, { useState } from "react";
import { Image } from "expo-image";
import "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";

import SignupModal from "./SignupModal";
import SigninModal from "./SigninModal";
// import { useNavigation } from "@react-navigation/native";
// import {
//   FontFamily,
//   FontSize,
//   Color,
//   Padding,
//   Border,
// } from "../../GlobalStyles";

const WelcomeScreen = () => {
  // const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo/logo.png")}
          style={styles.logo}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Chào mừng</Text>
        <Text style={styles.text2}>
          Để sử dụng ứng dụng đặt nhiếp ảnh gia, xin hãy kí tài khoản trước
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <SignupModal
        
          title="Đăng ký"
          backgroundColor="#FE5D26"
          textColor="#0D0D12"
          accessibilityLabel="Đăng ký"
          marginTop={20}
          borderRadius={10}
        />
        <SigninModal
          
          title="Đăng nhập"
          backgroundColor="#FEEAD3"
          textColor="#FE5D26"
          accessibilityLabel="Đăng nhập"
          marginTop={15}
          borderRadius={10}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    width: 300,
  },
  text1: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    fontSize: 15,
    textAlign: "center",
  },
  logoContainer: {
    width: 300,
  },
  logo: {
    width: 300, // Điều chỉnh kích thước của hình ảnh
    height: 250,
    alignSelf: "center", // Căn giữa theo chiều ngang
  },
 
  
  
});
export default WelcomeScreen;
