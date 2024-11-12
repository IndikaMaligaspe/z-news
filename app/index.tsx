
import React from "react";
import { Button, Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import { router } from "expo-router";

const Intro = () => {
    // console.log(faker.image.url())
  
  const handleOnPress = () =>{
    router.push("(tabs)")
  }
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/seed/PKtL9k/826/2959' }}
      resizeMode="cover"
      className="flex-1 flex-col justify-end"
    >
      <View className="flex-col mb-40 gap-4 justify-center items-center">
        <View>
          <Text className="text-white font-bold text-xl">Stay Uodated!</Text>
        </View>
        <View>
          <Text className="w-80 text-white text-md text-center font-semibold">
            Get Breaking news and personalized updates directly to your feed
        </Text>
        </View>
        <View className="flex-row w-full justify-center"> 
           <PrimaryButton 
                title={"Get Started"} 
                onPress={handleOnPress}/>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Intro;
