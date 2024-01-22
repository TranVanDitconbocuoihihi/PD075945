import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    
    <View style={styles.container}>
        <StatusBar style="light" />
      <Text style={styles.text}> WellCome My App</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
       
    },
    text:{
        color:'blue',
        fontSize:30,
        marginTop:'50%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Màu đổ bóng (đen) với độ trong suốt 0.75
        textShadowOffset: { width: 2, height: 2 }, // Độ dịch chuyển của đổ bóng
        textShadowRadius: 5, // Bán kính của đổ bóng
    }
})