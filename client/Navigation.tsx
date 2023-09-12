import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Restaurant } from "./types";

export type RootStackList = {
  Home: undefined;
  Restaurant: { item: Restaurant };
};

const Stack = createNativeStackNavigator<RootStackList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
