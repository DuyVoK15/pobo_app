import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import ButtonStyle from "../../styles/ButtonStyle";
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SHADOWS, SIZES } from "../constants";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { Icon } from "./IconProfile";
import Spinner from "react-native-loading-spinner-overlay";
import * as Font from "expo-font";

const UserProfile = ({ navigation }) => {
  const imageVoDien =
    "https://toigingiuvedep.vn/wp-content/uploads/2022/04/hinh-avatar-anh-vo-dien-cute.jpg";
  const { logout, userToken, getUserInfo, isLoading } =
    useContext(AuthContext);
  const [info, setInfo] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  });

  const fetchData = async () => {
    try {
      getUserInfo();
      const userInfo = await AsyncStorage.getItem("userInfo");
      // const parseValue = JSON.parse(value);
      if (userInfo != null) {
        setInfo(JSON.parse(userInfo));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await logout();
    fetchData();
  }

  useEffect(() => {
    const interval = setInterval(fetchData, 5000000000000000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    // loadFonts();
  }, []);

  const handleNavigateToSetting = () => {
    navigation.push("SettingsAccountPersonal");
  };


 

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      // onLayout={onLayoutRootView}
    >
      <Spinner visible={isLoading} />
      <View style={styles.container}>
        <View style={styles.containerTextHeader}>
          <Text style={styles.textHeader}>Trang cá nhân</Text>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.avatarStyle}>
            <Image
              source={{
                uri: info.avatarUrl ? info.avatarUrl : imageVoDien,
              }}
              style={{ width: 57, height: 57, borderRadius: 100 }}
            />
          </View>
          <View style={styles.column2}>
            <TouchableOpacity onPress={handleNavigateToSetting}>
              <Text style={styles.textName}>
                {" "}
                {info.name ? info.name : "Vui lòng đăng nhập"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("alo")}>
              <Text style={styles.textName2}> Đăng kí POBO Premium {">"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerTextTitles}>
          <Text style={styles.textTitle}>
            Số dư tài khoản:{" "}
            <Text style={styles.textBalance}>{info.balance} VNĐ</Text>
          </Text>
          <TouchableOpacity
            style={styles.buttonRecharge}
            onPress={() => navigation.push("RechargeScreen")}
          >
            <Text style={styles.textRecharge}>Nạp tiền</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerPoBo}>
          <Text style={styles.textPoBo1}>Trở thành thợ chụp ảnh của POBO</Text>
          <Text style={styles.textPoBo2}>
            Thiết lập và bắt đầu kiếm tiền thật đơn giản.
          </Text>
        </View>

        <View style={styles.containerTextTitles}>
          <Text style={styles.textTitle}>Cài đặt</Text>
        </View>

        <View style={styles.containerColumn}>
          <View style={styles.containerRow}>
            <View style={styles.column1}>
              <Image
                source={Icon.AccountIcon}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.column2}>
              <TouchableOpacity onPress={handleNavigateToSetting}>
                <Text style={styles.text}> Tài khoản của tôi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column3}>
              <Image
                source={require("../../assets/MoreThanIcon.png")}
                style={{ width: 7, height: 12 }}
              />
            </View>
          </View>

          <View style={styles.containerRow}>
            <View style={styles.column1}>
              <Image source={Icon.PayIcon} style={{ width: 40, height: 40 }} />
            </View>
            <View style={styles.column2}>
              <TouchableOpacity onPress={handleNavigateToSetting}>
                <Text style={styles.text}> Thanh Toán và chi trả</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column3}>
              <Image
                source={require("../../assets/MoreThanIcon.png")}
                style={{ width: 7, height: 12 }}
              />
            </View>
          </View>

          <View style={styles.containerRow}>
            <View style={styles.column1}>
              <Image source={Icon.TaxIcon} style={{ width: 40, height: 40 }} />
            </View>
            <View style={styles.column2}>
              <TouchableOpacity onPress={handleNavigateToSetting}>
                <Text style={styles.text}> Thuế</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column3}>
              <Image
                source={require("../../assets/MoreThanIcon.png")}
                style={{ width: 7, height: 12 }}
              />
            </View>
          </View>

          <View style={styles.containerRow}>
            <View style={styles.column1}>
              <Image
                source={Icon.FaceTouchIDIcon}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.column2}>
              <Text style={styles.text}> Face ID / Touch ID</Text>
            </View>
            <View style={styles.column3}>
              <Image
                source={require("../../assets/MoreThanIcon.png")}
                style={{ width: 7, height: 12 }}
              />
            </View>
          </View>
        </View>

        <View style={styles.containerTextTitles}>
          <Text style={styles.textTitle}>Khác</Text>
        </View>

        <View style={styles.containerColumn}>
          <View style={styles.containerRow}>
            <View style={styles.column1}>
              <Image
                source={Icon.HelpSupportIcon}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.column2}>
              <Text style={styles.text}> Help & Support</Text>
            </View>
            <View style={styles.column3}>
              <Image
                source={require("../../assets/MoreThanIcon.png")}
                style={{ width: 7, height: 12 }}
              />
            </View>
          </View>

          <View style={styles.containerRow}>
            <View style={styles.column1}>
              <Image
                source={Icon.PrivacyPolicyIcon}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.column2}>
              <TouchableOpacity onPress={() => console.log("Oh Yeah")}>
                <Text style={styles.text}> Privacy & Policy</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column3}>
              <Image
                source={require("../../assets/MoreThanIcon.png")}
                style={{ width: 7, height: 12 }}
              />
            </View>
          </View>

          <View style={styles.containerRow}>
            <View style={styles.column1}>
              <Image
                source={Icon.TermConditionIcon}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.column2}>
              <Text style={styles.text}> Term & Condition</Text>
            </View>
            <View style={styles.column3}>
              <Image
                source={require("../../assets/MoreThanIcon.png")}
                style={{ width: 7, height: 12 }}
              />
            </View>
          </View>

          <View style={styles.containerRow}>
            <View style={styles.column1}>
              <Image
                source={Icon.AboutPoBoIcon}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={styles.column2}>
              <Text style={styles.text}> About Pobo</Text>
            </View>
            <View style={styles.column3}>
              <Image
                source={require("../../assets/MoreThanIcon.png")}
                style={{ width: 7, height: 12 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={ButtonStyle.buttonSignup}
            onPress={() => handleLogout()}
          >
            <Text style={[ButtonStyle.buttonSignupText, { color: "#FFF" }]}>
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#F9F9F9",
  },
  containerTextHeader: {
    marginVertical: 20,
    width: 380,
  },
  textHeader: {
    fontSize: SIZES.large,
    fontFamily: "SVN-Gilroy-Bold"
  },
  avatarStyle: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: COLORS.orange50,
    padding: 1,
    marginRight: 10,
  },
  textName: {
    fontSize: 14,
    fontFamily: "SVN-Gilroy-XBold",
    marginBottom: 5,
  },
  textName2: {
    fontSize: 11,
    fontFamily: "SVN-Gilroy-Regular",
  },
  textPoBo1: {
    fontSize: 14,
    marginLeft: 22,
    color: "#FFFFFF",
    fontFamily: "SVN-Gilroy-Bold"
  },
  textPoBo2: {
    fontSize: 11,
    color: "#FFFFFF",
    marginLeft: 22,
    fontFamily: "SVN-Gilroy-Regular",
  },
  containerPoBo: {
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: COLORS.boder40,
    borderRadius: 10,
    width: 380,
    paddingVertical: 30,
    backgroundColor: COLORS.orange50,
    ...SHADOWS.beauty,
    elevation: 2,
  },
  containerColumn: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingTop: 30,
    borderRadius: 10,
    ...SHADOWS.beauty,
    elevation: 2,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // borderWidth: 1,
    // borderColor: COLORS.boder40,
    // borderRadius: 10,
    width: 380,
    marginBottom: 30,
  },
  column1: {
    flex: 1,
    marginLeft: 15,
  },
  column2: {
    flex: 4,
  },
  column3: {
    flex: 0,
    marginRight: 15,
  },
  text: {
    fontSize: 13,
    fontFamily: "SVN-Gilroy-Medium"
  },
  textTitle: {
    fontSize: 15,
    fontFamily: "SVN-Gilroy-Medium"
  },
  textBalance: {
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
  buttonRecharge: {
    marginTop: 10,
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: COLORS.orange50,
    alignItems: "center",
    width: 100,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textRecharge: {
    fontSize: SIZES.medium,
    fontWeight: 500,
    color: COLORS.orange40,
  },
  containerTextTitles: {
    marginVertical: 10,
    width: 380,
  },
  containerButton: {
    marginVertical: 30,
  },
});
