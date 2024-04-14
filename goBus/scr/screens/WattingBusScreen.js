import React from "react";
import { StyleSheet, View, Image, Pressable,ScrollView } from 'react-native';
import { Text, VStack, HStack, Fab, Box } from '@gluestack-ui/themed';
import { useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailRoute from '../components/DetailRoute'


const WattingBus = ({route}) => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View>
                <Image
                 source={{ uri: 'https://static.vecteezy.com/system/resources/previews/005/741/977/non_2x/back-to-school-little-girl-with-teacher-waiting-for-bus-at-bus-stop-vector.jpg' }}
                 style={{ width: 350, height: 150, margin: 20, borderRadius:14}}
                 />
            </View>

            <Text style={styles.BusNumText}>18往萬華</Text>
            <View style={styles.contentContainer}>
                <DetailRoute/>
            </View>

            <Pressable
                 onPress={() => navigation.navigate('Home')}>
                 <HStack style={styles.getUpBTN}>
                    <Text style={styles.btnText}>取消搭車</Text>
                 </HStack>
            </Pressable>
            <Fab bg="#C4D7F3" size="lg" right="$4" bottom="$5" onPress={() => {navigation.navigate('TakingBus')}}>
                <MaterialCommunityIcons name="arrow-right" color={'#fff'} size={30}/>
            </Fab>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems: 'center',
    },
    contentContainer:{
        width:370,
        height:390,
    },
    BusNumText:{
        color:'#000000',
        fontSize:24,
        paddingBottom:5,
        marginLeft:'auto',
        marginRight:'auto',
    },
    text:{
        margin:20,
    },
    getUpBTN:{
        width:145,
        height:46,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,
        marginBottom:50,
        backgroundColor:'#FFFFFF',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#8FAFDE',
        borderWidth:2,
        borderRadius:14,
        shadowColor:'#435a5e',

        shadowOffset: { width: 0, height: 20},
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
        },
        btnText:{
            color:'#8FAFDE',
            fontSize:24,
            paddingBottom:5,
            marginLeft:5,
        },
});

export default WattingBus;