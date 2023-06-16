import styled from "styled-components";
import { ThemeProps } from "../../shared/theme/Theme.props";
import { ButtonProps } from "./Button.types";
import { CSSHelper, defaultProps } from "../../shared/helpers";
import Svg from "../Svg/Svg";
import IconElement from "../IconElement/IconElement";

const sizeStyles = (t: any, v = "default", fixedSize = false) => `
   font-size: ${t.button.fontSize[v]};
        ${
          fixedSize
            ? `
            width: ${t.button.fixedSize[v]};
            height: ${t.button.fixedSize[v]}; width: ${t.button.fixedSize[v]};
            max-height: ${t.button.fixedSize[v]};
            min-height: ${t.button.fixedSize[v]};


        `
            : `
            padding: ${t.button.padding[v].y} ${t.button.padding[v].x};
            > ${IconElement} {
                padding: 0 ${t.button.padding[v].xHalf};
                margin-top: -${t.button.padding[v].y};
                margin-bottom: -${t.button.padding[v].y};
                &[data-src-icon-position="left"] {
                    margin-right: ${t.button.padding[v].xHalf};
                    margin-left: -${t.button.padding[v].x};
                }
                &[data-src-icon-position="right"] {
                    margin-right: -${t.button.padding[v].x};
                    margin-left: ${t.button.padding[v].xHalf};
                }
            }
        `
        }
`;
export const ButtonElement = styled.button<ButtonProps>`
  ${({
    theme,
    $block,
    $withShadow = true,
    $disabled,
    $fill,
    $fixedSize,
    $iconPosition,
    $iconProps,
    $link,
    $loading,
    $shape = "default",
    $size = "default",
    $variant = "primary",
    $withBorder = true,
  }) => `
   position:relative;
   overflow:hidden;
   display:inline-flex;
   flex-wrap:noWrap;
   align-items: center;
   justify-content: center;
   align-content: center;
   box-sizing: border-box;
   text-align: center;
   cursor: pointer;
   user-select: none;
   flex-shrink: 0;
   word-wrap: break-word;
   word-break: break-word;
     ${
       $withShadow
         ? `
             box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);

       `
         : ``
     }
     ${Svg}{
        width:${CSSHelper.setIconSize($size, theme)};
        height:${CSSHelper.setIconSize($size, theme)};
      }
   border-radius:${theme?.button?.radius[$shape]};
   ${
     $withBorder ? `border: solid 1px ${theme?.variant?.[$variant]?.main};` : ""
   }
   transition: ${theme.button?.transition};
   transition-property: border, background, color, fill, box-shadow;
   a& { text-decoration: none; }
   &:focus,&:active {outline: 0;}
   ${
     $block
       ? `
        justify-content: center;
        width: 100%;
             `
       : ""
   }
   ${
     $fixedSize
       ? `       
        justify-content: center;
    `
       : ""
   }
    ${
      !$link
        ? `
   ${
     $fill
       ? `
      background: ${theme.variant?.[$variant].main};
      color: ${theme.variant?.[$variant]?.font};
      fill: ${theme.variant?.[$variant]?.font};
      > ${IconElement} { background: ${theme.variant?.[$variant]?.main};}
      &[data-src-placeholder-style="true"] {color: ${theme?.variant?.[$variant]?.button?.placeholderFill}; }
      &[data-src-active="true"] {
                border-color: ${theme.variant?.[$variant].dark};
                background: ${theme.variant?.[$variant].dark};
                > ${IconElement} {
                    background: ${theme.variant?.[$variant].main};
                }
            }


      
      `
       : `
         background: ${theme?.variant?.[$variant].button?.background};
            color: ${theme?.variant?.[$variant].main};
            fill: ${theme?.variant?.[$variant].main};
            &[data-src-placeholder-style="true"] {
                color: ${theme?.variant[$variant].button?.placeholder};
            }
    
            &:hover,
            &[data-src-active="true"] {
                background: ${theme?.variant?.[$variant].main};
                color: ${theme.variant?.[$variant].font};
                fill: ${theme?.variant?.[$variant].button?.background};
            }
      
      `
   }
      
   
   `
        : `
        border-color: transparent;
        background: transparent;
        cursor: pointer;
        text-align: left;
        color: ${theme.variant[$variant].main};
        fill: ${theme.variant[$variant].main};
        &:hover,
        &[data-src-active="true"] {
            color: ${theme.variant[$variant].darkest};
            fill: ${theme.variant[$variant].darkest};
        }
   `
    }
   ${
     $disabled
       ? `
        opacity: ${theme.button.disabledOpacity};
        pointer-events: none;
    `
       : ""
   }
   ${
     $loading
       ? `
        pointer-events: none;
        > *:not(.src-wave-ripple):not([data-src-loading="true"]) {
            visibility: hidden;
         
        }
    `
       : ""
   }


`}
  ${({ theme, $size, $fixedSize }) => sizeStyles(theme, $size, $fixedSize)}
  ${defaultProps}
`;
