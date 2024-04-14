import React from "react";
import { SectionList, FlatList, StyleSheet, Text } from "react-native";
import { Divider, Center, HStack, Box } from "@gluestack-ui/themed";
import SegmentedControlTab from "react-native-segmented-control-tab";

import BusRouteData from "../json/BusRoute.json";
import SetDestinationBasicInfo from "./SetDestinationBasicInfo";
import SetDestinationSetRouteDetail from "../components/SetDestinationSetRouteDetail";


const SetDestinationSetRoute = () =>{
    const renderSectionHeader = ({ section , navigation}) => (
        <>
          <FlatList
            horizontal={false}
            data={section.data}
            renderItem={({ item }) => <SetDestinationSetRouteDetail busRoute={item} navigation={navigation}/>}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.title }
            contentContainerStyle={{
              // flexDirection : "row", flexWrap : "wrap", maxWidth:287,paddingLeft:10, paddingRight:4, 
              //flexDirection : "row", flexWrap : "wrap", 
              maxWidth:287, marginHorizontal:'auto'
            }} 
          />
        </>
    );
    const renderItem = ({ item, section , navigation}) => {
      return null
      // return <SetDestinationSetRouteDetail busRoute={item} navigation={navigation}/>
    };

    return (
      <SectionList style={styles.sectionList}
        sections={BusRouteData}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    );

}

const styles = StyleSheet.create({
    sectionList:{
      height:169,
      borderColor:'#000',
      marginTop:0,
      borderWidth:1,
    },
    // sectionHeader: {
    //   fontWeight: '500',
    //   fontSize: 18,
    //   lineHeight:22,
    // },
    // divider:{
    //   marginLeft: 10,
    //   marginRight:4,
    //   backgroundColor:'#C4D7F3',
    // }
  })
  

export default SetDestinationSetRoute;