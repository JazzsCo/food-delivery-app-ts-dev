import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { themeColors } from "../theme";
import { featured } from "../constants";
import { RootStackList } from "../Navigation";
import MenuItem from "../components/MenuItem";
import OrderTotal from "../components/OrderTotal";

const restaurant = featured.restaurants[0];

type CartScreenNavigationProps = NativeStackNavigationProp<
  RootStackList,
  "Cart"
>;

const CartScreen = () => {
  const navigation = useNavigation<CartScreenNavigationProps>();

  return (
    <View className="flex-1 relative bg-white">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: themeColors.bgColor(2) }}
        className="absolute p-1 rounded-full shadow top-2 left-2"
      >
        <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
      </TouchableOpacity>

      <View className="flex items-center">
        <Text
          style={{ color: themeColors.text }}
          className="text-xl font-medium mt-1"
        >
          {restaurant.name}
        </Text>
        <Text className="text-gray-700 text-base font-medium">
          {restaurant.description}
        </Text>
      </View>

      <Text
        style={{ color: themeColors.text }}
        className="text-2xl font-medium mt-6 px-2"
      >
        Menus
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="px-4"
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {restaurant.dishes.map(({ id, name, image, price, description }) => (
          <MenuItem
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            description={description}
          />
        ))}
      </ScrollView>

      <OrderTotal />
    </View>
  );
};

export default CartScreen;
