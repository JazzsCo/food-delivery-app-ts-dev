import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageProps,
  ImageBackground,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { themeColors } from "../theme";
import { RootStackParamsList } from "../Navigation";

type RestaurantScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamsList,
  "Restaurant"
>;

type RestaurantScreenRouteProps = RouteProp<RootStackParamsList, "Restaurant">;

const RestaurantScreen = () => {
  const navigation = useNavigation<RestaurantScreenNavigationProps>();
  const {
    params: { item },
  } = useRoute<RestaurantScreenRouteProps>();

  return (
    <SafeAreaView>
      <View className="relative">
        <ImageBackground source={item.image} className="w-full h-[75%]" />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(2) }}
          className="absolute p-1 rounded-full shadow top-2 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <View className="absolute top-2/4 w-full h-full pt-6 px-3 bg-slate-100 rounded-t-3xl">
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
          <Text className="text-2xl font-medium mt-3 mb-1">Menus</Text>
          <View className="mx-1">
            <ScrollView
              showsVerticalScrollIndicator={false}
              className="overflow-y-visible py-1"
              contentContainerStyle={{
                paddingBottom: 65,
              }}
            >
              {/* {item.dishes.map((item, index) => (
                <Menu key={index} {...item} />
              ))} */}
            </ScrollView>
          </View>
        </View>
        {/* <BasketButton /> */}
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
