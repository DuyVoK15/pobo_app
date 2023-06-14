import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import { Swipeable, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import ButtonStyle from "../../styles/ButtonStyle";
import { COLORS, SHADOWS, SIZES } from "../constants";
import InputTextStyle from "../../styles/InputTextStyle";
import ApiService from "../../context/ApiService";
import { AuthContext } from "../../context/AuthContext";
const VerifyOTP = ({ navigation, route }) => {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { username } = route.params;
  const {verifyOtp} = useContext(AuthContext)
  const handleOtpChange = (text, index) => {
    let newOtp = otp;
    newOtp = newOtp.substr(0, index) + text + newOtp.substr(index + 1);
    setOtp(newOtp);
    console.log(otp);
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await verifyOtp(username, otp, newPassword);
      console.log(username)
      console.log(otp)
      console.log(newPassword);
      // navigation.push("NewPassword");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Nhập mã OTP</Text>
      <Text style={styles.text2}>
        Mã OTP đã gửi đến email mà bạn đã liên kết với tài khoản. Vui lòng kiểm
        tra hộp thư.
      </Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[0]}
          onChangeText={(text) => handleOtpChange(text, 0)}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[1]}
          onChangeText={(text) => handleOtpChange(text, 1)}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[2]}
          onChangeText={(text) => handleOtpChange(text, 2)}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[3]}
          onChangeText={(text) => handleOtpChange(text, 3)}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[4]}
          onChangeText={(text) => handleOtpChange(text, 4)}
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          value={otp[5]}
          onChangeText={(text) => handleOtpChange(text, 5)}
        />
      </View>

      <View style={{ width: 326 }}>
        <TextInput
          style={styles.inputText}
          placeholder="Nhập mật khẩu mới"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSignup} onPress={handleVerifyOtp}>
          <Text style={styles.buttonSignupText}>Xác thực OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text2: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 2,
    borderColor: COLORS.boder40,
    borderRadius: 5,
    fontSize: SIZES.xxLarge,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 10,
    textAlign: "center",
  },
  inputText: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: COLORS.boder40,
    borderRadius: 5,
    fontSize: SIZES.large,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 10,
  },
  // buttonSignin: {
  //   backgroundColor: '#00c',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  // },
  // buttonSigninText: {
  //   color: '#fff',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  buttonContainer: {
    marginTop: 40,
  },
  buttonSignup: {
    paddingVertical: 21,
    paddingHorizontal: 20,
    width: 350,
    alignSelf: "center",
    backgroundColor: "#FE5D26",
    textColor: "#0D0D12",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonSignupText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default VerifyOTP;
