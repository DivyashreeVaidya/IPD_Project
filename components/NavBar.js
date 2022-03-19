/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */



import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';


export default function NavBar({txt, text, navigation, color}) {

    const [info, setInfo] = useState([]);

    useEffect(() => {



        async function getData() {

            let token = "a5f10b1edaa3bdb7ce4dde6767d2a6ccf34ab831";

            await axios.get('http://ipdprojectchadi.pythonanywhere.com/more_info/', {
                headers: {
                    'Authorization': `Token ${token}` ,
                },
            })
                .then(res => setInfo(res.data))
                .catch(err => console.log(err));
        }

       getData();

    }, []);


    const user = {
        name: info.username,
        age: info.age,
    };

    
    return (
        <View>
            <View style={color ? styles.header1 : styles.header}>

                <TouchableOpacity onPress={() => navigation.navigate('SideMenu', user)}>
                    <Image style={styles.menu} source={require("../assets/menu-blk.png")}/>
                </TouchableOpacity>
                
                {!txt ? 
                    <View style={styles.content}>
                        <Text style={styles.hText}>Heyy {info.username}!</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Help Section')}>
                            <Image style={styles.hImg} source={require("../assets/Help.png")}/>
                        </TouchableOpacity>
                    </View>
                    
                : 
                    <Text style={styles.hText1}>{text}</Text>
                }
                
            </View>

            
        </View>
    );
}


const styles = StyleSheet.create({
        
    header : {
        height: 70,
        backgroundColor: "white",
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    header1 : {
        height: 70,
        backgroundColor: "#F9D157",
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        opacity: 0.8,
    },

    menu:{
        alignSelf: "flex-start",
        top: 10,
        left: 10,
    },

    content: {
        justifyContent: "space-between",
        width: 290,
    },
    
    hText: {
        top: 10,
        left: 10,
        fontSize: 20,
        fontWeight: "500",
    },

    hText1: {
        position: "absolute",
        alignSelf: "center",
        left: 70,
        fontSize: 20,
        fontWeight: "500",
    },
    
    hImg: {
        alignSelf: "flex-end",
        bottom: 24,
        marginRight: 10,
    },

   
});
