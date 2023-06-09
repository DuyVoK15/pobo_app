import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'
const Booking = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('9/6/2023');
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');
  const handleOnPress= ()=>{
    setOpen(!open)
  }
  const handleChange= (propDate)=>{
    setDate(propDate)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapText}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.bg_icon}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerText}>Xác nhận và thanh toán</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.wrapInfo}>
            <Image
              source={require("../../../assets/images/anh4k.jpg")}
              style={styles.bg_img}
            />
            <View style={styles.cardContent}>
              <View style={styles.wraptitle}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.photographerName}>Photographer's Name</Text>
                <Text style={styles.cameraName}>Camera Name</Text>
              </View>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Ionicons name="md-cash-outline" size={18} color={COLORS.black} />
            <Text style={styles.price}>VND 500000000</Text>
          </View>
        </View>
        <View style={styles.wrapbill}>
          <Text style={styles.textBill}>Đơn hẹn của bạn</Text>

          <View style={styles.card}>
            <View style={styles.wrapcard}>
              <View style={styles.section}>
                <Ionicons name="camera" size={24} color={COLORS.boder50} />
                <View style={styles.sectionText}>
                  {/* <Text style={styles.sectionTitle}>Section 1</Text> */}
                  <Text style={styles.sectionTitle}>Vị trí chụp</Text>
                  <Text style={styles.sectionContent}>Quận 9</Text>
                </View>
              </View>
              <View style={styles.underline} />

              <TouchableOpacity onPress={handleOnPress}>
                <View style={styles.section}>
                  <Ionicons name="calendar" size={24} color={COLORS.boder50} />
                  <View style={styles.sectionText}>
                    {/* <Text style={styles.sectionTitle}>Section 2</Text> */}
                    <Text style={styles.sectionTitle}>Ngày chụp</Text>
                    <Text style={styles.sectionContent}>{date}</Text>
                  </View>
                </View>
                <Modal animationType="slide" transparent={true} visible={open}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode="calendar"
                        minimumDate={startDate}
                        selected={date}
                        onDateChange={handleChange}
                      />
                      <TouchableOpacity onPress={handleOnPress}>
                        <Text>X</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </TouchableOpacity>
              <View style={styles.underline} />

              <View style={styles.section}>
                <Ionicons name="time" size={24} color={COLORS.boder50} />
                <View style={styles.sectionText}>
                  {/* <Text style={styles.sectionTitle}>Section 3</Text> */}
                  <Text style={styles.sectionTitle}>Vào Lúc</Text>
                  <Text style={styles.sectionContent}>9:30 Sáng</Text>
                </View>
              </View>
              <View style={styles.underline} />

              <View style={styles.section}>
                <View style={styles.listitem}>
                  <Ionicons name="person" size={24} color={COLORS.boder50} />
                  <View style={styles.sectionText}>
                    <Text style={styles.sectionTitle}>Số người chụp</Text>
                    <Text style={styles.sectionContent}>1 người</Text>
                  </View>
                </View>

                <View style={styles.listitem}>
                  <Ionicons
                    name="school-sharp"
                    size={24}
                    color={COLORS.boder50}
                  />
                  <View style={styles.sectionText}>
                    <Text style={styles.sectionTitle}>Gói Chụp</Text>
                    <Text style={styles.sectionContent}>Chụp tốt nghiệp</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 30,
    paddingBottom: 15,
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
    lineHeight: 27,
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
    paddingLeft:17,
    backgroundColor: '#FFFFFF',
    borderColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    padding: 16,
    marginBottom: 8,
    alignItems: 'flex-start',
    elevation: 8,

  },
  bg_img: {
    width: 111,
    height: 74,
    borderRadius: 16,
  },
  wrapInfo:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:11
  },
  wraptitle:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start'
},
  cardContent: {
    marginLeft: 16,
    
  },
  title: {
    fontWeight: "bold",
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
  },
  photographerName: {
    color: COLORS.gray,
    marginBottom: 8,
  },
  cameraName: {
    color: COLORS.gray,
    marginBottom: 8,
  },
  textBill:{
    // fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 15,
    color: '#000000'
  },
  wrapbill:{
    display: 'flex',
    flexDirection:'column',
    gap :16,
    paddingTop: 11
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingRight: 23,
    paddingLeft: 13,
    display:'flex',
    flexDirection:'column',
    gap:0
    
  },
  wrapcard:{
    display:'flex',
    flexDirection: 'column',
    padding: 0,
    gap: 5,
    paddingTop:16,
    paddingBottom:16
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  listitem:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:25
  },
  sectionText: {
    marginLeft: 8,
  },
  sectionTitle: {
    // fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  sectionContent: {
    // fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
  },
  underline: {
    borderWidth: 1,
    borderColor: '#EBEBF0',
    borderStyle: 'solid',
    marginBottom: 16,
  },
  centeredView:{
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView:{
    margin :20 ,
    backgroundColor:'white',
    borderRadius:20 ,
    width:'90%',
    padding: 35,
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
     elevation: 5
  }

});