
import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from'expo-font';

import Header from './Componants/Header';
import StartGameScreen from './Screens/StartGameScreen';
import Gamescreen from './Screens/GameScreen';
import GameOverscreen from './Screens/Gameoverscreen';
import { AppLoading } from 'expo';


const fetchfont = () =>{
   return Font.loadAsync({
    //will use the fonts by this name 
    "Font_sens": require( './assets/fonts/OpenSans-Regular.ttf'),
    "Font_sens_Bold": require( './assets/fonts/OpenSans-Bold.ttf')

  });
};

export default function App() {

  const [UserNumber,setUserNumber] =useState();
  const [GuessRounds,setGuessRounds] =useState(0);
  const [dataloaded,setdataloaded] =useState(0);

// don't start the game until the fonts is uploaded
  if(!dataloaded){
    return <AppLoading  startAsync={fetchfont}  onFinish= {()=> setdataloaded(true)} onError ={(err)=>console.log(err)}/>
  }

  const gamerestarthandler = ()=>{
    setGuessRounds(0);
    setUserNumber(null);
  };

  const gamestarthandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameover = numberofrounds =>{
    setGuessRounds(numberofrounds);
  };

  let content = <StartGameScreen  OnstartGame={gamestarthandler} />;

    if (UserNumber && GuessRounds<=0)
    {
      content= <Gamescreen userChoice={UserNumber}  Ongameover ={gameover}  onRestart={gamerestarthandler}/>;
    }
    else if (GuessRounds >0 )
    {
      content=<GameOverscreen   usernumber={UserNumber}   roundsnum={GuessRounds}  onRestart={gamerestarthandler} /> ;
    }
  
  return (
    <View style={styles.screen}>
   <Header  style ={styles.titlee} title =" Guess a Number "/>
    {content}
    </View>
  );
}

const styles = StyleSheet.create({
screen :{
  flex:1
}, 
titlee:{
  fontFamily:'Font_sens_Bold',
  fontSize:20
}
});
