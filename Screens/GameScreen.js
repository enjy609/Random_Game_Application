import React ,{useState,useRef ,useEffect} from 'react';
import { Text,View,StyleSheet,Button,Alert,ScrollView,Dimensions } from 'react-native';
import Numbercontainer from '../Componants/Numbercontainer';
import Card from '../Componants/Card';
import BodyStyle from '../Componants/BodyText';
import MainButton from '../Componants/MainButton';
import{Ionicons}from '@expo/vector-icons';



//exclude to not generate my selected number
const GenerateRandomNumber =(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const RandomNumber = Math.floor(Math.random()*(max-min)+min);
    if (RandomNumber === exclude){
        return GenerateRandomNumber(min,max,exclude);
    }
    else {
        return RandomNumber;

    }
}
const renderlistitem =(value,numberofrounds) => (
<View key={value} style={styles.list}>
   <Text>The Random Guess is: {numberofrounds}</Text>
    <Text>{value}</Text>
    </View>
    );
const Gamescreen =props =>{
    const intialguess =GenerateRandomNumber(1,100,props.userChoice);
    const [CurrentGuess, setCurrentGuess] = useState(intialguess);
    const[pastrounds,setpastrounds]=useState([intialguess]);
    const currentlow= useRef(1);
    const currenthigh= useRef(100);

    const{userChoice,Ongameover}=props;
useEffect(()=>
{
    if(CurrentGuess === userChoice)
    {
           Ongameover(pastrounds.length);
    }
 },[CurrentGuess,userChoice,Ongameover]);

    const nextguesshandler = direction =>{
if ((direction === 'lower' && CurrentGuess<props.userChoice) || (direction === 'greater' && CurrentGuess>  props.userChoice))
{
Alert.alert('Don\'t Lie',"You Know you are Wrong ...", [{text:'Sorry',style:'cancel'}]);
   return;
}
    if (direction === 'lower'){
        currenthigh.current=CurrentGuess;
    }else {
        currentlow.current=CurrentGuess+1;
    }
  const nextnumber=  GenerateRandomNumber(currentlow.current,currenthigh.current,CurrentGuess);
  setCurrentGuess(nextnumber);
  //setrounds(currounds=>currounds+1);
  setpastrounds(curpastguess => [nextnumber,...curpastguess])
    };
    if (Dimensions.get('window').height <500){
        return(
            <View style={styles.screen}>
            <Text style={BodyStyle.title}>Phone's Guess</Text>
            <View style={styles.controls}>
            <MainButton    onPress={nextguesshandler.bind(this,'lower')}>  <Ionicons name={'md-remove'} size={24} color="white"/>  </MainButton>
        <Numbercontainer>{CurrentGuess}</Numbercontainer>
            <MainButton   onPress={nextguesshandler.bind(this,'greater')}>  <Ionicons name={'md-add'} size={24} color="white"/>   </MainButton>
            </View>
       <View style={styles.backbutton}><MainButton onPress={props.onRestart}>BACK </MainButton></View>
        </View>

        );
    }

    return(
        <View style={styles.screen}>
        <Text style={BodyStyle.title}>Phone's Guess</Text>
    <Numbercontainer>{CurrentGuess}</Numbercontainer>
    <Card style={styles.buttoncontainer}> 
        <MainButton    onPress={nextguesshandler.bind(this,'lower')}>  <Ionicons name={'md-remove'} size={24} color="white"/>  </MainButton>
        <MainButton   onPress={nextguesshandler.bind(this,'greater')}>  <Ionicons name={'md-add'} size={24} color="white"/>   </MainButton>
    </Card>
    <ScrollView  contentContainerStyle={styles.listcontainer}>{pastrounds.map( guess=> renderlistitem(guess))}</ScrollView>
   <View style={styles.backbutton}><MainButton onPress={props.onRestart}>BACK </MainButton></View>
    </View>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
       
    },
    buttoncontainer:{
        flexDirection:'row',
        width:400,
        maxWidth:'90%',
        justifyContent:'space-around',
        marginTop:Dimensions.get('window').height>600 ? 10:5,
        padding:20
    },
    backbutton:{
        padding:30
        
    },
    list:{
        borderColor:"black",
        borderWidth:1,
        padding:15,
        marginVertical:10,
        flexDirection:'row',
        borderRadius:20
     
    },
    listcontainer:{
        paddingRight:15
    },
    controls:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'80%'
    }
});

export default Gamescreen;