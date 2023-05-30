import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import card from './dataCardCate';
import { COLORS, FONT, SIZES } from "../../constants";
// import { color } from 'react-native-reanimated';
const Card = ({ image, rating, title, authorAvatar, authorName }) => {
  return (
    // <View style={styles.card}>
      <View style={styles.contentContainer}>
      <Image source={image} style={styles.image} resizeMode="cover" />

        <View style={styles.ratingContainer}>
          <View style= {styles.starContainer}>
          <Ionicons name="star" style={styles.star} />
          </View>
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.authorContainer}>
          <Image source={authorAvatar} style={styles.authorAvatar} resizeMode="cover" />
          <Text style={styles.authorName}>{authorName}</Text>
        </View>
      </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 4,
  },
  image: {
    // position: 'absolute',
    width: 280,
    height: 180,
    left: 0,
    top: 0,
    borderRadius: 10
  },
  contentContainer: {
    // padding: 16,
    width: 280,
    height: 246,
    flex: 0,
    order: 0,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 8,
    width: 57,
    backgroundColor: "rgba(254, 93, 38, 0.5)",
    alignItems: "center",

    display: 'flex',
    paddingTop: 4,
    paddingRight: 8,
    gap: 3,
    justifyContent: 'center',

    position: 'absolute',
    height: 28,
    left: 8,
    top: 8,

    borderRadius: 8,
  },
  starContainer:{
    width: 14,
    height: 20,
    flex: 0,
    order: 0,
    // flexGrow:0
  },
  star: {
    position: 'absolute',
    left: '12.5%',
    right: '12.5%',
    top: '12.5%',
    bottom: '12.5%',
    color: '#FFFFFF'
  },
  rating: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
    width: 22,
    height: 24,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    order: 1
  },
  title: {
    // fontSize: 18,
    // fontWeight: "bold",
    // marginBottom: 8,
    position: 'absolute',
    // width: 140,
    // height: 22,
    left: 0,
    top: 192,
    fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: '#181818',
  },
  authorContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 8,
    position: 'absolute',
    left: 0,
    top: 222,
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  authorName: {
    // fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 13,
    color: '#C1C1C1',
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
});

export default Card;