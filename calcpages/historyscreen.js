import * as React from 'react';
import { Text, View } from 'react-native';
export default function HistoryScreen(){

    return(
        <View>
            <FlatList
            data={data1}
            renderItem={({item}) =>
            <Text>{number1} {number2} = {item.key}</Text>}
            />
        </View>

    )



}