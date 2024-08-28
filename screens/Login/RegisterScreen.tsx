import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';
import InputComponent from '../../components/InputComponent';
import PrimaryButton from '../../components/PrimaryButton';
import OrSeparator from '../../components/OrSeparator';

import { NavigationProp } from '@react-navigation/native';

const RegisterScreen = ({navigation}:NavigationProp) => {
  return (
    <ImageBackground 
        resizeMethod='resize'
      source={require('../../assets/background.png')} 
      style={styles.background}
      resizeMode="cover" // Adjust the image to cover the entire background
    >
        <Text style={styles.titleText}>Euphoria</Text>
        <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.getStartedText} >Get started with healing here </Text>
            
            <View style={styles.labelContainer}>
                <Text style={styles.inputLabelText}>Email</Text>
            </View>

            <InputComponent placeholder='Email' />

            <View style={styles.labelContainer}>
                <Text style={styles.inputLabelText}>Password</Text>
            </View>

            <InputComponent onChangeText={()=>null} placeholder='Password' />

        </View>
        <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity style={{padding:12}}>
                <Text style={styles.inputLabelText}>forgot Password ?</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
            <PrimaryButton  onPress={()=> navigation.replace("Selection")} color={Colors.BLACK_200} text={'Register'} />
        </View>
        <OrSeparator/>

        <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.IconPressable} >
                <Image style={styles.iconImage}  source={require("../../assets/google.png")} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconPressable} >
                <Image style={styles.iconImage}  source={require("../../assets/fblogo.png")} />

            </TouchableOpacity>
        </View>
        <View style={styles.altContainer}>
            <Text style={styles.altText}>Already Have An Account ?</Text>
            <TouchableOpacity>
                <Text style={styles.altLabel} >Sign In</Text>
            </TouchableOpacity>
        </View>
      
    
    </ImageBackground>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Make sure the background image covers the entire screen
    justifyContent: 'center',
    backgroundColor:Colors.BACKGROUND_COLOR
  },
 
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.WHITE_100,
    padding:16
  },
  textContainer: {
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:12
    
  },
  welcomeText: {
    fontSize:20, 
    color:'#CDCDCD',
    fontWeight:'light',
    marginVertical:8
  },
  getStartedText: {
    fontSize:16,
    color:'#CDCDCD',
    marginVertical:8

  },

  inputLabelText: {
    fontSize:14,
    color:'white',
    fontWeight:'medium',
    textAlign:'left',
    
  },
  labelContainer: {
    justifyContent:'flex-start',
     alignItems:'flex-start', 
     width:"80%",
    },
    forgotPasswordContainer: {width:"100%", alignItems:'flex-end'},

    buttonContainer:{
        justifyContent:'center',
        width:'100%',
        alignItems:'center'
    },
    iconImage: {
        height:50,
        width:50,
       
    },
    iconsContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    IconPressable:{
        marginHorizontal:20,
        borderWidth:1,
        borderColor:"#8A8585",
        height:80,
        width:80,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    altContainer: {justifyContent:'center', alignItems:'center', marginVertical:12, flexDirection:'row'},
    altText: {fontSize:14, color:Colors.WHITE_100},
    altLabel:{fontSize:16, color:Colors.PURPLE_100, marginHorizontal:8}
});
