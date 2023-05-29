// @ts-nocheck
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

export default App;
