import React from 'react';
import { View, Text, SectionList, FlatList } from "react-native"
import BusRouteData from "../json/BusRoute.json";
import DetailRouteDetail from "./DetailRouteDetail"

const DetailRoute = () => {

    const renderItem = ({ item }) => {
        return null
    };

    const renderSectionHeader = ({ section }) => (
        <>
            <FlatList
                horizontal={false}
                data={section.data}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <DetailRouteDetail busRoute={item}/>}
                keyExtractor={ item => item.title }
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
export default DetailRoute;