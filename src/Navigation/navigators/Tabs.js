import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { McVectorIcon, McTabIcon, McText } from 'Components';
import { Images, Colors } from 'Constants';

import { Discover, Explore, Standings, More } from 'Screens';

const Tab = createBottomTabNavigator();

const Tabs = ({ params }) => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style:{
          backgroundColor: Colors.tabBackground
        }
      }}
    >
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <McText medium size={10} color={focused?Colors.white:Colors.grey0}>
              Discover
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.Discover}
              color={focused?Colors.primary:Colors.grey0}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <McText medium size={10} color={focused?Colors.white:Colors.grey0}>
              Explore
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.Explore}
              color={focused?Colors.primary:Colors.grey0}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Standings"
        component={Standings}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <McText medium size={10} color={focused?Colors.white:Colors.grey0}>
              Standings
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.Standings}
              color={focused?Colors.primary:Colors.grey0}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <McText medium size={10} color={focused?Colors.white:Colors.grey0}>
              More
            </McText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <McTabIcon
              icon={Images.More}
              color={focused?Colors.primary:Colors.grey0}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
