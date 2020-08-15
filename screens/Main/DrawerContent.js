import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';



export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={require('../../assets/Jaemin.png')}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>JaemingSeong</Title>
                                <Caption style={styles.caption}>@ehdrud1332</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80 </Paragraph>
                                <Caption styles={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100 </Paragraph>
                                <Caption styles={styles.caption}>Followers</Caption>
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name="home-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Home"
                                onPress={() => {props.navigation.navigate("Home")}}
                            />
                        </Drawer.Section>

                        <Drawer.Section styles={styles.drawerSection}>
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name="account-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Profile"
                                onPress={() => {props.navigation.navigate("Profile")}}
                            />
                        </Drawer.Section>

                        <Drawer.Section styles={styles.drawerSection}>
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name="bookmark"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Bookmark"
                                onPress={() => {props.navigation.navigate("Bookmark")}}
                            />
                        </Drawer.Section>

                        <Drawer.Section styles={styles.drawerSection}>
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                        name="account-check-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Support"
                                onPress={() => {props.navigation.navigate("Support")}}
                            />
                        </Drawer.Section>

                        <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme}/>
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
