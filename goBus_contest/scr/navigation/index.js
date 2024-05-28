import React, {useState} from "react";
import { StyleSheet, Keyboard} from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider, Image, VStack, Text, HStack} from '@gluestack-ui/themed';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


//檔案插入 ===========================//
//Tab Screen
import HomeScreen from "../screens/HomeScreen";
import SetDestinationScreen from "../screens/SetDestinationScreen";
import WattingBusScreen from "../screens/WattingBusScreen";
import TakingBusScreen from "../screens/TakingBusScreen";
import ArriveDestinationScreen from "../screens/ArriveDestinationScreen";

import SearchScreen from "../screens/SearchScreen";
import DetailRouteScreen from "../screens/DetailRouteScreen";
import DetailRouteForSearchScreen from "../screens/DetailRouteForSearchSrceen";
import SettingScreen from "../screens/setting/SettingScreen";

//Setting Screen
import QuestionScreen from "../screens/setting/QuestionScreen";
import UsageScreen from "../screens/setting/UsageScreen";
import ChangePasswordScreen from "../screens/setting/ChangePasswordScreen";

//Lost found Screen
import LostFoundScreen from "../screens/LostFound/LostFoundScreen";
import PlusLostFoundScreen from "../screens/LostFound/PlusLostFoundScreen";

//Theme ===========================//
import MyTheme from "../Theme";
// import { background } from "native-base/lib/typescript/theme/styled-system";


//Navigation 主程式 ===========================//
const Navigation = () => {
    return(

        <NativeBaseProvider>
            <NavigationContainer theme={MyTheme}>
                <MyTab  />
            </NavigationContainer>
        </NativeBaseProvider>
    )
}


//Tab ===========================//

//主頁面
const MyTab = () => {
    const { colors } = useTheme();

    return(
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarInactiveTintColor: colors.primary700,
                tabBarActiveTintColor: colors.light600,
                tabBarLabelStyle:{
                    fontWeight:'600',
                    fontSize:12,
                    marginBottom:20,
                },
                tabBarStyle:{
                    height:80,
                    padding:8,
                }
            }}
        >
            <Tab.Screen 
                name="LostFoundStack"
                component={LostFoundStack}
                options={{
                    headerShown: false,
                    title: '失物招領',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="archive-search" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen 
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title:'主頁',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                        
                    },
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="home-variant" color={color} size={30} />
                    ),
                   
                }}
            />
            <Tab.Screen 
                name="SearchStack"
                component={SearchStack}
                options={{
                    
                    headerShown: false,
                    title: '搜尋',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen 
                name="SettingStack"
                component={SettingStack}
                options={{
                    headerShown: false,
                    title: '設定',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="cog" color={color} size={30} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

const LostFoundStack = ({navigation}) => {
    return(
        <Stack.Navigator >
            <Stack.Screen 
                name="LostFound"
                component={LostFoundScreen}
                options={{
                    title: '失物招領',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                    
                }}
            />
            <Stack.Screen 
                name="PlusLostFound"
                component={PlusLostFoundScreen}
                options={{
                    title: '增加遺失物品',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                    
                }}
            />
            
        </Stack.Navigator>
    );
}

//Tab 【主畫面 + 設定目的地畫面 + 等車中畫面 + 搭車中畫面 + 恭喜抵達目的地畫面】
const HomeStack = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                
                options={{
                    title: "國立台北教育大學",
                    headerTitleStyle: {
                        fontSize:18
                    },
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                    headerShadowVisible: false,
                    
                    
                }}
            />
            <Stack.Screen 
                name="SetDestination"
                component={SetDestinationScreen}
                // tabBarStyle={
                //     display:'none',
                // },
                options={{
                    title: "",
                    headerShown:false,
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerShadowVisible: false,
                    // tabBarStyle:{
                    //     display:'none'
                    // }
                }}
            />
            <Stack.Screen 
                name="WattingBus"
                component={WattingBusScreen}
                options={{
                    title: "國立台北教育大學",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                    headerShadowVisible: false,
                    
                }}
            />
            <Stack.Screen 
                name="TakingBus"
                component={TakingBusScreen}
                options={{
                    title: "國立台北教育大學",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                    headerShadowVisible: false,
                    
                }}
            />
            <Stack.Screen 
                name="ArriveDestination"
                component={ArriveDestinationScreen}
                options={{
                    title: "",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                    
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen 
                name="DetailRoute"
                component={DetailRouteScreen}
                options={{
                    title: '',
                    headerShown:false,
                }}
            />
        </Stack.Navigator>
    );
}

//Tab 【搜尋頁面】
const SearchStack = ({navigation}) => {
    const hideKeyboardAndOpenDrawer = () => {
        Keyboard.dismiss(); 
        navigation.openDrawer(); 
    };
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Search"
                component={SearchScreen}
                options={{
                    title: '搜尋公車路線',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                    
                }}
            />
            <Stack.Screen 
                name="DetailRoute"
                component={DetailRouteForSearchScreen}
                options={{
                    title: '',
                    headerShown:false,
                }}
            />
        </Stack.Navigator>
    );
}

//Tab 【設定頁面】
const SettingStack = ({navigation}) => {
    return(
        <Stack.Navigator >
            <Stack.Screen 
                name="Setting"
                component={SettingScreen}
                options={{
                    title: '設定',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                    
                }}
            />
            <Stack.Screen 
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={{
                    title: '修改密碼',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                }}
            />
            <Stack.Screen 
                name="Question"
                component={QuestionScreen}
                options={{
                    title: '常見問題',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                }}
            />
            <Stack.Screen 
                name="Usage"
                component={UsageScreen}
                options={{
                    title: '使用方式',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    headerStyle:{
                        backgroundColor:'#C4D7F3'
                    },
                }}
            />
        </Stack.Navigator>
    );
}



//styles ===========================//
const styles = StyleSheet.create({
    drawerTitle:{
        display:'flex',
        borderWidth:0,
        margin:23,
        marginTop:15,
        marginBottom:2,
        alignItems:'flex-end',
    },
    drawerAppName:{
        fontSize:16,
        fontWeight:'500',
        color:'#5E86C1',
        marginLeft:5,
        paddingBottom:5,
    },
    drawerDivider:{
        width:256,
        marginHorizontal:23,
        backgroundColor:'#C4D7F3',
        marginBottom:30,
    },
});

export default Navigation;