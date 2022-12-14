import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

import Setting from "../screens/Setting";
import Files from "../screens/Files";
import Icon from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#000119",
        inactiveTintColor: "#dfdfdf",
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#FFF",
          elevation: 2
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-compass" color={color} size={35} />
          )
        }}
      />

      <Tab.Screen
        name="Files"
        component={Files}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-document" color={color} size={35} />
          ),
          tabBarBadge: 3
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-settings" color={color} size={35} />
          )
        }}
      />
    </Tab.Navigator>
  );
};


export default BottomTabNavigator;
