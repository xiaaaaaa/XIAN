import React from "react";
import { StyleSheet, View, Pressable } from 'react-native';
import { Text, HStack, VStack, Center, Divider } from '@gluestack-ui/themed';
import { useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LostFoundScreen = () =>{
    const navigation = useNavigation();

    return(
        <View style={{height:800, backgroundColor:'#fff'}}>
            <Center>            
                <View  style={styles.missingCard}>
                    <Center style={styles.missingNoCard}>
                        <Text style={styles.missingNo}>遺失物件單號：137</Text>
                    </Center>
                    <Center style={styles.missingInfoCard}>
                        <HStack style={styles.missingInfo}>
                            <Center>
                                <Text style={styles.textTitle}>遺失物品時間</Text>
                            </Center>
                            <VStack>
                                <Text style={styles.text}>2024/04/27</Text>
                                <Text style={styles.secText}>15:27</Text>
                            </VStack>
                        </HStack>
                        <Divider my="$0.5" style={styles.divider}/>
                        <HStack style={styles.missingInfo}>
                            <Center>
                                <Text style={styles.textTitle}>遺失物品地點</Text>
                            </Center>
                            <VStack>
                                <Text style={styles.text}>18</Text>
                                <Text style={styles.secText}>欣欣客運華江站</Text>
                            </VStack>
                        </HStack>
                        <Divider my="$0.5" style={styles.divider}/>
                        <HStack style={styles.missingInfo}>
                            <Center>
                                <Text style={styles.textTitle}>遺失物品</Text>
                            </Center>
                            <Text style={styles.text}>藍芽耳機</Text>
                        </HStack>
                    </Center>
                    <Divider my="$0.5"/>
                    <Center style={styles.findingProgressCard}>
                        <Divider my="$0.5" style={styles.findingProgressDivider}/>
                        <HStack style={styles.findingProgress}>
                            <Center>
                                <MaterialCommunityIcons name="check-circle" color={'#C4D7F3'} size={28} style={styles.findingProgressCheckIncon}/>
                                <Text style={styles.textProgress}>已送出</Text>
                            </Center>
                            <Center>
                                <MaterialCommunityIcons name="check-circle" color={'#C4D7F3'} size={28} style={styles.findingProgressCheckIncon}/>
                                <Text style={styles.textProgress}>已確認</Text>
                            </Center>
                            <Center>
                                <MaterialCommunityIcons name="circle-outline" color={'#C4D7F3'} size={28} style={styles.findingProgressUnCheckIncon}/>
                                <Text style={styles.textProgress}>搜尋中</Text>
                            </Center>
                            <Center>
                                <MaterialCommunityIcons name="circle-outline" color={'#C4D7F3'} size={28} style={styles.findingProgressUnCheckIncon}/>
                                <Text style={styles.textProgress}>···</Text>
                            </Center>
                        </HStack>
                        
                    </Center>
                </View>
                <Pressable onPress={() => navigation.navigate('PlusLostFound')}>
                    <HStack style={styles.getUpBTN}>
                        <MaterialCommunityIcons name="archive-plus" color={'#8FAFDE'} size={24} style={styles.icon}/>
                        <Text style={styles.btnText}>增加遺失物品</Text>
                    </HStack>
                </Pressable>
            </Center>
        </View>

    );
}

const styles = StyleSheet.create({
    missingCard:{
        backgroundColor:'#fff',
        color:'#000',
        marginTop:35,
        width:339,
        height:340,
        borderWidth:0,
        borderColor:'#000',
        borderRadius:10,

        shadowColor:'#000',
        shadowOffset: { width: 0, height: 20},
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    //遺失物品單號============
    missingNoCard:{
        height:60,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        backgroundColor:'#5E86C1',
    },
    missingNo:{
        fontSize:18,
        color:'#fff',
        //fontWeight:'bold',
    },

    //遺失物品內容============
    missingInfoCard:{
        height:190,
        borderWidth:0,
    },
    missingInfo:{
        width:280,
        display:'flex',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderWidth:0,
        marginVertical:8,
    },
    textTitle:{
        fontSize:16,
    },
    text:{
        fontSize:16,
        textAlign:'right',
        //marginBottom:-5,
        //margin:20,
    },
    secText:{
        textAlign:'right',
        fontSize:12,
        marginTop:-4,
        color:'#999999'
    },
    divider:{
        width:280,
    },
    //尋找進度條
    findingProgressCard:{
        paddingTop:2,
    },
    findingProgress:{
        width:240,
        height:40,
        display:'flex',
        justifyContent:'space-between',
    },
    findingProgressCheckIncon:{
        backgroundColor:'#fff',
    },
    findingProgressUnCheckIncon:{
        backgroundColor:'#fff',
    },
    textProgress:{
        fontSize:16,
        marginTop:3,
    },
    findingProgressDivider:{
        width:200, 
        height:2, 
        backgroundColor:'#D9D9D9', 
        marginTop:25,
        marginBottom:-10,
    },
    //按鈕============
    getUpBTN:{
        width:175,
        height:45,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:40,
        marginBottom:50,
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#8FAFDE',
        borderWidth:1,
        borderRadius:10,
        shadowColor:'#5C5C5C',
        
        shadowOffset: { width: 0, height: 20},
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    icon:{
        marginLeft:0,
    },
    btnText:{
        color:'#8FAFDE',
        fontSize:18,
        paddingBottom:5,
        marginLeft:13,
    },
});

export default LostFoundScreen;