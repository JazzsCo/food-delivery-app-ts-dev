import React from "react";
import * as Icon from "react-native-feather";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Dish } from "../types";
import { themeColors } from "../theme";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectedCartItemsById } from "../slices/cartSlice";

const MenuItem = ({ id, name, image, price, description }: Dish) => {
  const dispatch = useAppDispatch();

  // const cartItemsById = useAppSelector((state) =>
  //   selectedCartItemsById(state,{id: pa})
  // );

  return (
    <View
      className="rounded-xl shadow-xl bg-white p-3 mb-3"
      style={{
        shadowColor: themeColors.bgColor(5),
      }}
    >
      <View className="flex-row items-center">
        <Image source={image} className="w-16 h-16 rounded-xl shadow ml-2" />

        <View className="ml-2 flex-1">
          <Text className="text-xl font-medium">{name}</Text>
          <Text className="text-gray-700">{description}</Text>
          <Text className="text-gray-950 mt-1">$ {price}</Text>
        </View>

        <View className="flex-row space-x-2 mt-1">
          <TouchableOpacity
            //   onPress={() => handleDecrease()}
            //   disabled={!cartItemsById.length}
            style={{ backgroundColor: themeColors.bgColor(2) }}
            className="p-1 rounded-full shadow"
          >
            <Icon.Minus
              strokeWidth={2}
              width={20}
              height={20}
              stroke={"white"}
            />
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
            <Icon.Plus
              strokeWidth={2}
              width={20}
              height={20}
              stroke={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MenuItem;
