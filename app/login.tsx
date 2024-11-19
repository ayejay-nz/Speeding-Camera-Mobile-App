import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => {router.push('/')}}>
                <Entypo size={30} name='chevron-small-left' color={'#31374a'} />
            </Pressable>

            <View>
                <Text style={styles.header}>Welcome back!</Text>
                <TextInput 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)} 
                    placeholder='Email' 
                    placeholderTextColor='#777' 
                    style={[styles.input, {paddingLeft: 15}]} 
                    value={email} 
                />
                <View style={styles.input}>
                    <TextInput 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        clearButtonMode='always'
                        onChangeText={(text) => setPassword(text)} 
                        placeholder='Password' 
                        placeholderTextColor='#777' 
                        secureTextEntry={!showPassword} 
                        style={styles.passwordInput} 
                        value={password}                    
                    />
                    <MaterialCommunityIcons 
                        color='#777'
                        name={showPassword ? 'eye-off': 'eye'}
                        onPress={toggleShowPassword}
                        size={24}
                        style={styles.toggleShowPassword}
                    />
                </View>

                <Text style={styles.forgotPassword} onPress={() => router.push('/forgotpassword')}>Forgot Password?</Text>

                <Pressable style={styles.button} onPress={() => {router.push('/')}}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
                        <View>
                            <Text style={{paddingHorizontal: 5, textAlign: 'center', fontFamily: 'Roboto', fontSize: 14, color: '#777', fontWeight: 500}}>Or Login With</Text>
                        </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
                </View>

                <View style={styles.oauth}>
                    <Pressable style={styles.oauthMethod}>
                        <Image style={styles.oauthLogo} source={require('../assets/images/facebook_logo.png')} />
                    </Pressable>                    
                    <Pressable style={styles.oauthMethod}>
                        <Image style={styles.oauthLogo} source={require('../assets/images/apple_logo.png')} />
                    </Pressable>                    
                    <Pressable style={styles.oauthMethod}>
                        <Image style={styles.oauthLogo} source={require('../assets/images/google_logo.png')} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.registerBlock}>
                <Text style={styles.text}>Don't have an account? 
                    <Text style={styles.register} onPress={() => {router.push('/register')}}> Register Now</Text>
                </Text>
            </View>
        </View>
    )
}

export default login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    oauth: {
        flexDirection: 'row',
        height: 55,
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    oauthMethod: {
        borderColor: '#e1e1e1',
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center'
    },
    oauthLogo: {
        aspectRatio: 1,
        height: 35,
        marginHorizontal: 35,
        resizeMode: 'contain',
    },
    forgotPassword: {
        color: '#888',
        fontFamily: 'Roboto',
        fontWeight: '600',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
    },
    passwordInput: {
        borderRadius: 8,
        flexGrow: 1,
        fontFamily: 'Roboto',
        fontSize: 14,
        height: 55,
        paddingLeft: 15,
    },
    toggleShowPassword: {
        alignContent: 'center',
        padding: 15,
    },
    input: {
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
    button: {
        alignItems: 'center',
        backgroundColor: '#31374a',
        borderRadius: 8,
        height: 55,
        justifyContent: 'center',
        marginVertical: 30,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 600,
    },
    text: {
        color: '#234',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 500,
        marginVertical: 30,
    },
    register: {
        color: '#6691ed',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '700',
    },
    registerBlock: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#234',
        fontFamily: 'Roboto',
        fontSize: 35,
        fontWeight: 700,
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
    }
});
