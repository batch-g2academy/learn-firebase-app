import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const register = async () => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);

            clearForm();

            navigation.replace('Login');
            
        } catch(err) {
            console.log(err);
        }
    }

    const clearForm = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <SafeAreaView>
            <TextInput value={email} placeholder='Email' onChangeText={setEmail}/>
            <TextInput value={password} placeholder='Password' onChangeText={setPassword}/>
            
            <View>
                <TouchableOpacity onPress={register}>
                    <Text>REGISTER</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})