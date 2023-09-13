import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { themeColors } from "../theme";
import { featured } from "../constants";
import OrderTotal from "../components/OrderTotal";
import { RootStackList } from "../Navigation";

const restaurant = featured.restaurants[0];

type CartScreenNavigationProps = NativeStackNavigationProp<
  RootStackList,
  "Cart"
>;

const CartScreen = () => {
  const navigation = useNavigation<CartScreenNavigationProps>();

  return (
    <View className="relative bg-white">
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
        className="max-h-80 px-4"
        showsVerticalScrollIndicator={false}
      >
        {restaurant.dishes.map((item) => (
          <View
            key={item.id}
            className="rounded-xl shadow-xl bg-white p-3 mb-3"
            style={{
              shadowColor: themeColors.bgColor(5),
            }}
          >
            <View className="flex-row items-center">
              <Text
                style={{ color: themeColors.text }}
                className="text-xl font-medium ml-1"
              >
                {/* {count} */} 0
              </Text>

              <Text
                style={{ color: themeColors.text }}
                className="text-base font-medium mt-[1px] ml-1"
              >
                x
              </Text>

              <Image
                source={item.image}
                className="w-16 h-16 rounded-xl shadow ml-2"
              />

              <View className="ml-2 flex-1">
                <Text className="text-xl font-medium">{item.name}</Text>
                <Text className="text-base text-gray-700">
                  {item.description}
                </Text>
              </View>

              <Text className="text-lg font-medium mr-4">$ {item.price}</Text>

              <TouchableOpacity
                // onPress={() => handleDecrease(item)}
                style={{ backgroundColor: themeColors.bgColor(2) }}
                className="p-1 rounded-full"
              >
                <Icon.Minus
                  strokeWidth={2}
                  width={20}
                  height={20}
                  stroke={"white"}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <OrderTotal />
    </View>
  );
};

export default CartScreen;
