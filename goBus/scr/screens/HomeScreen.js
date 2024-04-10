import React from "react";
import { StyleSheet, Button, Pressable, View } from 'react-native';
import { Text, VStack } from '@gluestack-ui/themed';
import { useNavigation} from '@react-navigation/native';
//import SetDestinationScreen from "./SetDestinationScreen";
import HomeBusRouteCard from "../components/HomeBusRouteCard";
import BusRouteData from "../json/BusRoute.json";

const HomeScreen = () => {

    return(
        <View style={{flex: 1, backgroundColor:'#fff'}}>
            <HomeBusRouteCard 
                list = {BusRouteData.busRoute}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default HomeScreen;