import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwiperOnboarding from "../onboarding/SwiperOnboarding";
import WelcomeScreen from "../signing/WelcomeScreen";
import SuccessSignupScreen from "../signing/SuccessSignupScreen";
import SettingsAccountPersonal from "../profile/SettingsAccountPersonal";
import BottomNavigator from "./bottomTabNavigator";
import SendOTP from "../forgeting/SendOTP";
import { AuthContext } from "../../context/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import SigninModal from "../signing/SigninModal";
import FirstOnboarding from "../onboarding/FirstOnboarding";
import Booking from "../home/category/booking";
import PhotographerProfile from "../booking/create/PhotographerProfile";
import BookingCreate from "../booking/create/BookingCreate";
import VerifyOTP from "../forgeting/VerifyOTP";
import NewPassword from "../forgeting/NewPassword";
import { SIZES } from "../constants";
import RechargeScreen from "../payment/RechargeScreen";

const IntroStack = createStackNavigator();
const IntroStackScreen = () => {
  return (
    <IntroStack.Navigator>
      <IntroStack.Screen
        options={{ headerShown: false }}
        name="SwiperOnboarding"
        component={SwiperOnboarding}
      />
    </IntroStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="SuccessSignupScreen"
        component={SuccessSignupScreen}
      />
      <AuthStack.Screen name="SendOTP" component={SendOTP} />
      <AuthStack.Screen name="VerifyOTP" component={VerifyOTP} />
      <AuthStack.Screen name="NewPassword" component={NewPassword} />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="UserProfile"
        component={BottomNavigator}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="SettingsAccountPersonal"
        component={SettingsAccountPersonal}
      />
    </AuthStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "white",
          height: 100,
          // borderTopLeftRadius: 35,
          // borderTopRightRadius: 35,
        },
      }}
    >
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={BottomNavigator}
      />

      <HomeStack.Screen
        name="SettingsAccountPersonal"
        component={SettingsAccountPersonal}
        options={{ headerTitle: "Trang cá nhân", headerTitleStyle: {
          fontSize: SIZES.xLarge
        } }}
      />

      <HomeStack.Screen
        options={{ headerShown: false }}
        name="UserProfile"
        component={BottomNavigator}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="RechargeScreen"
        component={RechargeScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Booking"
        component={Booking}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="PhotographerProfile"
        component={PhotographerProfile}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="BookingCreate"
        component={BookingCreate}
      />
    </HomeStack.Navigator>
  );
};

const Navigation = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userToken.accessToken ? <HomeStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
