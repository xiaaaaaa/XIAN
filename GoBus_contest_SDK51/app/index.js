import { SafeAreaView, AppRegistry, Text} from 'react-native';
//import Navigation from './scr/navigation';
import Navigation from '../components/navigation'
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";


export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
      <GluestackUIProvider config={config}>
        <Navigation />  
        {/* <Text>sfasf</Text> */}
      </GluestackUIProvider>
        {/* <Text>sfaf</Text> */}
    </SafeAreaView>

  );
}