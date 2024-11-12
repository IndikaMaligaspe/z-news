import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import classNames from 'classnames'

type PrimaryButtonProps = {
    title:string;
    onPress:()=>void
}

const PrimaryButton = ({title, onPress}:PrimaryButtonProps) => {
  return (
    <View className='w-80 h-10 rounded-lg bg-yellow-500 font-semibold text-lg'>
        <TouchableOpacity onPress={()=>onPress()}>
            <Text className="content-center text-center 
                    text-lg text-white font-semibold p-1">{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PrimaryButton