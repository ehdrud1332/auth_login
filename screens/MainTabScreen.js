import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Ionicons} from '@expo/vector-icons';

import HomeScreen from "./Main/HomeScreen";
import DetailScreen from "./Main/DetailScreen";
import ExploreScreen from "./Main/ExploreScreen";
import ProfileScreen from "./Main/ProfileScreen";
import HotelScreen from "./Main/HotelScreen";

import HomeStackScreen from "./Stack/HomeStackScreen";

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
            component={HomeStackScreen}
            options={{
                tabBarLabel: "Home",
                tabBarColor: "#222",
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-home" color={color} size={26}/>
                )
            }}
        />

        <Tab.Screen
            name="Hotel"
            component={HotelScreen}
            options={{
                tabBarLabel: "Hotel",
                tabBarColor: "#222",
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-home" color={color} size={26}/>
                )
            }}
        />

        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: "Explore",
                tabBarColor: "#222",
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-aperture" color={color} size={26}/>
                )
            }}
        />

        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: "Profile",
                tabBarColor: "#222",
                tabBarIcon: ({color}) => (
                    <Ionicons name="ios-person" color={color} size={26}/>
                )
            }}
        />


    </Tab.Navigator>
)

export default MainTabScreen;
