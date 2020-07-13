import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';


const input = props =>{

    return(
        <TextInput  {...props}  style={ [ styles.input , props.style ] }/>
    );
};

const styles = StyleSheet.create({
input :{
height:30,
borderBottomColor:'grey',
marginVertical:10,
borderBottomWidth:3
}

})

export default input ;