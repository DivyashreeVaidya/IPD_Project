/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
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


        let token = "a5f10b1edaa3bdb7ce4dde6767d2a6ccf34ab831";

        await axios.post('http://ipdprojectchadi.pythonanywhere.com/medicine/', medData, {
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
            
            <NavBar txt={true} text={"Medicine Details"} navigation={navigation}/>
            <ScrollView style={styles.content}>

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
    );

};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "white",
},

content: {
    top: 10,
    height: "100%",
},

inpText: {
    fontSize: 18,
    left: 40,
    fontWeight: "400",
    marginBottom: 5,
},

input: {
    height: 50,
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 5,
    color: "black",
    borderWidth: 2,
    borderColor: "#F9D157",
},

btn: {
    top: 10,
    height: 60,
    width: 290,
    backgroundColor: "#FF5959",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 40,
},

btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
},



});


export default AddMeds;
