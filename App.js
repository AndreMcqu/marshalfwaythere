import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Pictruebox}>
        <Image
          style={styles.firstPictrue}
          source={require('./assets/rover.jpg')} />
      </View>
      <View style={styles.wordbox}>
        <Text style={styles.words}>Le rover Opportunity</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Pictruebox:{
    flex: 3,
  },
  firstPictrue: {
    height: 600,
    width: '100%',
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 5,
  },
  smallcontainer: {
    flex: 1,
  },
  wordbox: {
    flex: 1,
  },
  words: {
    color: 'red',
    fontSize: 20,
  },
});