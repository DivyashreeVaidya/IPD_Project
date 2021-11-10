/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const AddMeds = ({navigation}) => {
    const [reason, setReason] = useState("");
    const [dose, setDose] = useState("");
    const [name, setName] = useState("");
    const [addNote, setAddNote] = useState("");

    function homeHandler () {
        navigation.navigate('Home');
    }
    
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Medicine Details</Text>
                <View style={styles.content}>
                    <Text style={styles.inpText}>Name</Text>
                    <TextInput style={styles.input} onChange={(e) => setName(e.target.value)} value={name}/>

                    <Text style={styles.inpText}>Reason</Text>
                    <TextInput style={styles.input} onChange={(e) => setReason(e.target.value)} value={reason}/>

                    <Text style={styles.inpText}>Dose</Text>
                    <TextInput style={styles.input} onChange={(e) => setDose(e.target.value)} value={dose}/>

                    
                    <Text style={styles.inpText}>Additional Note</Text>
                    <TextInput style={styles.input} onChange={(e) => setAddNote(e.target.value)} value={addNote}/>

                </View>

                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>ADD</Text>
                    </View>
                    
                </TouchableOpacity>

                
            </View>
        );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9D157",
    },
    title: {
        height:100,
        alignSelf: "center",
        fontSize: 24,
        fontWeight: "600",
        textAlignVertical: "center",
    },

    inpText: {
        fontSize: 18,
        left: 30,
        fontWeight: "500",
        marginBottom: 5,
    },

    input: {
        height: 50,
        backgroundColor: "white",
        width: "80%",
        left: 30,
        marginBottom: 20,
        borderRadius: 5,
        color: "black",
    },

    btn: {
        height: 40,
        width: 90,
        backgroundColor: "#FF5959",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },

    btnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },

    footer: {
        top: 25,
        height: 90,
        flexDirection: "row",
        alignItems: "center",
        padding: 18,
        justifyContent: "space-between",
        borderTopWidth: 2,
        borderTopColor: "#E5E5E5",
        backgroundColor: "white",
    },
    
    fElement: {
        color: "red",
        alignItems: "center",
    },
    
    fImg: {
        marginBottom: 10,
    },

});

export default AddMeds;
