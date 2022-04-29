/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Headline } from 'react-native-paper';
//import TrackPlayer, { State } from 'react-native-track-player';

//await TrackPlayer.setupPlayer()

// const state = await TrackPlayer.getState();
// if (state === State.Playing) {
//     console.log('The player is playing');
// };

// let trackIndex = await TrackPlayer.getCurrentTrack();
// let trackObject = await TrackPlayer.getTrack(trackIndex);
// console.log(`Title: ${trackObject.title}`);

// const position = await TrackPlayer.getPosition();
// const duration = await TrackPlayer.getDuration();
// console.log(`${duration - position} seconds left.`);



const MusicLibrary = ({navigation}) => {

    function musicHandler () {
        navigation.navigate('Music Library');
    }

    function audiobookHandler () {
        navigation.navigate('Audiobook Library');
    }


    return (
        <View style={styles.ePage}>
          
           <Headline style={styles.title}>Track Player</Headline>
             
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#F9D157",
        justifyContent:'space-around'
    },
    hImg: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,
        width:250,
        height:200
    },    
    title: {
        textAlign:'left',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize: 25,
        marginTop:-10,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7},
    btnText:{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            paddingBottom:10
        },
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:300,height:65,
    marginLeft:'auto',
    marginRight:'auto', marginBottom:0}
})

export default MusicLibrary;
