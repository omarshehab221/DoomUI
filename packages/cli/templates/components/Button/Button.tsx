import type { ElementType } from "react";
import { button } from "./button.styles";
import type { ButtonProps } from "./types";
import { Icon } from "@iconify/react";

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