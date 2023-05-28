import React, { useState } from "react";
import { Image } from "expo-image";
import "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal"
import SignupContent from "./SignupContent";

const SignupModal = ({
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    // <>
    //   <TouchableOpacity style={buttonStyle} onPress={toggleModal}>
    //     <Text style={textStyle}>{title}</Text>
    //   </TouchableOpacity>

    //   <Modal
    //     visible={isModalVisible}
    //     animationType="slide"
    //     transparent={true}

    //     // swipeDirection={["down"]}
    //     // style={styles.modal}
    //   >
    //     <View style={styles.modalContent}>
    //       <Registration />
    //       <TouchableOpacity style={buttonStyle} onPress={toggleModal}>
    //         <Text style={textStyle}>Close</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </Modal>
    // </>

    <View style={styles.container}>
      <TouchableOpacity style={buttonStyle} onPress={toggleModal}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={["down"]}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <SignupContent />
        </View>
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
  button: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  // modalContainer: {
  //   flex: 1,
  //   justifyContent: "flex-end",
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  // },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    height: 750,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTextContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  modalText1: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  modalText2: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
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
    width: "22%",
    borderRadius: 30,
    zIndex: 3,
  },
  underline2: {
    height: 4,
    backgroundColor: "#CBD4E1",
    width: "22%",
    zIndex: 2,
  },
});
export default SignupModal;
