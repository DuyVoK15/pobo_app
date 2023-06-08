import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from "react";
import { ScrollView } from 'react-native-gesture-handler'
import ButtonStyle from '../../styles/ButtonStyle'
import { AuthContext } from '../../context/AuthContext'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDataFromStorage } from '../../context/AsyncStorage';

const UserProfile = ({navigation}) => {

  const {logout, getUserInfo} = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState({})
  const handle = async () => {
    const value = await AsyncStorage.getItem("userInfo")
    const parseValue = JSON.parse(value)
    setUserInfo(parseValue)
    // console.log(parseValue)
  }
  
   handle()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={ButtonStyle.buttonSignup} onPress={() => logout()}>
        <Text style={ButtonStyle.buttonSignupText}>Đăng xuất</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ButtonStyle.buttonSignup} onPress={() => console.log(userInfo)}>
        <Text style={ButtonStyle.buttonSignupText}>Lấy thông tin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ButtonStyle.buttonSignup} onPress={() => navigation.push("SettingsAccountPersonal")}>
        <Text style={ButtonStyle.buttonSignupText}>Tài khoản</Text>
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