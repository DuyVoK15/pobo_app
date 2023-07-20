import React from "react";
import { View,ScrollView, Touchable,Image, Text, StyleSheet,TouchableOpacity } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import data from './data_near_you';

export default function PhotographercCard( {imageSource, photographerName, location,navigation} ) {
  return (
    <View>
            {/* <TouchableOpacity onPress={()=> navigation.}> */}

    
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{photographerName}</Text>
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={18} color={COLORS.orange50} />
          <Text style={styles.locationText}>{location}</Text>
          </View>
      </View>
    </View>
    {/* </TouchableOpacity> */}
    </View>
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
    alignItems: 'center',
    padding: 9,
    gap: 10,
    width: 150,
    height: 161,
    backgroundColor: COLORS.backgound20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 12,
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
    width: 134,
    height: 98,
    borderRadius: 10,
    marginBottom: 8,
  },
  wrapLocation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 4,
    // width: 111,
    // height: 38,
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
  name: {
    // width: 111,
    // height: 20,
    // fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19.6,
    color: '#181818',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flex: 1,
  overflow: 'hidden',
  // textOverflow: 'ellipsis',
    
    
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationText: {
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
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: SIZES.xSmall,
  lineHeight: SIZES.xSmall,
  color: COLORS.darkfonts100,
  }
});
