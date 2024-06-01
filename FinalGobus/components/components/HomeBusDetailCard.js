import React from "react";
import { StyleSheet, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BusRouteData from "../json/BusRoute.json";
import HomeBusDetailCardDetail from "./HomeBusDetailCardDetail";

const HomeBusDetailCard = () => {
    return (
        <HomeBusDetailCardDetail busDetail = {BusRouteData[0]} />
    );
}

const styles = StyleSheet.create({
    
});

export default HomeBusDetailCard;