import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./components/navigation/Navigation";
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
  return (
    <AuthProvider>
    
        <Navigation />
      
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
