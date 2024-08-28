import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home/HomeScreen';
import { Colors } from './constants/colors';
import SettingsScreen from './screens/Settings/SettingsScreen';
import SelectionScreen from './screens/Selection/SelectionScreen';
import RegisterScreen from './screens/Login/RegisterScreen';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Group screenOptions={{
          headerShown:false,
         
        }} >
          <Stack.Screen name='Selection' component={SelectionScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Settings' component={SettingsScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Group>

      </Stack.Navigator>

    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
