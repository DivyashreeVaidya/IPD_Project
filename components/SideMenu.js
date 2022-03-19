/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */



import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,DevSettings } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default function SideMenu(props) {

    const logoutHandler = async(key) => {
        try {
            await AsyncStorage.removeItem(key);
            console.log(true);
            const isToken = await AsyncStorage.getItem(key);
            console.log(isToken);
            
        }
        catch (exception) {
            console.log(false);
        }
        DevSettings.reload();
    }; 
    return (
        <View style={styles.sideBar}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
                    <Image style={styles.close} source={require("../assets/Close.png")}/>
                </TouchableOpacity>

                <Text style={styles.name} >{props.route.params.name}</Text>
                <Text style={styles.age} >{props.route.params.age} yrs</Text>
            </View>

            <ScrollView style={{height: 450,backgroundColor: "white"}}>
                <TouchableOpacity style={styles.content} onPress={() => props.navigation.navigate('Profile')}>
                    <Image style={styles.contentImg} source={require("../assets/Profile.png")}/>
                    <Text style={{"left": 60, "fontSize": 20}}>My Profile</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.content} >
                    <Image style={styles.contentImg} source={require("../assets/emerCall.png")}/>
                    <Text style={styles.contentTxt}>Emergency Contact</Text>
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.content} onPress={() => props.navigation.navigate('MedTab')}>
                    <Image style={{"left": 20, "height": 30, "resizeMode": "contain",opacity: 0.6}} source={require("../assets/med.png")}/>
                    <Text style={{"left": 40, "fontSize": 20}}>Medicine Tab</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress={() => props.navigation.navigate('ApptTab')}>
                    <Image style={{"left": -85, "height": 30, "resizeMode": "contain",opacity: 0.6}} source={require("../assets/Calendar.png")}/>
                    <Text style={{"left": -165, "fontSize": 20}}>Appointment Tab</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} >
                    <Image style={{"right":210,"height": 30, "resizeMode": "contain",opacity: 0.6}} source={require("../assets/explore.png")}/>
                    <Text style={{right:420,fontSize: 20}}>Explore</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.content} onPress={() => props.navigation.navigate('CalendarPage')}>
                    <Image style={{"right":84,"height": 30, "resizeMode": "contain", opacity: 0.6}} source={require("../assets/Calendar.png")}/>
                    <Text style={{right:165,fontSize: 20}}>Calendar</Text>
                </TouchableOpacity>
                
                

                <TouchableOpacity style={styles.content} onPress={(e)=>logoutHandler('@token')}>
                    <Image style={styles.contentImg} source={require("../assets/logout.png")}/>
                    <Text style={styles.contentTxt}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>

            
            
        </View>
    );
}


const styles = StyleSheet.create({

    top:{
        width: "100%",
        height: 180,
        backgroundColor: "#F9D157",
        opacity: 0.8,
    },

    close: {
        top: 20,
        alignSelf: "flex-end",
        right: 20,
        height:20,
        width: 20,
    },

    name: {
        top: 70,
        left: 20,
        fontSize: 34,
    },

    age: {
        top: 70,
        left: 20,
        fontSize: 22,
        opacity: 0.7,
    },

    content: {
        height: 60,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    contentTxt: {
        left: 70,
        fontSize: 20,
    },

    contentImg: {
        left: 30,
        opacity: 0.6,
        height: 30,
        resizeMode: "contain",
    },
});
