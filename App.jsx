
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/navigation/AppNavigation';
import { SplashScreen } from './src/screens';
import { AuthProvider } from './src/context/AuthContext';

function App() {
  const [visible, setVisible] = useState(false)



  return (

    <View style={[styles.container]}>
      <StatusBar backgroundColor={Colors.lighter}
      />
      <NavigationContainer>
        <AuthProvider setIsVisible={setVisible}>
          {visible ? <AppNavigator /> : <SplashScreen />}
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default App;
