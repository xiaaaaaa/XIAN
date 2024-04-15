import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Text, View, Box } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailRoute from '../components/DetailRoute'
import BusRouteData from "../json/BusRoute.json";
import DetailRouteSegmented from "../components/DetailRouteSegmented";

const DetailRouteScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.BusNumText}>18</Text>
                <View style={styles.BusRouteContainer}>
                    <DetailRouteSegmented busDetail={BusRouteData[0]} />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#C4D7F3',
    },
    contentContainer: {
        height: 'auto',
        width: 'auto',
        paddingTop: 10,
        paddingBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 30
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