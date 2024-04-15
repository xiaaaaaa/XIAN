import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box, Center, VStack } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailRouteSet from "./DetailRouteSet"

const DetailRouteSegmented = (props) => {
    const {data} = props.busDetail;
    const [selectedIndex, setSelectedIndex] = useState(0);

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <DetailRouteSet route={1}/>
            )
        } else {
            return (
                <DetailRouteSet route={0}/>
            )
        }
    }
    return(
        <View style={styles.busDetailCard}>
            <HStack style={styles.route}>
                <Text style={styles.toText}>往</Text>
                <Box flex={1}>
                    <SegmentedControlTab 
                        values={[data[0].routes[0].busRoute, data[0].routes[1].busRoute]}
                        activeTabStyle={{
                            width:194,
                            height:53,
                            backgroundColor: "#fff",   
                            borderColor: '#C4D7F3',
                            shadowColor:'#435a5e',
                            shadowOffset: { width: 0, height: 20},
                            shadowOpacity: 0.1,
                            // Android Only
                            elevation: 3,
                        }}
                        tabStyle={{ 
                            width:194,
                            height:53,
                            backgroundColor: "#C4D7F3",
                            borderColor: "#C4D7F3",
                            borderWidth:2,
                        }}
                        firstTabStyle={{ marginLeft: 10,  borderTopLeftRadius:9,borderBottomLeftRadius:9,}}
                        lastTabStyle={{ marginRight: 50, borderTopRightRadius:9, borderBottomRightRadius:9 }}
                        tabTextStyle={{ fontSize: 16, color: "#354967"}}
                        activeTabTextStyle={{ fontSize: 16, color: "#000"}}
                        selectedIndex={selectedIndex}
                        onTabPress={(index) => setSelectedIndex(index)}
                    />
                </Box>
            </HStack>
            <SegmentedContent />
        </View>
    );
};
const styles = StyleSheet.create({
    busDetailCard:{
        width:350,
        height:500,

        display:'flex',
        marginTop:20,
        marginBottom:15,
        marginLeft:'auto',
        marginRight:'auto',
    },
    route:{
        // height:900,
        marginBottom:15,

        justifyContent:'center',
        alignItems:'center',

    },
    SegmentedControl:{
        display:'flex',
    },
    busNum:{
        paddingLeft:35,
        paddingRight:35,
        fontSize:55,
    },
    toText:{
        fontSize:20,
        marginLeft:50
    }
});

export default DetailRouteSegmented;