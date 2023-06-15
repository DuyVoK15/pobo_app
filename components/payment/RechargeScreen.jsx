import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { RadioButton, Checkbox } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../constants";
import { AuthContext } from "../../context/AuthContext";
const RechargeScreen = ({ navigation }) => {
  const {buyCoinRequest} = useContext(AuthContext)
  const listPlatform = ["MOMO", "VNPAY", "ZALOPAY", "TPB", "BIDV"];
  const [amount, setAmount] = useState("");
  const [platform, setPlatform] = useState("");
  const [listDataBuyCoinRequest, setListDataBuyCoinRequest] = useState({});

  //   useEffect(() => {
  //     listPlatform.map(item => {
  //         console.log(item)
  //     })

  //   })
  const handleRecharge =  async () => {
    console.log(amount);
    console.log(platform);
    try {
      const data = await buyCoinRequest(parseInt(amount), platform);
      setListDataBuyCoinRequest(data);
      console.log(JSON.stringify(data));
      if(data&&data!=null){
        navigation.replace("QRCodeScreen", {qrString: data.qrString});
      }
    } catch (error) {
      console.log(error)
    }
    

  };
  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
      <Text style={styles.textTitle}>Xin chọn nền tảng nạp tiền</Text>
      <View style={styles.containerInputText}>
        <TextInput
          style={styles.textInput}
          // keyboardType="numeric"
          value={amount}
          placeholder="Vui lòng nhập số tiền..."
          onChangeText={(text) => setAmount(text)}
        />
      </View>

      {listPlatform.map((item, index) => (
        <View key={index} style={styles.containerRadioButton}>
          <RadioButton.Item
            color={COLORS.orange50}
            labelStyle={styles.labelStyle}
            value={item}
            label={item}
            status={platform === item ? "checked" : "unchecked"}
            onPress={() => {
              setPlatform(item);
            }}
          />
        </View>
      ))}
      <View style={styles.buttonRechargeContainer}>
        <TouchableOpacity
          style={styles.buttonRecharge}
          onPress={handleRecharge}
        >
          <Text style={styles.textButtonRecharge}>Nạp tiền</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default RechargeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  containerView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.orange50,
    padding: 30,
    borderRadius: 10
  },
  textTitle: {
    fontSize: SIZES.xLarge,
    fontWeight: 500,
    paddingVertical: 10
  },
  containerRadioButton: {
    backgroundColor: COLORS.orange10,
    width: 300,
    borderRadius: 10,
    marginVertical: 5,
  },

  radioButton: {
    fontSize: SIZES.xLarge,
  },
  labelStyle: {
    fontSize: SIZES.large,
  },
  containerInputText: {
    width: 300,
    alignItems: "center"
  },
  textInput: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: SIZES.large,
    // ...SHADOWS.beauty,
    // elevation: 2,
    backgroundColor: COLORS.orange10,
    textAlign: "center",
    marginVertical: 15
  },
  buttonRechargeContainer: {
    marginTop: 20,
  },
  buttonRecharge: {
    width: 160,
    paddingVertical: 15,
    backgroundColor: COLORS.orange10,
    alignItems: "center",
    borderRadius: 10,
  },
  textButtonRecharge: {
    fontSize: SIZES.medium,
    fontWeight: 500
  }
});
