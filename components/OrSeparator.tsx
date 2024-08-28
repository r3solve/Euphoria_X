import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const OrSeparator = () => {
  return (
    <View style={styles.main}>
        <View style={styles.line}>
        </View>
            <Text style={styles.orText} >OR</Text>
        <View style={styles.line}>
        </View>
    </View>
  )
}

export default OrSeparator

const styles = StyleSheet.create({

    main: {
        flexDirection:'row',
        padding:16,
        justifyContent:'center'
    },
    line: {
        width:120,
        borderWidth:1,
        borderColor:'white',
        height:2,
        marginTop:12
    },
    orText: {
        fontSize:18,
        color:Colors.WHITE_100,
        marginHorizontal:12,
    }
})