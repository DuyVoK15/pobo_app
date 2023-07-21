import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./components/navigation/Navigation";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
// import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SwiperOnboarding from "./components/onboarding/SwiperOnboarding";
// import WelcomeScreen from "./components/signing/WelcomeScreen";
// import SuccessSignupScreen from "./components/signing/SuccessSignupScreen";
// import SigninModal from "./components/signing/SigninModal";
// import SignupModal from "./components/signing/SignupModal";
// import HomeScreen from "./components/home/HomeScreen";
// import SendOTP from "./components/forgeting/SendOTP";
// import VerifyOTP from "./components/forgeting/VerifyOTP";
// import NewPassword from "./components/forgeting/NewPassword";
// import SuccessPassword from "./components/forgeting/SuccessPassword";
// import UserProfile from "./components/profile/UserProfile";
// import SettingsAccountPersonal from "./components/profile/SettingsAccountPersonal";
// import BottomNavigator from "./components/navigation/bottomTabNavigator";
// const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    loadFonts();
  },[])
   // Font Family
   const [fontsLoaded, setFontsLoaded] = useState(false);
   const loadFonts = async () => {
     await Promise.all([
       Font.loadAsync({
         'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.ttf'),
         'SVN-Gilroy-XBold': require('./assets/fonts/SVN-Gilroy-XBold.ttf'),
         'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.ttf'),
         'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.ttf'),
         'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.ttf'),
       }),
     ]);
     setFontsLoaded(true);
   };
 
   const onLayoutRootView = useCallback(async () => {
     if (fontsLoaded) {
       //   await SplashScreen.hideAsync();
     }
   }, [fontsLoaded]);
 
   if (!fontsLoaded) {
     return null;
   }

  return (
    <AuthProvider onLayout={onLayoutRootView}>
    
        <Navigation />
      
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
