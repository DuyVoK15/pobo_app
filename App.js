import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import intro_1 from './components/onboarding/intro_1';
import intro_2 from './components/onboarding/intro_2';
import intro_3 from './components/onboarding/intro_3';
import WelcomeScreen from './components/sign/WelcomeScreen';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
       
      <WelcomeScreen />
   
    </GestureHandlerRootView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
