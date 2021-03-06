import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import DismissKeyboard from "../../components/DismissKeyboard";

const SignInScreen = ({navigation}) => {

    const [data, setData] = useState({
        email : "",
        password: "",
        confirm_password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    })

    const textInputChange = (val) => {
        if(val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    };

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry : !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry : !data.confirm_secureTextEntry
        })
    }


    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <StatusBar backgroundColor="#009387" barStyle="light-content" />

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome
                        name={"arrow-left"}
                        size={25}
                        color="#fff"
                        style={{marginTop: 60, marginLeft: 30}}
                    />
                </TouchableOpacity>


                <View style={styles.header}>
                    <Text style={styles.text_header}>Login Now</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name={"envelope"}
                            color={"#05375a"}
                            size={20}
                        />
                        <TextInput
                            placeholder={"Your Email"}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />

                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20}
                        />

                        <TextInput
                            placeholder={"Your Password"}
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onchangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ? (
                                <Feather
                                    name={"eye-off"}
                                    color={"grey"}
                                    size={20}
                                />
                            ) : (
                                <Feather
                                    name={"eye"}
                                    color={"grey"}
                                    size={20}
                                />
                                )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn,{
                                borderWidth: 1,
                                borderColor: '#009387',
                                marginTop: 15
                            }]}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>
                                Sign In
                            </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                marginTop: 15,
                                borderWidth: 1
                            }]}
                            onPress={() => navigation.navigate('SignUpScreen')}
                        >
                                <Text style={[styles.textSign,{
                                    color: '#009387'
                                }]}>
                                    Sign Up
                                </Text>
                        </TouchableOpacity>

                    </View>
                </Animatable.View>
            </View>
        </DismissKeyboard>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});

