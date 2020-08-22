import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {gs, colors} from '../styles';


const hotel = {
    name: "Mt, Catlin Hotel",
    price: "$967",
    location: "New York",
    about: "sdlkfsfdsklf;sakfsa;lskfla;lslkdfslsflfas;lsflas, saf;asffssf;'asa;s;asf"
}


const About = () => {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>
                {hotel.name}
            </Text>
            <Text style={styles.info}>
                {hotel.price} &#8226; {hotel.location}
            </Text>

            <View style={gs.divider}/>
            <Text style={gs.sectionTitle}>About {hotel.name}</Text>
            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    info: {
        color: colors.textsec,
            fontWeight: '600',
            marginTop: 4
    },
    about: {
        fontSize: 13,
            fontWeight: "600",
            color: colors.textsec,
            marginTop: 6,
            lineHeight: 20
    }
});
