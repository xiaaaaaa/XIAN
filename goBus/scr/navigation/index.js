import React, {useState} from "react";
import { StyleSheet, Keyboard } from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider, Image, VStack, Text, HStack} from '@gluestack-ui/themed';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


//檔案插入 ===========================//
// Drawer Screen
import LostFoundScreen from '../screens/drawer/LostFoundScreen';
import LoveBusScreen from '../screens/drawer/LoveBusScreen';

//Tab Screen
import HomeScreen from "../screens/HomeScreen";
import SetDestinationScreen from "../screens/SetDestinationScreen";
import WattingBusScreen from "../screens/WattingBusScreen";
import TakingBusScreen from "../screens/TakingBusScreen";
import ArriveDestinationScreen from "../screens/ArriveDestinationScreen";

import SearchScreen from "../screens/SearchScreen";
import SettingScreen from "../screens/SettingScreen";

//Setting Screen
import AboutUsScreen from "../screens/setting/AboutUsScreen";
import QuestionScreen from "../screens/setting/QuestionScreen";
import UsageScreen from "../screens/setting/UsageScreen";


//Theme ===========================//
import MyTheme from "../Theme";
// import { background } from "native-base/lib/typescript/theme/styled-system";


//Navigation 主程式 ===========================//
const Navigation = () => {
    return(

        <NativeBaseProvider>
            <NavigationContainer theme={MyTheme}>
                <MyDrawer  />
            </NavigationContainer>
        </NativeBaseProvider>
    )
}


//Drawer ===========================//

//Drawer自訂項目
const DrawerContent = (props) => {
    return(
        <DrawerContentScrollView {...props} >
            <HStack space="none" reversed={false}>
                <MaterialCommunityIcons name="bus-stop" color={"#000"} size={26} />
                <Text style={styles.drawerAppName}>GoBus</Text>
            </HStack>
            <Divider my="$0.5" />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

//Drawer
const MyDrawer = () => {
    const {colors} = useTheme();

    return(
        <Drawer.Navigator 
            initialRouteName="HomeStack"
            screenOptions={{
                drawerActiveBackgroundColor: "#fff",
                drawerActiveTintColor: "#666666",
                drawerInactiveTintColor: "#666666",
                
                drawerStyle:{width:300, backgroundColor:'#fff'},
                drawerLabelStyle:{ fontSize:16, fontWeight:'400'},
            }}
            drawerContent={ props => <DrawerContent {...props}/> } 
        >

            <Drawer.Screen 
                name= "HomeStack"
                component={MyTab}
                options={{
                    headerShown: false,
                    drawerLabel: '主畫面',
                    drawerLabelStyle:{
                        fontSize:14,
                        fontWeight:'400',
                    },
                    drawerIcon:({color})=>(
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen 
                name= "lostFoundStack"
                component={LostFoundStack}
                options={{
                    headerShown: false,
                    drawerLabel: '失物招領',
                    drawerLabelStyle:{
                        fontSize:14,
                        fontWeight:'400',
                    },
                    drawerIcon:({color})=>(
                        <MaterialCommunityIcons name="briefcase-search" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="loveBusStack"
                component={LoveBusStack}
                options={{
                    headerShown: false,
                    drawerLabel: '設定最愛公車路線',
                    drawerLabelStyle:{
                        fontSize:14,
                        fontWeight:'400',
                    },
                    
                    drawerIcon:({color})=>(
                        <MaterialCommunityIcons name="bus-multiple" color={color} size={26} />
                    ),
                }}
            />

        </Drawer.Navigator>
    );
}

//drawer 【失物招領】
const LostFoundStack = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="LostFound"
                component={LostFoundScreen}
                options={{
                    title: "",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                        name={'menu'}
                        size={20}
                        onPress={() => navigation.openDrawer()}
                        style={{ marginRight: 20 }}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

//drawer 【設定最愛公車路線】
const LoveBusStack = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="LoveBus"
                component={LoveBusScreen}
                options={{
                    title: "",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                        name={'menu'}
                        size={20}
                        onPress={() => navigation.openDrawer()}
                        style={{ marginRight: 20 }}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );

}



//Tab ===========================//

//主頁面
const MyTab = () => {
    const { colors } = useTheme();

    return(
        
        <Tab.Navigator>
            <Tab.Screen 
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title:'Home',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                        
                    },
                    tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                   
                }}
            />
            <Tab.Screen 
                name="SearchStack"
                component={SearchStack}
                options={{
                    
                    headerShown: false,
                    title: 'Search',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen 
                name="SettingStack"
                component={SettingStack}
                options={{
                    headerShown: false,
                    title: 'Setting',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="cog" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
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
                    title: "",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    //headerShadowVisible: false,
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
                          size={20}
                          onPress={() => navigation.openDrawer()}
                          style={{ marginRight: 20 }}
                        />
                    ),
                    
                }}
            />
            <Stack.Screen 
                name="SetDestination"
                component={SetDestinationScreen}
                options={{
                    title: "",
                    headerShown:false,
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen 
                name="WattingBus"
                component={WattingBusScreen}
                options={{
                    title: "",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
                          size={20}
                          onPress={() => navigation.openDrawer()}
                          style={{ marginRight: 20 }}
                        />
                    ),
                }}
            />
            <Stack.Screen 
                name="TakingBus"
                component={TakingBusScreen}
                options={{
                    title: "",
                    headerTitleStyle: {
                        fontWeight:'400',
                        fontSize:20
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
                    headerShadowVisible: false,
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
                    title: '',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={20}
                            onPress={hideKeyboardAndOpenDrawer}
                            style={{ marginRight: 20 }}
                        />
                    ),
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
                    title: '',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                        />
                    ),
                }}
            />
            <Stack.Screen 
                name="AboutUs"
                component={AboutUsScreen}
                options={{
                    title: 'AboutUs',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                }}
            />
            <Stack.Screen 
                name="Question"
                component={QuestionScreen}
                options={{
                    title: 'Question',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                }}
            />
            <Stack.Screen 
                name="Usage"
                component={UsageScreen}
                options={{
                    title: 'Usage',
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:'400',
                    },
                }}
            />
        </Stack.Navigator>
    );
}

//styles ===========================//
const styles = StyleSheet.create({
    drawerAppName:{
        fontSize:24,
        fontWeight:'500',
        color:'#131313',
        marginBottom:16,
    },
});

export default Navigation;