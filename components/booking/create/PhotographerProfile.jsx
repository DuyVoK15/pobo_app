import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, Dimensions } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { COLORS } from "../../constants";
import { ImageBackground } from "react-native";
// import {LinearGradient} from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { LinearGradient } from 'expo-linear-gradient';
import { COLORS,SIZES } from "../../constants";
import { BlurView } from 'expo-blur';
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import ButtonStyle from "../../../styles/ButtonStyle";
import AllProcess from "../process/AllProcess";
import PendingProcess from "../process/PendingProcess";
import packages_Info from "./packages_Info";
import rating_info from "./rating_info";

const PhotographerProfile = ({ route, navigation }) => {
  const { paramValue } = route.params;
  const { getPhotographerById } = useContext(AuthContext);
  const [ photographer, setPhotographer] = useState({});
  const fetchData = async () => {
    const data = await getPhotographerById(paramValue);
    setPhotographer(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
  const handleNavigation = () => {
    navigation.push("BookingCreate", {paramValue: paramValue})
  }
  const headerTitle = () => {
    return(
      <Text style={{ fontWeight: 'bold', fontSize: SIZES.large }}>Quản lý lịch hẹn</Text>
    )
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/avatav1.png")}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.94)", "rgba(102, 211, 194, 0)"]}
        locations={[0, 0.8526]}
        start={[1, 0]}
        end={[1, 1]}
        style={styles.linearGradientTop}
      />

      <View style={styles.wrapText}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.wrapbackhome}>
            <View style={styles.bg_icon}>
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.textHome}>Trang Chủ</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* <ImageBackground
        source={require('../../../assets/images/Rectangle.png')}
        style={styles.backgroundImage}
      >
     
      </ImageBackground> */}

      <LinearGradient
        colors={["#000000", "rgba(211, 102, 102, 0)"]}
        locations={[0.6759, 1.042]}
        start={[1, 1]}
        end={[1, 0]}
        style={styles.gradientBackground}
      >

        <View>
          <View style={styles.cardInfoContainer}>
            {/* <View style={styles.infoContainer}> */}
            <BlurView
              style={styles.infoContainer}
              tint="default"
              intensity={86}
            >
              <View style={styles.backgroundwrapinfo}>
                <View style={styles.wrapinfo}>
                  <View style={styles.detailInfo}>
                    <Image
                      style={styles.avata}
                      source={{ uri: photographer.avatarUrl }}
                    />
                    <View style={styles.wrap_DetailInfo}>
                      <View style={styles.wrapname}>
                        <Text style={styles.textName}>{photographer.name}</Text>
                      </View>
                      <View style={styles.wrap_plan_follow_rate}>
                        <View style={styles.plan_follow_rate}>
                          <Text style={styles.textInfo}>Dự Án</Text>
                          <Text style={styles.textInfonumber}>14</Text>
                        </View>
                        <Text style={styles.underline}></Text>
                        <View style={styles.plan_follow_rate}>
                          <Text style={styles.textInfo}>Follower</Text>
                          <Text style={styles.textInfonumber}>14K</Text>
                        </View>
                        <Text style={styles.underline}></Text>
                        <View style={styles.plan_follow_rate}>
                          <Text style={styles.textInfo}>Đánh giá</Text>
                          <Text style={styles.textInfonumber}>4.5</Text>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles.buttonsubmit}
                      onPress={handleNavigation}
                    >
                      <Text style={styles.textsubmit}>Đặt lịch</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={styles.story}>
                      <View style={styles.arrow}></View>

                      <Text>Hello world Im {photographer.name}, Im from HCMC </Text>
                    </View>
                  </View>
                  
                </View>
              </View>
            </BlurView>
            {/* </View> */}
            <View style={styles.profile}></View>
          </View>
        
          
        </View>
       
       
      </LinearGradient>
      
      <Tab.Navigator
           style={{ flex: 1, marginTop: 0  }}
           tabBarOptions={{
            style: { backgroundColor: 'red' } // Chỉnh màu nền ở đây
          }}
           tabBarPosition="top"
           screenOptions={({ route }) => ({
            
             tabBarStyle: { backgroundColor: "black" }, // Chỉnh màu nền của tab bar
             tabBarLabelStyle: {
               fontWeight: "bold",
               fontSize: 14,
               textTransform: "none",
             }, // Chỉnh màu chữ của tab
             tabBarIndicatorStyle: {
               backgroundColor: COLORS.orange50,
               height: 5,
             }, // Chỉnh màu dấu chỉ dẫn hiện tại
             tabBarActiveTintColor: COLORS.orange50,
           })}
          >
            <Tab.Screen initialParams={{photographerId: paramValue }} name="packages_Info" component={packages_Info} options={{tabBarLabel: "Các gói chụp"}}/>
            <Tab.Screen initialParams={{photographerId: paramValue }} name="rating_info" component={rating_info}  options={{tabBarLabel: "Đánh giá"}} />
          </Tab.Navigator>
    </ImageBackground>
  );

};

