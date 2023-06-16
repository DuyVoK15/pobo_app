import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONT, SIZES } from "../../constants";
import JustViewer from './just_View_card';

import data from './data_just_view';
const JustView = ( {navigation}) =>{
  const handleViewerClick = (item) => {
    // Handle the click event here
    // You can navigate to the Detail page or show it as a modal, etc.
    console.log('Clicked item:', item);
    // Example: You can navigate to the Detail page using React Navigation
    // Replace 'navigation' with the actual navigation prop from React Navigation
    navigation.navigate('Detail', { item });
  };
    return (
      <View style={styles.wrap}>
        <Text style={styles.text}>Mới Xe aam</Text>
        
        <ScrollView horizontal 
        contentContainerStyle={styles.cardsContainer}   
        showsHorizontalScrollIndicator={false}
        >
        {data.map((item) => (
          <TouchableOpacity
          key={item.id}
          onPress={() => handleViewerClick(item)} // Handle the click event
        >
          <JustViewer
            // key={item.id}
            imageSource={item.imageSource}
            title={item.title}
            name={item.name}

          />
          </TouchableOpacity>
          
        ))}
        </ScrollView>
      </View>)

};
export default JustView

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
    gap: SIZES.xSmall,
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