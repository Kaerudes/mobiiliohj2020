import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, Image, KeyboardAvoidingView} from 'react-native';

export default function App() {
  const [desc, setDesc] = useState('');
  const [recipe, setRecipe] = useState([]);

  const getRecipe = () => {
    const url = 'http://www.recipepuppy.com/api/?i='+ desc ;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => { 
       setRecipe(responseJson.results);
    })
    .catch((error) => { 
      Alert.alert('Error' , error); 
    }); 
  }
  
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginLeft : "5%"}}
        data={recipe}
        ItemSeparatorComponent={listSeparator}
        renderItem={({item}) =>
        <View>
        <Text>{item.title}</Text>
        <Image style={{width:60, height:60}} source={{uri:item.thumbnail}} />
        </View>
        }
      />

      <View>
      <TextInput 
        style={{fontSize: 18, width: 200}} 
        value={desc} 
        placeholder="Search for recipe"
        onChangeText={(desc) => setDesc(desc)} 
      />
     <Button title="Find" onPress={getRecipe} />
     </View>
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