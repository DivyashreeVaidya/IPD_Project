/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */

/* eslint-disable quotes */
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
//import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import axios from 'axios';

const HelpSection = ({navigation}) => {



    let features = ['Set a medical appointment',
                    'Set an event',
                    'Add a medicine',
                    'Check Profile',
                    'Emergency Call',
                    'View Medicine Tab',
                    'View Appointment Tab',
                    "Read out Loud",
                    "Explore Section"];



    return (
        <View style={styles.medTab}>
            <NavBar txt={true} text="Help Section" navigation={navigation} />

                <View style={styles.content}>

                    <ScrollView>
                        {features.map(feature => {
                            let ind = {
                                ind: features.indexOf(feature)};
                            return(
                            <TouchableOpacity key={ind.ind} style={styles.med} onPress={() => navigation.navigate('Help Page', ind)} >
                                <Text style={styles.medName}>{feature}</Text>
                            </TouchableOpacity>);


                        })}
                    </ScrollView>


                </View>


        </View>
    );
};

export default HelpSection;

const styles = StyleSheet.create({
    medTab: {
        height: "100%",
        backgroundColor: "white",
        width: "100%",
    },

    content: {
        alignItems: "center",
        top: 10,
        height: "85%",
    },

    time: {
        borderBottomWidth: 1,
        borderBottomColor: "#DADADA",
        width: 320,
        margin: 10,
    },

    day: {
        fontSize: 18,
        fontWeight: "300",
        left: 10,
    },

    med: {
        backgroundColor: "#F9D157",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        width: 320,
        margin: 5,
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    medName: {
        fontWeight: "500",
        fontSize: 18,
    },

    dose: {
        fontSize: 14,
        fontWeight: "400",
    },

    reason: {
        fontSize: 12,
        fontWeight: "100",
    },
});
