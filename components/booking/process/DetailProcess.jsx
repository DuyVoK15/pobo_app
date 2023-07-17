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
import { formatDateToVN } from "../../../utils/FormatDate";
import Spinner from "react-native-loading-spinner-overlay";
import { Modal } from "react-native";
import {
  ButtonConfirmCategory,
  ButtonConfuseCategory,
} from "../../../styles/ButtonStyle";

const DetailProcess = ({ navigation, route }) => {
  const { booking } = route.params;
  const {
    getListBooking,
    bookingData,
    countAllBooking,
    isLoading,
    updateBookingStatus,
  } = useContext(AuthContext);
  // const [bookingData, setBookingData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [bookingAfterUpdate, setBookingAfterUpdate] = "";

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
    console.log(JSON.stringify(booking))
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
            {bookingData.map((booking, index) => (
              <View key={index} style={styles.containerRow}>
                <TouchableOpacity
                  onPress={() => handleNavigateToDetail()}
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
            ))}
          </>
        ) : (
          <BookingEmptyScreen />
        )}
      </View>
    </Animated.ScrollView>
  );
};

export default DetailProcess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textHeader: {
    fontSize: SIZES.large,
    fontStyle: "italic",
    marginTop: 10,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.boder40,
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
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
    height: 25,
    marginRight: 5,
    borderWidth: 2,
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
