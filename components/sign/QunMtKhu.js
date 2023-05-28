import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const QunMtKhu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.qunMtKhu}>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.qunMtKhu1, styles.honTtTypo1]}>
            Quên mật khẩu
          </Text>
          <Text style={styles.nhpEmail}>
            Nhập email đã liên kết với tài khoản
          </Text>
        </View>
        <View style={styles.groupParent}>
          <View style={styles.labelLayout}>
            <View style={[styles.label, styles.labelPosition]}>
              <Text style={[styles.title, styles.textTypo]}>Email</Text>
              <View style={[styles.label1, styles.label1Position]}>
                <Text style={[styles.voHoangVy, styles.honTtTypo]}>
                  vohoangvy139@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.bnNhContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textTypo}>
              <Text style={styles.bnNh}>Bạn đã nhớ mật khẩu?</Text>
              <Text style={styles.text1}>{` `}</Text>
              <Text style={styles.ngNhp}>Đăng nhập</Text>
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonParent}>
        <Pressable
          style={[styles.button, styles.menuFlexBox]}
          onPress={() => navigation.navigate("BackEmail")}
        >
          <Text style={[styles.honTt, styles.honTtTypo]}>Hoàn tất</Text>
        </Pressable>
        <View style={styles.bottomBar}>
          <View style={styles.homeIndicator}>
            <View style={styles.homeIndicator1} />
          </View>
          <View style={[styles.tabBar, styles.label1Position]}>
            <View style={[styles.menu, styles.menuFlexBox]}>
              <View style={styles.icon}>
                <Image
                  style={styles.iconlylightOutlinehome}
                  contentFit="cover"
                  source={require("../assets/iconlylightoutlinehome.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </View>
            <View style={[styles.menu, styles.menuFlexBox]}>
              <View style={styles.icon}>
                <Image
                  style={styles.iconlylightOutlinehome}
                  contentFit="cover"
                  source={require("../assets/iconlylightoutlinesearch.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Search</Text>
              </View>
            </View>
            <View style={[styles.menu, styles.menuFlexBox]}>
              <View style={styles.icon}>
                <Image
                  style={styles.iconlylightOutlinehome}
                  contentFit="cover"
                  source={require("../assets/iconlybolddocument.png")}
                />
                <Text style={[styles.library, styles.homeTypo]}>Library</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  honTtTypo1: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  labelPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  label1Position: {
    flexDirection: "row",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.neutralWhite,
  },
  honTtTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  menuFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  homeTypo: {
    marginTop: 2,
    fontSize: FontSize.medium_size,
    textAlign: "left",
  },
  qunMtKhu1: {
    fontSize: 20,
    lineHeight: 36,
    color: Color.darkslategray_100,
    textAlign: "left",
  },
  nhpEmail: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontFamily: FontFamily.mulishMedium,
    width: 270,
    marginTop: 4,
    color: Color.darkgray,
    fontWeight: "500",
    textAlign: "left",
  },
  title: {
    color: Color.neutral70,
    lineHeight: 14,
    left: 0,
    top: 0,
    position: "absolute",
  },
  voHoangVy: {
    fontFamily: FontFamily.mulishRegular,
    color: Color.neutral601,
    lineHeight: 14,
  },
  label1: {
    height: "67.57%",
    top: "32.43%",
    borderStyle: "solid",
    borderColor: "#cbd4e1",
    borderWidth: 1,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_lg,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    bottom: "0%",
    flexDirection: "row",
  },
  label: {
    height: 74,
    width: 327,
  },
  labelLayout: {
    height: 74,
    width: 327,
  },
  bnNh: {
    color: Color.darkgray,
  },
  text1: {
    color: "#32b768",
  },
  ngNhp: {
    color: Color.primaryOrange50,
  },
  bnNhContainer: {
    marginTop: 14,
  },
  groupParent: {
    marginTop: 56,
  },
  frameParent: {
    top: 183,
    left: 24,
    position: "absolute",
  },
  honTt: {
    color: Color.neutral50,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  button: {
    backgroundColor: Color.neutral30,
    width: 256,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_mini,
    borderRadius: Border.br_3xs,
  },
  homeIndicator1: {
    marginLeft: -67.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    height: "40.48%",
    top: "59.52%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  iconlylightOutlinehome: {
    width: 24,
    height: 24,
  },
  home: {
    fontFamily: FontFamily.regular,
    color: Color.neutral60,
  },
  icon: {
    alignItems: "center",
  },
  menu: {
    paddingHorizontal: Padding.p_9xs,
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_9xs,
    flex: 1,
    justifyContent: "center",
  },
  library: {
    fontFamily: FontFamily.medium,
    color: Color.primary50,
    fontWeight: "500",
  },
  tabBar: {
    height: "60.71%",
    top: "0%",
    bottom: "39.29%",
    display: "none",
  },
  bottomBar: {
    shadowColor: "rgba(25, 17, 121, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    width: 375,
    height: 84,
  },
  buttonParent: {
    top: 680,
    left: 1,
    alignItems: "center",
    position: "absolute",
  },
  qunMtKhu: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralWhite,
    flex: 1,
  },
});

export default QunMtKhu;
