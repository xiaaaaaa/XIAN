import React from "react";
import { StyleSheet } from 'react-native';
import { Text } from '@gluestack-ui/themed';

const AboutUsScreen = () => {
    return(
        <Text style={styles.text}>The About Us Screen</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default AboutUsScreen;