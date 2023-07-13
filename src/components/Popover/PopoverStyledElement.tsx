import styled from "styled-components";
import { Box } from "../Box";
import { DefaultProps, Size, ThemeProps, Variant } from "../../shared";
import { Typography } from "../Typography";

interface Props extends DefaultProps {
  $variant?: Variant;
  arrow?: string;
  isArrowInHeader?: boolean;
  $size?: Size;
}

const customKeys = (t: any, v = "small") => `
        font-size: ${t.popover.fontSize[v]};
        .src-popover-header {
            padding: ${t.popover.headerPadding[v].y} ${t.popover.headerPadding[v].x};
        }
        .src-popover-body {
            padding: ${t.popover.bodyPadding[v].y} ${t.popover.bodyPadding[v].x};
        }
    `;
export const ArrowElement = styled.div<{ zIndex?: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 0.5rem;
  height: 0.5rem;
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    border-style: solid;
    border-color: transparent;
  }
`;
export const PopoverElement = styled(Box)<Props>`
  ${({ theme, $variant = "primary", arrow, isArrowInHeader = true }) => `
   position: fixed;
    z-index: ${theme.zIndex.popover};
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: ${theme.popover.radius};
    border: solid 1px ${theme.variant[$variant]?.popover?.border};
    background: ${theme.variant[$variant]?.popover?.background};
    > * {
            color: ${theme.variant[$variant]?.font};
?            fill: ${theme.variant[$variant]?.font};
?      }
      .src-popover-header {
            border-bottom: solid 1px ${
              theme.variant[$variant]?.popover?.headerBorder
            };
            background: ${theme.variant[$variant]?.popover?.headerBackground};
      }


       ${
         arrow == "right"
           ? `
        ${ArrowElement} {
            &:before {
                left: 0;
                border-width: .5rem .5rem .5rem 0;
                border-right-color: ${theme.variant[$variant]?.popover?.border};
            }
            &:after {
                left: 1px;
                border-width: .5rem .5rem .5rem 0;
                border-right-color: ${
                  theme.variant[$variant]?.popover?.background
                };
            }
        }
        ${
          isArrowInHeader
            ? `
            .src-popover-header ~ ${ArrowElement} {
                &:after {
                    border-right-color: ${theme.variant[$variant]?.popover?.headerBackground};
                }
            }
        `
            : ""
        }
    `
           : ""
       }


 ${
   arrow == "left"
     ? `
        ${ArrowElement} {
            &:before {
                right: 0;
                border-width: .5rem 0 .5rem .5rem;
                border-left-color: ${theme.variant[$variant]?.popover?.border};
            }
            &:after {
                right: 1px;
                border-width: .5rem 0 .5rem .5rem;
                border-left-color: ${
                  theme.variant[$variant]?.popover?.background
                };
            }
        }
        ${
          isArrowInHeader
            ? `
            .src-popover-header ~ ${ArrowElement} {
                &:after {
                    border-left-color: ${theme.variant[$variant]?.popover?.headerBackground};
                }
            }
        `
            : ""
        }
    `
     : ""
 }

 ${
   arrow == "top"
     ? `
        ${ArrowElement} {
            &:before {
                bottom: 0;
                border-width: .5rem .5rem 0;
                border-top-color: ${theme.variant[$variant]?.popover?.border};
            }
            &:after {
                bottom: 1px;
                border-width: .5rem .5rem 0;
                border-top-color: ${
                  theme.variant[$variant]?.popover?.background
                };
            }
        }
        ${
          isArrowInHeader
            ? `
            .src-popover-header ~ ${ArrowElement} {
                &:after {
                    border-top-color: ${theme.variant[$variant]?.popover?.headerBackground};
                }
            }
        `
            : ""
        }
    `
     : ""
 }

    ${
      arrow == "bottom"
        ? `
        ${ArrowElement} {
                &:before {
                    top: 0;
                    border-width: 0 .5rem .5rem .5rem;
                    border-bottom-color: ${
                      theme.variant[$variant]?.popover?.border
                    };
                }
                &:after {
                    top: 1px;
                    border-width: 0 .5rem .5rem .5rem;
                    border-bottom-color: ${
                      theme.variant[$variant]?.popover?.background
                    };
                }
            }
        }


   ${
     arrow == "bottom"
       ? `
            .src-popover-header ~ ${ArrowElement} {
                &:after {
                    border-bottom-color: ${theme.variant[$variant]?.popover?.headerBackground};
                }
            }
        `
       : ""
   }
    `
        : ""
    }        


`}
  ${({ theme, $size }) => customKeys(theme, $size)}
`;

export const PopoverHeader = styled(Typography).attrs<Props>(
  ({ className = "" }) => ({
    className: `${className} src-popover-header`,
  })
)<Props>`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
`;

export const PopoverBody = styled(Box).attrs<Props>(({ className = "" }) => ({
  className: `${className} src-popover-body`,
}))<Props>`
  box-sizing: border-box;
  width: 100%;
  min-width: 100%;
`;
