
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from "./screens/RootStackNavigation";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from './screens/SignInScreen';

const App = () => {
  return (
    <NavigationContainer>
        <RootStackScreen />
    </NavigationContainer>
    //   <SignInScreen />
  );
}


export default App;
