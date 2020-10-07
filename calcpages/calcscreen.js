import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function CalcScreen(){
    const [number1, setNumber] = useState('');
    const [number2, setNumber2] = useState('');
    const [data1, setData] = useState([]);
    var [result, setResult] = useState('');
  
  
    const Lisaa = () => {
      result = setResult(number1 + number2);
      setData([...data1, {key: result}]);
      }
  
      const Vahenna = () => {
        result = setResult(number1 - number2);
        setData([...data1, {key: result}]);
        }

    return(

        <View style={styles.container}>
            <Text>Calculator with history</Text>

            <TextInput
            style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            onChangeText={number1 => setNumber(number1)}
            value={number1}
            />

            <TextInput
            style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            onChangeText={number2 => setNumber2(number2)}
            value={number2}
            />
               <Button onPress={Lisaa} title="+" />
               <Button onPress={Vahenna} title="-" />

          <Text>{result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
