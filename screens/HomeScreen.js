import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white ">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />

        <GooglePlacesAutocomplete
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 18 },
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
          query={{ key: GOOGLE_MAPS_API_KEY }}
          minLength={2}
          enablePoweredByContainer={false}
        />
      </View>
      {/* <View className="justify-center items-center ">
        <TextInput
          className="border-red-600 border w-2/3 p-2"
          placeholder="search bar connect google places api "
        />
      </View> */}
      <NavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;
