import { forwardRef } from "react";

import * as pm from "./primitives";
import { type LabelProps, type LabelRef } from "./types-label";

const Label = forwardRef<
  LabelRef,
  LabelProps
>((
  props, ref,
) => {
  return <pm.Root ref={ref} {...props} />;
});
Label.displayName = pm.Root.displayName;

export default Label;
