import type { ComponentProps, ElementType, ReactNode } from "react";
import { type VariantProps } from "tailwind-variants";
import type { ClassNameValue } from "tailwind-merge";
export declare const button: import("tailwind-variants").TVReturnType<{
    variant: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        info: {
            base: string;
        };
        danger: {
            base: string;
        };
        light: {
            base: string;
        };
        outline: {
            base: string;
        };
        link: {
            base: string;
        };
        ghost: {
            base: string;
        };
        default: {
            base: string;
        };
    };
    size: {
        small: "px-3 py-1.5 text-sm";
        medium: "px-4 py-2 text-base";
        large: "px-6 py-3 text-lg";
    };
    radius: {
        none: "rounded-none after:rounded-none";
        small: "rounded-sm after:rounded-sm";
        medium: "rounded-md after:rounded-md";
        large: "rounded-lg after:rounded-lg";
        full: "rounded-full after:rounded-full";
    };
    isDisabled: {
        true: "opacity-50 pointer-events-none";
    };
    isLoading: {
        true: "opacity-50 cursor-not-allowed pointer-events-none";
    };
    isIconOnly: {
        true: "!aspect-square p-0 justify-center";
    };
    animation: {
        none: "";
        scale: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
        pop: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
    };
}, {
    base: string;
    content: string;
    startContentWrapper: string;
    endContentWrapper: string;
    spinner: string;
}, undefined, import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        info: {
            base: string;
        };
        danger: {
            base: string;
        };
        light: {
            base: string;
        };
        outline: {
            base: string;
        };
        link: {
            base: string;
        };
        ghost: {
            base: string;
        };
        default: {
            base: string;
        };
    };
    size: {
        small: "px-3 py-1.5 text-sm";
        medium: "px-4 py-2 text-base";
        large: "px-6 py-3 text-lg";
    };
    radius: {
        none: "rounded-none after:rounded-none";
        small: "rounded-sm after:rounded-sm";
        medium: "rounded-md after:rounded-md";
        large: "rounded-lg after:rounded-lg";
        full: "rounded-full after:rounded-full";
    };
    isDisabled: {
        true: "opacity-50 pointer-events-none";
    };
    isLoading: {
        true: "opacity-50 cursor-not-allowed pointer-events-none";
    };
    isIconOnly: {
        true: "!aspect-square p-0 justify-center";
    };
    animation: {
        none: "";
        scale: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
        pop: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
    };
}, {
    variant: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        info: {
            base: string;
        };
        danger: {
            base: string;
        };
        light: {
            base: string;
        };
        outline: {
            base: string;
        };
        link: {
            base: string;
        };
        ghost: {
            base: string;
        };
        default: {
            base: string;
        };
    };
    size: {
        small: "px-3 py-1.5 text-sm";
        medium: "px-4 py-2 text-base";
        large: "px-6 py-3 text-lg";
    };
    radius: {
        none: "rounded-none after:rounded-none";
        small: "rounded-sm after:rounded-sm";
        medium: "rounded-md after:rounded-md";
        large: "rounded-lg after:rounded-lg";
        full: "rounded-full after:rounded-full";
    };
    isDisabled: {
        true: "opacity-50 pointer-events-none";
    };
    isLoading: {
        true: "opacity-50 cursor-not-allowed pointer-events-none";
    };
    isIconOnly: {
        true: "!aspect-square p-0 justify-center";
    };
    animation: {
        none: "";
        scale: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
        pop: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
    };
}>, {
    variant: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        info: {
            base: string;
        };
        danger: {
            base: string;
        };
        light: {
            base: string;
        };
        outline: {
            base: string;
        };
        link: {
            base: string;
        };
        ghost: {
            base: string;
        };
        default: {
            base: string;
        };
    };
    size: {
        small: "px-3 py-1.5 text-sm";
        medium: "px-4 py-2 text-base";
        large: "px-6 py-3 text-lg";
    };
    radius: {
        none: "rounded-none after:rounded-none";
        small: "rounded-sm after:rounded-sm";
        medium: "rounded-md after:rounded-md";
        large: "rounded-lg after:rounded-lg";
        full: "rounded-full after:rounded-full";
    };
    isDisabled: {
        true: "opacity-50 pointer-events-none";
    };
    isLoading: {
        true: "opacity-50 cursor-not-allowed pointer-events-none";
    };
    isIconOnly: {
        true: "!aspect-square p-0 justify-center";
    };
    animation: {
        none: "";
        scale: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
        pop: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
    };
}, {
    base: string;
    content: string;
    startContentWrapper: string;
    endContentWrapper: string;
    spinner: string;
}, import("tailwind-variants").TVReturnType<{
    variant: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        info: {
            base: string;
        };
        danger: {
            base: string;
        };
        light: {
            base: string;
        };
        outline: {
            base: string;
        };
        link: {
            base: string;
        };
        ghost: {
            base: string;
        };
        default: {
            base: string;
        };
    };
    size: {
        small: "px-3 py-1.5 text-sm";
        medium: "px-4 py-2 text-base";
        large: "px-6 py-3 text-lg";
    };
    radius: {
        none: "rounded-none after:rounded-none";
        small: "rounded-sm after:rounded-sm";
        medium: "rounded-md after:rounded-md";
        large: "rounded-lg after:rounded-lg";
        full: "rounded-full after:rounded-full";
    };
    isDisabled: {
        true: "opacity-50 pointer-events-none";
    };
    isLoading: {
        true: "opacity-50 cursor-not-allowed pointer-events-none";
    };
    isIconOnly: {
        true: "!aspect-square p-0 justify-center";
    };
    animation: {
        none: "";
        scale: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
        pop: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
    };
}, {
    base: string;
    content: string;
    startContentWrapper: string;
    endContentWrapper: string;
    spinner: string;
}, undefined, import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        info: {
            base: string;
        };
        danger: {
            base: string;
        };
        light: {
            base: string;
        };
        outline: {
            base: string;
        };
        link: {
            base: string;
        };
        ghost: {
            base: string;
        };
        default: {
            base: string;
        };
    };
    size: {
        small: "px-3 py-1.5 text-sm";
        medium: "px-4 py-2 text-base";
        large: "px-6 py-3 text-lg";
    };
    radius: {
        none: "rounded-none after:rounded-none";
        small: "rounded-sm after:rounded-sm";
        medium: "rounded-md after:rounded-md";
        large: "rounded-lg after:rounded-lg";
        full: "rounded-full after:rounded-full";
    };
    isDisabled: {
        true: "opacity-50 pointer-events-none";
    };
    isLoading: {
        true: "opacity-50 cursor-not-allowed pointer-events-none";
    };
    isIconOnly: {
        true: "!aspect-square p-0 justify-center";
    };
    animation: {
        none: "";
        scale: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
        pop: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
    };
}, {
    variant: {
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        info: {
            base: string;
        };
        danger: {
            base: string;
        };
        light: {
            base: string;
        };
        outline: {
            base: string;
        };
        link: {
            base: string;
        };
        ghost: {
            base: string;
        };
        default: {
            base: string;
        };
    };
    size: {
        small: "px-3 py-1.5 text-sm";
        medium: "px-4 py-2 text-base";
        large: "px-6 py-3 text-lg";
    };
    radius: {
        none: "rounded-none after:rounded-none";
        small: "rounded-sm after:rounded-sm";
        medium: "rounded-md after:rounded-md";
        large: "rounded-lg after:rounded-lg";
        full: "rounded-full after:rounded-full";
    };
    isDisabled: {
        true: "opacity-50 pointer-events-none";
    };
    isLoading: {
        true: "opacity-50 cursor-not-allowed pointer-events-none";
    };
    isIconOnly: {
        true: "!aspect-square p-0 justify-center";
    };
    animation: {
        none: "";
        scale: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
        pop: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out";
    };
}>, unknown, unknown, undefined>>;
type ButtonVariants = VariantProps<typeof button>;
export type ButtonClassNameSlots = {
    base?: ClassNameValue;
    content?: ClassNameValue;
    startContentWrapper?: ClassNameValue;
    endContentWrapper?: ClassNameValue;
    spinner?: ClassNameValue;
};
type ButtonBaseProps = {
    children: ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    startContent?: ReactNode;
    endContent?: ReactNode;
    isIconOnly?: boolean;
    className?: ClassNameValue;
    classNames?: ButtonClassNameSlots;
};
export type ButtonProps<T extends ElementType = "button"> = ButtonBaseProps & ButtonVariants & {
    as?: T;
} & Omit<ComponentProps<T>, keyof ButtonBaseProps | keyof ButtonVariants | "as">;
export declare const Button: <T extends ElementType<any, keyof import("react").JSX.IntrinsicElements> = "button">({ variant, size, radius, isDisabled, isLoading, startContent, endContent, isIconOnly, animation, children, className, classNames, as, ...props }: ButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
