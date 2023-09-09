import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageProps,
} from "react-native";
import React from "react";

import { themeColors } from "../theme";

type Category = {
  id: number;
  name: string;
  image: ImageProps;
};

type CategoriesProps = {
  item: Category[];
};

const Categories = ({ item }: CategoriesProps) => {
  const [activeColor, setActiveColor] = React.useState<Number>();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-4"
    >
      {item.map(({ id, name, image }) => (
        <View key={id} className={"flex items-center justify-center"}>
          <TouchableOpacity
            onPress={() => setActiveColor(id)}
            style={{
              borderColor: themeColors.text,
              backgroundColor:
                id === activeColor ? themeColors.bgColor(0.3) : "white",
            }}
            className={"rounded-full border shadow-xl p-1 shadow-yellow-400"}
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
