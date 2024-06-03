import { SafeAreaView, AppRegistry, Text, StatusBar } from 'react-native';
import Navigation from '../components/navigation'
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import { Provider } from "react-redux";
import store from "../components/redux/Store";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar />
      <GluestackUIProvider config={config}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}