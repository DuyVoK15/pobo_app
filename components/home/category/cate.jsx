import React, { useContext, useEffect, useState } from 'react';
import { View,Text,ScrollView, Touchable } from 'react-native';

import styles  from './cates.style';
import Card from './cardCate';
import data from './dataCardCate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONT, SIZES } from "../../constants";
import { AuthContext } from '../../../context/AuthContext';

const Cate = ({ navigation }) =>{
    const { getAllListPackageShooting } = useContext(AuthContext)
    const [listPackageShooting, getListPackageShooting] = useState([])
    const fetchData = async () => {
      const data = await getAllListPackageShooting();
      getListPackageShooting(data)
    }

    useEffect(() => {
      fetchData()
      console.log(JSON.stringify(listPackageShooting)+ "HAHAHAHA")
    }, [])
    
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
          {listPackageShooting.map((packageShooting) => (
            <Card
              key={packageShooting.id}
              image={{uri: packageShooting.photographerData.avatarUrl}}
              rating={"4.5"}
              title={packageShooting.title}
              authorAvatar={{uri: packageShooting.photographerData.avatarUrl}}
              authorName={packageShooting.photographerData.name}
              navigation = {navigation}

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