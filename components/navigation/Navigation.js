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
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={BottomNavigator}
      />

      <HomeStack.Screen
        options={{ headerShown: false }}
        name="SettingsAccountPersonal"
        component={SettingsAccountPersonal}
      />

      <HomeStack.Screen
        options={{ headerShown: false }}
        name="UserProfile"
        component={BottomNavigator}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Booking"
        component={Booking}
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
