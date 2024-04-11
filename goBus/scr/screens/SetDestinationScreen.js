import React from "react";
import { StyleSheet, Button, Pressable, View, SafeAreaView, StatusBar} from 'react-native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SetDestinationScreen = ({}) => {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{flex: 1, backgroundColor:'#fff', marginTop:50}}>

            <Text style={styles.text}>The Set Destination Screen</Text>
            <Pressable onPress={() => navigation.navigate('WattingBus')}>
                <HStack style={styles.getUpBTN}>
                    {/* <MaterialCommunityIcons name="bell" color={'#fff'} size={30} style={styles.icon}/> */}
                    <Text style={styles.btnText}>確認</Text>
                </HStack>
            </Pressable>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    text:{
        margin:20,
    },
    getUpBTN:{
        width:200,
        height:65,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20,
        marginBottom:50,
        backgroundColor:'#5E86C1',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0,
        borderRadius:14,
        shadowColor:'#435a5e',
        
        shadowOffset: { width: 0, height: 20},
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    icon:{
        marginLeft:10,
    },
    btnText:{
        color:'#fff',
        fontSize:24,
        paddingBottom:5,
        // marginLeft:13,
    },
});

export default SetDestinationScreen;