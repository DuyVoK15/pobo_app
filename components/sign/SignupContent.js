import { View, Text, StyleSheet } from "react-native";
import CustomInput from "./CustomInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  borderRadius,
}) => {
  const buttonStyle = [
    styles.button,
    {
      backgroundColor,
      margin,
      marginTop,
      marginLeft,
      marginRight,
      borderRadius,
    },
  ];
  const textStyle = [styles.buttonText, { color: textColor }];
  return (
    <View>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const SignupContent = () => {
  return (
    <View>
      <View style={styles.underlineTop}></View>

      <View style={styles.signContainer}>
        <View style={styles.modalTextContainer}>
          <Text style={styles.modalText1}>Đăng ký</Text>
          {/* <Text style={styles.modalText2}>Đăng nhập</Text> */}
        </View>
        <View style={styles.underlineContainer}>
          <Text style={styles.underline1}></Text>
          {/* <Text style={styles.underline2}></Text> */}
        </View>
      </View>

      <View>
        <Text style={styles.titleText}>Tên đầy đủ</Text>
        <CustomInput placeholder="Nhập tên đầy đủ" onChangeText={""} />
        <Text style={styles.titleText}>Email</Text>
        <CustomInput placeholder="Nhập email" onChangeText={""} />
        <Text style={styles.titleText}>Mật khẩu</Text>
        <CustomInput placeholder="Nhập mật khẩu" onChangeText={""} />
      </View>

      <View style={styles.listButtonContainer}>
        <CustomButton
          onPress={() => console.log("Bạn vừa nhất nút đăng ký!")}
          title="Đăng ký"
          backgroundColor="#FE5D26"
          textColor="#0D0D12"
          accessibilityLabel="Đăng ký"
          marginTop={20}
          borderRadius={10}
        />

        <Text style={styles.underline}></Text>

        <CustomButton
          onPress={() => console.log("Bạn vừa nhấn nút đăng nhập với Google!")}
          title="Đăng nhập với Google"
          backgroundColor="#E2E8F0"
          textColor="#0D0D12"
          accessibilityLabel="Đăng nhập với Google"
          marginTop={10}
          borderRadius={10}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // modalContainer: {
  //   flex: 1,
  //   justifyContent: "flex-end",
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  // },
  // modalContent: {
  //   backgroundColor: "#FFFFFF",
  //   padding: 20,
  //   height: 600,
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  // },
  underlineTop: {
    backgroundColor: "#CBD4E1",
    height: 7,
    width: "20%",
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 30
  },
  underline: {
    backgroundColor: "#CBD4E1",
    height: 1,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
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
  //   listButtonContainer: {
  //     justifyContent: "center"
  //   },
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
  underlineContainer: {
    flexDirection: "row",
  },
  underline1: {
    height: 4,
    backgroundColor: "orange",
    width: "20%",
    borderRadius: 30,
    zIndex: 3,
  },
  underline2: {
    height: 4,
    backgroundColor: "#CBD4E1",
    width: "22%",
    zIndex: 2,
  },
  titleText: {
    fontSize: 15,
    marginBottom: 4,
  },
});

export default SignupContent;
