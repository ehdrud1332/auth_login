import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const Rating = (props) => {

    let stars = [];

    for (var i = 1; i <= 5; i++) {
        let name = 'ios-star';

        if(i > props.ratings) {
            name = 'ios-star-outline'
        }

        stars.push((<Ionicons name={name} size={15} style={styles.star} key={i} />));
    }

    return (
        <View style={styles.container}>
            {stars}
            <Text style={styles.text}>({props.reviews})</Text>
        </View>
    );
};

export default Rating;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        color: '#FF8C00'
    },
    text: {
        fontSize: 12,
        marginLeft: 5,
        color: '#444',
    }
});
