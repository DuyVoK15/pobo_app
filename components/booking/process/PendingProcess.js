import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BookingEmptyScreen from "../BookingEmptyScreen";

const PendingProcess = () => {
  return (
    <View style={styles.container}>
      <BookingEmptyScreen />
    </View>
  );
};

export default PendingProcess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});