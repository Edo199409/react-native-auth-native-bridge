import React from 'react';
import { LoginScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigation';
import { NAV_HEADER_OPTION } from '../utils/constants';
import { useAuth } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();
  

  return (
    <Stack.Navigator
      screenOptions={NAV_HEADER_OPTION}
      initialRouteName={isAuthenticated ? 'TabNavigator' : 'Login'}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
