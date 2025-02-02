import ve, { useRef as lu, useDebugValue as Xr, createElement as pu, useContext as hu, forwardRef as mu } from "react";
var gu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _u(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var kr = { exports: {} }, He = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function bu() {
  if (Zr) return He;
  Zr = 1;
  var r = ve, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, h = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(A, S, $) {
    var R, T = {}, O = null, N = null;
    $ !== void 0 && (O = "" + $), S.key !== void 0 && (O = "" + S.key), S.ref !== void 0 && (N = S.ref);
    for (R in S) d.call(S, R) && !m.hasOwnProperty(R) && (T[R] = S[R]);
    if (A && A.defaultProps) for (R in S = A.defaultProps, S) T[R] === void 0 && (T[R] = S[R]);
    return { $$typeof: a, type: A, key: O, ref: N, props: T, _owner: h.current };
  }
  return He.Fragment = c, He.jsx = y, He.jsxs = y, He;
}
var Fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function wu() {
  return Jr || (Jr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ve, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), A = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), V = Symbol.iterator, q = "@@iterator";
    function re(i) {
      if (i === null || typeof i != "object")
        return null;
      var v = V && i[V] || i[q];
      return typeof v == "function" ? v : null;
    }
    var B = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(i) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), z = 1; z < v; z++)
          E[z - 1] = arguments[z];
        W("error", i, E);
      }
    }
    function W(i, v, E) {
      {
        var z = B.ReactDebugCurrentFrame, U = z.getStackAddendum();
        U !== "" && (v += "%s", E = E.concat([U]));
        var Y = E.map(function(H) {
          return String(H);
        });
        Y.unshift("Warning: " + v), Function.prototype.apply.call(console[i], console, Y);
      }
    }
    var e = !1, n = !1, u = !1, t = !1, f = !1, l;
    l = Symbol.for("react.module.reference");
    function s(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === d || i === m || f || i === h || i === $ || i === R || t || i === N || e || n || u || typeof i == "object" && i !== null && (i.$$typeof === O || i.$$typeof === T || i.$$typeof === y || i.$$typeof === A || i.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === l || i.getModuleId !== void 0));
    }
    function p(i, v, E) {
      var z = i.displayName;
      if (z)
        return z;
      var U = v.displayName || v.name || "";
      return U !== "" ? E + "(" + U + ")" : E;
    }
    function k(i) {
      return i.displayName || "Context";
    }
    function b(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case d:
          return "Fragment";
        case c:
          return "Portal";
        case m:
          return "Profiler";
        case h:
          return "StrictMode";
        case $:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case A:
            var v = i;
            return k(v) + ".Consumer";
          case y:
            var E = i;
            return k(E._context) + ".Provider";
          case S:
            return p(i, i.render, "ForwardRef");
          case T:
            var z = i.displayName || null;
            return z !== null ? z : b(i.type) || "Memo";
          case O: {
            var U = i, Y = U._payload, H = U._init;
            try {
              return b(H(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, w = 0, o, _, P, C, L, j, F;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function ae() {
      {
        if (w === 0) {
          o = console.log, _ = console.info, P = console.warn, C = console.error, L = console.group, j = console.groupCollapsed, F = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: x,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        w++;
      }
    }
    function J() {
      {
        if (w--, w === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, i, {
              value: o
            }),
            info: g({}, i, {
              value: _
            }),
            warn: g({}, i, {
              value: P
            }),
            error: g({}, i, {
              value: C
            }),
            group: g({}, i, {
              value: L
            }),
            groupCollapsed: g({}, i, {
              value: j
            }),
            groupEnd: g({}, i, {
              value: F
            })
          });
        }
        w < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = B.ReactCurrentDispatcher, Q;
    function X(i, v, E) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (U) {
            var z = U.stack.trim().match(/\n( *(at )?)/);
            Q = z && z[1] || "";
          }
        return `
` + Q + i;
      }
    }
    var te = !1, le;
    {
      var _e = typeof WeakMap == "function" ? WeakMap : Map;
      le = new _e();
    }
    function ce(i, v) {
      if (!i || te)
        return "";
      {
        var E = le.get(i);
        if (E !== void 0)
          return E;
      }
      var z;
      te = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = K.current, K.current = null, ae();
      try {
        if (v) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (ie) {
              z = ie;
            }
            Reflect.construct(i, [], H);
          } else {
            try {
              H.call();
            } catch (ie) {
              z = ie;
            }
            i.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            z = ie;
          }
          i();
        }
      } catch (ie) {
        if (ie && z && typeof ie.stack == "string") {
          for (var D = ie.stack.split(`
`), oe = z.stack.split(`
`), ee = D.length - 1, de = oe.length - 1; ee >= 1 && de >= 0 && D[ee] !== oe[de]; )
            de--;
          for (; ee >= 1 && de >= 0; ee--, de--)
            if (D[ee] !== oe[de]) {
              if (ee !== 1 || de !== 1)
                do
                  if (ee--, de--, de < 0 || D[ee] !== oe[de]) {
                    var pe = `
` + D[ee].replace(" at new ", " at ");
                    return i.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", i.displayName)), typeof i == "function" && le.set(i, pe), pe;
                  }
                while (ee >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        te = !1, K.current = Y, J(), Error.prepareStackTrace = U;
      }
      var Ae = i ? i.displayName || i.name : "", ye = Ae ? X(Ae) : "";
      return typeof i == "function" && le.set(i, ye), ye;
    }
    function Ue(i, v, E) {
      return ce(i, !1);
    }
    function Wd(i) {
      var v = i.prototype;
      return !!(v && v.isReactComponent);
    }
    function Ge(i, v, E) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return ce(i, Wd(i));
      if (typeof i == "string")
        return X(i);
      switch (i) {
        case $:
          return X("Suspense");
        case R:
          return X("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case S:
            return Ue(i.render);
          case T:
            return Ge(i.type, v, E);
          case O: {
            var z = i, U = z._payload, Y = z._init;
            try {
              return Ge(Y(U), v, E);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, Ir = {}, Nr = B.ReactDebugCurrentFrame;
    function qe(i) {
      if (i) {
        var v = i._owner, E = Ge(i.type, i._source, v ? v.type : null);
        Nr.setExtraStackFrame(E);
      } else
        Nr.setExtraStackFrame(null);
    }
    function Ud(i, v, E, z, U) {
      {
        var Y = Function.call.bind(De);
        for (var H in i)
          if (Y(i, H)) {
            var D = void 0;
            try {
              if (typeof i[H] != "function") {
                var oe = Error((z || "React class") + ": " + E + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              D = i[H](v, H, z, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              D = ee;
            }
            D && !(D instanceof Error) && (qe(U), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", E, H, typeof D), qe(null)), D instanceof Error && !(D.message in Ir) && (Ir[D.message] = !0, qe(U), M("Failed %s type: %s", E, D.message), qe(null));
          }
      }
    }
    var Gd = Array.isArray;
    function lr(i) {
      return Gd(i);
    }
    function qd(i) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, E = v && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return E;
      }
    }
    function Yd(i) {
      try {
        return Dr(i), !1;
      } catch {
        return !0;
      }
    }
    function Dr(i) {
      return "" + i;
    }
    function Br(i) {
      if (Yd(i))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qd(i)), Dr(i);
    }
    var Be = B.ReactCurrentOwner, Kd = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Hr, Fr, pr;
    pr = {};
    function Xd(i) {
      if (De.call(i, "ref")) {
        var v = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Zd(i) {
      if (De.call(i, "key")) {
        var v = Object.getOwnPropertyDescriptor(i, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Jd(i, v) {
      if (typeof i.ref == "string" && Be.current && v && Be.current.stateNode !== v) {
        var E = b(Be.current.type);
        pr[E] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(Be.current.type), i.ref), pr[E] = !0);
      }
    }
    function Qd(i, v) {
      {
        var E = function() {
          Hr || (Hr = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function xd(i, v) {
      {
        var E = function() {
          Fr || (Fr = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var eu = function(i, v, E, z, U, Y, H) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: i,
        key: v,
        ref: E,
        props: H,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function ru(i, v, E, z, U) {
      {
        var Y, H = {}, D = null, oe = null;
        E !== void 0 && (Br(E), D = "" + E), Zd(v) && (Br(v.key), D = "" + v.key), Xd(v) && (oe = v.ref, Jd(v, U));
        for (Y in v)
          De.call(v, Y) && !Kd.hasOwnProperty(Y) && (H[Y] = v[Y]);
        if (i && i.defaultProps) {
          var ee = i.defaultProps;
          for (Y in ee)
            H[Y] === void 0 && (H[Y] = ee[Y]);
        }
        if (D || oe) {
          var de = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          D && Qd(H, de), oe && xd(H, de);
        }
        return eu(i, D, oe, U, z, Be.current, H);
      }
    }
    var hr = B.ReactCurrentOwner, Vr = B.ReactDebugCurrentFrame;
    function je(i) {
      if (i) {
        var v = i._owner, E = Ge(i.type, i._source, v ? v.type : null);
        Vr.setExtraStackFrame(E);
      } else
        Vr.setExtraStackFrame(null);
    }
    var mr;
    mr = !1;
    function gr(i) {
      return typeof i == "object" && i !== null && i.$$typeof === a;
    }
    function Wr() {
      {
        if (hr.current) {
          var i = b(hr.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function du(i) {
      return "";
    }
    var Ur = {};
    function uu(i) {
      {
        var v = Wr();
        if (!v) {
          var E = typeof i == "string" ? i : i.displayName || i.name;
          E && (v = `

Check the top-level render call using <` + E + ">.");
        }
        return v;
      }
    }
    function Gr(i, v) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var E = uu(v);
        if (Ur[E])
          return;
        Ur[E] = !0;
        var z = "";
        i && i._owner && i._owner !== hr.current && (z = " It was passed a child from " + b(i._owner.type) + "."), je(i), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, z), je(null);
      }
    }
    function qr(i, v) {
      {
        if (typeof i != "object")
          return;
        if (lr(i))
          for (var E = 0; E < i.length; E++) {
            var z = i[E];
            gr(z) && Gr(z, v);
          }
        else if (gr(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var U = re(i);
          if (typeof U == "function" && U !== i.entries)
            for (var Y = U.call(i), H; !(H = Y.next()).done; )
              gr(H.value) && Gr(H.value, v);
        }
      }
    }
    function nu(i) {
      {
        var v = i.type;
        if (v == null || typeof v == "string")
          return;
        var E;
        if (typeof v == "function")
          E = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === S || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === T))
          E = v.propTypes;
        else
          return;
        if (E) {
          var z = b(v);
          Ud(E, i.props, "prop", z, i);
        } else if (v.PropTypes !== void 0 && !mr) {
          mr = !0;
          var U = b(v);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function au(i) {
      {
        for (var v = Object.keys(i.props), E = 0; E < v.length; E++) {
          var z = v[E];
          if (z !== "children" && z !== "key") {
            je(i), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), je(null);
            break;
          }
        }
        i.ref !== null && (je(i), M("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    var Yr = {};
    function Kr(i, v, E, z, U, Y) {
      {
        var H = s(i);
        if (!H) {
          var D = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = du();
          oe ? D += oe : D += Wr();
          var ee;
          i === null ? ee = "null" : lr(i) ? ee = "array" : i !== void 0 && i.$$typeof === a ? (ee = "<" + (b(i.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof i, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, D);
        }
        var de = ru(i, v, E, U, Y);
        if (de == null)
          return de;
        if (H) {
          var pe = v.children;
          if (pe !== void 0)
            if (z)
              if (lr(pe)) {
                for (var Ae = 0; Ae < pe.length; Ae++)
                  qr(pe[Ae], i);
                Object.freeze && Object.freeze(pe);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qr(pe, i);
        }
        if (De.call(v, "key")) {
          var ye = b(i), ie = Object.keys(v).filter(function(fu) {
            return fu !== "key";
          }), _r = ie.length > 0 ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yr[ye + _r]) {
            var su = ie.length > 0 ? "{" + ie.join(": ..., ") + ": ...}" : "{}";
            M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _r, ye, su, ye), Yr[ye + _r] = !0;
          }
        }
        return i === d ? au(de) : nu(de), de;
      }
    }
    function tu(i, v, E) {
      return Kr(i, v, E, !0);
    }
    function cu(i, v, E) {
      return Kr(i, v, E, !1);
    }
    var ou = cu, iu = tu;
    Fe.Fragment = d, Fe.jsx = ou, Fe.jsxs = iu;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? kr.exports = bu() : kr.exports = wu();
var Qr = kr.exports, fe = function() {
  return fe = Object.assign || function(a) {
    for (var c, d = 1, h = arguments.length; d < h; d++) {
      c = arguments[d];
      for (var m in c) Object.prototype.hasOwnProperty.call(c, m) && (a[m] = c[m]);
    }
    return a;
  }, fe.apply(this, arguments);
};
function Te(r, a, c) {
  if (c || arguments.length === 2) for (var d = 0, h = a.length, m; d < h; d++)
    (m || !(d in a)) && (m || (m = Array.prototype.slice.call(a, 0, d)), m[d] = a[d]);
  return r.concat(m || Array.prototype.slice.call(a));
}
function vu(r) {
  var a = /* @__PURE__ */ Object.create(null);
  return function(c) {
    return a[c] === void 0 && (a[c] = r(c)), a[c];
  };
}
var yu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ku = /* @__PURE__ */ vu(
  function(r) {
    return yu.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Z = "-ms-", We = "-moz-", G = "-webkit-", _d = "comm", tr = "rule", zr = "decl", Su = "@import", bd = "@keyframes", Pu = "@layer", wd = Math.abs, Mr = String.fromCharCode, Sr = Object.assign;
function Eu(r, a) {
  return ne(r, 0) ^ 45 ? (((a << 2 ^ ne(r, 0)) << 2 ^ ne(r, 1)) << 2 ^ ne(r, 2)) << 2 ^ ne(r, 3) : 0;
}
function vd(r) {
  return r.trim();
}
function be(r, a) {
  return (r = a.exec(r)) ? r[0] : r;
}
function I(r, a, c) {
  return r.replace(a, c);
}
function Je(r, a, c) {
  return r.indexOf(a, c);
}
function ne(r, a) {
  return r.charCodeAt(a) | 0;
}
function ze(r, a, c) {
  return r.slice(a, c);
}
function ge(r) {
  return r.length;
}
function yd(r) {
  return r.length;
}
function Ve(r, a) {
  return a.push(r), r;
}
function Cu(r, a) {
  return r.map(a).join("");
}
function xr(r, a) {
  return r.filter(function(c) {
    return !be(c, a);
  });
}
var cr = 1, Me = 1, kd = 0, he = 0, ue = 0, Ie = "";
function or(r, a, c, d, h, m, y, A) {
  return { value: r, root: a, parent: c, type: d, props: h, children: m, line: cr, column: Me, length: y, return: "", siblings: A };
}
function we(r, a) {
  return Sr(or("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, a);
}
function Re(r) {
  for (; r.root; )
    r = we(r.root, { children: [r] });
  Ve(r, r.siblings);
}
function ju() {
  return ue;
}
function Au() {
  return ue = he > 0 ? ne(Ie, --he) : 0, Me--, ue === 10 && (Me = 1, cr--), ue;
}
function me() {
  return ue = he < kd ? ne(Ie, he++) : 0, Me++, ue === 10 && (Me = 1, cr++), ue;
}
function Pe() {
  return ne(Ie, he);
}
function Qe() {
  return he;
}
function ir(r, a) {
  return ze(Ie, r, a);
}
function Pr(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ru(r) {
  return cr = Me = 1, kd = ge(Ie = r), he = 0, [];
}
function Tu(r) {
  return Ie = "", r;
}
function br(r) {
  return vd(ir(he - 1, Er(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function zu(r) {
  for (; (ue = Pe()) && ue < 33; )
    me();
  return Pr(r) > 2 || Pr(ue) > 3 ? "" : " ";
}
function Mu(r, a) {
  for (; --a && me() && !(ue < 48 || ue > 102 || ue > 57 && ue < 65 || ue > 70 && ue < 97); )
    ;
  return ir(r, Qe() + (a < 6 && Pe() == 32 && me() == 32));
}
function Er(r) {
  for (; me(); )
    switch (ue) {
      case r:
        return he;
      case 34:
      case 39:
        r !== 34 && r !== 39 && Er(ue);
        break;
      case 40:
        r === 41 && Er(r);
        break;
      case 92:
        me();
        break;
    }
  return he;
}
function $u(r, a) {
  for (; me() && r + ue !== 57; )
    if (r + ue === 84 && Pe() === 47)
      break;
  return "/*" + ir(a, he - 1) + "*" + Mr(r === 47 ? r : me());
}
function Ou(r) {
  for (; !Pr(Pe()); )
    me();
  return ir(r, he);
}
function Lu(r) {
  return Tu(xe("", null, null, null, [""], r = Ru(r), 0, [0], r));
}
function xe(r, a, c, d, h, m, y, A, S) {
  for (var $ = 0, R = 0, T = y, O = 0, N = 0, V = 0, q = 1, re = 1, B = 1, M = 0, W = "", e = h, n = m, u = d, t = W; re; )
    switch (V = M, M = me()) {
      case 40:
        if (V != 108 && ne(t, T - 1) == 58) {
          Je(t += I(br(M), "&", "&\f"), "&\f", wd($ ? A[$ - 1] : 0)) != -1 && (B = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        t += br(M);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        t += zu(V);
        break;
      case 92:
        t += Mu(Qe() - 1, 7);
        continue;
      case 47:
        switch (Pe()) {
          case 42:
          case 47:
            Ve(Iu($u(me(), Qe()), a, c, S), S);
            break;
          default:
            t += "/";
        }
        break;
      case 123 * q:
        A[$++] = ge(t) * B;
      case 125 * q:
      case 59:
      case 0:
        switch (M) {
          case 0:
          case 125:
            re = 0;
          case 59 + R:
            B == -1 && (t = I(t, /\f/g, "")), N > 0 && ge(t) - T && Ve(N > 32 ? rd(t + ";", d, c, T - 1, S) : rd(I(t, " ", "") + ";", d, c, T - 2, S), S);
            break;
          case 59:
            t += ";";
          default:
            if (Ve(u = ed(t, a, c, $, R, h, A, W, e = [], n = [], T, m), m), M === 123)
              if (R === 0)
                xe(t, a, u, u, e, m, T, A, n);
              else
                switch (O === 99 && ne(t, 3) === 110 ? 100 : O) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xe(r, u, u, d && Ve(ed(r, u, u, 0, 0, h, A, W, h, e = [], T, n), n), h, n, T, A, d ? e : n);
                    break;
                  default:
                    xe(t, u, u, u, [""], n, 0, A, n);
                }
        }
        $ = R = N = 0, q = B = 1, W = t = "", T = y;
        break;
      case 58:
        T = 1 + ge(t), N = V;
      default:
        if (q < 1) {
          if (M == 123)
            --q;
          else if (M == 125 && q++ == 0 && Au() == 125)
            continue;
        }
        switch (t += Mr(M), M * q) {
          case 38:
            B = R > 0 ? 1 : (t += "\f", -1);
            break;
          case 44:
            A[$++] = (ge(t) - 1) * B, B = 1;
            break;
          case 64:
            Pe() === 45 && (t += br(me())), O = Pe(), R = T = ge(W = t += Ou(Qe())), M++;
            break;
          case 45:
            V === 45 && ge(t) == 2 && (q = 0);
        }
    }
  return m;
}
function ed(r, a, c, d, h, m, y, A, S, $, R, T) {
  for (var O = h - 1, N = h === 0 ? m : [""], V = yd(N), q = 0, re = 0, B = 0; q < d; ++q)
    for (var M = 0, W = ze(r, O + 1, O = wd(re = y[q])), e = r; M < V; ++M)
      (e = vd(re > 0 ? N[M] + " " + W : I(W, /&\f/g, N[M]))) && (S[B++] = e);
  return or(r, a, c, h === 0 ? tr : A, S, $, R, T);
}
function Iu(r, a, c, d) {
  return or(r, a, c, _d, Mr(ju()), ze(r, 2, -2), 0, d);
}
function rd(r, a, c, d, h) {
  return or(r, a, c, zr, ze(r, 0, d), ze(r, d + 1, -1), d, h);
}
function Sd(r, a, c) {
  switch (Eu(r, a)) {
    case 5103:
      return G + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return G + r + r;
    case 4789:
      return We + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return G + r + We + r + Z + r + r;
    case 5936:
      switch (ne(r, a + 11)) {
        case 114:
          return G + r + Z + I(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return G + r + Z + I(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return G + r + Z + I(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    case 6828:
    case 4268:
    case 2903:
      return G + r + Z + r + r;
    case 6165:
      return G + r + Z + "flex-" + r + r;
    case 5187:
      return G + r + I(r, /(\w+).+(:[^]+)/, G + "box-$1$2" + Z + "flex-$1$2") + r;
    case 5443:
      return G + r + Z + "flex-item-" + I(r, /flex-|-self/g, "") + (be(r, /flex-|baseline/) ? "" : Z + "grid-row-" + I(r, /flex-|-self/g, "")) + r;
    case 4675:
      return G + r + Z + "flex-line-pack" + I(r, /align-content|flex-|-self/g, "") + r;
    case 5548:
      return G + r + Z + I(r, "shrink", "negative") + r;
    case 5292:
      return G + r + Z + I(r, "basis", "preferred-size") + r;
    case 6060:
      return G + "box-" + I(r, "-grow", "") + G + r + Z + I(r, "grow", "positive") + r;
    case 4554:
      return G + I(r, /([^-])(transform)/g, "$1" + G + "$2") + r;
    case 6187:
      return I(I(I(r, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return I(r, /(image-set\([^]*)/, G + "$1$`$1");
    case 4968:
      return I(I(r, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + Z + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + r + r;
    case 4200:
      if (!be(r, /flex-|baseline/)) return Z + "grid-column-align" + ze(r, a) + r;
      break;
    case 2592:
    case 3360:
      return Z + I(r, "template-", "") + r;
    case 4384:
    case 3616:
      return c && c.some(function(d, h) {
        return a = h, be(d.props, /grid-\w+-end/);
      }) ? ~Je(r + (c = c[a].value), "span", 0) ? r : Z + I(r, "-start", "") + r + Z + "grid-row-span:" + (~Je(c, "span", 0) ? be(c, /\d+/) : +be(c, /\d+/) - +be(r, /\d+/)) + ";" : Z + I(r, "-start", "") + r;
    case 4896:
    case 4128:
      return c && c.some(function(d) {
        return be(d.props, /grid-\w+-start/);
      }) ? r : Z + I(I(r, "-end", "-span"), "span ", "") + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(r, /(.+)-inline(.+)/, G + "$1$2") + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ge(r) - 1 - a > 6)
        switch (ne(r, a + 1)) {
          case 109:
            if (ne(r, a + 4) !== 45)
              break;
          case 102:
            return I(r, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + We + (ne(r, a + 3) == 108 ? "$3" : "$2-$3")) + r;
          case 115:
            return ~Je(r, "stretch", 0) ? Sd(I(r, "stretch", "fill-available"), a, c) + r : r;
        }
      break;
    case 5152:
    case 5920:
      return I(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(d, h, m, y, A, S, $) {
        return Z + h + ":" + m + $ + (y ? Z + h + "-span:" + (A ? S : +S - +m) + $ : "") + r;
      });
    case 4949:
      if (ne(r, a + 6) === 121)
        return I(r, ":", ":" + G) + r;
      break;
    case 6444:
      switch (ne(r, ne(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return I(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + G + (ne(r, 14) === 45 ? "inline-" : "") + "box$3$1" + G + "$2$3$1" + Z + "$2box$3") + r;
        case 100:
          return I(r, ":", ":" + Z) + r;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return I(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function dr(r, a) {
  for (var c = "", d = 0; d < r.length; d++)
    c += a(r[d], d, r, a) || "";
  return c;
}
function Nu(r, a, c, d) {
  switch (r.type) {
    case Pu:
      if (r.children.length) break;
    case Su:
    case zr:
      return r.return = r.return || r.value;
    case _d:
      return "";
    case bd:
      return r.return = r.value + "{" + dr(r.children, d) + "}";
    case tr:
      if (!ge(r.value = r.props.join(","))) return "";
  }
  return ge(c = dr(r.children, d)) ? r.return = r.value + "{" + c + "}" : "";
}
function Du(r) {
  var a = yd(r);
  return function(c, d, h, m) {
    for (var y = "", A = 0; A < a; A++)
      y += r[A](c, d, h, m) || "";
    return y;
  };
}
function Bu(r) {
  return function(a) {
    a.root || (a = a.return) && r(a);
  };
}
function Hu(r, a, c, d) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case zr:
        r.return = Sd(r.value, r.length, c);
        return;
      case bd:
        return dr([we(r, { value: I(r.value, "@", "@" + G) })], d);
      case tr:
        if (r.length)
          return Cu(c = r.props, function(h) {
            switch (be(h, d = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Re(we(r, { props: [I(h, /:(read-\w+)/, ":" + We + "$1")] })), Re(we(r, { props: [h] })), Sr(r, { props: xr(c, d) });
                break;
              case "::placeholder":
                Re(we(r, { props: [I(h, /:(plac\w+)/, ":" + G + "input-$1")] })), Re(we(r, { props: [I(h, /:(plac\w+)/, ":" + We + "$1")] })), Re(we(r, { props: [I(h, /:(plac\w+)/, Z + "input-$1")] })), Re(we(r, { props: [h] })), Sr(r, { props: xr(c, d) });
                break;
            }
            return "";
          });
    }
}
var Fu = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ce = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Pd = "active", Ed = "data-styled-version", sr = "6.1.13", $r = `/*!sc*/
`, ur = typeof window < "u" && "HTMLElement" in window, Vu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), dd = /invalid hook call/i, Ye = /* @__PURE__ */ new Set(), Wu = function(r, a) {
  if (process.env.NODE_ENV !== "production") {
    var c = a ? ' with the id of "'.concat(a, '"') : "", d = "The component ".concat(r).concat(c, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, h = console.error;
    try {
      var m = !0;
      console.error = function(y) {
        for (var A = [], S = 1; S < arguments.length; S++) A[S - 1] = arguments[S];
        dd.test(y) ? (m = !1, Ye.delete(d)) : h.apply(void 0, Te([y], A, !1));
      }, lu(), m && !Ye.has(d) && (console.warn(d), Ye.add(d));
    } catch (y) {
      dd.test(y.message) && Ye.delete(d);
    } finally {
      console.error = h;
    }
  }
}, fr = Object.freeze([]), $e = Object.freeze({});
function Uu(r, a, c) {
  return c === void 0 && (c = $e), r.theme !== c.theme && r.theme || a || c.theme;
}
var Cr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Gu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qu = /(^-|-$)/g;
function ud(r) {
  return r.replace(Gu, "-").replace(qu, "");
}
var Yu = /(a)(d)/gi, Ke = 52, nd = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function jr(r) {
  var a, c = "";
  for (a = Math.abs(r); a > Ke; a = a / Ke | 0) c = nd(a % Ke) + c;
  return (nd(a % Ke) + c).replace(Yu, "$1-$2");
}
var wr, Cd = 5381, ke = function(r, a) {
  for (var c = a.length; c; ) r = 33 * r ^ a.charCodeAt(--c);
  return r;
}, jd = function(r) {
  return ke(Cd, r);
};
function Ku(r) {
  return jr(jd(r) >>> 0);
}
function Ad(r) {
  return process.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function vr(r) {
  return typeof r == "string" && (process.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var Rd = typeof Symbol == "function" && Symbol.for, Td = Rd ? Symbol.for("react.memo") : 60115, Xu = Rd ? Symbol.for("react.forward_ref") : 60112, Zu = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Ju = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, zd = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Qu = ((wr = {})[Xu] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, wr[Td] = zd, wr);
function ad(r) {
  return ("type" in (a = r) && a.type.$$typeof) === Td ? zd : "$$typeof" in r ? Qu[r.$$typeof] : Zu;
  var a;
}
var xu = Object.defineProperty, en = Object.getOwnPropertyNames, td = Object.getOwnPropertySymbols, rn = Object.getOwnPropertyDescriptor, dn = Object.getPrototypeOf, cd = Object.prototype;
function Md(r, a, c) {
  if (typeof a != "string") {
    if (cd) {
      var d = dn(a);
      d && d !== cd && Md(r, d, c);
    }
    var h = en(a);
    td && (h = h.concat(td(a)));
    for (var m = ad(r), y = ad(a), A = 0; A < h.length; ++A) {
      var S = h[A];
      if (!(S in Ju || c && c[S] || y && S in y || m && S in m)) {
        var $ = rn(a, S);
        try {
          xu(r, S, $);
        } catch {
        }
      }
    }
  }
  return r;
}
function Oe(r) {
  return typeof r == "function";
}
function Or(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function Se(r, a) {
  return r && a ? "".concat(r, " ").concat(a) : r || a || "";
}
function od(r, a) {
  if (r.length === 0) return "";
  for (var c = r[0], d = 1; d < r.length; d++) c += r[d];
  return c;
}
function Le(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function Ar(r, a, c) {
  if (c === void 0 && (c = !1), !c && !Le(r) && !Array.isArray(r)) return a;
  if (Array.isArray(a)) for (var d = 0; d < a.length; d++) r[d] = Ar(r[d], a[d]);
  else if (Le(a)) for (var d in a) r[d] = Ar(r[d], a[d]);
  return r;
}
function Lr(r, a) {
  Object.defineProperty(r, "toString", { value: a });
}
var un = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function nn() {
  for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
  for (var c = r[0], d = [], h = 1, m = r.length; h < m; h += 1) d.push(r[h]);
  return d.forEach(function(y) {
    c = c.replace(/%[a-z]/, y);
  }), c;
}
function Ne(r) {
  for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r, " for more information.").concat(a.length > 0 ? " Args: ".concat(a.join(", ")) : "")) : new Error(nn.apply(void 0, Te([un[r]], a, !1)).trim());
}
var an = function() {
  function r(a) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = a;
  }
  return r.prototype.indexOfGroup = function(a) {
    for (var c = 0, d = 0; d < a; d++) c += this.groupSizes[d];
    return c;
  }, r.prototype.insertRules = function(a, c) {
    if (a >= this.groupSizes.length) {
      for (var d = this.groupSizes, h = d.length, m = h; a >= m; ) if ((m <<= 1) < 0) throw Ne(16, "".concat(a));
      this.groupSizes = new Uint32Array(m), this.groupSizes.set(d), this.length = m;
      for (var y = h; y < m; y++) this.groupSizes[y] = 0;
    }
    for (var A = this.indexOfGroup(a + 1), S = (y = 0, c.length); y < S; y++) this.tag.insertRule(A, c[y]) && (this.groupSizes[a]++, A++);
  }, r.prototype.clearGroup = function(a) {
    if (a < this.length) {
      var c = this.groupSizes[a], d = this.indexOfGroup(a), h = d + c;
      this.groupSizes[a] = 0;
      for (var m = d; m < h; m++) this.tag.deleteRule(d);
    }
  }, r.prototype.getGroup = function(a) {
    var c = "";
    if (a >= this.length || this.groupSizes[a] === 0) return c;
    for (var d = this.groupSizes[a], h = this.indexOfGroup(a), m = h + d, y = h; y < m; y++) c += "".concat(this.tag.getRule(y)).concat($r);
    return c;
  }, r;
}(), tn = 1 << 30, er = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Map(), rr = 1, Xe = function(r) {
  if (er.has(r)) return er.get(r);
  for (; nr.has(rr); ) rr++;
  var a = rr++;
  if (process.env.NODE_ENV !== "production" && ((0 | a) < 0 || a > tn)) throw Ne(16, "".concat(a));
  return er.set(r, a), nr.set(a, r), a;
}, cn = function(r, a) {
  rr = a + 1, er.set(r, a), nr.set(a, r);
}, on = "style[".concat(Ce, "][").concat(Ed, '="').concat(sr, '"]'), sn = new RegExp("^".concat(Ce, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), fn = function(r, a, c) {
  for (var d, h = c.split(","), m = 0, y = h.length; m < y; m++) (d = h[m]) && r.registerName(a, d);
}, ln = function(r, a) {
  for (var c, d = ((c = a.textContent) !== null && c !== void 0 ? c : "").split($r), h = [], m = 0, y = d.length; m < y; m++) {
    var A = d[m].trim();
    if (A) {
      var S = A.match(sn);
      if (S) {
        var $ = 0 | parseInt(S[1], 10), R = S[2];
        $ !== 0 && (cn(R, $), fn(r, R, S[3]), r.getTag().insertRules($, h)), h.length = 0;
      } else h.push(A);
    }
  }
}, id = function(r) {
  for (var a = document.querySelectorAll(on), c = 0, d = a.length; c < d; c++) {
    var h = a[c];
    h && h.getAttribute(Ce) !== Pd && (ln(r, h), h.parentNode && h.parentNode.removeChild(h));
  }
};
function pn() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var $d = function(r) {
  var a = document.head, c = r || a, d = document.createElement("style"), h = function(A) {
    var S = Array.from(A.querySelectorAll("style[".concat(Ce, "]")));
    return S[S.length - 1];
  }(c), m = h !== void 0 ? h.nextSibling : null;
  d.setAttribute(Ce, Pd), d.setAttribute(Ed, sr);
  var y = pn();
  return y && d.setAttribute("nonce", y), c.insertBefore(d, m), d;
}, hn = function() {
  function r(a) {
    this.element = $d(a), this.element.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var d = document.styleSheets, h = 0, m = d.length; h < m; h++) {
        var y = d[h];
        if (y.ownerNode === c) return y;
      }
      throw Ne(17);
    }(this.element), this.length = 0;
  }
  return r.prototype.insertRule = function(a, c) {
    try {
      return this.sheet.insertRule(c, a), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.prototype.deleteRule = function(a) {
    this.sheet.deleteRule(a), this.length--;
  }, r.prototype.getRule = function(a) {
    var c = this.sheet.cssRules[a];
    return c && c.cssText ? c.cssText : "";
  }, r;
}(), mn = function() {
  function r(a) {
    this.element = $d(a), this.nodes = this.element.childNodes, this.length = 0;
  }
  return r.prototype.insertRule = function(a, c) {
    if (a <= this.length && a >= 0) {
      var d = document.createTextNode(c);
      return this.element.insertBefore(d, this.nodes[a] || null), this.length++, !0;
    }
    return !1;
  }, r.prototype.deleteRule = function(a) {
    this.element.removeChild(this.nodes[a]), this.length--;
  }, r.prototype.getRule = function(a) {
    return a < this.length ? this.nodes[a].textContent : "";
  }, r;
}(), gn = function() {
  function r(a) {
    this.rules = [], this.length = 0;
  }
  return r.prototype.insertRule = function(a, c) {
    return a <= this.length && (this.rules.splice(a, 0, c), this.length++, !0);
  }, r.prototype.deleteRule = function(a) {
    this.rules.splice(a, 1), this.length--;
  }, r.prototype.getRule = function(a) {
    return a < this.length ? this.rules[a] : "";
  }, r;
}(), sd = ur, _n = { isServer: !ur, useCSSOMInjection: !Vu }, Od = function() {
  function r(a, c, d) {
    a === void 0 && (a = $e), c === void 0 && (c = {});
    var h = this;
    this.options = fe(fe({}, _n), a), this.gs = c, this.names = new Map(d), this.server = !!a.isServer, !this.server && ur && sd && (sd = !1, id(this)), Lr(this, function() {
      return function(m) {
        for (var y = m.getTag(), A = y.length, S = "", $ = function(T) {
          var O = function(B) {
            return nr.get(B);
          }(T);
          if (O === void 0) return "continue";
          var N = m.names.get(O), V = y.getGroup(T);
          if (N === void 0 || !N.size || V.length === 0) return "continue";
          var q = "".concat(Ce, ".g").concat(T, '[id="').concat(O, '"]'), re = "";
          N !== void 0 && N.forEach(function(B) {
            B.length > 0 && (re += "".concat(B, ","));
          }), S += "".concat(V).concat(q, '{content:"').concat(re, '"}').concat($r);
        }, R = 0; R < A; R++) $(R);
        return S;
      }(h);
    });
  }
  return r.registerId = function(a) {
    return Xe(a);
  }, r.prototype.rehydrate = function() {
    !this.server && ur && id(this);
  }, r.prototype.reconstructWithOptions = function(a, c) {
    return c === void 0 && (c = !0), new r(fe(fe({}, this.options), a), this.gs, c && this.names || void 0);
  }, r.prototype.allocateGSInstance = function(a) {
    return this.gs[a] = (this.gs[a] || 0) + 1;
  }, r.prototype.getTag = function() {
    return this.tag || (this.tag = (a = function(c) {
      var d = c.useCSSOMInjection, h = c.target;
      return c.isServer ? new gn(h) : d ? new hn(h) : new mn(h);
    }(this.options), new an(a)));
    var a;
  }, r.prototype.hasNameForId = function(a, c) {
    return this.names.has(a) && this.names.get(a).has(c);
  }, r.prototype.registerName = function(a, c) {
    if (Xe(a), this.names.has(a)) this.names.get(a).add(c);
    else {
      var d = /* @__PURE__ */ new Set();
      d.add(c), this.names.set(a, d);
    }
  }, r.prototype.insertRules = function(a, c, d) {
    this.registerName(a, c), this.getTag().insertRules(Xe(a), d);
  }, r.prototype.clearNames = function(a) {
    this.names.has(a) && this.names.get(a).clear();
  }, r.prototype.clearRules = function(a) {
    this.getTag().clearGroup(Xe(a)), this.clearNames(a);
  }, r.prototype.clearTag = function() {
    this.tag = void 0;
  }, r;
}(), bn = /&/g, wn = /^\s*\/\/.*$/gm;
function Ld(r, a) {
  return r.map(function(c) {
    return c.type === "rule" && (c.value = "".concat(a, " ").concat(c.value), c.value = c.value.replaceAll(",", ",".concat(a, " ")), c.props = c.props.map(function(d) {
      return "".concat(a, " ").concat(d);
    })), Array.isArray(c.children) && c.type !== "@keyframes" && (c.children = Ld(c.children, a)), c;
  });
}
function vn(r) {
  var a, c, d, h = $e, m = h.options, y = m === void 0 ? $e : m, A = h.plugins, S = A === void 0 ? fr : A, $ = function(O, N, V) {
    return V.startsWith(c) && V.endsWith(c) && V.replaceAll(c, "").length > 0 ? ".".concat(a) : O;
  }, R = S.slice();
  R.push(function(O) {
    O.type === tr && O.value.includes("&") && (O.props[0] = O.props[0].replace(bn, c).replace(d, $));
  }), y.prefix && R.push(Hu), R.push(Nu);
  var T = function(O, N, V, q) {
    N === void 0 && (N = ""), V === void 0 && (V = ""), q === void 0 && (q = "&"), a = q, c = N, d = new RegExp("\\".concat(c, "\\b"), "g");
    var re = O.replace(wn, ""), B = Lu(V || N ? "".concat(V, " ").concat(N, " { ").concat(re, " }") : re);
    y.namespace && (B = Ld(B, y.namespace));
    var M = [];
    return dr(B, Du(R.concat(Bu(function(W) {
      return M.push(W);
    })))), M;
  };
  return T.hash = S.length ? S.reduce(function(O, N) {
    return N.name || Ne(15), ke(O, N.name);
  }, Cd).toString() : "", T;
}
var yn = new Od(), Rr = vn(), Id = ve.createContext({ shouldForwardProp: void 0, styleSheet: yn, stylis: Rr });
Id.Consumer;
ve.createContext(void 0);
function fd() {
  return hu(Id);
}
var ld = function() {
  function r(a, c) {
    var d = this;
    this.inject = function(h, m) {
      m === void 0 && (m = Rr);
      var y = d.name + m.hash;
      h.hasNameForId(d.id, y) || h.insertRules(d.id, y, m(d.rules, y, "@keyframes"));
    }, this.name = a, this.id = "sc-keyframes-".concat(a), this.rules = c, Lr(this, function() {
      throw Ne(12, String(d.name));
    });
  }
  return r.prototype.getName = function(a) {
    return a === void 0 && (a = Rr), this.name + a.hash;
  }, r;
}(), kn = function(r) {
  return r >= "A" && r <= "Z";
};
function pd(r) {
  for (var a = "", c = 0; c < r.length; c++) {
    var d = r[c];
    if (c === 1 && d === "-" && r[0] === "-") return r;
    kn(d) ? a += "-" + d.toLowerCase() : a += d;
  }
  return a.startsWith("ms-") ? "-" + a : a;
}
var Nd = function(r) {
  return r == null || r === !1 || r === "";
}, Dd = function(r) {
  var a, c, d = [];
  for (var h in r) {
    var m = r[h];
    r.hasOwnProperty(h) && !Nd(m) && (Array.isArray(m) && m.isCss || Oe(m) ? d.push("".concat(pd(h), ":"), m, ";") : Le(m) ? d.push.apply(d, Te(Te(["".concat(h, " {")], Dd(m), !1), ["}"], !1)) : d.push("".concat(pd(h), ": ").concat((a = h, (c = m) == null || typeof c == "boolean" || c === "" ? "" : typeof c != "number" || c === 0 || a in Fu || a.startsWith("--") ? String(c).trim() : "".concat(c, "px")), ";")));
  }
  return d;
};
function Ee(r, a, c, d) {
  if (Nd(r)) return [];
  if (Or(r)) return [".".concat(r.styledComponentId)];
  if (Oe(r)) {
    if (!Oe(m = r) || m.prototype && m.prototype.isReactComponent || !a) return [r];
    var h = r(a);
    return process.env.NODE_ENV === "production" || typeof h != "object" || Array.isArray(h) || h instanceof ld || Le(h) || h === null || console.error("".concat(Ad(r), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ee(h, a, c, d);
  }
  var m;
  return r instanceof ld ? c ? (r.inject(c, d), [r.getName(d)]) : [r] : Le(r) ? Dd(r) : Array.isArray(r) ? Array.prototype.concat.apply(fr, r.map(function(y) {
    return Ee(y, a, c, d);
  })) : [r.toString()];
}
function Sn(r) {
  for (var a = 0; a < r.length; a += 1) {
    var c = r[a];
    if (Oe(c) && !Or(c)) return !1;
  }
  return !0;
}
var Pn = jd(sr), En = function() {
  function r(a, c, d) {
    this.rules = a, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (d === void 0 || d.isStatic) && Sn(a), this.componentId = c, this.baseHash = ke(Pn, c), this.baseStyle = d, Od.registerId(c);
  }
  return r.prototype.generateAndInjectStyles = function(a, c, d) {
    var h = this.baseStyle ? this.baseStyle.generateAndInjectStyles(a, c, d) : "";
    if (this.isStatic && !d.hash) if (this.staticRulesId && c.hasNameForId(this.componentId, this.staticRulesId)) h = Se(h, this.staticRulesId);
    else {
      var m = od(Ee(this.rules, a, c, d)), y = jr(ke(this.baseHash, m) >>> 0);
      if (!c.hasNameForId(this.componentId, y)) {
        var A = d(m, ".".concat(y), void 0, this.componentId);
        c.insertRules(this.componentId, y, A);
      }
      h = Se(h, y), this.staticRulesId = y;
    }
    else {
      for (var S = ke(this.baseHash, d.hash), $ = "", R = 0; R < this.rules.length; R++) {
        var T = this.rules[R];
        if (typeof T == "string") $ += T, process.env.NODE_ENV !== "production" && (S = ke(S, T));
        else if (T) {
          var O = od(Ee(T, a, c, d));
          S = ke(S, O + R), $ += O;
        }
      }
      if ($) {
        var N = jr(S >>> 0);
        c.hasNameForId(this.componentId, N) || c.insertRules(this.componentId, N, d($, ".".concat(N), void 0, this.componentId)), h = Se(h, N);
      }
    }
    return h;
  }, r;
}(), Bd = ve.createContext(void 0);
Bd.Consumer;
var yr = {}, hd = /* @__PURE__ */ new Set();
function Cn(r, a, c) {
  var d = Or(r), h = r, m = !vr(r), y = a.attrs, A = y === void 0 ? fr : y, S = a.componentId, $ = S === void 0 ? function(e, n) {
    var u = typeof e != "string" ? "sc" : ud(e);
    yr[u] = (yr[u] || 0) + 1;
    var t = "".concat(u, "-").concat(Ku(sr + u + yr[u]));
    return n ? "".concat(n, "-").concat(t) : t;
  }(a.displayName, a.parentComponentId) : S, R = a.displayName, T = R === void 0 ? function(e) {
    return vr(e) ? "styled.".concat(e) : "Styled(".concat(Ad(e), ")");
  }(r) : R, O = a.displayName && a.componentId ? "".concat(ud(a.displayName), "-").concat(a.componentId) : a.componentId || $, N = d && h.attrs ? h.attrs.concat(A).filter(Boolean) : A, V = a.shouldForwardProp;
  if (d && h.shouldForwardProp) {
    var q = h.shouldForwardProp;
    if (a.shouldForwardProp) {
      var re = a.shouldForwardProp;
      V = function(e, n) {
        return q(e, n) && re(e, n);
      };
    } else V = q;
  }
  var B = new En(c, O, d ? h.componentStyle : void 0);
  function M(e, n) {
    return function(u, t, f) {
      var l = u.attrs, s = u.componentStyle, p = u.defaultProps, k = u.foldedComponentIds, b = u.styledComponentId, g = u.target, w = ve.useContext(Bd), o = fd(), _ = u.shouldForwardProp || o.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Xr(b);
      var P = Uu(t, w, p) || $e, C = function(J, K, Q) {
        for (var X, te = fe(fe({}, K), { className: void 0, theme: Q }), le = 0; le < J.length; le += 1) {
          var _e = Oe(X = J[le]) ? X(te) : X;
          for (var ce in _e) te[ce] = ce === "className" ? Se(te[ce], _e[ce]) : ce === "style" ? fe(fe({}, te[ce]), _e[ce]) : _e[ce];
        }
        return K.className && (te.className = Se(te.className, K.className)), te;
      }(l, t, P), L = C.as || g, j = {};
      for (var F in C) C[F] === void 0 || F[0] === "$" || F === "as" || F === "theme" && C.theme === P || (F === "forwardedAs" ? j.as = C.forwardedAs : _ && !_(F, L) || (j[F] = C[F], _ || process.env.NODE_ENV !== "development" || ku(F) || hd.has(F) || !Cr.has(L) || (hd.add(F), console.warn('styled-components: it looks like an unknown prop "'.concat(F, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var x = function(J, K) {
        var Q = fd(), X = J.generateAndInjectStyles(K, Q.styleSheet, Q.stylis);
        return process.env.NODE_ENV !== "production" && Xr(X), X;
      }(s, C);
      process.env.NODE_ENV !== "production" && u.warnTooManyClasses && u.warnTooManyClasses(x);
      var ae = Se(k, b);
      return x && (ae += " " + x), C.className && (ae += " " + C.className), j[vr(L) && !Cr.has(L) ? "class" : "className"] = ae, j.ref = f, pu(L, j);
    }(W, e, n);
  }
  M.displayName = T;
  var W = ve.forwardRef(M);
  return W.attrs = N, W.componentStyle = B, W.displayName = T, W.shouldForwardProp = V, W.foldedComponentIds = d ? Se(h.foldedComponentIds, h.styledComponentId) : "", W.styledComponentId = O, W.target = d ? h.target : r, Object.defineProperty(W, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e) {
    this._foldedDefaultProps = d ? function(n) {
      for (var u = [], t = 1; t < arguments.length; t++) u[t - 1] = arguments[t];
      for (var f = 0, l = u; f < l.length; f++) Ar(n, l[f], !0);
      return n;
    }({}, h.defaultProps, e) : e;
  } }), process.env.NODE_ENV !== "production" && (Wu(T, O), W.warnTooManyClasses = /* @__PURE__ */ function(e, n) {
    var u = {}, t = !1;
    return function(f) {
      if (!t && (u[f] = !0, Object.keys(u).length >= 200)) {
        var l = n ? ' with the id of "'.concat(n, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(e).concat(l, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), t = !0, u = {};
      }
    };
  }(T, O)), Lr(W, function() {
    return ".".concat(W.styledComponentId);
  }), m && Md(W, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), W;
}
function md(r, a) {
  for (var c = [r[0]], d = 0, h = a.length; d < h; d += 1) c.push(a[d], r[d + 1]);
  return c;
}
var gd = function(r) {
  return Object.assign(r, { isCss: !0 });
};
function ar(r) {
  for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
  if (Oe(r) || Le(r)) return gd(Ee(md(fr, Te([r], a, !0))));
  var d = r;
  return a.length === 0 && d.length === 1 && typeof d[0] == "string" ? Ee(d) : gd(Ee(md(d, a)));
}
function Tr(r, a, c) {
  if (c === void 0 && (c = $e), !a) throw Ne(1, a);
  var d = function(h) {
    for (var m = [], y = 1; y < arguments.length; y++) m[y - 1] = arguments[y];
    return r(a, c, ar.apply(void 0, Te([h], m, !1)));
  };
  return d.attrs = function(h) {
    return Tr(r, a, fe(fe({}, c), { attrs: Array.prototype.concat(c.attrs, h).filter(Boolean) }));
  }, d.withConfig = function(h) {
    return Tr(r, a, fe(fe({}, c), h));
  }, d;
}
var Hd = function(r) {
  return Tr(Cn, r);
}, se = Hd;
Cr.forEach(function(r) {
  se[r] = Hd(r);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ze = "__sc-".concat(Ce, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ze] || (window[Ze] = 0), window[Ze] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ze] += 1);
const jn = (r) => ar`
    a {
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: #eee520;
        text-decoration: none;
      }
      &:active,
      &:focus,
      &:focus-within {
        color: #eee520;
      }
    }
    ${r.tag === "a" && ar`
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: #eee520;
      }
      &:active,
      &:focus,
      &:focus-within {
        color: #eee520;
      }
    `}
  `, An = (r) => ar`
    box-sizing: border-box;
    font-family: ${r.fontFamily};
    margin: 0;
    padding: 0;
    letter-spacing: 0.04em;
    font-weight: ${r.fontWeight || 400};
    font-style: ${r.fontStyle};
    text-decoration: ${r.textDecoration || "none"};
    font-size: ${r.fontSize || "16px"};
    line-height: ${r.lineHeight || "1.2"};
    color: ${r.color || "#2f3888"};
    text-align: ${r.textAlign || "left"};
    text-transform: ${r.textTransform};
    margin-bottom: ${r.marginBottom};

    b,
    strong {
      font-weight: 600 !important;
    }

    ${jn(r)}
  `;
var Fd = { exports: {} };
(function(r) {
  (function() {
    function a(e) {
      var n = {
        omitExtraWLInCodeBlocks: {
          defaultValue: !1,
          describe: "Omit the default extra whiteline added to code blocks",
          type: "boolean"
        },
        noHeaderId: {
          defaultValue: !1,
          describe: "Turn on/off generated header id",
          type: "boolean"
        },
        prefixHeaderId: {
          defaultValue: !1,
          describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
          type: "string"
        },
        rawPrefixHeaderId: {
          defaultValue: !1,
          describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
          type: "boolean"
        },
        ghCompatibleHeaderId: {
          defaultValue: !1,
          describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
          type: "boolean"
        },
        rawHeaderId: {
          defaultValue: !1,
          describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
          type: "boolean"
        },
        headerLevelStart: {
          defaultValue: !1,
          describe: "The header blocks level start",
          type: "integer"
        },
        parseImgDimensions: {
          defaultValue: !1,
          describe: "Turn on/off image dimension parsing",
          type: "boolean"
        },
        simplifiedAutoLink: {
          defaultValue: !1,
          describe: "Turn on/off GFM autolink style",
          type: "boolean"
        },
        excludeTrailingPunctuationFromURLs: {
          defaultValue: !1,
          describe: "Excludes trailing punctuation from links generated with autoLinking",
          type: "boolean"
        },
        literalMidWordUnderscores: {
          defaultValue: !1,
          describe: "Parse midword underscores as literal underscores",
          type: "boolean"
        },
        literalMidWordAsterisks: {
          defaultValue: !1,
          describe: "Parse midword asterisks as literal asterisks",
          type: "boolean"
        },
        strikethrough: {
          defaultValue: !1,
          describe: "Turn on/off strikethrough support",
          type: "boolean"
        },
        tables: {
          defaultValue: !1,
          describe: "Turn on/off tables support",
          type: "boolean"
        },
        tablesHeaderId: {
          defaultValue: !1,
          describe: "Add an id to table headers",
          type: "boolean"
        },
        ghCodeBlocks: {
          defaultValue: !0,
          describe: "Turn on/off GFM fenced code blocks support",
          type: "boolean"
        },
        tasklists: {
          defaultValue: !1,
          describe: "Turn on/off GFM tasklist support",
          type: "boolean"
        },
        smoothLivePreview: {
          defaultValue: !1,
          describe: "Prevents weird effects in live previews due to incomplete input",
          type: "boolean"
        },
        smartIndentationFix: {
          defaultValue: !1,
          describe: "Tries to smartly fix indentation in es6 strings",
          type: "boolean"
        },
        disableForced4SpacesIndentedSublists: {
          defaultValue: !1,
          describe: "Disables the requirement of indenting nested sublists by 4 spaces",
          type: "boolean"
        },
        simpleLineBreaks: {
          defaultValue: !1,
          describe: "Parses simple line breaks as <br> (GFM Style)",
          type: "boolean"
        },
        requireSpaceBeforeHeadingText: {
          defaultValue: !1,
          describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
          type: "boolean"
        },
        ghMentions: {
          defaultValue: !1,
          describe: "Enables github @mentions",
          type: "boolean"
        },
        ghMentionsLink: {
          defaultValue: "https://github.com/{u}",
          describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
          type: "string"
        },
        encodeEmails: {
          defaultValue: !0,
          describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
          type: "boolean"
        },
        openLinksInNewWindow: {
          defaultValue: !1,
          describe: "Open all links in new windows",
          type: "boolean"
        },
        backslashEscapesHTMLTags: {
          defaultValue: !1,
          describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
          type: "boolean"
        },
        emoji: {
          defaultValue: !1,
          describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
          type: "boolean"
        },
        underline: {
          defaultValue: !1,
          describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
          type: "boolean"
        },
        ellipsis: {
          defaultValue: !0,
          describe: "Replaces three dots with the ellipsis unicode character",
          type: "boolean"
        },
        completeHTMLDocument: {
          defaultValue: !1,
          describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
          type: "boolean"
        },
        metadata: {
          defaultValue: !1,
          describe: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
          type: "boolean"
        },
        splitAdjacentBlockquotes: {
          defaultValue: !1,
          describe: "Split adjacent blockquote blocks",
          type: "boolean"
        }
      };
      if (e === !1)
        return JSON.parse(JSON.stringify(n));
      var u = {};
      for (var t in n)
        n.hasOwnProperty(t) && (u[t] = n[t].defaultValue);
      return u;
    }
    function c() {
      var e = a(!0), n = {};
      for (var u in e)
        e.hasOwnProperty(u) && (n[u] = !0);
      return n;
    }
    var d = {}, h = {}, m = {}, y = a(!0), A = "vanilla", S = {
      github: {
        omitExtraWLInCodeBlocks: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        disableForced4SpacesIndentedSublists: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghCompatibleHeaderId: !0,
        ghMentions: !0,
        backslashEscapesHTMLTags: !0,
        emoji: !0,
        splitAdjacentBlockquotes: !0
      },
      original: {
        noHeaderId: !0,
        ghCodeBlocks: !1
      },
      ghost: {
        omitExtraWLInCodeBlocks: !0,
        parseImgDimensions: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        smoothLivePreview: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghMentions: !1,
        encodeEmails: !0
      },
      vanilla: a(!0),
      allOn: c()
    };
    d.helper = {}, d.extensions = {}, d.setOption = function(e, n) {
      return y[e] = n, this;
    }, d.getOption = function(e) {
      return y[e];
    }, d.getOptions = function() {
      return y;
    }, d.resetOptions = function() {
      y = a(!0);
    }, d.setFlavor = function(e) {
      if (!S.hasOwnProperty(e))
        throw Error(e + " flavor was not found");
      d.resetOptions();
      var n = S[e];
      A = e;
      for (var u in n)
        n.hasOwnProperty(u) && (y[u] = n[u]);
    }, d.getFlavor = function() {
      return A;
    }, d.getFlavorOptions = function(e) {
      if (S.hasOwnProperty(e))
        return S[e];
    }, d.getDefaultOptions = function(e) {
      return a(e);
    }, d.subParser = function(e, n) {
      if (d.helper.isString(e))
        if (typeof n < "u")
          h[e] = n;
        else {
          if (h.hasOwnProperty(e))
            return h[e];
          throw Error("SubParser named " + e + " not registered!");
        }
    }, d.extension = function(e, n) {
      if (!d.helper.isString(e))
        throw Error("Extension 'name' must be a string");
      if (e = d.helper.stdExtName(e), d.helper.isUndefined(n)) {
        if (!m.hasOwnProperty(e))
          throw Error("Extension named " + e + " is not registered!");
        return m[e];
      } else {
        typeof n == "function" && (n = n()), d.helper.isArray(n) || (n = [n]);
        var u = $(n, e);
        if (u.valid)
          m[e] = n;
        else
          throw Error(u.error);
      }
    }, d.getAllExtensions = function() {
      return m;
    }, d.removeExtension = function(e) {
      delete m[e];
    }, d.resetExtensions = function() {
      m = {};
    };
    function $(e, n) {
      var u = n ? "Error in " + n + " extension->" : "Error in unnamed extension", t = {
        valid: !0,
        error: ""
      };
      d.helper.isArray(e) || (e = [e]);
      for (var f = 0; f < e.length; ++f) {
        var l = u + " sub-extension " + f + ": ", s = e[f];
        if (typeof s != "object")
          return t.valid = !1, t.error = l + "must be an object, but " + typeof s + " given", t;
        if (!d.helper.isString(s.type))
          return t.valid = !1, t.error = l + 'property "type" must be a string, but ' + typeof s.type + " given", t;
        var p = s.type = s.type.toLowerCase();
        if (p === "language" && (p = s.type = "lang"), p === "html" && (p = s.type = "output"), p !== "lang" && p !== "output" && p !== "listener")
          return t.valid = !1, t.error = l + "type " + p + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', t;
        if (p === "listener") {
          if (d.helper.isUndefined(s.listeners))
            return t.valid = !1, t.error = l + '. Extensions of type "listener" must have a property called "listeners"', t;
        } else if (d.helper.isUndefined(s.filter) && d.helper.isUndefined(s.regex))
          return t.valid = !1, t.error = l + p + ' extensions must define either a "regex" property or a "filter" method', t;
        if (s.listeners) {
          if (typeof s.listeners != "object")
            return t.valid = !1, t.error = l + '"listeners" property must be an object but ' + typeof s.listeners + " given", t;
          for (var k in s.listeners)
            if (s.listeners.hasOwnProperty(k) && typeof s.listeners[k] != "function")
              return t.valid = !1, t.error = l + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + k + " must be a function but " + typeof s.listeners[k] + " given", t;
        }
        if (s.filter) {
          if (typeof s.filter != "function")
            return t.valid = !1, t.error = l + '"filter" must be a function, but ' + typeof s.filter + " given", t;
        } else if (s.regex) {
          if (d.helper.isString(s.regex) && (s.regex = new RegExp(s.regex, "g")), !(s.regex instanceof RegExp))
            return t.valid = !1, t.error = l + '"regex" property must either be a string or a RegExp object, but ' + typeof s.regex + " given", t;
          if (d.helper.isUndefined(s.replace))
            return t.valid = !1, t.error = l + '"regex" extensions must implement a replace string or function', t;
        }
      }
      return t;
    }
    d.validateExtension = function(e) {
      var n = $(e, null);
      return n.valid ? !0 : (console.warn(n.error), !1);
    }, d.hasOwnProperty("helper") || (d.helper = {}), d.helper.isString = function(e) {
      return typeof e == "string" || e instanceof String;
    }, d.helper.isFunction = function(e) {
      var n = {};
      return e && n.toString.call(e) === "[object Function]";
    }, d.helper.isArray = function(e) {
      return Array.isArray(e);
    }, d.helper.isUndefined = function(e) {
      return typeof e > "u";
    }, d.helper.forEach = function(e, n) {
      if (d.helper.isUndefined(e))
        throw new Error("obj param is required");
      if (d.helper.isUndefined(n))
        throw new Error("callback param is required");
      if (!d.helper.isFunction(n))
        throw new Error("callback param must be a function/closure");
      if (typeof e.forEach == "function")
        e.forEach(n);
      else if (d.helper.isArray(e))
        for (var u = 0; u < e.length; u++)
          n(e[u], u, e);
      else if (typeof e == "object")
        for (var t in e)
          e.hasOwnProperty(t) && n(e[t], t, e);
      else
        throw new Error("obj does not seem to be an array or an iterable object");
    }, d.helper.stdExtName = function(e) {
      return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
    };
    function R(e, n) {
      var u = n.charCodeAt(0);
      return "¨E" + u + "E";
    }
    d.helper.escapeCharactersCallback = R, d.helper.escapeCharacters = function(e, n, u) {
      var t = "([" + n.replace(/([\[\]\\])/g, "\\$1") + "])";
      u && (t = "\\\\" + t);
      var f = new RegExp(t, "g");
      return e = e.replace(f, R), e;
    }, d.helper.unescapeHTMLEntities = function(e) {
      return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    };
    var T = function(e, n, u, t) {
      var f = t || "", l = f.indexOf("g") > -1, s = new RegExp(n + "|" + u, "g" + f.replace(/g/g, "")), p = new RegExp(n, f.replace(/g/g, "")), k = [], b, g, w, o, _;
      do
        for (b = 0; w = s.exec(e); )
          if (p.test(w[0]))
            b++ || (g = s.lastIndex, o = g - w[0].length);
          else if (b && !--b) {
            _ = w.index + w[0].length;
            var P = {
              left: { start: o, end: g },
              match: { start: g, end: w.index },
              right: { start: w.index, end: _ },
              wholeMatch: { start: o, end: _ }
            };
            if (k.push(P), !l)
              return k;
          }
      while (b && (s.lastIndex = g));
      return k;
    };
    d.helper.matchRecursiveRegExp = function(e, n, u, t) {
      for (var f = T(e, n, u, t), l = [], s = 0; s < f.length; ++s)
        l.push([
          e.slice(f[s].wholeMatch.start, f[s].wholeMatch.end),
          e.slice(f[s].match.start, f[s].match.end),
          e.slice(f[s].left.start, f[s].left.end),
          e.slice(f[s].right.start, f[s].right.end)
        ]);
      return l;
    }, d.helper.replaceRecursiveRegExp = function(e, n, u, t, f) {
      if (!d.helper.isFunction(n)) {
        var l = n;
        n = function() {
          return l;
        };
      }
      var s = T(e, u, t, f), p = e, k = s.length;
      if (k > 0) {
        var b = [];
        s[0].wholeMatch.start !== 0 && b.push(e.slice(0, s[0].wholeMatch.start));
        for (var g = 0; g < k; ++g)
          b.push(
            n(
              e.slice(s[g].wholeMatch.start, s[g].wholeMatch.end),
              e.slice(s[g].match.start, s[g].match.end),
              e.slice(s[g].left.start, s[g].left.end),
              e.slice(s[g].right.start, s[g].right.end)
            )
          ), g < k - 1 && b.push(e.slice(s[g].wholeMatch.end, s[g + 1].wholeMatch.start));
        s[k - 1].wholeMatch.end < e.length && b.push(e.slice(s[k - 1].wholeMatch.end)), p = b.join("");
      }
      return p;
    }, d.helper.regexIndexOf = function(e, n, u) {
      if (!d.helper.isString(e))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      if (!(n instanceof RegExp))
        throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
      var t = e.substring(u || 0).search(n);
      return t >= 0 ? t + (u || 0) : t;
    }, d.helper.splitAtIndex = function(e, n) {
      if (!d.helper.isString(e))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      return [e.substring(0, n), e.substring(n)];
    }, d.helper.encodeEmailAddress = function(e) {
      var n = [
        function(u) {
          return "&#" + u.charCodeAt(0) + ";";
        },
        function(u) {
          return "&#x" + u.charCodeAt(0).toString(16) + ";";
        },
        function(u) {
          return u;
        }
      ];
      return e = e.replace(/./g, function(u) {
        if (u === "@")
          u = n[Math.floor(Math.random() * 2)](u);
        else {
          var t = Math.random();
          u = t > 0.9 ? n[2](u) : t > 0.45 ? n[1](u) : n[0](u);
        }
        return u;
      }), e;
    }, d.helper.padEnd = function(n, u, t) {
      return u = u >> 0, t = String(t || " "), n.length > u ? String(n) : (u = u - n.length, u > t.length && (t += t.repeat(u / t.length)), String(n) + t.slice(0, u));
    }, typeof console > "u" && (console = {
      warn: function(e) {
        alert(e);
      },
      log: function(e) {
        alert(e);
      },
      error: function(e) {
        throw e;
      }
    }), d.helper.regexes = {
      asteriskDashAndColon: /([*_:~])/g
    }, d.helper.emojis = {
      "+1": "👍",
      "-1": "👎",
      100: "💯",
      1234: "🔢",
      "1st_place_medal": "🥇",
      "2nd_place_medal": "🥈",
      "3rd_place_medal": "🥉",
      "8ball": "🎱",
      a: "🅰️",
      ab: "🆎",
      abc: "🔤",
      abcd: "🔡",
      accept: "🉑",
      aerial_tramway: "🚡",
      airplane: "✈️",
      alarm_clock: "⏰",
      alembic: "⚗️",
      alien: "👽",
      ambulance: "🚑",
      amphora: "🏺",
      anchor: "⚓️",
      angel: "👼",
      anger: "💢",
      angry: "😠",
      anguished: "😧",
      ant: "🐜",
      apple: "🍎",
      aquarius: "♒️",
      aries: "♈️",
      arrow_backward: "◀️",
      arrow_double_down: "⏬",
      arrow_double_up: "⏫",
      arrow_down: "⬇️",
      arrow_down_small: "🔽",
      arrow_forward: "▶️",
      arrow_heading_down: "⤵️",
      arrow_heading_up: "⤴️",
      arrow_left: "⬅️",
      arrow_lower_left: "↙️",
      arrow_lower_right: "↘️",
      arrow_right: "➡️",
      arrow_right_hook: "↪️",
      arrow_up: "⬆️",
      arrow_up_down: "↕️",
      arrow_up_small: "🔼",
      arrow_upper_left: "↖️",
      arrow_upper_right: "↗️",
      arrows_clockwise: "🔃",
      arrows_counterclockwise: "🔄",
      art: "🎨",
      articulated_lorry: "🚛",
      artificial_satellite: "🛰",
      astonished: "😲",
      athletic_shoe: "👟",
      atm: "🏧",
      atom_symbol: "⚛️",
      avocado: "🥑",
      b: "🅱️",
      baby: "👶",
      baby_bottle: "🍼",
      baby_chick: "🐤",
      baby_symbol: "🚼",
      back: "🔙",
      bacon: "🥓",
      badminton: "🏸",
      baggage_claim: "🛄",
      baguette_bread: "🥖",
      balance_scale: "⚖️",
      balloon: "🎈",
      ballot_box: "🗳",
      ballot_box_with_check: "☑️",
      bamboo: "🎍",
      banana: "🍌",
      bangbang: "‼️",
      bank: "🏦",
      bar_chart: "📊",
      barber: "💈",
      baseball: "⚾️",
      basketball: "🏀",
      basketball_man: "⛹️",
      basketball_woman: "⛹️&zwj;♀️",
      bat: "🦇",
      bath: "🛀",
      bathtub: "🛁",
      battery: "🔋",
      beach_umbrella: "🏖",
      bear: "🐻",
      bed: "🛏",
      bee: "🐝",
      beer: "🍺",
      beers: "🍻",
      beetle: "🐞",
      beginner: "🔰",
      bell: "🔔",
      bellhop_bell: "🛎",
      bento: "🍱",
      biking_man: "🚴",
      bike: "🚲",
      biking_woman: "🚴&zwj;♀️",
      bikini: "👙",
      biohazard: "☣️",
      bird: "🐦",
      birthday: "🎂",
      black_circle: "⚫️",
      black_flag: "🏴",
      black_heart: "🖤",
      black_joker: "🃏",
      black_large_square: "⬛️",
      black_medium_small_square: "◾️",
      black_medium_square: "◼️",
      black_nib: "✒️",
      black_small_square: "▪️",
      black_square_button: "🔲",
      blonde_man: "👱",
      blonde_woman: "👱&zwj;♀️",
      blossom: "🌼",
      blowfish: "🐡",
      blue_book: "📘",
      blue_car: "🚙",
      blue_heart: "💙",
      blush: "😊",
      boar: "🐗",
      boat: "⛵️",
      bomb: "💣",
      book: "📖",
      bookmark: "🔖",
      bookmark_tabs: "📑",
      books: "📚",
      boom: "💥",
      boot: "👢",
      bouquet: "💐",
      bowing_man: "🙇",
      bow_and_arrow: "🏹",
      bowing_woman: "🙇&zwj;♀️",
      bowling: "🎳",
      boxing_glove: "🥊",
      boy: "👦",
      bread: "🍞",
      bride_with_veil: "👰",
      bridge_at_night: "🌉",
      briefcase: "💼",
      broken_heart: "💔",
      bug: "🐛",
      building_construction: "🏗",
      bulb: "💡",
      bullettrain_front: "🚅",
      bullettrain_side: "🚄",
      burrito: "🌯",
      bus: "🚌",
      business_suit_levitating: "🕴",
      busstop: "🚏",
      bust_in_silhouette: "👤",
      busts_in_silhouette: "👥",
      butterfly: "🦋",
      cactus: "🌵",
      cake: "🍰",
      calendar: "📆",
      call_me_hand: "🤙",
      calling: "📲",
      camel: "🐫",
      camera: "📷",
      camera_flash: "📸",
      camping: "🏕",
      cancer: "♋️",
      candle: "🕯",
      candy: "🍬",
      canoe: "🛶",
      capital_abcd: "🔠",
      capricorn: "♑️",
      car: "🚗",
      card_file_box: "🗃",
      card_index: "📇",
      card_index_dividers: "🗂",
      carousel_horse: "🎠",
      carrot: "🥕",
      cat: "🐱",
      cat2: "🐈",
      cd: "💿",
      chains: "⛓",
      champagne: "🍾",
      chart: "💹",
      chart_with_downwards_trend: "📉",
      chart_with_upwards_trend: "📈",
      checkered_flag: "🏁",
      cheese: "🧀",
      cherries: "🍒",
      cherry_blossom: "🌸",
      chestnut: "🌰",
      chicken: "🐔",
      children_crossing: "🚸",
      chipmunk: "🐿",
      chocolate_bar: "🍫",
      christmas_tree: "🎄",
      church: "⛪️",
      cinema: "🎦",
      circus_tent: "🎪",
      city_sunrise: "🌇",
      city_sunset: "🌆",
      cityscape: "🏙",
      cl: "🆑",
      clamp: "🗜",
      clap: "👏",
      clapper: "🎬",
      classical_building: "🏛",
      clinking_glasses: "🥂",
      clipboard: "📋",
      clock1: "🕐",
      clock10: "🕙",
      clock1030: "🕥",
      clock11: "🕚",
      clock1130: "🕦",
      clock12: "🕛",
      clock1230: "🕧",
      clock130: "🕜",
      clock2: "🕑",
      clock230: "🕝",
      clock3: "🕒",
      clock330: "🕞",
      clock4: "🕓",
      clock430: "🕟",
      clock5: "🕔",
      clock530: "🕠",
      clock6: "🕕",
      clock630: "🕡",
      clock7: "🕖",
      clock730: "🕢",
      clock8: "🕗",
      clock830: "🕣",
      clock9: "🕘",
      clock930: "🕤",
      closed_book: "📕",
      closed_lock_with_key: "🔐",
      closed_umbrella: "🌂",
      cloud: "☁️",
      cloud_with_lightning: "🌩",
      cloud_with_lightning_and_rain: "⛈",
      cloud_with_rain: "🌧",
      cloud_with_snow: "🌨",
      clown_face: "🤡",
      clubs: "♣️",
      cocktail: "🍸",
      coffee: "☕️",
      coffin: "⚰️",
      cold_sweat: "😰",
      comet: "☄️",
      computer: "💻",
      computer_mouse: "🖱",
      confetti_ball: "🎊",
      confounded: "😖",
      confused: "😕",
      congratulations: "㊗️",
      construction: "🚧",
      construction_worker_man: "👷",
      construction_worker_woman: "👷&zwj;♀️",
      control_knobs: "🎛",
      convenience_store: "🏪",
      cookie: "🍪",
      cool: "🆒",
      policeman: "👮",
      copyright: "©️",
      corn: "🌽",
      couch_and_lamp: "🛋",
      couple: "👫",
      couple_with_heart_woman_man: "💑",
      couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
      couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
      couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
      couplekiss_man_woman: "💏",
      couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
      cow: "🐮",
      cow2: "🐄",
      cowboy_hat_face: "🤠",
      crab: "🦀",
      crayon: "🖍",
      credit_card: "💳",
      crescent_moon: "🌙",
      cricket: "🏏",
      crocodile: "🐊",
      croissant: "🥐",
      crossed_fingers: "🤞",
      crossed_flags: "🎌",
      crossed_swords: "⚔️",
      crown: "👑",
      cry: "😢",
      crying_cat_face: "😿",
      crystal_ball: "🔮",
      cucumber: "🥒",
      cupid: "💘",
      curly_loop: "➰",
      currency_exchange: "💱",
      curry: "🍛",
      custard: "🍮",
      customs: "🛃",
      cyclone: "🌀",
      dagger: "🗡",
      dancer: "💃",
      dancing_women: "👯",
      dancing_men: "👯&zwj;♂️",
      dango: "🍡",
      dark_sunglasses: "🕶",
      dart: "🎯",
      dash: "💨",
      date: "📅",
      deciduous_tree: "🌳",
      deer: "🦌",
      department_store: "🏬",
      derelict_house: "🏚",
      desert: "🏜",
      desert_island: "🏝",
      desktop_computer: "🖥",
      male_detective: "🕵️",
      diamond_shape_with_a_dot_inside: "💠",
      diamonds: "♦️",
      disappointed: "😞",
      disappointed_relieved: "😥",
      dizzy: "💫",
      dizzy_face: "😵",
      do_not_litter: "🚯",
      dog: "🐶",
      dog2: "🐕",
      dollar: "💵",
      dolls: "🎎",
      dolphin: "🐬",
      door: "🚪",
      doughnut: "🍩",
      dove: "🕊",
      dragon: "🐉",
      dragon_face: "🐲",
      dress: "👗",
      dromedary_camel: "🐪",
      drooling_face: "🤤",
      droplet: "💧",
      drum: "🥁",
      duck: "🦆",
      dvd: "📀",
      "e-mail": "📧",
      eagle: "🦅",
      ear: "👂",
      ear_of_rice: "🌾",
      earth_africa: "🌍",
      earth_americas: "🌎",
      earth_asia: "🌏",
      egg: "🥚",
      eggplant: "🍆",
      eight_pointed_black_star: "✴️",
      eight_spoked_asterisk: "✳️",
      electric_plug: "🔌",
      elephant: "🐘",
      email: "✉️",
      end: "🔚",
      envelope_with_arrow: "📩",
      euro: "💶",
      european_castle: "🏰",
      european_post_office: "🏤",
      evergreen_tree: "🌲",
      exclamation: "❗️",
      expressionless: "😑",
      eye: "👁",
      eye_speech_bubble: "👁&zwj;🗨",
      eyeglasses: "👓",
      eyes: "👀",
      face_with_head_bandage: "🤕",
      face_with_thermometer: "🤒",
      fist_oncoming: "👊",
      factory: "🏭",
      fallen_leaf: "🍂",
      family_man_woman_boy: "👪",
      family_man_boy: "👨&zwj;👦",
      family_man_boy_boy: "👨&zwj;👦&zwj;👦",
      family_man_girl: "👨&zwj;👧",
      family_man_girl_boy: "👨&zwj;👧&zwj;👦",
      family_man_girl_girl: "👨&zwj;👧&zwj;👧",
      family_man_man_boy: "👨&zwj;👨&zwj;👦",
      family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
      family_man_man_girl: "👨&zwj;👨&zwj;👧",
      family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
      family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
      family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
      family_man_woman_girl: "👨&zwj;👩&zwj;👧",
      family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
      family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
      family_woman_boy: "👩&zwj;👦",
      family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
      family_woman_girl: "👩&zwj;👧",
      family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
      family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
      family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
      family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
      family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
      family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
      family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
      fast_forward: "⏩",
      fax: "📠",
      fearful: "😨",
      feet: "🐾",
      female_detective: "🕵️&zwj;♀️",
      ferris_wheel: "🎡",
      ferry: "⛴",
      field_hockey: "🏑",
      file_cabinet: "🗄",
      file_folder: "📁",
      film_projector: "📽",
      film_strip: "🎞",
      fire: "🔥",
      fire_engine: "🚒",
      fireworks: "🎆",
      first_quarter_moon: "🌓",
      first_quarter_moon_with_face: "🌛",
      fish: "🐟",
      fish_cake: "🍥",
      fishing_pole_and_fish: "🎣",
      fist_raised: "✊",
      fist_left: "🤛",
      fist_right: "🤜",
      flags: "🎏",
      flashlight: "🔦",
      fleur_de_lis: "⚜️",
      flight_arrival: "🛬",
      flight_departure: "🛫",
      floppy_disk: "💾",
      flower_playing_cards: "🎴",
      flushed: "😳",
      fog: "🌫",
      foggy: "🌁",
      football: "🏈",
      footprints: "👣",
      fork_and_knife: "🍴",
      fountain: "⛲️",
      fountain_pen: "🖋",
      four_leaf_clover: "🍀",
      fox_face: "🦊",
      framed_picture: "🖼",
      free: "🆓",
      fried_egg: "🍳",
      fried_shrimp: "🍤",
      fries: "🍟",
      frog: "🐸",
      frowning: "😦",
      frowning_face: "☹️",
      frowning_man: "🙍&zwj;♂️",
      frowning_woman: "🙍",
      middle_finger: "🖕",
      fuelpump: "⛽️",
      full_moon: "🌕",
      full_moon_with_face: "🌝",
      funeral_urn: "⚱️",
      game_die: "🎲",
      gear: "⚙️",
      gem: "💎",
      gemini: "♊️",
      ghost: "👻",
      gift: "🎁",
      gift_heart: "💝",
      girl: "👧",
      globe_with_meridians: "🌐",
      goal_net: "🥅",
      goat: "🐐",
      golf: "⛳️",
      golfing_man: "🏌️",
      golfing_woman: "🏌️&zwj;♀️",
      gorilla: "🦍",
      grapes: "🍇",
      green_apple: "🍏",
      green_book: "📗",
      green_heart: "💚",
      green_salad: "🥗",
      grey_exclamation: "❕",
      grey_question: "❔",
      grimacing: "😬",
      grin: "😁",
      grinning: "😀",
      guardsman: "💂",
      guardswoman: "💂&zwj;♀️",
      guitar: "🎸",
      gun: "🔫",
      haircut_woman: "💇",
      haircut_man: "💇&zwj;♂️",
      hamburger: "🍔",
      hammer: "🔨",
      hammer_and_pick: "⚒",
      hammer_and_wrench: "🛠",
      hamster: "🐹",
      hand: "✋",
      handbag: "👜",
      handshake: "🤝",
      hankey: "💩",
      hatched_chick: "🐥",
      hatching_chick: "🐣",
      headphones: "🎧",
      hear_no_evil: "🙉",
      heart: "❤️",
      heart_decoration: "💟",
      heart_eyes: "😍",
      heart_eyes_cat: "😻",
      heartbeat: "💓",
      heartpulse: "💗",
      hearts: "♥️",
      heavy_check_mark: "✔️",
      heavy_division_sign: "➗",
      heavy_dollar_sign: "💲",
      heavy_heart_exclamation: "❣️",
      heavy_minus_sign: "➖",
      heavy_multiplication_x: "✖️",
      heavy_plus_sign: "➕",
      helicopter: "🚁",
      herb: "🌿",
      hibiscus: "🌺",
      high_brightness: "🔆",
      high_heel: "👠",
      hocho: "🔪",
      hole: "🕳",
      honey_pot: "🍯",
      horse: "🐴",
      horse_racing: "🏇",
      hospital: "🏥",
      hot_pepper: "🌶",
      hotdog: "🌭",
      hotel: "🏨",
      hotsprings: "♨️",
      hourglass: "⌛️",
      hourglass_flowing_sand: "⏳",
      house: "🏠",
      house_with_garden: "🏡",
      houses: "🏘",
      hugs: "🤗",
      hushed: "😯",
      ice_cream: "🍨",
      ice_hockey: "🏒",
      ice_skate: "⛸",
      icecream: "🍦",
      id: "🆔",
      ideograph_advantage: "🉐",
      imp: "👿",
      inbox_tray: "📥",
      incoming_envelope: "📨",
      tipping_hand_woman: "💁",
      information_source: "ℹ️",
      innocent: "😇",
      interrobang: "⁉️",
      iphone: "📱",
      izakaya_lantern: "🏮",
      jack_o_lantern: "🎃",
      japan: "🗾",
      japanese_castle: "🏯",
      japanese_goblin: "👺",
      japanese_ogre: "👹",
      jeans: "👖",
      joy: "😂",
      joy_cat: "😹",
      joystick: "🕹",
      kaaba: "🕋",
      key: "🔑",
      keyboard: "⌨️",
      keycap_ten: "🔟",
      kick_scooter: "🛴",
      kimono: "👘",
      kiss: "💋",
      kissing: "😗",
      kissing_cat: "😽",
      kissing_closed_eyes: "😚",
      kissing_heart: "😘",
      kissing_smiling_eyes: "😙",
      kiwi_fruit: "🥝",
      koala: "🐨",
      koko: "🈁",
      label: "🏷",
      large_blue_circle: "🔵",
      large_blue_diamond: "🔷",
      large_orange_diamond: "🔶",
      last_quarter_moon: "🌗",
      last_quarter_moon_with_face: "🌜",
      latin_cross: "✝️",
      laughing: "😆",
      leaves: "🍃",
      ledger: "📒",
      left_luggage: "🛅",
      left_right_arrow: "↔️",
      leftwards_arrow_with_hook: "↩️",
      lemon: "🍋",
      leo: "♌️",
      leopard: "🐆",
      level_slider: "🎚",
      libra: "♎️",
      light_rail: "🚈",
      link: "🔗",
      lion: "🦁",
      lips: "👄",
      lipstick: "💄",
      lizard: "🦎",
      lock: "🔒",
      lock_with_ink_pen: "🔏",
      lollipop: "🍭",
      loop: "➿",
      loud_sound: "🔊",
      loudspeaker: "📢",
      love_hotel: "🏩",
      love_letter: "💌",
      low_brightness: "🔅",
      lying_face: "🤥",
      m: "Ⓜ️",
      mag: "🔍",
      mag_right: "🔎",
      mahjong: "🀄️",
      mailbox: "📫",
      mailbox_closed: "📪",
      mailbox_with_mail: "📬",
      mailbox_with_no_mail: "📭",
      man: "👨",
      man_artist: "👨&zwj;🎨",
      man_astronaut: "👨&zwj;🚀",
      man_cartwheeling: "🤸&zwj;♂️",
      man_cook: "👨&zwj;🍳",
      man_dancing: "🕺",
      man_facepalming: "🤦&zwj;♂️",
      man_factory_worker: "👨&zwj;🏭",
      man_farmer: "👨&zwj;🌾",
      man_firefighter: "👨&zwj;🚒",
      man_health_worker: "👨&zwj;⚕️",
      man_in_tuxedo: "🤵",
      man_judge: "👨&zwj;⚖️",
      man_juggling: "🤹&zwj;♂️",
      man_mechanic: "👨&zwj;🔧",
      man_office_worker: "👨&zwj;💼",
      man_pilot: "👨&zwj;✈️",
      man_playing_handball: "🤾&zwj;♂️",
      man_playing_water_polo: "🤽&zwj;♂️",
      man_scientist: "👨&zwj;🔬",
      man_shrugging: "🤷&zwj;♂️",
      man_singer: "👨&zwj;🎤",
      man_student: "👨&zwj;🎓",
      man_teacher: "👨&zwj;🏫",
      man_technologist: "👨&zwj;💻",
      man_with_gua_pi_mao: "👲",
      man_with_turban: "👳",
      tangerine: "🍊",
      mans_shoe: "👞",
      mantelpiece_clock: "🕰",
      maple_leaf: "🍁",
      martial_arts_uniform: "🥋",
      mask: "😷",
      massage_woman: "💆",
      massage_man: "💆&zwj;♂️",
      meat_on_bone: "🍖",
      medal_military: "🎖",
      medal_sports: "🏅",
      mega: "📣",
      melon: "🍈",
      memo: "📝",
      men_wrestling: "🤼&zwj;♂️",
      menorah: "🕎",
      mens: "🚹",
      metal: "🤘",
      metro: "🚇",
      microphone: "🎤",
      microscope: "🔬",
      milk_glass: "🥛",
      milky_way: "🌌",
      minibus: "🚐",
      minidisc: "💽",
      mobile_phone_off: "📴",
      money_mouth_face: "🤑",
      money_with_wings: "💸",
      moneybag: "💰",
      monkey: "🐒",
      monkey_face: "🐵",
      monorail: "🚝",
      moon: "🌔",
      mortar_board: "🎓",
      mosque: "🕌",
      motor_boat: "🛥",
      motor_scooter: "🛵",
      motorcycle: "🏍",
      motorway: "🛣",
      mount_fuji: "🗻",
      mountain: "⛰",
      mountain_biking_man: "🚵",
      mountain_biking_woman: "🚵&zwj;♀️",
      mountain_cableway: "🚠",
      mountain_railway: "🚞",
      mountain_snow: "🏔",
      mouse: "🐭",
      mouse2: "🐁",
      movie_camera: "🎥",
      moyai: "🗿",
      mrs_claus: "🤶",
      muscle: "💪",
      mushroom: "🍄",
      musical_keyboard: "🎹",
      musical_note: "🎵",
      musical_score: "🎼",
      mute: "🔇",
      nail_care: "💅",
      name_badge: "📛",
      national_park: "🏞",
      nauseated_face: "🤢",
      necktie: "👔",
      negative_squared_cross_mark: "❎",
      nerd_face: "🤓",
      neutral_face: "😐",
      new: "🆕",
      new_moon: "🌑",
      new_moon_with_face: "🌚",
      newspaper: "📰",
      newspaper_roll: "🗞",
      next_track_button: "⏭",
      ng: "🆖",
      no_good_man: "🙅&zwj;♂️",
      no_good_woman: "🙅",
      night_with_stars: "🌃",
      no_bell: "🔕",
      no_bicycles: "🚳",
      no_entry: "⛔️",
      no_entry_sign: "🚫",
      no_mobile_phones: "📵",
      no_mouth: "😶",
      no_pedestrians: "🚷",
      no_smoking: "🚭",
      "non-potable_water": "🚱",
      nose: "👃",
      notebook: "📓",
      notebook_with_decorative_cover: "📔",
      notes: "🎶",
      nut_and_bolt: "🔩",
      o: "⭕️",
      o2: "🅾️",
      ocean: "🌊",
      octopus: "🐙",
      oden: "🍢",
      office: "🏢",
      oil_drum: "🛢",
      ok: "🆗",
      ok_hand: "👌",
      ok_man: "🙆&zwj;♂️",
      ok_woman: "🙆",
      old_key: "🗝",
      older_man: "👴",
      older_woman: "👵",
      om: "🕉",
      on: "🔛",
      oncoming_automobile: "🚘",
      oncoming_bus: "🚍",
      oncoming_police_car: "🚔",
      oncoming_taxi: "🚖",
      open_file_folder: "📂",
      open_hands: "👐",
      open_mouth: "😮",
      open_umbrella: "☂️",
      ophiuchus: "⛎",
      orange_book: "📙",
      orthodox_cross: "☦️",
      outbox_tray: "📤",
      owl: "🦉",
      ox: "🐂",
      package: "📦",
      page_facing_up: "📄",
      page_with_curl: "📃",
      pager: "📟",
      paintbrush: "🖌",
      palm_tree: "🌴",
      pancakes: "🥞",
      panda_face: "🐼",
      paperclip: "📎",
      paperclips: "🖇",
      parasol_on_ground: "⛱",
      parking: "🅿️",
      part_alternation_mark: "〽️",
      partly_sunny: "⛅️",
      passenger_ship: "🛳",
      passport_control: "🛂",
      pause_button: "⏸",
      peace_symbol: "☮️",
      peach: "🍑",
      peanuts: "🥜",
      pear: "🍐",
      pen: "🖊",
      pencil2: "✏️",
      penguin: "🐧",
      pensive: "😔",
      performing_arts: "🎭",
      persevere: "😣",
      person_fencing: "🤺",
      pouting_woman: "🙎",
      phone: "☎️",
      pick: "⛏",
      pig: "🐷",
      pig2: "🐖",
      pig_nose: "🐽",
      pill: "💊",
      pineapple: "🍍",
      ping_pong: "🏓",
      pisces: "♓️",
      pizza: "🍕",
      place_of_worship: "🛐",
      plate_with_cutlery: "🍽",
      play_or_pause_button: "⏯",
      point_down: "👇",
      point_left: "👈",
      point_right: "👉",
      point_up: "☝️",
      point_up_2: "👆",
      police_car: "🚓",
      policewoman: "👮&zwj;♀️",
      poodle: "🐩",
      popcorn: "🍿",
      post_office: "🏣",
      postal_horn: "📯",
      postbox: "📮",
      potable_water: "🚰",
      potato: "🥔",
      pouch: "👝",
      poultry_leg: "🍗",
      pound: "💷",
      rage: "😡",
      pouting_cat: "😾",
      pouting_man: "🙎&zwj;♂️",
      pray: "🙏",
      prayer_beads: "📿",
      pregnant_woman: "🤰",
      previous_track_button: "⏮",
      prince: "🤴",
      princess: "👸",
      printer: "🖨",
      purple_heart: "💜",
      purse: "👛",
      pushpin: "📌",
      put_litter_in_its_place: "🚮",
      question: "❓",
      rabbit: "🐰",
      rabbit2: "🐇",
      racehorse: "🐎",
      racing_car: "🏎",
      radio: "📻",
      radio_button: "🔘",
      radioactive: "☢️",
      railway_car: "🚃",
      railway_track: "🛤",
      rainbow: "🌈",
      rainbow_flag: "🏳️&zwj;🌈",
      raised_back_of_hand: "🤚",
      raised_hand_with_fingers_splayed: "🖐",
      raised_hands: "🙌",
      raising_hand_woman: "🙋",
      raising_hand_man: "🙋&zwj;♂️",
      ram: "🐏",
      ramen: "🍜",
      rat: "🐀",
      record_button: "⏺",
      recycle: "♻️",
      red_circle: "🔴",
      registered: "®️",
      relaxed: "☺️",
      relieved: "😌",
      reminder_ribbon: "🎗",
      repeat: "🔁",
      repeat_one: "🔂",
      rescue_worker_helmet: "⛑",
      restroom: "🚻",
      revolving_hearts: "💞",
      rewind: "⏪",
      rhinoceros: "🦏",
      ribbon: "🎀",
      rice: "🍚",
      rice_ball: "🍙",
      rice_cracker: "🍘",
      rice_scene: "🎑",
      right_anger_bubble: "🗯",
      ring: "💍",
      robot: "🤖",
      rocket: "🚀",
      rofl: "🤣",
      roll_eyes: "🙄",
      roller_coaster: "🎢",
      rooster: "🐓",
      rose: "🌹",
      rosette: "🏵",
      rotating_light: "🚨",
      round_pushpin: "📍",
      rowing_man: "🚣",
      rowing_woman: "🚣&zwj;♀️",
      rugby_football: "🏉",
      running_man: "🏃",
      running_shirt_with_sash: "🎽",
      running_woman: "🏃&zwj;♀️",
      sa: "🈂️",
      sagittarius: "♐️",
      sake: "🍶",
      sandal: "👡",
      santa: "🎅",
      satellite: "📡",
      saxophone: "🎷",
      school: "🏫",
      school_satchel: "🎒",
      scissors: "✂️",
      scorpion: "🦂",
      scorpius: "♏️",
      scream: "😱",
      scream_cat: "🙀",
      scroll: "📜",
      seat: "💺",
      secret: "㊙️",
      see_no_evil: "🙈",
      seedling: "🌱",
      selfie: "🤳",
      shallow_pan_of_food: "🥘",
      shamrock: "☘️",
      shark: "🦈",
      shaved_ice: "🍧",
      sheep: "🐑",
      shell: "🐚",
      shield: "🛡",
      shinto_shrine: "⛩",
      ship: "🚢",
      shirt: "👕",
      shopping: "🛍",
      shopping_cart: "🛒",
      shower: "🚿",
      shrimp: "🦐",
      signal_strength: "📶",
      six_pointed_star: "🔯",
      ski: "🎿",
      skier: "⛷",
      skull: "💀",
      skull_and_crossbones: "☠️",
      sleeping: "😴",
      sleeping_bed: "🛌",
      sleepy: "😪",
      slightly_frowning_face: "🙁",
      slightly_smiling_face: "🙂",
      slot_machine: "🎰",
      small_airplane: "🛩",
      small_blue_diamond: "🔹",
      small_orange_diamond: "🔸",
      small_red_triangle: "🔺",
      small_red_triangle_down: "🔻",
      smile: "😄",
      smile_cat: "😸",
      smiley: "😃",
      smiley_cat: "😺",
      smiling_imp: "😈",
      smirk: "😏",
      smirk_cat: "😼",
      smoking: "🚬",
      snail: "🐌",
      snake: "🐍",
      sneezing_face: "🤧",
      snowboarder: "🏂",
      snowflake: "❄️",
      snowman: "⛄️",
      snowman_with_snow: "☃️",
      sob: "😭",
      soccer: "⚽️",
      soon: "🔜",
      sos: "🆘",
      sound: "🔉",
      space_invader: "👾",
      spades: "♠️",
      spaghetti: "🍝",
      sparkle: "❇️",
      sparkler: "🎇",
      sparkles: "✨",
      sparkling_heart: "💖",
      speak_no_evil: "🙊",
      speaker: "🔈",
      speaking_head: "🗣",
      speech_balloon: "💬",
      speedboat: "🚤",
      spider: "🕷",
      spider_web: "🕸",
      spiral_calendar: "🗓",
      spiral_notepad: "🗒",
      spoon: "🥄",
      squid: "🦑",
      stadium: "🏟",
      star: "⭐️",
      star2: "🌟",
      star_and_crescent: "☪️",
      star_of_david: "✡️",
      stars: "🌠",
      station: "🚉",
      statue_of_liberty: "🗽",
      steam_locomotive: "🚂",
      stew: "🍲",
      stop_button: "⏹",
      stop_sign: "🛑",
      stopwatch: "⏱",
      straight_ruler: "📏",
      strawberry: "🍓",
      stuck_out_tongue: "😛",
      stuck_out_tongue_closed_eyes: "😝",
      stuck_out_tongue_winking_eye: "😜",
      studio_microphone: "🎙",
      stuffed_flatbread: "🥙",
      sun_behind_large_cloud: "🌥",
      sun_behind_rain_cloud: "🌦",
      sun_behind_small_cloud: "🌤",
      sun_with_face: "🌞",
      sunflower: "🌻",
      sunglasses: "😎",
      sunny: "☀️",
      sunrise: "🌅",
      sunrise_over_mountains: "🌄",
      surfing_man: "🏄",
      surfing_woman: "🏄&zwj;♀️",
      sushi: "🍣",
      suspension_railway: "🚟",
      sweat: "😓",
      sweat_drops: "💦",
      sweat_smile: "😅",
      sweet_potato: "🍠",
      swimming_man: "🏊",
      swimming_woman: "🏊&zwj;♀️",
      symbols: "🔣",
      synagogue: "🕍",
      syringe: "💉",
      taco: "🌮",
      tada: "🎉",
      tanabata_tree: "🎋",
      taurus: "♉️",
      taxi: "🚕",
      tea: "🍵",
      telephone_receiver: "📞",
      telescope: "🔭",
      tennis: "🎾",
      tent: "⛺️",
      thermometer: "🌡",
      thinking: "🤔",
      thought_balloon: "💭",
      ticket: "🎫",
      tickets: "🎟",
      tiger: "🐯",
      tiger2: "🐅",
      timer_clock: "⏲",
      tipping_hand_man: "💁&zwj;♂️",
      tired_face: "😫",
      tm: "™️",
      toilet: "🚽",
      tokyo_tower: "🗼",
      tomato: "🍅",
      tongue: "👅",
      top: "🔝",
      tophat: "🎩",
      tornado: "🌪",
      trackball: "🖲",
      tractor: "🚜",
      traffic_light: "🚥",
      train: "🚋",
      train2: "🚆",
      tram: "🚊",
      triangular_flag_on_post: "🚩",
      triangular_ruler: "📐",
      trident: "🔱",
      triumph: "😤",
      trolleybus: "🚎",
      trophy: "🏆",
      tropical_drink: "🍹",
      tropical_fish: "🐠",
      truck: "🚚",
      trumpet: "🎺",
      tulip: "🌷",
      tumbler_glass: "🥃",
      turkey: "🦃",
      turtle: "🐢",
      tv: "📺",
      twisted_rightwards_arrows: "🔀",
      two_hearts: "💕",
      two_men_holding_hands: "👬",
      two_women_holding_hands: "👭",
      u5272: "🈹",
      u5408: "🈴",
      u55b6: "🈺",
      u6307: "🈯️",
      u6708: "🈷️",
      u6709: "🈶",
      u6e80: "🈵",
      u7121: "🈚️",
      u7533: "🈸",
      u7981: "🈲",
      u7a7a: "🈳",
      umbrella: "☔️",
      unamused: "😒",
      underage: "🔞",
      unicorn: "🦄",
      unlock: "🔓",
      up: "🆙",
      upside_down_face: "🙃",
      v: "✌️",
      vertical_traffic_light: "🚦",
      vhs: "📼",
      vibration_mode: "📳",
      video_camera: "📹",
      video_game: "🎮",
      violin: "🎻",
      virgo: "♍️",
      volcano: "🌋",
      volleyball: "🏐",
      vs: "🆚",
      vulcan_salute: "🖖",
      walking_man: "🚶",
      walking_woman: "🚶&zwj;♀️",
      waning_crescent_moon: "🌘",
      waning_gibbous_moon: "🌖",
      warning: "⚠️",
      wastebasket: "🗑",
      watch: "⌚️",
      water_buffalo: "🐃",
      watermelon: "🍉",
      wave: "👋",
      wavy_dash: "〰️",
      waxing_crescent_moon: "🌒",
      wc: "🚾",
      weary: "😩",
      wedding: "💒",
      weight_lifting_man: "🏋️",
      weight_lifting_woman: "🏋️&zwj;♀️",
      whale: "🐳",
      whale2: "🐋",
      wheel_of_dharma: "☸️",
      wheelchair: "♿️",
      white_check_mark: "✅",
      white_circle: "⚪️",
      white_flag: "🏳️",
      white_flower: "💮",
      white_large_square: "⬜️",
      white_medium_small_square: "◽️",
      white_medium_square: "◻️",
      white_small_square: "▫️",
      white_square_button: "🔳",
      wilted_flower: "🥀",
      wind_chime: "🎐",
      wind_face: "🌬",
      wine_glass: "🍷",
      wink: "😉",
      wolf: "🐺",
      woman: "👩",
      woman_artist: "👩&zwj;🎨",
      woman_astronaut: "👩&zwj;🚀",
      woman_cartwheeling: "🤸&zwj;♀️",
      woman_cook: "👩&zwj;🍳",
      woman_facepalming: "🤦&zwj;♀️",
      woman_factory_worker: "👩&zwj;🏭",
      woman_farmer: "👩&zwj;🌾",
      woman_firefighter: "👩&zwj;🚒",
      woman_health_worker: "👩&zwj;⚕️",
      woman_judge: "👩&zwj;⚖️",
      woman_juggling: "🤹&zwj;♀️",
      woman_mechanic: "👩&zwj;🔧",
      woman_office_worker: "👩&zwj;💼",
      woman_pilot: "👩&zwj;✈️",
      woman_playing_handball: "🤾&zwj;♀️",
      woman_playing_water_polo: "🤽&zwj;♀️",
      woman_scientist: "👩&zwj;🔬",
      woman_shrugging: "🤷&zwj;♀️",
      woman_singer: "👩&zwj;🎤",
      woman_student: "👩&zwj;🎓",
      woman_teacher: "👩&zwj;🏫",
      woman_technologist: "👩&zwj;💻",
      woman_with_turban: "👳&zwj;♀️",
      womans_clothes: "👚",
      womans_hat: "👒",
      women_wrestling: "🤼&zwj;♀️",
      womens: "🚺",
      world_map: "🗺",
      worried: "😟",
      wrench: "🔧",
      writing_hand: "✍️",
      x: "❌",
      yellow_heart: "💛",
      yen: "💴",
      yin_yang: "☯️",
      yum: "😋",
      zap: "⚡️",
      zipper_mouth_face: "🤐",
      zzz: "💤",
      /* special emojis :P */
      octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
      showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
    }, d.Converter = function(e) {
      var n = {}, u = [], t = [], f = {}, l = A, s = {
        parsed: {},
        raw: "",
        format: ""
      };
      p();
      function p() {
        e = e || {};
        for (var o in y)
          y.hasOwnProperty(o) && (n[o] = y[o]);
        if (typeof e == "object")
          for (var _ in e)
            e.hasOwnProperty(_) && (n[_] = e[_]);
        else
          throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
        n.extensions && d.helper.forEach(n.extensions, k);
      }
      function k(o, _) {
        if (_ = _ || null, d.helper.isString(o))
          if (o = d.helper.stdExtName(o), _ = o, d.extensions[o]) {
            console.warn("DEPRECATION WARNING: " + o + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), b(d.extensions[o], o);
            return;
          } else if (!d.helper.isUndefined(m[o]))
            o = m[o];
          else
            throw Error('Extension "' + o + '" could not be loaded. It was either not found or is not a valid extension.');
        typeof o == "function" && (o = o()), d.helper.isArray(o) || (o = [o]);
        var P = $(o, _);
        if (!P.valid)
          throw Error(P.error);
        for (var C = 0; C < o.length; ++C) {
          switch (o[C].type) {
            case "lang":
              u.push(o[C]);
              break;
            case "output":
              t.push(o[C]);
              break;
          }
          if (o[C].hasOwnProperty("listeners"))
            for (var L in o[C].listeners)
              o[C].listeners.hasOwnProperty(L) && g(L, o[C].listeners[L]);
        }
      }
      function b(o, _) {
        typeof o == "function" && (o = o(new d.Converter())), d.helper.isArray(o) || (o = [o]);
        var P = $(o, _);
        if (!P.valid)
          throw Error(P.error);
        for (var C = 0; C < o.length; ++C)
          switch (o[C].type) {
            case "lang":
              u.push(o[C]);
              break;
            case "output":
              t.push(o[C]);
              break;
            default:
              throw Error("Extension loader error: Type unrecognized!!!");
          }
      }
      function g(o, _) {
        if (!d.helper.isString(o))
          throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof o + " given");
        if (typeof _ != "function")
          throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof _ + " given");
        f.hasOwnProperty(o) || (f[o] = []), f[o].push(_);
      }
      function w(o) {
        var _ = o.match(/^\s*/)[0].length, P = new RegExp("^\\s{0," + _ + "}", "gm");
        return o.replace(P, "");
      }
      this._dispatch = function(_, P, C, L) {
        if (f.hasOwnProperty(_))
          for (var j = 0; j < f[_].length; ++j) {
            var F = f[_][j](_, P, this, C, L);
            F && typeof F < "u" && (P = F);
          }
        return P;
      }, this.listen = function(o, _) {
        return g(o, _), this;
      }, this.makeHtml = function(o) {
        if (!o)
          return o;
        var _ = {
          gHtmlBlocks: [],
          gHtmlMdBlocks: [],
          gHtmlSpans: [],
          gUrls: {},
          gTitles: {},
          gDimensions: {},
          gListLevel: 0,
          hashLinkCounts: {},
          langExtensions: u,
          outputModifiers: t,
          converter: this,
          ghCodeBlocks: [],
          metadata: {
            parsed: {},
            raw: "",
            format: ""
          }
        };
        return o = o.replace(/¨/g, "¨T"), o = o.replace(/\$/g, "¨D"), o = o.replace(/\r\n/g, `
`), o = o.replace(/\r/g, `
`), o = o.replace(/\u00A0/g, "&nbsp;"), n.smartIndentationFix && (o = w(o)), o = `

` + o + `

`, o = d.subParser("detab")(o, n, _), o = o.replace(/^[ \t]+$/mg, ""), d.helper.forEach(u, function(P) {
          o = d.subParser("runExtension")(P, o, n, _);
        }), o = d.subParser("metadata")(o, n, _), o = d.subParser("hashPreCodeTags")(o, n, _), o = d.subParser("githubCodeBlocks")(o, n, _), o = d.subParser("hashHTMLBlocks")(o, n, _), o = d.subParser("hashCodeTags")(o, n, _), o = d.subParser("stripLinkDefinitions")(o, n, _), o = d.subParser("blockGamut")(o, n, _), o = d.subParser("unhashHTMLSpans")(o, n, _), o = d.subParser("unescapeSpecialChars")(o, n, _), o = o.replace(/¨D/g, "$$"), o = o.replace(/¨T/g, "¨"), o = d.subParser("completeHTMLDocument")(o, n, _), d.helper.forEach(t, function(P) {
          o = d.subParser("runExtension")(P, o, n, _);
        }), s = _.metadata, o;
      }, this.makeMarkdown = this.makeMd = function(o, _) {
        if (o = o.replace(/\r\n/g, `
`), o = o.replace(/\r/g, `
`), o = o.replace(/>[ \t]+</, ">¨NBSP;<"), !_)
          if (window && window.document)
            _ = window.document;
          else
            throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
        var P = _.createElement("div");
        P.innerHTML = o;
        var C = {
          preList: ae(P)
        };
        x(P);
        for (var L = P.childNodes, j = "", F = 0; F < L.length; F++)
          j += d.subParser("makeMarkdown.node")(L[F], C);
        function x(J) {
          for (var K = 0; K < J.childNodes.length; ++K) {
            var Q = J.childNodes[K];
            Q.nodeType === 3 ? !/\S/.test(Q.nodeValue) && !/^[ ]+$/.test(Q.nodeValue) ? (J.removeChild(Q), --K) : (Q.nodeValue = Q.nodeValue.split(`
`).join(" "), Q.nodeValue = Q.nodeValue.replace(/(\s)+/g, "$1")) : Q.nodeType === 1 && x(Q);
          }
        }
        function ae(J) {
          for (var K = J.querySelectorAll("pre"), Q = [], X = 0; X < K.length; ++X)
            if (K[X].childElementCount === 1 && K[X].firstChild.tagName.toLowerCase() === "code") {
              var te = K[X].firstChild.innerHTML.trim(), le = K[X].firstChild.getAttribute("data-language") || "";
              if (le === "")
                for (var _e = K[X].firstChild.className.split(" "), ce = 0; ce < _e.length; ++ce) {
                  var Ue = _e[ce].match(/^language-(.+)$/);
                  if (Ue !== null) {
                    le = Ue[1];
                    break;
                  }
                }
              te = d.helper.unescapeHTMLEntities(te), Q.push(te), K[X].outerHTML = '<precode language="' + le + '" precodenum="' + X.toString() + '"></precode>';
            } else
              Q.push(K[X].innerHTML), K[X].innerHTML = "", K[X].setAttribute("prenum", X.toString());
          return Q;
        }
        return j;
      }, this.setOption = function(o, _) {
        n[o] = _;
      }, this.getOption = function(o) {
        return n[o];
      }, this.getOptions = function() {
        return n;
      }, this.addExtension = function(o, _) {
        _ = _ || null, k(o, _);
      }, this.useExtension = function(o) {
        k(o);
      }, this.setFlavor = function(o) {
        if (!S.hasOwnProperty(o))
          throw Error(o + " flavor was not found");
        var _ = S[o];
        l = o;
        for (var P in _)
          _.hasOwnProperty(P) && (n[P] = _[P]);
      }, this.getFlavor = function() {
        return l;
      }, this.removeExtension = function(o) {
        d.helper.isArray(o) || (o = [o]);
        for (var _ = 0; _ < o.length; ++_) {
          for (var P = o[_], C = 0; C < u.length; ++C)
            u[C] === P && u.splice(C, 1);
          for (var L = 0; L < t.length; ++L)
            t[L] === P && t.splice(L, 1);
        }
      }, this.getAllExtensions = function() {
        return {
          language: u,
          output: t
        };
      }, this.getMetadata = function(o) {
        return o ? s.raw : s.parsed;
      }, this.getMetadataFormat = function() {
        return s.format;
      }, this._setMetadataPair = function(o, _) {
        s.parsed[o] = _;
      }, this._setMetadataFormat = function(o) {
        s.format = o;
      }, this._setMetadataRaw = function(o) {
        s.raw = o;
      };
    }, d.subParser("anchors", function(e, n, u) {
      e = u.converter._dispatch("anchors.before", e, n, u);
      var t = function(f, l, s, p, k, b, g) {
        if (d.helper.isUndefined(g) && (g = ""), s = s.toLowerCase(), f.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          p = "";
        else if (!p)
          if (s || (s = l.toLowerCase().replace(/ ?\n/g, " ")), p = "#" + s, !d.helper.isUndefined(u.gUrls[s]))
            p = u.gUrls[s], d.helper.isUndefined(u.gTitles[s]) || (g = u.gTitles[s]);
          else
            return f;
        p = p.replace(d.helper.regexes.asteriskDashAndColon, d.helper.escapeCharactersCallback);
        var w = '<a href="' + p + '"';
        return g !== "" && g !== null && (g = g.replace(/"/g, "&quot;"), g = g.replace(d.helper.regexes.asteriskDashAndColon, d.helper.escapeCharactersCallback), w += ' title="' + g + '"'), n.openLinksInNewWindow && !/^#/.test(p) && (w += ' rel="noopener noreferrer" target="¨E95Eblank"'), w += ">" + l + "</a>", w;
      };
      return e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, t), e = e.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        t
      ), e = e.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        t
      ), e = e.replace(/\[([^\[\]]+)]()()()()()/g, t), n.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(f, l, s, p, k) {
        if (s === "\\")
          return l + p;
        if (!d.helper.isString(n.ghMentionsLink))
          throw new Error("ghMentionsLink option must be a string");
        var b = n.ghMentionsLink.replace(/\{u}/g, k), g = "";
        return n.openLinksInNewWindow && (g = ' rel="noopener noreferrer" target="¨E95Eblank"'), l + '<a href="' + b + '"' + g + ">" + p + "</a>";
      })), e = u.converter._dispatch("anchors.after", e, n, u), e;
    });
    var O = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, N = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, V = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, q = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, re = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, B = function(e) {
      return function(n, u, t, f, l, s, p) {
        t = t.replace(d.helper.regexes.asteriskDashAndColon, d.helper.escapeCharactersCallback);
        var k = t, b = "", g = "", w = u || "", o = p || "";
        return /^www\./i.test(t) && (t = t.replace(/^www\./i, "http://www.")), e.excludeTrailingPunctuationFromURLs && s && (b = s), e.openLinksInNewWindow && (g = ' rel="noopener noreferrer" target="¨E95Eblank"'), w + '<a href="' + t + '"' + g + ">" + k + "</a>" + b + o;
      };
    }, M = function(e, n) {
      return function(u, t, f) {
        var l = "mailto:";
        return t = t || "", f = d.subParser("unescapeSpecialChars")(f, e, n), e.encodeEmails ? (l = d.helper.encodeEmailAddress(l + f), f = d.helper.encodeEmailAddress(f)) : l = l + f, t + '<a href="' + l + '">' + f + "</a>";
      };
    };
    d.subParser("autoLinks", function(e, n, u) {
      return e = u.converter._dispatch("autoLinks.before", e, n, u), e = e.replace(V, B(n)), e = e.replace(re, M(n, u)), e = u.converter._dispatch("autoLinks.after", e, n, u), e;
    }), d.subParser("simplifiedAutoLinks", function(e, n, u) {
      return n.simplifiedAutoLink && (e = u.converter._dispatch("simplifiedAutoLinks.before", e, n, u), n.excludeTrailingPunctuationFromURLs ? e = e.replace(N, B(n)) : e = e.replace(O, B(n)), e = e.replace(q, M(n, u)), e = u.converter._dispatch("simplifiedAutoLinks.after", e, n, u)), e;
    }), d.subParser("blockGamut", function(e, n, u) {
      return e = u.converter._dispatch("blockGamut.before", e, n, u), e = d.subParser("blockQuotes")(e, n, u), e = d.subParser("headers")(e, n, u), e = d.subParser("horizontalRule")(e, n, u), e = d.subParser("lists")(e, n, u), e = d.subParser("codeBlocks")(e, n, u), e = d.subParser("tables")(e, n, u), e = d.subParser("hashHTMLBlocks")(e, n, u), e = d.subParser("paragraphs")(e, n, u), e = u.converter._dispatch("blockGamut.after", e, n, u), e;
    }), d.subParser("blockQuotes", function(e, n, u) {
      e = u.converter._dispatch("blockQuotes.before", e, n, u), e = e + `

`;
      var t = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
      return n.splitAdjacentBlockquotes && (t = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(t, function(f) {
        return f = f.replace(/^[ \t]*>[ \t]?/gm, ""), f = f.replace(/¨0/g, ""), f = f.replace(/^[ \t]+$/gm, ""), f = d.subParser("githubCodeBlocks")(f, n, u), f = d.subParser("blockGamut")(f, n, u), f = f.replace(/(^|\n)/g, "$1  "), f = f.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(l, s) {
          var p = s;
          return p = p.replace(/^  /mg, "¨0"), p = p.replace(/¨0/g, ""), p;
        }), d.subParser("hashBlock")(`<blockquote>
` + f + `
</blockquote>`, n, u);
      }), e = u.converter._dispatch("blockQuotes.after", e, n, u), e;
    }), d.subParser("codeBlocks", function(e, n, u) {
      e = u.converter._dispatch("codeBlocks.before", e, n, u), e += "¨0";
      var t = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
      return e = e.replace(t, function(f, l, s) {
        var p = l, k = s, b = `
`;
        return p = d.subParser("outdent")(p, n, u), p = d.subParser("encodeCode")(p, n, u), p = d.subParser("detab")(p, n, u), p = p.replace(/^\n+/g, ""), p = p.replace(/\n+$/g, ""), n.omitExtraWLInCodeBlocks && (b = ""), p = "<pre><code>" + p + b + "</code></pre>", d.subParser("hashBlock")(p, n, u) + k;
      }), e = e.replace(/¨0/, ""), e = u.converter._dispatch("codeBlocks.after", e, n, u), e;
    }), d.subParser("codeSpans", function(e, n, u) {
      return e = u.converter._dispatch("codeSpans.before", e, n, u), typeof e > "u" && (e = ""), e = e.replace(
        /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
        function(t, f, l, s) {
          var p = s;
          return p = p.replace(/^([ \t]*)/g, ""), p = p.replace(/[ \t]*$/g, ""), p = d.subParser("encodeCode")(p, n, u), p = f + "<code>" + p + "</code>", p = d.subParser("hashHTMLSpans")(p, n, u), p;
        }
      ), e = u.converter._dispatch("codeSpans.after", e, n, u), e;
    }), d.subParser("completeHTMLDocument", function(e, n, u) {
      if (!n.completeHTMLDocument)
        return e;
      e = u.converter._dispatch("completeHTMLDocument.before", e, n, u);
      var t = "html", f = `<!DOCTYPE HTML>
`, l = "", s = `<meta charset="utf-8">
`, p = "", k = "";
      typeof u.metadata.parsed.doctype < "u" && (f = "<!DOCTYPE " + u.metadata.parsed.doctype + `>
`, t = u.metadata.parsed.doctype.toString().toLowerCase(), (t === "html" || t === "html5") && (s = '<meta charset="utf-8">'));
      for (var b in u.metadata.parsed)
        if (u.metadata.parsed.hasOwnProperty(b))
          switch (b.toLowerCase()) {
            case "doctype":
              break;
            case "title":
              l = "<title>" + u.metadata.parsed.title + `</title>
`;
              break;
            case "charset":
              t === "html" || t === "html5" ? s = '<meta charset="' + u.metadata.parsed.charset + `">
` : s = '<meta name="charset" content="' + u.metadata.parsed.charset + `">
`;
              break;
            case "language":
            case "lang":
              p = ' lang="' + u.metadata.parsed[b] + '"', k += '<meta name="' + b + '" content="' + u.metadata.parsed[b] + `">
`;
              break;
            default:
              k += '<meta name="' + b + '" content="' + u.metadata.parsed[b] + `">
`;
          }
      return e = f + "<html" + p + `>
<head>
` + l + s + k + `</head>
<body>
` + e.trim() + `
</body>
</html>`, e = u.converter._dispatch("completeHTMLDocument.after", e, n, u), e;
    }), d.subParser("detab", function(e, n, u) {
      return e = u.converter._dispatch("detab.before", e, n, u), e = e.replace(/\t(?=\t)/g, "    "), e = e.replace(/\t/g, "¨A¨B"), e = e.replace(/¨B(.+?)¨A/g, function(t, f) {
        for (var l = f, s = 4 - l.length % 4, p = 0; p < s; p++)
          l += " ";
        return l;
      }), e = e.replace(/¨A/g, "    "), e = e.replace(/¨B/g, ""), e = u.converter._dispatch("detab.after", e, n, u), e;
    }), d.subParser("ellipsis", function(e, n, u) {
      return n.ellipsis && (e = u.converter._dispatch("ellipsis.before", e, n, u), e = e.replace(/\.\.\./g, "…"), e = u.converter._dispatch("ellipsis.after", e, n, u)), e;
    }), d.subParser("emoji", function(e, n, u) {
      if (!n.emoji)
        return e;
      e = u.converter._dispatch("emoji.before", e, n, u);
      var t = /:([\S]+?):/g;
      return e = e.replace(t, function(f, l) {
        return d.helper.emojis.hasOwnProperty(l) ? d.helper.emojis[l] : f;
      }), e = u.converter._dispatch("emoji.after", e, n, u), e;
    }), d.subParser("encodeAmpsAndAngles", function(e, n, u) {
      return e = u.converter._dispatch("encodeAmpsAndAngles.before", e, n, u), e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?$!])/gi, "&lt;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = u.converter._dispatch("encodeAmpsAndAngles.after", e, n, u), e;
    }), d.subParser("encodeBackslashEscapes", function(e, n, u) {
      return e = u.converter._dispatch("encodeBackslashEscapes.before", e, n, u), e = e.replace(/\\(\\)/g, d.helper.escapeCharactersCallback), e = e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, d.helper.escapeCharactersCallback), e = u.converter._dispatch("encodeBackslashEscapes.after", e, n, u), e;
    }), d.subParser("encodeCode", function(e, n, u) {
      return e = u.converter._dispatch("encodeCode.before", e, n, u), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, d.helper.escapeCharactersCallback), e = u.converter._dispatch("encodeCode.after", e, n, u), e;
    }), d.subParser("escapeSpecialCharsWithinTagAttributes", function(e, n, u) {
      e = u.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, n, u);
      var t = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, f = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
      return e = e.replace(t, function(l) {
        return l.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, d.helper.escapeCharactersCallback);
      }), e = e.replace(f, function(l) {
        return l.replace(/([\\`*_~=|])/g, d.helper.escapeCharactersCallback);
      }), e = u.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, n, u), e;
    }), d.subParser("githubCodeBlocks", function(e, n, u) {
      return n.ghCodeBlocks ? (e = u.converter._dispatch("githubCodeBlocks.before", e, n, u), e += "¨0", e = e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(t, f, l, s) {
        var p = n.omitExtraWLInCodeBlocks ? "" : `
`;
        return s = d.subParser("encodeCode")(s, n, u), s = d.subParser("detab")(s, n, u), s = s.replace(/^\n+/g, ""), s = s.replace(/\n+$/g, ""), s = "<pre><code" + (l ? ' class="' + l + " language-" + l + '"' : "") + ">" + s + p + "</code></pre>", s = d.subParser("hashBlock")(s, n, u), `

¨G` + (u.ghCodeBlocks.push({ text: t, codeblock: s }) - 1) + `G

`;
      }), e = e.replace(/¨0/, ""), u.converter._dispatch("githubCodeBlocks.after", e, n, u)) : e;
    }), d.subParser("hashBlock", function(e, n, u) {
      return e = u.converter._dispatch("hashBlock.before", e, n, u), e = e.replace(/(^\n+|\n+$)/g, ""), e = `

¨K` + (u.gHtmlBlocks.push(e) - 1) + `K

`, e = u.converter._dispatch("hashBlock.after", e, n, u), e;
    }), d.subParser("hashCodeTags", function(e, n, u) {
      e = u.converter._dispatch("hashCodeTags.before", e, n, u);
      var t = function(f, l, s, p) {
        var k = s + d.subParser("encodeCode")(l, n, u) + p;
        return "¨C" + (u.gHtmlSpans.push(k) - 1) + "C";
      };
      return e = d.helper.replaceRecursiveRegExp(e, t, "<code\\b[^>]*>", "</code>", "gim"), e = u.converter._dispatch("hashCodeTags.after", e, n, u), e;
    }), d.subParser("hashElement", function(e, n, u) {
      return function(t, f) {
        var l = f;
        return l = l.replace(/\n\n/g, `
`), l = l.replace(/^\n/, ""), l = l.replace(/\n+$/g, ""), l = `

¨K` + (u.gHtmlBlocks.push(l) - 1) + `K

`, l;
      };
    }), d.subParser("hashHTMLBlocks", function(e, n, u) {
      e = u.converter._dispatch("hashHTMLBlocks.before", e, n, u);
      var t = [
        "pre",
        "div",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "table",
        "dl",
        "ol",
        "ul",
        "script",
        "noscript",
        "form",
        "fieldset",
        "iframe",
        "math",
        "style",
        "section",
        "header",
        "footer",
        "nav",
        "article",
        "aside",
        "address",
        "audio",
        "canvas",
        "figure",
        "hgroup",
        "output",
        "video",
        "p"
      ], f = function(o, _, P, C) {
        var L = o;
        return P.search(/\bmarkdown\b/) !== -1 && (L = P + u.converter.makeHtml(_) + C), `

¨K` + (u.gHtmlBlocks.push(L) - 1) + `K

`;
      };
      n.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, function(o, _) {
        return "&lt;" + _ + "&gt;";
      }));
      for (var l = 0; l < t.length; ++l)
        for (var s, p = new RegExp("^ {0,3}(<" + t[l] + "\\b[^>]*>)", "im"), k = "<" + t[l] + "\\b[^>]*>", b = "</" + t[l] + ">"; (s = d.helper.regexIndexOf(e, p)) !== -1; ) {
          var g = d.helper.splitAtIndex(e, s), w = d.helper.replaceRecursiveRegExp(g[1], f, k, b, "im");
          if (w === g[1])
            break;
          e = g[0].concat(w);
        }
      return e = e.replace(
        /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
        d.subParser("hashElement")(e, n, u)
      ), e = d.helper.replaceRecursiveRegExp(e, function(o) {
        return `

¨K` + (u.gHtmlBlocks.push(o) - 1) + `K

`;
      }, "^ {0,3}<!--", "-->", "gm"), e = e.replace(
        /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
        d.subParser("hashElement")(e, n, u)
      ), e = u.converter._dispatch("hashHTMLBlocks.after", e, n, u), e;
    }), d.subParser("hashHTMLSpans", function(e, n, u) {
      e = u.converter._dispatch("hashHTMLSpans.before", e, n, u);
      function t(f) {
        return "¨C" + (u.gHtmlSpans.push(f) - 1) + "C";
      }
      return e = e.replace(/<[^>]+?\/>/gi, function(f) {
        return t(f);
      }), e = e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(f) {
        return t(f);
      }), e = e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(f) {
        return t(f);
      }), e = e.replace(/<[^>]+?>/gi, function(f) {
        return t(f);
      }), e = u.converter._dispatch("hashHTMLSpans.after", e, n, u), e;
    }), d.subParser("unhashHTMLSpans", function(e, n, u) {
      e = u.converter._dispatch("unhashHTMLSpans.before", e, n, u);
      for (var t = 0; t < u.gHtmlSpans.length; ++t) {
        for (var f = u.gHtmlSpans[t], l = 0; /¨C(\d+)C/.test(f); ) {
          var s = RegExp.$1;
          if (f = f.replace("¨C" + s + "C", u.gHtmlSpans[s]), l === 10) {
            console.error("maximum nesting of 10 spans reached!!!");
            break;
          }
          ++l;
        }
        e = e.replace("¨C" + t + "C", f);
      }
      return e = u.converter._dispatch("unhashHTMLSpans.after", e, n, u), e;
    }), d.subParser("hashPreCodeTags", function(e, n, u) {
      e = u.converter._dispatch("hashPreCodeTags.before", e, n, u);
      var t = function(f, l, s, p) {
        var k = s + d.subParser("encodeCode")(l, n, u) + p;
        return `

¨G` + (u.ghCodeBlocks.push({ text: f, codeblock: k }) - 1) + `G

`;
      };
      return e = d.helper.replaceRecursiveRegExp(e, t, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), e = u.converter._dispatch("hashPreCodeTags.after", e, n, u), e;
    }), d.subParser("headers", function(e, n, u) {
      e = u.converter._dispatch("headers.before", e, n, u);
      var t = isNaN(parseInt(n.headerLevelStart)) ? 1 : parseInt(n.headerLevelStart), f = n.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, l = n.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
      e = e.replace(f, function(k, b) {
        var g = d.subParser("spanGamut")(b, n, u), w = n.noHeaderId ? "" : ' id="' + p(b) + '"', o = t, _ = "<h" + o + w + ">" + g + "</h" + o + ">";
        return d.subParser("hashBlock")(_, n, u);
      }), e = e.replace(l, function(k, b) {
        var g = d.subParser("spanGamut")(b, n, u), w = n.noHeaderId ? "" : ' id="' + p(b) + '"', o = t + 1, _ = "<h" + o + w + ">" + g + "</h" + o + ">";
        return d.subParser("hashBlock")(_, n, u);
      });
      var s = n.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
      e = e.replace(s, function(k, b, g) {
        var w = g;
        n.customizedHeaderId && (w = g.replace(/\s?\{([^{]+?)}\s*$/, ""));
        var o = d.subParser("spanGamut")(w, n, u), _ = n.noHeaderId ? "" : ' id="' + p(g) + '"', P = t - 1 + b.length, C = "<h" + P + _ + ">" + o + "</h" + P + ">";
        return d.subParser("hashBlock")(C, n, u);
      });
      function p(k) {
        var b, g;
        if (n.customizedHeaderId) {
          var w = k.match(/\{([^{]+?)}\s*$/);
          w && w[1] && (k = w[1]);
        }
        return b = k, d.helper.isString(n.prefixHeaderId) ? g = n.prefixHeaderId : n.prefixHeaderId === !0 ? g = "section-" : g = "", n.rawPrefixHeaderId || (b = g + b), n.ghCompatibleHeaderId ? b = b.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : n.rawHeaderId ? b = b.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : b = b.replace(/[^\w]/g, "").toLowerCase(), n.rawPrefixHeaderId && (b = g + b), u.hashLinkCounts[b] ? b = b + "-" + u.hashLinkCounts[b]++ : u.hashLinkCounts[b] = 1, b;
      }
      return e = u.converter._dispatch("headers.after", e, n, u), e;
    }), d.subParser("horizontalRule", function(e, n, u) {
      e = u.converter._dispatch("horizontalRule.before", e, n, u);
      var t = d.subParser("hashBlock")("<hr />", n, u);
      return e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, t), e = e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, t), e = e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, t), e = u.converter._dispatch("horizontalRule.after", e, n, u), e;
    }), d.subParser("images", function(e, n, u) {
      e = u.converter._dispatch("images.before", e, n, u);
      var t = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, f = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, l = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, s = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, p = /!\[([^\[\]]+)]()()()()()/g;
      function k(g, w, o, _, P, C, L, j) {
        return _ = _.replace(/\s/g, ""), b(g, w, o, _, P, C, L, j);
      }
      function b(g, w, o, _, P, C, L, j) {
        var F = u.gUrls, x = u.gTitles, ae = u.gDimensions;
        if (o = o.toLowerCase(), j || (j = ""), g.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          _ = "";
        else if (_ === "" || _ === null)
          if ((o === "" || o === null) && (o = w.toLowerCase().replace(/ ?\n/g, " ")), _ = "#" + o, !d.helper.isUndefined(F[o]))
            _ = F[o], d.helper.isUndefined(x[o]) || (j = x[o]), d.helper.isUndefined(ae[o]) || (P = ae[o].width, C = ae[o].height);
          else
            return g;
        w = w.replace(/"/g, "&quot;").replace(d.helper.regexes.asteriskDashAndColon, d.helper.escapeCharactersCallback), _ = _.replace(d.helper.regexes.asteriskDashAndColon, d.helper.escapeCharactersCallback);
        var J = '<img src="' + _ + '" alt="' + w + '"';
        return j && d.helper.isString(j) && (j = j.replace(/"/g, "&quot;").replace(d.helper.regexes.asteriskDashAndColon, d.helper.escapeCharactersCallback), J += ' title="' + j + '"'), P && C && (P = P === "*" ? "auto" : P, C = C === "*" ? "auto" : C, J += ' width="' + P + '"', J += ' height="' + C + '"'), J += " />", J;
      }
      return e = e.replace(s, b), e = e.replace(l, k), e = e.replace(f, b), e = e.replace(t, b), e = e.replace(p, b), e = u.converter._dispatch("images.after", e, n, u), e;
    }), d.subParser("italicsAndBold", function(e, n, u) {
      e = u.converter._dispatch("italicsAndBold.before", e, n, u);
      function t(f, l, s) {
        return l + f + s;
      }
      return n.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(f, l) {
        return t(l, "<strong><em>", "</em></strong>");
      }), e = e.replace(/\b__(\S[\s\S]*?)__\b/g, function(f, l) {
        return t(l, "<strong>", "</strong>");
      }), e = e.replace(/\b_(\S[\s\S]*?)_\b/g, function(f, l) {
        return t(l, "<em>", "</em>");
      })) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(f, l) {
        return /\S$/.test(l) ? t(l, "<strong><em>", "</em></strong>") : f;
      }), e = e.replace(/__(\S[\s\S]*?)__/g, function(f, l) {
        return /\S$/.test(l) ? t(l, "<strong>", "</strong>") : f;
      }), e = e.replace(/_([^\s_][\s\S]*?)_/g, function(f, l) {
        return /\S$/.test(l) ? t(l, "<em>", "</em>") : f;
      })), n.literalMidWordAsterisks ? (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(f, l, s) {
        return t(s, l + "<strong><em>", "</em></strong>");
      }), e = e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(f, l, s) {
        return t(s, l + "<strong>", "</strong>");
      }), e = e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(f, l, s) {
        return t(s, l + "<em>", "</em>");
      })) : (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(f, l) {
        return /\S$/.test(l) ? t(l, "<strong><em>", "</em></strong>") : f;
      }), e = e.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(f, l) {
        return /\S$/.test(l) ? t(l, "<strong>", "</strong>") : f;
      }), e = e.replace(/\*([^\s*][\s\S]*?)\*/g, function(f, l) {
        return /\S$/.test(l) ? t(l, "<em>", "</em>") : f;
      })), e = u.converter._dispatch("italicsAndBold.after", e, n, u), e;
    }), d.subParser("lists", function(e, n, u) {
      function t(s, p) {
        u.gListLevel++, s = s.replace(/\n{2,}$/, `
`), s += "¨0";
        var k = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, b = /\n[ \t]*\n(?!¨0)/.test(s);
        return n.disableForced4SpacesIndentedSublists && (k = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), s = s.replace(k, function(g, w, o, _, P, C, L) {
          L = L && L.trim() !== "";
          var j = d.subParser("outdent")(P, n, u), F = "";
          return C && n.tasklists && (F = ' class="task-list-item" style="list-style-type: none;"', j = j.replace(/^[ \t]*\[(x|X| )?]/m, function() {
            var x = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            return L && (x += " checked"), x += ">", x;
          })), j = j.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(x) {
            return "¨A" + x;
          }), w || j.search(/\n{2,}/) > -1 ? (j = d.subParser("githubCodeBlocks")(j, n, u), j = d.subParser("blockGamut")(j, n, u)) : (j = d.subParser("lists")(j, n, u), j = j.replace(/\n$/, ""), j = d.subParser("hashHTMLBlocks")(j, n, u), j = j.replace(/\n\n+/g, `

`), b ? j = d.subParser("paragraphs")(j, n, u) : j = d.subParser("spanGamut")(j, n, u)), j = j.replace("¨A", ""), j = "<li" + F + ">" + j + `</li>
`, j;
        }), s = s.replace(/¨0/g, ""), u.gListLevel--, p && (s = s.replace(/\s+$/, "")), s;
      }
      function f(s, p) {
        if (p === "ol") {
          var k = s.match(/^ *(\d+)\./);
          if (k && k[1] !== "1")
            return ' start="' + k[1] + '"';
        }
        return "";
      }
      function l(s, p, k) {
        var b = n.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, g = n.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, w = p === "ul" ? b : g, o = "";
        if (s.search(w) !== -1)
          (function P(C) {
            var L = C.search(w), j = f(s, p);
            L !== -1 ? (o += `

<` + p + j + `>
` + t(C.slice(0, L), !!k) + "</" + p + `>
`, p = p === "ul" ? "ol" : "ul", w = p === "ul" ? b : g, P(C.slice(L))) : o += `

<` + p + j + `>
` + t(C, !!k) + "</" + p + `>
`;
          })(s);
        else {
          var _ = f(s, p);
          o = `

<` + p + _ + `>
` + t(s, !!k) + "</" + p + `>
`;
        }
        return o;
      }
      return e = u.converter._dispatch("lists.before", e, n, u), e += "¨0", u.gListLevel ? e = e.replace(
        /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(s, p, k) {
          var b = k.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return l(p, b, !0);
        }
      ) : e = e.replace(
        /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(s, p, k, b) {
          var g = b.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return l(k, g, !1);
        }
      ), e = e.replace(/¨0/, ""), e = u.converter._dispatch("lists.after", e, n, u), e;
    }), d.subParser("metadata", function(e, n, u) {
      if (!n.metadata)
        return e;
      e = u.converter._dispatch("metadata.before", e, n, u);
      function t(f) {
        u.metadata.raw = f, f = f.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), f = f.replace(/\n {4}/g, " "), f.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(l, s, p) {
          return u.metadata.parsed[s] = p, "";
        });
      }
      return e = e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(f, l, s) {
        return t(s), "¨M";
      }), e = e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(f, l, s) {
        return l && (u.metadata.format = l), t(s), "¨M";
      }), e = e.replace(/¨M/g, ""), e = u.converter._dispatch("metadata.after", e, n, u), e;
    }), d.subParser("outdent", function(e, n, u) {
      return e = u.converter._dispatch("outdent.before", e, n, u), e = e.replace(/^(\t|[ ]{1,4})/gm, "¨0"), e = e.replace(/¨0/g, ""), e = u.converter._dispatch("outdent.after", e, n, u), e;
    }), d.subParser("paragraphs", function(e, n, u) {
      e = u.converter._dispatch("paragraphs.before", e, n, u), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, "");
      for (var t = e.split(/\n{2,}/g), f = [], l = t.length, s = 0; s < l; s++) {
        var p = t[s];
        p.search(/¨(K|G)(\d+)\1/g) >= 0 ? f.push(p) : p.search(/\S/) >= 0 && (p = d.subParser("spanGamut")(p, n, u), p = p.replace(/^([ \t]*)/g, "<p>"), p += "</p>", f.push(p));
      }
      for (l = f.length, s = 0; s < l; s++) {
        for (var k = "", b = f[s], g = !1; /¨(K|G)(\d+)\1/.test(b); ) {
          var w = RegExp.$1, o = RegExp.$2;
          w === "K" ? k = u.gHtmlBlocks[o] : g ? k = d.subParser("encodeCode")(u.ghCodeBlocks[o].text, n, u) : k = u.ghCodeBlocks[o].codeblock, k = k.replace(/\$/g, "$$$$"), b = b.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, k), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(b) && (g = !0);
        }
        f[s] = b;
      }
      return e = f.join(`
`), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""), u.converter._dispatch("paragraphs.after", e, n, u);
    }), d.subParser("runExtension", function(e, n, u, t) {
      if (e.filter)
        n = e.filter(n, t.converter, u);
      else if (e.regex) {
        var f = e.regex;
        f instanceof RegExp || (f = new RegExp(f, "g")), n = n.replace(f, e.replace);
      }
      return n;
    }), d.subParser("spanGamut", function(e, n, u) {
      return e = u.converter._dispatch("spanGamut.before", e, n, u), e = d.subParser("codeSpans")(e, n, u), e = d.subParser("escapeSpecialCharsWithinTagAttributes")(e, n, u), e = d.subParser("encodeBackslashEscapes")(e, n, u), e = d.subParser("images")(e, n, u), e = d.subParser("anchors")(e, n, u), e = d.subParser("autoLinks")(e, n, u), e = d.subParser("simplifiedAutoLinks")(e, n, u), e = d.subParser("emoji")(e, n, u), e = d.subParser("underline")(e, n, u), e = d.subParser("italicsAndBold")(e, n, u), e = d.subParser("strikethrough")(e, n, u), e = d.subParser("ellipsis")(e, n, u), e = d.subParser("hashHTMLSpans")(e, n, u), e = d.subParser("encodeAmpsAndAngles")(e, n, u), n.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, `<br />
`)) : e = e.replace(/  +\n/g, `<br />
`), e = u.converter._dispatch("spanGamut.after", e, n, u), e;
    }), d.subParser("strikethrough", function(e, n, u) {
      function t(f) {
        return n.simplifiedAutoLink && (f = d.subParser("simplifiedAutoLinks")(f, n, u)), "<del>" + f + "</del>";
      }
      return n.strikethrough && (e = u.converter._dispatch("strikethrough.before", e, n, u), e = e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(f, l) {
        return t(l);
      }), e = u.converter._dispatch("strikethrough.after", e, n, u)), e;
    }), d.subParser("stripLinkDefinitions", function(e, n, u) {
      var t = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, f = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
      e += "¨0";
      var l = function(s, p, k, b, g, w, o) {
        return p = p.toLowerCase(), e.toLowerCase().split(p).length - 1 < 2 ? s : (k.match(/^data:.+?\/.+?;base64,/) ? u.gUrls[p] = k.replace(/\s/g, "") : u.gUrls[p] = d.subParser("encodeAmpsAndAngles")(k, n, u), w ? w + o : (o && (u.gTitles[p] = o.replace(/"|'/g, "&quot;")), n.parseImgDimensions && b && g && (u.gDimensions[p] = {
          width: b,
          height: g
        }), ""));
      };
      return e = e.replace(f, l), e = e.replace(t, l), e = e.replace(/¨0/, ""), e;
    }), d.subParser("tables", function(e, n, u) {
      if (!n.tables)
        return e;
      var t = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, f = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
      function l(g) {
        return /^:[ \t]*--*$/.test(g) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(g) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(g) ? ' style="text-align:center;"' : "";
      }
      function s(g, w) {
        var o = "";
        return g = g.trim(), (n.tablesHeaderId || n.tableHeaderId) && (o = ' id="' + g.replace(/ /g, "_").toLowerCase() + '"'), g = d.subParser("spanGamut")(g, n, u), "<th" + o + w + ">" + g + `</th>
`;
      }
      function p(g, w) {
        var o = d.subParser("spanGamut")(g, n, u);
        return "<td" + w + ">" + o + `</td>
`;
      }
      function k(g, w) {
        for (var o = `<table>
<thead>
<tr>
`, _ = g.length, P = 0; P < _; ++P)
          o += g[P];
        for (o += `</tr>
</thead>
<tbody>
`, P = 0; P < w.length; ++P) {
          o += `<tr>
`;
          for (var C = 0; C < _; ++C)
            o += w[P][C];
          o += `</tr>
`;
        }
        return o += `</tbody>
</table>
`, o;
      }
      function b(g) {
        var w, o = g.split(`
`);
        for (w = 0; w < o.length; ++w)
          /^ {0,3}\|/.test(o[w]) && (o[w] = o[w].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(o[w]) && (o[w] = o[w].replace(/\|[ \t]*$/, "")), o[w] = d.subParser("codeSpans")(o[w], n, u);
        var _ = o[0].split("|").map(function(J) {
          return J.trim();
        }), P = o[1].split("|").map(function(J) {
          return J.trim();
        }), C = [], L = [], j = [], F = [];
        for (o.shift(), o.shift(), w = 0; w < o.length; ++w)
          o[w].trim() !== "" && C.push(
            o[w].split("|").map(function(J) {
              return J.trim();
            })
          );
        if (_.length < P.length)
          return g;
        for (w = 0; w < P.length; ++w)
          j.push(l(P[w]));
        for (w = 0; w < _.length; ++w)
          d.helper.isUndefined(j[w]) && (j[w] = ""), L.push(s(_[w], j[w]));
        for (w = 0; w < C.length; ++w) {
          for (var x = [], ae = 0; ae < L.length; ++ae)
            d.helper.isUndefined(C[w][ae]), x.push(p(C[w][ae], j[ae]));
          F.push(x);
        }
        return k(L, F);
      }
      return e = u.converter._dispatch("tables.before", e, n, u), e = e.replace(/\\(\|)/g, d.helper.escapeCharactersCallback), e = e.replace(t, b), e = e.replace(f, b), e = u.converter._dispatch("tables.after", e, n, u), e;
    }), d.subParser("underline", function(e, n, u) {
      return n.underline && (e = u.converter._dispatch("underline.before", e, n, u), n.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(t, f) {
        return "<u>" + f + "</u>";
      }), e = e.replace(/\b__(\S[\s\S]*?)__\b/g, function(t, f) {
        return "<u>" + f + "</u>";
      })) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(t, f) {
        return /\S$/.test(f) ? "<u>" + f + "</u>" : t;
      }), e = e.replace(/__(\S[\s\S]*?)__/g, function(t, f) {
        return /\S$/.test(f) ? "<u>" + f + "</u>" : t;
      })), e = e.replace(/(_)/g, d.helper.escapeCharactersCallback), e = u.converter._dispatch("underline.after", e, n, u)), e;
    }), d.subParser("unescapeSpecialChars", function(e, n, u) {
      return e = u.converter._dispatch("unescapeSpecialChars.before", e, n, u), e = e.replace(/¨E(\d+)E/g, function(t, f) {
        var l = parseInt(f);
        return String.fromCharCode(l);
      }), e = u.converter._dispatch("unescapeSpecialChars.after", e, n, u), e;
    }), d.subParser("makeMarkdown.blockquote", function(e, n) {
      var u = "";
      if (e.hasChildNodes())
        for (var t = e.childNodes, f = t.length, l = 0; l < f; ++l) {
          var s = d.subParser("makeMarkdown.node")(t[l], n);
          s !== "" && (u += s);
        }
      return u = u.trim(), u = "> " + u.split(`
`).join(`
> `), u;
    }), d.subParser("makeMarkdown.codeBlock", function(e, n) {
      var u = e.getAttribute("language"), t = e.getAttribute("precodenum");
      return "```" + u + `
` + n.preList[t] + "\n```";
    }), d.subParser("makeMarkdown.codeSpan", function(e) {
      return "`" + e.innerHTML + "`";
    }), d.subParser("makeMarkdown.emphasis", function(e, n) {
      var u = "";
      if (e.hasChildNodes()) {
        u += "*";
        for (var t = e.childNodes, f = t.length, l = 0; l < f; ++l)
          u += d.subParser("makeMarkdown.node")(t[l], n);
        u += "*";
      }
      return u;
    }), d.subParser("makeMarkdown.header", function(e, n, u) {
      var t = new Array(u + 1).join("#"), f = "";
      if (e.hasChildNodes()) {
        f = t + " ";
        for (var l = e.childNodes, s = l.length, p = 0; p < s; ++p)
          f += d.subParser("makeMarkdown.node")(l[p], n);
      }
      return f;
    }), d.subParser("makeMarkdown.hr", function() {
      return "---";
    }), d.subParser("makeMarkdown.image", function(e) {
      var n = "";
      return e.hasAttribute("src") && (n += "![" + e.getAttribute("alt") + "](", n += "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (n += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (n += ' "' + e.getAttribute("title") + '"'), n += ")"), n;
    }), d.subParser("makeMarkdown.links", function(e, n) {
      var u = "";
      if (e.hasChildNodes() && e.hasAttribute("href")) {
        var t = e.childNodes, f = t.length;
        u = "[";
        for (var l = 0; l < f; ++l)
          u += d.subParser("makeMarkdown.node")(t[l], n);
        u += "](", u += "<" + e.getAttribute("href") + ">", e.hasAttribute("title") && (u += ' "' + e.getAttribute("title") + '"'), u += ")";
      }
      return u;
    }), d.subParser("makeMarkdown.list", function(e, n, u) {
      var t = "";
      if (!e.hasChildNodes())
        return "";
      for (var f = e.childNodes, l = f.length, s = e.getAttribute("start") || 1, p = 0; p < l; ++p)
        if (!(typeof f[p].tagName > "u" || f[p].tagName.toLowerCase() !== "li")) {
          var k = "";
          u === "ol" ? k = s.toString() + ". " : k = "- ", t += k + d.subParser("makeMarkdown.listItem")(f[p], n), ++s;
        }
      return t += `
<!-- -->
`, t.trim();
    }), d.subParser("makeMarkdown.listItem", function(e, n) {
      for (var u = "", t = e.childNodes, f = t.length, l = 0; l < f; ++l)
        u += d.subParser("makeMarkdown.node")(t[l], n);
      return /\n$/.test(u) ? u = u.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : u += `
`, u;
    }), d.subParser("makeMarkdown.node", function(e, n, u) {
      u = u || !1;
      var t = "";
      if (e.nodeType === 3)
        return d.subParser("makeMarkdown.txt")(e, n);
      if (e.nodeType === 8)
        return "<!--" + e.data + `-->

`;
      if (e.nodeType !== 1)
        return "";
      var f = e.tagName.toLowerCase();
      switch (f) {
        case "h1":
          u || (t = d.subParser("makeMarkdown.header")(e, n, 1) + `

`);
          break;
        case "h2":
          u || (t = d.subParser("makeMarkdown.header")(e, n, 2) + `

`);
          break;
        case "h3":
          u || (t = d.subParser("makeMarkdown.header")(e, n, 3) + `

`);
          break;
        case "h4":
          u || (t = d.subParser("makeMarkdown.header")(e, n, 4) + `

`);
          break;
        case "h5":
          u || (t = d.subParser("makeMarkdown.header")(e, n, 5) + `

`);
          break;
        case "h6":
          u || (t = d.subParser("makeMarkdown.header")(e, n, 6) + `

`);
          break;
        case "p":
          u || (t = d.subParser("makeMarkdown.paragraph")(e, n) + `

`);
          break;
        case "blockquote":
          u || (t = d.subParser("makeMarkdown.blockquote")(e, n) + `

`);
          break;
        case "hr":
          u || (t = d.subParser("makeMarkdown.hr")(e, n) + `

`);
          break;
        case "ol":
          u || (t = d.subParser("makeMarkdown.list")(e, n, "ol") + `

`);
          break;
        case "ul":
          u || (t = d.subParser("makeMarkdown.list")(e, n, "ul") + `

`);
          break;
        case "precode":
          u || (t = d.subParser("makeMarkdown.codeBlock")(e, n) + `

`);
          break;
        case "pre":
          u || (t = d.subParser("makeMarkdown.pre")(e, n) + `

`);
          break;
        case "table":
          u || (t = d.subParser("makeMarkdown.table")(e, n) + `

`);
          break;
        case "code":
          t = d.subParser("makeMarkdown.codeSpan")(e, n);
          break;
        case "em":
        case "i":
          t = d.subParser("makeMarkdown.emphasis")(e, n);
          break;
        case "strong":
        case "b":
          t = d.subParser("makeMarkdown.strong")(e, n);
          break;
        case "del":
          t = d.subParser("makeMarkdown.strikethrough")(e, n);
          break;
        case "a":
          t = d.subParser("makeMarkdown.links")(e, n);
          break;
        case "img":
          t = d.subParser("makeMarkdown.image")(e, n);
          break;
        default:
          t = e.outerHTML + `

`;
      }
      return t;
    }), d.subParser("makeMarkdown.paragraph", function(e, n) {
      var u = "";
      if (e.hasChildNodes())
        for (var t = e.childNodes, f = t.length, l = 0; l < f; ++l)
          u += d.subParser("makeMarkdown.node")(t[l], n);
      return u = u.trim(), u;
    }), d.subParser("makeMarkdown.pre", function(e, n) {
      var u = e.getAttribute("prenum");
      return "<pre>" + n.preList[u] + "</pre>";
    }), d.subParser("makeMarkdown.strikethrough", function(e, n) {
      var u = "";
      if (e.hasChildNodes()) {
        u += "~~";
        for (var t = e.childNodes, f = t.length, l = 0; l < f; ++l)
          u += d.subParser("makeMarkdown.node")(t[l], n);
        u += "~~";
      }
      return u;
    }), d.subParser("makeMarkdown.strong", function(e, n) {
      var u = "";
      if (e.hasChildNodes()) {
        u += "**";
        for (var t = e.childNodes, f = t.length, l = 0; l < f; ++l)
          u += d.subParser("makeMarkdown.node")(t[l], n);
        u += "**";
      }
      return u;
    }), d.subParser("makeMarkdown.table", function(e, n) {
      var u = "", t = [[], []], f = e.querySelectorAll("thead>tr>th"), l = e.querySelectorAll("tbody>tr"), s, p;
      for (s = 0; s < f.length; ++s) {
        var k = d.subParser("makeMarkdown.tableCell")(f[s], n), b = "---";
        if (f[s].hasAttribute("style")) {
          var g = f[s].getAttribute("style").toLowerCase().replace(/\s/g, "");
          switch (g) {
            case "text-align:left;":
              b = ":---";
              break;
            case "text-align:right;":
              b = "---:";
              break;
            case "text-align:center;":
              b = ":---:";
              break;
          }
        }
        t[0][s] = k.trim(), t[1][s] = b;
      }
      for (s = 0; s < l.length; ++s) {
        var w = t.push([]) - 1, o = l[s].getElementsByTagName("td");
        for (p = 0; p < f.length; ++p) {
          var _ = " ";
          typeof o[p] < "u" && (_ = d.subParser("makeMarkdown.tableCell")(o[p], n)), t[w].push(_);
        }
      }
      var P = 3;
      for (s = 0; s < t.length; ++s)
        for (p = 0; p < t[s].length; ++p) {
          var C = t[s][p].length;
          C > P && (P = C);
        }
      for (s = 0; s < t.length; ++s) {
        for (p = 0; p < t[s].length; ++p)
          s === 1 ? t[s][p].slice(-1) === ":" ? t[s][p] = d.helper.padEnd(t[s][p].slice(-1), P - 1, "-") + ":" : t[s][p] = d.helper.padEnd(t[s][p], P, "-") : t[s][p] = d.helper.padEnd(t[s][p], P);
        u += "| " + t[s].join(" | ") + ` |
`;
      }
      return u.trim();
    }), d.subParser("makeMarkdown.tableCell", function(e, n) {
      var u = "";
      if (!e.hasChildNodes())
        return "";
      for (var t = e.childNodes, f = t.length, l = 0; l < f; ++l)
        u += d.subParser("makeMarkdown.node")(t[l], n, !0);
      return u.trim();
    }), d.subParser("makeMarkdown.txt", function(e) {
      var n = e.nodeValue;
      return n = n.replace(/ +/g, " "), n = n.replace(/¨NBSP;/g, " "), n = d.helper.unescapeHTMLEntities(n), n = n.replace(/([*_~|`])/g, "\\$1"), n = n.replace(/^(\s*)>/g, "\\$1>"), n = n.replace(/^#/gm, "\\#"), n = n.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), n = n.replace(/^( {0,3}\d+)\./gm, "$1\\."), n = n.replace(/^( {0,3})([+-])/gm, "$1\\$2"), n = n.replace(/]([\s]*)\(/g, "\\]$1\\("), n = n.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), n;
    });
    var W = this;
    r.exports ? r.exports = d : W.showdown = d;
  }).call(gu);
})(Fd);
var Rn = Fd.exports;
const Tn = /* @__PURE__ */ _u(Rn), zn = [
  "a",
  "p",
  "span",
  "label",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "strong",
  "q",
  "li"
], Mn = (r, a) => {
  const c = [];
  return r.forEach((d) => {
    let h = se.p`
      ${a}
    `;
    console.log("element", d);
    const m = `Container_${d}`;
    switch (d) {
      case "a":
        h = se.a`
          ${a}
        `;
        break;
      case "p":
        h = se.p`
          ${a}
        `;
        break;
      case "span":
        h = se.span`
          ${a}
        `;
        break;
      case "label":
        h = se.label`
          ${a}
        `;
        break;
      case "h1":
        h = se.h1`
          ${a}
        `;
        break;
      case "h2":
        h = se.h2`
          ${a}
        `;
        break;
      case "h3":
        h = se.h3`
          ${a}
        `;
        break;
      case "h4":
        h = se.h4`
          ${a}
        `;
        break;
      case "h5":
        h = se.h5`
          ${a}
        `;
        break;
      case "strong":
        h = se.strong`
          ${a}
        `;
        break;
      case "q":
        h = se.q`
          ${a}
        `;
        break;
      case "li":
        h = se.li`
          ${a}
        `;
        break;
    }
    c.push({ name: m, container: h });
  }), c;
}, $n = (r, a) => {
  const c = r.findIndex((h) => h.name === `Container_${a}`);
  return c === -1 ? r[2].container : r[c].container;
}, On = (r) => ({ __html: r }), Ln = Mn(zn, An), Vd = mu((r, a) => {
  const {
    children: c,
    className: d = "",
    tag: h = "p",
    fontWeight: m = "400",
    fontStyle: y,
    textDecoration: A,
    fontSize: S,
    color: $ = "#2f3888",
    lineHeight: R,
    textAlign: T,
    textTransform: O,
    noParsed: N = !1,
    type: V = "Text",
    fontFamily: q = '"Poppins", sans-serif',
    marginBottom: re,
    ...B
  } = r, M = $n(Ln, h);
  if (typeof c != "string" || N)
    return /* @__PURE__ */ Qr.jsx(
      M,
      {
        className: `text-element ${d}`,
        fontWeight: m,
        fontStyle: y,
        textDecoration: A,
        fontSize: S,
        lineHeight: R,
        color: $,
        ref: a,
        textAlign: T,
        tag: h,
        textTransform: O,
        type: V,
        fontFamily: q,
        marginBottom: re,
        ...B,
        children: c
      }
    );
  const W = {
    type: "output",
    filter: function(u) {
      const t = /<\/?p[^>]*>/gi;
      return u.replace(t, "");
    }
  }, n = new Tn.Converter({ extensions: [W] }).makeHtml(c);
  return /* @__PURE__ */ Qr.jsx(
    M,
    {
      dangerouslySetInnerHTML: On(n),
      className: `text-element ${d}`,
      fontWeight: m,
      fontStyle: y,
      textDecoration: A,
      color: $,
      fontSize: S,
      lineHeight: R,
      ref: a,
      textAlign: T,
      tag: h,
      textTransform: O,
      type: V,
      fontFamily: q,
      marginBottom: re,
      ...B
    }
  );
});
Vd.displayName = "Text";
const Nn = ve.memo(Vd);
export {
  Nn as Text
};
