import { Button, Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styleLogin } from './style';
import { StatusBar } from 'expo-status-bar';


const Login = ({navigation}) => {
    const windownWith = Dimensions.get('window').width;
    const windownHeght = Dimensions.get('window').height;
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }} >
            <StatusBar style="light" />
            <SafeAreaView>
                <View style={{ alignItems: 'center', width: '100%', height: '100', marginTop: 0.1 * windownHeght }}>
                   
                </View>
                <View style={styleLogin.inputStye}>
                    <Text style={{ color: 'white', paddingRight: 22 }}>Email: </Text>
                    <TextInput
                        value={email}
                        onChange={setEmail}
                        autoCapitalize='none'
                        placeholder='Email'
                        placeholderTextColor="white"
                        style={styleLogin.input} />
                </View>

                <View style={styleLogin.inputStye}>
                    <Text style={{ color: 'white' }}>Password: </Text>
                    <TextInput
                        value={pass}
                        onChange={setPassword}
                        placeholder='Password'
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        style={styleLogin.input} />
                </View>

                <View style={{ width: '100%', height: '22%', marginTop: 0.04 * windownHeght, justifyContent: 'center', alignItems: 'center' }}>
                    {/**sign in */}
                    <TouchableOpacity style={{ width: '90%', height: '30%', borderWidth: 1, borderColor: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
                    onPress={ () =>{
                        navigation.navigate('Home')
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Sign in</Text>
                    </TouchableOpacity>
                    {/** sign in google */}
                    <TouchableOpacity style={{ marginTop: 20, width: '90%', height: '30%', borderWidth: 1, borderColor: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                       
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: 'gray' }}> Don't have account? Click</Text>
                    <TouchableOpacity
                        onPress={ () =>{
                            navigation.navigate('Register')
                        }}>
                        <Text style={{ color: 'yellow', textDecorationLine: "underline" }}> Register</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </View>

    )
}
export default Login
