import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SvgQRCode from "react-native-qrcode-svg";
import { COLORS } from "../constants";

const QRCodeScreen = ({ navigation, route }) => {
  const { qrString } = route.params;

  useEffect(() => {
    console.log(qrString);
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerQRCode}>
        <SvgQRCode
          value={qrString}
          size={200} // Kích thước của hình ảnh QR
        />
      </View>
    </View>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  containerQRCode: {
    borderWidth: 10,
    borderColor: COLORS.orange50,
    borderRadius: 10
  }
});
