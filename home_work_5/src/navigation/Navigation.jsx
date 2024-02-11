import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MenuScreen from "../screens/MenuScreen";
import PizzaScreen from "../screens/PizzaScreen";
import CarouselScreen from "../screens/CarouselScreen";


export default function Navigation() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function MenuStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="PizzaMenu" component={MenuScreen} options={{ headerShown: false, title: 'Menu' }} />
        <Stack.Screen name="PizzaScreen" component={PizzaScreen} options={{ title: 'About this Pizza' }} />
        <Stack.Screen name="CarouselScreen" component={CarouselScreen} options={{  headerShown: false, presentation: 'modal' }} />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={MenuStackNavigator} 
        options={{tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={focused ? 'basket' : 'basket-outline'} size={size} color={color}/>
        )}}
      />
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color}/>
        )}}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color}/>
        )}}
      />
    </Tab.Navigator>
  );
}
 