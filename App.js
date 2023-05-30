import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwiperOnboarding from "./components/onboarding/SwiperOnboarding";
import WelcomeScreen from "./components/signing/WelcomeScreen";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SuccessSignupScreen from "./components/signing/SuccessSignupScreen";
import SigninModal from "./components/signing/SigninModal";
import SignupModal from "./components/signing/SignupModal";
import HomeScreen from "./components/home/HomeScreen";
import SendOTP from "./components/forgeting/SendOTP";
import VerifyOTP from "./components/forgeting/VerifyOTP";
import NewPassword from "./components/forgeting/NewPassword";
import SuccessPassword from "./components/forgeting/SuccessPassword";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SwiperOnboarding">
          <Stack.Screen
            options={{ headerShown: false }}
            name="SwiperOnboarding"
            component={SwiperOnboarding}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SuccessSignupScreen"
            component={SuccessSignupScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen name="SendOTP" component={SendOTP} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
    // <GestureHandlerRootView style={styles.container}>
    //   {/* <SendOTP /> */}
    //   {/* <VerifyOTP /> */}
    //   {/* <NewPassword /> */}
    //   {/* <SuccessPassword /> */}
    // </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
