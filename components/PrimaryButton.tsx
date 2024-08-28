import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

type PropTypes = {
    text:string,
    onPress: ()=>void,
    color:string,
}

const PrimaryButton = ({text, onPress, color}) => {
  return (
    <Pressable onPress={onPress}
        style={({pressed})=>
            [styles.buttonOuter, {backgroundColor:color}, pressed && styles.pressed]
        }
        >
      <Text style={[styles.text]} >{text}</Text>
    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuter: {
        marginVertical:8,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:280
        
    },
    text: {
        fontSize:20,
        color:Colors.WHITE_100,
        padding:12,
        width:300,
        textAlign:'center',
        fontWeight:'medium',
        paddingVertical:4
    },
    pressed: {
        opacity:0.7
    }
   
})