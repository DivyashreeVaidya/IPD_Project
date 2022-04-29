/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { Headline, Surface, Button, Snackbar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
//API fetching
import axios from 'axios';
const Register = ({navigation}) => {
    function loginHandler () {
        navigation.navigate('Login');
    }
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [first_name, setFirstName] =  useState("");
    const [last_name, setLastName] = useState("");
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

    // function homeHandler () {
    //     navigation.navigate('Home');
    // }
    
        return (
            <>
            <Formik
             initialValues={{ email: '', username:'', first_name:'', last_name:'', password: '', password1:'' }}
             validate={values => {
             const errors = {};
             if (!values.email) {
                 errors.email = "Required"
             } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
                 errors.email = "Invalid Format"
             }else if (values.email.length > 100){
                 errors.email = "Maximum 100 charecters"
             }
             if (!values.username) {
                errors.username = "Required"
            }else if (values.username.length > 100){
                errors.username = "Maximum 100 charecters"
            }
            if (!values.first_name) {
                errors.first_name = "Required"
            }else if (values.first_name.length > 100){
                errors.first_name = "Maximum 100 charecters"
            }
            if (!values.last_name) {
                errors.last_name = "Required"
            }else if (values.last_name.length > 100){
                errors.last_name = "Maximum 100 charecters"
            }
            if (!values.password){
                errors.password = 'Required';
            }else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[?._~:}{+=]).{8,}$/gm.test(values.password)){
                errors.password = "Password must contain minimum one numeric, one lowercase, one uppercase and one special character with minimum length of 8 characters"
            } else if (values.password.length<8){
                 errors.password = "Must be minimum 8 characters" 
            }
            if (!values.password1){
                errors.password1 = 'Required';
            }
            if (values.password1!==values.password){
                errors.password1 = 'Passwords do not match';
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
              console.log("username-"+values.username)
              console.log("first name-"+values.first_name)
              console.log("last name-"+values.last_name)
              console.log("password-"+values.password)
              
            //   axios
            //   .post(" http://ipdprojectchadi.pythonanywhere.com/register", {
            //       email: values.email,
            //       username: values.username,
            //       first_name: values.first_name,
            //       last_name: values.last_name,
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
                    const response = await axios.post('/register',request);
                    console.log(response);
                  } catch (error) {
                    console.error(error);
                  }
                }
                getUser()*/
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("'Access-Control-Allow-Origin'", "*");
                 var raw = JSON.stringify({"email":values.email,"username":values.username,"first_name":values.first_name,"last_name":values.last_name,"password":values.password});
                 //var raw = JSON.stringify({"username":values.username1,"password":values.password});
                 var requestOptions = {
                 method: 'POST',
                 headers: myHeaders,
                 body: raw,
                 redirect: 'follow',
                 };
                 fetch("https://35c1-58-84-61-72.in.ngrok.io/register/", requestOptions)
                  .then(response => response.text())
                  .then(result => {console.log(result)
                      console.log('its working!')
                      setShowSuccess(true);})
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
					  	There was an error. Please try again
		            </Snackbar>
                    <Snackbar 
		              visible={showSuccess} 
		              duration={2000} 
		              onDismiss={()=>setShowSuccess(false)}
		              style={{marginBottom: 80, backgroundColor:'green',color:'white'}}
		            >
					  	Account Created Successfully!
		            </Snackbar>
                    <Headline style={styles.title}>Create Your Account.</Headline>
                    <Surface style={styles.bgSurface}>
                    <TextInput
                      style={styles.txtInput}
                      label="Enter Email" 
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
                    /> 
                    <Text style={styles.errText}>{errors.email}</Text>
                    <TextInput
                      style={styles.txtInput}
                      label="Enter Username" 
                      type="username"
                      halfWidth
                      mode="outlined"
                      placeholder="Enter Username"
                     
                      helperText={touched.username?errors.username:''}
                      error={!!errors.username&&touched.username}
                    //   inputProps={{autoComplete:'new-email'}}



                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                    /> 
                    <Text style={styles.errText}>{errors.username}</Text>
                    <TextInput
                      style={styles.txtInput}
                      label="First Name" 
                      type="first_name"
                      halfWidth
                      mode="outlined"
                      placeholder="Enter Your First Name"
                     
                      helperText={touched.first_name?errors.first_name:''}
                      error={!!errors.first_name&&touched.first_name}
                    //   inputProps={{autoComplete:'new-email'}}



                      onChangeText={handleChange('first_name')}
                      onBlur={handleBlur('first_name')}
                      value={values.first_name}
                    /> 
                    <Text style={styles.errText}>{errors.first_name}</Text>
                    <TextInput
                      style={styles.txtInput}
                      label="Last Name" 
                      type="last_name"
                      halfWidth
                      mode="outlined"
                      placeholder="Enter Your Last Name"
                     
                      helperText={touched.last_name?errors.last_name:''}
                      error={!!errors.last_name&&touched.last_name}
                    //   inputProps={{autoComplete:'new-email'}}



                      onChangeText={handleChange('last_name')}
                      onBlur={handleBlur('last_name')}
                      value={values.last_name}
                    /> 
                    <Text style={styles.errText}>{errors.last_name}</Text>
                    <TextInput
                     style={styles.txtInput}
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
                    />
                    <Text style={styles.errText}>{errors.password}</Text>
                    <TextInput
                     style={styles.txtInput}
                     label="Re-Enter Password"
                     secureTextEntry
                     right={<TextInput.Icon name="eye" />}
                    
                     type="password1"
                     halfWidth
                     mode="outlined"
                     placeholder="Re-Enter Password"
                    
                     helperText={touched.password1?errors.password1:''}
                     error={!!errors.password1&&touched.password1}
                   //   inputProps={{autoComplete:'new-email'}}



                     onChangeText={handleChange('password1')}
                     onBlur={handleBlur('password1')}
                     value={values.password1}
                    />
                    <Text style={styles.errText}>{errors.password1}</Text>
                    <Text style={styles.txtInput}></Text>
              <Button 
               type="submit" 
               halfWidth
               disabled={isSubmitting}
               variant="contained" 
               style={{backgroundColor:"#FF5959",padding:10,width:300,height:55,
               marginLeft:'auto',
               marginRight:'auto', marginBottom:55}}
               mode="contained"  
               onPress={handleSubmit} 
               title="Submit" >
               <Text style={styles.btnText}> 
               CREATE ACCOUNT 
               </Text>
               </Button>
               <Text style={styles.linkTxt1}>Already have an account?{'\n'}</Text>
               <TouchableOpacity
               onPress={loginHandler}>  
               <Text style={styles.linkTxt2}>
               Log in here. 
               </Text>
               </TouchableOpacity></Surface>
              </View>
     )}
            </Formik>
        </> 
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
        fontSize: 40,
        marginTop:0,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7
    },
    bgSurface:{
      width:350,
      height:550,
      backgroundColor:'#C4C4C4',
      elevation:5,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:10,
      justifyContent:"space-around" 
    },
    errText:{
      marginLeft:30,
      fontSize:18,
      fontWeight:'bold',
      fontFamily:'Roboto',
      color:'red',
      paddingBottom:5
    },
    linkTxt1:{
      fontWeight:'bold',
      textAlign:'center',
      fontSize:18,
      marginBottom:8
    },
    linkTxt2:{
      fontWeight:'bold',
      textAlign:'center',
      fontSize:18,
      marginBottom:28,
      textDecorationLine:'underline'
    },
    btnText:{
      fontSize:16,
      fontWeight:'bold',
      color:'white',
    },
     txtInput:{
      fontSize: 18,
      height:55,
       width:300,
       marginTop:30,
       marginLeft:'auto',
       marginRight:'auto',
     },

});

export default Register;
