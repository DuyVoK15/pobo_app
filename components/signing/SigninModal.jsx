import React, { useContext, useState } from "react";
import { Image } from "expo-image";
import { Swipeable, TextInput } from "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import Modal from "react-native-modal";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import { StatusBar } from "react-native";
import { COLORS } from "../constants";

const SigninModal = ({ navigation }) => {
  const handleNavigateToForgetPassword = () => {
    navigation.push("SendOTP");
    toggleModal();
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setInfoToNull();
  };
  const setInfoToNull = () => {
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };

  // -----------------------------------------------
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const GoogleLogo = require("../../assets/google.png");
  const { login, isLoading, isLogin } = useContext(AuthContext);
  const handleLogin = () => {
    login(username, password);
    // navigation.push('HomeScreen');
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
    // onClose();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.orange50} />
      <TouchableOpacity style={styles.buttonSignin} onPress={toggleModal}>
        <Text style={styles.buttonSigninText}>Đăng nhập</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={["down"]}
        style={styles.modal}
      >
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : null}
            enabled
          >
            <View style={styles.modalContent}>
              <Spinner visible={isLoading} />
              <View>
                <View style={styles.underlineTop}></View>

                <View style={styles.signContainer}>
                  <View style={styles.modalTextContainer}>
                    <Text style={styles.modalText1}>Đăng nhập</Text>
                    {/* <Text style={styles.modalText2}>Đăng nhập</Text> */}
                  </View>
                  <View style={styles.underlineContainer}>
                    <Text style={styles.underline1}></Text>
                    {/* <Text style={styles.underline2}></Text> */}
                  </View>
                </View>

                <View>
                  <Text style={styles.titleText}>Tên đăng nhập</Text>
                  <TextInput
                    style={styles.containerInputText}
                    placeholder="Nhập tên đăng nhập"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                  />
                  <Text style={styles.titleText}>Mật khẩu</Text>
                  <TextInput
                    style={styles.containerInputText}
                    placeholder="Nhập mật khẩu"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                  />
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.buttonForget}
                    onPress={handleNavigateToForgetPassword}
                    activeOpacity={1}
                  >
                    <Text style={styles.titleForget}>Quên mật khẩu?</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.errorMessageText}>{errorMessage}</Text>
                <View style={styles.listButtonContainer}>
                  <View>
                    <TouchableOpacity
                      style={styles.buttonSignin}
                      onPress={handleLogin}
                    >
                      <Text style={styles.buttonSigninText}>Đăng nhập</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.underline}></Text>

                  <View>
                    <TouchableOpacity
                      style={styles.buttonSigninGoogle}
                      onPress={() => navigation.push("UserProfile")}
                    >
                      <Image
                        style={{ width: 32, height: 32 }}
                        source={GoogleLogo}
                      />
                      <Text style={styles.buttonSigninGoogleText}>
                        Đăng nhập với Google
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 60,
  },
  signContainer: {
    marginBottom: 20,
  },
  modalTextContainer: {
    flexDirection: "row",
  },
  modalText1: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  modalText2: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#CBD4E1",
    marginLeft: 11,
  },
  closeButton: {
    backgroundColor: "#FE5D26",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  underlineTop: {
    backgroundColor: "#CBD4E1",
    height: 7,
    width: "20%",
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 30,
  },
  underlineContainer: {
    flexDirection: "row",
  },
  underline1: {
    height: 4,
    backgroundColor: "orange",
    width: "25%",
    borderRadius: 30,
    zIndex: 3,
  },
  underline2: {
    height: 4,
    backgroundColor: "#CBD4E1",
    width: "22%",
    zIndex: 2,
  },
  containerInputText: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 17,
    marginBottom: 10,
    borderColor: "#CBD4E1",
    fontSize: 16,
  },
  input: {},
  titleText: {
    fontSize: 15,
    marginBottom: 4,
  },
  listButtonContainer: {
    marginTop: 20,
  },
  buttonSignin: {
    paddingVertical: 21,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#FEEAD3",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonSigninText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FE5D26",
  },
  buttonSigninGoogle: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#E2E8F0",
    textColor: "#0D0D12",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonSigninGoogleText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 18,
  },
  underline: {
    backgroundColor: "#CBD4E1",
    height: 1,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
  },
  buttonForget: {
    alignSelf: "flex-end",
  },
  titleForget: {
    fontWeight: "bold",
    color: "#FE5D26",
  },
  errorMessageText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});
export default SigninModal;
