/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    DevSettings
  } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EventsPage from './EventsPage';
import AddAppointments from './AddAppointments';
import AddOtherEvent from './AddOtherEvent';
import AddMeds from './AddMeds';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Snackbar } from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const Home = ({navigation}) => {


function eventHandler () {
    navigation.navigate('Events');
}

// const logoutHandler = async () => {
//     try {
//         await AsyncStorage.removeItem('@token')
        
//       } catch(e) {
//         console.log(e)
//       }
// }
const logoutHandler = async(key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log(true);
        
    }
    catch(exception) {
        console.log(false);
    }
    DevSettings.reload()
}

function medsHandler () {
    navigation.navigate('Add Meds');
}
// function loginHandler(){
//     navigation.navigate('Login');
// }
return (
    <View style={styles.container}>
        {/* <View style={styles.header}>
        <Text style={styles.hText}>Heyy Sam!</Text>
        <Image style={styles.hImg} source={require("../assets/Avatar.png")}/>
        </View> */}
        <View style={styles.eTabs}>
        <Text style={styles.eText} >Events</Text>
        <Text style={styles.eText} >Appointments</Text>
        <TouchableOpacity onPress={(e)=>logoutHandler('@token')} >
        <Text style={styles.eText} >Logout</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.tab1}>
        <Text style={styles.tabText1}>Add an event</Text>
        <View style={styles.tabContent}>

            <Image style={styles.tabImg1} source={require("../assets/calendarIcon.png")}/>
            
            <TouchableOpacity onPress={eventHandler}>
            <View style={styles.tabBtn1}>
                <Text style={styles.btnText1} >ADD</Text>
            </View>
            </TouchableOpacity>
        </View>

        </View>

        <View style={styles.tab2}>
        <Text style={styles.tabText2}>Update Medicines Tab</Text>
        <View style={styles.tabContent}>

            <Image style={styles.tabImg2} source={require("../assets/medicineIcon.png")}/>
            
            <TouchableOpacity onPress={medsHandler}>
            <View style={styles.tabBtn2}>
                <Text style={styles.btnText2} >UPDATE</Text>
            </View>
            </TouchableOpacity>
            </View>


        </View>

        {/* <View style={styles.tab3}>
        <Text style={styles.tabText1}>Your Account</Text>
        <View style={styles.tabContent}>

            <Image style={styles.tabImg1} source={require("../assets/calendarIcon.png")}/>
            
            <TouchableOpacity onPress={loginHandler}>
            <View style={styles.tabBtn1}>
                <Text style={styles.btnText1} >Login</Text>
            </View>
            </TouchableOpacity>

            </View>

        </View> */}

        {/* <View style={styles.footer}>
            <View style={styles.fElement}>
                <Image style={styles.fImg} source={require("../assets/Calendar.png")}/>
                <Text >Calendar</Text>
            </View>

            <View style={styles.fElement}>
                <Image style={styles.fImg} source={require("../assets/Home.png")}/>
                <Text style={{color: "#FF5959"}} >Home</Text>
            </View>

            <View style={styles.fElement}>
                <Image style={styles.fImg} source={require("../assets/Medicines.png")}/>
                <Text>Explore</Text>
            </View>
        </View> */}
        {/* <Button  
               style={{
                width: 170,
                height: 50,
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:160,
                backgroundColor: '#FF5959'}}
                mode="contained" 
                onPress={(e)=>logoutHandler('@token')} 
               > LOGOUT </Button> */}
        
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 2,
    backgroundColor: "white",
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
    height: 220,
    width: "92%",
    borderRadius: 7,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "#F9D157",
},
tab3: {
    top: 60,
    height: 220,
    width: "92%",
    borderRadius: 7,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "#F9D157",
},
tabText1: {
    top: 10,
    fontSize: 28,
    fontWeight: "600",
},

tabBtn1: {
    top: 50,
    left: 50,
    width: 120,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FF5959",
    borderRadius: 20,
},

btnText1: {
    fontSize: 20,
},

tabImg1: {
    top: 20,
    height: 90,
    left: -10,
},


tab2: {
    top: 60,
    height: 220,
    width: "92%",
    borderRadius: 7,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "#FF5959",
    marginBottom: 20,
},

tabText2: {
    top: 10,
    fontSize: 28,
    fontWeight: "600",
},

tabBtn2: {
    top: 50,
    left: 30,
    width: 120,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#F9D157",
    borderRadius: 20,
    padding: 8,
},

tabImg2: {
    top: 20,
    height: 90,
    left: -10,
},

btnText2: {
    fontSize: 18,
},


footer: {
    top: 80,
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderTopColor: "#E5E5E5",
},

fElement: {
    color: "red",
    alignItems: "center",
},

fImg: {
    marginBottom: 10,
},

});

export default Home;
