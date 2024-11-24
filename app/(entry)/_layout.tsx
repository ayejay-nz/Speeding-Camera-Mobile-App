import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const EntryLayout = () => {
    const [loaded] = useFonts({
       Roboto: require('../../assets/fonts/Roboto-Regular.ttf'), 
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="login" />
                <Stack.Screen name="register" />
                <Stack.Screen name="forgotpassword" />
            </Stack>
        </>
    );
};

export default EntryLayout;