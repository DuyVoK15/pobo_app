import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SecondOnboarding = () => {
  const SecondOnboarding = require("../../assets/SecondOnboarding.png");
  const navigation = useNavigation()
  const handleNavigation = () => {
    navigation.navigate("WelcomeScreen")
  }
  return (
    <View style={styles.container}>
      
      <Image style={styles.SecondOnboarding} source={SecondOnboarding} />
      <View style={styles.textContainer}>
      <Text style={styles.text1}>Lựa chọn những gói chụp ưng ý</Text>
      <Text style={styles.text2}>PoBo giúp bạn đưa ra những gói chụp phù hợp với nhu cầu cũng như sở thích của bạn!</Text>
     
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
  SecondOnboarding: {
    width: 300,
    height: 250,
    
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
export default SecondOnboarding;
