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

   
    
    return (
        <View style={styles.container}>
            
            <NavBar txt={true} text={"Event Details"} navigation={navigation}/>
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

            </View>

            <TouchableOpacity onPress={handleOtherEvent} style={styles.btn}>
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

content: {
    top: 50,
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



export default AddOtherEvent;
