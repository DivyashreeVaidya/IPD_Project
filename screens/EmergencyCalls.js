/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Headline, Button, Surface } from 'react-native-paper';
import ERcall from '../components/ERcall';

const EmergencyCalls = ({navigation}) => {

    function videoHandler () {
        navigation.navigate('Video Library');
    }

    function audioHandler () {
        navigation.navigate('Audio Library');
    }


    return (
        // <View style={styles.ePage}>
        //       <Headline style={styles.title}>Emergency Contacts</Headline>
        //       <View style={styles.med}>
        //           <Headline styles={styles.subtitle}>
        //           Contact #1:</Headline>
        //           </View>
        //       <ERcall/> 
        // </View>

        <View style={styles.medTab}>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.time}>
                        <Text style={styles.day}>Emergency Contacts</Text>
                    </View>
                        <View style={styles.med}>
                            <Text style={styles.medName}>Contact Name</Text>
                            <Text style={styles.dose}>+91 9867919668</Text>
                            <Text style={styles.reason}>Mobile</Text>
                            <ERcall/> 
                        </View>
                        <View style={styles.med}>
                            <Text style={styles.medName}>Contact Name</Text>
                            <Text style={styles.dose}>+91 112233445</Text>
                            <Text style={styles.reason}>Mobile</Text>
                            <ERcall/> 
                        </View>
                        <View style={styles.med}>
                            <Text style={styles.medName}>Contact Name</Text>
                            <Text style={styles.dose}>+91 12345678</Text>
                            <Text style={styles.reason}>Mobile</Text>
                            <ERcall/> 
                        </View>
                        <View style={styles.med}>
                            <Text style={styles.medName}>Contact Name</Text>
                            <Text style={styles.dose}>+91 1223455678</Text>
                            <Text style={styles.reason}>Mobile</Text>
                            <ERcall/> 
                        </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#F9D157",
       
    },
    title: {
        textAlign:'left',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize: 25,
        marginTop:40,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7},
        subtitle: {
            textAlign:'left',
            left:60,
            fontSize: 22,
            marginTop:20,
            fontWeight: "bold",
            fontFamily:'Roboto',
            paddingTop:7},
            med: {
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: "#F9D157",
                width: 320,
                margin: 5,
                borderRadius: 10,
                padding: 10,
            },
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:300,height:65,
    marginLeft:'auto',
    marginRight:'auto', marginBottom:0},
    medTab: {
        height: "100%",
        backgroundColor: "white",
        width: "100%",
    },

    content: {
        alignItems: "center",
    },

    time: {
        borderBottomWidth: 1,
        borderBottomColor: "#DADADA",
        width: 320,
        margin: 10,
    },

    day: {
        fontSize: 22,
        fontWeight: "300",
        left: 10,
    },

    med: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#F9D157",
        width: 320,
        margin: 5,
        borderRadius: 10,
        padding: 10,

    },

    medName: {
        fontWeight: "500",
        fontSize: 22,
        top:20
    },

    dose: {
        fontSize: 22,
        fontWeight: "400",
        top:20
    },

    reason: {
        fontSize: 18,
        fontWeight: "100",
        top:20
    },
})

export default EmergencyCalls;
