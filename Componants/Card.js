import React from 'react';
import { StyleSheet, View } from 'react-native';
const card = props =>{
return( <View style={{ ...styles.card, ... props.style}}>{props.children}</View>);
};

const styles = StyleSheet.create({
    card:{
  
        shadowColor:'black',
        shadowOffset:{ width:0,height: 2 },
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        borderRadius:10
    }
});

export default card;