import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
  } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import EventsPage from './EventsPage';
import AddAppointments from './AddAppointments';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = ({navigation}) => {

    return (

    
    <Tab.Navigator
          initialRouteName="Home"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: '#FF5959' }}
        >
          <Tab.Screen
            name="Events"
            component={EventsPage}
            lazy={true}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Add Appointment"
            component={AddAppointments}
            lazy={true}
            options={{
              tabBarLabel: 'Calendar',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="calendar-edit" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
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
    