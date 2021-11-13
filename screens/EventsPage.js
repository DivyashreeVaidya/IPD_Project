/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import NavBar from '../components/NavBar';

const EventsPage = ({navigation}) => {

    function apptHandler () {
        navigation.navigate('Add Appointment');
    }

    function oEventHandler () {
        navigation.navigate('Add Event');
    }


    return (
        <View style={styles.ePage}>
            <NavBar  navigation={navigation} />
            <Image style={styles.Img} source={require("../assets/events_illus.png")}/>
            <Text style={styles.eText} >What type of event do you</Text>
            <Text style={styles.eText} >wish to add?</Text>

            <TouchableOpacity style={styles.container1} onPress={apptHandler}>
                <Text style={styles.cText1} >
                    Medical Appointment
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container2} onPress={oEventHandler}>
                <Text style={styles.cText2} >
                    Other Event
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "white",
    },

    Img: {
        alignSelf: "center",
        height: 200,
        top: 20,
    },

    eText: {
        fontSize: 22,
        fontWeight: "600",
        alignSelf: "center",
        top: 20,
    },

    container1: {
        top: 80,
        height: 60,
        width: 280,
        alignSelf: "center",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9d157",
    },

    cText1: {
        fontSize: 22,
        fontWeight: "400",
        textAlign: "center",
    },


    container2: {
        top: 100,
        height: 60,
        width: 280,
        alignSelf: "center",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9d157",
    },

    cText2: {
        fontSize: 22,
        fontWeight: "400",
        textAlign: "center",
    },

})

export default EventsPage;