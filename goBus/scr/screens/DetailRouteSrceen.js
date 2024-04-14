import React from "react";
import { StyleSheet } from 'react-native';
import { Text, View } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailRoute from '../components/DetailRoute'

const DetailRouteScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.BusNumText}>18往萬華</Text>
            <View style={styles.contentContainer}>
                <DetailRoute />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    BusNumText:{
        color:'#000000',
        fontSize:24,
        paddingBottom:5,
        marginLeft:'auto',
        marginRight:'auto',
    },
});

export default DetailRouteScreen;