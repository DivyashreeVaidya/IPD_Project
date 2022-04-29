/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
  } from 'react-native';

//import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
// import {NavigationContainer} from "@react-navigation/native";
// import {createNativeStackNavigator} from "@react-navigation/native-stack";

  
const HelpPage = (props) => {

    const backHandler = () => {
        props.navigation.navigate('Help Section');
    };


    

    let ind = props.route.params.ind;


    let features = ['Set a medical appointment',
                    'Set an event',
                    'Add a medicine',
                    'Check Profile',
                    'Emergency Call',
                    'View Medicine Tab',
                    'View Appointment Tab',
                    "Read out Loud",
                    "Explore Section"];
    
    let images = [['Med-appt-1', 'Med-appt-2', 'Med-appt-3'], 
                    ['other-eve-1', 'other-eve-2', 'oter-eve-3'],
                    ['add-med-1', 'add-med-2'],
                    ['chk-profile-1', 'chk-profile-2', 'chk-profile-3'],
                    ['Coming Soon!'],
                    ['med-tab-1', 'med-tab-2', 'med-tab-3'],
                    ['appt-tab-1', 'appt-tab-2', 'appt-tab-3'],
                    ['Coming Soon!'],
                    ['Coming Soon!']];
    

  
                      
    

    return (
        <View style={styles.container}>
            
            <NavBar txt = {true} text={features[ind]} navigation={props.navigation} />

            <View style={styles.content}>
                <ScrollView>
                    {images[ind].map( image => {
                        let img_name = `../assets/HelpImgs/${image}.png`;
                        let img = require(`../assets/HelpImgs/med-tab-1.png`);
                        if (image === "Coming Soon!"){
                            return (
                                <View style={styles.tab1}>
                                    <Text style={styles.title}>COMING SOON!</Text>
                                    
                                </View> );
                            
                        } else {
                            return (
                            <View key = {images[ind].indexOf(image) + 1} style={styles.tab1}>

                                <Text style={styles.info}>Step {images[ind].indexOf(image) + 1}</Text>
                                <View style={styles.img_content}>
                                    <Image style={styles.menu} source={img}/>
                                </View>
                                
                            </View>)
                        }                    
                        
                    }

                    )              
                                    
                    
                    }

                    
                    <TouchableOpacity onPress={backHandler} style={styles.tabBtn1}>
                        
                                <Text style={styles.btnText1} >BACK</Text>
                            
                    </TouchableOpacity>
                </ScrollView>
                
                

            </View>

        </View>
);
};

const styles = StyleSheet.create({
    
container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
},

content: {
    backgroundColor: "white",
    height: "90%",
},


tab1: {
    top: 30,
    width: 310,
    borderRadius: 20,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "#F9D157",
    
},

title: {
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 30,
    top: 120,
    alignSelf: "center",
},

info: {
    fontSize: 18,
    fontWeight: "500",
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

btnText1: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
},

menu: {
    marginTop: -50,
    width: 260,
    resizeMode: 'contain',
}


});

export default HelpPage;
