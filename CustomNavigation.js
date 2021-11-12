//CustomNavigation.js

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

//Nested Screens
import EventsPage from './screens/EventsPage';
import AddAppointments from './screens/AddAppointments';
import AddOtherEvent from './screens/AddOtherEvent';
import AddMeds from './screens/AddMeds';
import AudioLibrary from './screens/AudioLibrary';
import VideoLibrary from './screens/VideoLibrary';
import ScannerCam from "./screens/ScannerCam";
//Bottom Tab Main Screens
import Home from './screens/Home';
import ReadingGlasses from "./screens/ReadingGlasses";
import CalendarPage from "./screens/CalendarPage";
import EmergencyCalls from "./screens/EmergencyCalls";
import ContentLibrary from "./screens/ContentLibrary";

const Stack = createStackNavigator();  // creates object for Stack Navigator

const ScreenNavigator1 = () => {
    // contains all child component screens within a stack. 
  return (
    <Stack.Navigator>    
       <Stack.Screen
        name="Home"
        component={Home}
      />
       <Stack.Screen
        name="Events"
        component={EventsPage}
      />
      <Stack.Screen
        name="Add Appointment"
        component={AddAppointments}
      />
      <Stack.Screen
        name="Add Event"
        component={AddOtherEvent}
      />
      <Stack.Screen
        name="Add Meds"
        component={AddMeds}
      />
    </Stack.Navigator>
  );
}

export {ScreenNavigator1}; // Stack-Navigator for Screen 1 Tab

const ScreenNavigator2 = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="Reading Glasses"
            component={ReadingGlasses}
        />
        <Stack.Screen
        name="Scan"
        component={ScannerCam}
      />
      </Stack.Navigator>
    );
  }
  
  export {ScreenNavigator2}; // Stack-Navigator for Screen 2 Tab

  const ScreenNavigator3 = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="Calendar"
            component={CalendarPage}
        />
      </Stack.Navigator>
    );
  }
  
  export {ScreenNavigator3};  // Stack-Navigator for Screen 3 Tab

  const ScreenNavigator4 = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="Emergency Calls"
            component={EmergencyCalls}
        />
      </Stack.Navigator>
    );
  }
  
  export {ScreenNavigator4};  // Stack-Navigator for Screen 3 Tab

  const ScreenNavigator5 = () => {
      // contains all child component screens within a stack.
    return (
      <Stack.Navigator >     
         <Stack.Screen
          name="Content Library"
          component={ContentLibrary}
        />
         <Stack.Screen
          name="Audio Library"
          component={AudioLibrary}
        />
        <Stack.Screen
          name="Video Library"
          component={VideoLibrary}
        />
      </Stack.Navigator>
    );
  }
  
  export {ScreenNavigator5}; // Stack-Navigator for Screen 5 Tab