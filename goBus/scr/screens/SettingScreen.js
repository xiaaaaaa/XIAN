import React from "react";
import { StyleSheet } from 'react-native';
import { Text } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingScreen = () => {
    return(
        
        <Text style={styles.text}>The Setting Screen</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default SettingScreen;