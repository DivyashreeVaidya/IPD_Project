/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */



import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
// import Voice from '@react-native-voice/voice';


export default function NavBar({txt, text, navigation, color}) {

    const [info, setInfo] = useState([]);

    // const [result, setResult] = useState([]);
    // const [recognied, setRecognied] = useState('');
    // const [pitch, setPitch] = useState('');
    // const [error, setError] = useState('');
    // const [end, setEnd] = useState('');
    // const [started, setStarted] = useState('');
    // const [partialResult, setPartialResult] = useState([]);

    // const [isLoading, setLoading] = useState(false);
    // const [micSection, setMicSection] = useState(false);

    useEffect(() => {



        async function getData() {

            let token = "a5f10b1edaa3bdb7ce4dde6767d2a6ccf34ab831";

            await axios.get('http://ipdprojectchadi.pythonanywhere.com/more_info/', {
                headers: {
                    'Authorization': `Token ${token}` ,
                },
            })
                .then(res => setInfo(res.data))
                .catch(err => console.log(err));
        }

       getData();

       
    //    console.log(micSection);
    //     Voice.onSpeechStart = onSpeechStart;
    //     Voice.onSpeechEnd = onSpeechEnd;
    //     Voice.onSpeechError = onSpeechError;        
    //     Voice.onSpeechRecognized = onSpeechRecognized;
    //     Voice.onSpeechResults = onSpeechResults;
    //     Voice.onSpeechPartialResults = onSpeechPartialResults;
    //     Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    //    return () => {
    //      Voice.destroy().then(Voice.removeAllListeners);
    //    }


    }, []);


    // function onSpeechStart(e) {
    //     console.log('onSpeechStart: ', e);
    //     setStarted('√')
    //   }

    //   function onSpeechResults(e) {
    //     console.log('onSpeechResults: ', e);
    //     setResult(e.value)
    //   }

    //   const onSpeechEnd = (e) => {
    //     setLoading(false)
    //     console.log("stop handler", e)
    //     setEnd('√')
    //   }

    //   const onSpeechRecognized = (e) => {
      
    //     console.log("onSpeechRecognized:", e)
    //     setRecognied('√')
    //   }

    //   const onSpeechError = (e) => {
      
    //     console.log("onSpeechError: ", e)
    //     setError(JSON.stringify(e.error))
    //   }

    //   function onSpeechPartialResults(e) {
    //     console.log('onSpeechPartialResults: ', e);
    //     setPartialResult(e.value)
    //   }

    //   function onSpeechVolumeChanged(e) {
    //     console.log('onSpeechVolumeChanged: ', e);
    //     setPitch(e.value)
    //   }

    // const handleMicOn = async () => {

    //     setRecognied('')
    //     setPartialResult([])
    //     setPitch('')
    //     setError('')
    //     setStarted('')
    //     setResult([])
    //     setEnd('')
        
    //     setMicSection(true)
    //     setLoading(true)

    //     try {
    //       await Voice.start('en-Us')
    //     } catch (err) {
    //       console.log("error raised", err)
    //     }
    // }

    // const handleMicOff = async () => {
    //     try {
    //         await Voice.stop()
    //       } catch (err) {
    //         console.log("error raised", err)
    //       }
    //       setLoading(false)
    // }

    // const destroyRecognizer = async () => {
    //     //Destroys the current SpeechRecognizer instance
    //         try {
    //           await Voice.destroy();
    //         } catch (e) {
    //           console.error(e);
    //         }
    //       setPitch('')
    //       setError('')
    //       setStarted('')
    //       setResult([])
    //       setPartialResult([])
    //       setEnd('')
    //     };

    // const handleOkay = () => {
    //     setMicSection(false)
    //     // navigation.navigate(result)
    //     console.log("okay")
    // }


    const user = {
        name: info.username,
        age: info.age,
    };

    
    return (
        <View>
            <View style={color ? styles.header1 : styles.header}>

                <TouchableOpacity onPress={() => navigation.navigate('SideMenu', user)}>
                    <Image style={styles.menu} source={require("../assets/menu-blk.png")}/>
                </TouchableOpacity>
                
                {!txt ? 
                    <View style={styles.content}>
                        <Text style={styles.hText}>Heyy {info.username}!</Text>
                        <TouchableOpacity onPress = {() => navigation.navigate('Voice Nav')} style={{alignSelf: 'center', bottom: 20, left: 40}}>
                            <Image source={require("../assets/mic-off.png")}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hImg} onPress={() => navigation.navigate('Help Section')}>
                            <Image source={require("../assets/Help.png")}/>
                        </TouchableOpacity>
                    </View>
                    
                : 
                    <Text style={styles.hText1}>{text}</Text>
                }
                
            </View>

            {/* {micSection &&  */}
                {/* <View style={{height: 150}}>
                    <View style={styles.textInputStyle}>
                        <TextInput
                            value={result}
                            placeholder="your text"
                            style={{ flex: 1 }}
                            onChangeText={txt_val => setResult(txt_val)}
                        />

                    {isLoading ? <TouchableOpacity onPress={() => handleMicOff}>
                            <Image
                                source={require("../assets/mic-on.png")}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>

                    :

                    <TouchableOpacity onPress={() => handleMicOn}>
                            <Image
                                source={require("../assets/mic-off.png")}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>}
                        
                        
                        
                    </View>
                    {/* <TouchableOpacity
                        onPress={destroyRecognizer}
                        style={{ flex: 1, backgroundColor: 'red' }}>
                        <Text style={styles.action}>Destroy</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            marginTop: 24,
                            backgroundColor: 'red',
                            padding: 8,
                            borderRadius: 4,
                        }}
                        onPress={handleOkay}
                        >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Okay</Text>
                    </TouchableOpacity>
                </View>  */}

            {/* } */}

            
        </View>
    );
}


const styles = StyleSheet.create({
        
    header : {
        height: 70,
        backgroundColor: "white",
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    header1 : {
        height: 70,
        backgroundColor: "#F9D157",
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        opacity: 0.8,
    },

    menu:{
        alignSelf: "flex-start",
        top: 10,
        left: 10,
    },

    content: {
        justifyContent: "space-between",
        width: 290,
    },
    
    hText: {
        top: 10,
        left: 10,
        fontSize: 20,
        fontWeight: "500",
    },

    hText1: {
        position: "absolute",
        alignSelf: "center",
        left: 70,
        fontSize: 20,
        fontWeight: "500",
    },
    
    hImg: {
        alignSelf: "flex-end",
        bottom: 50,
        marginRight: 10,
    },
    textInputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        color: "black",
        height: 48,
        borderRadius: 20,
        margin: 10,
        paddingHorizontal: 16,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.4,
      },

   
});
