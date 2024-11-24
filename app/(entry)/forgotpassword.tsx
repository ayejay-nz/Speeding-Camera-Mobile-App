import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';

const forgotpassword = () => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => {router.push('./login')}}>
                <Entypo size={30} name='chevron-small-left' color={'#31374a'} />
            </Pressable>
            
            <View style={{flex: 1, justifyContent: 'center', marginBottom: 80}}>
                <View style={styles.forgotPasswordContainer}>
                    <Text style={styles.header}>Forgot your password?</Text>
                    <Text style={styles.text}>Enter your email and we'll send you a recovery link</Text>
                    <TextInput 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        onChangeText={(text) => setEmail(text)} 
                        placeholder='Email' 
                        placeholderTextColor='#777' 
                        style={[styles.input, {paddingLeft: 15}]} 
                        value={email} 
                    />
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Send Recovery Email</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default forgotpassword;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    forgotPasswordContainer: {
        
    },
    header: {
        color: '#234',
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: 700,
        marginBottom: 10,
    },
    text: {
        color: '#234',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 500,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#31374a',
        borderRadius: 8,
        height: 55,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 600,
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
        marginVertical: 30,
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