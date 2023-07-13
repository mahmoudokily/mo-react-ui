import { RefObject, useEffect } from "react";

export const useCloseOnClickAway = (
  ref: RefObject<HTMLDivElement> | RefObject<HTMLDivElement>[],
  handler: (event: TouchEvent | MouseEvent) => void,
  active = true
) => {
  useEffect(() => {
    if (!active) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return;
    }

    const listener = (event: TouchEvent | MouseEvent) => {
      const refs = Array.isArray(ref) ? ref : [ref];
      let contains = false;

      refs.forEach((r) => {
        if (!r?.current || r?.current?.contains(event.target as Node)) {
          contains = true;
          return;
        }
      });
      event.stopPropagation();
      if (!contains) handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      if (!active) return;
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, active]);
};
