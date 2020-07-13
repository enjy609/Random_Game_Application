import React ,{useState,useRef} from 'react';
import { Text,View,StyleSheet,Button,Image,Dimensions,ScrollView} from 'react-native';
import MainButton from '../Componants/MainButton';


const Gameoverscreen = props =>{
    return(
      <ScrollView style={styles.scroll}>
        <View style={styles.screen}>
            <View style={styles.imagecontainer}>
             <Image
            //local image
              //source={require('../assets/Images/success.png')}
              //Network images
              source={{uri:'https://image.freepik.com/free-vector/the-winner_23-2147506357.jpg'}}
              style={styles.image} resizeMode={'cover'} />
             </View>
            <Text style={styles.cog}>Congratulations!</Text>
           
    <Text style={styles.textshow}> Your Phone needed <Text style={styles.answer}>{props.roundsnum}  </Text>rounds to guess the number <Text style={styles.answer}>{props.usernumber} </Text></Text>
           <MainButton   onPress={props.onRestart}> NEW GAME</MainButton>
        </View>
        </ScrollView>
    );
};


const styles =StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    cog:{
        fontSize:50
        
    },
    image:{
        width:'100%',
        height:'100%'
    },
    imagecontainer:{
        //to be perfect circle it must be half the value of width and height & width and higth must be equal
        //Dynamic Calculating of the width
        width:Dimensions.get('window').width*0.7,
        height:Dimensions.get('window').width*0.7,
        borderRadius:Dimensions.get('window').width*0.7 / 2,
        borderColor:'black',
        borderWidth:3,
        //any child in the container will cutof
        overflow:'hidden'

    },
    answer:{
        color:"#f7287b",
        fontFamily:'Font_sens_Bold'
    },
    textshow:{
    marginBottom:30
    },
    scroll:{
        paddingTop:70
    }
});


export default Gameoverscreen;