import React from "react";
import { StyleSheet } from 'react-native';
import { Text } from '@gluestack-ui/themed';

const TakingBusScreen = () => {
    return(
        <Text style={styles.text}>The Taking Bus Screen</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default TakingBusScreen;