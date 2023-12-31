import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { themeColors } from "../theme";
import { RootStackList } from "../Navigation";
import { useAppSelector } from "../hooks";
import { selectedCartItemsPrice } from "../slices/cartSlice";

type OrderTotalNavigationProps = NativeStackNavigationProp<
  RootStackList,
  "Cart"
>;

const OrderTotal = () => {
  const navigation = useNavigation<OrderTotalNavigationProps>();

  const menuFee = useAppSelector(selectedCartItemsPrice);
  const deliveryFee = 20;
  const orderTotal = menuFee + deliveryFee;

  return (
    <View
      style={{ backgroundColor: themeColors.bgColor(0.7) }}
      className="sticky -bottom-1 rounded-t-3xl py-6 px-8 space-y-4"
    >
      <View className="flex-row">
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-24 h-24 rounded-full"
        />

        <View className="flex justify-center items-start ml-5 mt-2">
          <Text className="text-lg font-medium text-gray-800">
            Deliver in 20-30 minutes
          </Text>

          <TouchableOpacity>
            <Text
              style={{ color: themeColors.text }}
              className="font-medium text-lg"
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-800 font-medium text-base">Menu Fee</Text>
        <Text className="text-gray-800 font-medium text-base">$ {menuFee}</Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-800 font-medium text-base">
          Delivery Fee
        </Text>
        <Text className="text-gray-800 font-medium text-base">
          $ {deliveryFee}
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="font-extrabold text-lg">Order Total</Text>
        <Text className="font-extrabold text-base">$ {orderTotal}</Text>
      </View>

      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(2) }}
        onPress={() => navigation.navigate("PreparingOrder")}
        className="p-4 rounded-full"
      >
        <Text className="text-white text-center font-bold text-lg">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderTotal;
