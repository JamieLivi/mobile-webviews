import React from 'react';
import {StyleSheet, View, Text, Button, Linking} from 'react-native';
import WebView from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';

interface Props {}

const link = 'https://192.168.1.14:3000';

const App = (props: Props) => {
  const onPressAuthSesh = async () => {
    let result = await WebBrowser.openBrowserAsync(link);
    console.log('🚀 ~ result', result);
  };
  const onPressOpenBrowser = async () => {
    let result = await Linking.openURL(link);
    console.log('🚀 ~ result', result);
  };
  return (
    <View style={styles.container}>
      <Button title="open auth session" onPress={onPressAuthSesh} />
      <Button title="open web browser" onPress={onPressOpenBrowser} />
      <WebView source={{uri: link}} style={{marginTop: 20}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    paddingTop: 50,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
