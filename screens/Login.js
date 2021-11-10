/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { Button, Snackbar, Surface, Text, Headline } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
//import RNRestart from 'react-native-restart'; // Import package from node modules
//import Home from './Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
//API fetching
import axios from 'axios';
const Login = ({navigation}) => {
    function registerHandler () {
        navigation.navigate('Register');
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
	const [showPassword, setShowPassword] = useState(0); //Toggle show password field
    const [showPassword1, setShowPassword1] = useState(0); //Toggle show password field
    const [errorMessage, setErrorMessage] = useState('');
	const [token, setToken] = useState('');
	//setToken(sessionStorage.getItem('token'))
	//const { currentTheme } = useContext(CustomThemeContext) // For theme

	function togglePassword() {
		showPassword === 0 ? setShowPassword(1) : setShowPassword(0);
	}
    function togglePassword1() {
		showPassword1 === 0 ? setShowPassword1(1) : setShowPassword1(0);
	}
	const [showWarning, setShowWarning] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [redirect, setRedirect] = useState(false)
    // function homeHandler () {
    //     navigation.navigate('Home');
    // }
     function loginHandler () {
            navigation.navigate('Home');
          }
    useEffect(() => {
        //loginHandler()	
        },[token])
        return (
            <>
            <Formik
             initialValues={{ email: '', password: '' }}
             validate={values => {
             const errors = {};
             if (!values.email) {
                 errors.email = "Required"
             } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
                 errors.email = "Invalid Format"
             }else if (values.email.length > 100){
                 errors.email = "Maximum 100 charecters"
             }
             if (!values.password){
                 errors.password = 'Required';
             }
             return errors;
           }}

             onSubmit={(values, { setSubmitting }) => {
                //console.log(values)
                //Submit Function for login
                //var instance = axios.create({ baseURL: 'http://localhost:5000' });

                
                /*var request = {
                method:'post',
                url:'/register/',
                //baseURL:'http://localhost:5000',
                headers: {
                  'Access-Control-Allow-Origin' : '*',
                  'Content-Type': 'application/json'
                },
                //data : JSON.stringify({"firstName":values.username1,"lastName":values.username2,"email":values.email,"password":values.password})
                 body: JSON.stringify({'username':values.username1,'password':values.password})
              };*/
              //console.log(request.body);
              console.log("email-"+values.email)
              console.log("password-"+values.password)
            //   ***PREV API CALL***
            //   axios
            //   .post(" http://ipdprojectchadi.pythonanywhere.com/login", {
            //       email: values.email,
            //       password: values.password,
            //     })
            //   .then(function (response) {
            //     console.log(response);
            //     console.log('its working!')
            //     setShowSuccess(true);
            //     //setTimeout(() => {
            //       //history.push(`user/:${token}`);
            //     //}, 3000);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //     console.log('its not working!')
            //     //setErrorMessage(error.response.data)
            //       setTimeout(() => {
            //         setSubmitting(false);
            //       }, 1000);
            //       setShowWarning(true);
            //   })



              /*async function getUser() {
                  try {
                    const response = await axios.post('http://ipdprojectchadi.pythonanywhere.com/login',request);
                    console.log(response);
                  } catch (error) {
                    console.error(error);
                  }
                }
                getUser()*/
              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("'Access-Control-Allow-Origin'", "*");
               var raw = JSON.stringify({"email":values.email,"password":values.password});
               //var raw = JSON.stringify({"username":values.username1,"password":values.password});
               var requestOptions = {
               method: 'POST',
               headers: myHeaders,
               body: raw,
               redirect: 'follow',
               };
               fetch("http://ipdprojectchadi.pythonanywhere.com/login/", requestOptions)
                .then(response => response.json())
                .then(result => {console.log(result.token)
                                 console.log('its working!')
                                 setShowSuccess(true);
                                 setToken(result.token);
                                 const token_ = result.token
                                 console.log("token_ is"+token_)
                                 AsyncStorage.setItem('@token',token_)
                                 const getData = async () => {
                                    try {
                                      const tokenValue = await AsyncStorage.getItem('@token')
                                      if(tokenValue !== null) {
                                        console.log("tokenValue is "+tokenValue)
                                      }
                                    } catch(e) {
                                      console.log(e)
                                    }
                                  }
                                  getData()
                                  //setRedirect(true);
                                  
                                  //RNRestart.Restart();
                                  //navigation.navigate('Home')
                                  //DevSettings.reload()
                                 //const tokenValue = AsyncStorage.getItem('@token')
                                 //console.log(AsyncStorage.getItem('@token'))
                                 })
                .catch(error => {console.log('error', error)
                console.log('its not working!')
                setShowWarning(true);
                });
               }}

             >

             {({ values, isSubmitting, handleChange, handleBlur, handleSubmit, touched, errors}) => (
              <View style={styles.container}>
                <Snackbar 
		              visible={showWarning} 
		              duration={2000} 
		              onDismiss={()=>setShowWarning(false)}
		              style={{marginBottom: 80, backgroundColor:'red',color:'white'}}>
					  	Incorrect Username or Password. Please try again
		            </Snackbar>
                    <Snackbar 
		              visible={showSuccess} 
		              duration={2000} 
		              onDismiss={()=>setShowSuccess(false)}
		              style={{marginBottom: 80, backgroundColor:'green',color:'white'}}
		            >
					  	Login Successful!
		            </Snackbar>
                <Headline style={styles.title}>Login To Your Account.</Headline>
                    <Surface style={styles.bgSurface}>
                    <TextInput
                      label="Email" 
                      type="email"
                      halfWidth
                      mode="outlined"
                      placeholder="e.g. johndoe@gmail.com"
                     
                      helperText={touched.email?errors.email:''}
                      error={!!errors.email&&touched.email}
                    //   inputProps={{autoComplete:'new-email'}}



                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      style={styles.txtInput}
                    /> 
                    <Text style={styles.errText}>{errors.email}</Text>
                    <TextInput
                     label="Password"
                     secureTextEntry
                     right={<TextInput.Icon name="eye" />}
                    
                     type="password"
                     halfWidth
                     mode="outlined"
                     placeholder="Enter Password"
                    
                     helperText={touched.password?errors.password:''}
                     error={!!errors.password&&touched.password}
                   //   inputProps={{autoComplete:'new-email'}}



                     onChangeText={handleChange('password')}
                     onBlur={handleBlur('password')}
                     value={values.password}
                     style={styles.txtInput}
                    />
                    <Text style={styles.errText}>{errors.password}</Text>
              <Button 
               type="submit" 
               halfWidth
               disabled={isSubmitting}
               style={{backgroundColor:"#FF5959",padding:10,width:300,
               marginLeft:'auto',
               marginRight:'auto'}}
               mode="contained" 
               onPress={handleSubmit} 
               title="Submit" > 
               <Text style={styles.btnText}>
               LOGIN 
               </Text></Button>
               <Text style={styles.linkTxt1}>Don't have an account?</Text>
               <TouchableOpacity  
               onPress={registerHandler}> 
               
               <Text style={styles.linkTxt2}> Create one here.</Text> 
               </TouchableOpacity></Surface>
              </View>
     )}
            </Formik>
            {/* <View style={styles.container}> */}
                {/* <Text style={styles.title}>Welcome Back! Login Here</Text>
                <View style={styles.content}>
                    <Text style={styles.inpText}>Email</Text>
                    <TextInput style={styles.input} onChange={(e) => setEmail(e.target.value)} value={email}/>

                    <Text style={styles.inpText}>Enter Password</Text>
                    <TextInput style={styles.input} onChange={(e) => setPassword(e.target.value)} value={password}/>
                </View>

                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>LOGIN</Text>
                    </View>    
                </TouchableOpacity> */}
                {/* <Button 
                type="submit" 
                halfWidth
                variant="contained" 
                style={{backgroundColor:"#04BEFC",padding:10}}
                icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                 Press me
                </Button> */}

                {/* <View style={styles.footer}>
                    <View style={styles.fElement}>
                        <Image style={styles.fImg} source={require("../assets/Calendar.png")}/>
                        <Text >Calendar</Text>
                    </View>

                    <TouchableOpacity onPress={homeHandler} style={styles.fElement}>
                        <Image style={styles.fImg} source={require("../assets/Home.png")}/>
                        <Text style={{color: "#FF5959"}} >Home</Text>
                    </TouchableOpacity>

                    <View style={styles.fElement}>
                        <Image style={styles.fImg} source={require("../assets/Medicines.png")}/>
                        <Text>Medicines</Text>
                    </View>
                </View> */}
            {/* </View>*/}</> 
        );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9D157",
        justifyContent:"center"
    },
    title: {
        textAlign:'left',
        marginLeft:25,
        fontSize: 35,
        marginTop:-18,
        fontWeight: "bold",
        paddingTop:5
    },
    bgSurface:{
      width:350,
      height:450,
      backgroundColor:'#C4C4C4',
      elevation:5,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:20,
      justifyContent:"center"
    },
    errText:{
      marginLeft:30,
      fontSize:18,
      fontWeight:'bold',
      fontFamily:'Roboto',
      color:'red'
    },
    linkTxt1:{
      fontWeight:'bold',
      textAlign:'center',
      fontSize:22,
      marginTop:35
    },
    linkTxt2:{
      fontWeight:'bold',
      textAlign:'center',
      fontSize:22,
      marginBottom:40,
      textDecorationLine:'underline'
    },
    btnText:{
      fontSize:22,
      fontWeight:'bold',
      color:'white'
    },
     txtInput:{
      fontSize: 22,
       width:300,
       marginLeft:'auto',
       marginRight:'auto',
     },

});

export default Login;
