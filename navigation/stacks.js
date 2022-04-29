/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EventsPage from '../screens/EventsPage';
import WellbeingTest from '../screens/WellbeingTest';
import AddAppointments from '../screens/AddAppointments';
import AddOtherEvent from '../screens/AddOtherEvent';
import AddMeds from '../screens/AddMeds';
import AudioLibrary from '../screens/AudioLibrary';
import VideoLibrary from '../screens/VideoLibrary';
import CalendarPage from "./screens/CalendarPage";
import ContentLibrary from "./screens/ContentLibrary";
import MusicLibrary from '../screens/MusicLibrary';

const Stack = createNativeStackNavigator();
const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="Audio Library" component={AudioLibrary} />
        <Stack.Screen name="Video Library" component={VideoLibrary} />
        <Stack.Screen name="Events" component={EventsPage} />
        <Stack.Screen name="Add Appointment" component={AddAppointments} />
        <Stack.Screen name="Add Event" component={AddOtherEvent} />
        <Stack.Screen name="Add Meds" component={AddMeds} />
        <Stack.Screen name="Weekly Check In" component={WellbeingTest} />
        <Stack.Screen name="Calendar" component={CalendarPage} />
        <Stack.Screen name="Content Library" component={ContentLibrary} />
        <Stack.Screen name="Music Library" component={MusicLibrary} />
      </Stack.Navigator>
    </Stack.Navigator>
  );
};

export default Stacks;
