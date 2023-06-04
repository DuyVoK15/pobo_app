import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONT, SIZES } from "../../constants";
import PhotographercCard from './photographer.card';
import data from './data_near_you';
const NearYou = () =>{
    return (
      <View style={styles.wrap}>
        <Text style={styles.text}>Nhiếp ảnh gia ở gần bạn</Text>
        <ScrollView horizontal 
        contentContainerStyle={styles.cardsContainer}   
        showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <PhotographercCard
            key={item.id}
            imageSource={item.imageSource}
            photographerName={item.photographerName}
            location={item.location}

          />
          
        ))}
        </ScrollView>
      </View>)

};
export default NearYou

const styles = StyleSheet.create({
  wrap:{
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // paddingVertical: 19,
    // paddingHorizontal: 19,
    // margin: 0,
    // gap: 10,
    // // flex: 0,
    // // order: 1,
    // // flexGrow: 0,
    paddingTop: 30,
    

  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,

  },
  text:{
    width: 231,
    height: 28,
    // fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 28,
    color: '#181818',
    // flex: 0,
    // order: 0,
    // flexGrow: 0,
}
  })