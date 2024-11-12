import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'


type TopicChipProps = {
    lable:string;
  }

const TopicChip = ({lable}:TopicChipProps) => {
  return (
    <View className='bg-red-500 p-2 rounded-md'>
      <Text className='text-white font-semibold'>{lable}</Text>
    </View>
  )
}

export default TopicChip