import { Button, 
    StyleSheet, 
    Text, 
    View 

} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={{
        color:'white'
      }}>HomeScreen</Text>
      <Button  onPress={()=>(navigation.navigate("Settings"))} title='Press Me' />
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.BACKGROUND_COLOR
    }

})