import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from '@expo/vector-icons/Ionicons';

import HomeScreen from "./Main/HomeScreen";
import DetailScreen from "./Main/DetailScreen";
import ExploreScreen from "./Main/ExploreScreen";
import ProfileScreen from "./Main/ProfileScreen";

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: "Home",
                tabBarColor: "#009387",
                tabBarIcon: ({color}) => (
                    <Icon name="ios-home" color={color} size={26}/>
                )
            }}
        />

        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: "Explore",
                tabBarColor: "#009387",
                tabBarIcon: ({color}) => (
                    <Icon name="ios-aperture" color={color} size={26}/>
                )
            }}
        />

        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: "Profile",
                tabBarColor: "#009387",
                tabBarIcon: ({color}) => (
                    <Icon name="ios-person" color={color} size={26}/>
                )
            }}
        />


    </Tab.Navigator>
)

export default MainTabScreen;