export default PhotographerProfile;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: height*0.7
  },
  linearGradientTop: {
    position: 'absolute',
    top: -70,
    left: 0,
    right: 0,
    height: 200,
  },
  wrapText: {
    position:'absolute',
    top:50,
    left:0,
    // flexDirection: "row",
    // alignItems: "center",
    // paddingTop: 10,
    // justifyContent: "center",
    
    // padding: 10,
  },
  wrapbackhome:{
    display:'flex',
    flexDirection:'row',
    gap:22
  },
  bg_icon: {
    // backgroundColor: COLORS.orange70,
    borderRadius: 50,
    height: 32,
    width: 32,
   
    top: 0,
    left : 20
  
  },
  textHome:{
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 18 * 1.5,
    color:'#FFFFFF'
    
  },
  linearGradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 10,
  },
  gradientBackground: {
      bottom:-100,
      flex:0.8,
      height: height * 0.9
    },
  //   infoContainer:{
  //     filter: 'drop-shadow(0px 32px 72px rgba(20, 20, 43, 0.24))',
  //     height: height*0.3,
  //     width: width *0.9,
  //     backgroundColor: '#FE5D2633',
  //     elevation: 5, // Controls the depth of the shadow
  //     shadowColor: 'rgba(20, 20, 43, 0.24)', // Shadow color with transparency
  //     shadowOffset: { width: 0, height: 32 }, // Shadow offset (x, y)
  //     shadowOpacity: 1, // Shadow opacity
  //     shadowRadius: 72, // Shadow radius
  //     borderRadius: 20
  //   },


  cardInfoContainer:{
      top: 0,
      alignItems:'center',
      justifyContent:'center'
    },
    infoContainer: {
      // backgroundColor: '#FE5D2633',
      display: 'flex',
      height: height*0.3,
      width: width *0.9,
      shadowRadius: 72,
      borderRadius: 20,
      elevation: 5,
      shadowColor: 'rgba(20, 20, 43, 0.24)',
      shadowOffset: { width: 0, height: 32 },
      shadowOpacity: 1,
     
    },
    infoContainer1:{
      display: 'flex',
      height: height*0.3,
      width: width *0.9,
      shadowRadius: 72,
      borderRadius: 20,
      elevation: 5,
      shadowColor: 'rgba(254, 93, 38, 0.42)',
      shadowOffset: { width: 0, height: 32 },
      shadowOpacity: 1,
    },
    backgroundwrapinfo:{
      backgroundColor: 'rgba(254, 93, 38, 0.2)',
     
      flex:1,
      display:'flex',
      height: height*0.3,
      width: width *0.9,
      borderRadius: 20,
      paddingTop: 5,
      paddingLeft:20,
      alignItems:'center',
      justifyContent:'center'
    },
    wrapinfo:{
      display:'flex',
      flexDirection:'column',
      gap: 6
    },
    buttonsubmit:{
      display:'flex',
      alignItems:'center', 
      justifyContent:'center',
      backgroundColor:'#FFFFFF',
      borderRadius:20,
      width:75,
      height: 32,
      right: 2,
      
    },
    textsubmit:{
      fontWeight:600,
      fontSize:14,
      color: '#FE5D26'
    },
    detailInfo:{
      display:'flex',
      flexDirection:'row',
      gap:6
    },
    avata:{
      height: 73,
      width:73,
      borderWidth: 3,
      borderColor: 'rgba(255, 255, 255, 0.4)',
      borderRadius: 49.5,    
    },
    wrap_DetailInfo:{
      display:'flex',
      flexDirection:"column",
      gap:7
    },
    wrapname:{
      alignItems:'flex-start'
    },
    textName:{
      fontStyle: 'normal',
  fontWeight: '700',
  fontSize: 20,
  lineHeight: 28,
  color: '#FFFFFF',
  textAlign: 'center',
    },
    wrap_plan_follow_rate:{
      display:'flex',
      flexDirection:'row',
      gap:1,
      textAlign:'center',
      alignItems:'center'
    },
    plan_follow_rate:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    },
    textInfo:{
      fontStyle: 'normal',
  fontWeight: '500',
  fontSize: 10,
  lineHeight: 10,
  color:'#FFFFFF'
    },
    textInfonumber:{
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 15,
      lineHeight: 21,
      color: '#FFFFFF'
    },
    underline:{
      width: 28,
        height: 0,
        // left: 86.48,
        // top: 35,
        borderColor: 'rgba(254, 93, 38, 0.42)',
        borderWidth: 1,
        transform: [{ rotate: '90deg' }],
    },
    arrow:{
      position:'absolute',
      backgroundColor:'rgba(255,250,250, 0.24)',
      width:11.39,
      height:11.39,
      top: -3,
      left:29,
      borderRadius:4.34889,
      transform: [{ rotate: '44deg' }]    },
      overflow: 'hidden',

    story:{
      height:height*0.11,
      width: width*0.8,
      backgroundColor:'rgba(255,250,250, 0.24)',
      borderRadius:20,
      textAlign:'left',
      justifyContent:'flex-start',
      padding:5
    },
    tabBar: {
      backgroundColor: 'black', // Replace COLORS.transparent with your desired background color
    },
    tabLabel: {
      fontWeight: 'bold',
      fontSize: 16,
      textTransform: 'capitalize',
      color: COLORS.orange50, // Replace COLORS.white with your desired text color
    },
    tabIndicator: {
      backgroundColor: COLORS.orange50, // Replace COLORS.orange with your desired indicator color
      height: 2,
      paddingBottom:1
    },
});

