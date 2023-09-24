import React from "react";
import * as Icon from "react-native-feather";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { themeColors } from "../theme";
import { RootStackList } from "../Navigation";
import { useAppSelector } from "../hooks";
import { selectedRestaurant } from "../slices/restaurantSlice";

type DeliveryScreenNavigationProps = NativeStackNavigationProp<RootStackList>;

const DeliveryScreen = () => {
  const restaurant = useAppSelector(selectedRestaurant)[0];

  const navigation = useNavigation<DeliveryScreenNavigationProps>();

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1" // This is main point
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(3)}
        />
      </MapView>

      <View className="rounded-t-3xl -mt-12 p-5 bg-white border-t-gray-900">
        <View className="flex-row justify-between pt-4 px-2">
          <View>
            <Text
              style={{ color: themeColors.text }}
              className="text-lg text-gray-700 font-bold"
            >
              Estimated Arrival
            </Text>

            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>

            <Text
              style={{ color: themeColors.text }}
              className="mt-1 text-gray-700 font-bold"
            >
              Your Order is own its way
            </Text>
          </View>

          <Image
            className="h-28 w-28"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full mt-3 -mb-2"
        >
          <View
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            className="p-1 rounded-full"
          >
            <Image
              style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
              className="w-16 h-16 rounded-full"
              source={require("../assets/images/deliveryGuy.jpg")}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Jazzs Co</Text>
            <Text className="text-white font-semibold">Your Rider</Text>
          </View>

          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth="1"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              className="bg-white p-2 rounded-full"
            >
              <Icon.X stroke={"red"} strokeWidth="5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
