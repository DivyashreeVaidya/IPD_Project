/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { ScrollView, Image, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Surface, Button, Headline, shadow } from 'react-native-paper';
import Swiper from 'react-native-swiper'
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { takePicture } from 'react-native-camera-hooks/src/takePicture';
import { recordVideo } from 'react-native-camera-hooks/src/recordVideo';
import MlkitOcr from 'react-native-mlkit-ocr';
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

        // For IMage picker & react-native tesseract ocr
        // const [isLoading, setIsLoading] = useState(false);
        // const [progress, setProgress] = useState(0);
        // const [imgSrc, setImgSrc] = useState('');
        // const [text, setText] = useState('');
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
              //setImgSrc(data.uri);
              //await recognizeTextFromImage(data.uri);
            const resultFromUri = await MlkitOcr.detectFromUri(data.uri);
               console.log('Text Recognition On-Device', resultFromUri);
            } catch (error) {
              console.warn(error);
            }}}>
                     <Image source={require("../assets/camera.png")}
                    resizeMode='contain'
                    style={{width:40,height:40,marginRight:'auto',marginLeft:'auto',marginBottom:'auto',marginTop:'auto'}}/>
                     
                     </TouchableOpacity>
                     </Surface> 
                     </RNCamera>   



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
    btnText:{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            paddingBottom:10
        },
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:120,height:40,
    marginLeft:'auto',
    marginRight:'auto'},
})

export default ScannerCam;
