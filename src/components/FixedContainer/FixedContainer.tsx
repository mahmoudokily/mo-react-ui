import React, { useEffect } from "react";
import { DOMHelper } from "../../shared";
import CSSTransition from "../Transition/CSSTransition";
import { FixedBoxElement } from "./FixedContainer.elements";
import { FixedContainerProps } from "./FixedContainer.types";
import Overlay from "../Overlay/Overlay";
export const FixedContainer: React.FC<FixedContainerProps> = ({
  space = 4,
  $withShadow = true,
  transitionClassName = "src-overlay-fixed-box-up",
  transitionDuration = 300,
  showAnimation = true,
  hideAnimation = true,
  status = false,
  setStatus,
  ...props
}) => {
  const box = React.createRef<HTMLDivElement>();
  const container = React.createRef<HTMLElement | any>();
  const toggle = (e: Event): void => {
    if (
      container?.current &&
      DOMHelper.checkIfTargetIsClickable(
        e.target as HTMLElement,
        container?.current
      )
    )
      setStatus((prev: boolean) => !prev);
  };
  const close = () => {
    setStatus(false);
  };
  const setPosition = () => {
    if (!(container.current && box.current)) return;

    let crect: DOMRect = container?.current.getBoundingClientRect();
    let brect: DOMRect = box.current.getBoundingClientRect();
    let style: string = "";

    // x
    if (!props.minWidth) {
      style += `
                left: ${crect.left}px;
                width: ${crect.width}px;
            `;
    } else {
      let width: number = Math.max(crect.width, props.minWidth);
      style += `width:${width}px;`;

      let diffLeft: number = window.innerWidth - (crect.left + width);
      let diffRight: number = crect.left - width;

      if (diffLeft >= 0 || diffLeft >= diffRight)
        style += `left:${crect.left}px;`;
      else style += `left:${crect.left + crect.width - width}px;`;
    }

    // y
    let diffTop: number = crect.top + crect.height - (brect.height + 1);
    let diffBottom: number =
      window.innerHeight - (crect.top + crect.height + brect.height + space);

    if (diffBottom >= 0 || diffBottom >= diffTop) {
      let height: number =
        diffBottom > 0
          ? brect.height
          : window.innerHeight - (crect.top + crect.height + space);
      style += `
                top: ${crect.top + crect.height + space}px;
                height: ${height}px;
            `;
    } else {
      let height: number = diffTop > 0 ? brect.height : crect.top;
      style += `
                top: ${crect.top + crect.height - (height + 1)}px;
                height: ${height}px;
            `;
    }

    box.current.setAttribute("style", style);
  };
  const beforeShow = () =>
    new Promise<void>((resolve) => {
      setPosition();
      resolve();
    });
  const detect = (e: Event): void => {
    const target = e.target as Node;

    if (
      box.current &&
      container?.current &&
      e.target != container?.current &&
      !container?.current?.contains(target) &&
      e.target != box.current &&
      !box.current?.contains(target)
    )
      close();
  };

  useEffect(() => {
    DOMHelper.addEventListener(
      container?.current?.children[0],
      ["click"],
      toggle
    );
    if (props.onRef) props.onRef({ setPosition: setPosition });
  }, [container, props, setPosition, toggle]);

  useEffect(() => {
    if (status) {
      setPosition();
      DOMHelper.addEventListener(window, ["resize", "scroll"], setPosition);
      DOMHelper.addEventListener(window, ["click"], detect);
    } else {
      DOMHelper.removeEventListener(window, ["resize", "scroll"], setPosition);
      DOMHelper.removeEventListener(window, ["click"], detect);
    }
    return () => {
      if (container.current)
        DOMHelper.removeEventListener(container.current, ["click"], close);
    };
  }, [status, detect, setPosition, close, container]);

  const FixedBoxEl = (
    <FixedBoxElement
      {...props.boxProps}
      ref={box}
      $withShadow={$withShadow as any}
    >
      {props.children[1]}
    </FixedBoxElement>
  );

  return (
    <div ref={container}>
      {props.children[0]}
      <CSSTransition
        $status={status}
        $className={transitionClassName}
        $type={props?.transitionType}
        $duration={transitionDuration}
        $showAnimation={showAnimation}
        $hideAnimation={hideAnimation}
        $beforeShow={beforeShow}
      >
        <Overlay breakpoint="small">{FixedBoxEl}</Overlay>
      </CSSTransition>
    </div>
  );
};
