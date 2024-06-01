import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        light400:'#C4D7F3',
        light500:'#8FAFDE',
        light600:'#5E86C1',
        primary700:'#999999',
    }
};

export default MyTheme;