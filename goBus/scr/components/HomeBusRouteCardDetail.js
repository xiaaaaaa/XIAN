import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box } from "@gluestack-ui/themed";

const HomeBusRouteCardDetail = props => {
    let {busRoute} = props;

    return(
        <HStack space="none" reversed={false} style>
            <View style={styles.busRouteCard}>
                <Text style={styles.busNum}>{busRoute.busNum}</Text>
            </View>
            <HStack style={styles.arrivalTime}>
                <Text>{busRoute.routes[0].data[5].arrivalTime}</Text>
                <Text>分</Text>
            </HStack>
        </HStack>
      

    )

};

const styles = StyleSheet.create({

});

export default HomeBusRouteCardDetail;