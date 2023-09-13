import React from "react";
import * as Icon from "react-native-feather";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Dish } from "../types";
import { themeColors } from "../theme";

const MenuItem = ({ name, image, price, description }: Dish) => {
  return (
    <View
      style={{
        shadowColor: themeColors.bgColor(5),
      }}
      className="flex-row w-full p-3 rounded-xl shadow-2xl mb-3 bg-white"
    >
      <Image source={image} className="w-24 h-24 rounded-xl shadow" />

      <View className="ml-3 flex-1 space-y-1">
        <Text className="text-xl font-medium">{name}</Text>
        <Text className="text-base text-gray-700">{description}</Text>

        <View className="flex-row justify-between">
          <Text className="text-lg font-medium">$ {price}</Text>

          <View className="flex-row space-x-2 mt-1">
            <TouchableOpacity
              //   onPress={() => handleDecrease()}
              //   disabled={!cartItemsById.length}
              style={{ backgroundColor: themeColors.bgColor(2) }}
              className="p-1 rounded-full shadow"
            >
              <Icon.Minus strokeWidth={2} stroke={"white"} />
            </TouchableOpacity>

            <Text
              style={{ color: themeColors.text }}
              className="text-lg font-medium"
            >
              0{/* {cartItemsById.length} */}
            </Text>

            <TouchableOpacity
              //   onPress={() => hendleIncrease()}
              style={{ backgroundColor: themeColors.bgColor(2) }}
              className="p-1 rounded-full shadow"
            >
              <Icon.Plus strokeWidth={2} stroke={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuItem;
