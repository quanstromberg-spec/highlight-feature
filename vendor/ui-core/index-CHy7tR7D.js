import { a as S } from "./responsive-value-CHguarkb.js";
import D from "classnames";
import { useMemo as Fr, useState as Nr, useRef as Wr, useCallback as an, useEffect as M } from "react";
import { T as G, a as V, b as Zr } from "./index-DRz21bpo.js";
var $ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const ee = {
  "ui-sm-m": "uSMFAJjK",
  "ui-sm-mt": "uhxFw9Tu",
  "ui-sm-mr": "uiyAtIHS",
  "ui-sm-mb": "uUjJLonN",
  "ui-sm-ml": "uR6qoopJ",
  "ui-sm-mx": "uqLlY2zr",
  "ui-sm-my": "utkq61OK",
  "ui-sm-p": "uVEOB1FK",
  "ui-sm-pt": "u9JPRs6p",
  "ui-sm-pr": "uZPpfqyY",
  "ui-sm-pb": "uRr2LoIv",
  "ui-sm-pl": "uBwO2KAL",
  "ui-sm-px": "uxv-9nLh",
  "ui-sm-py": "uzfsTf03",
  "ui-md-m": "uNwBUaDn",
  "ui-md-mt": "uBKcDzTW",
  "ui-md-mr": "unkN-FoI",
  "ui-md-mb": "uYnwgYvJ",
  "ui-md-ml": "uGNl9vrR",
  "ui-md-mx": "uYMYp-1v",
  "ui-md-my": "urF1Pbvd",
  "ui-md-p": "u1QxXnwX",
  "ui-md-pt": "u7GMivgA",
  "ui-md-pr": "uotVg-H1",
  "ui-md-pb": "uz0MqlXD",
  "ui-md-pl": "uUAL0B8l",
  "ui-md-px": "ur8NhxWr",
  "ui-md-py": "usqAGWlL",
  "ui-lg-m": "uWR8q1FA",
  "ui-lg-mt": "uAG3S9sr",
  "ui-lg-mr": "uReDHiRV",
  "ui-lg-mb": "uPniSaCU",
  "ui-lg-ml": "unPULdwU",
  "ui-lg-mx": "uRyWO-uT",
  "ui-lg-my": "u-rjkx-c",
  "ui-lg-p": "ujZLtjWq",
  "ui-lg-pt": "uKaId-et",
  "ui-lg-pr": "uoNhSvTV",
  "ui-lg-pb": "uqOrplZt",
  "ui-lg-pl": "urQOBR1Y",
  "ui-lg-px": "ubE3ebLc",
  "ui-lg-py": "u5nlXyxP"
}, Jr = [
  "sm",
  "md",
  "lg"
], Y = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py"
], un = (e) => {
  const r = (t) => {
    const i = e[t];
    if (typeof i > "u")
      return null;
    const n = S(i);
    return D({
      [ee[`ui-sm-${t}`]]: n[0] !== void 0,
      [ee[`ui-md-${t}`]]: n[1] !== void 0,
      [ee[`ui-lg-${t}`]]: n[2] !== void 0
    });
  };
  return D(Y.map(r));
}, sn = (e) => Object.fromEntries(Y.reduce((r, t) => {
  const i = e[t];
  if (typeof i > "u")
    return r;
  const n = S(i);
  for (let u = 0; u < Jr.length; u += 1)
    n[u] !== void 0 && r.push([`--ui-${Jr[u]}-${t}`, n[u]]);
  return r;
}, [])), tu = (e) => ({
  className: Fr(() => un(e), Y.map((r) => e[r])),
  style: Fr(() => sn(e), Y.map((r) => e[r]))
});
var re, Qr;
function on() {
  if (Qr) return re;
  Qr = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return re = e, re;
}
var te, et;
function Ni() {
  if (et) return te;
  et = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return te = e, te;
}
var ie, rt;
function X() {
  if (rt) return ie;
  rt = 1;
  var e = Ni();
  function r(t, i) {
    for (var n = t.length; n--; )
      if (e(t[n][0], i))
        return n;
    return -1;
  }
  return ie = r, ie;
}
var ne, tt;
function ln() {
  if (tt) return ne;
  tt = 1;
  var e = X(), r = Array.prototype, t = r.splice;
  function i(n) {
    var u = this.__data__, a = e(u, n);
    if (a < 0)
      return !1;
    var s = u.length - 1;
    return a == s ? u.pop() : t.call(u, a, 1), --this.size, !0;
  }
  return ne = i, ne;
}
var ae, it;
function fn() {
  if (it) return ae;
  it = 1;
  var e = X();
  function r(t) {
    var i = this.__data__, n = e(i, t);
    return n < 0 ? void 0 : i[n][1];
  }
  return ae = r, ae;
}
var ue, nt;
function cn() {
  if (nt) return ue;
  nt = 1;
  var e = X();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return ue = r, ue;
}
var se, at;
function dn() {
  if (at) return se;
  at = 1;
  var e = X();
  function r(t, i) {
    var n = this.__data__, u = e(n, t);
    return u < 0 ? (++this.size, n.push([t, i])) : n[u][1] = i, this;
  }
  return se = r, se;
}
var oe, ut;
function Z() {
  if (ut) return oe;
  ut = 1;
  var e = on(), r = ln(), t = fn(), i = cn(), n = dn();
  function u(a) {
    var s = -1, o = a == null ? 0 : a.length;
    for (this.clear(); ++s < o; ) {
      var l = a[s];
      this.set(l[0], l[1]);
    }
  }
  return u.prototype.clear = e, u.prototype.delete = r, u.prototype.get = t, u.prototype.has = i, u.prototype.set = n, oe = u, oe;
}
var le, st;
function gn() {
  if (st) return le;
  st = 1;
  var e = Z();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return le = r, le;
}
var fe, ot;
function hn() {
  if (ot) return fe;
  ot = 1;
  function e(r) {
    var t = this.__data__, i = t.delete(r);
    return this.size = t.size, i;
  }
  return fe = e, fe;
}
var ce, lt;
function vn() {
  if (lt) return ce;
  lt = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return ce = e, ce;
}
var de, ft;
function mn() {
  if (ft) return de;
  ft = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return de = e, de;
}
var ge, ct;
function Wi() {
  if (ct) return ge;
  ct = 1;
  var e = typeof $ == "object" && $ && $.Object === Object && $;
  return ge = e, ge;
}
var he, dt;
function L() {
  if (dt) return he;
  dt = 1;
  var e = Wi(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return he = t, he;
}
var ve, gt;
function Ur() {
  if (gt) return ve;
  gt = 1;
  var e = L(), r = e.Symbol;
  return ve = r, ve;
}
var me, ht;
function pn() {
  if (ht) return me;
  ht = 1;
  var e = Ur(), r = Object.prototype, t = r.hasOwnProperty, i = r.toString, n = e ? e.toStringTag : void 0;
  function u(a) {
    var s = t.call(a, n), o = a[n];
    try {
      a[n] = void 0;
      var l = !0;
    } catch {
    }
    var f = i.call(a);
    return l && (s ? a[n] = o : delete a[n]), f;
  }
  return me = u, me;
}
var pe, vt;
function yn() {
  if (vt) return pe;
  vt = 1;
  var e = Object.prototype, r = e.toString;
  function t(i) {
    return r.call(i);
  }
  return pe = t, pe;
}
var ye, mt;
function N() {
  if (mt) return ye;
  mt = 1;
  var e = Ur(), r = pn(), t = yn(), i = "[object Null]", n = "[object Undefined]", u = e ? e.toStringTag : void 0;
  function a(s) {
    return s == null ? s === void 0 ? n : i : u && u in Object(s) ? r(s) : t(s);
  }
  return ye = a, ye;
}
var _e, pt;
function W() {
  if (pt) return _e;
  pt = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return _e = e, _e;
}
var xe, yt;
function Ki() {
  if (yt) return xe;
  yt = 1;
  var e = N(), r = W(), t = "[object AsyncFunction]", i = "[object Function]", n = "[object GeneratorFunction]", u = "[object Proxy]";
  function a(s) {
    if (!r(s))
      return !1;
    var o = e(s);
    return o == i || o == n || o == t || o == u;
  }
  return xe = a, xe;
}
var be, _t;
function _n() {
  if (_t) return be;
  _t = 1;
  var e = L(), r = e["__core-js_shared__"];
  return be = r, be;
}
var qe, xt;
function xn() {
  if (xt) return qe;
  xt = 1;
  var e = _n(), r = function() {
    var i = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }();
  function t(i) {
    return !!r && r in i;
  }
  return qe = t, qe;
}
var we, bt;
function Ui() {
  if (bt) return we;
  bt = 1;
  var e = Function.prototype, r = e.toString;
  function t(i) {
    if (i != null) {
      try {
        return r.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  return we = t, we;
}
var Ae, qt;
function bn() {
  if (qt) return Ae;
  qt = 1;
  var e = Ki(), r = xn(), t = W(), i = Ui(), n = /[\\^$.*+?()[\]{}|]/g, u = /^\[object .+?Constructor\]$/, a = Function.prototype, s = Object.prototype, o = a.toString, l = s.hasOwnProperty, f = RegExp(
    "^" + o.call(l).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function c(_) {
    if (!t(_) || r(_))
      return !1;
    var q = e(_) ? f : u;
    return q.test(i(_));
  }
  return Ae = c, Ae;
}
var Te, wt;
function qn() {
  if (wt) return Te;
  wt = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return Te = e, Te;
}
var Re, At;
function H() {
  if (At) return Re;
  At = 1;
  var e = bn(), r = qn();
  function t(i, n) {
    var u = r(i, n);
    return e(u) ? u : void 0;
  }
  return Re = t, Re;
}
var Ce, Tt;
function $r() {
  if (Tt) return Ce;
  Tt = 1;
  var e = H(), r = L(), t = e(r, "Map");
  return Ce = t, Ce;
}
var je, Rt;
function J() {
  if (Rt) return je;
  Rt = 1;
  var e = H(), r = e(Object, "create");
  return je = r, je;
}
var Se, Ct;
function wn() {
  if (Ct) return Se;
  Ct = 1;
  var e = J();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Se = r, Se;
}
var Oe, jt;
function An() {
  if (jt) return Oe;
  jt = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Oe = e, Oe;
}
var Ie, St;
function Tn() {
  if (St) return Ie;
  St = 1;
  var e = J(), r = "__lodash_hash_undefined__", t = Object.prototype, i = t.hasOwnProperty;
  function n(u) {
    var a = this.__data__;
    if (e) {
      var s = a[u];
      return s === r ? void 0 : s;
    }
    return i.call(a, u) ? a[u] : void 0;
  }
  return Ie = n, Ie;
}
var Ee, Ot;
function Rn() {
  if (Ot) return Ee;
  Ot = 1;
  var e = J(), r = Object.prototype, t = r.hasOwnProperty;
  function i(n) {
    var u = this.__data__;
    return e ? u[n] !== void 0 : t.call(u, n);
  }
  return Ee = i, Ee;
}
var ke, It;
function Cn() {
  if (It) return ke;
  It = 1;
  var e = J(), r = "__lodash_hash_undefined__";
  function t(i, n) {
    var u = this.__data__;
    return this.size += this.has(i) ? 0 : 1, u[i] = e && n === void 0 ? r : n, this;
  }
  return ke = t, ke;
}
var Le, Et;
function jn() {
  if (Et) return Le;
  Et = 1;
  var e = wn(), r = An(), t = Tn(), i = Rn(), n = Cn();
  function u(a) {
    var s = -1, o = a == null ? 0 : a.length;
    for (this.clear(); ++s < o; ) {
      var l = a[s];
      this.set(l[0], l[1]);
    }
  }
  return u.prototype.clear = e, u.prototype.delete = r, u.prototype.get = t, u.prototype.has = i, u.prototype.set = n, Le = u, Le;
}
var De, kt;
function Sn() {
  if (kt) return De;
  kt = 1;
  var e = jn(), r = Z(), t = $r();
  function i() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return De = i, De;
}
var ze, Lt;
function On() {
  if (Lt) return ze;
  Lt = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return ze = e, ze;
}
var Pe, Dt;
function Q() {
  if (Dt) return Pe;
  Dt = 1;
  var e = On();
  function r(t, i) {
    var n = t.__data__;
    return e(i) ? n[typeof i == "string" ? "string" : "hash"] : n.map;
  }
  return Pe = r, Pe;
}
var Me, zt;
function In() {
  if (zt) return Me;
  zt = 1;
  var e = Q();
  function r(t) {
    var i = e(this, t).delete(t);
    return this.size -= i ? 1 : 0, i;
  }
  return Me = r, Me;
}
var He, Pt;
function En() {
  if (Pt) return He;
  Pt = 1;
  var e = Q();
  function r(t) {
    return e(this, t).get(t);
  }
  return He = r, He;
}
var Be, Mt;
function kn() {
  if (Mt) return Be;
  Mt = 1;
  var e = Q();
  function r(t) {
    return e(this, t).has(t);
  }
  return Be = r, Be;
}
var Fe, Ht;
function Ln() {
  if (Ht) return Fe;
  Ht = 1;
  var e = Q();
  function r(t, i) {
    var n = e(this, t), u = n.size;
    return n.set(t, i), this.size += n.size == u ? 0 : 1, this;
  }
  return Fe = r, Fe;
}
var Ge, Bt;
function $i() {
  if (Bt) return Ge;
  Bt = 1;
  var e = Sn(), r = In(), t = En(), i = kn(), n = Ln();
  function u(a) {
    var s = -1, o = a == null ? 0 : a.length;
    for (this.clear(); ++s < o; ) {
      var l = a[s];
      this.set(l[0], l[1]);
    }
  }
  return u.prototype.clear = e, u.prototype.delete = r, u.prototype.get = t, u.prototype.has = i, u.prototype.set = n, Ge = u, Ge;
}
var Ne, Ft;
function Dn() {
  if (Ft) return Ne;
  Ft = 1;
  var e = Z(), r = $r(), t = $i(), i = 200;
  function n(u, a) {
    var s = this.__data__;
    if (s instanceof e) {
      var o = s.__data__;
      if (!r || o.length < i - 1)
        return o.push([u, a]), this.size = ++s.size, this;
      s = this.__data__ = new t(o);
    }
    return s.set(u, a), this.size = s.size, this;
  }
  return Ne = n, Ne;
}
var We, Gt;
function zn() {
  if (Gt) return We;
  Gt = 1;
  var e = Z(), r = gn(), t = hn(), i = vn(), n = mn(), u = Dn();
  function a(s) {
    var o = this.__data__ = new e(s);
    this.size = o.size;
  }
  return a.prototype.clear = r, a.prototype.delete = t, a.prototype.get = i, a.prototype.has = n, a.prototype.set = u, We = a, We;
}
var Ke, Nt;
function Pn() {
  if (Nt) return Ke;
  Nt = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return Ke = r, Ke;
}
var Ue, Wt;
function Mn() {
  if (Wt) return Ue;
  Wt = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Ue = e, Ue;
}
var $e, Kt;
function Hn() {
  if (Kt) return $e;
  Kt = 1;
  var e = $i(), r = Pn(), t = Mn();
  function i(n) {
    var u = -1, a = n == null ? 0 : n.length;
    for (this.__data__ = new e(); ++u < a; )
      this.add(n[u]);
  }
  return i.prototype.add = i.prototype.push = r, i.prototype.has = t, $e = i, $e;
}
var Ve, Ut;
function Bn() {
  if (Ut) return Ve;
  Ut = 1;
  function e(r, t) {
    for (var i = -1, n = r == null ? 0 : r.length; ++i < n; )
      if (t(r[i], i, r))
        return !0;
    return !1;
  }
  return Ve = e, Ve;
}
var Ye, $t;
function Fn() {
  if ($t) return Ye;
  $t = 1;
  function e(r, t) {
    return r.has(t);
  }
  return Ye = e, Ye;
}
var Xe, Vt;
function Vi() {
  if (Vt) return Xe;
  Vt = 1;
  var e = Hn(), r = Bn(), t = Fn(), i = 1, n = 2;
  function u(a, s, o, l, f, c) {
    var _ = o & i, q = a.length, w = s.length;
    if (q != w && !(_ && w > q))
      return !1;
    var y = c.get(a), m = c.get(s);
    if (y && m)
      return y == s && m == a;
    var x = -1, d = !0, A = o & n ? new e() : void 0;
    for (c.set(a, s), c.set(s, a); ++x < q; ) {
      var g = a[x], T = s[x];
      if (l)
        var p = _ ? l(T, g, x, s, a, c) : l(g, T, x, a, s, c);
      if (p !== void 0) {
        if (p)
          continue;
        d = !1;
        break;
      }
      if (A) {
        if (!r(s, function(h, R) {
          if (!t(A, R) && (g === h || f(g, h, o, l, c)))
            return A.push(R);
        })) {
          d = !1;
          break;
        }
      } else if (!(g === T || f(g, T, o, l, c))) {
        d = !1;
        break;
      }
    }
    return c.delete(a), c.delete(s), d;
  }
  return Xe = u, Xe;
}
var Ze, Yt;
function Gn() {
  if (Yt) return Ze;
  Yt = 1;
  var e = L(), r = e.Uint8Array;
  return Ze = r, Ze;
}
var Je, Xt;
function Nn() {
  if (Xt) return Je;
  Xt = 1;
  function e(r) {
    var t = -1, i = Array(r.size);
    return r.forEach(function(n, u) {
      i[++t] = [u, n];
    }), i;
  }
  return Je = e, Je;
}
var Qe, Zt;
function Wn() {
  if (Zt) return Qe;
  Zt = 1;
  function e(r) {
    var t = -1, i = Array(r.size);
    return r.forEach(function(n) {
      i[++t] = n;
    }), i;
  }
  return Qe = e, Qe;
}
var er, Jt;
function Kn() {
  if (Jt) return er;
  Jt = 1;
  var e = Ur(), r = Gn(), t = Ni(), i = Vi(), n = Nn(), u = Wn(), a = 1, s = 2, o = "[object Boolean]", l = "[object Date]", f = "[object Error]", c = "[object Map]", _ = "[object Number]", q = "[object RegExp]", w = "[object Set]", y = "[object String]", m = "[object Symbol]", x = "[object ArrayBuffer]", d = "[object DataView]", A = e ? e.prototype : void 0, g = A ? A.valueOf : void 0;
  function T(p, h, R, C, I, v, O) {
    switch (R) {
      case d:
        if (p.byteLength != h.byteLength || p.byteOffset != h.byteOffset)
          return !1;
        p = p.buffer, h = h.buffer;
      case x:
        return !(p.byteLength != h.byteLength || !v(new r(p), new r(h)));
      case o:
      case l:
      case _:
        return t(+p, +h);
      case f:
        return p.name == h.name && p.message == h.message;
      case q:
      case y:
        return p == h + "";
      case c:
        var b = n;
      case w:
        var E = C & a;
        if (b || (b = u), p.size != h.size && !E)
          return !1;
        var k = O.get(p);
        if (k)
          return k == h;
        C |= s, O.set(p, h);
        var U = i(b(p), b(h), C, I, v, O);
        return O.delete(p), U;
      case m:
        if (g)
          return g.call(p) == g.call(h);
    }
    return !1;
  }
  return er = T, er;
}
var rr, Qt;
function Un() {
  if (Qt) return rr;
  Qt = 1;
  function e(r, t) {
    for (var i = -1, n = t.length, u = r.length; ++i < n; )
      r[u + i] = t[i];
    return r;
  }
  return rr = e, rr;
}
var tr, ei;
function Vr() {
  if (ei) return tr;
  ei = 1;
  var e = Array.isArray;
  return tr = e, tr;
}
var ir, ri;
function $n() {
  if (ri) return ir;
  ri = 1;
  var e = Un(), r = Vr();
  function t(i, n, u) {
    var a = n(i);
    return r(i) ? a : e(a, u(i));
  }
  return ir = t, ir;
}
var nr, ti;
function Vn() {
  if (ti) return nr;
  ti = 1;
  function e(r, t) {
    for (var i = -1, n = r == null ? 0 : r.length, u = 0, a = []; ++i < n; ) {
      var s = r[i];
      t(s, i, r) && (a[u++] = s);
    }
    return a;
  }
  return nr = e, nr;
}
var ar, ii;
function Yn() {
  if (ii) return ar;
  ii = 1;
  function e() {
    return [];
  }
  return ar = e, ar;
}
var ur, ni;
function Xn() {
  if (ni) return ur;
  ni = 1;
  var e = Vn(), r = Yn(), t = Object.prototype, i = t.propertyIsEnumerable, n = Object.getOwnPropertySymbols, u = n ? function(a) {
    return a == null ? [] : (a = Object(a), e(n(a), function(s) {
      return i.call(a, s);
    }));
  } : r;
  return ur = u, ur;
}
var sr, ai;
function Zn() {
  if (ai) return sr;
  ai = 1;
  function e(r, t) {
    for (var i = -1, n = Array(r); ++i < r; )
      n[i] = t(i);
    return n;
  }
  return sr = e, sr;
}
var or, ui;
function K() {
  if (ui) return or;
  ui = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return or = e, or;
}
var lr, si;
function Jn() {
  if (si) return lr;
  si = 1;
  var e = N(), r = K(), t = "[object Arguments]";
  function i(n) {
    return r(n) && e(n) == t;
  }
  return lr = i, lr;
}
var fr, oi;
function Qn() {
  if (oi) return fr;
  oi = 1;
  var e = Jn(), r = K(), t = Object.prototype, i = t.hasOwnProperty, n = t.propertyIsEnumerable, u = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(a) {
    return r(a) && i.call(a, "callee") && !n.call(a, "callee");
  };
  return fr = u, fr;
}
var B = { exports: {} }, cr, li;
function ea() {
  if (li) return cr;
  li = 1;
  function e() {
    return !1;
  }
  return cr = e, cr;
}
B.exports;
var fi;
function Yi() {
  return fi || (fi = 1, function(e, r) {
    var t = L(), i = ea(), n = r && !r.nodeType && r, u = n && !0 && e && !e.nodeType && e, a = u && u.exports === n, s = a ? t.Buffer : void 0, o = s ? s.isBuffer : void 0, l = o || i;
    e.exports = l;
  }(B, B.exports)), B.exports;
}
var dr, ci;
function ra() {
  if (ci) return dr;
  ci = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(i, n) {
    var u = typeof i;
    return n = n ?? e, !!n && (u == "number" || u != "symbol" && r.test(i)) && i > -1 && i % 1 == 0 && i < n;
  }
  return dr = t, dr;
}
var gr, di;
function Xi() {
  if (di) return gr;
  di = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return gr = r, gr;
}
var hr, gi;
function ta() {
  if (gi) return hr;
  gi = 1;
  var e = N(), r = Xi(), t = K(), i = "[object Arguments]", n = "[object Array]", u = "[object Boolean]", a = "[object Date]", s = "[object Error]", o = "[object Function]", l = "[object Map]", f = "[object Number]", c = "[object Object]", _ = "[object RegExp]", q = "[object Set]", w = "[object String]", y = "[object WeakMap]", m = "[object ArrayBuffer]", x = "[object DataView]", d = "[object Float32Array]", A = "[object Float64Array]", g = "[object Int8Array]", T = "[object Int16Array]", p = "[object Int32Array]", h = "[object Uint8Array]", R = "[object Uint8ClampedArray]", C = "[object Uint16Array]", I = "[object Uint32Array]", v = {};
  v[d] = v[A] = v[g] = v[T] = v[p] = v[h] = v[R] = v[C] = v[I] = !0, v[i] = v[n] = v[m] = v[u] = v[x] = v[a] = v[s] = v[o] = v[l] = v[f] = v[c] = v[_] = v[q] = v[w] = v[y] = !1;
  function O(b) {
    return t(b) && r(b.length) && !!v[e(b)];
  }
  return hr = O, hr;
}
var vr, hi;
function ia() {
  if (hi) return vr;
  hi = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return vr = e, vr;
}
var F = { exports: {} };
F.exports;
var vi;
function na() {
  return vi || (vi = 1, function(e, r) {
    var t = Wi(), i = r && !r.nodeType && r, n = i && !0 && e && !e.nodeType && e, u = n && n.exports === i, a = u && t.process, s = function() {
      try {
        var o = n && n.require && n.require("util").types;
        return o || a && a.binding && a.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(F, F.exports)), F.exports;
}
var mr, mi;
function Zi() {
  if (mi) return mr;
  mi = 1;
  var e = ta(), r = ia(), t = na(), i = t && t.isTypedArray, n = i ? r(i) : e;
  return mr = n, mr;
}
var pr, pi;
function aa() {
  if (pi) return pr;
  pi = 1;
  var e = Zn(), r = Qn(), t = Vr(), i = Yi(), n = ra(), u = Zi(), a = Object.prototype, s = a.hasOwnProperty;
  function o(l, f) {
    var c = t(l), _ = !c && r(l), q = !c && !_ && i(l), w = !c && !_ && !q && u(l), y = c || _ || q || w, m = y ? e(l.length, String) : [], x = m.length;
    for (var d in l)
      (f || s.call(l, d)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      q && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      w && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
      n(d, x))) && m.push(d);
    return m;
  }
  return pr = o, pr;
}
var yr, yi;
function ua() {
  if (yi) return yr;
  yi = 1;
  var e = Object.prototype;
  function r(t) {
    var i = t && t.constructor, n = typeof i == "function" && i.prototype || e;
    return t === n;
  }
  return yr = r, yr;
}
var _r, _i;
function sa() {
  if (_i) return _r;
  _i = 1;
  function e(r, t) {
    return function(i) {
      return r(t(i));
    };
  }
  return _r = e, _r;
}
var xr, xi;
function oa() {
  if (xi) return xr;
  xi = 1;
  var e = sa(), r = e(Object.keys, Object);
  return xr = r, xr;
}
var br, bi;
function la() {
  if (bi) return br;
  bi = 1;
  var e = ua(), r = oa(), t = Object.prototype, i = t.hasOwnProperty;
  function n(u) {
    if (!e(u))
      return r(u);
    var a = [];
    for (var s in Object(u))
      i.call(u, s) && s != "constructor" && a.push(s);
    return a;
  }
  return br = n, br;
}
var qr, qi;
function fa() {
  if (qi) return qr;
  qi = 1;
  var e = Ki(), r = Xi();
  function t(i) {
    return i != null && r(i.length) && !e(i);
  }
  return qr = t, qr;
}
var wr, wi;
function ca() {
  if (wi) return wr;
  wi = 1;
  var e = aa(), r = la(), t = fa();
  function i(n) {
    return t(n) ? e(n) : r(n);
  }
  return wr = i, wr;
}
var Ar, Ai;
function da() {
  if (Ai) return Ar;
  Ai = 1;
  var e = $n(), r = Xn(), t = ca();
  function i(n) {
    return e(n, t, r);
  }
  return Ar = i, Ar;
}
var Tr, Ti;
function ga() {
  if (Ti) return Tr;
  Ti = 1;
  var e = da(), r = 1, t = Object.prototype, i = t.hasOwnProperty;
  function n(u, a, s, o, l, f) {
    var c = s & r, _ = e(u), q = _.length, w = e(a), y = w.length;
    if (q != y && !c)
      return !1;
    for (var m = q; m--; ) {
      var x = _[m];
      if (!(c ? x in a : i.call(a, x)))
        return !1;
    }
    var d = f.get(u), A = f.get(a);
    if (d && A)
      return d == a && A == u;
    var g = !0;
    f.set(u, a), f.set(a, u);
    for (var T = c; ++m < q; ) {
      x = _[m];
      var p = u[x], h = a[x];
      if (o)
        var R = c ? o(h, p, x, a, u, f) : o(p, h, x, u, a, f);
      if (!(R === void 0 ? p === h || l(p, h, s, o, f) : R)) {
        g = !1;
        break;
      }
      T || (T = x == "constructor");
    }
    if (g && !T) {
      var C = u.constructor, I = a.constructor;
      C != I && "constructor" in u && "constructor" in a && !(typeof C == "function" && C instanceof C && typeof I == "function" && I instanceof I) && (g = !1);
    }
    return f.delete(u), f.delete(a), g;
  }
  return Tr = n, Tr;
}
var Rr, Ri;
function ha() {
  if (Ri) return Rr;
  Ri = 1;
  var e = H(), r = L(), t = e(r, "DataView");
  return Rr = t, Rr;
}
var Cr, Ci;
function va() {
  if (Ci) return Cr;
  Ci = 1;
  var e = H(), r = L(), t = e(r, "Promise");
  return Cr = t, Cr;
}
var jr, ji;
function ma() {
  if (ji) return jr;
  ji = 1;
  var e = H(), r = L(), t = e(r, "Set");
  return jr = t, jr;
}
var Sr, Si;
function pa() {
  if (Si) return Sr;
  Si = 1;
  var e = H(), r = L(), t = e(r, "WeakMap");
  return Sr = t, Sr;
}
var Or, Oi;
function ya() {
  if (Oi) return Or;
  Oi = 1;
  var e = ha(), r = $r(), t = va(), i = ma(), n = pa(), u = N(), a = Ui(), s = "[object Map]", o = "[object Object]", l = "[object Promise]", f = "[object Set]", c = "[object WeakMap]", _ = "[object DataView]", q = a(e), w = a(r), y = a(t), m = a(i), x = a(n), d = u;
  return (e && d(new e(new ArrayBuffer(1))) != _ || r && d(new r()) != s || t && d(t.resolve()) != l || i && d(new i()) != f || n && d(new n()) != c) && (d = function(A) {
    var g = u(A), T = g == o ? A.constructor : void 0, p = T ? a(T) : "";
    if (p)
      switch (p) {
        case q:
          return _;
        case w:
          return s;
        case y:
          return l;
        case m:
          return f;
        case x:
          return c;
      }
    return g;
  }), Or = d, Or;
}
var Ir, Ii;
function _a() {
  if (Ii) return Ir;
  Ii = 1;
  var e = zn(), r = Vi(), t = Kn(), i = ga(), n = ya(), u = Vr(), a = Yi(), s = Zi(), o = 1, l = "[object Arguments]", f = "[object Array]", c = "[object Object]", _ = Object.prototype, q = _.hasOwnProperty;
  function w(y, m, x, d, A, g) {
    var T = u(y), p = u(m), h = T ? f : n(y), R = p ? f : n(m);
    h = h == l ? c : h, R = R == l ? c : R;
    var C = h == c, I = R == c, v = h == R;
    if (v && a(y)) {
      if (!a(m))
        return !1;
      T = !0, C = !1;
    }
    if (v && !C)
      return g || (g = new e()), T || s(y) ? r(y, m, x, d, A, g) : t(y, m, h, x, d, A, g);
    if (!(x & o)) {
      var O = C && q.call(y, "__wrapped__"), b = I && q.call(m, "__wrapped__");
      if (O || b) {
        var E = O ? y.value() : y, k = b ? m.value() : m;
        return g || (g = new e()), A(E, k, x, d, g);
      }
    }
    return v ? (g || (g = new e()), i(y, m, x, d, A, g)) : !1;
  }
  return Ir = w, Ir;
}
var Er, Ei;
function xa() {
  if (Ei) return Er;
  Ei = 1;
  var e = _a(), r = K();
  function t(i, n, u, a, s) {
    return i === n ? !0 : i == null || n == null || !r(i) && !r(n) ? i !== i && n !== n : e(i, n, u, a, t, s);
  }
  return Er = t, Er;
}
var kr, ki;
function ba() {
  if (ki) return kr;
  ki = 1;
  var e = xa();
  function r(t, i) {
    return e(t, i);
  }
  return kr = r, kr;
}
var qa = ba();
const Ji = /* @__PURE__ */ Kr(qa);
var Lr, Li;
function wa() {
  if (Li) return Lr;
  Li = 1;
  var e = L(), r = function() {
    return e.Date.now();
  };
  return Lr = r, Lr;
}
var Dr, Di;
function Aa() {
  if (Di) return Dr;
  Di = 1;
  var e = /\s/;
  function r(t) {
    for (var i = t.length; i-- && e.test(t.charAt(i)); )
      ;
    return i;
  }
  return Dr = r, Dr;
}
var zr, zi;
function Ta() {
  if (zi) return zr;
  zi = 1;
  var e = Aa(), r = /^\s+/;
  function t(i) {
    return i && i.slice(0, e(i) + 1).replace(r, "");
  }
  return zr = t, zr;
}
var Pr, Pi;
function Ra() {
  if (Pi) return Pr;
  Pi = 1;
  var e = N(), r = K(), t = "[object Symbol]";
  function i(n) {
    return typeof n == "symbol" || r(n) && e(n) == t;
  }
  return Pr = i, Pr;
}
var Mr, Mi;
function Ca() {
  if (Mi) return Mr;
  Mi = 1;
  var e = Ta(), r = W(), t = Ra(), i = NaN, n = /^[-+]0x[0-9a-f]+$/i, u = /^0b[01]+$/i, a = /^0o[0-7]+$/i, s = parseInt;
  function o(l) {
    if (typeof l == "number")
      return l;
    if (t(l))
      return i;
    if (r(l)) {
      var f = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = r(f) ? f + "" : f;
    }
    if (typeof l != "string")
      return l === 0 ? l : +l;
    l = e(l);
    var c = u.test(l);
    return c || a.test(l) ? s(l.slice(2), c ? 2 : 8) : n.test(l) ? i : +l;
  }
  return Mr = o, Mr;
}
var Hr, Hi;
function Qi() {
  if (Hi) return Hr;
  Hi = 1;
  var e = W(), r = wa(), t = Ca(), i = "Expected a function", n = Math.max, u = Math.min;
  function a(s, o, l) {
    var f, c, _, q, w, y, m = 0, x = !1, d = !1, A = !0;
    if (typeof s != "function")
      throw new TypeError(i);
    o = t(o) || 0, e(l) && (x = !!l.leading, d = "maxWait" in l, _ = d ? n(t(l.maxWait) || 0, o) : _, A = "trailing" in l ? !!l.trailing : A);
    function g(b) {
      var E = f, k = c;
      return f = c = void 0, m = b, q = s.apply(k, E), q;
    }
    function T(b) {
      return m = b, w = setTimeout(R, o), x ? g(b) : q;
    }
    function p(b) {
      var E = b - y, k = b - m, U = o - E;
      return d ? u(U, _ - k) : U;
    }
    function h(b) {
      var E = b - y, k = b - m;
      return y === void 0 || E >= o || E < 0 || d && k >= _;
    }
    function R() {
      var b = r();
      if (h(b))
        return C(b);
      w = setTimeout(R, p(b));
    }
    function C(b) {
      return w = void 0, A && f ? g(b) : (f = c = void 0, q);
    }
    function I() {
      w !== void 0 && clearTimeout(w), m = 0, f = y = c = w = void 0;
    }
    function v() {
      return w === void 0 ? q : C(r());
    }
    function O() {
      var b = r(), E = h(b);
      if (f = arguments, c = this, y = b, E) {
        if (w === void 0)
          return T(y);
        if (d)
          return clearTimeout(w), w = setTimeout(R, o), g(y);
      }
      return w === void 0 && (w = setTimeout(R, o)), q;
    }
    return O.cancel = I, O.flush = v, O;
  }
  return Hr = a, Hr;
}
var Br, Bi;
function ja() {
  if (Bi) return Br;
  Bi = 1;
  var e = Qi(), r = W(), t = "Expected a function";
  function i(n, u, a) {
    var s = !0, o = !0;
    if (typeof n != "function")
      throw new TypeError(t);
    return r(a) && (s = "leading" in a ? !!a.leading : s, o = "trailing" in a ? !!a.trailing : o), e(n, u, {
      leading: s,
      maxWait: u,
      trailing: o
    });
  }
  return Br = i, Br;
}
var Sa = ja();
const Yr = /* @__PURE__ */ Kr(Sa), Oa = () => window.matchMedia(`(min-width: ${G.ExtraLarge}px)`).matches, Ia = () => window.matchMedia(`(min-width: ${G.Large}px) and (max-width: ${G.ExtraLarge - 1}px)`).matches, Ea = () => window.matchMedia(`(min-width: ${G.Medium}px) and (max-width: ${G.Large - 1}px)`).matches, ka = () => Oa() ? "ExtraLarge" : Ia() ? "Large" : Ea() ? "Medium" : "Small", Xr = () => {
  const [e, r] = Nr("Small"), t = Wr(e), i = an(() => {
    const n = ka();
    Ji(t.current, n) || (t.current = n, r(n));
  }, []);
  return M(() => {
    i();
    const n = Yr(() => {
      i();
    }, 1e3 / 60);
    return window.addEventListener("resize", n, { passive: !0 }), () => {
      window.removeEventListener("resize", n);
    };
  }, []), e;
}, La = (e, r) => {
  for (let t of V) {
    if (t === r)
      return !0;
    if (t === e)
      return !1;
  }
  return !1;
}, Da = (e, r) => {
  for (let t = V.length - 1; t >= 0; t--) {
    const i = V[t];
    if (!(i !== e && i !== r)) {
      if (i === r)
        return !0;
      if (i === e)
        return !1;
    }
  }
  return !1;
}, iu = (e) => {
  const r = Xr();
  return r && Da(r, e);
}, nu = (e) => {
  const r = Xr();
  return r && La(r, e);
}, au = (e) => {
  const r = Xr(), t = S(e);
  let i = V.indexOf(r);
  for (; i >= 0; ) {
    const n = t[i];
    if (typeof n < "u")
      return n;
    i -= 1;
  }
}, za = {
  innerWidth: 375,
  innerHeight: 812,
  outerWidth: 375,
  outerHeight: 812
}, uu = () => {
  const [e, r] = Nr(za), t = Wr(e), i = () => {
    const n = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight
    };
    Ji(n, t.current) || (t.current = n, r(n));
  };
  return M(() => {
    i();
    const n = Yr(() => {
      i();
    }, 1e3 / 60);
    return window.addEventListener("resize", n, { passive: !0 }), () => {
      window.removeEventListener("resize", n);
    };
  }, []), e;
};
var Pa = Qi();
const su = /* @__PURE__ */ Kr(Pa), ou = () => {
  const e = Wr(!0), r = e.current;
  return e.current = !1, r;
}, en = (e, r = 200) => {
  const [t, i] = Nr(e), n = Yr(i, r, { leading: !0 });
  return [t, n];
}, lu = (e, r) => {
  const { rateLimit: t = 100, disabled: i = !1 } = r || {}, [n, u] = en({}, t);
  return M(() => {
    if (typeof ResizeObserver > "u")
      return;
    let a;
    return i || (a = new ResizeObserver((s = []) => {
      window.requestAnimationFrame(() => {
        s.forEach((o) => {
          const {
            clientHeight: l,
            clientWidth: f,
            scrollHeight: c,
            scrollWidth: _
          } = o.target;
          u({
            clientHeight: l,
            clientWidth: f,
            scrollHeight: c,
            scrollWidth: _
          });
        });
      });
    }), e.current && a.observe(e.current)), () => {
      a == null || a.disconnect();
    };
  }, [i]), n;
}, fu = (e, r) => {
  const t = (i) => {
    e.current && !e.current.contains(i.target) && r(i);
  };
  M(() => (document.addEventListener("click", t), () => {
    document.removeEventListener("click", t);
  }));
}, cu = (e) => {
  M(() => {
    const r = (t) => {
      var n, u, a, s;
      const i = e == null ? void 0 : e.current;
      if (i && document.activeElement && ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Home", "End"].includes(t.code)) {
        const o = Array.from(
          i.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((f) => !f.hasAttribute("disabled") && f.getAttribute("aria-hidden") !== "true") || [], l = o.indexOf(document.activeElement);
        if (l === -1) return;
        switch (t.preventDefault(), t.code) {
          case "ArrowDown":
          case "ArrowRight":
            (n = o[l + 1] || o[0]) == null || n.focus();
            break;
          case "ArrowLeft":
          case "ArrowUp":
            (u = o[l - 1] || o[o.length - 1]) == null || u.focus();
            break;
          case "Home":
            (a = o[0]) == null || a.focus();
            break;
          case "End":
            (s = o[o.length - 1]) == null || s.focus();
            break;
        }
      }
    };
    return window.addEventListener("keydown", r, !1), () => {
      window.removeEventListener("keydown", r);
    };
  }, []);
}, du = (e) => {
  const [r, t] = en(!1, 100);
  return M(() => {
    if (typeof ResizeObserver > "u")
      return;
    const i = new ResizeObserver((n = []) => {
      window.requestAnimationFrame(() => {
        n.forEach((u) => {
          const { offsetHeight: a } = u.target;
          t(a > 0);
        });
      });
    });
    return e.current && i && i.observe(e.current), () => {
      i && i.disconnect();
    };
  }, [e]), r;
}, Ma = {
  "ui-size--sm-width-auto": "uIl7jtBH",
  "ui-size--sm-height-auto": "ultKpPSA",
  "ui-size--sm-width-full": "u7hPjq9s",
  "ui-size--sm-height-full": "u4TFckAP",
  "ui-size--sm-size-auto": "uMXgB4H8",
  "ui-size--sm-size-full": "uxzWEsF1",
  "ui-size--sm-width": "uEnnf-CL",
  "ui-size--sm-height": "uRjRbrhW",
  "ui-size--sm-size": "u3IFqJL8",
  "ui-size--md-width-auto": "u4cttTYz",
  "ui-size--md-height-auto": "umzYDg0Z",
  "ui-size--md-width-full": "u0N514Q1",
  "ui-size--md-height-full": "uOntA9-r",
  "ui-size--md-size-auto": "uIE0Ppxk",
  "ui-size--md-size-full": "uSNjbCq3",
  "ui-size--md-width": "u7HmtvDM",
  "ui-size--md-height": "uMjHA2EF",
  "ui-size--md-size": "uHN5LOtE",
  "ui-size--lg-width-auto": "u4GteFFm",
  "ui-size--lg-height-auto": "uehVlpqN",
  "ui-size--lg-width-full": "uLN4C1Bg",
  "ui-size--lg-height-full": "u2X6AFHz",
  "ui-size--lg-size-auto": "ulhlc98-",
  "ui-size--lg-size-full": "uOGj3fyv",
  "ui-size--lg-width": "ucE0xXE4",
  "ui-size--lg-height": "uRFzqxn-",
  "ui-size--lg-size": "u-GWObsf"
}, rn = [
  ["width", "w"],
  ["height", "h"],
  ["size", "s"]
], Gr = ["sm", "md", "lg"], Ha = (e) => D(
  rn.map(([r]) => {
    const t = e[r];
    if (!t)
      return;
    const i = S(t);
    return Gr.reduce((n, u, a) => {
      const s = i[a];
      if (typeof s < "u") {
        let o = `ui-size--${u}-${r}`;
        typeof s == "string" && (o += `-${s}`), n.push(Ma[o]);
      }
      return n;
    }, []);
  })
), Ba = (e) => Object.fromEntries(
  rn.reduce((r, [t, i]) => {
    const n = e[t];
    if (typeof n < "u") {
      const u = S(n);
      for (let a = 0; a < Gr.length; a += 1)
        typeof u[a] == "number" && r.push([`--ui-${Gr[a]}-${i}`, u[a]]);
    }
    return r;
  }, [])
), gu = (e) => ({
  className: Ha(e),
  style: Ba(e)
}), Fi = {
  "ui-color-primary": "ueIqAWvW",
  "ui-background-primary": "uHh8-hmH",
  "ui-color-primary-darker": "ubaT5L0B",
  "ui-background-primary-darker": "uCt33lzw",
  "ui-color-secondary": "uQOMI2iD",
  "ui-background-secondary": "uC0jrpQV",
  "ui-color-secondary-darker": "uY0sBTPc",
  "ui-background-secondary-darker": "ulAuPX7A",
  "ui-color-success-green": "u4NcpAks",
  "ui-background-success-green": "u-lH9FUI",
  "ui-color-error-red": "uLpYGB5n",
  "ui-background-error-red": "uU4KpSzR",
  "ui-color-caution-yellow": "uVcf2mjP",
  "ui-background-caution-yellow": "uyd-bdL2",
  "ui-color-black": "uyVvbJwc",
  "ui-background-black": "uMgjDyf3",
  "ui-color-white": "u2cpEdV0",
  "ui-background-white": "un2H81Iz",
  "ui-color-grey100": "u8gKDs7s",
  "ui-background-grey100": "uYB4LNxj",
  "ui-color-grey200": "uY5haeDT",
  "ui-background-grey200": "usOhdZRz",
  "ui-color-grey300": "u8ex1ElT",
  "ui-background-grey300": "uhEq1Gad",
  "ui-color-grey400": "uKN3KOpN",
  "ui-background-grey400": "ukjujX2x",
  "ui-color-grey500": "u32VY3YO",
  "ui-background-grey500": "u6EZkbwR",
  "ui-color-grey600": "udYAVlkm",
  "ui-background-grey600": "uRlgSqJv",
  "ui-color-grey800": "uiIAZOC8",
  "ui-background-grey800": "uMl5VMq0"
}, Fa = ({
  color: e,
  backgroundColor: r
}) => D([
  e ? Fi[`ui-color-${Zr[e]}`] : void 0,
  r ? Fi[`ui-background-${Zr[r]}`] : void 0
]), Ga = ({
  colorTint: e,
  backgroundColorTint: r
}) => ({
  "--ui-fg-tint": e,
  "--ui-bg-tint": r
}), hu = (e) => ({
  className: Fa(e),
  style: Ga(e)
}), P = {
  "ui-sm-br": "uQy-zy5Z",
  "ui-sm-br-50": "uBqDYKrY",
  "ui-md-br": "uzgGmL2D",
  "ui-md-br-50": "uO58EjEW",
  "ui-lg-br": "uHazn0-E",
  "ui-lg-br-50": "ufNlA8na"
}, Na = [
  "sm",
  "md",
  "lg"
], Wa = (e) => D({
  [P["ui-sm-br"]]: typeof e[0] == "number",
  [P["ui-md-br"]]: typeof e[1] == "number",
  [P["ui-lg-br"]]: typeof e[2] == "number",
  [P["ui-sm-br-50"]]: e[0] === "50%",
  [P["ui-md-br-50"]]: e[1] === "50%",
  [P["ui-lg-br-50"]]: e[2] === "50%"
}), Ka = (e) => Object.fromEntries(Na.reduce((r, t, i) => (e[i] === void 0 || e[i] === "50%" || r.push([`--ui-${t}-br`, e[i]]), r), [])), vu = (e) => Fr(() => {
  const r = S(e.br);
  return {
    className: Wa(r),
    style: Ka(r)
  };
}, [e.br]), mu = (e) => Object.fromEntries(Object.entries(e).filter(([r]) => r.startsWith("aria-"))), j = {
  "textAlign--sm-center": "ubrBIuT0",
  "textAlign--sm-inherit": "uBi-VfdI",
  "textAlign--sm-justify": "utZRpOC-",
  "textAlign--sm-left": "u18bDcVI",
  "textAlign--sm-right": "uxnVdwng",
  "textAlign--sm-start": "uJFdNlWR",
  "textAlign--sm-end": "uPsgh5CT",
  "wordBreak--sm-normal": "uC6Fa3jz",
  "wordBreak--sm-break-word": "uqyYBvUC",
  "wordBreak--sm-break-all": "uM5bxdpV",
  "wordBreak--sm-keep-all": "u8AzV598",
  "decoration--sm-line-through": "uBR-Jt5H",
  "decoration--sm-overline": "ukiAGsxH",
  "decoration--sm-underline": "uQMYgbit",
  "decoration--sm-none": "uuxeKQAq",
  "lineClamp--sm": "uEBR6wKh",
  "lineClamp--sm-initial": "uHPfa4Iy",
  "textAlign--md-center": "u-DIjeD3",
  "textAlign--md-inherit": "uLEPSmGX",
  "textAlign--md-justify": "uxeYzZSi",
  "textAlign--md-left": "uuaLDm7y",
  "textAlign--md-right": "ugXD-Zxi",
  "textAlign--md-start": "uaXXgX5b",
  "textAlign--md-end": "uVQ7M93R",
  "wordBreak--md-normal": "uZRdBFa4",
  "wordBreak--md-break-word": "u--b-a4u",
  "wordBreak--md-break-all": "uAp7MlV6",
  "wordBreak--md-keep-all": "ud4VdBMW",
  "decoration--md-line-through": "ubPXlPQY",
  "decoration--md-overline": "u-M8ROTv",
  "decoration--md-underline": "uWPJ29sG",
  "decoration--md-none": "uayTZEe7",
  "lineClamp--md": "uubfSUB1",
  "lineClamp--md-initial": "ugNKnRI-",
  "textAlign--lg-center": "uVlWFPAP",
  "textAlign--lg-inherit": "unv0EtN5",
  "textAlign--lg-justify": "ue3qswXL",
  "textAlign--lg-left": "u3-eazxX",
  "textAlign--lg-right": "u9inH0EG",
  "textAlign--lg-start": "uDJ0HkQq",
  "textAlign--lg-end": "u-TyVGWY",
  "wordBreak--lg-normal": "u4VROD0r",
  "wordBreak--lg-break-word": "uvmaew4Y",
  "wordBreak--lg-break-all": "uFr7Rzf2",
  "wordBreak--lg-keep-all": "uCv5K16B",
  "decoration--lg-line-through": "uz1Wpbkn",
  "decoration--lg-overline": "uTHrWC45",
  "decoration--lg-underline": "us3FBmYL",
  "decoration--lg-none": "uD--ZtQ8",
  "lineClamp--lg": "uy434hgn",
  "lineClamp--lg-initial": "ucOPdE6U"
}, Ua = (e, r, t, i, n) => (t[0] && (i[0] = "line-through"), t[1] && (i[1] = "line-through"), t[2] && (i[2] = "line-through"), D({
  [j[`textAlign--sm-${e[0]}`]]: e[0] !== void 0,
  [j[`textAlign--md-${e[1]}`]]: e[1] !== void 0,
  [j[`textAlign--lg-${e[2]}`]]: e[2] !== void 0,
  [j[`wordBreak--sm-${n[0]}`]]: n[0] !== void 0,
  [j[`wordBreak--md-${n[1]}`]]: n[1] !== void 0,
  [j[`wordBreak--lg-${n[2]}`]]: n[2] !== void 0,
  [j[`decoration--sm-${i[0]}`]]: i[0] !== void 0,
  [j[`decoration--md-${i[1]}`]]: i[1] !== void 0,
  [j[`decoration--lg-${i[2]}`]]: i[2] !== void 0,
  [j["lineClamp--sm"]]: typeof r[0] == "number",
  [j["lineClamp--sm-initial"]]: r[0] === "initial",
  [j["lineClamp--md"]]: typeof r[1] == "number",
  [j["lineClamp--md-initial"]]: r[1] === "initial",
  [j["lineClamp--lg"]]: typeof r[2] == "number",
  [j["lineClamp--lg-initial"]]: r[2] === "initial"
})), $a = (e) => Object.fromEntries(["sm", "md", "lg"].reduce((r, t, i) => (typeof e[i] > "u" || e[i] === "initial" || r.push([`--ui-${t}-lc`, e[i]]), r), [])), pu = (e) => {
  const r = S(e.textAlign), t = S(e.lineClamp), i = S(e.strikethrough), n = S(e.decoration), u = S(e.wordBreak);
  return {
    className: Ua(r, t, i, n, u),
    style: $a(t)
  };
}, z = {
  "ui-flex--block": "uiytIAkK",
  "ui-flex--inline": "u8VqE6MA",
  "ui-flex--sm-align-items-baseline": "upSZRpUu",
  "ui-flex--sm-align-items-center": "uoCsWAYD",
  "ui-flex--sm-align-items-flex-end": "ujO-Kf5h",
  "ui-flex--sm-align-items-flex-start": "u3JjiXQm",
  "ui-flex--sm-align-items-stretch": "uuhCpPD4",
  "ui-flex--sm-align-items-inherit": "u-DAUzL-",
  "ui-flex--sm-align-items-initial": "uEAadobS",
  "ui-flex--sm-align-items-unset": "uyOqkrKZ",
  "ui-flex--sm-align-content-flex-start": "uuV4RBRu",
  "ui-flex--sm-align-content-flex-end": "uXl5QIWr",
  "ui-flex--sm-align-content-center": "u72RggzI",
  "ui-flex--sm-align-content-space-between": "uz5zdaKL",
  "ui-flex--sm-align-content-space-around": "uc4zlQPH",
  "ui-flex--sm-align-content-stretch": "uPjLdDF4",
  "ui-flex--sm-justify-content-flex-start": "uZ6Xjvfn",
  "ui-flex--sm-justify-content-flex-end": "ur90e7Qc",
  "ui-flex--sm-justify-content-center": "u0ypCKto",
  "ui-flex--sm-justify-content-space-between": "uy09N2ne",
  "ui-flex--sm-justify-content-space-around": "urrM1c1D",
  "ui-flex--sm-justify-content-space-evenly": "uYfQaJje",
  "ui-flex--sm-flex-wrap-nowrap": "uVMyh1bZ",
  "ui-flex--sm-flex-wrap-wrap": "ubQFvOCj",
  "ui-flex--sm-flex-wrap-wrap-reverse": "ua-n1e0-",
  "ui-flex--sm-flex-direction-row": "uMngZehT",
  "ui-flex--sm-flex-direction-row-reverse": "uV4nMwbj",
  "ui-flex--sm-flex-direction-column": "uWswdYXc",
  "ui-flex--sm-flex-direction-column-reverse": "uCEvrjcY",
  "ui-flex--sm-flex-grow-0": "um1EQgy-",
  "ui-flex--sm-flex-grow-1": "ucHWfxgX",
  "ui-flex--sm-flex-grow-2": "uN6hryly",
  "ui-flex--sm-flex-grow-3": "utGfI0pB",
  "ui-flex--sm-flex-shrink-0": "uVQHIWAi",
  "ui-flex--sm-flex-shrink-1": "uHXX0h5Y",
  "ui-flex--sm-flex-shrink-2": "uNl157bO",
  "ui-flex--sm-flex-shrink-3": "u9HnhnHb",
  "ui-flex--sm-flex-basis-0": "uCUo9N4w",
  "ui-flex--sm-flex-basis-auto": "ubaNFMZI",
  "ui-flex--sm-justify-self-center": "uLf-RQxC",
  "ui-flex--sm-justify-self-flex-end": "uvumlJLD",
  "ui-flex--sm-justify-self-flex-start": "u-49qmxi",
  "ui-flex--sm-justify-self-stretch": "u-gyvlB7",
  "ui-flex--sm-align-self-center": "ucIS8Gqh",
  "ui-flex--sm-align-self-flex-end": "umD-XZL-",
  "ui-flex--sm-align-self-flex-start": "uvUEYUGW",
  "ui-flex--sm-align-self-stretch": "u-UN23-3",
  "ui-flex--sm-gap": "uPSM6-iw",
  "ui-flex--sm-order": "uXC9HXsb",
  "ui-flex--md-align-items-baseline": "u7dVaLIU",
  "ui-flex--md-align-items-center": "u21M7F--",
  "ui-flex--md-align-items-flex-end": "udRTFkcw",
  "ui-flex--md-align-items-flex-start": "uBn04TsR",
  "ui-flex--md-align-items-stretch": "ukNETLQ5",
  "ui-flex--md-align-items-inherit": "u2ceUYwK",
  "ui-flex--md-align-items-initial": "ut3ppCRx",
  "ui-flex--md-align-items-unset": "uyqTFq-C",
  "ui-flex--md-align-content-flex-start": "u-TAxAcw",
  "ui-flex--md-align-content-flex-end": "urCPZTgC",
  "ui-flex--md-align-content-center": "urjuHdMY",
  "ui-flex--md-align-content-space-between": "uq4Lwxnk",
  "ui-flex--md-align-content-space-around": "u1B0CaTj",
  "ui-flex--md-align-content-stretch": "uF3uWi1-",
  "ui-flex--md-justify-content-flex-start": "uH6GZ1Ee",
  "ui-flex--md-justify-content-flex-end": "ukjWEKV5",
  "ui-flex--md-justify-content-center": "u6eI2Yjt",
  "ui-flex--md-justify-content-space-between": "u0zPpUuY",
  "ui-flex--md-justify-content-space-around": "uDnxP-3R",
  "ui-flex--md-justify-content-space-evenly": "uHVYQABo",
  "ui-flex--md-flex-wrap-nowrap": "u18V8-xz",
  "ui-flex--md-flex-wrap-wrap": "ubvIGLPS",
  "ui-flex--md-flex-wrap-wrap-reverse": "uhvDfLtg",
  "ui-flex--md-flex-direction-row": "uTDYd-ol",
  "ui-flex--md-flex-direction-row-reverse": "uimlfZJu",
  "ui-flex--md-flex-direction-column": "uXsU0FeZ",
  "ui-flex--md-flex-direction-column-reverse": "u8JJdpOj",
  "ui-flex--md-flex-grow-0": "uzd3qAPA",
  "ui-flex--md-flex-grow-1": "uWiJD-He",
  "ui-flex--md-flex-grow-2": "uhLNH-tg",
  "ui-flex--md-flex-grow-3": "uDWYYP2q",
  "ui-flex--md-flex-shrink-0": "upnAkRM3",
  "ui-flex--md-flex-shrink-1": "u-7nB-zT",
  "ui-flex--md-flex-shrink-2": "ugT9mDFE",
  "ui-flex--md-flex-shrink-3": "uVuQy1pn",
  "ui-flex--md-flex-basis-0": "ue-ZcO58",
  "ui-flex--md-flex-basis-auto": "uwt7mB2A",
  "ui-flex--md-justify-self-center": "uR0Qiaq1",
  "ui-flex--md-justify-self-flex-end": "uJTHFD1m",
  "ui-flex--md-justify-self-flex-start": "u1S2tRgF",
  "ui-flex--md-justify-self-stretch": "uIwznOIb",
  "ui-flex--md-align-self-center": "uiujC2Ja",
  "ui-flex--md-align-self-flex-end": "uVA87uVG",
  "ui-flex--md-align-self-flex-start": "u3em7oMZ",
  "ui-flex--md-align-self-stretch": "uk3hsA31",
  "ui-flex--md-gap": "uY-d1Ts5",
  "ui-flex--md-order": "usDreW4a",
  "ui-flex--lg-align-items-baseline": "uaHl-l8z",
  "ui-flex--lg-align-items-center": "uehymDZ8",
  "ui-flex--lg-align-items-flex-end": "uKCasbCh",
  "ui-flex--lg-align-items-flex-start": "ud8n8LR7",
  "ui-flex--lg-align-items-stretch": "ue4XOGnW",
  "ui-flex--lg-align-items-inherit": "uaX-obZn",
  "ui-flex--lg-align-items-initial": "uSqgXSiC",
  "ui-flex--lg-align-items-unset": "uDjBpprY",
  "ui-flex--lg-align-content-flex-start": "uIF4Mu0F",
  "ui-flex--lg-align-content-flex-end": "u7WsepMG",
  "ui-flex--lg-align-content-center": "u1FVwOE6",
  "ui-flex--lg-align-content-space-between": "uXfgdqZu",
  "ui-flex--lg-align-content-space-around": "u-0wjep8",
  "ui-flex--lg-align-content-stretch": "uCFNabgb",
  "ui-flex--lg-justify-content-flex-start": "ud-YUcpZ",
  "ui-flex--lg-justify-content-flex-end": "uVCHsnon",
  "ui-flex--lg-justify-content-center": "uVkSafO5",
  "ui-flex--lg-justify-content-space-between": "u-P-t0dn",
  "ui-flex--lg-justify-content-space-around": "uV3I49Iv",
  "ui-flex--lg-justify-content-space-evenly": "ugnmINXJ",
  "ui-flex--lg-flex-wrap-nowrap": "u-2mudLr",
  "ui-flex--lg-flex-wrap-wrap": "ux-6JeWk",
  "ui-flex--lg-flex-wrap-wrap-reverse": "uthKKYWd",
  "ui-flex--lg-flex-direction-row": "uQS9r--H",
  "ui-flex--lg-flex-direction-row-reverse": "ukd8Xfb0",
  "ui-flex--lg-flex-direction-column": "uD--sgeH",
  "ui-flex--lg-flex-direction-column-reverse": "uXowqo1C",
  "ui-flex--lg-flex-grow-0": "uYGAorB1",
  "ui-flex--lg-flex-grow-1": "uzmBeIMk",
  "ui-flex--lg-flex-grow-2": "uMyIqFhm",
  "ui-flex--lg-flex-grow-3": "uOc8SBkl",
  "ui-flex--lg-flex-shrink-0": "uJ-8PvMC",
  "ui-flex--lg-flex-shrink-1": "uf8Lv-YP",
  "ui-flex--lg-flex-shrink-2": "uvoNggQj",
  "ui-flex--lg-flex-shrink-3": "u-C6aopI",
  "ui-flex--lg-flex-basis-0": "uxfut8fO",
  "ui-flex--lg-flex-basis-auto": "uBceMbLt",
  "ui-flex--lg-justify-self-center": "umbx4zsH",
  "ui-flex--lg-justify-self-flex-end": "uyhtDxHN",
  "ui-flex--lg-justify-self-flex-start": "uZE3pzKi",
  "ui-flex--lg-justify-self-stretch": "u-eL-v4T",
  "ui-flex--lg-align-self-center": "u5XtZJVd",
  "ui-flex--lg-align-self-flex-end": "uRaGNk9v",
  "ui-flex--lg-align-self-flex-start": "u20z8Vhe",
  "ui-flex--lg-align-self-stretch": "uAwXsvoy",
  "ui-flex--lg-gap": "uRecDkuL",
  "ui-flex--lg-order": "u-cYegFt"
}, tn = [
  ["alignItems", "align-items"],
  ["alignContent", "align-content"],
  ["justifyContent", "justify-content"],
  ["flexWrap", "flex-wrap"],
  ["flexDirection", "flex-direction"]
], Va = [
  ["flexGrow", "flex-grow"],
  ["flexShrink", "flex-shrink"],
  ["flexBasis", "flex-basis"],
  ["justifySelf", "justify-self"],
  ["alignSelf", "align-self"]
], nn = [
  "order",
  "gap"
], Ya = [
  ...tn,
  ...Va
], Xa = (e) => {
  const { container: r, flexType: t } = e, i = ([s, o]) => {
    const l = e[s];
    if (typeof l > "u")
      return null;
    const f = S(l);
    return D({
      [z[`ui-flex--sm-${o}-${f[0]}`]]: f[0] !== void 0,
      [z[`ui-flex--md-${o}-${f[1]}`]]: f[1] !== void 0,
      [z[`ui-flex--lg-${o}-${f[2]}`]]: f[2] !== void 0
    });
  }, n = (s) => {
    const o = e[s];
    if (typeof o > "u")
      return null;
    const l = S(o);
    return D({
      [z[`ui-flex--sm-${s}`]]: l[0] !== void 0,
      [z[`ui-flex--md-${s}`]]: l[1] !== void 0,
      [z[`ui-flex--lg-${s}`]]: l[2] !== void 0
    });
  }, u = r || t === "block" || tn.some((s) => e[s[0]] !== void 0), a = t === "inline";
  return D(
    Ya.map(i),
    nn.map(n),
    {
      [z["ui-flex--block"]]: u && !a,
      [z["ui-flex--inline"]]: a
    }
  );
}, Gi = ["sm", "md", "lg"], Za = (e) => Object.fromEntries(
  nn.reduce((r, t) => {
    const i = S(e[t]);
    for (let n = 0; n < Gi.length; n += 1)
      i[n] !== void 0 && r.push([`--ui-${Gi[n]}-${t}`, i[n]]);
    return r;
  }, [])
), yu = (e) => ({
  className: Xa(e),
  style: Za(e)
});
export {
  vu as a,
  Xr as b,
  hu as c,
  su as d,
  au as e,
  lu as f,
  yu as g,
  nu as h,
  iu as i,
  ou as j,
  fu as k,
  gu as l,
  tu as m,
  cu as n,
  pu as o,
  en as p,
  du as q,
  uu as r,
  Ni as s,
  fa as t,
  mu as u,
  ra as v,
  W as w,
  Ca as x,
  Kr as y,
  Yr as z
};
//# sourceMappingURL=index-CHy7tR7D.js.map
