import {
  forwardRef,
} from "react";

import { mapPropsVariants } from "@nextui-org/system-rsc";
import * as LabelPrimitive from "@radix-ui/react-label";

import { type LabelProps, type LabelRef } from "../types-label";
import { labelVariants } from "../variant-label";

const Label = forwardRef<
  LabelRef,
  LabelProps
>((props, ref) => {
  const [
    {
      className, ...componentProps
    },
    variantProps,
  ] = mapPropsVariants(
    props,
    labelVariants.variantKeys,
  );

  return (
    <LabelPrimitive.Root
      {...componentProps}
      className={labelVariants({
        ...variantProps,
        className,
      })}
      ref={ref}
    />
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
