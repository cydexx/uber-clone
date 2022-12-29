import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className=" absolute w-14 h-14 bg-gray-800 rounded-full items-center justify-center">
          <Text className="text-white">back</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MapScreen;
