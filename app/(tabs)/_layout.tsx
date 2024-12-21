import { View, Text, Platform } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const _layout = () => {
    const colorScheme = useColorScheme();

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
            tabBarButton: HapticTab,
            tabBarBackground: TabBarBackground,
            tabBarStyle: Platform.select({
                ios: {
                    position: 'absolute',
                },
                default: {},
            }),
        }}>
            <Tabs.Screen 
                name="maps"
                options={{
                    title: 'Maps',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="map" color={color} />
                }}
            />
            <Tabs.Screen 
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="gear" color={color} />
                }}
            />
        </Tabs>
    );
};

export default _layout;