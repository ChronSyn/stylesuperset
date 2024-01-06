/// <reference types="react" />
declare const _default: {
    styles: {
        gap: {
            [x: number]: {
                gap: number;
            };
            xs: {
                gap: number;
            };
            sm: {
                gap: number;
            };
            md: {
                gap: number;
            };
            lg: {
                gap: number;
            };
            xl: {
                gap: number;
            };
        };
        margin: {
            t: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            b: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            l: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            r: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            x: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            y: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            all: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
        };
        padding: {
            t: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            b: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            l: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            r: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            x: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            y: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
            all: {
                [x: number]: any;
                xs: any;
                sm: any;
                md: any;
                lg: any;
                xl: any;
            };
        };
        font: {
            [x: number]: {
                fontSize: number;
            };
            xs: {
                fontSize: number;
            };
            sm: {
                fontSize: number;
            };
            md: {
                fontSize: number;
            };
            lg: {
                fontSize: number;
            };
            xl: {
                fontSize: number;
            };
        };
        border: {
            radius: {
                [x: number]: {
                    borderRadius: number;
                };
                xs: {
                    borderRadius: number;
                };
                sm: {
                    borderRadius: number;
                };
                md: {
                    borderRadius: number;
                };
                lg: {
                    borderRadius: number;
                };
                xl: {
                    borderRadius: number;
                };
            };
            width: {
                [x: number]: {
                    borderWidth: number;
                };
                xs: {
                    borderWidth: number;
                };
                sm: {
                    borderWidth: number;
                };
                md: {
                    borderWidth: number;
                };
                lg: {
                    borderWidth: number;
                };
                xl: {
                    borderWidth: number;
                };
            };
        };
    };
    View: import("react").FC<{
        [x: number]: string | number | undefined;
        xs?: string | number | undefined;
        sm?: string | number | undefined;
        md?: string | number | undefined;
        lg?: string | number | undefined;
        xl?: string | number | undefined;
        t?: string | number | undefined;
        b?: string | number | undefined;
        l?: string | number | undefined;
        r?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        all?: string | number | undefined;
    } & {
        marginTop?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingBottom?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
    } & {
        children?: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }>;
    Text: import("react").FC<{
        children?: import("react").ReactNode;
        fontSize?: string | number | undefined;
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    }>;
    XStack: import("react").FC<{
        [x: number]: string | number | undefined;
        xs?: string | number | undefined;
        sm?: string | number | undefined;
        md?: string | number | undefined;
        lg?: string | number | undefined;
        xl?: string | number | undefined;
        t?: string | number | undefined;
        b?: string | number | undefined;
        l?: string | number | undefined;
        r?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        all?: string | number | undefined;
    } & {
        marginTop?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingBottom?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
    } & {
        children?: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }>;
    YStack: import("react").FC<{
        [x: number]: string | number | undefined;
        xs?: string | number | undefined;
        sm?: string | number | undefined;
        md?: string | number | undefined;
        lg?: string | number | undefined;
        xl?: string | number | undefined;
        t?: string | number | undefined;
        b?: string | number | undefined;
        l?: string | number | undefined;
        r?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        all?: string | number | undefined;
    } & {
        marginTop?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingBottom?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
    } & {
        children?: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }>;
    functions: {
        createSizeStyles: ({ baseSize, minSize, maxSize }: import("./styles/baseSizes").ICreateSizeStylesArgs) => import("./styles/baseSizes").ExplicitSizes & Record<number, number>;
    };
};
export default _default;
