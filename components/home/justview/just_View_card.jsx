import React from "react";
import { View,ScrollView, Touchable,Image, Text, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";

export default function JustViewer ( {imageSource,name,title} ) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.wrap}> */}
        <Image source={imageSource} style={styles.image} />
        <View style={styles.wrapInfo}>
          {/* <MaterialIcons name="location-on" size={18} color="gray" /> */}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.nameText}>{name}</Text>

          </View>
      </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // padding: 16,
    // backgroundColor: "white",
    // borderRadius: 8,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 3,


    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // padding: 0,
    // gap: 11,
    // // width: 782,
    // // height: 161,
    // overflowX: 'scroll',
    // flex: 0,
    // order: 1,
    // flexGrow: 0,

    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // padding: 0,
    // gap: 19,
    // // width: 643,
    // // height: 197,
    // flex: 0,
    // order: 0,
    // flexGrow: 0,

    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // padding: 0,
    // gap: 11,
    // // width: 782,
    // // height: 161,
    // overflowX: 'scroll',
    // // flex: 0,
    // // order: 1,
    // // flexGrow: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    margin: 1,
    width: 142,
    height: 209,
    backgroundColor: '#F6F8FC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderRadius: 10,
  },
    
  
  // wrap: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'flex-start',
  //   padding: 9,
  //   margin: 0,
  //   gap: 10,
  //   isolation: 'isolate',
  //   width: 150,
  //   height: 161,
  //   backgroundColor: '#F6F8FC',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 8,
  //   borderRadius: 12,
  //   flex: 0,
  //   order: 0,
  //   flexGrow: 0,
  // },
  image: {
    position: 'absolute',
    width: 124,
    height: 124,
    left: 9,
    top: 9,
    backgroundColor: '#C4C4C4',
    borderRadius: 12,
    // flex: 0,
    // order: 0,
    // flexGrow: 0,
  },
  wrapLocation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 4,
    // width: 111,
    // height: 38,
    // flex: 0,
    // order: 1,
    // flexGrow: 0,
  },
  title: {
    // width: 111,
    // height: 20,
    // fontFamily: 'SVN-Gilroy',
    position: 'absolute',
    width: 111,
    height: 40,
    left: 9,
    top: 141,
    fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#181818',
    
  },
  wrapInfo: {
    width: 111,
    height: 55,
    // flex: 0,
    // order: 1,
    // flexGrow: 0,
  },
  nameText: {
    // width: 37,
    // height: 11,
  //   fontFamily: 'SVN-Gilroy',
  //   fontStyle: 'normal',
  //   fontWeight: '700',
  //   fontSize: 10,
  //   lineHeight: 10,
  //   color: '#0F1A2A',
  //   flex: 0,
  //   order: 1,
  //   flexGrow: 0,
  // },
//   position: 'absolute',
    width: 87,
    height: 11,
    left: 9,
    top: 185,
    fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 10,
    color: '#C1C1C1',
  }
});
