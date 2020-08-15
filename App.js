
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import RootStackScreen from "./screens/RootStackNavigation";
import DrawerContent from './screens/Main/DrawerContent';
import MainTabScreen from "./screens/MainTabScreen";

const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="HomDrawer" component={MainTabScreen} />
        </Drawer.Navigator>
        {/*<RootStackScreen />*/}
        {/*<MainTabScreen />*/}
    </NavigationContainer>
  );
}


export default App;
