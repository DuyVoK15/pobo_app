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
import { AuthContext } from "../../context/AuthContext";
const SendOTP = ({navigation}) => {
    const [username, setUsername] = useState("")
    const {sendOtp} = useContext(AuthContext)

    const handleSendOtp = async () => {
      try {
        const res = await sendOtp(username);
        console.log(res)
       
          navigation.navigate("VerifyOTP", {username: username})
       
      } catch (error) {
        console.error(error)
      }
        
    }

    
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Quên mật khẩu</Text>
      <Text style={styles.text2}>Nhập tên tài khoản</Text>
      <View>
        {/* <Text style={styles.titleText}>Email</Text> */}
        <TextInput
          style={styles.containerInputText}
          placeholder="Nhập tên tài khoản"
          value={username}
          secureTextEntry
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.buttonSignin} onPress={handleSendOtp}>
          <Text style={styles.buttonSigninText}>Gửi mã OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  containerInputText: {
    borderWidth: 1,
    width: 300,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    marginTop: 50,
    borderColor: "#CBD4E1",
    fontSize: 16,
  },
  titleText: {
    fontSize: 18,
    marginBottom: 4,
  },
  buttonSignin: {
    paddingVertical: 21,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#FE5D26",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonSigninText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
});

export default SendOTP;
