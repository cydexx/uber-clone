import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView>
      <TouchableOpacity className="z-50" onPress={() => navigation.goBack()}>
        <View className=" absolute w-14 h-14 bg-gray-800 rounded-full items-center justify-center">
          <Text className="text-white">back</Text>
        </View>
      </TouchableOpacity>

      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2 bg-red-400">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false, animation: "fade" }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false, animation: "fade" }}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
