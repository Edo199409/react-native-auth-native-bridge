import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LocationScreen, MessageScreen } from '../screens';
import { StyleSheet } from 'react-native';
import { NAV_HEADER_OPTION, TAB_BAR_HEIGHT } from '../utils/constants';
import { normalizePixel, RH } from '../utils/themes';
import { colors } from '../utils/colors';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                lazy: true,
                tabBarStyle: styles.tabBar,
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: {
                    fontSize: normalizePixel(16),
                },
            })}>

            <Tab.Screen
                name="Message"
                component={MessageScreen}
                options={{
                    ...NAV_HEADER_OPTION,
                    tabBarLabel: 'Message',
                    tabBarIcon: () => null
                }}
            />
            <Tab.Screen
                name="Location"
                component={LocationScreen}
                options={{
                    ...NAV_HEADER_OPTION,
                    tabBarIcon: () => null
                }}

            />
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create({
    tabBar: {
        elevation: 3,
        height: TAB_BAR_HEIGHT,
        paddingVertical: RH(10),
        backgroundColor: colors.white,
    },
})