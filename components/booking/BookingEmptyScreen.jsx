import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { SIZES } from '../constants'

const BookingEmptyScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/BookingEmptyIcon.png")} style={{width: 300, height: 300}}/>
      <Text style={styles.text1}>Trống</Text>
      <Text style={styles.text2}>Bạn không có cuộc hẹn nào</Text>
      <Text style={styles.text2}>Đặt lịch chụp hình ngay thôi</Text>
    </View>
  )
}

export default BookingEmptyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: 650
    },
    text1: {
        fontSize: SIZES.xxLarge,
        fontWeight: "bold"
    },
    text2: {
        fontSize: SIZES.medium,
       
    }
})