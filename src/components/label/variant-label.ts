import { type VariantProps, tv } from "tailwind-variants";

const labelVariants = tv({
  base: [
    `text-neutral-500`,
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    isDisabled: {
      true: `pointer-events-none text-neutral-400`,
    },
    size: {
      lg: "text-base",
      md: "text-sm",
      sm: "text-xs",
    },
  },
});

type LabelVariants = VariantProps<typeof labelVariants>;

export { type LabelVariants, labelVariants };
