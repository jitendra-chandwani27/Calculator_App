import React from 'react';
import { Text, View } from 'react-native';
const label = (props) => {
    return (
        <View style={{backgroundColor:'#dee2e8' ,width:360,height:300,alignItems:'flex-end',justifyContent:'flex-end'}}>
            <Text style={{fontSize:20,marginRight:10,marginBottom:10,color:'white'}}>{props.History}</Text>
            <Text style={{fontSize:60,marginRight:20,marginBottom:20}}>{props.Text}</Text>
        </View>
    );
};
export default label;
