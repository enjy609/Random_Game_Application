import React  from 'react';
import { Text,View,StyleSheet,Button,TouchableOpacity } from 'react-native';

const MainButton = props =>{
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View  style={styles.button}>
    <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#f7287b",
        borderRadius:150,
        paddingVertical:12,
        paddingHorizontal:30,
    
        
    },
    buttonText:{
        color:'white'
    }
   
   
});

export default MainButton ;