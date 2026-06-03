function t(e) {
  if (typeof e > "u")
    return [];
  const r = Array.isArray(e) ? e : [e];
  for (let n = 0; n < r.length; n += 1) {
    const o = r[n - 1];
    r[n] === o && (r[n] = void 0);
  }
  return r;
}
const i = [
  "sm",
  "md",
  "lg"
];
export {
  t as a,
  i as b
};
//# sourceMappingURL=responsive-value-CHguarkb.js.map
