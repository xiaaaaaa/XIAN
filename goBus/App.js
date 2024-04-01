import { SafeAreaView } from 'react-native';
import Navigation from './scr/components';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
      <GluestackUIProvider config={config}>
        <Navigation />  
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
