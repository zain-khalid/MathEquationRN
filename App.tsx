import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './src/screens';

const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
