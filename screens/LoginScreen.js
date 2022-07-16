import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const login = async () => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            clearForm();

            navigation.replace('Product');

            // await AsyncStorage.setItem('accessToken', user.idToken)
            
        } catch(err) {
            console.log(err);
            Alert.alert("User/password not registered!")
        }
    }

    const clearForm = () => {
        setEmail('');
        setPassword('');
    }

    const pressRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView>
            <TextInput value={email} placeholder='Email' onChangeText={setEmail}/>
            <TextInput value={password} placeholder='Password' onChangeText={setPassword}/>
            
            <View>
                <TouchableOpacity onPress={login}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressRegister}>
                    <Text>REGISTER</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})