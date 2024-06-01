import React from "react";
import { StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Box, Button, ButtonText, Fab, FabIcon, FabLabel } from '@gluestack-ui/themed';
import Icon from "react-native-vector-icons/AntDesign"
import DetailRouteList from "../components/DetailRouteList";

const DetailRouteForSearchScreen = () => {
    const navigation = useNavigation();
    return (
        <Box>
            <MapView style={styles.map}
                initialRegion={{
                    longitude: 121.54495559874613,
                    latitude: 25.02401277135561, 
                    longitudeDelta: 0.002,
                    latitudeDelta: 0.003
                }}
            />
            <Fab
                size="sm"
                height={40}
                width={40}
                left="$4"
                top="$5"
                isHovered={false}
                isDisabled={false}
                isPressed={false}
                onPress={() => navigation.goBack()}
                backgroundColor="#EFEFF0"
                opacity='$40'
                shadowColor="transparent"
            >
                <Icon name={'close'} size={20} style={styles.right} />
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

export default DetailRouteForSearchScreen;