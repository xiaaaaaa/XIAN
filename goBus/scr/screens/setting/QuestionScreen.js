import React from "react";
import { StyleSheet } from 'react-native';
import { Text } from '@gluestack-ui/themed';

const QuestionScreen = () => {
    return(
        <Text style={styles.text}>The Frequently Asked Questions Screen</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default QuestionScreen;