import React from "react";
import { StyleSheet, Button, Pressable, View, SafeAreaView, StatusBar, Platform} from 'react-native';
import { Text, VStack, HStack, Center, Divider } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SetDestinationSetRoute from '../components/SetDestinationSetRoute'
import BusRouteData from "../json/BusRoute.json";
import SetDestinationBasicInfo from "../components/SetDestinationBasicInfo";

const SetDestinationScreen = ({}) => {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.screen}>
            <View style={styles.card}>
                <Center>
                    <Text style={styles.sectionHeader}>選擇目的地</Text>
                    <Divider my="$0.5" style={styles.divider}/>
                </Center>
                <SetDestinationBasicInfo busDetail = {BusRouteData[0]}/>
                {/* <View style={styles.SetDestinationCard}>
                    <SetDestinationSetRoute />
                </View> */}
                <HStack style={styles.getUpBTN}>
                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <View style={styles.getUpBTNCancel}>
                            <Text style={styles.btnTextCancel}>取消</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('WattingBus')}>
                        <View style={styles.getUpBTNConfirm}>
                            <Text style={styles.btnTextConfirm}>確認</Text>
                        </View>
                    </Pressable>
                </HStack>
            </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    screen:{

        width:'auto',
        display:'flex',
        flex: 1, 
        backgroundColor:'#E1E9F7',
        justifyContent:'center',
        alignItems:'center',
        // paddingLeft:'auto',
        // paddingRight:'auto',
        // marginLeft:'auto',
        // marginRight:'auto',
    },
    card:{
        marginTop:4,
        marginBottom:0,
        backgroundColor:'#fff',
        width:339,
        height:620,
        borderWidth:0,
        borderRadius:34,
        shadowColor:'#435a5e',
        shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    sectionHeader: {
      color:'#000',
      fontSize: 22,
      fontWeight:'500',
      marginTop:Platform.OS === 'ios' ? 20 :  5 ,
      marginBottom:5,
    },
    divider:{
        width:272,
        backgroundColor:'#8FAFDE',
        borderWidth:0.3,
        borderColor:'#8FAFDE',
        marginBottom:20,
    },
    SetDestinationCard:{
        height:388,
        paddingBottom:0,
    },
    text:{
        margin:20,
    },
    getUpBTN:{
        width:190,
        height:60,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:-40,
        marginBottom:20,
        borderWidth:0,
        borderRadius:14,
    },
    getUpBTNCancel:{
        width:95,
        height:60,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#5E86C1',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:14,
        borderBottomLeftRadius:14,
        shadowColor:'#435a5e',
        shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    getUpBTNConfirm:{
        width:95,
        height:60,
        backgroundColor:'#5E86C1',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0,
        borderTopRightRadius:14,
        borderBottomRightRadius:14,
        shadowColor:'#435a5e',
        shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    btnTextCancel:{
        color:'#5E86C1',
        fontSize:24,
        paddingBottom:5,
    },
    btnTextConfirm:{
        color:'#FFF',
        fontSize:24,
        paddingBottom:5,
    }
});

export default SetDestinationScreen;