import _e, { useRef as Ua, useContext as Wa, useDebugValue as vn, createElement as qa, forwardRef as Vn } from "react";
import Bn from "react-dom";
var Ga = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Br = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Ya() {
  if (_n) return nr;
  _n = 1;
  var r = _e, d = Symbol.for("react.element"), i = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k($, M, z) {
    var B, q = {}, Z = null, ee = null;
    z !== void 0 && (Z = "" + z), M.key !== void 0 && (Z = "" + M.key), M.ref !== void 0 && (ee = M.ref);
    for (B in M) n.call(M, B) && !b.hasOwnProperty(B) && (q[B] = M[B]);
    if ($ && $.defaultProps) for (B in M = $.defaultProps, M) q[B] === void 0 && (q[B] = M[B]);
    return { $$typeof: d, type: $, key: Z, ref: ee, props: q, _owner: _.current };
  }
  return nr.Fragment = i, nr.jsx = k, nr.jsxs = k, nr;
}
var ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function Xa() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && function() {
    var r = _e, d = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), $ = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), Q = Symbol.iterator, Y = "@@iterator";
    function se(m) {
      if (m === null || typeof m != "object")
        return null;
      var R = Q && m[Q] || m[Y];
      return typeof R == "function" ? R : null;
    }
    var J = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function G(m) {
      {
        for (var R = arguments.length, H = new Array(R > 1 ? R - 1 : 0), re = 1; re < R; re++)
          H[re - 1] = arguments[re];
        ae("error", m, H);
      }
    }
    function ae(m, R, H) {
      {
        var re = J.ReactDebugCurrentFrame, ce = re.getStackAddendum();
        ce !== "" && (R += "%s", H = H.concat([ce]));
        var fe = H.map(function(oe) {
          return String(oe);
        });
        fe.unshift("Warning: " + R), Function.prototype.apply.call(console[m], console, fe);
      }
    }
    var e = !1, t = !1, a = !1, s = !1, p = !1, v;
    v = Symbol.for("react.module.reference");
    function h(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === b || p || m === _ || m === z || m === B || s || m === ee || e || t || a || typeof m == "object" && m !== null && (m.$$typeof === Z || m.$$typeof === q || m.$$typeof === k || m.$$typeof === $ || m.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === v || m.getModuleId !== void 0));
    }
    function w(m, R, H) {
      var re = m.displayName;
      if (re)
        return re;
      var ce = R.displayName || R.name || "";
      return ce !== "" ? H + "(" + ce + ")" : H;
    }
    function I(m) {
      return m.displayName || "Context";
    }
    function y(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && G("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case i:
          return "Portal";
        case b:
          return "Profiler";
        case _:
          return "StrictMode";
        case z:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case $:
            var R = m;
            return I(R) + ".Consumer";
          case k:
            var H = m;
            return I(H._context) + ".Provider";
          case M:
            return w(m, m.render, "ForwardRef");
          case q:
            var re = m.displayName || null;
            return re !== null ? re : y(m.type) || "Memo";
          case Z: {
            var ce = m, fe = ce._payload, oe = ce._init;
            try {
              return y(oe(fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, P = 0, c, S, D, o, l, g, f;
    function u() {
    }
    u.__reactDisabledLog = !0;
    function C() {
      {
        if (P === 0) {
          c = console.log, S = console.info, D = console.warn, o = console.error, l = console.group, g = console.groupCollapsed, f = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        P++;
      }
    }
    function O() {
      {
        if (P--, P === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, m, {
              value: c
            }),
            info: E({}, m, {
              value: S
            }),
            warn: E({}, m, {
              value: D
            }),
            error: E({}, m, {
              value: o
            }),
            group: E({}, m, {
              value: l
            }),
            groupCollapsed: E({}, m, {
              value: g
            }),
            groupEnd: E({}, m, {
              value: f
            })
          });
        }
        P < 0 && G("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = J.ReactCurrentDispatcher, A;
    function T(m, R, H) {
      {
        if (A === void 0)
          try {
            throw Error();
          } catch (ce) {
            var re = ce.stack.trim().match(/\n( *(at )?)/);
            A = re && re[1] || "";
          }
        return `
` + A + m;
      }
    }
    var L = !1, V;
    {
      var N = typeof WeakMap == "function" ? WeakMap : Map;
      V = new N();
    }
    function x(m, R) {
      if (!m || L)
        return "";
      {
        var H = V.get(m);
        if (H !== void 0)
          return H;
      }
      var re;
      L = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var fe;
      fe = W.current, W.current = null, C();
      try {
        if (R) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (je) {
              re = je;
            }
            Reflect.construct(m, [], oe);
          } else {
            try {
              oe.call();
            } catch (je) {
              re = je;
            }
            m.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (je) {
            re = je;
          }
          m();
        }
      } catch (je) {
        if (je && re && typeof je.stack == "string") {
          for (var de = je.stack.split(`
`), Ee = re.stack.split(`
`), ve = de.length - 1, we = Ee.length - 1; ve >= 1 && we >= 0 && de[ve] !== Ee[we]; )
            we--;
          for (; ve >= 1 && we >= 0; ve--, we--)
            if (de[ve] !== Ee[we]) {
              if (ve !== 1 || we !== 1)
                do
                  if (ve--, we--, we < 0 || de[ve] !== Ee[we]) {
                    var Re = `
` + de[ve].replace(" at new ", " at ");
                    return m.displayName && Re.includes("<anonymous>") && (Re = Re.replace("<anonymous>", m.displayName)), typeof m == "function" && V.set(m, Re), Re;
                  }
                while (ve >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        L = !1, W.current = fe, O(), Error.prepareStackTrace = ce;
      }
      var Ye = m ? m.displayName || m.name : "", Fe = Ye ? T(Ye) : "";
      return typeof m == "function" && V.set(m, Fe), Fe;
    }
    function F(m, R, H) {
      return x(m, !1);
    }
    function j(m) {
      var R = m.prototype;
      return !!(R && R.isReactComponent);
    }
    function U(m, R, H) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return x(m, j(m));
      if (typeof m == "string")
        return T(m);
      switch (m) {
        case z:
          return T("Suspense");
        case B:
          return T("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case M:
            return F(m.render);
          case q:
            return U(m.type, R, H);
          case Z: {
            var re = m, ce = re._payload, fe = re._init;
            try {
              return U(fe(ce), R, H);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, K = {}, ne = J.ReactDebugCurrentFrame;
    function ue(m) {
      if (m) {
        var R = m._owner, H = U(m.type, m._source, R ? R.type : null);
        ne.setExtraStackFrame(H);
      } else
        ne.setExtraStackFrame(null);
    }
    function ie(m, R, H, re, ce) {
      {
        var fe = Function.call.bind(X);
        for (var oe in m)
          if (fe(m, oe)) {
            var de = void 0;
            try {
              if (typeof m[oe] != "function") {
                var Ee = Error((re || "React class") + ": " + H + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              de = m[oe](R, oe, re, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              de = ve;
            }
            de && !(de instanceof Error) && (ue(ce), G("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", H, oe, typeof de), ue(null)), de instanceof Error && !(de.message in K) && (K[de.message] = !0, ue(ce), G("Failed %s type: %s", H, de.message), ue(null));
          }
      }
    }
    var ye = Array.isArray;
    function ge(m) {
      return ye(m);
    }
    function Se(m) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, H = R && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return H;
      }
    }
    function Me(m) {
      try {
        return Ae(m), !1;
      } catch {
        return !0;
      }
    }
    function Ae(m) {
      return "" + m;
    }
    function qe(m) {
      if (Me(m))
        return G("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(m)), Ae(m);
    }
    var De = J.ReactCurrentOwner, Ea = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, on, sn, Er;
    Er = {};
    function Pa(m) {
      if (X.call(m, "ref")) {
        var R = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function ja(m) {
      if (X.call(m, "key")) {
        var R = Object.getOwnPropertyDescriptor(m, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Ma(m, R) {
      if (typeof m.ref == "string" && De.current && R && De.current.stateNode !== R) {
        var H = y(De.current.type);
        Er[H] || (G('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(De.current.type), m.ref), Er[H] = !0);
      }
    }
    function Aa(m, R) {
      {
        var H = function() {
          on || (on = !0, G("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        H.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function Ra(m, R) {
      {
        var H = function() {
          sn || (sn = !0, G("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        H.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: H,
          configurable: !0
        });
      }
    }
    var $a = function(m, R, H, re, ce, fe, oe) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: m,
        key: R,
        ref: H,
        props: oe,
        // Record the component responsible for creating this element.
        _owner: fe
      };
      return de._store = {}, Object.defineProperty(de._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(de, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(de, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de;
    };
    function Ia(m, R, H, re, ce) {
      {
        var fe, oe = {}, de = null, Ee = null;
        H !== void 0 && (qe(H), de = "" + H), ja(R) && (qe(R.key), de = "" + R.key), Pa(R) && (Ee = R.ref, Ma(R, ce));
        for (fe in R)
          X.call(R, fe) && !Ea.hasOwnProperty(fe) && (oe[fe] = R[fe]);
        if (m && m.defaultProps) {
          var ve = m.defaultProps;
          for (fe in ve)
            oe[fe] === void 0 && (oe[fe] = ve[fe]);
        }
        if (de || Ee) {
          var we = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          de && Aa(oe, we), Ee && Ra(oe, we);
        }
        return $a(m, de, Ee, ce, re, De.current, oe);
      }
    }
    var Pr = J.ReactCurrentOwner, cn = J.ReactDebugCurrentFrame;
    function Ge(m) {
      if (m) {
        var R = m._owner, H = U(m.type, m._source, R ? R.type : null);
        cn.setExtraStackFrame(H);
      } else
        cn.setExtraStackFrame(null);
    }
    var jr;
    jr = !1;
    function Mr(m) {
      return typeof m == "object" && m !== null && m.$$typeof === d;
    }
    function ln() {
      {
        if (Pr.current) {
          var m = y(Pr.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Ta(m) {
      return "";
    }
    var fn = {};
    function Oa(m) {
      {
        var R = ln();
        if (!R) {
          var H = typeof m == "string" ? m : m.displayName || m.name;
          H && (R = `

Check the top-level render call using <` + H + ">.");
        }
        return R;
      }
    }
    function hn(m, R) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var H = Oa(R);
        if (fn[H])
          return;
        fn[H] = !0;
        var re = "";
        m && m._owner && m._owner !== Pr.current && (re = " It was passed a child from " + y(m._owner.type) + "."), Ge(m), G('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, re), Ge(null);
      }
    }
    function pn(m, R) {
      {
        if (typeof m != "object")
          return;
        if (ge(m))
          for (var H = 0; H < m.length; H++) {
            var re = m[H];
            Mr(re) && hn(re, R);
          }
        else if (Mr(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var ce = se(m);
          if (typeof ce == "function" && ce !== m.entries)
            for (var fe = ce.call(m), oe; !(oe = fe.next()).done; )
              Mr(oe.value) && hn(oe.value, R);
        }
      }
    }
    function za(m) {
      {
        var R = m.type;
        if (R == null || typeof R == "string")
          return;
        var H;
        if (typeof R == "function")
          H = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === q))
          H = R.propTypes;
        else
          return;
        if (H) {
          var re = y(R);
          ie(H, m.props, "prop", re, m);
        } else if (R.PropTypes !== void 0 && !jr) {
          jr = !0;
          var ce = y(R);
          G("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && G("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Da(m) {
      {
        for (var R = Object.keys(m.props), H = 0; H < R.length; H++) {
          var re = R[H];
          if (re !== "children" && re !== "key") {
            Ge(m), G("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), Ge(null);
            break;
          }
        }
        m.ref !== null && (Ge(m), G("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
      }
    }
    var mn = {};
    function gn(m, R, H, re, ce, fe) {
      {
        var oe = h(m);
        if (!oe) {
          var de = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = Ta();
          Ee ? de += Ee : de += ln();
          var ve;
          m === null ? ve = "null" : ge(m) ? ve = "array" : m !== void 0 && m.$$typeof === d ? (ve = "<" + (y(m.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof m, G("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, de);
        }
        var we = Ia(m, R, H, ce, fe);
        if (we == null)
          return we;
        if (oe) {
          var Re = R.children;
          if (Re !== void 0)
            if (re)
              if (ge(Re)) {
                for (var Ye = 0; Ye < Re.length; Ye++)
                  pn(Re[Ye], m);
                Object.freeze && Object.freeze(Re);
              } else
                G("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pn(Re, m);
        }
        if (X.call(R, "key")) {
          var Fe = y(m), je = Object.keys(R).filter(function(Ha) {
            return Ha !== "key";
          }), Ar = je.length > 0 ? "{key: someKey, " + je.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mn[Fe + Ar]) {
            var Ba = je.length > 0 ? "{" + je.join(": ..., ") + ": ...}" : "{}";
            G(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ar, Fe, Ba, Fe), mn[Fe + Ar] = !0;
          }
        }
        return m === n ? Da(we) : za(we), we;
      }
    }
    function La(m, R, H) {
      return gn(m, R, H, !0);
    }
    function Na(m, R, H) {
      return gn(m, R, H, !1);
    }
    var Fa = Na, Va = La;
    ar.Fragment = n, ar.jsx = Fa, ar.jsxs = Va;
  }()), ar;
}
process.env.NODE_ENV === "production" ? Br.exports = Ya() : Br.exports = Xa();
var he = Br.exports, Ce = function() {
  return Ce = Object.assign || function(d) {
    for (var i, n = 1, _ = arguments.length; n < _; n++) {
      i = arguments[n];
      for (var b in i) Object.prototype.hasOwnProperty.call(i, b) && (d[b] = i[b]);
    }
    return d;
  }, Ce.apply(this, arguments);
};
function Ue(r, d, i) {
  if (i || arguments.length === 2) for (var n = 0, _ = d.length, b; n < _; n++)
    (b || !(n in d)) && (b || (b = Array.prototype.slice.call(d, 0, n)), b[n] = d[n]);
  return r.concat(b || Array.prototype.slice.call(d));
}
function Ka(r) {
  var d = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return d[i] === void 0 && (d[i] = r(i)), d[i];
  };
}
var Za = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xa = /* @__PURE__ */ Ka(
  function(r) {
    return Za.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), pe = "-ms-", ur = "-moz-", le = "-webkit-", Un = "comm", wr = "rule", en = "decl", Ja = "@import", Wn = "@keyframes", Qa = "@layer", qn = Math.abs, rn = String.fromCharCode, Hr = Object.assign;
function et(r, d) {
  return ke(r, 0) ^ 45 ? (((d << 2 ^ ke(r, 0)) << 2 ^ ke(r, 1)) << 2 ^ ke(r, 2)) << 2 ^ ke(r, 3) : 0;
}
function Gn(r) {
  return r.trim();
}
function ze(r, d) {
  return (r = d.exec(r)) ? r[0] : r;
}
function te(r, d, i) {
  return r.replace(d, i);
}
function cr(r, d, i) {
  return r.indexOf(d, i);
}
function ke(r, d) {
  return r.charCodeAt(d) | 0;
}
function Ke(r, d, i) {
  return r.slice(d, i);
}
function Te(r) {
  return r.length;
}
function Yn(r) {
  return r.length;
}
function tr(r, d) {
  return d.push(r), r;
}
function rt(r, d) {
  return r.map(d).join("");
}
function bn(r, d) {
  return r.filter(function(i) {
    return !ze(i, d);
  });
}
var br = 1, Ze = 1, Xn = 0, $e = 0, be = 0, er = "";
function yr(r, d, i, n, _, b, k, $) {
  return { value: r, root: d, parent: i, type: n, props: _, children: b, line: br, column: Ze, length: k, return: "", siblings: $ };
}
function Le(r, d) {
  return Hr(yr("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, d);
}
function Xe(r) {
  for (; r.root; )
    r = Le(r.root, { children: [r] });
  tr(r, r.siblings);
}
function nt() {
  return be;
}
function at() {
  return be = $e > 0 ? ke(er, --$e) : 0, Ze--, be === 10 && (Ze = 1, br--), be;
}
function Ie() {
  return be = $e < Xn ? ke(er, $e++) : 0, Ze++, be === 10 && (Ze = 1, br++), be;
}
function He() {
  return ke(er, $e);
}
function lr() {
  return $e;
}
function kr(r, d) {
  return Ke(er, r, d);
}
function Ur(r) {
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
function tt(r) {
  return br = Ze = 1, Xn = Te(er = r), $e = 0, [];
}
function ut(r) {
  return er = "", r;
}
function Rr(r) {
  return Gn(kr($e - 1, Wr(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function dt(r) {
  for (; (be = He()) && be < 33; )
    Ie();
  return Ur(r) > 2 || Ur(be) > 3 ? "" : " ";
}
function ot(r, d) {
  for (; --d && Ie() && !(be < 48 || be > 102 || be > 57 && be < 65 || be > 70 && be < 97); )
    ;
  return kr(r, lr() + (d < 6 && He() == 32 && Ie() == 32));
}
function Wr(r) {
  for (; Ie(); )
    switch (be) {
      case r:
        return $e;
      case 34:
      case 39:
        r !== 34 && r !== 39 && Wr(be);
        break;
      case 40:
        r === 41 && Wr(r);
        break;
      case 92:
        Ie();
        break;
    }
  return $e;
}
function st(r, d) {
  for (; Ie() && r + be !== 57; )
    if (r + be === 84 && He() === 47)
      break;
  return "/*" + kr(d, $e - 1) + "*" + rn(r === 47 ? r : Ie());
}
function it(r) {
  for (; !Ur(He()); )
    Ie();
  return kr(r, $e);
}
function ct(r) {
  return ut(fr("", null, null, null, [""], r = tt(r), 0, [0], r));
}
function fr(r, d, i, n, _, b, k, $, M) {
  for (var z = 0, B = 0, q = k, Z = 0, ee = 0, Q = 0, Y = 1, se = 1, J = 1, G = 0, ae = "", e = _, t = b, a = n, s = ae; se; )
    switch (Q = G, G = Ie()) {
      case 40:
        if (Q != 108 && ke(s, q - 1) == 58) {
          cr(s += te(Rr(G), "&", "&\f"), "&\f", qn(z ? $[z - 1] : 0)) != -1 && (J = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        s += Rr(G);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        s += dt(Q);
        break;
      case 92:
        s += ot(lr() - 1, 7);
        continue;
      case 47:
        switch (He()) {
          case 42:
          case 47:
            tr(lt(st(Ie(), lr()), d, i, M), M);
            break;
          default:
            s += "/";
        }
        break;
      case 123 * Y:
        $[z++] = Te(s) * J;
      case 125 * Y:
      case 59:
      case 0:
        switch (G) {
          case 0:
          case 125:
            se = 0;
          case 59 + B:
            J == -1 && (s = te(s, /\f/g, "")), ee > 0 && Te(s) - q && tr(ee > 32 ? kn(s + ";", n, i, q - 1, M) : kn(te(s, " ", "") + ";", n, i, q - 2, M), M);
            break;
          case 59:
            s += ";";
          default:
            if (tr(a = yn(s, d, i, z, B, _, $, ae, e = [], t = [], q, b), b), G === 123)
              if (B === 0)
                fr(s, d, a, a, e, b, q, $, t);
              else
                switch (Z === 99 && ke(s, 3) === 110 ? 100 : Z) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fr(r, a, a, n && tr(yn(r, a, a, 0, 0, _, $, ae, _, e = [], q, t), t), _, t, q, $, n ? e : t);
                    break;
                  default:
                    fr(s, a, a, a, [""], t, 0, $, t);
                }
        }
        z = B = ee = 0, Y = J = 1, ae = s = "", q = k;
        break;
      case 58:
        q = 1 + Te(s), ee = Q;
      default:
        if (Y < 1) {
          if (G == 123)
            --Y;
          else if (G == 125 && Y++ == 0 && at() == 125)
            continue;
        }
        switch (s += rn(G), G * Y) {
          case 38:
            J = B > 0 ? 1 : (s += "\f", -1);
            break;
          case 44:
            $[z++] = (Te(s) - 1) * J, J = 1;
            break;
          case 64:
            He() === 45 && (s += Rr(Ie())), Z = He(), B = q = Te(ae = s += it(lr())), G++;
            break;
          case 45:
            Q === 45 && Te(s) == 2 && (Y = 0);
        }
    }
  return b;
}
function yn(r, d, i, n, _, b, k, $, M, z, B, q) {
  for (var Z = _ - 1, ee = _ === 0 ? b : [""], Q = Yn(ee), Y = 0, se = 0, J = 0; Y < n; ++Y)
    for (var G = 0, ae = Ke(r, Z + 1, Z = qn(se = k[Y])), e = r; G < Q; ++G)
      (e = Gn(se > 0 ? ee[G] + " " + ae : te(ae, /&\f/g, ee[G]))) && (M[J++] = e);
  return yr(r, d, i, _ === 0 ? wr : $, M, z, B, q);
}
function lt(r, d, i, n) {
  return yr(r, d, i, Un, rn(nt()), Ke(r, 2, -2), 0, n);
}
function kn(r, d, i, n, _) {
  return yr(r, d, i, en, Ke(r, 0, n), Ke(r, n + 1, -1), n, _);
}
function Kn(r, d, i) {
  switch (et(r, d)) {
    case 5103:
      return le + "print-" + r + r;
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
      return le + r + r;
    case 4789:
      return ur + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return le + r + ur + r + pe + r + r;
    case 5936:
      switch (ke(r, d + 11)) {
        case 114:
          return le + r + pe + te(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return le + r + pe + te(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return le + r + pe + te(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    case 6828:
    case 4268:
    case 2903:
      return le + r + pe + r + r;
    case 6165:
      return le + r + pe + "flex-" + r + r;
    case 5187:
      return le + r + te(r, /(\w+).+(:[^]+)/, le + "box-$1$2" + pe + "flex-$1$2") + r;
    case 5443:
      return le + r + pe + "flex-item-" + te(r, /flex-|-self/g, "") + (ze(r, /flex-|baseline/) ? "" : pe + "grid-row-" + te(r, /flex-|-self/g, "")) + r;
    case 4675:
      return le + r + pe + "flex-line-pack" + te(r, /align-content|flex-|-self/g, "") + r;
    case 5548:
      return le + r + pe + te(r, "shrink", "negative") + r;
    case 5292:
      return le + r + pe + te(r, "basis", "preferred-size") + r;
    case 6060:
      return le + "box-" + te(r, "-grow", "") + le + r + pe + te(r, "grow", "positive") + r;
    case 4554:
      return le + te(r, /([^-])(transform)/g, "$1" + le + "$2") + r;
    case 6187:
      return te(te(te(r, /(zoom-|grab)/, le + "$1"), /(image-set)/, le + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return te(r, /(image-set\([^]*)/, le + "$1$`$1");
    case 4968:
      return te(te(r, /(.+:)(flex-)?(.*)/, le + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + le + r + r;
    case 4200:
      if (!ze(r, /flex-|baseline/)) return pe + "grid-column-align" + Ke(r, d) + r;
      break;
    case 2592:
    case 3360:
      return pe + te(r, "template-", "") + r;
    case 4384:
    case 3616:
      return i && i.some(function(n, _) {
        return d = _, ze(n.props, /grid-\w+-end/);
      }) ? ~cr(r + (i = i[d].value), "span", 0) ? r : pe + te(r, "-start", "") + r + pe + "grid-row-span:" + (~cr(i, "span", 0) ? ze(i, /\d+/) : +ze(i, /\d+/) - +ze(r, /\d+/)) + ";" : pe + te(r, "-start", "") + r;
    case 4896:
    case 4128:
      return i && i.some(function(n) {
        return ze(n.props, /grid-\w+-start/);
      }) ? r : pe + te(te(r, "-end", "-span"), "span ", "") + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(r, /(.+)-inline(.+)/, le + "$1$2") + r;
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
      if (Te(r) - 1 - d > 6)
        switch (ke(r, d + 1)) {
          case 109:
            if (ke(r, d + 4) !== 45)
              break;
          case 102:
            return te(r, /(.+:)(.+)-([^]+)/, "$1" + le + "$2-$3$1" + ur + (ke(r, d + 3) == 108 ? "$3" : "$2-$3")) + r;
          case 115:
            return ~cr(r, "stretch", 0) ? Kn(te(r, "stretch", "fill-available"), d, i) + r : r;
        }
      break;
    case 5152:
    case 5920:
      return te(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, _, b, k, $, M, z) {
        return pe + _ + ":" + b + z + (k ? pe + _ + "-span:" + ($ ? M : +M - +b) + z : "") + r;
      });
    case 4949:
      if (ke(r, d + 6) === 121)
        return te(r, ":", ":" + le) + r;
      break;
    case 6444:
      switch (ke(r, ke(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return te(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + le + (ke(r, 14) === 45 ? "inline-" : "") + "box$3$1" + le + "$2$3$1" + pe + "$2box$3") + r;
        case 100:
          return te(r, ":", ":" + pe) + r;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return te(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function mr(r, d) {
  for (var i = "", n = 0; n < r.length; n++)
    i += d(r[n], n, r, d) || "";
  return i;
}
function ft(r, d, i, n) {
  switch (r.type) {
    case Qa:
      if (r.children.length) break;
    case Ja:
    case en:
      return r.return = r.return || r.value;
    case Un:
      return "";
    case Wn:
      return r.return = r.value + "{" + mr(r.children, n) + "}";
    case wr:
      if (!Te(r.value = r.props.join(","))) return "";
  }
  return Te(i = mr(r.children, n)) ? r.return = r.value + "{" + i + "}" : "";
}
function ht(r) {
  var d = Yn(r);
  return function(i, n, _, b) {
    for (var k = "", $ = 0; $ < d; $++)
      k += r[$](i, n, _, b) || "";
    return k;
  };
}
function pt(r) {
  return function(d) {
    d.root || (d = d.return) && r(d);
  };
}
function mt(r, d, i, n) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case en:
        r.return = Kn(r.value, r.length, i);
        return;
      case Wn:
        return mr([Le(r, { value: te(r.value, "@", "@" + le) })], n);
      case wr:
        if (r.length)
          return rt(i = r.props, function(_) {
            switch (ze(_, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Xe(Le(r, { props: [te(_, /:(read-\w+)/, ":" + ur + "$1")] })), Xe(Le(r, { props: [_] })), Hr(r, { props: bn(i, n) });
                break;
              case "::placeholder":
                Xe(Le(r, { props: [te(_, /:(plac\w+)/, ":" + le + "input-$1")] })), Xe(Le(r, { props: [te(_, /:(plac\w+)/, ":" + ur + "$1")] })), Xe(Le(r, { props: [te(_, /:(plac\w+)/, pe + "input-$1")] })), Xe(Le(r, { props: [_] })), Hr(r, { props: bn(i, n) });
                break;
            }
            return "";
          });
    }
}
var gt = {
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
}, We = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Zn = "active", xn = "data-styled-version", Sr = "6.1.13", nn = `/*!sc*/
`, gr = typeof window < "u" && "HTMLElement" in window, vt = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), _t = {}, Sn = /invalid hook call/i, dr = /* @__PURE__ */ new Set(), Jn = function(r, d) {
  if (process.env.NODE_ENV !== "production") {
    var i = d ? ' with the id of "'.concat(d, '"') : "", n = "The component ".concat(r).concat(i, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, _ = console.error;
    try {
      var b = !0;
      console.error = function(k) {
        for (var $ = [], M = 1; M < arguments.length; M++) $[M - 1] = arguments[M];
        Sn.test(k) ? (b = !1, dr.delete(n)) : _.apply(void 0, Ue([k], $, !1));
      }, Ua(), b && !dr.has(n) && (console.warn(n), dr.add(n));
    } catch (k) {
      Sn.test(k.message) && dr.delete(n);
    } finally {
      console.error = _;
    }
  }
}, Cr = Object.freeze([]), xe = Object.freeze({});
function Qn(r, d, i) {
  return i === void 0 && (i = xe), r.theme !== i.theme && r.theme || d || i.theme;
}
var qr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), wt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, bt = /(^-|-$)/g;
function Cn(r) {
  return r.replace(wt, "-").replace(bt, "");
}
var yt = /(a)(d)/gi, or = 52, En = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function Gr(r) {
  var d, i = "";
  for (d = Math.abs(r); d > or; d = d / or | 0) i = En(d % or) + i;
  return (En(d % or) + i).replace(yt, "$1-$2");
}
var $r, ea = 5381, Ve = function(r, d) {
  for (var i = d.length; i; ) r = 33 * r ^ d.charCodeAt(--i);
  return r;
}, ra = function(r) {
  return Ve(ea, r);
};
function na(r) {
  return Gr(ra(r) >>> 0);
}
function aa(r) {
  return process.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function Ir(r) {
  return typeof r == "string" && (process.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var ta = typeof Symbol == "function" && Symbol.for, ua = ta ? Symbol.for("react.memo") : 60115, kt = ta ? Symbol.for("react.forward_ref") : 60112, St = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Ct = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, da = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Et = (($r = {})[kt] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, $r[ua] = da, $r);
function Pn(r) {
  return ("type" in (d = r) && d.type.$$typeof) === ua ? da : "$$typeof" in r ? Et[r.$$typeof] : St;
  var d;
}
var Pt = Object.defineProperty, jt = Object.getOwnPropertyNames, jn = Object.getOwnPropertySymbols, Mt = Object.getOwnPropertyDescriptor, At = Object.getPrototypeOf, Mn = Object.prototype;
function oa(r, d, i) {
  if (typeof d != "string") {
    if (Mn) {
      var n = At(d);
      n && n !== Mn && oa(r, n, i);
    }
    var _ = jt(d);
    jn && (_ = _.concat(jn(d)));
    for (var b = Pn(r), k = Pn(d), $ = 0; $ < _.length; ++$) {
      var M = _[$];
      if (!(M in Ct || i && i[M] || k && M in k || b && M in b)) {
        var z = Mt(d, M);
        try {
          Pt(r, M, z);
        } catch {
        }
      }
    }
  }
  return r;
}
function Je(r) {
  return typeof r == "function";
}
function an(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function Be(r, d) {
  return r && d ? "".concat(r, " ").concat(d) : r || d || "";
}
function Yr(r, d) {
  if (r.length === 0) return "";
  for (var i = r[0], n = 1; n < r.length; n++) i += r[n];
  return i;
}
function Qe(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function Xr(r, d, i) {
  if (i === void 0 && (i = !1), !i && !Qe(r) && !Array.isArray(r)) return d;
  if (Array.isArray(d)) for (var n = 0; n < d.length; n++) r[n] = Xr(r[n], d[n]);
  else if (Qe(d)) for (var n in d) r[n] = Xr(r[n], d[n]);
  return r;
}
function tn(r, d) {
  Object.defineProperty(r, "toString", { value: d });
}
var Rt = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function $t() {
  for (var r = [], d = 0; d < arguments.length; d++) r[d] = arguments[d];
  for (var i = r[0], n = [], _ = 1, b = r.length; _ < b; _ += 1) n.push(r[_]);
  return n.forEach(function(k) {
    i = i.replace(/%[a-z]/, k);
  }), i;
}
function rr(r) {
  for (var d = [], i = 1; i < arguments.length; i++) d[i - 1] = arguments[i];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r, " for more information.").concat(d.length > 0 ? " Args: ".concat(d.join(", ")) : "")) : new Error($t.apply(void 0, Ue([Rt[r]], d, !1)).trim());
}
var It = function() {
  function r(d) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = d;
  }
  return r.prototype.indexOfGroup = function(d) {
    for (var i = 0, n = 0; n < d; n++) i += this.groupSizes[n];
    return i;
  }, r.prototype.insertRules = function(d, i) {
    if (d >= this.groupSizes.length) {
      for (var n = this.groupSizes, _ = n.length, b = _; d >= b; ) if ((b <<= 1) < 0) throw rr(16, "".concat(d));
      this.groupSizes = new Uint32Array(b), this.groupSizes.set(n), this.length = b;
      for (var k = _; k < b; k++) this.groupSizes[k] = 0;
    }
    for (var $ = this.indexOfGroup(d + 1), M = (k = 0, i.length); k < M; k++) this.tag.insertRule($, i[k]) && (this.groupSizes[d]++, $++);
  }, r.prototype.clearGroup = function(d) {
    if (d < this.length) {
      var i = this.groupSizes[d], n = this.indexOfGroup(d), _ = n + i;
      this.groupSizes[d] = 0;
      for (var b = n; b < _; b++) this.tag.deleteRule(n);
    }
  }, r.prototype.getGroup = function(d) {
    var i = "";
    if (d >= this.length || this.groupSizes[d] === 0) return i;
    for (var n = this.groupSizes[d], _ = this.indexOfGroup(d), b = _ + n, k = _; k < b; k++) i += "".concat(this.tag.getRule(k)).concat(nn);
    return i;
  }, r;
}(), Tt = 1 << 30, hr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), pr = 1, sr = function(r) {
  if (hr.has(r)) return hr.get(r);
  for (; vr.has(pr); ) pr++;
  var d = pr++;
  if (process.env.NODE_ENV !== "production" && ((0 | d) < 0 || d > Tt)) throw rr(16, "".concat(d));
  return hr.set(r, d), vr.set(d, r), d;
}, Ot = function(r, d) {
  pr = d + 1, hr.set(r, d), vr.set(d, r);
}, zt = "style[".concat(We, "][").concat(xn, '="').concat(Sr, '"]'), Dt = new RegExp("^".concat(We, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Lt = function(r, d, i) {
  for (var n, _ = i.split(","), b = 0, k = _.length; b < k; b++) (n = _[b]) && r.registerName(d, n);
}, Nt = function(r, d) {
  for (var i, n = ((i = d.textContent) !== null && i !== void 0 ? i : "").split(nn), _ = [], b = 0, k = n.length; b < k; b++) {
    var $ = n[b].trim();
    if ($) {
      var M = $.match(Dt);
      if (M) {
        var z = 0 | parseInt(M[1], 10), B = M[2];
        z !== 0 && (Ot(B, z), Lt(r, B, M[3]), r.getTag().insertRules(z, _)), _.length = 0;
      } else _.push($);
    }
  }
}, An = function(r) {
  for (var d = document.querySelectorAll(zt), i = 0, n = d.length; i < n; i++) {
    var _ = d[i];
    _ && _.getAttribute(We) !== Zn && (Nt(r, _), _.parentNode && _.parentNode.removeChild(_));
  }
};
function Ft() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var sa = function(r) {
  var d = document.head, i = r || d, n = document.createElement("style"), _ = function($) {
    var M = Array.from($.querySelectorAll("style[".concat(We, "]")));
    return M[M.length - 1];
  }(i), b = _ !== void 0 ? _.nextSibling : null;
  n.setAttribute(We, Zn), n.setAttribute(xn, Sr);
  var k = Ft();
  return k && n.setAttribute("nonce", k), i.insertBefore(n, b), n;
}, Vt = function() {
  function r(d) {
    this.element = sa(d), this.element.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var n = document.styleSheets, _ = 0, b = n.length; _ < b; _++) {
        var k = n[_];
        if (k.ownerNode === i) return k;
      }
      throw rr(17);
    }(this.element), this.length = 0;
  }
  return r.prototype.insertRule = function(d, i) {
    try {
      return this.sheet.insertRule(i, d), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.prototype.deleteRule = function(d) {
    this.sheet.deleteRule(d), this.length--;
  }, r.prototype.getRule = function(d) {
    var i = this.sheet.cssRules[d];
    return i && i.cssText ? i.cssText : "";
  }, r;
}(), Bt = function() {
  function r(d) {
    this.element = sa(d), this.nodes = this.element.childNodes, this.length = 0;
  }
  return r.prototype.insertRule = function(d, i) {
    if (d <= this.length && d >= 0) {
      var n = document.createTextNode(i);
      return this.element.insertBefore(n, this.nodes[d] || null), this.length++, !0;
    }
    return !1;
  }, r.prototype.deleteRule = function(d) {
    this.element.removeChild(this.nodes[d]), this.length--;
  }, r.prototype.getRule = function(d) {
    return d < this.length ? this.nodes[d].textContent : "";
  }, r;
}(), Ht = function() {
  function r(d) {
    this.rules = [], this.length = 0;
  }
  return r.prototype.insertRule = function(d, i) {
    return d <= this.length && (this.rules.splice(d, 0, i), this.length++, !0);
  }, r.prototype.deleteRule = function(d) {
    this.rules.splice(d, 1), this.length--;
  }, r.prototype.getRule = function(d) {
    return d < this.length ? this.rules[d] : "";
  }, r;
}(), Rn = gr, Ut = { isServer: !gr, useCSSOMInjection: !vt }, _r = function() {
  function r(d, i, n) {
    d === void 0 && (d = xe), i === void 0 && (i = {});
    var _ = this;
    this.options = Ce(Ce({}, Ut), d), this.gs = i, this.names = new Map(n), this.server = !!d.isServer, !this.server && gr && Rn && (Rn = !1, An(this)), tn(this, function() {
      return function(b) {
        for (var k = b.getTag(), $ = k.length, M = "", z = function(q) {
          var Z = function(J) {
            return vr.get(J);
          }(q);
          if (Z === void 0) return "continue";
          var ee = b.names.get(Z), Q = k.getGroup(q);
          if (ee === void 0 || !ee.size || Q.length === 0) return "continue";
          var Y = "".concat(We, ".g").concat(q, '[id="').concat(Z, '"]'), se = "";
          ee !== void 0 && ee.forEach(function(J) {
            J.length > 0 && (se += "".concat(J, ","));
          }), M += "".concat(Q).concat(Y, '{content:"').concat(se, '"}').concat(nn);
        }, B = 0; B < $; B++) z(B);
        return M;
      }(_);
    });
  }
  return r.registerId = function(d) {
    return sr(d);
  }, r.prototype.rehydrate = function() {
    !this.server && gr && An(this);
  }, r.prototype.reconstructWithOptions = function(d, i) {
    return i === void 0 && (i = !0), new r(Ce(Ce({}, this.options), d), this.gs, i && this.names || void 0);
  }, r.prototype.allocateGSInstance = function(d) {
    return this.gs[d] = (this.gs[d] || 0) + 1;
  }, r.prototype.getTag = function() {
    return this.tag || (this.tag = (d = function(i) {
      var n = i.useCSSOMInjection, _ = i.target;
      return i.isServer ? new Ht(_) : n ? new Vt(_) : new Bt(_);
    }(this.options), new It(d)));
    var d;
  }, r.prototype.hasNameForId = function(d, i) {
    return this.names.has(d) && this.names.get(d).has(i);
  }, r.prototype.registerName = function(d, i) {
    if (sr(d), this.names.has(d)) this.names.get(d).add(i);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(i), this.names.set(d, n);
    }
  }, r.prototype.insertRules = function(d, i, n) {
    this.registerName(d, i), this.getTag().insertRules(sr(d), n);
  }, r.prototype.clearNames = function(d) {
    this.names.has(d) && this.names.get(d).clear();
  }, r.prototype.clearRules = function(d) {
    this.getTag().clearGroup(sr(d)), this.clearNames(d);
  }, r.prototype.clearTag = function() {
    this.tag = void 0;
  }, r;
}(), Wt = /&/g, qt = /^\s*\/\/.*$/gm;
function ia(r, d) {
  return r.map(function(i) {
    return i.type === "rule" && (i.value = "".concat(d, " ").concat(i.value), i.value = i.value.replaceAll(",", ",".concat(d, " ")), i.props = i.props.map(function(n) {
      return "".concat(d, " ").concat(n);
    })), Array.isArray(i.children) && i.type !== "@keyframes" && (i.children = ia(i.children, d)), i;
  });
}
function Gt(r) {
  var d, i, n, _ = xe, b = _.options, k = b === void 0 ? xe : b, $ = _.plugins, M = $ === void 0 ? Cr : $, z = function(Z, ee, Q) {
    return Q.startsWith(i) && Q.endsWith(i) && Q.replaceAll(i, "").length > 0 ? ".".concat(d) : Z;
  }, B = M.slice();
  B.push(function(Z) {
    Z.type === wr && Z.value.includes("&") && (Z.props[0] = Z.props[0].replace(Wt, i).replace(n, z));
  }), k.prefix && B.push(mt), B.push(ft);
  var q = function(Z, ee, Q, Y) {
    ee === void 0 && (ee = ""), Q === void 0 && (Q = ""), Y === void 0 && (Y = "&"), d = Y, i = ee, n = new RegExp("\\".concat(i, "\\b"), "g");
    var se = Z.replace(qt, ""), J = ct(Q || ee ? "".concat(Q, " ").concat(ee, " { ").concat(se, " }") : se);
    k.namespace && (J = ia(J, k.namespace));
    var G = [];
    return mr(J, ht(B.concat(pt(function(ae) {
      return G.push(ae);
    })))), G;
  };
  return q.hash = M.length ? M.reduce(function(Z, ee) {
    return ee.name || rr(15), Ve(Z, ee.name);
  }, ea).toString() : "", q;
}
var Yt = new _r(), Kr = Gt(), ca = _e.createContext({ shouldForwardProp: void 0, styleSheet: Yt, stylis: Kr });
ca.Consumer;
_e.createContext(void 0);
function Zr() {
  return Wa(ca);
}
var $n = function() {
  function r(d, i) {
    var n = this;
    this.inject = function(_, b) {
      b === void 0 && (b = Kr);
      var k = n.name + b.hash;
      _.hasNameForId(n.id, k) || _.insertRules(n.id, k, b(n.rules, k, "@keyframes"));
    }, this.name = d, this.id = "sc-keyframes-".concat(d), this.rules = i, tn(this, function() {
      throw rr(12, String(n.name));
    });
  }
  return r.prototype.getName = function(d) {
    return d === void 0 && (d = Kr), this.name + d.hash;
  }, r;
}(), Xt = function(r) {
  return r >= "A" && r <= "Z";
};
function In(r) {
  for (var d = "", i = 0; i < r.length; i++) {
    var n = r[i];
    if (i === 1 && n === "-" && r[0] === "-") return r;
    Xt(n) ? d += "-" + n.toLowerCase() : d += n;
  }
  return d.startsWith("ms-") ? "-" + d : d;
}
var la = function(r) {
  return r == null || r === !1 || r === "";
}, fa = function(r) {
  var d, i, n = [];
  for (var _ in r) {
    var b = r[_];
    r.hasOwnProperty(_) && !la(b) && (Array.isArray(b) && b.isCss || Je(b) ? n.push("".concat(In(_), ":"), b, ";") : Qe(b) ? n.push.apply(n, Ue(Ue(["".concat(_, " {")], fa(b), !1), ["}"], !1)) : n.push("".concat(In(_), ": ").concat((d = _, (i = b) == null || typeof i == "boolean" || i === "" ? "" : typeof i != "number" || i === 0 || d in gt || d.startsWith("--") ? String(i).trim() : "".concat(i, "px")), ";")));
  }
  return n;
};
function Ne(r, d, i, n) {
  if (la(r)) return [];
  if (an(r)) return [".".concat(r.styledComponentId)];
  if (Je(r)) {
    if (!Je(b = r) || b.prototype && b.prototype.isReactComponent || !d) return [r];
    var _ = r(d);
    return process.env.NODE_ENV === "production" || typeof _ != "object" || Array.isArray(_) || _ instanceof $n || Qe(_) || _ === null || console.error("".concat(aa(r), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ne(_, d, i, n);
  }
  var b;
  return r instanceof $n ? i ? (r.inject(i, n), [r.getName(n)]) : [r] : Qe(r) ? fa(r) : Array.isArray(r) ? Array.prototype.concat.apply(Cr, r.map(function(k) {
    return Ne(k, d, i, n);
  })) : [r.toString()];
}
function ha(r) {
  for (var d = 0; d < r.length; d += 1) {
    var i = r[d];
    if (Je(i) && !an(i)) return !1;
  }
  return !0;
}
var Kt = ra(Sr), Zt = function() {
  function r(d, i, n) {
    this.rules = d, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && ha(d), this.componentId = i, this.baseHash = Ve(Kt, i), this.baseStyle = n, _r.registerId(i);
  }
  return r.prototype.generateAndInjectStyles = function(d, i, n) {
    var _ = this.baseStyle ? this.baseStyle.generateAndInjectStyles(d, i, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && i.hasNameForId(this.componentId, this.staticRulesId)) _ = Be(_, this.staticRulesId);
    else {
      var b = Yr(Ne(this.rules, d, i, n)), k = Gr(Ve(this.baseHash, b) >>> 0);
      if (!i.hasNameForId(this.componentId, k)) {
        var $ = n(b, ".".concat(k), void 0, this.componentId);
        i.insertRules(this.componentId, k, $);
      }
      _ = Be(_, k), this.staticRulesId = k;
    }
    else {
      for (var M = Ve(this.baseHash, n.hash), z = "", B = 0; B < this.rules.length; B++) {
        var q = this.rules[B];
        if (typeof q == "string") z += q, process.env.NODE_ENV !== "production" && (M = Ve(M, q));
        else if (q) {
          var Z = Yr(Ne(q, d, i, n));
          M = Ve(M, Z + B), z += Z;
        }
      }
      if (z) {
        var ee = Gr(M >>> 0);
        i.hasNameForId(this.componentId, ee) || i.insertRules(this.componentId, ee, n(z, ".".concat(ee), void 0, this.componentId)), _ = Be(_, ee);
      }
    }
    return _;
  }, r;
}(), un = _e.createContext(void 0);
un.Consumer;
var Tr = {}, Tn = /* @__PURE__ */ new Set();
function xt(r, d, i) {
  var n = an(r), _ = r, b = !Ir(r), k = d.attrs, $ = k === void 0 ? Cr : k, M = d.componentId, z = M === void 0 ? function(e, t) {
    var a = typeof e != "string" ? "sc" : Cn(e);
    Tr[a] = (Tr[a] || 0) + 1;
    var s = "".concat(a, "-").concat(na(Sr + a + Tr[a]));
    return t ? "".concat(t, "-").concat(s) : s;
  }(d.displayName, d.parentComponentId) : M, B = d.displayName, q = B === void 0 ? function(e) {
    return Ir(e) ? "styled.".concat(e) : "Styled(".concat(aa(e), ")");
  }(r) : B, Z = d.displayName && d.componentId ? "".concat(Cn(d.displayName), "-").concat(d.componentId) : d.componentId || z, ee = n && _.attrs ? _.attrs.concat($).filter(Boolean) : $, Q = d.shouldForwardProp;
  if (n && _.shouldForwardProp) {
    var Y = _.shouldForwardProp;
    if (d.shouldForwardProp) {
      var se = d.shouldForwardProp;
      Q = function(e, t) {
        return Y(e, t) && se(e, t);
      };
    } else Q = Y;
  }
  var J = new Zt(i, Z, n ? _.componentStyle : void 0);
  function G(e, t) {
    return function(a, s, p) {
      var v = a.attrs, h = a.componentStyle, w = a.defaultProps, I = a.foldedComponentIds, y = a.styledComponentId, E = a.target, P = _e.useContext(un), c = Zr(), S = a.shouldForwardProp || c.shouldForwardProp;
      process.env.NODE_ENV !== "production" && vn(y);
      var D = Qn(s, P, w) || xe, o = function(O, W, A) {
        for (var T, L = Ce(Ce({}, W), { className: void 0, theme: A }), V = 0; V < O.length; V += 1) {
          var N = Je(T = O[V]) ? T(L) : T;
          for (var x in N) L[x] = x === "className" ? Be(L[x], N[x]) : x === "style" ? Ce(Ce({}, L[x]), N[x]) : N[x];
        }
        return W.className && (L.className = Be(L.className, W.className)), L;
      }(v, s, D), l = o.as || E, g = {};
      for (var f in o) o[f] === void 0 || f[0] === "$" || f === "as" || f === "theme" && o.theme === D || (f === "forwardedAs" ? g.as = o.forwardedAs : S && !S(f, l) || (g[f] = o[f], S || process.env.NODE_ENV !== "development" || xa(f) || Tn.has(f) || !qr.has(l) || (Tn.add(f), console.warn('styled-components: it looks like an unknown prop "'.concat(f, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var u = function(O, W) {
        var A = Zr(), T = O.generateAndInjectStyles(W, A.styleSheet, A.stylis);
        return process.env.NODE_ENV !== "production" && vn(T), T;
      }(h, o);
      process.env.NODE_ENV !== "production" && a.warnTooManyClasses && a.warnTooManyClasses(u);
      var C = Be(I, y);
      return u && (C += " " + u), o.className && (C += " " + o.className), g[Ir(l) && !qr.has(l) ? "class" : "className"] = C, g.ref = p, qa(l, g);
    }(ae, e, t);
  }
  G.displayName = q;
  var ae = _e.forwardRef(G);
  return ae.attrs = ee, ae.componentStyle = J, ae.displayName = q, ae.shouldForwardProp = Q, ae.foldedComponentIds = n ? Be(_.foldedComponentIds, _.styledComponentId) : "", ae.styledComponentId = Z, ae.target = n ? _.target : r, Object.defineProperty(ae, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e) {
    this._foldedDefaultProps = n ? function(t) {
      for (var a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s];
      for (var p = 0, v = a; p < v.length; p++) Xr(t, v[p], !0);
      return t;
    }({}, _.defaultProps, e) : e;
  } }), process.env.NODE_ENV !== "production" && (Jn(q, Z), ae.warnTooManyClasses = /* @__PURE__ */ function(e, t) {
    var a = {}, s = !1;
    return function(p) {
      if (!s && (a[p] = !0, Object.keys(a).length >= 200)) {
        var v = t ? ' with the id of "'.concat(t, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(e).concat(v, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), s = !0, a = {};
      }
    };
  }(q, Z)), tn(ae, function() {
    return ".".concat(ae.styledComponentId);
  }), b && oa(ae, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), ae;
}
function On(r, d) {
  for (var i = [r[0]], n = 0, _ = d.length; n < _; n += 1) i.push(d[n], r[n + 1]);
  return i;
}
var zn = function(r) {
  return Object.assign(r, { isCss: !0 });
};
function Pe(r) {
  for (var d = [], i = 1; i < arguments.length; i++) d[i - 1] = arguments[i];
  if (Je(r) || Qe(r)) return zn(Ne(On(Cr, Ue([r], d, !0))));
  var n = r;
  return d.length === 0 && n.length === 1 && typeof n[0] == "string" ? Ne(n) : zn(Ne(On(n, d)));
}
function xr(r, d, i) {
  if (i === void 0 && (i = xe), !d) throw rr(1, d);
  var n = function(_) {
    for (var b = [], k = 1; k < arguments.length; k++) b[k - 1] = arguments[k];
    return r(d, i, Pe.apply(void 0, Ue([_], b, !1)));
  };
  return n.attrs = function(_) {
    return xr(r, d, Ce(Ce({}, i), { attrs: Array.prototype.concat(i.attrs, _).filter(Boolean) }));
  }, n.withConfig = function(_) {
    return xr(r, d, Ce(Ce({}, i), _));
  }, n;
}
var pa = function(r) {
  return xr(xt, r);
}, me = pa;
qr.forEach(function(r) {
  me[r] = pa(r);
});
var Jt = function() {
  function r(d, i) {
    this.rules = d, this.componentId = i, this.isStatic = ha(d), _r.registerId(this.componentId + 1);
  }
  return r.prototype.createStyles = function(d, i, n, _) {
    var b = _(Yr(Ne(this.rules, i, n, _)), ""), k = this.componentId + d;
    n.insertRules(k, k, b);
  }, r.prototype.removeStyles = function(d, i) {
    i.clearRules(this.componentId + d);
  }, r.prototype.renderStyles = function(d, i, n, _) {
    d > 2 && _r.registerId(this.componentId + d), this.removeStyles(d, n), this.createStyles(d, i, n, _);
  }, r;
}();
function Qt(r) {
  for (var d = [], i = 1; i < arguments.length; i++) d[i - 1] = arguments[i];
  var n = Pe.apply(void 0, Ue([r], d, !1)), _ = "sc-global-".concat(na(JSON.stringify(n))), b = new Jt(n, _);
  process.env.NODE_ENV !== "production" && Jn(_);
  var k = function(M) {
    var z = Zr(), B = _e.useContext(un), q = _e.useRef(z.styleSheet.allocateGSInstance(_)).current;
    return process.env.NODE_ENV !== "production" && _e.Children.count(M.children) && console.warn("The global style component ".concat(_, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && n.some(function(Z) {
      return typeof Z == "string" && Z.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), z.styleSheet.server && $(q, M, z.styleSheet, B, z.stylis), _e.useLayoutEffect(function() {
      if (!z.styleSheet.server) return $(q, M, z.styleSheet, B, z.stylis), function() {
        return b.removeStyles(q, z.styleSheet);
      };
    }, [q, M, z.styleSheet, B, z.stylis]), null;
  };
  function $(M, z, B, q, Z) {
    if (b.isStatic) b.renderStyles(M, _t, B, Z);
    else {
      var ee = Ce(Ce({}, z), { theme: Qn(z, q, k.defaultProps) });
      b.renderStyles(M, ee, B, Z);
    }
  }
  return _e.memo(k);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ir = "__sc-".concat(We, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[ir] || (window[ir] = 0), window[ir] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ir] += 1);
const ma = [
  { key: "$tablet", value: "768px" },
  { key: "$desktop", value: "1200px" }
], eu = [
  "a",
  "p",
  "span",
  "label",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "b",
  "strong",
  "q",
  "li"
], ru = [
  "a",
  "p",
  "span",
  "label",
  "div",
  "ul",
  "article",
  "section"
], Oe = {
  text: "text",
  textarea: "textarea",
  masked: "masked",
  password: "password",
  number: "number"
}, Or = {
  white: "#FFFFFF",
  bgWhite: "#FFFFFF",
  bgDisabled: "#8F8F93",
  bgSoft: "#FAFAFE",
  text: "#1D1D1D",
  textDisabled: "#b0b0b1",
  textSoft: "#686868",
  border: "#DFE6EA",
  primary: "#58a8ff",
  primaryHover: "#7aa4d0",
  primaryFocus: "#B3D7FE"
}, ga = (r) => Object.keys(r), dn = (r) => r.replace(/^\$/, "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), va = (r) => r ? {
  ...Or,
  ...Object.fromEntries(
    Object.entries(r).filter(([d]) => d in Or)
  )
} : Or, nu = (r, d) => {
  const i = [
    "className",
    "id",
    "children",
    "tag",
    "target",
    "$desktop",
    "$tablet",
    "$backgroundImage"
  ];
  return r.map((n) => i.includes(n) ? null : n ? Pe`
          ${dn(n)}: ${d[n] || null};
        ` : null);
}, _a = (r, d, i) => ma.map(({ key: n, value: _ }) => {
  var b;
  return r[n] ? Pe`
          @media (min-width: ${_}) {
            ${d}: ${((b = r[n]) == null ? void 0 : b[i]) || null};
          }
        ` : null;
}), au = (r, d, i) => ma.map(({ key: n, value: _ }) => {
  var b;
  return r[n] && r[n][i] ? Pe`
          @media (min-width: ${_}) {
            ${d}: url(${((b = r[n]) == null ? void 0 : b[i]) || ""});
          }
        ` : null;
}), tu = (r) => Pe`
    a {
      cursor: pointer;
      color: ${r.color || r.$actualColors.primary};

      &:hover {
        color: ${r.color || r.$actualColors.primaryHover};
        text-decoration: ${r.textDecoration || "underline"};
      }
      &:active,
      &:focus,
      &:focus-within {
        color: ${r.color || r.$actualColors.primaryFocus};
      }
    }
    ${r.tag === "a" && Pe`
      cursor: pointer;
      color: ${r.color || r.$actualColors.primary};

      &:hover {
        color: ${r.color || r.$actualColors.primaryHover};
        text-decoration: ${r.textDecoration || "underline"};
      }
      &:active,
      &:focus,
      &:focus-within {
        color: ${r.color || r.$actualColors.primaryFocus};
      }
    `}
  `, uu = (r) => {
  const d = ga(r);
  return Pe`
    font-family: ${r.fontFamily || "Helvetica, Arial, sans-serif"};
    font-weight: ${r.fontWeight || 400};
    font-style: ${r.fontStyle};
    text-decoration: ${r.textDecoration || "none"};
    font-size: ${r.fontSize || "16px"};
    line-height: ${r.lineHeight || "1.2"};
    color: ${r.color || r.$actualColors.text};
    text-align: ${r.textAlign || "left"};
    text-transform: ${r.textTransform};
    margin: 0;
    padding: 0;

    b,
    strong {
      font-weight: 600 !important;
    }

    ${tu(r)}
    ${d.map((i) => _a(r, dn(i), i))}
  `;
};
var wa = { exports: {} };
(function(r) {
  (function() {
    function d(e) {
      var t = {
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
        return JSON.parse(JSON.stringify(t));
      var a = {};
      for (var s in t)
        t.hasOwnProperty(s) && (a[s] = t[s].defaultValue);
      return a;
    }
    function i() {
      var e = d(!0), t = {};
      for (var a in e)
        e.hasOwnProperty(a) && (t[a] = !0);
      return t;
    }
    var n = {}, _ = {}, b = {}, k = d(!0), $ = "vanilla", M = {
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
      vanilla: d(!0),
      allOn: i()
    };
    n.helper = {}, n.extensions = {}, n.setOption = function(e, t) {
      return k[e] = t, this;
    }, n.getOption = function(e) {
      return k[e];
    }, n.getOptions = function() {
      return k;
    }, n.resetOptions = function() {
      k = d(!0);
    }, n.setFlavor = function(e) {
      if (!M.hasOwnProperty(e))
        throw Error(e + " flavor was not found");
      n.resetOptions();
      var t = M[e];
      $ = e;
      for (var a in t)
        t.hasOwnProperty(a) && (k[a] = t[a]);
    }, n.getFlavor = function() {
      return $;
    }, n.getFlavorOptions = function(e) {
      if (M.hasOwnProperty(e))
        return M[e];
    }, n.getDefaultOptions = function(e) {
      return d(e);
    }, n.subParser = function(e, t) {
      if (n.helper.isString(e))
        if (typeof t < "u")
          _[e] = t;
        else {
          if (_.hasOwnProperty(e))
            return _[e];
          throw Error("SubParser named " + e + " not registered!");
        }
    }, n.extension = function(e, t) {
      if (!n.helper.isString(e))
        throw Error("Extension 'name' must be a string");
      if (e = n.helper.stdExtName(e), n.helper.isUndefined(t)) {
        if (!b.hasOwnProperty(e))
          throw Error("Extension named " + e + " is not registered!");
        return b[e];
      } else {
        typeof t == "function" && (t = t()), n.helper.isArray(t) || (t = [t]);
        var a = z(t, e);
        if (a.valid)
          b[e] = t;
        else
          throw Error(a.error);
      }
    }, n.getAllExtensions = function() {
      return b;
    }, n.removeExtension = function(e) {
      delete b[e];
    }, n.resetExtensions = function() {
      b = {};
    };
    function z(e, t) {
      var a = t ? "Error in " + t + " extension->" : "Error in unnamed extension", s = {
        valid: !0,
        error: ""
      };
      n.helper.isArray(e) || (e = [e]);
      for (var p = 0; p < e.length; ++p) {
        var v = a + " sub-extension " + p + ": ", h = e[p];
        if (typeof h != "object")
          return s.valid = !1, s.error = v + "must be an object, but " + typeof h + " given", s;
        if (!n.helper.isString(h.type))
          return s.valid = !1, s.error = v + 'property "type" must be a string, but ' + typeof h.type + " given", s;
        var w = h.type = h.type.toLowerCase();
        if (w === "language" && (w = h.type = "lang"), w === "html" && (w = h.type = "output"), w !== "lang" && w !== "output" && w !== "listener")
          return s.valid = !1, s.error = v + "type " + w + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', s;
        if (w === "listener") {
          if (n.helper.isUndefined(h.listeners))
            return s.valid = !1, s.error = v + '. Extensions of type "listener" must have a property called "listeners"', s;
        } else if (n.helper.isUndefined(h.filter) && n.helper.isUndefined(h.regex))
          return s.valid = !1, s.error = v + w + ' extensions must define either a "regex" property or a "filter" method', s;
        if (h.listeners) {
          if (typeof h.listeners != "object")
            return s.valid = !1, s.error = v + '"listeners" property must be an object but ' + typeof h.listeners + " given", s;
          for (var I in h.listeners)
            if (h.listeners.hasOwnProperty(I) && typeof h.listeners[I] != "function")
              return s.valid = !1, s.error = v + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + I + " must be a function but " + typeof h.listeners[I] + " given", s;
        }
        if (h.filter) {
          if (typeof h.filter != "function")
            return s.valid = !1, s.error = v + '"filter" must be a function, but ' + typeof h.filter + " given", s;
        } else if (h.regex) {
          if (n.helper.isString(h.regex) && (h.regex = new RegExp(h.regex, "g")), !(h.regex instanceof RegExp))
            return s.valid = !1, s.error = v + '"regex" property must either be a string or a RegExp object, but ' + typeof h.regex + " given", s;
          if (n.helper.isUndefined(h.replace))
            return s.valid = !1, s.error = v + '"regex" extensions must implement a replace string or function', s;
        }
      }
      return s;
    }
    n.validateExtension = function(e) {
      var t = z(e, null);
      return t.valid ? !0 : (console.warn(t.error), !1);
    }, n.hasOwnProperty("helper") || (n.helper = {}), n.helper.isString = function(e) {
      return typeof e == "string" || e instanceof String;
    }, n.helper.isFunction = function(e) {
      var t = {};
      return e && t.toString.call(e) === "[object Function]";
    }, n.helper.isArray = function(e) {
      return Array.isArray(e);
    }, n.helper.isUndefined = function(e) {
      return typeof e > "u";
    }, n.helper.forEach = function(e, t) {
      if (n.helper.isUndefined(e))
        throw new Error("obj param is required");
      if (n.helper.isUndefined(t))
        throw new Error("callback param is required");
      if (!n.helper.isFunction(t))
        throw new Error("callback param must be a function/closure");
      if (typeof e.forEach == "function")
        e.forEach(t);
      else if (n.helper.isArray(e))
        for (var a = 0; a < e.length; a++)
          t(e[a], a, e);
      else if (typeof e == "object")
        for (var s in e)
          e.hasOwnProperty(s) && t(e[s], s, e);
      else
        throw new Error("obj does not seem to be an array or an iterable object");
    }, n.helper.stdExtName = function(e) {
      return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
    };
    function B(e, t) {
      var a = t.charCodeAt(0);
      return "¨E" + a + "E";
    }
    n.helper.escapeCharactersCallback = B, n.helper.escapeCharacters = function(e, t, a) {
      var s = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
      a && (s = "\\\\" + s);
      var p = new RegExp(s, "g");
      return e = e.replace(p, B), e;
    }, n.helper.unescapeHTMLEntities = function(e) {
      return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    };
    var q = function(e, t, a, s) {
      var p = s || "", v = p.indexOf("g") > -1, h = new RegExp(t + "|" + a, "g" + p.replace(/g/g, "")), w = new RegExp(t, p.replace(/g/g, "")), I = [], y, E, P, c, S;
      do
        for (y = 0; P = h.exec(e); )
          if (w.test(P[0]))
            y++ || (E = h.lastIndex, c = E - P[0].length);
          else if (y && !--y) {
            S = P.index + P[0].length;
            var D = {
              left: { start: c, end: E },
              match: { start: E, end: P.index },
              right: { start: P.index, end: S },
              wholeMatch: { start: c, end: S }
            };
            if (I.push(D), !v)
              return I;
          }
      while (y && (h.lastIndex = E));
      return I;
    };
    n.helper.matchRecursiveRegExp = function(e, t, a, s) {
      for (var p = q(e, t, a, s), v = [], h = 0; h < p.length; ++h)
        v.push([
          e.slice(p[h].wholeMatch.start, p[h].wholeMatch.end),
          e.slice(p[h].match.start, p[h].match.end),
          e.slice(p[h].left.start, p[h].left.end),
          e.slice(p[h].right.start, p[h].right.end)
        ]);
      return v;
    }, n.helper.replaceRecursiveRegExp = function(e, t, a, s, p) {
      if (!n.helper.isFunction(t)) {
        var v = t;
        t = function() {
          return v;
        };
      }
      var h = q(e, a, s, p), w = e, I = h.length;
      if (I > 0) {
        var y = [];
        h[0].wholeMatch.start !== 0 && y.push(e.slice(0, h[0].wholeMatch.start));
        for (var E = 0; E < I; ++E)
          y.push(
            t(
              e.slice(h[E].wholeMatch.start, h[E].wholeMatch.end),
              e.slice(h[E].match.start, h[E].match.end),
              e.slice(h[E].left.start, h[E].left.end),
              e.slice(h[E].right.start, h[E].right.end)
            )
          ), E < I - 1 && y.push(e.slice(h[E].wholeMatch.end, h[E + 1].wholeMatch.start));
        h[I - 1].wholeMatch.end < e.length && y.push(e.slice(h[I - 1].wholeMatch.end)), w = y.join("");
      }
      return w;
    }, n.helper.regexIndexOf = function(e, t, a) {
      if (!n.helper.isString(e))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      if (!(t instanceof RegExp))
        throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
      var s = e.substring(a || 0).search(t);
      return s >= 0 ? s + (a || 0) : s;
    }, n.helper.splitAtIndex = function(e, t) {
      if (!n.helper.isString(e))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      return [e.substring(0, t), e.substring(t)];
    }, n.helper.encodeEmailAddress = function(e) {
      var t = [
        function(a) {
          return "&#" + a.charCodeAt(0) + ";";
        },
        function(a) {
          return "&#x" + a.charCodeAt(0).toString(16) + ";";
        },
        function(a) {
          return a;
        }
      ];
      return e = e.replace(/./g, function(a) {
        if (a === "@")
          a = t[Math.floor(Math.random() * 2)](a);
        else {
          var s = Math.random();
          a = s > 0.9 ? t[2](a) : s > 0.45 ? t[1](a) : t[0](a);
        }
        return a;
      }), e;
    }, n.helper.padEnd = function(t, a, s) {
      return a = a >> 0, s = String(s || " "), t.length > a ? String(t) : (a = a - t.length, a > s.length && (s += s.repeat(a / s.length)), String(t) + s.slice(0, a));
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
    }), n.helper.regexes = {
      asteriskDashAndColon: /([*_:~])/g
    }, n.helper.emojis = {
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
    }, n.Converter = function(e) {
      var t = {}, a = [], s = [], p = {}, v = $, h = {
        parsed: {},
        raw: "",
        format: ""
      };
      w();
      function w() {
        e = e || {};
        for (var c in k)
          k.hasOwnProperty(c) && (t[c] = k[c]);
        if (typeof e == "object")
          for (var S in e)
            e.hasOwnProperty(S) && (t[S] = e[S]);
        else
          throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
        t.extensions && n.helper.forEach(t.extensions, I);
      }
      function I(c, S) {
        if (S = S || null, n.helper.isString(c))
          if (c = n.helper.stdExtName(c), S = c, n.extensions[c]) {
            console.warn("DEPRECATION WARNING: " + c + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), y(n.extensions[c], c);
            return;
          } else if (!n.helper.isUndefined(b[c]))
            c = b[c];
          else
            throw Error('Extension "' + c + '" could not be loaded. It was either not found or is not a valid extension.');
        typeof c == "function" && (c = c()), n.helper.isArray(c) || (c = [c]);
        var D = z(c, S);
        if (!D.valid)
          throw Error(D.error);
        for (var o = 0; o < c.length; ++o) {
          switch (c[o].type) {
            case "lang":
              a.push(c[o]);
              break;
            case "output":
              s.push(c[o]);
              break;
          }
          if (c[o].hasOwnProperty("listeners"))
            for (var l in c[o].listeners)
              c[o].listeners.hasOwnProperty(l) && E(l, c[o].listeners[l]);
        }
      }
      function y(c, S) {
        typeof c == "function" && (c = c(new n.Converter())), n.helper.isArray(c) || (c = [c]);
        var D = z(c, S);
        if (!D.valid)
          throw Error(D.error);
        for (var o = 0; o < c.length; ++o)
          switch (c[o].type) {
            case "lang":
              a.push(c[o]);
              break;
            case "output":
              s.push(c[o]);
              break;
            default:
              throw Error("Extension loader error: Type unrecognized!!!");
          }
      }
      function E(c, S) {
        if (!n.helper.isString(c))
          throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof c + " given");
        if (typeof S != "function")
          throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof S + " given");
        p.hasOwnProperty(c) || (p[c] = []), p[c].push(S);
      }
      function P(c) {
        var S = c.match(/^\s*/)[0].length, D = new RegExp("^\\s{0," + S + "}", "gm");
        return c.replace(D, "");
      }
      this._dispatch = function(S, D, o, l) {
        if (p.hasOwnProperty(S))
          for (var g = 0; g < p[S].length; ++g) {
            var f = p[S][g](S, D, this, o, l);
            f && typeof f < "u" && (D = f);
          }
        return D;
      }, this.listen = function(c, S) {
        return E(c, S), this;
      }, this.makeHtml = function(c) {
        if (!c)
          return c;
        var S = {
          gHtmlBlocks: [],
          gHtmlMdBlocks: [],
          gHtmlSpans: [],
          gUrls: {},
          gTitles: {},
          gDimensions: {},
          gListLevel: 0,
          hashLinkCounts: {},
          langExtensions: a,
          outputModifiers: s,
          converter: this,
          ghCodeBlocks: [],
          metadata: {
            parsed: {},
            raw: "",
            format: ""
          }
        };
        return c = c.replace(/¨/g, "¨T"), c = c.replace(/\$/g, "¨D"), c = c.replace(/\r\n/g, `
`), c = c.replace(/\r/g, `
`), c = c.replace(/\u00A0/g, "&nbsp;"), t.smartIndentationFix && (c = P(c)), c = `

` + c + `

`, c = n.subParser("detab")(c, t, S), c = c.replace(/^[ \t]+$/mg, ""), n.helper.forEach(a, function(D) {
          c = n.subParser("runExtension")(D, c, t, S);
        }), c = n.subParser("metadata")(c, t, S), c = n.subParser("hashPreCodeTags")(c, t, S), c = n.subParser("githubCodeBlocks")(c, t, S), c = n.subParser("hashHTMLBlocks")(c, t, S), c = n.subParser("hashCodeTags")(c, t, S), c = n.subParser("stripLinkDefinitions")(c, t, S), c = n.subParser("blockGamut")(c, t, S), c = n.subParser("unhashHTMLSpans")(c, t, S), c = n.subParser("unescapeSpecialChars")(c, t, S), c = c.replace(/¨D/g, "$$"), c = c.replace(/¨T/g, "¨"), c = n.subParser("completeHTMLDocument")(c, t, S), n.helper.forEach(s, function(D) {
          c = n.subParser("runExtension")(D, c, t, S);
        }), h = S.metadata, c;
      }, this.makeMarkdown = this.makeMd = function(c, S) {
        if (c = c.replace(/\r\n/g, `
`), c = c.replace(/\r/g, `
`), c = c.replace(/>[ \t]+</, ">¨NBSP;<"), !S)
          if (window && window.document)
            S = window.document;
          else
            throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
        var D = S.createElement("div");
        D.innerHTML = c;
        var o = {
          preList: C(D)
        };
        u(D);
        for (var l = D.childNodes, g = "", f = 0; f < l.length; f++)
          g += n.subParser("makeMarkdown.node")(l[f], o);
        function u(O) {
          for (var W = 0; W < O.childNodes.length; ++W) {
            var A = O.childNodes[W];
            A.nodeType === 3 ? !/\S/.test(A.nodeValue) && !/^[ ]+$/.test(A.nodeValue) ? (O.removeChild(A), --W) : (A.nodeValue = A.nodeValue.split(`
`).join(" "), A.nodeValue = A.nodeValue.replace(/(\s)+/g, "$1")) : A.nodeType === 1 && u(A);
          }
        }
        function C(O) {
          for (var W = O.querySelectorAll("pre"), A = [], T = 0; T < W.length; ++T)
            if (W[T].childElementCount === 1 && W[T].firstChild.tagName.toLowerCase() === "code") {
              var L = W[T].firstChild.innerHTML.trim(), V = W[T].firstChild.getAttribute("data-language") || "";
              if (V === "")
                for (var N = W[T].firstChild.className.split(" "), x = 0; x < N.length; ++x) {
                  var F = N[x].match(/^language-(.+)$/);
                  if (F !== null) {
                    V = F[1];
                    break;
                  }
                }
              L = n.helper.unescapeHTMLEntities(L), A.push(L), W[T].outerHTML = '<precode language="' + V + '" precodenum="' + T.toString() + '"></precode>';
            } else
              A.push(W[T].innerHTML), W[T].innerHTML = "", W[T].setAttribute("prenum", T.toString());
          return A;
        }
        return g;
      }, this.setOption = function(c, S) {
        t[c] = S;
      }, this.getOption = function(c) {
        return t[c];
      }, this.getOptions = function() {
        return t;
      }, this.addExtension = function(c, S) {
        S = S || null, I(c, S);
      }, this.useExtension = function(c) {
        I(c);
      }, this.setFlavor = function(c) {
        if (!M.hasOwnProperty(c))
          throw Error(c + " flavor was not found");
        var S = M[c];
        v = c;
        for (var D in S)
          S.hasOwnProperty(D) && (t[D] = S[D]);
      }, this.getFlavor = function() {
        return v;
      }, this.removeExtension = function(c) {
        n.helper.isArray(c) || (c = [c]);
        for (var S = 0; S < c.length; ++S) {
          for (var D = c[S], o = 0; o < a.length; ++o)
            a[o] === D && a.splice(o, 1);
          for (var l = 0; l < s.length; ++l)
            s[l] === D && s.splice(l, 1);
        }
      }, this.getAllExtensions = function() {
        return {
          language: a,
          output: s
        };
      }, this.getMetadata = function(c) {
        return c ? h.raw : h.parsed;
      }, this.getMetadataFormat = function() {
        return h.format;
      }, this._setMetadataPair = function(c, S) {
        h.parsed[c] = S;
      }, this._setMetadataFormat = function(c) {
        h.format = c;
      }, this._setMetadataRaw = function(c) {
        h.raw = c;
      };
    }, n.subParser("anchors", function(e, t, a) {
      e = a.converter._dispatch("anchors.before", e, t, a);
      var s = function(p, v, h, w, I, y, E) {
        if (n.helper.isUndefined(E) && (E = ""), h = h.toLowerCase(), p.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          w = "";
        else if (!w)
          if (h || (h = v.toLowerCase().replace(/ ?\n/g, " ")), w = "#" + h, !n.helper.isUndefined(a.gUrls[h]))
            w = a.gUrls[h], n.helper.isUndefined(a.gTitles[h]) || (E = a.gTitles[h]);
          else
            return p;
        w = w.replace(n.helper.regexes.asteriskDashAndColon, n.helper.escapeCharactersCallback);
        var P = '<a href="' + w + '"';
        return E !== "" && E !== null && (E = E.replace(/"/g, "&quot;"), E = E.replace(n.helper.regexes.asteriskDashAndColon, n.helper.escapeCharactersCallback), P += ' title="' + E + '"'), t.openLinksInNewWindow && !/^#/.test(w) && (P += ' rel="noopener noreferrer" target="¨E95Eblank"'), P += ">" + v + "</a>", P;
      };
      return e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, s), e = e.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        s
      ), e = e.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        s
      ), e = e.replace(/\[([^\[\]]+)]()()()()()/g, s), t.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(p, v, h, w, I) {
        if (h === "\\")
          return v + w;
        if (!n.helper.isString(t.ghMentionsLink))
          throw new Error("ghMentionsLink option must be a string");
        var y = t.ghMentionsLink.replace(/\{u}/g, I), E = "";
        return t.openLinksInNewWindow && (E = ' rel="noopener noreferrer" target="¨E95Eblank"'), v + '<a href="' + y + '"' + E + ">" + w + "</a>";
      })), e = a.converter._dispatch("anchors.after", e, t, a), e;
    });
    var Z = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, ee = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, Q = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, Y = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, se = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, J = function(e) {
      return function(t, a, s, p, v, h, w) {
        s = s.replace(n.helper.regexes.asteriskDashAndColon, n.helper.escapeCharactersCallback);
        var I = s, y = "", E = "", P = a || "", c = w || "";
        return /^www\./i.test(s) && (s = s.replace(/^www\./i, "http://www.")), e.excludeTrailingPunctuationFromURLs && h && (y = h), e.openLinksInNewWindow && (E = ' rel="noopener noreferrer" target="¨E95Eblank"'), P + '<a href="' + s + '"' + E + ">" + I + "</a>" + y + c;
      };
    }, G = function(e, t) {
      return function(a, s, p) {
        var v = "mailto:";
        return s = s || "", p = n.subParser("unescapeSpecialChars")(p, e, t), e.encodeEmails ? (v = n.helper.encodeEmailAddress(v + p), p = n.helper.encodeEmailAddress(p)) : v = v + p, s + '<a href="' + v + '">' + p + "</a>";
      };
    };
    n.subParser("autoLinks", function(e, t, a) {
      return e = a.converter._dispatch("autoLinks.before", e, t, a), e = e.replace(Q, J(t)), e = e.replace(se, G(t, a)), e = a.converter._dispatch("autoLinks.after", e, t, a), e;
    }), n.subParser("simplifiedAutoLinks", function(e, t, a) {
      return t.simplifiedAutoLink && (e = a.converter._dispatch("simplifiedAutoLinks.before", e, t, a), t.excludeTrailingPunctuationFromURLs ? e = e.replace(ee, J(t)) : e = e.replace(Z, J(t)), e = e.replace(Y, G(t, a)), e = a.converter._dispatch("simplifiedAutoLinks.after", e, t, a)), e;
    }), n.subParser("blockGamut", function(e, t, a) {
      return e = a.converter._dispatch("blockGamut.before", e, t, a), e = n.subParser("blockQuotes")(e, t, a), e = n.subParser("headers")(e, t, a), e = n.subParser("horizontalRule")(e, t, a), e = n.subParser("lists")(e, t, a), e = n.subParser("codeBlocks")(e, t, a), e = n.subParser("tables")(e, t, a), e = n.subParser("hashHTMLBlocks")(e, t, a), e = n.subParser("paragraphs")(e, t, a), e = a.converter._dispatch("blockGamut.after", e, t, a), e;
    }), n.subParser("blockQuotes", function(e, t, a) {
      e = a.converter._dispatch("blockQuotes.before", e, t, a), e = e + `

`;
      var s = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
      return t.splitAdjacentBlockquotes && (s = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(s, function(p) {
        return p = p.replace(/^[ \t]*>[ \t]?/gm, ""), p = p.replace(/¨0/g, ""), p = p.replace(/^[ \t]+$/gm, ""), p = n.subParser("githubCodeBlocks")(p, t, a), p = n.subParser("blockGamut")(p, t, a), p = p.replace(/(^|\n)/g, "$1  "), p = p.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(v, h) {
          var w = h;
          return w = w.replace(/^  /mg, "¨0"), w = w.replace(/¨0/g, ""), w;
        }), n.subParser("hashBlock")(`<blockquote>
` + p + `
</blockquote>`, t, a);
      }), e = a.converter._dispatch("blockQuotes.after", e, t, a), e;
    }), n.subParser("codeBlocks", function(e, t, a) {
      e = a.converter._dispatch("codeBlocks.before", e, t, a), e += "¨0";
      var s = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
      return e = e.replace(s, function(p, v, h) {
        var w = v, I = h, y = `
`;
        return w = n.subParser("outdent")(w, t, a), w = n.subParser("encodeCode")(w, t, a), w = n.subParser("detab")(w, t, a), w = w.replace(/^\n+/g, ""), w = w.replace(/\n+$/g, ""), t.omitExtraWLInCodeBlocks && (y = ""), w = "<pre><code>" + w + y + "</code></pre>", n.subParser("hashBlock")(w, t, a) + I;
      }), e = e.replace(/¨0/, ""), e = a.converter._dispatch("codeBlocks.after", e, t, a), e;
    }), n.subParser("codeSpans", function(e, t, a) {
      return e = a.converter._dispatch("codeSpans.before", e, t, a), typeof e > "u" && (e = ""), e = e.replace(
        /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
        function(s, p, v, h) {
          var w = h;
          return w = w.replace(/^([ \t]*)/g, ""), w = w.replace(/[ \t]*$/g, ""), w = n.subParser("encodeCode")(w, t, a), w = p + "<code>" + w + "</code>", w = n.subParser("hashHTMLSpans")(w, t, a), w;
        }
      ), e = a.converter._dispatch("codeSpans.after", e, t, a), e;
    }), n.subParser("completeHTMLDocument", function(e, t, a) {
      if (!t.completeHTMLDocument)
        return e;
      e = a.converter._dispatch("completeHTMLDocument.before", e, t, a);
      var s = "html", p = `<!DOCTYPE HTML>
`, v = "", h = `<meta charset="utf-8">
`, w = "", I = "";
      typeof a.metadata.parsed.doctype < "u" && (p = "<!DOCTYPE " + a.metadata.parsed.doctype + `>
`, s = a.metadata.parsed.doctype.toString().toLowerCase(), (s === "html" || s === "html5") && (h = '<meta charset="utf-8">'));
      for (var y in a.metadata.parsed)
        if (a.metadata.parsed.hasOwnProperty(y))
          switch (y.toLowerCase()) {
            case "doctype":
              break;
            case "title":
              v = "<title>" + a.metadata.parsed.title + `</title>
`;
              break;
            case "charset":
              s === "html" || s === "html5" ? h = '<meta charset="' + a.metadata.parsed.charset + `">
` : h = '<meta name="charset" content="' + a.metadata.parsed.charset + `">
`;
              break;
            case "language":
            case "lang":
              w = ' lang="' + a.metadata.parsed[y] + '"', I += '<meta name="' + y + '" content="' + a.metadata.parsed[y] + `">
`;
              break;
            default:
              I += '<meta name="' + y + '" content="' + a.metadata.parsed[y] + `">
`;
          }
      return e = p + "<html" + w + `>
<head>
` + v + h + I + `</head>
<body>
` + e.trim() + `
</body>
</html>`, e = a.converter._dispatch("completeHTMLDocument.after", e, t, a), e;
    }), n.subParser("detab", function(e, t, a) {
      return e = a.converter._dispatch("detab.before", e, t, a), e = e.replace(/\t(?=\t)/g, "    "), e = e.replace(/\t/g, "¨A¨B"), e = e.replace(/¨B(.+?)¨A/g, function(s, p) {
        for (var v = p, h = 4 - v.length % 4, w = 0; w < h; w++)
          v += " ";
        return v;
      }), e = e.replace(/¨A/g, "    "), e = e.replace(/¨B/g, ""), e = a.converter._dispatch("detab.after", e, t, a), e;
    }), n.subParser("ellipsis", function(e, t, a) {
      return t.ellipsis && (e = a.converter._dispatch("ellipsis.before", e, t, a), e = e.replace(/\.\.\./g, "…"), e = a.converter._dispatch("ellipsis.after", e, t, a)), e;
    }), n.subParser("emoji", function(e, t, a) {
      if (!t.emoji)
        return e;
      e = a.converter._dispatch("emoji.before", e, t, a);
      var s = /:([\S]+?):/g;
      return e = e.replace(s, function(p, v) {
        return n.helper.emojis.hasOwnProperty(v) ? n.helper.emojis[v] : p;
      }), e = a.converter._dispatch("emoji.after", e, t, a), e;
    }), n.subParser("encodeAmpsAndAngles", function(e, t, a) {
      return e = a.converter._dispatch("encodeAmpsAndAngles.before", e, t, a), e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?$!])/gi, "&lt;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = a.converter._dispatch("encodeAmpsAndAngles.after", e, t, a), e;
    }), n.subParser("encodeBackslashEscapes", function(e, t, a) {
      return e = a.converter._dispatch("encodeBackslashEscapes.before", e, t, a), e = e.replace(/\\(\\)/g, n.helper.escapeCharactersCallback), e = e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, n.helper.escapeCharactersCallback), e = a.converter._dispatch("encodeBackslashEscapes.after", e, t, a), e;
    }), n.subParser("encodeCode", function(e, t, a) {
      return e = a.converter._dispatch("encodeCode.before", e, t, a), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, n.helper.escapeCharactersCallback), e = a.converter._dispatch("encodeCode.after", e, t, a), e;
    }), n.subParser("escapeSpecialCharsWithinTagAttributes", function(e, t, a) {
      e = a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, t, a);
      var s = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, p = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
      return e = e.replace(s, function(v) {
        return v.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, n.helper.escapeCharactersCallback);
      }), e = e.replace(p, function(v) {
        return v.replace(/([\\`*_~=|])/g, n.helper.escapeCharactersCallback);
      }), e = a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, t, a), e;
    }), n.subParser("githubCodeBlocks", function(e, t, a) {
      return t.ghCodeBlocks ? (e = a.converter._dispatch("githubCodeBlocks.before", e, t, a), e += "¨0", e = e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(s, p, v, h) {
        var w = t.omitExtraWLInCodeBlocks ? "" : `
`;
        return h = n.subParser("encodeCode")(h, t, a), h = n.subParser("detab")(h, t, a), h = h.replace(/^\n+/g, ""), h = h.replace(/\n+$/g, ""), h = "<pre><code" + (v ? ' class="' + v + " language-" + v + '"' : "") + ">" + h + w + "</code></pre>", h = n.subParser("hashBlock")(h, t, a), `

¨G` + (a.ghCodeBlocks.push({ text: s, codeblock: h }) - 1) + `G

`;
      }), e = e.replace(/¨0/, ""), a.converter._dispatch("githubCodeBlocks.after", e, t, a)) : e;
    }), n.subParser("hashBlock", function(e, t, a) {
      return e = a.converter._dispatch("hashBlock.before", e, t, a), e = e.replace(/(^\n+|\n+$)/g, ""), e = `

¨K` + (a.gHtmlBlocks.push(e) - 1) + `K

`, e = a.converter._dispatch("hashBlock.after", e, t, a), e;
    }), n.subParser("hashCodeTags", function(e, t, a) {
      e = a.converter._dispatch("hashCodeTags.before", e, t, a);
      var s = function(p, v, h, w) {
        var I = h + n.subParser("encodeCode")(v, t, a) + w;
        return "¨C" + (a.gHtmlSpans.push(I) - 1) + "C";
      };
      return e = n.helper.replaceRecursiveRegExp(e, s, "<code\\b[^>]*>", "</code>", "gim"), e = a.converter._dispatch("hashCodeTags.after", e, t, a), e;
    }), n.subParser("hashElement", function(e, t, a) {
      return function(s, p) {
        var v = p;
        return v = v.replace(/\n\n/g, `
`), v = v.replace(/^\n/, ""), v = v.replace(/\n+$/g, ""), v = `

¨K` + (a.gHtmlBlocks.push(v) - 1) + `K

`, v;
      };
    }), n.subParser("hashHTMLBlocks", function(e, t, a) {
      e = a.converter._dispatch("hashHTMLBlocks.before", e, t, a);
      var s = [
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
      ], p = function(c, S, D, o) {
        var l = c;
        return D.search(/\bmarkdown\b/) !== -1 && (l = D + a.converter.makeHtml(S) + o), `

¨K` + (a.gHtmlBlocks.push(l) - 1) + `K

`;
      };
      t.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, function(c, S) {
        return "&lt;" + S + "&gt;";
      }));
      for (var v = 0; v < s.length; ++v)
        for (var h, w = new RegExp("^ {0,3}(<" + s[v] + "\\b[^>]*>)", "im"), I = "<" + s[v] + "\\b[^>]*>", y = "</" + s[v] + ">"; (h = n.helper.regexIndexOf(e, w)) !== -1; ) {
          var E = n.helper.splitAtIndex(e, h), P = n.helper.replaceRecursiveRegExp(E[1], p, I, y, "im");
          if (P === E[1])
            break;
          e = E[0].concat(P);
        }
      return e = e.replace(
        /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
        n.subParser("hashElement")(e, t, a)
      ), e = n.helper.replaceRecursiveRegExp(e, function(c) {
        return `

¨K` + (a.gHtmlBlocks.push(c) - 1) + `K

`;
      }, "^ {0,3}<!--", "-->", "gm"), e = e.replace(
        /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
        n.subParser("hashElement")(e, t, a)
      ), e = a.converter._dispatch("hashHTMLBlocks.after", e, t, a), e;
    }), n.subParser("hashHTMLSpans", function(e, t, a) {
      e = a.converter._dispatch("hashHTMLSpans.before", e, t, a);
      function s(p) {
        return "¨C" + (a.gHtmlSpans.push(p) - 1) + "C";
      }
      return e = e.replace(/<[^>]+?\/>/gi, function(p) {
        return s(p);
      }), e = e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(p) {
        return s(p);
      }), e = e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(p) {
        return s(p);
      }), e = e.replace(/<[^>]+?>/gi, function(p) {
        return s(p);
      }), e = a.converter._dispatch("hashHTMLSpans.after", e, t, a), e;
    }), n.subParser("unhashHTMLSpans", function(e, t, a) {
      e = a.converter._dispatch("unhashHTMLSpans.before", e, t, a);
      for (var s = 0; s < a.gHtmlSpans.length; ++s) {
        for (var p = a.gHtmlSpans[s], v = 0; /¨C(\d+)C/.test(p); ) {
          var h = RegExp.$1;
          if (p = p.replace("¨C" + h + "C", a.gHtmlSpans[h]), v === 10) {
            console.error("maximum nesting of 10 spans reached!!!");
            break;
          }
          ++v;
        }
        e = e.replace("¨C" + s + "C", p);
      }
      return e = a.converter._dispatch("unhashHTMLSpans.after", e, t, a), e;
    }), n.subParser("hashPreCodeTags", function(e, t, a) {
      e = a.converter._dispatch("hashPreCodeTags.before", e, t, a);
      var s = function(p, v, h, w) {
        var I = h + n.subParser("encodeCode")(v, t, a) + w;
        return `

¨G` + (a.ghCodeBlocks.push({ text: p, codeblock: I }) - 1) + `G

`;
      };
      return e = n.helper.replaceRecursiveRegExp(e, s, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), e = a.converter._dispatch("hashPreCodeTags.after", e, t, a), e;
    }), n.subParser("headers", function(e, t, a) {
      e = a.converter._dispatch("headers.before", e, t, a);
      var s = isNaN(parseInt(t.headerLevelStart)) ? 1 : parseInt(t.headerLevelStart), p = t.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, v = t.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
      e = e.replace(p, function(I, y) {
        var E = n.subParser("spanGamut")(y, t, a), P = t.noHeaderId ? "" : ' id="' + w(y) + '"', c = s, S = "<h" + c + P + ">" + E + "</h" + c + ">";
        return n.subParser("hashBlock")(S, t, a);
      }), e = e.replace(v, function(I, y) {
        var E = n.subParser("spanGamut")(y, t, a), P = t.noHeaderId ? "" : ' id="' + w(y) + '"', c = s + 1, S = "<h" + c + P + ">" + E + "</h" + c + ">";
        return n.subParser("hashBlock")(S, t, a);
      });
      var h = t.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
      e = e.replace(h, function(I, y, E) {
        var P = E;
        t.customizedHeaderId && (P = E.replace(/\s?\{([^{]+?)}\s*$/, ""));
        var c = n.subParser("spanGamut")(P, t, a), S = t.noHeaderId ? "" : ' id="' + w(E) + '"', D = s - 1 + y.length, o = "<h" + D + S + ">" + c + "</h" + D + ">";
        return n.subParser("hashBlock")(o, t, a);
      });
      function w(I) {
        var y, E;
        if (t.customizedHeaderId) {
          var P = I.match(/\{([^{]+?)}\s*$/);
          P && P[1] && (I = P[1]);
        }
        return y = I, n.helper.isString(t.prefixHeaderId) ? E = t.prefixHeaderId : t.prefixHeaderId === !0 ? E = "section-" : E = "", t.rawPrefixHeaderId || (y = E + y), t.ghCompatibleHeaderId ? y = y.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : t.rawHeaderId ? y = y.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : y = y.replace(/[^\w]/g, "").toLowerCase(), t.rawPrefixHeaderId && (y = E + y), a.hashLinkCounts[y] ? y = y + "-" + a.hashLinkCounts[y]++ : a.hashLinkCounts[y] = 1, y;
      }
      return e = a.converter._dispatch("headers.after", e, t, a), e;
    }), n.subParser("horizontalRule", function(e, t, a) {
      e = a.converter._dispatch("horizontalRule.before", e, t, a);
      var s = n.subParser("hashBlock")("<hr />", t, a);
      return e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, s), e = e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, s), e = e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, s), e = a.converter._dispatch("horizontalRule.after", e, t, a), e;
    }), n.subParser("images", function(e, t, a) {
      e = a.converter._dispatch("images.before", e, t, a);
      var s = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, p = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, v = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, h = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, w = /!\[([^\[\]]+)]()()()()()/g;
      function I(E, P, c, S, D, o, l, g) {
        return S = S.replace(/\s/g, ""), y(E, P, c, S, D, o, l, g);
      }
      function y(E, P, c, S, D, o, l, g) {
        var f = a.gUrls, u = a.gTitles, C = a.gDimensions;
        if (c = c.toLowerCase(), g || (g = ""), E.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          S = "";
        else if (S === "" || S === null)
          if ((c === "" || c === null) && (c = P.toLowerCase().replace(/ ?\n/g, " ")), S = "#" + c, !n.helper.isUndefined(f[c]))
            S = f[c], n.helper.isUndefined(u[c]) || (g = u[c]), n.helper.isUndefined(C[c]) || (D = C[c].width, o = C[c].height);
          else
            return E;
        P = P.replace(/"/g, "&quot;").replace(n.helper.regexes.asteriskDashAndColon, n.helper.escapeCharactersCallback), S = S.replace(n.helper.regexes.asteriskDashAndColon, n.helper.escapeCharactersCallback);
        var O = '<img src="' + S + '" alt="' + P + '"';
        return g && n.helper.isString(g) && (g = g.replace(/"/g, "&quot;").replace(n.helper.regexes.asteriskDashAndColon, n.helper.escapeCharactersCallback), O += ' title="' + g + '"'), D && o && (D = D === "*" ? "auto" : D, o = o === "*" ? "auto" : o, O += ' width="' + D + '"', O += ' height="' + o + '"'), O += " />", O;
      }
      return e = e.replace(h, y), e = e.replace(v, I), e = e.replace(p, y), e = e.replace(s, y), e = e.replace(w, y), e = a.converter._dispatch("images.after", e, t, a), e;
    }), n.subParser("italicsAndBold", function(e, t, a) {
      e = a.converter._dispatch("italicsAndBold.before", e, t, a);
      function s(p, v, h) {
        return v + p + h;
      }
      return t.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(p, v) {
        return s(v, "<strong><em>", "</em></strong>");
      }), e = e.replace(/\b__(\S[\s\S]*?)__\b/g, function(p, v) {
        return s(v, "<strong>", "</strong>");
      }), e = e.replace(/\b_(\S[\s\S]*?)_\b/g, function(p, v) {
        return s(v, "<em>", "</em>");
      })) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(p, v) {
        return /\S$/.test(v) ? s(v, "<strong><em>", "</em></strong>") : p;
      }), e = e.replace(/__(\S[\s\S]*?)__/g, function(p, v) {
        return /\S$/.test(v) ? s(v, "<strong>", "</strong>") : p;
      }), e = e.replace(/_([^\s_][\s\S]*?)_/g, function(p, v) {
        return /\S$/.test(v) ? s(v, "<em>", "</em>") : p;
      })), t.literalMidWordAsterisks ? (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(p, v, h) {
        return s(h, v + "<strong><em>", "</em></strong>");
      }), e = e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(p, v, h) {
        return s(h, v + "<strong>", "</strong>");
      }), e = e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(p, v, h) {
        return s(h, v + "<em>", "</em>");
      })) : (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(p, v) {
        return /\S$/.test(v) ? s(v, "<strong><em>", "</em></strong>") : p;
      }), e = e.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(p, v) {
        return /\S$/.test(v) ? s(v, "<strong>", "</strong>") : p;
      }), e = e.replace(/\*([^\s*][\s\S]*?)\*/g, function(p, v) {
        return /\S$/.test(v) ? s(v, "<em>", "</em>") : p;
      })), e = a.converter._dispatch("italicsAndBold.after", e, t, a), e;
    }), n.subParser("lists", function(e, t, a) {
      function s(h, w) {
        a.gListLevel++, h = h.replace(/\n{2,}$/, `
`), h += "¨0";
        var I = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, y = /\n[ \t]*\n(?!¨0)/.test(h);
        return t.disableForced4SpacesIndentedSublists && (I = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), h = h.replace(I, function(E, P, c, S, D, o, l) {
          l = l && l.trim() !== "";
          var g = n.subParser("outdent")(D, t, a), f = "";
          return o && t.tasklists && (f = ' class="task-list-item" style="list-style-type: none;"', g = g.replace(/^[ \t]*\[(x|X| )?]/m, function() {
            var u = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            return l && (u += " checked"), u += ">", u;
          })), g = g.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(u) {
            return "¨A" + u;
          }), P || g.search(/\n{2,}/) > -1 ? (g = n.subParser("githubCodeBlocks")(g, t, a), g = n.subParser("blockGamut")(g, t, a)) : (g = n.subParser("lists")(g, t, a), g = g.replace(/\n$/, ""), g = n.subParser("hashHTMLBlocks")(g, t, a), g = g.replace(/\n\n+/g, `

`), y ? g = n.subParser("paragraphs")(g, t, a) : g = n.subParser("spanGamut")(g, t, a)), g = g.replace("¨A", ""), g = "<li" + f + ">" + g + `</li>
`, g;
        }), h = h.replace(/¨0/g, ""), a.gListLevel--, w && (h = h.replace(/\s+$/, "")), h;
      }
      function p(h, w) {
        if (w === "ol") {
          var I = h.match(/^ *(\d+)\./);
          if (I && I[1] !== "1")
            return ' start="' + I[1] + '"';
        }
        return "";
      }
      function v(h, w, I) {
        var y = t.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, E = t.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, P = w === "ul" ? y : E, c = "";
        if (h.search(P) !== -1)
          (function D(o) {
            var l = o.search(P), g = p(h, w);
            l !== -1 ? (c += `

<` + w + g + `>
` + s(o.slice(0, l), !!I) + "</" + w + `>
`, w = w === "ul" ? "ol" : "ul", P = w === "ul" ? y : E, D(o.slice(l))) : c += `

<` + w + g + `>
` + s(o, !!I) + "</" + w + `>
`;
          })(h);
        else {
          var S = p(h, w);
          c = `

<` + w + S + `>
` + s(h, !!I) + "</" + w + `>
`;
        }
        return c;
      }
      return e = a.converter._dispatch("lists.before", e, t, a), e += "¨0", a.gListLevel ? e = e.replace(
        /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(h, w, I) {
          var y = I.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return v(w, y, !0);
        }
      ) : e = e.replace(
        /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(h, w, I, y) {
          var E = y.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return v(I, E, !1);
        }
      ), e = e.replace(/¨0/, ""), e = a.converter._dispatch("lists.after", e, t, a), e;
    }), n.subParser("metadata", function(e, t, a) {
      if (!t.metadata)
        return e;
      e = a.converter._dispatch("metadata.before", e, t, a);
      function s(p) {
        a.metadata.raw = p, p = p.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), p = p.replace(/\n {4}/g, " "), p.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(v, h, w) {
          return a.metadata.parsed[h] = w, "";
        });
      }
      return e = e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(p, v, h) {
        return s(h), "¨M";
      }), e = e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(p, v, h) {
        return v && (a.metadata.format = v), s(h), "¨M";
      }), e = e.replace(/¨M/g, ""), e = a.converter._dispatch("metadata.after", e, t, a), e;
    }), n.subParser("outdent", function(e, t, a) {
      return e = a.converter._dispatch("outdent.before", e, t, a), e = e.replace(/^(\t|[ ]{1,4})/gm, "¨0"), e = e.replace(/¨0/g, ""), e = a.converter._dispatch("outdent.after", e, t, a), e;
    }), n.subParser("paragraphs", function(e, t, a) {
      e = a.converter._dispatch("paragraphs.before", e, t, a), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, "");
      for (var s = e.split(/\n{2,}/g), p = [], v = s.length, h = 0; h < v; h++) {
        var w = s[h];
        w.search(/¨(K|G)(\d+)\1/g) >= 0 ? p.push(w) : w.search(/\S/) >= 0 && (w = n.subParser("spanGamut")(w, t, a), w = w.replace(/^([ \t]*)/g, "<p>"), w += "</p>", p.push(w));
      }
      for (v = p.length, h = 0; h < v; h++) {
        for (var I = "", y = p[h], E = !1; /¨(K|G)(\d+)\1/.test(y); ) {
          var P = RegExp.$1, c = RegExp.$2;
          P === "K" ? I = a.gHtmlBlocks[c] : E ? I = n.subParser("encodeCode")(a.ghCodeBlocks[c].text, t, a) : I = a.ghCodeBlocks[c].codeblock, I = I.replace(/\$/g, "$$$$"), y = y.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, I), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(y) && (E = !0);
        }
        p[h] = y;
      }
      return e = p.join(`
`), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""), a.converter._dispatch("paragraphs.after", e, t, a);
    }), n.subParser("runExtension", function(e, t, a, s) {
      if (e.filter)
        t = e.filter(t, s.converter, a);
      else if (e.regex) {
        var p = e.regex;
        p instanceof RegExp || (p = new RegExp(p, "g")), t = t.replace(p, e.replace);
      }
      return t;
    }), n.subParser("spanGamut", function(e, t, a) {
      return e = a.converter._dispatch("spanGamut.before", e, t, a), e = n.subParser("codeSpans")(e, t, a), e = n.subParser("escapeSpecialCharsWithinTagAttributes")(e, t, a), e = n.subParser("encodeBackslashEscapes")(e, t, a), e = n.subParser("images")(e, t, a), e = n.subParser("anchors")(e, t, a), e = n.subParser("autoLinks")(e, t, a), e = n.subParser("simplifiedAutoLinks")(e, t, a), e = n.subParser("emoji")(e, t, a), e = n.subParser("underline")(e, t, a), e = n.subParser("italicsAndBold")(e, t, a), e = n.subParser("strikethrough")(e, t, a), e = n.subParser("ellipsis")(e, t, a), e = n.subParser("hashHTMLSpans")(e, t, a), e = n.subParser("encodeAmpsAndAngles")(e, t, a), t.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, `<br />
`)) : e = e.replace(/  +\n/g, `<br />
`), e = a.converter._dispatch("spanGamut.after", e, t, a), e;
    }), n.subParser("strikethrough", function(e, t, a) {
      function s(p) {
        return t.simplifiedAutoLink && (p = n.subParser("simplifiedAutoLinks")(p, t, a)), "<del>" + p + "</del>";
      }
      return t.strikethrough && (e = a.converter._dispatch("strikethrough.before", e, t, a), e = e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(p, v) {
        return s(v);
      }), e = a.converter._dispatch("strikethrough.after", e, t, a)), e;
    }), n.subParser("stripLinkDefinitions", function(e, t, a) {
      var s = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, p = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
      e += "¨0";
      var v = function(h, w, I, y, E, P, c) {
        return w = w.toLowerCase(), e.toLowerCase().split(w).length - 1 < 2 ? h : (I.match(/^data:.+?\/.+?;base64,/) ? a.gUrls[w] = I.replace(/\s/g, "") : a.gUrls[w] = n.subParser("encodeAmpsAndAngles")(I, t, a), P ? P + c : (c && (a.gTitles[w] = c.replace(/"|'/g, "&quot;")), t.parseImgDimensions && y && E && (a.gDimensions[w] = {
          width: y,
          height: E
        }), ""));
      };
      return e = e.replace(p, v), e = e.replace(s, v), e = e.replace(/¨0/, ""), e;
    }), n.subParser("tables", function(e, t, a) {
      if (!t.tables)
        return e;
      var s = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, p = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
      function v(E) {
        return /^:[ \t]*--*$/.test(E) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(E) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(E) ? ' style="text-align:center;"' : "";
      }
      function h(E, P) {
        var c = "";
        return E = E.trim(), (t.tablesHeaderId || t.tableHeaderId) && (c = ' id="' + E.replace(/ /g, "_").toLowerCase() + '"'), E = n.subParser("spanGamut")(E, t, a), "<th" + c + P + ">" + E + `</th>
`;
      }
      function w(E, P) {
        var c = n.subParser("spanGamut")(E, t, a);
        return "<td" + P + ">" + c + `</td>
`;
      }
      function I(E, P) {
        for (var c = `<table>
<thead>
<tr>
`, S = E.length, D = 0; D < S; ++D)
          c += E[D];
        for (c += `</tr>
</thead>
<tbody>
`, D = 0; D < P.length; ++D) {
          c += `<tr>
`;
          for (var o = 0; o < S; ++o)
            c += P[D][o];
          c += `</tr>
`;
        }
        return c += `</tbody>
</table>
`, c;
      }
      function y(E) {
        var P, c = E.split(`
`);
        for (P = 0; P < c.length; ++P)
          /^ {0,3}\|/.test(c[P]) && (c[P] = c[P].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(c[P]) && (c[P] = c[P].replace(/\|[ \t]*$/, "")), c[P] = n.subParser("codeSpans")(c[P], t, a);
        var S = c[0].split("|").map(function(O) {
          return O.trim();
        }), D = c[1].split("|").map(function(O) {
          return O.trim();
        }), o = [], l = [], g = [], f = [];
        for (c.shift(), c.shift(), P = 0; P < c.length; ++P)
          c[P].trim() !== "" && o.push(
            c[P].split("|").map(function(O) {
              return O.trim();
            })
          );
        if (S.length < D.length)
          return E;
        for (P = 0; P < D.length; ++P)
          g.push(v(D[P]));
        for (P = 0; P < S.length; ++P)
          n.helper.isUndefined(g[P]) && (g[P] = ""), l.push(h(S[P], g[P]));
        for (P = 0; P < o.length; ++P) {
          for (var u = [], C = 0; C < l.length; ++C)
            n.helper.isUndefined(o[P][C]), u.push(w(o[P][C], g[C]));
          f.push(u);
        }
        return I(l, f);
      }
      return e = a.converter._dispatch("tables.before", e, t, a), e = e.replace(/\\(\|)/g, n.helper.escapeCharactersCallback), e = e.replace(s, y), e = e.replace(p, y), e = a.converter._dispatch("tables.after", e, t, a), e;
    }), n.subParser("underline", function(e, t, a) {
      return t.underline && (e = a.converter._dispatch("underline.before", e, t, a), t.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(s, p) {
        return "<u>" + p + "</u>";
      }), e = e.replace(/\b__(\S[\s\S]*?)__\b/g, function(s, p) {
        return "<u>" + p + "</u>";
      })) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(s, p) {
        return /\S$/.test(p) ? "<u>" + p + "</u>" : s;
      }), e = e.replace(/__(\S[\s\S]*?)__/g, function(s, p) {
        return /\S$/.test(p) ? "<u>" + p + "</u>" : s;
      })), e = e.replace(/(_)/g, n.helper.escapeCharactersCallback), e = a.converter._dispatch("underline.after", e, t, a)), e;
    }), n.subParser("unescapeSpecialChars", function(e, t, a) {
      return e = a.converter._dispatch("unescapeSpecialChars.before", e, t, a), e = e.replace(/¨E(\d+)E/g, function(s, p) {
        var v = parseInt(p);
        return String.fromCharCode(v);
      }), e = a.converter._dispatch("unescapeSpecialChars.after", e, t, a), e;
    }), n.subParser("makeMarkdown.blockquote", function(e, t) {
      var a = "";
      if (e.hasChildNodes())
        for (var s = e.childNodes, p = s.length, v = 0; v < p; ++v) {
          var h = n.subParser("makeMarkdown.node")(s[v], t);
          h !== "" && (a += h);
        }
      return a = a.trim(), a = "> " + a.split(`
`).join(`
> `), a;
    }), n.subParser("makeMarkdown.codeBlock", function(e, t) {
      var a = e.getAttribute("language"), s = e.getAttribute("precodenum");
      return "```" + a + `
` + t.preList[s] + "\n```";
    }), n.subParser("makeMarkdown.codeSpan", function(e) {
      return "`" + e.innerHTML + "`";
    }), n.subParser("makeMarkdown.emphasis", function(e, t) {
      var a = "";
      if (e.hasChildNodes()) {
        a += "*";
        for (var s = e.childNodes, p = s.length, v = 0; v < p; ++v)
          a += n.subParser("makeMarkdown.node")(s[v], t);
        a += "*";
      }
      return a;
    }), n.subParser("makeMarkdown.header", function(e, t, a) {
      var s = new Array(a + 1).join("#"), p = "";
      if (e.hasChildNodes()) {
        p = s + " ";
        for (var v = e.childNodes, h = v.length, w = 0; w < h; ++w)
          p += n.subParser("makeMarkdown.node")(v[w], t);
      }
      return p;
    }), n.subParser("makeMarkdown.hr", function() {
      return "---";
    }), n.subParser("makeMarkdown.image", function(e) {
      var t = "";
      return e.hasAttribute("src") && (t += "![" + e.getAttribute("alt") + "](", t += "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (t += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")"), t;
    }), n.subParser("makeMarkdown.links", function(e, t) {
      var a = "";
      if (e.hasChildNodes() && e.hasAttribute("href")) {
        var s = e.childNodes, p = s.length;
        a = "[";
        for (var v = 0; v < p; ++v)
          a += n.subParser("makeMarkdown.node")(s[v], t);
        a += "](", a += "<" + e.getAttribute("href") + ">", e.hasAttribute("title") && (a += ' "' + e.getAttribute("title") + '"'), a += ")";
      }
      return a;
    }), n.subParser("makeMarkdown.list", function(e, t, a) {
      var s = "";
      if (!e.hasChildNodes())
        return "";
      for (var p = e.childNodes, v = p.length, h = e.getAttribute("start") || 1, w = 0; w < v; ++w)
        if (!(typeof p[w].tagName > "u" || p[w].tagName.toLowerCase() !== "li")) {
          var I = "";
          a === "ol" ? I = h.toString() + ". " : I = "- ", s += I + n.subParser("makeMarkdown.listItem")(p[w], t), ++h;
        }
      return s += `
<!-- -->
`, s.trim();
    }), n.subParser("makeMarkdown.listItem", function(e, t) {
      for (var a = "", s = e.childNodes, p = s.length, v = 0; v < p; ++v)
        a += n.subParser("makeMarkdown.node")(s[v], t);
      return /\n$/.test(a) ? a = a.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : a += `
`, a;
    }), n.subParser("makeMarkdown.node", function(e, t, a) {
      a = a || !1;
      var s = "";
      if (e.nodeType === 3)
        return n.subParser("makeMarkdown.txt")(e, t);
      if (e.nodeType === 8)
        return "<!--" + e.data + `-->

`;
      if (e.nodeType !== 1)
        return "";
      var p = e.tagName.toLowerCase();
      switch (p) {
        case "h1":
          a || (s = n.subParser("makeMarkdown.header")(e, t, 1) + `

`);
          break;
        case "h2":
          a || (s = n.subParser("makeMarkdown.header")(e, t, 2) + `

`);
          break;
        case "h3":
          a || (s = n.subParser("makeMarkdown.header")(e, t, 3) + `

`);
          break;
        case "h4":
          a || (s = n.subParser("makeMarkdown.header")(e, t, 4) + `

`);
          break;
        case "h5":
          a || (s = n.subParser("makeMarkdown.header")(e, t, 5) + `

`);
          break;
        case "h6":
          a || (s = n.subParser("makeMarkdown.header")(e, t, 6) + `

`);
          break;
        case "p":
          a || (s = n.subParser("makeMarkdown.paragraph")(e, t) + `

`);
          break;
        case "blockquote":
          a || (s = n.subParser("makeMarkdown.blockquote")(e, t) + `

`);
          break;
        case "hr":
          a || (s = n.subParser("makeMarkdown.hr")(e, t) + `

`);
          break;
        case "ol":
          a || (s = n.subParser("makeMarkdown.list")(e, t, "ol") + `

`);
          break;
        case "ul":
          a || (s = n.subParser("makeMarkdown.list")(e, t, "ul") + `

`);
          break;
        case "precode":
          a || (s = n.subParser("makeMarkdown.codeBlock")(e, t) + `

`);
          break;
        case "pre":
          a || (s = n.subParser("makeMarkdown.pre")(e, t) + `

`);
          break;
        case "table":
          a || (s = n.subParser("makeMarkdown.table")(e, t) + `

`);
          break;
        case "code":
          s = n.subParser("makeMarkdown.codeSpan")(e, t);
          break;
        case "em":
        case "i":
          s = n.subParser("makeMarkdown.emphasis")(e, t);
          break;
        case "strong":
        case "b":
          s = n.subParser("makeMarkdown.strong")(e, t);
          break;
        case "del":
          s = n.subParser("makeMarkdown.strikethrough")(e, t);
          break;
        case "a":
          s = n.subParser("makeMarkdown.links")(e, t);
          break;
        case "img":
          s = n.subParser("makeMarkdown.image")(e, t);
          break;
        default:
          s = e.outerHTML + `

`;
      }
      return s;
    }), n.subParser("makeMarkdown.paragraph", function(e, t) {
      var a = "";
      if (e.hasChildNodes())
        for (var s = e.childNodes, p = s.length, v = 0; v < p; ++v)
          a += n.subParser("makeMarkdown.node")(s[v], t);
      return a = a.trim(), a;
    }), n.subParser("makeMarkdown.pre", function(e, t) {
      var a = e.getAttribute("prenum");
      return "<pre>" + t.preList[a] + "</pre>";
    }), n.subParser("makeMarkdown.strikethrough", function(e, t) {
      var a = "";
      if (e.hasChildNodes()) {
        a += "~~";
        for (var s = e.childNodes, p = s.length, v = 0; v < p; ++v)
          a += n.subParser("makeMarkdown.node")(s[v], t);
        a += "~~";
      }
      return a;
    }), n.subParser("makeMarkdown.strong", function(e, t) {
      var a = "";
      if (e.hasChildNodes()) {
        a += "**";
        for (var s = e.childNodes, p = s.length, v = 0; v < p; ++v)
          a += n.subParser("makeMarkdown.node")(s[v], t);
        a += "**";
      }
      return a;
    }), n.subParser("makeMarkdown.table", function(e, t) {
      var a = "", s = [[], []], p = e.querySelectorAll("thead>tr>th"), v = e.querySelectorAll("tbody>tr"), h, w;
      for (h = 0; h < p.length; ++h) {
        var I = n.subParser("makeMarkdown.tableCell")(p[h], t), y = "---";
        if (p[h].hasAttribute("style")) {
          var E = p[h].getAttribute("style").toLowerCase().replace(/\s/g, "");
          switch (E) {
            case "text-align:left;":
              y = ":---";
              break;
            case "text-align:right;":
              y = "---:";
              break;
            case "text-align:center;":
              y = ":---:";
              break;
          }
        }
        s[0][h] = I.trim(), s[1][h] = y;
      }
      for (h = 0; h < v.length; ++h) {
        var P = s.push([]) - 1, c = v[h].getElementsByTagName("td");
        for (w = 0; w < p.length; ++w) {
          var S = " ";
          typeof c[w] < "u" && (S = n.subParser("makeMarkdown.tableCell")(c[w], t)), s[P].push(S);
        }
      }
      var D = 3;
      for (h = 0; h < s.length; ++h)
        for (w = 0; w < s[h].length; ++w) {
          var o = s[h][w].length;
          o > D && (D = o);
        }
      for (h = 0; h < s.length; ++h) {
        for (w = 0; w < s[h].length; ++w)
          h === 1 ? s[h][w].slice(-1) === ":" ? s[h][w] = n.helper.padEnd(s[h][w].slice(-1), D - 1, "-") + ":" : s[h][w] = n.helper.padEnd(s[h][w], D, "-") : s[h][w] = n.helper.padEnd(s[h][w], D);
        a += "| " + s[h].join(" | ") + ` |
`;
      }
      return a.trim();
    }), n.subParser("makeMarkdown.tableCell", function(e, t) {
      var a = "";
      if (!e.hasChildNodes())
        return "";
      for (var s = e.childNodes, p = s.length, v = 0; v < p; ++v)
        a += n.subParser("makeMarkdown.node")(s[v], t, !0);
      return a.trim();
    }), n.subParser("makeMarkdown.txt", function(e) {
      var t = e.nodeValue;
      return t = t.replace(/ +/g, " "), t = t.replace(/¨NBSP;/g, " "), t = n.helper.unescapeHTMLEntities(t), t = t.replace(/([*_~|`])/g, "\\$1"), t = t.replace(/^(\s*)>/g, "\\$1>"), t = t.replace(/^#/gm, "\\#"), t = t.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), t = t.replace(/^( {0,3}\d+)\./gm, "$1\\."), t = t.replace(/^( {0,3})([+-])/gm, "$1\\$2"), t = t.replace(/]([\s]*)\(/g, "\\]$1\\("), t = t.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), t;
    });
    var ae = this;
    r.exports ? r.exports = n : ae.showdown = n;
  }).call(Ga);
})(wa);
var du = wa.exports;
const ou = /* @__PURE__ */ Hn(du), su = (r) => ({ __html: r }), ba = (r, d) => {
  const i = [];
  return r.forEach((n) => {
    let _ = me.div`
      ${d}
    `;
    const b = `Container_${n}`;
    switch (n) {
      case "a":
        _ = me.a`
          ${d}
        `;
        break;
      case "p":
        _ = me.p`
          ${d}
        `;
        break;
      case "span":
        _ = me.span`
          ${d}
        `;
        break;
      case "label":
        _ = me.label`
          ${d}
        `;
        break;
      case "h1":
        _ = me.h1`
          ${d}
        `;
        break;
      case "h2":
        _ = me.h2`
          ${d}
        `;
        break;
      case "h3":
        _ = me.h3`
          ${d}
        `;
        break;
      case "h4":
        _ = me.h4`
          ${d}
        `;
        break;
      case "h5":
        _ = me.h5`
          ${d}
        `;
        break;
      case "strong":
        _ = me.strong`
          ${d}
        `;
        break;
      case "q":
        _ = me.q`
          ${d}
        `;
        break;
      case "li":
        _ = me.li`
          ${d}
        `;
        break;
      case "div":
        _ = me.div`
          ${d}
        `;
        break;
      case "ul":
        _ = me.ul`
          ${d}
        `;
        break;
      case "section":
        _ = me.section`
          ${d}
        `;
        break;
      case "article":
        _ = me.article`
          ${d}
        `;
        break;
    }
    i.push({ name: b, container: _ });
  }), i;
}, ya = (r, d) => {
  const i = r.findIndex((_) => _.name === `Container_${d}`);
  return i === -1 ? r[2].container : r[i].container;
}, iu = Qt`
  * {
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`, Jr = ({ children: r }) => /* @__PURE__ */ he.jsxs(he.Fragment, { children: [
  /* @__PURE__ */ he.jsx(iu, {}),
  r
] }), cu = ba(eu, uu), ka = Vn((r, d) => {
  const {
    children: i,
    className: n = "",
    tag: _ = "p",
    fontWeight: b,
    fontStyle: k,
    textDecoration: $,
    fontSize: M,
    color: z,
    lineHeight: B,
    textAlign: q,
    textTransform: Z,
    noParsed: ee = !1,
    fontFamily: Q,
    margin: Y,
    padding: se,
    $tablet: J,
    $desktop: G,
    themeColors: ae,
    ...e
  } = r, t = ya(cu, _), a = va(ae);
  if (typeof i != "string" || ee)
    return /* @__PURE__ */ he.jsx(Jr, { children: /* @__PURE__ */ he.jsx(
      t,
      {
        className: `text-element ${n}`,
        fontWeight: b,
        fontStyle: k,
        textDecoration: $,
        fontSize: M,
        lineHeight: B,
        color: z,
        ref: d,
        textAlign: q,
        tag: _,
        textTransform: Z,
        fontFamily: Q,
        margin: Y,
        padding: se,
        $tablet: J,
        $desktop: G,
        $actualColors: a,
        ...e,
        children: i
      }
    ) });
  const s = {
    type: "output",
    filter: function(h) {
      const w = /<\/?p[^>]*>/gi;
      return h.replace(w, "");
    }
  }, v = new ou.Converter({ extensions: [s] }).makeHtml(i);
  return /* @__PURE__ */ he.jsx(Jr, { children: /* @__PURE__ */ he.jsx(
    t,
    {
      dangerouslySetInnerHTML: su(v),
      className: `text-element ${n}`,
      fontWeight: b,
      fontStyle: k,
      textDecoration: $,
      color: z,
      fontSize: M,
      lineHeight: B,
      ref: d,
      textAlign: q,
      tag: _,
      textTransform: Z,
      fontFamily: Q,
      margin: Y,
      padding: se,
      $tablet: J,
      $desktop: G,
      $actualColors: a,
      ...e
    }
  ) });
});
ka.displayName = "Text";
const Tu = _e.memo(ka), lu = (r) => {
  const d = ga(r);
  return Pe`
    display: ${r.display || "flex"};
    background-image: url(${r.$backgroundImage});
    ${au(r, "background-image", "$backgroundImage")}
    ${nu(d, r)}
    ${d.map((i) => _a(r, dn(i), i))}
  `;
}, fu = ba(ru, lu), Sa = Vn((r, d) => {
  const {
    children: i,
    className: n = "",
    tag: _ = "div",
    $backgroundImage: b,
    $tablet: k,
    $desktop: $,
    ...M
  } = r, z = ya(fu, _);
  return /* @__PURE__ */ he.jsx(Jr, { children: /* @__PURE__ */ he.jsx(
    z,
    {
      className: `flex-element ${n}`,
      ref: d,
      $backgroundImage: b,
      $tablet: k,
      $desktop: $,
      ...M,
      children: i
    }
  ) });
});
Sa.displayName = "Flex";
const hu = _e.memo(Sa), pu = (r) => Pe`
    position: relative;
    display: flex;
    gap: 8px;
    width: ${r.width};
    border: 1px solid ${r.$actualColors.border};
    border-radius: 10px;
    background-color: ${r.disabled ? r.$actualColors.bgSoft : r.$actualColors.bgWhite};
    &:hover {
      outline: ${r.disabled ? "none" : `1px solid ${r.$actualColors.primaryHover}`};
    }
    &:focus,
    &:focus-within,
    &:-webkit-autofill {
      outline: 2px solid ${r.$actualColors.primaryFocus};
    }
  `, Ca = (r) => Pe`
    width: 100%;
    border: none;
    padding: 8px;
    color: ${r.disabled ? r.$actualColors.textDisabled : r.$actualColors.text};
    border-radius: 10px;
    text-overflow: ellipsis;
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${r.$actualColors.bgDisabled};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    &::placeholder {
      color: ${r.disabled ? r.$actualColors.textDisabled : r.$actualColors.textSoft};
    }
    &:focus {
      outline: none;
    }
    background-color: transparent;
  `, mu = (r) => Pe`
    resize: none;
    padding-top: 20px;
  `, gu = (r) => Pe`
    color: ${r.disabled ? r.$actualColors.textDisabled : r.$actualColors.text};
    position: absolute;
    padding: 8px 0 0 8px;
    width: 90%;
    font-size: 8px;
    border-radius: 10px 10px 0 0;
    background-color: ${r.disabled ? r.$actualColors.bgSoft : r.$actualColors.white};
  `, vu = (r) => Pe`
    cursor: ${r.disabled ? "default" : "pointer"};
    background-color: transparent;
    border: none;
    padding: 0 8px;
  `, _u = (r) => Pe`
    cursor: ${r.disabled ? "default" : "pointer"};
  `;
var Qr = { exports: {} }, zr, Dn;
function wu() {
  if (Dn) return zr;
  Dn = 1;
  function r(o) {
    return o && typeof o == "object" && "default" in o ? o.default : o;
  }
  var d = r(_e), i = Bn;
  function n(o, l) {
    for (var g = Object.getOwnPropertyNames(l), f = 0; f < g.length; f++) {
      var u = g[f], C = Object.getOwnPropertyDescriptor(l, u);
      C && C.configurable && o[u] === void 0 && Object.defineProperty(o, u, C);
    }
    return o;
  }
  function _() {
    return (_ = Object.assign || function(o) {
      for (var l = 1; l < arguments.length; l++) {
        var g = arguments[l];
        for (var f in g) Object.prototype.hasOwnProperty.call(g, f) && (o[f] = g[f]);
      }
      return o;
    }).apply(this, arguments);
  }
  function b(o, l) {
    o.prototype = Object.create(l.prototype), n(o.prototype.constructor = o, l);
  }
  function k(o, l) {
    if (o == null) return {};
    var g, f, u = {}, C = Object.keys(o);
    for (f = 0; f < C.length; f++) g = C[f], 0 <= l.indexOf(g) || (u[g] = o[g]);
    return u;
  }
  function $(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o;
  }
  var M = function(o, l, g, f, u, C, O, W) {
    if (!o) {
      var A;
      if (l === void 0) A = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var T = [g, f, u, C, O, W], L = 0;
        (A = new Error(l.replace(/%s/g, function() {
          return T[L++];
        }))).name = "Invariant Violation";
      }
      throw A.framesToPop = 1, A;
    }
  }, z = M;
  function B(o, l, g) {
    if ("selectionStart" in o && "selectionEnd" in o) o.selectionStart = l, o.selectionEnd = g;
    else {
      var f = o.createTextRange();
      f.collapse(!0), f.moveStart("character", l), f.moveEnd("character", g - l), f.select();
    }
  }
  function q(o) {
    var l = 0, g = 0;
    if ("selectionStart" in o && "selectionEnd" in o) l = o.selectionStart, g = o.selectionEnd;
    else {
      var f = document.selection.createRange();
      f.parentElement() === o && (l = -f.moveStart("character", -o.value.length), g = -f.moveEnd("character", -o.value.length));
    }
    return { start: l, end: g, length: g - l };
  }
  var Z = { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, ee = "_";
  function Q(o, l, g) {
    var f = "", u = "", C = null, O = [];
    if (l === void 0 && (l = ee), g == null && (g = Z), !o || typeof o != "string") return { maskChar: l, formatChars: g, mask: null, prefix: null, lastEditablePosition: null, permanents: [] };
    var W = !1;
    return o.split("").forEach(function(A) {
      W = !W && A === "\\" || (W || !g[A] ? (O.push(f.length), f.length === O.length - 1 && (u += A)) : C = f.length + 1, f += A, !1);
    }), { maskChar: l, formatChars: g, prefix: u, mask: f, lastEditablePosition: C, permanents: O };
  }
  function Y(o, l) {
    return o.permanents.indexOf(l) !== -1;
  }
  function se(o, l, g) {
    var f = o.mask, u = o.formatChars;
    if (!g) return !1;
    if (Y(o, l)) return f[l] === g;
    var C = u[f[l]];
    return new RegExp(C).test(g);
  }
  function J(o, l) {
    return l.split("").every(function(g, f) {
      return Y(o, f) || !se(o, f, g);
    });
  }
  function G(o, l) {
    var g = o.maskChar, f = o.prefix;
    if (!g) {
      for (; l.length > f.length && Y(o, l.length - 1); ) l = l.slice(0, l.length - 1);
      return l.length;
    }
    for (var u = f.length, C = l.length; C >= f.length; C--) {
      var O = l[C];
      if (!Y(o, C) && se(o, C, O)) {
        u = C + 1;
        break;
      }
    }
    return u;
  }
  function ae(o, l) {
    return G(o, l) === o.mask.length;
  }
  function e(o, l) {
    var g = o.maskChar, f = o.mask, u = o.prefix;
    if (!g) {
      for ((l = a(o, "", l, 0)).length < u.length && (l = u); l.length < f.length && Y(o, l.length); ) l += f[l.length];
      return l;
    }
    if (l) return a(o, e(o, ""), l, 0);
    for (var C = 0; C < f.length; C++) Y(o, C) ? l += f[C] : l += g;
    return l;
  }
  function t(o, l, g, f) {
    var u = g + f, C = o.maskChar, O = o.mask, W = o.prefix, A = l.split("");
    if (C) return A.map(function(L, V) {
      return V < g || u <= V ? L : Y(o, V) ? O[V] : C;
    }).join("");
    for (var T = u; T < A.length; T++) Y(o, T) && (A[T] = "");
    return g = Math.max(W.length, g), A.splice(g, u - g), l = A.join(""), e(o, l);
  }
  function a(o, l, g, f) {
    var u = o.mask, C = o.maskChar, O = o.prefix, W = g.split(""), A = ae(o, l);
    return !C && f > l.length && (l += u.slice(l.length, f)), W.every(function(T) {
      for (; x = T, Y(o, N = f) && x !== u[N]; ) {
        if (f >= l.length && (l += u[f]), L = T, V = f, C && Y(o, V) && L === C) return !0;
        if (++f >= u.length) return !1;
      }
      var L, V, N, x;
      return !se(o, f, T) && T !== C || (f < l.length ? l = C || A || f < O.length ? l.slice(0, f) + T + l.slice(f + 1) : (l = l.slice(0, f) + T + l.slice(f), e(o, l)) : C || (l += T), ++f < u.length);
    }), l;
  }
  function s(o, l, g, f) {
    var u = o.mask, C = o.maskChar, O = g.split(""), W = f;
    return O.every(function(A) {
      for (; L = A, Y(o, T = f) && L !== u[T]; ) if (++f >= u.length) return !1;
      var T, L;
      return (se(o, f, A) || A === C) && f++, f < u.length;
    }), f - W;
  }
  function p(o, l) {
    for (var g = l; 0 <= g; --g) if (!Y(o, g)) return g;
    return null;
  }
  function v(o, l) {
    for (var g = o.mask, f = l; f < g.length; ++f) if (!Y(o, f)) return f;
    return null;
  }
  function h(o) {
    return o || o === 0 ? o + "" : "";
  }
  function w(o, l, g, f, u) {
    var C = o.mask, O = o.prefix, W = o.lastEditablePosition, A = l, T = "", L = 0, V = 0, N = Math.min(u.start, g.start);
    return g.end > u.start ? V = (L = s(o, f, T = A.slice(u.start, g.end), N)) ? u.length : 0 : A.length < f.length && (V = f.length - A.length), A = f, V && (V === 1 && !u.length && (N = u.start === g.start ? v(o, g.start) : p(o, g.start)), A = t(o, A, N, V)), A = a(o, A, T, N), (N += L) >= C.length ? N = C.length : N < O.length && !L ? N = O.length : N >= O.length && N < W && L && (N = v(o, N)), T || (T = null), { value: A = e(o, A), enteredString: T, selection: { start: N, end: N } };
  }
  function I() {
    var o = new RegExp("windows", "i"), l = new RegExp("phone", "i"), g = navigator.userAgent;
    return o.test(g) && l.test(g);
  }
  function y(o) {
    return typeof o == "function";
  }
  function E() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  }
  function P() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
  }
  function c(o) {
    return (P() ? E() : function() {
      return setTimeout(o, 1e3 / 60);
    })(o);
  }
  function S(o) {
    (P() || clearTimeout)(o);
  }
  var D = function(o) {
    function l(f) {
      var u = o.call(this, f) || this;
      u.focused = !1, u.mounted = !1, u.previousSelection = null, u.selectionDeferId = null, u.saveSelectionLoopDeferId = null, u.saveSelectionLoop = function() {
        u.previousSelection = u.getSelection(), u.saveSelectionLoopDeferId = c(u.saveSelectionLoop);
      }, u.runSaveSelectionLoop = function() {
        u.saveSelectionLoopDeferId === null && u.saveSelectionLoop();
      }, u.stopSaveSelectionLoop = function() {
        u.saveSelectionLoopDeferId !== null && (S(u.saveSelectionLoopDeferId), u.saveSelectionLoopDeferId = null, u.previousSelection = null);
      }, u.getInputDOMNode = function() {
        if (!u.mounted) return null;
        var F = i.findDOMNode($($(u))), j = typeof window < "u" && F instanceof window.Element;
        if (F && !j) return null;
        if (F.nodeName !== "INPUT" && (F = F.querySelector("input")), !F) throw new Error("react-input-mask: inputComponent doesn't contain input node");
        return F;
      }, u.getInputValue = function() {
        var F = u.getInputDOMNode();
        return F ? F.value : null;
      }, u.setInputValue = function(F) {
        var j = u.getInputDOMNode();
        j && (u.value = F, j.value = F);
      }, u.setCursorToEnd = function() {
        var F = G(u.maskOptions, u.value), j = v(u.maskOptions, F);
        j !== null && u.setCursorPosition(j);
      }, u.setSelection = function(F, j, U) {
        U === void 0 && (U = {});
        var X = u.getInputDOMNode(), K = u.isFocused();
        X && K && (U.deferred || B(X, F, j), u.selectionDeferId !== null && S(u.selectionDeferId), u.selectionDeferId = c(function() {
          u.selectionDeferId = null, B(X, F, j);
        }), u.previousSelection = { start: F, end: j, length: Math.abs(j - F) });
      }, u.getSelection = function() {
        return q(u.getInputDOMNode());
      }, u.getCursorPosition = function() {
        return u.getSelection().start;
      }, u.setCursorPosition = function(F) {
        u.setSelection(F, F);
      }, u.isFocused = function() {
        return u.focused;
      }, u.getBeforeMaskedValueChangeConfig = function() {
        var F = u.maskOptions, j = F.mask, U = F.maskChar, X = F.permanents, K = F.formatChars;
        return { mask: j, maskChar: U, permanents: X, alwaysShowMask: !!u.props.alwaysShowMask, formatChars: K };
      }, u.isInputAutofilled = function(F, j, U, X) {
        var K = u.getInputDOMNode();
        try {
          if (K.matches(":-webkit-autofill")) return !0;
        } catch {
        }
        return !u.focused || X.end < U.length && j.end === F.length;
      }, u.onChange = function(F) {
        var j = $($(u)).beforePasteState, U = $($(u)).previousSelection, X = u.props.beforeMaskedValueChange, K = u.getInputValue(), ne = u.value, ue = u.getSelection();
        u.isInputAutofilled(K, ue, ne, U) && (ne = e(u.maskOptions, ""), U = { start: 0, end: 0, length: 0 }), j && (U = j.selection, ne = j.value, ue = { start: U.start + K.length, end: U.start + K.length, length: 0 }, K = ne.slice(0, U.start) + K + ne.slice(U.end), u.beforePasteState = null);
        var ie = w(u.maskOptions, K, ue, ne, U), ye = ie.enteredString, ge = ie.selection, Se = ie.value;
        if (y(X)) {
          var Me = X({ value: Se, selection: ge }, { value: ne, selection: U }, ye, u.getBeforeMaskedValueChangeConfig());
          Se = Me.value, ge = Me.selection;
        }
        u.setInputValue(Se), y(u.props.onChange) && u.props.onChange(F), u.isWindowsPhoneBrowser ? u.setSelection(ge.start, ge.end, { deferred: !0 }) : u.setSelection(ge.start, ge.end);
      }, u.onFocus = function(F) {
        var j = u.props.beforeMaskedValueChange, U = u.maskOptions, X = U.mask, K = U.prefix;
        if (u.focused = !0, u.mounted = !0, X) {
          if (u.value) G(u.maskOptions, u.value) < u.maskOptions.mask.length && u.setCursorToEnd();
          else {
            var ne = e(u.maskOptions, K), ue = e(u.maskOptions, ne), ie = G(u.maskOptions, ue), ye = v(u.maskOptions, ie), ge = { start: ye, end: ye };
            if (y(j)) {
              var Se = j({ value: ue, selection: ge }, { value: u.value, selection: null }, null, u.getBeforeMaskedValueChangeConfig());
              ue = Se.value, ge = Se.selection;
            }
            var Me = ue !== u.getInputValue();
            Me && u.setInputValue(ue), Me && y(u.props.onChange) && u.props.onChange(F), u.setSelection(ge.start, ge.end);
          }
          u.runSaveSelectionLoop();
        }
        y(u.props.onFocus) && u.props.onFocus(F);
      }, u.onBlur = function(F) {
        var j = u.props.beforeMaskedValueChange, U = u.maskOptions.mask;
        if (u.stopSaveSelectionLoop(), u.focused = !1, U && !u.props.alwaysShowMask && J(u.maskOptions, u.value)) {
          var X = "";
          y(j) && (X = j({ value: X, selection: null }, { value: u.value, selection: u.previousSelection }, null, u.getBeforeMaskedValueChangeConfig()).value);
          var K = X !== u.getInputValue();
          K && u.setInputValue(X), K && y(u.props.onChange) && u.props.onChange(F);
        }
        y(u.props.onBlur) && u.props.onBlur(F);
      }, u.onMouseDown = function(F) {
        if (!u.focused && document.addEventListener) {
          u.mouseDownX = F.clientX, u.mouseDownY = F.clientY, u.mouseDownTime = (/* @__PURE__ */ new Date()).getTime();
          var j = function U(X) {
            if (document.removeEventListener("mouseup", U), u.focused) {
              var K = Math.abs(X.clientX - u.mouseDownX), ne = Math.abs(X.clientY - u.mouseDownY), ue = Math.max(K, ne), ie = (/* @__PURE__ */ new Date()).getTime() - u.mouseDownTime;
              (ue <= 10 && ie <= 200 || ue <= 5 && ie <= 300) && u.setCursorToEnd();
            }
          };
          document.addEventListener("mouseup", j);
        }
        y(u.props.onMouseDown) && u.props.onMouseDown(F);
      }, u.onPaste = function(F) {
        y(u.props.onPaste) && u.props.onPaste(F), F.defaultPrevented || (u.beforePasteState = { value: u.getInputValue(), selection: u.getSelection() }, u.setInputValue(""));
      }, u.handleRef = function(F) {
        u.props.children == null && y(u.props.inputRef) && u.props.inputRef(F);
      };
      var C = f.mask, O = f.maskChar, W = f.formatChars, A = f.alwaysShowMask, T = f.beforeMaskedValueChange, L = f.defaultValue, V = f.value;
      u.maskOptions = Q(C, O, W), L == null && (L = ""), V == null && (V = L);
      var N = h(V);
      if (u.maskOptions.mask && (A || N) && (N = e(u.maskOptions, N), y(T))) {
        var x = f.value;
        f.value == null && (x = L), N = T({ value: N, selection: null }, { value: x = h(x), selection: null }, null, u.getBeforeMaskedValueChangeConfig()).value;
      }
      return u.value = N, u;
    }
    b(l, o);
    var g = l.prototype;
    return g.componentDidMount = function() {
      this.mounted = !0, this.getInputDOMNode() && (this.isWindowsPhoneBrowser = I(), this.maskOptions.mask && this.getInputValue() !== this.value && this.setInputValue(this.value));
    }, g.componentDidUpdate = function() {
      var f = this.previousSelection, u = this.props, C = u.beforeMaskedValueChange, O = u.alwaysShowMask, W = u.mask, A = u.maskChar, T = u.formatChars, L = this.maskOptions, V = O || this.isFocused(), N = this.props.value != null, x = N ? h(this.props.value) : this.value, F = f ? f.start : null;
      if (this.maskOptions = Q(W, A, T), this.maskOptions.mask) {
        !L.mask && this.isFocused() && this.runSaveSelectionLoop();
        var j = this.maskOptions.mask && this.maskOptions.mask !== L.mask;
        if (L.mask || N || (x = this.getInputValue()), (j || this.maskOptions.mask && (x || V)) && (x = e(this.maskOptions, x)), j) {
          var U = G(this.maskOptions, x);
          (F === null || U < F) && (F = ae(this.maskOptions, x) ? U : v(this.maskOptions, U));
        }
        !this.maskOptions.mask || !J(this.maskOptions, x) || V || N && this.props.value || (x = "");
        var X = { start: F, end: F };
        if (y(C)) {
          var K = C({ value: x, selection: X }, { value: this.value, selection: this.previousSelection }, null, this.getBeforeMaskedValueChangeConfig());
          x = K.value, X = K.selection;
        }
        this.value = x;
        var ne = this.getInputValue() !== this.value;
        ne ? (this.setInputValue(this.value), this.forceUpdate()) : j && this.forceUpdate();
        var ue = !1;
        X.start != null && X.end != null && (ue = !f || f.start !== X.start || f.end !== X.end), (ue || ne) && this.setSelection(X.start, X.end);
      } else L.mask && (this.stopSaveSelectionLoop(), this.forceUpdate());
    }, g.componentWillUnmount = function() {
      this.mounted = !1, this.selectionDeferId !== null && S(this.selectionDeferId), this.stopSaveSelectionLoop();
    }, g.render = function() {
      var f, u = this.props, C = (u.mask, u.alwaysShowMask, u.maskChar, u.formatChars, u.inputRef, u.beforeMaskedValueChange, u.children), O = k(u, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);
      if (C) {
        y(C) || z(!1);
        var W = ["onChange", "onPaste", "onMouseDown", "onFocus", "onBlur", "value", "disabled", "readOnly"], A = _({}, O);
        W.forEach(function(L) {
          return delete A[L];
        }), f = C(A), W.filter(function(L) {
          return f.props[L] != null && f.props[L] !== O[L];
        }).length && z(!1);
      } else f = d.createElement("input", _({ ref: this.handleRef }, O));
      var T = { onFocus: this.onFocus, onBlur: this.onBlur };
      return this.maskOptions.mask && (O.disabled || O.readOnly || (T.onChange = this.onChange, T.onPaste = this.onPaste, T.onMouseDown = this.onMouseDown), O.value != null && (T.value = this.value)), f = d.cloneElement(f, T);
    }, l;
  }(d.Component);
  return zr = D, zr;
}
var Dr, Ln;
function bu() {
  if (Ln) return Dr;
  Ln = 1;
  var r = function(d, i, n, _, b, k, $, M) {
    if (process.env.NODE_ENV !== "production" && i === void 0)
      throw new Error("invariant requires an error message argument");
    if (!d) {
      var z;
      if (i === void 0)
        z = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var B = [n, _, b, k, $, M], q = 0;
        z = new Error(
          i.replace(/%s/g, function() {
            return B[q++];
          })
        ), z.name = "Invariant Violation";
      }
      throw z.framesToPop = 1, z;
    }
  };
  return Dr = r, Dr;
}
var Lr, Nn;
function yu() {
  if (Nn) return Lr;
  Nn = 1;
  var r = process.env.NODE_ENV !== "production", d = function() {
  };
  if (r) {
    var i = function(_, b) {
      var k = arguments.length;
      b = new Array(k > 1 ? k - 1 : 0);
      for (var $ = 1; $ < k; $++)
        b[$ - 1] = arguments[$];
      var M = 0, z = "Warning: " + _.replace(/%s/g, function() {
        return b[M++];
      });
      typeof console < "u" && console.error(z);
      try {
        throw new Error(z);
      } catch {
      }
    };
    d = function(n, _, b) {
      var k = arguments.length;
      b = new Array(k > 2 ? k - 2 : 0);
      for (var $ = 2; $ < k; $++)
        b[$ - 2] = arguments[$];
      if (_ === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      n || i.apply(null, [_].concat(b));
    };
  }
  return Lr = d, Lr;
}
var Nr, Fn;
function ku() {
  if (Fn) return Nr;
  Fn = 1;
  function r(o) {
    return o && typeof o == "object" && "default" in o ? o.default : o;
  }
  var d = r(_e), i = Bn, n = r(bu()), _ = r(yu());
  function b(o, l) {
    for (var g = Object.getOwnPropertyNames(l), f = 0; f < g.length; f++) {
      var u = g[f], C = Object.getOwnPropertyDescriptor(l, u);
      C && C.configurable && o[u] === void 0 && Object.defineProperty(o, u, C);
    }
    return o;
  }
  function k() {
    return k = Object.assign || function(o) {
      for (var l = 1; l < arguments.length; l++) {
        var g = arguments[l];
        for (var f in g)
          Object.prototype.hasOwnProperty.call(g, f) && (o[f] = g[f]);
      }
      return o;
    }, k.apply(this, arguments);
  }
  function $(o, l) {
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, b(o, l);
  }
  function M(o, l) {
    if (o == null) return {};
    var g = {}, f = Object.keys(o), u, C;
    for (C = 0; C < f.length; C++)
      u = f[C], !(l.indexOf(u) >= 0) && (g[u] = o[u]);
    return g;
  }
  function z(o) {
    if (o === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o;
  }
  function B(o, l, g) {
    if ("selectionStart" in o && "selectionEnd" in o)
      o.selectionStart = l, o.selectionEnd = g;
    else {
      var f = o.createTextRange();
      f.collapse(!0), f.moveStart("character", l), f.moveEnd("character", g - l), f.select();
    }
  }
  function q(o) {
    var l = 0, g = 0;
    if ("selectionStart" in o && "selectionEnd" in o)
      l = o.selectionStart, g = o.selectionEnd;
    else {
      var f = document.selection.createRange();
      f.parentElement() === o && (l = -f.moveStart("character", -o.value.length), g = -f.moveEnd("character", -o.value.length));
    }
    return {
      start: l,
      end: g,
      length: g - l
    };
  }
  var Z = {
    9: "[0-9]",
    a: "[A-Za-z]",
    "*": "[A-Za-z0-9]"
  }, ee = "_";
  function Q(o, l, g) {
    var f = "", u = "", C = null, O = [];
    if (l === void 0 && (l = ee), g == null && (g = Z), !o || typeof o != "string")
      return {
        maskChar: l,
        formatChars: g,
        mask: null,
        prefix: null,
        lastEditablePosition: null,
        permanents: []
      };
    var W = !1;
    return o.split("").forEach(function(A) {
      !W && A === "\\" ? W = !0 : (W || !g[A] ? (O.push(f.length), f.length === O.length - 1 && (u += A)) : C = f.length + 1, f += A, W = !1);
    }), {
      maskChar: l,
      formatChars: g,
      prefix: u,
      mask: f,
      lastEditablePosition: C,
      permanents: O
    };
  }
  function Y(o, l) {
    return o.permanents.indexOf(l) !== -1;
  }
  function se(o, l, g) {
    var f = o.mask, u = o.formatChars;
    if (!g)
      return !1;
    if (Y(o, l))
      return f[l] === g;
    var C = f[l], O = u[C];
    return new RegExp(O).test(g);
  }
  function J(o, l) {
    return l.split("").every(function(g, f) {
      return Y(o, f) || !se(o, f, g);
    });
  }
  function G(o, l) {
    var g = o.maskChar, f = o.prefix;
    if (!g) {
      for (; l.length > f.length && Y(o, l.length - 1); )
        l = l.slice(0, l.length - 1);
      return l.length;
    }
    for (var u = f.length, C = l.length; C >= f.length; C--) {
      var O = l[C], W = !Y(o, C) && se(o, C, O);
      if (W) {
        u = C + 1;
        break;
      }
    }
    return u;
  }
  function ae(o, l) {
    return G(o, l) === o.mask.length;
  }
  function e(o, l) {
    var g = o.maskChar, f = o.mask, u = o.prefix;
    if (!g) {
      for (l = a(o, "", l, 0), l.length < u.length && (l = u); l.length < f.length && Y(o, l.length); )
        l += f[l.length];
      return l;
    }
    if (l) {
      var C = e(o, "");
      return a(o, C, l, 0);
    }
    for (var O = 0; O < f.length; O++)
      Y(o, O) ? l += f[O] : l += g;
    return l;
  }
  function t(o, l, g, f) {
    var u = g + f, C = o.maskChar, O = o.mask, W = o.prefix, A = l.split("");
    if (!C) {
      for (var T = u; T < A.length; T++)
        Y(o, T) && (A[T] = "");
      return g = Math.max(W.length, g), A.splice(g, u - g), l = A.join(""), e(o, l);
    }
    return A.map(function(L, V) {
      return V < g || V >= u ? L : Y(o, V) ? O[V] : C;
    }).join("");
  }
  function a(o, l, g, f) {
    var u = o.mask, C = o.maskChar, O = o.prefix, W = g.split(""), A = ae(o, l), T = function(N, x) {
      return !Y(o, N) || x === u[N];
    }, L = function(N, x) {
      return !C || !Y(o, x) || N !== C;
    };
    return !C && f > l.length && (l += u.slice(l.length, f)), W.every(function(V) {
      for (; !T(f, V); ) {
        if (f >= l.length && (l += u[f]), !L(V, f))
          return !0;
        if (f++, f >= u.length)
          return !1;
      }
      var N = se(o, f, V) || V === C;
      return N ? (f < l.length ? C || A || f < O.length ? l = l.slice(0, f) + V + l.slice(f + 1) : (l = l.slice(0, f) + V + l.slice(f), l = e(o, l)) : C || (l += V), f++, f < u.length) : !0;
    }), l;
  }
  function s(o, l, g, f) {
    var u = o.mask, C = o.maskChar, O = g.split(""), W = f, A = function(L, V) {
      return !Y(o, L) || V === u[L];
    };
    return O.every(function(T) {
      for (; !A(f, T); )
        if (f++, f >= u.length)
          return !1;
      var L = se(o, f, T) || T === C;
      return L && f++, f < u.length;
    }), f - W;
  }
  function p(o, l) {
    for (var g = l; g >= 0; --g)
      if (!Y(o, g))
        return g;
    return null;
  }
  function v(o, l) {
    for (var g = o.mask, f = l; f < g.length; ++f)
      if (!Y(o, f))
        return f;
    return null;
  }
  function h(o) {
    return !o && o !== 0 ? "" : o + "";
  }
  function w(o, l, g, f, u) {
    var C = o.mask, O = o.prefix, W = o.lastEditablePosition, A = l, T = "", L = 0, V = 0, N = Math.min(u.start, g.start);
    if (g.end > u.start ? (T = A.slice(u.start, g.end), L = s(o, f, T, N), L ? V = u.length : V = 0) : A.length < f.length && (V = f.length - A.length), A = f, V) {
      if (V === 1 && !u.length) {
        var x = u.start === g.start;
        N = x ? v(o, g.start) : p(o, g.start);
      }
      A = t(o, A, N, V);
    }
    return A = a(o, A, T, N), N = N + L, N >= C.length ? N = C.length : N < O.length && !L ? N = O.length : N >= O.length && N < W && L && (N = v(o, N)), A = e(o, A), T || (T = null), {
      value: A,
      enteredString: T,
      selection: {
        start: N,
        end: N
      }
    };
  }
  function I() {
    var o = new RegExp("windows", "i"), l = new RegExp("phone", "i"), g = navigator.userAgent;
    return o.test(g) && l.test(g);
  }
  function y(o) {
    return typeof o == "function";
  }
  function E() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  }
  function P() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
  }
  function c(o) {
    var l = !!P(), g;
    return l ? g = E() : g = function() {
      return setTimeout(o, 1e3 / 60);
    }, g(o);
  }
  function S(o) {
    var l = P() || clearTimeout;
    l(o);
  }
  var D = /* @__PURE__ */ function(o) {
    $(l, o);
    function l(f) {
      var u;
      u = o.call(this, f) || this, u.focused = !1, u.mounted = !1, u.previousSelection = null, u.selectionDeferId = null, u.saveSelectionLoopDeferId = null, u.saveSelectionLoop = function() {
        u.previousSelection = u.getSelection(), u.saveSelectionLoopDeferId = c(u.saveSelectionLoop);
      }, u.runSaveSelectionLoop = function() {
        u.saveSelectionLoopDeferId === null && u.saveSelectionLoop();
      }, u.stopSaveSelectionLoop = function() {
        u.saveSelectionLoopDeferId !== null && (S(u.saveSelectionLoopDeferId), u.saveSelectionLoopDeferId = null, u.previousSelection = null);
      }, u.getInputDOMNode = function() {
        if (!u.mounted)
          return null;
        var j = i.findDOMNode(z(z(u))), U = typeof window < "u" && j instanceof window.Element;
        if (j && !U)
          return null;
        if (j.nodeName !== "INPUT" && (j = j.querySelector("input")), !j)
          throw new Error("react-input-mask: inputComponent doesn't contain input node");
        return j;
      }, u.getInputValue = function() {
        var j = u.getInputDOMNode();
        return j ? j.value : null;
      }, u.setInputValue = function(j) {
        var U = u.getInputDOMNode();
        U && (u.value = j, U.value = j);
      }, u.setCursorToEnd = function() {
        var j = G(u.maskOptions, u.value), U = v(u.maskOptions, j);
        U !== null && u.setCursorPosition(U);
      }, u.setSelection = function(j, U, X) {
        X === void 0 && (X = {});
        var K = u.getInputDOMNode(), ne = u.isFocused();
        if (!(!K || !ne)) {
          var ue = X, ie = ue.deferred;
          ie || B(K, j, U), u.selectionDeferId !== null && S(u.selectionDeferId), u.selectionDeferId = c(function() {
            u.selectionDeferId = null, B(K, j, U);
          }), u.previousSelection = {
            start: j,
            end: U,
            length: Math.abs(U - j)
          };
        }
      }, u.getSelection = function() {
        var j = u.getInputDOMNode();
        return q(j);
      }, u.getCursorPosition = function() {
        return u.getSelection().start;
      }, u.setCursorPosition = function(j) {
        u.setSelection(j, j);
      }, u.isFocused = function() {
        return u.focused;
      }, u.getBeforeMaskedValueChangeConfig = function() {
        var j = u.maskOptions, U = j.mask, X = j.maskChar, K = j.permanents, ne = j.formatChars, ue = u.props.alwaysShowMask;
        return {
          mask: U,
          maskChar: X,
          permanents: K,
          alwaysShowMask: !!ue,
          formatChars: ne
        };
      }, u.isInputAutofilled = function(j, U, X, K) {
        var ne = u.getInputDOMNode();
        try {
          if (ne.matches(":-webkit-autofill"))
            return !0;
        } catch {
        }
        return u.focused ? K.end < X.length && U.end === j.length : !0;
      }, u.onChange = function(j) {
        var U = z(z(u)), X = U.beforePasteState, K = z(z(u)), ne = K.previousSelection, ue = u.props.beforeMaskedValueChange, ie = u.getInputValue(), ye = u.value, ge = u.getSelection();
        u.isInputAutofilled(ie, ge, ye, ne) && (ye = e(u.maskOptions, ""), ne = {
          start: 0,
          end: 0,
          length: 0
        }), X && (ne = X.selection, ye = X.value, ge = {
          start: ne.start + ie.length,
          end: ne.start + ie.length,
          length: 0
        }, ie = ye.slice(0, ne.start) + ie + ye.slice(ne.end), u.beforePasteState = null);
        var Se = w(u.maskOptions, ie, ge, ye, ne), Me = Se.enteredString, Ae = Se.selection, qe = Se.value;
        if (y(ue)) {
          var De = ue({
            value: qe,
            selection: Ae
          }, {
            value: ye,
            selection: ne
          }, Me, u.getBeforeMaskedValueChangeConfig());
          qe = De.value, Ae = De.selection;
        }
        u.setInputValue(qe), y(u.props.onChange) && u.props.onChange(j), u.isWindowsPhoneBrowser ? u.setSelection(Ae.start, Ae.end, {
          deferred: !0
        }) : u.setSelection(Ae.start, Ae.end);
      }, u.onFocus = function(j) {
        var U = u.props.beforeMaskedValueChange, X = u.maskOptions, K = X.mask, ne = X.prefix;
        if (u.focused = !0, u.mounted = !0, K) {
          if (u.value)
            G(u.maskOptions, u.value) < u.maskOptions.mask.length && u.setCursorToEnd();
          else {
            var ue = e(u.maskOptions, ne), ie = e(u.maskOptions, ue), ye = G(u.maskOptions, ie), ge = v(u.maskOptions, ye), Se = {
              start: ge,
              end: ge
            };
            if (y(U)) {
              var Me = U({
                value: ie,
                selection: Se
              }, {
                value: u.value,
                selection: null
              }, null, u.getBeforeMaskedValueChangeConfig());
              ie = Me.value, Se = Me.selection;
            }
            var Ae = ie !== u.getInputValue();
            Ae && u.setInputValue(ie), Ae && y(u.props.onChange) && u.props.onChange(j), u.setSelection(Se.start, Se.end);
          }
          u.runSaveSelectionLoop();
        }
        y(u.props.onFocus) && u.props.onFocus(j);
      }, u.onBlur = function(j) {
        var U = u.props.beforeMaskedValueChange, X = u.maskOptions.mask;
        if (u.stopSaveSelectionLoop(), u.focused = !1, X && !u.props.alwaysShowMask && J(u.maskOptions, u.value)) {
          var K = "";
          if (y(U)) {
            var ne = U({
              value: K,
              selection: null
            }, {
              value: u.value,
              selection: u.previousSelection
            }, null, u.getBeforeMaskedValueChangeConfig());
            K = ne.value;
          }
          var ue = K !== u.getInputValue();
          ue && u.setInputValue(K), ue && y(u.props.onChange) && u.props.onChange(j);
        }
        y(u.props.onBlur) && u.props.onBlur(j);
      }, u.onMouseDown = function(j) {
        if (!u.focused && document.addEventListener) {
          u.mouseDownX = j.clientX, u.mouseDownY = j.clientY, u.mouseDownTime = (/* @__PURE__ */ new Date()).getTime();
          var U = function X(K) {
            if (document.removeEventListener("mouseup", X), !!u.focused) {
              var ne = Math.abs(K.clientX - u.mouseDownX), ue = Math.abs(K.clientY - u.mouseDownY), ie = Math.max(ne, ue), ye = (/* @__PURE__ */ new Date()).getTime() - u.mouseDownTime;
              (ie <= 10 && ye <= 200 || ie <= 5 && ye <= 300) && u.setCursorToEnd();
            }
          };
          document.addEventListener("mouseup", U);
        }
        y(u.props.onMouseDown) && u.props.onMouseDown(j);
      }, u.onPaste = function(j) {
        y(u.props.onPaste) && u.props.onPaste(j), j.defaultPrevented || (u.beforePasteState = {
          value: u.getInputValue(),
          selection: u.getSelection()
        }, u.setInputValue(""));
      }, u.handleRef = function(j) {
        u.props.children == null && y(u.props.inputRef) && u.props.inputRef(j);
      };
      var C = f.mask, O = f.maskChar, W = f.formatChars, A = f.alwaysShowMask, T = f.beforeMaskedValueChange, L = f.defaultValue, V = f.value;
      u.maskOptions = Q(C, O, W), L == null && (L = ""), V == null && (V = L);
      var N = h(V);
      if (u.maskOptions.mask && (A || N) && (N = e(u.maskOptions, N), y(T))) {
        var x = f.value;
        f.value == null && (x = L), x = h(x);
        var F = T({
          value: N,
          selection: null
        }, {
          value: x,
          selection: null
        }, null, u.getBeforeMaskedValueChangeConfig());
        N = F.value;
      }
      return u.value = N, u;
    }
    var g = l.prototype;
    return g.componentDidMount = function() {
      this.mounted = !0, this.getInputDOMNode() && (this.isWindowsPhoneBrowser = I(), this.maskOptions.mask && this.getInputValue() !== this.value && this.setInputValue(this.value));
    }, g.componentDidUpdate = function() {
      var u = this.previousSelection, C = this.props, O = C.beforeMaskedValueChange, W = C.alwaysShowMask, A = C.mask, T = C.maskChar, L = C.formatChars, V = this.maskOptions, N = W || this.isFocused(), x = this.props.value != null, F = x ? h(this.props.value) : this.value, j = u ? u.start : null;
      if (this.maskOptions = Q(A, T, L), this.maskOptions.mask)
        !V.mask && this.isFocused() && this.runSaveSelectionLoop();
      else {
        V.mask && (this.stopSaveSelectionLoop(), this.forceUpdate());
        return;
      }
      var U = this.maskOptions.mask && this.maskOptions.mask !== V.mask;
      if (!V.mask && !x && (F = this.getInputValue()), (U || this.maskOptions.mask && (F || N)) && (F = e(this.maskOptions, F)), U) {
        var X = G(this.maskOptions, F);
        (j === null || X < j) && (ae(this.maskOptions, F) ? j = X : j = v(this.maskOptions, X));
      }
      this.maskOptions.mask && J(this.maskOptions, F) && !N && (!x || !this.props.value) && (F = "");
      var K = {
        start: j,
        end: j
      };
      if (y(O)) {
        var ne = O({
          value: F,
          selection: K
        }, {
          value: this.value,
          selection: this.previousSelection
        }, null, this.getBeforeMaskedValueChangeConfig());
        F = ne.value, K = ne.selection;
      }
      this.value = F;
      var ue = this.getInputValue() !== this.value;
      ue ? (this.setInputValue(this.value), this.forceUpdate()) : U && this.forceUpdate();
      var ie = !1;
      K.start != null && K.end != null && (ie = !u || u.start !== K.start || u.end !== K.end), (ie || ue) && this.setSelection(K.start, K.end);
    }, g.componentWillUnmount = function() {
      this.mounted = !1, this.selectionDeferId !== null && S(this.selectionDeferId), this.stopSaveSelectionLoop();
    }, g.render = function() {
      var u = this.props, C = u.mask;
      u.alwaysShowMask;
      var O = u.maskChar, W = u.formatChars, A = u.inputRef;
      u.beforeMaskedValueChange;
      var T = u.children, L = M(u, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]), V;
      if (process.env.NODE_ENV !== "production" && _(
        // parse mask to test against actual mask prop as this.maskOptions
        // will be updated later in componentDidUpdate
        !L.maxLength || !Q(C, O, W).mask,
        "react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length."
      ), T) {
        y(T) || (process.env.NODE_ENV !== "production" ? n(!1, "react-input-mask: children must be a function") : n(!1));
        var N = ["onChange", "onPaste", "onMouseDown", "onFocus", "onBlur", "value", "disabled", "readOnly"], x = k({}, L);
        N.forEach(function(U) {
          return delete x[U];
        }), V = T(x);
        var F = N.filter(function(U) {
          return V.props[U] != null && V.props[U] !== L[U];
        });
        F.length && (process.env.NODE_ENV !== "production" ? n(!1, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + F.join(", ")) : n(!1)), process.env.NODE_ENV !== "production" && _(!A, "react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead");
      } else
        V = d.createElement("input", k({
          ref: this.handleRef
        }, L));
      var j = {
        onFocus: this.onFocus,
        onBlur: this.onBlur
      };
      return this.maskOptions.mask && (!L.disabled && !L.readOnly && (j.onChange = this.onChange, j.onPaste = this.onPaste, j.onMouseDown = this.onMouseDown), L.value != null && (j.value = this.value)), V = d.cloneElement(V, j), V;
    }, l;
  }(d.Component);
  return Nr = D, Nr;
}
process.env.NODE_ENV === "production" ? Qr.exports = wu() : Qr.exports = ku();
var Su = Qr.exports;
const Cu = /* @__PURE__ */ Hn(Su), Eu = me.div`
  ${pu}
`, Fr = me.input`
  ${Ca}
`, Pu = me.textarea`
  ${Ca}
  ${mu}
`, ju = me.label`
  ${_u}
`, Mu = me.span`
  ${gu}
`, Au = me.button`
  ${vu}
`, Vr = (r) => r < 10 && r > 0 ? `00${r}` : r >= 10 && r < 100 ? `0${r}` : r >= 100 ? `${r}` : "000", Ru = _e.forwardRef((r, d) => {
  const {
    autoComplete: i = !1,
    name: n,
    value: _,
    children: b,
    id: k,
    disabled: $,
    onChange: M,
    className: z,
    type: B = Oe.text,
    width: q = "100%",
    iconLeft: Z,
    iconRight: ee,
    placeholder: Q = "placeholder",
    maskChar: Y = "_",
    mask: se = "99-99-9999",
    maxLength: J,
    rows: G = "3",
    $ariaLabel: ae,
    $themeColors: e,
    rowLabel: t = !0,
    showLabel: a = !0,
    ...s
  } = r, p = va(e), [v, h] = _e.useState(""), [w, I] = _e.useState(!1), [y, E] = _e.useState(Vr(0));
  _e.useEffect(() => {
    if (h(_ || ""), _) {
      const c = Vr(_.length);
      E(c);
    }
  }, [_]);
  const P = (c) => {
    const S = Vr(c.target.value.length);
    E(S), h(c.target.value), M && M(c);
  };
  return /* @__PURE__ */ he.jsxs(
    hu,
    {
      $alignItems: t ? "center" : "flex-start",
      $gap: "0.5rem",
      "$flex-direction": t ? "row" : "column",
      children: [
        a && /* @__PURE__ */ he.jsx(
          ju,
          {
            className: `text-input-label ${z}`,
            htmlFor: k,
            $actualColors: p,
            children: b
          }
        ),
        /* @__PURE__ */ he.jsxs(
          Eu,
          {
            className: `text-input-container ${z}`,
            width: q,
            disabled: $,
            $actualColors: p,
            ...s,
            children: [
              B === Oe.textarea && /* @__PURE__ */ he.jsx(
                Pu,
                {
                  ref: d,
                  "aria-label": ae || Q,
                  placeholder: Q,
                  id: k,
                  name: n,
                  value: v,
                  onChange: P,
                  disabled: $,
                  autoComplete: i ? "on" : "off",
                  rows: G,
                  maxLength: J ? Number(J) : void 0,
                  $actualColors: p,
                  ...s
                }
              ),
              (B === Oe.text || B === Oe.number) && /* @__PURE__ */ he.jsx(
                Fr,
                {
                  ref: d,
                  id: k,
                  "aria-label": ae || Q,
                  placeholder: Q,
                  name: n,
                  value: v,
                  onChange: P,
                  disabled: $,
                  autoComplete: i ? "on" : "off",
                  maxLength: J ? Number(J) : void 0,
                  type: B,
                  $actualColors: p,
                  ...s
                }
              ),
              B === Oe.password && /* @__PURE__ */ he.jsxs(he.Fragment, { children: [
                /* @__PURE__ */ he.jsx(
                  Fr,
                  {
                    ref: d,
                    id: k,
                    "aria-label": ae || Q,
                    placeholder: Q,
                    name: n,
                    value: v,
                    onChange: P,
                    disabled: $,
                    autoComplete: i ? "on" : "off",
                    maxLength: J ? Number(J) : void 0,
                    type: w ? Oe.text : Oe.password,
                    $actualColors: p,
                    ...s
                  }
                ),
                /* @__PURE__ */ he.jsx(
                  Au,
                  {
                    onClick: () => {
                      $ || I((c) => !c);
                    },
                    disabled: $,
                    $actualColors: p,
                    children: w ? /* @__PURE__ */ he.jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 640 512",
                        fill: p.text,
                        width: "16",
                        height: "16",
                        children: /* @__PURE__ */ he.jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" })
                      }
                    ) : /* @__PURE__ */ he.jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 576 512",
                        fill: p.text,
                        width: "16",
                        height: "16",
                        children: /* @__PURE__ */ he.jsx("path", { d: "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" })
                      }
                    )
                  }
                )
              ] }),
              B === Oe.masked && /* @__PURE__ */ he.jsx(
                Cu,
                {
                  mask: se,
                  maskChar: Y,
                  value: v,
                  onChange: P,
                  disabled: $,
                  title: v,
                  ...s,
                  children: (c) => /* @__PURE__ */ he.jsx(
                    Fr,
                    {
                      ref: d,
                      id: k,
                      "aria-label": ae || Q,
                      placeholder: Q,
                      name: n,
                      autoComplete: i ? "on" : "off",
                      type: "text",
                      $actualColors: p,
                      ...c
                    }
                  )
                }
              ),
              B === Oe.textarea && /* @__PURE__ */ he.jsx(
                Mu,
                {
                  className: "counter",
                  disabled: $,
                  $actualColors: p,
                  children: J ? `${y}/${J}` : y
                }
              )
            ]
          }
        )
      ]
    }
  );
});
Ru.displayName = "Input";
const Ou = ({
  label: r,
  variant: d = "primary",
  onClick: i,
  className: n
}) => /* @__PURE__ */ he.jsx(
  "button",
  {
    onClick: i,
    className: `
        ${n}
        px-4 py-2 font-semibold rounded-lg transition
        ${d === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-black hover:bg-gray-400"}
      `,
    children: r
  }
);
export {
  Ou as Button,
  hu as Flex,
  Ru as Input,
  Tu as Text
};
