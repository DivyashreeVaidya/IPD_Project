/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';

//import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

  
const event_details = (props) => {

    const backHandler = () => {
        props.navigation.navigate('apptTab');
    };

    return (
        <View style={styles.container}>
            
            <NavBar txt = {true} text="Event Details" navigation={props.navigation} />

            <View style={styles.content}>
                <View style={styles.tab1}>
                    <Text style={styles.info}>Event</Text>
                    <Text style={styles.title}>{props.route.params.event_name}</Text>

                    <Text style={styles.info}>Date</Text>
                    <Text style={styles.title}>{props.route.params.event_date}</Text>

                    <Text style={styles.info}>Time</Text>
                    <Text style={styles.title}>{props.route.params.time}</Text>

                    <Text style={styles.info}>Additional Note</Text>
                    <Text style={styles.title}>{props.route.params.additional_fields}</Text>
                    
                </View>

                <TouchableOpacity onPress={backHandler} style={styles.tabBtn1}>
                    
                            <Text style={styles.btnText1} >BACK</Text>
                        
                </TouchableOpacity>
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
    backgroundColor: "#F9D157",
    opacity: 0.8,
    height: "100%",
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
    fontSize: 18,
    marginBottom: 20,
},

info: {
    fontSize: 14,
    fontWeight: "300",
},

tabBtn1: {
    top: 80,
    width: 100,
    height: 50,
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


});

export default event_details;
