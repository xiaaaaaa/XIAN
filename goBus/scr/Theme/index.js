import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        light400:'#65d6d6',
        primary700:'#a8a29e',
    }
};

export default MyTheme;