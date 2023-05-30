import React from 'react';
import { View,Text,ScrollView, Touchable } from 'react-native';

import styles  from './cates.style';
import Card from './cardCate';
import data from './dataCardCate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONT, SIZES } from "../../constants";

const Cate = () =>{
    return (
      <View style={styles.discoverWrapper}>
        
        {/* <TouchableOpacity contentContainerStyle={styles.container}> */}
        {/* <View style={styles.discoverCategoriesWrapper}> */}
        <Text style={styles.discoverTitle}>Danh mục</Text>
        
        <View style={styles.discoverCategoriesWrapper1}>

            <Text style={[styles.discoverCategoryText,{color: COLORS.orange40}]}>
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Tốt nghiệp</Text>
            <Text style={styles.discoverCategoryText}>Sinh nhật</Text>
            <Text style={styles.discoverCategoryText}>Đám cưới</Text>
          </View>
          {/* </View> */}
        <ScrollView horizontal 
        contentContainerStyle={styles.cardsContainer}   
        showsHorizontalScrollIndicator={false}>
          {data.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              rating={card.rating}
              title={card.title}
              authorAvatar={card.authorAvatar}
              authorName={card.authorName}
            />
          ))}
        {/* </TouchableOpacity> */}
        </ScrollView>
      </View>
    );
}
// const styles = StyleSheet.create({
    
//   });

export default Cate