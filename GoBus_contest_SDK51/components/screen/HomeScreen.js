import React from "react";
import { StyleSheet, Button, Pressable, View, Platform} from 'react-native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import SetDestinationScreen from "./SetDestinationScreen";
import HomeBusRouteCard from "../components/HomeBusRouteCard";
import BusRouteData from "../json/BusRoute.json";
import HomeBusDetailCard from "../components/HomeBusDetailCard";

const HomeScreen = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.screen}>
            <HomeBusDetailCard />
            <HomeBusRouteCard
                list = {BusRouteData.busRoute}
            />
            <Pressable onPress={() => navigation.navigate('SetDestination')}>
                <HStack style={styles.getUpBTN}>
                    <MaterialCommunityIcons name="bell" color={'#fff'} size={30} style={styles.icon}/>
                    <Text style={styles.btnText}>我要上車！</Text>
                </HStack>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        width:'auto',
        display:'flex',
        flex: 1, 
        backgroundColor:'#fff',
        justifyContent:'center',
        // paddingLeft:'auto',
        // paddingRight:'auto',
        // marginLeft:'auto',
        // marginRight:'auto',
    },
    getUpBTN:{
        width:180,
        height:60,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20,
        marginBottom:50,
        backgroundColor:'#5E86C1',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0,
        borderRadius:14,
        shadowColor:'#435a5e',
        shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    icon:{
        marginLeft:10,
    },
    btnText:{
        color:'#fff',
        fontSize:22,
        //paddingBottom:5,
        marginLeft:10,
    },
});

export default HomeScreen;