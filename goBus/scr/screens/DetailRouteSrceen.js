import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Text, View, Box } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailRoute from '../components/DetailRoute'
import BusRouteData from "../json/BusRoute.json";
import DetialRouteSegmented from "../components/DetialRouteSegmented";

const DetailRouteScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.BusNumText}>18</Text>
            <View style={styles.BusRouteContainer}>
                <DetialRouteSegmented busDetail={BusRouteData[0]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
        paddingTop: 25,
        paddingBottom: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white"
    },
    BusNumText: {
        color: '#000000',
        fontSize: 48,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    BusRouteContainer: {
        justifyContent: 'center',
    }
});

export default DetailRouteScreen;