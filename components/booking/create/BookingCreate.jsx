import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  RefreshControl,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { TextInput } from "react-native";
import { formatDateTime, formatTime } from "../../../utils/FormatDate";
import ButtonStyle from "../../../styles/ButtonStyle";
import { AuthContext } from "../../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import { BookingCreateValidation } from "../../../utils/Validation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PackageShootingModal from "./PackageShootingModal";
const BookingCreate = ({ navigation, route }) => {
  const {
    createBookingById,
    packageShooting,
    getPackageShootingById,
    getUserInfo,
    userInfo,
    isLoading,
    voucher,
    packageShootingId,
    handleSetVoucherId,
  } = useContext(AuthContext);
  // const [voucher, setVoucher] = useState(null)
  const fetchData = async () => {
    try {
      getUserInfo();
      await getPackageShootingById(packageShootingId);
    } catch (error) {
      console.log(error);
    }
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  });

  useEffect(() => {
    fetchData();
    // console.log(voucher.id);
  }, [packageShootingId]);

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("Chọn ngày");
  const [time, setTime] = useState("và giờ chụp");
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const handleOnPress = () => {
    setOpen(!open);
  };

  // const { createBookingById, bookingSuccess, isLoading } =
  //   useContext(AuthContext);
  const handleCreateBooking = async () => {
    console.log(formatDateTime(date, time) + location + packageShootingId);
    if (date !== "Chọn ngày" && time !== "và giờ chụp" && location !== "") {
      const data = await createBookingById(
        formatDateTime(date, time),
        location,
        packageShootingId,
        voucher ? voucher.id : null
      );

      if (data) {
        navigation.replace("BookingSuccess");
      }
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };

  const handleNavigateToVoucher = () => {
    navigation.navigate("VoucherScreen");
  };

  const handleGoBack = () => {
    // handleSetVoucherId(null);
    navigation.goBack();
  };
  
  const [isModalPackageVisible, setIsModalPackageVisible] = useState(false);


  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.header}>
        <View style={styles.wrapText}>
          <TouchableOpacity onPress={() => handleGoBack()}>
            <View style={styles.bg_icon}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerText}>Xác nhận và thanh toán</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.cardContainer}>
          <View style={styles.wrapInfo}>
            <Image
              source={{ uri: packageShooting?.images[0] }}
              style={styles.bg_img}
            />
            <View style={styles.cardContent}>
              <View style={styles.wraptitle}>
                <Text style={styles.title}>
                  Chụp{" "}
                  {packageShooting?.packageShootingCategory[0]?.category?.name}
                </Text>
                <Text style={styles.photographerName}>
                  Thợ chụp: {packageShooting?.photographerData?.name}
                </Text>
                <Text style={styles.cameraName}>
                  Máy ảnh: {packageShooting?.equipment}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Ionicons name="md-cash-outline" size={18} color={COLORS.black} />
            <Text style={styles.price}>
              {packageShooting?.totalPrice.toLocaleString("vi-VN")} VND
            </Text>
          </View>
        </View>
        <View style={styles.wrapSection}>
          <Text style={styles.text}>Đơn hẹn của bạn</Text>

          <View style={styles.card}>
            <View style={styles.wrapcard}>
              <View style={styles.section}>
                <View style={styles.wrapLocation}>
                  <Ionicons name="camera" size={24} color={COLORS.boder50} />
                  <View style={styles.sectionText}>
                    {/* <Text style={styles.sectionTitle}>Section 1</Text> */}
                    <Text style={styles.sectionTitle}>Vị trí chụp</Text>
                    <TextInput
                      style={styles.sectionContent}
                      placeholder="Nhập vị trí chụp"
                      value={location}
                      onChangeText={(text) => setLocation(text)}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.underline} />

              <TouchableOpacity onPress={handleOnPress}>
                <View style={styles.section}>
                  <View style={styles.wrapDate_icon}>
                    <Ionicons
                      name="calendar"
                      size={24}
                      color={COLORS.boder50}
                    />
                    <View style={styles.sectionText}>
                      {/* <Text style={styles.sectionTitle}>Section 2</Text> */}
                      <Text style={styles.sectionTitle}>Ngày và giờ chụp</Text>
                      <Text style={styles.sectionContent}>
                        {date} {time}
                      </Text>
                    </View>
                  </View>
                </View>
                <Modal animationType="slide" transparent={true} visible={open}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        options={{
                          textHeaderColor: COLORS.orange50,
                          textDefaultColor: COLORS.orange60,
                          selectedTextColor: COLORS.orange70,
                          mainColor: COLORS.orange40,
                          textSecondaryColor: COLORS.orange80,
                          borderColor: "rgba(122, 146, 165, 0.1)",
                        }}
                        minimumDate={startDate}
                        minuteInterval={3}
                        onDateChange={(propDate) => {
                          console.log(propDate);
                          setDate(propDate);
                        }}
                        onTimeChange={(propTime) => {
                          console.log(propTime);
                          setTime(propTime);
                        }}
                      />
                      <TouchableOpacity
                        onPress={handleOnPress}
                        style={{
                          paddingHorizontal: 30,
                          paddingVertical: 10,
                          backgroundColor: COLORS.orange40,
                          borderRadius: 10,
                        }}
                      >
                        <Text>Xác nhận</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </TouchableOpacity>
              {/* <View style={styles.underline} />

              <View style={styles.section}>
                <Ionicons name="time" size={24} color={COLORS.boder50} />
                <View style={styles.sectionText}>
                  <Text style={styles.sectionTitle}>Section 3</Text>
                  <Text style={styles.sectionTitle}>Vào Lúc</Text>
                  <Text style={styles.sectionContent}>9:30 Sáng</Text>
                </View>
              </View> */}

              <View style={styles.underline} />

              <View style={styles.section}>
                <View style={styles.listitem}>
                  <Ionicons name="person" size={24} color={COLORS.boder50} />
                  <View style={styles.sectionText}>
                    <Text style={styles.sectionTitle}>Số người chụp</Text>
                    <Text style={styles.sectionContent}>
                      {packageShooting?.duration} người
                    </Text>
                  </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("PackageShootingModal")} style={[styles.listitem]}>
                  <Ionicons
                    name="school-sharp"
                    size={24}
                    color={COLORS.boder50}
                  />
                  <View style={styles.sectionText}>
                    <Text style={styles.sectionTitle}>Gói Chụp</Text>
                    <Text style={styles.sectionContent}>
                      {packageShooting?.title.slice(0, 19)}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {voucher ? (
            <TouchableOpacity onPress={() => handleNavigateToVoucher()}>
              <View style={styles.discountCard}>
                <View style={styles.wrapDiscount}>
                  <Image
                    source={require("../../../assets/icons/sale.png")}
                    size={20}
                  />
                  <Text style={styles.discountText}>
                    Đã áp dụng mã giảm giá
                  </Text>

                  <MaterialCommunityIcons
                    onPress={() => handleSetVoucherId(null)}
                    name="close-box-multiple-outline"
                    size={24}
                    color="red"
                  />
                </View>
                <View style={styles.iconchevron}>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    style={styles.icon_insize_Discount}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleNavigateToVoucher()}>
              <View style={styles.discountCard}>
                <View style={styles.wrapDiscount}>
                  <Image
                    source={require("../../../assets/icons/sale.png")}
                    size={20}
                  />
                  <Text style={styles.discountText}>Áp dụng mã giảm giá</Text>
                </View>
                <View style={styles.iconchevron}>
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    style={styles.icon_insize_Discount}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}

          <Text style={styles.text}>Chi tiết giá</Text>

          <View style={styles.card}>
            <View style={styles.wrapcard}>
              <View style={styles.SectionDetailPrice}>
                <View style={styles.wrapPackage}>
                  <Text style={styles.sectionTitle}>Gói chụp hình</Text>
                  <Text style={styles.sectionTitle}>
                    {packageShooting?.totalPrice} VND
                  </Text>
                </View>
                <Text style={styles.sectionContent}>Gói chụp tốt nghiệp </Text>
              </View>
              <View style={styles.underline} />

              <View style={styles.SectionDetailPrice}>
                <View style={styles.wrapPackage}>
                  <Text style={styles.sectionTitle}>Thuế</Text>
                  <Text style={styles.sectionTitle}>0 VND</Text>
                </View>
              </View>
              <View style={styles.underline} />

              <View style={styles.SectionDetailPrice}>
                <View style={styles.wrapPackage}>
                  <Text style={styles.textSale}>Khuyến mãi</Text>
                  <Text style={styles.textSale}>0 VND</Text>
                </View>
              </View>
              <View style={styles.underline} />

              <View style={styles.SectionDetailPrice}>
                <View style={styles.wrapPackage}>
                  <Text style={styles.sectionTitle}>Tổng</Text>
                  <Text style={styles.sectionTitle}>
                    {packageShooting?.totalPrice} VND
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.text}>Thanh toán bằng</Text>
          <View style={styles.card}>
            <View style={styles.wrapcard}>
              <TouchableOpacity>
                <View style={styles.SectionPaymentBy}>
                  <View style={styles.wrapPayment}>
                    <Ionicons name="card-outline" size={20} />
                    <Text style={styles.sectionTitle}>
                      Thẻ tín dụng và ghi nợ
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.underline} />

              <TouchableOpacity>
                <View style={styles.SectionPaymentBy}>
                  <View style={styles.wrapPayment}>
                    <Image
                      source={require("../../../assets/icons/momo.png")}
                      size={20}
                    />
                    <Text>Momo</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.underline} />

              <TouchableOpacity>
                <View style={styles.SectionPaymentBy}>
                  <View style={styles.wrapPayment}>
                    <Ionicons name="wallet-outline" size={20} />
                    <Text style={styles.sectionTitle}>Tiền mặt</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.underline} />
              <TouchableOpacity>
                <View style={styles.SectionPaymentBy}>
                  <View style={styles.wrapPayment}>
                    <Ionicons name="wallet-outline" size={20} />
                    <Text style={styles.sectionTitle}>
                      Tài khoản PoBo: [số dư:{" "}
                      <Text style={{ fontWeight: "bold" }}>
                        {userInfo.balance}
                      </Text>
                      ]{" "}
                      <Text
                        style={{ fontFamily: "SVN-Gilroy-Bold", fontSize: 14 }}
                      >
                        [Mặc định]
                      </Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text}>Chính sách hủy</Text>
          <View style={styles.card}>
            <View style={styles.wrapcard}>
              <View style={styles.wrapTextCacel}>
                <Text style={styles.textcancel}>
                  Bạn được hoàn tiền một phần nếu hủy trong vòng 24 giờ sau khi
                  đặt. Sau 24 giờ, bạn sẽ không được hoàn tiền cho đơn đặt lịch
                  chụp hình này.
                </Text>
                <Text style={styles.underlinedText}> Tìm hiểu thêm</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => handleCreateBooking()}
            style={[ButtonStyle.buttonSignup, { marginBottom: 50 }]}
          >
            <Text style={ButtonStyle.buttonSignupText}>Xác nhận đặt lịch</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookingCreate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5FA",
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
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 14,
    paddingHorizontal: 16,
  },
  cardContainer: {
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // padding: 0,
    // marginBottom: 16,
    paddingRight: 23,
    paddingLeft: 17,
    backgroundColor: "#FFFFFF",
    borderColor: "#F5F5F5",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    padding: 16,
    marginBottom: 8,
    alignItems: "flex-start",
    elevation: 8,
  },
  bg_img: {
    width: 111,
    height: 74,
    borderRadius: 10,
  },
  wrapInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 11,
  },
  wraptitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardContent: {
    marginLeft: 16,
  },
  title: {
    fontFamily: "SVN-Gilroy-Bold",
    fontSize: 16,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  price: {
    marginLeft: 4,
    fontFamily: "SVN-Gilroy-Regular",
    fontSize: 14,
    letterSpacing: 1,
  },
  photographerName: {
    color: COLORS.gray,
    marginBottom: 8,
    fontFamily: "SVN-Gilroy-Regular",
    fontSize: 12,
  },
  cameraName: {
    color: COLORS.gray,
    marginBottom: 8,
    fontFamily: "SVN-Gilroy-Regular",
    fontSize: 12,
  },
  text: {
    fontFamily: "SVN-Gilroy-Bold",
    fontSize: 16,
    color: "#000000",
  },
  wrapSection: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    paddingTop: 11,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F5F5F5",

    borderRadius: 8,
    // paddingRight: 23,
    // paddingLeft: 13,
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  wrapcard: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    gap: 5,
    paddingTop: 16,
    paddingBottom: 16,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  listitem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sectionText: {
    flexWrap: 'wrap',
    display: "flex",
    flexDirection: "column",
  },
  wrapDate_icon: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  wrapLocation: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    paddingRight: 100,
    gap: 8,
  },
  sectionTitle: {
    fontFamily: "SVN-Gilroy-Regular",
    fontSize: 14,
    fontSize: 14,
  },
  sectionContent: {
    fontFamily: "SVN-Gilroy-Bold",
    fontSize: 14,
    lineHeight: 21,
    // width:250,
    overflow: "hidden",
  },
  underline: {
    borderWidth: 1,
    borderColor: "#EBEBF0",
    borderStyle: "solid",
    marginBottom: 16,

    // paddingHorizontal: 25
  },
  discountCard: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  wrapDiscount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: 8,
  },
  discountText: {
    fontFamily: "SVN-Gilroy-Regular",
    fontSize: 14,
  },
  iconchevron: {
    display: "flex",
    alignItems: "flex-end",
  },
  icon_insize_Discount: {
    // display:'flex',
    // alignItems:'flex-end'
    // alignItems: 'flex-end'
  },
  SectionDetailPrice: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    // alignItems:'center',
    justifyContent: "center",
    paddingBottom: 15,
    paddingHorizontal: 12,
  },
  wrapPackage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textSale: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.orange50,
  },
  SectionPaymentBy: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    // alignItems:'center',
    justifyContent: "center",
    paddingBottom: 15,
    paddingHorizontal: 12,
  },
  wrapPayment: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  wrapTextCacel: {
    paddingLeft: 14,
    paddingRight: 13,
  },
  textcancel: {
    fontFamily: "SVN-Gilroy-Regular",
    fontSize: 14,
  },
  underlinedText: {
    textDecorationLine: "underline",
    fontFamily: "SVN-Gilroy-Bold",
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
