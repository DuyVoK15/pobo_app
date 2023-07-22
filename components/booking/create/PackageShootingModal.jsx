import { ScrollView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import React, { useContext, useEffect } from "react";
import { COLORS, SHADOWS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { AuthContext } from "../../../context/AuthContext";

const PackageShootingModal = ({ navigation }) => {
  const {
    getAllListPackageShooting,
    getAllListPackageShootingByTitle,
    getUserInfo,
    packageShootingListByTitle,
    packageShootingList,
    handleSetPackageShootingId
  } = useContext(AuthContext);

  const fetchData = async () => {
    await getAllListPackageShooting();
  };
  useEffect(() => {
    fetchData();
    console.log(JSON.stringify(packageShootingList));
  }, []);

  const handleNavigate = (packageShootingId) => {
    handleSetPackageShootingId(packageShootingId);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapText}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.bg_icon}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerText}>Chọn gói chụp khác</Text>
        </View>
      </View>

      <ScrollView>
        {packageShootingList ? (
          packageShootingList.map((packageShooting) => (
            <TouchableOpacity onPress={() => handleNavigate(packageShooting.id)}>
              <View key={packageShooting.id} style={styles.modalContent}>
                <View style={styles.modalBody}>
                  <View style={styles.cardRow}>
                    <View style={{ flex: 1 }}>
                      <Image
                        style={styles.image}
                        source={{
                          uri: packageShooting?.images[0],
                        }}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.textTitle}>
                        {packageShooting?.title.slice(0, 50)}
                      </Text>
                      <Text style={styles.textContent}>
                        Thiết bị:{" "}
                        <Text style={styles.textEqipment}>
                          {packageShooting?.equipment}
                        </Text>
                      </Text>
                      <Text style={styles.textContent}>
                        Giá gói:{" "}
                        <Text style={styles.textEqipment}>
                          {packageShooting?.totalPrice.toLocaleString("vi-VN")}{" "}
                          VNĐ
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text>Không có gì ở đây</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default PackageShootingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalHeader: {
    alignItems: "center",
  },
  textHeader: {
    fontFamily: "SVN-Gilroy-XBold",
    fontSize: 18,
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginTop: 20,
    ...SHADOWS.beauty,
  },
  modalBody: {
    padding: 10,
  },
  cardRow: {
    flexDirection: "row",
  },
  image: {
    height: 80,
    width: 160,
  },
  textTitle: {
    fontFamily: "SVN-Gilroy-Bold",
    fontSize: 16,
  },
  textContent: {
    fontSize: 13,
  },
  textEqipment: {
    fontFamily: "SVN-Gilroy-Bold",
    fontSize: 13,
  },
});
