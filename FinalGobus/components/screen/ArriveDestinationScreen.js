import React, { useState, useEffect} from "react";
import { StyleSheet, View, Image, Pressable, Platform} from 'react-native';
import { Text, VStack, HStack, Fab } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
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
    const [title, setTitle] = useState("目的地抵達");
    const [body, setBody] = useState("西寧南路站\n已抵達");

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
                    source={require('../image/waitingBus.jpg')}
                    style={{ width: 230, height: 180, marginTop: 30, marginBottom: 10, borderRadius: 14 }}
                />
            </View>
            <View style={styles.Content}>
                <Text style={styles.Text}>您已抵達目的地</Text>
                <Text style={styles.Text}>請別忘了隨身行李</Text>
                <Text style={styles.Text}>並祝您旅途愉快!</Text>
            </View>
            <Pressable
                onPress={() => navigation.navigate('Home')}>
                <HStack style={styles.cancelBTN}>
                    <Text style={styles.btnText}>返回首頁</Text>
                </HStack>
            </Pressable>
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
    Content: {
        height: 200,
        width: 370,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 20,
        fontWeight: 500,
        color: '#000',
        marginBottom: 5,
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
    },
});

export default WattingBus;