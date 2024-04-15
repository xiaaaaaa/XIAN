import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, Box, Center } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SegmentedControlTab from "react-native-segmented-control-tab";
import SetDestinationSetRoute from "./SetDestinationSetRoute";

const SetDestinationBasicInfo = (props) => {
    const {data} = props.busDetail;
    const [selectedIndex, setSelectedIndex] = useState(0);

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <View style={styles.SetDestinationCard}>
                    <Center>
                        <Text style={styles.destinationText}>抵達目的地：臥龍街</Text>
                    </Center>
                    <SetDestinationSetRoute route={1}/>
                </View> 
            )
        } else {
            return (
                <View style={styles.SetDestinationCard}>
                    <Center>
                        <Text style={styles.destinationText}>抵達目的地：復興南路口</Text>
                    </Center>
                    <SetDestinationSetRoute route={0}/>
                </View> 
                // <Text>2</Text>
            )
        }
    }

    return(
        <Center>
            <Text style={styles.sectionHeader}>國立台北教育大學站</Text>
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
                            shadowColor:'#000',
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
                        firstTabStyle={{ marginLeft: 8,  borderTopLeftRadius:9,borderBottomLeftRadius:9,}}
                        lastTabStyle={{ marginRight: 0, borderTopRightRadius:9, borderBottomRightRadius:9 }}
                        textNumberOfLines={2}
                        tabTextStyle={{ 
                            fontSize: 16, color: "#354967", borderWidth:0,
                            textAlign: 'center',
                            lineHeight:20,
                            padding:0,
                            paddingVertical:0,
                        }}
                        activeTabTextStyle={{ color: "#000",}}
                        selectedIndex={selectedIndex}
                        onTabPress={(index) => setSelectedIndex(index)}
                    />
                </Box>
            </HStack>
            <SegmentedContent />
        </Center>
    )
}

const styles = StyleSheet.create({
    busDetailCard:{
        width:350,
        height:190,
        backgroundColor:'#E1E9F7',
        display:'flex',
        marginTop:36,
        marginBottom:15,
        marginLeft:'auto',
        marginRight:'auto',
        borderColor:'#fff',
        borderWidth:0,
        borderRadius:20,
    },
    destinationText:{
        fontSize:16,
        marginBottom:10,
    },
    sectionHeader:{
        fontSize:16,
        marginBottom:15,
    },
    route:{
        // height:900,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0,
        width:186,
        marginBottom:30,
    },
    toText:{
        fontSize:16,
    },
    SetDestinationCard:{
        height:388,
        paddingBottom:0,
    },
});

export default SetDestinationBasicInfo;