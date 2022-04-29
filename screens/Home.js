/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ScrollView,
    DevSettings
  } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EventsPage from './EventsPage';
import AddAppointments from './AddAppointments';
import AddOtherEvent from './AddOtherEvent';
import AddMeds from './AddMeds';
import WellbeingTest from './WellbeingTest';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Snackbar } from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AudioLibrary from './AudioLibrary';
import NavBar from '../components/NavBar';

const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {


function eventHandler () {
    navigation.navigate('Events');
}
function testHandler () {
    navigation.navigate('Weekly Check In');
}
const [token, setToken] = useState();
// const logoutHandler = async () => {
//     try {
//         await AsyncStorage.removeItem('@token')
        
//       } catch(e) {
//         console.log(e)
//       }
// }

// const logoutHandler = async(key) => {
//     try {
//         await AsyncStorage.removeItem(key);
//         console.log(true);
//         const isToken = await AsyncStorage.getItem(key)
//         console.log(isToken)
        
//     }
//     catch(exception) {
//         console.log(false);
//     }
//     DevSettings.reload()
// }

function medsHandler () {
    navigation.navigate('Add Meds');
}
// function loginHandler(){
//     navigation.navigate('Login');
// }
useEffect(() => {	
    })
return (
    <ScrollView style={styles.container}>
        <NavBar txt = {false} text="hello" navigation={navigation} />

        {/* <View style={styles.eTabs}>
        <Text style={styles.eText} >Events</Text>
        <Text style={styles.eText} >Appointments</Text>
        <TouchableOpacity onPress={(e)=>logoutHandler('@token')} >
        <Text style={styles.eText} >Logout</Text>
        </TouchableOpacity>
        </View> */}

        <View style={styles.tab1}>
        <Text style={styles.tabText1}>How are you feeling today?</Text>
        <View style={styles.tabContent}>

            <Image style={styles.tabImg1} source={require("../assets/wellbeing.png")}/>
            
            <TouchableOpacity onPress={testHandler}>
            <View style={styles.tabBtn1}>
                <Text style={styles.btnText1} >CHECK-IN</Text>
            </View>
            </TouchableOpacity>
        </View>

        </View>

        <View style={styles.tab2}>
        <Text style={styles.tabText2}>Add Medicines</Text>
        <View style={styles.tabContent}>

            <Image style={styles.tabImg2} source={require("../assets/meds.png")}/>
            
            <TouchableOpacity onPress={medsHandler}>
            <View style={styles.tabBtn2}>
                <Text style={styles.btnText2} >UPDATE</Text>
            </View>
            </TouchableOpacity>
            </View>
        </View>  
        <View style={styles.tab3}>
        <Text style={styles.tabText1}>Add an event</Text>
        <View style={styles.tabContent}>

            <Image style={styles.tabImg3} source={require("../assets/calendarIcon.png")}/>
            
            <TouchableOpacity onPress={eventHandler}>
            <View style={styles.tabBtn3}>
                <Text style={styles.btnText1} >ADD</Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.tab4}>
        </View>    
    </ScrollView>
);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
    },

header : {
    height: 70,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#E5E5E5",
    padding: 12,
},

hText: {
    top: 10,
    left: 10,
    fontSize: 20,
    fontWeight: "500",
},

hImg: {
    alignSelf: "flex-end",
    bottom: 14,
    marginRight: 10,
},

eTabs: {
    height: 30,
    top: 20,
    flexDirection: "row",
},

eText: {
    fontSize: 18,
    left: 20,
    marginRight: 20,
    color: "#808080",
    fontWeight: "500",
},

tabContent: {
    flexDirection: "row",
    height: 120,
    top: 30,
},

tab1: {
    top: 30,
    height: 240,
    width: 310,
    borderRadius: 20,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "#F9D157",
    opacity: 1,
},
tab3: {
    bottom:-70,
    height: 240,
    width: 310,
    borderRadius: 20,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "#F9D157",
    opacity: 1,
},
tab4: {
    bottom:-300,
    height: 130,
    width: 310,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "#F9D157",
    opacity: 0,
},
tabText1: {
    top: 10,
    fontSize: 28,
    fontWeight: "400",
},

tabBtn1: {
    top: 40,
    left: 50,
    width: 100,
    height: 50,
    backgroundColor: "white",
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
tabBtn3: {
    top: 65,
    left: 50,
    width: 100,
    height: 50,
    backgroundColor: "white",
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
},

tabImg1: {
    top:-4,
    height:-1,
    width:120,
    left: -4,
},
tabImg3: {
    top: 35,
    height: 90,
    left: -20,
},


tab2: {
    top: 60,
    height: 240,
    width: 310,
    borderRadius: 20,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "#FF5959",
    marginBottom: 20,
    opacity: 1,
},

tabText2: {
    top: 10,
    fontSize: 28,
    fontWeight: "400",
},

tabBtn2: {
    top: 60,
    left: 35,
    width: 100,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
},

tabImg2: {
    top: 30,
    height: 90,
    left: -20,
},

btnText2: {
    fontSize: 20,
},
});

export default Home;
