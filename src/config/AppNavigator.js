import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

import MonsterScreen from '../screens/MonsterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Detail from '../screens/Detail';
import SearchList from '../screens/SearchListScreen';
import EquipmentScreen from '../screens/EquipmentScreen';
import DetailEquipment from '../screens/DetailEquipment';
import MyEquipmentScreen from '../screens/MyEquipmentScreen';

// import EquipmentScreen from '../screens/EquipmentScreen';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='StackNavigator' component={MonsterStackNavigator} options={{ headerShown: false, tabBarLabel: 'Monsters', tabBarIcon: ({ color, size }) => (<Ionicons name='bug-outline' color={color} size={size} />)}} />
      <Tab.Screen name='Equipment' component={EquipmentStackNavigator} options={{ headerShown: false, tabBarLabel: 'Equipment', tabBarIcon: ({ color, size }) => (<Ionicons name='eyedrop' color={color} size={size} />)}} />
      <Tab.Screen name='Settings' component={SettingsScreen} options={{ headerShown: true, tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => (<Ionicons name='settings-outline' color={color} size={size} />)}} />
         </Tab.Navigator>
  );
}
const MonsterStack = createNativeStackNavigator();

function MonsterStackNavigator() {
  return (
   
      <MonsterStack.Navigator>
         
          <MonsterStack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
          <MonsterStack.Screen name='MonsterScreen' component={MonsterScreen}  />
          <MonsterStack.Screen name='SearchListScreen' component={SearchList} options={{ headerShown: true , title:'Search for Monsters'}} />
          <MonsterStack.Screen name='Detail' component={Detail} options={({ route }) => ({ title: `${route.params.monster.name} ` })}/>
          <MonsterStack.Screen name='Settings' component={SettingsScreen} options={({ route }) => ({ title: `Monsters: Settings ` })} />
      </MonsterStack.Navigator>
  
  );
}

export default MonsterStackNavigator;

const EquipmentStack = createNativeStackNavigator();

export function EquipmentStackNavigator() {
  return (
   
      <EquipmentStack.Navigator>
         
         
          <EquipmentStack.Screen name='EquipmentScreen' component={EquipmentScreen} options={{ headerShown: true , title:'Search for Equipment'}} />
          <EquipmentStack.Screen name='DetailEquipment' component={DetailEquipment} options={({ route }) => ({ title: `Equipment: ${route.params.equipment.name} ` })}/>
          <MonsterStack.Screen name='MyEquipmentScreen' component={MyEquipmentScreen}  options={({ route }) => ({ title: `My Equipment ` })}/>
      </EquipmentStack.Navigator>
  
  );
}




const RootStack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Tabs' component={TabNavigator} options={{ headerShown: false }} />    
      </RootStack.Navigator>
    </NavigationContainer>
  )
} 
