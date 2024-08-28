import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'

export default function SettingsScreen() {
  return (
    <View style={styles.main} >
      <Text>SettingsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor:Colors.BACKGROUND_COLOR
    }
})