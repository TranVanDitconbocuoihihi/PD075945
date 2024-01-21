import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import{styles} from './styles';


const Button2 = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button2);