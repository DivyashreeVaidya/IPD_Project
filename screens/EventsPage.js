/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const EventsPage = ({navigation}) => {

    function apptHandler () {
        navigation.navigate('Add Appointment');
    }

    function oEventHandler () {
        navigation.navigate('Add Event');
    }


    return (
        <View style={styles.ePage}>
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
        backgroundColor: "#F9D157",
    },
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

export default EventsPage;
