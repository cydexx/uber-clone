import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 ">
      <View>
        <Image
          className="object-fill w-36 h-20 "
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
      </View>

      <Text className="text-red-700">super damn cool homescreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
