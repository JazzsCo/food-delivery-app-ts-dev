import { View, StatusBar, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import { categories } from "../constants";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View className="mx-4 mt-2 space-y-3">
        <SearchBar />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        >
          <Categories item={categories} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
