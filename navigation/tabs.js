import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState,useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Home from "../screens/Home";
import ContentLibrary from "../screens/ContentLibrary";
import CalendarPage from "../screens/CalendarPage";
import EmergencyCalls from "../screens/EmergencyCalls";
import ReadingGlasses from "../screens/ReadingGlasses";
import {ScreenNavigator1, ScreenNavigator2, ScreenNavigator3, ScreenNavigator4, ScreenNavigator5} from '../CustomNavigation'
const Tab = createBottomTabNavigator();  

const CustomTabBarButton = ({children, onPress}) => (
<TouchableOpacity
style={{
    top:-30,
    justifyContent:'center',
    alignItems:'center',
    ...styles.shadow
}}
onPress={onPress}>
    <View style={{
        width: 70,
        height:70,
        borderRadius:35,
        backgroundColor:'#ff5959'
    }}>
        {children}
    </View>
</TouchableOpacity>
);

const Tabs = () => {
    return(
     <Tab.Navigator
     screenOptions={{
         headerShown:false,
         tabBarShowLabel:false,
         tabBarStyle:{
             display:'flex',
             postion:'absolute',
             bottom:20,
             left:0,
             right:0,
             elevation:20,
             backgroundColor:'white',
             borderRadius:15,
             height:90,
             ...styles.shadow

         }
     }} >
          <Tab.Screen name="Home" component={ScreenNavigator1}
         options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center', top:10}}>
                    <Image source={require("../assets/Home.png")}
                    resizeMode='contain'
                    style={{
                        width:focused?40:30,
                        height:focused?40:30,
                        tintColor:focused?"#ff5959":"#000000"
                    }}/>
                    <Text style={{color:focused?"#ff5959":"#000000",fontSize:15}}>HOME</Text>
                </View>
            ),
        }}/>
         <Tab.Screen name="Reading Glasses" component={ScreenNavigator2}
         options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center', top:10}}>
                    <Image source={require("../assets/reading_glasses.png")}
                    resizeMode='contain'
                    style={{
                        width:focused?40:30,
                        height:focused?40:30,
                        tintColor:focused?"#ff5959":"#000000"
                    }}/>
                    <Text style={{color:focused?"#ff5959":"#000000",fontSize:15}}>READ</Text>
                </View>
            ),
        }}/>
          <Tab.Screen name="Calendar" component={ScreenNavigator3} options={{
             tabBarIcon:({focused})=>(
                     <Image source={require("../assets/calendar_edit.png")}
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         tintColor:"#ffffff"
                     }}/>
             ),
             tabBarButton: (props) => (
                 <CustomTabBarButton {...props}/>
             )
         }}/>
         <Tab.Screen name="Emergency Calls" component={ScreenNavigator4}
         options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center', top:10}}>
                    <Image source={require("../assets/emergency-call.png")}
                    resizeMode='contain'
                    style={{
                        width:focused?40:30,
                        height:focused?40:30,
                        tintColor:focused?"#ff5959":"#000000"
                    }}/>
                    <Text style={{color:focused?"#ff5959":"#000000",fontSize:15}}>CALL</Text>
                </View>
            ),
        }}/>
         <Tab.Screen name="Explore" component={ScreenNavigator5}
         options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',justifyContent:'center', top:10}}>
                    <Image source={require("../assets/explore.png")}
                    resizeMode='contain'
                    style={{
                        width:focused?40:30,
                        height:focused?40:30,
                        tintColor:focused?"#ff5959":"#000000"
                    }}/>
                    <Text style={{color:focused?"#ff5959":"#000000",fontSize:15}}>EXPLORE</Text>
                </View>
            ),
        }}/>
     </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
})

export default Tabs;