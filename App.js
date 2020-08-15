
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from "./screens/RootStackNavigation";
import MainTabScreen from "./screens/MainTabScreen";

const App = () => {
  return (
    <NavigationContainer>
        {/*<RootStackScreen />*/}
        <MainTabScreen />
    </NavigationContainer>
  );
}


export default App;
