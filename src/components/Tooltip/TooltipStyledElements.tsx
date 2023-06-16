import styled from "styled-components";
import { ThemeProps, Value, defaultProps } from "../../shared";
import { Props } from "./Tooltip.types";
import { ArrowElement } from "../Arrow";

const customKeys = (v: Value, t: any) => `
        padding: ${t.tooltip.padding[v].y} ${t.tooltip.padding[v].x};
        font-size: ${t.tooltip.fontSize[v]};
    `;

export const TooltipElement = styled.div<Props>`
  ${({ theme, $variant, arrow }) => `
   position: fixed;
    z-index: ${theme.zIndex.tooltip};
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: ${theme.tooltip.radius};
    background: ${theme.variant[$variant].main};
    color: ${theme.variant[$variant].font};
    fill: ${theme.variant[$variant].font};
   ${
     arrow == "right"
       ? `
        ${ArrowElement}:before {
            border-width: .5rem .5rem .5rem 0;
            border-right-color: ${theme.variant[$variant].main};
        }
    `
       : ""
   }
  ${
    arrow == "left"
      ? `
        ${ArrowElement}:before {
            border-width: .5rem 0 .5rem .5rem;
            border-left-color: ${theme.variant[$variant].main};
        }
    `
      : ""
  }
 ${
   arrow == "top"
     ? `
        ${ArrowElement}:before {
            border-width: .5rem .5rem 0;
            border-top-color: ${theme.variant[$variant].main};
        }
    `
     : ""
 }
      ${
        arrow == "bottom"
          ? `
        ${ArrowElement}:before {
            border-width: 0 .5rem .5rem .5rem;
            border-bottom-color: ${theme.variant[$variant].main};
        }
    `
          : ""
      }

   
   `}
  ${({ $size, theme }) => customKeys($size, theme)}
   ${defaultProps}
`;
