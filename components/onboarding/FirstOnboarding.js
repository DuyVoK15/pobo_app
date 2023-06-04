import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image,TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

const FirstOnboarding = ({navigation}) => {
  const FirstOnboarding = require("../../assets/FirstOnboarding.png");
  // const navigation = useNavigation()
  const handleNavigation = () => {
    navigation.push("WelcomeScreen")
  }
  return (
    <View style={styles.container}>
      
      <Image style={styles.FirstOnboarding} source={FirstOnboarding} />
      <View style={styles.textContainer}>
      <Text style={styles.text1}>Tìm thợ chụp ảnh gần bạn</Text>
      <Text style={styles.text2}>Bạn không cần phải đến tận Studio để chụp ảnh nữa.</Text>
      <Text style={styles.text2}>Giờ đây, với PoBo, bạn có thể nhanh chóng tìm được nhiếp ảnh
      gia ở gần bạn, giúp bạn chụp những bức ảnh đẹp!</Text>
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
    marginTop: 0
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
  FirstOnboarding: {
    width: 300,
    height: 178,
    
  },
  buttonSignin: {
    paddingVertical: 21,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#FEEAD3",
    borderRadius: 10,
    marginTop: 200,
  },
  buttonSigninText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FE5D26",
  },
});
export default FirstOnboarding;
