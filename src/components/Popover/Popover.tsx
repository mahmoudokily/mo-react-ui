import React from "react";
import { createPortal, findDOMNode } from "react-dom";
import { SizeProps } from "styled-system";
import {
  DOMHelper,
  JSXElementProps,
  SetValue,
  TooltipAttributes,
  Variant,
} from "../../shared";
import TooltipHelper from "../../shared/helpers/TooltipHelpers";
import { ArrowElement, PopoverElement } from "./PopoverStyledElement";

export interface Props extends SizeProps {
  children: [JSX.Element, JSX.Element];
  elementProps?: JSXElementProps;
  status: boolean;
  setStatus: SetValue<boolean>;
  variant?: Variant;
  position?: string;
  closeOnClickAway?: boolean;
  renderInBody?: boolean;
}

interface State {
  attrs: TooltipAttributes;
}

const DEFAULT_STYLE = {};

export class Popover extends React.Component<Props, State> {
  private static defaultProps = {
    size: "default",
    elementProps: {},
    type: "white",
    position: "right",
    renderInBody: true,
  };
  private container = React.createRef<HTMLElement | any>();

  private el = React.createRef<HTMLDivElement>();
  private arrowEl = React.createRef<HTMLDivElement>();

  constructor(props: any) {
    super(props);

    this.state = {
      attrs: {},
    };
  }

  componentDidMount = () => {
    DOMHelper.addEventListener(
      this.container?.current?.children[0],
      ["click"],
      this.toggle
    );
    if (this.props.status)
      DOMHelper.addEventListener(
        window,
        ["resize", "scroll"],
        this.setPosition,
        true
      );

    this.setPosition();
  };

  componentDidUpdate = (op: any) => {
    const np = this.props;

    if (np.status !== op.status) {
      if (np.status) DOMHelper.addEventListener(window, ["click"], this.detect);
      if (np.status) {
        DOMHelper.addEventListener(
          window,
          ["resize", "scroll"],
          this.setPosition,
          true
        );
        this.setPosition();
      } else
        DOMHelper.removeEventListener(
          window,
          ["resize", "scroll"],
          this.setPosition
        );
    }
  };

  componentWillUnmount = () => {
    if (!this.props.closeOnClickAway)
      DOMHelper.removeEventListener(
        this.container.current,
        ["click"],
        this.toggle
      );
    else {
      DOMHelper.removeEventListener(
        this.container.current,
        ["click"],
        this.open
      );
      DOMHelper.removeEventListener(document.body, ["click"], this.close);
    }

    DOMHelper.removeEventListener(
      window,
      ["resize", "scroll"],
      this.setPosition
    );
  };

  /**
   * Toggles element.
   */
  toggle = () => this.props.setStatus(!this.props.status);

  /**
   * Open element.
   */
  open = () => {
    if (!this.props.status) this.props.setStatus(true);
  };

  /**
   * Closes element if target is not in the container element.
   */
  close = () => {
    this.props.setStatus(false);
  };

  detect = (e: Event): void => {
    const target = e.target as Node;

    if (
      this.el.current &&
      this.container?.current &&
      e.target !== this.container?.current &&
      !this.container?.current?.contains(target) &&
      e.target !== this.el.current &&
      !this.el.current?.contains(target)
    )
      this.close();
  };

  /**
   * Sets position of the element.
   */
  setPosition = () => {
    if (this.props.status) {
      const containerEl = findDOMNode(this) as HTMLElement;
      const headerEl = this?.el?.current?.querySelector(
        `.src-popover-header`
      ) as HTMLElement;
      this.setState({
        attrs: TooltipHelper.getAttributes(
          this.el.current as HTMLElement,
          containerEl,
          String(this.props.position),
          headerEl,
          this.arrowEl.current as HTMLDivElement
        ),
      });
    }
  };

  render() {
    const p: any = this.props;
    const s: any = this.state;

    const Element = (
      <PopoverElement
        {...p.elementProps}
        style={{
          ...(p?.elementProps?.style || DEFAULT_STYLE),
          transform: s.attrs.transform,
        }}
        ref={this.el}
        size$={p.size}
        size$Sm={p.sizeSm}
        size$Md={p.sizeMd}
        size$Lg={p.sizeLg}
        size$Xl={p.sizeXl}
        variant={p.variant}
        arrow={s.attrs.arrow}
        isArrowInHeader={s.attrs.isArrowInHeader}
      >
        {p.children[1]}
        <ArrowElement
          zIndex="popover"
          ref={this.arrowEl}
          style={{ transform: s.attrs.arrowTransform }}
        />
      </PopoverElement>
    );

    return (
      <div ref={this.container}>
        {p.children[0]}
        {this.props.status &&
          (DOMHelper.canBeRenderedInPortal(p?.renderInBody)
            ? createPortal(Element, document.body)
            : Element)}
      </div>
    );
  }
}
