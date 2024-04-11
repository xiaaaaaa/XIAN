import React from "react";
import { SectionList, FlatList, StyleSheet, Text } from "react-native";
import { Divider } from "@gluestack-ui/themed";

import BusRouteData from "../json/BusRoute.json";
import HomeLoveBusRouteCardDetail from "./HomeLoveBusRouteCardDetail";
import HomeBusRouteCardDetail from "./HomeBusRouteCardDetail"

const HomeBusRouteCard = () => {
    const renderSectionHeader = ({ section , navigation}) => (
        <>
          <Text style={styles.sectionHeader}>最愛路線</Text>
          <FlatList
              
              horizontal={true}
              data={section.data}
              renderItem={({ item }) => <HomeLoveBusRouteCardDetail busRoute={item} navigation={navigation}/>}
              showsHorizontalScrollIndicator={false}
              keyExtractor={ item => item.title }
              contentContainerStyle={{
                flexDirection : "row", flexWrap : "wrap", maxWidth:390,paddingLeft:4, paddingRight:4, 
                //flexDirection : "row", flexWrap : "wrap", 
              }} 
          />
          <Divider my="$0.5" style={styles.divider}/>
          <Text style={styles.sectionHeader}>路線</Text>
          <FlatList
              horizontal={true}
              data={section.data}
              renderItem={({ item }) => <HomeBusRouteCardDetail busRoute={item} navigation={navigation}/>}
              showsHorizontalScrollIndicator={false}
              keyExtractor={ item => item.title }
              contentContainerStyle={{
                flexDirection : "row", flexWrap : "wrap", maxWidth:390,paddingLeft:4, paddingRight:4, 
                //flexDirection : "row", flexWrap : "wrap", maxWidth:390 
              }} 
          />
          
        </>
    );
    const renderItem = ({ item, section , navigation}) => {
      return null
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

};

const styles = StyleSheet.create({
    sectionList:{
      height:169,
      borderColor:'#000',
      borderWidth:1,
    },
    sectionHeader: {
      fontWeight: '500',
      fontSize: 18,

      lineHeight:22,
      marginTop:20,
      marginBottom:0,
      marginLeft:4,
    },
    divider:{
      marginTop:25,
      marginLeft:4,
      marginRight:4,
      backgroundColor:'#C4D7F3',
    }
  })

export default HomeBusRouteCard;