import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from "./Auth/SplashScreen";
import SignInScreen from "./Auth/SignInScreen";
import SignUpScreen from "./Auth/SignUpScreen";

const RootStack = createStackNavigator();

const RootStackScreen = () => (

    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />

    </RootStack.Navigator>
)

export default RootStackScreen;
