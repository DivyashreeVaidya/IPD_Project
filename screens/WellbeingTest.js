/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { ScrollView, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import NavBar from '../components/NavBar';
import { questionnaire } from './questionnaire';
import WellbeingQuestionBox from './WellBeingQuestionBox';

const WellbeingTest = ({navigation}) => {

   //const [questions, setQuestions] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [score, setScore] = useState(0);  
   const [testEnded, setTestEnded] = useState(false);
   const [showAnswers, setShowAnswers] = useState(false);
   const handleAnswer = (answer) => {

    if (!showAnswers) {
       if(answer === questionnaire[currentIndex].Opt1){
          setScore(score + 1);
       }
    }
    const newIndex = currentIndex + 1
    //setCurrentIndex(newIndex);
  
    if(answer === questionnaire[currentIndex].Opt1){
       setScore(score + 1);
        
    }
   if(newIndex >= questionnaire.length){
      setTestEnded(true);
   }
     setShowAnswers(true);


 };
 const nextQuestion = () =>{
    setShowAnswers(false);
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex);
 }


    return (
        <>
        <NavBar txt={true} text={"Weekly Check-In"} navigation={navigation} color={"#ffffff"}/>
        <WellbeingQuestionBox/>
        </>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#FFFFFF",
      
    },
    question: {
        backgroundColor: "#F9D157",
        height:150,
        width:350,
        borderRadius:10,
        padding:10,
        marginLeft:'auto',
        marginRight:'auto',
        alignContent:'center'
    },
    hImg: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,
        width:250,
        height:200
    },    
    title: {
        textAlign:'left',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize: 25,
        marginTop:10,
        marginLeft:10,
        fontWeight: "bold",
        fontFamily:'Roboto',
        },
        title2: {
            textAlign:'left',
            marginLeft:'auto',
            marginRight:'auto',
            fontSize: 22,
            marginTop:15,
            marginLeft:20,
            fontWeight: "bold",
            fontFamily:'Roboto',
            },
    btnText:{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            paddingBottom:10
        },
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:300,height:65,
    marginLeft:'auto',
    marginRight:'auto', marginBottom:0},
    buttonStyle1:{backgroundColor:"#FF5959",padding:10,width:150,height:65, marginLeft:'auto',
    marginRight:'auto', marginBottom:0},
    tab1: {
        top: 30,
        height: 240,
        width: 310,
        borderRadius: 20,
        padding: 20,
        alignSelf: "center",
        backgroundColor: "#FF5959",
        opacity: 0.8,
    },
    tabText1: {
        top: 10,
        fontSize: 28,
        fontWeight: "400",
    },
    
    tabBtn1: {
        top: 40,
        left: 50,
        width: 100,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
    },
    btnText1: {
        fontSize: 20,
    },
    tabContent: {
        flexDirection: "row",
        height: 120,
        top: 30,
    },
    
})

export default WellbeingTest;
