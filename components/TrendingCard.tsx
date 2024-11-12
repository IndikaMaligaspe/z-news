import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import TopicChip from "./TopicChip";
import { useNavigation, useRouter } from "expo-router";


type TrendingCardProps = {
  item: NewsSummary;
};

function TrendingCard({ item }: TrendingCardProps) {
  const router = useRouter()

  console.log({itemid: item.id})
  return (
    <TouchableOpacity onPress={() => router.push({
      pathname:"(news)/[id]", 
      params:{id:item?.id}}
      )} className="p-2">
      <View className="flex-row gap-1 bg-gray-800 rounded-lg">
        <View>
          <Image
            source={{ uri: item.image }}
            className="w-32 h-32 rounded-b-lg opacity-90"
            resizeMode="cover"
          />
        </View>
        <View className="flex-col justify-center align-middle gap-2">
          <View className="flex-wrap">
            <TopicChip lable={item.topic} />
          </View>
          <View className="flex-1  p-1">
            <Text className="text-white font-bold text-sm overflow-y-clip w-40 ">{item.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default TrendingCard;
