import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import bg from './assets/images/bg1.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
      <Text>test</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg : {
       width:"100%",
       height:"100%",
  }

});
