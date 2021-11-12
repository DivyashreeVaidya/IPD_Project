/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { ScrollView, Image, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Surface, Button, Headline, shadow, Chip } from 'react-native-paper';
import Swiper from 'react-native-swiper'
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { takePicture } from 'react-native-camera-hooks/src/takePicture';
import { recordVideo } from 'react-native-camera-hooks/src/recordVideo';
import MlkitOcr from 'react-native-mlkit-ocr';
import Tts from 'react-native-tts';

//import ImagePicker from 'react-native-image-crop-picker';
// import ProgressCircle from 'react-native-progress-circle';
// import TesseractOcr, {
//     LANG_ENGLISH,
//     useEventListener,
//   } from 'react-native-tesseract-ocr';
//   const DEFAULT_HEIGHT = 500;
//   const DEFAULT_WITH = 600;
//   const defaultPickerOptions = {
//     cropping: true,
//     height: DEFAULT_HEIGHT,
//     width: DEFAULT_WITH,
//   };
    Tts.setDefaultLanguage('hi-IN');
    Tts.setDefaultRate(0.3)
    Tts.addEventListener('tts-start', event => console.log('start', event));
    Tts.addEventListener('tts-finish', event => console.log('finish', event));
    Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

const ScannerCam = ({initialProps}) => {
//const ScannerCam = ({navigation}) => {

    //For RNCamera-
    const [
        { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
        {
          toggleFacing,
          touchToFocus,
          textRecognized,
          facesDetected,
          takePicture,
          recordVideo,
          resumePreview,
          setIsRecording,
        },
      ] = useCamera(initialProps);
      const resume = async () => { 
          const r1 = await resumePreview({cameraRef})
        return r1}

        const _onPressSpeech = async (text) => {
          Tts.stop();
          Tts.getInitStatus().then(() => {
            {text.map((element) => (
              Tts.speak(element.text)
              ))}
          });
          console.log('i have spoken')
      }

        // For IMage picker & react-native tesseract ocr
        // const [isLoading, setIsLoading] = useState(false);
        // const [progress, setProgress] = useState(0);
         const [imgSrc, setImgSrc] = useState(null);
         const [imgWidth, setImgWidth] = useState(0);
         const [imgHeight, setImgHeight] = useState(0);
         const [text, setText] = useState([]);
         const [zoomValue, setZoomValue] = useState(0)
        // useEventListener('onProgressChange', (p) => {
        // setProgress(p.percent / 100);
        // });
    
        //For IMage picker & react-native tesseract ocr
        // const recognizeTextFromImage = async (path) => {
        //     setIsLoading(true);
        
        //     try {
        //         const tesseractOptions = {};
        //         const recognizedText = await TesseractOcr.recognize(
        //           path,
        //           LANG_ENGLISH,
        //           tesseractOptions,
        //         );
        //         setText(recognizedText);
        //       } catch (err) {
        //         console.error(err);
        //         setText('');
        //       }
          
        //       setIsLoading(false);
        //       setProgress(0);
        // }

    //   const options = { quality: 0.5, base64: true };
    // const takePicture = async function({cameraRef},options) {
    //     const data = await camera.takePictureAsync(options);
    //     //  eslint-disable-next-line
    //     console.log(data.uri);
    //   };


    //For Image Picker:
    // const recognizeFromPicker = async (options = defaultPickerOptions) => {
    //     try {
    //       const image = await ImagePicker.openPicker(options);
    //       setImgSrc({uri: image.path});
    //       await recognizeTextFromImage(image.path);
    //     } catch (err) {
    //       if (err.message !== 'User cancelled image selection') {
    //         console.error(err);
    //       }
    //     }
    //   };
    
    //   const recognizeFromCamera = async (options = defaultPickerOptions) => {
    //     try {
    //       const image = await ImagePicker.openCamera(options);
    //       setImgSrc({uri: image.path});
    //       await recognizeTextFromImage(image.path);
    //     } catch (err) {
    //       if (err.message !== 'User cancelled image selection') {
    //         console.error(err);
    //       }
    //     }
    //   };

    return (
        <View style={styles.ePage}> 
                     {!imgSrc?
                      <RNCamera
                      ref={cameraRef}
                      autoFocusPointOfInterest={autoFocusPoint.normalized}
                      type={type}
                      ratio={ratio}
                      style={{ flex: 1 }}
                      autoFocus={autoFocus}
                      onTextRecognized={textRecognized}
                      onFacesDetected={facesDetected}
                      playSoundOnCapture={true}>
                    <Surface
                    style={{
                    width: 120,
                    height: 80,
                    color:'white',
                    marginLeft:'auto',
                    marginRight:'auto',
                    bottom:-500,
                    padding:15,
                    backgroundColor: '#FF5959',
                    elevation:5,
                    borderRadius:40}}> 
        <TouchableOpacity 
        //disabled={isLoading}
        onPress={async () => { 
            try {
            resume()
              const data = await takePicture();
              console.log(data.uri);
              console.log("text recognised="+textRecognized)
              //await recognizeTextFromImage(data.uri);
            const resultFromUri = await MlkitOcr.detectFromUri(data.uri);
               console.log('Text Recognition On-Device', resultFromUri[0].text);
               setText(resultFromUri)
               setImgSrc({uri: data.uri});
               setImgWidth(data.width);
               setImgHeight(data.height);
              console.log("imgsrc value",imgSrc)
            } catch (error) {
              console.warn(error);
            }}}>
                     <Image source={require("../assets/camera.png")}
                    resizeMode='contain'
                    style={{width:40,height:40,marginRight:'auto',marginLeft:'auto',marginBottom:'auto',marginTop:'auto'}}/>
                     
                     </TouchableOpacity>
                     </Surface> 
                     </RNCamera> 
                     :
                     <>
                     <Text style={styles.subheader}>Source Image:</Text>
                     <Image source={imgSrc}
                     style={{width:290,height:250,marginRight:'auto',marginLeft:'auto',marginBottom:'auto',marginVertical: 15,
                     borderWidth:7,borderColor:'#ff5959',borderRadius:5}}/>
                     <Text style={styles.subheader2}>Detected Text:</Text>
                     <Surface style={styles.detectedTxt}>
                     <ScrollView style={styles.container}>
                      {text.map((element) => (
                       <Text style={styles.title}>"{element.text}"</Text>
                       ))}
                     </ScrollView>
                     </Surface>
                     <Surface
                    style={{
                    width: 160,
                    height: 66,
                    color:'white',
                    marginLeft:'auto',
                    marginRight:'auto',
                    bottom:30,
                    padding:15,
                    backgroundColor: '#FF5959',
                    elevation:5,
                    borderRadius:40}}>
                      <TouchableOpacity onPress={()=>_onPressSpeech(text)}>
                        <Text style={styles.btnText}>Read-Aloud </Text>
                      </TouchableOpacity>
                    </Surface>
                     </>
                     } 



{/* <Text style={styles.title}>Tesseract OCR example</Text>
      <Text style={styles.instructions}>Select an image source:</Text>
      <View style={styles.options}>
        <View style={styles.button}>
          <Button
            disabled={isLoading}
            title="Camera"
            onPress={() => {
              recognizeFromCamera();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            disabled={isLoading}
            title="Picker"
            onPress={() => {
              recognizeFromPicker();
            }}
          />
        </View>
      </View>
                     {imgSrc && (
                     
                     <View style={styles.imageContainer}>
                     <Image style={styles.image} source={imgSrc} />
                     {isLoading ? (
                     <ProgressCircle showsText progress={progress} />
                     ) : (
                     <Text>{text}</Text>
                     )}
                     </View>
                    
                    )}   */}
                </View>
            )
        }


const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            //height:20,
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
    container:{
      flexDirection:'row',
      flexBasis:190,
      flexWrap:'wrap'
    },
    detectedTxt:{
      width:330,
      height:170,
      left:26,
      bottom:45,
      backgroundColor:'white',
      borderRadius:8
    },
    btnText:{
            fontSize:21,
            fontWeight:'bold',
            color:'white',
            paddingBottom:10,
            marginRight:'auto',
            marginLeft:'auto',
        },
        title: {
            textAlign:'left',
            paddingLeft:10,
            fontSize: 21,
            //fontWeight: "bold"
            fontFamily:'Roboto',
            paddingTop:7,
            },
        subheader:{
          textAlign:'left',
          paddingLeft:34,
          fontSize: 18,
          fontWeight: "bold",
          fontFamily:'Roboto',
          top:7
        },
        subheader2:{
          textAlign:'left',
          paddingLeft:34,
          fontSize: 18,
          fontWeight: "bold",
          fontFamily:'Roboto',
          top:-53
        },
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:120,height:40,
    marginLeft:'auto',
    marginRight:'auto'},
})

export default ScannerCam;
