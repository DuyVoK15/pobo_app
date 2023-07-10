// import { useNavigation } from "@react-navigation/native";
// import { StyleSheet, View, Text, Image } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

import { useCallback, useContext, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from "react-native";
import Welcome from "./welcome/Welcome";
import { COLORS, icons, images, SIZES } from "../constants";
import * as Font from "expo-font";
import SearchBar from "./welcome/searchBar";
import Cate from "./category/cate";
import NearYou from "./near_you/nearbyyou";
import JustView from "./justview/just_view";
import PhotographerList from "./hot_photographer/photographer";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonStyle from "../../styles/ButtonStyle";
import { BASE_URL, IPv4 } from "../../utils/config";
import { AuthContext } from "../../context/AuthContext";
import { RefreshControl } from "react-native";
const HomeScreen = ({ navigation }) => {
  const {photographerList, getAllPhotographer} = useContext(AuthContext)
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  });

  const fetchData = async () => {
    await getAllPhotographer();
  }

  
  useEffect(() => {
    const interval = setInterval(fetchData, 10000000000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {  
    fetchData();
  }, []);
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    } >
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
          // paddingLeft: 5,
          paddingTop: 70,
          backgroundColor: "#FFFFFF",
        }}
      >
        <SearchBar />
        <Welcome
        // searchTerm={searchTerm}
        // setSearchTerm={setSearchTerm}
        // handleClick={() => {
        //   if (searchTerm) {
        //     router.push(`/search/${searchTerm}`)
        //   }
        // }}
        />
        <Cate navigation={navigation}/>
        <NearYou navigation={navigation} photographerList={photographerList} />
        <JustView navigation={navigation}/>
        <PhotographerList photographerList={photographerList} />
        {/* <TouchableOpacity
          style={ButtonStyle.buttonSignup}
          onPress={() => console.log(photographerList.row[0].id)}
        >
          <Text style={ButtonStyle.buttonSignupText}>
            Lấy thông tin Photographer
          </Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#374151",
  },
  text2: {
    color: "#828282",
  },
  //   circleSuccessIcon: {
  //     width: 280,
  //     height: 280,
  //   },
  //   successIcon: {
  //     width: 125,
  //     height: 90,
  //     position: "absolute",
  //   },
  //   imageContainer: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  avatarDuy: {
    width: 250,
    height: 200,
  },
  buttonSignin: {
    paddingVertical: 21,
    paddingHorizontal: 20,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#FE5D26",
    borderRadius: 10,
    marginTop: 200,
  },
  buttonSigninText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0D0D12",
  },
});
export default HomeScreen;
