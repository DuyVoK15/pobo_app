import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SuccessSignupScreen = () => {
  const SuccessIcon = require("../../assets/Success.png");
  const CircleSuccess = require("../../assets/CircleSuccess.png");
  const SuccessIcon2 = require("../../assets/SuccessIcon.png");
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <Image style={styles.circleSuccessIcon} source={CircleSuccess} />
        <Image style={styles.successIcon} source={SuccessIcon} />
      </View> */}
      <Image style={styles.successIcon2} source={SuccessIcon2} />
      <Text style={styles.text1}>Đăng ký thành công</Text>
      <Text style={styles.text2}>Bạn đã đăng kí thành công</Text>

      <View>
        <TouchableOpacity
          style={styles.buttonSignin}
          onPress={() => navigation.navigate("WelcomeScreen")}
        >
          <Text style={styles.buttonSigninText}>Đăng nhập</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#374151",
  },
  text2: {
    color: "#828282",
  },
  //   circleSuccessIcon: {
  //     width: 280,
  //     height: 280,
  //   },
  //   successIcon: {
  //     width: 125,
  //     height: 90,
  //     position: "absolute",
  //   },
  //   imageContainer: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  successIcon2: {
    width: 250,
    height: 200,
  },
  buttonSignin: {
    paddingVertical: 21,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#FE5D26",
    borderRadius: 10,
    marginTop: 200,
  },
  buttonSigninText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0D0D12",
  },
});
export default SuccessSignupScreen;
