import { View, Text, Pressable, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => {router.push('/')}}>
                <Entypo size={30} name='chevron-small-left' color={'#31374a'} />
            </Pressable>

            <View>
                <Text style={styles.header}>Register to get started</Text>
                <TextInput 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    onChangeText={(text) => setUsername(text)} 
                    placeholder='Username' 
                    placeholderTextColor='#777' 
                    style={[styles.input, {paddingLeft: 15}]} 
                    value={username} 
                />
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
                <View style={styles.input}>
                    <TextInput 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        clearButtonMode='always'
                        onChangeText={(text) => setConfirmPassword(text)} 
                        placeholder='Confirm Password' 
                        placeholderTextColor='#777' 
                        secureTextEntry={!showConfirmPassword} 
                        style={styles.passwordInput} 
                        value={confirmPassword}                    
                    />
                    <MaterialCommunityIcons 
                        color='#777'
                        name={showConfirmPassword ? 'eye-off': 'eye'}
                        onPress={toggleShowConfirmPassword}
                        size={24}
                        style={styles.toggleShowPassword}
                    />
                </View>

                <Pressable style={styles.button} onPress={() => {router.push('/')}}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'lightgrey'}} />
                        <View>
                            <Text style={{paddingHorizontal: 5, textAlign: 'center', fontFamily: 'Roboto', fontSize: 14, color: '#777', fontWeight: 500}}>Or Register With</Text>
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

            <View style={styles.loginBlock}>
                <Text style={styles.text}>Already have an account?
                    <Text style={styles.login} onPress={() => {router.push('/login')}}> Login Here</Text>
                </Text>
            </View>
        </View>
    )
}

export default register;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
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
    header: {
        color: '#234',
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: 700,
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
    loginBlock: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#234',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 500,
        marginVertical: 30,
    },
    login: {
        color: '#6691ed',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '700',
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
        justifyContent: 'center',
    },
    oauthLogo: {
        aspectRatio: 1,
        height: 35,
        marginHorizontal: 35,
        resizeMode: 'contain',
        width: 'auto',
    },
});
