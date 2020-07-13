import React from 'react';
import { Text,View,StyleSheet } from 'react-native';


const Numbercontainer= props => {
    return(
  <View style={styles.container}>
    <Text style={styles.number}>{props.children}</Text>
  </View>
    );
};

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:'#c717fc',
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        padding :10  
    },
    number:{
        color:'black',
        fontSize:22
    }
});

export default Numbercontainer;