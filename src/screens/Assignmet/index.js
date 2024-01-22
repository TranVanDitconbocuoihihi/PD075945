import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import Login from './login';
import Register from './register';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './home';

const MyAssignment_1 = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login " component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MyAssignment_1