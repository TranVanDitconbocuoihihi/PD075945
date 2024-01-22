import { Button, Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styleLogin } from './style';
import { StatusBar } from 'expo-status-bar';


const Register = ({ navigation }) => {
    const windownWith = Dimensions.get('window').width;
    const windownHeght = Dimensions.get('window').height;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [rePass, setRePassword] = useState('');
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }} >
            <View>
                <StatusBar style="light" />
                <SafeAreaView>

                    <View style={{  marginTop: 0.06 * windownHeght, width: '100%', height: 50, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: 'white', borderColor: 'white', borderWidth: 1, width: 50, height: 50, marginLeft: 0.02 * windownWith }}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                        
                        </TouchableOpacity>
                        <Text style={{ color: 'white', paddingLeft: 10, fontWeight: 'bold', fontSize: 20 }}>Sign Up</Text>
                    </View>
                    <View style={{ marginTop: 0.2 * windownHeght }}>
                        <View style={styleLogin.inputStye}>
                            <TextInput
                                value={name}
                                onChange={setName}
                                autoCapitalize='none'
                                placeholder='Nhập User name: '
                                placeholderTextColor="white"
                                style={styleLogin.inputRegister} />
                        </View>
                        <View style={styleLogin.inputStye}>
                            <TextInput
                                value={email}
                                onChange={setEmail}
                                autoCapitalize='none'
                                placeholder='Nhập Email: '
                                placeholderTextColor="white"
                                style={styleLogin.inputRegister} />
                        </View>

                        <View style={styleLogin.inputStye}>

                            <TextInput
                                value={pass}
                                onChange={setPassword}
                                placeholder='Nhập Password: '
                                placeholderTextColor="white"
                                secureTextEntry={true}
                                style={styleLogin.inputRegister} />
                        </View>
                        <View style={styleLogin.inputStye}>

                            <TextInput
                                value={rePass}
                                onChange={setRePassword}
                                placeholder='Nhập lại Password: '
                                placeholderTextColor="white"
                                secureTextEntry={true}
                                style={styleLogin.inputRegister} />
                        </View>

                    </View>

                    <View style={{ width: '100%', height: '22%', marginTop: 0.01 * windownHeght, justifyContent: 'center', alignItems: 'center' }}>
                        {/**sign in */}
                        <TouchableOpacity style={{ width: '90%', height: '30%', borderWidth: 1, borderColor: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Register</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ color: 'gray' }}> You have an account? Click</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack()
                            }}>
                            <Text style={{ color: 'yellow' }}> Sign in</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </View>
        </View>

    )
}
export default Register
