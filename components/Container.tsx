
import { View, Text, ScrollView } from 'react-native'
import React, { ReactNode } from 'react'

type ContianerProps = {
  children:ReactNode
}

const Container = ({children}:ContianerProps) => {
  return (
    <View className='bg-gray-900 flex-row h-full  p-2'>
      <ScrollView className='flex-1'>
       {children}
       </ScrollView>
    </View>
  )
}

export default Container