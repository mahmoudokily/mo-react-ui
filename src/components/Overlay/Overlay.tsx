import React from "react";
import { createPortal } from "react-dom";
import { DOMHelper, DefaultProps, JSXElementProps } from "../../shared";
import styled, { useTheme } from "styled-components";
import { Box } from "../Box";

interface OverlayElementProps {
  breakpoint: string;
  $background: boolean;
}

const overlayCSS = (theme: any, background: boolean) => `
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: ${theme.overlay.space};
    touch-action: none;

    ${
      background
        ? `
        background: ${theme.overlay.background};
    `
        : ""
    }
`;

const OverlayElement = styled.div<OverlayElementProps>(
  ({ theme, breakpoint = "medium", $background }) => `
    position: fixed;
    z-index: ${theme.zIndex.overlay};

    ${
      breakpoint
        ? `
        @media(max-width:${theme.grid.breakpoint[breakpoint] - 1}px) {
            ${overlayCSS(theme, $background)}
        }
    `
        : overlayCSS(theme, $background)
    }
`
);

export interface Props {
  children: JSX.Element;
  elementProps?: JSXElementProps;
  renderInBody?: boolean;
  breakpoint?: string;
  $background?: boolean;
}

const Overlay = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      elementProps = {},
      renderInBody = true,
      breakpoint = "medium",
      $background = true,
    },
    ref
  ) => {
    const theme = useTheme();
    const el = React.useRef<HTMLDivElement>(null);

    /**
     * Checks the target element, prevents default and stops propagation, if the element is in the overlay and not scrollable.
     *
     * @param e
     */
    const wheel = (e: WheelEvent) => {
      const container = ((ref || el) as React.MutableRefObject<HTMLDivElement>)
        .current;

      if (
        (breakpoint &&
          window.innerWidth < theme?.grid.breakpoint[breakpoint]) ||
        !breakpoint
      ) {
        const delta =
          (e.deltaY || -(e as any).wheelDelta || e.detail) >> 10 || 1;
        const up = delta < 0;
        let el = e.target as HTMLElement;
        let scrollEl = DOMHelper.getScrollParent(el);
        while (
          scrollEl &&
          (scrollEl == container || container.contains(scrollEl as Node))
        ) {
          if (
            (up && scrollEl.scrollTop > 0) ||
            (!up && scrollEl.scrollHeight > scrollEl.scrollTop)
          )
            return;
          else scrollEl = DOMHelper.getScrollParent(scrollEl);
        }

        e.preventDefault();
        e.stopPropagation();
      }
    };

    const selectStart = (e: Event) => {
      const container = ((ref || el) as React.MutableRefObject<HTMLDivElement>)
        .current;
      if (e.target == container) e.preventDefault();
    };

    React.useEffect(() => {
      DOMHelper.addEventListener(document, DOMHelper.MOUSE_WHEEL, wheel, {
        passive: false,
      });
      DOMHelper.addEventListener(window, ["selectstart"], selectStart);

      return () => {
        DOMHelper.removeEventListener(
          document,
          DOMHelper.MOUSE_WHEEL,
          wheel,
          {}
        );
        DOMHelper.removeEventListener(window, ["selectstart"], selectStart);
      };
    }, []);

    const Element = (
      <OverlayElement
        {...elementProps}
        ref={ref || el}
        breakpoint={breakpoint}
        $background={$background}
      >
        {children}
      </OverlayElement>
    );

    return DOMHelper.canBeRenderedInPortal(renderInBody)
      ? createPortal(Element, document.body)
      : Element;
  }
);

export default Overlay;
