import React, {useState,useEffect} from 'react';
import { StyleSheet, Text,View, Button,TouchableWithoutFeedback,Keyboard,Alert,Dimensions,ScrollView,KeyboardAvoidingView} from 'react-native';
import Card from '../Componants/Card';
import Input from '../Componants/input';
import Numbercontainerr from  '../Componants/Numbercontainer';
import Mainbutton from  '../Componants/MainButton';
import MainButton from '../Componants/MainButton';



const  StartGameScreen = props =>{

const[enteredvalue ,setenteredvalue]=useState('');
const[confirm ,setconfirm]=useState(false);
const[selectedNumber ,setselectedNumber]=useState();
const [buttonstate ,setbuttonstate]=useState(Dimensions.get('window').width/4);

useEffect(()=>{
    const updatebutton= () =>{
        setbuttonstate(Dimensions.get('window').width/4);
        }
        Dimensions.addEventListener('change',updatebutton);
        return( )=>{ Dimensions.removeEventListener('change',updatebutton)};
      
        
});

// replace any thing that without range of 0-9 with empty string 
const inputehandler = inputtext =>{
    setenteredvalue(inputtext.replace(/[^0-9]/g,' '));
};

const resetinputhandler =()=>{
    setenteredvalue('');
    setconfirm(false);
};

const confirminputhandler =()=>{
    const choseennumber=parseInt(enteredvalue);
    if (isNaN(choseennumber) ||choseennumber<=0 ||choseennumber>99){
        Alert.alert('Invalid Input','Please Enter a Number between 1 and 99 .' ,[{text:'Okay',style:'destructive'}]);
        return;
    }
    setconfirm(true);
    setselectedNumber(choseennumber);
    setenteredvalue('');
    Keyboard.dismiss();
};

// show the choseen number in the screen
let confirmedoutput;
if (confirm){
    confirmedoutput =(
    <Card style ={styles.summaryContainer}>
      <Text>You Selected</Text>
       <Numbercontainerr>{selectedNumber}</Numbercontainerr>
    <Mainbutton  onPress={()=> props.OnstartGame(selectedNumber)}> 
    START GAME
    </Mainbutton>
    </Card>
    );
}
return(
    // Allow the keyboard to dissaper when i press in anything
    <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30} >
    <TouchableWithoutFeedback onPress={ ()=>{ Keyboard.dismiss();}}>
    <View style ={styles.screen}>
    <Card style={styles.inputcontiner}>
    <Text style={styles.title}>Select a Number </Text>
    <Input style={styles.input}  blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2}  onChangeText={inputehandler} value ={enteredvalue}/>
    <View style={styles.buttonstyle}>
        <View style={{width:buttonstate}}><Button  title="Reset" onPress={resetinputhandler}    color="#c717fc"/></View>
        <View style={{width:buttonstate}}><Button  title="Confirm" onPress={confirminputhandler}  color="#c717fc"/></View>
    </View>
    </Card>
    {confirmedoutput}
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
);


};

const styles = StyleSheet.create({
    screen :{
        padding:10,
        flex:1,
        alignItems:'center'
    },
    buttonstyle:{
        flexDirection:'row',
        width:'100%',
        color:'black',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingBottom:10
    },
    title:{
        fontSize:20,
        marginVertical:10,
        paddingTop:10,
        fontFamily:'Font_sens'
       
    },
    inputcontiner:{
        
        minWidth:300,
        //maxWidth:'80%',
        //That's for the mobile that have small screen to fit this screen 
        width:'80%',
        alignItems:"center"
    
    },
    button:{
       // width:100
        width:Dimensions.get('window').width/4
    },
    input:{
        width:70,
        textAlign:'center'
        
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center',
        padding:20

    }
    });

    export default StartGameScreen ;