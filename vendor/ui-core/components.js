import * as Ie from "react";
import J, { createContext as Ls, forwardRef as le, useState as X, useRef as U, useCallback as ve, useEffect as K, useMemo as ir, useContext as Tr, isValidElement as Hn, createElement as Ps, Children as wo, cloneElement as to, useLayoutEffect as un, useId as zt, useImperativeHandle as Ws } from "react";
import N from "classnames";
import { m as qe } from "./mergeRefs-BIHCxWZe.js";
import { m as Ne, o as mi, a as Ht, g as Ar, l as it, c as pt, u as dr, f as ro, i as hi, j as dn, k as vi, n as gi, s as Fs, t as Ms, v as zs, w as Hs, x as Gs, y as Vs, e as qs, z as bi, q as Us, r as Ys } from "./index-CHy7tR7D.js";
import { TypographyTokenAlias as yi } from "./design-tokens.js";
import kr from "./settings.js";
import { b as mt, T as jn } from "./index-DRz21bpo.js";
import { a as xt, b as Xs } from "./responsive-value-CHguarkb.js";
import { shift as Ks, offset as Qs, flip as Js, autoUpdate as Zs } from "@floating-ui/react";
import * as ea from "react-dom";
import { createPortal as $r } from "react-dom";
import { CSSTransition as fn } from "react-transition-group";
import { replace as ta } from "lodash";
var Mr = { exports: {} }, mr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _o;
function ra() {
  if (_o) return mr;
  _o = 1;
  var e = J, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, u) {
    var d, m = {}, v = null, h = null;
    u !== void 0 && (v = "" + u), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (d in c) n.call(c, d) && !i.hasOwnProperty(d) && (m[d] = c[d]);
    if (a && a.defaultProps) for (d in c = a.defaultProps, c) m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: t, type: a, key: v, ref: h, props: m, _owner: o.current };
  }
  return mr.Fragment = r, mr.jsx = s, mr.jsxs = s, mr;
}
var hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function na() {
  return jo || (jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = J, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, g = "@@iterator";
    function y(p) {
      if (p === null || typeof p != "object")
        return null;
      var O = b && p[b] || p[g];
      return typeof O == "function" ? O : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(p) {
      {
        for (var O = arguments.length, P = new Array(O > 1 ? O - 1 : 0), Y = 1; Y < O; Y++)
          P[Y - 1] = arguments[Y];
        C("error", p, P);
      }
    }
    function C(p, O, P) {
      {
        var Y = _.ReactDebugCurrentFrame, de = Y.getStackAddendum();
        de !== "" && (O += "%s", P = P.concat([de]));
        var he = P.map(function(ie) {
          return String(ie);
        });
        he.unshift("Warning: " + O), Function.prototype.apply.call(console[p], console, he);
      }
    }
    var f = !1, w = !1, x = !1, S = !1, R = !1, A;
    A = Symbol.for("react.module.reference");
    function j(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === n || p === i || R || p === o || p === u || p === d || S || p === h || f || w || x || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === m || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === A || p.getModuleId !== void 0));
    }
    function L(p, O, P) {
      var Y = p.displayName;
      if (Y)
        return Y;
      var de = O.displayName || O.name || "";
      return de !== "" ? P + "(" + de + ")" : P;
    }
    function G(p) {
      return p.displayName || "Context";
    }
    function $(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var O = p;
            return G(O) + ".Consumer";
          case s:
            var P = p;
            return G(P._context) + ".Provider";
          case c:
            return L(p, p.render, "ForwardRef");
          case m:
            var Y = p.displayName || null;
            return Y !== null ? Y : $(p.type) || "Memo";
          case v: {
            var de = p, he = de._payload, ie = de._init;
            try {
              return $(ie(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, D = 0, W, q, z, ae, ne, Pe, Se;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function $e() {
      {
        if (D === 0) {
          W = console.log, q = console.info, z = console.warn, ae = console.error, ne = console.group, Pe = console.groupCollapsed, Se = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        D++;
      }
    }
    function ye() {
      {
        if (D--, D === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, p, {
              value: W
            }),
            info: T({}, p, {
              value: q
            }),
            warn: T({}, p, {
              value: z
            }),
            error: T({}, p, {
              value: ae
            }),
            group: T({}, p, {
              value: ne
            }),
            groupCollapsed: T({}, p, {
              value: Pe
            }),
            groupEnd: T({}, p, {
              value: Se
            })
          });
        }
        D < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = _.ReactCurrentDispatcher, B;
    function I(p, O, P) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (de) {
            var Y = de.stack.trim().match(/\n( *(at )?)/);
            B = Y && Y[1] || "";
          }
        return `
` + B + p;
      }
    }
    var Z = !1, fe;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new pe();
    }
    function H(p, O) {
      if (!p || Z)
        return "";
      {
        var P = fe.get(p);
        if (P !== void 0)
          return P;
      }
      var Y;
      Z = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = be.current, be.current = null, $e();
      try {
        if (O) {
          var ie = function() {
            throw Error();
          };
          if (Object.defineProperty(ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ie, []);
            } catch (Fe) {
              Y = Fe;
            }
            Reflect.construct(p, [], ie);
          } else {
            try {
              ie.call();
            } catch (Fe) {
              Y = Fe;
            }
            p.call(ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            Y = Fe;
          }
          p();
        }
      } catch (Fe) {
        if (Fe && Y && typeof Fe.stack == "string") {
          for (var te = Fe.stack.split(`
`), Be = Y.stack.split(`
`), je = te.length - 1, Ee = Be.length - 1; je >= 1 && Ee >= 0 && te[je] !== Be[Ee]; )
            Ee--;
          for (; je >= 1 && Ee >= 0; je--, Ee--)
            if (te[je] !== Be[Ee]) {
              if (je !== 1 || Ee !== 1)
                do
                  if (je--, Ee--, Ee < 0 || te[je] !== Be[Ee]) {
                    var Ye = `
` + te[je].replace(" at new ", " at ");
                    return p.displayName && Ye.includes("<anonymous>") && (Ye = Ye.replace("<anonymous>", p.displayName)), typeof p == "function" && fe.set(p, Ye), Ye;
                  }
                while (je >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        Z = !1, be.current = he, ye(), Error.prepareStackTrace = de;
      }
      var Xt = p ? p.displayName || p.name : "", It = Xt ? I(Xt) : "";
      return typeof p == "function" && fe.set(p, It), It;
    }
    function Q(p, O, P) {
      return H(p, !1);
    }
    function ue(p) {
      var O = p.prototype;
      return !!(O && O.isReactComponent);
    }
    function xe(p, O, P) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return H(p, ue(p));
      if (typeof p == "string")
        return I(p);
      switch (p) {
        case u:
          return I("Suspense");
        case d:
          return I("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return Q(p.render);
          case m:
            return xe(p.type, O, P);
          case v: {
            var Y = p, de = Y._payload, he = Y._init;
            try {
              return xe(he(de), O, P);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, oe = {}, we = _.ReactDebugCurrentFrame;
    function ge(p) {
      if (p) {
        var O = p._owner, P = xe(p.type, p._source, O ? O.type : null);
        we.setExtraStackFrame(P);
      } else
        we.setExtraStackFrame(null);
    }
    function We(p, O, P, Y, de) {
      {
        var he = Function.call.bind(me);
        for (var ie in p)
          if (he(p, ie)) {
            var te = void 0;
            try {
              if (typeof p[ie] != "function") {
                var Be = Error((Y || "React class") + ": " + P + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              te = p[ie](O, ie, Y, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (je) {
              te = je;
            }
            te && !(te instanceof Error) && (ge(de), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", P, ie, typeof te), ge(null)), te instanceof Error && !(te.message in oe) && (oe[te.message] = !0, ge(de), E("Failed %s type: %s", P, te.message), ge(null));
          }
      }
    }
    var He = Array.isArray;
    function ht(p) {
      return He(p);
    }
    function vt(p) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, P = O && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return P;
      }
    }
    function Ot(p) {
      try {
        return Rt(p), !1;
      } catch {
        return !0;
      }
    }
    function Rt(p) {
      return "" + p;
    }
    function Tt(p) {
      if (Ot(p))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(p)), Rt(p);
    }
    var At = _.ReactCurrentOwner, Vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pr, Wr;
    function yn(p) {
      if (me.call(p, "ref")) {
        var O = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function xn(p) {
      if (me.call(p, "key")) {
        var O = Object.getOwnPropertyDescriptor(p, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function wn(p, O) {
      typeof p.ref == "string" && At.current;
    }
    function k(p, O) {
      {
        var P = function() {
          Pr || (Pr = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        P.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function F(p, O) {
      {
        var P = function() {
          Wr || (Wr = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        P.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var V = function(p, O, P, Y, de, he, ie) {
      var te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: O,
        ref: P,
        props: ie,
        // Record the component responsible for creating this element.
        _owner: he
      };
      return te._store = {}, Object.defineProperty(te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function ce(p, O, P, Y, de) {
      {
        var he, ie = {}, te = null, Be = null;
        P !== void 0 && (Tt(P), te = "" + P), xn(O) && (Tt(O.key), te = "" + O.key), yn(O) && (Be = O.ref, wn(O, de));
        for (he in O)
          me.call(O, he) && !Vt.hasOwnProperty(he) && (ie[he] = O[he]);
        if (p && p.defaultProps) {
          var je = p.defaultProps;
          for (he in je)
            ie[he] === void 0 && (ie[he] = je[he]);
        }
        if (te || Be) {
          var Ee = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          te && k(ie, Ee), Be && F(ie, Ee);
        }
        return V(p, te, Be, de, Y, At.current, ie);
      }
    }
    var ee = _.ReactCurrentOwner, Re = _.ReactDebugCurrentFrame;
    function Oe(p) {
      if (p) {
        var O = p._owner, P = xe(p.type, p._source, O ? O.type : null);
        Re.setExtraStackFrame(P);
      } else
        Re.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function qt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function at() {
      {
        if (ee.current) {
          var p = $(ee.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function pr(p) {
      return "";
    }
    var $t = {};
    function jt(p) {
      {
        var O = at();
        if (!O) {
          var P = typeof p == "string" ? p : p.displayName || p.name;
          P && (O = `

Check the top-level render call using <` + P + ">.");
        }
        return O;
      }
    }
    function Fr(p, O) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var P = jt(O);
        if ($t[P])
          return;
        $t[P] = !0;
        var Y = "";
        p && p._owner && p._owner !== ee.current && (Y = " It was passed a child from " + $(p._owner.type) + "."), Oe(p), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, Y), Oe(null);
      }
    }
    function Ut(p, O) {
      {
        if (typeof p != "object")
          return;
        if (ht(p))
          for (var P = 0; P < p.length; P++) {
            var Y = p[P];
            qt(Y) && Fr(Y, O);
          }
        else if (qt(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var de = y(p);
          if (typeof de == "function" && de !== p.entries)
            for (var he = de.call(p), ie; !(ie = he.next()).done; )
              qt(ie.value) && Fr(ie.value, O);
        }
      }
    }
    function Yt(p) {
      {
        var O = p.type;
        if (O == null || typeof O == "string")
          return;
        var P;
        if (typeof O == "function")
          P = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === m))
          P = O.propTypes;
        else
          return;
        if (P) {
          var Y = $(O);
          We(P, p.props, "prop", Y, p);
        } else if (O.PropTypes !== void 0 && !st) {
          st = !0;
          var de = $(O);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rs(p) {
      {
        for (var O = Object.keys(p.props), P = 0; P < O.length; P++) {
          var Y = O[P];
          if (Y !== "children" && Y !== "key") {
            Oe(p), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Oe(null);
            break;
          }
        }
        p.ref !== null && (Oe(p), E("Invalid attribute `ref` supplied to `React.Fragment`."), Oe(null));
      }
    }
    var yo = {};
    function xo(p, O, P, Y, de, he) {
      {
        var ie = j(p);
        if (!ie) {
          var te = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = pr();
          Be ? te += Be : te += at();
          var je;
          p === null ? je = "null" : ht(p) ? je = "array" : p !== void 0 && p.$$typeof === t ? (je = "<" + ($(p.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : je = typeof p, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", je, te);
        }
        var Ee = ce(p, O, P, de, he);
        if (Ee == null)
          return Ee;
        if (ie) {
          var Ye = O.children;
          if (Ye !== void 0)
            if (Y)
              if (ht(Ye)) {
                for (var Xt = 0; Xt < Ye.length; Xt++)
                  Ut(Ye[Xt], p);
                Object.freeze && Object.freeze(Ye);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(Ye, p);
        }
        if (me.call(O, "key")) {
          var It = $(p), Fe = Object.keys(O).filter(function(Bs) {
            return Bs !== "key";
          }), _n = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yo[It + _n]) {
            var Ds = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _n, It, Ds, It), yo[It + _n] = !0;
          }
        }
        return p === n ? Rs(Ee) : Yt(Ee), Ee;
      }
    }
    function Ts(p, O, P) {
      return xo(p, O, P, !0);
    }
    function As(p, O, P) {
      return xo(p, O, P, !1);
    }
    var $s = As, Is = Ts;
    hr.Fragment = n, hr.jsx = $s, hr.jsxs = Is;
  }()), hr;
}
var ko;
function oa() {
  return ko || (ko = 1, process.env.NODE_ENV === "production" ? Mr.exports = ra() : Mr.exports = na()), Mr.exports;
}
var l = oa();
const Ce = (e) => Object.fromEntries(Object.entries(e).filter(([t]) => t.startsWith("data-"))), ia = "u4zNPmY1", zr = {
  "hui-box--no": "uWFFT57h",
  "hui-box--mhz": "utNkTWfK",
  "hui-box--pr": "uS-QvC2c",
  fill: ia
}, M = J.forwardRef(({
  id: e,
  role: t,
  className: r,
  tag: n,
  component: o,
  children: i,
  noOverflow: s,
  minHeightZero: a,
  tabIndex: c,
  fillParent: u,
  positionRoot: d,
  onClick: m,
  onKeyDown: v,
  onKeyUp: h,
  onFocus: b,
  onBlur: g,
  style: y,
  ..._
}, E) => {
  const C = Ne(_), f = mi(_), w = Ht(_), x = Ar(_), S = it(_), R = pt(_);
  return J.createElement(n || o || "div", {
    className: N(
      R.className,
      S.className,
      f.className,
      w.className,
      C.className,
      x.className,
      r,
      {
        [zr["hui-box--no"]]: s,
        [zr["hui-box--mhz"]]: a,
        [zr["hui-box--pr"]]: d,
        [zr.fill]: u
      }
    ) || void 0,
    style: {
      ...R.style,
      ...S.style,
      ...C.style,
      ...w.style,
      ...x.style,
      ...y
    },
    id: e,
    ref: E,
    role: t,
    tabIndex: c,
    onClick: m,
    onKeyDown: v,
    onKeyUp: h,
    onFocus: b,
    onBlur: g,
    ...dr(_),
    ...Ce(_)
  }, i);
});
M.displayName = "Box";
const Nr = {
  "hbd-typography": "ugRU3HGQ",
  "hbd-typography--heading1": "uel319pO",
  "hbd-typography--heading2": "u7RH1G1S",
  "hbd-typography--heading3": "uh0glkAz",
  "hbd-typography--heading4": "uEwECsFM",
  "hbd-typography--subtitle1": "uFi7JbtY",
  "hbd-typography--subtitle2": "ujd3WTBv",
  "hbd-typography--introduction": "u5rr-eC-",
  "hbd-typography--body1": "uX34qNS-",
  "hbd-typography--body1bold": "uwfU8uSx",
  "hbd-typography--body1medium": "uQj-cePP",
  "hbd-typography--body2": "uodQIRgz",
  "hbd-typography--body2bold": "uo-1yyq5",
  "hbd-typography--body2medium": "ufOfyEzZ",
  "hbd-typography--microcopy": "uQ4aIXV3",
  "hbd-typography--microcopy-bold": "u-hwosQD",
  "hbd-typography--microcopy-medium": "uuUFi58x",
  "hbd-typography--label": "uMPZf9Uz",
  "hbd-typography--button": "uKA6ZuXt",
  "hbd-typography--link": "ulWF7cWy",
  "hbd-typography--microlabel": "ukAEwjxh",
  "hui-text-uppercase": "uho925yJ"
}, re = ({
  id: e,
  tag: t,
  tagRef: r,
  variant: n = "Body1",
  text: o,
  children: i,
  className: s,
  htmlFor: a,
  ariaLabel: c,
  ...u
}) => {
  const d = Ne(u), m = mi(u), v = pt(u);
  return J.createElement(t || "div", {
    id: e,
    className: N(
      s,
      Nr["hbd-typography"],
      v.className,
      d.className,
      m.className,
      {
        [Nr[`hbd-typography--${yi[n]}`]]: n
      }
    ),
    style: {
      ...d.style,
      ...v.style,
      ...m.style
    },
    ref: r,
    htmlFor: a,
    "aria-label": c,
    ...Ce(u)
  }, i || o);
}, vr = {
  "Accordion-variant--default": "uQZNeGqw",
  "Accordion-variant--prominent": "uNGP-7aQ",
  "Accordion--no-border-bottom": "uiah2jsP",
  "Accordion--no-border-top": "uccHc31d"
}, no = Ls({
  isOpen: !1,
  onToggle: () => {
  },
  variant: "default"
}), sa = le(({
  id: e,
  open: t,
  defaultOpen: r,
  children: n,
  className: o,
  m: i,
  mx: s,
  my: a,
  mb: c,
  mt: u,
  ml: d,
  mr: m,
  onToggle: v,
  smallTitle: h,
  title: b,
  variant: g = "default",
  noBorderBottom: y,
  noBorderTop: _,
  ...E
}, C) => {
  const [f, w] = X(!!r), x = U(null), S = g === "default", R = g === "prominent", A = Ne({
    m: i,
    mx: s,
    my: a,
    mb: c,
    mt: u,
    ml: d,
    mr: m,
    pb: S ? 1 : 0,
    pt: S ? 1 : 0,
    ...E
  });
  typeof t < "u" && typeof r < "u" && console.warn(
    "Warning: A Accordion component uses both `open` and the `defaultOpen` prop at the same time. \n      Use `open` for making it Controlled or `defaultOpen` for UnControlled default State."
  );
  const j = ve(() => {
    v == null || v(), typeof t > "u" && w((G) => !G);
  }, [v, t]);
  K(() => {
    typeof t < "u" && w(() => t);
  }, [t]);
  const L = ir(() => ({
    isOpen: f,
    onToggle: j,
    variant: g,
    noBorderBottom: y,
    noBorderTop: _
  }), [f, j, g, y, _]);
  return /* @__PURE__ */ l.jsxs(no.Provider, { value: L, children: [
    (b || h) && R && /* @__PURE__ */ l.jsxs(M, { flexType: "block", flexDirection: "column", gap: [0, 2], mb: [8, 10, 16], children: [
      h && /* @__PURE__ */ l.jsx(re, { variant: "Subtitle2", color: "Grey600", children: h }),
      b && /* @__PURE__ */ l.jsx(re, { variant: "Heading2", color: "Grey600", children: b })
    ] }),
    /* @__PURE__ */ l.jsx(
      "details",
      {
        id: e,
        ref: qe([C, x]),
        open: f,
        className: N(vr.Accordion, A.className, o, {
          [vr["Accordion-variant--prominent"]]: R,
          [vr["Accordion-variant--default"]]: S,
          [vr["Accordion--no-border-bottom"]]: y,
          [vr["Accordion--no-border-top"]]: _
        }),
        style: A.style,
        ...Ce(E),
        children: n
      }
    )
  ] });
});
sa.displayName = "Accordion";
const aa = "uxR8zBe8", ca = {
  AccordionContentMaxWidth: aa
}, la = le(({
  children: e,
  hasMaxWidth: t,
  ...r
}, n) => {
  const { variant: o } = Tr(no), i = o === "default" ? {
    pt: 4,
    pb: 4
  } : {
    pb: 4,
    pl: 2,
    pr: 2
  };
  return /* @__PURE__ */ l.jsx(M, { ...i, ...r, ref: n, className: N({
    [ca.AccordionContentMaxWidth]: t
  }), children: e });
});
la.displayName = "AccordionContent";
const ua = [
  "angle-left",
  "angle-right",
  "arrow-left",
  "arrow-right",
  "robotics",
  "robotics-star",
  "back",
  "box",
  "cart",
  "cart-strike",
  "commerce-dealer",
  "compare",
  "deliver",
  "expand",
  "installation",
  "location",
  "contact",
  "directions",
  "new-tab",
  "zero-turn",
  "menu",
  "menu-mirrored",
  "quote",
  "tag",
  "nera",
  "angled-arrow-right"
], da = {
  "hbd-icon": "us-NkA9u"
}, Te = le(({
  iconId: e,
  className: t,
  size: r = 4,
  disableRtlMirror: n,
  color: o,
  colorTint: i,
  ...s
}, a) => {
  const c = Ne(s), u = it({ size: r }), d = pt({ color: o, colorTint: i });
  return /* @__PURE__ */ l.jsx(
    "svg",
    {
      ref: a,
      "aria-label": s["aria-label"],
      "aria-hidden": "true",
      className: N(da["hbd-icon"], {
        "ui-rtl-mirror": ua.includes(e) && !n
      }, t, c.className, u.className, d.className),
      style: {
        ...c.style,
        ...u.style,
        ...d.style
      },
      ...s,
      children: /* @__PURE__ */ l.jsx("use", { href: `${kr.iconSpritePath}#${e}` })
    }
  );
});
Te.displayName = "Icon";
const fa = "uhJWqTch", pa = "u3qPuU2l", ma = "u7bKIyxi", ha = "uT2EttRe", Hr = {
  AccordionSummary: fa,
  AccordionSummaryActive: pa,
  AccordionSummaryIcon: ma,
  AccordionSummaryIconActive: ha
}, va = le(({
  title: e,
  children: t,
  ...r
}, n) => {
  const { isOpen: o, onToggle: i, variant: s } = Tr(no), a = ve((u) => {
    u.preventDefault(), i == null || i();
  }, [i]), c = s === "default" ? {
    alignItems: "center",
    br: [3, 3, 4],
    mx: -3,
    px: 3,
    py: 2
  } : {
    alignItems: "center",
    py: 4,
    px: 2
  };
  return /* @__PURE__ */ l.jsxs(
    M,
    {
      ref: n,
      tag: "summary",
      className: N(Hr.AccordionSummary, {
        [Hr.AccordionSummaryActive]: o && s === "prominent"
      }),
      onClick: a,
      ...c,
      ...Ce(r),
      children: [
        /* @__PURE__ */ l.jsxs(M, { flexGrow: 1, children: [
          !t && /* @__PURE__ */ l.jsx(re, { tag: s === "prominent" ? "h3" : "div", color: "Grey600", text: e, variant: s === "default" ? "Body1" : "Body1Bold" }),
          t
        ] }),
        s === "default" ? /* @__PURE__ */ l.jsx(Te, { iconId: o ? "minus" : "plus", size: 4 }) : /* @__PURE__ */ l.jsx(
          Te,
          {
            iconId: "plus",
            className: N(Hr.AccordionSummaryIcon, {
              [Hr.AccordionSummaryIconActive]: o
            }),
            color: "Grey600",
            size: 5
          }
        )
      ]
    }
  );
});
va.displayName = "AccordionSummary";
const Gr = {
  "ui-badge": "ubQawL3d",
  "ui-badge--small": "u9XK3QM8",
  "ui-badge--large": "uI2PE76X",
  "ui-badge--micro": "uIjSFc6N",
  "ui-badge--no-uppercase": "umUT42y-"
}, ga = {
  CautionYellow: { color: "Grey800", backgroundColor: "CautionYellow" },
  SuccessGreen: { color: "White", backgroundColor: "SuccessGreen" },
  Secondary: { color: "White", backgroundColor: "Secondary" },
  SecondaryDarker: { color: "White", backgroundColor: "SecondaryDarker" },
  Primary: { color: "White", backgroundColor: "Primary" },
  ErrorRed: { color: "White", backgroundColor: "ErrorRed" },
  Grey600: { color: "White", backgroundColor: "Grey600" },
  Grey500: { color: "White", backgroundColor: "Grey500" }
}, ba = {
  CautionYellow: { color: "Grey800", backgroundColor: "CautionYellow", backgroundColorTint: 0.08 },
  SuccessGreen: { color: "SuccessGreen", backgroundColor: "SuccessGreen", backgroundColorTint: 0.08 },
  Secondary: { color: "SecondaryDarker", backgroundColor: "Secondary", backgroundColorTint: 0.08 },
  SecondaryDarker: { color: "SecondaryDarker", backgroundColor: "Secondary", backgroundColorTint: 0.08 },
  Primary: { color: "Primary", backgroundColor: "Primary", backgroundColorTint: 0.08 },
  ErrorRed: { color: "ErrorRed", backgroundColor: "ErrorRed", backgroundColorTint: 0.08 },
  Grey600: { color: "Grey600", backgroundColor: "Grey600", backgroundColorTint: 0.08 },
  Grey500: { color: "Grey500", backgroundColor: "Grey500", backgroundColorTint: 0.08 }
}, ya = le(({
  text: e,
  iconId: t,
  variant: r = "Primary",
  size: n = "small",
  className: o,
  removeUpperCase: i,
  ...s
}, a) => {
  const c = n === "micro" ? ba[r] : ga[r], u = () => n === "micro" ? "Microlabel" : n === "large" ? "Label" : "Button";
  return /* @__PURE__ */ l.jsxs(
    M,
    {
      ref: a,
      role: "status",
      flexType: "inline",
      alignItems: "center",
      className: N(
        o,
        Gr["ui-badge"],
        Gr[`ui-badge--${mt[r]}`],
        {
          [Gr[`ui-badge--${n}`]]: typeof n < "u",
          [Gr["ui-badge--no-uppercase"]]: i
        }
      ),
      ...s,
      ...c,
      children: [
        t && /* @__PURE__ */ l.jsx(Te, { "data-cy": "icon", iconId: t, size: n === "micro" ? 3 : 4 }),
        e && /* @__PURE__ */ l.jsx(
          re,
          {
            tag: "span",
            variant: u(),
            ml: t ? 2 : void 0,
            lineClamp: 1,
            "data-cy": "text",
            children: e
          }
        )
      ]
    }
  );
});
ya.displayName = "Badge";
const xa = "uy8Ob5Wq", wa = {
  cardContentFade: xa
}, Nf = ({
  children: e,
  gradient: t,
  px: r = [5, 5, 7],
  py: n = [2, 2, 3],
  ...o
}) => /* @__PURE__ */ l.jsx(
  M,
  {
    className: N({
      [wa.cardContentFade]: t
    }),
    color: t ? "White" : void 0,
    size: "full",
    flexDirection: "column",
    justifyContent: t ? "flex-end" : void 0,
    px: r,
    py: n,
    ...o,
    children: e
  }
), _a = (e) => e.map((t) => `${t.url} ${t.width}w`).join(", "), ja = (e) => {
  const t = e == null ? void 0 : e.toLowerCase();
  switch (t) {
    case "webp":
    case "png":
    case "gif":
      return `image/${t}`;
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    default:
      return;
  }
}, ka = ({
  media: e,
  sizes: t,
  sources: r,
  sm: n,
  md: o,
  lg: i,
  xl: s,
  output: a
}) => {
  const c = () => {
    if (t)
      return t;
    const u = [];
    return n && u.unshift(n), o && u.unshift(`(min-width: ${jn.Medium}px) ${o}`), i && u.unshift(`(min-width: ${jn.Large}px) ${i}`), s && u.unshift(`(min-width: ${jn.ExtraLarge}px) ${s}`), u.join(", ");
  };
  return /* @__PURE__ */ l.jsx(
    "source",
    {
      srcSet: _a(r),
      type: ja(a),
      sizes: c(),
      media: e
    }
  );
}, Na = "data:image/svg+xml,%3csvg%20width='307'%20height='230'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3ctitle%3eLayer%201%3c/title%3e%3cg%20id='svg_1'%20stroke='null'%3e%3cpath%20id='svg_3'%20fill='%23B0B0AF'%20fill-rule='evenodd'%20d='m393.14997,277.14497c0.8751,-0.87517%202.0621,-1.36684%203.2998,-1.36684l6.9405,0c1.3623,0%202.6566,0.5953%203.5432,1.62964l3.9047,4.55555c0.4433,0.5172%201.0905,0.8148%201.7716,0.8148l7.5569,0c3.866,0%207,3.134%207,7l0,22.1667c0,0.6443%20-0.5223,1.1666%20-1.1667,1.1666c-0.6443,0%20-1.1666,-0.5223%20-1.1666,-1.1666l0,-22.1667c0,-2.5773%20-2.0894,-4.6667%20-4.6667,-4.6667l-7.5569,0c-1.3623,0%20-2.6566,-0.5952%20-3.5432,-1.6296l-3.9047,-4.55553c-0.4433,-0.51718%20-1.0905,-0.81482%20-1.7716,-0.81482l-6.9405,0c-0.6189,0%20-1.2123,0.24583%20-1.6499,0.68341l-0.9749,0.97488c-0.4556,0.45561%20-1.1943,0.45561%20-1.6499,0s-0.4556,-1.19431%200,-1.64992l0.9749,-0.97487zm-13.31663,7.96645c-2.57732,0%20-4.66666,2.0894%20-4.66666,4.6667l0,26.6667c0,1.2886%201.04467,2.3333%202.33333,2.3333l43.49996,0l0,2.3333l-43.49996,0c-2.57732,0%20-4.66667,-2.0893%20-4.66667,-4.6666l0,-26.6667c0,-3.866%203.13401,-7%207,-7l4.76663,0l0,2.3333l-4.76663,0z'%20clip-rule='evenodd'%20stroke='null'/%3e%3cpath%20id='svg_4'%20fill='%23B0B0AF'%20fill-rule='evenodd'%20d='m394.20097,292.28142c-1.8611,1.6211%20-3.0344,4.0046%20-3.0344,6.6634c0,4.8785%203.9549,8.8333%208.8334,8.8333c2.6583,0%205.0414,-1.1728%206.6625,-3.0332l1.7592,1.5329c-2.0454,2.3473%20-5.0607,3.8337%20-8.4217,3.8337c-6.1672,0%20-11.1667,-4.9995%20-11.1667,-11.1667c0,-3.3617%201.4869,-6.3774%203.835,-8.4229l1.5327,1.7595z'%20clip-rule='evenodd'%20stroke='null'/%3e%3cpath%20id='svg_5'%20fill='%23B0B0AF'%20fill-rule='evenodd'%20d='m374.82491,274.11988c0.45562,-0.45562%201.19431,-0.45562%201.64992,0l50.11034,50.11034c0.4556,0.4556%200.4556,1.1943%200,1.6499s-1.1943,0.4556%20-1.6499,0l-50.11036,-50.11033c-0.45561,-0.45561%20-0.45561,-1.1943%200,-1.64991z'%20clip-rule='evenodd'%20stroke='null'/%3e%3c/g%3e%3cg%20stroke='null'%3e%3cpath%20stroke='null'%20clip-rule='evenodd'%20d='m140.85055,76.02032c1.61598,-1.49262%203.80793,-2.33117%206.0935,-2.33117l12.81651,0c2.51566,0%204.90575,1.0153%206.54296,2.77938l7.21052,7.76958c0.81861,0.88209%202.01375,1.38966%203.27148,1.38966l13.95477,0c7.13905,0%2012.92638,5.3451%2012.92638,11.93863l0,37.80573c0,1.09887%20-0.96449,1.98966%20-2.15446,1.98966c-1.18978,0%20-2.15427,-0.89079%20-2.15427,-1.98966l0,-37.80573c0,-4.39563%20-3.85834,-7.95915%20-8.61765,-7.95915l-13.95477,0c-2.51566,0%20-4.90575,-1.01512%20-6.54296,-2.77931l-7.21052,-7.76954c-0.81861,-0.88206%20-2.01375,-1.38969%20-3.27148,-1.38969l-12.81651,0c-1.14288,0%20-2.23866,0.41927%20-3.04675,1.16557l-1.80028,1.66268c-0.84132,0.77705%20-2.20543,0.77705%20-3.04675,0s-0.84132,-2.03692%200,-2.81397l1.80028,-1.66266zm-24.59083,13.58693c-4.75935,0%20-8.61757,3.56351%20-8.61757,7.95915l0,45.48056c0,2.19773%201.92911,3.97949%204.30879,3.97949l80.32814,0l0,3.97949l-80.32814,0c-4.75935,0%20-8.61759,-3.56334%20-8.61759,-7.95897l0,-45.48056c0,-6.59354%205.78734,-11.93863%2012.92638,-11.93863l8.80218,0l0,3.97949l-8.80218,0z'%20fill-rule='evenodd'%20fill='%23B0B0AF'/%3e%3cpath%20stroke='null'%20clip-rule='evenodd'%20d='m142.79135,101.83583c-3.43676,2.76482%20-5.6034,6.82992%20-5.6034,11.36456c0,8.32037%207.30322,15.06536%2016.31198,15.06536c4.90889,0%209.30958,-2.00023%2012.30314,-5.17318l3.24858,2.61439c-3.77709,4.00336%20-9.34522,6.53845%20-15.55173,6.53845c-11.38851,0%20-20.62072,-8.52674%20-20.62072,-19.04502c0,-5.73344%202.74575,-10.87678%207.08181,-14.36542l2.83032,3.00086z'%20fill-rule='evenodd'%20fill='%23B0B0AF'/%3e%3cpath%20stroke='null'%20clip-rule='evenodd'%20d='m107.01102,70.86098c0.84136,-0.77707%202.20544,-0.77707%203.04678,0l92.53504,85.46414c0.84132,0.77703%200.84132,2.0369%200,2.81394s-2.20543,0.77703%20-3.04675,0l-92.53508,-85.46412c-0.84134,-0.77705%20-0.84134,-2.0369%200,-2.81395z'%20fill-rule='evenodd'%20fill='%23B0B0AF'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Ca = "uyxA5djh", Ea = "upJWYzNP", Vr = {
  "aspectRatio--sm-landscape": "uB6nvHfa",
  "aspectRatio--sm-portrait": "ujQD5uyd",
  "aspectRatio--sm-square": "uwPiG79J",
  "aspectRatio--sm-16-9": "ur9ck5c8",
  "aspectRatio--md-landscape": "udKNYnKu",
  "aspectRatio--md-portrait": "uGKQ-xOu",
  "aspectRatio--md-square": "uuHAjA-z",
  "aspectRatio--md-16-9": "uUrSLKgp",
  "aspectRatio--lg-landscape": "umO8VsmK",
  "aspectRatio--lg-portrait": "uzWgaXlO",
  "aspectRatio--lg-square": "uktZXDhF",
  "aspectRatio--lg-16-9": "uuIhguxB",
  image: Ca,
  imageMissing: Ea
}, Gn = le(({
  className: e,
  sizes: t,
  width: r,
  height: n,
  size: o,
  src: i,
  srcSet: s,
  br: a,
  autoSizes: c,
  aspectRatio: u,
  loading: d,
  onError: m,
  onLoad: v,
  ...h
}, b) => {
  var T, D;
  const g = U(null), [y, _] = X(!1), [E, C] = X(d === "lazy"), f = it({ width: r, height: n, size: o }), w = Ht({ br: a }), x = pt(E || y ? { backgroundColor: "Black", backgroundColorTint: 0.04 } : {}), S = Ne(h), { clientWidth: R } = ro(g, { disabled: !c }), A = c && typeof R == "number" ? `${R}px` : void 0, j = xt(u), L = ir(() => ({
    ...f.style,
    ...w.style,
    ...x.style,
    ...S.style
  }), [f.style, w.style, x.style, S.style]), G = ve((W) => {
    m == null || m(W), _(!0);
  }, [m]), $ = ve((W) => {
    v == null || v(W), C(!1);
  }, [v]);
  return K(() => {
    var W;
    (W = g.current) != null && W.complete && g.current.naturalWidth > 1 && C(!1);
  }, [(T = g.current) == null ? void 0 : T.complete, (D = g.current) == null ? void 0 : D.naturalWidth]), /* @__PURE__ */ l.jsx(
    "img",
    {
      ref: qe([b, g]),
      onError: G,
      onLoad: $,
      src: y ? Na : i,
      srcSet: s,
      className: N(
        e,
        Vr.image,
        f.className,
        w.className,
        x.className,
        S.className,
        {
          [Vr[`aspectRatio--sm-${j[0]}`]]: j[0],
          [Vr[`aspectRatio--md-${j[1]}`]]: j[1],
          [Vr[`aspectRatio--lg-${j[2]}`]]: j[2]
        }
      ),
      style: L,
      sizes: t || A,
      loading: d,
      ...Ce(h),
      ...h
    }
  );
});
Gn.displayName = "Image";
const oo = le(({
  className: e,
  children: t,
  pictureData: r,
  sizes: n,
  alt: o,
  autoSizes: i,
  ...s
}, a) => {
  const c = U(null), { clientWidth: u } = ro(c, { disabled: !i }), d = i && typeof u == "number" ? `${u}px` : void 0;
  if (!t && (r == null ? void 0 : r.variants.length) === 1) {
    const [m] = r.variants;
    return /* @__PURE__ */ l.jsx(
      Gn,
      {
        ref: c,
        src: r.fallback,
        srcSet: m.sources.map((v) => `${v.url} ${v.width}w`).join(", "),
        sizes: n || d,
        ...s,
        alt: typeof o < "u" ? o : r.alt
      }
    );
  }
  return /* @__PURE__ */ l.jsxs("picture", { ref: a, children: [
    !t && (r == null ? void 0 : r.variants.map((m, v) => /* @__PURE__ */ l.jsx(ka, { ...m, sizes: n || d }, v))),
    t && J.Children.map(t, (m, v) => /* @__PURE__ */ l.jsx(J.Fragment, { children: Hn(m) && /* @__PURE__ */ Ps(m.type, { ...m.props, key: v, sizes: m.props.sizes || d }) }, v)),
    /* @__PURE__ */ l.jsx(
      Gn,
      {
        ref: c,
        src: (r == null ? void 0 : r.fallback) || o,
        className: e,
        sizes: n || d,
        ...s,
        alt: typeof o < "u" ? o : r == null ? void 0 : r.alt
      }
    )
  ] });
});
oo.displayName = "Picture";
const Sa = "ugugAILd", Oa = "uoRCWkxB", Ra = "u8TjIowe", Ta = "uTNPQdMv", Aa = "ufx6sLYy", $a = "uV-E235-", Ia = "ujgb1XFl", Da = "uzDfKZHI", Ba = "u2skdoHe", La = "uu3XXSmB", Ze = {
  cardHidden: Sa,
  cardShadow: Oa,
  cardBorder: Ra,
  cardShadowHover: Ta,
  "hbd-card--border": "uW-sWPge",
  "hbd-using-mouse": "uot0OvXP",
  cardFocus: Aa,
  cardFrameAspectFit: $a,
  cardFrameFade: Ia,
  cardBackgroundImage: Da,
  "hbd-card__fade-content": "ulVSvEwd",
  "card-portrait": "uha9C-jD",
  "card-landscape": "u-WkU5ys",
  "card-min-portrait": "usH2hmgV",
  "card-min-landscape": "u5eQ2XiH",
  cardWidthPortrait: Ba,
  cardWidthLandscape: La
}, Pa = le(({
  backgroundColor: e = "Grey100",
  backgroundColorTint: t,
  backgroundImage: r,
  border: n,
  fade: o,
  shadowHover: i = !0,
  className: s,
  aspectRatio: a,
  hidden: c,
  focusContent: u,
  children: d,
  "aria-hidden": m,
  ...v
}, h) => /* @__PURE__ */ l.jsxs(
  M,
  {
    flexType: "block",
    positionRoot: !0,
    ref: h,
    tag: "article",
    width: "full",
    backgroundColor: e,
    "aria-hidden": m,
    className: N("ui-card", {
      [Ze.cardBorder]: n,
      [Ze.cardShadow]: e === "White",
      [Ze.cardShadowHover]: i,
      [Ze.cardHidden]: c,
      [Ze.cardFocus]: !u,
      [Ze.cardWidthPortrait]: a === "portrait" || a === "min-portrait",
      [Ze.cardWidthLandscape]: a === "landscape" || a === "min-landscape",
      [Ze[`card-${a}`]]: a
    }, s),
    br: [5, 5, 8],
    ...v,
    children: [
      r && /* @__PURE__ */ l.jsx(
        oo,
        {
          loading: "lazy",
          autoSizes: !0,
          className: Ze.cardBackgroundImage,
          pictureData: r,
          alt: "",
          size: "full"
        }
      ),
      /* @__PURE__ */ l.jsx(
        M,
        {
          container: !0,
          positionRoot: !0,
          size: "full",
          color: o ? "White" : void 0,
          className: N({
            [Ze.cardFrameFade]: o,
            [Ze.cardFrameAspectFit]: a === "landscape" || a === "portrait"
          }),
          children: d
        }
      )
    ]
  }
));
Pa.displayName = "CardFrame";
const Wa = "uY3KmwIV", Fa = {
  CardGrid: Wa
}, Cf = ({
  children: e,
  className: t,
  gap: r = [2, 3, 5],
  ...n
}) => {
  const o = Ar({ gap: r, justifyContent: "center" }), i = Ne(n), s = Ce(n);
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: N(Fa.CardGrid, o.className, i.className, t),
      style: {
        ...o.style,
        ...i.style,
        "--ui-card-width": "100%"
      },
      ...s,
      children: e
    }
  );
};
function Ma(e, t) {
  if (e == null) return {};
  var r = za(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function za(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Jr() {
  return Jr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jr.apply(this, arguments);
}
function No(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? No(Object(r), !0).forEach(function(n) {
      Ha(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : No(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ha(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Ga = {
  breakpointCols: void 0,
  // optional, number or object { default: number, [key: number]: number }
  className: void 0,
  // required, string
  columnClassName: void 0,
  // optional, string
  // Any React children. Typically an array of JSX items
  children: void 0,
  // Custom attributes, however it is advised against
  // using these to prevent unintended issues and future conflicts
  // ...any other attribute, will be added to the container
  columnAttrs: void 0,
  // object, added to the columns
  // Deprecated props
  // The column property is deprecated.
  // It is an alias of the `columnAttrs` property
  column: void 0
}, kn = 2;
class xi extends J.Component {
  constructor(t) {
    super(t), this.reCalculateColumnCount = this.reCalculateColumnCount.bind(this), this.reCalculateColumnCountDebounce = this.reCalculateColumnCountDebounce.bind(this);
    let r;
    this.props.breakpointCols && this.props.breakpointCols.default ? r = this.props.breakpointCols.default : r = parseInt(this.props.breakpointCols) || kn, this.state = {
      columnCount: r
    };
  }
  componentDidMount() {
    this.reCalculateColumnCount(), window && window.addEventListener("resize", this.reCalculateColumnCountDebounce);
  }
  componentDidUpdate() {
    this.reCalculateColumnCount();
  }
  componentWillUnmount() {
    window && window.removeEventListener("resize", this.reCalculateColumnCountDebounce);
  }
  reCalculateColumnCountDebounce() {
    if (!window || !window.requestAnimationFrame) {
      this.reCalculateColumnCount();
      return;
    }
    window.cancelAnimationFrame && window.cancelAnimationFrame(this._lastRecalculateAnimationFrame), this._lastRecalculateAnimationFrame = window.requestAnimationFrame(() => {
      this.reCalculateColumnCount();
    });
  }
  reCalculateColumnCount() {
    const t = window && window.innerWidth || 1 / 0;
    let r = this.props.breakpointCols;
    typeof r != "object" && (r = {
      default: parseInt(r) || kn
    });
    let n = 1 / 0, o = r.default || kn;
    for (let i in r) {
      const s = parseInt(i);
      s > 0 && t <= s && s < n && (n = s, o = r[i]);
    }
    o = Math.max(1, parseInt(o) || 1), this.state.columnCount !== o && this.setState({
      columnCount: o
    });
  }
  itemsInColumns() {
    const t = this.state.columnCount, r = new Array(t), n = J.Children.toArray(this.props.children);
    for (let o = 0; o < n.length; o++) {
      const i = o % t;
      r[i] || (r[i] = []), r[i].push(n[o]);
    }
    return r;
  }
  renderColumns() {
    const {
      column: t,
      columnAttrs: r = {},
      columnClassName: n
    } = this.props, o = this.itemsInColumns(), i = `${100 / o.length}%`;
    let s = n;
    s && typeof s != "string" && (this.logDeprecated('The property "columnClassName" requires a string'), typeof s > "u" && (s = "my-masonry-grid_column"));
    const a = gr(gr(gr({}, t), r), {}, {
      style: gr(gr({}, r.style), {}, {
        width: i
      }),
      className: s
    });
    return o.map((c, u) => /* @__PURE__ */ J.createElement("div", Jr({}, a, {
      key: u
    }), c));
  }
  logDeprecated(t) {
    console.error("[Masonry]", t);
  }
  render() {
    const t = this.props, {
      // ignored
      children: r,
      breakpointCols: n,
      columnClassName: o,
      columnAttrs: i,
      column: s,
      // used
      className: a
    } = t, c = Ma(t, ["children", "breakpointCols", "columnClassName", "columnAttrs", "column", "className"]);
    let u = a;
    return typeof a != "string" && (this.logDeprecated('The property "className" requires a string'), typeof a > "u" && (u = "my-masonry-grid")), /* @__PURE__ */ J.createElement("div", Jr({}, c, {
      className: u
    }), this.renderColumns());
  }
}
xi.defaultProps = Ga;
const Va = "utz83t-E", qa = "uEphEQBS", Co = {
  cardMasonary: Va,
  cardMasonaryColumn: qa
}, Ef = ({
  children: e,
  breakpointCols: t = {
    default: 4,
    1100: 3,
    767: 2
  }
}) => /* @__PURE__ */ l.jsx(
  xi,
  {
    className: N("hbd-masonary", Co.cardMasonary),
    columnClassName: N("hbd-masonary__column", Co.cardMasonaryColumn),
    breakpointCols: t,
    style: {
      "--ui-card-width": "100%"
    },
    children: e
  }
), Ua = "uRLfrYp1", Ya = {
  cardMediaIcon: Ua
}, Sf = ({
  image: e,
  alt: t,
  iconId: r,
  color: n = "White",
  mx: o = [-3, -3, -4],
  ...i
}) => /* @__PURE__ */ l.jsxs(
  M,
  {
    color: n,
    tag: "div",
    mx: o,
    flexShrink: 0,
    alignItems: "center",
    ...i,
    children: [
      /* @__PURE__ */ l.jsx(
        oo,
        {
          aspectRatio: "landscape",
          br: [4, 4, 5],
          alt: t,
          autoSizes: !0,
          pictureData: e
        }
      ),
      r && /* @__PURE__ */ l.jsx(Te, { iconId: r, className: Ya.cardMediaIcon })
    ]
  }
), gt = {
  "hbd-container": "uSBxaC7n",
  "hbd-container--dg": "uiIh47Y7",
  "hbd-container--root": "uZxe9-XA",
  "hbd-container--sm-size-xsmall": "uCYRlFBD",
  "hbd-container--sm-size-small": "uQOfV6Ox",
  "hbd-container--sm-size-medium": "uTaLEbCI",
  "hbd-container--sm-size-large": "uE-SFHT0",
  "hbd-container--sm-size-xlarge": "uHno0fnv",
  "hbd-container--sm-g-0": "u6zSNzRt",
  "hbd-container--sm-g-3": "uek9CHz7",
  "hbd-container--sm-g-5": "umChuBkd",
  "hbd-container--sm-g-10": "uDUK7IQu",
  "hbd-container--sm-g-15": "utvK-02j",
  "hbd-container--sm-g-20": "u75GoClH",
  "hbd-container--sm-g-7-5p": "uFjQWQAy",
  "hbd-container--md-size-xsmall": "uIhAo4Bu",
  "hbd-container--md-size-small": "ueHO-iKM",
  "hbd-container--md-size-medium": "u7rhaooi",
  "hbd-container--md-size-large": "uRiMLb-3",
  "hbd-container--md-size-xlarge": "ulJ2BOSz",
  "hbd-container--md-g-0": "urwj24Wr",
  "hbd-container--md-g-3": "uW8-x8H5",
  "hbd-container--md-g-5": "u8RcqC-G",
  "hbd-container--md-g-10": "uoPMDhiK",
  "hbd-container--md-g-15": "uHGe8CcL",
  "hbd-container--md-g-20": "uh4uEc3m",
  "hbd-container--md-g-7-5p": "uPBUFQcI",
  "hbd-container--lg-size-xsmall": "u-3Wx76b",
  "hbd-container--lg-size-small": "uxJb1R50",
  "hbd-container--lg-size-medium": "u0JKdOZU",
  "hbd-container--lg-size-large": "ubnSAgu-",
  "hbd-container--lg-size-xlarge": "utaNP0oH",
  "hbd-container--lg-g-0": "u1IFUJAf",
  "hbd-container--lg-g-3": "utksLEox",
  "hbd-container--lg-g-5": "uDAt936W",
  "hbd-container--lg-g-10": "uF5A0hk9",
  "hbd-container--lg-g-15": "u0BOeB3i",
  "hbd-container--lg-g-20": "upEHWM-Y",
  "hbd-container--lg-g-7-5p": "u3kAO-la"
}, Of = ({
  className: e,
  pageGutter: t,
  positionRoot: r,
  children: n,
  size: o,
  ...i
}) => {
  const s = Ne(i), a = xt(t), c = xt(o);
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: N(gt["hbd-container"], {
        [gt["hbd-container--dg"]]: !a.length,
        [gt["hbd-container--root"]]: r,
        [gt[`hbd-container--sm-size-${c[0]}`]]: typeof c[0] < "u",
        [gt[`hbd-container--md-size-${c[1]}`]]: typeof c[1] < "u",
        [gt[`hbd-container--lg-size-${c[2]}`]]: typeof c[2] < "u",
        [gt[`hbd-container--sm-g-${a[0]}`]]: typeof a[0] < "u",
        [gt[`hbd-container--md-g-${a[1]}`]]: typeof a[1] < "u",
        [gt[`hbd-container--lg-g-${a[2]}`]]: typeof a[2] < "u"
      }, s.className, e),
      style: s.style,
      children: n
    }
  );
}, Xa = "uPS1XXnf", Ka = "ug5Rh8oG", qr = {
  contentSwitcher: Xa,
  contentSwitcherSlider: Ka
}, Qa = le(({
  children: e,
  alternateBackground: t = !1,
  ...r
}, n) => {
  const [o, i] = X({}), s = U([]), a = U(null);
  K(() => {
    const u = () => {
      const v = wo.toArray(e).findIndex(
        (h) => Hn(h) && h.props.active
      );
      if (v !== -1 && s.current[v]) {
        const h = s.current[v], b = a.current;
        if (h && b) {
          const g = b.getBoundingClientRect(), y = h.getBoundingClientRect();
          i({
            width: y.width,
            transform: `translateX(${y.left - g.left}px)`
          });
        }
      }
    }, d = requestAnimationFrame(() => {
      u();
    });
    return window.addEventListener("resize", u), () => {
      cancelAnimationFrame(d), window.removeEventListener("resize", u);
    };
  }, [e]);
  const c = wo.map(e, (u, d) => Hn(u) ? to(u, {
    ...u.props,
    ref: (m) => {
      s.current[d] = m;
    }
  }) : u);
  return /* @__PURE__ */ l.jsxs(
    M,
    {
      ref: qe([a, n]),
      role: "tablist",
      backgroundColor: t ? "Grey100" : "White",
      className: t ? `${qr.contentSwitcher} ${qr.alternateBackground}` : qr.contentSwitcher,
      br: 6,
      flexType: "block",
      p: 2,
      flexDirection: "row",
      ...Ce(r),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: qr.contentSwitcherSlider, style: o, "aria-hidden": "true" }),
        c
      ]
    }
  );
});
Qa.displayName = "ContentSwitcher";
const _e = (e) => kr.componentIdentifier && e && {
  "data-ui-component": e
}, Nn = {
  "hbd-circular-loader": "uVEAykOX",
  "hbd-circular-loader__circle": "uvQkzX-R",
  "hbd-circular-loader__loader-path": "umfEDVky"
}, wi = ({
  className: e,
  strokeWidth: t = 2,
  ...r
}) => {
  const n = it(r), o = pt(r);
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: N(
        Nn["hbd-circular-loader"],
        n.className,
        o.className,
        e
      ),
      style: n.style,
      children: /* @__PURE__ */ l.jsx("svg", { className: Nn["hbd-circular-loader__circle"], viewBox: "25 25 50 50", children: /* @__PURE__ */ l.jsx(
        "circle",
        {
          className: Nn["hbd-circular-loader__loader-path"],
          cx: "50",
          cy: "50",
          r: "20",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: t
        }
      ) })
    }
  );
}, ke = {
  "ui-btn": "u3OpNcWE",
  "ui-btn--with-icon": "uy-IAAOs",
  "ui-btn--link": "uQOw1Ljf",
  "ui-btn--disabled": "u3q-Jut4",
  "ui-btn__icon": "uEC3XEnT",
  "ui-btn__icon--loading": "unH0IPLm",
  "ui-btn__text": "uwU-QO6l",
  "ui-btn__text--loading": "uIPV5uOr",
  "ui-btn__text--with-suffix": "uM8RYNYC",
  "ui-btn__ripple": "ub05h2c3",
  "ui-btn__ripple--active": "umSAMuK-",
  "ui-btn__loader": "usxO9z4m"
}, _i = (e) => {
  const [t, r] = X(!1), [n, o] = X("50%"), [i, s] = X("50%"), a = U(), c = ve((u) => {
    if (!e.current)
      return;
    const d = e.current.getBoundingClientRect();
    o(() => `${u.pageX - d.left}px`), s(() => `${u.pageY - d.top}px`), r(() => !0), window.clearTimeout(a.current), a.current = window.setTimeout(() => {
      r(() => !1);
    }, 1e3);
  }, []);
  return K(() => () => window.clearTimeout(a == null ? void 0 : a.current), []), {
    active: t,
    style: {
      "--ui-btn-cx": n,
      "--ui-btn-cy": i
    },
    mouseDown: c
  };
}, Et = le(
  ({
    id: e,
    className: t,
    text: r,
    name: n,
    value: o,
    width: i,
    submit: s,
    loading: a,
    suffix: c,
    disabled: u,
    iconId: d,
    iconSize: m = 5,
    iconPosition: v,
    loaderSize: h = 8,
    buttonProps: b,
    onClick: g,
    ...y
  }, _) => {
    const E = U(null), C = Ne(y), f = it({ width: i }), w = _i(E), x = (S) => {
      var R;
      w.mouseDown(S), (R = b == null ? void 0 : b.onMouseDown) == null || R.call(b, S);
    };
    return /* @__PURE__ */ l.jsxs(
      "button",
      {
        id: e,
        ref: qe([E, _]),
        onMouseDown: x,
        type: s ? "submit" : "button",
        name: n,
        value: o,
        className: N(ke["ui-btn"], C.className, f.className, t, {
          [ke["ui-btn--with-icon"]]: !!d
        }),
        style: {
          ...w.style,
          ...C.style,
          ...f.style
        },
        disabled: u || a,
        onClick: g,
        ...b,
        ...dr(y),
        ...Ce(y),
        children: [
          d && v !== "end" && /* @__PURE__ */ l.jsx(
            Te,
            {
              className: N(ke["ui-btn__icon"], {
                [ke["ui-btn__icon--loading"]]: a
              }),
              iconId: d,
              size: m
            }
          ),
          r && /* @__PURE__ */ l.jsxs(
            "span",
            {
              className: N(ke["ui-btn__text"], {
                [ke["ui-btn__text--loading"]]: a,
                [ke["ui-btn__text--with-suffix"]]: !!c
              }),
              children: [
                r,
                c
              ]
            }
          ),
          d && v === "end" && /* @__PURE__ */ l.jsx(
            Te,
            {
              className: N(ke["ui-btn__icon"], {
                [ke["ui-btn__icon--loading"]]: a
              }),
              size: m,
              iconId: d
            }
          ),
          a && /* @__PURE__ */ l.jsx(wi, { className: ke["ui-btn__loader"], size: h }),
          /* @__PURE__ */ l.jsx(
            "span",
            {
              className: N(ke["ui-btn__ripple"], {
                [ke["ui-btn__ripple--active"]]: w.active
              })
            }
          )
        ]
      }
    );
  }
);
Et.displayName = "BaseButton";
const Gt = le(({
  className: e,
  text: t,
  width: r,
  loading: n,
  iconId: o,
  iconSize: i = 5,
  loaderSize: s = 8,
  disabled: a,
  anchorProps: c,
  rel: u,
  href: d,
  target: m,
  onClick: v,
  ...h
}, b) => {
  const g = U(null), y = Ne(h), _ = it({ width: r }), E = _i(g), C = (f) => {
    var w;
    E.mouseDown(f), (w = c == null ? void 0 : c.onMouseDown) == null || w.call(c, f);
  };
  return /* @__PURE__ */ l.jsxs(
    "a",
    {
      ref: qe([g, b]),
      onMouseDown: C,
      className: N(ke["ui-btn"], ke["ui-btn--link"], {
        [ke["ui-btn--disabled"]]: a || n
      }, y.className, _.className, e),
      style: {
        ...E.style,
        ...y.style,
        ..._.style
      },
      onClick: v,
      href: d,
      rel: u,
      target: m,
      "aria-hidden": h["aria-hidden"],
      "aria-label": h["aria-label"],
      "aria-labelledby": h["aria-labelledby"],
      ...dr(h),
      ...Ce(h),
      ...c,
      children: [
        o && /* @__PURE__ */ l.jsx(Te, { className: N(ke["ui-btn__icon"], { [ke["ui-btn__icon--loading"]]: n }), iconId: o, size: i }),
        t && /* @__PURE__ */ l.jsx("span", { className: N(ke["ui-btn__text"], { [ke["ui-btn__text--loading"]]: n }), children: t }),
        n && /* @__PURE__ */ l.jsx(wi, { size: s }),
        /* @__PURE__ */ l.jsx(
          "span",
          {
            className: N(ke["ui-btn__ripple"], {
              [ke["ui-btn__ripple--active"]]: E.active
            })
          }
        )
      ]
    }
  );
});
Gt.displayName = "BaseLinkButton";
const ji = {
  "ui-btn--cta": "ur7-oChp"
}, Zr = le(({
  className: e,
  ...t
}, r) => /* @__PURE__ */ l.jsx(
  Et,
  {
    ref: r,
    className: N(ji["ui-btn--cta"], e),
    ..._e(Zr.displayName),
    ...t
  }
));
Zr.displayName = "CallToActionButton";
const en = le(({
  className: e,
  ...t
}, r) => /* @__PURE__ */ l.jsx(
  Gt,
  {
    ref: r,
    className: N(ji["ui-btn--cta"], e),
    ..._e(en.displayName),
    ...t
  }
));
en.displayName = "CallToActionLinkButton";
const Ja = {
  "filter-pill": "uQcW3aVr"
}, ki = ({
  text: e,
  onClick: t,
  className: r,
  ...n
}) => /* @__PURE__ */ l.jsx(
  io,
  {
    className: N(Ja["filter-pill"], r),
    text: e,
    variant: "Primary",
    iconPosition: "end",
    iconId: "close",
    onClick: t,
    iconSize: 3,
    ..._e(ki.displayName),
    ...n
  }
);
ki.displayName = "FilterPill";
const Eo = {
  "ui-btn--disabled": "uvcIv3Up",
  "ui-btn--function": "uGKFyYSS",
  "ui-btn--white": "uRIXTmxc",
  "ui-btn--primary": "uVGSVG-7",
  "ui-btn--grey400": "uzK65RgS"
}, Za = {
  Primary: "White",
  White: "Grey500",
  Grey600: "Grey500",
  Grey400: "Grey300"
}, io = le(({
  className: e,
  suffix: t,
  variant: r,
  ...n
}, o) => /* @__PURE__ */ l.jsx(
  Et,
  {
    ref: o,
    className: N(
      Eo["ui-btn--function"],
      { [Eo[`ui-btn--${mt[r ?? "Grey600"]}`]]: r },
      e
    ),
    suffix: t ? /* @__PURE__ */ l.jsx(re, { color: Za[r ?? "Grey600"], tag: "span", variant: "Microcopy", text: `(${t})`, ml: 1 }) : void 0,
    ..._e(io.displayName),
    ...n
  }
)), tn = {
  "ui-btn--ghost": "udvY6mWv",
  "ui-btn--grey600": "u7A8LUlR",
  "ui-btn--white": "uGBBjNsr"
}, Ni = le(({
  variant: e = "Grey600",
  className: t,
  ...r
}, n) => /* @__PURE__ */ l.jsx(
  Et,
  {
    ref: n,
    className: N(tn["ui-btn--ghost"], tn[`ui-btn--${mt[e]}`], t),
    ..._e(Ni.displayName),
    ...r
  }
));
Ni.displayName = "GhostButton";
const Ci = le(({
  variant: e = "Grey600",
  className: t,
  ...r
}, n) => /* @__PURE__ */ l.jsx(
  Gt,
  {
    ref: n,
    className: N(tn["ui-btn--ghost"], tn[`ui-btn--${mt[e]}`], t),
    ..._e(Ci.displayName),
    ...r
  }
));
Ci.displayName = "GhostLinkButton";
const De = {
  "ui-btn--icon": "uLGRsYIv",
  "ui-btn--primary": "uyAEa8-o",
  "ui-btn--success-green": "uu-ugavR",
  "ui-btn--white": "uQ0oqA8K",
  "ui-btn--ghost": "uaIJqYxQ",
  "ui-btn--icon-size-medium": "umGEou8a",
  "ui-btn--icon-size-small": "ujgOtSpU",
  "ui-btn--icon-size-extra-big": "uvi7NRYa"
}, Ei = (e) => ({
  Small: 4,
  Medium: 6,
  Big: 8,
  ExtraBig: 10
})[e], Ft = J.forwardRef(({
  variant: e = "Ghost",
  className: t,
  text: r,
  size: n = "Big",
  ...o
}, i) => /* @__PURE__ */ l.jsx(
  Et,
  {
    loaderSize: Ei(n),
    ref: i,
    "aria-label": o["aria-label"] || r,
    className: N(De["ui-btn--icon"], {
      [De["ui-btn--ghost"]]: e === "Ghost",
      [De["ui-btn--success-green"]]: e === "SuccessGreen",
      [De["ui-btn--primary"]]: e === "Primary",
      [De["ui-btn--white"]]: e === "White",
      [De["ui-btn--icon-size-medium"]]: n === "Medium",
      [De["ui-btn--icon-size-small"]]: n === "Small",
      [De["ui-btn--icon-size-extra-big"]]: n === "ExtraBig"
    }, t),
    ..._e(Ft.displayName),
    ...o
  }
));
Ft.displayName = "IconButton";
const Si = J.forwardRef(({
  variant: e = "Ghost",
  className: t,
  text: r,
  size: n = "Big",
  ...o
}, i) => /* @__PURE__ */ l.jsx(
  Gt,
  {
    loaderSize: Ei(n),
    ref: i,
    "aria-label": o["aria-label"] || r,
    className: N(De["ui-btn--icon"], {
      [De["ui-btn--ghost"]]: e === "Ghost",
      [De["ui-btn--success-green"]]: e === "SuccessGreen",
      [De["ui-btn--primary"]]: e === "Primary",
      [De["ui-btn--white"]]: e === "White",
      [De["ui-btn--icon-size-medium"]]: n === "Medium",
      [De["ui-btn--icon-size-small"]]: n === "Small",
      [De["ui-btn--icon-size-extra-big"]]: n === "ExtraBig"
    }, t),
    ..._e(Si.displayName),
    ...o
  }
));
Si.displayName = "IconLinkButton";
const rn = {
  "ui-btn--primary": "u8o8z0RJ",
  "ui-btn--error-red": "u4ZsG9QX",
  "ui-btn--success-green": "uPTtBda3",
  "ui-btn--white": "uTehdmcT"
}, Oi = le(({
  variant: e = "Primary",
  className: t,
  ...r
}, n) => /* @__PURE__ */ l.jsx(
  Et,
  {
    ref: n,
    className: N(rn["ui-btn--primary"], rn[`ui-btn--${mt[e]}`], t),
    ..._e(Oi.displayName),
    ...r
  }
));
Oi.displayName = "PrimaryButton";
const Ri = le(({
  variant: e = "Primary",
  className: t,
  ...r
}, n) => /* @__PURE__ */ l.jsx(
  Gt,
  {
    ref: n,
    className: N(rn["ui-btn--primary"], rn[`ui-btn--${mt[e]}`], t),
    ..._e(Ri.displayName),
    ...r
  }
));
Ri.displayName = "PrimaryLinkButton";
const nn = {
  "ui-btn--secondary": "unyo15bM",
  "ui-btn--white": "ulra8fTJ",
  "ui-btn--grey600": "uJtxZ7y3"
}, Ti = le(({
  className: e,
  variant: t = "Grey600",
  ...r
}, n) => /* @__PURE__ */ l.jsx(
  Et,
  {
    ref: n,
    className: N(nn["ui-btn--secondary"], nn[`ui-btn--${mt[t]}`], e),
    ..._e(Ti.displayName),
    ...r
  }
));
Ti.displayName = "SecondaryButton";
const Ai = le(({
  className: e,
  variant: t = "Grey600",
  ...r
}, n) => /* @__PURE__ */ l.jsx(
  Gt,
  {
    ref: n,
    className: N(nn["ui-btn--secondary"], nn[`ui-btn--${mt[t]}`], e),
    ..._e(Ai.displayName),
    ...r
  }
));
Ai.displayName = "SecondaryLinkButton";
const Nt = {
  "hbd-sticker": "um5r9tA-",
  "hbd-sticker--enter": "u7p--eUZ",
  "hbd-sticker--exit-done": "u7EY7-Ma",
  "hbd-sticker--enter-done": "ue9wsCry",
  "hbd-sticker--exit": "utPmnllH",
  "hbd-sticker--exit-active": "u8e42Cfl"
}, $i = ({
  visible: e,
  children: t
}) => dn() ? null : $r(
  /* @__PURE__ */ l.jsx(fn, { in: e, classNames: {
    enter: Nt["hbd-sticker--enter"],
    enterActive: Nt["hbd-sticker--enter"],
    enterDone: Nt["hbd-sticker--enter-done"],
    exit: Nt["hbd-sticker--exit"],
    exitActive: Nt["hbd-sticker--exit-active"],
    exitDone: Nt["hbd-sticker--exit-done"]
  }, timeout: 250, children: t }),
  document.getElementById(kr.modalPortalTarget)
), Ii = ({
  disabled: e,
  id: t,
  ...r
}) => {
  const [n, o] = X(!1), i = hi("Medium"), s = U(null);
  return K(() => {
    if (!i || typeof IntersectionObserver > "u")
      return;
    const a = new IntersectionObserver((c) => {
      const u = c.find((d) => d.target === s.current);
      o((u == null ? void 0 : u.intersectionRatio) === 0);
    });
    return s.current && a.observe(s.current), () => {
      a.disconnect();
    };
  }, [i]), /* @__PURE__ */ l.jsxs(M, { ref: s, ..._e(Ii.displayName), children: [
    /* @__PURE__ */ l.jsx(Zr, { disabled: e, ...r, id: `${t}-button-1` }),
    /* @__PURE__ */ l.jsx($i, { visible: !e && n && i, children: /* @__PURE__ */ l.jsx(
      Zr,
      {
        id: `${t}-button-2`,
        className: Nt["hbd-sticker"],
        ...r,
        width: "full"
      }
    ) })
  ] });
};
Ii.displayName = "StickyButton";
const Di = ({
  disabled: e,
  id: t,
  ...r
}) => {
  const [n, o] = X(!1), i = hi("Medium"), s = U(null);
  return K(() => {
    if (!i || typeof IntersectionObserver > "u")
      return;
    const a = new IntersectionObserver((c) => {
      const u = c.find((d) => d.target === s.current);
      o((u == null ? void 0 : u.intersectionRatio) === 0);
    });
    return s.current && a.observe(s.current), () => {
      a.disconnect();
    };
  }, [i]), /* @__PURE__ */ l.jsxs(M, { ref: s, ..._e(Di.displayName), children: [
    /* @__PURE__ */ l.jsx(en, { disabled: e, ...r, id: `${t}-link-1` }),
    /* @__PURE__ */ l.jsx($i, { visible: !e && n && i, children: /* @__PURE__ */ l.jsx(
      en,
      {
        id: `${t}-link-2`,
        disabled: e,
        className: Nt["hbd-sticker"],
        ...r,
        width: "full"
      }
    ) })
  ] });
};
Di.displayName = "StickyLinkButton";
const rr = {
  "ui-btn--tag": "u3M6lxzm",
  "ui-btn--white": "uq1JAMoS",
  "ui-btn--active": "utZCNd4g",
  "ui-btn--grey600": "uNT9anLS"
}, Bi = le(({
  className: e,
  active: t,
  variant: r = "Grey600",
  ...n
}, o) => /* @__PURE__ */ l.jsx(
  Et,
  {
    ref: o,
    className: N(
      rr["ui-btn--tag"],
      rr[`ui-btn--${mt[r]}`],
      { [rr["ui-btn--active"]]: t },
      e
    ),
    ..._e(Bi.displayName),
    ...n
  }
));
Bi.displayName = "TagButton";
const Li = J.forwardRef(({
  className: e,
  active: t,
  variant: r = "Grey600",
  ...n
}, o) => /* @__PURE__ */ l.jsx(
  Gt,
  {
    ref: o,
    className: N(
      rr["ui-btn--tag"],
      rr[`ui-btn--${mt[r]}`],
      { [rr["ui-btn--active"]]: t },
      e
    ),
    ..._e(Li.displayName),
    ...n
  }
));
Li.displayName = "TagLinkButton";
const ec = "uo9X32Bd", tc = {
  unstyledBtn: ec
}, pn = le(({
  id: e,
  onClick: t,
  className: r,
  children: n,
  tabIndex: o,
  role: i,
  ...s
}, a) => {
  const c = pt(s), u = it(s), d = Ht(s), m = Ne(s), v = Ar(s);
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      id: e,
      type: "button",
      ref: a,
      role: i || "button",
      tabIndex: o,
      onClick: t,
      className: N(tc.unstyledBtn, v.className, m.className, c.className, u.className, d.className, r),
      style: {
        ...c.style,
        ...u.style,
        ...d.style,
        ...m.style,
        ...v.style
      },
      ..._e(pn.displayName),
      ...Ce(s),
      ...dr(s),
      children: n
    }
  );
});
pn.displayName = "UnstyledButton";
const rc = "uQFvv0oj", nc = "uhFo-i3n", oc = "u2Zd3LRW", Cn = {
  contentSwitcherTabButton: rc,
  contentSwitcherTab: nc,
  contentSwitcherTabActive: oc
}, ic = le(({
  text: e,
  active: t,
  children: r,
  onClick: n,
  ...o
}, i) => /* @__PURE__ */ l.jsx(
  pn,
  {
    ref: i,
    onClick: n,
    className: Cn.contentSwitcherTabButton,
    ...o,
    br: 4,
    role: "tab",
    "aria-selected": t,
    children: /* @__PURE__ */ l.jsxs(
      M,
      {
        className: N(Cn.contentSwitcherTab, { [Cn.contentSwitcherTabActive]: t }),
        tag: "span",
        px: 8,
        py: 4,
        br: 6,
        children: [
          r,
          !r && !!e && /* @__PURE__ */ l.jsx(re, { tag: "span", variant: "Button", children: e })
        ]
      }
    )
  }
));
ic.displayName = "ContentSwitcherTab";
const So = Math.min, xr = Math.max, on = Math.round, lt = (e) => ({
  x: e,
  y: e
});
function Pi(e) {
  return e.split("-")[0];
}
function sc(e) {
  return e.split("-")[1];
}
function ac(e) {
  return e === "x" ? "y" : "x";
}
function cc(e) {
  return e === "y" ? "height" : "width";
}
function Wi(e) {
  return ["top", "bottom"].includes(Pi(e)) ? "y" : "x";
}
function lc(e) {
  return ac(Wi(e));
}
function Fi(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Oo(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const i = Wi(t), s = lc(t), a = cc(s), c = Pi(t), u = i === "y", d = n.x + n.width / 2 - o.width / 2, m = n.y + n.height / 2 - o.height / 2, v = n[a] / 2 - o[a] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: d,
        y: n.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: m
      };
      break;
    case "left":
      h = {
        x: n.x - o.width,
        y: m
      };
      break;
    default:
      h = {
        x: n.x,
        y: n.y
      };
  }
  switch (sc(t)) {
    case "start":
      h[s] -= v * (r && u ? -1 : 1);
      break;
    case "end":
      h[s] += v * (r && u ? -1 : 1);
      break;
  }
  return h;
}
const uc = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = r, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: m
  } = Oo(u, n, c), v = n, h = {}, b = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: y,
      fn: _
    } = a[g], {
      x: E,
      y: C,
      data: f,
      reset: w
    } = await _({
      x: d,
      y: m,
      initialPlacement: n,
      placement: v,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = E ?? d, m = C ?? m, h = {
      ...h,
      [y]: {
        ...h[y],
        ...f
      }
    }, w && b <= 50 && (b++, typeof w == "object" && (w.placement && (v = w.placement), w.rects && (u = w.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: d,
      y: m
    } = Oo(u, v, c)), g = -1);
  }
  return {
    x: d,
    y: m,
    placement: v,
    strategy: o,
    middlewareData: h
  };
};
function mn() {
  return typeof window < "u";
}
function fr(e) {
  return Mi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ve(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _t(e) {
  var t;
  return (t = (Mi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mi(e) {
  return mn() ? e instanceof Node || e instanceof Ve(e).Node : !1;
}
function nt(e) {
  return mn() ? e instanceof Element || e instanceof Ve(e).Element : !1;
}
function dt(e) {
  return mn() ? e instanceof HTMLElement || e instanceof Ve(e).HTMLElement : !1;
}
function Ro(e) {
  return !mn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot;
}
function Ir(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = ot(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function dc(e) {
  return ["table", "td", "th"].includes(fr(e));
}
function hn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function so(e) {
  const t = ao(), r = nt(e) ? ot(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function fc(e) {
  let t = Ct(e);
  for (; dt(t) && !sr(t); ) {
    if (so(t))
      return t;
    if (hn(t))
      return null;
    t = Ct(t);
  }
  return null;
}
function ao() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function sr(e) {
  return ["html", "body", "#document"].includes(fr(e));
}
function ot(e) {
  return Ve(e).getComputedStyle(e);
}
function vn(e) {
  return nt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ct(e) {
  if (fr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ro(e) && e.host || // Fallback.
    _t(e)
  );
  return Ro(t) ? t.host : t;
}
function zi(e) {
  const t = Ct(e);
  return sr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : dt(t) && Ir(t) ? t : zi(t);
}
function Hi(e, t, r) {
  var n;
  t === void 0 && (t = []);
  const o = zi(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Ve(o);
  return i ? (Vn(s), t.concat(s, s.visualViewport || [], Ir(o) ? o : [], [])) : t.concat(o, Hi(o, []));
}
function Vn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gi(e) {
  const t = ot(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = dt(e), i = o ? e.offsetWidth : r, s = o ? e.offsetHeight : n, a = on(r) !== i || on(n) !== s;
  return a && (r = i, n = s), {
    width: r,
    height: n,
    $: a
  };
}
function Vi(e) {
  return nt(e) ? e : e.contextElement;
}
function nr(e) {
  const t = Vi(e);
  if (!dt(t))
    return lt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = Gi(t);
  let s = (i ? on(r.width) : r.width) / n, a = (i ? on(r.height) : r.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const pc = /* @__PURE__ */ lt(0);
function qi(e) {
  const t = Ve(e);
  return !ao() || !t.visualViewport ? pc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function mc(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ve(e) ? !1 : t;
}
function Cr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), i = Vi(e);
  let s = lt(1);
  t && (n ? nt(n) && (s = nr(n)) : s = nr(e));
  const a = mc(i, r, n) ? qi(i) : lt(0);
  let c = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, m = o.height / s.y;
  if (i) {
    const v = Ve(i), h = n && nt(n) ? Ve(n) : n;
    let b = v, g = Vn(b);
    for (; g && n && h !== b; ) {
      const y = nr(g), _ = g.getBoundingClientRect(), E = ot(g), C = _.left + (g.clientLeft + parseFloat(E.paddingLeft)) * y.x, f = _.top + (g.clientTop + parseFloat(E.paddingTop)) * y.y;
      c *= y.x, u *= y.y, d *= y.x, m *= y.y, c += C, u += f, b = Ve(g), g = Vn(b);
    }
  }
  return Fi({
    width: d,
    height: m,
    x: c,
    y: u
  });
}
function co(e, t) {
  const r = vn(e).scrollLeft;
  return t ? t.left + r : Cr(_t(e)).left + r;
}
function Ui(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    co(e, n)
  )), i = n.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function hc(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const i = o === "fixed", s = _t(n), a = t ? hn(t.floating) : !1;
  if (n === s || a && i)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = lt(1);
  const d = lt(0), m = dt(n);
  if ((m || !m && !i) && ((fr(n) !== "body" || Ir(s)) && (c = vn(n)), dt(n))) {
    const h = Cr(n);
    u = nr(n), d.x = h.x + n.clientLeft, d.y = h.y + n.clientTop;
  }
  const v = s && !m && !i ? Ui(s, c, !0) : lt(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - c.scrollLeft * u.x + d.x + v.x,
    y: r.y * u.y - c.scrollTop * u.y + d.y + v.y
  };
}
function vc(e) {
  return Array.from(e.getClientRects());
}
function gc(e) {
  const t = _t(e), r = vn(e), n = e.ownerDocument.body, o = xr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = xr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + co(e);
  const a = -r.scrollTop;
  return ot(n).direction === "rtl" && (s += xr(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function bc(e, t) {
  const r = Ve(e), n = _t(e), o = r.visualViewport;
  let i = n.clientWidth, s = n.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = ao();
    (!u || u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function yc(e, t) {
  const r = Cr(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, i = dt(e) ? nr(e) : lt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, u = n * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: u
  };
}
function To(e, t, r) {
  let n;
  if (t === "viewport")
    n = bc(e, r);
  else if (t === "document")
    n = gc(_t(e));
  else if (nt(t))
    n = yc(t, r);
  else {
    const o = qi(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Fi(n);
}
function Yi(e, t) {
  const r = Ct(e);
  return r === t || !nt(r) || sr(r) ? !1 : ot(r).position === "fixed" || Yi(r, t);
}
function xc(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Hi(e, []).filter((a) => nt(a) && fr(a) !== "body"), o = null;
  const i = ot(e).position === "fixed";
  let s = i ? Ct(e) : e;
  for (; nt(s) && !sr(s); ) {
    const a = ot(s), c = so(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ir(s) && !c && Yi(e, s)) ? n = n.filter((d) => d !== s) : o = a, s = Ct(s);
  }
  return t.set(e, n), n;
}
function wc(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const s = [...r === "clippingAncestors" ? hn(t) ? [] : xc(t, this._c) : [].concat(r), n], a = s[0], c = s.reduce((u, d) => {
    const m = To(t, d, o);
    return u.top = xr(m.top, u.top), u.right = So(m.right, u.right), u.bottom = So(m.bottom, u.bottom), u.left = xr(m.left, u.left), u;
  }, To(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function _c(e) {
  const {
    width: t,
    height: r
  } = Gi(e);
  return {
    width: t,
    height: r
  };
}
function jc(e, t, r) {
  const n = dt(t), o = _t(t), i = r === "fixed", s = Cr(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = lt(0);
  function u() {
    c.x = co(o);
  }
  if (n || !n && !i)
    if ((fr(t) !== "body" || Ir(o)) && (a = vn(t)), n) {
      const h = Cr(t, !0, i, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && u();
  i && !n && o && u();
  const d = o && !n && !i ? Ui(o, a) : lt(0), m = s.left + a.scrollLeft - c.x - d.x, v = s.top + a.scrollTop - c.y - d.y;
  return {
    x: m,
    y: v,
    width: s.width,
    height: s.height
  };
}
function En(e) {
  return ot(e).position === "static";
}
function Ao(e, t) {
  if (!dt(e) || ot(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return _t(e) === r && (r = r.ownerDocument.body), r;
}
function Xi(e, t) {
  const r = Ve(e);
  if (hn(e))
    return r;
  if (!dt(e)) {
    let o = Ct(e);
    for (; o && !sr(o); ) {
      if (nt(o) && !En(o))
        return o;
      o = Ct(o);
    }
    return r;
  }
  let n = Ao(e, t);
  for (; n && dc(n) && En(n); )
    n = Ao(n, t);
  return n && sr(n) && En(n) && !so(n) ? r : n || fc(e) || r;
}
const kc = async function(e) {
  const t = this.getOffsetParent || Xi, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: jc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Nc(e) {
  return ot(e).direction === "rtl";
}
const Cc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hc,
  getDocumentElement: _t,
  getClippingRect: wc,
  getOffsetParent: Xi,
  getElementRects: kc,
  getClientRects: vc,
  getDimensions: _c,
  getScale: nr,
  isElement: nt,
  isRTL: Nc
}, Ec = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Cc,
    ...r
  }, i = {
    ...o.platform,
    _c: n
  };
  return uc(e, t, {
    ...o,
    platform: i
  });
};
var Kr = typeof document < "u" ? un : K;
function sn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!sn(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !sn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ki(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $o(e, t) {
  const r = Ki(e);
  return Math.round(t * r) / r;
}
function Sn(e) {
  const t = Ie.useRef(e);
  return Kr(() => {
    t.current = e;
  }), t;
}
function Sc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: u
  } = e, [d, m] = Ie.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, h] = Ie.useState(n);
  sn(v, n) || h(n);
  const [b, g] = Ie.useState(null), [y, _] = Ie.useState(null), E = Ie.useCallback((z) => {
    z !== x.current && (x.current = z, g(z));
  }, []), C = Ie.useCallback((z) => {
    z !== S.current && (S.current = z, _(z));
  }, []), f = i || b, w = s || y, x = Ie.useRef(null), S = Ie.useRef(null), R = Ie.useRef(d), A = c != null, j = Sn(c), L = Sn(o), G = Sn(u), $ = Ie.useCallback(() => {
    if (!x.current || !S.current)
      return;
    const z = {
      placement: t,
      strategy: r,
      middleware: v
    };
    L.current && (z.platform = L.current), Ec(x.current, S.current, z).then((ae) => {
      const ne = {
        ...ae,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: G.current !== !1
      };
      T.current && !sn(R.current, ne) && (R.current = ne, ea.flushSync(() => {
        m(ne);
      }));
    });
  }, [v, t, r, L, G]);
  Kr(() => {
    u === !1 && R.current.isPositioned && (R.current.isPositioned = !1, m((z) => ({
      ...z,
      isPositioned: !1
    })));
  }, [u]);
  const T = Ie.useRef(!1);
  Kr(() => (T.current = !0, () => {
    T.current = !1;
  }), []), Kr(() => {
    if (f && (x.current = f), w && (S.current = w), f && w) {
      if (j.current)
        return j.current(f, w, $);
      $();
    }
  }, [f, w, $, j, A]);
  const D = Ie.useMemo(() => ({
    reference: x,
    floating: S,
    setReference: E,
    setFloating: C
  }), [E, C]), W = Ie.useMemo(() => ({
    reference: f,
    floating: w
  }), [f, w]), q = Ie.useMemo(() => {
    const z = {
      position: r,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return z;
    const ae = $o(W.floating, d.x), ne = $o(W.floating, d.y);
    return a ? {
      ...z,
      transform: "translate(" + ae + "px, " + ne + "px)",
      ...Ki(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ae,
      top: ne
    };
  }, [r, a, W.floating, d.x, d.y]);
  return Ie.useMemo(() => ({
    ...d,
    update: $,
    refs: D,
    elements: W,
    floatingStyles: q
  }), [d, $, D, W, q]);
}
const Io = "firstTrap", Do = "lastTrap", gn = ({
  children: e,
  onEscape: t,
  className: r,
  ...n
}) => {
  const o = U(null), i = U(), s = U(), a = U(), c = (m) => {
    var h, b, g, y, _;
    if (!(m.target instanceof HTMLElement) || o.current === null) return;
    if ((h = s.current) != null && h.hasAttribute("disabled") && (s.current = void 0), o.current.contains(m.target)) {
      if (m.target.classList.contains(Io)) {
        if (s.current) {
          s.current.focus();
          return;
        }
        (b = a.current) == null || b.focus();
        return;
      }
      if (m.target.classList.contains(Do)) {
        if (s.current || (s.current = i.current), a.current) {
          (g = a.current) == null || g.focus();
          return;
        }
        (y = i.current) == null || y.focus();
        return;
      }
      i.current = m.target, a.current || (a.current = m.target);
    } else
      (_ = i.current) == null || _.focus();
  }, u = ve((m) => {
    m.key === "Escape" && o !== null && (t == null || t());
  }, [t]), d = () => {
    if (o.current) {
      const m = o.current.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (m.length > 1) {
        const v = m[1];
        v.focus(), a.current = v;
      }
    }
  };
  return K(() => {
    const m = o.current;
    return m == null || m.addEventListener("focusin", c, !0), m == null || m.addEventListener("keydown", u, !0), () => {
      m == null || m.removeEventListener("focusin", c, !0), m == null || m.removeEventListener("keydown", u, !0);
    };
  }, [t, u]), K(() => {
    setTimeout(d, 0);
  }, []), /* @__PURE__ */ l.jsxs(
    M,
    {
      ...n,
      size: "full",
      className: r,
      ref: o,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: Io, tabIndex: 0 }),
        e,
        /* @__PURE__ */ l.jsx("div", { className: Do, tabIndex: 0 })
      ]
    }
  );
}, Oc = "u9-nfAUh", Rc = "uHpA4NR-", Tc = "usfHz8N9", On = {
  dropBox: Oc,
  dropBoxSummary: Rc,
  dropBoxContent: Tc
}, Ac = le(({
  className: e,
  toggler: t,
  open: r,
  defaultOpen: n,
  children: o,
  color: i,
  colorTint: s,
  backgroundColor: a = "White",
  backgroundColorTint: c,
  placement: u = "bottom-start",
  strategy: d = "absolute",
  br: m = 3,
  tabIndex: v,
  onSummaryClicked: h,
  onOutsideClicked: b,
  onEscape: g,
  disableFlip: y = !1,
  ..._
}, E) => {
  typeof r < "u" && typeof n < "u" && console.warn("Warning: A `<DropBox>` uses both `open` and `defaultOpen` prop at the same time. \n      Use `open` for making it controlled or `defaultOpen` for uncontrolled default state.");
  const [C, f] = X(!!n), { refs: w, floatingStyles: x } = Sc({
    open: C,
    middleware: [
      Ks(),
      Qs(4),
      ...y ? [] : [Js()]
    ],
    placement: u,
    strategy: d,
    whileElementsMounted: Zs
  }), S = Ne({ p: 5 }), R = pt({ color: i, colorTint: s, backgroundColor: a, backgroundColorTint: c }), A = Ht({ br: m }), j = U(null), L = U(null), G = ve(($) => {
    $.preventDefault(), h == null || h(), typeof r > "u" && f((T) => !T);
  }, [h, r]);
  return vi(j, ($) => {
    var T;
    $.target === L.current || $.target instanceof Node && ((T = L.current) != null && T.contains($.target)) || (b == null || b(), typeof r > "u" && C && f(() => !1));
  }), gi(j), K(() => {
    typeof r < "u" && f(() => r);
  }, [r]), /* @__PURE__ */ l.jsxs("details", { ref: E, className: N(On.dropBox, e), open: C, ..._, children: [
    /* @__PURE__ */ l.jsx("summary", { tabIndex: v, ref: qe([w.setReference, L]), className: On.dropBoxSummary, onClick: G, children: t }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: qe([w.setFloating, j]),
        className: N(On.dropBoxContent, S.className, R.className, A.className),
        style: {
          ...x,
          ...S.style,
          ...R.style,
          ...A.style
        },
        children: C && /* @__PURE__ */ l.jsx(
          gn,
          {
            onEscape: () => {
              g == null || g(), f(!1), setTimeout(() => {
                var $, T;
                (T = ($ = L.current) == null ? void 0 : $.lastElementChild) == null || T.focus();
              }, 0);
            },
            children: o
          }
        )
      }
    )
  ] });
});
Ac.displayName = "DropBox";
const Xe = {
  "hbd-icon-text-link": "uwJcwYad",
  "hbd-icon-text-link__text": "udhtbk5z",
  "hbd-icon-text-link--inverted": "uFnpZsxe",
  "hbd-icon-text-link__nr-indicator": "uTz-oFbw",
  "hbd-icon-text-link__nr-wrapper": "uO-pJe-V",
  "hbd-icon-text-link__nr-text": "uwyju9gB"
}, Qi = le(({
  iconId: e,
  iconSize: t,
  iconColor: r,
  iconColorTint: n,
  className: o,
  id: i,
  text: s,
  variant: a = "Body1",
  inverted: c,
  href: u,
  target: d,
  rel: m,
  tabIndex: v = 0,
  numberIndicator: h,
  m: b,
  mt: g,
  mr: y,
  mb: _,
  ml: E,
  mx: C,
  my: f,
  onClick: w,
  role: x,
  noEllipsis: S = !1,
  ...R
}, A) => {
  const j = Ne({
    m: b,
    mt: g,
    mr: y,
    mb: _,
    ml: E,
    mx: C,
    my: f
  });
  return /* @__PURE__ */ l.jsxs(
    "a",
    {
      id: i,
      ref: A,
      onClick: w,
      href: u,
      target: d,
      rel: m,
      tabIndex: v,
      role: x,
      className: N(Xe["hbd-icon-text-link"], {
        [Xe["hbd-icon-text-link--inverted"]]: c
      }, j.className, o),
      style: j.style,
      "aria-controls": R["aria-controls"],
      "aria-hidden": R["aria-hidden"],
      "aria-label": R["aria-label"],
      "aria-labelledby": R["aria-labelledby"],
      "aria-expanded": R["aria-expanded"],
      ..._e(Qi.displayName),
      ...Ce(R),
      children: [
        /* @__PURE__ */ l.jsx(
          Te,
          {
            iconId: e,
            size: t ?? (a === "Body1" ? 4 : 3),
            mr: 4,
            color: r,
            colorTint: n
          }
        ),
        /* @__PURE__ */ l.jsx(
          re,
          {
            variant: a,
            className: N({ [Xe["hbd-icon-text-link__text"]]: !S }),
            tag: "span",
            children: s
          }
        ),
        typeof h == "number" && /* @__PURE__ */ l.jsxs(M, { tag: "span", className: Xe["hbd-icon-text-link__nr-indicator"], children: [
          /* @__PURE__ */ l.jsx(Te, { iconId: "circle", size: 4 }),
          /* @__PURE__ */ l.jsx(M, { className: Xe["hbd-icon-text-link__nr-wrapper"], children: /* @__PURE__ */ l.jsx(re, { tag: "span", className: Xe["hbd-icon-text-link__nr-text"], children: h }) })
        ] })
      ]
    }
  );
});
Qi.displayName = "IconTextLink";
const lo = J.forwardRef(({
  iconId: e,
  iconColor: t,
  iconColorTint: r,
  iconSize: n,
  className: o,
  id: i,
  text: s,
  variant: a = "Body1",
  inverted: c,
  tabIndex: u = 0,
  onClick: d,
  numberIndicator: m,
  role: v,
  m: h,
  mt: b,
  mr: g,
  mb: y,
  ml: _,
  mx: E,
  my: C,
  ...f
}, w) => {
  const x = Ne({
    m: h,
    mt: b,
    mr: g,
    mb: y,
    ml: _,
    mx: E,
    my: C
  });
  return /* @__PURE__ */ l.jsxs(
    "button",
    {
      id: i,
      ref: w,
      type: "button",
      tabIndex: u,
      role: v,
      className: N(Xe["hbd-icon-text-link"], {
        [Xe["hbd-icon-text-link--inverted"]]: c
      }, x.className, o),
      style: x.style,
      onClick: d,
      "aria-controls": f["aria-controls"],
      "aria-hidden": f["aria-hidden"],
      "aria-label": f["aria-label"],
      "aria-labelledby": f["aria-labelledby"],
      "aria-expanded": f["aria-expanded"],
      "aria-haspopup": f["aria-haspopup"],
      ..._e(lo.displayName),
      ...Ce(f),
      children: [
        /* @__PURE__ */ l.jsx(
          Te,
          {
            iconId: e,
            size: n ?? (a === "Body1" ? 4 : 3),
            mr: 4,
            color: t,
            colorTint: r
          }
        ),
        /* @__PURE__ */ l.jsx(
          re,
          {
            variant: a,
            className: Xe["hbd-icon-text-link__text"],
            tag: "span",
            children: s
          }
        ),
        typeof m == "number" && /* @__PURE__ */ l.jsxs(M, { flexType: "block", positionRoot: !0, tag: "span", ml: 1, className: Xe["hbd-icon-text-link__nr-indicator"], children: [
          /* @__PURE__ */ l.jsx(Te, { iconId: "circle", size: 4 }),
          /* @__PURE__ */ l.jsx(M, { size: 4, className: Xe["hbd-icon-text-link__nr-wrapper"], children: /* @__PURE__ */ l.jsx(re, { tag: "span", className: Xe["hbd-icon-text-link__nr-text"], children: m }) })
        ] })
      ]
    }
  );
});
lo.displayName = "IconTextButton";
const Ji = J.createContext({
  closeOnSelect: !1,
  setIsOpen: () => {
  }
}), qn = {
  "hbd-dropdown-item": "uCAfYQ-I",
  "hbd-dropdown-item--selected": "u9osdN-o"
}, Kt = {
  "hbd-dropdown-button": "uJVo7F7S",
  "hbd-dropdown": "uqVcbMdz",
  "hbd-dropdown--align-left": "uyC5ymAw",
  "hbd-dropdown--align-middle": "uzymY1TO",
  "hbd-dropdown--align-right": "uCC-Vgc-",
  "hbd-dropdown--hidden": "ujcetFJN",
  "hbd-dropdown-focus-trap": "uHWwvbn-",
  "hbd-dropdown-focus-trap--hidden": "uG29R0w8"
}, Rf = ({
  alignDrop: e = "left",
  closeOnSelect: t = !0,
  children: r,
  id: n,
  asFunctionButton: o,
  iconId: i,
  iconSize: s,
  ...a
}) => {
  const [c, u] = X(!1), d = U(null), m = U(null), v = U(null), h = {
    closeOnSelect: t,
    setIsOpen: u
  };
  K(() => {
    var _;
    if (!c) return;
    const y = (_ = m.current) == null ? void 0 : _.getElementsByClassName(qn["hbd-dropdown-item"]);
    y && y[0] && y[0] instanceof HTMLElement && y[0].focus();
  }, [m, c]), vi(v, () => u(!1)), gi(m);
  const b = N(
    Kt["hbd-dropdown"],
    {
      [Kt[`hbd-dropdown--align-${e}`]]: e,
      [Kt["hbd-dropdown--hidden"]]: !c
    }
  ), g = {
    ref: d,
    id: `dropdown-button-${n}`,
    onClick: () => u(!c),
    "aria-haspopup": "listbox",
    "aria-controls": n,
    "aria-expanded": c,
    role: "combobox",
    iconId: i
  };
  return /* @__PURE__ */ l.jsx(Ji.Provider, { value: h, children: /* @__PURE__ */ l.jsxs("div", { className: Kt["hbd-dropdown-button"], ref: v, children: [
    o ? /* @__PURE__ */ l.jsx(io, { ...a, ...g, variant: "White" }) : /* @__PURE__ */ l.jsx(lo, { ...a, ...g, iconSize: s }),
    /* @__PURE__ */ l.jsx(
      gn,
      {
        className: N(Kt["hbd-dropdown-focus-trap"], {
          [Kt["hbd-dropdown-focus-trap--hidden"]]: !c
        }),
        onEscape: () => {
          u(!1), setTimeout(() => {
            var y;
            (y = d.current) == null || y.focus();
          }, 0);
        },
        children: /* @__PURE__ */ l.jsx("div", { className: b, children: /* @__PURE__ */ l.jsx(
          M,
          {
            tag: "ul",
            flexDirection: "column",
            ref: m,
            role: "listbox",
            id: n,
            "aria-labelledby": `dropdown-button-${n}`,
            children: r
          }
        ) })
      }
    )
  ] }) });
}, Tf = ({
  text: e,
  onClick: t,
  selected: r,
  onSelected: n
}) => {
  const { setIsOpen: o, closeOnSelect: i } = Tr(Ji), s = N(qn["hbd-dropdown-item"], {
    [qn["hbd-dropdown-item--selected"]]: r
  });
  return /* @__PURE__ */ l.jsx(M, { tag: "li", role: "option", children: /* @__PURE__ */ l.jsx(
    "button",
    {
      "aria-selected": r,
      className: s,
      onClick: (a) => {
        t == null || t(a), n == null || n(e), i && o(!1);
      },
      children: e
    }
  ) });
}, Qt = {
  "hbd-feedback-message": "uxxU2kFK",
  "hbd-feedback-message--error": "urhfLMoi",
  "hbd-feedback-message--success": "ubv-4tvA",
  "hbd-feedback-message--grey400": "uyG-LBmg",
  "hbd-feedback-message--orange100": "u8C0NlWR",
  "hbd-feedback-message--orange110": "ukWPH7qU"
}, Af = ({
  title: e,
  message: t,
  variant: r = "Grey400",
  children: n,
  closeLabel: o,
  onClose: i,
  className: s,
  width: a
}) => /* @__PURE__ */ l.jsxs(
  M,
  {
    br: 4,
    pl: 7,
    pr: 4,
    py: 4,
    backgroundColor: r,
    backgroundColorTint: 0.08,
    alignItems: "center",
    className: N(Qt["hbd-feedback-message"], s, {
      [Qt["hbd-feedback-message--success"]]: r === "SuccessGreen",
      [Qt["hbd-feedback-message--error"]]: r === "ErrorRed",
      [Qt["hbd-feedback-message--grey400"]]: r === "Grey400",
      [Qt["hbd-feedback-message--orange100"]]: r === "Secondary",
      [Qt["hbd-feedback-message--orange110"]]: r === "SecondaryDarker"
    }),
    children: [
      /* @__PURE__ */ l.jsxs(M, { flexGrow: 1, width: a, children: [
        e && /* @__PURE__ */ l.jsx(re, { variant: "Label", mb: 1, children: e }),
        t && /* @__PURE__ */ l.jsx(re, { variant: e ? "Microcopy" : "Body2", children: t }),
        n
      ] }),
      i && /* @__PURE__ */ l.jsx(Ft, { iconId: "close", "aria-label": o, onClick: i, ml: 2, mr: -4 })
    ]
  }
), et = {
  "hbd-outcome": "ujKvT-hO",
  "hbd-outcome__border": "uetfYHt3",
  "hbd-outcome__border--done": "ui5QH0f7",
  "hbd-outcome__border2": "uN8T59o3",
  "hbd-outcome__border2--done": "umioK2BA",
  "hbd-outcome__line": "u-6Ral2M",
  "hbd-outcome__line--success": "uC8NrUAp",
  "hbd-outcome__error-line1": "uV-xUn0R",
  "hbd-outcome__error-line2": "uSdvnHuy",
  "hbd-outcome__error-line1--error": "u0sJRBs0",
  "hbd-outcome__error-line2--error": "uco8G21T"
}, $f = ({
  className: e,
  success: t,
  error: r,
  ...n
}) => {
  const o = it(n), i = pt({ color: r ? "ErrorRed" : "SuccessGreen" });
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      className: N(et["hbd-outcome"], e, o.className, i.className),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 56 60",
      style: o.style,
      children: [
        /* @__PURE__ */ l.jsx("defs", {}),
        /* @__PURE__ */ l.jsxs("g", { fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ l.jsx(
            "path",
            {
              className: N(et["hbd-outcome__border"], {
                [et["hbd-outcome__border--done"]]: t || r
              }),
              strokeLinejoin: "round",
              d: "M28.2779061 2c4.4497255.02743036 7.8823306.32354686 11.2072683 1.11278892 4.2043375.99768652 7.4241423 2.91046609 9.668408 6.01575211 1.8083656 2.50119627 3.0320461 5.32893057 3.674799 8.43405807 1.1018937 5.327708 1.3974542 10.9285617 1.0086404 17.1054232-.2467251 3.9138102-.6224818 6.6419992-1.4066366 9.3218528-1.1371835 3.8960495-2.8052833 6.8845445-5.3790259 9.1784811-1.6923537 1.5075048-3.7383519 2.57257-6.2183965 3.334158-2.7276461.8373944-5.6184535 1.2447558-9.2263405 1.4029534-5.3483743.234336-9.633056.0486047-13.7416265-.7327852-3.3789099-.6418406-6.158985-1.7858094-8.49266935-3.6422502-1.33256798-1.0599178-2.44624245-2.3875065-3.42580157-4.012258-1.54867658-2.568936-2.54377525-5.4409725-3.08147249-8.6859455-1.02413402-6.1790252-1.12727206-12.5441498-.37124347-19.1685058.37467288-3.2791507.97980203-5.9239447 2.01894504-8.3646007 1.4244229-3.34363838 3.23173334-5.8010035 5.80247534-7.53654441 2.1380174-1.44448388 4.5831625-2.37771625 7.4311679-2.92039609 2.9545218-.56262185 6.0237156-.80658259 9.8745485-.83877409L28.2779061 2z"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              className: N(et["hbd-outcome__border2"], {
                [et["hbd-outcome__border2--done"]]: t || r
              }),
              strokeLinejoin: "round",
              d: "M28.2779061 2c4.4497255.02743036 7.8823306.32354686 11.2072683 1.11278892 4.2043375.99768652 7.4241423 2.91046609 9.668408 6.01575211 1.8083656 2.50119627 3.0320461 5.32893057 3.674799 8.43405807 1.1018937 5.327708 1.3974542 10.9285617 1.0086404 17.1054232-.2467251 3.9138102-.6224818 6.6419992-1.4066366 9.3218528-1.1371835 3.8960495-2.8052833 6.8845445-5.3790259 9.1784811-1.6923537 1.5075048-3.7383519 2.57257-6.2183965 3.334158-2.7276461.8373944-5.6184535 1.2447558-9.2263405 1.4029534-5.3483743.234336-9.633056.0486047-13.7416265-.7327852-3.3789099-.6418406-6.158985-1.7858094-8.49266935-3.6422502-1.33256798-1.0599178-2.44624245-2.3875065-3.42580157-4.012258-1.54867658-2.568936-2.54377525-5.4409725-3.08147249-8.6859455-1.02413402-6.1790252-1.12727206-12.5441498-.37124347-19.1685058.37467288-3.2791507.97980203-5.9239447 2.01894504-8.3646007 1.4244229-3.34363838 3.23173334-5.8010035 5.80247534-7.53654441 2.1380174-1.44448388 4.5831625-2.37771625 7.4311679-2.92039609 2.9545218-.56262185 6.0237156-.80658259 9.8745485-.83877409L28.2779061 2z"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              className: N(et["hbd-outcome__line"], {
                [et["hbd-outcome__line--success"]]: t
              }),
              strokeLinecap: "round",
              d: "M16 30l9 9 17-17"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              className: N(et["hbd-outcome__error-line1"], {
                [et["hbd-outcome__error-line1--error"]]: r
              }),
              strokeLinecap: "round",
              d: "M19 21l18 18"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "path",
            {
              className: N(et["hbd-outcome__error-line2"], {
                [et["hbd-outcome__error-line2--error"]]: r
              }),
              strokeLinecap: "round",
              d: "M37 21L19 39"
            }
          )
        ] })
      ]
    }
  );
}, Ur = {
  "hbd-message": "uIyss1oS",
  "hbd-message__icon": "uu7DpwWO",
  "hbd-message__icon-background--white": "utqg7qjt",
  "hbd-message__icon-background--grey": "ugOOG57i",
  "hbd-message--warning": "u-QtPOH1",
  "hbd-message--quote": "uSVlKg-C",
  "hbd-message--info": "uwv-FH-R"
}, If = ({ variant: e, text: t, iconBackground: r = "white", className: n }) => {
  const o = N(Ur["hbd-message"], Ur[`hbd-message--${e}`], n), i = e === "quote" ? "quote" : "info";
  return /* @__PURE__ */ l.jsx(M, { className: o, children: /* @__PURE__ */ l.jsxs(re, { m: 8, variant: "Body1", children: [
    t,
    /* @__PURE__ */ l.jsx(
      Te,
      {
        className: N(
          Ur["hbd-message__icon"],
          Ur[`hbd-message__icon-background--${r}`]
        ),
        iconId: i
      }
    )
  ] }) });
}, $c = "ulmY9ihS", Ic = "uLbGEVbU", Dc = "unlT086T", Bc = "uPKD--ox", Lc = "uGsI0rSj", Pc = "uw2C21PC", Wc = {
  targeted: $c,
  enter: Ic,
  enterActive: Dc,
  enterDone: Bc,
  exit: Lc,
  exitActive: Pc
}, {
  enter: Fc,
  enterActive: Mc,
  targeted: zc,
  exit: Hc,
  enterDone: Gc,
  exitActive: Vc
} = Wc, Df = ({
  show: e,
  variant: t = "SuccessGreen",
  appear: r = !0,
  text: n,
  iconId: o,
  target: i,
  className: s
}) => {
  const [a, c] = X(!0), u = U(null);
  if (K(() => {
    c(!1);
  }, []), a)
    return null;
  const d = /* @__PURE__ */ l.jsx(
    fn,
    {
      nodeRef: u,
      in: e,
      timeout: 250,
      appear: r,
      classNames: {
        enter: Fc,
        enterActive: Mc,
        enterDone: Gc,
        exit: Hc,
        exitActive: Vc
      },
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ l.jsxs(
        M,
        {
          container: !0,
          ref: u,
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: t,
          color: "White",
          p: 3,
          width: "full",
          className: N({
            [zc]: !!i
          }, s),
          children: [
            o && /* @__PURE__ */ l.jsx(Te, { iconId: o, size: 5, mr: 3 }),
            /* @__PURE__ */ l.jsx(re, { variant: "Microcopy", tag: "p", children: n })
          ]
        }
      )
    }
  );
  if (!i)
    return d;
  const m = document.querySelector(i);
  if (!m)
    throw new Error("You provided a 'target' to the <Toast> but the element couldn't be found.");
  return $r(d, m);
}, qc = "ux-8gWhi", Uc = "uvYbWgeE", Yc = "u1zxf9x-", Xc = "ulNs7AfD", Kc = "uRhR9vW2", Qc = "u5gwRm7N", Jc = "uakMKaH6", Zc = "uVYhURe3", el = "uC3FdamE", tl = "ufOtEix-", rl = "u4x8qyLi", tt = {
  formCheckbox: qc,
  formCheckboxInput: Uc,
  formCheckboxLabel: Yc,
  formCheckboxCheck: Xc,
  formCheckboxDisabled: Kc,
  formCheckboxChecked: Qc,
  formCheckboxInvalid: Jc,
  formCheckboxSemi: Zc,
  semiCheck: el,
  checkIcon: tl,
  checkIconChecked: rl
}, nl = J.forwardRef(({
  label: e,
  semi: t,
  checked: r,
  defaultChecked: n,
  disabled: o,
  className: i,
  error: s,
  variant: a = "Body2",
  onChange: c,
  m: u,
  my: d,
  mb: m,
  mx: v,
  mt: h,
  mr: b,
  ml: g,
  ariaLabel: y,
  ..._
}, E) => {
  const C = zt(), [f, w] = X(!!n || !!r), x = U(null), S = `ui-checkbox-label-${C}`, R = `ui-checkbox-input-${C}`, A = ve((j) => {
    w(j.target.checked), c == null || c(j);
  }, [c]);
  return K(() => {
    typeof r < "u" && w(r);
  }, [r]), /* @__PURE__ */ l.jsxs(
    M,
    {
      positionRoot: !0,
      className: N(tt.formCheckbox, i, {
        [tt.formCheckboxDisabled]: o,
        [tt.formCheckboxChecked]: f,
        [tt.formCheckboxSemi]: t,
        [tt.formCheckboxInvalid]: s
      }),
      flexType: "inline",
      flexDirection: "column",
      m: u,
      ml: g,
      mr: b,
      mt: h,
      mx: v,
      mb: m,
      my: d,
      children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            className: tt.formCheckboxInput,
            type: "checkbox",
            id: R,
            ref: qe([x, E]),
            onChange: A,
            defaultChecked: n,
            checked: r,
            disabled: o,
            "aria-invalid": !!s,
            "aria-labelledby": S,
            "aria-errormessage": `error-message-${e}`,
            ..._
          }
        ),
        /* @__PURE__ */ l.jsxs(
          re,
          {
            id: S,
            className: tt.formCheckboxLabel,
            color: o ? "Grey400" : void 0,
            variant: a,
            tag: "label",
            pl: e ? 7 : void 0,
            htmlFor: R,
            ariaLabel: y,
            children: [
              /* @__PURE__ */ l.jsxs(
                M,
                {
                  tag: "span",
                  size: 5,
                  flexType: "block",
                  alignItems: "center",
                  justifyContent: "center",
                  className: tt.formCheckboxCheck,
                  children: [
                    t && /* @__PURE__ */ l.jsx(M, { tag: "span", className: tt.semiCheck }),
                    !t && /* @__PURE__ */ l.jsx(
                      Te,
                      {
                        size: 3,
                        iconId: "check",
                        className: N(tt.checkIcon, {
                          [tt.checkIconChecked]: f
                        })
                      }
                    )
                  ]
                }
              ),
              e
            ]
          }
        ),
        s && /* @__PURE__ */ l.jsx(re, { id: `error-message-${e}`, variant: "Microcopy", color: "ErrorRed", my: 1, children: s })
      ]
    }
  );
});
nl.displayName = "FormCheckbox";
const ol = "u6xYEjpl", il = "u-0FlLZf", sl = "ue93UR0O", al = "ufpHzZu7", cl = "uL8lv9YL", ll = "u-n-a3q4", ul = "uupFuSb0", dl = "uOM-yYh7", fl = "uG21mRly", bt = {
  radioContainer: ol,
  input: il,
  label: sl,
  check: al,
  checkInvalid: cl,
  checkDisabled: ll,
  innerCircle: ul,
  innerCircleChecked: dl,
  innerCircleInvalid: fl
}, pl = le(({
  label: e,
  checked: t,
  defaultChecked: r,
  value: n,
  name: o,
  className: i,
  error: s,
  disabled: a,
  variant: c = "Body2",
  onChange: u,
  m: d,
  ml: m,
  mr: v,
  mt: h,
  mx: b,
  mb: g,
  my: y,
  ..._
}, E) => {
  const C = zt(), f = `ui-radio-label-${C}`, w = `ui-radio-input-${C}`, [x, S] = X(!!r || !!t), R = U(null), A = ve((j) => {
    S(j.target.checked), u == null || u(j);
  }, [u]);
  return K(() => {
    typeof t < "u" && S(t);
  }, [t]), /* @__PURE__ */ l.jsxs(
    M,
    {
      positionRoot: !0,
      className: N(i, bt.radioContainer),
      m: d,
      ml: m,
      mr: v,
      mt: h,
      mx: b,
      mb: g,
      my: y,
      flexType: "inline",
      flexDirection: "column",
      role: "radio",
      "aria-checked": x,
      "aria-labelledby": f,
      children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            className: bt.input,
            type: "radio",
            id: w,
            "aria-invalid": !!s,
            "aria-errormessage": `error-message-${e}`,
            defaultChecked: r,
            checked: t,
            ref: qe([R, E]),
            name: o,
            value: n,
            onChange: A,
            disabled: a,
            ..._
          }
        ),
        /* @__PURE__ */ l.jsxs(
          re,
          {
            id: f,
            className: bt.label,
            variant: c,
            tag: "label",
            pl: 7,
            color: a ? "Grey400" : "Grey600",
            htmlFor: w,
            children: [
              /* @__PURE__ */ l.jsx(
                M,
                {
                  tag: "span",
                  flexType: "block",
                  alignItems: "center",
                  justifyContent: "center",
                  size: 5,
                  br: "50%",
                  className: N(bt.check, {
                    [bt.checkInvalid]: s,
                    [bt.checkDisabled]: a
                  }),
                  children: /* @__PURE__ */ l.jsx(
                    M,
                    {
                      tag: "span",
                      className: N(bt.innerCircle, {
                        [bt.innerCircleChecked]: x,
                        [bt.innerCircleInvalid]: s
                      }),
                      size: 3,
                      br: "50%"
                    }
                  )
                }
              ),
              e
            ]
          }
        ),
        s && /* @__PURE__ */ l.jsx(re, { id: `error-message-${e}`, variant: "Microcopy", color: "ErrorRed", my: 1, children: s })
      ]
    }
  );
});
pl.displayName = "FormRadio";
var Rn, Bo;
function ml() {
  if (Bo) return Rn;
  Bo = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, o, i, s) {
    for (var a = -1, c = t(e((o - n) / (i || 1)), 0), u = Array(c); c--; )
      u[s ? c : ++a] = n, n += i;
    return u;
  }
  return Rn = r, Rn;
}
var Tn, Lo;
function hl() {
  if (Lo) return Tn;
  Lo = 1;
  var e = Fs(), t = Ms(), r = zs(), n = Hs();
  function o(i, s, a) {
    if (!n(a))
      return !1;
    var c = typeof s;
    return (c == "number" ? t(a) && r(s, a.length) : c == "string" && s in a) ? e(a[s], i) : !1;
  }
  return Tn = o, Tn;
}
var An, Po;
function vl() {
  if (Po) return An;
  Po = 1;
  var e = Gs(), t = 1 / 0, r = 17976931348623157e292;
  function n(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = e(o), o === t || o === -t) {
      var i = o < 0 ? -1 : 1;
      return i * r;
    }
    return o === o ? o : 0;
  }
  return An = n, An;
}
var $n, Wo;
function gl() {
  if (Wo) return $n;
  Wo = 1;
  var e = ml(), t = hl(), r = vl();
  function n(o) {
    return function(i, s, a) {
      return a && typeof a != "number" && t(i, s, a) && (s = a = void 0), i = r(i), s === void 0 ? (s = i, i = 0) : s = r(s), a = a === void 0 ? i < s ? 1 : -1 : r(a), e(i, s, a, o);
    };
  }
  return $n = n, $n;
}
var In, Fo;
function bl() {
  if (Fo) return In;
  Fo = 1;
  var e = gl(), t = e();
  return In = t, In;
}
var yl = bl();
const xl = /* @__PURE__ */ Vs(yl), wl = "uK2mrzHb", _l = "uEubYIR1", jl = "u5-uTV8O", kl = "u-sNZrta", Nl = "u9SzZaNg", Cl = "uSbgVTbf", El = "ulWOU6ls", Dt = {
  select: wl,
  selectHasValue: _l,
  selectInvalid: jl,
  icon: kl,
  label: Nl,
  labelInvalid: Cl,
  labelHasValue: El
}, Un = J.forwardRef(({
  label: e,
  options: t,
  error: r,
  disabled: n,
  width: o,
  className: i,
  defaultValue: s,
  value: a,
  m: c,
  my: u,
  mb: d,
  mx: m,
  mt: v,
  mr: h,
  ml: b,
  onChange: g,
  ...y
}, _) => {
  const E = `form-select-${zt()}`, C = U(null), [f, w] = X(!!s || !!a), x = ve((S) => {
    w(!!S.target.value), g == null || g(S);
  }, [g]);
  return K(() => {
    typeof a < "u" && w(!!a);
  }, [a]), /* @__PURE__ */ l.jsxs(
    M,
    {
      positionRoot: !0,
      className: i,
      m: c,
      my: u,
      mb: d,
      mx: m,
      mt: v,
      mr: h,
      ml: b,
      width: o,
      children: [
        /* @__PURE__ */ l.jsx(
          "select",
          {
            id: E,
            className: N(
              Dt.select,
              Nr["hbd-typography--body1"],
              {
                [Dt.selectInvalid]: !!r,
                [Dt.selectHasValue]: f
              }
            ),
            "aria-invalid": !!r,
            "aria-errormessage": `error-message-${e}`,
            disabled: n,
            onChange: x,
            defaultValue: s,
            value: a,
            ref: qe([C, _]),
            ...y,
            children: t.map((S) => /* @__PURE__ */ l.jsx(
              "option",
              {
                hidden: S.hidden,
                value: S.value,
                disabled: S.disabled,
                className: Nr["hbd-typography--body1"],
                children: S.label
              },
              `${S.label}-${S.value}`
            ))
          }
        ),
        /* @__PURE__ */ l.jsx(
          Te,
          {
            iconId: "angle-down",
            className: Dt.icon,
            color: r ? "ErrorRed" : "Grey600"
          }
        ),
        !!e && /* @__PURE__ */ l.jsx(
          re,
          {
            className: N(Dt.label, {
              [Dt.labelInvalid]: !!r,
              [Dt.labelHasValue]: f
            }),
            variant: f ? "Body2" : "Body1",
            tag: "label",
            htmlFor: E,
            px: 1,
            children: e
          }
        ),
        !!r && /* @__PURE__ */ l.jsx(re, { id: `error-message-${e}`, variant: "Microcopy", color: "ErrorRed", my: 1, children: r })
      ]
    }
  );
});
Un.displayName = "FormSelect";
const Mo = {
  "hbd-form-range-dropdown__min-value": "u8lFTmxx",
  "hbd-form-range-dropdown__max-value": "uvjnqY5I"
}, Bf = ({
  label: e,
  fromPlaceholder: t,
  toPlaceholder: r,
  minValue: n,
  maxValue: o,
  step: i = (o - n) / 10,
  selectedMinValue: s,
  selectedMaxValue: a,
  prefixUnit: c = "",
  suffixUnit: u = "",
  onChangeListener: d,
  minValueLabel: m,
  maxValueLabel: v,
  showMinSlider: h = !0,
  showMaxSlider: b = !0,
  labelFormatter: g
}) => {
  var x, S, R, A;
  const y = t && r, _ = (j) => {
    const L = +j.target.value;
    d && d({
      ...j,
      selectedMinValue: L,
      selectedMaxValue: a
    });
  }, E = (j) => {
    const L = +j.target.value;
    d && d({
      ...j,
      selectedMinValue: s,
      selectedMaxValue: L
    });
  }, C = ve((j, L, G) => xl(j, L, G).map(($) => {
    const T = parseFloat($.toFixed(2));
    return {
      label: (c || "") + ((g == null ? void 0 : g(T)) ?? T) + (u || ""),
      value: T
    };
  }), [c, u, g]), f = ir(() => {
    const j = [];
    return y && j.unshift({
      label: t,
      value: void 0,
      hidden: !0
    }), [
      ...j,
      ...C(n, a ?? o, i)
    ];
  }, [y, C, n, a, o, i, t]), w = ir(() => {
    const j = [];
    return y && j.unshift({
      label: r,
      value: void 0,
      hidden: !0
    }), [
      ...j,
      ...C(o, s || n, i * -1)
    ];
  }, [y, C, o, s, n, i, r]);
  return /* @__PURE__ */ l.jsxs(M, { flexDirection: "column", gap: 3, children: [
    /* @__PURE__ */ l.jsx(re, { tag: "p", variant: "Body2", children: e }),
    /* @__PURE__ */ l.jsxs(es, { children: [
      h && /* @__PURE__ */ l.jsx(Yn, { span: b ? 6 : 12, children: /* @__PURE__ */ l.jsx("div", { className: N({ [Mo["hbd-form-range-dropdown__min-value"]]: b }), children: /* @__PURE__ */ l.jsx(
        Un,
        {
          label: m ?? "",
          value: s !== f[0].value ? s == null ? void 0 : s.toString() : (S = (x = f[0]) == null ? void 0 : x.value) == null ? void 0 : S.toString(),
          options: f,
          onChange: _
        }
      ) }) }),
      b && /* @__PURE__ */ l.jsx(Yn, { span: h ? 6 : 12, children: /* @__PURE__ */ l.jsx("div", { className: N({ [Mo["hbd-form-range-dropdown__max-value"]]: h }), children: /* @__PURE__ */ l.jsx(
        Un,
        {
          label: v ?? "",
          value: a !== w[0].value ? a == null ? void 0 : a.toString() : (A = (R = w[0]) == null ? void 0 : R.value) == null ? void 0 : A.toString(),
          options: w,
          onChange: E
        }
      ) }) })
    ] })
  ] });
}, rt = {
  "hbd-form-range-slider": "uHTrjIzL",
  "hbd-form-range-slider__group": "ulOm6Ny-",
  "hbd-form-range-slider__group-with-label": "uakWFWE8",
  "hbd-form-range-slider__track-labels": "uwu2A6qy",
  "hbd-form-range-slider__track-label--hidden": "ubjnYzS7",
  "hbd-form-range-slider__thumb-label-min": "u3rAQNrm",
  "hbd-form-range-slider__thumb-label-max": "u0c5Vtvi",
  "hbd-form-range-slider__input": "uvPhuX71",
  "sr-only": "ujukihxV"
}, Lf = ({
  id: e,
  label: t,
  minValue: r,
  maxValue: n,
  step: o = parseFloat(((n - r) / 10).toFixed(4)),
  selectedMinValue: i,
  selectedMaxValue: s,
  minValueLabel: a,
  maxValueLabel: c,
  onChangeListener: u,
  defaultMinMaxLabels: d,
  hideMinRange: m = !1,
  hideMaxRange: v = !1,
  ariaLabels: h
}) => {
  const [b, g] = X(i || r), [y, _] = X(s || n), E = dn(), C = (b - r) * 100 / (n - r), f = (y - r) * 100 / (n - r);
  K(() => {
    g(i || r);
  }, [i, r]), K(() => {
    _(s || n);
  }, [s, n]), K(() => {
    E || u == null || u({
      selectedMinValue: b,
      selectedMaxValue: y
    });
  }, [b, y, E, u]);
  const w = ($) => {
    let T = +$.target.value;
    T >= y && (T = (y || n) - o), g(T);
  }, x = ($) => {
    let T = +$.target.value;
    T <= b && (T = (b || r) + o), _(T);
  }, S = {
    "--background-from": `${C}%`,
    "--background-to": `${f}%`
  }, R = {
    "--left-thumb-label-left": d ? `${C}%` : "0%",
    "--left-thumb-label-transform": d ? `${-(C * 1.25)}%` : "0%",
    "--right-thumb-label-right": d ? `${Math.abs(f - 100)}%` : "0%",
    "--right-thumb-label-transform": d ? `${Math.abs(f - 100) * 1.25}%` : "0%"
  }, A = `formRangeSliderGroupId-${e}`, j = `minRangeInput-${e ?? ""}`, L = `maxRangeInput-${e ?? ""}`, G = ir(() => h != null && h.ariaHiddenGroupDescription ? h.ariaHiddenGroupDescription.replace("{minValue}", `${a}`).replace("{maxValue}", `${c}`) : `Range selection between ${a} and ${c}`, [h, a, c]);
  return /* @__PURE__ */ l.jsxs("div", { className: rt["hbd-form-range-slider"], role: "group", "aria-labelledby": A, children: [
    /* @__PURE__ */ l.jsx(re, { tag: "p", variant: "Body1", children: t }),
    /* @__PURE__ */ l.jsx("div", { id: A, className: rt["sr-only"], children: G }),
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: N(rt["hbd-form-range-slider__group"], { [rt["hbd-form-range-slider__group-with-label"]]: !!t }),
        style: S,
        children: [
          !!d && /* @__PURE__ */ l.jsxs("div", { className: rt["hbd-form-range-slider__track-labels"], children: [
            /* @__PURE__ */ l.jsx(re, { tag: "span", variant: "Microcopy", className: N({ [rt["hbd-form-range-slider__track-label--hidden"]]: b === r }), children: d.min }),
            /* @__PURE__ */ l.jsx(re, { tag: "span", variant: "Microcopy", className: N({ [rt["hbd-form-range-slider__track-label--hidden"]]: y === n }), children: d.max })
          ] }),
          /* @__PURE__ */ l.jsx(
            "label",
            {
              className: rt["hbd-form-range-slider__thumb-label-min"],
              style: R,
              htmlFor: j,
              children: /* @__PURE__ */ l.jsx(re, { tag: "span", variant: "Microcopy", children: a })
            }
          ),
          !m && /* @__PURE__ */ l.jsx(
            "input",
            {
              onChange: w,
              className: rt["hbd-form-range-slider__input"],
              value: b,
              min: r,
              max: n,
              step: o,
              type: "range",
              id: j,
              "aria-valuemin": r,
              "aria-valuemax": n,
              "aria-valuenow": b,
              "aria-valuetext": (h == null ? void 0 : h.ariaMinValueText) ?? "Minimum"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "label",
            {
              className: rt["hbd-form-range-slider__thumb-label-max"],
              style: R,
              htmlFor: L,
              children: /* @__PURE__ */ l.jsx(re, { tag: "span", variant: "Microcopy", children: c })
            }
          ),
          !v && /* @__PURE__ */ l.jsx(
            "input",
            {
              onChange: x,
              className: rt["hbd-form-range-slider__input"],
              value: y,
              min: r,
              max: n,
              step: o,
              type: "range",
              id: L,
              "aria-valuemin": r,
              "aria-valuemax": n,
              "aria-valuenow": y,
              "aria-valuetext": (h == null ? void 0 : h.ariaMaxValueText) ?? "Maximum"
            }
          )
        ]
      }
    )
  ] });
}, Sl = "u5gCFn26", Ol = "upZxxZm7", Rl = "uMTltkUX", Tl = "uAt6pGiy", Jt = {
  formSlider: Sl,
  formSlider__tooltip: Ol,
  "formSlider__tooltip--left": "uuv99gd6",
  "formSlider__tooltip--right": "uoPnuBLS",
  formSlider__thumb: Rl,
  formSlider__input: Tl
}, Pf = ({
  min: e,
  max: t,
  step: r,
  value: n,
  onChange: o,
  formatTooltip: i = (d) => String(d),
  className: s,
  icon: a,
  ariaLabelledBy: c,
  ariaLabel: u
}) => {
  const d = U(null), m = (_) => {
    o(Number(_.target.value));
  }, v = (n - e) / (t - e) * 100, b = v <= 1 ? "left" : v >= 99 ? "right" : "center", g = b === "center" ? `calc(${v}% + ${24 - v * 0.48}px)` : `${v}%`, y = `calc(${v}% + ${24 - v * 0.48}px + ${v > 90 ? (v - 90) * 0.2 : 0}px)`;
  return /* @__PURE__ */ l.jsxs(M, { className: N(Jt.formSlider, s), children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: N(Jt.formSlider__tooltip, {
          [Jt["formSlider__tooltip--left"]]: b === "left",
          [Jt["formSlider__tooltip--right"]]: b === "right"
        }),
        style: { left: g },
        children: /* @__PURE__ */ l.jsx(re, { variant: "Body1Medium", color: "Primary", children: i(n) })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        ref: d,
        type: "range",
        min: e,
        max: t,
        step: r,
        value: n,
        onChange: m,
        className: Jt.formSlider__input,
        "aria-valuetext": i(n),
        "aria-labelledby": c,
        "aria-label": u
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: Jt.formSlider__thumb,
        style: { left: y },
        children: /* @__PURE__ */ l.jsx(Te, { iconId: a, size: 5 })
      }
    )
  ] });
}, Le = {
  "ui-form-text": "uWeyNPJi",
  "ui-form-text__input": "uQo8yJFP",
  "ui-form-text--focus": "uhZ1DNYj",
  "ui-form-text__label": "uAxhpnyr",
  "ui-form-text--has-value": "uIhTxyUT",
  "ui-form-text--invalid": "u85GbwWF",
  "ui-form-text__input_withIcon": "uKyr9JOx",
  "ui-form-text__icon": "uwd7ppyx",
  "ui-form-text--textarea": "uat6u6Xg"
}, Al = J.forwardRef(({
  type: e = "text",
  label: t,
  error: r,
  className: n,
  iconId: o,
  disabled: i,
  width: s,
  defaultValue: a,
  value: c,
  onFocus: u,
  onBlur: d,
  onChange: m,
  m: v,
  mb: h,
  ml: b,
  mr: g,
  mt: y,
  mx: _,
  my: E,
  ...C
}, f) => {
  const w = U(null), [x, S] = X(!1), [R, A] = X(!!a || !!c), j = `form-text-${zt()}`, L = ve((T) => {
    S(!1), d == null || d(T);
  }, [d]), G = ve((T) => {
    S(!0), u == null || u(T);
  }, [u]), $ = ve((T) => {
    A(T.target.value.length > 0), m == null || m(T);
  }, [m]);
  return K(() => {
    typeof c < "u" && A(!!c);
  }, [c]), /* @__PURE__ */ l.jsxs(
    M,
    {
      className: N(n, Le["ui-form-text"], {
        [Le["ui-form-text--invalid"]]: r,
        [Le["ui-form-text--focus"]]: x,
        [Le["ui-form-text--has-value"]]: R
      }),
      m: v,
      mb: h,
      ml: b,
      mr: g,
      mt: y,
      mx: _,
      my: E,
      width: s,
      children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            className: N(Le["ui-form-text__input"], {
              [Le["ui-form-text__input_withIcon"]]: o
            }),
            ref: qe([w, f]),
            id: j,
            defaultValue: a,
            value: c,
            "aria-invalid": !!r,
            "aria-errormessage": `error-message-${t}`,
            disabled: i,
            onFocus: G,
            onBlur: L,
            onChange: $,
            type: e,
            ...C
          }
        ),
        /* @__PURE__ */ l.jsx(
          re,
          {
            className: Le["ui-form-text__label"],
            variant: x || R ? "Body2" : "Body1",
            tag: "label",
            color: "Grey500",
            htmlFor: j,
            children: t
          }
        ),
        o && /* @__PURE__ */ l.jsx(Te, { className: Le["ui-form-text__icon"], iconId: o, size: 7 }),
        r && /* @__PURE__ */ l.jsx(re, { id: `error-message-${t}`, variant: "Microcopy", color: "ErrorRed", my: 1, children: r })
      ]
    }
  );
});
Al.displayName = "FormText";
const $l = J.forwardRef(({
  rows: e = 3,
  label: t,
  error: r,
  onFocus: n,
  m: o,
  ml: i,
  mr: s,
  mt: a,
  mx: c,
  mb: u,
  my: d,
  ...m
}, v) => {
  const h = Ne({
    m: o,
    ml: i,
    mr: s,
    mt: a,
    mx: c,
    mb: u,
    my: d
  }), b = U(null), [g, y] = X(!1), [_, E] = X(!1);
  K(() => {
    var w;
    E(!!((w = b == null ? void 0 : b.current) != null && w.value));
  }, [b == null ? void 0 : b.current]);
  const C = N(
    Le["ui-form-text"],
    Le["ui-form-text--textarea"],
    {
      [Le["ui-form-text--invalid"]]: r,
      [Le["ui-form-text--focus"]]: g,
      [Le["ui-form-text--has-value"]]: _
    },
    h.className
  ), f = `form-text-area-${zt()}`;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: C,
      style: h.style,
      children: [
        /* @__PURE__ */ l.jsx(
          "textarea",
          {
            onFocus: (w) => {
              y(!0), n == null || n(w);
            },
            onBlur: () => y(!1),
            onKeyUp: (w) => E(!!w.target.value),
            className: Le["ui-form-text__input"],
            ref: qe([b, v]),
            id: f,
            "aria-invalid": !!r,
            rows: e,
            "aria-errormessage": `error-message-${t}`,
            ...m
          }
        ),
        /* @__PURE__ */ l.jsx(
          re,
          {
            className: Le["ui-form-text__label"],
            variant: g || _ ? "Body2" : "Body1",
            tag: "label",
            color: "Grey500",
            htmlFor: f,
            children: t
          }
        ),
        r && /* @__PURE__ */ l.jsx(re, { id: `error-message-${t}`, variant: "Microcopy", color: "ErrorRed", my: 1, children: r })
      ]
    }
  );
});
$l.displayName = "FormTextArea";
const Zt = {
  "ui-form-toggle": "u6Y8g7IG",
  "ui-form-toggle__input": "uMxXA-RC",
  "ui-form-toggle__toggle": "usEei8Cr",
  "ui-form-toggle__label": "uB-zQwRy",
  "ui-form-toggle__label--sr-only": "uZlbRtgE",
  "ui-form-toggle__disabled": "u2uFyPiG"
}, Il = J.forwardRef(({
  label: e,
  checked: t,
  disabled: r,
  "aria-label": n,
  m: o,
  my: i,
  mb: s,
  mx: a,
  mt: c,
  mr: u,
  ml: d,
  onChange: m,
  ...v
}, h) => {
  const b = `form-toggle-${zt()}`, [g, y] = X(!1), _ = () => {
    y(!g), m && m();
  };
  return K(() => {
    y(!!t);
  }, [t]), /* @__PURE__ */ l.jsxs(
    M,
    {
      className: N(Zt["ui-form-toggle"], {
        [Zt["ui-form-toggle__disabled"]]: r
      }),
      m: o,
      ml: d,
      mr: u,
      mt: c,
      mx: a,
      mb: s,
      my: i,
      ...Ce(v),
      ...dr(v),
      children: [
        !e && n && /* @__PURE__ */ l.jsx(
          re,
          {
            tag: "label",
            className: Zt["ui-form-toggle__label--sr-only"],
            htmlFor: b,
            children: n
          }
        ),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "checkbox",
            id: b,
            className: Zt["ui-form-toggle__input"],
            ref: h,
            checked: g,
            disabled: r,
            onChange: _,
            ...v
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            "aria-checked": g,
            disabled: r,
            "aria-label": n,
            onClick: _,
            className: Zt["ui-form-toggle__toggle"],
            type: "button",
            role: "checkbox"
          }
        ),
        !!e && /* @__PURE__ */ l.jsx(re, { tag: "label", pl: 3, className: Zt["ui-form-toggle__label"], htmlFor: b, children: e })
      ]
    }
  );
});
Il.displayName = "FormToggle";
const Dl = "uGYfG9O0", Bl = {
  grid: Dl
}, Dn = {
  "ui-grid--sm-columnGap": "uxBlCw0h",
  "ui-grid--sm-rowGap": "uvqmTvAl",
  "ui-grid--md-columnGap": "uUtsv1Xp",
  "ui-grid--md-rowGap": "uOZYgZBx",
  "ui-grid--lg-columnGap": "uwUeCt3q",
  "ui-grid--lg-rowGap": "uuehCmHS"
}, Zi = [
  "columnGap",
  "rowGap"
], Ll = (e) => N(Zi.map((t) => {
  const r = xt(e[t]);
  return N({
    [Dn[`ui-grid--sm-${t}`]]: typeof r[0] < "u",
    [Dn[`ui-grid--md-${t}`]]: typeof r[1] < "u",
    [Dn[`ui-grid--lg-${t}`]]: typeof r[2] < "u"
  });
})), Pl = (e) => Object.fromEntries(
  Zi.reduce((t, r) => {
    const n = xt(e[r]);
    for (let o = 0; o < n.length; o += 1) {
      const i = n[o];
      typeof i == "number" && t.push([`--ui-${Xs[o]}-${r}`, i]);
    }
    return t;
  }, [])
), Wl = (e) => ({
  className: Ll(e),
  style: Pl(e)
}), es = le(({
  id: e,
  className: t,
  gap: r,
  children: n,
  ...o
}, i) => {
  const s = Ne(o), a = pt(o), c = it(o), u = Wl(o), d = Ar({ gap: r });
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      id: e,
      ref: i,
      className: N(t, Bl.grid, s.className, a.className, c.className, u.className, d.className),
      style: {
        ...s.style,
        ...a.style,
        ...c.style,
        ...u.style,
        ...d.style
      },
      ...Ce(o),
      children: n
    }
  );
});
es.displayName = "Grid";
const Fl = "uabbUp4F", Ml = "uU4YP9p-", zl = "urP0rKzH", Bn = {
  item: Fl,
  mediumSpan: Ml,
  largeSpan: zl
}, Yn = le(({
  id: e,
  tag: t,
  span: r,
  children: n,
  alignContent: o,
  alignItems: i,
  justifyContent: s,
  ...a
}, c) => {
  const u = xt(r), d = Ne(a), m = pt(a), v = Ht(a), h = Ar({ alignContent: o, alignItems: i, justifyContent: s });
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: c,
      id: e,
      className: N(Bn.item, d.className, m.className, v.className, h.className, {
        [Bn.mediumSpan]: typeof u[1] < "u",
        [Bn.largeSpan]: typeof u[2] < "u"
      }),
      style: {
        "--ui-sm-span": u[0],
        "--ui-md-span": u[1],
        "--ui-lg-span": u[2],
        ...d.style,
        ...m.style,
        ...v.style
      },
      ...Ce(a),
      children: n
    }
  );
});
Yn.displayName = "GridItem";
const Hl = "u31YK6Qd", Gl = {
  iconContainer: Hl
}, Wf = ({
  children: e,
  className: t,
  size: r = 4,
  ...n
}) => /* @__PURE__ */ l.jsx(
  M,
  {
    positionRoot: !0,
    tag: "span",
    flexType: "inline",
    className: t,
    size: r,
    ...dr(n),
    ...Ce(n),
    children: J.Children.map(e, (o, i) => {
      if (J.isValidElement(o))
        return /* @__PURE__ */ l.jsx(
          M,
          {
            positionRoot: !0,
            tag: "span",
            className: Gl.iconContainer,
            size: "full",
            alignContent: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            children: /* @__PURE__ */ l.jsx(o.type, { ...o.props, size: o.props.size || r })
          },
          i
        );
    })
  }
), Vl = (e) => {
  const [t, r] = X(!1), n = U(null);
  return K(() => {
    const o = new IntersectionObserver(([s]) => {
      r(s.isIntersecting);
    }, e), i = n.current;
    return i && o.observe(i), () => {
      i && o.unobserve(i);
    };
  }, [e, e.threshold]), { targetRef: n, isIntersecting: t };
}, ql = (e) => {
  switch (e) {
    case "slow":
      return 700;
    case "normal":
      return 350;
    case "fast":
      return 200;
    default:
      return 700;
  }
}, Ul = ({
  children: e,
  in: t,
  delay: r = 500,
  animationToken: n = "enter",
  duration: o,
  animateOnlyOnce: i = !1,
  opacityStart: s = 0
}) => {
  const c = (Array.isArray(n) ? n : [n]).map((h) => `motion-${h}`), u = ql(o), [d, m] = J.useState(!1), v = {
    ...e.props.style,
    "--motion-duration": `${u}ms`,
    "--motion-delay": `${r ?? 0}ms`,
    "--motion-opacity-start": s
  };
  return K(() => {
    i ? t && m(!0) : m(t);
  }, [i, t]), /* @__PURE__ */ l.jsx(
    fn,
    {
      in: d,
      timeout: u,
      classNames: "motion-",
      children: J.createElement("div", { className: N(c), style: v }, e)
    }
  );
}, Ff = ({
  children: e,
  observerOptions: t = { threshold: 0.5 },
  duration: r,
  animateOnlyOnce: n,
  animationToken: o,
  opacityStart: i,
  delay: s,
  ...a
}) => {
  const { targetRef: c, isIntersecting: u } = Vl(t);
  return /* @__PURE__ */ l.jsx(M, { ...a, ref: c, children: /* @__PURE__ */ l.jsx(
    Ul,
    {
      in: u,
      delay: s,
      duration: r,
      animationToken: o,
      animateOnlyOnce: n,
      opacityStart: i,
      children: e
    }
  ) });
}, or = {
  "hbd-inline-link": "uB8USdFH",
  "hbd-inline-link--micro": "uNQ63YCs",
  "hbd-inline-link--inverted": "uPZLL-Ed"
}, ts = ({
  className: e,
  text: t,
  variant: r = "Body1",
  inverted: n,
  href: o,
  target: i,
  onClick: s,
  rel: a,
  m: c,
  mt: u,
  mr: d,
  mb: m,
  ml: v,
  mx: h,
  my: b,
  ...g
}) => {
  const y = Ne({
    m: c,
    mt: u,
    mr: d,
    mb: m,
    ml: v,
    mx: h,
    my: b
  });
  return /* @__PURE__ */ l.jsx(
    "a",
    {
      onClick: s,
      href: o,
      target: i,
      rel: a,
      tabIndex: 0,
      className: N(or["hbd-inline-link"], {
        [or["hbd-inline-link--micro"]]: r === "Microcopy",
        [or["hbd-inline-link--inverted"]]: n
      }, y.className, e),
      style: y.style,
      "aria-controls": g["aria-controls"],
      "aria-hidden": g["aria-hidden"],
      "aria-label": g["aria-label"],
      "aria-labelledby": g["aria-labelledby"],
      "aria-expanded": g["aria-expanded"],
      ..._e(ts.displayName),
      ...Ce(g),
      children: /* @__PURE__ */ l.jsx(
        re,
        {
          variant: r,
          tag: "span",
          children: t
        }
      )
    }
  );
};
ts.displayName = "InlineLink";
const rs = ({
  className: e,
  text: t,
  variant: r = "Body1",
  inverted: n,
  onClick: o,
  m: i,
  mt: s,
  mr: a,
  mb: c,
  ml: u,
  mx: d,
  my: m,
  ...v
}) => {
  const h = Ne({
    m: i,
    mt: s,
    mr: a,
    mb: c,
    ml: u,
    mx: d,
    my: m
  });
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      type: "button",
      className: N(or["hbd-inline-link"], {
        [or["hbd-inline-link--micro"]]: r === "Microcopy",
        [or["hbd-inline-link--inverted"]]: n
      }, h.className, e),
      style: h.style,
      onClick: o,
      "aria-controls": v["aria-controls"],
      "aria-hidden": v["aria-hidden"],
      "aria-label": v["aria-label"],
      "aria-labelledby": v["aria-labelledby"],
      "aria-expanded": v["aria-expanded"],
      ..._e(rs.displayName),
      ...Ce(v),
      children: /* @__PURE__ */ l.jsx(
        re,
        {
          variant: r,
          tag: "span",
          children: t
        }
      )
    }
  );
};
rs.displayName = "InlineLinkButton";
const zo = {
  "hbd-link": "uZHfHJIn",
  "hbd-link--underline": "uPRkGd3g"
}, ns = J.forwardRef(({
  id: e,
  text: t,
  title: r,
  className: n,
  children: o,
  href: i,
  target: s,
  rel: a,
  underline: c,
  tabIndex: u,
  onClick: d,
  onFocus: m,
  onBlur: v,
  ...h
}, b) => {
  const g = Ne(h), y = it(h), _ = Ht(h);
  return /* @__PURE__ */ l.jsxs(
    "a",
    {
      ref: b,
      id: e,
      href: i,
      target: s,
      rel: a || (s === "_blank" ? "noopener noreferrer" : void 0),
      title: r,
      className: N(
        zo["hbd-link"],
        {
          [zo["hbd-link--underline"]]: c
        },
        y.className,
        g.className,
        _.className,
        n
      ),
      style: {
        ...g.style,
        ..._.style,
        ...y.style
      },
      onClick: d,
      onFocus: m,
      onBlur: v,
      "aria-current": h["aria-current"],
      "aria-label": h["aria-label"],
      tabIndex: u,
      ..._e(ns.displayName),
      ...Ce(h),
      children: [
        o && /* @__PURE__ */ l.jsx(l.Fragment, { children: o }),
        !o && t && /* @__PURE__ */ l.jsx(l.Fragment, { children: t })
      ]
    }
  );
});
ns.displayName = "Link";
const os = J.createContext({
  active: !1
}), Ho = {
  "ui-dialog": "uahs-Gst",
  "ui-dialog--active": "ud-s8kIa"
}, Yl = ({
  children: e,
  className: t,
  backgroundColor: r = "White",
  ...n
}) => {
  const { active: o } = Tr(os), [i, s] = X(!1);
  K(() => {
    s(!!o);
  }, [o]);
  const a = (c) => {
    c.stopPropagation();
  };
  return /* @__PURE__ */ l.jsx(
    M,
    {
      ...n,
      flexGrow: 0,
      flexShrink: 0,
      backgroundColor: r,
      onClick: a,
      className: N(Ho["ui-dialog"], {
        [Ho["ui-dialog--active"]]: i
      }, t),
      children: /* @__PURE__ */ l.jsx(gn, { flexDirection: "column", minHeightZero: !0, children: e })
    }
  );
}, br = {
  "ui-drawer--sm-left": "u0tZ0-MN",
  "ui-drawer--sm-right": "uCaQnDGs",
  "ui-drawer--sm-top": "u64V8xqb",
  "ui-drawer--sm-bottom": "uPSSxHOl",
  "ui-drawer--md-left": "usTQ41qj",
  "ui-drawer--md-right": "ut26-I5f",
  "ui-drawer--md-top": "uUprp6OR",
  "ui-drawer--md-bottom": "uXCYCpj5",
  "ui-drawer--lg-left": "u--r8JUn",
  "ui-drawer--lg-right": "uq-tQ8vU",
  "ui-drawer--lg-top": "uAG-1q8c",
  "ui-drawer--lg-bottom": "uqJgNOeJ",
  "ui-drawer": "uxdnTDPk",
  "ui-drawer--active": "u-exdUZx"
}, Mf = ({
  active: e,
  anchor: t,
  children: r,
  className: n,
  ...o
}) => {
  const i = xt(t), [s, a] = X(!1);
  function c(u) {
    u.stopPropagation();
  }
  return K(() => {
    a(!0);
  }, []), /* @__PURE__ */ l.jsx(
    M,
    {
      ...o,
      backgroundColor: "White",
      className: N(br["ui-drawer"], {
        [br["ui-drawer--active"]]: e && s,
        [br[`ui-drawer--sm-${i[0]}`]]: i[0] !== void 0,
        [br[`ui-drawer--md-${i[1]}`]]: i[1] !== void 0,
        [br[`ui-drawer--lg-${i[2]}`]]: i[2] !== void 0
      }, n),
      onClick: c,
      children: /* @__PURE__ */ l.jsx(gn, { flexType: "block", flexDirection: "column", minHeightZero: !0, children: r })
    }
  );
}, Xl = () => {
  const [e, t] = X(!1);
  return K(() => {
    let r = 0;
    return e && (r = document.documentElement.scrollTop, document.documentElement.classList.toggle("hui-scroll-lock"), document.documentElement.style.top = `-${r}px`), () => {
      e && (document.documentElement.style.top = "", document.documentElement.classList.toggle("hui-scroll-lock"), document.documentElement.classList.toggle("hui-scroll-restore"), document.documentElement.scrollTop = r, setTimeout(() => {
        document.documentElement.classList.toggle("hui-scroll-restore");
      }, 0));
    };
  }, [e]), t;
}, kt = {
  "ui-modal": "uq6-Gizw",
  "ui-modal--enter": "uzosZQeW",
  "ui-modal--enter-done": "ukMF0vfe",
  "ui-modal--exit": "uIk5ZAzv",
  "ui-modal--enter-active": "u3KRoE8R",
  "ui-modal--exit-active": "uEpq6-Ct",
  "ui-modal--mask": "udGDvt95",
  "ui-modal--dialog": "uhnXC8eu"
}, Kl = 250, zf = ({
  children: e,
  active: t,
  closeable: r = !0,
  mask: n,
  backgroundColor: o,
  backgroundColorTint: i,
  pageScrollLock: s,
  onClosing: a,
  className: c,
  ariaLabelledBy: u,
  ariaBusy: d,
  preventScrollOnClose: m
}) => {
  const v = dn(), h = Xl(), b = U(), g = U(null);
  n && (o = "Black", i = 0.4), K(() => {
    const x = (S) => {
      t || (b.current = S.target);
    };
    return document.addEventListener("focusin", x), () => {
      document.removeEventListener("focusin", x);
    };
  }, [t]), K(() => {
    var x, S;
    t && ((S = (x = g.current) == null ? void 0 : x.querySelector("button, a[href], input, select, textarea")) == null || S.focus());
  }, [t]), K(() => {
    s && h(!!t);
  }, [t, s, h]), K(() => {
    if (!r)
      return;
    const x = (S) => {
      !r || !t || S.code === "Escape" && (a == null || a());
    };
    return document.addEventListener("keydown", x, { passive: !0 }), () => {
      document.removeEventListener("keydown", x);
    };
  }, [t, r, a]);
  const y = (x) => {
    x.preventDefault(), x.stopPropagation(), r && t && (a == null || a());
  };
  let _ = !1;
  const E = J.Children.map(e, (x) => J.isValidElement(x) ? (_ = x.type !== Yl, /* @__PURE__ */ l.jsx(x.type, { ...x.props, isDrawer: _, active: t })) : x), C = ir(() => ({
    active: t,
    onClosing: a
  }), [t, a]);
  if (process.env.SSR && v)
    return null;
  const f = /* @__PURE__ */ l.jsx(os.Provider, { value: C, children: /* @__PURE__ */ l.jsx(
    fn,
    {
      nodeRef: g,
      timeout: Kl,
      in: t,
      classNames: {
        enter: kt["ui-modal--enter"],
        enterActive: kt["ui-modal--enter-active"],
        enterDone: kt["ui-modal--enter-done"],
        exit: kt["ui-modal--exit"],
        exitActive: kt["ui-modal--exit-active"]
      },
      unmountOnExit: !0,
      appear: !0,
      onExited: () => {
        setTimeout(() => {
          var x;
          (x = b.current) == null || x.focus({ preventScroll: m });
        });
      },
      children: /* @__PURE__ */ l.jsx(
        M,
        {
          "aria-busy": d,
          "aria-labelledby": u,
          "aria-modal": "true",
          role: "dialog",
          ref: g,
          onClick: y,
          width: "full",
          flexDirection: "column",
          backgroundColor: o,
          backgroundColorTint: i,
          className: N(c, kt["ui-modal"], {
            [kt["ui-modal--mask"]]: !!o,
            [kt["ui-modal--dialog"]]: !_
          }),
          children: E
        }
      )
    }
  ) });
  let w = document.getElementById(kr.modalPortalTarget);
  return w || (w = document.createElement("div"), w.id = kr.modalPortalTarget, document.body.appendChild(w)), $r(f, w);
}, Ql = {
  "hui-overflow-container": "uGaFfQ4s",
  "hui-overflow-container__scrollbar--black": "u-sIHPLa",
  "hui-overflow-container__scrollbar--grey": "uo9OW--R",
  "hui-overflow-container--sm-direction-horizontal": "uPGMs4-N",
  "hui-overflow-container--sm-direction-vertical": "uWPRFVaF",
  "hui-overflow-container--sm-direction-none": "uH8m2cMf",
  "hui-overflow-container--sm-offset-0": "uemGGq7c",
  "hui-overflow-container--sm-offset-10": "uIg-hTmM",
  "hui-overflow-container--md-direction-horizontal": "uOx0O6Zn",
  "hui-overflow-container--md-direction-vertical": "ub5LZwzl",
  "hui-overflow-container--md-direction-none": "uXrgWYqt",
  "hui-overflow-container--md-offset-0": "upPKxP5i",
  "hui-overflow-container--md-offset-10": "ujuovjFZ",
  "hui-overflow-container--lg-direction-horizontal": "u1HkMO7I",
  "hui-overflow-container--lg-direction-vertical": "uzp3c2Rx",
  "hui-overflow-container--lg-direction-none": "u-iGK1Mv",
  "hui-overflow-container--lg-offset-0": "uonWh354",
  "hui-overflow-container--lg-offset-10": "uEPanQK6",
  "hui-overflow-wrapper": "uzwonL-u",
  "hui-overflow-wrapper--sm-direction-horizontal": "ucMWhcbJ",
  "hui-overflow-wrapper--sm-direction-vertical": "u5m-A9gv",
  "hui-overflow-wrapper--md-direction-horizontal": "uRI3syge",
  "hui-overflow-wrapper--md-direction-vertical": "uNzEWP0J",
  "hui-overflow-wrapper--lg-direction-horizontal": "u-Znym50",
  "hui-overflow-wrapper--lg-direction-vertical": "uwjMaRul",
  "hui-overflow-wrapper--fadeout-shadow-start": "uYPDHklv",
  "hui-overflow-wrapper--fadeout-shadow-both": "uTvNuJt3",
  "hui-overflow-wrapper--fadeout-shadow-end": "ufqThIj8",
  "hui-overflow-wrapper--fadeout-mask-start": "uBjqDP4m",
  "hui-overflow-wrapper--fadeout-mask-end": "u37V-SYi",
  "hui-overflow-wrapper--fadeout-mask-both": "u2snNVOD"
}, an = J.forwardRef(({
  wrapperSpacing: e,
  className: t,
  children: r,
  direction: n = "horizontal",
  fadeOut: o,
  overflowStart: i,
  overflowEnd: s,
  offset: a = 0,
  scrollTop: c,
  scrollLeft: u,
  onScroll: d,
  width: m,
  height: v,
  size: h,
  scrollbarColor: b = "black",
  ...g
}, y) => {
  const _ = Ne(g), E = it({ width: m, size: h, height: v }), C = xt(n), f = xt(a), w = U(null), [x, S] = X(!1), [R, A] = X(!1), j = i ?? x, L = s ?? R, { scrollHeight: G, scrollWidth: $ } = ro(w), T = qs(n);
  Ws(y, () => w.current);
  const D = ve(() => {
    if (!w.current)
      return;
    const q = w.current;
    T === "vertical" && (S(q.scrollTop > 0), A(
      q.scrollHeight >= q.clientHeight && q.scrollHeight - q.scrollTop !== q.clientHeight
    )), T === "horizontal" && (S(q.scrollLeft > 0), A(
      q.scrollWidth >= q.clientWidth && q.scrollWidth !== q.scrollLeft + q.clientWidth
    ));
  }, [T]);
  K(() => {
    const q = bi((z) => {
      o && D(), d == null || d(z);
    }, 16.666666666666668, { leading: !0 });
    if (o || d) {
      const z = w.current;
      return z == null || z.addEventListener("scroll", q, { passive: !0 }), () => {
        z == null || z.removeEventListener("scroll", q);
      };
    }
  }, [o, d, D]), K(() => {
    o && D();
  }, [o, G, $, D]), K(() => {
    w.current && (typeof u < "u" && (w.current.scrollLeft = u), typeof c < "u" && (w.current.scrollTop = c));
  }, [u, c]);
  const W = Ql;
  return /* @__PURE__ */ l.jsx(
    M,
    {
      flexType: "block",
      size: h,
      width: m,
      height: v,
      ...e,
      className: N(W["hui-overflow-wrapper"], {
        [W[`hui-overflow-wrapper--sm-direction-${C[0]}`]]: C[0],
        [W[`hui-overflow-wrapper--md-direction-${C[1]}`]]: C[1],
        [W[`hui-overflow-wrapper--lg-direction-${C[2]}`]]: C[2],
        [W[`hui-overflow-wrapper--fadeout-${o}-start`]]: o && j,
        [W[`hui-overflow-wrapper--fadeout-${o}-end`]]: o && L,
        [W[`hui-overflow-wrapper--fadeout-${o}-both`]]: o && j && L
      }, t),
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: w,
          className: N(
            W["hui-overflow-container"],
            _.className,
            E.className,
            {
              [W[`hui-overflow-container__scrollbar--${b}`]]: b,
              [W[`hui-overflow-container--sm-direction-${C[0]}`]]: C[0],
              [W[`hui-overflow-container--md-direction-${C[1]}`]]: C[1],
              [W[`hui-overflow-container--lg-direction-${C[2]}`]]: C[2],
              [W[`hui-overflow-container--sm-offset-${f[0]}`]]: f[0] !== void 0,
              [W[`hui-overflow-container--md-offset-${f[1]}`]]: f[1] !== void 0,
              [W[`hui-overflow-container--lg-offset-${f[2]}`]]: f[2] !== void 0
            }
          ),
          style: {
            ..._.style,
            ...E.style
          },
          children: r
        }
      )
    }
  );
});
an.displayName = "OverflowContainer";
const Jl = "uM1HCSwU", Zl = "u6FqHZtU", eu = "urdQj-QN", Ln = {
  allSegmentsDisabled: Jl,
  scrollerContainerSnap: Zl,
  scrollerStepsHidden: eu
}, tu = "uAAM-aRr", ru = "uPdqlSR9", nu = "uxHDOpLO", ou = "uSsEH84k", iu = "uQf-rYbt", su = "uIHn9jpz", au = "uztote3o", Bt = {
  scrollerButton: tu,
  prevIntersect: ru,
  prevInside: nu,
  nextIntersect: ou,
  nextInside: iu,
  hoverActivation: su,
  invalid: au
}, Go = ({
  direction: e,
  isValid: t,
  style: r,
  size: n,
  activation: o,
  onClick: i,
  offsetTop: s,
  ariaLabel: a
}) => {
  const c = U(null);
  return K(() => {
    if (!c.current || !s) return;
    const u = c.current.clientHeight / 4;
    c.current.style.top = `${s * 4 + u}px`;
  }, [c == null ? void 0 : c.current, s]), /* @__PURE__ */ l.jsx(
    Ft,
    {
      ref: c,
      className: N(Bt.scrollerButton, {
        [Bt.nextIntersect]: e === "next" && r === "intersect",
        [Bt.nextInside]: e === "next" && r === "inside",
        [Bt.prevIntersect]: e === "prev" && r === "intersect",
        [Bt.prevInside]: e === "prev" && r === "inside",
        [Bt.invalid]: !t,
        [Bt.hoverActivation]: o === "hover"
      }),
      size: n === "medium" ? "Medium" : "Big",
      iconId: e === "prev" ? "angle-left" : "angle-right",
      variant: "White",
      onClick: i,
      "aria-label": a
    }
  );
}, cu = le(({
  id: e,
  className: t,
  children: r,
  activeIndex: n,
  gap: o,
  buttonStyle: i = "intersect",
  buttonSize: s = "big",
  buttonActivation: a = "visible",
  segmentsPx: c = 0,
  m: u,
  mb: d,
  ml: m,
  mr: v,
  mt: h,
  mx: b,
  my: g,
  onActiveIndexChanged: y,
  onReachedStart: _,
  onReachedEnd: E,
  onScrollerButtonClicked: C,
  arrowButtonsOffset: f,
  ariaLabels: w,
  ariaLive: x = "polite",
  ...S
}, R) => {
  var fe, pe;
  const A = dn(), j = U(null), L = U(), G = U(), $ = U(0), T = U(/* @__PURE__ */ new Set()), D = `ui-scroller-${zt()}-${e || ""}`, [W, q] = X(!n), [z, ae] = X(!1), [ne, Pe] = X(!0), Se = Us(j), { innerWidth: Ae } = Ys(), $e = J.Children.toArray(r).every((H) => J.isValidElement(H) ? !!H.props.disableSegment : !0), ye = bi(() => {
    q((H) => {
      var ue;
      const Q = ((ue = j.current) == null ? void 0 : ue.scrollLeft) === 0;
      return !H && Q && (_ == null || _()), Q;
    }), ae((H) => {
      var ue, xe, me, oe, we, ge;
      const Q = Math.round((((ue = j.current) == null ? void 0 : ue.scrollLeft) || 0) + (((xe = j.current) == null ? void 0 : xe.clientWidth) || 0)) === ((me = j.current) == null ? void 0 : me.scrollWidth) || Math.round((((oe = j.current) == null ? void 0 : oe.scrollWidth) || 0) - (((we = j.current) == null ? void 0 : we.clientWidth) || 0)) === Math.abs(((ge = j.current) == null ? void 0 : ge.scrollLeft) || 0);
      return !H && Q && (E == null || E()), Q;
    });
  }, 1e3, { leading: !0, trailing: !0 }), be = ve((H, Q) => {
    var ge, We, He;
    const ue = (ge = j.current) == null ? void 0 : ge.children[H], xe = ue == null ? void 0 : ue.offsetLeft, me = ((We = j.current) == null ? void 0 : We.clientWidth) || 0, oe = ue == null ? void 0 : ue.clientWidth, we = Q && document.dir === "rtl" ? xe - me + oe : xe;
    (He = j.current) == null || He.scrollTo({
      behavior: "smooth",
      left: we
    });
  }, []), B = ve(() => {
    C == null || C("previous"), $.current > 0 && be($.current - 1);
  }, [be, C]), I = ve(() => {
    var H;
    C == null || C("next"), $.current < (((H = j.current) == null ? void 0 : H.children.length) || 0) && be($.current + 1);
  }, [be, C]), Z = ve((H) => {
    L.current = H;
  }, []);
  return K(() => {
    var H, Q;
    Pe((((H = j.current) == null ? void 0 : H.scrollWidth) || 0) <= (((Q = j.current) == null ? void 0 : Q.clientWidth) || 0));
  }, [
    (fe = j == null ? void 0 : j.current) == null ? void 0 : fe.scrollWidth,
    // use case: content is changed within the scroller
    (pe = j.current) == null ? void 0 : pe.clientWidth,
    // ^
    Se,
    // use case: scroller is initially hidden, ie in an accordion that is closed
    Ae
    // use case: window is resized
  ]), K(() => {
    typeof n > "u" || $.current !== n && be(n);
  }, [n]), K(() => {
    !(j != null && j.current) || !G || (G.current = new IntersectionObserver((H) => {
      window.requestAnimationFrame(() => {
        var ue;
        for (const xe of H) {
          const me = xe.target, oe = xe.intersectionRatio >= 0.5, we = new CustomEvent(
            "scrollerItemVisibilityChange",
            { detail: { visible: oe } }
          );
          xe.target.dispatchEvent(we);
          const ge = Array.prototype.indexOf.call(((ue = j.current) == null ? void 0 : ue.children) || [], me);
          if (ge < 0)
            return;
          oe ? T.current.add(ge) : T.current.delete(ge);
        }
        const Q = document.dir === "ltr" ? Math.min.apply(void 0, [...T.current]) : Math.max.apply(void 0, [...T.current]);
        Q !== $.current && Number.isFinite(Q) && ($.current = Q, y == null || y(Q));
      });
    }, {
      root: j.current,
      threshold: [0.5]
    }));
  }, [j, y]), K(() => {
    const H = j == null ? void 0 : j.current;
    return H == null || H.addEventListener("scroll", ye, { passive: !0 }), () => {
      H == null || H.removeEventListener("scroll", ye);
    };
  }, [ye, E, _]), K(() => {
    ye();
  }, [ye]), /* @__PURE__ */ l.jsxs(
    M,
    {
      id: e,
      ref: R,
      tag: "section",
      className: N("ui-scroller", t, { [Ln.allSegmentsDisabled]: $e }),
      "aria-label": S["aria-label"],
      "aria-roledescription": "carousel",
      positionRoot: !0,
      m: u,
      mb: d,
      ml: m,
      mr: v,
      mt: h,
      mx: b,
      my: g,
      ...Ce(S),
      children: [
        a !== "disabled" && /* @__PURE__ */ l.jsx(
          Go,
          {
            direction: "prev",
            onClick: B,
            isValid: !W,
            style: i,
            size: s,
            activation: a,
            offsetTop: f,
            ariaLabel: w.prevButton
          }
        ),
        /* @__PURE__ */ l.jsx(
          M,
          {
            id: D,
            ref: j,
            flexType: "block",
            className: N("ui-scroller-container", { [Ln.scrollerContainerSnap]: A }),
            gap: o,
            "aria-live": x,
            "aria-atomic": "true",
            children: J.Children.map(r, (H, Q) => {
              if (J.isValidElement(H))
                return /* @__PURE__ */ l.jsx(
                  H.type,
                  {
                    ...H.props,
                    observer: G.current,
                    stepButtonContainer: L,
                    gotoIndex: () => be(Q, !0),
                    index: Q,
                    buttonAriaLabel: w.segmentButton
                  },
                  `ScrollerItem_${Q}`
                );
            })
          }
        ),
        a !== "disabled" && /* @__PURE__ */ l.jsx(
          Go,
          {
            direction: "next",
            onClick: I,
            isValid: !z,
            style: i,
            size: s,
            activation: a,
            offsetTop: f,
            ariaLabel: w.nextButton
          }
        ),
        !$e && /* @__PURE__ */ l.jsx(
          M,
          {
            className: N("ui-scroller-buttons", { [Ln.scrollerStepsHidden]: ne }),
            ref: Z,
            justifyContent: "space-evenly",
            gap: 2,
            px: c,
            py: 0,
            "aria-controls": D
          }
        )
      ]
    }
  );
});
cu.displayName = "Scroller";
const lu = "uVOmxigj", uu = "uGZBxcIX", Vo = {
  itemButtonSegment: lu,
  itemButtonVisible: uu
}, du = ({
  stepButtonContainer: e,
  itemVisible: t,
  onClick: r,
  index: n,
  ariaLabel: o
}) => e != null && e.current ? $r(/* @__PURE__ */ l.jsx(
  pn,
  {
    onClick: r,
    tabIndex: -1,
    flexGrow: 1,
    className: N("ui-scroller-item-button"),
    "aria-label": ta(o, "{index}", `${n}`),
    children: /* @__PURE__ */ l.jsx(
      M,
      {
        flexType: "block",
        tag: "span",
        my: 5,
        className: N(Vo.itemButtonSegment, { [Vo.itemButtonVisible]: t }),
        width: "full"
      }
    )
  }
), e.current) : null, fu = "uib9lhrX", pu = {
  scrollerItemFullWidth: fu
}, mu = le(({
  observer: e,
  children: t,
  "aria-label": r,
  stepButtonContainer: n,
  disableSegment: o,
  width: i,
  p: s,
  pb: a,
  pl: c,
  pr: u,
  pt: d,
  px: m,
  py: v,
  alignContent: h,
  alignItems: b,
  justifyContent: g,
  flexWrap: y,
  flexDirection: _,
  gap: E,
  gotoIndex: C,
  index: f,
  onVisibleChanged: w,
  buttonAriaLabel: x,
  id: S,
  ...R
}, A) => {
  const j = U(null), [L, G] = X(!1), $ = ve(() => {
    C == null || C(f || 0);
  }, []), T = (D) => {
    G(D.detail.visible), w == null || w(D.detail.visible);
  };
  return K(() => {
    if (!j.current || !e)
      return;
    const D = j.current;
    return D.addEventListener("scrollerItemVisibilityChange", T, { passive: !0 }), e.observe(D), () => {
      D && (e.unobserve(D), D.removeEventListener("scrollerItemVisibilityChange", T));
    };
  }, [e]), /* @__PURE__ */ l.jsxs(
    M,
    {
      id: S,
      ref: qe([A, j]),
      role: "group",
      p: s,
      pb: a,
      pl: c,
      pr: u,
      pt: d,
      px: m,
      py: v,
      alignContent: h,
      alignItems: b,
      justifyContent: g,
      flexWrap: y,
      flexDirection: _,
      gap: E,
      "aria-roledescription": "slide",
      "aria-hidden": !L,
      "aria-label": r,
      className: N("ui-scroller-item", {
        [pu.scrollerItemFullWidth]: i === "full"
      }),
      ...Ce(R),
      children: [
        t,
        (n == null ? void 0 : n.current) && !o && /* @__PURE__ */ l.jsx(
          du,
          {
            itemVisible: L,
            onClick: $,
            stepButtonContainer: n,
            index: (f ?? 0) + 1,
            ariaLabel: x ?? ""
          }
        )
      ]
    }
  );
});
mu.displayName = "ScrollerItem";
const qo = {
  "hbd-skeleton": "u1Tqt9Zw",
  "hbd-skeleton--still": "uSfMaZWc"
}, Hf = ({
  aspect: e,
  width: t,
  height: r,
  animating: n = !0,
  variant: o = "Body1",
  children: i,
  br: s = 1,
  style: a,
  ...c
}) => {
  const u = Ne(c), d = Ht({ br: s });
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: {
        height: r || (e ? "0" : void 0),
        paddingBottom: e ? `${(e * 100).toFixed(0)}%` : void 0,
        width: t,
        ...a,
        ...u.style,
        ...d.style
      },
      className: N(
        qo["hbd-skeleton"],
        {
          [qo["hbd-skeleton--still"]]: !n,
          [Nr[`hbd-typography--${yi[o]}`]]: o
        },
        u.className,
        d.className
      ),
      children: [
        !i && /* @__PURE__ */ l.jsx(l.Fragment, { children: " " }),
        i
      ]
    }
  );
}, hu = ({ condition: e, wrapper: t, children: r }) => e ? t(r) : r, vu = "u47sB8jM", gu = "u0cSdCmy", se = {
  table: vu,
  "table__header--active": "u3YFkKwC",
  "table--sticky-first-column": "uS8VlqSm",
  "table--scrolled": "uisfQZI-",
  "table--sticky-header": "uFjJf9NU",
  table__scroller: gu,
  "table-group": "uLEhlqdI",
  "table-group__header-cover": "uNnmgs1R",
  "table-group__scroll-button": "uGEY86-3",
  "table-group__scroll-button--left": "utp-NUKa",
  "table-group__scroll-button--visible": "uoQKYd-p",
  "table-group__scroll-area": "utsEF9Dx",
  "table-group__scroll-area--scrolled-to-end": "uggXYyrX",
  "table-group__scroll-frame": "ujohpUYN",
  "table-group__sticky": "u-7eJHTs",
  "table-group__sticky-inner": "ucNlu9VU",
  "table-group__sticky-inner--is-scrolled": "ueVvbdxX",
  "table-group__sticky-inner--visible": "ueqdL9ro",
  "table-group__sticky-table": "ujNZEvPo",
  "table-group__sticky-table--fixed-layout": "uqj7UId0",
  "table-group__sticky-table--is-sticky": "u-0Nk1qw"
}, is = J.createContext({
  scrollable: !1,
  stickyHeader: !1,
  stickyFirstColumn: !1,
  isScrolled: !1,
  registerThead: () => !1,
  columnWidths: null,
  activeIndex: void 0
}), Gf = (e) => {
  const { data: t, headers: r, className: n, tableLayout: o = "auto", scrollable: i = !1, stickyHeader: s = !1, caption: a, rowHeader: c = !1, activeIndex: u } = e, { scrollable: d, stickyHeader: m, stickyFirstColumn: v, isScrolled: h, registerThead: b, columnWidths: g, activeIndex: y } = Tr(is), _ = s || m, E = U(null), [C, f] = X(!1);
  un(() => !d || !_ ? void 0 : (b(E.current, r) || f(!0), () => {
    b(null, []);
  }), [d, _, b]);
  const w = C && d && g != null, x = w ? "fixed" : o, S = d || x === "fixed" ? "100%" : void 0;
  return /* @__PURE__ */ l.jsx(hu, { condition: i && !d, wrapper: (R) => /* @__PURE__ */ l.jsx(an, { className: se.table__scroller, direction: "horizontal", fadeOut: "mask", children: R }), children: /* @__PURE__ */ l.jsxs("table", { className: N(se.table, { [se["table--sticky-first-column"]]: v, [se["table--sticky-header"]]: _ && !d, [se["table--scrolled"]]: h }, n), style: { tableLayout: x, ...S ? { width: S } : {} }, "aria-label": a, children: [
    w && g && /* @__PURE__ */ l.jsx("colgroup", { children: g.map((R, A) => /* @__PURE__ */ l.jsx("col", { style: { width: `${R}px` } }, `table-col-${A}`)) }),
    /* @__PURE__ */ l.jsx("thead", { ref: E, children: /* @__PURE__ */ l.jsx("tr", { children: r.map((R, A) => R ? /* @__PURE__ */ l.jsx(
      "th",
      {
        className: N({
          [se["table__header--active"]]: (y ?? u) === A
        }),
        scope: "col",
        children: R
      },
      `table-header-${typeof R == "string" ? R : R.key}`
    ) : /* @__PURE__ */ l.jsx("td", {}, `table-header-col-empty-${A}`)) }) }),
    /* @__PURE__ */ l.jsx("tbody", { children: t.map((R, A) => /* @__PURE__ */ l.jsx("tr", { children: R.map((j, L) => c && L === 0 ? /* @__PURE__ */ l.jsx("th", { scope: "row", children: j }, `table-cell-${A}-${L}`) : /* @__PURE__ */ l.jsx("td", { "aria-hidden": j === "" ? "true" : void 0, children: j }, `table-cell-${A}-${L}`)) }, `table-row-${A}`)) })
  ] }) });
}, Vf = ({ children: e, scrollable: t = !1, stickyHeader: r = !1, stickyFirstColumn: n = !1, navigationButtons: o = !1, activeIndex: i, maxHeight: s }) => {
  const [a, c] = X(!1), [u, d] = X(!1), [m, v] = X(!1), [h, b] = X(!1), [g, y] = X(null), [_, E] = X(!1), [C, f] = X(!1), [w, x] = X(0), [S, R] = X(null), A = U(null), j = U(!1), L = U(null), G = U(null), $ = U(null), T = U([]), D = U(null), W = U(null), q = ve((B) => {
    D.current = B, W.current = B;
  }, []), z = ve(
    (B, I) => B === null ? (j.current = !1, A.current = null, y(null), !1) : j.current ? !1 : (j.current = !0, A.current = B, y(I), !0),
    []
  );
  K(() => {
    if (!r || !g) return;
    const B = () => {
      const Z = D.current, fe = A.current;
      if (!Z || !fe) return;
      const pe = fe.getBoundingClientRect().bottom, H = Z.getBoundingClientRect(), Q = s !== void 0 ? Math.max(H.top, 0) : 0;
      E(pe <= Q && H.bottom - 30 > w), f((ue) => H.top <= 0 ? !0 : H.top > 5 ? !1 : ue);
    };
    B();
    const I = D.current;
    return s !== void 0 ? (I == null || I.addEventListener("scroll", B, { passive: !0 }), window.addEventListener("scroll", B, { passive: !0 }), () => {
      I == null || I.removeEventListener("scroll", B), window.removeEventListener("scroll", B);
    }) : (window.addEventListener("scroll", B, { passive: !0 }), () => window.removeEventListener("scroll", B));
  }, [r, g, w, s]), un(() => {
    const B = A.current;
    if (!B || !r) return;
    x(B.getBoundingClientRect().height);
    const I = new ResizeObserver(() => x(B.getBoundingClientRect().height));
    return I.observe(B), () => I.disconnect();
  }, [r, g]), K(() => {
    const B = A.current;
    if (!B || !r) return;
    const I = Array.from(B.querySelectorAll("th, td"));
    if (!I.length) return;
    const Z = () => {
      const pe = I.map((H) => H.offsetWidth);
      pe.forEach((H, Q) => {
        const ue = T.current[Q];
        ue && (ue.style.width = `${H}px`);
      }), R(pe);
    };
    Z();
    const fe = new ResizeObserver(Z);
    return I.forEach((pe) => fe.observe(pe)), () => fe.disconnect();
  }, [r, g]);
  const ae = ve((B) => {
    var xe;
    const I = W.current;
    if (!I) return;
    const Z = A.current ?? I.querySelector("thead");
    if (!Z) return;
    const fe = Array.from(Z.querySelectorAll("th, td")), pe = n ? ((xe = fe[0]) == null ? void 0 : xe.offsetWidth) ?? 0 : 0, H = fe.slice(n ? 1 : 0), Q = I.scrollLeft, ue = Q + I.clientWidth;
    if (B === "right") {
      let me = -1;
      for (let oe = 0; oe < H.length; oe++) {
        const we = H[oe].offsetLeft, ge = we + H[oe].offsetWidth;
        we >= Q + pe && ge <= ue && (me = oe);
      }
      if (me >= 0) {
        const oe = H[me + 1];
        if (oe) {
          const we = oe.offsetLeft, ge = oe.offsetWidth > I.clientWidth - pe ? Q + I.clientWidth - pe : we - pe;
          I.scrollTo({ left: ge, behavior: "smooth" });
        } else
          I.scrollTo({ left: I.scrollWidth, behavior: "smooth" });
      } else
        I.scrollTo({ left: Math.min(I.scrollWidth, Q + I.clientWidth - pe), behavior: "smooth" });
    } else {
      let me = -1;
      for (let oe = 0; oe < H.length; oe++) {
        const we = H[oe].offsetLeft, ge = we + H[oe].offsetWidth;
        if (we >= Q + pe && ge <= ue) {
          me = oe;
          break;
        }
      }
      if (me > 0) {
        const oe = H[me - 1];
        I.scrollTo({ left: Math.max(0, oe.offsetLeft - pe), behavior: "smooth" });
      } else me === -1 ? I.scrollTo({ left: Math.max(0, Q - (I.clientWidth - pe)), behavior: "smooth" }) : I.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [n]), ne = ve(() => ae("right"), [ae]), Pe = ve(() => ae("left"), [ae]), Se = ve(() => {
    const B = W.current;
    B && (v(B.scrollWidth > B.clientWidth && Math.ceil(B.scrollLeft) + B.clientWidth < B.scrollWidth), b(B.scrollLeft > 0));
  }, []), Ae = U(null), $e = ve((B) => {
    const I = B.target, Z = I.scrollLeft;
    L.current && (L.current.style.transform = `translateX(-${Z}px)`), n && $.current && ($.current.style.transform = `translateX(${Z}px)`, $.current.style.borderRight = Z > 0 ? "1px solid var(--ui-color-grey300)" : "1px solid transparent"), Ae.current !== null && cancelAnimationFrame(Ae.current), Ae.current = requestAnimationFrame(() => {
      Ae.current = null;
      const fe = I.scrollLeft;
      c(fe > 0), v(I.scrollWidth > I.clientWidth && Math.ceil(fe) + I.clientWidth < I.scrollWidth), b(fe > 0);
    });
  }, [n]);
  K(() => {
    if (!t) return;
    const B = W.current;
    if (!B) return;
    Se();
    const I = new ResizeObserver(Se);
    return I.observe(B), () => I.disconnect();
  }, [t, Se]), K(() => {
    const B = D.current;
    if (B)
      if (s !== void 0) {
        const I = () => {
          d(B.scrollTop + B.clientHeight >= B.scrollHeight - 1);
        };
        I(), B.addEventListener("scroll", I, { passive: !0 });
        const Z = new ResizeObserver(I);
        return Z.observe(B), () => {
          B.removeEventListener("scroll", I), Z.disconnect();
        };
      } else {
        const I = () => {
          d(B.getBoundingClientRect().bottom <= window.innerHeight);
        };
        I(), window.addEventListener("scroll", I, { passive: !0 });
        const Z = new ResizeObserver(I);
        return Z.observe(B), () => {
          window.removeEventListener("scroll", I), Z.disconnect();
        };
      }
  }, [t, s]);
  const ye = /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: /* @__PURE__ */ l.jsx(
    Ft,
    {
      buttonProps: { tabIndex: -1, onMouseDown: (B) => B.preventDefault() },
      variant: "White",
      iconId: "angle-left",
      size: "Big",
      onClick: Pe
    }
  ) }), be = /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: /* @__PURE__ */ l.jsx(
    Ft,
    {
      variant: "White",
      iconId: "angle-right",
      size: "Big",
      onClick: ne,
      buttonProps: { tabIndex: -1, onMouseDown: (B) => B.preventDefault() }
    }
  ) });
  return /* @__PURE__ */ l.jsx(
    is.Provider,
    {
      value: {
        scrollable: t,
        stickyHeader: r,
        stickyFirstColumn: n,
        isScrolled: a,
        registerThead: z,
        columnWidths: S,
        activeIndex: i
      },
      children: t || r || o ? /* @__PURE__ */ l.jsxs(M, { className: se["table-group"], children: [
        r && t && g && /* @__PURE__ */ l.jsxs(M, { className: se["table-group__sticky"], children: [
          _ && C && w > 0 && /* @__PURE__ */ l.jsx(M, { className: se["table-group__header-cover"], style: { height: w } }),
          /* @__PURE__ */ l.jsx(
            M,
            {
              ref: G,
              className: N(
                se["table-group__sticky-inner"],
                { [se["table-group__sticky-inner--visible"]]: _ },
                { [se["table-group__sticky-inner--is-scrolled"]]: a }
              ),
              children: /* @__PURE__ */ l.jsx(
                "table",
                {
                  ref: L,
                  className: N(
                    se.table,
                    se["table-group__sticky-table"],
                    { [se["table-group__sticky-table--fixed-layout"]]: m || h },
                    { [se["table-group__sticky-table--is-sticky"]]: _ }
                  ),
                  "aria-hidden": !0,
                  children: /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsx("tr", { children: g.map((B, I) => B ? /* @__PURE__ */ l.jsx(
                    "th",
                    {
                      className: N({
                        [se["table__header--active"]]: i === I
                      }),
                      ref: (Z) => {
                        T.current[I] = Z, I === 0 && ($.current = Z);
                      },
                      scope: "col",
                      children: B
                    },
                    typeof B == "string" ? B : B.key
                  ) : /* @__PURE__ */ l.jsx(
                    "td",
                    {
                      ref: (Z) => {
                        T.current[I] = Z, I === 0 && ($.current = Z);
                      }
                    },
                    `table-header-sticky-col-empty-${I}`
                  )) }) })
                }
              )
            }
          ),
          o && _ && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(
              M,
              {
                className: N(se["table-group__scroll-button"], se["table-group__scroll-button--left"], { [se["table-group__scroll-button--visible"]]: h }),
                style: { height: w || void 0 },
                children: ye
              }
            ),
            /* @__PURE__ */ l.jsx(M, { className: N(se["table-group__scroll-button"], { [se["table-group__scroll-button--visible"]]: m }), style: { height: w || void 0 }, children: be })
          ] })
        ] }),
        t ? s !== void 0 ? /* @__PURE__ */ l.jsx(M, { tabIndex: 0, ref: D, height: s, className: N(se["table-group__scroll-area"], { [se["table-group__scroll-area--scrolled-to-end"]]: u }), children: /* @__PURE__ */ l.jsx(
          an,
          {
            ref: W,
            className: se.table__scroller,
            direction: "horizontal",
            scrollbarColor: "grey",
            fadeOut: "mask",
            overflowStart: !1,
            onScroll: $e,
            children: e
          }
        ) }) : /* @__PURE__ */ l.jsx(M, { tabIndex: 0, className: se["table-group__scroll-frame"], children: /* @__PURE__ */ l.jsx(
          an,
          {
            ref: q,
            className: se.table__scroller,
            direction: "horizontal",
            scrollbarColor: "grey",
            fadeOut: "mask",
            overflowStart: !1,
            onScroll: $e,
            children: e
          }
        ) }) : /* @__PURE__ */ l.jsx(M, { tabIndex: 0, ref: D, height: s, className: N(s !== void 0 ? se["table-group__scroll-area"] : void 0, { [se["table-group__scroll-area--scrolled-to-end"]]: u }), children: e }),
        o && /* @__PURE__ */ l.jsx(
          M,
          {
            className: N(se["table-group__scroll-button"], se["table-group__scroll-button--left"], { [se["table-group__scroll-button--visible"]]: h }),
            style: { height: w || void 0 },
            children: ye
          }
        ),
        o && /* @__PURE__ */ l.jsx(M, { className: N(se["table-group__scroll-button"], { [se["table-group__scroll-button--visible"]]: m }), style: { height: w || void 0 }, children: be })
      ] }) : e
    }
  );
};
var Me = "top", Qe = "bottom", Je = "right", ze = "left", uo = "auto", Dr = [Me, Qe, Je, ze], ar = "start", Er = "end", bu = "clippingParents", ss = "viewport", yr = "popper", yu = "reference", Uo = /* @__PURE__ */ Dr.reduce(function(e, t) {
  return e.concat([t + "-" + ar, t + "-" + Er]);
}, []), as = /* @__PURE__ */ [].concat(Dr, [uo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ar, t + "-" + Er]);
}, []), xu = "beforeRead", wu = "read", _u = "afterRead", ju = "beforeMain", ku = "main", Nu = "afterMain", Cu = "beforeWrite", Eu = "write", Su = "afterWrite", Ou = [xu, wu, _u, ju, ku, Nu, Cu, Eu, Su];
function ft(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ue(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Mt(e) {
  var t = Ue(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ke(e) {
  var t = Ue(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function fo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ue(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ru(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !Ke(i) || !ft(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Tu(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], i = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), a = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Ke(o) || !ft(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const cs = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ru,
  effect: Tu,
  requires: ["computeStyles"]
};
function ut(e) {
  return e.split("-")[0];
}
var Wt = Math.max, cn = Math.min, cr = Math.round;
function Xn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ls() {
  return !/^((?!chrome|android).)*safari/i.test(Xn());
}
function lr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && Ke(e) && (o = e.offsetWidth > 0 && cr(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && cr(n.height) / e.offsetHeight || 1);
  var s = Mt(e) ? Ue(e) : window, a = s.visualViewport, c = !ls() && r, u = (n.left + (c && a ? a.offsetLeft : 0)) / o, d = (n.top + (c && a ? a.offsetTop : 0)) / i, m = n.width / o, v = n.height / i;
  return {
    width: m,
    height: v,
    top: d,
    right: u + m,
    bottom: d + v,
    left: u,
    x: u,
    y: d
  };
}
function po(e) {
  var t = lr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function us(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && fo(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function wt(e) {
  return Ue(e).getComputedStyle(e);
}
function Au(e) {
  return ["table", "td", "th"].indexOf(ft(e)) >= 0;
}
function St(e) {
  return ((Mt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function bn(e) {
  return ft(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (fo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    St(e)
  );
}
function Yo(e) {
  return !Ke(e) || // https://github.com/popperjs/popper-core/issues/837
  wt(e).position === "fixed" ? null : e.offsetParent;
}
function $u(e) {
  var t = /firefox/i.test(Xn()), r = /Trident/i.test(Xn());
  if (r && Ke(e)) {
    var n = wt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = bn(e);
  for (fo(o) && (o = o.host); Ke(o) && ["html", "body"].indexOf(ft(o)) < 0; ) {
    var i = wt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Br(e) {
  for (var t = Ue(e), r = Yo(e); r && Au(r) && wt(r).position === "static"; )
    r = Yo(r);
  return r && (ft(r) === "html" || ft(r) === "body" && wt(r).position === "static") ? t : r || $u(e) || t;
}
function mo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function wr(e, t, r) {
  return Wt(e, cn(t, r));
}
function Iu(e, t, r) {
  var n = wr(e, t, r);
  return n > r ? r : n;
}
function ds() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function fs(e) {
  return Object.assign({}, ds(), e);
}
function ps(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Du = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, fs(typeof t != "number" ? t : ps(t, Dr));
};
function Bu(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, a = ut(r.placement), c = mo(a), u = [ze, Je].indexOf(a) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var m = Du(o.padding, r), v = po(i), h = c === "y" ? Me : ze, b = c === "y" ? Qe : Je, g = r.rects.reference[d] + r.rects.reference[c] - s[c] - r.rects.popper[d], y = s[c] - r.rects.reference[c], _ = Br(i), E = _ ? c === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, C = g / 2 - y / 2, f = m[h], w = E - v[d] - m[b], x = E / 2 - v[d] / 2 + C, S = wr(f, x, w), R = c;
    r.modifiersData[n] = (t = {}, t[R] = S, t.centerOffset = S - x, t);
  }
}
function Lu(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || us(t.elements.popper, o) && (t.elements.arrow = o));
}
const Pu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Bu,
  effect: Lu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ur(e) {
  return e.split("-")[1];
}
var Wu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Fu(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: cr(r * o) / o || 0,
    y: cr(n * o) / o || 0
  };
}
function Xo(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, v = s.x, h = v === void 0 ? 0 : v, b = s.y, g = b === void 0 ? 0 : b, y = typeof d == "function" ? d({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  h = y.x, g = y.y;
  var _ = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), C = ze, f = Me, w = window;
  if (u) {
    var x = Br(r), S = "clientHeight", R = "clientWidth";
    if (x === Ue(r) && (x = St(r), wt(x).position !== "static" && a === "absolute" && (S = "scrollHeight", R = "scrollWidth")), x = x, o === Me || (o === ze || o === Je) && i === Er) {
      f = Qe;
      var A = m && x === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[S]
      );
      g -= A - n.height, g *= c ? 1 : -1;
    }
    if (o === ze || (o === Me || o === Qe) && i === Er) {
      C = Je;
      var j = m && x === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[R]
      );
      h -= j - n.width, h *= c ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: a
  }, u && Wu), G = d === !0 ? Fu({
    x: h,
    y: g
  }, Ue(r)) : {
    x: h,
    y: g
  };
  if (h = G.x, g = G.y, c) {
    var $;
    return Object.assign({}, L, ($ = {}, $[f] = E ? "0" : "", $[C] = _ ? "0" : "", $.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", $));
  }
  return Object.assign({}, L, (t = {}, t[f] = E ? g + "px" : "", t[C] = _ ? h + "px" : "", t.transform = "", t));
}
function Mu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, s = i === void 0 ? !0 : i, a = r.roundOffsets, c = a === void 0 ? !0 : a, u = {
    placement: ut(t.placement),
    variation: ur(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const zu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Mu,
  data: {}
};
var Yr = {
  passive: !0
};
function Hu(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, s = n.resize, a = s === void 0 ? !0 : s, c = Ue(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Yr);
  }), a && c.addEventListener("resize", r.update, Yr), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Yr);
    }), a && c.removeEventListener("resize", r.update, Yr);
  };
}
const Gu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Hu,
  data: {}
};
var Vu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Vu[t];
  });
}
var qu = {
  start: "end",
  end: "start"
};
function Ko(e) {
  return e.replace(/start|end/g, function(t) {
    return qu[t];
  });
}
function ho(e) {
  var t = Ue(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function vo(e) {
  return lr(St(e)).left + ho(e).scrollLeft;
}
function Uu(e, t) {
  var r = Ue(e), n = St(e), o = r.visualViewport, i = n.clientWidth, s = n.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = ls();
    (u || !u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + vo(e),
    y: c
  };
}
function Yu(e) {
  var t, r = St(e), n = ho(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Wt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Wt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -n.scrollLeft + vo(e), c = -n.scrollTop;
  return wt(o || r).direction === "rtl" && (a += Wt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function go(e) {
  var t = wt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function ms(e) {
  return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : Ke(e) && go(e) ? e : ms(bn(e));
}
function _r(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ms(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ue(n), s = o ? [i].concat(i.visualViewport || [], go(n) ? n : []) : n, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(_r(bn(s)))
  );
}
function Kn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Xu(e, t) {
  var r = lr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Qo(e, t, r) {
  return t === ss ? Kn(Uu(e, r)) : Mt(t) ? Xu(t, r) : Kn(Yu(St(e)));
}
function Ku(e) {
  var t = _r(bn(e)), r = ["absolute", "fixed"].indexOf(wt(e).position) >= 0, n = r && Ke(e) ? Br(e) : e;
  return Mt(n) ? t.filter(function(o) {
    return Mt(o) && us(o, n) && ft(o) !== "body";
  }) : [];
}
function Qu(e, t, r, n) {
  var o = t === "clippingParents" ? Ku(e) : [].concat(t), i = [].concat(o, [r]), s = i[0], a = i.reduce(function(c, u) {
    var d = Qo(e, u, n);
    return c.top = Wt(d.top, c.top), c.right = cn(d.right, c.right), c.bottom = cn(d.bottom, c.bottom), c.left = Wt(d.left, c.left), c;
  }, Qo(e, s, n));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function hs(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? ut(n) : null, i = n ? ur(n) : null, s = t.x + t.width / 2 - r.width / 2, a = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case Me:
      c = {
        x: s,
        y: t.y - r.height
      };
      break;
    case Qe:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Je:
      c = {
        x: t.x + t.width,
        y: a
      };
      break;
    case ze:
      c = {
        x: t.x - r.width,
        y: a
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? mo(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case ar:
        c[u] = c[u] - (t[d] / 2 - r[d] / 2);
        break;
      case Er:
        c[u] = c[u] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return c;
}
function Sr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, s = i === void 0 ? e.strategy : i, a = r.boundary, c = a === void 0 ? bu : a, u = r.rootBoundary, d = u === void 0 ? ss : u, m = r.elementContext, v = m === void 0 ? yr : m, h = r.altBoundary, b = h === void 0 ? !1 : h, g = r.padding, y = g === void 0 ? 0 : g, _ = fs(typeof y != "number" ? y : ps(y, Dr)), E = v === yr ? yu : yr, C = e.rects.popper, f = e.elements[b ? E : v], w = Qu(Mt(f) ? f : f.contextElement || St(e.elements.popper), c, d, s), x = lr(e.elements.reference), S = hs({
    reference: x,
    element: C,
    placement: o
  }), R = Kn(Object.assign({}, C, S)), A = v === yr ? R : x, j = {
    top: w.top - A.top + _.top,
    bottom: A.bottom - w.bottom + _.bottom,
    left: w.left - A.left + _.left,
    right: A.right - w.right + _.right
  }, L = e.modifiersData.offset;
  if (v === yr && L) {
    var G = L[o];
    Object.keys(j).forEach(function($) {
      var T = [Je, Qe].indexOf($) >= 0 ? 1 : -1, D = [Me, Qe].indexOf($) >= 0 ? "y" : "x";
      j[$] += G[D] * T;
    });
  }
  return j;
}
function Ju(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, s = r.padding, a = r.flipVariations, c = r.allowedAutoPlacements, u = c === void 0 ? as : c, d = ur(n), m = d ? a ? Uo : Uo.filter(function(b) {
    return ur(b) === d;
  }) : Dr, v = m.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  v.length === 0 && (v = m);
  var h = v.reduce(function(b, g) {
    return b[g] = Sr(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[ut(g)], b;
  }, {});
  return Object.keys(h).sort(function(b, g) {
    return h[b] - h[g];
  });
}
function Zu(e) {
  if (ut(e) === uo)
    return [];
  var t = Qr(e);
  return [Ko(e), t, Ko(t)];
}
function ed(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, a = s === void 0 ? !0 : s, c = r.fallbackPlacements, u = r.padding, d = r.boundary, m = r.rootBoundary, v = r.altBoundary, h = r.flipVariations, b = h === void 0 ? !0 : h, g = r.allowedAutoPlacements, y = t.options.placement, _ = ut(y), E = _ === y, C = c || (E || !b ? [Qr(y)] : Zu(y)), f = [y].concat(C).reduce(function($e, ye) {
      return $e.concat(ut(ye) === uo ? Ju(t, {
        placement: ye,
        boundary: d,
        rootBoundary: m,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: g
      }) : ye);
    }, []), w = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), R = !0, A = f[0], j = 0; j < f.length; j++) {
      var L = f[j], G = ut(L), $ = ur(L) === ar, T = [Me, Qe].indexOf(G) >= 0, D = T ? "width" : "height", W = Sr(t, {
        placement: L,
        boundary: d,
        rootBoundary: m,
        altBoundary: v,
        padding: u
      }), q = T ? $ ? Je : ze : $ ? Qe : Me;
      w[D] > x[D] && (q = Qr(q));
      var z = Qr(q), ae = [];
      if (i && ae.push(W[G] <= 0), a && ae.push(W[q] <= 0, W[z] <= 0), ae.every(function($e) {
        return $e;
      })) {
        A = L, R = !1;
        break;
      }
      S.set(L, ae);
    }
    if (R)
      for (var ne = b ? 3 : 1, Pe = function(ye) {
        var be = f.find(function(B) {
          var I = S.get(B);
          if (I)
            return I.slice(0, ye).every(function(Z) {
              return Z;
            });
        });
        if (be)
          return A = be, "break";
      }, Se = ne; Se > 0; Se--) {
        var Ae = Pe(Se);
        if (Ae === "break") break;
      }
    t.placement !== A && (t.modifiersData[n]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const td = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ed,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Jo(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Zo(e) {
  return [Me, Je, Qe, ze].some(function(t) {
    return e[t] >= 0;
  });
}
function rd(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Sr(t, {
    elementContext: "reference"
  }), a = Sr(t, {
    altBoundary: !0
  }), c = Jo(s, n), u = Jo(a, o, i), d = Zo(c), m = Zo(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const nd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: rd
};
function od(e, t, r) {
  var n = ut(e), o = [ze, Me].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [ze, Je].indexOf(n) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function id(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, s = as.reduce(function(d, m) {
    return d[m] = od(m, t.rects, i), d;
  }, {}), a = s[t.placement], c = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = s;
}
const sd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: id
};
function ad(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = hs({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const cd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ad,
  data: {}
};
function ld(e) {
  return e === "x" ? "y" : "x";
}
function ud(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, a = s === void 0 ? !1 : s, c = r.boundary, u = r.rootBoundary, d = r.altBoundary, m = r.padding, v = r.tether, h = v === void 0 ? !0 : v, b = r.tetherOffset, g = b === void 0 ? 0 : b, y = Sr(t, {
    boundary: c,
    rootBoundary: u,
    padding: m,
    altBoundary: d
  }), _ = ut(t.placement), E = ur(t.placement), C = !E, f = mo(_), w = ld(f), x = t.modifiersData.popperOffsets, S = t.rects.reference, R = t.rects.popper, A = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, j = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, G = {
    x: 0,
    y: 0
  };
  if (x) {
    if (i) {
      var $, T = f === "y" ? Me : ze, D = f === "y" ? Qe : Je, W = f === "y" ? "height" : "width", q = x[f], z = q + y[T], ae = q - y[D], ne = h ? -R[W] / 2 : 0, Pe = E === ar ? S[W] : R[W], Se = E === ar ? -R[W] : -S[W], Ae = t.elements.arrow, $e = h && Ae ? po(Ae) : {
        width: 0,
        height: 0
      }, ye = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ds(), be = ye[T], B = ye[D], I = wr(0, S[W], $e[W]), Z = C ? S[W] / 2 - ne - I - be - j.mainAxis : Pe - I - be - j.mainAxis, fe = C ? -S[W] / 2 + ne + I + B + j.mainAxis : Se + I + B + j.mainAxis, pe = t.elements.arrow && Br(t.elements.arrow), H = pe ? f === "y" ? pe.clientTop || 0 : pe.clientLeft || 0 : 0, Q = ($ = L == null ? void 0 : L[f]) != null ? $ : 0, ue = q + Z - Q - H, xe = q + fe - Q, me = wr(h ? cn(z, ue) : z, q, h ? Wt(ae, xe) : ae);
      x[f] = me, G[f] = me - q;
    }
    if (a) {
      var oe, we = f === "x" ? Me : ze, ge = f === "x" ? Qe : Je, We = x[w], He = w === "y" ? "height" : "width", ht = We + y[we], vt = We - y[ge], Ot = [Me, ze].indexOf(_) !== -1, Rt = (oe = L == null ? void 0 : L[w]) != null ? oe : 0, Tt = Ot ? ht : We - S[He] - R[He] - Rt + j.altAxis, At = Ot ? We + S[He] + R[He] - Rt - j.altAxis : vt, Vt = h && Ot ? Iu(Tt, We, At) : wr(h ? Tt : ht, We, h ? At : vt);
      x[w] = Vt, G[w] = Vt - We;
    }
    t.modifiersData[n] = G;
  }
}
const dd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ud,
  requiresIfExists: ["offset"]
};
function fd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function pd(e) {
  return e === Ue(e) || !Ke(e) ? ho(e) : fd(e);
}
function md(e) {
  var t = e.getBoundingClientRect(), r = cr(t.width) / e.offsetWidth || 1, n = cr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function hd(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ke(t), o = Ke(t) && md(t), i = St(t), s = lr(e, o, r), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ft(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  go(i)) && (a = pd(t)), Ke(t) ? (c = lr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = vo(i))), {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function vd(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!r.has(a)) {
        var c = t.get(a);
        c && o(c);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function gd(e) {
  var t = vd(e);
  return Ou.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function bd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function yd(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var ei = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ti() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function xd(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? ei : o;
  return function(a, c, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ei, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, h = {
      state: d,
      setOptions: function(_) {
        var E = typeof _ == "function" ? _(d.options) : _;
        g(), d.options = Object.assign({}, i, d.options, E), d.scrollParents = {
          reference: Mt(a) ? _r(a) : a.contextElement ? _r(a.contextElement) : [],
          popper: _r(c)
        };
        var C = gd(yd([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = C.filter(function(f) {
          return f.enabled;
        }), b(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var _ = d.elements, E = _.reference, C = _.popper;
          if (ti(E, C)) {
            d.rects = {
              reference: hd(E, Br(C), d.options.strategy === "fixed"),
              popper: po(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(j) {
              return d.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var f = 0; f < d.orderedModifiers.length; f++) {
              if (d.reset === !0) {
                d.reset = !1, f = -1;
                continue;
              }
              var w = d.orderedModifiers[f], x = w.fn, S = w.options, R = S === void 0 ? {} : S, A = w.name;
              typeof x == "function" && (d = x({
                state: d,
                options: R,
                name: A,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: bd(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        g(), v = !0;
      }
    };
    if (!ti(a, c))
      return h;
    h.setOptions(u).then(function(y) {
      !v && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function b() {
      d.orderedModifiers.forEach(function(y) {
        var _ = y.name, E = y.options, C = E === void 0 ? {} : E, f = y.effect;
        if (typeof f == "function") {
          var w = f({
            state: d,
            name: _,
            instance: h,
            options: C
          }), x = function() {
          };
          m.push(w || x);
        }
      });
    }
    function g() {
      m.forEach(function(y) {
        return y();
      }), m = [];
    }
    return h;
  };
}
var wd = [Gu, cd, zu, cs, sd, td, dd, Pu, nd], _d = /* @__PURE__ */ xd({
  defaultModifiers: wd
}), jd = "tippy-box", vs = "tippy-content", kd = "tippy-backdrop", gs = "tippy-arrow", bs = "tippy-svg-arrow", Pt = {
  passive: !0,
  capture: !0
}, ys = function() {
  return document.body;
};
function Nd(e, t) {
  return {}.hasOwnProperty.call(e, t);
}
function Pn(e, t, r) {
  if (Array.isArray(e)) {
    var n = e[t];
    return n ?? (Array.isArray(r) ? r[t] : r);
  }
  return e;
}
function bo(e, t) {
  var r = {}.toString.call(e);
  return r.indexOf("[object") === 0 && r.indexOf(t + "]") > -1;
}
function xs(e, t) {
  return typeof e == "function" ? e.apply(void 0, t) : e;
}
function ri(e, t) {
  if (t === 0)
    return e;
  var r;
  return function(n) {
    clearTimeout(r), r = setTimeout(function() {
      e(n);
    }, t);
  };
}
function Cd(e, t) {
  var r = Object.assign({}, e);
  return t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Ed(e) {
  return e.split(/\s+/).filter(Boolean);
}
function tr(e) {
  return [].concat(e);
}
function ni(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Sd(e) {
  return e.filter(function(t, r) {
    return e.indexOf(t) === r;
  });
}
function Od(e) {
  return e.split("-")[0];
}
function ln(e) {
  return [].slice.call(e);
}
function oi(e) {
  return Object.keys(e).reduce(function(t, r) {
    return e[r] !== void 0 && (t[r] = e[r]), t;
  }, {});
}
function jr() {
  return document.createElement("div");
}
function Or(e) {
  return ["Element", "Fragment"].some(function(t) {
    return bo(e, t);
  });
}
function Rd(e) {
  return bo(e, "NodeList");
}
function Td(e) {
  return bo(e, "MouseEvent");
}
function Ad(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function $d(e) {
  return Or(e) ? [e] : Rd(e) ? ln(e) : Array.isArray(e) ? e : ln(document.querySelectorAll(e));
}
function Wn(e, t) {
  e.forEach(function(r) {
    r && (r.style.transitionDuration = t + "ms");
  });
}
function ii(e, t) {
  e.forEach(function(r) {
    r && r.setAttribute("data-state", t);
  });
}
function Id(e) {
  var t, r = tr(e), n = r[0];
  return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document;
}
function Dd(e, t) {
  var r = t.clientX, n = t.clientY;
  return e.every(function(o) {
    var i = o.popperRect, s = o.popperState, a = o.props, c = a.interactiveBorder, u = Od(s.placement), d = s.modifiersData.offset;
    if (!d)
      return !0;
    var m = u === "bottom" ? d.top.y : 0, v = u === "top" ? d.bottom.y : 0, h = u === "right" ? d.left.x : 0, b = u === "left" ? d.right.x : 0, g = i.top - n + m > c, y = n - i.bottom - v > c, _ = i.left - r + h > c, E = r - i.right - b > c;
    return g || y || _ || E;
  });
}
function Fn(e, t, r) {
  var n = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    e[n](o, r);
  });
}
function si(e, t) {
  for (var r = t; r; ) {
    var n;
    if (e.contains(r))
      return !0;
    r = r.getRootNode == null || (n = r.getRootNode()) == null ? void 0 : n.host;
  }
  return !1;
}
var ct = {
  isTouch: !1
}, ai = 0;
function Bd() {
  ct.isTouch || (ct.isTouch = !0, window.performance && document.addEventListener("mousemove", ws));
}
function ws() {
  var e = performance.now();
  e - ai < 20 && (ct.isTouch = !1, document.removeEventListener("mousemove", ws)), ai = e;
}
function Ld() {
  var e = document.activeElement;
  if (Ad(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function Pd() {
  document.addEventListener("touchstart", Bd, Pt), window.addEventListener("blur", Ld);
}
var Wd = typeof window < "u" && typeof document < "u", Fd = Wd ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function er(e) {
  var t = e === "destroy" ? "n already-" : " ";
  return [e + "() was called on a" + t + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function ci(e) {
  var t = /[ \t]{2,}/g, r = /^[ \t]*/gm;
  return e.replace(t, " ").replace(r, "").trim();
}
function Md(e) {
  return ci(`
  %ctippy.js

  %c` + ci(e) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function _s(e) {
  return [
    Md(e),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var Rr;
process.env.NODE_ENV !== "production" && zd();
function zd() {
  Rr = /* @__PURE__ */ new Set();
}
function yt(e, t) {
  if (e && !Rr.has(t)) {
    var r;
    Rr.add(t), (r = console).warn.apply(r, _s(t));
  }
}
function Qn(e, t) {
  if (e && !Rr.has(t)) {
    var r;
    Rr.add(t), (r = console).error.apply(r, _s(t));
  }
}
function Hd(e) {
  var t = !e, r = Object.prototype.toString.call(e) === "[object Object]" && !e.addEventListener;
  Qn(t, ["tippy() was passed", "`" + String(e) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Qn(r, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var js = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Gd = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Ge = Object.assign({
  appendTo: ys,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, js, Gd), Vd = Object.keys(Ge), qd = function(t) {
  process.env.NODE_ENV !== "production" && Ns(t, []);
  var r = Object.keys(t);
  r.forEach(function(n) {
    Ge[n] = t[n];
  });
};
function ks(e) {
  var t = e.plugins || [], r = t.reduce(function(n, o) {
    var i = o.name, s = o.defaultValue;
    if (i) {
      var a;
      n[i] = e[i] !== void 0 ? e[i] : (a = Ge[i]) != null ? a : s;
    }
    return n;
  }, {});
  return Object.assign({}, e, r);
}
function Ud(e, t) {
  var r = t ? Object.keys(ks(Object.assign({}, Ge, {
    plugins: t
  }))) : Vd, n = r.reduce(function(o, i) {
    var s = (e.getAttribute("data-tippy-" + i) || "").trim();
    if (!s)
      return o;
    if (i === "content")
      o[i] = s;
    else
      try {
        o[i] = JSON.parse(s);
      } catch {
        o[i] = s;
      }
    return o;
  }, {});
  return n;
}
function li(e, t) {
  var r = Object.assign({}, t, {
    content: xs(t.content, [e])
  }, t.ignoreAttributes ? {} : Ud(e, t.plugins));
  return r.aria = Object.assign({}, Ge.aria, r.aria), r.aria = {
    expanded: r.aria.expanded === "auto" ? t.interactive : r.aria.expanded,
    content: r.aria.content === "auto" ? t.interactive ? null : "describedby" : r.aria.content
  }, r;
}
function Ns(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = []);
  var r = Object.keys(e);
  r.forEach(function(n) {
    var o = Cd(Ge, Object.keys(js)), i = !Nd(o, n);
    i && (i = t.filter(function(s) {
      return s.name === n;
    }).length === 0), yt(i, ["`" + n + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var Yd = function() {
  return "innerHTML";
};
function Jn(e, t) {
  e[Yd()] = t;
}
function ui(e) {
  var t = jr();
  return e === !0 ? t.className = gs : (t.className = bs, Or(e) ? t.appendChild(e) : Jn(t, e)), t;
}
function di(e, t) {
  Or(t.content) ? (Jn(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Jn(e, t.content) : e.textContent = t.content);
}
function Zn(e) {
  var t = e.firstElementChild, r = ln(t.children);
  return {
    box: t,
    content: r.find(function(n) {
      return n.classList.contains(vs);
    }),
    arrow: r.find(function(n) {
      return n.classList.contains(gs) || n.classList.contains(bs);
    }),
    backdrop: r.find(function(n) {
      return n.classList.contains(kd);
    })
  };
}
function Cs(e) {
  var t = jr(), r = jr();
  r.className = jd, r.setAttribute("data-state", "hidden"), r.setAttribute("tabindex", "-1");
  var n = jr();
  n.className = vs, n.setAttribute("data-state", "hidden"), di(n, e.props), t.appendChild(r), r.appendChild(n), o(e.props, e.props);
  function o(i, s) {
    var a = Zn(t), c = a.box, u = a.content, d = a.arrow;
    s.theme ? c.setAttribute("data-theme", s.theme) : c.removeAttribute("data-theme"), typeof s.animation == "string" ? c.setAttribute("data-animation", s.animation) : c.removeAttribute("data-animation"), s.inertia ? c.setAttribute("data-inertia", "") : c.removeAttribute("data-inertia"), c.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? c.setAttribute("role", s.role) : c.removeAttribute("role"), (i.content !== s.content || i.allowHTML !== s.allowHTML) && di(u, e.props), s.arrow ? d ? i.arrow !== s.arrow && (c.removeChild(d), c.appendChild(ui(s.arrow))) : c.appendChild(ui(s.arrow)) : d && c.removeChild(d);
  }
  return {
    popper: t,
    onUpdate: o
  };
}
Cs.$$tippy = !0;
var Xd = 1, Xr = [], Mn = [];
function Kd(e, t) {
  var r = li(e, Object.assign({}, Ge, ks(oi(t)))), n, o, i, s = !1, a = !1, c = !1, u = !1, d, m, v, h = [], b = ri(ue, r.interactiveDebounce), g, y = Xd++, _ = null, E = Sd(r.plugins), C = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, f = {
    // properties
    id: y,
    reference: e,
    popper: jr(),
    popperInstance: _,
    props: r,
    state: C,
    plugins: E,
    // methods
    clearDelayTimeouts: Tt,
    setProps: At,
    setContent: Vt,
    show: Pr,
    hide: Wr,
    hideWithInteractivity: yn,
    enable: Ot,
    disable: Rt,
    unmount: xn,
    destroy: wn
  };
  if (!r.render)
    return process.env.NODE_ENV !== "production" && Qn(!0, "render() function has not been supplied."), f;
  var w = r.render(f), x = w.popper, S = w.onUpdate;
  x.setAttribute("data-tippy-root", ""), x.id = "tippy-" + f.id, f.popper = x, e._tippy = f, x._tippy = f;
  var R = E.map(function(k) {
    return k.fn(f);
  }), A = e.hasAttribute("aria-expanded");
  return pe(), ne(), q(), z("onCreate", [f]), r.showOnCreate && ht(), x.addEventListener("mouseenter", function() {
    f.props.interactive && f.state.isVisible && f.clearDelayTimeouts();
  }), x.addEventListener("mouseleave", function() {
    f.props.interactive && f.props.trigger.indexOf("mouseenter") >= 0 && T().addEventListener("mousemove", b);
  }), f;
  function j() {
    var k = f.props.touch;
    return Array.isArray(k) ? k : [k, 0];
  }
  function L() {
    return j()[0] === "hold";
  }
  function G() {
    var k;
    return !!((k = f.props.render) != null && k.$$tippy);
  }
  function $() {
    return g || e;
  }
  function T() {
    var k = $().parentNode;
    return k ? Id(k) : document;
  }
  function D() {
    return Zn(x);
  }
  function W(k) {
    return f.state.isMounted && !f.state.isVisible || ct.isTouch || d && d.type === "focus" ? 0 : Pn(f.props.delay, k ? 0 : 1, Ge.delay);
  }
  function q(k) {
    k === void 0 && (k = !1), x.style.pointerEvents = f.props.interactive && !k ? "" : "none", x.style.zIndex = "" + f.props.zIndex;
  }
  function z(k, F, V) {
    if (V === void 0 && (V = !0), R.forEach(function(ee) {
      ee[k] && ee[k].apply(ee, F);
    }), V) {
      var ce;
      (ce = f.props)[k].apply(ce, F);
    }
  }
  function ae() {
    var k = f.props.aria;
    if (k.content) {
      var F = "aria-" + k.content, V = x.id, ce = tr(f.props.triggerTarget || e);
      ce.forEach(function(ee) {
        var Re = ee.getAttribute(F);
        if (f.state.isVisible)
          ee.setAttribute(F, Re ? Re + " " + V : V);
        else {
          var Oe = Re && Re.replace(V, "").trim();
          Oe ? ee.setAttribute(F, Oe) : ee.removeAttribute(F);
        }
      });
    }
  }
  function ne() {
    if (!(A || !f.props.aria.expanded)) {
      var k = tr(f.props.triggerTarget || e);
      k.forEach(function(F) {
        f.props.interactive ? F.setAttribute("aria-expanded", f.state.isVisible && F === $() ? "true" : "false") : F.removeAttribute("aria-expanded");
      });
    }
  }
  function Pe() {
    T().removeEventListener("mousemove", b), Xr = Xr.filter(function(k) {
      return k !== b;
    });
  }
  function Se(k) {
    if (!(ct.isTouch && (c || k.type === "mousedown"))) {
      var F = k.composedPath && k.composedPath()[0] || k.target;
      if (!(f.props.interactive && si(x, F))) {
        if (tr(f.props.triggerTarget || e).some(function(V) {
          return si(V, F);
        })) {
          if (ct.isTouch || f.state.isVisible && f.props.trigger.indexOf("click") >= 0)
            return;
        } else
          z("onClickOutside", [f, k]);
        f.props.hideOnClick === !0 && (f.clearDelayTimeouts(), f.hide(), a = !0, setTimeout(function() {
          a = !1;
        }), f.state.isMounted || be());
      }
    }
  }
  function Ae() {
    c = !0;
  }
  function $e() {
    c = !1;
  }
  function ye() {
    var k = T();
    k.addEventListener("mousedown", Se, !0), k.addEventListener("touchend", Se, Pt), k.addEventListener("touchstart", $e, Pt), k.addEventListener("touchmove", Ae, Pt);
  }
  function be() {
    var k = T();
    k.removeEventListener("mousedown", Se, !0), k.removeEventListener("touchend", Se, Pt), k.removeEventListener("touchstart", $e, Pt), k.removeEventListener("touchmove", Ae, Pt);
  }
  function B(k, F) {
    Z(k, function() {
      !f.state.isVisible && x.parentNode && x.parentNode.contains(x) && F();
    });
  }
  function I(k, F) {
    Z(k, F);
  }
  function Z(k, F) {
    var V = D().box;
    function ce(ee) {
      ee.target === V && (Fn(V, "remove", ce), F());
    }
    if (k === 0)
      return F();
    Fn(V, "remove", m), Fn(V, "add", ce), m = ce;
  }
  function fe(k, F, V) {
    V === void 0 && (V = !1);
    var ce = tr(f.props.triggerTarget || e);
    ce.forEach(function(ee) {
      ee.addEventListener(k, F, V), h.push({
        node: ee,
        eventType: k,
        handler: F,
        options: V
      });
    });
  }
  function pe() {
    L() && (fe("touchstart", Q, {
      passive: !0
    }), fe("touchend", xe, {
      passive: !0
    })), Ed(f.props.trigger).forEach(function(k) {
      if (k !== "manual")
        switch (fe(k, Q), k) {
          case "mouseenter":
            fe("mouseleave", xe);
            break;
          case "focus":
            fe(Fd ? "focusout" : "blur", me);
            break;
          case "focusin":
            fe("focusout", me);
            break;
        }
    });
  }
  function H() {
    h.forEach(function(k) {
      var F = k.node, V = k.eventType, ce = k.handler, ee = k.options;
      F.removeEventListener(V, ce, ee);
    }), h = [];
  }
  function Q(k) {
    var F, V = !1;
    if (!(!f.state.isEnabled || oe(k) || a)) {
      var ce = ((F = d) == null ? void 0 : F.type) === "focus";
      d = k, g = k.currentTarget, ne(), !f.state.isVisible && Td(k) && Xr.forEach(function(ee) {
        return ee(k);
      }), k.type === "click" && (f.props.trigger.indexOf("mouseenter") < 0 || s) && f.props.hideOnClick !== !1 && f.state.isVisible ? V = !0 : ht(k), k.type === "click" && (s = !V), V && !ce && vt(k);
    }
  }
  function ue(k) {
    var F = k.target, V = $().contains(F) || x.contains(F);
    if (!(k.type === "mousemove" && V)) {
      var ce = He().concat(x).map(function(ee) {
        var Re, Oe = ee._tippy, st = (Re = Oe.popperInstance) == null ? void 0 : Re.state;
        return st ? {
          popperRect: ee.getBoundingClientRect(),
          popperState: st,
          props: r
        } : null;
      }).filter(Boolean);
      Dd(ce, k) && (Pe(), vt(k));
    }
  }
  function xe(k) {
    var F = oe(k) || f.props.trigger.indexOf("click") >= 0 && s;
    if (!F) {
      if (f.props.interactive) {
        f.hideWithInteractivity(k);
        return;
      }
      vt(k);
    }
  }
  function me(k) {
    f.props.trigger.indexOf("focusin") < 0 && k.target !== $() || f.props.interactive && k.relatedTarget && x.contains(k.relatedTarget) || vt(k);
  }
  function oe(k) {
    return ct.isTouch ? L() !== k.type.indexOf("touch") >= 0 : !1;
  }
  function we() {
    ge();
    var k = f.props, F = k.popperOptions, V = k.placement, ce = k.offset, ee = k.getReferenceClientRect, Re = k.moveTransition, Oe = G() ? Zn(x).arrow : null, st = ee ? {
      getBoundingClientRect: ee,
      contextElement: ee.contextElement || $()
    } : e, qt = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function($t) {
        var jt = $t.state;
        if (G()) {
          var Fr = D(), Ut = Fr.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Yt) {
            Yt === "placement" ? Ut.setAttribute("data-placement", jt.placement) : jt.attributes.popper["data-popper-" + Yt] ? Ut.setAttribute("data-" + Yt, "") : Ut.removeAttribute("data-" + Yt);
          }), jt.attributes.popper = {};
        }
      }
    }, at = [{
      name: "offset",
      options: {
        offset: ce
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !Re
      }
    }, qt];
    G() && Oe && at.push({
      name: "arrow",
      options: {
        element: Oe,
        padding: 3
      }
    }), at.push.apply(at, (F == null ? void 0 : F.modifiers) || []), f.popperInstance = _d(st, x, Object.assign({}, F, {
      placement: V,
      onFirstUpdate: v,
      modifiers: at
    }));
  }
  function ge() {
    f.popperInstance && (f.popperInstance.destroy(), f.popperInstance = null);
  }
  function We() {
    var k = f.props.appendTo, F, V = $();
    f.props.interactive && k === ys || k === "parent" ? F = V.parentNode : F = xs(k, [V]), F.contains(x) || F.appendChild(x), f.state.isMounted = !0, we(), process.env.NODE_ENV !== "production" && yt(f.props.interactive && k === Ge.appendTo && V.nextElementSibling !== x, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function He() {
    return ln(x.querySelectorAll("[data-tippy-root]"));
  }
  function ht(k) {
    f.clearDelayTimeouts(), k && z("onTrigger", [f, k]), ye();
    var F = W(!0), V = j(), ce = V[0], ee = V[1];
    ct.isTouch && ce === "hold" && ee && (F = ee), F ? n = setTimeout(function() {
      f.show();
    }, F) : f.show();
  }
  function vt(k) {
    if (f.clearDelayTimeouts(), z("onUntrigger", [f, k]), !f.state.isVisible) {
      be();
      return;
    }
    if (!(f.props.trigger.indexOf("mouseenter") >= 0 && f.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(k.type) >= 0 && s)) {
      var F = W(!1);
      F ? o = setTimeout(function() {
        f.state.isVisible && f.hide();
      }, F) : i = requestAnimationFrame(function() {
        f.hide();
      });
    }
  }
  function Ot() {
    f.state.isEnabled = !0;
  }
  function Rt() {
    f.hide(), f.state.isEnabled = !1;
  }
  function Tt() {
    clearTimeout(n), clearTimeout(o), cancelAnimationFrame(i);
  }
  function At(k) {
    if (process.env.NODE_ENV !== "production" && yt(f.state.isDestroyed, er("setProps")), !f.state.isDestroyed) {
      z("onBeforeUpdate", [f, k]), H();
      var F = f.props, V = li(e, Object.assign({}, F, oi(k), {
        ignoreAttributes: !0
      }));
      f.props = V, pe(), F.interactiveDebounce !== V.interactiveDebounce && (Pe(), b = ri(ue, V.interactiveDebounce)), F.triggerTarget && !V.triggerTarget ? tr(F.triggerTarget).forEach(function(ce) {
        ce.removeAttribute("aria-expanded");
      }) : V.triggerTarget && e.removeAttribute("aria-expanded"), ne(), q(), S && S(F, V), f.popperInstance && (we(), He().forEach(function(ce) {
        requestAnimationFrame(ce._tippy.popperInstance.forceUpdate);
      })), z("onAfterUpdate", [f, k]);
    }
  }
  function Vt(k) {
    f.setProps({
      content: k
    });
  }
  function Pr() {
    process.env.NODE_ENV !== "production" && yt(f.state.isDestroyed, er("show"));
    var k = f.state.isVisible, F = f.state.isDestroyed, V = !f.state.isEnabled, ce = ct.isTouch && !f.props.touch, ee = Pn(f.props.duration, 0, Ge.duration);
    if (!(k || F || V || ce) && !$().hasAttribute("disabled") && (z("onShow", [f], !1), f.props.onShow(f) !== !1)) {
      if (f.state.isVisible = !0, G() && (x.style.visibility = "visible"), q(), ye(), f.state.isMounted || (x.style.transition = "none"), G()) {
        var Re = D(), Oe = Re.box, st = Re.content;
        Wn([Oe, st], 0);
      }
      v = function() {
        var at;
        if (!(!f.state.isVisible || u)) {
          if (u = !0, x.offsetHeight, x.style.transition = f.props.moveTransition, G() && f.props.animation) {
            var pr = D(), $t = pr.box, jt = pr.content;
            Wn([$t, jt], ee), ii([$t, jt], "visible");
          }
          ae(), ne(), ni(Mn, f), (at = f.popperInstance) == null || at.forceUpdate(), z("onMount", [f]), f.props.animation && G() && I(ee, function() {
            f.state.isShown = !0, z("onShown", [f]);
          });
        }
      }, We();
    }
  }
  function Wr() {
    process.env.NODE_ENV !== "production" && yt(f.state.isDestroyed, er("hide"));
    var k = !f.state.isVisible, F = f.state.isDestroyed, V = !f.state.isEnabled, ce = Pn(f.props.duration, 1, Ge.duration);
    if (!(k || F || V) && (z("onHide", [f], !1), f.props.onHide(f) !== !1)) {
      if (f.state.isVisible = !1, f.state.isShown = !1, u = !1, s = !1, G() && (x.style.visibility = "hidden"), Pe(), be(), q(!0), G()) {
        var ee = D(), Re = ee.box, Oe = ee.content;
        f.props.animation && (Wn([Re, Oe], ce), ii([Re, Oe], "hidden"));
      }
      ae(), ne(), f.props.animation ? G() && B(ce, f.unmount) : f.unmount();
    }
  }
  function yn(k) {
    process.env.NODE_ENV !== "production" && yt(f.state.isDestroyed, er("hideWithInteractivity")), T().addEventListener("mousemove", b), ni(Xr, b), b(k);
  }
  function xn() {
    process.env.NODE_ENV !== "production" && yt(f.state.isDestroyed, er("unmount")), f.state.isVisible && f.hide(), f.state.isMounted && (ge(), He().forEach(function(k) {
      k._tippy.unmount();
    }), x.parentNode && x.parentNode.removeChild(x), Mn = Mn.filter(function(k) {
      return k !== f;
    }), f.state.isMounted = !1, z("onHidden", [f]));
  }
  function wn() {
    process.env.NODE_ENV !== "production" && yt(f.state.isDestroyed, er("destroy")), !f.state.isDestroyed && (f.clearDelayTimeouts(), f.unmount(), H(), delete e._tippy, f.state.isDestroyed = !0, z("onDestroy", [f]));
  }
}
function Lr(e, t) {
  t === void 0 && (t = {});
  var r = Ge.plugins.concat(t.plugins || []);
  process.env.NODE_ENV !== "production" && (Hd(e), Ns(t, r)), Pd();
  var n = Object.assign({}, t, {
    plugins: r
  }), o = $d(e);
  if (process.env.NODE_ENV !== "production") {
    var i = Or(n.content), s = o.length > 1;
    yt(i && s, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var a = o.reduce(function(c, u) {
    var d = u && Kd(u, n);
    return d && c.push(d), c;
  }, []);
  return Or(e) ? a[0] : a;
}
Lr.defaultProps = Ge;
Lr.setDefaultProps = qd;
Lr.currentInput = ct;
Object.assign({}, cs, {
  effect: function(t) {
    var r = t.state, n = {
      popper: {
        position: r.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(r.elements.popper.style, n.popper), r.styles = n, r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow);
  }
});
Lr.setDefaultProps({
  render: Cs
});
function Es(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Ss = typeof window < "u" && typeof document < "u";
function eo(e, t) {
  e && (typeof e == "function" && e(t), {}.hasOwnProperty.call(e, "current") && (e.current = t));
}
function fi() {
  return Ss && document.createElement("div");
}
function Qd(e) {
  var t = {
    "data-placement": e.placement
  };
  return e.referenceHidden && (t["data-reference-hidden"] = ""), e.escaped && (t["data-escaped"] = ""), t;
}
function Os(e, t) {
  if (e === t)
    return !0;
  if (typeof e == "object" && e != null && typeof t == "object" && t != null) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (var r in e)
      if (t.hasOwnProperty(r)) {
        if (!Os(e[r], t[r]))
          return !1;
      } else
        return !1;
    return !0;
  } else
    return !1;
}
function Jd(e) {
  var t = [];
  return e.forEach(function(r) {
    t.find(function(n) {
      return Os(r, n);
    }) || t.push(r);
  }), t;
}
function Zd(e, t) {
  var r, n;
  return Object.assign({}, t, {
    popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
      modifiers: Jd([].concat(((r = e.popperOptions) == null ? void 0 : r.modifiers) || [], ((n = t.popperOptions) == null ? void 0 : n.modifiers) || []))
    })
  });
}
var zn = Ss ? un : K;
function ef(e) {
  var t = U();
  return t.current || (t.current = typeof e == "function" ? e() : e), t.current;
}
function pi(e, t, r) {
  r.split(/\s+/).forEach(function(n) {
    n && e.classList[t](n);
  });
}
var tf = {
  name: "className",
  defaultValue: "",
  fn: function(t) {
    var r = t.popper.firstElementChild, n = function() {
      var a;
      return !!((a = t.props.render) != null && a.$$tippy);
    };
    function o() {
      if (t.props.className && !n()) {
        process.env.NODE_ENV !== "production" && console.warn(["@tippyjs/react: Cannot use `className` prop in conjunction with", "`render` prop. Place the className on the element you are", "rendering."].join(" "));
        return;
      }
      pi(r, "add", t.props.className);
    }
    function i() {
      n() && pi(r, "remove", t.props.className);
    }
    return {
      onCreate: o,
      onBeforeUpdate: i,
      onAfterUpdate: o
    };
  }
};
function rf(e) {
  function t(r) {
    var n = r.children, o = r.content, i = r.visible, s = r.singleton, a = r.render, c = r.reference, u = r.disabled, d = u === void 0 ? !1 : u, m = r.ignoreAttributes, v = m === void 0 ? !0 : m;
    r.__source, r.__self;
    var h = Es(r, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"]), b = i !== void 0, g = s !== void 0, y = X(!1), _ = y[0], E = y[1], C = X({}), f = C[0], w = C[1], x = X(), S = x[0], R = x[1], A = ef(function() {
      return {
        container: fi(),
        renders: 1
      };
    }), j = Object.assign({
      ignoreAttributes: v
    }, h, {
      content: A.container
    });
    b && (process.env.NODE_ENV !== "production" && ["trigger", "hideOnClick", "showOnCreate"].forEach(function(T) {
      j[T] !== void 0 && console.warn(["@tippyjs/react: Cannot specify `" + T + "` prop in", "controlled mode (`visible` prop)"].join(" "));
    }), j.trigger = "manual", j.hideOnClick = !1), g && (d = !0);
    var L = j, G = j.plugins || [];
    a && (L = Object.assign({}, j, {
      plugins: g && s.data != null ? [].concat(G, [{
        fn: function() {
          return {
            onTrigger: function(W, q) {
              var z = s.data.children.find(function(ae) {
                var ne = ae.instance;
                return ne.reference === q.currentTarget;
              });
              W.state.$$activeSingletonInstance = z.instance, R(z.content);
            }
          };
        }
      }]) : G,
      render: function() {
        return {
          popper: A.container
        };
      }
    }));
    var $ = [c].concat(n ? [n.type] : []);
    return zn(function() {
      var T = c;
      c && c.hasOwnProperty("current") && (T = c.current);
      var D = e(T || A.ref || fi(), Object.assign({}, L, {
        plugins: [tf].concat(j.plugins || [])
      }));
      return A.instance = D, d && D.disable(), i && D.show(), g && s.hook({
        instance: D,
        content: o,
        props: L,
        setSingletonContent: R
      }), E(!0), function() {
        D.destroy(), s == null || s.cleanup(D);
      };
    }, $), zn(function() {
      var T;
      if (A.renders === 1) {
        A.renders++;
        return;
      }
      var D = A.instance;
      D.setProps(Zd(D.props, L)), (T = D.popperInstance) == null || T.forceUpdate(), d ? D.disable() : D.enable(), b && (i ? D.show() : D.hide()), g && s.hook({
        instance: D,
        content: o,
        props: L,
        setSingletonContent: R
      });
    }), zn(function() {
      var T;
      if (a) {
        var D = A.instance;
        D.setProps({
          popperOptions: Object.assign({}, D.props.popperOptions, {
            modifiers: [].concat((((T = D.props.popperOptions) == null ? void 0 : T.modifiers) || []).filter(function(W) {
              var q = W.name;
              return q !== "$$tippyReact";
            }), [{
              name: "$$tippyReact",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function(q) {
                var z, ae = q.state, ne = (z = ae.modifiersData) == null ? void 0 : z.hide;
                (f.placement !== ae.placement || f.referenceHidden !== (ne == null ? void 0 : ne.isReferenceHidden) || f.escaped !== (ne == null ? void 0 : ne.hasPopperEscaped)) && w({
                  placement: ae.placement,
                  referenceHidden: ne == null ? void 0 : ne.isReferenceHidden,
                  escaped: ne == null ? void 0 : ne.hasPopperEscaped
                }), ae.attributes.popper = {};
              }
            }])
          })
        });
      }
    }, [f.placement, f.referenceHidden, f.escaped].concat($)), /* @__PURE__ */ J.createElement(J.Fragment, null, n ? /* @__PURE__ */ to(n, {
      ref: function(D) {
        A.ref = D, eo(n.ref, D);
      }
    }) : null, _ && /* @__PURE__ */ $r(a ? a(Qd(f), S, A.instance) : o, A.container));
  }
  return t;
}
var nf = function(e, t) {
  return /* @__PURE__ */ le(function(n, o) {
    var i = n.children, s = Es(n, ["children"]);
    return (
      // If I spread them separately here, Babel adds the _extends ponyfill for
      // some reason
      /* @__PURE__ */ J.createElement(e, Object.assign({}, t, s), i ? /* @__PURE__ */ to(i, {
        ref: function(c) {
          eo(o, c), eo(i.ref, c);
        }
      }) : null)
    );
  });
}, of = /* @__PURE__ */ nf(/* @__PURE__ */ rf(Lr));
const sf = "uRZPX-OG", af = "uVryIgV1", cf = "uq5H11rI", lf = "uJBgjxMC", uf = "ux1GiROm", df = "ufRXLbIn", ff = "u2Z2VEiJ", Lt = {
  tippyBox: sf,
  tippyBoxBig: af,
  tippyBoxWhite: cf,
  toolTip: lf,
  toolTipShadow: uf,
  toolTipText: df,
  toolTipClose: ff
}, qf = ({
  toolTipText: e,
  children: t,
  visible: r,
  disabled: n,
  reference: o,
  variant: i = "Microcopy",
  background: s = "Grey600",
  showCloseButton: a,
  onCloseClick: c,
  closeButtonAriaLabel: u = "Close tooltip",
  zIndex: d,
  fixed: m
}) => e ? /* @__PURE__ */ l.jsx(
  of,
  {
    arrow: !0,
    reference: o,
    visible: r,
    disabled: n,
    animation: "",
    interactive: a,
    className: N(Lt.tippyBox, {
      [Lt.tippyBoxWhite]: s === "White",
      [Lt.tippyBoxBig]: i === "Subtitle2"
    }),
    zIndex: d,
    popperOptions: {
      strategy: m ? "fixed" : "absolute"
    },
    content: /* @__PURE__ */ l.jsxs(
      M,
      {
        py: i === "Microcopy" ? 4 : [7, 7, 8],
        px: i === "Microcopy" ? 4 : 8,
        br: i === "Microcopy" ? 4 : 5,
        className: N(Lt.toolTip, {
          [Lt.toolTipShadow]: s === "White"
        }),
        color: s === "Grey600" ? "White" : "Grey600",
        backgroundColor: s,
        positionRoot: a,
        children: [
          /* @__PURE__ */ l.jsx(
            re,
            {
              className: Lt.toolTipText,
              variant: i,
              mr: a ? 6 : void 0,
              children: e
            }
          ),
          a && /* @__PURE__ */ l.jsx(
            Ft,
            {
              iconId: "close",
              variant: s === "White" ? "Ghost" : "White",
              className: Lt.toolTipClose,
              onClick: c,
              size: "Medium",
              "aria-label": u
            }
          )
        ]
      }
    ),
    children: t
  }
) : /* @__PURE__ */ l.jsx(l.Fragment, { children: t });
export {
  sa as Accordion,
  la as AccordionContent,
  va as AccordionSummary,
  ya as Badge,
  M as Box,
  Zr as CallToActionButton,
  en as CallToActionLinkButton,
  Nf as CardContent,
  Pa as CardFrame,
  Cf as CardGrid,
  Ef as CardMasonary,
  Sf as CardMedia,
  wi as CircularLoader,
  Of as Container,
  Qa as ContentSwitcher,
  ic as ContentSwitcherTab,
  Ac as DropBox,
  Rf as DropDown,
  Tf as DropDownItem,
  Af as FeedbackMessage,
  ki as FilterPill,
  gn as FocusTrap,
  nl as FormCheckbox,
  pl as FormRadio,
  Bf as FormRangeDropdown,
  Lf as FormRangeSlider,
  Un as FormSelect,
  Pf as FormSlider,
  Al as FormText,
  $l as FormTextArea,
  Il as FormToggle,
  io as FunctionButton,
  Ni as GhostButton,
  Ci as GhostLinkButton,
  es as Grid,
  Yn as GridItem,
  Te as Icon,
  Ft as IconButton,
  Si as IconLinkButton,
  Wf as IconStack,
  lo as IconTextButton,
  Qi as IconTextLink,
  Gn as Image,
  Ff as InViewMotion,
  ts as InlineLink,
  rs as InlineLinkButton,
  ns as Link,
  If as Message,
  zf as Modal,
  os as ModalContext,
  Yl as ModalDialog,
  Mf as ModalDrawer,
  Ul as Motion,
  $f as OutcomeLoader,
  an as OverflowContainer,
  oo as Picture,
  Oi as PrimaryButton,
  Ri as PrimaryLinkButton,
  cu as Scroller,
  mu as ScrollerItem,
  Ti as SecondaryButton,
  Ai as SecondaryLinkButton,
  Hf as Skeleton,
  ka as Source,
  Ii as StickyButton,
  Di as StickyLinkButton,
  Gf as Table,
  Vf as TableGroup,
  Bi as TagButton,
  Li as TagLinkButton,
  Df as Toast,
  qf as Tooltip,
  re as Typography,
  pn as UnstyledButton
};
//# sourceMappingURL=components.js.map
