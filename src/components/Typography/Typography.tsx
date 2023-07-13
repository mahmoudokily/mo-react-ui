import { PropsWithChildren, useMemo } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "../CopyToClipboard";
import React from "react";
import {
  DefaultProps,
  TypographySize,
  Variant,
  defaultProps,
} from "../../shared";
import { TypographyType } from "./Typography.types";
import { Tooltip } from "../Tooltip/Tooltip";
export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    Omit<DefaultProps, "color"> {
  $size?: TypographySize;
  $variant?: Variant;
  $onClick?: any;
  $onCopy?: any;
  $clipboardText?: string;
  $tooltipId?: string;
  $tooltipText?: string;
  $capitalizeFirstLetter?: boolean;
  $ellipsis?: boolean;
}

const TypographyElement = styled.span<TypographyProps>`
  display: inline-block;
  ${({ $size = "body30", theme, color, $variant = "primary" }) =>
    css`
      font-size: ${theme.typography[$size as TypographyType].fontSize}px;
      font-weight: ${theme.typography[$size as TypographyType].fontWeight};
    `};
  ${defaultProps}
`;
export const Typography = ({
  $tooltipId,
  $tooltipText,
  $onCopy,
  $clipboardText,
  $capitalizeFirstLetter,
  children,
  ...props
}: PropsWithChildren<TypographyProps>) => {
  const { $size, $ellipsis } = props;

  let ellipsisStyle = {};
  if ($ellipsis) {
    ellipsisStyle = {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    };
  }
  const tooltipIdInner = useMemo(() => uuidv4(), []);
  const tooltipProps = useMemo(
    () =>
      $tooltipId || $tooltipText
        ? { "data-for": $tooltipId || tooltipIdInner, "data-tip": true }
        : {},
    [$tooltipId, $tooltipText, tooltipIdInner]
  );
  const clipboardProps = useMemo(
    () =>
      $clipboardText
        ? {
            onClick: (e: React.MouseEvent<HTMLDivElement>) => {
              const el = e.target;
              if (props.onClick) props.$onClick();
              const range = document.createRange();
              if (!(el && el instanceof Node && el.contains(el))) {
                range.selectNodeContents(el as Node);
                const sel = window?.getSelection();
                sel?.removeAllRanges();
                sel?.addRange(range);
              }
            },
          }
        : {},
    [$clipboardText]
  );
  let text = children;
  if ($capitalizeFirstLetter && typeof text === "string") {
    text = text[0].toUpperCase() + text.slice(1, text.length);
  }

  const childrenText = useMemo(
    () => (
      <TypographyElement
        $size={$size}
        {...clipboardProps}
        {...tooltipProps}
        {...ellipsisStyle}
        {...props}
      >
        {text}
      </TypographyElement>
    ),
    [Text, $size, tooltipProps, props, ellipsisStyle, clipboardProps]
  );
  return (
    <>
      {$tooltipText && (
        <Tooltip>
          <div>{$tooltipText}</div>
          <div></div>
        </Tooltip>
      )}
      {$clipboardText ? (
        <CopyToClipboard onCopy={$onCopy} textToCopy={$clipboardText}>
          {childrenText}
        </CopyToClipboard>
      ) : (
        childrenText
      )}
    </>
  );
};
