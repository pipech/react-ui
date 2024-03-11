import {
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import * as LabelPrimitive from "@radix-ui/react-label";

import { type LabelVariants } from "./variant-label";

interface LabelProps extends
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
  LabelVariants {}
type LabelRef = ElementRef<typeof LabelPrimitive.Root>;

export { type LabelProps, type LabelRef };
