import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
  
    },
    bai1: {
      backgroundColor: '#4e9dfc',
      margin: 20,
      padding: 10,
      flex: 2,
      borderRadius: 10,
      borderRightColor: 'red',
      borderBottomColor: 'red',
      borderWidth: 4,
      
    },
    bai2: {
      backgroundColor: 'white',
      margin: 20,
      padding: 10,
      flex: 1
    },
    styleText: {
      textDecorationLine: 'underline',
      letterSpacing: 20,
      fontWeight: 'bold',
    },
  
    lineHight: {
      lineHeight: 20
    },
    italicText: {
      fontStyle: 'italic'
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      height: 40,
      marginTop: 10,
      paddingLeft: 15
    }
  });