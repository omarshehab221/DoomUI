import type { ClassNameValue } from "@doom-ui/core";
import type { ComponentProps, ElementType, ReactNode } from "react";
import type { VariantProps } from "@doom-ui/core";
import type { button } from "./button.styles";

export type ButtonVariants = VariantProps<typeof button>;

export type ButtonClassNameSlots = {
  base?: ClassNameValue;
  content?: ClassNameValue;
  startContentWrapper?: ClassNameValue;
  endContentWrapper?: ClassNameValue;
  spinner?: ClassNameValue;
};

export type ButtonBaseProps = {
  children: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isIconOnly?: boolean;
  className?: ClassNameValue;
  classNames?: ButtonClassNameSlots;
};

export type ButtonProps<T extends ElementType = "button"> = ButtonBaseProps &
  ButtonVariants & {
    as?: T;
  } & Omit<
    ComponentProps<T>,
    keyof ButtonBaseProps | keyof ButtonVariants | "as"
  >;