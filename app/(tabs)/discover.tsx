import React from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/Container'

export default function notifications() {
  return (
    <Container>
      <View className="flex-col gap-2">
        <View>
          <Text className="text-white">Search Input</Text>
        </View>
        <View>
          <Text className="text-white">Categories</Text>
        </View>
        <View>
          <Text className="text-white">Country</Text>
        </View>
        <View>
          <Text className="text-white">Search Button</Text>
        </View>
      </View>
    </Container>
  )
}
