import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

const EntryScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <LinearGradient 
                    colors={['transparent', 'rgba(249, 249, 249, 0.8)', 'rgba(249, 249, 249, 1)']} 
                    locations={[0, 0.9, 1]}
                    style={styles.linearGradient}
                >
                    <Text style={styles.header}>App Name</Text>
                </LinearGradient>
                <Image style={styles.backgroundImage} source={require('../assets/images/background_image_1.jpeg')} />
            </View>

            <View style={styles.buttons}>
                <Pressable style={styles.loginButton} onPress={() => {router.push('/login')}}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </Pressable>
                <Pressable style={styles.registerButton} onPress={() => {router.push('/register')}}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default EntryScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        flex: 1,
    },
    backgroundContainer: {
        alignItems: 'center',
        flex: 1,
    },
    header: {
        color: '#234',
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: 700,
        marginTop: 50,
    },
    buttons: {
        justifyContent: 'flex-end',
        margin: 10,
    },
    backgroundImage: {
        aspectRatio: 2/3,
        flex: 1,
        height: '100%',
        minWidth: '100%',
        opacity: 0.9,
        position: 'absolute',
        width: 'auto',
        zIndex: 1,
    },
    linearGradient: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        zIndex: 2,
    },
    loginButton: {        
        alignItems: 'center',
        backgroundColor: '#31374a',
        borderRadius: 8,
        height: 55,
        justifyContent: 'center',
        margin: 10,
    },
    loginButtonText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 600,
    },
    registerButton: {
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderColor: '#31374a',
        borderRadius: 8,
        borderWidth: 1,
        height: 55,
        justifyContent: 'center',
        margin: 10,
    },
    registerButtonText: {
        color: '#31374a',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 600,
    },
});
