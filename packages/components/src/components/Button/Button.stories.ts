import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { createElement } from "react";
// import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Button",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Button",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const LinkButton: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const IconOnly: Story = {
  args: {
    isIconOnly: true,
    children: createElement(Icon, { icon: "heroicons:chevron-right", className: "w-4 h-4" }),
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Button",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Button",
  },
};

export const StartContent: Story = {
  args: {
    startContent: createElement(Icon, { icon: "heroicons:chevron-right", className: "w-4 h-4" }),
    children: "Button",
  },
};

export const EndContent: Story = {
  args: {
    endContent: createElement(Icon, { icon: "heroicons:chevron-right", className: "w-4 h-4" }),
    children: "Button",
  },
};

export const FullRadius: Story = {
  args: {
    radius: "full",
    children: "Button",
  },
};

export const LargeRadius: Story = {
  args: {
    radius: "large",
    children: "Button",
  },
};

export const MediumRadius: Story = {
  args: {
    radius: "medium",
    children: "Button",
  },
};

export const SmallRadius: Story = {
  args: {
    radius: "small",
    children: "Button",
  },
};

export const NoneRadius: Story = {
  args: {
    radius: "none",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};

export const AsATag: Story = {
  args: {
    as: "a",
    href: "https://example.com",
    target: "_blank",
    children: "Link Button",
  },
};

// export const AsLink: Story = {
//   args: {
//     as: Link,
//     href: "https://example.com",
//     target: "_blank",
//     children: "Link Button",
//   },
// };

// export const Wiggle: Story = {
//   args: {
//     animation: "wiggle",
//     children: "Button",
//   },
// };

// export const Shake: Story = {
//   args: {
//     animation: "shake",
//     children: "Button",
//   },
// };

// export const Float: Story = {
//   args: {
//     animation: "float",
//     children: "Button",
//   },
// };

// export const Jello: Story = {
//   args: {
//     animation: "jello",
//     children: "Button",
//   },
// };

// export const Swing: Story = {
//   args: {
//     animation: "swing",
//     children: "Button",
//   },
// };

// export const Ping: Story = {
//   args: {
//     animation: "ping",
//     children: "Button",
//   },
// };

export const Scale: Story = {
  args: {
    animation: "scale",
    children: "Button",
  },
};

export const Pop: Story = {
  args: {
    animation: "pop",
    children: "Button",
  },
};

// export const Pulse: Story = {
//   args: {
//     animation: "pulse",
//     children: "Button",
//   },
// };

// export const Spin: Story = {
//   args: {
//     animation: "spin",
//     children: "Button",
//   },
// };

// export const Bounce: Story = {
//   args: {
//     animation: "bounce",
//     children: "Button",
//   },
// };
