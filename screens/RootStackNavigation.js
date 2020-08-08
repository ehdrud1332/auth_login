import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const RootStack = createStackNavigator();

const RootStackNavigation = ({navigation}) => (
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="SignUpScreen" components={SignUpScreen} />
        <RootStack.Screen name="SplashScreen" components={SplashScreen} />
        <RootStack.Screen name="SignInScreen" components={SignInScreen} />

    </RootStack.Navigator>
)

export default RootStackNavigation;
