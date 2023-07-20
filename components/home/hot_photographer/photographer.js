// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// const data = [
//   { name: 'John Doe', avatar: require('../../../assets/images/avata.png') },
//   { name: 'Jane Smith', avatar: require('../../../assets/images/avata.png') },
//   { name: 'Alex Johnson', avatar: require('../../../assets/images/avata.png') },
// ];

// const PhotographerList = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.wrapAll}>
//         <Text style={styles.textContent}>Nhiếp ảnh gia hot tuần này </Text>
//         <View style={styles.wrapcard}>
//           {data.map((photographer, index) => (
//             <View key={index} style={styles.rowContainer}>
//               <Image source={photographer.avatar} style={styles.avatar} />
//               <Text style={styles.name}>{photographer.name}</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     padding: 19,
//     marginVertical: 10,
//     height: 200,
//   },

//   wrapAll: {
//     // display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     padding: 0,
//     marginVertical: 8,
//     height: 162,
//   },
//   textContent: {
//     width: 142,
//     height: 56,
//     fontFamily: "Mulish",
//     fontStyle: "normal",
//     fontWeight: "800",
//     fontSize: 20,
//     lineHeight: 28,
//     color: "#181818",
//   },
//   wrapcard: {
//     height: 98,
//     flexDirection: "row",
//     padding: 10
//   },
//   rowContainer: {
//     // position: 'absolute',
//     // display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: 0,
//     margin: 8,
//     position: 'absolute',
//     height: 98,
//     left: 0,
//     top: 0,
//   },
//   avatar: {
//     width: 75,
//     height: 75,
//     borderRadius: 25,
//   },
//   name: {
//     height: 15,
//     fontFamily: "Mulish",
//     fontStyle: "normal",
//     fontWeight: "600",
//     fontSize: 12,
//     lineHeight: 15,
//     color: "#797979",
//   },
// });

// export default PhotographerList;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./avata_photo";
// const data = [
//   { name: 'John Doe', avatar: require('../../../assets/images/anhCuoi1.png') },
//   { name: 'Jane Smith', avatar: require('../../../assets/images/anhCuoi1.png') },
//   { name: 'Alex Johnson', avatar: require('../../../assets/images/anhCuoi1.png') },
//   { name: 'javis', avatar: require('../../../assets/images/anhCuoi1.png') },

// ];

const PhotographerList = ({ photographerList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const data = photographerList;
  useEffect(() => {
    // console.log(data)
  });
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Nhiếp ảnh gia hot tuần này</Text>
      <View style={styles.wrapcard}>
          {data.map((photographer) => (
            <View    key={photographer.id} style={styles.rowContainer}>
            <Avatar
          
              image={{ uri: photographer.avatarUrl }}
              photographerName={photographer.name}
            />
            {/* <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
              {photographer.name}
            </Text> */}
                </View>
          ))}
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginVertical: 10,
    // height: 200,
  },
  textContent: {
    width: 142,
    height: 56,
    fontFamily: "SVN-Gilroy-XBold",
    // fontStyle: 'normal',
    // fontWeight: '800',
    fontSize: 20,
    lineHeight: 28,
    color: "#181818",
  },
  wrapcard: {
    // height: 98,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 12
  },
  rowContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginHorizontal: 8,
    justifyContent: "center",
    

    
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 85,
  },
  name: {
    // marginTop: 8,
    // height: 15,
    // fontFamily: 'Mulish',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    color: "#797979",
    width: 67,
    overflow:"hidden"
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
    alignItems: "center",
  },
  modalContent: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 33,
  },
  imgCate: {
    width: 335,
    height: 278,
    alignSelf: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  wrapContent: {
    // Additional styling if needed
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    marginBottom: 20,
    marginTop: 20, // Adjust this value as needed
    width: 335,
    // height: 136,
    gap: 24,
  },
  Description: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
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
  name_price: {
    flexDirection: "row",
    // justifyContent: 'flex-end'
    justifyContent: "space-between",
    width: 335,
  },
  Name_Info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingBottom: 1,
  },
  Price_Info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  Price_modal: {
    // position: 'absolute',
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 32,
    textAlign: "right",
    letterSpacing: -0.24,
    color: "#F26333",
  },
  Discount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },

  Title: {
    // fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    letterSpacing: -0.16,

    color: "#040C22",
  },
  Info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    gap: 16,
  },
  Rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // padding: 0,
    gap: 4,

    // width: 108,
    // height: 18,

    // flex: 'none',
    // order: 1,
    // flexGrow: 0,
  },
  starModal: {
    height: 12,
    width: 12,
    color: "#F2C94C",
  },
  timeModal: {
    height: 12,
    width: 12,
  },
  Time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    // fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.2,
    color: "#5C616F",
  },
});

export default PhotographerList;
