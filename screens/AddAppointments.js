/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';
import PushNotification from 'react-native-push-notification';

const AddAppointments = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    //const [time, setTime] = useState("");
    const [docName, setDocName] = useState("");
    const [addNote, setAddNote] = useState("");
    const [open, setOpen] = useState(false);

    
    const [err, setErr] = useState('');

    async function handleAppt() {
        const apptData = {
            date: JSON.stringify(date).substring(1, 11),
            doc_name: docName,
            additional_fields: addNote,
            time: JSON.stringify(date).substring(12, 23),
        };
        let token = "7029af283983bfd69a388d0d7740619bd151962b";

        await axios.post('https://6525-2402-3a80-6c2-6b2e-a473-385c-fe0b-4b9d.in.ngrok.io/appt/', apptData, {
            headers: {
                'Authorization': `Token ${token}` ,
            },
            })
             .then(console.log("success"))
             .catch(error => setErr(error));
        
        setDocName('');
        setAddNote('');

        console.log(err);

    }

    const handleNotifications = () => {

        // console.log(date.getTime());

        // PushNotification.localNotification({
        //     channelId: "test-channel",
        //     title: "You have an appointment today with",
        //     message: docName + " at " + JSON.stringify(date).substring(12, 23),
        // });

        var d1 = new Date();
        d1.setTime(date.getTime() - 24 * 60 * 60 * 1000);
        // console.log(d1.toLocaleString());

        PushNotification.localNotificationSchedule({
            channelId: "test-channel",
            title: "Appointment",
            message: "You have an upcoming appointment with " + docName + " on " + JSON.stringify(date).substring(1, 11),
            // date: new Date(date.getMilliseconds() - (new Date()).getMilliseconds()),
            date: d1,
            allowWhileIdle: true,
        });


    };

    return (
        <View style={styles.container}>
            
            <NavBar txt={true} text={"Appointment Details"} navigation={navigation} color={"yellow"}/>

            <View style={styles.formbg}>
                    <Image source={require("../assets/form-bg.png")}/>
            </View>

            <View style={styles.content}>
                
                <Text style={styles.inpText}>Date</Text>
                <TouchableOpacity style={styles.datBtn1} onPress={() => setOpen(true)}><Text style={{"color": "white", "fontSize": 18}} >Pick the date and time</Text></TouchableOpacity>
                <DatePicker modal open={open} date={date} mode="datetime" onConfirm={(date) => {setOpen(false); setDate(date); }}  onCancel={() => {setOpen(false);}} />

                {/* <Text style={styles.inpText}>Time</Text>
                <TextInput style={styles.input} onChange={(e) => setTime(e.target.value)} value={time}/> */}

                <Text style={styles.inpText}>Doctor's Name</Text>
                <TextInput style={styles.input} value={docName} onChangeText={text => setDocName(text)} />

                <Text style={styles.inpText}>Additional Note</Text>
                <TextInput style={styles.input} value={addNote} onChangeText={text => setAddNote(text)}/>

                {/* report and medical record input */}

                <TouchableOpacity onPress={() => {handleAppt(); handleNotifications();}} style={styles.btn}>                    
                    <Text style={styles.btnText}>ADD</Text>                    
                </TouchableOpacity>
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
    top: 40,
    elevation: 10,
    height: 480,
    backgroundColor: "white",
    paddingTop: 40,
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
},

datBtn1: {
    backgroundColor: "#F9D157",
    alignSelf: "center",
    height: 50,
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
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
    top: 30,
    height: 60,
    width: 250,
    backgroundColor: "#FF5959",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
},

btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
},



});


export default AddAppointments;
