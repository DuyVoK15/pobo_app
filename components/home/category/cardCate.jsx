import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Touchable, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import card from './dataCardCate';
import { COLORS, FONT, SIZES } from "../../constants";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/stack";

// import { color } from 'react-native-reanimated';
const Card = ({
  image,
  rating,
  title,
  authorAvatar,
  authorName,
  navigation,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    // <View style={styles.card}>
    <View>
      <TouchableOpacity onPress={()=> navigation.navigate('Booking')}>
        <View style={styles.contentContainer}>
          <Image source={image} style={styles.image} resizeMode="cover" />

          <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
              <Ionicons name="star" style={styles.star} />
            </View>
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.authorContainer}>
            <Image
              source={authorAvatar}
              style={styles.authorAvatar}
              resizeMode="cover"
            />
            <Text style={styles.authorName}>{authorName}</Text>
          </View>
        </View>
        {/* // </View> */}
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={["down"]}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          {/* <Spinner visible={isLoading} /> */}

          <View style={styles.modalContent}>
            <ImageBackground source={image} style={styles.imgCate} />
          </View>
          <View style={styles.wrapContent}>
            <View style={styles.Description}>
              <View style={styles.name_price}>
              <View style={styles.Name_Info}>
                <Text style={styles.Title}>{title}</Text>

                <View style={styles.Info}>
                  <View style={styles.Rating}>
                    <Ionicons name="star" style={styles.starModal} />
                    <Text>{rating}</Text>
                  </View>
                  <View style={styles.Time}>
                    <Ionicons
                      name="time-sharp"
                      color="#5C616F"
                      style={styles.timeModal}
                    />
                    <Text>25 min</Text>
                  </View>
                </View>
              </View>
              <View style={styles.Price_Info}>
                <Text style= {styles.Price_modal}>1.000.000</Text>
                <View style={styles.Discount}>
                  <Text>
                    $18
                  </Text>
                  <Text>
                    -75 OFF
                  </Text>
                </View>
              </View>
              </View>
              <Text style={styles.text}>
                sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
              </Text>
              
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 4,
  },
  image: {
    // position: 'absolute',
    width: 280,
    height: 180,

    left: 0,
    top: 0,
    borderRadius: 10
  },
  contentContainer: {
    // padding: 16,
    width: 280,
    height: 246,
    flex: 0,
    order: 0,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 8,
    width: 57,
    backgroundColor: "rgba(254, 93, 38, 0.5)",
    alignItems: "center",

    display: 'flex',
    paddingTop: 4,
    paddingRight: 8,
    gap: 3,
    justifyContent: 'center',

    position: 'absolute',
    height: 28,
    left: 8,
    top: 8,

    borderRadius: 8,
  },
  starContainer:{
    width: 14,
    height: 20,
    flex: 0,
    order: 0,
    // flexGrow:0
  },
  star: {
    position: 'absolute',
    left: '12.5%',
    right: '12.5%',
    top: '12.5%',
    bottom: '12.5%',
    color: '#FFFFFF'
  },
  rating: {
    // fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
    width: 22,
    height: 24,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    order: 1
  },
  title: {
    // fontSize: 18,
    // fontWeight: "bold",
    // marginBottom: 8,
    position: 'absolute',
    // width: 140,
    // height: 22,
    left: 0,
    top: 192,
    // fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#181818',
  },
  authorContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 8,
    position: 'absolute',
    left: 0,
    top: 222,
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  authorName: {
    // fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 13,
    color: '#C1C1C1',
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    height: 750,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems:'center'

  },
  modalContent: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop:33,
  },
  imgCate: {
    width: 335,
    height: 278 ,
    alignSelf: "center",
    borderRadius : 16,
    overflow: "hidden" 
  },
  wrapContent:{
   
    // Additional styling if needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    marginBottom: 20,
    marginTop: 20, // Adjust this value as needed
    width: 335,
    // height: 136,
    gap: 24,
   
  },
  Description:{
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 20,
  },
  // Name:{
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   paddingBottom: 12,
  //   gap: 12,

  //   position: 'absolute',
    
  //   left: 0,
  //   top: 0,
    
  // },
  name_price:{
    flexDirection: 'row', 
    // justifyContent: 'flex-end'
    justifyContent: 'space-between',
    width: 335
  },
  Name_Info:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 1,
  },
  Price_Info:{
    display: 'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    
  }
  ,
  Price_modal:{
    // position: 'absolute',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'right',
    letterSpacing: -0.24,
    color: '#F26333',
  },
    Discount:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap:5
    },

  Title:{
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: -0.16,

    color: '#040C22',
  },
  Info:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 16,
  },
  Rating:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 0,
    gap: 4,

    // width: 108,
    // height: 18,

    // flex: 'none',
    // order: 1,
    // flexGrow: 0,
  },
  starModal:{
      height: 12,
      width: 12,
      color: '#F2C94C'
  },
  timeModal:{
    height:12,
    width:12,
  },
  Time:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text :{
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.2,
    color: '#5C616F',
  },
 
});

export default Card;