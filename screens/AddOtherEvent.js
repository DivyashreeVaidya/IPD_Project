/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import axios from 'axios';
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';

const AddOtherEvent = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    // const [time, setTime] = useState();
    const [eName, setEName] = useState("");
    const [addNote, setAddNote] = useState("");
    const [open, setOpen] = useState(false);
    // const [open1, setOpen1] = useState(false);


    async function handleOtherEvent() {
        const oEventData = {
            event_name: eName,
            event_date: JSON.stringify(date).substring(1, 11),
            additional_fields: addNote,
            time: JSON.stringify(date).substring(12, 23),
        };
        console.log(oEventData);

        let token = "a5f10b1edaa3bdb7ce4dde6767d2a6ccf34ab831";

        await axios.post('http://ipdprojectchadi.pythonanywhere.com/other/', oEventData, {
            headers: {
                'Authorization': `Token ${token}` ,
            },
        })
            .then(console.log("success"))
            .catch(err => console.log(err));


        setAddNote("");
        setEName("");
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
            message: "You have an upcoming event \"" + eName + "\" on " + JSON.stringify(date).substring(1, 11),
            // date: new Date(date.getMilliseconds() - (new Date()).getMilliseconds()),
            date: d1,
            allowWhileIdle: true,
        });


    };
    
    return (
        <View style={styles.container}>
            
            <NavBar txt={true} text={"Event Details"} navigation={navigation} color={"yellow"}/>
            
            <View style={styles.formbg}>
                    <Image source={require("../assets/form-bg.png")}/>
            </View>
            
            <View style={styles.content}>

                <TouchableOpacity style={styles.datBtn1} onPress={() => setOpen(true)}><Text style={{"color": "white", "fontSize": 18}} >Pick the date and time</Text></TouchableOpacity>
                <DatePicker modal open={open} date={date} mode="datetime" onConfirm={(date) => {setOpen(false); setDate(date); }}  onCancel={() => {setOpen(false);}} />

    {/* 
                    <Text style={styles.inpText}>Date</Text>
                    <TextInput style={styles.input} onChange={(e) => setDate(e.target.value)} value={date}/> */}


               

                {/* <Text style={styles.inpText}>Time</Text>
                <TextInput style={styles.input} onChange={(e) => setTime(e.target.value)} value={time}/> */}

                <Text style={styles.inpText}>Event Name</Text>
                <TextInput style={styles.input} onChangeText={(text) => setEName(text)} value={eName}/>

                
               

                <Text style={styles.inpText}>Additional Note</Text>
                <TextInput style={styles.input} onChangeText={(text) => setAddNote(text)} value={addNote}/>


                <TouchableOpacity onPress={() => {handleOtherEvent(); handleNotifications();}} style={styles.btn}>
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

content: {
    top: 40,
    elevation: 10,
    height: 450,
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

inpText: {
    fontSize: 18,
    left: 40,
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



export default AddOtherEvent;
