import { Stack } from 'expo-router'

 const _layout = () =>{
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown:false
      }}/>
      <Stack.Screen name="(tabs)" options={{
        headerShown:false,
        headerBackTitleVisible:false
      }}/>
      <Stack.Screen name="(news)" options={{
        headerBackTitle:"Feeds",
        headerTitle:"News",
        headerShown:true,
        headerStyle:{
          backgroundColor: '#47494d',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle:{
          color:'#ffffff',
          fontWeight:'semibold'
        }
      }}/>
    </Stack>
  )
}
export default _layout