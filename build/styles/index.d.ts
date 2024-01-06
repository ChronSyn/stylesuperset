export declare const styles: {
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
export declare const functions: {
    CreateSizeStyles: ({ baseSize, minSize, maxSize }: import("./baseSizes").ICreateSizeStylesArgs) => import("./baseSizes").ExplicitSizes & Record<number, number>;
    baseSizes: import("./baseSizes").TBaseSizes;
};
