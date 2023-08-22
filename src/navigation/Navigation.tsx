import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SCREEN} from './Screens';
import ExpeditionDetailScreen from '../screens/ExpeditionDetailScreen';
import ExpeditionListScreen from '../screens/ExpeditionListScreen';
import LoginScreen from '../screens/LoginScreen';
import PaymentScreen from '../screens/PaymentScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SearchTicketScreen from '../screens/SearchTicketScreen';

const Navigation = () => {
  const Stack = createStackNavigator();

  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN.Register} component={RegisterScreen} />
        <Stack.Screen name={SCREEN.Login} component={LoginScreen} />
        <Stack.Screen
          name={SCREEN.SearchTicket}
          component={SearchTicketScreen}
        />
        <Stack.Screen
          name={SCREEN.ExpeditionList}
          component={ExpeditionListScreen}
        />
        <Stack.Screen
          name={SCREEN.ExpeditionDetail}
          component={ExpeditionDetailScreen}
        />
        <Stack.Screen name={SCREEN.Payment} component={PaymentScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
