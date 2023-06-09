import React  from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../home/HomeScreen'
import {COLORS, ROUTES} from '../constants'
// import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { Icon } from "react-native-vector-icons/Icon";
// import Icon from 'react-native-ionicons'
// import Icon from 'react-native-vector-icons/MaterialIcons'
// import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import UserProfile from "../profile/UserProfile";
import BookingManagement from "../booking/BookingManagement";

export default function BottomNavigator() {
    
  const Tab = createBottomTabNavigator();
  return (
    // <NavigationContainer>
    <Tab.Navigator
        screenOptions={({route}) => ({
            headerShown : false,
            tabBarIcon: ({color, size, focused})=> {
                let iconName;
                if(route.name === ROUTES.HOME_TAB ){
                    iconName = focused ? 'home' : 'home-outline';
                }
                 else if (route.name === 'Map' ){
                    iconName = focused ? 'map' : 'map-outline';
                }
                else if (route.name === 'BookingManagement' ){
                    iconName = focused ? 'reader' : 'reader-outline';
                }
                else if (route.name === 'Chat' ){
                    iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                }
                else if (route.name === 'UserProfile' ){
                    iconName = focused ? 'person' : 'person-outline';
                }


                return <Ionicons name={iconName} size ={20} color={COLORS.orange50} />
            },
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                },
              }}
            >
      <Tab.Screen name={ROUTES.HOME_TAB} component={HomeScreen} />
      <Tab.Screen name="Map" component={HomeScreen} />
      <Tab.Screen name="BookingManagement" component={BookingManagement} />
      <Tab.Screen name="Chat" component={HomeScreen} />
      <Tab.Screen name="UserProfile" component={UserProfile} />

    </Tab.Navigator>
    // </NavigationContainer>
  );
}
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from '../home/HomeScreen'
// import { ROUTES } from '../constants'
// import { Text } from 'react-native'; // Import the Text component
// import { MaterialIcons } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();

// export default function BottomNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ color, size, focused }) => {
//           let iconName;
//           if (route.name === ROUTES.HOME_TAB) {
//             return focused ? (
//               <Text>home</Text> // Wrap the string with a Text component
//             ) : (
//               <Text>home-outline</Text> // Wrap the string with a Text component
//             );
//           } else if (route.name === 'Map') {
//             return focused ? (
//               <Text>map</Text> // Wrap the string with a Text component
//             ) : (
//               <Text>map-outline</Text> // Wrap the string with a Text component
//             );
//           }
//           else if (route.name === 'Schedule') {
//             return focused ? (
//               <Text>map</Text> // Wrap the string with a Text component
//             ) : (
//               <Text>map-outline</Text> // Wrap the string with a Text component
//             );
//           }
//           else if (route.name === 'Chat') {
//             return focused ? (
//               <Text>map</Text> // Wrap the string with a Text component
//             ) : (
//               <Text>map-outline</Text> // Wrap the string with a Text component
//             );
//           }
//           else if (route.name === 'Info') {
//             return focused ? (
//               <Text>map</Text> // Wrap the string with a Text component
//             ) : (
//               <Text>map-outline</Text> // Wrap the string with a Text component
//             );
//           }
//           // Handle other cases

//           return (
//             <MaterialIcons name={iconName} size={22} color={color} />
//           );
//         },
//       })}
//     >
//       <Tab.Screen name={ROUTES.HOME_TAB} component={HomeScreen} />
//       <Tab.Screen name="Map" component={HomeScreen} />
//       <Tab.Screen name="Schedule" component={HomeScreen} />
//       <Tab.Screen name="Chat" component={HomeScreen} />
//       <Tab.Screen name="Info" component={HomeScreen} />
//     </Tab.Navigator>
//   );
// }