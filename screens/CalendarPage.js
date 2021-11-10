/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image,Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar,Agenda, Arrow, LocaleConfig} from 'react-native-calendars';
import { Headline } from 'react-native-paper';

const CalendarPage = ({navigation}) => {

    function apptHandler () {
        navigation.navigate('Add Appointment');
    }

    function oEventHandler () {
        navigation.navigate('Add Event');
    }


    return (
        <View style={styles.container}>
        
            <Calendar 
            style={{
                borderWidth: 1,
                borderColor: '#FF5959',
                borderWidth:3,
                borderRadius:10,
                elevation:20,
                textDayFontSize:18,
                textDayFontWeight:'bold',
                color:'black',
                height: 350
              }}
              markingType={'interactive'}
              markedDates={{
                '2021-11-16': {selected: true, marked: true, selectedColor: '#FF5959'},
                '2021-11-17': {marked: true,dotColor: '#FF5959'},
                '2021-11-18': {marked: true, dotColor: '#FF5959', activeOpacity: 0},
                '2021-11-19': {selected: true, marked: true, selectedColor: '#F9D157'}
              }}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#000020',
                selectedDayBackgroundColor: '#f9d157',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#ff5959',
                dayTextColor: '#000000',
                dotColor: '#ff5959',
                selectedDotColor: '#ffffff',
                arrowColor: 'black',
                monthTextColor: 'black',
                indicatorColor: 'black',
                textDayFontFamily: 'roboto',
                textMonthFontFamily: 'roboto',
                textDayHeaderFontFamily: 'roboto',
                textDayFontWeight: 'bold',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
                textDayFontSize: 18,
                textMonthFontSize: 20,
                textDayFontWeight:'bold',
                textDayHeaderFontSize: 18
              }}
  current={'2021-11-10'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'1700-01-01'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2100-01-01'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>
<TouchableOpacity>
<Image style={styles.hImg1} source={require("../assets/Ellipse5.png")}/>
<Image style={styles.hImg2} source={require("../assets/Group1.png")}/>
</TouchableOpacity>
<Headline style={styles.title}>ADD A REMINDER</Headline>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: "white",
    },
    hImg1: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:54
    },  
    hImg2:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:-92
    },
    title: {
        textAlign:'center',
        fontSize: 20,
        marginTop:30,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7}
})

export default CalendarPage;
