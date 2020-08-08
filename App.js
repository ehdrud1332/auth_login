
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from "./screens/RootStackNavigation";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from './screens/SignInScreen';

const App = () => {
  return (
    // <NavigationContainer>
    //     <RootStackNavigation />
    // </NavigationContainer>
      <SignInScreen />
  );
}


export default App;
