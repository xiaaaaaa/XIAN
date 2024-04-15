import React from 'react';
import { View, Text, SectionList, FlatList } from "react-native"
import BusRouteData from "../json/BusRoute.json";
import DetailRouteForDetail from "./DetailRouteForDetail"
import DetailRouteEndDetail from "./DetailRouteEndDetail"

const DetailRouteSet = ({ route }) => {

    const renderItem = ({ item }) => {
        return null
    };
    const DetailRouteComponent = route === 0 ? DetailRouteForDetail : DetailRouteEndDetail;
    const renderSectionHeader = ({ section }) => (
        <>
            <FlatList
            horizontal={false}
            data={section.data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <DetailRouteComponent busRoute={item} />} 
            keyExtractor={item => item.title}
        />

        </>
    );
    return (
        <View>
            <SectionList
                sections={BusRouteData}
                keyExtractor={item => item.title}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
        </View>

    );
};
export default DetailRouteSet;