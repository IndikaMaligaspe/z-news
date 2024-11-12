import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack >
      <Stack.Screen name="[id]" 
      options={{
        headerShown:false,
        headerBackTitleVisible:false,
        headerStyle:{
          backgroundColor: '#47494d',
        },
        headerTintColor: '#47494d',
        headerTitleStyle:{
          color:'#ffffff'
        }
      }}

        
      />
    </Stack>
  )
}

export default _layout