import React from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackList } from "../Navigation";

type PreparingOrderScreenNavigationProps = NativeStackNavigationProp<
  RootStackList,
  "PreparingOrder"
>;

const PreparingOrderScreen = () => {
  const navigation = useNavigation<PreparingOrderScreenNavigationProps>();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={require("../assets/images/delivery.gif")}
        className="w-64 h-64"
      />
    </View>
  );
};

export default PreparingOrderScreen;
