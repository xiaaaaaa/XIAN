import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { useNavigation } from '@react-navigation/native';
import { HStack, Box, Center } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeBusDetailCardDetail = (props) => {
    const {data} = props.busDetail;
    const [selectedIndex, setSelectedIndex] = useState(0);

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <Center flex={1} >
                    <Text>This is an Advanced Account Setting Page</Text>
                    <Image 
                        style={styles.road}
                        source={require('../image/road.svg')}
                    />
                </Center>
            )
        } else {
            return (
                <Center flex={1} >
                    <Text>This is a General Account Setting Page</Text>
                </Center>
            )
        }
    }

    return(
        <View style={styles.busDetailCard}>
            <HStack style={styles.route}>
                <Text>{data[0].busNum}</Text>
                <Text>往</Text>
                <Box flex={1} >
                    <SegmentedControlTab
                        values={[data[0].busNum, "Advanced"]}
                        tabStyle={{ 
                            backgroundColor: "white",
                            marginTop: 10,
                            borderColor: "gray",
                        }}
                        activeTabStyle={{
                            backgroundColor: "gray",
                            marginTop: 10,    
                            borderColor: "gray",       
                        }}
                        firstTabStyle={{ marginLeft: 20 }}
                        lastTabStyle={{ marginRight: 20 }}
                        tabTextStyle={{ fontSize: 16, padding: 5, color: "gray"}}
                        activeTabTextStyle={{ color: "white" }}
                        selectedIndex={selectedIndex}
                        onTabPress={(index) => setSelectedIndex(index)}
                    />
                </Box>
            </HStack>
            <SegmentedContent />
        </View>
    );
}

const styles = StyleSheet.create({
    busDetailCard:{
        width:350,
        height:190,
        backgroundColor:'#E1E9F7',
        display:'flex',
        marginTop:30,
        marginLeft:'auto',
        marginRight:'auto',
    },
    route:{
        // height:900,
    },
    road:{
        width:350,
        height:63,
    }
});

export default HomeBusDetailCardDetail;