import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Text, View, Box } from '@gluestack-ui/themed';
import SegmentedControlTab from "react-native-segmented-control-tab";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailRoute from '../components/DetailRoute'
import data from "../json/BusRoute.json"


const DetailRouteScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            
            
        }else {
            
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.BusNumText}>18</Text>

                
            <View style={styles.BusRouteContainer}>
                <DetailRoute />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:'auto',
        width:'auto',
        marginTop: 25,
        marginBottom: 90,
        justifyContent:'center',
        alignItems:'center'
    },
    BusNumText:{
        color:'#000000',
        fontSize:48,
        marginTop:10,
        marginLeft:'auto',
        marginRight:'auto',
    },
    BusRouteContainer:{

    }
});

export default DetailRouteScreen;