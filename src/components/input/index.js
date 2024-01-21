import {SafeAreaView,Text,TextInput, View} from 'react-native';
import{styles}from './styles'
const Input = () => {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.inputx}
        />
      </SafeAreaView>
    );
  };

export default Input;