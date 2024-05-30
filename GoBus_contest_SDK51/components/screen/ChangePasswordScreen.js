import React, {useState} from "react";
import { StyleSheet, View, Platform, Pressable} from 'react-native';
import { Text,  Center, Input, InputField, InputSlot, InputIcon, EyeIcon, EyeOffIcon, HStack } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { VStack } from "native-base";
import { useNavigation} from '@react-navigation/native';

const ChangePasswordScreen = () =>{
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const [showPassword3, setShowPassword3] = useState(false)
    const navigation = useNavigation();
    const handleState1 = () => {
        setShowPassword1((showState) => {
        return !showState
        })
    }
    const handleState2 = () => {
        setShowPassword2((showState) => {
        return !showState
        })
    }
    const handleState3 = () => {
        setShowPassword3((showState) => {
        return !showState
        })
    }

    return(
        <Center style={{height:755, backgroundColor:'#fff'}}>
            <View>
                <VStack style={{marginBottom:40}}>
                    <Text style={styles.text}>舊密碼</Text>
                    {/* <Input variant="rounded" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} style={styles.input}>
                        <InputField
                            placeholder='請輸入舊密碼'
                        />
                    </Input> */}
                    <Input textAlign="center" style={styles.input}>
                        <InputField type={showPassword1 ? "text" : "password"} />
                        <InputSlot pr="$3" onPress={handleState1}>
                        {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                            <InputIcon
                                as={showPassword1 ? EyeIcon : EyeOffIcon}
                                color="$darkBlue500"
                            />
                        </InputSlot>
                    </Input>
                </VStack>
                <VStack style={{marginBottom:20}}>
                    <Text style={styles.text}>新密碼</Text>
                    <Input textAlign="center" style={styles.input}>
                        <InputField type={showPassword2 ? "text" : "password"} />
                        <InputSlot pr="$3" onPress={handleState2}>
                        {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                            <InputIcon
                                as={showPassword2 ? EyeIcon : EyeOffIcon}
                                color="$darkBlue500"
                            />
                        </InputSlot>
                    </Input>
                </VStack>
                <VStack style={{marginBottom:70}}> 
                    <Text style={styles.text}>重新輸入新密碼</Text>
                    <Input textAlign="center" style={styles.input}>
                        <InputField type={showPassword3 ? "text" : "password"} />
                        <InputSlot pr="$3" onPress={handleState3}>
                        {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                            <InputIcon
                                as={showPassword3 ? EyeIcon : EyeOffIcon}
                                color="$darkBlue500"
                            />
                        </InputSlot>
                    </Input>
                </VStack>
                <Pressable onPress={() => navigation.navigate('Setting')}>
                    <HStack style={styles.getUpBTN}>
                        <Text style={styles.btnText}>確認</Text>
                    </HStack>
                </Pressable>
                {/* <HStack style={styles.getUpBTN}>
                    <Text style={styles.btnText}>確認</Text>
                </HStack> */}
            </View>
        </Center>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:16,
        fontWeight:'500',
        marginBottom:10,
    },
    input:{
        width:298,
        height:43,
        borderRadius:14,
    },
    getUpBTN:{
        width:145,
        height:46,
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
        shadowOffset: Platform.OS === 'ios' ? { width: 0, height: 5 } : { width: 0, height: 20 },
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
    },
});

export default ChangePasswordScreen;