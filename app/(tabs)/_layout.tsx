import { Tabs } from "expo-router";
import {FontAwesome} from "@expo/vector-icons"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const TabsLayout = () => {
  return (
    <Tabs
    sceneContainerStyle={{ backgroundColor:'#ffffff'}}
    screenOptions={{
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor:'#00ffff',
        tabBarStyle: {
            backgroundColor: '#47494d',
            borderTopWidth: 0,
            borderTopColor: '#232533',
            height: 84,
          },
          headerStyle:{
            backgroundColor: '#47494d',
          },
          headerTitleStyle:{
            color:'#ffffff'
          }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Feeds",
          title: "Feeds",
          tabBarIcon: ({ focused, color }) => <FontAwesome size={28} name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          headerTitle: "Discover",
          title: "Discover",
          tabBarIcon: ({ focused, color }) => <MaterialIcons name="gps-fixed" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerTitle: "Favorites",
          title: "Favorites",
          tabBarIcon: ({ focused,color }) => <FontAwesome size={28} name="heart" color={color} />
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          title: "Profile",
          tabBarIcon: ({ focused, color }) => <FontAwesome size={28} name="user" color={color} />
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
