import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../Views/HomeScreen/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {AboutScreen} from '../Views/AboutScreen/AboutScreen';
import {useColorContext} from '../StateManagement/ColorContext/ColorContext';
import {MagnifierScreen} from '../Views/MagnifierScreen/MagnifierScreen';

import {HeartScreen} from '../Views/HeartScreen/HeartScreen';
export const ContentNavigator = () => {
  const Tab = createBottomTabNavigator();
  const palette = useColorContext().state;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'cup' : 'cup-outline'}
              color={palette.main}
              size={size}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Magnifier"
        component={MagnifierScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'card-search' : 'card-search-outline'}
              color={palette.main}
              size={size}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Heart"
        component={HeartScreen}
        options={{
          tabBarIcon: ({size, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'cards-heart' : 'cards-heart-outline'}
              color={palette.main}
              size={size}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'information' : 'information-outline'}
              color={palette.main}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
