import styled, { css } from "styled-components";
import { CSSHelper } from "../../shared/helpers";
import { SvgProps } from "./Svg.types";

export default styled.svg<SvgProps>`
  ${({ viewBox, iconSize = "0.8rem", fill, theme, stroke }) => `
  ${
    iconSize &&
    `
    width:${CSSHelper.setIconSize(iconSize, theme)};
     height:${CSSHelper.setIconSize(iconSize, theme)};
  `
  }
 ${stroke ? `stroke:${CSSHelper.setColor(stroke, theme)} ` : ``}
 ${
   fill
     ? css`
         fill: ${CSSHelper.setColor(fill, theme)};
       `
     : ``
 } : 


`}
`;
