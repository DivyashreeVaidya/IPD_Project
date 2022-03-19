/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */

/* eslint-disable quotes */
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
//import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import axios from 'axios';

const ApptTab = ({navigation}) => {


    const [appts, setAppts] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {



        async function getData() {

            let token = "a5f10b1edaa3bdb7ce4dde6767d2a6ccf34ab831";

            await axios.get('http://ipdprojectchadi.pythonanywhere.com/appt/', {
                headers: {
                    'Authorization': `Token ${token}` ,
                },
            })
                .then(res => setAppts(res.data))
                .catch(err => console.log(err));


            await axios.get('http://ipdprojectchadi.pythonanywhere.com/other/', {
                headers: {
                    'Authorization': `Token ${token}` ,
                },
            })
                .then(res => setEvents(res.data))
                .catch(err => console.log(err));
        }

       getData();

    }, []);



    return (
        <View style={styles.medTab}>
            <NavBar txt={true} text="Appointment Tab" navigation={navigation} />

            <ScrollView >
                <View style={styles.content}>
                    <View style={styles.time}>
                        <Text style={styles.day}>Medical Appointments</Text>

                    </View>

                    {appts.map(appt => {

{/* change navigation to appt_details */}
                            return(
                        <TouchableOpacity style={styles.med} onPress={() => navigation.navigate('Appt_details', appt)} >
                            <Text style={styles.medName}>{appt.doc_name}</Text>
                            <Text style={styles.dose}>Date: {JSON.stringify(appt.date).substring(1, 11)}</Text>
                        </TouchableOpacity>);



                    })}

                </View>


                <View style={styles.content}>
                    <View style={styles.time}>
                        <Text style={styles.day}>Other events</Text>

                    </View>

                    {events.map(event => {

                            return(
                        <TouchableOpacity style={styles.med} onPress={() => navigation.navigate('Med_details', event)} >
                            <Text style={styles.medName}>{event.event_name}</Text>
                            <Text style={styles.dose}>Date: {event.event_date}</Text>
                        </TouchableOpacity>);


                        })}

                </View>


            </ScrollView>
        </View>
    );
};

export default ApptTab;

const styles = StyleSheet.create({
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
        fontSize: 18,
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
