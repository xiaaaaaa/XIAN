import React from "react";
import { StyleSheet, View , Image, Text} from 'react-native';
import { 
    
    Accordion, 
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionTitleText,
    AccordionIcon,
    AccordionContent,
    AccordionContentText,
    ChevronDownIcon,
    ChevronUpIcon,
    ScrollView
} from '@gluestack-ui/themed';

const UsageScreen = () => {
    return(
        <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={{height:'auto', backgroundColor:'#fff'}}>
                <Accordion m="$5" width="90%" size="md" variant="unfilled" type="single" isCollapsible={true} isDisabled={false} >
                    <AccordionItem value="a">
                        <AccordionHeader>
                            <AccordionTrigger>
                                {({ isExpanded }) => {
                                return (
                                    <>
                                    <AccordionTitleText style={styles.questionTest}>
                                        如何告知司機我要在這站上車
                                    </AccordionTitleText>
                                    {isExpanded ? (
                                        <AccordionIcon as={ChevronUpIcon} ml="$3"/>
                                    ) : (
                                        <AccordionIcon as={ChevronDownIcon} ml="$3"/>
                                    )}
                                    </>
                                );
                                }}
                            </AccordionTrigger>
                        </AccordionHeader>
                        <AccordionContent>

                            <Image
                                style={styles.usage1Image}
                                source={require('../image/usage1.png')}
                            />
                            
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="b">
                        <AccordionHeader>
                            <AccordionTrigger>
                                {({ isExpanded }) => {
                                return (
                                    <>
                                    <AccordionTitleText style={styles.questionTest}>
                                        如何查詢公車路線
                                    </AccordionTitleText>
                                    {isExpanded ? (
                                        <AccordionIcon as={ChevronUpIcon} ml="$3"/>
                                    ) : (
                                        <AccordionIcon as={ChevronDownIcon} ml="$3"/>
                                    )}
                                    </>
                                );
                                }}
                            </AccordionTrigger>
                        </AccordionHeader>
                        <AccordionContent>
                            <Image
                                style={styles.usage2_1Image}
                                source={require('../image/usage2_1.png')}
                            />
                            <Image
                                style={styles.usage2_2Image}
                                source={require('../image/usage2_2.png')}
                            />
                            
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="c">
                        <AccordionHeader>
                            <AccordionTrigger>
                                {({ isExpanded }) => {
                                return (
                                    <>
                                    <AccordionTitleText style={styles.questionTest}>
                                        如何設定某路線為最愛路線
                                    </AccordionTitleText>
                                    {isExpanded ? (
                                        <AccordionIcon as={ChevronUpIcon} ml="$3"/>
                                    ) : (
                                        <AccordionIcon as={ChevronDownIcon} ml="$3"/>
                                    )}
                                    </>
                                );
                                }}
                            </AccordionTrigger>
                        </AccordionHeader>
                        <AccordionContent>
                                <Image
                                    style={styles.usage3_1Image}
                                    source={require('../image/usage3_1.png')}
                                />
                                <Image
                                    style={styles.usage3_2Image}
                                    source={require('../image/usage3_2.png')}
                                />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="d">
                        <AccordionHeader>
                            <AccordionTrigger>
                                {({ isExpanded }) => {
                                return (
                                    <>
                                    <AccordionTitleText style={styles.questionTest}>
                                        遺失物品在公車上怎麼辦
                                    </AccordionTitleText>
                                    {isExpanded ? (
                                        <AccordionIcon as={ChevronUpIcon} ml="$3"/>
                                    ) : (
                                        <AccordionIcon as={ChevronDownIcon} ml="$3"/>
                                    )}
                                    </>
                                );
                                }}
                            </AccordionTrigger>
                        </AccordionHeader>
                        <AccordionContent>
                            <Image
                                style={styles.usage4Image}
                                source={require('../image/usage4.png')}
                            />
                            
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    questionTest:{
        fontWeight:'500',
        fontSize:16,
    },
    usage1Image:{
        borderWidth:0,
        borderColor:'#000',
        width:317,
        height:505,
        resizeMode:'cover',
    },
    usage2_1Image:{
        width:317,
        height:545,
        resizeMode:'cover',
    },
    usage2_2Image:{
        marginTop:50,
        width:317,
        height:529,
        resizeMode:'cover',
    },
    usage3_1Image:{
        width:317,
        height:812,
        resizeMode:'cover',
    },
    usage3_2Image:{
        marginTop:50,
        width:317,
        height:539,
        resizeMode:'cover',
    },
    usage4Image:{
        width:337,
        height:514,
        resizeMode:'cover',
        marginBottom:30,
    }
});

export default UsageScreen;