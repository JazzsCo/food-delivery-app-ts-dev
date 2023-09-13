import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";

const BasketButton = () => {
  return (
    <TouchableOpacity
      // onPress={() => navigation.navigate("Cart")}
      // disabled={!totalPrice}
      style={{ backgroundColor: themeColors.bgColor(2) }}
      className="sticky bottom-1 w-full rounded-full"
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
          {/* $ {totalPrice ? totalPrice : "0"} */} 0
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketButton;
