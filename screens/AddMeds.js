/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import NavBar from '../components/NavBar';
import axios from 'axios';
import PushNotification from 'react-native-push-notification';

const AddMeds = ({navigation}) => {
    const [reason, setReason] = useState("");
    const [morndose, setMornDose] = useState("");
    const [noondose, setNoonDose] = useState("");
    const [evedose, setEveDose] = useState("");
    const [name, setName] = useState("");
    const [dura, setDura] = useState("");
    const [addNote, setAddNote] = useState("");

    async function handleAddMeds() {


        const medData = {
            med_name: name,
            morning_dose: parseInt(morndose, 10),
            noon_dose: parseInt(noondose, 10),
            evening_dose: parseInt(evedose, 10),
            reason: reason,
            routine: parseInt(dura, 10),
            additional_fields: addNote,
        };


        let token = "7029af283983bfd69a388d0d7740619bd151962b";

        await axios.post('https://35c1-58-84-61-72.in.ngrok.io/medicine/', medData, {
            headers: {
                'Authorization': `Token ${token}` ,
            },
        })
            .then(console.log("success"))
            .catch(err => console.log(err));
                
        setName('');
        setAddNote('');
        setMornDose('');
        setNoonDose('');
        setEveDose('');
        setReason('');
        setDura('');
    }
    

    const handleReminder = () => {
        var d = new Date(Date.now());
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000 * +5.5));
        var d1 = new Date();
        d1.setTime(nd.getTime() + 24 * 60 * 60 * 1000);
        

        if (parseInt(morndose, 10) > 0) {
            d1.setHours(8, 1, 1);
            PushNotification.localNotificationSchedule({
                channelId: "test-channel",
                title: "Appointment",
                message: name + " dose: " + parseInt(morndose, 10),
                date: d1,
                allowWhileIdle: true,
                repeatType: "day",
            });
        }

        if (parseInt(noondose, 10) > 0) {
            d1.setHours(1, 1, 1);
            PushNotification.localNotificationSchedule({
                channelId: "test-channel",
                title: "Appointment",
                message: name + " dose: " + parseInt(noondose, 10),
                date: d1,
                allowWhileIdle: true,
                repeatType: "day",
            });
        }

        if (parseInt(evedose, 10) > 0) {
            d1.setHours(6, 1, 1);
            PushNotification.localNotificationSchedule({
                channelId: "test-channel",
                title: "Appointment",
                message: name + " dose: " + parseInt(evedose, 10),
                date: d1,
                allowWhileIdle: true,
                repeatType: "day",
            });
        }


    };
    
    
    return (
        <View style={styles.container}>
            
            <NavBar txt={true} text={"Medicine Details"} navigation={navigation} color={"yellow"}/>

            <View style={styles.formbg}>
                    <Image source={require("../assets/form-bg.png")}/>
            </View>


            <View style={styles.content}>
                <ScrollView>
                    <Text style={styles.inpText}>Name</Text>
                    <TextInput style={styles.input} value={name} onChangeText={text => setName(text)}/>

                    <Text style={styles.inpText}>Morning Dose</Text>
                    <TextInput style={styles.input} value={morndose} onChangeText={text => setMornDose(text)} />

                    <Text style={styles.inpText}>Noon Dose</Text>
                    <TextInput style={styles.input} onChangeText={text => setNoonDose(text)} value={noondose}  />

                    <Text style={styles.inpText}>Evening Dose</Text>
                    <TextInput style={styles.input} onChangeText={text => setEveDose(text)} value={evedose}/>

                    <Text style={styles.inpText}>Reason</Text>
                    <TextInput style={styles.input} onChangeText={text => setReason(text)} value={reason}/>

                    <Text style={styles.inpText}>Duration</Text>
                    <TextInput style={styles.input} onChangeText={text => setDura(text)} value={dura}/>
                    

                    <Text style={styles.inpText}>Additional Note</Text>
                    <TextInput style={styles.input} onChangeText={text => setAddNote(text)} value={addNote}/>

                    <TouchableOpacity onPress={() => {handleAddMeds(); handleReminder();}} style={styles.btn}>                
                        <Text style={styles.btnText}>ADD</Text>                         
                    </TouchableOpacity>
                </ScrollView>

                

            </View>

            
            
        </View>
    );

};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "white",
},

formbg: {
    position: 'absolute',
    top:70,
},

content: {
    top: 20,
    elevation: 10,
    backgroundColor: "white",
    paddingTop: 20,
    alignSelf: "center",
    width: 300,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height:'80%',
},

inpText: {
    fontSize: 18,
    left: 20,
    fontWeight: "400",
    marginBottom: 5,
},

input: {
    height: 50,
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 5,
    color: "black",
    borderWidth: 1,
    borderColor: "grey",
},

btn: {
    top: 10,
    height: 60,
    width: 250,
    backgroundColor: "#FF5959",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom:30,
},

btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
},



});


export default AddMeds;
