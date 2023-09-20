import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Restaurant } from "./types";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";

export type RootStackList = {
  Home: undefined;
  Restaurant: { item: Restaurant };
  Cart: undefined;
  PreparingOrder: undefined;
  Delivery: undefined;
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
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
