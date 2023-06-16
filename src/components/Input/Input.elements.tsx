import styled, { DefaultTheme, css } from "styled-components";
import { Box } from "../Box";

import Svg from "../Svg/Svg";
import { InputContainerProps, InputIconProps, InputProps } from "./Input.types";
import { CSSHelper, ThemeProps, defaultProps } from "../../shared";
import { Typography, TypographyProps } from "../Typography";

const placeholder = [
  "::-webkit-input-placeholder",
  "::-moz-placeholder",
  ":-moz-placeholder",
  ":-ms-input-placeholder",
  "::placeholder",
];

export const InputError = styled(Typography).attrs({
  variant: "caption20",
})<TypographyProps>`
  margin-top: 2px;
  color: ${({ theme }) => theme.variant.danger.main};
`;

export const InputIcon = styled(Box)<InputIconProps>`
  ${({ theme, $type, $shape = "default", $size = "default ", $disabled }) => `
    overflow: hidden;
    flex: 0 0 auto;
    display: inline-flex;
    height:100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;

      ${
        $disabled
          ? `
        opacity: ${theme?.form?.disabledOpacity};
        cursor: not-allowed;
        user-select: none;
        `
          : ``
      }
    font-size: ${theme?.form?.inputFontSize?.[$size]};
        ${
          $type === "left"
            ? `
            border-top-left-radius: ${theme?.form?.inputRadius?.[$shape]};
            border-bottom-left-radius: ${theme?.form?.inputRadius?.[$shape]};
        `
            : `
            
            border-top-right-radius: ${theme?.form?.inputRadius?.[$shape]};
            border-bottom-right-radius: ${theme?.form?.inputRadius?.[$shape]};
        `
        }
    }`}
`;

const sizeStyles = (v = "large", t: any) => `
        padding: ${t?.form?.inputPadding?.[v]?.y} ${t?.form?.inputPadding?.[v]?.x};
        font-size: ${t?.form?.inputFontSize?.[v]};
    `;

export const InputElement = styled.input<InputProps>`
  ${({
    theme,
    $variant = "primary",
    $fill = false,
    $disabled,
    $inputElement = true,
  }) => `
       padding: 0px 5px;

    width:100%;
    height:100%;
    max-width:100%;
    box-sizing: border-box;
    border: 0px;
    transition: 200ms 0s ease-in-out;
    transition-property: border, background;
    &:focus,
    &:active {
        outline: 0;
    }
    background-color:transparent;
    ${
      $inputElement
        ? `
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        ${placeholder
          .map(
            (item) => `
            &${item} {
                opacity: 1;
                color: ${
                  $fill
                    ? theme?.variant[$variant]?.form?.inputPlaceholderFill
                    : theme?.variant[$variant]?.form?.inputPlaceholder
                };
            }
        `
          )
          .join(" ")}
    `
        : `
        cursor: default;
        user-select: none;
        &[data-src-placeholder-style="true"] {
            color: ${
              $fill
                ? theme?.variant[$variant]?.form?.inputPlaceholderFill
                : theme?.variant[$variant]?.form?.inputPlaceholder
            };
        }
    `
    }
    { ${
      $fill
        ? `
        color: ${theme.variant[$variant].font};
        `
        : `
        color: ${theme?.variant[$variant].form?.inputFont};

      `
    }
    ${
      $disabled
        ? `variant
        opacity: ${theme?.form?.disabledOpacity};
         ${
           $fill
             ? ""
             : `
         background:${theme?.variant[$variant]?.form?.disabledBackgroundColor};
         `
         }
            border: none;
            ::placeholder{
              opacity:0;
            }
    `
        : ""
    }
`};

  ${({ $size, theme }) => sizeStyles($size, theme)};
  ${defaultProps};
`;

export const InputContainer = styled(Box)<InputContainerProps>`
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: center;

  ${({
    $fill,
    theme,
    $withGradient = false,
    $withShadow = true,
    $shape = "default",
    $variant = "primary",
    $withBorder = true,
    $size = "default",
    $error,
  }) => css`
  padding:0px;
      border-radius: ${theme?.form?.inputRadius?.[$shape]};
      border: ${
        $withBorder ? `solid 2px ${theme.variant[$variant].dark}` : "0"
      };
       ${Svg}{
        width:${CSSHelper.setIconSize($size, theme)};
        height:${CSSHelper.setIconSize($size, theme)};
      }
        ${
          $fill
            ? `
        span {
        color: ${theme.variant[$variant].font}!important;
      }
      ${
        $withShadow
          ? `
             box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);

       `
          : ``
      }
         background:${
           $withGradient
             ? `
         linear-gradient(to top, rgba(167,27,23,0) 100%,rgba(5,3,8,0.20) 100%),${theme.variant[$variant].main};
         `
             : `${theme.variant[$variant].main};`
         } 
        color: ${"#122967" || theme?.variant[$variant].form?.inputFont};
        fill: ${theme.variant[$variant].font};
        :focus-within{
            border-color: ${$error ? "red" : theme.variant[$variant].darkest};
            background: ${theme.variant[$variant].dark};
        }
        `
            : `
        span {
        color: ${theme.variant[$variant].main}!important;
      }
       border-color: ${theme.variant[$variant].main};
        background: ${theme?.variant[$variant].form?.inputBackground};
         color: ${theme.variant[$variant].font};
        fill: ${theme?.variant[$variant].main};
        :focus-within {
            border-color: ${$error ? "red" : theme.variant[$variant].darkest};
            
        }
      `
        }
  }

 
   `}
`;
