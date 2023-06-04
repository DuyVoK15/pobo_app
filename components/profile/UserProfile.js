import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from "react";
import { ScrollView } from 'react-native-gesture-handler'
import ButtonStyle from '../../styles/ButtonStyle'
import { AuthContext } from '../../context/AuthContext'
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserProfile = () => {

  const {logout, getUserInfo} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={ButtonStyle.buttonSignup} onPress={() => logout()}>
        <Text style={ButtonStyle.buttonSignupText}>Đăng xuất</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ButtonStyle.buttonSignup} onPress={() => console.log(JSON.parse(AsyncStorage.getItem("userToken")))}>
        <Text style={ButtonStyle.buttonSignupText}>Lấy thông tin</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})