import React from "react";
import { StyleSheet, Button, Pressable } from 'react-native';
import { Text, VStack } from '@gluestack-ui/themed';
import { useNavigation} from '@react-navigation/native';
import SetDestinationScreen from "./SetDestinationScreen";

const HomeScreen = () => {
    const navigation = useNavigation();

    return(
        <VStack>
            <Text style={styles.text}>The Home Screen</Text>
            <Pressable  onPress={() => navigation.navigate('SetDestinationScreen', SetDestinationScreen)}>
                <Button title="Learn More"/>
            </Pressable>
        </VStack>
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    }
});

export default HomeScreen;