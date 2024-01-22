import {StyleSheet } from 'react-native'
import React from 'react'
import Login from './login'
export const styles = StyleSheet.create({
container:{
    backgroundColor:'yellow',
    width:'100%',
    height:'100%',
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    fontSize:40,
    fontWeight:'bold',
    alignItems:'center'
}
})
export const styleLogin =StyleSheet.create({
    logo:{
        width: '100%',
        height:230,
        borderColor:'white',
        borderWidth:1,
        paddingBottom:20,
        
    },
    inputStye:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'auto',
        marginTop:15,
        flexDirection:'row',
    },
    input:{
        
        borderColor:'white',
        borderWidth:1,
        margin:10,
        color:'white',
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
        width:'70%'
    },
    styleButton:{
        borderColor:'white',
        width:'90%',
        borderColor:'black',
        borderWidth:1,
        marginTop:20,
        
    },
    inputRegister:{
        
        borderColor:'white',
        borderWidth:1,
        margin:10,
        color:'white',
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
        width:'80%'
    },
})