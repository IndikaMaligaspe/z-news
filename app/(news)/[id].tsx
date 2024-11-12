import React, { useEffect, useState } from 'react'
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import Container from '../../components/Container'
import { useLocalSearchParams } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


import {newsSummary} from  "../../store/news.store"

const NewsScreen = () =>{
  const {id} = useLocalSearchParams<{id:string}>()
  const [newsItem, setNewsItem] = useState<NewsSummary>();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisLiked] = useState(false);
  useEffect(()=>{
    if(id){
      setNewsItem( newsSummary.find(ns => ns.id === +id))
    }
  },[id])
  return (
    <SafeAreaView>
      <Container>
        <View className="flex-col gap-2 p-2">
          <View className="flex-wrap">
            <Text className="text-white text-xl font-semibold">{newsItem?.title}</Text>
          </View>
          <View className='flex-row w-full justify-between items-center pr-2'>
            <View className='flex-row  justify-start items-center gap-1'>
              <Feather name="globe" size={16} color="white"/>
              <Text className="text-white text-sm font-normal">{newsItem?.source}</Text>
              <Text className="text-white text-sm font-normal">, {newsItem?.date}</Text>
            </View>
            <View>
              <Text className="text-white text-sm font-normal">{newsItem?.topic}</Text>
            </View>    
          </View>
          <View className="flex-row rounded-lg mt-3">
            <Image
              source={{ uri: newsItem?.image }}
                className="w-full h-44 rounded-lg opacity-90"
                resizeMode="cover"
            />
          </View>
         </View>
         <View className="flex-1 mt-3 mb-3 ml-3 mr-3">
            <View className="flex-row justify-end">
              <View className="flex-row gap-2 align-middle justify-center items-center">
                <Pressable onPress={()=>{disliked?setDisLiked(false):null;setLiked(!liked)}}>
                  <SimpleLineIcons name="like" size={24} color={liked?"white":"#47494d"} />
                </Pressable>
                <Pressable onPress={()=>{liked?setLiked(false):null;setDisLiked(!disliked)}}>
                  <SimpleLineIcons name="dislike" size={24} color={disliked?"white":"#47494d"} />
                </Pressable>
              </View>
           </View>   
            
         </View>
         <View className="flex-1 mt-3 mb-3 ml-3 mr-3">
          <Text className='text-white text-sm font-normal'>{newsItem?.description}</Text>
         </View>
          
      </Container>
        
    </SafeAreaView>
  )
}

export default NewsScreen
