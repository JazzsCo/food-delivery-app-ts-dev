import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { themeColors } from "../theme";
import { useAppSelector } from "../hooks";
import { RootStackList } from "../Navigation";
import { selectedCartItemsPrice } from "../slices/cartSlice";

type BasketButtonNavigationProps = NativeStackNavigationProp<
  RootStackList,
  "Restaurant"
>;

const BasketButton = () => {
  const navigation = useNavigation<BasketButtonNavigationProps>();

  const totalPrice = useAppSelector(selectedCartItemsPrice);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart")}
      disabled={!totalPrice}
      style={{ backgroundColor: themeColors.bgColor(2) }}
      className="sticky bottom-3 w-full rounded-full"
    >
      <View className="flex-row justify-around p-4">
        <Icon.ShoppingCart
          className={"text-gray-300"}
          strokeWidth={3}
          width={35}
          height={35}
        />
        <Text className="text-gray-200 text-2xl font-medium">View Cart</Text>
        <Text className="text-gray-200 text-2xl font-medium">
          $ {totalPrice ? totalPrice : "0"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketButton;
