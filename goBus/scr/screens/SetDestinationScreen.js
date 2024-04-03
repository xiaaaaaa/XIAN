import React from "react";
import { StyleSheet } from 'react-native';
import { Text } from '@gluestack-ui/themed';

const SetDestinationScreen = () => {
    return(
        <Text style={styles.text}>The Set Destination Screen</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default SetDestinationScreen;