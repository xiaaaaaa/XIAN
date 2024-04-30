import React from "react";
import { StyleSheet } from 'react-native';
import { Text } from '@gluestack-ui/themed';

const LostFoundScreen = () =>{
    return(
        <Text style={styles.text}>The LostFound Screen</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default LostFoundScreen;