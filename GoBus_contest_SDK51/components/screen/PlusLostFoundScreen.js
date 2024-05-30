import React, { useState } from 'react'
import { StyleSheet, View, Button, Pressable, Platform, TouchableOpacity } from 'react-native';
//import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation} from '@react-navigation/native';
import { Text, HStack, VStack, Center, Input, InputField } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PlusLostFoundScreen = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState("");

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = ({type}, selectedDate) => {
        if(type == "set"){
            const currentDate = selectedDate;
            setDate(currentDate);
            if(Platform.OS === "android"){
                toggleDatepicker();
                setDateOfBirth(formatDate(currentDate));
            }
        }
        else{
            toggleDatepicker();
        }
    };

    const confirmIOSDate = () => {
        setDateOfBirth(formatDate(date));
        toggleDatepicker();
    };

    const formatDate = (rawDate) => {
        let date = new Date(rawDate);

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        month = month<10? `0${month}`:month;
        day = day<10? `0${day}`:day;

        return `${year}-${month}-${day}`;
    }

    return(
        <View>
            <Center style={{height:800, marginTop: -50, backgroundColor:'#fff'}}>
                <VStack style={styles.Card}>
                    <Text style={styles.text}>遺失的公車路線</Text>
                    <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} style={styles.input}>
                        <InputField
                            placeholder='請輸入您遺失物品的公車路線'
                        />
                    </Input>
                </VStack>


                
                <VStack  style={styles.Card}>  
                    <Text style={styles.text}>遺失物品時間</Text>

                    {showPicker && (
                        <DateTimePicker
                            mode="date"
                            display="spinner"
                            value={date}
                            onChange={onChange}
                            style={styles.datePicker}
                            maximumDate={new Date()}
                        />

                    )}

                    {showPicker && Platform.OS === "ios" && (
                        <View
                            style={{flexDirection:'row', justifyContent:'space-around'}}
                        >
                            <TouchableOpacity style={[
                                    styles.button, 
                                    styles.pickerButton,
                                ]}
                                onPress={toggleDatepicker}
                            >
                                <Text style={[
                                    styles.buttonText,
                                    {color: '#075985'}
                                ]}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[
                                    styles.button, 
                                    styles.pickerButton,
                                ]}
                                onPress={confirmIOSDate}
                            >
                                <Text style={[
                                    styles.buttonText,
                                ]}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    )}


                    {!showPicker && (
                        <Pressable
                            onPress={toggleDatepicker}
                        >
                            <Input 
                                variant="outline" 
                                size="md" 
                                isDisabled={true} 
                                isInvalid={false} 
                                isReadOnly={false} 
                                style={styles.timeInput}
                            >
                                <InputField
                                    value={dateOfBirth}
                                    placeholder= "2024-05-26"
                                    onChangeText={setDateOfBirth}
                                    onPressIn={toggleDatepicker}
                                />
                            </Input>
                        </Pressable>
                    )}


                </VStack>

                <VStack  style={styles.Card}>  
                    <Text style={styles.text}>遺失的物品</Text>
                    <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} style={styles.input}>
                        <InputField
                            placeholder='請輸入您遺失的物品 e.g. 水壺'
                        />
                    </Input>
                </VStack>
                    
                <HStack style={styles.getUpBTN}>
                    <Pressable onPress={() => navigation.navigate('LostFound')}>
                        <View style={styles.getUpBTNCancel}>
                            <Text style={styles.btnTextCancel}>取消</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('LostFound')}>
                        <View style={styles.getUpBTNConfirm}>
                            <Text style={styles.btnTextConfirm}>確認</Text>
                        </View>
                    </Pressable>
                </HStack>
            </Center>
           
        </View>

    );
}

const styles = StyleSheet.create({
    Card:{
        marginBottom:50,
        borderWidth:0,
    },
    text:{
        //margin:20,
        marginBottom:8,
    },
    input:{
        height:40,
        width:300,
        borderRadius:15,
    },
    timeInput:{
        height:40,
        width:300,
        borderRadius:15,
        borderColor:'#999999'
    },
    datePicker:{
        height:120,
        marginTop:-10,
    },
    button:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        marginTop:10,
        marginBottom:15,
        backgroundColor:'#075985',
    },
    pickerButton:{
        paddingHorizontal:20,
    },
    buttonText:{
        fontSize:14,
        fontWeight:'500',
        color:'#fff',
    },
    getUpBTN:{
        width:190,
        height:60,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:60,
        marginBottom:20,
        borderWidth:0,
        borderRadius:14,
    },
    getUpBTNCancel:{
        width:95,
        height:60,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#5E86C1',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:14,
        borderBottomLeftRadius:14,
        shadowColor:'#435a5e',
        shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    getUpBTNConfirm:{
        width:95,
        height:60,
        backgroundColor:'#5E86C1',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0,
        borderTopRightRadius:14,
        borderBottomRightRadius:14,
        shadowColor:'#435a5e',
        shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
        shadowOpacity: 0.1,
        // Android Only
        elevation: 3,
    },
    btnTextCancel:{
        color:'#5E86C1',
        fontSize:24,
        paddingBottom:5,
    },
    btnTextConfirm:{
        color:'#FFF',
        fontSize:24,
        paddingBottom:5,
    }
});

export default PlusLostFoundScreen;