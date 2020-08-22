import React from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import { colors } from '../../styles';

import Header from "../../components/Header";
import About from "../../components/About";
import Bookmark from "../../components/Bookmark";
import Stats from "../../components/Stats";

const ExploreScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Header />
            <View>
                <Bookmark />
                <About />
                <Stats />
            </View>
        </ScrollView>
    );
};

export default ExploreScreen;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
})
