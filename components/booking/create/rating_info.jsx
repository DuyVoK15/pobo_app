import { StyleSheet, Text, View, Dimensions,TouchableOpacity,ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Rating, AirbnbRating } from "react-native-ratings";
import React, { useState } from 'react';
import ButtonStyle from "../../../styles/ButtonStyle";

const width = Dimensions.get("window").width;

export default Rating_Info = () => {
  const handleRatingChange = (rating) => {
    console.log("New rating:", rating);
  };
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tite}>Đánh giá</Text>

      {/* <AirbnbRating defaultRating={0} color={'white'} halfStarEnabled={true}/> */}

      <AirbnbRating
        count={5}
        reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
        defaultRating={0}
        size={24}
        reviewSize={14}
        //   onFinishRating={handleRatingChange}
        starColor="red" // Set the custom color for the stars
        reviewStyle={styles.review}
      />
        <TouchableOpacity >
      <View style={styles.textinputContainer}>
        <TextInput style={styles.textInputTitle} placeholder="Tiêu Đề" />
      
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nội Dung"
          // value={comment}
          // onChangeText={handleCommentChange}
          multiline
          numberOfLines={4}
        />
      </View>
      </View>
      </TouchableOpacity>
      <View style={styles.containerButton}>
        <TouchableOpacity style={ButtonStyle.buttonSignup}>
          <Text style={ButtonStyle.buttonSignupText}>Đăng</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "flex-start",
    //   justifyContent: 'center',
    // paddingBottom:20,
    // paddingLeft:20,
    // paddingRight:20,
    //   paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
    paddingHorizontal: 20,

    gap: 5,
  },
  tite: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.4,
    color: "#FFFFFF",
  },

  review: {},
  textinputContainer: {
    alignItems: "flex-start",
    gap: 7,
  },
  textInputTitle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: width * 0.9,
    height: 59,
    paddingHorizontal: 10,

  },
input:{
    height: 176,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    backgroundColor: "#FFFFFF",
    width: width * 0.9,
    borderRadius: 10,

}
});
