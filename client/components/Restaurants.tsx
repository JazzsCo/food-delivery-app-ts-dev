import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Featured } from "../types";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

type RestaurantsProps = {
  featured: Featured;
};

const Restaurants = ({ featured }: RestaurantsProps) => {
  return (
    <View className="mt-2 space-y-5">
      {[featured, featured, featured, featured].map(
        ({ id, title, description, restaurants }, index) => (
          <View key={index}>
            <View className="p-2 flex-row justify-between items-center">
              <View>
                <Text className="font-medium text-lg">{title}</Text>
                <Text className="text-sm text-gray-700">{description}</Text>
              </View>

              <TouchableOpacity>
                <Text
                  style={{ color: themeColors.text }}
                  className="font-semibold"
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>

            <RestaurantCard restaurants={restaurants} />
          </View>
        )
      )}
    </View>
  );
};

export default Restaurants;
