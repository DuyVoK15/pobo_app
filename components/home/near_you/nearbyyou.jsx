import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
import PhotographercCard from "./photographer.card";
import data from "./data_near_you";
import { AuthContext } from "../../../context/AuthContext";
const NearYou = ({ photographerList, navigation }) => {
  const { photographerListByName, getAllPhotographerByName } =
    useContext(AuthContext);
  const handleNavigate = (id) => {
    navigation.navigate("PhotographerProfile", { paramValue: id });
    console.log("handleNavigate called with ID:", id); // Add this line
  };

  const fetchData = async () => {
    await getAllPhotographerByName("");
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>Nhiếp ảnh gia ở gần bạn</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.cardsContainer}
        showsHorizontalScrollIndicator={false}
      >
        {photographerListByName ? (
          photographerListByName.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleNavigate(item.id)}
            >
              <PhotographercCard
                //  key={item.id}
                imageSource={{ uri: item.avatarUrl }}
                photographerName={item.name}
                location="TP. HCM"
                navigation={navigation}
              />
            </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text>Không có gì ở đây</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default NearYou;

const styles = StyleSheet.create({
  wrap: {
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
  text: {
    width: 231,
    height: 28,
    fontFamily: "SVN-Gilroy-XBold",
    // fontStyle: "normal",
    // fontWeight: "800",
    fontSize: 20,
    lineHeight: 28,
    color: "#181818",
    // flex: 0,
    // order: 0,
    // flexGrow: 0,
  },
});
