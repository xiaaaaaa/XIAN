import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
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
    const [snapPoints, setSnapPoints] = React.useState([61]);
    const [isExpanded, setIsExpanded] = React.useState(false);
    const handleClose = () => {
        if (snapPoints.length === 1 && snapPoints[0] === 80) {
            setSnapPoints([40]);
            closeActionsheet();
            setIsExpanded(false);
        } else {
            setSnapPoints([80]);
            setIsExpanded(true);
        }
    };
    const closeActionsheet = () => {
        setShowActionsheet(false);
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
            onClose={handleClose}
            snapPoints={snapPoints}
            initialSnap={[61]}>
            <ActionsheetBackdrop
                style={styles.backdrop}
                closeOnOverlayClick={true}
                onClick={closeActionsheet} />

            <ActionsheetContent h='$72' >
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <View style={styles.contentContainer}>
                    <Text style={isExpanded ? styles.BusNumTextExpanded : styles.BusNumText}>18</Text>
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
        backgroundColor:'transparent',
        marginTop: -900
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

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 30
    },
    BusNumText: {
        color: '#000000',
        fontSize: 30,
        marginTop: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    BusNumTextExpanded:{
        color: '#000000',
        fontSize: 30,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    BusRouteContainer: {
        justifyContent: 'center',
    }
});

export default DetailRouteList;