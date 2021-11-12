/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, Image, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Surface, Button, Headline, shadow } from 'react-native-paper';
import Swiper from 'react-native-swiper'
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { takePicture } from 'react-native-camera-hooks/src/takePicture';
import { recordVideo } from 'react-native-camera-hooks/src/recordVideo';

const ReadingGlasses = ({navigation}) => {
    function scanHandler () {
        navigation.navigate('Scan');
    }

    // const [
    //     { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
    //     {
    //       toggleFacing,
    //       touchToFocus,
    //       textRecognized,
    //       facesDetected,
    //       takePicture,
    //       recordVideo,
    //       resumePreview,
    //       setIsRecording,
    //     },
    //   ] = useCamera(initialProps);
    //   const resume = async () => { 
    //       const r1 = await resumePreview({cameraRef})
    //     return r1}
    
    //   const options = { quality: 0.5, base64: true };
    // const takePicture = async function({cameraRef},options) {
    //     const data = await camera.takePictureAsync(options);
    //     //  eslint-disable-next-line
    //     console.log(data.uri);
    //   };
    return (
        <View style={styles.ePage}>
         <Swiper style={styles.wrapper} showsButtons loop={false}>
         <View testID="Hello" style={styles.slide1}>
          <Image style={styles.hImg} source={require("../assets/reading1.jpg")}/> 
          <Headline style={styles.title}>Strain your eyes no more.</Headline>
         </View>
        <View testID="Beautiful" style={styles.slide2}>
        <Image style={styles.hImg} source={require("../assets/reading2.jpg")}/>
        <Headline style={styles.title2}>Scan anywhere, anytime.</Headline>
        {/* <RNCamera
                      ref={cameraRef}
                      autoFocusPointOfInterest={autoFocusPoint.normalized}
                      type={type}
                      ratio={ratio}
                      style={{ flex: 1 }}
                      autoFocus={autoFocus}
                      onTextRecognized={textRecognized}
                      onFacesDetected={facesDetected}> */}
        <TouchableOpacity onPress={
            // async () => { 
            // try {
            // resume()
            //   const data = await takePicture();
            //   console.log(data);
            //   console.log("text recognised="+textRecognized)
            // } catch (error) {
            //   console.warn(error);
            // }} 
            scanHandler}>
            
                   <Surface
                   style={{
                    width: 120,
                    height: 80,
                    color:'white',
                    marginLeft:'auto',
                    marginRight:'auto',
                    bottom:-20,
                    padding:15,
                    backgroundColor: '#FF5959',
                    elevation:5,
                    borderRadius:40}}>
                     <Image source={require("../assets/camera.png")}
                    resizeMode='contain'
                    style={{width:40,height:40,marginRight:'auto',marginLeft:'auto',marginBottom:'auto',marginTop:'auto'}}/>
                     </Surface></TouchableOpacity>               
        </View>
        </Swiper>      
        </View>
    )
}


const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:20,
        },
        shadowOpacity:1,
        shadowRadius:3.5,
        elevation:8
    },
    ePage: {
        flex: 1,
        backgroundColor: "#F9D157",
        justifyContent:'space-around',
        
    },
    wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9d157',
    top:-25
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9d157',
    top:17
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
    hImg: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:-70,
        width:350,
        height:300,
        ...shadow
    },    
    title: {
        textAlign:'left',
        fontSize: 40,
        marginTop:35,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7},
        title2: {
            textAlign:'right',
            right:-30,
            fontSize: 40,
            marginTop:35,
            fontWeight: "bold",
            fontFamily:'Roboto',
            paddingTop:7},
    btnText:{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            paddingBottom:10
        },
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:120,height:40,
    marginLeft:'auto',
    marginRight:'auto'}
})

export default ReadingGlasses;
