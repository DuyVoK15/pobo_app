import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import BookingEmptyScreen from "../BookingEmptyScreen";
import { AuthContext } from "../../../context/AuthContext";
import { COLORS, SIZES } from "../../constants";
import { formatDateToCustomString, formatDateToVN } from "../../../utils/FormatDate";
import Spinner from "react-native-loading-spinner-overlay";
import { Modal } from "react-native";
import {
  ButtonConfirmCategory,
  ButtonConfuseCategory,
} from "../../../styles/ButtonStyle";
import { AntDesign, Entypo, Foundation, Ionicons } from "@expo/vector-icons";

const AllProcess = ({ navigation }) => {
  const {
    getListBooking,
    bookingData,
    countAllBooking,
    isLoading,
    updateBookingStatus,
  } = useContext(AuthContext);
  // const [bookingData, setBookingData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  // const [bookingAfterUpdate, setBookingAfterUpdate] = "";
  const [expandedBookings, setExpandedBookings] = useState([]);
  const isBookingExpanded = (id) => {
    return expandedBookings.includes(id);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  });

  const fetchData = async () => {
    await getListBooking();
  };

  // useEffect(() => {
  //   const interval = setInterval(fetchData, 1000000000); // Gọi fetchData mỗi 5 giây

  //   return () => {
  //     clearInterval(interval); // Hủy bỏ interval khi component bị unmount
  //   };
  // }, []);

  useEffect(() => {
    fetchData(); // Lấy dữ liệu ban đầu khi component được render
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleUpdateStatus = async (id, bookingStatus) => {
    const data = await updateBookingStatus(id, bookingStatus);
    handleCloseModal();
    setBookingAfterUpdate(data);
    fetchData();
  };

  const handleNavigateToDetail = (booking) => {
    navigation.navigate("DetailProcess", { booking });
  };
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Spinner visible={isLoading} />
        <Text style={styles.textHeader}>
          Hiện có tất cả {countAllBooking ? countAllBooking : 0} lịch hẹn{" "}
        </Text>
        {countAllBooking !== 0 ? (
          <>
            {bookingData.map((booking) => (
              <View key={booking.id} style={styles.containerColumn}>
                <View style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={() => handleNavigateToDetail(booking)}
                    style={{ flex: 1 }}
                  >
                    <Image
                      source={{
                        uri: booking.packageShootingData.photographerData
                          .avatarUrl,
                      }}
                      style={styles.avatar}
                    />
                  </TouchableOpacity>
                  <View style={{ flex: 1.8 }}>
                    <Text style={styles.title}>
                      {booking.packageShootingData.photographerData.name}
                    </Text>
                    <Text style={styles.title2}>
                      {formatDateToVN(booking.startTime)}
                    </Text>
                  </View>
                  <View style={{ flex: 1.4 }}>
                    <View style={styles.status}>
                      <Text style={styles.textStatus}>
                        {booking.bookingStatus === "PENDING"
                          ? "Chờ"
                          : booking.bookingStatus === "CANCEL"
                          ? "Hủy"
                          : booking.bookingStatus === "DONE"
                          ? "Xong"
                          : booking.bookingStatus === "ACCEPT"
                          ? "Hẹn"
                          : ""}
                      </Text>
                    </View>
                    {booking.bookingStatus === "PENDING" ? (
                      <View>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => handleOpenModal()}
                        >
                          <Text style={styles.buttonText}>Hủy lịch</Text>
                        </TouchableOpacity>

                        <Modal
                          visible={modalVisible}
                          animationType="fade"
                          transparent
                        >
                          <View style={styles.modalBackground}>
                            <View style={styles.modalContent}>
                              <Text style={styles.textQuestion}>
                                Bạn có chắc chắn với quyết định này?
                              </Text>
                              <View style={styles.containerRoww}>
                                <TouchableOpacity
                                  style={ButtonConfirmCategory.buttonConfirm}
                                  onPress={() =>
                                    handleUpdateStatus(booking.id, "CANCEL")
                                  }
                                >
                                  <Text
                                    style={
                                      ButtonConfirmCategory.buttonConfirmText
                                    }
                                  >
                                    Xác nhận
                                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={ButtonConfuseCategory.buttonConfuse}
                                  onPress={handleCloseModal}
                                >
                                  <Text
                                    style={
                                      ButtonConfuseCategory.buttonConfuseText
                                    }
                                  >
                                    Quay lại
                                  </Text>
                                </TouchableOpacity>
                              </View>
                              <TouchableOpacity
                                style={styles.closeButton}
                                onPress={handleCloseModal}
                              >
                                <Text style={styles.closeButtonText}>x</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </Modal>
                      </View>
                    ) : (
                      <></>
                    )}
                  </View>
                </View>

                {isBookingExpanded(booking?.id) && (
                  <View style={{ height: 300, marginTop: 20 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 340,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="ios-location-sharp"
                          size={24}
                          color={COLORS.orange50}
                        />
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: "SVN-Gilroy-Bold",
                            marginLeft: 5,
                            
                          }}
                        >
                          {booking?.address.slice(0, 10)}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1.5,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Entypo
                          name="camera"
                          size={24}
                          color={COLORS.orange50}
                        />
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: "SVN-Gilroy-Bold",
                            marginLeft: 5,
                          }}
                        >
                          {booking?.packageShootingData?.equipment}
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Foundation
                          name="dollar-bill"
                          size={24}
                          color={COLORS.orange50}
                        />
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: "SVN-Gilroy-Bold",
                            marginLeft: 5,
                          }}
                        >
                          {booking?.packageShootingData?.totalPrice}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 340,
                        marginTop: 10
                      }}
                    >
                      <View style={{flex: 1}}>
                        <Text style={{fontSize: 12, fontFamily: "SVN-Gilroy-Medium"}}>Ngày & Giờ</Text>
                      </View>
                      <View>
                        <Text>{formatDateToCustomString(booking?.startTime)}</Text>
                      </View>
                    </View>
                    <View style={{marginTop: 20}}>
                      <Text style={{fontSize: 16,  fontFamily: "SVN-Gilroy-Bold", marginBottom: 10}}>Gói chụp: {booking?.packageShootingData?.title}</Text>
                      <Image source={{uri: booking?.packageShootingData?.images[0]}} style={{width: 340, height: 200, borderRadius: 5}} />
                    </View>
                  </View>
                )}

                <TouchableOpacity
                  onPress={() =>
                    setExpandedBookings((prevExpanded) =>
                      isBookingExpanded(booking.id)
                        ? prevExpanded.filter((item) => item !== booking.id)
                        : [...prevExpanded, booking.id]
                    )
                  }
                  style={{ marginTop: 10 }}
                >
                  <AntDesign
                    name={isBookingExpanded(booking.id) ? "up" : "down"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            ))}
          </>
        ) : (
          <BookingEmptyScreen />
        )}
      </View>
    </Animated.ScrollView>
  );
};

export default AllProcess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  textHeader: {
    fontSize: SIZES.large,
    fontFamily: "SVN-Gilroy-Bold",
    fontStyle: "italic",
    marginTop: 10,
  },
  containerColumn: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: COLORS.boder40,
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerRoww: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  title2: {
    fontSize: SIZES.small,
  },
  status: {
    height: 30,
    marginRight: 5,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "green",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textStatus: {
    color: "green",
    fontSize: SIZES.small,
  },

  button: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderColor: COLORS.orange40,
    borderWidth: 2,
  },
  buttonText: {
    color: COLORS.orange40,
    alignSelf: "center",
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 0,
  },
  textQuestion: {
    fontSize: SIZES.large,
    marginBottom: 20,
    fontWeight: "bold",

    textAlign: "center",
  },
  modalContent: {
    backgroundColor: "white",
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 15,
  },
  closeButtonText: {
    fontSize: 30,
    fontWeight: 500,
    color: "black",
  },
});
