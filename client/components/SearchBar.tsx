import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

import { themeColors } from "../theme";

const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2">
      <View
        style={{ borderColor: themeColors.text }}
        className="flex-row flex-1 items-center p-2 border rounded-xl"
      >
        <Icon.Search width={20} height={20} stroke={themeColors.text} />
        <TextInput placeholder="Restaurant" className="ml-2 flex-1 text-base" />
        <View
          style={{ borderColor: themeColors.text }}
          className="flex-row items-center space-x-1 border-l-[1px] pl-1"
        >
          <Icon.MapPin width={18} height={18} stroke={themeColors.text} />
          <Text className="text-base text-gray-700">New York, NYC</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderColor: themeColors.text,
        }}
        className="p-3 rounded-xl border"
      >
        <Icon.Sliders width={21} height={21} stroke={themeColors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
