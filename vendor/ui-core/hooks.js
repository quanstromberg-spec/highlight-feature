import { d as c } from "./index-CHy7tR7D.js";
import { u as T, a as D, b as h, c as w, e as B, f as k, g as x, h as E, i as A, j as R, k as V, l as C, m as I, n as g, o as z, p as F, q as O, r as j } from "./index-CHy7tR7D.js";
import { useState as n, useRef as a, useEffect as o } from "react";
const l = (s, e = 200) => {
  const [u, t] = n(s), r = c(t, e);
  return [u, r];
}, f = (s) => {
  const e = a();
  return o(() => {
    e.current = s;
  }), e.current;
}, b = (s, e) => {
  const [u, t] = n(s);
  return o(
    () => {
      const r = setTimeout(() => {
        t(s);
      }, e);
      return () => {
        clearTimeout(r);
      };
    },
    [s]
  ), u;
}, m = (s, e, u = []) => {
  const t = a(Date.now());
  o(
    () => {
      const r = setTimeout(function() {
        Date.now() - t.current >= e && (s(), t.current = Date.now());
      }, e - (Date.now() - t.current));
      return () => {
        clearTimeout(r);
      };
    },
    [e, ...u]
  );
};
export {
  T as useAriaAttributes,
  D as useBorderRadius,
  h as useBreakpoint,
  w as useColors,
  B as useCurrentResponsiveValue,
  b as useDebouncedEffect,
  l as useDebouncedState,
  k as useElementSize,
  x as useFlex,
  E as useIsBreakpointAndAbove,
  A as useIsBreakpointOrBelow,
  R as useIsFirstRender,
  V as useOutsideClick,
  f as usePrevious,
  C as useSize,
  I as useSpacing,
  g as useTabbableByKeys,
  z as useTextStyle,
  m as useThrottled,
  F as useThrottledState,
  O as useVisible,
  j as useWindowDimensions
};
//# sourceMappingURL=hooks.js.map
