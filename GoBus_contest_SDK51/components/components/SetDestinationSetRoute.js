import React from "react";
import { SectionList, FlatList, StyleSheet, Text } from "react-native";
import { Divider, Center, HStack, Box } from "@gluestack-ui/themed";
import SegmentedControlTab from "react-native-segmented-control-tab";

import BusRouteData from "../json/BusRoute.json";
import SetGoDestinationSetRouteDetail from "./SetGoDestinationSetRouteDetail";
import SetBackDestinationSetRouteDetail from "./SetBackDestinationSetRouteDetail";

const SetDestinationSetRoute = ({route}) =>{
    const renderSectionHeader = ({ section }) => (
        <>
          {route === 1?(
            <FlatList
              horizontal={false}
              data={section.data}
              renderItem={({ item }) => <SetBackDestinationSetRouteDetail busRoute={item} />}
              showsHorizontalScrollIndicator={false}
              keyExtractor={ item => item.title }
              contentContainerStyle={{
                // flexDirection : "row", flexWrap : "wrap", maxWidth:287,paddingLeft:10, paddingRight:4, 
                //flexDirection : "row", flexWrap : "wrap", 
                maxWidth:287, marginHorizontal:'auto',
                
              }} 
            />
          ):(
            <FlatList
              horizontal={false}
              data={section.data}
              renderItem={({ item }) => <SetGoDestinationSetRouteDetail busRoute={item} />}
              showsHorizontalScrollIndicator={false}
              keyExtractor={ item => item.title }
              contentContainerStyle={{
                // flexDirection : "row", flexWrap : "wrap", maxWidth:287,paddingLeft:10, paddingRight:4, 
                //flexDirection : "row", flexWrap : "wrap", 
                maxWidth:287, marginHorizontal:'auto',
                
              }} 
            />
            //null
          )}
          
        </>
    );
    const renderItem = ({ item, section , navigation}) => {
      return null
      // return <SetDestinationSetRouteDetail busRoute={item} navigation={navigation}/>
    };

    return (
      <Center>
        <SectionList style={styles.sectionList}
          sections={BusRouteData}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </Center>

    );

}

const styles = StyleSheet.create({
    sectionList:{
      height:388,
      width:287,
      backgroundColor:'#fff',
      borderColor:'#000',
      marginTop:0,
      paddingTop:20,
      paddingBottom:20,
      borderWidth:0,
      shadowColor:'#435a5e',
      shadowOffset: { width: 0, height: 20},
      shadowOpacity: 0.1,
      // Android Only
      elevation: 3,
      
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