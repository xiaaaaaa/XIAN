import React from "react";
import { StyleSheet, View } from 'react-native';
import { 
    Text, 
    Accordion, 
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionTitleText,
    AccordionIcon,
    AccordionContent,
    AccordionContentText,
    ChevronDownIcon,
    ChevronUpIcon
} from '@gluestack-ui/themed';

const QuestionScreen = () => {
    return(
        <View style={{height:753, backgroundColor:'#fff'}}>
            <Accordion m="$5" width="90%" size="md" variant="unfilled" type="single" isCollapsible={true} isDisabled={false} >
                <AccordionItem value="a">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                            return (
                                <>
                                <AccordionTitleText style={styles.questionTest}>
                                    公車路線有錯誤
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
                        <AccordionContentText>
                            請寄信至 s111119005@stu.ntue.edu.tw ，我們將會盡快更正。
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                            return (
                                <>
                                <AccordionTitleText style={styles.questionTest}>
                                    失物招領沒有下文
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
                        <AccordionContentText>
                            請寄信至 s111119005@stu.ntue.edu.tw ，並告知您的帳號名稱與遺失物件單號。
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="c">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                            return (
                                <>
                                <AccordionTitleText style={styles.questionTest}>
                                    為什麼沒有收到到站通知
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
                        <AccordionContentText>
                            至手機的設定中打開「上巴 GoBus 」軟體通知。
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="d">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                            return (
                                <>
                                <AccordionTitleText style={styles.questionTest}>
                                    為什麼沒有收到到目的地通知
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
                        <AccordionContentText>
                            至手機的設定中打開「上巴 GoBus 」軟體通知。
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="e">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                            return (
                                <>
                                <AccordionTitleText style={styles.questionTest}>
                                    不知道如何使用各項功能
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
                        <AccordionContentText>
                            請至設定中的使用方式頁面檢視想使用功能的使用方式。
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="f">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                            return (
                                <>
                                <AccordionTitleText style={styles.questionTest}>
                                    在公車遺失物品了怎麼辦
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
                        <AccordionContentText>
                            請至設定中的使用方式頁面檢視如何通報遺失物品。
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="g">
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                            return (
                                <>
                                <AccordionTitleText style={styles.questionTest}>
                                    遺失物品頁面的遺失物品狀態是什麼
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
                        <AccordionContentText>
                            已送出：表單已傳遞至系統中 
                        </AccordionContentText>
                        <AccordionContentText>
                            已確認：客運公司已確認到您的遺失物品訊息
                        </AccordionContentText>
                        <AccordionContentText>
                            搜尋中：客運公司正在找尋您遺失的物品
                        </AccordionContentText>
                        <AccordionContentText>
                            ... ：依照客運公司找尋的狀況顯示「未找到」或「已找到，請至客運公司領取」
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </View>
    );
}

const styles = StyleSheet.create({
    questionTest:{
        fontWeight:'500',
        fontSize:16,
    }
});

export default QuestionScreen;