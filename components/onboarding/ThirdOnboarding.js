import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

const ThirdOnboarding = ({navigation}) => {
  const ThirdOnboarding = require("../../assets/ThirdOnboarding.png");
  // const navigation = useNavigation()
  const handleNavigation = () => {
    navigation.push("WelcomeScreen")
  }
  return (
    <View style={styles.container}>
      
      <Image style={styles.ThirdOnboarding} source={ThirdOnboarding} />
      <View style={styles.textContainer}>
      <Text style={styles.text1}>Giá thành hợp lý nhưng chất lượng miễn chê</Text>
      <Text style={styles.text2}>Không cần phải tốn nhiều tiền vào những bộ ảnh mắc tiền, với PoBo, bạn có thể dễ dàng trải nghiệm dịch vụ chuyên nghiệp nhất!</Text>
      
      </View>
      

      <View>
        <TouchableOpacity
          style={styles.buttonSignin}
          onPress={handleNavigation}
        >
          <Text style={styles.buttonSigninText}>Bỏ qua</Text>
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
  textContainer: {
    width: 300,
    marginTop: 50
  },
  text1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#374151",
    textAlign: "center"
  },
  text2: {
    color: "#828282",
    textAlign: "center"
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
  ThirdOnboarding: {
    width: 300,
    height: 300,
    
  },
  buttonSignin: {
    paddingVertical: 21,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#FEEAD3",
    borderRadius: 10,
    marginTop: 120,
  },
  buttonSigninText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FE5D26",
  },
});
export default ThirdOnboarding;
