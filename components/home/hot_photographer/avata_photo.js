import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Touchable,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import card from './dataCardCate';
import { COLORS, FONT, SIZES } from "../../constants";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from "react-native-modal";

const Avatar = ({ image, photographerName }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View>
      <View style={{ alignItems: "center", width: 150 }} onPress={toggleModal}>
        <Image source={image} style={styles.avatar} />
        <Text style={styles.name}>{photographerName}</Text>
      </View>
      {/* <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={["down"]}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <Spinner visible={isLoading} />

          <View style={styles.modalContent}>
            <ImageBackground source={image} style={styles.imgCate} />
          </View>
          <View style={styles.wrapContent}>
            <View style={styles.Description}>
              <View style={styles.name_price}>
                <View style={styles.Name_Info}>
                  <Text style={styles.Title}>{photographerName}</Text>

                  <View style={styles.Info}>
                    <View style={styles.Rating}>
                      <Ionicons name="star" style={styles.starModal} />
                      <Text>4.5</Text>
                    </View>
                    <View style={styles.Time}>
                      <Ionicons
                        name="time-sharp"
                        color="#5C616F"
                        style={styles.timeModal}
                      />
                      <Text>25 min</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.Price_Info}>
                  <Text style={styles.Price_modal}>1.000.000</Text>
                  <View style={styles.Discount}>
                    <Text>$18</Text>
                    <Text>-75 OFF</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.text}>
                sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
              </Text>
            </View>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};
export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 85,
  },
  name: {
    marginTop: 8,
    // height: 15,
    // fontFamily: 'Mulish',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    color: "#797979",
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    height: 750,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  modalContent: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 33,
  },
  imgCate: {
    width: 335,
    height: 278,
    alignSelf: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  wrapContent: {
    // Additional styling if needed
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    marginBottom: 20,
    marginTop: 20, // Adjust this value as needed
    width: 335,
    // height: 136,
    gap: 24,
  },
  Description: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 20,
  },
  // Name:{
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   paddingBottom: 12,
  //   gap: 12,

  //   position: 'absolute',

  //   left: 0,
  //   top: 0,

  // },
  name_price: {
    flexDirection: "row",
    // justifyContent: 'flex-end'
    justifyContent: "space-between",
    width: 335,
  },
  Name_Info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingBottom: 1,
  },
  Price_Info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  Price_modal: {
    // position: 'absolute',
    // fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 32,
    textAlign: "right",
    letterSpacing: -0.24,
    color: "#F26333",
  },
  Discount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },

  Title: {
    // fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    letterSpacing: -0.16,

    color: "#040C22",
  },
  Info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    gap: 16,
  },
  Rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // padding: 0,
    gap: 4,

    // width: 108,
    // height: 18,

    // flex: 'none',
    // order: 1,
    // flexGrow: 0,
  },
  starModal: {
    height: 12,
    width: 12,
    color: "#F2C94C",
  },
  timeModal: {
    height: 12,
    width: 12,
  },
  Time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    // fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.2,
    color: "#5C616F",
  },
});
