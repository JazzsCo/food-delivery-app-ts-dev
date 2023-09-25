import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { themeColors } from "../theme";
import { Category } from "../types";

type CategoriesProps = {
  categories: Category[];
};

const Categories = ({ categories }: CategoriesProps) => {
  const [activeColor, setActiveColor] = React.useState<Number>();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
    >
      {categories.map(({ id, name, image }) => (
        <View key={id} className={"flex items-center justify-center"}>
          <TouchableOpacity
            onPress={() => setActiveColor(id)}
            style={{
              borderColor: themeColors.text,
              backgroundColor:
                id === activeColor ? themeColors.bgColor(0.3) : "gray",
            }}
            className={"rounded-full border shadow-xl p-1"}
          >
            <Image style={{ width: 45, height: 45 }} source={image} />
          </TouchableOpacity>

          <Text
            style={{ fontWeight: id === activeColor ? "500" : "normal" }}
            className={"text-gray-700 text-sm"}
          >
            {name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
