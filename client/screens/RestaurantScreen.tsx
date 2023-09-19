import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { themeColors } from "../theme";
import { RootStackList } from "../Navigation";
import MenuItem from "../components/MenuItem";
import BasketButton from "../components/BasketButton";

type RestaurantScreenNavigationProps = NativeStackNavigationProp<
  RootStackList,
  "Restaurant"
>;

type RestaurantScreenRouteProps = RouteProp<RootStackList, "Restaurant">;

const RestaurantScreen = () => {
  const navigation = useNavigation<RestaurantScreenNavigationProps>();

  const {
    params: { item },
  } = useRoute<RestaurantScreenRouteProps>();

  return (
    <View className="flex-1 relative">
      <Image source={item.image} className="w-full h-[45%]" />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: themeColors.bgColor(2) }}
        className="absolute p-1 rounded-full shadow top-2 left-2"
      >
        <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
      </TouchableOpacity>

      <View className="rounded-t-3xl -mt-36 px-3 pt-4 bg-white flex-1">
        <Text className="text-2xl font-medium">{item.name}</Text>

        <View className="mt-2 flex-row items-center space-x-1">
          <Image
            source={require("../assets/images/fullStar.png")}
            className="h-4 w-4"
          />

          <Text className="text-base text-green-700">{item.stars}</Text>
          <Text className="text-base text-gray-700">
            {" "}
            {item.reviews} review
          </Text>

          <View className="flex-row items-center">
            <Icon.MapPin color="black" width={15} height={15} />

            <Text className="text-base text-gray-700">
              {" "}
              Nearby · {item.address}
            </Text>
          </View>
        </View>

        <Text className="text-2xl font-medium mt-2">Menus</Text>

        <ScrollView
          className="p-1"
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}
        >
          {item.dishes.map(({ id, name, image, price, description }) => (
            <MenuItem
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              description={description}
            />
          ))}
        </ScrollView>
      </View>

      <View className="mx-4 bg-white">
        <BasketButton />
      </View>
    </View>
  );
};

export default RestaurantScreen;
