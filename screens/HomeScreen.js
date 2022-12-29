import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white ">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
      </View>
      <View className="justify-center items-center ">
        <TextInput
          className="border-red-600 border w-2/3 p-2"
          placeholder="search bar connect google places api "
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;
