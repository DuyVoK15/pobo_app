import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, Dimensions } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { COLORS } from "../../constants";
import { ImageBackground } from "react-native";
// import {LinearGradient} from 'expo-linear-gradient';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


// const Photograper_Info = ({ navigation }) => {
//     return(
//     //     <View>
//     //     <View style={{ position: 'absolute' }}>
//     //   <LinearGradient
//     //     colors={['rgba(0, 0, 0, 0.94)', 'rgba(102, 211, 194, 0)']}
//     //     start={{ x: 0, y: 1 }}
//     //     end={{ x: 0, y: 0 }}
//     //     style={{ flex: 1, opacity: 0.5 }}
//     //   />
//     //   {/* Rest of your component */}
//     // </View>
//    <View>
//     <ImageBackground
//         source={require('../../../assets/images/anh4k.jpg')}
//         style= {styles.img_bg}
//         />
       
       
// </View>
//     )
// }
// export default Photograper_Info


// const styles = StyleSheet.create({
   
//     img_bg:{
//         height:height* 0.4,
       
//     },
 
     


// })

import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../../constants";
import { BlurView } from 'expo-blur';
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import ButtonStyle from "../../../styles/ButtonStyle";

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

  const handleNavigation = (obj) => {
    navigation.push("BookingCreate", {paramValue: paramValue})
  }


  return (
    <ImageBackground
      source={{uri: "https://st.quantrimang.com/photos/image/2018/01/25/anh-nen-chat-luong-cao-32.jpg"}}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.94)", "rgba(102, 211, 194, 0)"]}
        locations={[0, 0.8526]}
        start={[1, 0]}
        end={[1, 1]}
        style={styles.linearGradientTop}
      />


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
          <View style={styles.abcd}>
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
                      source={{uri: photographer.avatarUrl}}
                    />
                    <View style={styles.wrap_DetailInfo}>
                      <Text style={styles.textName}>{photographer.name}</Text>
                      <View style={styles.wrap_plan_follow_rate}>
                        <View style={styles.plan_follow_rate}>
                          <Text style={styles.textInfo}>Dự Án</Text>
                          <Text style={styles.textInfonumber}>14</Text>
                        </View>
                        <View style={styles.plan_follow_rate}>
                          <Text style={styles.textInfo} >Follower</Text>
                          <Text style={styles.textInfonumber}>14K</Text>
                        </View>
                        <View style={styles.plan_follow_rate}>
                          <Text style={styles.textInfo}>Đánh giá</Text>
                          <Text style={styles.textInfonumber}>4.5</Text>
                        </View>
                      </View>
                    </View>
                  </View>


                  <View style={styles.story}></View>
                </View>
              </View>
            </BlurView>
            {/* </View> */}
            <View style={styles.profile}></View>
            <TouchableOpacity style={[ButtonStyle.buttonSignup, {backgroundColor: COLORS.orange40}]} onPress={handleNavigation}>
              <Text style={ButtonStyle.buttonSignupText}>Đặt lịch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
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
    height: height*0.5
  },
  linearGradientTop: {
    position: 'absolute',
    top: -70,
    left: 0,
    right: 0,
    height: 200,
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


    abcd:{
      top: 50,
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
      paddingTop: 20,
      paddingLeft:20,
      alignItems:'center',
      justifyContent:'center'
    },
    wrapinfo:{
      display:'flex',
      flexDirection:'column',
      gap: 6
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
      gap:4
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
    story:{
      height:height*0.09,
      width: width*0.7,
      backgroundColor:'rgba(255,250,250, 0.24)',
      borderRadius:20
    }
});

