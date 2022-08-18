import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "./src/screens/Detail";
import BottomTabNavigator from "./src/navigations/BottomTabs";
import { ViewPropTypes } from "deprecated-react-native-prop-types";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
