import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

type PropTypes = {
    placeholder:string, 
    placeholderColor:string,
    onChangeText: ()=>void

}

export default function InputComponent({placeholder, placeholderColor, onChangeText}:PropTypes) {
  return (
    <View style={styles.inputOuter}>
      <TextInput style={styles.input} 
      onChangeText={onChangeText}
      placeholderTextColor={'white'} 
      cursorColor={'white'}
      placeholder={placeholder}  />
    </View>
  )
}


const styles = {
     input: {
        padding:8,
        fontSize:16,
        borderRadius:12,
        borderWidth:2,
        paddingHorizontal:30,
        borderColor:'#6C6C6C',
        width:312,
        backgroundColor:'#454545',
        height:50,
        color:'white'
        
    },
    inputOuter: {
        marginVertical:12,
    }
}