import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../constants";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { AuthContext } from "../../context/AuthContext";

const VoucherScreen = ({ navigation }) => {
  const { getUserVoucher, voucherList, handleSetVoucherId, voucher } =
    useContext(AuthContext);
  const fetchData = async () => {
    await getUserVoucher();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavigate = (voucher) => {
    handleSetVoucherId(voucher);
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.wrapText}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.bg_icon}>
                <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
            <Text style={styles.headerText}>Chọn mã giảm giá</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.containerSearchBar}>
            <TextInput
              style={styles.searchBar}
              placeholder="Nhập mã giảm giá"
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text>Áp dụng</Text>
          </TouchableOpacity>
        </View>

        {/* item voucher */}
        {voucherList ? (
          voucherList
            .filter((voucher) => voucher.isUsed === false)
            .map((item) => (
              <TouchableOpacity
                key={item?.id}
                style={styles.containerRowVoucher}
              >
                <View style={styles.containerImage}>
                  <Ionicons name="gift" color={COLORS.orange50} size={80} />
                </View>
                <View style={{}}>
                  <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                      {item?.voucher?.title.slice(0, 25)}
                    </Text>
                  </View>
                  <View style={styles.containerDescription}>
                    <Text style={styles.description}>
                      {item?.voucher?.description.slice(0, 25)}
                    </Text>
                  </View>
                </View>
                {item.id === voucher?.id ? (
                  <TouchableOpacity
                    onPress={() => handleNavigate(null)}
                    style={styles.buttonUse}
                  >
                    <Text style={styles.textButtonUse}>Đang dùng</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => handleNavigate(item)}
                    style={styles.buttonUse}
                  >
                    <Text style={styles.textButtonUse}>Dùng</Text>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            ))
        ) : (
          <View>
            <Text>Không có gì ở đây.</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default VoucherScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingTop: 30,
    paddingBottom: 5,
    backgroundColor: COLORS.orange50,
  },
  wrapText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingTop: 10,
    justifyContent: "center",
    padding: 10,
  },
  bg_icon: {
    backgroundColor: COLORS.orange70,
    borderRadius: 50,
    height: 32,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,

    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
    flex: 1,
    flexGrow: 1,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },

  containerSearchBar: {
    width: "100%",
    height: 50,
    flex: 1,
    marginRight: 5,
  },
  searchBar: {
    height: 50,
    // marginHorizontal: 30,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
  },
  button: {
    height: 50,
    paddingHorizontal: 20,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: COLORS.orange50,
  },
  containerRowVoucher: {
    width: 400,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: COLORS.orange50,
    marginTop: 30,
  },
  containerImage: {},
  containerTitle: {},
  buttonUse: {
    height: 40,
    paddingHorizontal: 20,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: COLORS.orange50,
    borderRadius: 10,
    backgroundColor: COLORS.orange20,
    marginRight: 10,
  },
  textButtonUse: {
    color: COLORS.orange50,
    fontWeight: 600,
  },
});
