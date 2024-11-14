"use client";
import type { ComponentProps, ElementType, ReactNode } from "react";
import { tv, type VariantProps, type ClassNameValue } from "@doom-ui/core";
import { Icon } from "@iconify/react";

export const button = tv({
  slots: {
    base: "flex items-center gap-2 rounded-lg font-semibold focus:outline-none after:hidden focus:ring-1 focus:ring-offset-2",
    content: "pb-[0.075rem]",
    startContentWrapper: "",
    endContentWrapper: "",
    spinner: "w-4 h-4",
  },
  variants: {
    variant: {
      primary: {
        base: "bg-primary-600 text-white after:bg-primary-600/50 hover:bg-primary-700 focus:ring-primary-500",
      },
      secondary: {
        base: "bg-default-200 text-gray-900 after:bg-default-200/50 hover:bg-default-300 focus:ring-default-500",
      },
      success: {
        base: "bg-success-500 text-white after:bg-success-500/50 hover:bg-success-600 focus:ring-success-500",
      },
      warning: {
        base: "bg-warning-500 text-white after:bg-warning-500/50 hover:bg-warning-600 focus:ring-warning-500",
      },
      info: {
        base: "bg-info-500 text-white after:bg-info-500/50 hover:bg-info-600 focus:ring-info-500",
      },
      danger: {
        base: "bg-danger-500 text-white after:bg-danger-500/50 hover:bg-danger-600 focus:ring-danger-500",
      },
      light: {
        base: "bg-transparent text-default-900 after:bg-default-100/50 hover:bg-default-100 focus:ring-default-500",
      },
      outline: {
        base: "border border-default-300 bg-transparent text-default-900 after:bg-default-100/50 hover:bg-default-100 focus:ring-default-500",
      },
      link: {
        base: "text-blue-500 hover:text-blue-600 focus:ring-blue-500 hover:underline focus:underline active:underline",
      },
      ghost: {
        base: "border border-default-300 bg-transparent text-default-900 after:bg-default-100/50 hover:bg-default-100 hover:border-default-600 hover:text-white focus:ring-default-500",
      },
      // glow: {
      //   base: "bg-gradient-to-b from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/50 hover:bg-gradient-to-t hover:shadow-xl focus:ring-blue-500",
      //   content: "text-shadow-lg shadow-gray-300/50",
      // },
      default: {
        base: "bg-gray-200 text-gray-900 after:bg-gray-200/50 hover:bg-gray-300 focus:ring-gray-500",
      },
    },
    size: {
      small: "px-3 py-1.5 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    },
    radius: {
      none: "rounded-none after:rounded-none",
      small: "rounded-sm after:rounded-sm",
      medium: "rounded-md after:rounded-md",
      large: "rounded-lg after:rounded-lg",
      full: "rounded-full after:rounded-full",
    },
    isDisabled: {
      true: "opacity-50 pointer-events-none",
    },
    isLoading: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
    },
    isIconOnly: {
      true: "!aspect-square p-0 justify-center",
    },
    animation: {
      none: "",
      scale:
        "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out",
      pop: "hover:scale-105 active:scale-95 focus:scale-95 transition-transform duration-150 ease-in-out",
      // these animations should not be infinite
      // pulse: "hover:animate-pulse active:animate-pulse focus:animate-pulse duration-150 ![animation-iteration-count:1]",
      // ping: "relative after:hidden after:content-[''] after:absolute after:inset-0 hover:after:block hover:after:animate-ping active:after:block active:after:animate-ping focus:after:block focus:after:animate-ping duration-150 ![animation-iteration-count:1]",
      // shake: "hover:animate-shake active:animate-shake focus:animate-shake duration-150 ![animation-iteration-count:1]",
      // float: "hover:animate-float active:animate-float focus:animate-float duration-150 ![animation-iteration-count:1]",
      // swing: "hover:animate-swing active:animate-swing focus:animate-swing duration-150 ![animation-iteration-count:1]",
      // wiggle: "hover:animate-wiggle active:animate-wiggle focus:animate-wiggle duration-150 ![animation-iteration-count:1]",
    },
  },
  compoundVariants: [
    {
      isIconOnly: true,
      size: "small",
      class: "!w-6 !h-6",
    },
    {
      isIconOnly: true,
      size: "medium",
      class: "!w-8 !h-8",
    },
    {
      isIconOnly: true,
      size: "large",
      class: "!w-10 !h-10",
    },
    {
      isIconOnly: true,
      class: {
        content: "!pb-0",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "medium",
    radius: "medium",
  },
});

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

export type ButtonProps<T extends ElementType = "button"> = ButtonBaseProps &
  ButtonVariants & {
    as?: T;
  } & Omit<
    ComponentProps<T>,
    keyof ButtonBaseProps | keyof ButtonVariants | "as"
  >;

export const Button = <T extends ElementType = "button">({
  variant = "default",
  size = "medium",
  radius = "medium",
  isDisabled = false,
  isLoading = false,
  startContent,
  endContent,
  isIconOnly = false,
  animation = "scale",
  children,
  className,
  classNames,
  as,
  ...props
}: ButtonProps<T>) => {
  const slots = button({
    variant,
    size,
    radius,
    isDisabled,
    isLoading,
    isIconOnly,
    animation,
  });

  const Component = as || "button";

  return (
    <Component
      type={Component === "button" ? "button" : undefined}
      className={slots.base({ class: [className, classNames?.base] })}
      disabled={isDisabled}
      {...props}
    >
      {isIconOnly ? (
        isLoading ? (
          <Icon
            icon="line-md:loading-twotone-loop"
            className={slots.spinner({
              className: ["stroke-1.5", classNames?.spinner],
            })}
          />
        ) : (
          <span className={slots.content({ className: classNames?.content })}>
            {children}
          </span>
        )
      ) : (
        <>
          {isLoading ? (
            <Icon
              icon="line-md:loading-twotone-loop"
              className={slots.spinner({
                className: ["stroke-1.5", classNames?.spinner],
              })}
            />
          ) : (
            startContent && (
              <span
                className={slots.startContentWrapper({
                  className: classNames?.startContentWrapper,
                })}
              >
                {startContent}
              </span>
            )
          )}
          <span className={slots.content({ className: classNames?.content })}>
            {children}
          </span>
          {endContent && (
            <span
              className={slots.endContentWrapper({
                className: classNames?.endContentWrapper,
              })}
            >
              {endContent}
            </span>
          )}
        </>
      )}
    </Component>
  );
};
