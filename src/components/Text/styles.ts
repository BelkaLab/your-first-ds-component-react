import { cva } from "class-variance-authority";

const textStyles = cva("", {
  variants: {
    size: {
      xs: "text-xs leading-4.5",
      sm: "text-base leading-6",
    },
    weight: {
      light: "font-light",
      regular: "font-regular",
      medium: "font-medium",
    },
  },
});

export { textStyles };
