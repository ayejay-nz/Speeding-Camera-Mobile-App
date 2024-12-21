import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const SECTIONS = [
    {
        header: 'General Settings',
        icon: '',
        items: [
            {
                id: '',
                label: 'Automatically Launch With Bluetooth',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Automatically Turn off When Inacative',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Visual Alerts in Background',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Full Screen Widget',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Background Permissions',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'App Language',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Screen Mode',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Usual Vehicle',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Update Information',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Automatic Updates',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'High Precision GPS',
                description: '',
                icon: '',
                type: '',
            },
        ]
    },
    {
        header: 'Warning Settings',
        icon: '',
        items: [
            {
                id: '',
                label: 'Vocal Warnings',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Sound Warnings',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Vibration Warnings',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Silence When Calling',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Warning For Loss of GPS Signal',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Vocal Guidance',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Warning When Reaching a Traffic Jam',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Audio Alert When Exceeding Speed Limit',
                description: '',
                icon: '',
                type: '',
            },
        ]
    },
    {
        header: 'Notifications',
        icon: '',
        items: [
            {
                id: '',
                label: 'All Notifications',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Promotions',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Camera Updates',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'News and Events',
                description: '',
                icon: '',
                type: '',
            },
        ]
    },
    {
        header: 'Appearance',
        icon: '',
        items: [
            {
                id: '',
                label: 'Vehicle Icon',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Dark Mode',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: '3D Buildings',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Places of Interest',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Traffic',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Satellite Mode',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Display Road Name',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: 'Display Road Incidents',
                description: '',
                icon: '',
                type: '',
            },
        ]
    },
    {
        header: 'Privacy & Security',
        icon: '',
        items: [
            {
                id: '',
                label: 'Reset Password',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: '',
                description: '',
                icon: '',
                type: '',
            },
            {
                id: '',
                label: '',
                description: '',
                icon: '',
                type: '',
            },
        ]
    },
    {
        header: 'Reset Settings',
        icon: '',
        items: [
        ]
    },
]

const settings = () => {
    const [search, setSearch] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.backButton} onPress={() => {router.push('/')}}>
                    <Entypo size={30} name='chevron-small-left' color={'#31374a'} />
                </Pressable>
                <Text>Settings</Text>
            </View>
            
            <ScrollView style={styles.menu}>
                <View style={styles.search}>
                    <MaterialIcons name={'search'} />
                    <TextInput 
                        autoCapitalize='none'
                        autoCorrect={true}
                        clearButtonMode='always'
                        onChangeText={(text) => setSearch(text)}
                        placeholder='Search for a setting'
                        placeholderTextColor='#777'
                        style={styles.searchInput}
                        value={search}
                    />
                </View>

                {SECTIONS.map(({ header, items }) => (
                    <View>
                        <Text>{header}</Text>

                        {items.map(({ id, label, icon }) => (
                            <Pressable>
                                <View>
                                    <Text>{label}</Text>
                                </View>
                            </Pressable>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default settings;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {

    },
    menu: {

    },
    settings: {

    },
    search: {
        backgroundColor: '#f1f1f1',
        borderColor: '#e1e1e1',
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        fontFamily: 'Roboto',
        fontSize: 14,
        height: 55,
        marginVertical: 10,
    },
    searchInput: {
        borderRadius: 8,
        flexGrow: 1,
        fontFamily: 'Roboto',
        fontSize: 14,
        height: 55,
        paddingLeft: 15,
    },
    backButton: {
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderColor: '#e1e1e1',
        borderRadius: 8,
        borderWidth: 1,
        height: 35,
        justifyContent: 'center',
        maxWidth: 'auto',
        width: 35,
    },
});
