/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: <T extends import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> = "button">({ variant, size, radius, isDisabled, isLoading, startContent, endContent, isIconOnly, animation, children, className, classNames, as, ...props }: import("./Button").ButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Danger: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Info: Story;
export declare const Light: Story;
export declare const Outline: Story;
export declare const LinkButton: Story;
export declare const Ghost: Story;
export declare const IconOnly: Story;
export declare const Disabled: Story;
export declare const Loading: Story;
export declare const StartContent: Story;
export declare const EndContent: Story;
export declare const FullRadius: Story;
export declare const LargeRadius: Story;
export declare const MediumRadius: Story;
export declare const SmallRadius: Story;
export declare const NoneRadius: Story;
export declare const Large: Story;
export declare const Medium: Story;
export declare const Small: Story;
export declare const AsATag: Story;
export declare const Scale: Story;
export declare const Pop: Story;
