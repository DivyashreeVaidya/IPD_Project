/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Surface, Text, Snackbar, Headline } from 'react-native-paper';
import Swiper from 'react-native-swiper'
const OpeningPage = ({navigation}) => {

    function registerHandler () {
        navigation.navigate('Register');
    }


    return (
        <View style={styles.ePage}>
           <Image style={styles.logo} source={require("../assets/logo_main_nobg.png")}/>
           <Swiper styles={styles.wrapper} loop={true} autoplay={true}>
           <View testID="Hello" style={styles.slide1}>
           <Image style={styles.hImg} source={require("../assets/opening_page-removebg-preview.png")}/>
          <Headline style={styles.title2}> Personal Assistant &amp; Companion </Headline>
        
         </View>
        <View testID="Hello" style={styles.slide2}>
        <Image style={styles.hImg} source={require("../assets/oldcouple.png")}/>
        <Headline style={styles.title2}>Maintain your safety, health &amp; well-being with ease.</Headline>
           </View>
           <View testID="Hello" style={styles.slide1}>
           <Image style={styles.hImg2} source={require("../assets/records3.png")}/>
          <Headline style={styles.title2}>Store all medical records &amp; data in 1 place</Headline>
         </View>
         <View testID="Hello" style={styles.slide1}>
           <Image style={styles.hImg1} source={require("../assets/reminder2.png")}/>
          <Headline style={styles.title2}>Set daily reminders, never miss a dose </Headline>
         </View>
         <View testID="Hello" style={styles.slide1}>
           <Image style={styles.hImg2} source={require("../assets/records1.jpg")}/>
          <Headline style={styles.title2}>Keep track of appointments &amp; other important dates</Headline>
         </View>
         <View testID="Hello" style={styles.slide1}>
           <Image style={styles.hImg3} source={require("../assets/medicinesave1.png")}/>
          <Headline style={styles.title2}>Scan &amp; auto-save new medicines instantly </Headline>
         </View>
         <View testID="Hello" style={styles.slide1}>
           <Image style={styles.hImg} source={require("../assets/emergency.png")}/>
          <Headline style={styles.title2}>Auto-send alerts/calls to loved ones in emergencies</Headline>
         </View>
         <View testID="Hello" style={styles.slide1}>
           <Image style={styles.hImg2} source={require("../assets/read-aloud1.png")}/>
           <Headline style={styles.title2}>Reading Glasses {'\n'}</Headline>
          <Headline style={styles.title}> Scan &amp; read-aloud illegible text with just one tap </Headline>
         </View>
         <View testID="Hello" style={styles.slide1}>
           <Image style={styles.hImg2} source={require("../assets/content_slide.png")}/>
           <Headline style={styles.title2}>Content Library {'\n'}</Headline>
          <Headline style={styles.title}>Enjoy 1500+ hours of personalised audio &amp; visual content</Headline>
         </View>
           </Swiper>
           
           {/* <Button  
               style={{
                width: 300,
                height: 100,
                color:'white',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:120,
                padding:15,
                backgroundColor: '#FF5959'}}
                mode="contained" 
                onPress={registerHandler} 
               > Test button</Button> */}
               <TouchableOpacity onPress={registerHandler}>
                   <Surface
                   style={{
                    width: 300,
                    height: 100,
                    color:'white',
                    marginLeft:'auto',
                    marginRight:'auto',
                    marginBottom:80,
                    padding:15,
                    backgroundColor: '#FF5959',
                    elevation:5,
                    borderRadius:30}}>
               <Text style={styles.btnText}>Create an Account {'\n'}Today </Text></Surface></TouchableOpacity>
               
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#f9d157",
        
    },
    hImg: {
        marginLeft:'auto',
        marginRight:'auto',
        paddingLeft:100,
        paddingRight:100,
        marginTop:-40,
        width:240,
        height:240
    },  
    hImg1: {
        marginLeft:'auto',
        marginRight:'auto',
        paddingLeft:100,
        paddingRight:100,
        marginTop:-40,
        width:240,
        height:280
    }, 
    hImg2: {
        marginLeft:'auto',
        marginRight:'auto',
        paddingLeft:100,
        paddingRight:100,
        marginTop:-40,
        width:340,
        height:240
    }, 
    hImg3: {
        marginLeft:'auto',
        marginRight:'auto',
        paddingLeft:100,
        paddingRight:100,
        marginTop:-40,
        width:340,
        height:287
    },   
    logo: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20,
        width:130,
        height:130
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9d157',
        top:40,
        
      },
      slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9d157',
        top:40
      },
      title: {
        textAlign:'center',
        fontSize: 21,
        marginTop:-40,
        left:4,
        paddingLeft:25,
        paddingRight:25,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7},
        title2: {
            textAlign:'center',
            fontSize: 32,
            marginTop:26,
            paddingLeft:20,
            paddingRight:20,
            marginLeft:'auto',
            marginRight:'auto',
            fontWeight: "bold",
            fontFamily:'Roboto',
            paddingTop:7},
    btnText:{
        color:'white',
        fontSize:23,
        fontFamily:'Roboto',
        textAlign:'center'
    },
    wrapper:{},
    container1: {
        top: 50,
        height: 200,
        width: 200,
        borderWidth: 8,
        alignSelf: "center",
        borderColor: "#FF5959",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    cText1: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
    },


    container2: {
        top: 90,
        height: 200,
        width: 200,
        borderWidth: 8,
        alignSelf: "center",
        borderColor: "#FF5959",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    cText2: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
    },

})

export default OpeningPage;
