import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalcScreen from './calcscreen';
import HistoryScreen from './historyscreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculator" component={CalcScreen} />
        <Tab.Screen name="Historypage" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}