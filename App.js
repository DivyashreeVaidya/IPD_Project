/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from './screens/Home';
import EventsPage from './screens/EventsPage';
import AddAppointments from './screens/AddAppointments';
import AddOtherEvent from './screens/AddOtherEvent';
import AddMeds from './screens/AddMeds';
import Login from './screens/Login';
import Register from './screens/Register';
import OpeningPage from './screens/OpeningPage';
import BottomNavigation  from './screens/BottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
//const token = '';
const App = () => {
  const [token, setToken] = useState('');
  const getData = async () => {
    try {
      const tokenValue = await AsyncStorage.getItem('@token')
      if(tokenValue !== null) {
        console.log("tokenValue is "+tokenValue)
        setToken(tokenValue)
      }
    } catch(e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getData()	
    },[token] )
  return (
    <NavigationContainer>
      {!token? 
      <Stack.Navigator initialRouteName="OpeningPage">
      <Stack.Screen name="OpeningPage" component={OpeningPage}/> 
      <Stack.Screen name="Register" component={Register} options={{ title: 'Create Your Account' }}/> 
      <Stack.Screen name="Login" component={Login} options={{ title: 'User Login' }}/> 
      </Stack.Navigator>
      : 
        <>
        <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={Home} options={{ title: 'Heyy Sam!' }}/>
        {/* <Stack.Screen name="BottomNavigation" component={BottomNavigation}/> */}
        <Stack.Screen name="Events" component={EventsPage} />
        <Stack.Screen name="Add Appointment" component={AddAppointments} />
        <Stack.Screen name="Add Event" component={AddOtherEvent} />
        <Stack.Screen name="Add Meds" component={AddMeds} /> 
        </Stack.Navigator>
        </>
      } 
      </NavigationContainer>
  );
};

export default App;
