import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllProcess from "./process/AllProcess";
import PendingProcess from "./process/PendingProcess";
import AcceptProcess from "./process/AcceptProcess";
import DoneProcess from "./process/DoneProcess";
import CancelProcess from "./process/CancelProcess";
import { COLORS, SIZES } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const BookingManagement = () => {
  const headerTitle = () => {
    return(
      <Text style={{ fontWeight: 'bold', fontSize: SIZES.large }}>Quản lý lịch hẹn</Text>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookingManagement" options={{headerLeft: false, headerTitle: headerTitle}}>
        {() => (
          <Tab.Navigator
          style={{ flex: 1, marginTop: 0 }}
          tabBarPosition="top"
          screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: "white" }, // Chỉnh màu nền của tab bar
            tabBarLabelStyle: {
              fontWeight: "bold",
              fontSize: 14,
              textTransform: "none",
            }, // Chỉnh màu chữ của tab
            tabBarIndicatorStyle: {
              backgroundColor: COLORS.orange50,
              height: 5,
            }, // Chỉnh màu dấu chỉ dẫn hiện tại
            tabBarActiveTintColor: COLORS.orange50,
          })}
        >
          <Tab.Screen
            name="AllProcess"
            component={AllProcess}
            options={{ tabBarLabel: "Tất cả" }}
          />
          <Tab.Screen
            name="PendingProcess"
            component={PendingProcess}
            options={{ tabBarLabel: "Đang chờ" }}
          />
          <Tab.Screen
            name="AcceptProcess"
            component={AcceptProcess}
            options={{ tabBarLabel: "Đã hẹn" }}
          />
          <Tab.Screen
            name="DoneProcess"
            component={DoneProcess}
            options={{ tabBarLabel: "Đã xong" }}
          />
          <Tab.Screen
            name="CancelProcess"
            component={CancelProcess}
            options={{ tabBarLabel: "Đã hủy" }}
          />
        </Tab.Navigator>
        )

        }
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default BookingManagement;

const styles = StyleSheet.create({});
