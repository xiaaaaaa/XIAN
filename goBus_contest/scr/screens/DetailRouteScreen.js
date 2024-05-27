import React from "react";
import { StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Box, Button, ButtonText, Fab, FabIcon, FabLabel } from '@gluestack-ui/themed';
import Icon from "react-native-vector-icons/AntDesign"
import DetailRouteList from "../components/DetailRouteList";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <Box>
            <MapView style={styles.map}
                initialRegion={{
                    longitude: 121.544637,
                    latitude: 25.024624,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.02
                }}
            />
            <Fab
                size="md"
                height={50}
                width={60}
                left="$4"
                top="$10"
                isHovered={false}
                isDisabled={false}
                isPressed={false}
                onPress={() => navigation.navigate('Search')}
                backgroundColor="none"
                shadowColor="transparent"
            >
                <Icon name={'left'} size={20} style={styles.right} />
            </Fab>
            <DetailRouteList />
        </Box>
    );
}

const styles = StyleSheet.create({
    text: {
        margin: 20,
    },
    map: {
        width: '100%',
        height: '100%',
    }
});

export default HomeScreen;