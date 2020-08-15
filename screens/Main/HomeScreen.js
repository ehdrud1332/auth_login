import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Rating from "../../components/Rating";


const HomeScreen = () => {

    const theme = useTheme();

    return (
        <ScrollView style={styles.container}>
            <StatusBar barstyle={theme.dark ? "light-content" : 'dark-content'} />
            <View style={styles.sliderContainer}>
                {/*<Swiper*/}
                {/*    autoplay*/}
                {/*    horizontal={false}*/}
                {/*    height={250}*/}
                {/*    activeDotColor="#FF6347"*/}
                {/*>*/}
                <Swiper
                    autoplay
                    horizontal={false}
                    height={250}
                    activeDotColor="#FF6347"
                >
                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/food-banner1.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/food-banner2.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/food-banner3.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/food-banner4.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/food-banner5.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-restaurant" size={35} color="#FF6347"/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Restaurant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons name="food-fork-drink" size={35} color="#FF6347"/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>FastFood Center</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons name="food" size={35} color="#FF6347"/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <Fontisto name="hotel" size={35} color="#FF6347"/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Hotels</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="md-restaurant" size={35} color="#FF6347"/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Dineouts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <MaterialIcons name="expand-more" size={35} color="#FF6347"/>
                    </View>
                    <Text style={styles.categoryBtnTxt}>Show more</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsWrapper}>
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: "#333",
                        margin: 20
                    }}
                >
                   Recently Viewed
                </Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../../assets/food-banner2.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Amazing Food Place</Text>
                        <Rating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>
                            Amazing description for this amazing place
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../../assets/food-banner3.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Amazing Food Place</Text>
                        <Rating ratings={2} reviews={138} />
                        <Text style={styles.cardDetails}>
                            Amazing description for this amazing place
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../../assets/food-banner4.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Amazing Food Place</Text>
                        <Rating ratings={1} reviews={29} />
                        <Text style={styles.cardDetails}>
                            Amazing description for this amazing place
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 250,
        width: '90%',
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 150,
        marginVertical: 10,
        flexDirection: 'row',
        // shadowColor: '#999',
        // shadowOffset: {width: 0, height: 1},
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        // borderRadius: 8,
        // borderBottomRightRadius: 0,
        // borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 15,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderLeftWidth: 0,
        // borderBottomRightRadius: 8,
        // borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    cardDetails: {
        fontSize: 13,
        color: '#444',
        marginTop: 10
    },
});
