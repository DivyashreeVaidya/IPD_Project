/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */

/* eslint-disable quotes */
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
//import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import axios from 'axios';

const MedTab = ({navigation}) => {


    const [meds, setMeds] = useState([]);

    useEffect(() => {



        async function getData() {

            let token = "7029af283983bfd69a388d0d7740619bd151962b";

            await axios.get('https://6525-2402-3a80-6c2-6b2e-a473-385c-fe0b-4b9d.in.ngrok.io/medicine/', {
                headers: {
                    'Authorization': `Token ${token}` ,
                },
            })
                .then(res => setMeds(res.data))
                .catch(err => console.log(err));
        }

       getData();

    }, []);

    return (
        <View style={styles.medTab}>
            <NavBar txt={true} text="Medicine Tab" navigation={navigation} />

            <ScrollView >
                <View style={styles.content}>
                    <View style={styles.time}>
                        <Text style={styles.day}>Morning</Text>

                    </View>

                    {meds.map(med => {

                        if (med.morning_dose !== 0) {
                            return(
                        <TouchableOpacity key={med.id} style={styles.med} onPress={() => navigation.navigate('Med_details', med)} >
                            <Text style={styles.medName}>{med.med_name}</Text>
                            <Text style={styles.dose}>Dose: {med.morning_dose}</Text>
                            <Text style={styles.reason}>{med.reason}</Text>
                        </TouchableOpacity>);
                        }


                    })}

                    {/* <TouchableOpacity style={styles.med} onPress={() => navigation.navigate('Med_details')} >
                        <Text style={styles.medName}>Med Name</Text>
                        <Text style={styles.reason}>Reason</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.med}>
                        <Text style={styles.medName}>Med Name</Text>
                        <Text style={styles.reason}>Reason</Text>
                    </TouchableOpacity> */}
                </View>


                <View style={styles.content}>
                    <View style={styles.time}>
                        <Text style={styles.day}>Noon</Text>

                    </View>

                    {meds.map(med => {

                        if (med.noon_dose !== 0) {
                            return(
                        <TouchableOpacity key={med.id} style={styles.med} onPress={() => navigation.navigate('Med_details', med)} >
                            <Text style={styles.medName}>{med.med_name}</Text>
                            <Text style={styles.dose}>Dose: {med.noon_dose}</Text>
                            <Text style={styles.reason}>{med.reason}</Text>
                        </TouchableOpacity>);
                        }


                        })}

                </View>

                <View style={styles.content}>
                    <View style={styles.time}>
                        <Text style={styles.day}>Night</Text>

                    </View>

                    {meds.map(med => {

                        if (med.evening_dose !== 0) {
                            return(
                        <TouchableOpacity key={med.id} style={styles.med} onPress={() => navigation.navigate('Med_details', med)} >
                            <Text style={styles.medName}>{med.med_name}</Text>
                            <Text style={styles.dose}>Dose: {med.evening_dose}</Text>
                            <Text style={styles.reason}>{med.reason}</Text>
                        </TouchableOpacity>);
                        }


                        })}

                </View>


            </ScrollView>
        </View>
    );
};

export default MedTab;

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
