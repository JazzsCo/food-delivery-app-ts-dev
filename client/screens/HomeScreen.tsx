import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import { categories, featured } from "../constants";
import Restaurants from "../components/Restaurants";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View className="mx-4 mt-2 space-y-1">
        <SearchBar />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 5,
            paddingBottom: 110,
          }}
        >
          <Categories categories={categories} />
          <Restaurants featured={featured} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
