import React from 'react';
import { LoginScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigation';
import { NAV_HEADER_OPTION } from '../utils/constants';
import { useAuth } from '../context/AuthContext';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();


  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={NAV_HEADER_OPTION}
        initialRouteName={isAuthenticated ? 'TabNavigator' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </SafeAreaView>

  );
};

export default AppNavigator;
