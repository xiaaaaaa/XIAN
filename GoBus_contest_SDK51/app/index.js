import { SafeAreaView, AppRegistry, Text, StatusBar } from 'react-native';
//import Navigation from './scr/navigation';
import Navigation from '../components/navigation'
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Provider } from "react-redux";
import store from "../components/redux/Store";

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

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

      <GluestackUIProvider config={config}>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle='dark-content' />
        <Provider store={store}>
          <Navigation />
        </Provider>
        {/* <Text>sfasf</Text> */}
      </GluestackUIProvider>
      {/* <Text>sfaf</Text> */}
    </SafeAreaView>

  );
}