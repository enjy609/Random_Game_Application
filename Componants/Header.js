import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
//import { Header } from 'react-native/Libraries/NewAppScreen';

const Header = props =>{
return(
<View style = {styles.header}>
<Text style ={styles.headertitle}>{props.title}</Text>
</View>
);
};



const styles = StyleSheet.create({
header :{
    width:'100%',
    height:90,
    paddingTop:36,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#f7287b"

},
headertitle:{
    color:'white',
    fontSize:18 ,
    fontFamily:'Font_sens_Bold'
 
}
});

export default Header;