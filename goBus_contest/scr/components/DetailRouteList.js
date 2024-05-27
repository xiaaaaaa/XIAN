import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {
    Actionsheet, Box, Button, ButtonText, ActionsheetBackdrop,
    ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator,
    ActionsheetItem, ActionsheetItemText, ActionsheetFlatList,
} from '@gluestack-ui/themed';
import Icon from "react-native-vector-icons/AntDesign"
import BusRouteData from "../json/BusRoute.json";
import DetailRouteSegmented from "../components/DetailRouteSegmented";

const DetailRouteList = () => {
    const [showActionsheet, setShowActionsheet] = React.useState(true);
    const [snapPoints, setSnapPoints] = React.useState([60]);
    const handleClose = () => {
        if (snapPoints.length === 1 && snapPoints[0] === 60) {
            setSnapPoints([20]);
        } else {
            setSnapPoints([60]);
        }
    };
    const Item = React.useCallback(
        ({ title }) => (
            <ActionsheetItem>
                <ActionsheetItemText>{title}</ActionsheetItemText>
            </ActionsheetItem>
        ),
        [handleClose]
    )
    return (
        <Actionsheet
            isOpen={showActionsheet}
            snapPoints={snapPoints}
            initialSnap={[50]}>
            <ActionsheetBackdrop style={styles.backdrop} />
            <ActionsheetContent h='$72' >
                <View style={styles.contentContainer}>
                    <Text style={styles.BusNumText}>18</Text>
                    <View style={styles.BusRouteContainer}>
                        <DetailRouteSegmented busDetail={BusRouteData[0]} />
                    </View>
                </View>
            </ActionsheetContent>
        </Actionsheet>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'transparent',
        marginTop: 900
    },
    busNum: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 5,
        fontSize: 30
    },
    contentContainer: {
        height: 'auto',
        width: 'auto',
        paddingTop: 10,
        paddingBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 30
    },
    BusNumText: {
        color: '#000000',
        fontSize: 48,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    BusRouteContainer: {
        justifyContent: 'center',
    }
});

export default DetailRouteList;