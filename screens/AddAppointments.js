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
        let token = "a5f10b1edaa3bdb7ce4dde6767d2a6ccf34ab831";

        await axios.post('http://ipdprojectchadi.pythonanywhere.com/appt/', apptData, {
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

        PushNotification.localNotificationSchedule({
            channelId: "test-channel",
            title: "Appointment",
            message: "You have an upcoming appointment with " + docName + " on " + JSON.stringify(date).substring(1, 11),
            // date: new Date(date.getMilliseconds() - (new Date()).getMilliseconds()),
            date: new Date(date.getMilliseconds() - 20 * 1000),
            // 864 * 100000,
            allowWhileIdle: true,
        });


    };

    return (
        <View style={styles.container}>
            
            <NavBar txt={true} text={"Appointment Details"} navigation={navigation}/>
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
            </View>

            <TouchableOpacity onPress={() => {handleAppt(); handleNotifications();}} style={styles.btn}>                    
                <Text style={styles.btnText}>ADD</Text>                    
            </TouchableOpacity>

            
        </View>
    );

};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "white",
},

content: {
    top: 50,
},

datBtn1: {
    backgroundColor: "#F9D157",
    alignSelf: "center",
    height: 50,
    width: "80%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
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
    top: 80,
    height: 60,
    width: 290,
    backgroundColor: "#FF5959",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
},

btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
},



});


export default AddAppointments;
