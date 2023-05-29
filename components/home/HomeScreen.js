import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  const avatarDuy = require("../../assets/avatarDuy.jpg");

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("WelcomeScreen")
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <Image style={styles.circleSuccessIcon} source={CircleSuccess} />
        <Image style={styles.successIcon} source={SuccessIcon} />
      </View> */}
      <Image style={styles.avatarDuy} source={avatarDuy} />
      <Text style={styles.text1}>Bạn đang ở trang Home</Text>
      <Text style={styles.text2}>Hãy tận hưởng khoảnh khắc đẹp</Text>
      <Text style={styles.text2}>Hãy tìm kiếm cho mình thợ chụp ảnh ưng ý</Text>

      <View>
        <TouchableOpacity
          style={styles.buttonSignin}
          onPress={handleNavigation}
        >
          <Text style={styles.buttonSigninText}>Đăng xuất</Text>
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
  avatarDuy: {
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
export default HomeScreen;
