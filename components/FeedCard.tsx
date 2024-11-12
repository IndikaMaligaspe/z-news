import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import TopicChip from "./TopicChip";

type FeedCardProps = {
  item: NewsSummary;
};

const FeedCard = ({ item }: FeedCardProps) => {
  return (
    <View className="flex-col p-1 ">
      <TouchableOpacity onPress={() => console.log(item.id)}>
        <Image
          source={{ uri: item.image }}
          className="w-screen h-52 rounded-b-lg opacity-90"
          resizeMode="cover"
        />
        <View className="absolute top-14 left-10 flex-col justify-end align-bottom gap-2">
          <View className="flex-wrap">
            <TopicChip lable={item.topic} />
          </View>
          <View className="flex-1 w-full flex-grow p-1">
            <Text className="text-white font-bold text-sm">{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FeedCard;
