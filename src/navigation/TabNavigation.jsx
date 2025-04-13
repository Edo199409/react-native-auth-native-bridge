import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LocationScreen, LoginScreen, MessageScreen } from '../screens';
import { StyleSheet } from 'react-native';
import { NAV_HEADER_OPTION, TAB_BAR_HEIGHT } from '../utils/constants';
import { RH } from '../utils/themes';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                lazy: true,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: {
                    fontSize: 14,
                },
            })}>

            <Tab.Screen name="Message" component={MessageScreen} options={NAV_HEADER_OPTION} />
            <Tab.Screen name="Location" component={LocationScreen} options={NAV_HEADER_OPTION} />
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create({
    tabBar: {
        elevation: 3,
        height: TAB_BAR_HEIGHT,
        paddingVertical: RH(10),
        backgroundColor: 'white',
    },
})