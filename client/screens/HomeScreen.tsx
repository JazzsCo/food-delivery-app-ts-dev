import { View, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View className="mx-4 mt-2 space-y-3">
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
