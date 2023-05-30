import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  // container: {
  //   marginTop: SIZES.xLarge,
  // },
  // header: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginTop: SIZES.small,
  // },
  // headerTitle: {
  //   fontSize: SIZES.large,
  //   fontFamily: FONT.medium,
  //   color: COLORS.primary,
  // },
  // headerBtn: {
  //   fontSize: SIZES.medium,
  //   fontFamily: FONT.medium,
  //   color: COLORS.gray,
  // },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  discoverCategoriesWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 16,
    width: 382,
    height: 73,
  },
  discoverTitle: {
    width: 95,
    height: 28,
    fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 28,
    color: COLORS.darkfonts100,
  },
  discoverCategoryText: {
    // width: 59,
    // height: 13,
    marginRight :30,
    fontFamily: 'SVN-Gilroy',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 13,
    display: 'flex',
    alignItems: 'center',
    color: '#C1C1C1',
    marginRight : 30 
    
  },
  discoverCategoriesWrapper1: {
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // padding: 0,
    // marginHorizontal: 2, // To emulate the gap of 4px, set marginHorizontal to half the gap value
    // width: 382,
    // height: 29,
    // flex: 0,
    // order: 1,
    // flexGrow: 0,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  }
});

export default styles;
