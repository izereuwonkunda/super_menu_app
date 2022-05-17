import React from "react";
import { Feather, AntDesign } from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import Index from "../screens/Index";
import Checkout from "../screens/Checkout";
import PaySuccess from "../screens/PaySuccess";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Cart = () =>{
  return (
    <Stack.Navigator initialRouteName="Checkout">
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="paySuccess"
        component={PaySuccess}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigation = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#F7941D",
        tabBarInactiveTintColor: "#000000",
        tabBarStyle: {
          borderTopWidth: 0,
          shadowColor: "red",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          padding: 10,
          width: "100%",
          height: 84,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Checkout}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={Checkout}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-notifications-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Checkout}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card-scan-outline"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Timer"
        component={Checkout}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="back-in-time" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
