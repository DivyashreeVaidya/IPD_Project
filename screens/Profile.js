/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import NavBar from '../components/NavBar';
//import Footer from '../components/Footer';
import axios from 'axios';

const Profile = ({navigation}) => {



    const [info, setInfo] = useState([]);

    useEffect(() => {



        async function getData() {

            let token = "7029af283983bfd69a388d0d7740619bd151962b";

            await axios.get('https://6525-2402-3a80-6c2-6b2e-a473-385c-fe0b-4b9d.in.ngrok.io/more_info/', {
                headers: {
                    'Authorization': `Token ${token}` ,
                },
            })
                .then(res => setInfo(res.data))
                .catch(err => console.log(err));
        }

       getData();

    }, []);


    return (
        <View style={styles.profile}>
            <NavBar txt={true} text="My Profile" navigation={navigation} />

            <ScrollView>
                <View >
                    <View style={styles.img} ></View>
                    <Text style={styles.name}>{info.first_name} {info.last_name}</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>AGE</Text>
                    <Text style={styles.info}>{info.age} yrs</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>GENDER</Text>
                    <Text style={styles.info}>{info.gender}</Text>
                </View>


                <View style={styles.content}>
                    <Text style={styles.title}>CONTACT</Text>
                    <Text style={styles.info}>{info.user_contact}</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>ADDRESS</Text>
                    <Text style={styles.info}>{info.user_address}</Text>
                </View>

            </ScrollView>
        </View>
    );
};

export default Profile

const styles = StyleSheet.create({
    profile: {
        height: "100%",
        backgroundColor: "white",
        width: "100%",
    },

    img: {
        height: 90,
        width: 90,
        alignSelf: "center",
        borderRadius: 100,
        backgroundColor: "#C4C4C4",
    },

    name: {
        fontSize: 28,
        alignSelf: "center",
        fontWeight: "300",
        margin: 10,
    },

    content: {
        margin: 10,
       height: 70,
       width: 320,
       backgroundColor: "#F9D157",
       borderRadius: 10,
       alignSelf: "center",
    },

    title: {
        left: 20,
        top: 10,
        fontSize: 12,
        fontWeight: "300",
    },

    info: {
        left: 20,
        top: 15,
        fontSize: 16,
        fontWeight: "500",
    },
})
