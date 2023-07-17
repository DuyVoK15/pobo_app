import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
import { fontFamily } from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    height : 68 ,
    width: 235

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    // fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    // fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  welcomeText: {
    // fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    fontFamily : "SVN-Gilroy-Bold"
    // marginTop: 2, 
    // paddingRight : 70
    
  }
});

export default styles;
