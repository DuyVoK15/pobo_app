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
  KeyboardAvoidingView,
} from "react-native";

import SignupModal from "./SignupModal";
import SigninModal from "./SigninModal";

const WelcomeScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled
      >
        <View>
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
          <SignupModal navigation={navigation} />
          <SigninModal navigation={navigation} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 100,
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
