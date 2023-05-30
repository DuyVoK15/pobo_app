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
  const VerifyOTP = () => {
  
      // const navigation = useNavigation()
      // const handleNavigation = () => {
      //     navigation.navigate("VerifyOTP")
      // }
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Nhập mã OTP</Text>
        <Text style={styles.text2}>Nhập mã OTP mà chúng tôi đã gửi đến email mà bạn đã cung cấp</Text>
        <View>
          {/* <Text style={styles.titleText}>Email</Text> */}
          <TextInput
            style={styles.containerInputText}
            placeholder="Nhập OTP"
            value={""}
            secureTextEntry
            onChangeText={""}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.buttonSignin} onPress={""}>
            <Text style={styles.buttonSigninText}>Xác thực OTP</Text>
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
  
  export default VerifyOTP;
  