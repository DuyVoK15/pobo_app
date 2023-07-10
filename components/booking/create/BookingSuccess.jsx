import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ButtonStyle from "../../../styles/ButtonStyle";
import { SIZES } from "../../constants";

const BookingSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Đặt lịch thành công</Text>
      <View style={ButtonStyle.buttonContainer}>
        <TouchableOpacity style={ButtonStyle.buttonSignup} onPress={() => navigation.replace("HomeScreen")}>
          <Text style={ButtonStyle.buttonSignupText}>Quay về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  textTitle: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold"
  }
});
