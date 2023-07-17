import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Detail = ({ route, navigation }) => {
  const { packageShootingId } = route.params;
  const { getPackageShootingById, getUserInfo, isLoading } =
    useContext(AuthContext);
  const [packageShooting, setPackageShooting] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  const fetchData = async () => {
    try {
      getUserInfo();
      const data = await getPackageShootingById(packageShootingId);
      console.log(JSON.stringify(data) + " HIẾU ĂN CỨC");
      setPackageShooting(data);
      const userInfo = await AsyncStorage.getItem("userInfo");
      setUserInfo(JSON.parse(userInfo));
    } catch (error) {
      console.log(error);
    }
  };
  // const userInfo = await getUserInfo();
  //   setUserInfo(userInfo);

  useEffect(() => {
    fetchData();
    // console.log(JSON.stringify(packageShootingId) + " VÃI Ò");
    // console.log(JSON.stringify(packageShooting) + " HUHUHUHUHUHUHUHUHUHUHU");
  }, []);

  const data = [
    { id: 1, imageSource: require("../../../assets/images/anh4k.jpg") },
    { id: 2, imageSource: require("../../../assets/images/anh4k.jpg") },
    { id: 3, imageSource: require("../../../assets/images/anh4k.jpg") },
    { id: 4, imageSource: require("../../../assets/images/anh4k.jpg") },
    { id: 5, imageSource: require("../../../assets/images/anh4k.jpg") },
  ];

  const [image, setImage] = useState(packageShooting?.images[0]);
  const handleNavigate = () => {
    navigation.push("BookingCreate", { packageShootingId: packageShooting.id });
  };

  const text =
    "Những năm tháng học sinh kết thúc cũng là lúc chúng ta phải từng bước trở thành người lớn, vì vậy một bộ ảnh tốt nghiệp đánh dấu cột mốc đáng nhớ này sẽ là một kỉ niệm đáng giá cho bạn, để sau này khi nhìn lại bạn sẽ mỉm cười nhớ lại về một thời đã qua";

  return (
    <View style={{flex: 1, alignItems: "center",}}>
      <ScrollView>
        <ImageBackground
          source={{ uri: image ? image : packageShooting?.images[0] }}
          style={styles.imageBackground}
        />

        <View style={styles.wrapText}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.wrapbackhome}>
              <View style={styles.bg_icon}>
                <Image source={require("../../../assets/icons/back.png")} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.containerCate}>
            <View style={styles.wraptext}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "SVN-Gilroy-Medium",
                  color: COLORS.orange50,
                }}
              >
                {packageShooting?.packageShootingCategory[0]?.category?.name}
              </Text>
            </View>
            {/* <View style={styles.wraptext}>
            <Text>Tập thể</Text>
          </View> */}
          </View>
          <View style={styles.wrapinfo}>
            <View styles={styles.wraptitle_creator}>
              <Text style={styles.titleDetail}>{packageShooting?.title}</Text>
              <View style={styles.creator}>
                <Image
                  source={{ uri: packageShooting?.photographerData?.avatarUrl }}
                  style={styles.imgAvatar}
                />
                <Text style={styles.namePhoto}>
                  Bởi{" "}
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "SVN-Gilroy-Medium",
                    }}
                  >
                    {packageShooting?.photographerData?.name}
                  </Text>
                </Text>
              </View>
            </View>
            <Text style={styles.price}>
              {packageShooting?.totalPrice.toLocaleString("vi-VN")}đ
            </Text>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={{ flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
          >
            {packageShooting?.images.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={{ paddingLeft: 17 }}
                onPress={() => setImage(image)}
              >
                <Image
                  source={{ uri: image }}
                  style={{ width: 122, height: 69, borderRadius: 7 }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.wrapdescription}>
            <Text style={styles.descriptionTitle}>Mô tả</Text>

            <Text style={styles.description}>
              {packageShooting?.description
                ? packageShooting?.description
                : text}
            </Text>
            <View style={styles.underline}></View>
          </View>
          <View style={styles.wrapdescription}>
            <Text style={styles.descriptionTitle}>Thiết bị chụp</Text>
            <View style={styles.InfoCamContainer}>
              <View style={styles.wrapInfoCam}>
                <View style={styles.wrapIcon_name}>
                  <View style={styles.backgroundimgcam}>
                    <Image
                      source={require("../../../assets/icons/camera.png")}
                      style={styles.imgFuji}
                    />
                  </View>
                  <Text style={styles.nameCam}>
                    {packageShooting?.equipment}
                  </Text>
                </View>
                <View style={styles.wrapIcon_name}>
                  <View style={styles.backgroundimgcam}>
                    <Image
                      source={require("../../../assets/icons/Fuji.png")}
                      style={styles.imgCam}
                    />
                  </View>
                  <Text style={styles.nameCam}>
                    {packageShooting?.equipment}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.underline}></View>
          </View>

          <View style={styles.wrapButton}>
            <TouchableOpacity
              style={styles.bookNow}
              onPress={() => handleNavigate()}
            >
              <Text style={styles.buttonBookText}>Đặt lịch ngay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.callNow}>
              <Text style={styles.buttonCallText}>Gọi ngay</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapRating}>
            <View style={styles.underline}></View>
            <Text style={styles.ratingTitle}>Đánh giá</Text>

            {/* <Text style={styles.description}>
              {packageShooting?.description
                ? packageShooting?.description
                : text}
            </Text> */}
            <Text style={styles.ratingContent}>CHƯA CÓ BÀI ĐÁNH GIÁ NÀO</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  wrapText: {
    position: "absolute",
    top: 50,
    left: 0,
    // flexDirection: "row",
    // alignItems: "center",
    // paddingTop: 10,
    // justifyContent: "center",

    // padding: 10,
  },
  wrapbackhome: {
    display: "flex",
    flexDirection: "row",
    gap: 22,
  },
  bg_icon: {
    // backgroundColor: COLORS.orange70,
    borderRadius: 50,
    height: 30,
    width: 30,
    backgroundColor: " rgba(0, 0, 0, 0.34)",
    top: 0,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textHome: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 18 * 1.5,
    color: "#FFFFFF",
  },
  imageBackground: {
    width: width * 1,
    height: height * 0.4,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCate: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingTop: 10,
    paddingLeft: 17,
  },
  wraptext: {
    backgroundColor: "rgba(254, 93, 38, 0.2)",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapinfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingLeft: 17,
    // paddingRight:18
    width: width * 0.9,
    paddingBottom: 15,
  },

  wraptitle_creator: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
   
  },
  titleDetail: {
    fontFamily: "SVN-Gilroy-Bold",
    fontSize: 26,
    lineHeight: 27,
    color: "#29303E",
    width: width * 0.5,
  },
  creator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10, marginTop: 10
  },

  imgAvatar: {
    width: 24,
    height: 24,
    borderRadius: 100,
  },

  namePhoto: {
    fontFamily: "SVN-Gilroy-Medium",
    fontSize: 12,
    lineHeight: 13,
    color: COLORS.orange50,
  },
  price: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 32,
    textAlign: "right",
    letterSpacing: -0.24,
    color: "#F26333",
  },
  wrapdescription: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingLeft: 17,
    width: width * 0.9,
    paddingTop: 10,
    marginTop: 10,
  },
  descriptionTitle: {
    fontFamily: "SVN-Gilroy-Medium",
    fontSize: 18,
    lineHeight: 21,
    color: "#021934",
  },

  description: {
    fontFamily: "SVN-Gilroy-Regular",
    fontSize: 11,
    lineHeight: 18,
    color: "#021934",
  },
  underline: {
    borderWidth: 1,
    borderColor: "#EBEBF0",
    borderStyle: "solid",
    marginBottom: 16,
  },

  InfoCamContainer: {
    marginTop: 10,
    display: "flex",
    // paddingLeft: 17,
  },
  wrapInfoCam: {
    display: "flex",
    flexDirection: "row",
    gap: 28,
  },
  wrapIcon_name: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  backgroundimgcam: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(237, 42, 36, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  imgCam: {
    width: 24.27,
    height: 14,
  },
  nameCam: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 17,
    color: "#505050",
  },
  wrapButton: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  bookNow: {
    width: 160,
    height: 39,
    backgroundColor: "#FE5D26",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBookText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: "#FFFFFF",
  },
  callNow: {
    width: 160,
    height: 39,
    // marginHorizontal: 5,
    // backgroundColor: '#FE5D26',
    borderWidth: 1,
    borderColor: "#FE5D26",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCallText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.orange50,
  },
  wrapRating: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingLeft: 17,
    width: width * 0.9,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 100
  },
  ratingTitle: {
    fontFamily: "SVN-Gilroy-Medium",
    fontSize: 18,
    lineHeight: 21,
    color: "#021934",
  },
  ratingContent: {
   fontWeight: 700,
    fontSize: 18,
    alignSelf: "center"
  }
});
