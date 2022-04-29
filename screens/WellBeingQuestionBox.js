/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { ScrollView, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Headline, Surface } from 'react-native-paper';
import NavBar from '../components/NavBar';
import Tts from 'react-native-tts';
import { questionnaire } from './questionnaire';
Tts.setDefaultLanguage('hi-IN');
    Tts.setDefaultRate(0.3)
    Tts.addEventListener('tts-start', event => console.log('start', event));
    Tts.addEventListener('tts-finish', event => console.log('finish', event));
    Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

const WellbeingQuestionBox = () => {

    const _onPressSpeech = async (text) => {
        Tts.stop();
        Tts.getInitStatus().then(() => {
          {
            Tts.speak(questionnaire[currentIndex].Question)
            }
        });
        console.log('i have spoken')
    }
        const [currentIndex, setCurrentIndex] = useState(0);
        const [score, setScore] = useState(0);  
        const [testEnded, setTestEnded] = useState(false);
        const [showAnswers, setShowAnswers] = useState(false);
        const nextQuestion = () =>{
        setShowAnswers(false);
        const newIndex = currentIndex + 1
        setCurrentIndex(newIndex);
        if(newIndex >= questionnaire.length){
            setTestEnded(true);
         }
     }
    var tempScore = 0
    return (
        testEnded?(
            <View style={styles.ePage}>
            <View style={styles.tab1}>
            <Image style={styles.tabImg1} source={require("../assets/wellbeing_home2.png")}/>
        <Text style={styles.tabText1}>Thank You!</Text>
        <Text style={styles.tabText1}>Your responses have been succesfully saved. <Image source={require("../assets/tick.png")} resizeMode='contain' style={{width:40,height:40}}/></Text>
        <Text style={styles.tabText1}>Have a great day!</Text>
        <View style={styles.tabContent}>            
            {/* <TouchableOpacity>
            <View style={styles.tabBtn1}>
                <Text style={styles.btnText1} >GENERATE REPORT</Text>
            </View>
            </TouchableOpacity> */}
        </View>

        </View>
            </View>
        ):
        (
            <View style={styles.ePage}>
           <View style={styles.ePage}>
             <>
             <View style={styles.question}>
             <Headline style={styles.title}>During the Past Week:
            </Headline>
             <Headline style={styles.title2}>{questionnaire[currentIndex].ID}. {questionnaire[currentIndex].Question} &nbsp;
             <TouchableOpacity onPress={()=>_onPressSpeech(questionnaire[currentIndex].Question)}> 
             <Image source={require("../assets/volumeBlack.png")} resizeMode='contain' style={{width:26,height:26, marginBottom:-6}}/></TouchableOpacity>
             </Headline></View>
             <Button 
                 disabled={showAnswers?true:false}
                 style={styles.buttonStyle}
                 mode="contained"
                 onPress={() => 
                    {
                        tempScore += questionnaire[currentIndex].Options[0].Weight
                        setScore(tempScore)
                        setShowAnswers(true)
                    
                    }}
                 >
                 <Text style={styles.btnText}> 
                 {questionnaire[currentIndex].Options[0].Value}
                 </Text>
                 </Button>
                 <Button 
                 disabled={showAnswers?true:false}
                 style={styles.buttonStyle}
                 mode="contained"
                 onPress={() => 
                    {
                        tempScore += questionnaire[currentIndex].Options[1].Weight
                        setScore(tempScore)
                        setShowAnswers(true)
                    
                    }}
                 >
                 <Text style={styles.btnText}> 
                 {questionnaire[currentIndex].Options[1].Value}
                 </Text>
                 </Button> 
                 <Button 
                 disabled={showAnswers?true:false} 
                 style={styles.buttonStyle}
                 mode="contained"
                 onPress={() => 
                    {
                        tempScore += questionnaire[currentIndex].Options[2].Weight
                        setScore(tempScore)
                        setShowAnswers(true)
                    
                    }}>
                 <Text style={styles.btnText}> 
                 {questionnaire[currentIndex].Options[2].Value}
                 </Text>
                 </Button>
                 <Button 
                 disabled={showAnswers?true:false} 
                 style={styles.buttonStyle}
                 mode="contained"
                 onPress={() => 
                    {
                        tempScore += questionnaire[currentIndex].Options[3].Weight
                        setScore(tempScore)
                        setShowAnswers(true)
                    
                    }}>
                 <Text style={styles.btnText}> 
                 {questionnaire[currentIndex].Options[3].Value} 
                 </Text>
                 </Button></>
                    
               <Button 
               disabled={showAnswers?false:true} 
               style={styles.buttonStyle1}
               mode="contained"
               onPress={() => nextQuestion(true)}> 
               <Surface
               style={{ 
                color:'white',
                backgroundColor:'#FF5959',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:-300,
                elevation:5,
                width:60,
                height:80,
                
                }}>
               <Image source={require("../assets/next.png")} resizeMode='contain' style={{width:40,height:30,marginBottom:20}}/>
               </Surface>
               </Button>
        </View>
              
           </View>
        )
    )
}

const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding:10,
        justifyContent:'space-around'
      
    },
    question: {
        backgroundColor: "#FFFF",
        height:200,
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
        fontSize: 28,
        marginTop:10,
        marginLeft:10,
        fontWeight: "bold",
        fontFamily:'Roboto',
        },
        title2: {
            textAlign:'left',
            marginLeft:'auto',
            marginRight:'auto',
            fontSize: 25,
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
    buttonStyle1:{backgroundColor:"#FF5959",padding:10,width:70,height:50, marginLeft:250, marginBottom:0},
    tab1: {
        top: 10,
        height: 540,
        width: 310,
        borderRadius: 20,
        padding: 20,
        alignSelf: "center",
        backgroundColor: "#FF5959",
        
    },
    tabText1: {
        top: 10,
        marginLeft:'auto',
        marginRight:'auto',
        fontSize: 25,
        fontWeight: "400",
        color:'white',
        padding:20,
        textAlign:'center'
    },
    
    tabBtn1: {
        top: 40,
        left: 50,
        width: 180,
        height: 80,
        backgroundColor: "#F9D157",
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
        color:'white',
        fontWeight:'900',
        marginLeft:'auto',
        marginRight:'auto',
        textAlign:'center'
    },
    tabContent: {
        flexDirection: "row",
        height: 120,
        top: 30
    },
    tabImg1: {
        height:130,
        width:130,
        marginLeft:'auto',
        marginRight:'auto'
    },
})



export default WellbeingQuestionBox;
