import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../home/HomeScreen";
import { COLORS, ROUTES } from "../constants";
// import { MaterialIcons } from "@expo/vector-icons";
import { Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { Icon } from "react-native-vector-icons/Icon";
// import Icon from 'react-native-ionicons'
// import Icon from 'react-native-vector-icons/MaterialIcons'
// import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import UserProfile from "../profile/UserProfile";
import BookingManagement from "../booking/BookingManagement";
import Map from "../map/Map";
import MapFake from "../map/MapFake";
import Chat from "../chat/Chat";

export default function BottomNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "white",
          height: Platform.OS === "ios" ? 90 : 60,
          borderTopLeftRadius: 33,
          borderTopRightRadius: 33,
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: -4 },
          shadowRadius: 6,
          elevation: 3,
        },
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconColor;
          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "BookingManagement") {
            iconName = focused ? "reader" : "reader-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "UserProfile") {
            iconName = focused ? "person" : "person-outline";
          }
          iconColor = focused ? COLORS.orange50 : "gray";

          return <Ionicons name={iconName} size={20} color={iconColor} />;
        },
        tabBarLabelStyle: {
          // Chỉnh màu chữ khi tab được focus và không focus
          color: ({ focused }) => (focused ? COLORS.orange50 : "gray"),
        },
      })}
      // tabBarOptions={{
      //     showLabel: false,
      //     style: {
      //       // borderTopLeftRadius: 40,
      //       // borderTopRightRadius: 40,
      //     },
      //   }}
    >
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={HomeScreen}
        options={{ tabBarLabel: "Trang chủ" }}
      />
      <Tab.Screen
        name="Map"
        component={MapFake}
        options={{ tabBarLabel: "Bản đồ" }}
      />
      <Tab.Screen
        name="BookingManagement"
        component={BookingManagement}
        options={{ tabBarLabel: "Quản lý" }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ tabBarLabel: "Nhắn tin" }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ tabBarLabel: "Thông tin" }}
      />
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
