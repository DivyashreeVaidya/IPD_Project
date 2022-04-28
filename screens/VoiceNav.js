/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

   
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import SpeechToText from 'react-native-google-speech-to-text';


const VoiceNav = ({navigation}) => {

  const [result, setResult] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleOkay = () => {
    if(result === "add medicines"){
      navigation.navigate('Add Meds')
      // console.log("True")
    }else if(result === "add appointment"){
      navigation.navigate('Add Appointment')
      // console.log("True")
    }else if(result === "add event"){
      navigation.navigate('Add Event')
      // console.log("True")
    }else if(result === "appointment tab"){
      navigation.navigate('ApptTab')
      // console.log("True")
    }else if(result === "explore"){
      navigation.navigate('Content Library')
      // console.log("True")
    }else if(result === "calendar"){
      navigation.navigate('Calendar')
      // console.log("True")
    }else if(result === "event tab"){
      navigation.navigate('ApptTab')
      // console.log("True")
    }else if(result === "help section"){
      navigation.navigate('Help Section')
      // console.log("True")
    }else if(result === "medicine tab"){
      navigation.navigate('MedTab')
      // console.log("True")
    }else if(result === "read out loud"){
      navigation.navigate('Scan')
      // console.log("True")
    }
  }
  

  const startRecording = async () => {
    
    setLoading(true);
    let speechToTextData = null;
        try {
            speechToTextData = await SpeechToText.startSpeech('Try saying something', 'en_IN');
            // console.log('speechToTextData: ', speechToTextData);
            setResult(speechToTextData);
            setLoading(false);
          
 
        } catch (error) {
            console.log('error: ', error);
        }
}

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.headingText}>Speech Recoginition</Text>
        <View style={styles.textInputStyle}>
          {/* <TextInput
            value={result}
            placeholder="your text"
            style={{ flex: 1 }}
            onChangeText={text => setResult(text)}
          /> */}
          <TextInput
            value={result}
            placeholder="your text"
            style={{ color: "black" }}
          />
          {isLoading ? <TouchableOpacity
              onPress={startRecording}
            >
              <Image
                source={require("../assets/mic-on.png")}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>

            :
            
            <TouchableOpacity
              onPress={startRecording}
            >
              <Image
                source={require("../assets/mic-off.png")}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>}

            
        </View>
        {/* <Text style={{top:50, fontSize: 24}}>{result}</Text> */}

        <TouchableOpacity onPress={handleOkay} style={styles.tabBtn1}><Text  >Okay</Text></TouchableOpacity>

        {/* <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 24,
            backgroundColor: 'red',
            padding: 8,
            borderRadius: 4
          }}
          onPress={stopRecording}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Stop</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  headingText: {
    alignSelf: 'center',
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26
  },
  tabBtn1: {
    top: 10,
    width: 100,
    height: 50,
    marginBottom: 50,
    alignSelf: "center",
    backgroundColor: "#FF5959",
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
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 48,
    borderRadius: 20,
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  }
});

export default VoiceNav;
