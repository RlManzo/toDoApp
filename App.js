import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
    <Navigation styles={styles.navStack}/>
    
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
  navStack:{
    backgroundColor:'blue'
  }
});
