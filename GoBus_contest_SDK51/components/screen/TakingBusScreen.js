import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Pressable, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Text, VStack, HStack, Fab, Box, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Heading, Icon, CloseIcon } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailRoute from '../components/DetailRoute'
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

async function registerForPushNotificationsAsync() {
    let token;

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        //  if notification permission not granted, request the permission again
        if (existingStatus !== 'granted')
            finalStatus = (await Notifications.requestPermissionsAsync()).status;
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }

        // Learn more about projectId:
        // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
        const projectId =
            Constants?.expoConfig?.extra?.eas?.projectId ??
            Constants?.easConfig?.projectId;

        token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
    }
    else
        alert('Must use physical device for Push Notifications');

    return token;
}

async function sendPushNotification({ token, title, body }) {
    const message = {
        to: token,
        title, body
    };
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
    };

    await fetch('https://exp.host/--/api/v2/push/send', options);
}

const WattingBus = ({ route }) => {
    const [expoPushToken, setExpoPushToken] = useState("");
    const [inputToken, setInputToken] = useState("");
    const [title, setTitle] = useState("目的地即將抵達");
    const [body, setBody] = useState("西寧南路站\n即將抵達");

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => {
            setExpoPushToken(token);
            setInputToken(token);
        });
    }, []);
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false)
    const ref = React.useRef(null)
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../image/takingBus.png')}
                    style={{ width: 350, height: 180, marginTop: 5, marginBottom: 10, borderRadius: 14 }}
                />
            </View>
            <View style={styles.BusNumContent}>
                <Text style={styles.BusNumText}>18</Text>
                <Text style={styles.BusNumRouteText}>往萬華</Text>
            </View>
            <View style={styles.DetailRouteContainer}>
                <Text style={styles.Line}></Text>
                <View style={styles.DetailRoute}>
                    <DetailRoute />
                </View>
            </View>
            <Pressable
                onPress={() => navigation.navigate('Home')}>
                <HStack style={styles.cancelBTN}>
                    <Text style={styles.btnText}>取消搭車</Text>
                </HStack>
            </Pressable >
            <Fab
                height={50}
                width={50}
                size="sm"
                left="$4"
                bottom="$5"
                bg="transparent"
                shadowColor="transparent"
                onPress={async () => {
                    await sendPushNotification({
                        token: inputToken,
                        title,
                        body,
                    });
                }}>
                <MaterialCommunityIcons name="arrow-right" color={'#fff'} size={30} />
            </Fab>
            <Fab
                size="sm"
                right="$4"
                bottom="$5"
                bg="transparent"
                shadowColor="transparent"
                onPress={() => { navigation.navigate('ArriveDestination'); }}>
                <MaterialCommunityIcons name="arrow-right" color={'#fff'} size={30} />
            </Fab>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    BusNumContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: -10
    },
    BusNumText: {
        color: '#000000',
        fontSize: 36,
        paddingRight: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    DetailRouteContainer: {
        height: 310,
        width: 370
    },
    Line: {
        width: 3,
        height: 310,
        backgroundColor: '#C4D7F3',
        marginLeft: 330
    },
    DetailRoute: {
        height: 310,
        width: 370,
        paddingLeft: 8,
        marginTop: -310
    },
    cancelBTN: {
        width: 145,
        height: 46,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        marginBottom: 60,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#8FAFDE',
        borderWidth: 2,
        borderRadius: 14,
        shadowColor: '#435a5e',
        shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    btnText: {
        color: '#8FAFDE',
        fontSize: 24,
        paddingTop: 3,
        paddingBottom: 5,
        marginLeft: 5,
    }
});

export default WattingBus;