import React, {useState}from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView}  from 'react-native';
import MapView, {Marker} from 'react-native-maps';



export default function App() {

  const [Address, setAddress] = useState('');
  const [lati, setLatitude] = useState(60.201373);
  const [long, setLongitude] = useState(24.934302);
  const KEY = '9XpmHNmfHzSe5m61C8uac1VLESCu2Kgb'


  const getAddress = () => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key='+KEY+'&location''='+ Address ;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => { 
       setLongitude(responseJson.results);
       setLatitude(responseJson.results);
    })
    
  }

  return (
    <KeyboardAvoidingView>
      <MapView
      style={{
        height: 550,
        margin: 10,
        borderWidth: 1,
        borderColor: '#000000',
      }}
      initialRegion={{
      latitude: 60.201373,
      longitude:24.934041,
      latitudeDelta: 0.0322,
      longitudeDelta:0.0221,}}>
      
      <Marker
      coordinate={{
      latitude:lati,
      longitude: long}}
      title='Haaga-Helia'/>
      </MapView>


      <TextInput 
        style={{fontSize: 18, width: 200}} 
        value={Address} 
        placeholder="Enter address"
        onChangeText={(Address) => setAddress(Address)} 
      />
     <Button title="Find" onPress={getAddress} />
</KeyboardAvoidingView>
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
