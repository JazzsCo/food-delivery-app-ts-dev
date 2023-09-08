import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as React from "react";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-800">
        Open up App.tsx to start working on your app!
      </Text>
      <Text className="text-green-700">Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}
