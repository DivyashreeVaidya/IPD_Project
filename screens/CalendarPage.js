/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Image,Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar,Agenda, Arrow, LocaleConfig} from 'react-native-calendars';
import { Headline, Card, Avatar } from 'react-native-paper';
import axios from 'axios';

// const CalendarPage = ({navigation}) => {

//     const [events, setEvents] = useState([]);
//     const [appts, setAppts] = useState([]);



//     useEffect(() => {
//         async function getData() {

//             let token = "a5f10b1edaa3bdb7ce4dde6767d2a6ccf34ab831";

//             await axios.get('http://ipdprojectchadi.pythonanywhere.com/appt/', {
//                 headers: {
//                     'Authorization': `Token ${token}` ,
//                 },
//             })
//                 .then(res => setAppts(res.data))
//                 .catch(err => console.log(err));
//         }

//         // console.log(appts)

//        getData();
//     }, [appts])

//     // function apptHandler () {
//     //     navigation.navigate('Add Appointment');
//     // }

//     // function oEventHandler () {
//     //     navigation.navigate('Add Event');
//     // }


//     return (
//         <View style={styles.container}>
        
//             <Calendar 
//             style={{
//                 borderWidth: 1,
//                 borderColor: '#FF5959',
//                 borderRadius:10,
//                 elevation:20,
//                 color:'black',
//                 height: 330,
//               }}
              
//               markedDates={{
//                 '2021-11-16': {selected: true, marked: true, selectedColor: '#FF5959'},
//                 '2021-11-17': {marked: true,dotColor: '#FF5959'},
//                 '2021-11-18': {marked: true, dotColor: '#FF5959', activeOpacity: 0},
//                 '2021-11-19': {selected: true, marked: true, selectedColor: '#F9D157'}
//               }}

//               theme={{
//                 backgroundColor: '#ffffff',
//                 calendarBackground: '#ffffff',
//                 textSectionTitleColor: '#000020',
//                 selectedDayBackgroundColor: '#f9d157',
//                 selectedDayTextColor: '#ffffff',
//                 todayTextColor: '#ff5959',
//                 dayTextColor: '#000000',
//                 dotColor: '#ff5959',
//                 selectedDotColor: '#ffffff',
//                 arrowColor: 'black',
//                 monthTextColor: 'black',
//                 indicatorColor: 'black',
//                 textDayFontFamily: 'roboto',
//                 textMonthFontFamily: 'roboto',
//                 textDayHeaderFontFamily: 'roboto',
//                 textDayFontWeight: 'bold',
//                 textMonthFontWeight: 'bold',
//                 textDayHeaderFontWeight: 'bold',
//                 textDayFontSize: 18,
//                 textMonthFontSize: 20,
//                 textDayHeaderFontSize: 18,
//               }}
//   current={'2021-11-10'}
//   // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//   minDate={'1700-01-01'}
//   // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//   maxDate={'2100-01-01'}
//   // Handler which gets executed on day press. Default = undefined
//   onDayPress={(day) => {console.log('selected day', day)}}
//   // Handler which gets executed on day long press. Default = undefined
//   onDayLongPress={(day) => {console.log('selected day', day)}}
//   // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  
//   // Handler which gets executed when visible month changes in calendar. Default = undefined
//   onMonthChange={(month) => {console.log('month changed', month)}}
//   // Handler which gets executed when press arrow icon left. It receive a callback can go back month
//   onPressArrowLeft={subtractMonth => subtractMonth()}
//   // Handler which gets executed when press arrow icon right. It receive a callback can go next month
//   onPressArrowRight={addMonth => addMonth()}
//   // Enable the option to swipe between months. Default = false
//   enableSwipeMonths={true}
// />


// <TouchableOpacity>
// <Image style={styles.hImg1} source={require("../assets/Ellipse5.png")}/>
// <Image style={styles.hImg2} source={require("../assets/Group1.png")}/>
// </TouchableOpacity>
// <Headline style={styles.title}>ADD A REMINDER</Headline>
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 2,
//         backgroundColor: "white",
//     },
//     hImg1: {
//         marginLeft:'auto',
//         marginRight:'auto',
//         marginTop:54
//     },  
//     hImg2:{
//         marginLeft:'auto',
//         marginRight:'auto',
//         marginTop:-92
//     },
//     title: {
//         textAlign:'center',
//         fontSize: 20,
//         marginTop:10,
//         fontWeight: "bold",
//         fontFamily:'Roboto',
//         paddingTop:7}
// })

// export default CalendarPage;




const CalendarPage = () => {

const [events, setEvents] = useState([]);
const [appts, setAppts] = useState([]);

const [eventsList, setEventsList] = useState([]);
const [apptsList, setApptsList] = useState([]);



    useEffect(() => {
        async function getData() {

            let token = "7029af283983bfd69a388d0d7740619bd151962b";

            await axios.get('https://35c1-58-84-61-72.in.ngrok.io/appt/', {
                headers: {
                    'Authorization': `Token ${token}` ,
                },
            })
                .then(res => setApptsList(res.data))
                .catch(err => console.log(err));
        }

        // console.log(appts)

       getData();
    }, [])

const loadItems = (day) => {
    console.log(day)
    var lst = []
    
    
    apptsList.map(appt => {
        if (appt.date === day.dateString){
            console.log(appt.date)
            console.log(day.dateString)
            lst.push(appt)
            console.log('Yes')
        }
    })

    setAppts(lst)
    console.log(appts)
};

const renderItem = (item) => {
    console.log("item: ", item)
    return (
    <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
        <Card.Content>
            <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
            <Text>{item.doc_name}</Text>
            </View>
        </Card.Content>
        </Card>
    </TouchableOpacity>
    );
};

return (
    <View style={{flex: 1}}>
    <Agenda
        items={appts}
        loadItemsForMonth={loadItems}
        selected={'2021-11-20'}
         // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2020-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2022-12-31'}
        // renderItem={renderItem}

        renderItem={(item) => renderItem(item)} 
    />
    </View>
);
};


  export default CalendarPage;



