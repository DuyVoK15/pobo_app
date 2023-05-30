import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import FirstOnboarding from './FirstOnboarding';
import SecondOnboarding from './SecondOnboarding';
import ThirdOnboarding from './ThirdOnboarding';
import { useNavigation } from '@react-navigation/native';

const SwiperOnboarding = () => {
  // const navigation = useNavigation()
  return (
    <Swiper dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FirstOnboarding />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SecondOnboarding />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThirdOnboarding />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    // CSS cho Swiper
  },
  dot: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Màu chấm chuyển slide
    width: 12,
    height: 12,
    borderRadius: "50%",
    marginBottom: 30
  },
  activeDot: {
    backgroundColor: '#FE5D26', // Màu chấm chuyển slide hiện tại
    width: 12,
    height: 12,
    borderRadius: "50%",
    marginBottom: 30
  },
});


export default SwiperOnboarding;
