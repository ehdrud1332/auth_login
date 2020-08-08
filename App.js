
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from "./screens/RootStackNavigation";
import SignUpScreen from "./screens/SignUpScreen";

const App = () => {
  return (
    // <NavigationContainer>
    //     <RootStackNavigation />
    // </NavigationContainer>
      <SignUpScreen />
  );
}


export default App;
