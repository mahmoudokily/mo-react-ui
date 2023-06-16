import React, { PropsWithChildren } from "react";

import { SimpleLoader } from "../Loader";
import { ButtonElement } from "./Button.elements";
import WaveEffect from "../WaveEffect/WaveEffect";
import { ButtonProps } from "./Button.types";
import IconElement from "../IconElement/IconElement";

export const Button = React.forwardRef<any, PropsWithChildren<ButtonProps>>(
  (
    {
      children,
      $iconPosition = "left",
      $icon,
      $loading,
      $variant = "primary",
      $withEffect = true,
      $tooltipText,
      ...props
    },
    ref
  ) => {
    const IconEl = $icon ? (
      <IconElement data-src-icon-position={$iconPosition}>{$icon}</IconElement>
    ) : null;
    const El = (
      <ButtonElement ref={ref} $variant={$variant} {...props}>
        {$iconPosition === "left" && IconEl}
        {$loading && <SimpleLoader variant={$variant} mr={2} />}
        {/* {!typeof children === 'string' ? children : children} */}
        {!$loading || typeof children !== "string" ? children : "  loading..."}
        {$iconPosition === "right" && IconEl}
      </ButtonElement>
    );
    let Ell = El;

    if ($withEffect) Ell = <WaveEffect>{El}</WaveEffect>;
    return Ell;
  }
);
