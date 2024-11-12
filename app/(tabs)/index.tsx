import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Container from "../../components/Container";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

import FeedCard from "../../components/FeedCard";
import TopicChip from "../../components/TopicChip";
import TrendingCard from "../../components/TrendingCard";

import {newsSummary} from  "../../store/news.store"


// function categories (){
//   let ret = []
//   for(let i =0;i<5;i++){
//       ret.push(faker.book.genre())
//   }
//   return ret;
// }



export default function home() {


  return (
    
      <Container>
        <View className="mb-3">
          <FlatList
            className="w-full gap-1"
            data={newsSummary}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            renderItem={(d) => {
              return <FeedCard item={d.item} />;
            }}
          />
        </View>
        <View className="mb">
           
        </View>
        <View className="mt-3 mb-3 flex-row justify-between mr-3 ml-3">
          <Text className="text-white text-lg font-semibold">Trending</Text>
          <View className="text-lg">
            <AntDesign name="downcircle" size={24} color={"white"} />
          </View>
        </View>
        <View className="mb-3">
          <FlatList
            className="w-full h-full flex-1 gap-2 ml-1 mr-1 rounded-md"
            data={newsSummary}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            renderItem={(d) => {
              return (
                <TrendingCard 
                  item={d.item}
                />
              );
            }}
          />
        </View>
      </Container>
  );
}
