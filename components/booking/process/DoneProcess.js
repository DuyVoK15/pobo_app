import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BookingEmptyScreen from "../BookingEmptyScreen";

const DoneProcess = () => {
  return (
    <View style={styles.container}>
      <BookingEmptyScreen />
    </View>
  );
};

export default DoneProcess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
