function Cg(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var hh = { exports: {} }, ge = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var mh;
function _g() {
  if (mh) return ge;
  mh = 1;
  var f = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), F = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), D = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), M = Symbol.for("react.view_transition"), re = Symbol.iterator;
  function le(d) {
    return d === null || typeof d != "object" ? null : (d = re && d[re] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, K = Object.assign, Q = {};
  function ke(d, L, U) {
    this.props = d, this.context = L, this.refs = Q, this.updater = U || H;
  }
  ke.prototype.isReactComponent = {}, ke.prototype.setState = function(d, L) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, L, "setState");
  }, ke.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function ae() {
  }
  ae.prototype = ke.prototype;
  function ee(d, L, U) {
    this.props = d, this.context = L, this.refs = Q, this.updater = U || H;
  }
  var ce = ee.prototype = new ae();
  ce.constructor = ee, K(ce, ke.prototype), ce.isPureReactComponent = !0;
  var se = Array.isArray;
  function G() {
  }
  var V = { H: null, A: null, T: null, S: null }, Se = Object.prototype.hasOwnProperty;
  function De(d, L, U) {
    var Y = U.ref;
    return { $$typeof: f, type: d, key: L, ref: Y !== void 0 ? Y : null, props: U };
  }
  function Je(d, L) {
    return De(d.type, L, d.props);
  }
  function Xe(d) {
    return typeof d == "object" && d !== null && d.$$typeof === f;
  }
  function dn(d) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(U) {
      return L[U];
    });
  }
  var Nn = /\/+/g;
  function nn(d, L) {
    return typeof d == "object" && d !== null && d.key != null ? dn("" + d.key) : L.toString(36);
  }
  function N(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(G, G) : (d.status = "pending", d.then(function(L) {
          d.status === "pending" && (d.status = "fulfilled", d.value = L);
        }, function(L) {
          d.status === "pending" && (d.status = "rejected", d.reason = L);
        })), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function X(d, L, U, Y, pe) {
    var ie = typeof d;
    (ie === "undefined" || ie === "boolean") && (d = null);
    var te = !1;
    if (d === null) te = !0;
    else switch (ie) {
      case "bigint":
      case "string":
      case "number":
        te = !0;
        break;
      case "object":
        switch (d.$$typeof) {
          case f:
          case E:
            te = !0;
            break;
          case O:
            return te = d._init, X(te(d._payload), L, U, Y, pe);
        }
    }
    if (te) return pe = pe(d), te = Y === "" ? "." + nn(d, 0) : Y, se(pe) ? (U = "", te != null && (U = te.replace(Nn, "$&/") + "/"), X(pe, L, U, "", function(R) {
      return R;
    })) : pe != null && (Xe(pe) && (pe = Je(pe, U + (pe.key == null || d && d.key === pe.key ? "" : ("" + pe.key).replace(Nn, "$&/") + "/") + te)), L.push(pe)), 1;
    te = 0;
    var B = Y === "" ? "." : Y + ":";
    if (se(d)) for (var ue = 0; ue < d.length; ue++) Y = d[ue], ie = B + nn(Y, ue), te += X(Y, L, U, ie, pe);
    else if (ue = le(d), typeof ue == "function") for (d = ue.call(d), ue = 0; !(Y = d.next()).done; ) Y = Y.value, ie = B + nn(Y, ue++), te += X(Y, L, U, ie, pe);
    else if (ie === "object") {
      if (typeof d.then == "function") return X(N(d), L, U, Y, pe);
      throw L = String(d), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    }
    return te;
  }
  function ne(d, L, U) {
    if (d == null) return d;
    var Y = [], pe = 0;
    return X(d, Y, "", "", function(ie) {
      return L.call(U, ie, pe++);
    }), Y;
  }
  function $e(d) {
    if (d._status === -1) {
      var L = d._result, U = L();
      U.then(function(Y) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = Y, U.status === void 0 && (U.status = "fulfilled", U.value = Y));
      }, function(Y) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = Y, U.status === void 0 && (U.status = "rejected", U.reason = Y));
      }), d._status === -1 && (d._status = 0, d._result = U);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var Ce = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d), error: d });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  };
  function an(d) {
    var L = V.T, U = {};
    U.types = L !== null ? L.types : null, V.T = U;
    try {
      var Y = d(), pe = V.S;
      pe !== null && pe(U, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(G, Ce);
    } catch (ie) {
      Ce(ie);
    } finally {
      L !== null && U.types !== null && (L.types = U.types), V.T = L;
    }
  }
  function An(d) {
    var L = V.T;
    if (L !== null) {
      var U = L.types;
      U === null ? L.types = [d] : U.indexOf(d) === -1 && U.push(d);
    } else an(An.bind(null, d));
  }
  var Tn = { map: ne, forEach: function(d, L, U) {
    ne(d, function() {
      L.apply(this, arguments);
    }, U);
  }, count: function(d) {
    var L = 0;
    return ne(d, function() {
      L++;
    }), L;
  }, toArray: function(d) {
    return ne(d, function(L) {
      return L;
    }) || [];
  }, only: function(d) {
    if (!Xe(d)) throw Error("React.Children.only expected to receive a single React element child.");
    return d;
  } };
  return ge.Activity = g, ge.Children = Tn, ge.Component = ke, ge.Fragment = k, ge.Profiler = T, ge.PureComponent = ee, ge.StrictMode = u, ge.Suspense = z, ge.ViewTransition = M, ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, ge.__COMPILER_RUNTIME = { __proto__: null, c: function(d) {
    return V.H.useMemoCache(d);
  } }, ge.addTransitionType = An, ge.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, ge.cacheSignal = function() {
    return null;
  }, ge.cloneElement = function(d, L, U) {
    if (d == null) throw Error("The argument must be a React element, but you passed " + d + ".");
    var Y = K({}, d.props), pe = d.key;
    if (L != null) for (ie in L.key !== void 0 && (pe = "" + L.key), L) !Se.call(L, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && L.ref === void 0 || (Y[ie] = L[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) Y.children = U;
    else if (1 < ie) {
      for (var te = Array(ie), B = 0; B < ie; B++) te[B] = arguments[B + 2];
      Y.children = te;
    }
    return De(d.type, pe, Y);
  }, ge.createContext = function(d) {
    return d = { $$typeof: F, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null }, d.Provider = d, d.Consumer = { $$typeof: P, _context: d }, d;
  }, ge.createElement = function(d, L, U) {
    var Y, pe = {}, ie = null;
    if (L != null) for (Y in L.key !== void 0 && (ie = "" + L.key), L) Se.call(L, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (pe[Y] = L[Y]);
    var te = arguments.length - 2;
    if (te === 1) pe.children = U;
    else if (1 < te) {
      for (var B = Array(te), ue = 0; ue < te; ue++) B[ue] = arguments[ue + 2];
      pe.children = B;
    }
    if (d && d.defaultProps) for (Y in te = d.defaultProps, te) pe[Y] === void 0 && (pe[Y] = te[Y]);
    return De(d, ie, pe);
  }, ge.createRef = function() {
    return { current: null };
  }, ge.forwardRef = function(d) {
    return { $$typeof: $, render: d };
  }, ge.isValidElement = Xe, ge.lazy = function(d) {
    return { $$typeof: O, _payload: { _status: -1, _result: d }, _init: $e };
  }, ge.memo = function(d, L) {
    return { $$typeof: D, type: d, compare: L === void 0 ? null : L };
  }, ge.startTransition = an, ge.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, ge.use = function(d) {
    return V.H.use(d);
  }, ge.useActionState = function(d, L, U) {
    return V.H.useActionState(d, L, U);
  }, ge.useCallback = function(d, L) {
    return V.H.useCallback(d, L);
  }, ge.useContext = function(d) {
    return V.H.useContext(d);
  }, ge.useDebugValue = function() {
  }, ge.useDeferredValue = function(d, L) {
    return V.H.useDeferredValue(d, L);
  }, ge.useEffect = function(d, L) {
    return V.H.useEffect(d, L);
  }, ge.useEffectEvent = function(d) {
    return V.H.useEffectEvent(d);
  }, ge.useId = function() {
    return V.H.useId();
  }, ge.useImperativeHandle = function(d, L, U) {
    return V.H.useImperativeHandle(d, L, U);
  }, ge.useInsertionEffect = function(d, L) {
    return V.H.useInsertionEffect(d, L);
  }, ge.useLayoutEffect = function(d, L) {
    return V.H.useLayoutEffect(d, L);
  }, ge.useMemo = function(d, L) {
    return V.H.useMemo(d, L);
  }, ge.useOptimistic = function(d, L) {
    return V.H.useOptimistic(d, L);
  }, ge.useReducer = function(d, L, U) {
    return V.H.useReducer(d, L, U);
  }, ge.useRef = function(d) {
    return V.H.useRef(d);
  }, ge.useState = function(d) {
    return V.H.useState(d);
  }, ge.useSyncExternalStore = function(d, L, U) {
    return V.H.useSyncExternalStore(d, L, U);
  }, ge.useTransition = function() {
    return V.H.useTransition();
  }, ge.version = "19.3.0", ge;
}
var gh;
function Us() {
  return gh || (gh = 1, hh.exports = _g()), hh.exports;
}
var Ie = Us();
const Bo = Cg(Ie);
var Ws = { exports: {} }, Ra = {}, yh = { exports: {} }, vh = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var bh;
function Pg() {
  return bh || (bh = 1, (function(f) {
    function E(N, X) {
      var ne = N.length;
      N.push(X);
      e: for (; 0 < ne; ) {
        var $e = ne - 1 >>> 1, Ce = N[$e];
        if (0 < T(Ce, X)) N[$e] = X, N[ne] = Ce, ne = $e;
        else break e;
      }
    }
    function k(N) {
      return N.length === 0 ? null : N[0];
    }
    function u(N) {
      if (N.length === 0) return null;
      var X = N[0], ne = N.pop();
      if (ne !== X) {
        N[0] = ne;
        e: for (var $e = 0, Ce = N.length, an = Ce >>> 1; $e < an; ) {
          var An = 2 * ($e + 1) - 1, Tn = N[An], d = An + 1, L = N[d];
          if (0 > T(Tn, ne)) d < Ce && 0 > T(L, Tn) ? (N[$e] = L, N[d] = ne, $e = d) : (N[$e] = Tn, N[An] = ne, $e = An);
          else if (d < Ce && 0 > T(L, ne)) N[$e] = L, N[d] = ne, $e = d;
          else break e;
        }
      }
      return X;
    }
    function T(N, X) {
      var ne = N.sortIndex - X.sortIndex;
      return ne !== 0 ? ne : N.id - X.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var P = performance;
      f.unstable_now = function() {
        return P.now();
      };
    } else {
      var F = Date, $ = F.now();
      f.unstable_now = function() {
        return F.now() - $;
      };
    }
    var z = [], D = [], O = 1, g = null, M = 3, re = !1, le = !1, H = !1, K = !1, Q = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
    function ee(N) {
      for (var X = k(D); X !== null; ) {
        if (X.callback === null) u(D);
        else if (X.startTime <= N) u(D), X.sortIndex = X.expirationTime, E(z, X);
        else break;
        X = k(D);
      }
    }
    function ce(N) {
      if (H = !1, ee(N), !le) if (k(z) !== null) le = !0, se || (se = !0, Xe());
      else {
        var X = k(D);
        X !== null && nn(ce, X.startTime - N);
      }
    }
    var se = !1, G = -1, V = 5, Se = -1;
    function De() {
      return K ? !0 : !(f.unstable_now() - Se < V);
    }
    function Je() {
      if (K = !1, se) {
        var N = f.unstable_now();
        Se = N;
        var X = !0;
        try {
          e: {
            le = !1, H && (H = !1, ke(G), G = -1), re = !0;
            var ne = M;
            try {
              n: {
                for (ee(N), g = k(z); g !== null && !(g.expirationTime > N && De()); ) {
                  var $e = g.callback;
                  if (typeof $e == "function") {
                    g.callback = null, M = g.priorityLevel;
                    var Ce = $e(g.expirationTime <= N);
                    if (N = f.unstable_now(), typeof Ce == "function") {
                      g.callback = Ce, ee(N), X = !0;
                      break n;
                    }
                    g === k(z) && u(z), ee(N);
                  } else u(z);
                  g = k(z);
                }
                if (g !== null) X = !0;
                else {
                  var an = k(D);
                  an !== null && nn(ce, an.startTime - N), X = !1;
                }
              }
              break e;
            } finally {
              g = null, M = ne, re = !1;
            }
            X = void 0;
          }
        } finally {
          X ? Xe() : se = !1;
        }
      }
    }
    var Xe;
    if (typeof ae == "function") Xe = function() {
      ae(Je);
    };
    else if (typeof MessageChannel < "u") {
      var dn = new MessageChannel(), Nn = dn.port2;
      dn.port1.onmessage = Je, Xe = function() {
        Nn.postMessage(null);
      };
    } else Xe = function() {
      Q(Je, 0);
    };
    function nn(N, X) {
      G = Q(function() {
        N(f.unstable_now());
      }, X);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, f.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < N ? Math.floor(1e3 / N) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, f.unstable_next = function(N) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = M;
      }
      var ne = M;
      M = X;
      try {
        return N();
      } finally {
        M = ne;
      }
    }, f.unstable_requestPaint = function() {
      K = !0;
    }, f.unstable_runWithPriority = function(N, X) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var ne = M;
      M = N;
      try {
        return X();
      } finally {
        M = ne;
      }
    }, f.unstable_scheduleCallback = function(N, X, ne) {
      var $e = f.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? $e + ne : $e) : ne = $e, N) {
        case 1:
          var Ce = -1;
          break;
        case 2:
          Ce = 250;
          break;
        case 5:
          Ce = 1073741823;
          break;
        case 4:
          Ce = 1e4;
          break;
        default:
          Ce = 5e3;
      }
      return Ce = ne + Ce, N = { id: O++, callback: X, priorityLevel: N, startTime: ne, expirationTime: Ce, sortIndex: -1 }, ne > $e ? (N.sortIndex = ne, E(D, N), k(z) === null && N === k(D) && (H ? (ke(G), G = -1) : H = !0, nn(ce, ne - $e))) : (N.sortIndex = Ce, E(z, N), le || re || (le = !0, se || (se = !0, Xe()))), N;
    }, f.unstable_shouldYield = De, f.unstable_wrapCallback = function(N) {
      var X = M;
      return function() {
        var ne = M;
        M = X;
        try {
          return N.apply(this, arguments);
        } finally {
          M = ne;
        }
      };
    };
  })(vh)), vh;
}
var wh;
function Lg() {
  return wh || (wh = 1, yh.exports = Pg()), yh.exports;
}
var Hs = { exports: {} }, Rn = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var kh;
function Og() {
  if (kh) return Rn;
  kh = 1;
  var f = Us();
  function E(O) {
    var g = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++) g += "&args[]=" + encodeURIComponent(arguments[M]);
    }
    return "Minified React error #" + O + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function k() {
  }
  var u = { d: { f: k, r: function() {
    throw Error(E(522));
  }, D: k, C: k, L: k, m: k, X: k, S: k, M: k }, p: 0, findDOMNode: null }, T = Symbol.for("react.portal"), P = Symbol.for("react.recoverable"), F = Symbol.for("react.optimistic_key");
  function $(O, g, M) {
    var re = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: re == null ? null : re === F ? F : "" + re, children: O, containerInfo: g, implementation: M };
  }
  var z = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function D(O, g) {
    if (O === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, Rn.browser = function(O) {
    return { $$typeof: P, _reason: O };
  }, Rn.createPortal = function(O, g) {
    var M = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(E(299));
    return $(O, g, null, M);
  }, Rn.flushSync = function(O) {
    var g = z.T, M = u.p;
    try {
      if (z.T = null, u.p = 2, O) return O();
    } finally {
      z.T = g, u.p = M, u.d.f();
    }
  }, Rn.preconnect = function(O, g) {
    typeof O == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, u.d.C(O, g));
  }, Rn.prefetchDNS = function(O) {
    typeof O == "string" && u.d.D(O);
  }, Rn.preinit = function(O, g) {
    if (typeof O == "string" && g && typeof g.as == "string") {
      var M = g.as, re = D(M, g.crossOrigin), le = typeof g.integrity == "string" ? g.integrity : void 0, H = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      M === "style" ? u.d.S(O, typeof g.precedence == "string" ? g.precedence : void 0, { crossOrigin: re, integrity: le, fetchPriority: H }) : M === "script" && u.d.X(O, { crossOrigin: re, integrity: le, fetchPriority: H, nonce: typeof g.nonce == "string" ? g.nonce : void 0 });
    }
  }, Rn.preinitModule = function(O, g) {
    if (typeof O == "string") if (typeof g == "object" && g !== null) {
      if (g.as == null || g.as === "script") {
        var M = D(g.as, g.crossOrigin);
        u.d.M(O, { crossOrigin: M, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0, fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0 });
      }
    } else g == null && u.d.M(O);
  }, Rn.preload = function(O, g) {
    if (typeof O == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var M = g.as, re = D(M, g.crossOrigin);
      u.d.L(O, M, { crossOrigin: re, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0, type: typeof g.type == "string" ? g.type : void 0, fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0, referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0, imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0, imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0, media: typeof g.media == "string" ? g.media : void 0 });
    }
  }, Rn.preloadModule = function(O, g) {
    if (typeof O == "string") if (g) {
      var M = D(g.as, g.crossOrigin);
      u.d.m(O, { as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0, crossOrigin: M, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0, fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0 });
    } else u.d.m(O);
  }, Rn.requestFormReset = function(O) {
    u.d.r(O);
  }, Rn.unstable_batchedUpdates = function(O, g) {
    return O(g);
  }, Rn.useFormState = function(O, g, M) {
    return z.H.useFormState(O, g, M);
  }, Rn.useFormStatus = function() {
    return z.H.useHostTransitionStatus();
  }, Rn.version = "19.3.0", Rn;
}
var Sh;
function Tg() {
  if (Sh) return Hs.exports;
  Sh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
    } catch (E) {
      console.error(E);
    }
  }
  return f(), Hs.exports = Og(), Hs.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var xh;
function zg() {
  if (xh) return Ra;
  xh = 1;
  var f = Lg(), E = Us(), k = Tg();
  function u(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function T(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function P(e) {
    for (var n = e, r = n; r && !r.alternate; ) n = r, (n.flags & 4098) !== 0 && (e = n.return), r = n.return;
    for (; n.return; ) n = n.return;
    return n.tag === 3 ? e : null;
  }
  function F(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function $(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function z(e) {
    if (P(e) !== e) throw Error(u(188));
  }
  function D(e) {
    var n = e.alternate;
    if (!n) {
      if (n = P(e), n === null) throw Error(u(188));
      return n !== e ? null : e;
    }
    for (var r = e, t = n; ; ) {
      var o = r.return;
      if (o === null) break;
      var a = o.alternate;
      if (a === null) {
        if (t = o.return, t !== null) {
          r = t;
          continue;
        }
        break;
      }
      if (o.child === a.child) {
        for (a = o.child; a; ) {
          if (a === r) return z(o), e;
          if (a === t) return z(o), n;
          a = a.sibling;
        }
        throw Error(u(188));
      }
      if (r.return !== t.return) r = o, t = a;
      else {
        for (var i = !1, l = o.child; l; ) {
          if (l === r) {
            i = !0, r = o, t = a;
            break;
          }
          if (l === t) {
            i = !0, t = o, r = a;
            break;
          }
          l = l.sibling;
        }
        if (!i) {
          for (l = a.child; l; ) {
            if (l === r) {
              i = !0, r = a, t = o;
              break;
            }
            if (l === t) {
              i = !0, t = a, r = o;
              break;
            }
            l = l.sibling;
          }
          if (!i) throw Error(u(189));
        }
      }
      if (r.alternate !== t) throw Error(u(190));
    }
    if (r.tag !== 3) throw Error(u(188));
    return r.stateNode.current === r ? e : n;
  }
  function O(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = O(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  function g(e, n, r, t, o, a) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && r(e, t, o, a) || (e.tag !== 22 || e.memoizedState === null) && (n || e.tag !== 5 && e.tag !== 27) && g(e.child, n, r, t, o, a)) return !0;
      e = e.sibling;
    }
    return !1;
  }
  function M(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function re(e) {
    var n = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (n = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); ) e = e.return;
    return n;
  }
  function le(e) {
    var n = [null, null], r = M(e);
    return r === null || H(n, e, r.child, { foundSelf: !1 }), n;
  }
  function H(e, n, r, t) {
    for (; r !== null; ) {
      if (r === n) t.foundSelf = !0;
      else if (r.tag === 5 || r.tag === 27 || r.tag === 6) {
        if (t.foundSelf) return e[1] = r, !0;
        e[0] = r;
      } else if ((r.tag !== 22 || r.memoizedState === null) && H(e, n, r.child, t)) return !0;
      r = r.sibling;
    }
    return !1;
  }
  function K(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(u(559));
    }
  }
  var Q = null, ke = null;
  function ae(e, n, r) {
    return e === r ? !0 : e === n ? (Q = e, !0) : !1;
  }
  function ee(e, n, r) {
    return e === r ? (ke = e, !1) : e === n ? (ke !== null && (Q = e), !0) : !1;
  }
  function ce(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function se(e, n, r) {
    for (var t = 0, o = e; o; o = r(o)) t++;
    o = 0;
    for (var a = n; a; a = r(a)) o++;
    for (; 0 < t - o; ) e = r(e), t--;
    for (; 0 < o - t; ) n = r(n), o--;
    for (; t--; ) {
      if (e === n || n !== null && e === n.alternate) return e;
      e = r(e), n = r(n);
    }
    return null;
  }
  var G = Object.assign, V = Symbol.for("react.element"), Se = Symbol.for("react.transitional.element"), De = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), dn = Symbol.for("react.profiler"), Nn = Symbol.for("react.consumer"), nn = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), $e = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), an = Symbol.for("react.activity"), An = Symbol.for("react.legacy_hidden"), Tn = Symbol.for("react.memo_cache_sentinel"), d = Symbol.for("react.view_transition"), L = Symbol.for("react.recoverable"), U = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var pe = Symbol.for("react.client.reference");
  function ie(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Je:
        return "Fragment";
      case dn:
        return "Profiler";
      case Xe:
        return "StrictMode";
      case X:
        return "Suspense";
      case ne:
        return "SuspenseList";
      case an:
        return "Activity";
      case d:
        return "ViewTransition";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case De:
        return "Portal";
      case nn:
        return e.displayName || "Context";
      case Nn:
        return (e._context.displayName || "Context") + ".Consumer";
      case N:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case $e:
        return n = e.displayName || null, n !== null ? n : ie(e.type) || "Memo";
      case Ce:
        n = e._payload, e = e._init;
        try {
          return ie(e(n));
        } catch {
        }
    }
    return null;
  }
  var te = Array.isArray, B = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = { pending: !1, data: null, method: null, action: null }, Zn = [], Jn = -1;
  function pn(e) {
    return { current: e };
  }
  function He(e) {
    0 > Jn || (e.current = Zn[Jn], Zn[Jn] = null, Jn--);
  }
  function ve(e, n) {
    Jn++, Zn[Jn] = e.current, e.current = n;
  }
  var je = pn(null), Ye = pn(null), gn = pn(null), un = pn(null);
  function $r(e, n) {
    switch (ve(gn, n), ve(Ye, e), ve(je, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? xp(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI) n = xp(n), e = Ep(n, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    He(je), ve(je, e);
  }
  function vr() {
    He(je), He(Ye), He(gn);
  }
  function he(e) {
    var n = e.memoizedState;
    n !== null && (Wo._currentValue = n.memoizedState, ve(un, e)), n = je.current;
    var r = Ep(n, e.type);
    n !== r && (ve(Ye, e), ve(je, r));
  }
  function _e(e) {
    Ye.current === e && (He(je), He(Ye)), un.current === e && (He(un), Wo._currentValue = R);
  }
  var sr, er;
  function Bn(e) {
    if (sr === void 0) try {
      throw Error();
    } catch (r) {
      var n = r.stack.trim().match(/\n( *(at )?)/);
      sr = n && n[1] || "", er = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + sr + e + er;
  }
  var I = !1;
  function de(e, n) {
    if (!e || I) return "";
    I = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var t = { DetermineComponentFrameRoot: function() {
        try {
          if (n) {
            var x = function() {
              throw Error();
            };
            if (Object.defineProperty(x.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(x, []);
              } catch (j) {
                var p = j;
              }
              Reflect.construct(e, [], x);
            } else {
              try {
                x.call();
              } catch (j) {
                p = j;
              }
              x = !1;
              try {
                var v = Object.getOwnPropertyDescriptor(e.prototype, "props");
                Object.defineProperty(e.prototype, "props", { configurable: !0, set: function() {
                  throw Error();
                } }), x = !0, new e();
              } finally {
                x && (v !== void 0 ? Object.defineProperty(e.prototype, "props", v) : delete e.prototype.props);
              }
            }
          } else {
            try {
              throw Error();
            } catch (j) {
              p = j;
            }
            (x = e()) && typeof x.catch == "function" && x.catch(function() {
            });
          }
        } catch (j) {
          if (j && p && typeof j.stack == "string") return [j.stack, p.stack];
        }
        return [null, null];
      } };
      t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot, "name");
      o && o.configurable && Object.defineProperty(t.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var a = t.DetermineComponentFrameRoot(), i = a[0], l = a[1];
      if (i && l) {
        var s = i.split(`
`), m = l.split(`
`);
        for (o = t = 0; t < s.length && !s[t].includes("DetermineComponentFrameRoot"); ) t++;
        for (; o < m.length && !m[o].includes("DetermineComponentFrameRoot"); ) o++;
        if (t === s.length || o === m.length) for (t = s.length - 1, o = m.length - 1; 1 <= t && 0 <= o && s[t] !== m[o]; ) o--;
        for (; 1 <= t && 0 <= o; t--, o--) if (s[t] !== m[o]) {
          if (t !== 1 || o !== 1) do
            if (t--, o--, 0 > o || s[t] !== m[o]) {
              var b = `
` + s[t].replace(" at new ", " at ");
              return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), b;
            }
          while (1 <= t && 0 <= o);
          break;
        }
      }
    } finally {
      I = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? Bn(r) : "";
  }
  function Ne(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Bn(e.type);
      case 16:
        return Bn("Lazy");
      case 13:
        return e.child !== n && n !== null ? Bn("Suspense Fallback") : Bn("Suspense");
      case 19:
        return Bn("SuspenseList");
      case 0:
      case 15:
        return de(e.type, !1);
      case 11:
        return de(e.type.render, !1);
      case 1:
        return de(e.type, !0);
      case 31:
        return Bn("Activity");
      case 30:
        return Bn("ViewTransition");
      default:
        return "";
    }
  }
  function sn(e) {
    try {
      var n = "", r = null;
      do
        n += Ne(e, r), r = e, e = e.return;
      while (e);
      return n;
    } catch (t) {
      return `
Error generating stack: ` + t.message + `
` + t.stack;
    }
  }
  var Oe = Object.prototype.hasOwnProperty, ye = f.unstable_scheduleCallback, xe = f.unstable_cancelCallback, Be = f.unstable_shouldYield, on = f.unstable_requestPaint, w = f.unstable_now, _ = f.unstable_getCurrentPriorityLevel, A = f.unstable_ImmediatePriority, J = f.unstable_UserBlockingPriority, W = f.unstable_NormalPriority, me = f.unstable_LowPriority, Te = f.unstable_IdlePriority, Fe = f.log, Re = f.unstable_setDisableYieldValue, bn = null, cn = null;
  function yn(e) {
    if (typeof Fe == "function" && Re(e), cn && typeof cn.setStrictMode == "function") try {
      cn.setStrictMode(bn, e);
    } catch {
    }
  }
  var wn = Math.clz32 ? Math.clz32 : _r, Ot = Math.log, eo = Math.LN2;
  function _r(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ot(e) / eo | 0) | 0;
  }
  var br = 256, Pr = 262144, $a = 4194304;
  function Tt(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Va(e, n, r) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var o = 0, a = e.suspendedLanes, i = e.pingedLanes;
    e = e.warmLanes;
    var l = t & 134217727;
    return l !== 0 ? (t = l & ~a, t !== 0 ? o = Tt(t) : (i &= l, i !== 0 ? o = Tt(i) : r || (r = l & ~e, r !== 0 && (o = Tt(r))))) : (l = t & ~a, l !== 0 ? o = Tt(l) : i !== 0 ? o = Tt(i) : r || (r = t & ~e, r !== 0 && (o = Tt(r)))), o === 0 ? 0 : n !== 0 && n !== o && (n & a) === 0 && (a = o & -o, r = n & -n, a >= r || a === 32 && (r & 4194048) !== 0) ? n : o;
  }
  function qo(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Qs(e, n) {
    (n & 8) !== 0 && (n |= n & 32);
    var r = e.entangledLanes;
    if (r !== 0) for (e = e.entanglements, r &= n; 0 < r; ) {
      var t = 31 - wn(r), o = 1 << t;
      n |= e[t], r &= ~o;
    }
    return n;
  }
  function $h(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xs() {
    var e = $a;
    return $a <<= 1, ($a & 62914560) === 0 && ($a = 4194304), e;
  }
  function hl(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function Go(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Vh(e, n, r, t, o, a) {
    var i = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var l = e.entanglements, s = e.expirationTimes, m = e.hiddenUpdates;
    for (r = i & ~r; 0 < r; ) {
      var b = 31 - wn(r), x = 1 << b;
      l[b] = 0, s[b] = -1;
      var p = m[b];
      if (p !== null) for (m[b] = null, b = 0; b < p.length; b++) {
        var v = p[b];
        v !== null && (v.lane &= -536870913);
      }
      r &= ~x;
    }
    t !== 0 && Ys(e, t, 0), a !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(i & ~n));
  }
  function Ys(e, n, r) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var t = 31 - wn(n);
    e.entangledLanes |= n, e.entanglements[t] = e.entanglements[t] | 1073741824 | r & 261930;
  }
  function Ks(e, n) {
    var r = e.entangledLanes |= n;
    for (e = e.entanglements; r; ) {
      var t = 31 - wn(r), o = 1 << t;
      o & n | e[t] & n && (e[t] |= n), r &= ~o;
    }
  }
  function Zs(e, n) {
    var r = n & -n;
    return r = (r & 42) !== 0 ? 1 : ml(r), (r & (e.suspendedLanes | n)) !== 0 ? 0 : r;
  }
  function ml(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function gl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Js() {
    var e = ue.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : lh(e.type));
  }
  function ec(e, n) {
    var r = ue.p;
    try {
      return ue.p = e, n();
    } finally {
      ue.p = r;
    }
  }
  var Vr = Math.random().toString(36).slice(2), zn = "__reactFiber$" + Vr, qn = "__reactProps$" + Vr, no = "__reactContainer$" + Vr, nc = "__reactEvents$" + Vr, Wh = "__reactListeners$" + Vr, Hh = "__reactHandles$" + Vr, rc = "__reactResources$" + Vr, Qo = "__reactMarker$" + Vr, Wa = "__reactLoad$" + Vr;
  function Ha(e) {
    delete e[zn], delete e[qn], delete e[Wh], delete e[Hh];
  }
  function zt(e) {
    var n;
    if (n = e[zn]) return n;
    for (var r = e.parentNode; r; ) {
      if (n = r[no] || r[zn]) {
        if (r = n.alternate, n.child !== null || r !== null && r.child !== null) for (e = Vp(e); e !== null; ) {
          if (r = e[zn]) return r;
          e = Vp(e);
        }
        return n;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function ro(e) {
    if (e = e[zn] || e[no]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return e;
    }
    return null;
  }
  function Xo(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(u(33));
  }
  function to(e) {
    var n = e[rc];
    return n || (n = e[rc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function _n(e) {
    e[Qo] = !0;
  }
  function tc(e) {
    e[Wa] = void 0;
  }
  var oc = /* @__PURE__ */ new Set(), ac = {};
  function Mt(e, n) {
    oo(e, n), oo(e + "Capture", n);
  }
  function oo(e, n) {
    for (ac[e] = n, e = 0; e < n.length; e++) oc.add(n[e]);
  }
  var Uh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ic = {}, lc = {};
  function Bh(e) {
    return Oe.call(lc, e) ? !0 : Oe.call(ic, e) ? !1 : Uh.test(e) ? lc[e] = !0 : (ic[e] = !0, !1);
  }
  var Ve = !1;
  function uc() {
    var e = Ve;
    return Ve = !1, e;
  }
  function Ua(e, n, r) {
    if (Bh(n)) if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(n);
          return;
        case "boolean":
          var t = n.toLowerCase().slice(0, 5);
          if (t !== "data-" && t !== "aria-") {
            e.removeAttribute(n);
            return;
          }
      }
      e.setAttribute(n, r);
    }
  }
  function Ba(e, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, r);
    }
  }
  function Wr(e, n, r, t) {
    if (t === null) e.removeAttribute(r);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(n, r, t);
    }
  }
  function nr(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function sc(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function qh(e, n, r) {
    var t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var o = t.get, a = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(i) {
        r = "" + i, a.call(this, i);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function yl(e) {
    if (!e._valueTracker) {
      var n = sc(e) ? "checked" : "value";
      e._valueTracker = qh(e, n, "" + e[n]);
    }
  }
  function cc(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(), t = "";
    return e && (t = sc(e) ? e.checked ? "true" : "false" : e.value), e = t, e !== r ? (n.setValue(e), !0) : !1;
  }
  var Gh = /[\n"\\]/g;
  function wr(e) {
    return e.replace(Gh, function(n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function vl(e, n, r, t, o, a, i, l) {
    e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), n != null ? i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + nr(n)) : e.value !== "" + nr(n) && (e.value = "" + nr(n)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), n != null ? i === "number" && e.value == n ? bl(e, nr(e.value)) : bl(e, nr(n)) : r != null ? bl(e, nr(r)) : t != null && e.removeAttribute("value"), o == null && a != null && (e.defaultChecked = !!a), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), l != null && typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" ? e.name = "" + nr(l) : e.removeAttribute("name");
  }
  function fc(e, n, r, t, o, a, i, l) {
    if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), n != null || r != null) {
      if (!(a !== "submit" && a !== "reset" || n != null)) {
        yl(e);
        return;
      }
      r = r != null ? "" + nr(r) : "", n = n != null ? "" + nr(n) : r, l || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = t ?? o, t = typeof t != "function" && typeof t != "symbol" && !!t, e.checked = l ? e.checked : !!t, e.defaultChecked = !!t, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i), yl(e);
  }
  function bl(e, n) {
    e.defaultValue !== "" + n && (e.defaultValue = "" + n);
  }
  function ao(e, n, r, t) {
    if (e = e.options, n) {
      n = {};
      for (var o = 0; o < r.length; o++) n["$" + r[o]] = !0;
      for (r = 0; r < e.length; r++) o = n.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && t && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + nr(r), n = null, o = 0; o < e.length; o++) {
        if (e[o].value === r) {
          e[o].selected = !0, t && (e[o].defaultSelected = !0);
          return;
        }
        n !== null || e[o].disabled || (n = e[o]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function dc(e, n, r) {
    if (n != null && (n = "" + nr(n), n !== e.value && (e.value = n), r == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? "" + nr(r) : "";
  }
  function pc(e, n, r, t) {
    if (n == null) {
      if (t != null) {
        if (r != null) throw Error(u(92));
        if (te(t)) {
          if (1 < t.length) throw Error(u(93));
          t = t[0];
        }
        r = t;
      }
      r == null && (r = ""), n = r;
    }
    r = nr(n), e.defaultValue = r, t = e.textContent, t === r && t !== "" && t !== null && (e.value = t), yl(e);
  }
  function io(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Qh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function hc(e, n, r) {
    var t = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? t ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : t ? e.setProperty(n, r) : typeof r != "number" || r === 0 || Qh.has(n) ? n === "float" ? e.cssFloat = r : e[n] = ("" + r).trim() : e[n] = r + "px";
  }
  function mc(e, n, r) {
    if (n != null && typeof n != "object") throw Error(u(62));
    if (e = e.style, r != null) {
      for (var t in r) !r.hasOwnProperty(t) || n != null && n.hasOwnProperty(t) || (t.indexOf("--") === 0 ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "", Ve = !0);
      for (var o in n) t = n[o], n.hasOwnProperty(o) && r[o] !== t && (hc(e, o, t), Ve = !0);
    } else for (var a in n) n.hasOwnProperty(a) && hc(e, a, n[a]);
  }
  function wl(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Xh = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["maskType", "mask-type"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Yh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qa(e) {
    return Yh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Lr() {
  }
  var kl = null;
  function Sl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var lo = null, uo = null;
  function gc(e) {
    var n = ro(e);
    if (n && (e = n.stateNode)) {
      var r = e[qn] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (vl(e, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name), n = r.name, r.type === "radio" && n != null) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll('input[name="' + wr("" + n) + '"][type="radio"]'), n = 0; n < r.length; n++) {
              var t = r[n];
              if (t !== e && t.form === e.form) {
                var o = t[qn] || null;
                if (!o) throw Error(u(90));
                vl(t, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
              }
            }
            for (n = 0; n < r.length; n++) t = r[n], t.form === e.form && cc(t);
          }
          break e;
        case "textarea":
          dc(e, r.value, r.defaultValue);
          break e;
        case "select":
          n = r.value, n != null && ao(e, !!r.multiple, n, !1);
      }
    }
  }
  var xl = !1;
  function yc(e, n, r) {
    if (xl) return e(n, r);
    xl = !0;
    try {
      var t = e(n);
      return t;
    } finally {
      if (xl = !1, (lo !== null || uo !== null) && (Bi(), lo && (n = lo, e = uo, uo = lo = null, gc(n), e))) for (n = 0; n < e.length; n++) gc(e[n]);
    }
  }
  function Yo(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var t = r[qn] || null;
    if (t === null) return null;
    r = t[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (t = !t.disabled) || (e = e.type, t = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !t;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(u(231, n, typeof r));
    return r;
  }
  var Hr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), El = !1;
  if (Hr) try {
    var Ko = {};
    Object.defineProperty(Ko, "passive", { get: function() {
      El = !0;
    } }), window.addEventListener("test", Ko, Ko), window.removeEventListener("test", Ko, Ko);
  } catch {
    El = !1;
  }
  var rt = null, Nl = null, Ga = null;
  function vc() {
    if (Ga) return Ga;
    var e, n = Nl, r = n.length, t, o = "value" in rt ? rt.value : rt.textContent, a = o.length;
    for (e = 0; e < r && n[e] === o[e]; e++) ;
    var i = r - e;
    for (t = 1; t <= i && n[r - t] === o[a - t]; t++) ;
    return Ga = o.slice(e, 1 < t ? 1 - t : void 0);
  }
  function Qa(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Xa() {
    return !0;
  }
  function bc() {
    return !1;
  }
  function $n(e) {
    function n(r, t, o, a, i) {
      this._reactName = r, this._targetInst = o, this.type = t, this.nativeEvent = a, this.target = i, this.currentTarget = null;
      for (var l in e) e.hasOwnProperty(l) && (r = e[l], this[l] = r ? r(a) : a[l]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Xa : bc, this.isPropagationStopped = bc, this;
    }
    return G(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Xa);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Xa);
    }, persist: function() {
    }, isPersistent: Xa }), n;
  }
  var tt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ya = $n(tt), Zo = G({}, tt, { view: 0, detail: 0 }), Kh = $n(Zo), Cl, _l, Jo, Ka = G({}, Zo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ll, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Jo && (Jo && e.type === "mousemove" ? (Cl = e.screenX - Jo.screenX, _l = e.screenY - Jo.screenY) : _l = Cl = 0, Jo = e), Cl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : _l;
  } }), wc = $n(Ka), Zh = G({}, Ka, { dataTransfer: 0 }), Jh = $n(Zh), em = G({}, Zo, { relatedTarget: 0 }), Pl = $n(em), nm = G({}, tt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rm = $n(nm), tm = G({}, tt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), om = $n(tm), am = G({}, tt, { data: 0 }), kc = $n(am), im = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, lm = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, um = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function sm(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = um[e]) ? !!n[e] : !1;
  }
  function Ll() {
    return sm;
  }
  var cm = G({}, Zo, { key: function(e) {
    if (e.key) {
      var n = im[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Qa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lm[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ll, charCode: function(e) {
    return e.type === "keypress" ? Qa(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Qa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), fm = $n(cm), dm = G({}, Ka, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sc = $n(dm), pm = G({}, tt, { submitter: 0 }), hm = $n(pm), mm = G({}, Zo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ll }), gm = $n(mm), ym = G({}, tt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vm = $n(ym), bm = G({}, Ka, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), wm = $n(bm), km = G({}, tt, { newState: 0, oldState: 0, source: 0 }), Sm = $n(km), xm = [9, 13, 27, 32], Ol = Hr && "CompositionEvent" in window, ea = null;
  Hr && "documentMode" in document && (ea = document.documentMode);
  var Em = Hr && "TextEvent" in window && !ea, xc = Hr && (!Ol || ea && 8 < ea && 11 >= ea), Ec = " ", Nc = !1;
  function Cc(e, n) {
    switch (e) {
      case "keyup":
        return xm.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _c(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var so = !1;
  function Nm(e, n) {
    switch (e) {
      case "compositionend":
        return _c(n);
      case "keypress":
        return n.which !== 32 ? null : (Nc = !0, Ec);
      case "textInput":
        return e = n.data, e === Ec && Nc ? null : e;
      default:
        return null;
    }
  }
  function Cm(e, n) {
    if (so) return e === "compositionend" || !Ol && Cc(e, n) ? (e = vc(), Ga = Nl = rt = null, so = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return xc && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var _m = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Pc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!_m[e.type] : n === "textarea";
  }
  function Lc(e, n, r, t) {
    lo ? uo ? uo.push(t) : uo = [t] : lo = t, n = Ki(n, "onChange"), 0 < n.length && (r = new Ya("onChange", "change", null, r, t), e.push({ event: r, listeners: n }));
  }
  var na = null, ra = null;
  function Pm(e) {
    yp(e, 0);
  }
  function Za(e) {
    var n = Xo(e);
    if (cc(n)) return e;
  }
  function Oc(e, n) {
    if (e === "change") return n;
  }
  var Tc = !1;
  if (Hr) {
    var Tl;
    if (Hr) {
      var zl = "oninput" in document;
      if (!zl) {
        var zc = document.createElement("div");
        zc.setAttribute("oninput", "return;"), zl = typeof zc.oninput == "function";
      }
      Tl = zl;
    } else Tl = !1;
    Tc = Tl && (!document.documentMode || 9 < document.documentMode);
  }
  function Mc() {
    na && (na.detachEvent("onpropertychange", Ic), ra = na = null);
  }
  function Ic(e) {
    if (e.propertyName === "value" && Za(ra)) {
      var n = [];
      Lc(n, ra, e, Sl(e)), yc(Pm, n);
    }
  }
  function Lm(e, n, r) {
    e === "focusin" ? (Mc(), na = n, ra = r, na.attachEvent("onpropertychange", Ic)) : e === "focusout" && Mc();
  }
  function Om(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Za(ra);
  }
  function Tm(e, n) {
    if (e === "click") return Za(n);
  }
  function zm(e, n) {
    if (e === "input" || e === "change") return Za(n);
  }
  function Mm(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var rr = typeof Object.is == "function" ? Object.is : Mm;
  function ta(e, n) {
    if (rr(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var r = Object.keys(e), t = Object.keys(n);
    if (r.length !== t.length) return !1;
    for (t = 0; t < r.length; t++) {
      var o = r[t];
      if (!Oe.call(n, o) || !rr(e[o], n[o])) return !1;
    }
    return !0;
  }
  function Ml(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Dc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fc(e, n) {
    var r = Dc(e);
    e = 0;
    for (var t; r; ) {
      if (r.nodeType === 3) {
        if (t = e + r.textContent.length, e <= n && t >= n) return { node: r, offset: n - e };
        e = t;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Dc(r);
    }
  }
  function jc(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? jc(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Rc(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = Ml(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = Ml(e.document);
    }
    return n;
  }
  function Il(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Im = Hr && "documentMode" in document && 11 >= document.documentMode, co = null, Dl = null, oa = null, Fl = !1;
  function Ac(e, n, r) {
    var t = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Fl || co == null || co !== Ml(t) || (t = co, "selectionStart" in t && Il(t) ? t = { start: t.selectionStart, end: t.selectionEnd } : (t = (t.ownerDocument && t.ownerDocument.defaultView || window).getSelection(), t = { anchorNode: t.anchorNode, anchorOffset: t.anchorOffset, focusNode: t.focusNode, focusOffset: t.focusOffset }), oa && ta(oa, t) || (oa = t, t = Ki(Dl, "onSelect"), 0 < t.length && (n = new Ya("onSelect", "select", null, n, r), e.push({ event: n, listeners: t }), n.target = co)));
  }
  function It(e, n) {
    var r = {};
    return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r;
  }
  var fo = { animationend: It("Animation", "AnimationEnd"), animationiteration: It("Animation", "AnimationIteration"), animationstart: It("Animation", "AnimationStart"), transitionrun: It("Transition", "TransitionRun"), transitionstart: It("Transition", "TransitionStart"), transitioncancel: It("Transition", "TransitionCancel"), transitionend: It("Transition", "TransitionEnd") }, jl = {}, $c = {};
  Hr && ($c = document.createElement("div").style, "AnimationEvent" in window || (delete fo.animationend.animation, delete fo.animationiteration.animation, delete fo.animationstart.animation), "TransitionEvent" in window || delete fo.transitionend.transition);
  function Dt(e) {
    if (jl[e]) return jl[e];
    if (!fo[e]) return e;
    var n = fo[e], r;
    for (r in n) if (n.hasOwnProperty(r) && r in $c) return jl[e] = n[r];
    return e;
  }
  var Vc = Dt("animationend"), Wc = Dt("animationiteration"), Hc = Dt("animationstart"), Dm = Dt("transitionrun"), Fm = Dt("transitionstart"), jm = Dt("transitioncancel"), Uc = Dt("transitionend"), Bc = /* @__PURE__ */ new Map(), Rl = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Rl.push("scrollEnd");
  function kr(e, n) {
    Bc.set(e, n), Mt(n, [e]);
  }
  var Rm = 0;
  function Ur(e, n) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (n.autoName !== null) return n.autoName;
    e = Nr.identifierPrefix;
    var r = Rm++;
    return e = "_" + e + "t_" + r.toString(32) + "_", n.autoName = e;
  }
  function qc(e) {
    if (e == null || typeof e == "string") return e;
    var n = null, r = zo;
    if (r !== null) for (var t = 0; t < r.length; t++) {
      var o = e[r[t]];
      if (o != null) {
        if (o === "none") return "none";
        n = n == null ? o : n + (" " + o);
      }
    }
    return n ?? e.default;
  }
  function Br(e, n) {
    return e = qc(e), n = qc(n), n == null ? e === "auto" ? null : e : n === "auto" ? null : n;
  }
  var Ja = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, cr = [], po = 0, Al = 0;
  function ei() {
    for (var e = po, n = Al = po = 0; n < e; ) {
      var r = cr[n];
      cr[n++] = null;
      var t = cr[n];
      cr[n++] = null;
      var o = cr[n];
      cr[n++] = null;
      var a = cr[n];
      if (cr[n++] = null, t !== null && o !== null) {
        var i = t.pending;
        i === null ? o.next = o : (o.next = i.next, i.next = o), t.pending = o;
      }
      a !== 0 && Gc(r, o, a);
    }
  }
  function ni(e, n, r, t) {
    cr[po++] = e, cr[po++] = n, cr[po++] = r, cr[po++] = t, Al |= t, e.lanes |= t, e = e.alternate, e !== null && (e.lanes |= t);
  }
  function $l(e, n, r, t) {
    return ni(e, n, r, t), ri(e);
  }
  function Ft(e, n) {
    return ni(e, null, null, n), ri(e);
  }
  function Gc(e, n, r) {
    e.lanes |= r;
    var t = e.alternate;
    t !== null && (t.lanes |= r);
    for (var o = !1, a = e.return; a !== null; ) a.childLanes |= r, t = a.alternate, t !== null && (t.childLanes |= r), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (o = !0)), e = a, a = a.return;
    return e.tag === 3 ? (a = e.stateNode, o && n !== null && (o = 31 - wn(r), e = a.hiddenUpdates, t = e[o], t === null ? e[o] = [n] : t.push(n), n.lane = r | 536870912), a) : null;
  }
  function ri(e) {
    if (50 < Ca) throw Ca = 0, Ui = null, Error(u(185));
    for (var n = e.return; n !== null; ) e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ho = {};
  function Am(e, n, r, t) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Gn(e, n, r, t) {
    return new Am(e, n, r, t);
  }
  function Vl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function qr(e, n) {
    var r = e.alternate;
    return r === null ? (r = Gn(e.tag, n, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 1206910976, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function Qc(e, n) {
    e.flags &= 1206910978;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, n = r.dependencies, e.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), e;
  }
  function ti(e, n, r, t, o, a) {
    var i = 0;
    if (t = e, typeof t == "function") Vl(t) && (i = 1);
    else if (typeof t == "string") i = pg(e, r, je.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (t) {
      case an:
        return e = Gn(31, r, n, o), e.elementType = an, e.lanes = a, e;
      case Je:
        return jt(r.children, o, a, n);
      case Xe:
        i = 8, o |= 24;
        break;
      case dn:
        return e = Gn(12, r, n, o | 2), e.elementType = dn, e.lanes = a, e;
      case X:
        return e = Gn(13, r, n, o), e.elementType = X, e.lanes = a, e;
      case ne:
        return e = Gn(19, r, n, o), e.elementType = ne, e.lanes = a, e;
      case An:
      case d:
        return e = o | 32, e = Gn(30, r, n, e), e.elementType = d, e.lanes = a, e.stateNode = { autoName: null, paired: null, clones: null, ref: null }, e;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case nn:
            i = 10;
            break e;
          case Nn:
            i = 9;
            break e;
          case N:
            i = 11;
            break e;
          case $e:
            i = 14;
            break e;
          case Ce:
            i = 16, t = null;
            break e;
        }
        i = 29, r = Error(u(130, e === null ? "null" : typeof e, "")), t = null;
    }
    return n = Gn(i, r, n, o), n.elementType = e, n.type = t, n.lanes = a, n;
  }
  function jt(e, n, r, t) {
    return e = Gn(7, e, t, n), e.lanes = r, e;
  }
  function Wl(e, n, r) {
    return e = Gn(6, e, null, n), e.lanes = r, e;
  }
  function Xc(e) {
    var n = Gn(18, null, null, 0);
    return n.stateNode = e, n;
  }
  function Hl(e, n, r) {
    return n = Gn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = r, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  var Yc = /* @__PURE__ */ new WeakMap();
  function fr(e, n) {
    if (typeof e == "object" && e !== null) {
      var r = Yc.get(e);
      return r !== void 0 ? r : (n = { value: e, source: n, stack: sn(n) }, Yc.set(e, n), n);
    }
    return { value: e, source: n, stack: sn(n) };
  }
  var mo = [], go = 0, oi = null, aa = 0, dr = [], pr = 0, ot = null, Or = 1, Tr = "";
  function Gr(e, n) {
    mo[go++] = aa, mo[go++] = oi, oi = e, aa = n;
  }
  function Kc(e, n, r) {
    dr[pr++] = Or, dr[pr++] = Tr, dr[pr++] = ot, ot = e;
    var t = Or;
    e = Tr;
    var o = 32 - wn(t) - 1;
    t &= ~(1 << o), r += 1;
    var a = 32 - wn(n) + o;
    if (30 < a) {
      var i = o - o % 5;
      a = (t & (1 << i) - 1).toString(32), t >>= i, o -= i, Or = 1 << 32 - wn(n) + o | r << o | t, Tr = a + e;
    } else Or = 1 << a | r << o | t, Tr = e;
  }
  function ai(e) {
    e.return !== null && (Gr(e, 1), Kc(e, 1, 0));
  }
  function Ul(e) {
    for (; e === oi; ) oi = mo[--go], mo[go] = null, aa = mo[--go], mo[go] = null;
    for (; e === ot; ) ot = dr[--pr], dr[pr] = null, Tr = dr[--pr], dr[pr] = null, Or = dr[--pr], dr[pr] = null;
  }
  function Zc(e, n) {
    dr[pr++] = Or, dr[pr++] = Tr, dr[pr++] = ot, Or = n.id, Tr = n.overflow, ot = e;
  }
  var Pn = null, rn = null, Ee = !1, at = null, hr = !1, Bl = Error(u(519));
  function it(e) {
    var n = Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw ia(fr(n, e)), Bl;
  }
  function Jc(e) {
    var n = e.stateNode, r = e.type, t = e.memoizedProps;
    switch (n[zn] = e, n[qn] = t, r) {
      case "dialog":
        Le("cancel", n), Le("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Le("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Pa.length; r++) Le(Pa[r], n);
        break;
      case "source":
        Le("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Le("error", n), Le("load", n);
        break;
      case "details":
        Le("toggle", n);
        break;
      case "input":
        Le("invalid", n), fc(n, t.value, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name, !0);
        break;
      case "select":
        Le("invalid", n);
        break;
      case "textarea":
        Le("invalid", n), pc(n, t.value, t.defaultValue, t.children);
    }
    r = t.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || n.textContent === "" + r || t.suppressHydrationWarning === !0 || kp(n.textContent, r) ? (t.popover != null && (Le("beforetoggle", n), Le("toggle", n)), t.onScroll != null && Le("scroll", n), t.onScrollEnd != null && Le("scrollend", n), t.onClick != null && (n.onclick = Lr), n = !0) : n = !1, n || it(e, !0);
  }
  function ii(e) {
    for (Pn = e.return; Pn; ) switch (Pn.tag) {
      case 5:
      case 31:
      case 13:
        hr = !1;
        return;
      case 27:
      case 3:
        hr = !0;
        return;
      default:
        Pn = Pn.return;
    }
  }
  function yo(e) {
    if (e !== Pn) return !1;
    if (!Ee) return ii(e), Ee = !0, !1;
    var n = e.tag, r;
    if ((r = n !== 3 && n !== 27) && ((r = n === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || Ss(e.type, e.memoizedProps)), r = !r), r && rn && it(e), ii(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      rn = $p(e);
    } else if (n === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      rn = $p(e);
    } else n === 27 ? (n = rn, St(e.type) ? (e = Ts, Ts = null, rn = e) : rn = n) : rn = Pn ? gr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Rt() {
    rn = Pn = null, Ee = !1;
  }
  function ql() {
    var e = at;
    return e !== null && (Yn === null ? Yn = e : Yn.push.apply(Yn, e), at = null), e;
  }
  function ia(e) {
    at === null ? at = [e] : at.push(e);
  }
  var Gl = pn(null), At = null, Qr = null;
  function lt(e, n, r) {
    ve(Gl, n._currentValue), n._currentValue = r;
  }
  function Xr(e) {
    e._currentValue = Gl.current, He(Gl);
  }
  function li(e, n, r) {
    for (; e !== null; ) {
      var t = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, t !== null && (t.childLanes |= n)) : t !== null && (t.childLanes & n) !== n && (t.childLanes |= n), e === r) break;
      e = e.return;
    }
  }
  function Ql(e, n, r, t) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var a = o.dependencies;
      if (a !== null) {
        var i = o.child;
        a = a.firstContext;
        e: for (; a !== null; ) {
          var l = a;
          a = o;
          for (var s = 0; s < n.length; s++) if (l.context === n[s]) {
            a.lanes |= r, l = a.alternate, l !== null && (l.lanes |= r), li(a.return, r, e), t || (i = null);
            break e;
          }
          a = l.next;
        }
      } else if (o.tag === 18) {
        if (i = o.return, i === null) throw Error(u(341));
        i.lanes |= r, a = i.alternate, a !== null && (a.lanes |= r), li(i, r, e), i = null;
      } else o.tag === 13 && o.memoizedState !== null && o.memoizedState.dehydrated === null ? (o.lanes |= r, i = o.alternate, i !== null && (i.lanes |= r), li(o.return, r, e), i = o.child, i = i !== null ? i.sibling : null) : i = o.child;
      if (i !== null) i.return = o;
      else for (i = o; i !== null; ) {
        if (i === e) {
          i = null;
          break;
        }
        if (o = i.sibling, o !== null) {
          o.return = i.return, i = o;
          break;
        }
        i = i.return;
      }
      o = i;
    }
  }
  function $t(e, n, r, t) {
    e = null;
    for (var o = n, a = !1; o !== null; ) {
      if (!a) {
        if ((o.flags & 524288) !== 0) a = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var i = o.alternate;
        if (i === null) throw Error(u(387));
        if (i = i.memoizedProps, i !== null) {
          var l = o.type;
          rr(o.pendingProps.value, i.value) || (e !== null ? e.push(l) : e = [l]);
        }
      } else if (o === un.current) {
        if (i = o.alternate, i === null) throw Error(u(387));
        i.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Wo) : e = [Wo]);
      }
      o = o.return;
    }
    return e !== null && Ql(n, e, r, t), n.flags |= 262144, e !== null;
  }
  function ui(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!rr(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Vt(e) {
    At = e, Qr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Mn(e) {
    return ef(At, e);
  }
  function si(e, n) {
    return At === null && Vt(e), ef(e, n);
  }
  function ef(e, n) {
    var r = n._currentValue;
    if (n = { context: n, memoizedValue: r, next: null }, Qr === null) {
      if (e === null) throw Error(u(308));
      Qr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else Qr = Qr.next = n;
    return r;
  }
  var $m = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = { aborted: !1, addEventListener: function(r, t) {
      e.push(t);
    } };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(r) {
        return r();
      });
    };
  }, Vm = f.unstable_scheduleCallback, Wm = f.unstable_NormalPriority, kn = { $$typeof: nn, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Xl() {
    return { controller: new $m(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function la(e) {
    e.refCount--, e.refCount === 0 && Vm(Wm, function() {
      e.controller.abort();
    });
  }
  function nf(e, n) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var r = e.transitionTypes;
      for (r === null && (r = e.transitionTypes = []), e = 0; e < n.length; e++) {
        var t = n[e];
        r.indexOf(t) === -1 && r.push(t);
      }
    }
  }
  var ua = null;
  function Hm(e) {
    var n = e.transitionTypes;
    return e.transitionTypes = null, n;
  }
  var sa = null, Yl = 0, Wt = 0, vo = null;
  function Um(e, n) {
    if (sa === null) {
      var r = sa = [];
      Yl = 0, Wt = ps(), vo = { status: "pending", value: void 0, then: function(t) {
        r.push(t);
      } };
    }
    return Yl++, n.then(rf, rf), n;
  }
  function rf() {
    if (--Yl === 0 && (ua = null, sa !== null)) {
      vo !== null && (vo.status = "fulfilled");
      var e = sa;
      sa = null, Wt = 0, vo = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Bm(e, n) {
    var r = [], t = { status: "pending", value: null, reason: null, then: function(o) {
      r.push(o);
    } };
    return e.then(function() {
      t.status = "fulfilled", t.value = n;
      for (var o = 0; o < r.length; o++) (0, r[o])(n);
    }, function(o) {
      for (t.status = "rejected", t.reason = o, o = 0; o < r.length; o++) (0, r[o])(void 0);
    }), t;
  }
  var tf = B.S;
  B.S = function(e, n) {
    if (Yd = w(), typeof n == "object" && n !== null && typeof n.then == "function" && Um(e, n), ua !== null) for (var r = Fo; r !== null; ) nf(r, ua), r = r.next;
    if (r = e.types, r !== null) {
      for (var t = Fo; t !== null; ) nf(t, r), t = t.next;
      if (Wt !== 0) {
        t = ua, t === null && (t = ua = []);
        for (var o = 0; o < r.length; o++) {
          var a = r[o];
          t.indexOf(a) === -1 && t.push(a);
        }
      }
    }
    tf !== null && tf(e, n);
  };
  var Ht = pn(null);
  function Kl() {
    var e = Ht.current;
    return e !== null ? e : en.pooledCache;
  }
  function ci(e, n) {
    n === null ? ve(Ht, Ht.current) : ve(Ht, n.pool);
  }
  function of() {
    var e = Kl();
    return e === null ? null : { parent: kn._currentValue, pool: e };
  }
  var bo = Error(u(460)), Zl = Error(u(474)), fi = Error(u(542)), di = { then: function() {
  } };
  function af(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function lf(e, n, r) {
    switch (r = e[r], r === void 0 ? e.push(n) : r !== n && (n.then(Lr, Lr), n = r), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, sf(e), e === void 0 && !("reason" in n) ? Error(u(600)) : e;
      default:
        if (typeof n.status == "string") n.then(Lr, Lr);
        else {
          if (e = en, e !== null && 100 < e.shellSuspendCounter) throw Error(u(482));
          e = n, e.status = "pending", e.then(function(t) {
            if (n.status === "pending") {
              var o = n;
              o.status = "fulfilled", o.value = t;
            }
          }, function(t) {
            if (n.status === "pending") {
              var o = n;
              o.status = "rejected", o.reason = t;
            }
          });
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, sf(e), e;
        }
        throw Bt = n, bo;
    }
  }
  function Ut(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Bt = r, bo) : r;
    }
  }
  var Bt = null;
  function uf() {
    if (Bt === null) throw Error(u(459));
    var e = Bt;
    return Bt = null, e;
  }
  function sf(e) {
    if (e === bo || e === fi) throw Error(u(483));
  }
  var wo = null, ca = 0;
  function pi(e) {
    var n = ca;
    return ca += 1, wo === null && (wo = []), lf(wo, e, n);
  }
  function ut(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function hi(e, n) {
    throw n.$$typeof === V ? Error(u(525)) : (e = Object.prototype.toString.call(n), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)));
  }
  function cf(e) {
    function n(h, c) {
      if (e) {
        var y = h.deletions;
        y === null ? (h.deletions = [c], h.flags |= 16) : y.push(c);
      }
    }
    function r(h, c) {
      if (!e) return null;
      for (; c !== null; ) n(h, c), c = c.sibling;
      return null;
    }
    function t(h) {
      for (var c = /* @__PURE__ */ new Map(); h !== null; ) h.key === null ? c.set(h.index, h) : c.set(h.key, h), h = h.sibling;
      return c;
    }
    function o(h, c) {
      return h = qr(h, c), h.index = 0, h.sibling = null, h;
    }
    function a(h, c, y) {
      return h.index = y, e ? (y = h.alternate, y !== null ? (y = y.index, y < c ? (h.flags |= 2, c) : y) : (h.flags |= 134217730, c)) : (h.flags |= 1048576, c);
    }
    function i(h) {
      return e && h.alternate === null && (h.flags |= 134217730), h;
    }
    function l(h, c, y, S) {
      return c === null || c.tag !== 6 ? (c = Wl(y, h.mode, S), c.return = h, c) : (c = o(c, y), c.return = h, c);
    }
    function s(h, c, y, S) {
      var q = y.type;
      return q === Je ? (h = b(h, c, y.props.children, S, y.key), ut(h, y), h) : c !== null && (c.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Ce && Ut(q) === c.type) ? (c = o(c, y.props), ut(c, y), c.return = h, c) : (c = ti(y.type, y.key, y.props, null, h.mode, S), ut(c, y), c.return = h, c);
    }
    function m(h, c, y, S) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== y.containerInfo || c.stateNode.implementation !== y.implementation ? (c = Hl(y, h.mode, S), c.return = h, c) : (c = o(c, y.children || []), c.return = h, c);
    }
    function b(h, c, y, S, q) {
      return c === null || c.tag !== 7 ? (c = jt(y, h.mode, S, q), c.return = h, c) : (c = o(c, y), c.return = h, c);
    }
    function x(h, c, y) {
      if (typeof c == "string" && c !== "" || typeof c == "number" || typeof c == "bigint") return c = Wl("" + c, h.mode, y), c.return = h, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case Se:
            return y = ti(c.type, c.key, c.props, null, h.mode, y), ut(y, c), y.return = h, y;
          case De:
            return c = Hl(c, h.mode, y), c.return = h, c;
          case Ce:
            return c = Ut(c), x(h, c, y);
        }
        if (te(c) || Y(c)) return c = jt(c, h.mode, y, null), c.return = h, c;
        if (typeof c.then == "function") return x(h, pi(c), y);
        if (c.$$typeof === nn) return x(h, si(h, c), y);
        hi(h, c);
      }
      return null;
    }
    function p(h, c, y, S) {
      var q = c !== null ? c.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return q !== null ? null : l(h, c, "" + y, S);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Se:
            return y.key === q ? s(h, c, y, S) : null;
          case De:
            return y.key === q ? m(h, c, y, S) : null;
          case Ce:
            return y = Ut(y), p(h, c, y, S);
        }
        if (te(y) || Y(y)) return q !== null ? null : b(h, c, y, S, null);
        if (typeof y.then == "function") return p(h, c, pi(y), S);
        if (y.$$typeof === nn) return p(h, c, si(h, y), S);
        hi(h, y);
      }
      return null;
    }
    function v(h, c, y, S, q) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return h = h.get(y) || null, l(c, h, "" + S, q);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Se:
            return h = h.get(S.key === null ? y : S.key) || null, s(c, h, S, q);
          case De:
            return h = h.get(S.key === null ? y : S.key) || null, m(c, h, S, q);
          case Ce:
            return S = Ut(S), v(h, c, y, S, q);
        }
        if (te(S) || Y(S)) return h = h.get(y) || null, b(c, h, S, q, null);
        if (typeof S.then == "function") return v(h, c, y, pi(S), q);
        if (S.$$typeof === nn) return v(h, c, y, si(c, S), q);
        hi(c, S);
      }
      return null;
    }
    function j(h, c, y, S) {
      for (var q = null, Me = null, oe = c, fe = c = 0, En = null; oe !== null && fe < y.length; fe++) {
        oe.index > fe ? (En = oe, oe = null) : En = oe.sibling;
        var Ae = p(h, oe, y[fe], S);
        if (Ae === null) {
          oe === null && (oe = En);
          break;
        }
        e && oe && Ae.alternate === null && n(h, oe), c = a(Ae, c, fe), Me === null ? q = Ae : Me.sibling = Ae, Me = Ae, oe = En;
      }
      if (fe === y.length) return r(h, oe), Ee && Gr(h, fe), q;
      if (oe === null) {
        for (; fe < y.length; fe++) oe = x(h, y[fe], S), oe !== null && (c = a(oe, c, fe), Me === null ? q = oe : Me.sibling = oe, Me = oe);
        return Ee && Gr(h, fe), q;
      }
      for (oe = t(oe); fe < y.length; fe++) En = v(oe, h, fe, y[fe], S), En !== null && (e && (Ae = En.alternate, Ae !== null && oe.delete(Ae.key === null ? fe : Ae.key)), c = a(En, c, fe), Me === null ? q = En : Me.sibling = En, Me = En);
      return e && oe.forEach(function(_t) {
        return n(h, _t);
      }), Ee && Gr(h, fe), q;
    }
    function Z(h, c, y, S) {
      if (y == null) throw Error(u(151));
      for (var q = null, Me = null, oe = c, fe = c = 0, En = null, Ae = y.next(); oe !== null && !Ae.done; fe++, Ae = y.next()) {
        oe.index > fe ? (En = oe, oe = null) : En = oe.sibling;
        var _t = p(h, oe, Ae.value, S);
        if (_t === null) {
          oe === null && (oe = En);
          break;
        }
        e && oe && _t.alternate === null && n(h, oe), c = a(_t, c, fe), Me === null ? q = _t : Me.sibling = _t, Me = _t, oe = En;
      }
      if (Ae.done) return r(h, oe), Ee && Gr(h, fe), q;
      if (oe === null) {
        for (; !Ae.done; fe++, Ae = y.next()) Ae = x(h, Ae.value, S), Ae !== null && (c = a(Ae, c, fe), Me === null ? q = Ae : Me.sibling = Ae, Me = Ae);
        return Ee && Gr(h, fe), q;
      }
      for (oe = t(oe); !Ae.done; fe++, Ae = y.next()) Ae = v(oe, h, fe, Ae.value, S), Ae !== null && (e && (En = Ae.alternate, En !== null && oe.delete(En.key === null ? fe : En.key)), c = a(Ae, c, fe), Me === null ? q = Ae : Me.sibling = Ae, Me = Ae);
      return e && oe.forEach(function(Ng) {
        return n(h, Ng);
      }), Ee && Gr(h, fe), q;
    }
    function we(h, c, y, S) {
      if (typeof y == "object" && y !== null && y.type === Je && y.key === null && y.props.ref === void 0 && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Se:
            e: {
              for (var q = y.key; c !== null; ) {
                if (c.key === q) {
                  if (q = y.type, q === Je) {
                    if (c.tag === 7) {
                      r(h, c.sibling), S = o(c, y.props.children), ut(S, y), S.return = h, h = S;
                      break e;
                    }
                  } else if (c.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Ce && Ut(q) === c.type) {
                    r(h, c.sibling), S = o(c, y.props), ut(S, y), S.return = h, h = S;
                    break e;
                  }
                  r(h, c);
                  break;
                } else n(h, c);
                c = c.sibling;
              }
              y.type === Je ? (S = jt(y.props.children, h.mode, S, y.key), ut(S, y), S.return = h, h = S) : (S = ti(y.type, y.key, y.props, null, h.mode, S), ut(S, y), S.return = h, h = S);
            }
            return i(h);
          case De:
            e: {
              for (q = y.key; c !== null; ) {
                if (c.key === q) if (c.tag === 4 && c.stateNode.containerInfo === y.containerInfo && c.stateNode.implementation === y.implementation) {
                  r(h, c.sibling), S = o(c, y.children || []), S.return = h, h = S;
                  break e;
                } else {
                  r(h, c);
                  break;
                }
                else n(h, c);
                c = c.sibling;
              }
              S = Hl(y, h.mode, S), S.return = h, h = S;
            }
            return i(h);
          case Ce:
            return y = Ut(y), we(h, c, y, S);
        }
        if (te(y)) return j(h, c, y, S);
        if (Y(y)) {
          if (q = Y(y), typeof q != "function") throw Error(u(150));
          return y = q.call(y), Z(h, c, y, S);
        }
        if (typeof y.then == "function") return we(h, c, pi(y), S);
        if (y.$$typeof === nn) return we(h, c, si(h, y), S);
        hi(h, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, c !== null && c.tag === 6 ? (r(h, c.sibling), S = o(c, y), S.return = h, h = S) : (r(h, c), S = Wl(y, h.mode, S), S.return = h, h = S), i(h)) : r(h, c);
    }
    return function(h, c, y, S) {
      try {
        ca = 0;
        var q = we(h, c, y, S);
        return wo = null, q;
      } catch (oe) {
        if (oe === bo || oe === fi) throw oe;
        var Me = Gn(29, oe, null, h.mode);
        return Me.lanes = S, Me.return = h, Me;
      } finally {
      }
    };
  }
  var qt = cf(!0), ff = cf(!1), st = !1;
  function Jl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function eu(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function ct(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ft(e, n, r) {
    var t = e.updateQueue;
    if (t === null) return null;
    if (t = t.shared, (We & 2) !== 0) {
      var o = t.pending;
      return o === null ? n.next = n : (n.next = o.next, o.next = n), t.pending = n, n = ri(e), Gc(e, null, r), n;
    }
    return ni(e, t, n, r), ri(e);
  }
  function fa(e, n, r) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
      var t = n.lanes;
      t &= e.pendingLanes, r |= t, n.lanes = r, Ks(e, r);
    }
  }
  function nu(e, n) {
    var r = e.updateQueue, t = e.alternate;
    if (t !== null && (t = t.updateQueue, r === t)) {
      var o = null, a = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var i = { lane: r.lane, tag: r.tag, payload: r.payload, callback: null, next: null };
          a === null ? o = a = i : a = a.next = i, r = r.next;
        } while (r !== null);
        a === null ? o = a = n : a = a.next = n;
      } else o = a = n;
      r = { baseState: t.baseState, firstBaseUpdate: o, lastBaseUpdate: a, shared: t.shared, callbacks: t.callbacks }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n;
  }
  var ru = !1;
  function da() {
    if (ru) {
      var e = vo;
      if (e !== null) throw e;
    }
  }
  function pa(e, n, r, t) {
    ru = !1;
    var o = e.updateQueue;
    st = !1;
    var a = o.firstBaseUpdate, i = o.lastBaseUpdate, l = o.shared.pending;
    if (l !== null) {
      o.shared.pending = null;
      var s = l, m = s.next;
      s.next = null, i === null ? a = m : i.next = m, i = s;
      var b = e.alternate;
      b !== null && (b = b.updateQueue, l = b.lastBaseUpdate, l !== i && (l === null ? b.firstBaseUpdate = m : l.next = m, b.lastBaseUpdate = s));
    }
    if (a !== null) {
      var x = o.baseState;
      i = 0, b = m = s = null, l = a;
      do {
        var p = l.lane & -536870913, v = p !== l.lane;
        if (v ? (ze & p) === p : (t & p) === p) {
          p !== 0 && p === Wt && (ru = !0), b !== null && (b = b.next = { lane: 0, tag: l.tag, payload: l.payload, callback: null, next: null });
          e: {
            var j = e, Z = l;
            p = n;
            var we = r;
            switch (Z.tag) {
              case 1:
                if (j = Z.payload, typeof j == "function") {
                  x = j.call(we, x, p);
                  break e;
                }
                x = j;
                break e;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                if (j = Z.payload, p = typeof j == "function" ? j.call(we, x, p) : j, p == null) break e;
                x = G({}, x, p);
                break e;
              case 2:
                st = !0;
            }
          }
          p = l.callback, p !== null && (e.flags |= 64, v && (e.flags |= 8192), v = o.callbacks, v === null ? o.callbacks = [p] : v.push(p));
        } else v = { lane: p, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, b === null ? (m = b = v, s = x) : b = b.next = v, i |= p;
        if (l = l.next, l === null) {
          if (l = o.shared.pending, l === null) break;
          v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
        }
      } while (!0);
      b === null && (s = x), o.baseState = s, o.firstBaseUpdate = m, o.lastBaseUpdate = b, a === null && (o.shared.lanes = 0), vt |= i, e.lanes = i, e.memoizedState = x;
    }
  }
  function df(e, n) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(n);
  }
  function pf(e, n) {
    var r = e.callbacks;
    if (r !== null) for (e.callbacks = null, e = 0; e < r.length; e++) df(r[e], n);
  }
  var dt = pn(null), mi = pn(0);
  function hf(e, n) {
    e = et, ve(mi, e), ve(dt, n), et = e | n.baseLanes;
  }
  function tu() {
    ve(mi, et), ve(dt, dt.current);
  }
  function ou() {
    et = mi.current, He(dt), He(mi);
  }
  var In = pn(null), Vn = null;
  function pt(e) {
    var n = e.alternate;
    ve(Dn, Dn.current & 1), ve(In, e), Vn === null && (n === null || dt.current !== null || n.memoizedState !== null) && (Vn = e);
  }
  function au(e) {
    ve(Dn, Dn.current), ve(In, e), Vn === null && (Vn = e);
  }
  function mf(e) {
    e.tag === 22 ? (ve(Dn, Dn.current), ve(In, e), Vn === null && (Vn = e)) : ht();
  }
  function ht() {
    ve(Dn, Dn.current), ve(In, In.current);
  }
  function tr(e) {
    He(In), Vn === e && (Vn = null), He(Dn);
  }
  var Dn = pn(0);
  function ha(e, n) {
    ve(In, In.current), ve(Dn, n);
  }
  function iu(e) {
    He(Dn), He(In), Vn === e && (Vn = null);
  }
  function gi(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || Ls(r) || Os(r))) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== "independent") {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Yr = 0, be = null, Ke = null, Sn = null, yi = !1, ko = !1, Gt = !1, vi = 0, ma = 0, So = null, qm = 0;
  function hn() {
    throw Error(u(321));
  }
  function lu(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++) if (!rr(e[r], n[r])) return !1;
    return !0;
  }
  function uu(e, n, r, t, o, a) {
    return Yr = a, be = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, B.H = e === null || e.memoizedState === null ? Zf : Jf, Gt = !1, a = r(t, o), Gt = !1, ko && (a = yf(n, r, t, o)), gf(e), a;
  }
  function gf(e) {
    B.H = Ni;
    var n = Ke !== null && Ke.next !== null;
    if (Yr = 0, Sn = Ke = be = null, yi = !1, ma = 0, So = null, n) throw Error(u(300));
    e === null || xn || (e = e.dependencies, e !== null && ui(e) && (xn = !0));
  }
  function yf(e, n, r, t) {
    be = e;
    var o = 0;
    do {
      if (ko && (So = null), ma = 0, ko = !1, 25 <= o) throw Error(u(301));
      if (o += 1, Sn = Ke = null, e.updateQueue != null) {
        var a = e.updateQueue;
        a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
      }
      B.H = e0, a = n(r, t);
    } while (ko);
    return a;
  }
  function Gm() {
    var e = B.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ga(n) : n, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (be.flags |= 1024), n;
  }
  function su() {
    var e = vi !== 0;
    return vi = 0, e;
  }
  function cu(e, n, r) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~r;
  }
  function fu(e) {
    if (yi) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      yi = !1;
    }
    Yr = 0, Sn = Ke = be = null, ko = !1, ma = vi = 0, So = null;
  }
  function Wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Sn === null ? be.memoizedState = Sn = e : Sn = Sn.next = e, Sn;
  }
  function vn() {
    if (Ke === null) {
      var e = be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var n = Sn === null ? be.memoizedState : Sn.next;
    if (n !== null) Sn = n, Ke = e;
    else {
      if (e === null) throw be.alternate === null ? Error(u(467)) : Error(u(310));
      Ke = e, e = { memoizedState: Ke.memoizedState, baseState: Ke.baseState, baseQueue: Ke.baseQueue, queue: Ke.queue, next: null }, Sn === null ? be.memoizedState = Sn = e : Sn = Sn.next = e;
    }
    return Sn;
  }
  function bi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ga(e) {
    var n = ma;
    return ma += 1, So === null && (So = []), e = lf(So, e, n), n = be, (Sn === null ? n.memoizedState : Sn.next) === null && (n = n.alternate, B.H = n === null || n.memoizedState === null ? Zf : Jf), e;
  }
  function wi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ga(e);
      if (e.$$typeof === L) return;
      if (e.$$typeof === nn) return Mn(e);
    }
    throw Error(u(438, String(e)));
  }
  function du(e) {
    var n = null, r = be.updateQueue;
    if (r !== null && (n = r.memoCache), n == null) {
      var t = be.alternate;
      t !== null && (t = t.updateQueue, t !== null && (t = t.memoCache, t != null && (n = { data: t.data.map(function(o) {
        return o.slice();
      }), index: 0 })));
    }
    if (n == null && (n = { data: [], index: 0 }), r === null && (r = bi(), be.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0) for (r = n.data[n.index] = Array(e), t = 0; t < e; t++) r[t] = Tn;
    return n.index++, r;
  }
  function Kr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function ki(e) {
    var n = vn();
    return pu(n, Ke, e);
  }
  function pu(e, n, r) {
    var t = e.queue;
    if (t === null) throw Error(u(311));
    t.lastRenderedReducer = r;
    var o = e.baseQueue, a = t.pending;
    if (a !== null) {
      if (o !== null) {
        var i = o.next;
        o.next = a.next, a.next = i;
      }
      n.baseQueue = o = a, t.pending = null;
    }
    if (a = e.baseState, o === null) e.memoizedState = a;
    else {
      n = o.next;
      var l = i = null, s = null, m = n, b = !1;
      do {
        var x = m.lane & -536870913;
        if (x !== m.lane ? (ze & x) === x : (Yr & x) === x) {
          var p = m.revertLane;
          if (p === 0) s !== null && (s = s.next = { lane: 0, revertLane: 0, gesture: null, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), x === Wt && (b = !0);
          else if ((Yr & p) === p) {
            m = m.next, p === Wt && (b = !0);
            continue;
          } else x = { lane: 0, revertLane: m.revertLane, gesture: null, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }, s === null ? (l = s = x, i = a) : s = s.next = x, be.lanes |= p, vt |= p;
          x = m.action, Gt && r(a, x), a = m.hasEagerState ? m.eagerState : r(a, x);
        } else p = { lane: x, revertLane: m.revertLane, gesture: m.gesture, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }, s === null ? (l = s = p, i = a) : s = s.next = p, be.lanes |= x, vt |= x;
        m = m.next;
      } while (m !== null && m !== n);
      if (s === null ? i = a : s.next = l, !rr(a, e.memoizedState) && (xn = !0, b && (r = vo, r !== null))) throw r;
      e.memoizedState = a, e.baseState = i, e.baseQueue = s, t.lastRenderedState = a;
    }
    return o === null && (t.lanes = 0), [e.memoizedState, t.dispatch];
  }
  function hu(e) {
    var n = vn(), r = n.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = e;
    var t = r.dispatch, o = r.pending, a = n.memoizedState;
    if (o !== null) {
      r.pending = null;
      var i = o = o.next;
      do
        a = e(a, i.action), i = i.next;
      while (i !== o);
      rr(a, n.memoizedState) || (xn = !0), n.memoizedState = a, n.baseQueue === null && (n.baseState = a), r.lastRenderedState = a;
    }
    return [a, t];
  }
  function vf(e, n, r) {
    var t = be, o = vn(), a = Ee;
    if (a) {
      if (r === void 0) throw Error(u(407));
      r = r();
    } else r = n();
    var i = !rr((Ke || o).memoizedState, r);
    if (i && (o.memoizedState = r, xn = !0), o = o.queue, yu(kf.bind(null, t, o, e), [e]), e = o.getSnapshot !== n || i || Sn !== null && (Sn.memoizedState.tag & 1) !== 0, xo(e ? 9 : 8, { destroy: void 0 }, wf.bind(null, t, o, r, n), null), e) {
      if (t.flags |= 2048, en === null) throw Error(u(349));
      a || (Yr & 127) !== 0 || bf(t, n, r);
    }
    return r;
  }
  function bf(e, n, r) {
    e.flags |= 16384, e = { getSnapshot: n, value: r }, n = be.updateQueue, n === null ? (n = bi(), be.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e));
  }
  function wf(e, n, r, t) {
    n.value = r, n.getSnapshot = t, Sf(n) && xf(e);
  }
  function kf(e, n, r) {
    return r(function() {
      Sf(n) && xf(e);
    });
  }
  function Sf(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !rr(e, r);
    } catch {
      return !0;
    }
  }
  function xf(e) {
    var n = Ft(e, 2);
    n !== null && Kn(n, e, 2);
  }
  function mu(e) {
    var n = Wn();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), Gt) {
        yn(!0);
        try {
          r();
        } finally {
          yn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: e }, n;
  }
  function Ef(e, n, r, t) {
    return e.baseState = r, pu(e, Ke, typeof t == "function" ? t : Kr);
  }
  function Qm(e, n, r, t, o) {
    if (Ei(e)) throw Error(u(485));
    if (e = n.action, e !== null) {
      var a = { payload: o, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function(i) {
        a.listeners.push(i);
      } };
      B.T !== null ? r(!0) : a.isTransition = !1, t(a), r = n.pending, r === null ? (a.next = n.pending = a, Nf(n, a)) : (a.next = r.next, n.pending = r.next = a);
    }
  }
  function Nf(e, n) {
    var r = n.action, t = n.payload, o = e.state;
    if (n.isTransition) {
      var a = B.T, i = {};
      i.types = a !== null ? a.types : null, B.T = i;
      try {
        var l = r(o, t), s = B.S;
        s !== null && s(i, l), Cf(e, n, l);
      } catch (m) {
        gu(e, n, m);
      } finally {
        a !== null && i.types !== null && (a.types = i.types), B.T = a;
      }
    } else try {
      a = r(o, t), Cf(e, n, a);
    } catch (m) {
      gu(e, n, m);
    }
  }
  function Cf(e, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(function(t) {
      _f(e, n, t);
    }, function(t) {
      return gu(e, n, t);
    }) : _f(e, n, r);
  }
  function _f(e, n, r) {
    n.status = "fulfilled", n.value = r, Pf(n), e.state = r, n = e.pending, n !== null && (r = n.next, r === n ? e.pending = null : (r = r.next, n.next = r, Nf(e, r)));
  }
  function gu(e, n, r) {
    var t = e.pending;
    if (e.pending = null, t !== null) {
      t = t.next;
      do
        n.status = "rejected", n.reason = r, Pf(n), n = n.next;
      while (n !== t);
    }
    e.action = null;
  }
  function Pf(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Lf(e, n) {
    return n;
  }
  function Of(e, n) {
    if (Ee) {
      var r = en.formState;
      if (r !== null) {
        e: {
          var t = be;
          if (Ee) {
            if (rn) {
              n: {
                for (var o = rn, a = hr; o.nodeType !== 8; ) {
                  if (!a) {
                    o = null;
                    break n;
                  }
                  if (o = gr(o.nextSibling), o === null) {
                    o = null;
                    break n;
                  }
                }
                a = o.data, o = a === "F!" || a === "F" ? o : null;
              }
              if (o) {
                rn = gr(o.nextSibling), t = o.data === "F!";
                break e;
              }
            }
            it(t);
          }
          t = !1;
        }
        t && (n = r[0]);
      }
    }
    return r = Wn(), r.memoizedState = r.baseState = n, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Lf, lastRenderedState: n }, r.queue = t, r = Xf.bind(null, be, t), t.dispatch = r, t = mu(!1), a = Su.bind(null, be, !1, t.queue), t = Wn(), o = { state: n, dispatch: null, action: e, pending: null }, t.queue = o, r = Qm.bind(null, be, o, a, r), o.dispatch = r, t.memoizedState = e, [n, r, !1];
  }
  function Tf(e) {
    var n = vn();
    return zf(n, Ke, e);
  }
  function zf(e, n, r) {
    if (n = pu(e, n, Lf)[0], e = ki(Kr)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
      var t = ga(n);
    } catch (i) {
      throw i === bo ? fi : i;
    }
    else t = n;
    n = vn();
    var o = n.queue, a = o.dispatch;
    return r !== n.memoizedState && (be.flags |= 2048, xo(9, { destroy: void 0 }, Xm.bind(null, o, r), null)), [t, a, e];
  }
  function Xm(e, n) {
    e.action = n;
  }
  function Mf(e) {
    var n = vn(), r = Ke;
    if (r !== null) return zf(n, r, e);
    vn(), n = n.memoizedState, r = vn();
    var t = r.queue.dispatch;
    return r.memoizedState = e, [n, t, !1];
  }
  function xo(e, n, r, t) {
    return e = { tag: e, create: r, deps: t, inst: n, next: null }, n = be.updateQueue, n === null && (n = bi(), be.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (t = r.next, r.next = e, e.next = t, n.lastEffect = e), e;
  }
  function If() {
    return vn().memoizedState;
  }
  function Si(e, n, r, t) {
    var o = Wn();
    be.flags |= e, o.memoizedState = xo(1 | n, { destroy: void 0 }, r, t === void 0 ? null : t);
  }
  function xi(e, n, r, t) {
    var o = vn();
    t = t === void 0 ? null : t;
    var a = o.memoizedState.inst;
    Ke !== null && t !== null && lu(t, Ke.memoizedState.deps) ? o.memoizedState = xo(n, a, r, t) : (be.flags |= e, o.memoizedState = xo(1 | n, a, r, t));
  }
  function Df(e, n) {
    Si(8390656, 8, e, n);
  }
  function yu(e, n) {
    xi(2048, 8, e, n);
  }
  function Ym(e) {
    be.flags |= 4;
    var n = be.updateQueue;
    if (n === null) n = bi(), be.updateQueue = n, n.events = [e];
    else {
      var r = n.events;
      r === null ? n.events = [e] : r.push(e);
    }
  }
  function Ff(e) {
    var n = vn().memoizedState;
    return Ym({ ref: n, nextImpl: e }), function() {
      if ((We & 2) !== 0) throw Error(u(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function jf(e, n) {
    return xi(4, 2, e, n);
  }
  function Rf(e, n) {
    return xi(4, 4, e, n);
  }
  function Af(e, n) {
    if (typeof n == "function") {
      e = e();
      var r = n(e);
      return function() {
        typeof r == "function" ? r() : n(null);
      };
    }
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function $f(e, n, r) {
    r = r != null ? r.concat([e]) : null, xi(4, 4, Af.bind(null, n, e), r);
  }
  function vu() {
  }
  function Vf(e, n) {
    var r = vn();
    n = n === void 0 ? null : n;
    var t = r.memoizedState;
    return n !== null && lu(n, t[1]) ? t[0] : (r.memoizedState = [e, n], e);
  }
  function Wf(e, n) {
    var r = vn();
    n = n === void 0 ? null : n;
    var t = r.memoizedState;
    if (n !== null && lu(n, t[1])) return t[0];
    if (t = e(), Gt) {
      yn(!0);
      try {
        e();
      } finally {
        yn(!1);
      }
    }
    return r.memoizedState = [t, n], t;
  }
  function bu(e, n, r) {
    return r === void 0 || (Yr & 1073741824) !== 0 && (ze & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = r, e = Zd(), be.lanes |= e, vt |= e, r);
  }
  function Hf(e, n, r, t) {
    return rr(r, n) ? r : dt.current !== null ? (e = bu(e, r, t), rr(e, n) || (xn = !0), e) : (Yr & 106) === 0 || (Yr & 1073741824) !== 0 && (ze & 261930) === 0 ? (xn = !0, e.memoizedState = r) : (e = Zd(), be.lanes |= e, vt |= e, n);
  }
  function Uf(e, n, r, t, o) {
    var a = ue.p;
    ue.p = a !== 0 && 8 > a ? a : 8;
    var i = B.T, l = {};
    l.types = i !== null ? i.types : null, B.T = l, Su(e, !1, n, r);
    try {
      var s = o(), m = B.S;
      if (m !== null && m(l, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var b = Bm(s, t);
        ya(e, n, b, lr(e));
      } else ya(e, n, t, lr(e));
    } catch (x) {
      ya(e, n, { then: function() {
      }, status: "rejected", reason: x }, lr());
    } finally {
      ue.p = a, i !== null && l.types !== null && (i.types = l.types), B.T = i;
    }
  }
  function Km() {
  }
  function wu(e, n, r, t) {
    if (e.tag !== 5) throw Error(u(476));
    var o = Bf(e).queue;
    Uf(e, o, n, R, r === null ? Km : function() {
      return qf(e), r(t);
    });
  }
  function Bf(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = { memoizedState: R, baseState: R, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: R }, next: null };
    var r = {};
    return n.next = { memoizedState: r, baseState: r, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: r }, next: null }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function qf(e) {
    var n = Bf(e);
    n.next === null && (n = e.alternate.memoizedState), ya(e, n.next.queue, {}, lr());
  }
  function ku() {
    return Mn(Wo);
  }
  function Gf() {
    return vn().memoizedState;
  }
  function Qf() {
    return vn().memoizedState;
  }
  function Zm(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = lr();
          e = ct(r);
          var t = ft(n, e, r);
          t !== null && (Kn(t, n, r), fa(t, n, r)), n = { cache: Xl() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Jm(e, n, r) {
    var t = lr();
    r = { lane: t, revertLane: 0, gesture: null, action: r, hasEagerState: !1, eagerState: null, next: null }, Ei(e) ? Yf(n, r) : (r = $l(e, n, r, t), r !== null && (Kn(r, e, t), Kf(r, n, t)));
  }
  function Xf(e, n, r) {
    var t = lr();
    ya(e, n, r, t);
  }
  function ya(e, n, r, t) {
    var o = { lane: t, revertLane: 0, gesture: null, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (Ei(e)) Yf(n, o);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = n.lastRenderedReducer, a !== null)) try {
        var i = n.lastRenderedState, l = a(i, r);
        if (o.hasEagerState = !0, o.eagerState = l, rr(l, i)) return ni(e, n, o, 0), en === null && ei(), !1;
      } catch {
      } finally {
      }
      if (r = $l(e, n, o, t), r !== null) return Kn(r, e, t), Kf(r, n, t), !0;
    }
    return !1;
  }
  function Su(e, n, r, t) {
    if (t = { lane: 2, revertLane: ps(), gesture: null, action: t, hasEagerState: !1, eagerState: null, next: null }, Ei(e)) {
      if (n) throw Error(u(479));
    } else n = $l(e, r, t, 2), n !== null && Kn(n, e, 2);
  }
  function Ei(e) {
    var n = e.alternate;
    return e === be || n !== null && n === be;
  }
  function Yf(e, n) {
    ko = yi = !0;
    var r = e.pending;
    r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n;
  }
  function Kf(e, n, r) {
    if ((r & 4194048) !== 0) {
      var t = n.lanes;
      t &= e.pendingLanes, r |= t, n.lanes = r, Ks(e, r);
    }
  }
  var Ni = { readContext: Mn, use: wi, useCallback: hn, useContext: hn, useEffect: hn, useImperativeHandle: hn, useLayoutEffect: hn, useInsertionEffect: hn, useMemo: hn, useReducer: hn, useRef: hn, useState: hn, useDebugValue: hn, useDeferredValue: hn, useTransition: hn, useSyncExternalStore: hn, useId: hn, useHostTransitionStatus: hn, useFormState: hn, useActionState: hn, useOptimistic: hn, useMemoCache: hn, useCacheRefresh: hn, useEffectEvent: hn }, Zf = { readContext: Mn, use: wi, useCallback: function(e, n) {
    return Wn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Mn, useEffect: Df, useImperativeHandle: function(e, n, r) {
    r = r != null ? r.concat([e]) : null, Si(4194308, 4, Af.bind(null, n, e), r);
  }, useLayoutEffect: function(e, n) {
    return Si(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    Si(4, 2, e, n);
  }, useMemo: function(e, n) {
    var r = Wn();
    n = n === void 0 ? null : n;
    var t = e();
    if (Gt) {
      yn(!0);
      try {
        e();
      } finally {
        yn(!1);
      }
    }
    return r.memoizedState = [t, n], t;
  }, useReducer: function(e, n, r) {
    var t = Wn();
    if (r !== void 0) {
      var o = r(n);
      if (Gt) {
        yn(!0);
        try {
          r(n);
        } finally {
          yn(!1);
        }
      }
    } else o = n;
    return t.memoizedState = t.baseState = o, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }, t.queue = e, e = e.dispatch = Jm.bind(null, be, e), [t.memoizedState, e];
  }, useRef: function(e) {
    var n = Wn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: function(e) {
    e = mu(e);
    var n = e.queue, r = Xf.bind(null, be, n);
    return n.dispatch = r, [e.memoizedState, r];
  }, useDebugValue: vu, useDeferredValue: function(e, n) {
    var r = Wn();
    return bu(r, e, n);
  }, useTransition: function() {
    var e = mu(!1);
    return e = Uf.bind(null, be, e.queue, !0, !1), Wn().memoizedState = e, [!1, e];
  }, useSyncExternalStore: function(e, n, r) {
    var t = be, o = Wn();
    if (Ee) {
      if (r === void 0) throw Error(u(407));
      r = r();
    } else {
      if (r = n(), en === null) throw Error(u(349));
      (ze & 127) !== 0 || bf(t, n, r);
    }
    o.memoizedState = r;
    var a = { value: r, getSnapshot: n };
    return o.queue = a, Df(kf.bind(null, t, a, e), [e]), t.flags |= 2048, xo(9, { destroy: void 0 }, wf.bind(null, t, a, r, n), null), r;
  }, useId: function() {
    var e = Wn(), n = en.identifierPrefix;
    if (Ee) {
      var r = Tr, t = Or;
      r = (t & ~(1 << 32 - wn(t) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = vi++, 0 < r && (n += "H" + r.toString(32)), n += "_";
    } else r = qm++, n = "_" + n + "r_" + r.toString(32) + "_";
    return e.memoizedState = n;
  }, useHostTransitionStatus: ku, useFormState: Of, useActionState: Of, useOptimistic: function(e) {
    var n = Wn();
    n.memoizedState = n.baseState = e;
    var r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return n.queue = r, n = Su.bind(null, be, !0, r), r.dispatch = n, [e, n];
  }, useMemoCache: du, useCacheRefresh: function() {
    return Wn().memoizedState = Zm.bind(null, be);
  }, useEffectEvent: function(e) {
    var n = Wn(), r = { impl: e };
    return n.memoizedState = r, function() {
      if ((We & 2) !== 0) throw Error(u(440));
      return r.impl.apply(void 0, arguments);
    };
  } }, Jf = { readContext: Mn, use: wi, useCallback: Vf, useContext: Mn, useEffect: yu, useImperativeHandle: $f, useInsertionEffect: jf, useLayoutEffect: Rf, useMemo: Wf, useReducer: ki, useRef: If, useState: function() {
    return ki(Kr);
  }, useDebugValue: vu, useDeferredValue: function(e, n) {
    var r = vn();
    return Hf(r, Ke.memoizedState, e, n);
  }, useTransition: function() {
    var e = ki(Kr)[0], n = vn().memoizedState;
    return [typeof e == "boolean" ? e : ga(e), n];
  }, useSyncExternalStore: vf, useId: Gf, useHostTransitionStatus: ku, useFormState: Tf, useActionState: Tf, useOptimistic: function(e, n) {
    var r = vn();
    return Ef(r, Ke, e, n);
  }, useMemoCache: du, useCacheRefresh: Qf, useEffectEvent: Ff }, e0 = { readContext: Mn, use: wi, useCallback: Vf, useContext: Mn, useEffect: yu, useImperativeHandle: $f, useInsertionEffect: jf, useLayoutEffect: Rf, useMemo: Wf, useReducer: hu, useRef: If, useState: function() {
    return hu(Kr);
  }, useDebugValue: vu, useDeferredValue: function(e, n) {
    var r = vn();
    return Ke === null ? bu(r, e, n) : Hf(r, Ke.memoizedState, e, n);
  }, useTransition: function() {
    var e = hu(Kr)[0], n = vn().memoizedState;
    return [typeof e == "boolean" ? e : ga(e), n];
  }, useSyncExternalStore: vf, useId: Gf, useHostTransitionStatus: ku, useFormState: Mf, useActionState: Mf, useOptimistic: function(e, n) {
    var r = vn();
    return Ke !== null ? Ef(r, Ke, e, n) : (r.baseState = e, [e, r.queue.dispatch]);
  }, useMemoCache: du, useCacheRefresh: Qf, useEffectEvent: Ff };
  function xu(e, n, r, t) {
    n = e.memoizedState, r = r(t, n), r = r == null ? n : G({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Eu = { enqueueSetState: function(e, n, r) {
    e = e._reactInternals;
    var t = lr(), o = ct(t);
    o.payload = n, r != null && (o.callback = r), n = ft(e, o, t), n !== null && (Kn(n, e, t), fa(n, e, t));
  }, enqueueReplaceState: function(e, n, r) {
    e = e._reactInternals;
    var t = lr(), o = ct(t);
    o.tag = 1, o.payload = n, r != null && (o.callback = r), n = ft(e, o, t), n !== null && (Kn(n, e, t), fa(n, e, t));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var r = lr(), t = ct(r);
    t.tag = 2, n != null && (t.callback = n), n = ft(e, t, r), n !== null && (Kn(n, e, r), fa(n, e, r));
  } };
  function ed(e, n, r, t, o, a, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(t, a, i) : n.prototype && n.prototype.isPureReactComponent ? !ta(r, t) || !ta(o, a) : !0;
  }
  function nd(e, n, r, t) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, t), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, t), n.state !== e && Eu.enqueueReplaceState(n, n.state, null);
  }
  function Qt(e, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var t in n) t !== "ref" && (r[t] = n[t]);
    }
    if (e = e.defaultProps) {
      r === n && (r = G({}, r));
      for (var o in e) r[o] === void 0 && (r[o] = e[o]);
    }
    return r;
  }
  function rd(e) {
    Ja(e);
  }
  function td(e) {
    console.error(e);
  }
  function od(e) {
    Ja(e);
  }
  function Ci(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  function ad(e, n, r) {
    try {
      var t = e.onCaughtError;
      t(r.value, { componentStack: r.stack, errorBoundary: n.tag === 1 ? n.stateNode : null });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Nu(e, n, r) {
    return r = ct(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      Ci(e, n);
    }, r;
  }
  function id(e) {
    return e = ct(e), e.tag = 3, e;
  }
  function ld(e, n, r, t) {
    var o = r.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      e.payload = function() {
        return o(a);
      }, e.callback = function() {
        ad(n, r, t);
      };
    }
    var i = r.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
      ad(n, r, t), typeof o != "function" && (bt === null ? bt = /* @__PURE__ */ new Set([this]) : bt.add(this));
      var l = t.stack;
      this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
    });
  }
  function n0(e, n, r, t, o) {
    if (r.flags |= 32768, t !== null && typeof t == "object" && typeof t.then == "function") {
      if (n = r.alternate, n !== null && $t(n, r, o, !0), r = In.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
          case 19:
            return Vn === null ? qi() : r.alternate === null && mn === 0 && (mn = 3), r.flags &= -257, r.flags |= 65536, r.lanes = o, t === di ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = /* @__PURE__ */ new Set([t]) : n.add(t), cs(e, t, o)), !1;
          case 22:
            return r.flags |= 65536, t === di ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([t]) }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = /* @__PURE__ */ new Set([t]) : r.add(t)), cs(e, t, o)), !1;
        }
        throw Error(u(435, r.tag));
      }
      return cs(e, t, o), qi(), !1;
    }
    if (Ee) return n = In.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = o, t !== Bl && (e = Error(u(422), { cause: t }), ia(fr(e, r)))) : (t !== Bl && (n = Error(u(423), { cause: t }), ia(fr(n, r))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, t = fr(t, r), o = Nu(e.stateNode, t, o), nu(e, o), mn !== 4 && (mn = 2)), !1;
    var a = Error(u(520), { cause: t });
    if (a = fr(a, r), Na === null ? Na = [a] : Na.push(a), mn !== 4 && (mn = 2), n === null) return !0;
    t = fr(t, r), r = n;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = o & -o, r.lanes |= e, e = Nu(r.stateNode, t, e), nu(r, e), !1;
        case 1:
          if (n = r.type, a = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (bt === null || !bt.has(a)))) return r.flags |= 65536, o &= -o, r.lanes |= o, o = id(o), ld(o, e, r, t), nu(r, o), !1;
          break;
        case 22:
          if (r.memoizedState !== null) return r.flags |= 65536, !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Cu = Error(u(461)), xn = !1;
  function Cn(e, n, r, t) {
    n.child = e === null ? ff(n, null, r, t) : qt(n, e.child, r, t);
  }
  function ud(e, n, r, t, o) {
    r = r.render;
    var a = n.ref;
    if ("ref" in t) {
      var i = {};
      for (var l in t) l !== "ref" && (i[l] = t[l]);
    } else i = t;
    return Vt(n), t = uu(e, n, r, i, a, o), l = su(), e !== null && !xn ? (cu(e, n, o), Zr(e, n, o)) : (Ee && l && ai(n), n.flags |= 1, Cn(e, n, t, o), n.child);
  }
  function sd(e, n, r, t, o) {
    if (e === null) {
      var a = r.type;
      return typeof a == "function" && !Vl(a) && a.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = a, cd(e, n, a, t, o)) : (e = ti(r.type, null, t, n, n.mode, o), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (a = e.child, !Iu(e, o)) {
      var i = a.memoizedProps;
      if (r = r.compare, r = r !== null ? r : ta, r(i, t) && e.ref === n.ref) return Zr(e, n, o);
    }
    return n.flags |= 1, e = qr(a, t), e.ref = n.ref, e.return = n, n.child = e;
  }
  function cd(e, n, r, t, o) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (ta(a, t) && e.ref === n.ref) if (xn = !1, n.pendingProps = t = a, Iu(e, o)) (e.flags & 131072) !== 0 && (xn = !0);
      else return n.lanes = e.lanes, Zr(e, n, o);
    }
    return _u(e, n, r, t, o);
  }
  function fd(e, n, r, t) {
    var o = t.children, a = e !== null ? e.memoizedState : null;
    if (e === null && n.stateNode === null && (n.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (a = a !== null ? a.baseLanes | r : r, e !== null) {
          for (t = n.child = e.child, o = 0; t !== null; ) o = o | t.lanes | t.childLanes, t = t.sibling;
          t = o & ~a;
        } else t = 0, n.child = null;
        return dd(e, n, a, r, t);
      }
      if ((r & 536870912) !== 0) n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ci(n, a !== null ? a.cachePool : null), a !== null ? hf(n, a) : tu(), mf(n);
      else return t = n.lanes = 536870912, dd(e, n, a !== null ? a.baseLanes | r : r, r, t);
    } else a !== null ? (ci(n, a.cachePool), hf(n, a), ht(), n.memoizedState = null) : (e !== null && ci(n, null), tu(), ht());
    return Cn(e, n, o, r), n.child;
  }
  function va(e, n) {
    return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), n.sibling;
  }
  function dd(e, n, r, t, o) {
    var a = Kl();
    return a = a === null ? null : { parent: kn._currentValue, pool: a }, n.memoizedState = { baseLanes: r, cachePool: a }, e !== null && ci(n, null), tu(), mf(n), e !== null && $t(e, n, t, !0), n.childLanes = o, null;
  }
  function _i(e, n) {
    return n = Pi({ mode: n.mode, children: n.children }, e.mode), n.ref = e.ref, e.child = n, n.return = e, n;
  }
  function pd(e, n, r) {
    return qt(n, e.child, null, r), e = _i(n, n.pendingProps), e.flags |= 2, tr(n), n.memoizedState = null, e;
  }
  function r0(e, n, r) {
    var t = n.pendingProps, o = (n.flags & 128) !== 0;
    if (n.flags &= -129, e === null) {
      if (Ee) {
        if (t.mode === "hidden") return e = _i(n, t), n.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, va(null, e);
        if (au(n), (e = rn) ? (e = Ap(e, hr), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = { dehydrated: e, treeContext: ot !== null ? { id: Or, overflow: Tr } : null, retryLane: 536870912, hydrationErrors: null }, r = Xc(e), r.return = n, n.child = r, Pn = n, rn = null)) : e = null, e === null) throw it(n);
        return n.lanes = 536870912, null;
      }
      return _i(n, t);
    }
    var a = e.memoizedState;
    if (a !== null) {
      var i = a.dehydrated;
      if (au(n), o) if (n.flags & 256) n.flags &= -257, n = pd(e, n, r);
      else if (n.memoizedState !== null) n.child = e.child, n.flags |= 128, n = null;
      else throw Error(u(558));
      else if (xn || $t(e, n, r, !1), o = (r & e.childLanes) !== 0, xn || o) {
        if (dt.current === null) {
          if (t = en, t !== null && (i = Zs(t, r), i !== 0 && i !== a.retryLane)) throw a.retryLane = i, Ft(e, i), Kn(t, e, i), Cu;
          qi();
        }
        n = pd(e, n, r);
      } else e = a.treeContext, rn = gr(i.nextSibling), Pn = n, Ee = !0, at = null, hr = !1, e !== null && Zc(n, e), n = _i(n, t), n.flags |= 134221824;
      return n;
    }
    return e = qr(e.child, { mode: t.mode, children: t.children }), e.ref = n.ref, n.child = e, e.return = n, e;
  }
  function Eo(e, n) {
    var r = n.ref;
    if (r === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(u(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function _u(e, n, r, t, o) {
    return Vt(n), r = uu(e, n, r, t, void 0, o), t = su(), e !== null && !xn ? (cu(e, n, o), Zr(e, n, o)) : (Ee && t && ai(n), n.flags |= 1, Cn(e, n, r, o), n.child);
  }
  function hd(e, n, r, t, o, a) {
    return Vt(n), n.updateQueue = null, r = yf(n, t, r, o), gf(e), t = su(), e !== null && !xn ? (cu(e, n, a), Zr(e, n, a)) : (Ee && t && ai(n), n.flags |= 1, Cn(e, n, r, a), n.child);
  }
  function md(e, n, r, t, o) {
    if (Vt(n), n.stateNode === null) {
      var a = ho, i = r.contextType;
      typeof i == "object" && i !== null && (a = Mn(i)), a = new r(t, a), n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Eu, n.stateNode = a, a._reactInternals = n, a = n.stateNode, a.props = t, a.state = n.memoizedState, a.refs = {}, Jl(n), i = r.contextType, a.context = typeof i == "object" && i !== null ? Mn(i) : ho, a.state = n.memoizedState, i = r.getDerivedStateFromProps, typeof i == "function" && (xu(n, r, i, t), a.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (i = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), i !== a.state && Eu.enqueueReplaceState(a, a.state, null), pa(n, t, a, o), da(), a.state = n.memoizedState), typeof a.componentDidMount == "function" && (n.flags |= 4194308), t = !0;
    } else if (e === null) {
      a = n.stateNode;
      var l = n.memoizedProps, s = Qt(r, l);
      a.props = s;
      var m = a.context, b = r.contextType;
      i = ho, typeof b == "object" && b !== null && (i = Mn(b));
      var x = r.getDerivedStateFromProps;
      b = typeof x == "function" || typeof a.getSnapshotBeforeUpdate == "function", l = n.pendingProps !== l, b || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l || m !== i) && nd(n, a, t, i), st = !1;
      var p = n.memoizedState;
      a.state = p, pa(n, t, a, o), da(), m = n.memoizedState, l || p !== m || st ? (typeof x == "function" && (xu(n, r, x, t), m = n.memoizedState), (s = st || ed(n, r, s, t, p, m, i)) ? (b || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = t, n.memoizedState = m), a.props = t, a.state = m, a.context = i, t = s) : (typeof a.componentDidMount == "function" && (n.flags |= 4194308), t = !1);
    } else {
      a = n.stateNode, eu(e, n), i = n.memoizedProps, b = Qt(r, i), a.props = b, x = n.pendingProps, p = a.context, m = r.contextType, s = ho, typeof m == "object" && m !== null && (s = Mn(m)), l = r.getDerivedStateFromProps, (m = typeof l == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== x || p !== s) && nd(n, a, t, s), st = !1, p = n.memoizedState, a.state = p, pa(n, t, a, o), da();
      var v = n.memoizedState;
      i !== x || p !== v || st || e !== null && e.dependencies !== null && ui(e.dependencies) ? (typeof l == "function" && (xu(n, r, l, t), v = n.memoizedState), (b = st || ed(n, r, b, t, p, v, s) || e !== null && e.dependencies !== null && ui(e.dependencies)) ? (m || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(t, v, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(t, v, s)), typeof a.componentDidUpdate == "function" && (n.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = t, n.memoizedState = v), a.props = t, a.state = v, a.context = s, t = b) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), t = !1);
    }
    return a = t, Eo(e, n), t = (n.flags & 128) !== 0, a || t ? (a = n.stateNode, r = t && typeof r.getDerivedStateFromError != "function" ? null : a.render(), n.flags |= 1, e !== null && t ? (n.child = qt(n, e.child, null, o), n.child = qt(n, null, r, o)) : Cn(e, n, r, o), n.memoizedState = a.state, e = n.child) : e = Zr(e, n, o), e;
  }
  function gd(e, n, r, t) {
    return Rt(), n.flags |= 256, Cn(e, n, r, t), n.child;
  }
  var Pu = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Lu(e) {
    return { baseLanes: e, cachePool: of() };
  }
  function Ou(e, n, r) {
    return e = e !== null ? e.childLanes & ~r : 0, n && (e |= ir), e;
  }
  function yd(e, n, r) {
    var t = n.pendingProps, o = !1, a = (n.flags & 128) !== 0, i;
    if ((i = a) || (i = e !== null && e.memoizedState === null ? !1 : (Dn.current & 2) !== 0), i && (o = !0, n.flags &= -129), i = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ee) {
        if (o ? pt(n) : ht(), (e = rn) ? (e = Ap(e, hr), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = { dehydrated: e, treeContext: ot !== null ? { id: Or, overflow: Tr } : null, retryLane: 536870912, hydrationErrors: null }, r = Xc(e), r.return = n, n.child = r, Pn = n, rn = null)) : e = null, e === null) throw it(n);
        return Os(e) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      return a = t.children, t = t.fallback, o ? (ht(), o = n.mode, a = Pi({ mode: "hidden", children: a }, o), t = jt(t, o, r, null), a.return = n, t.return = n, a.sibling = t, n.child = a, t = n.child, t.memoizedState = Lu(r), t.childLanes = Ou(e, i, r), n.memoizedState = Pu, va(null, t)) : (pt(n), Tu(n, a));
    }
    var l = e.memoizedState;
    if (l !== null) {
      var s = l.dehydrated;
      if (s !== null) return t0(e, n, a, i, t, s, l, r);
    }
    return o ? (ht(), o = t.fallback, a = n.mode, l = e.child, s = l.sibling, t = qr(l, { mode: "hidden", children: t.children }), t.subtreeFlags = l.subtreeFlags & 1206910976, s !== null ? o = qr(s, o) : (o = jt(o, a, r, null), o.flags |= 2), o.return = n, t.return = n, t.sibling = o, n.child = t, va(null, t), t = n.child, o = e.child.memoizedState, o === null ? o = Lu(r) : (a = o.cachePool, a !== null ? (l = kn._currentValue, a = a.parent !== l ? { parent: l, pool: l } : a) : a = of(), o = { baseLanes: o.baseLanes | r, cachePool: a }), t.memoizedState = o, t.childLanes = Ou(e, i, r), n.memoizedState = Pu, va(e.child, t)) : (pt(n), r = e.child, e = r.sibling, r = qr(r, { mode: "visible", children: t.children }), r.return = n, r.sibling = null, e !== null && (i = n.deletions, i === null ? (n.deletions = [e], n.flags |= 16) : i.push(e)), n.child = r, n.memoizedState = null, r);
  }
  function Tu(e, n) {
    return n = Pi({ mode: "visible", children: n }, e.mode), n.return = e, e.child = n;
  }
  function Pi(e, n) {
    return e = Gn(22, e, null, n), e.lanes = 0, e;
  }
  function Li(e, n, r) {
    return qt(n, e.child, null, r), e = Tu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function t0(e, n, r, t, o, a, i, l) {
    if (r) return n.flags & 256 ? (pt(n), n.flags &= -257, Li(e, n, l)) : n.memoizedState !== null ? (ht(), n.child = e.child, n.flags |= 128, null) : (ht(), a = o.fallback, i = n.mode, o = Pi({ mode: "visible", children: o.children }, i), a = jt(a, i, l, null), a.flags |= 2, o.return = n, a.return = n, o.sibling = a, n.child = o, qt(n, e.child, null, l), o = n.child, o.memoizedState = Lu(l), o.childLanes = Ou(e, t, l), n.memoizedState = Pu, va(null, o));
    if (pt(n), Os(a)) {
      if (t = a.nextSibling && a.nextSibling.dataset, t) var s = t.dgst;
      return t = s, t !== "" && (o = Error(u(419)), o.stack = "", o.digest = t, ia({ value: o, source: null, stack: null })), Li(e, n, l);
    }
    if (xn || $t(e, n, l, !1), t = (l & e.childLanes) !== 0, xn || t) {
      if (dt.current !== null) return Li(e, n, l);
      if (t = en, t !== null && (o = Zs(t, l), o !== 0 && o !== i.retryLane)) throw i.retryLane = o, Ft(e, o), Kn(t, e, o), Cu;
      return Ls(a) || qi(), Li(e, n, l);
    }
    return Ls(a) ? (n.flags |= 192, n.child = e.child, null) : (e = i.treeContext, rn = gr(a.nextSibling), Pn = n, Ee = !0, at = null, hr = !1, e !== null && Zc(n, e), n = Tu(n, o.children), n.flags |= 134221824, n);
  }
  function vd(e, n, r) {
    e.lanes |= n;
    var t = e.alternate;
    t !== null && (t.lanes |= n), li(e.return, n, r);
  }
  function bd(e) {
    for (var n = null; e !== null; ) {
      var r = e.alternate;
      r !== null && gi(r) === null && (n = e), e = e.sibling;
    }
    return n;
  }
  function Oi(e, n, r, t, o, a) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: t, tail: r, tailMode: o, treeForkCount: a } : (i.isBackwards = n, i.rendering = null, i.renderingStartTime = 0, i.last = t, i.tail = r, i.tailMode = o, i.treeForkCount = a);
  }
  function zu(e) {
    var n = e.child;
    for (e.child = null; n !== null; ) {
      var r = n.sibling;
      n.sibling = e.child, e.child = n, n = r;
    }
  }
  function Mu(e, n, r) {
    var t = n.pendingProps, o = t.revealOrder, a = t.tail;
    t = t.children;
    var i = Dn.current;
    if (n.flags & 128) return ha(n, i), null;
    var l = (i & 2) !== 0;
    if (l ? (i = i & 1 | 2, n.flags |= 128) : i &= 1, ha(n, i), o === "backwards" && e !== null ? (zu(e), Cn(e, n, t, r), zu(e)) : Cn(e, n, t, r), t = Ee ? aa : 0, !l && e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && vd(e, r, n);
      else if (e.tag === 19) vd(e, r, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === n) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === n) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (o) {
      case "backwards":
        r = bd(n.child), r === null ? (o = n.child, n.child = null) : (o = r.sibling, r.sibling = null, zu(n)), Oi(n, !0, o, null, a, t);
        break;
      case "unstable_legacy-backwards":
        for (r = null, o = n.child, n.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && gi(e) === null) {
            n.child = o;
            break;
          }
          e = o.sibling, o.sibling = r, r = o, o = e;
        }
        Oi(n, !0, r, null, a, t);
        break;
      case "together":
        Oi(n, !1, null, null, void 0, t);
        break;
      case "independent":
        n.memoizedState = null;
        break;
      default:
        r = bd(n.child), r === null ? (o = n.child, n.child = null) : (o = r.sibling, r.sibling = null), Oi(n, !1, o, r, a, t);
    }
    return n.child;
  }
  function wd(e, n, r) {
    var t = n.pendingProps;
    return lt(n, n.type, t.value), Cn(e, n, t.children, r), n.child;
  }
  function Zr(e, n, r) {
    if (e !== null && (n.dependencies = e.dependencies), vt |= n.lanes, (r & n.childLanes) === 0) if (e !== null) {
      if ($t(e, n, r, !1), (r & n.childLanes) === 0) return null;
    } else return null;
    if (e !== null && n.child !== e.child) throw Error(u(153));
    if (n.child !== null) {
      for (e = n.child, r = qr(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null; ) e = e.sibling, r = r.sibling = qr(e, e.pendingProps), r.return = n;
      r.sibling = null;
    }
    return n.child;
  }
  function Iu(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ui(e)));
  }
  function o0(e, n, r) {
    switch (n.tag) {
      case 3:
        $r(n, n.stateNode.containerInfo), lt(n, kn, e.memoizedState.cache), Rt();
        break;
      case 27:
      case 5:
        he(n);
        break;
      case 4:
        $r(n, n.stateNode.containerInfo);
        break;
      case 10:
        lt(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return n.flags |= 128, au(n), null;
        break;
      case 13:
        var t = n.memoizedState;
        if (t !== null) {
          if (t.dehydrated !== null) return pt(n), n.flags |= 128, null;
          t = $t(e, n, r, !1);
          var o = n.child.childLanes;
          return t || (r & o) !== 0 ? yd(e, n, r) : (pt(n), e = Zr(e, n, r), e !== null ? e.sibling : null);
        }
        pt(n);
        break;
      case 19:
        if (n.flags & 128) return Mu(e, n, r);
        if (o = (e.flags & 128) !== 0, t = (r & n.childLanes) !== 0, t || ($t(e, n, r, !1), t = (r & n.childLanes) !== 0), o) {
          if (t) return Mu(e, n, r);
          n.flags |= 128;
        }
        if (o = n.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ha(n, Dn.current), t) break;
        return null;
      case 22:
        return n.lanes = 0, fd(e, n, r, n.pendingProps);
      case 24:
        lt(n, kn, e.memoizedState.cache);
    }
    return Zr(e, n, r);
  }
  function kd(e, n, r) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps) xn = !0;
    else {
      if (!Iu(e, r) && (n.flags & 128) === 0) return xn = !1, o0(e, n, r);
      xn = (e.flags & 131072) !== 0;
    }
    else xn = !1, Ee && (n.flags & 1048576) !== 0 && Kc(n, aa, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var t = n.pendingProps;
          if (e = Ut(n.elementType), n.type = e, typeof e == "function") Vl(e) ? (t = Qt(e, t), n.tag = 1, n = md(null, n, e, t, r)) : (n.tag = 0, n = _u(null, n, e, t, r));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === N) {
                n.tag = 11, n = ud(null, n, e, t, r);
                break e;
              } else if (o === $e) {
                n.tag = 14, n = sd(null, n, e, t, r);
                break e;
              } else if (o === nn) {
                n.tag = 10, n.type = e, n = wd(null, n, r);
                break e;
              }
            }
            throw n = ie(e) || e, Error(u(306, n, ""));
          }
        }
        return n;
      case 0:
        return _u(e, n, n.type, n.pendingProps, r);
      case 1:
        return t = n.type, o = Qt(t, n.pendingProps), md(e, n, t, o, r);
      case 3:
        e: {
          if ($r(n, n.stateNode.containerInfo), e === null) throw Error(u(387));
          t = n.pendingProps;
          var a = n.memoizedState;
          o = a.element, eu(e, n), pa(n, t, null, r);
          var i = n.memoizedState;
          if (t = i.cache, lt(n, kn, t), t !== a.cache && Ql(n, [kn], r, !0), da(), t = i.element, a.isDehydrated) if (a = { element: t, isDehydrated: !1, cache: i.cache }, n.updateQueue.baseState = a, n.memoizedState = a, n.flags & 256) {
            n = gd(e, n, t, r);
            break e;
          } else if (t !== o) {
            o = fr(Error(u(424)), n), ia(o), n = gd(e, n, t, r);
            break e;
          } else {
            switch (e = n.stateNode.containerInfo, e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
            }
            for (rn = gr(e.firstChild), Pn = n, Ee = !0, at = null, hr = !0, r = ff(n, null, t, r), n.child = r; r; ) r.flags = r.flags & -3 | 134221824, r = r.sibling;
          }
          else {
            if (Rt(), t === o) {
              n = Zr(e, n, r);
              break e;
            }
            Cn(e, n, t, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Eo(e, n), e === null ? (r = qp(n.type, null, n.pendingProps, null)) ? n.memoizedState = r : Ee || (n.stateNode = Np(n.type, n.pendingProps, gn.current, n)) : n.memoizedState = qp(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
      case 27:
        return he(n), e === null && Ee && (t = n.stateNode = Wp(n.type, n.pendingProps, gn.current), Pn = n, hr = !0, o = rn, St(n.type) ? (Ts = o, rn = gr(t.firstChild)) : rn = o), Cn(e, n, n.pendingProps.children, r), Eo(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ee && ((o = t = rn) && (t = Z0(t, n.type, n.pendingProps, hr), t !== null ? (n.stateNode = t, Pn = n, rn = gr(t.firstChild), hr = !1, o = !0) : o = !1), o || it(n)), he(n), o = n.type, a = n.pendingProps, i = e !== null ? e.memoizedProps : null, t = a.children, Ss(o, a) ? t = null : i !== null && Ss(o, i) && (n.flags |= 32), n.memoizedState !== null && (o = uu(e, n, Gm, null, null, r), Wo._currentValue = o), Eo(e, n), Cn(e, n, t, r), n.child;
      case 6:
        return e === null && Ee && ((e = r = rn) && (r = J0(r, n.pendingProps, hr), r !== null ? (n.stateNode = r, Pn = n, rn = null, e = !0) : e = !1), e || it(n)), null;
      case 13:
        return yd(e, n, r);
      case 4:
        return $r(n, n.stateNode.containerInfo), t = n.pendingProps, e === null ? n.child = qt(n, null, t, r) : Cn(e, n, t, r), n.child;
      case 11:
        return ud(e, n, n.type, n.pendingProps, r);
      case 7:
        return t = n.pendingProps, Eo(e, n), Cn(e, n, t, r), n.child;
      case 8:
        return Cn(e, n, n.pendingProps.children, r), n.child;
      case 12:
        return Cn(e, n, n.pendingProps.children, r), n.child;
      case 10:
        return wd(e, n, r);
      case 9:
        return o = n.type._context, t = n.pendingProps.children, Vt(n), o = Mn(o), t = t(o), n.flags |= 1, Cn(e, n, t, r), n.child;
      case 14:
        return sd(e, n, n.type, n.pendingProps, r);
      case 15:
        return cd(e, n, n.type, n.pendingProps, r);
      case 19:
        return Mu(e, n, r);
      case 31:
        return r0(e, n, r);
      case 22:
        return fd(e, n, r, n.pendingProps);
      case 24:
        return Vt(n), t = Mn(kn), e === null ? (o = Kl(), o === null && (o = en, a = Xl(), o.pooledCache = a, a.refCount++, a !== null && (o.pooledCacheLanes |= r), o = a), n.memoizedState = { parent: t, cache: o }, Jl(n), lt(n, kn, o)) : ((e.lanes & r) !== 0 && (eu(e, n), pa(n, null, null, r), da()), o = e.memoizedState, a = n.memoizedState, o.parent !== t ? (o = { parent: t, cache: t }, n.memoizedState = o, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = o), lt(n, kn, t)) : (t = a.cache, lt(n, kn, t), t !== o.cache && Ql(n, [kn], r, !0))), Cn(e, n, n.pendingProps.children, r), n.child;
      case 30:
        return n.stateNode === null && (n.stateNode = { autoName: null, paired: null, clones: null, ref: null }), t = n.pendingProps, t.name != null && t.name !== "auto" ? n.flags |= e === null ? 18882560 : 18874368 : Ee && ai(n), e !== null && e.memoizedProps.name !== t.name ? n.flags |= 4194816 : Eo(e, n), Cn(e, n, t.children, r), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(u(156, n.tag));
  }
  function Jr(e) {
    e.flags |= 4;
  }
  function Du(e, n, r, t, o) {
    var a;
    if ((a = (e.mode & 32) !== 0) && (a = r === null ? Yp(n, t) : Yp(n, t) && (t.src !== r.src || t.srcSet !== r.srcSet)), a) {
      if (e.flags |= 16777216, (o & 335544128) === o) if (e.stateNode.complete) e.flags |= 8192;
      else if (rp()) e.flags |= 8192;
      else throw Bt = di, Zl;
    } else e.flags &= -16777217;
  }
  function Sd(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !Kp(n)) if (rp()) e.flags |= 8192;
    else throw Bt = di, Zl;
  }
  function Ti(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Xs() : 536870912, e.lanes |= n, Lo |= n);
  }
  function ba(e, n) {
    if (!Ee) switch (e.tailMode) {
      case "visible":
        break;
      case "collapsed":
        for (var r = e.tail, t = null; r !== null; ) r.alternate !== null && (t = r), r = r.sibling;
        t === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : t.sibling = null;
        break;
      default:
        for (n = e.tail, r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? e.tail = null : r.sibling = null;
    }
  }
  function tn(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, r = 0, t = 0;
    if (n) for (var o = e.child; o !== null; ) r |= o.lanes | o.childLanes, t |= o.subtreeFlags & 1206910976, t |= o.flags & 1206910976, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) r |= o.lanes | o.childLanes, t |= o.subtreeFlags, t |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= t, e.childLanes = r, n;
  }
  function a0(e, n, r) {
    var t = n.pendingProps;
    switch (Ul(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return tn(n), null;
      case 1:
        return tn(n), null;
      case 3:
        return r = n.stateNode, t = null, e !== null && (t = e.memoizedState.cache), n.memoizedState.cache !== t && (n.flags |= 2048), Xr(kn), vr(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (yo(n) ? Jr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ql())), tn(n), null;
      case 26:
        var o = n.type, a = n.memoizedState;
        return e === null ? (Jr(n), a !== null ? (tn(n), Sd(n, a)) : (tn(n), Du(n, o, null, t, r))) : a ? a !== e.memoizedState ? (Jr(n), tn(n), Sd(n, a)) : (tn(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== t && Jr(n), tn(n), Du(n, o, e, t, r)), null;
      case 27:
        if (_e(n), r = gn.current, o = n.type, e !== null && n.stateNode != null) e.memoizedProps !== t && Jr(n);
        else {
          if (!t) {
            if (n.stateNode === null) throw Error(u(166));
            return tn(n), n.subtreeFlags &= -33554433, null;
          }
          e = je.current, yo(n) ? Jc(n) : (e = Wp(o, t, r), n.stateNode = e, Jr(n));
        }
        return tn(n), n.subtreeFlags &= -33554433, null;
      case 5:
        if (_e(n), o = n.type, e !== null && n.stateNode != null) e.memoizedProps !== t && Jr(n);
        else {
          if (!t) {
            if (n.stateNode === null) throw Error(u(166));
            return tn(n), n.subtreeFlags &= -33554433, null;
          }
          if (a = je.current, yo(n)) Jc(n);
          else {
            var i = Oa(gn.current);
            switch (a) {
              case 1:
                a = i.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                a = i.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    a = i.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    a = i.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                    break;
                  case "script":
                    a = i.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
                    break;
                  case "select":
                    a = typeof t.is == "string" ? i.createElement("select", { is: t.is }) : i.createElement("select"), t.multiple ? a.multiple = !0 : t.size && (a.size = t.size);
                    break;
                  default:
                    a = typeof t.is == "string" ? i.createElement(o, { is: t.is }) : i.createElement(o);
                }
            }
            a[zn] = n, a[qn] = t;
            e: for (i = n.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) a.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === n) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === n) break e;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            n.stateNode = a;
            e: switch (jn(a, o, t), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!t.autoFocus;
                break e;
              case "img":
                t = !0;
                break e;
              default:
                t = !1;
            }
            t && Jr(n);
          }
        }
        return tn(n), n.subtreeFlags &= -33554433, Du(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, r), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== t && Jr(n);
        else {
          if (typeof t != "string" && n.stateNode === null) throw Error(u(166));
          if (e = gn.current, yo(n)) {
            if (e = n.stateNode, r = n.memoizedProps, t = null, o = Pn, o !== null) switch (o.tag) {
              case 27:
              case 5:
                t = o.memoizedProps;
            }
            e[zn] = n, e = !!(e.nodeValue === r || t !== null && t.suppressHydrationWarning === !0 || kp(e.nodeValue, r)), e || it(n, !0);
          } else e = Oa(e).createTextNode(t), e[zn] = n, n.stateNode = e;
        }
        return tn(n), null;
      case 31:
        if (r = n.memoizedState, e === null || e.memoizedState !== null) {
          if (t = yo(n), r !== null) {
            if (e === null) {
              if (!t) throw Error(u(318));
              if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[zn] = n;
            } else Rt(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            tn(n), e = !1;
          } else r = ql(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e) return n.flags & 256 ? (tr(n), n) : (tr(n), null);
          if ((n.flags & 128) !== 0) throw Error(u(558));
        }
        return tn(n), null;
      case 13:
        if (t = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = yo(n), t !== null && t.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[zn] = n;
            } else Rt(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            tn(n), o = !1;
          } else o = ql(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o) return n.flags & 256 ? (tr(n), n) : (tr(n), null);
        }
        return tr(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = t !== null, e = e !== null && e.memoizedState !== null, r && (t = n.child, o = null, t.alternate !== null && t.alternate.memoizedState !== null && t.alternate.memoizedState.cachePool !== null && (o = t.alternate.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== o && (t.flags |= 2048)), r !== e && r && (n.child.flags |= 8192), Ti(n, n.updateQueue), tn(n), null);
      case 4:
        return vr(), e === null && ys(n.stateNode.containerInfo), n.flags |= 67108864, tn(n), null;
      case 10:
        return Xr(n.type), tn(n), null;
      case 19:
        if (iu(n), t = n.memoizedState, t === null) return tn(n), null;
        if (o = (n.flags & 128) !== 0, a = t.rendering, a === null) if (o) ba(t, !1);
        else {
          if (mn !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
            if (a = gi(e), a !== null) {
              for (n.flags |= 128, ba(t, !1), e = a.updateQueue, n.updateQueue = e, Ti(n, e), n.subtreeFlags = 0, e = r, r = n.child; r !== null; ) Qc(r, e), r = r.sibling;
              return ha(n, Dn.current & 1 | 2), Ee && Gr(n, t.treeForkCount), n.child;
            }
            e = e.sibling;
          }
          t.tail !== null && w() > Wi && (n.flags |= 128, o = !0, ba(t, !1), n.lanes = 4194304);
        }
        else {
          if (!o) if (e = gi(a), e !== null) {
            if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, Ti(n, e), ba(t, !0), t.tail === null && t.tailMode !== "collapsed" && t.tailMode !== "visible" && !a.alternate && !Ee) return tn(n), null;
          } else 2 * w() - t.renderingStartTime > Wi && r !== 536870912 && (n.flags |= 128, o = !0, ba(t, !1), n.lanes = 4194304);
          t.isBackwards ? (a.sibling = n.child, n.child = a) : (e = t.last, e !== null ? e.sibling = a : n.child = a, t.last = a);
        }
        if (t.tail !== null) {
          e = t.tail;
          e: {
            for (r = e; r !== null; ) {
              if (r.alternate !== null) {
                r = !1;
                break e;
              }
              r = r.sibling;
            }
            r = !0;
          }
          return t.rendering = e, t.tail = e.sibling, t.renderingStartTime = w(), e.sibling = null, a = Dn.current, a = o ? a & 1 | 2 : a & 1, t.tailMode === "visible" || t.tailMode === "collapsed" || !r || Ee ? ha(n, a) : (r = a, ve(In, n), ve(Dn, r), Vn === null && (Vn = n)), Ee && Gr(n, t.treeForkCount), e;
        }
        return tn(n), null;
      case 22:
      case 23:
        return tr(n), ou(), t = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== t && (n.flags |= 8192) : t && (n.flags |= 8192), t ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (tn(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : tn(n), r = n.updateQueue, r !== null && Ti(n, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== r && (n.flags |= 2048), e !== null && He(Ht), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), Xr(kn), tn(n), null;
      case 25:
        return null;
      case 30:
        return n.flags |= 33554432, tn(n), null;
    }
    throw Error(u(156, n.tag));
  }
  function i0(e, n) {
    switch (Ul(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Xr(kn), vr(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return _e(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (tr(n), n.alternate === null) throw Error(u(340));
          Rt();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 13:
        if (tr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(u(340));
          Rt();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return iu(n), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, e = n.memoizedState, e !== null && (e.rendering = null, e.tail = null), n.flags |= 4, n) : null;
      case 4:
        return vr(), null;
      case 10:
        return Xr(n.type), null;
      case 22:
      case 23:
        return tr(n), ou(), e !== null && He(Ht), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Xr(kn), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xd(e, n) {
    switch (Ul(n), n.tag) {
      case 3:
        Xr(kn), vr();
        break;
      case 26:
      case 27:
      case 5:
        _e(n);
        break;
      case 4:
        vr();
        break;
      case 31:
        n.memoizedState !== null && tr(n);
        break;
      case 13:
        tr(n);
        break;
      case 19:
        iu(n);
        break;
      case 10:
        Xr(n.type);
        break;
      case 22:
      case 23:
        tr(n), ou(), e !== null && He(Ht);
        break;
      case 24:
        Xr(kn);
    }
  }
  function wa(e, n) {
    try {
      var r = n.updateQueue, t = r !== null ? r.lastEffect : null;
      if (t !== null) {
        var o = t.next;
        r = o;
        do {
          if ((r.tag & e) === e) {
            t = void 0;
            var a = r.create, i = r.inst;
            t = a(), i.destroy = t;
          }
          r = r.next;
        } while (r !== o);
      }
    } catch (l) {
      Ge(n, n.return, l);
    }
  }
  function mt(e, n, r) {
    try {
      var t = n.updateQueue, o = t !== null ? t.lastEffect : null;
      if (o !== null) {
        var a = o.next;
        t = a;
        do {
          if ((t.tag & e) === e) {
            var i = t.inst, l = i.destroy;
            if (l !== void 0) {
              i.destroy = void 0, o = n;
              var s = r, m = l;
              try {
                m();
              } catch (b) {
                Ge(o, s, b);
              }
            }
          }
          t = t.next;
        } while (t !== a);
      }
    } catch (b) {
      Ge(n, n.return, b);
    }
  }
  function Ed(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        pf(n, r);
      } catch (t) {
        Ge(e, e.return, t);
      }
    }
  }
  function Nd(e, n, r) {
    r.props = Qt(e.type, e.memoizedProps), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (t) {
      Ge(e, n, t);
    }
  }
  function zr(e, n) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var t = e.stateNode;
            break;
          case 30:
            var o = e.stateNode, a = Ur(e.memoizedProps, o);
            (o.ref === null || o.ref.name !== a) && (o.ref = zp(a)), t = o.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var i = new ur(e);
              g(e.child, !1, Y0, i, void 0, void 0), e.stateNode = i;
            }
            t = e.stateNode;
            break;
          default:
            t = e.stateNode;
        }
        typeof r == "function" ? e.refCleanup = r(t) : r.current = t;
      }
    } catch (l) {
      Ge(e, n, l);
    }
  }
  function Fn(e, n) {
    var r = e.ref, t = e.refCleanup;
    if (r !== null) if (typeof t == "function") try {
      t();
    } catch (o) {
      Ge(e, n, o);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof r == "function") try {
      r(null);
    } catch (o) {
      Ge(e, n, o);
    }
    else r.current = null;
  }
  function zi(e, n) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && n !== null) for (var r = 0; r < n.length; r++) Rp(e.stateNode, n[r]);
  }
  function Cd(e) {
    for (var n = e.return; n !== null && (ju(n) && Rp(e.stateNode, n.stateNode), !Fu(n)); ) n = n.return;
  }
  function ka(e) {
    for (var n = e.return; n !== null && (ju(n) && K0(e.stateNode, n.stateNode), !Fu(n)); ) n = n.return;
  }
  function Fu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function ju(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Ru(e) {
    var n = e.type, r = e.memoizedProps, t = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && t.focus();
          break e;
        case "img":
          r.src ? t.src = r.src : r.srcSet && (t.srcset = r.srcSet);
      }
    } catch (o) {
      Ge(e, e.return, o);
    }
  }
  function Au(e, n, r) {
    try {
      var t = e.stateNode;
      z0(t, e.type, r, n), t[qn] = n;
    } catch (o) {
      Ge(e, e.return, o);
    }
  }
  function _d(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && St(e.type) || e.tag === 4;
  }
  function $u(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || _d(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && St(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vu(e, n, r, t) {
    var o = e.tag;
    if (o === 5 || o === 6) o = e.stateNode, n ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(o, n) : (n = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, n.appendChild(o), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = Lr)), zi(e, t), Ve = !0;
    else if (o !== 4 && (o === 27 && (zi(e, t), t = null, St(e.type) && (r = e.stateNode, n = null)), e = e.child, e !== null)) for (Vu(e, n, r, t), e = e.sibling; e !== null; ) Vu(e, n, r, t), e = e.sibling;
  }
  function Mi(e, n, r, t) {
    var o = e.tag;
    if (o === 5 || o === 6) o = e.stateNode, n ? r.insertBefore(o, n) : r.appendChild(o), zi(e, t), Ve = !0;
    else if (o !== 4 && (o === 27 && (zi(e, t), t = null, St(e.type) && (r = e.stateNode)), e = e.child, e !== null)) for (Mi(e, n, r, t), e = e.sibling; e !== null; ) Mi(e, n, r, t), e = e.sibling;
  }
  function Pd(e) {
    var n = e.stateNode, r = e.memoizedProps;
    try {
      for (var t = e.type, o = n.attributes; o.length; ) n.removeAttributeNode(o[0]);
      jn(n, t, r), n[zn] = e, n[qn] = r;
    } catch (a) {
      Ge(e, e.return, a);
    }
  }
  var Ii = !1, or = null;
  function Ld(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Ii = !0);
  }
  var Mr = null;
  function Od() {
    var e = Mr;
    return Mr = null, e;
  }
  var Qn = 0;
  function No(e, n, r, t, o) {
    return Qn = 0, Td(e.child, n, r, t, o);
  }
  function Td(e, n, r, t, o) {
    for (var a = !1; e !== null; ) {
      if (e.tag === 5) {
        var i = e.stateNode;
        if (t !== null) {
          var l = Ns(i);
          t.push(l), l.view && (a = !0);
        } else a || Ns(i).view && (a = !0);
        Ii = !0, Op(i, Qn === 0 ? n : n + "_" + Qn, r), Qn++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && o || Td(e.child, n, r, t, o) && (a = !0));
      e = e.sibling;
    }
    return a;
  }
  function Ir(e, n) {
    for (; e !== null; ) e.tag === 5 ? Tp(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && n || Ir(e.child, n)), e = e.sibling;
  }
  function Di(e) {
    if ((e.subtreeFlags & 18874368) !== 0) for (e = e.child; e !== null; ) {
      if ((e.tag !== 22 || e.memoizedState === null) && (Di(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
        var n = e.memoizedProps;
        if (n.name == null || n.name === "auto") throw Error(u(544));
        var r = n.name;
        n = Br(n.default, n.share), n !== "none" && (No(e, r, n, null, !1) || Ir(e.child, !1));
      }
      e = e.sibling;
    }
  }
  function Wu(e, n) {
    if (e.tag === 30) {
      var r = e.stateNode, t = e.memoizedProps, o = Ur(t, r), a = Br(t.default, r.paired ? t.share : t.enter);
      a !== "none" ? No(e, o, a, null, !1) ? (Di(e), r.paired || n || Mo(e, t.onEnter)) : Ir(e.child, !1) : Di(e);
    } else if ((e.subtreeFlags & 33554432) !== 0) for (e = e.child; e !== null; ) Wu(e, n), e = e.sibling;
    else Di(e);
  }
  function Hu(e) {
    if (or !== null && or.size !== 0) {
      var n = or;
      if ((e.subtreeFlags & 18874368) !== 0) for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var r = e.memoizedProps, t = r.name;
            if (t != null && t !== "auto") {
              var o = n.get(t);
              if (o !== void 0) {
                var a = Br(r.default, r.share);
                if (a !== "none" && (No(e, t, a, null, !1) ? (a = e.stateNode, o.paired = a, a.paired = o, Mo(e, r.onShare)) : Ir(e.child, !1)), n.delete(t), n.size === 0) break;
              }
            }
          }
          Hu(e);
        }
        e = e.sibling;
      }
    }
  }
  function Uu(e) {
    if (e.tag === 30) {
      var n = e.memoizedProps, r = Ur(n, e.stateNode), t = or !== null ? or.get(r) : void 0, o = Br(n.default, t !== void 0 ? n.share : n.exit);
      o !== "none" && (No(e, r, o, null, !1) ? t !== void 0 ? (o = e.stateNode, t.paired = o, o.paired = t, or.delete(r), Mo(e, n.onShare)) : Mo(e, n.onExit) : Ir(e.child, !1)), or !== null && Hu(e);
    } else if ((e.subtreeFlags & 33554432) !== 0) for (e = e.child; e !== null; ) Uu(e), e = e.sibling;
    else or !== null && Hu(e);
  }
  function zd(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, r = Ur(n, e.stateNode);
        n = Br(n.default, n.update), e.flags &= -5, n !== "none" && No(e, r, n, e.memoizedState = [], !1);
      } else (e.subtreeFlags & 33554432) !== 0 && zd(e);
      e = e.sibling;
    }
  }
  function Bu(e) {
    if ((e.subtreeFlags & 18874368) !== 0) for (e = e.child; e !== null; ) {
      if (e.tag !== 22 || e.memoizedState === null) {
        if (e.tag === 30 && (e.flags & 18874368) !== 0) {
          var n = e.stateNode;
          n.paired !== null && (n.paired = null, Ir(e.child, !1));
        }
        Bu(e);
      }
      e = e.sibling;
    }
  }
  function Fi(e) {
    if (e.tag === 30) e.stateNode.paired = null, Ir(e.child, !1), Bu(e);
    else if ((e.subtreeFlags & 33554432) !== 0) for (e = e.child; e !== null; ) Fi(e), e = e.sibling;
    else Bu(e);
  }
  function Md(e) {
    for (e = e.child; e !== null; ) e.tag === 30 ? Ir(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Md(e), e = e.sibling;
  }
  function qu(e, n, r, t, o, a, i) {
    for (var l = !1; n !== null; ) {
      if (n.tag === 5) {
        var s = n.stateNode;
        if (a !== null && Qn < a.length) {
          var m = a[Qn], b = Ns(s);
          (m.view || b.view) && (l = !0);
          var x;
          if (x = (e.flags & 4) === 0) if (b.clip) x = !0;
          else {
            x = m.rect;
            var p = b.rect;
            x = x.y !== p.y || x.x !== p.x || x.height !== p.height || x.width !== p.width;
          }
          x && (e.flags |= 4), b.abs ? b = !m.abs : (m = m.rect, b = b.rect, b = m.height !== b.height || m.width !== b.width), b && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Op(s, Qn === 0 ? r : r + "_" + Qn, o), l && (e.flags & 4) !== 0 || (Mr === null && (Mr = []), Mr.push(s, Qn === 0 ? t : t + "_" + Qn, n.memoizedProps)), Qn++;
      } else (n.tag !== 22 || n.memoizedState === null) && (n.tag === 30 && i ? e.flags |= n.flags & 32 : qu(e, n.child, r, t, o, a, i) && (l = !0));
      n = n.sibling;
    }
    return l;
  }
  function Id(e, n) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var r = e.memoizedProps, t = e.stateNode, o = Ur(r, t), a = Br(r.default, r.update), i;
        i = e.memoizedState, e.memoizedState = null, t = e;
        var l = e.child;
        Qn = 0, o = qu(t, l, o, o, a, i, !1), (e.flags & 4) !== 0 && o && Mo(e, r.onUpdate);
      } else (e.subtreeFlags & 33554432) !== 0 && Id(e);
      e = e.sibling;
    }
  }
  var Ln = !1, Ue = !1, Dr = !1, Gu = !1, Dd = typeof WeakSet == "function" ? WeakSet : Set, On = null, Fr = !1, Sa = !1, ji = !1, Qu = !1;
  function l0(e, n, r) {
    if (e = e.containerInfo, ws = Ho, e = Rc(e), Il(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var o = t.getSelection && t.getSelection();
        if (o && o.rangeCount !== 0) {
          t = o.anchorNode;
          var a = o.anchorOffset, i = o.focusNode;
          o = o.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var l = 0, s = -1, m = -1, b = 0, x = 0, p = e, v = null;
          n: for (; ; ) {
            for (var j; p !== t || a !== 0 && p.nodeType !== 3 || (s = l + a), p !== i || o !== 0 && p.nodeType !== 3 || (m = l + o), p.nodeType === 3 && (l += p.nodeValue.length), (j = p.firstChild) !== null; ) v = p, p = j;
            for (; ; ) {
              if (p === e) break n;
              if (v === t && ++b === a && (s = l), v === i && ++x === o && (m = l), (j = p.nextSibling) !== null) break;
              p = v, v = p.parentNode;
            }
            p = j;
          }
          t = s === -1 || m === -1 ? null : { start: s, end: m };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (ks = { focusedElem: e, selectionRange: t }, Ho = !1, r = (r & 335544064) === r, On = n, n = r ? 9270 : 1024; On !== null; ) {
      if (e = On, r && (t = e.deletions, t !== null)) for (a = 0; a < t.length; a++) r && Uu(t[a]);
      if (e.alternate === null && (e.flags & 2) !== 0) r && Ld(e), Ri(r);
      else {
        if (e.tag === 22) {
          if (t = e.alternate, e.memoizedState !== null) {
            t !== null && t.memoizedState === null && r && Uu(t), Ri(r);
            continue;
          } else if (t !== null && t.memoizedState !== null) {
            r && Ld(e), Ri(r);
            continue;
          }
        }
        t = e.child, (e.subtreeFlags & n) !== 0 && t !== null ? (t.return = e, On = t) : (r && zd(e), Ri(r));
      }
    }
    or = null;
  }
  function Ri(e) {
    for (; On !== null; ) {
      var n = On, r = e, t = n.alternate, o = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((o & 1024) !== 0 && t !== null) {
            r = void 0, o = t.memoizedProps, t = t.memoizedState;
            var a = n.stateNode;
            try {
              var i = Qt(n.type, o);
              r = a.getSnapshotBeforeUpdate(i, t), a.__reactInternalSnapshotBeforeUpdate = r;
            } catch (l) {
              Ge(n, n.return, l);
            }
          }
          break;
        case 3:
          if ((o & 1024) !== 0) {
            if (t = n.stateNode.containerInfo, r = t.nodeType, r === 9) Ps(t);
            else if (r === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Ps(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          r && t !== null && (r = Ur(t.memoizedProps, t.stateNode), o = n.memoizedProps, o = Br(o.default, o.update), o !== "none" && No(t, r, o, t.memoizedState = [], !0));
          break;
        default:
          if ((o & 1024) !== 0) throw Error(u(163));
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, On = t;
        break;
      }
      On = n.return;
    }
  }
  function Fd(e, n, r) {
    var t = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        jr(e, r), t & 4 && wa(5, r);
        break;
      case 1:
        if (jr(e, r), t & 4) if (e = r.stateNode, n === null) try {
          e.componentDidMount();
        } catch (i) {
          Ge(r, r.return, i);
        }
        else {
          var o = Qt(r.type, n.memoizedProps);
          n = n.memoizedState;
          try {
            e.componentDidUpdate(o, n, e.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            Ge(r, r.return, i);
          }
        }
        t & 64 && Ed(r), t & 512 && zr(r, r.return);
        break;
      case 3:
        if (jr(e, r), t & 64 && (e = r.updateQueue, e !== null)) {
          if (n = null, r.child !== null) switch (r.child.tag) {
            case 27:
            case 5:
              n = r.child.stateNode;
              break;
            case 1:
              n = r.child.stateNode;
          }
          try {
            pf(e, n);
          } catch (i) {
            Ge(r, r.return, i);
          }
        }
        break;
      case 27:
        n === null && t & 4 && Pd(r);
      case 26:
      case 5:
        jr(e, r), n === null && t & 4 && Ru(r), t & 512 && zr(r, r.return);
        break;
      case 12:
        jr(e, r);
        break;
      case 31:
        jr(e, r), t & 4 && $d(e, r);
        break;
      case 13:
        jr(e, r), t & 4 && Vd(e, r), t & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = b0.bind(null, r), eg(e, r))));
        break;
      case 22:
        if (t = r.memoizedState !== null || Ln, !t) {
          var a = n !== null && n.memoizedState !== null || Ue;
          n = Ln, o = Ue, Ln = t, (Ue = a) && !o ? (t = 2, (r.subtreeFlags & 8772) !== 0 && (t |= 1), Er(e, r, t)) : jr(e, r), Ln = n, Ue = o;
        }
        break;
      case 30:
        jr(e, r), t & 512 && zr(r, r.return);
        break;
      case 7:
        t & 512 && zr(r, r.return);
      default:
        jr(e, r);
    }
  }
  function Xu(e, n) {
    for (e = e.child; e !== null; ) jd(e, n), e = e.sibling;
  }
  function jd(e, n) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var r = e.stateNode;
          if (n) {
            var t = r.style;
            typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
          } else {
            var o = e.stateNode, a = e.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null;
            o.style.display = i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (s) {
          Ge(e, e.return, s);
        }
        Yu(e, n);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = n ? "" : e.memoizedProps, Ve = !0;
        } catch (s) {
          Ge(e, e.return, s);
        }
        break;
      case 18:
        try {
          var l = e.stateNode;
          n ? Lp(l, !0) : Lp(e.stateNode, !1);
        } catch (s) {
          Ge(e, e.return, s);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Xu(e, n);
        break;
      default:
        Xu(e, n);
    }
  }
  function Yu(e, n) {
    if (e.subtreeFlags & 67108864) for (e = e.child; e !== null; ) {
      e: {
        var r = e, t = n;
        switch (r.tag) {
          case 4:
            jd(r, t);
            break e;
          case 22:
            r.memoizedState === null && Yu(r, t);
            break e;
          default:
            Yu(r, t);
        }
      }
      e = e.sibling;
    }
  }
  function Rd(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Rd(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Ha(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ln = null, Xn = !1;
  function Sr(e, n, r) {
    for (r = r.child; r !== null; ) Ad(e, n, r), r = r.sibling;
  }
  function Ad(e, n, r) {
    if (cn && typeof cn.onCommitFiberUnmount == "function") try {
      cn.onCommitFiberUnmount(bn, r);
    } catch {
    }
    switch (r.tag) {
      case 26:
        Ue || Fn(r, n), Sr(e, n, r), r.memoizedState ? r.memoizedState.count-- : r.stateNode && !Ue && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Ue || Fn(r, n), ka(r);
        var t = ln, o = Xn;
        St(r.type) && (ln = r.stateNode, Xn = !1), Sr(e, n, r), Hp(r.stateNode, r.type, r.memoizedProps), ln = t, Xn = o;
        break;
      case 5:
        Ue || Fn(r, n), ka(r);
      case 6:
        if (r.tag === 6 && ka(r), t = ln, o = Xn, ln = null, Sr(e, n, r), ln = t, Xn = o, ln !== null) if (Xn) try {
          (ln.nodeType === 9 ? ln.body : ln.nodeName === "HTML" ? ln.ownerDocument.body : ln).removeChild(r.stateNode), Ve = !0;
        } catch (a) {
          Ge(r, n, a);
        }
        else try {
          ln.removeChild(r.stateNode), Ve = !0;
        } catch (a) {
          Ge(r, n, a);
        }
        break;
      case 18:
        ln !== null && (Xn ? (e = ln, Pp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, r.stateNode), Uo(e)) : Pp(ln, r.stateNode));
        break;
      case 4:
        t = ln, o = Xn, ln = r.stateNode.containerInfo, Xn = !0, Sr(e, n, r), ln = t, Xn = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        mt(2, r, n), Ue || mt(4, r, n), Sr(e, n, r);
        break;
      case 1:
        Ue || (Fn(r, n), t = r.stateNode, typeof t.componentWillUnmount == "function" && Nd(r, n, t)), Sr(e, n, r);
        break;
      case 21:
        Sr(e, n, r);
        break;
      case 22:
        Ue = (t = Ue) || r.memoizedState !== null, Sr(e, n, r), Ue = t;
        break;
      case 30:
        Fn(r, n), Sr(e, n, r);
        break;
      case 7:
        Ue || Fn(r, n), Sr(e, n, r);
        break;
      default:
        Sr(e, n, r);
    }
  }
  function $d(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Uo(e);
      } catch (r) {
        Ge(n, n.return, r);
      }
    }
  }
  function Vd(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Uo(e);
    } catch (r) {
      Ge(n, n.return, r);
    }
  }
  function u0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Dd()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Dd()), n;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Ai(e, n) {
    var r = u0(e);
    n.forEach(function(t) {
      if (!r.has(t)) {
        r.add(t);
        var o = w0.bind(null, e, t);
        t.then(o, o);
      }
    });
  }
  function Hn(e, n, r) {
    var t = n.deletions;
    if (t !== null) for (var o = 0; o < t.length; o++) {
      var a = t[o], i = e, l = n, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 27:
            if (St(s.type)) {
              ln = s.stateNode, Xn = !1;
              break e;
            }
            break;
          case 5:
            ln = s.stateNode, Xn = !1;
            break e;
          case 3:
          case 4:
            ln = s.stateNode.containerInfo, Xn = !0;
            break e;
        }
        s = s.return;
      }
      if (ln === null) throw Error(u(160));
      Ad(i, l, a), ln = null, Xn = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
    }
    if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) Wd(n, e, r), n = n.sibling;
  }
  var xr = null;
  function Wd(e, n, r) {
    var t = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (o & 4 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (var a = 0; a < t.length; a++) {
          var i = t[a];
          i.ref.impl = i.nextImpl;
        }
        Hn(n, e, r), Un(e), o & 4 && (mt(3, e, e.return), wa(3, e), mt(5, e, e.return));
        break;
      case 1:
        Hn(n, e, r), Un(e), o & 512 && (Ue || t === null || Fn(t, t.return)), o & 64 && Ln && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? n : r.concat(n))));
        break;
      case 26:
        if (a = xr, Hn(n, e, r), Un(e), o & 512 && (Ue || t === null || Fn(t, t.return)), o & 4) if (o = t !== null ? t.memoizedState : null, r = e.memoizedState, t === null) if (r === null) if (e.stateNode === null) if (Ln) e.stateNode = Np(e.type, e.memoizedProps, n.containerInfo, e);
        else {
          e: {
            n = e.type, r = e.memoizedProps, o = a.ownerDocument || a;
            n: switch (n) {
              case "title":
                t = o.getElementsByTagName("title")[0], (!t || t[Qo] || t[zn] || t.namespaceURI === "http://www.w3.org/2000/svg" || t.hasAttribute("itemprop")) && (t = o.createElement(n), o.head.insertBefore(t, o.querySelector("head > title"))), jn(t, n, r), t[zn] = e, _n(t), n = t;
                break e;
              case "link":
                if (a = Xp("link", "href", o).get(n + (r.href || ""))) {
                  for (i = 0; i < a.length; i++) if (t = a[i], t.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && t.getAttribute("rel") === (r.rel == null ? null : r.rel) && t.getAttribute("title") === (r.title == null ? null : r.title) && t.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                    a.splice(i, 1);
                    break n;
                  }
                }
                t = o.createElement(n), jn(t, n, r), o.head.appendChild(t);
                break;
              case "meta":
                if (a = Xp("meta", "content", o).get(n + (r.content || ""))) {
                  for (i = 0; i < a.length; i++) if (t = a[i], t.getAttribute("content") === (r.content == null ? null : "" + r.content) && t.getAttribute("name") === (r.name == null ? null : r.name) && t.getAttribute("property") === (r.property == null ? null : r.property) && t.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && t.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                    a.splice(i, 1);
                    break n;
                  }
                }
                t = o.createElement(n), jn(t, n, r), o.head.appendChild(t);
                break;
              default:
                throw Error(u(468, n));
            }
            t[zn] = e, _n(t), n = t;
          }
          e.stateNode = n;
        }
        else Ln || Ds(a, e.type, e.stateNode);
        else e.stateNode = Qp(a, r, e.memoizedProps);
        else o !== r ? (o === null ? (n = t.stateNode, n === null || Ue || n.parentNode.removeChild(n)) : o.count--, r === null ? Ln || Ds(a, e.type, e.stateNode) : Qp(a, r, e.memoizedProps)) : r === null && e.stateNode !== null && Au(e, e.memoizedProps, t.memoizedProps);
        break;
      case 27:
        Hn(n, e, r), Un(e), o & 512 && (Ue || t === null || Fn(t, t.return)), t !== null && o & 4 && Au(e, e.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (a = Dr, Dr = !1, Hn(n, e, r), Dr = a, Un(e), o & 512 && (Ue || t === null || Fn(t, t.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            io(n, ""), Ve = !0;
          } catch (b) {
            Ge(e, e.return, b);
          }
        }
        o & 4 && e.stateNode != null && (n = e.memoizedProps, Au(e, n, t !== null ? t.memoizedProps : n)), o & 1024 && (Gu = !0);
        break;
      case 6:
        if (Hn(n, e, r), Un(e), o & 4) {
          if (e.stateNode === null) throw Error(u(162));
          n = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = n, Ve = !0;
          } catch (b) {
            Ge(e, e.return, b);
          }
        }
        break;
      case 3:
        if (Ve = !1, Ji = null, a = xr, xr = Ta(n.containerInfo), Hn(n, e, r), xr = a, Un(e), o & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Uo(n.containerInfo);
        } catch (b) {
          Ge(e, e.return, b);
        }
        Gu && (Gu = !1, Hd(e)), Ve = !1;
        break;
      case 4:
        o = Dr, Dr = Ln, t = uc(), a = xr, xr = Ta(e.stateNode.containerInfo), Hn(n, e, r), Un(e), xr = a, Ve && Sa && (ji = !0), Ve = t, Dr = o;
        break;
      case 12:
        Hn(n, e, r), Un(e);
        break;
      case 31:
        Hn(n, e, r), Un(e), o & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Ai(e, n)));
        break;
      case 13:
        Hn(n, e, r), Un(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Vi = w()), o & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Ai(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null, i = t !== null && t.memoizedState !== null;
        var l = Ln, s = Ue, m = Dr;
        Ln = l || a, Dr = m || a, Ue = s || i, Hn(n, e, r), Ue = s, Dr = m, Ln = l, Un(e), o & 8192 && (n = e.stateNode, n._visibility = a ? n._visibility & -2 : n._visibility | 1, !a || t === null || i || Ln || Ue || (n = i || Ue, r = Ln, t = Ue, Ln = a || Ln, Ue = n, gt(e, 2), Ln = r, Ue = t), !a && Dr || Xu(e, a)), o & 4 && (n = e.updateQueue, n !== null && (r = n.retryQueue, r !== null && (n.retryQueue = null, Ai(e, r))));
        break;
      case 19:
        Hn(n, e, r), Un(e), o & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Ai(e, n)));
        break;
      case 30:
        o & 512 && (Ue || t === null || Fn(t, t.return)), o = uc(), a = Sa, i = (r & 335544064) === r, l = e.memoizedProps, Sa = i && Br(l.default, l.update) !== "none", Hn(n, e, r), Un(e), i && t !== null && Ve && (e.flags |= 4), Sa = a, Ve = o;
        break;
      case 21:
        break;
      case 7:
        o & 512 && (Ue || t === null || Fn(t, t.return)), t && t.stateNode !== null && (t.stateNode._fragmentFiber = e);
      default:
        Hn(n, e, r), Un(e);
    }
  }
  function Un(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, t = e.return; t !== null; ) {
          if (_d(t)) {
            r = t;
            break;
          }
          t = t.return;
        }
        t = null;
        for (var o = e.return; o !== null; ) {
          if (ju(o)) {
            var a = o.stateNode;
            t === null ? t = [a] : t.push(a);
          }
          if (Fu(o)) break;
          o = o.return;
        }
        var i = t;
        if (r == null) throw Error(u(160));
        switch (r.tag) {
          case 27:
            var l = r.stateNode, s = $u(e);
            Mi(e, s, l, i);
            break;
          case 5:
            var m = r.stateNode;
            r.flags & 32 && (io(m, ""), r.flags &= -33);
            var b = $u(e);
            Mi(e, b, m, i);
            break;
          case 3:
          case 4:
            var x = r.stateNode.containerInfo, p = $u(e);
            Vu(e, p, x, i);
            break;
          default:
            throw Error(u(161));
        }
      } catch (v) {
        Ge(e, e.return, v);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Hd(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var n = e;
      Hd(n), n.tag === 5 && n.flags & 1024 && (n = n.stateNode, Ho = !0, n.reset(), Ho = !1), e = e.sibling;
    }
  }
  function Co(e, n) {
    if (n.subtreeFlags & 9270) for (n = n.child; n !== null; ) Ud(n, e), n = n.sibling;
    else Id(n);
  }
  function Ud(e, n) {
    var r = e.alternate;
    if (r === null) Wu(e, !1);
    else switch (e.tag) {
      case 3:
        if (Qu = Fr = !1, Od(), Co(n, e), !Fr && !ji) {
          if (e = Mr, e !== null) for (var t = 0; t < e.length; t += 3) {
            r = e[t];
            var o = e[t + 1];
            Tp(r, e[t + 2]), r = r.ownerDocument.documentElement, r !== null && r.animate({ opacity: [0, 0], pointerEvents: ["none", "none"] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition-group(" + o + ")" });
          }
          e = n.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({ opacity: [0, 0], pointerEvents: ["none", "none"] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition-group(root)" }), e.animate({ width: [0, 0], height: [0, 0] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition" })), Qu = !0;
        }
        Mr = null;
        break;
      case 5:
        Co(n, e);
        break;
      case 4:
        t = Fr, Fr = !1, Co(n, e), Fr && (ji = !0), Fr = t;
        break;
      case 22:
        e.memoizedState === null && (r.memoizedState !== null ? Wu(e, !1) : Co(n, e));
        break;
      case 30:
        t = Fr, o = Od(), Fr = !1, Co(n, e), Fr && (e.flags |= 4);
        var a = e.memoizedProps, i = e.stateNode;
        n = Ur(a, i), i = Ur(r.memoizedProps, i);
        var l = Br(a.default, a.update);
        l === "none" ? n = !1 : (a = r.memoizedState, r.memoizedState = null, r = e.child, Qn = 0, n = qu(e, r, n, i, l, a, !0), Qn !== (a === null ? 0 : a.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && n ? (Mo(e, e.memoizedProps.onUpdate), Mr = o) : o !== null && (o.push.apply(o, Mr), Mr = o), Fr = (e.flags & 32) !== 0 ? !0 : t;
        break;
      default:
        Co(n, e);
    }
  }
  function jr(e, n) {
    if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) Fd(e, n.alternate, n), n = n.sibling;
  }
  function gt(e, n) {
    for (e = e.child; e !== null; ) {
      var r = e, t = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          mt(4, r, r.return), gt(r, t);
          break;
        case 1:
          Fn(r, r.return);
          var o = r.stateNode;
          typeof o.componentWillUnmount == "function" && Nd(r, r.return, o), gt(r, t);
          break;
        case 27:
          (t & 2) !== 0 && Hp(r.stateNode, r.type, r.memoizedProps);
        case 5:
          Fn(r, r.return), r.tag !== 5 && r.tag !== 27 || ka(r), gt(r, t);
          break;
        case 6:
          ka(r);
          break;
        case 26:
          Fn(r, r.return), o = r.stateNode, r.memoizedState !== null || o === null || Ue || o.parentNode.removeChild(o), gt(r, t);
          break;
        case 22:
          r.memoizedState === null && gt(r, t);
          break;
        case 30:
          Fn(r, r.return), gt(r, t);
          break;
        case 7:
          Fn(r, r.return);
        default:
          gt(r, t);
      }
      e = e.sibling;
    }
  }
  function Er(e, n, r) {
    for (r = (n.subtreeFlags & 8772) !== 0 ? r : r & -2, n = n.child; n !== null; ) {
      var t = n.alternate, o = e, a = n, i = a.flags, l = (r & 1) !== 0;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Er(o, a, r), wa(4, a);
          break;
        case 1:
          if (Er(o, a, r), t = a, o = t.stateNode, typeof o.componentDidMount == "function") try {
            o.componentDidMount();
          } catch (b) {
            Ge(t, t.return, b);
          }
          if (t = a, o = t.updateQueue, o !== null) {
            var s = t.stateNode;
            try {
              var m = o.shared.hiddenCallbacks;
              if (m !== null) for (o.shared.hiddenCallbacks = null, o = 0; o < m.length; o++) df(m[o], s);
            } catch (b) {
              Ge(t, t.return, b);
            }
          }
          l && i & 64 && Ed(a), zr(a, a.return);
          break;
        case 27:
          (r & 2) !== 0 && Pd(a);
        case 5:
          a.tag !== 5 && a.tag !== 27 || Cd(a), Er(o, a, r), l && t === null && i & 4 && Ru(a), zr(a, a.return);
          break;
        case 6:
          Cd(a);
          break;
        case 26:
          s = a.stateNode, a.memoizedState !== null || s === null || Ln || Ds(Ta(s.ownerDocument), a.type, s), Er(o, a, r), l && t === null && i & 4 && Ru(a), zr(a, a.return);
          break;
        case 12:
          Er(o, a, r);
          break;
        case 31:
          Er(o, a, r), l && i & 4 && $d(o, a);
          break;
        case 13:
          Er(o, a, r), l && i & 4 && Vd(o, a);
          break;
        case 22:
          a.memoizedState === null && Er(o, a, r), zr(a, a.return);
          break;
        case 30:
          Er(o, a, r), zr(a, a.return);
          break;
        case 7:
          zr(a, a.return);
        default:
          Er(o, a, r);
      }
      n = n.sibling;
    }
  }
  function Ku(e, n) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && la(r));
  }
  function Zu(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && la(e));
  }
  function mr(e, n, r, t) {
    var o = (r & 335544064) === r;
    if (n.subtreeFlags & (o ? 10262 : 10256)) for (n = n.child; n !== null; ) Bd(e, n, r, t), n = n.sibling;
    else o && Md(n);
  }
  function Bd(e, n, r, t) {
    var o = (r & 335544064) === r;
    o && n.alternate === null && n.return !== null && n.return.alternate !== null && Fi(n);
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        mr(e, n, r, t), a & 2048 && wa(9, n);
        break;
      case 1:
        mr(e, n, r, t);
        break;
      case 3:
        mr(e, n, r, t), o && Qu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, n.alternate !== null && (a = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== a && (n.refCount++, a != null && la(a)));
        break;
      case 12:
        if (a & 2048) {
          mr(e, n, r, t), a = n.stateNode;
          try {
            var i = n.memoizedProps, l = i.id, s = i.onPostCommit;
            typeof s == "function" && s(l, n.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
          } catch (m) {
            Ge(n, n.return, m);
          }
        } else mr(e, n, r, t);
        break;
      case 31:
        mr(e, n, r, t);
        break;
      case 13:
        mr(e, n, r, t);
        break;
      case 23:
        break;
      case 22:
        i = n.stateNode, l = n.alternate, n.memoizedState !== null ? (o && l !== null && l.memoizedState === null && Fi(l), i._visibility & 2 ? mr(e, n, r, t) : xa(e, n)) : (o && l !== null && l.memoizedState !== null && Fi(n), i._visibility & 2 ? mr(e, n, r, t) : (i._visibility |= 2, _o(e, n, r, t, (n.subtreeFlags & 10256) !== 0 || !1))), a & 2048 && Ku(l, n);
        break;
      case 24:
        mr(e, n, r, t), a & 2048 && Zu(n.alternate, n);
        break;
      case 30:
        o && (a = n.alternate, a !== null && (Ir(a.child, !0), Ir(n.child, !0))), mr(e, n, r, t);
        break;
      default:
        mr(e, n, r, t);
    }
  }
  function _o(e, n, r, t, o) {
    for (o = o && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var a = e, i = n, l = r, s = t, m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          _o(a, i, l, s, o), wa(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null ? b._visibility & 2 ? _o(a, i, l, s, o) : xa(a, i) : (b._visibility |= 2, _o(a, i, l, s, o)), o && m & 2048 && Ku(i.alternate, i);
          break;
        case 24:
          _o(a, i, l, s, o), o && m & 2048 && Zu(i.alternate, i);
          break;
        default:
          _o(a, i, l, s, o);
      }
      n = n.sibling;
    }
  }
  function xa(e, n) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
      var r = e, t = n, o = t.flags;
      switch (t.tag) {
        case 22:
          xa(r, t), o & 2048 && Ku(t.alternate, t);
          break;
        case 24:
          xa(r, t), o & 2048 && Zu(t.alternate, t);
          break;
        default:
          xa(r, t);
      }
      n = n.sibling;
    }
  }
  var Xt = 8192;
  function Yt(e, n, r) {
    if (e.subtreeFlags & Xt) for (e = e.child; e !== null; ) qd(e, n, r), e = e.sibling;
  }
  function qd(e, n, r) {
    switch (e.tag) {
      case 26:
        Yt(e, n, r), e.flags & Xt && (e.memoizedState !== null ? hg(r, xr, e.memoizedState, e.memoizedProps) : (e = e.stateNode, (n & 335544128) === n && Jp(r, e)));
        break;
      case 5:
        Yt(e, n, r), e.flags & Xt && (e = e.stateNode, (n & 335544128) === n && Jp(r, e));
        break;
      case 3:
      case 4:
        var t = xr;
        xr = Ta(e.stateNode.containerInfo), Yt(e, n, r), xr = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Xt, Xt = 16777216, Yt(e, n, r), Xt = t) : Yt(e, n, r));
        break;
      case 30:
        if ((e.flags & Xt) !== 0 && (t = e.memoizedProps.name, t != null && t !== "auto")) {
          var o = e.stateNode;
          o.paired = null, or === null && (or = /* @__PURE__ */ new Map()), or.set(t, o);
        }
        Yt(e, n, r);
        break;
      default:
        Yt(e, n, r);
    }
  }
  function Gd(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Ea(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null) for (var r = 0; r < n.length; r++) {
        var t = n[r];
        On = t, Xd(t, e);
      }
      Gd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Qd(e), e = e.sibling;
  }
  function Qd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ea(e), e.flags & 2048 && mt(9, e, e.return);
        break;
      case 3:
        Ea(e);
        break;
      case 12:
        Ea(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, $i(e)) : Ea(e);
        break;
      default:
        Ea(e);
    }
  }
  function $i(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null) for (var r = 0; r < n.length; r++) {
        var t = n[r];
        On = t, Xd(t, e);
      }
      Gd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          mt(8, n, n.return), $i(n);
          break;
        case 22:
          r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, $i(n));
          break;
        default:
          $i(n);
      }
      e = e.sibling;
    }
  }
  function Xd(e, n) {
    for (; On !== null; ) {
      var r = On;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          mt(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var t = r.memoizedState.cachePool.pool;
            t != null && t.refCount++;
          }
          break;
        case 24:
          la(r.memoizedState.cache);
      }
      if (t = r.child, t !== null) t.return = r, On = t;
      else e: for (r = e; On !== null; ) {
        t = On;
        var o = t.sibling, a = t.return;
        if (Rd(t), t === r) {
          On = null;
          break e;
        }
        if (o !== null) {
          o.return = a, On = o;
          break e;
        }
        On = a;
      }
    }
  }
  var s0 = { getCacheForType: function(e) {
    var n = Mn(kn), r = n.data.get(e);
    return r === void 0 && (r = e(), n.data.set(e, r)), r;
  }, cacheSignal: function() {
    return Mn(kn).controller.signal;
  } }, c0 = typeof WeakMap == "function" ? WeakMap : Map, We = 0, en = null, Pe = null, ze = 0, qe = 0, ar = null, yt = !1, Po = !1, Ju = !1, et = 0, mn = 0, vt = 0, Kt = 0, es = 0, ir = 0, Lo = 0, Na = null, Yn = null, ns = !1, Vi = 0, Yd = 0, Wi = 1 / 0, Hi = null, bt = null, fn = 0, Nr = null, Zt = null, Rr = 0, rs = 0, ts = null, Kd = null, Oo = null, To = null, zo = null, Ca = 0, Ui = null;
  function lr() {
    return (We & 2) !== 0 && ze !== 0 ? ze & -ze : B.T !== null ? ps() : Js();
  }
  function Zd() {
    if (ir === 0) if ((ze & 536870912) === 0 || Ee) {
      var e = Pr;
      Pr <<= 1, (Pr & 3932160) === 0 && (Pr = 262144), ir = e;
    } else ir = 536870912;
    return e = In.current, e !== null && (e.flags |= 32), ir;
  }
  function Mo(e, n) {
    if (n != null) {
      var r = e.stateNode, t = r.ref;
      t === null && (t = r.ref = zp(Ur(e.memoizedProps, r))), To === null && (To = []), To.push(n.bind(null, t));
    }
  }
  function Kn(e, n, r) {
    (e === en && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (Io(e, 0), wt(e, ze, ir, !1)), Go(e, r), ((We & 2) === 0 || e !== en) && (e === en && ((We & 2) === 0 && (Kt |= r), mn === 4 && wt(e, ze, ir, !1)), Ar(e));
  }
  function Jd(e, n, r) {
    if ((We & 6) !== 0) throw Error(u(327));
    var t = !r && (n & 127) === 0 && (n & e.expiredLanes) === 0 || qo(e, n), o = t ? p0(e, n) : as(e, n, !0), a = t;
    do {
      if (o === 0) {
        Po && !t && wt(e, n, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, a && !f0(r)) {
          o = as(e, n, !1), a = !1;
          continue;
        }
        if (o === 2) {
          if (a = n, e.errorRecoveryDisabledLanes & a) var i = 0;
          else i = e.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            n = i;
            e: {
              var l = e;
              o = Na;
              var s = l.current.memoizedState.isDehydrated;
              if (s && (Io(l, i).flags |= 256), i = as(l, i, !1), i !== 2 && i !== 6) {
                if (Ju && !s) {
                  l.errorRecoveryDisabledLanes |= a, Kt |= a, o = 4;
                  break e;
                }
                a = Yn, Yn = o, a !== null && (Yn === null ? Yn = a : Yn.push.apply(Yn, a));
              }
              o = i;
            }
            if (a = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          Io(e, 0), wt(e, n, 0, !0);
          break;
        }
        e: {
          switch (t = e, a = o, a) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((n & 4194048) !== n && (n & 62914560) !== n) break;
            case 6:
              wt(t, n, ir, !yt);
              break e;
            case 2:
              Yn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((n & 62914560) === n && (o = Vi + 300 - w(), 10 < o)) {
            if (wt(t, n, ir, !yt), Va(t, 0, !0) !== 0) break e;
            Rr = n, t.timeoutHandle = Es(ep.bind(null, t, r, Yn, Hi, ns, n, ir, Kt, Lo, yt, a, "Throttled", -0, 0), o);
            break e;
          }
          ep(t, r, Yn, Hi, ns, n, ir, Kt, Lo, yt, a, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ar(e);
  }
  function ep(e, n, r, t, o, a, i, l, s, m, b, x, p, v) {
    e.timeoutHandle = -1;
    var j = n.subtreeFlags, Z = (a & 335544064) === a;
    if (x = null, (Z || j & 8192 || (j & 16785408) === 16785408) && (x = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: Lr }, or = null, qd(n, a, x), Z && (j = x, Z = e.containerInfo, Z = (Z.nodeType === 9 ? Z : Z.ownerDocument).__reactViewTransition, Z != null && (j.count++, j.waitingForViewTransition = !0, j = Ia.bind(j), Z.finished.then(j, j))), j = (a & 62914560) === a ? Vi - w() : (a & 4194048) === a ? Yd - w() : 0, j = mg(x, j), j !== null)) {
      Rr = a, e.cancelPendingCommit = j(up.bind(null, e, n, a, r, t, o, i, l, s, m, b, x, null, p, v)), wt(e, a, i, !m);
      return;
    }
    up(e, n, a, r, t, o, i, l, s, m, b, x);
  }
  function f0(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null))) for (var t = 0; t < r.length; t++) {
        var o = r[t], a = o.getSnapshot;
        o = o.value;
        try {
          if (!rr(a(), o)) return !1;
        } catch {
          return !1;
        }
      }
      if (r = n.child, n.subtreeFlags & 16384 && r !== null) r.return = n, n = r;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function wt(e, n, r, t) {
    n = Qs(e, n), n &= ~es, n &= ~Kt, e.suspendedLanes |= n, e.pingedLanes &= ~n, t && (e.warmLanes |= n), t = e.expirationTimes;
    for (var o = n; 0 < o; ) {
      var a = 31 - wn(o), i = 1 << a;
      t[a] = -1, o &= ~i;
    }
    r !== 0 && Ys(e, r, n);
  }
  function Bi() {
    return (We & 6) === 0 ? (_a(0), !1) : !0;
  }
  function os() {
    if (Pe !== null) {
      if (qe === 0) var e = Pe.return;
      else e = Pe, Qr = At = null, fu(e), wo = null, ca = 0, e = Pe;
      for (; e !== null; ) xd(e.alternate, e), e = e.return;
      Pe = null;
    }
  }
  function Io(e, n) {
    var r = e.timeoutHandle;
    return r !== -1 && (e.timeoutHandle = -1, D0(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), Rr = 0, os(), en = e, Pe = r = qr(e.current, null), ze = n, qe = 0, ar = null, yt = !1, Po = qo(e, n), Ju = !1, Lo = ir = es = Kt = vt = mn = 0, Yn = Na = null, ns = !1, et = Qs(e, n), ei(), r;
  }
  function np(e, n) {
    be = null, B.H = Ni, n === bo || n === fi ? (n = uf(), qe = 3) : n === Zl ? (n = uf(), qe = 4) : qe = n === Cu ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, ar = n, Pe === null && (mn = 1, Ci(e, fr(n, e.current)));
  }
  function rp() {
    var e = In.current;
    return e === null ? !0 : (ze & 4194048) === ze ? Vn === null : (ze & 62914560) === ze || (ze & 536870912) !== 0 ? e === Vn : !1;
  }
  function tp() {
    var e = B.H;
    return B.H = Ni, e === null ? Ni : e;
  }
  function op() {
    var e = B.A;
    return B.A = s0, e;
  }
  function qi() {
    mn = 4, yt || (ze & 4194048) !== ze && In.current !== null || (Po = !0), (vt & 134217727) === 0 && (Kt & 134217727) === 0 || en === null || wt(en, ze, ir, !1);
  }
  function as(e, n, r) {
    var t = We;
    We |= 2;
    var o = tp(), a = op();
    (en !== e || ze !== n) && (Hi = null, Io(e, n)), n = !1;
    var i = mn;
    e: do
      try {
        if (qe !== 0 && Pe !== null) {
          var l = Pe, s = ar;
          switch (qe) {
            case 8:
              os(), i = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              In.current === null && (n = !0);
              var m = qe;
              if (qe = 0, ar = null, Do(e, l, s, m), r && Po) {
                i = 0;
                break e;
              }
              break;
            default:
              m = qe, qe = 0, ar = null, Do(e, l, s, m);
          }
        }
        d0(), i = mn;
        break;
      } catch (b) {
        np(e, b);
      }
    while (!0);
    return n && e.shellSuspendCounter++, Qr = At = null, We = t, B.H = o, B.A = a, Pe === null && (en = null, ze = 0, ei()), i;
  }
  function d0() {
    for (; Pe !== null; ) ap(Pe);
  }
  function p0(e, n) {
    var r = We;
    We |= 2;
    var t = tp(), o = op();
    en !== e || ze !== n ? (Hi = null, Wi = w() + 500, Io(e, n)) : Po = qo(e, n);
    e: do
      try {
        if (qe !== 0 && Pe !== null) {
          n = Pe;
          var a = ar;
          n: switch (qe) {
            case 1:
              qe = 0, ar = null, Do(e, n, a, 1);
              break;
            case 2:
            case 9:
              if (af(a)) {
                qe = 0, ar = null, ip(n);
                break;
              }
              n = function() {
                qe !== 2 && qe !== 9 || en !== e || (qe = 7), Ar(e);
              }, a.then(n, n);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              af(a) ? (qe = 0, ar = null, ip(n)) : (qe = 0, ar = null, Do(e, n, a, 7));
              break;
            case 5:
              var i = null;
              switch (Pe.tag) {
                case 26:
                  i = Pe.memoizedState;
                case 5:
                case 27:
                  var l = Pe;
                  if (i ? Kp(i) : l.stateNode.complete) {
                    qe = 0, ar = null;
                    var s = l.sibling;
                    if (s !== null) Pe = s;
                    else {
                      var m = l.return;
                      m !== null ? (Pe = m, Gi(m)) : Pe = null;
                    }
                    break n;
                  }
              }
              qe = 0, ar = null, Do(e, n, a, 5);
              break;
            case 6:
              qe = 0, ar = null, Do(e, n, a, 6);
              break;
            case 8:
              os(), mn = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        h0();
        break;
      } catch (b) {
        np(e, b);
      }
    while (!0);
    return Qr = At = null, B.H = t, B.A = o, We = r, Pe !== null ? 0 : (en = null, ze = 0, ei(), mn);
  }
  function h0() {
    for (; Pe !== null && !Be(); ) ap(Pe);
  }
  function ap(e) {
    var n = kd(e.alternate, e, et);
    e.memoizedProps = e.pendingProps, n === null ? Gi(e) : Pe = n;
  }
  function ip(e) {
    var n = e, r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = hd(r, n, n.pendingProps, n.type, void 0, ze);
        break;
      case 11:
        n = hd(r, n, n.pendingProps, n.type.render, n.ref, ze);
        break;
      case 5:
        fu(n);
        var t = n;
        t === Pn && (Ee ? (ii(t), t.tag === 5 && t.stateNode != null && (rn = t.stateNode)) : (ii(t), Ee = !0));
      default:
        xd(r, n), n = Pe = Qc(n, et), n = kd(r, n, et);
    }
    e.memoizedProps = e.pendingProps, n === null ? Gi(e) : Pe = n;
  }
  function Do(e, n, r, t) {
    Qr = At = null, fu(n), wo = null, ca = 0;
    var o = n.return;
    try {
      if (n0(e, o, n, r, ze)) {
        mn = 1, Ci(e, fr(r, e.current)), Pe = null;
        return;
      }
    } catch (a) {
      if (o !== null) throw Pe = o, a;
      mn = 1, Ci(e, fr(r, e.current)), Pe = null;
      return;
    }
    n.flags & 32768 ? (Ee || t === 1 ? e = !0 : Po || (ze & 536870912) !== 0 ? e = !1 : (yt = e = !0, (t === 2 || t === 9 || t === 3 || t === 6) && (t = In.current, t !== null && t.tag === 13 && (t.flags |= 16384))), lp(n, e)) : Gi(n);
  }
  function Gi(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        lp(n, yt);
        return;
      }
      e = n.return;
      var r = a0(n.alternate, n, et);
      if (r !== null) {
        Pe = r;
        return;
      }
      if (n = n.sibling, n !== null) {
        Pe = n;
        return;
      }
      Pe = n = e;
    } while (n !== null);
    mn === 0 && (mn = 5);
  }
  function lp(e, n) {
    do {
      var r = i0(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, Pe = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !n && (e = e.sibling, e !== null)) {
        Pe = e;
        return;
      }
      Pe = e = r;
    } while (e !== null);
    mn = 6, Pe = null;
  }
  function up(e, n, r, t, o, a, i, l, s, m, b, x) {
    e.cancelPendingCommit = null;
    do
      Qi();
    while (fn !== 0);
    if ((We & 6) !== 0) throw Error(u(327));
    if (n !== null) {
      if (n === e.current) throw Error(u(177));
      e === en && (Pe = en = null, ze = 0), Zt = n, Nr = e, Rr = r, ts = o, Kd = t, m0(e, n, r, i, l, s, x);
    }
  }
  function m0(e, n, r, t, o, a, i) {
    var l = n.lanes | n.childLanes;
    if (rs = l, l |= Al, Vh(e, r, l, t, o, a), To = null, (r & 335544064) === r ? (zo = Hm(e), t = 10262) : (zo = null, t = 10256), (n.subtreeFlags & t) !== 0 || (n.flags & t) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, k0(W, function() {
      return ss(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), Ii = !1, t = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || t) {
      t = B.T, B.T = null, o = ue.p, ue.p = 2, a = We, We |= 4;
      try {
        l0(e, n, r);
      } finally {
        We = a, ue.p = o, B.T = t;
      }
    }
    fn = 1, Ii ? Oo = V0(i, e.containerInfo, zo, is, ls, y0, us, ss, g0) : (is(), ls(), us());
  }
  function g0(e) {
    if (fn !== 0) {
      var n = Nr.onRecoverableError;
      n(e, { componentStack: null });
    }
  }
  function y0() {
    fn === 3 && (fn = 0, Ud(Zt, Nr), fn = 4);
  }
  function is() {
    if (fn === 1) {
      fn = 0;
      var e = Nr, n = Zt, r = Rr, t = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || t) {
        t = B.T, B.T = null;
        var o = ue.p;
        ue.p = 2;
        var a = We;
        We |= 4;
        try {
          Sa = ji = !1, Wd(n, e, r), r = ks;
          var i = Rc(e.containerInfo), l = r.focusedElem, s = r.selectionRange;
          if (i !== l && l && l.ownerDocument && jc(l.ownerDocument.documentElement, l)) {
            if (s !== null && Il(l)) {
              var m = s.start, b = s.end;
              if (b === void 0 && (b = m), "selectionStart" in l) l.selectionStart = m, l.selectionEnd = Math.min(b, l.value.length);
              else {
                var x = l.ownerDocument || document, p = x && x.defaultView || window;
                if (p.getSelection) {
                  var v = p.getSelection(), j = l.textContent.length, Z = Math.min(s.start, j), we = s.end === void 0 ? Z : Math.min(s.end, j);
                  !v.extend && Z > we && (i = we, we = Z, Z = i);
                  var h = Fc(l, Z), c = Fc(l, we);
                  if (h && c && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== c.node || v.focusOffset !== c.offset)) {
                    var y = x.createRange();
                    y.setStart(h.node, h.offset), v.removeAllRanges(), Z > we ? (v.addRange(y), v.extend(c.node, c.offset)) : (y.setEnd(c.node, c.offset), v.addRange(y));
                  }
                }
              }
            }
            for (x = [], v = l; v = v.parentNode; ) v.nodeType === 1 && x.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
            for (typeof l.focus == "function" && l.focus(), l = 0; l < x.length; l++) {
              var S = x[l];
              S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
            }
          }
          Ho = !!ws, ks = ws = null;
        } finally {
          We = a, ue.p = o, B.T = t;
        }
      }
      e.current = n, fn = 2;
    }
  }
  function ls() {
    if (fn === 2) {
      fn = 0;
      var e = Nr, n = Zt, r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        r = B.T, B.T = null;
        var t = ue.p;
        ue.p = 2;
        var o = We;
        We |= 4;
        try {
          Fd(e, n.alternate, n);
        } finally {
          We = o, ue.p = t, B.T = r;
        }
      }
      fn = 3;
    }
  }
  function us() {
    if (fn === 4 || fn === 3) {
      fn = 0;
      var e = Oo;
      Oo = null, on();
      var n = Nr, r = Zt, t = Rr, o = Kd, a = (t & 335544064) === t ? 10262 : 10256;
      if ((r.subtreeFlags & a) !== 0 || (r.flags & a) !== 0 ? fn = 5 : (fn = 0, Zt = Nr = null, sp(n, n.pendingLanes)), a = n.pendingLanes, a === 0 && (bt = null), gl(t), r = r.stateNode, cn && typeof cn.onCommitFiberRoot == "function") try {
        cn.onCommitFiberRoot(bn, r, void 0, (r.current.flags & 128) === 128);
      } catch {
      }
      if (o !== null) {
        r = B.T, a = ue.p, ue.p = 2, B.T = null;
        try {
          for (var i = n.onRecoverableError, l = 0; l < o.length; l++) {
            var s = o[l];
            i(s.value, { componentStack: s.stack });
          }
        } finally {
          B.T = r, ue.p = a;
        }
      }
      if (o = To, i = zo, zo = null, o !== null && (To = null, i === null && (i = []), e !== null)) for (s = 0; s < o.length; s++) r = (0, o[s])(i), r !== void 0 && e.finished.finally(r);
      (Rr & 3) !== 0 && Qi(), Ar(n), a = n.pendingLanes, (t & 261930) !== 0 && (a & 42) !== 0 ? n === Ui ? Ca++ : (Ca = 0, Ui = n) : (Ca = 0, Ui = null), _a(0);
    }
  }
  function sp(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, la(n)));
  }
  function Qi() {
    return Oo !== null && (Oo.skipTransition(), Oo = null), is(), ls(), us(), ss();
  }
  function ss() {
    if (fn !== 5) return !1;
    var e = Nr, n = rs;
    rs = 0;
    var r = gl(Rr), t = B.T, o = ue.p;
    try {
      ue.p = 32 > r ? 32 : r, B.T = null, r = ts, ts = null;
      var a = Nr, i = Rr;
      if (fn = 0, Zt = Nr = null, Rr = 0, (We & 6) !== 0) throw Error(u(331));
      var l = We;
      if (We |= 4, Qd(a.current), Bd(a, a.current, i, r), We = l, _a(0, !1), cn && typeof cn.onPostCommitFiberRoot == "function") try {
        cn.onPostCommitFiberRoot(bn, a);
      } catch {
      }
      return !0;
    } finally {
      ue.p = o, B.T = t, sp(e, n);
    }
  }
  function cp(e, n, r) {
    n = fr(r, n), n = Nu(e.stateNode, n, 2), e = ft(e, n, 2), e !== null && (Go(e, 2), Ar(e));
  }
  function Ge(e, n, r) {
    if (e.tag === 3) cp(e, e, r);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        cp(n, e, r);
        break;
      } else if (n.tag === 1) {
        var t = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof t.componentDidCatch == "function" && (bt === null || !bt.has(t))) {
          e = fr(r, e), r = id(2), t = ft(n, r, 2), t !== null && (ld(r, t, n, e), Go(t, 2), Ar(t));
          break;
        }
      }
      n = n.return;
    }
  }
  function cs(e, n, r) {
    var t = e.pingCache;
    if (t === null) {
      t = e.pingCache = new c0();
      var o = /* @__PURE__ */ new Set();
      t.set(n, o);
    } else o = t.get(n), o === void 0 && (o = /* @__PURE__ */ new Set(), t.set(n, o));
    o.has(r) || (Ju = !0, o.add(r), e = v0.bind(null, e, n, r), n.then(e, e));
  }
  function v0(e, n, r) {
    var t = e.pingCache;
    t !== null && t.delete(n), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, en === e && (ze & r) === r && ((mn === 4 || mn === 3 && (ze & 62914560) === ze && 300 > w() - Vi) && (We & 2) === 0 ? Io(e, 0) : es |= r, Lo === ze && (Lo = 0)), Ar(e);
  }
  function fp(e, n) {
    n === 0 && (n = Xs()), e = Ft(e, n), e !== null && (Go(e, n), Ar(e));
  }
  function b0(e) {
    var n = e.memoizedState, r = 0;
    n !== null && (r = n.retryLane), fp(e, r);
  }
  function w0(e, n) {
    var r = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var t = e.stateNode, o = e.memoizedState;
        o !== null && (r = o.retryLane);
        break;
      case 19:
        t = e.stateNode;
        break;
      case 22:
        t = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    t !== null && t.delete(n), fp(e, r);
  }
  function k0(e, n) {
    return ye(e, n);
  }
  var Fo = null, jo = null, fs = !1, Xi = !1, ds = !1, kt = 0;
  function Ar(e) {
    e !== jo && e.next === null && (jo === null ? Fo = jo = e : jo = jo.next = e), Xi = !0, fs || (fs = !0, x0());
  }
  function _a(e, n) {
    if (!ds && Xi) {
      ds = !0;
      do
        for (var r = !1, t = Fo; t !== null; ) {
          if (e !== 0) {
            var o = t.pendingLanes;
            if (o === 0) var a = 0;
            else {
              var i = t.suspendedLanes, l = t.pingedLanes;
              a = (1 << 31 - wn(42 | e) + 1) - 1, a &= o & ~(i & ~l), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
            }
            a !== 0 && (r = !0, mp(t, a));
          } else a = ze, a = Va(t, t === en ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), (a & 3) === 0 || qo(t, a) || (r = !0, mp(t, a));
          t = t.next;
        }
      while (r);
      ds = !1;
    }
  }
  function S0() {
    dp();
  }
  function dp() {
    Xi = fs = !1;
    var e = 0;
    kt !== 0 && I0() && (e = kt);
    for (var n = w(), r = null, t = Fo; t !== null; ) {
      var o = t.next, a = pp(t, n);
      a === 0 ? (t.next = null, r === null ? Fo = o : r.next = o, o === null && (jo = r)) : (r = t, (e !== 0 || (a & 3) !== 0) && (Xi = !0)), t = o;
    }
    fn !== 0 && fn !== 5 || _a(e), kt !== 0 && (kt = 0);
  }
  function pp(e, n) {
    for (var r = e.suspendedLanes, t = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a; ) {
      var i = 31 - wn(a), l = 1 << i, s = o[i];
      s === -1 ? ((l & r) === 0 || (l & t) !== 0) && (o[i] = $h(l, n)) : s <= n && (e.expiredLanes |= l), a &= ~l;
    }
    if (n = en, r = ze, r = Va(e, e === n ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), t = e.callbackNode, r === 0 || e === n && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) return t !== null && t !== null && xe(t), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || qo(e, r)) {
      if (n = r & -r, n === e.callbackPriority) return n;
      switch (t !== null && xe(t), gl(r)) {
        case 2:
        case 8:
          r = J;
          break;
        case 32:
          r = W;
          break;
        case 268435456:
          r = Te;
          break;
        default:
          r = W;
      }
      return t = hp.bind(null, e), r = ye(r, t), e.callbackPriority = n, e.callbackNode = r, n;
    }
    return t !== null && t !== null && xe(t), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function hp(e, n) {
    if (fn !== 0 && fn !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (Qi() && e.callbackNode !== r) return null;
    var t = ze;
    return t = Va(e, e === en ? t : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), t === 0 ? null : (Jd(e, t, n), pp(e, w()), e.callbackNode != null && e.callbackNode === r ? hp.bind(null, e) : null);
  }
  function mp(e, n) {
    if (Qi()) return null;
    Jd(e, n, !0);
  }
  function x0() {
    F0(function() {
      (We & 6) !== 0 ? ye(A, S0) : dp();
    });
  }
  function ps() {
    if (kt === 0) {
      var e = Wt;
      e === 0 && (e = br, br <<= 1, (br & 261888) === 0 && (br = 256)), kt = e;
    }
    return kt;
  }
  function gp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : qa(e);
  }
  function E0(e, n, r, t, o) {
    if (n === "submit" && r && r.stateNode === o) {
      var a = gp((o[qn] || null).action), i = t.submitter;
      i && (n = (n = i[qn] || null) ? gp(n.formAction) : i.getAttribute("formAction"), n !== null && (a = n, i = null));
      var l = new Ya("action", "action", null, t, o);
      e.push({ event: l, listeners: [{ instance: null, listener: function() {
        if (t.defaultPrevented) {
          if (kt !== 0) {
            var s = new FormData(o, i);
            wu(r, { pending: !0, data: s, method: o.method, action: a }, null, s);
          }
        } else typeof a == "function" && (l.preventDefault(), s = new FormData(o, i), wu(r, { pending: !0, data: s, method: o.method, action: a }, a, s));
      }, currentTarget: o }] });
    }
  }
  for (var hs = 0; hs < Rl.length; hs++) {
    var ms = Rl[hs], N0 = ms.toLowerCase(), C0 = ms[0].toUpperCase() + ms.slice(1);
    kr(N0, "on" + C0);
  }
  kr(Vc, "onAnimationEnd"), kr(Wc, "onAnimationIteration"), kr(Hc, "onAnimationStart"), kr("dblclick", "onDoubleClick"), kr("focusin", "onFocus"), kr("focusout", "onBlur"), kr(Dm, "onTransitionRun"), kr(Fm, "onTransitionStart"), kr(jm, "onTransitionCancel"), kr(Uc, "onTransitionEnd"), oo("onMouseEnter", ["mouseout", "mouseover"]), oo("onMouseLeave", ["mouseout", "mouseover"]), oo("onPointerEnter", ["pointerout", "pointerover"]), oo("onPointerLeave", ["pointerout", "pointerover"]), Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Pa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pa));
  function yp(e, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var t = e[r], o = t.event;
      t = t.listeners;
      e: {
        var a = void 0;
        if (n) for (var i = t.length - 1; 0 <= i; i--) {
          var l = t[i], s = l.instance, m = l.currentTarget;
          if (l = l.listener, s !== a && o.isPropagationStopped()) break e;
          a = l, o.currentTarget = m;
          try {
            a(o);
          } catch (b) {
            Ja(b);
          }
          o.currentTarget = null, a = s;
        }
        else for (i = 0; i < t.length; i++) {
          if (l = t[i], s = l.instance, m = l.currentTarget, l = l.listener, s !== a && o.isPropagationStopped()) break e;
          a = l, o.currentTarget = m;
          try {
            a(o);
          } catch (b) {
            Ja(b);
          }
          o.currentTarget = null, a = s;
        }
      }
    }
  }
  function Le(e, n) {
    var r = n[nc];
    r === void 0 && (r = n[nc] = /* @__PURE__ */ new Set());
    var t = e + "__bubble";
    r.has(t) || (vp(n, e, 2, !1), r.add(t));
  }
  function gs(e, n, r) {
    var t = 0;
    n && (t |= 4), vp(r, e, t, n);
  }
  var Yi = "_reactListening" + Math.random().toString(36).slice(2);
  function ys(e) {
    if (!e[Yi]) {
      e[Yi] = !0, oc.forEach(function(r) {
        r !== "selectionchange" && (_0.has(r) || gs(r, !1, e), gs(r, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Yi] || (n[Yi] = !0, gs("selectionchange", !1, n));
    }
  }
  function vp(e, n, r, t) {
    switch (lh(n)) {
      case 2:
        var o = bg;
        break;
      case 8:
        o = wg;
        break;
      default:
        o = js;
    }
    r = o.bind(null, n, r, e), o = void 0, !El || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (o = !0), t ? o !== void 0 ? e.addEventListener(n, r, { capture: !0, passive: o }) : e.addEventListener(n, r, !0) : o !== void 0 ? e.addEventListener(n, r, { passive: o }) : e.addEventListener(n, r, !1);
  }
  function vs(e, n, r, t, o) {
    var a = t;
    if ((n & 1) === 0 && (n & 2) === 0 && t !== null) e: for (; ; ) {
      if (t === null) return;
      var i = t.tag;
      if (i === 3 || i === 4) {
        var l = t.stateNode.containerInfo;
        if (l === o) break;
        if (i === 4) for (i = t.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && i.stateNode.containerInfo === o) return;
          i = i.return;
        }
        for (; l !== null; ) {
          if (i = zt(l), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            t = a = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      t = t.return;
    }
    yc(function() {
      var m = a, b = Sl(r), x = [];
      e: {
        var p = Bc.get(e);
        if (p !== void 0) {
          var v = Ya, j = e;
          switch (e) {
            case "keypress":
              if (Qa(r) === 0) break e;
            case "keydown":
            case "keyup":
              v = fm;
              break;
            case "focusin":
              j = "focus", v = Pl;
              break;
            case "focusout":
              j = "blur", v = Pl;
              break;
            case "beforeblur":
            case "afterblur":
              v = Pl;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = wc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = Jh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = gm;
              break;
            case Vc:
            case Wc:
            case Hc:
              v = rm;
              break;
            case Uc:
              v = vm;
              break;
            case "scroll":
            case "scrollend":
              v = Kh;
              break;
            case "wheel":
              v = wm;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = om;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = Sc;
              break;
            case "submit":
              v = hm;
              break;
            case "toggle":
            case "beforetoggle":
              v = Sm;
          }
          var Z = (n & 4) !== 0, we = !Z && (e === "scroll" || e === "scrollend"), h = Z ? p !== null ? p + "Capture" : null : p;
          Z = [];
          for (var c = m, y; c !== null; ) {
            var S = c;
            if (y = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || y === null || h === null || (S = Yo(c, h), S != null && Z.push(La(c, S, y))), we) break;
            c = c.return;
          }
          0 < Z.length && (p = new v(p, j, null, r, b), x.push({ event: p, listeners: Z }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", v && r !== kl && (j = r.relatedTarget || r.fromElement) && (zt(j) || j[no])) break e;
          (p || v) && (j = b.window === b ? b : (v = b.ownerDocument) ? v.defaultView || v.parentWindow : window, p ? (v = r.relatedTarget || r.toElement, p = m, v = v ? zt(v) : null, v !== null && (we = P(v), Z = v.tag, v !== we || Z !== 5 && Z !== 27 && Z !== 6) && (v = null)) : (p = null, v = m), p !== v && (Z = wc, S = "onMouseLeave", h = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (Z = Sc, S = "onPointerLeave", h = "onPointerEnter", c = "pointer"), we = p == null ? j : Xo(p), y = v == null ? j : Xo(v), j = new Z(S, c + "leave", p, r, b), j.target = we, j.relatedTarget = y, S = null, zt(b) === m && (Z = new Z(h, c + "enter", v, r, b), Z.target = y, Z.relatedTarget = we, S = Z), we = S, Z = p && v ? se(p, v, P0) : null, p !== null && bp(x, j, p, Z, !1), v !== null && we !== null && bp(x, we, v, Z, !0)));
        }
        e: {
          if (p = m ? Xo(m) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file") var q = Oc;
          else if (Pc(p)) if (Tc) q = zm;
          else {
            q = Om;
            var Me = Lm;
          }
          else v = p.nodeName, !v || v.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? m && wl(m.elementType) && (q = Oc) : q = Tm;
          if (q && (q = q(e, m))) {
            Lc(x, q, r, b);
            break e;
          }
          Me && Me(e, p, m);
        }
        switch (Me = m ? Xo(m) : window, e) {
          case "focusin":
            (Pc(Me) || Me.contentEditable === "true") && (co = Me, Dl = m, oa = null);
            break;
          case "focusout":
            oa = Dl = co = null;
            break;
          case "mousedown":
            Fl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fl = !1, Ac(x, r, b);
            break;
          case "selectionchange":
            if (Im) break;
          case "keydown":
          case "keyup":
            Ac(x, r, b);
        }
        var oe;
        if (Ol) e: {
          switch (e) {
            case "compositionstart":
              var fe = "onCompositionStart";
              break e;
            case "compositionend":
              fe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              fe = "onCompositionUpdate";
              break e;
          }
          fe = void 0;
        }
        else so ? Cc(e, r) && (fe = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (fe = "onCompositionStart");
        fe && (xc && r.locale !== "ko" && (so || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && so && (oe = vc()) : (rt = b, Nl = "value" in rt ? rt.value : rt.textContent, so = !0)), Me = Ki(m, fe), 0 < Me.length && (fe = new kc(fe, e, null, r, b), x.push({ event: fe, listeners: Me }), oe ? fe.data = oe : (oe = _c(r), oe !== null && (fe.data = oe)))), (oe = Em ? Nm(e, r) : Cm(e, r)) && (fe = Ki(m, "onBeforeInput"), 0 < fe.length && (Me = new kc("onBeforeInput", "beforeinput", null, r, b), x.push({ event: Me, listeners: fe }), Me.data = oe)), E0(x, e, m, r, b);
      }
      yp(x, n);
    });
  }
  function La(e, n, r) {
    return { instance: e, listener: n, currentTarget: r };
  }
  function Ki(e, n) {
    for (var r = n + "Capture", t = []; e !== null; ) {
      var o = e, a = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || a === null || (o = Yo(e, r), o != null && t.unshift(La(e, o, a)), o = Yo(e, n), o != null && t.push(La(e, o, a))), e.tag === 3) return t;
      e = e.return;
    }
    return [];
  }
  function P0(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function bp(e, n, r, t, o) {
    for (var a = n._reactName, i = []; r !== null && r !== t; ) {
      var l = r, s = l.alternate, m = l.stateNode;
      if (l = l.tag, s !== null && s === t) break;
      l !== 5 && l !== 26 && l !== 27 || m === null || (s = m, o ? (m = Yo(r, a), m != null && i.unshift(La(r, m, s))) : o || (m = Yo(r, a), m != null && i.push(La(r, m, s)))), r = r.return;
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var L0 = /\r\n?/g, O0 = /\u0000|\uFFFD/g;
  function wp(e) {
    return (typeof e == "string" ? e : "" + e).replace(L0, `
`).replace(O0, "");
  }
  function kp(e, n) {
    return n = wp(n), wp(e) === n;
  }
  function Qe(e, n, r, t, o, a) {
    switch (r) {
      case "children":
        if (typeof t == "string") n === "body" || n === "textarea" && t === "" || io(e, t);
        else if (typeof t == "number" || typeof t == "bigint") n !== "body" && io(e, "" + t);
        else return;
        break;
      case "className":
        Ba(e, "class", t);
        break;
      case "tabIndex":
        Ba(e, "tabindex", t);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ba(e, r, t);
        break;
      case "style":
        mc(e, t, a);
        return;
      case "data":
        if (n !== "object") {
          Ba(e, "data", t);
          break;
        }
      case "src":
      case "href":
        if (t === "" && (n !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (t == null || typeof t == "function" || typeof t == "symbol" || typeof t == "boolean") {
          e.removeAttribute(r);
          break;
        }
        t = qa(t), e.setAttribute(r, t);
        break;
      case "action":
      case "formAction":
        if (typeof t == "function") {
          e.setAttribute(r, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof a == "function" && (r === "formAction" ? (n !== "input" && Qe(e, n, "name", o.name, o, null), Qe(e, n, "formEncType", o.formEncType, o, null), Qe(e, n, "formMethod", o.formMethod, o, null), Qe(e, n, "formTarget", o.formTarget, o, null)) : (Qe(e, n, "encType", o.encType, o, null), Qe(e, n, "method", o.method, o, null), Qe(e, n, "target", o.target, o, null)));
        if (t == null || typeof t == "symbol" || typeof t == "boolean") {
          e.removeAttribute(r);
          break;
        }
        t = qa(t), e.setAttribute(r, t);
        break;
      case "onClick":
        t != null && (e.onclick = Lr);
        return;
      case "onScroll":
        t != null && Le("scroll", e);
        return;
      case "onScrollEnd":
        t != null && Le("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(u(61));
          if (r = t.__html, r != null) {
            if (o.children != null) throw Error(u(60));
            (a == null ? void 0 : a.__html) !== r && (e.innerHTML = r);
          }
        }
        break;
      case "multiple":
        e.multiple = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "muted":
        e.muted = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (t == null || typeof t == "function" || typeof t == "boolean" || typeof t == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        r = qa(t), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        t != null && typeof t != "function" && typeof t != "symbol" ? e.setAttribute(r, t) : e.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        t && typeof t != "function" && typeof t != "symbol" ? e.setAttribute(r, "") : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        t === !0 ? e.setAttribute(r, "") : t !== !1 && t != null && typeof t != "function" && typeof t != "symbol" ? e.setAttribute(r, t) : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        t != null && typeof t != "function" && typeof t != "symbol" && !isNaN(t) && 1 <= t ? e.setAttribute(r, t) : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        t == null || typeof t == "function" || typeof t == "symbol" || isNaN(t) ? e.removeAttribute(r) : e.setAttribute(r, t);
        break;
      case "popover":
        Le("beforetoggle", e), Le("toggle", e), Ua(e, "popover", t);
        break;
      case "xlinkActuate":
        Wr(e, "http://www.w3.org/1999/xlink", "xlink:actuate", t);
        break;
      case "xlinkArcrole":
        Wr(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", t);
        break;
      case "xlinkRole":
        Wr(e, "http://www.w3.org/1999/xlink", "xlink:role", t);
        break;
      case "xlinkShow":
        Wr(e, "http://www.w3.org/1999/xlink", "xlink:show", t);
        break;
      case "xlinkTitle":
        Wr(e, "http://www.w3.org/1999/xlink", "xlink:title", t);
        break;
      case "xlinkType":
        Wr(e, "http://www.w3.org/1999/xlink", "xlink:type", t);
        break;
      case "xmlBase":
        Wr(e, "http://www.w3.org/XML/1998/namespace", "xml:base", t);
        break;
      case "xmlLang":
        Wr(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", t);
        break;
      case "xmlSpace":
        Wr(e, "http://www.w3.org/XML/1998/namespace", "xml:space", t);
        break;
      case "is":
        Ua(e, "is", t);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") r = Xh.get(r) || r, Ua(e, r, t);
        else return;
    }
    Ve = !0;
  }
  function bs(e, n, r, t, o, a) {
    switch (r) {
      case "style":
        mc(e, t, a);
        return;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t)) throw Error(u(61));
          if (r = t.__html, r != null) {
            if (o.children != null) throw Error(u(60));
            (a == null ? void 0 : a.__html) !== r && (e.innerHTML = r);
          }
        }
        break;
      case "children":
        if (typeof t == "string") io(e, t);
        else if (typeof t == "number" || typeof t == "bigint") io(e, "" + t);
        else return;
        break;
      case "onScroll":
        t != null && Le("scroll", e);
        return;
      case "onScrollEnd":
        t != null && Le("scrollend", e);
        return;
      case "onClick":
        t != null && (e.onclick = Lr);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!ac.hasOwnProperty(r)) e: {
          if (r[0] === "o" && r[1] === "n" && (o = r.endsWith("Capture"), a = r.slice(2, o ? r.length - 7 : void 0), n = e[qn] || null, n = n != null ? n[r] : null, typeof n == "function" && e.removeEventListener(a, n, o), typeof t == "function")) {
            typeof n != "function" && n !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(a, t, o);
            break e;
          }
          Ve = !0, r in e ? e[r] = t : t === !0 ? e.setAttribute(r, "") : Ua(e, r, t);
        }
        return;
    }
    Ve = !0;
  }
  function jn(e, n, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Le("error", e), Le("load", e);
        var t = !1, o = !1, a;
        for (a in r) if (r.hasOwnProperty(a)) {
          var i = r[a];
          if (i != null) switch (a) {
            case "src":
              t = !0;
              break;
            case "srcSet":
              o = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(u(137, n));
            default:
              Qe(e, n, a, i, r, null);
          }
        }
        o && Qe(e, n, "srcSet", r.srcSet, r, null), t && Qe(e, n, "src", r.src, r, null);
        return;
      case "input":
        Le("invalid", e);
        var l = a = i = o = null, s = null, m = null;
        for (t in r) if (r.hasOwnProperty(t)) {
          var b = r[t];
          if (b != null) switch (t) {
            case "name":
              o = b;
              break;
            case "type":
              i = b;
              break;
            case "checked":
              s = b;
              break;
            case "defaultChecked":
              m = b;
              break;
            case "value":
              a = b;
              break;
            case "defaultValue":
              l = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(u(137, n));
              break;
            default:
              Qe(e, n, t, b, r, null);
          }
        }
        fc(e, a, l, s, m, i, o, !1);
        return;
      case "select":
        Le("invalid", e), t = i = a = null;
        for (o in r) if (r.hasOwnProperty(o) && (l = r[o], l != null)) switch (o) {
          case "value":
            a = l;
            break;
          case "defaultValue":
            i = l;
            break;
          case "multiple":
            t = l;
          default:
            Qe(e, n, o, l, r, null);
        }
        n = a, r = i, e.multiple = !!t, n != null ? ao(e, !!t, n, !1) : r != null && ao(e, !!t, r, !0);
        return;
      case "textarea":
        Le("invalid", e), a = o = t = null;
        for (i in r) if (r.hasOwnProperty(i) && (l = r[i], l != null)) switch (i) {
          case "value":
            t = l;
            break;
          case "defaultValue":
            o = l;
            break;
          case "children":
            a = l;
            break;
          case "dangerouslySetInnerHTML":
            if (l != null) throw Error(u(91));
            break;
          default:
            Qe(e, n, i, l, r, null);
        }
        pc(e, t, o, a);
        return;
      case "option":
        for (s in r) if (r.hasOwnProperty(s) && (t = r[s], t != null)) switch (s) {
          case "selected":
            e.selected = t && typeof t != "function" && typeof t != "symbol";
            break;
          default:
            Qe(e, n, s, t, r, null);
        }
        return;
      case "dialog":
        Le("beforetoggle", e), Le("toggle", e), Le("cancel", e), Le("close", e);
        break;
      case "iframe":
      case "object":
        Le("load", e);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Pa.length; t++) Le(Pa[t], e);
        break;
      case "image":
        Le("error", e), Le("load", e);
        break;
      case "details":
        Le("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Le("error", e), Le("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in r) if (r.hasOwnProperty(m) && (t = r[m], t != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(137, n));
          default:
            Qe(e, n, m, t, r, null);
        }
        return;
      default:
        if (wl(n)) {
          for (b in r) r.hasOwnProperty(b) && (t = r[b], t !== void 0 && bs(e, n, b, t, r, void 0));
          return;
        }
    }
    for (l in r) r.hasOwnProperty(l) && (t = r[l], t != null && Qe(e, n, l, t, r, null));
  }
  var T0 = {};
  function z0(e, n, r, t) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, a = null, i = null, l = null, s = null, m = null, b = null;
        for (v in r) {
          var x = r[v];
          if (r.hasOwnProperty(v) && x != null) switch (v) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              s = x;
            default:
              t.hasOwnProperty(v) || Qe(e, n, v, null, t, x);
          }
        }
        for (var p in t) {
          var v = t[p];
          if (x = r[p], t.hasOwnProperty(p) && (v != null || x != null)) switch (p) {
            case "type":
              v !== x && (Ve = !0), a = v;
              break;
            case "name":
              v !== x && (Ve = !0), o = v;
              break;
            case "checked":
              v !== x && (Ve = !0), m = v;
              break;
            case "defaultChecked":
              v !== x && (Ve = !0), b = v;
              break;
            case "value":
              v !== x && (Ve = !0), i = v;
              break;
            case "defaultValue":
              v !== x && (Ve = !0), l = v;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (v != null) throw Error(u(137, n));
              break;
            default:
              v !== x && Qe(e, n, p, v, t, x);
          }
        }
        vl(e, i, l, s, m, b, a, o);
        return;
      case "select":
        v = i = l = p = null;
        for (a in r) if (s = r[a], r.hasOwnProperty(a) && s != null) switch (a) {
          case "value":
            break;
          case "multiple":
            v = s;
          default:
            t.hasOwnProperty(a) || Qe(e, n, a, null, t, s);
        }
        for (o in t) if (a = t[o], s = r[o], t.hasOwnProperty(o) && (a != null || s != null)) switch (o) {
          case "value":
            a !== s && (Ve = !0), p = a;
            break;
          case "defaultValue":
            a !== s && (Ve = !0), l = a;
            break;
          case "multiple":
            a !== s && (Ve = !0), i = a;
          default:
            a !== s && Qe(e, n, o, a, t, s);
        }
        n = l, r = i, t = v, p != null ? ao(e, !!r, p, !1) : !!t != !!r && (n != null ? ao(e, !!r, n, !0) : ao(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        v = p = null;
        for (l in r) if (o = r[l], r.hasOwnProperty(l) && o != null && !t.hasOwnProperty(l)) switch (l) {
          case "value":
            break;
          case "children":
            break;
          default:
            Qe(e, n, l, null, t, o);
        }
        for (i in t) if (o = t[i], a = r[i], t.hasOwnProperty(i) && (o != null || a != null)) switch (i) {
          case "value":
            o !== a && (Ve = !0), p = o;
            break;
          case "defaultValue":
            o !== a && (Ve = !0), v = o;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(u(91));
            break;
          default:
            o !== a && Qe(e, n, i, o, t, a);
        }
        dc(e, p, v);
        return;
      case "option":
        for (var j in r) if (p = r[j], r.hasOwnProperty(j) && p != null && !t.hasOwnProperty(j)) switch (j) {
          case "selected":
            e.selected = !1;
            break;
          default:
            Qe(e, n, j, null, t, p);
        }
        for (s in t) if (p = t[s], v = r[s], t.hasOwnProperty(s) && p !== v && (p != null || v != null)) switch (s) {
          case "selected":
            p !== v && (Ve = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
            break;
          default:
            Qe(e, n, s, p, t, v);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Z in r) p = r[Z], r.hasOwnProperty(Z) && p != null && !t.hasOwnProperty(Z) && Qe(e, n, Z, null, t, p);
        for (m in t) if (p = t[m], v = r[m], t.hasOwnProperty(m) && p !== v && (p != null || v != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (p != null) throw Error(u(137, n));
            break;
          default:
            Qe(e, n, m, p, t, v);
        }
        return;
      default:
        if (wl(n)) {
          for (var we in r) p = r[we], r.hasOwnProperty(we) && p !== void 0 && !t.hasOwnProperty(we) && bs(e, n, we, void 0, t, p);
          for (b in t) p = t[b], v = r[b], !t.hasOwnProperty(b) || p === v || p === void 0 && v === void 0 || bs(e, n, b, p, t, v);
          return;
        }
    }
    for (var h in r) p = r[h], r.hasOwnProperty(h) && p != null && !t.hasOwnProperty(h) && Qe(e, n, h, null, t, p);
    for (x in t) p = t[x], v = r[x], !t.hasOwnProperty(x) || p === v || p == null && v == null || Qe(e, n, x, p, t, v);
  }
  function Sp(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function M0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, n = 0, r = performance.getEntriesByType("resource"), t = 0; t < r.length; t++) {
        var o = r[t], a = o.transferSize, i = o.initiatorType, l = o.duration;
        if (a && l && Sp(i)) {
          for (i = 0, l = o.responseEnd, t += 1; t < r.length; t++) {
            var s = r[t], m = s.startTime;
            if (m > l) break;
            var b = s.transferSize, x = s.initiatorType;
            b && Sp(x) && (s = s.responseEnd, i += b * (s < l ? 1 : (l - m) / (s - m)));
          }
          if (--t, n += 8 * (a + i) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ws = null, ks = null;
  function Oa(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function xp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ep(e, n) {
    if (e === 0) switch (n) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Np(e, n, r, t) {
    return r = Oa(r).createElement(e), r[zn] = t, r[qn] = n, jn(r, e, n), _n(r), r;
  }
  function Ss(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var xs = null;
  function I0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === xs ? !1 : (xs = e, !0) : (xs = null, !1);
  }
  var Es = typeof setTimeout == "function" ? setTimeout : void 0, D0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Cp = typeof Promise == "function" ? Promise : void 0, _p = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Es, F0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cp < "u" ? function(e) {
    return Cp.resolve(null).then(e).catch(j0);
  } : Es;
  function j0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function St(e) {
    return e === "head";
  }
  function Pp(e, n) {
    var r = n, t = 0;
    do {
      var o = r.nextSibling;
      if (e.removeChild(r), o && o.nodeType === 8) if (r = o.data, r === "/$" || r === "/&") {
        if (t === 0) {
          e.removeChild(o), Uo(n);
          return;
        }
        t--;
      } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&") t++;
      else if (r === "html") zs(e.ownerDocument.documentElement);
      else if (r === "head") {
        r = e.ownerDocument.head, zs(r);
        for (var a = r.firstChild; a; ) {
          var i = a.nextSibling, l = a.nodeName;
          a[Qo] || l === "SCRIPT" || l === "STYLE" || l === "LINK" && a.rel.toLowerCase() === "stylesheet" || r.removeChild(a), a = i;
        }
      } else r === "body" && zs(e.ownerDocument.body);
      r = o;
    } while (r);
    Uo(n);
  }
  function Lp(e, n) {
    var r = e;
    e = 0;
    do {
      var t = r.nextSibling;
      if (r.nodeType === 1 ? n ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (n ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), t && t.nodeType === 8) if (r = t.data, r === "/$") {
        if (e === 0) break;
        e--;
      } else r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || e++;
      r = t;
    } while (r);
  }
  function Op(e, n, r) {
    if (n = CSS.escape(n) !== n ? "r-" + btoa(n).replace(/=/g, "") : n, e.style.viewTransitionName = n, r != null && (e.style.viewTransitionClass = r), r = getComputedStyle(e), r.display === "inline") {
      if (n = e.getClientRects(), n.length === 1) var t = 1;
      else for (var o = t = 0; o < n.length; o++) {
        var a = n[o];
        0 < a.width && 0 < a.height && t++;
      }
      t === 1 && (e = e.style, e.display = n.length === 1 ? "inline-block" : "block", e.marginTop = "-" + r.paddingTop, e.marginBottom = "-" + r.paddingBottom);
    }
  }
  function Tp(e, n) {
    e = e.style, n = n.style;
    var r = n != null ? n.hasOwnProperty("viewTransitionName") ? n.viewTransitionName : n.hasOwnProperty("view-transition-name") ? n["view-transition-name"] : null : null;
    e.viewTransitionName = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), r = n != null ? n.hasOwnProperty("viewTransitionClass") ? n.viewTransitionClass : n.hasOwnProperty("view-transition-class") ? n["view-transition-class"] : null : null, e.viewTransitionClass = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), e.display === "inline-block" && (n == null ? e.display = e.margin = "" : (r = n.display, e.display = r == null || typeof r == "boolean" ? "" : r, r = n.margin, r != null ? e.margin = r : (r = n.hasOwnProperty("marginTop") ? n.marginTop : n["margin-top"], e.marginTop = r == null || typeof r == "boolean" ? "" : r, n = n.hasOwnProperty("marginBottom") ? n.marginBottom : n["margin-bottom"], e.marginBottom = n == null || typeof n == "boolean" ? "" : n)));
  }
  function R0(e, n, r) {
    return r = r.ownerDocument.defaultView, { rect: e, abs: n.position === "absolute" || n.position === "fixed", clip: n.clipPath !== "none" || n.overflow !== "visible" || n.filter !== "none" || n.mask !== "none" || n.mask !== "none" || n.borderRadius !== "0px", view: 0 <= e.bottom && 0 <= e.right && e.top <= r.innerHeight && e.left <= r.innerWidth };
  }
  function Ns(e) {
    var n = e.getBoundingClientRect(), r = getComputedStyle(e);
    return R0(n, r, e);
  }
  function A0(e) {
    return e.documentElement.clientHeight;
  }
  function $0(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function V0(e, n, r, t, o, a, i, l, s) {
    var m = n.nodeType === 9 ? n : n.ownerDocument;
    try {
      var b = m.startViewTransition({ update: function() {
        var p = m.defaultView, v = p.navigation && p.navigation.transition, j = m.fonts.status;
        t();
        var Z = [];
        if (j === "loaded" && (A0(m), m.fonts.status === "loading" && Z.push(m.fonts.ready)), j = Z.length, e !== null) for (var we = e.suspenseyImages, h = 0, c = 0; c < we.length; c++) {
          var y = we[c];
          if (!y.complete) {
            var S = y.getBoundingClientRect();
            if (0 < S.bottom && 0 < S.right && S.top < p.innerHeight && S.left < p.innerWidth) {
              if (h += Zp(y), h > el) {
                Z.length = j;
                break;
              }
              y = new Promise($0.bind(y)), Z.push(y);
            }
          }
        }
        if (0 < Z.length) return p = Promise.race([Promise.all(Z), new Promise(function(q) {
          return setTimeout(q, 500);
        })]).then(o, o), (v ? Promise.allSettled([v.finished, p]) : p).then(a, a);
        if (o(), v) return v.finished.then(a, a);
        a();
      }, types: r });
      m.__reactViewTransition = b;
      var x = [];
      return b.ready.then(function() {
        for (var p = m.documentElement.getAnimations({ subtree: !0 }), v = 0; v < p.length; v++) {
          var j = p[v], Z = j.effect, we = Z.pseudoElement;
          if (we != null && we.startsWith("::view-transition")) {
            x.push(j), j = Z.getKeyframes();
            for (var h = we = void 0, c = !0, y = 0; y < j.length; y++) {
              var S = j[y], q = S.width;
              if (we === void 0) we = q;
              else if (we !== q) {
                c = !1;
                break;
              }
              if (q = S.height, h === void 0) h = q;
              else if (h !== q) {
                c = !1;
                break;
              }
              delete S.width, delete S.height, S.transform === "none" && delete S.transform;
            }
            c && we !== void 0 && h !== void 0 && (Z.setKeyframes(j), c = getComputedStyle(Z.target, Z.pseudoElement), c.width !== we || c.height !== h) && (c = j[0], c.width = we, c.height = h, c = j[j.length - 1], c.width = we, c.height = h, Z.setKeyframes(j));
          }
        }
        i();
      }, function(p) {
        m.__reactViewTransition === b && (m.__reactViewTransition = null);
        try {
          if (typeof p == "object" && p !== null) switch (p.name) {
            case "InvalidStateError":
              (p.message === "View transition was skipped because document visibility state is hidden." || p.message === "Skipping view transition because document visibility state has become hidden." || p.message === "Skipping view transition because viewport size changed." || p.message === "Transition was aborted because of invalid state") && (p = null);
          }
          p !== null && s(p);
        } finally {
          t(), o(), i();
        }
      }), b.finished.finally(function() {
        for (var p = 0; p < x.length; p++) x[p].cancel();
        m.__reactViewTransition === b && (m.__reactViewTransition = null), l();
      }), b;
    } catch {
      return t(), o(), i(), null;
    }
  }
  function Jt(e, n) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + n + ")";
  }
  Jt.prototype.animate = function(e, n) {
    return n = typeof n == "number" ? { duration: n } : G({}, n), n.pseudoElement = this._selector, this._scope.animate(e, n);
  }, Jt.prototype.getAnimations = function() {
    for (var e = this._scope, n = this._selector, r = e.getAnimations({ subtree: !0 }), t = [], o = 0; o < r.length; o++) {
      var a = r[o].effect;
      a !== null && a.target === e && a.pseudoElement === n && t.push(r[o]);
    }
    return t;
  }, Jt.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function zp(e) {
    return { name: e, group: new Jt("group", e), imagePair: new Jt("image-pair", e), old: new Jt("old", e), new: new Jt("new", e) };
  }
  function ur(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  ur.prototype.addEventListener = function(e, n, r) {
    var t = null, o = null;
    if (!(r != null && typeof r != "boolean" && (t = r.signal || null, t !== null && t.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var a = this._eventListeners;
      if (Ip(a, e, n, r) === -1) {
        var i = this, l = n;
        r != null && typeof r != "boolean" && r.once === !0 && (l = function(s) {
          i.removeEventListener(e, n, r), typeof n == "function" ? n.call(this, s) : n.handleEvent(s);
        }), t !== null && (o = i.removeEventListener.bind(i, e, n, r), t.addEventListener("abort", o, { once: !0 }), o = t.removeEventListener.bind(t, "abort", o)), t = Ro(r), a.push({ type: e, listener: n, optionsOrUseCapture: r, attachedListener: l, cleanup: o }), g(this._fragmentFiber.child, !1, W0, e, l, t);
      }
      this._eventListeners = a;
    }
  };
  function W0(e, n, r, t) {
    return K(e).addEventListener(n, r, t), !1;
  }
  ur.prototype.removeEventListener = function(e, n, r) {
    var t = this._eventListeners;
    if (t !== null && (n = Ip(t, e, n, r), n !== -1)) {
      var o = t[n];
      r = o.attachedListener;
      var a = o.cleanup;
      o = Ro(o.optionsOrUseCapture), g(this._fragmentFiber.child, !1, H0, e, r, o), t.splice(n, 1), a !== null && a();
    }
  };
  function H0(e, n, r, t) {
    return K(e).removeEventListener(n, r, t), !1;
  }
  function Ro(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Mp(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Ip(e, n, r, t) {
    if (e.length === 0) return -1;
    t = Mp(t);
    for (var o = 0; o < e.length; o++) {
      var a = e[o];
      if (a.type === n && a.listener === r && Mp(a.optionsOrUseCapture) === t) return o;
    }
    return -1;
  }
  ur.prototype.dispatchEvent = function(e) {
    var n = M(this._fragmentFiber);
    if (n === null) return !0;
    n = K(n);
    var r = this._eventListeners;
    if (r !== null && 0 < r.length || !e.bubbles) {
      var t = n.nodeType === 9 ? n.createComment("") : document.createTextNode("");
      if (r) for (var o = 0; o < r.length; o++) {
        var a = r[o];
        t.addEventListener(a.type, a.attachedListener, Ro(a.optionsOrUseCapture));
      }
      if (n.appendChild(t), e = t.dispatchEvent(e), r) for (o = 0; o < r.length; o++) a = r[o], t.removeEventListener(a.type, a.attachedListener, Ro(a.optionsOrUseCapture));
      return n.removeChild(t), e;
    }
    return n.dispatchEvent(e);
  }, ur.prototype.focus = function(e) {
    g(this._fragmentFiber.child, !0, Dp, e, void 0, void 0);
  };
  function Dp(e, n) {
    return e.tag === 6 ? !1 : (e = K(e), ng(e, n));
  }
  ur.prototype.focusLast = function(e) {
    var n = [];
    g(this._fragmentFiber.child, !0, Cs, n, void 0, void 0);
    for (var r = n.length - 1; 0 <= r && !Dp(n[r], e); r--) ;
  };
  function Cs(e, n) {
    return n.push(e), !1;
  }
  ur.prototype.blur = function() {
    var e = M(this._fragmentFiber);
    e !== null && (e = K(e), e = Oa(e).activeElement, e !== null && g(this._fragmentFiber.child, !1, U0, e, void 0, void 0));
  };
  function U0(e, n) {
    return e.tag === 6 ? !1 : (e = K(e), e === n || e.contains(n) ? (n.blur(), !0) : !1);
  }
  ur.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), g(this._fragmentFiber.child, !1, B0, e, void 0, void 0);
  };
  function B0(e, n) {
    return e.tag === 6 || (e = K(e), n.observe(e)), !1;
  }
  ur.prototype.unobserveUsing = function(e) {
    var n = this._observers;
    if (n !== null && n.has(e)) {
      n.delete(e), g(this._fragmentFiber.child, !1, q0, e, void 0, void 0);
      for (var r = n = 0; r < Cr.length; r++) {
        var t = Cr[r];
        t.fragmentInstance === this && t.observer === e ? e.unobserve(t.instance) : Cr[n++] = t;
      }
      Cr.length = n;
    }
  };
  function q0(e, n) {
    return e.tag === 6 || (e = K(e), n.unobserve(e)), !1;
  }
  var Cr = [], _s = !1;
  function G0(e, n, r) {
    Cr.push({ fragmentInstance: e, observer: n, instance: r }), _s || (_s = !0, rg(function() {
      _s = !1;
      var t = Cr;
      Cr = [];
      for (var o = 0; o < t.length; o++) {
        var a = t[o];
        a.observer.unobserve(a.instance);
      }
    }));
  }
  ur.prototype.getClientRects = function() {
    var e = [];
    return g(this._fragmentFiber.child, !1, Q0, e, void 0, void 0), e;
  };
  function Q0(e, n) {
    if (e.tag === 6) {
      e = e.stateNode;
      var r = e.ownerDocument.createRange();
      r.selectNodeContents(e), n.push.apply(n, r.getClientRects());
    } else e = K(e), n.push.apply(n, e.getClientRects());
    return !1;
  }
  ur.prototype.getRootNode = function(e) {
    var n = M(this._fragmentFiber);
    return n === null ? this : K(n).getRootNode(e);
  }, ur.prototype.compareDocumentPosition = function(e) {
    var n = M(this._fragmentFiber);
    if (n === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var r = [];
    g(this._fragmentFiber.child, !1, Cs, r, void 0, void 0);
    var t = K(n);
    if (r.length === 0) {
      if (r = t, re(this._fragmentFiber)) {
        e: {
          for (n = this._fragmentFiber.return; n !== null; ) {
            if (n.tag === 4) {
              n = n.stateNode.containerInfo;
              break e;
            }
            if (n.tag === 3 || n.tag === 5 || n.tag === 27) break;
            n = n.return;
          }
          n = null;
        }
        n != null && (r = n);
      }
      n = this._fragmentFiber;
      var o = t = r.compareDocumentPosition(e);
      return r === e ? o = Node.DOCUMENT_POSITION_CONTAINS : t & Node.DOCUMENT_POSITION_CONTAINED_BY && (r = le(n)[1], r === null ? o = Node.DOCUMENT_POSITION_PRECEDING : (e = K(r).compareDocumentPosition(e), o = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), o |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    n = K(r[0]), o = K(r[r.length - 1]);
    var a = re(this._fragmentFiber) ? n.parentElement : t;
    if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    t = a.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var i = n.compareDocumentPosition(e), l = o.compareDocumentPosition(e), s = i & Node.DOCUMENT_POSITION_CONTAINED_BY || l & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return l = t && a && i & Node.DOCUMENT_POSITION_FOLLOWING && l & Node.DOCUMENT_POSITION_PRECEDING, n = t && n === e || a && o === e || s || l ? Node.DOCUMENT_POSITION_CONTAINED_BY : !t && n === e || !a && o === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || X0(n, this._fragmentFiber, r[0], r[r.length - 1], e) ? n : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function X0(e, n, r, t, o) {
    var a = zt(o);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (r = !!a) e: {
        for (; a !== null; ) {
          if (a.tag === 7 && (a === n || a.alternate === n)) {
            r = !0;
            break e;
          }
          a = a.return;
        }
        r = !1;
      }
      return r;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (a === null) return a = o.ownerDocument, o === a || o === a.documentElement || o === a.body;
      e: {
        for (a = n, n = M(n); a !== null; ) {
          if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== n && a.alternate !== n)) {
            a = !0;
            break e;
          }
          a = a.return;
        }
        a = !1;
      }
      return a;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((n = !!a) && !(n = a === r) && (n = se(r, a, ce), n === null ? n = !1 : (g(n, !0, ae, a, r), a = Q, Q = null, n = a !== null)), n) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((n = !!a) && !(n = a === t) && (n = se(t, a, ce), n === null ? n = !1 : (g(n, !0, ee, a, t), a = Q, ke = Q = null, n = a !== null)), n) : !1;
  }
  function Fp(e, n) {
    var r = e.ownerDocument.createRange();
    r.selectNodeContents(e), e = r.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, n ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
  }
  ur.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(u(566));
    var n = [];
    g(this._fragmentFiber.child, !1, Cs, n, void 0, void 0);
    var r = e !== !1;
    if (n.length === 0) {
      var t = le(this._fragmentFiber);
      if (t = r ? t[1] || t[0] || M(this._fragmentFiber) : t[0] || t[1], t === null) return;
      if (t.tag === 6) {
        e = K(t), Fp(e, r);
        return;
      }
      if (t = K(t), t.nodeType !== 9) {
        if (t.nodeType === 11) {
          r = "host" in t ? t.host : null, r !== null && r.scrollIntoView(e);
          return;
        }
        t.scrollIntoView(e);
      }
    }
    for (t = r ? n.length - 1 : 0; t !== (r ? -1 : n.length); ) {
      var o = n[t];
      o.tag === 6 ? (o = K(o), Fp(o, r)) : K(o).scrollIntoView(e), t += r ? -1 : 1;
    }
  };
  function Y0(e, n) {
    return e = K(e), jp(e, n), !1;
  }
  function jp(e, n) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(n);
  }
  function Rp(e, n) {
    var r = n._eventListeners;
    if (r !== null) for (var t = 0; t < r.length; t++) {
      var o = r[t];
      e.addEventListener(o.type, o.attachedListener, Ro(o.optionsOrUseCapture));
    }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(a) {
      for (var i = 0, l = 0; l < Cr.length; l++) {
        var s = Cr[l];
        (s.fragmentInstance !== n || s.observer !== a || s.instance !== e) && (Cr[i++] = s);
      }
      Cr.length = i, a.observe(e);
    }), jp(e, n));
  }
  function K0(e, n) {
    var r = n._eventListeners;
    if (r !== null) for (var t = 0; t < r.length; t++) {
      var o = r[t];
      e.removeEventListener(o.type, o.attachedListener, Ro(o.optionsOrUseCapture));
    }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(a) {
      typeof a.rootMargin == "string" ? G0(n, a, e) : a.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(n));
  }
  function Ps(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (n = n.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ps(r), Ha(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function Z0(e, n, r, t) {
    for (; e.nodeType === 1; ) {
      var o = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!t && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (t) {
        if (!e[Qo]) switch (n) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (a = e.getAttribute("src"), (a !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (n === "input" && e.type === "hidden") {
        var a = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === a) return e;
      } else return e;
      if (e = gr(e.nextSibling), e === null) break;
    }
    return null;
  }
  function J0(e, n, r) {
    if (n === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = gr(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ap(e, n) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = gr(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ls(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Os(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function eg(e, n) {
    var r = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = n;
    else if (e.data !== "$?" || r.readyState !== "loading") n();
    else {
      var t = function() {
        n(), r.removeEventListener("DOMContentLoaded", t);
      };
      r.addEventListener("DOMContentLoaded", t), e._reactRetry = t;
    }
  }
  function gr(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F") break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return e;
  }
  var Ts = null;
  function $p(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (n === 0) return gr(e.nextSibling);
          n--;
        } else r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Vp(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (n === 0) return e;
          n--;
        } else r !== "/$" && r !== "/&" || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ng(e, n) {
    function r() {
      t = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var t = !1;
    try {
      e.ownerDocument.addEventListener("focus", r, !0), (e.focus || HTMLElement.prototype.focus).call(e, n);
    } finally {
      e.ownerDocument.removeEventListener("focus", r, !0);
    }
    return t;
  }
  function rg(e) {
    _p(function() {
      _p(function(n) {
        return e(n);
      });
    });
  }
  function Wp(e, n, r) {
    switch (n = Oa(r), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function Hp(e, n, r) {
    for (var t in r) {
      var o = r[t];
      r.hasOwnProperty(t) && o != null && Qe(e, n, t, null, T0, o);
    }
    r.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Lr && (e.onclick = null), Ha(e);
  }
  function zs(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    Ha(e);
  }
  var yr = /* @__PURE__ */ new Map(), Up = /* @__PURE__ */ new Set();
  function Ta(e) {
    if (typeof e.getRootNode == "function") {
      var n = e.getRootNode();
      if (n.nodeType === 9 || n.nodeType === 11) return n;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var nt = ue.d;
  ue.d = { f: tg, r: og, D: ag, C: ig, L: lg, m: ug, X: cg, S: sg, M: fg };
  function tg() {
    var e = nt.f(), n = Bi();
    return e || n;
  }
  function og(e) {
    var n = ro(e);
    n !== null && n.tag === 5 && n.type === "form" ? qf(n) : nt.r(e);
  }
  var Ao = typeof document > "u" ? null : document;
  function Bp(e, n, r) {
    var t = Ao;
    if (t && typeof n == "string" && n) {
      var o = wr(n);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof r == "string" && (o += '[crossorigin="' + r + '"]'), Up.has(o) || (Up.add(o), e = { rel: e, crossOrigin: r, href: n }, t.querySelector(o) === null && (n = t.createElement("link"), jn(n, "link", e), _n(n), t.head.appendChild(n)));
    }
  }
  function ag(e) {
    nt.D(e), Bp("dns-prefetch", e, null);
  }
  function ig(e, n) {
    nt.C(e, n), Bp("preconnect", e, n);
  }
  function lg(e, n, r) {
    nt.L(e, n, r);
    var t = Ao;
    if (t && e && n) {
      var o = 'link[rel="preload"][as="' + wr(n) + '"]';
      n === "image" && r && r.imageSrcSet ? (o += '[imagesrcset="' + wr(r.imageSrcSet) + '"]', typeof r.imageSizes == "string" && (o += '[imagesizes="' + wr(r.imageSizes) + '"]')) : o += '[href="' + wr(e) + '"]';
      var a = o;
      switch (n) {
        case "style":
          a = $o(e);
          break;
        case "script":
          a = Vo(e);
      }
      if (!(yr.has(a) || (e = G({ rel: "preload", href: n === "image" && r && r.imageSrcSet ? void 0 : e, as: n }, r), yr.set(a, e), t.querySelector(o) !== null || n === "style" && t.querySelector(za(a)) || n === "script" && t.querySelector(Ma(a))))) {
        var i = t.createElement("link");
        jn(i, "link", e), n === "style" && (i[Wa] = !0, i.onload = i.onerror = function() {
          tc(i);
        }), _n(i), t.head.appendChild(i);
      }
    }
  }
  function ug(e, n) {
    nt.m(e, n);
    var r = Ao;
    if (r && e) {
      var t = n && typeof n.as == "string" ? n.as : "script", o = 'link[rel="modulepreload"][as="' + wr(t) + '"][href="' + wr(e) + '"]', a = o;
      switch (t) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          a = Vo(e);
      }
      if (!yr.has(a) && (e = G({ rel: "modulepreload", href: e }, n), yr.set(a, e), r.querySelector(o) === null)) {
        switch (t) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Ma(a))) return;
        }
        t = r.createElement("link"), jn(t, "link", e), _n(t), r.head.appendChild(t);
      }
    }
  }
  function sg(e, n, r) {
    nt.S(e, n, r);
    var t = Ao;
    if (t && e) {
      var o = to(t).hoistableStyles, a = $o(e);
      n = n || "default";
      var i = o.get(a);
      if (!i) {
        var l = { loading: 0, preload: null };
        if (i = t.querySelector(za(a))) l.loading = 5;
        else {
          e = G({ rel: "stylesheet", href: e, "data-precedence": n }, r), (r = yr.get(a)) && Ms(e, r);
          var s = i = t.createElement("link");
          _n(s), jn(s, "link", e), s._p = new Promise(function(m, b) {
            s.onload = m, s.onerror = b;
          }), s.addEventListener("load", function() {
            l.loading |= 1;
          }), s.addEventListener("error", function() {
            l.loading |= 2;
          }), l.loading |= 4, Zi(i, n, t);
        }
        i = { type: "stylesheet", instance: i, count: 1, state: l }, o.set(a, i);
      }
    }
  }
  function cg(e, n) {
    nt.X(e, n);
    var r = Ao;
    if (r && e) {
      var t = to(r).hoistableScripts, o = Vo(e), a = t.get(o);
      a || (a = r.querySelector(Ma(o)), a || (e = G({ src: e, async: !0 }, n), (n = yr.get(o)) && Is(e, n), a = r.createElement("script"), _n(a), jn(a, "link", e), r.head.appendChild(a)), a = { type: "script", instance: a, count: 1, state: null }, t.set(o, a));
    }
  }
  function fg(e, n) {
    nt.M(e, n);
    var r = Ao;
    if (r && e) {
      var t = to(r).hoistableScripts, o = Vo(e), a = t.get(o);
      a || (a = r.querySelector(Ma(o)), a || (e = G({ src: e, async: !0, type: "module" }, n), (n = yr.get(o)) && Is(e, n), a = r.createElement("script"), _n(a), jn(a, "link", e), r.head.appendChild(a)), a = { type: "script", instance: a, count: 1, state: null }, t.set(o, a));
    }
  }
  function qp(e, n, r, t) {
    var o = (o = gn.current) ? Ta(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (r = $o(r.href), n = to(o).hoistableStyles, t = n.get(r), t || (t = { type: "style", instance: null, count: 0, state: null }, n.set(r, t)), t) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = $o(r.href);
          var a = to(o).hoistableStyles, i = a.get(e);
          if (i || (o = o.ownerDocument || o, i = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, a.set(e, i), (a = o.querySelector(za(e))) ? a._p || (i.instance = a, i.state.loading = 5) : (a = yr.get(e), a || (a = { rel: "preload", as: "style", href: r.href, crossOrigin: r.crossOrigin, integrity: r.integrity, media: r.media, hrefLang: r.hrefLang, referrerPolicy: r.referrerPolicy }, yr.set(e, a)), dg(o, e, a, i.state))), n && t === null) throw Error(u(528, ""));
          return i;
        }
        if (n && t !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return n = r.async, r = r.src, typeof r == "string" && n && typeof n != "function" && typeof n != "symbol" ? (r = Vo(r), n = to(o).hoistableScripts, t = n.get(r), t || (t = { type: "script", instance: null, count: 0, state: null }, n.set(r, t)), t) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function $o(e) {
    return 'href="' + wr(e) + '"';
  }
  function za(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Gp(e) {
    return G({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function dg(e, n, r, t) {
    if (n = e.querySelector('link[rel="preload"][as="style"][' + n + "]")) {
      if (n[Wa] !== !0) {
        t.loading = 1;
        return;
      }
    } else n = e.createElement("link"), n[Wa] = !0, n.onload = n.onerror = tc.bind(null, n), jn(n, "link", r), _n(n), e.head.appendChild(n);
    t.preload = n, n.addEventListener("load", function() {
      return t.loading |= 1;
    }), n.addEventListener("error", function() {
      return t.loading |= 2;
    });
  }
  function Vo(e) {
    return '[src="' + wr(e) + '"]';
  }
  function Ma(e) {
    return "script[async]" + e;
  }
  function Qp(e, n, r) {
    if (n.count++, n.instance === null) switch (n.type) {
      case "style":
        var t = e.querySelector('style[data-href~="' + wr(r.href) + '"]');
        if (t) return n.instance = t, _n(t), t;
        var o = G({}, r, { "data-href": r.href, "data-precedence": r.precedence, href: null, precedence: null });
        return t = (e.ownerDocument || e).createElement("style"), _n(t), jn(t, "style", o), Zi(t, r.precedence, e), n.instance = t;
      case "stylesheet":
        o = $o(r.href);
        var a = e.querySelector(za(o));
        if (a) return n.state.loading |= 4, n.instance = a, _n(a), a;
        t = Gp(r), (o = yr.get(o)) && Ms(t, o), a = (e.ownerDocument || e).createElement("link"), _n(a);
        var i = a;
        return i._p = new Promise(function(l, s) {
          i.onload = l, i.onerror = s;
        }), jn(a, "link", t), n.state.loading |= 4, Zi(a, r.precedence, e), n.instance = a;
      case "script":
        return a = Vo(r.src), (o = e.querySelector(Ma(a))) ? (n.instance = o, _n(o), o) : (t = r, (o = yr.get(a)) && (t = G({}, r), Is(t, o)), e = e.ownerDocument || e, o = e.createElement("script"), _n(o), jn(o, "link", t), e.head.appendChild(o), n.instance = o);
      case "void":
        return null;
      default:
        throw Error(u(443, n.type));
    }
    else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (t = n.instance, n.state.loading |= 4, Zi(t, r.precedence, e));
    return n.instance;
  }
  function Zi(e, n, r) {
    for (var t = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = t.length ? t[t.length - 1] : null, a = o, i = 0; i < t.length; i++) {
      var l = t[i];
      if (l.dataset.precedence === n) a = l;
      else if (a !== o) break;
    }
    a ? a.parentNode.insertBefore(e, a.nextSibling) : (n = r.nodeType === 9 ? r.head : r, n.insertBefore(e, n.firstChild));
  }
  function Ms(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Is(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var Ji = null;
  function Xp(e, n, r) {
    if (Ji === null) {
      var t = /* @__PURE__ */ new Map(), o = Ji = /* @__PURE__ */ new Map();
      o.set(r, t);
    } else o = Ji, t = o.get(r), t || (t = /* @__PURE__ */ new Map(), o.set(r, t));
    if (t.has(e)) return t;
    for (t.set(e, null), r = r.getElementsByTagName(e), o = 0; o < r.length; o++) {
      var a = r[o];
      if (!(a[Qo] || a[zn] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = a.getAttribute(n) || "";
        i = e + i;
        var l = t.get(i);
        l ? l.push(a) : t.set(i, [a]);
      }
    }
    return t;
  }
  function Ds(e, n, r) {
    e = e.ownerDocument || e, e.head.insertBefore(r, n === "title" ? e.querySelector("head > title") : null);
  }
  function pg(e, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0;
    }
    return !1;
  }
  function Yp(e, n) {
    return e === "img" && n.src != null && n.src !== "" && n.onLoad == null && n.loading !== "lazy";
  }
  function Kp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Zp(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Jp(e, n) {
    typeof n.decode == "function" && (e.imgCount++, n.complete || (e.imgBytes += Zp(n), e.suspenseyImages.push(n)), e = gg.bind(e), n.decode().then(e, e));
  }
  function hg(e, n, r, t) {
    if (r.type === "stylesheet" && (typeof t.media != "string" || matchMedia(t.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var o = $o(t.href), a = n.querySelector(za(o));
        if (a) {
          n = a._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = Ia.bind(e), n.then(e, e)), r.state.loading |= 4, r.instance = a, _n(a);
          return;
        }
        a = n.ownerDocument || n, t = Gp(t), (o = yr.get(o)) && Ms(t, o), a = a.createElement("link"), _n(a);
        var i = a;
        i._p = new Promise(function(l, s) {
          i.onload = l, i.onerror = s;
        }), jn(a, "link", t), r.instance = a;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = Ia.bind(e), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  var el = 0;
  function mg(e, n) {
    return e.stylesheets && e.count === 0 && rl(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var t = setTimeout(function() {
        if (e.stylesheets && rl(e, e.stylesheets), e.unsuspend) {
          var a = e.unsuspend;
          e.unsuspend = null, a();
        }
      }, 6e4 + n);
      0 < e.imgBytes && el === 0 && (el = 62500 * M0());
      var o = setTimeout(function() {
        if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && rl(e, e.stylesheets), e.unsuspend)) {
          var a = e.unsuspend;
          e.unsuspend = null, a();
        }
      }, (e.imgBytes > el ? 50 : 800) + n);
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(t), clearTimeout(o);
      };
    } : null;
  }
  function eh(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) rl(e, e.stylesheets);
      else if (e.unsuspend) {
        var n = e.unsuspend;
        e.unsuspend = null, n();
      }
    }
  }
  function Ia() {
    this.count--, eh(this);
  }
  function gg() {
    this.imgCount--, eh(this);
  }
  var nl = null;
  function rl(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, nl = /* @__PURE__ */ new Map(), n.forEach(yg, e), nl = null, Ia.call(e));
  }
  function yg(e, n) {
    if (!(n.state.loading & 4)) {
      var r = nl.get(e);
      if (r) var t = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), nl.set(e, r);
        for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < o.length; a++) {
          var i = o[a];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (r.set(i.dataset.precedence, i), t = i);
        }
        t && r.set(null, t);
      }
      o = n.instance, i = o.getAttribute("data-precedence"), a = r.get(i) || t, a === t && r.set(null, o), r.set(i, o), this.count++, t = Ia.bind(this), o.addEventListener("load", t), o.addEventListener("error", t), a ? a.parentNode.insertBefore(o, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Wo = { $$typeof: nn, Provider: null, Consumer: null, _currentValue: R, _currentValue2: R, _threadCount: 0 };
  function vg(e, n, r, t, o, a, i, l, s) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hl(0), this.hiddenUpdates = hl(null), this.identifierPrefix = t, this.onUncaughtError = o, this.onCaughtError = a, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nh(e, n, r, t, o, a, i, l, s, m, b, x) {
    return e = new vg(e, n, r, i, s, m, b, x, l), n = 1, a === !0 && (n |= 24), a = Gn(3, null, null, n), e.current = a, a.stateNode = e, n = Xl(), n.refCount++, e.pooledCache = n, n.refCount++, a.memoizedState = { element: t, isDehydrated: r, cache: n }, Jl(a), e;
  }
  function rh(e) {
    return e ? (e = ho, e) : ho;
  }
  function th(e, n, r, t, o, a) {
    o = rh(o), t.context === null ? t.context = o : t.pendingContext = o, t = ct(n), t.payload = { element: r }, a = a === void 0 ? null : a, a !== null && (t.callback = a), r = ft(e, t, n), r !== null && (Kn(r, e, n), fa(r, e, n));
  }
  function oh(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function Fs(e, n) {
    oh(e, n), (e = e.alternate) && oh(e, n);
  }
  function ah(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Ft(e, 67108864);
      n !== null && Kn(n, e, 67108864), Fs(e, 67108864);
    }
  }
  function ih(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = lr();
      n = ml(n);
      var r = Ft(e, n);
      r !== null && Kn(r, e, n), Fs(e, n);
    }
  }
  var Ho = !0;
  function bg(e, n, r, t) {
    var o = B.T;
    B.T = null;
    var a = ue.p;
    try {
      ue.p = 2, js(e, n, r, t);
    } finally {
      ue.p = a, B.T = o;
    }
  }
  function wg(e, n, r, t) {
    var o = B.T;
    B.T = null;
    var a = ue.p;
    try {
      ue.p = 8, js(e, n, r, t);
    } finally {
      ue.p = a, B.T = o;
    }
  }
  function js(e, n, r, t) {
    if (Ho) {
      var o = Rs(t);
      if (o === null) vs(e, n, t, tl, r), uh(e, t);
      else if (Sg(o, e, n, r, t)) t.stopPropagation();
      else if (uh(e, t), n & 4 && -1 < kg.indexOf(e)) {
        for (; o !== null; ) {
          var a = ro(o);
          if (a !== null) switch (a.tag) {
            case 3:
              if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
                var i = Tt(a.pendingLanes);
                if (i !== 0) {
                  var l = a;
                  for (l.pendingLanes |= 2, l.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - wn(i);
                    l.entanglements[1] |= s, i &= ~s;
                  }
                  Ar(a), (We & 6) === 0 && (Wi = w() + 500, _a(0));
                }
              }
              break;
            case 31:
            case 13:
              l = Ft(a, 2), l !== null && Kn(l, a, 2), Bi(), Fs(a, 2);
          }
          if (a = Rs(t), a === null && vs(e, n, t, tl, r), a === o) break;
          o = a;
        }
        o !== null && t.stopPropagation();
      } else vs(e, n, t, null, r);
    }
  }
  function Rs(e) {
    return e = Sl(e), As(e);
  }
  var tl = null;
  function As(e) {
    if (tl = null, e = zt(e), e !== null) {
      var n = P(e);
      if (n === null) e = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (e = F(n), e !== null) return e;
          e = null;
        } else if (r === 31) {
          if (e = $(n), e !== null) return e;
          e = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return tl = e, null;
  }
  function lh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_()) {
          case A:
            return 2;
          case J:
            return 8;
          case W:
          case me:
            return 32;
          case Te:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $s = !1, xt = null, Et = null, Nt = null, Da = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Ct = [], kg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function uh(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        xt = null;
        break;
      case "dragenter":
      case "dragleave":
        Et = null;
        break;
      case "mouseover":
      case "mouseout":
        Nt = null;
        break;
      case "pointerover":
      case "pointerout":
        Da.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fa.delete(n.pointerId);
    }
  }
  function ja(e, n, r, t, o, a) {
    return e === null || e.nativeEvent !== a ? (e = { blockedOn: n, domEventName: r, eventSystemFlags: t, nativeEvent: a, targetContainers: [o] }, n !== null && (n = ro(n), n !== null && ah(n)), e) : (e.eventSystemFlags |= t, n = e.targetContainers, o !== null && n.indexOf(o) === -1 && n.push(o), e);
  }
  function Sg(e, n, r, t, o) {
    switch (n) {
      case "focusin":
        return xt = ja(xt, e, n, r, t, o), !0;
      case "dragenter":
        return Et = ja(Et, e, n, r, t, o), !0;
      case "mouseover":
        return Nt = ja(Nt, e, n, r, t, o), !0;
      case "pointerover":
        var a = o.pointerId;
        return Da.set(a, ja(Da.get(a) || null, e, n, r, t, o)), !0;
      case "gotpointercapture":
        return a = o.pointerId, Fa.set(a, ja(Fa.get(a) || null, e, n, r, t, o)), !0;
    }
    return !1;
  }
  function sh(e) {
    var n = zt(e.target);
    if (n !== null) {
      var r = P(n);
      if (r !== null) {
        if (n = r.tag, n === 13) {
          if (n = F(r), n !== null) {
            e.blockedOn = n, ec(e.priority, function() {
              ih(r);
            });
            return;
          }
        } else if (n === 31) {
          if (n = $(r), n !== null) {
            e.blockedOn = n, ec(e.priority, function() {
              ih(r);
            });
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ol(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = Rs(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var t = new r.constructor(r.type, r);
        kl = t, r.target.dispatchEvent(t), kl = null;
      } else return n = ro(r), n !== null && ah(n), e.blockedOn = r, !1;
      n.shift();
    }
    return !0;
  }
  function ch(e, n, r) {
    ol(e) && r.delete(n);
  }
  function xg() {
    $s = !1, xt !== null && ol(xt) && (xt = null), Et !== null && ol(Et) && (Et = null), Nt !== null && ol(Nt) && (Nt = null), Da.forEach(ch), Fa.forEach(ch);
  }
  function al(e, n) {
    e.blockedOn === n && (e.blockedOn = null, $s || ($s = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, xg)));
  }
  var il = null;
  function fh(e) {
    il !== e && (il = e, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
      il === e && (il = null);
      for (var n = 0; n < e.length; n += 3) {
        var r = e[n], t = e[n + 1], o = e[n + 2];
        if (typeof t != "function") {
          if (As(t || r) === null) continue;
          break;
        }
        var a = ro(r);
        a !== null && (e.splice(n, 3), n -= 3, wu(a, { pending: !0, data: o, method: r.method, action: t }, t, o));
      }
    }));
  }
  function Uo(e) {
    function n(s) {
      return al(s, e);
    }
    xt !== null && al(xt, e), Et !== null && al(Et, e), Nt !== null && al(Nt, e), Da.forEach(n), Fa.forEach(n);
    for (var r = 0; r < Ct.length; r++) {
      var t = Ct[r];
      t.blockedOn === e && (t.blockedOn = null);
    }
    for (; 0 < Ct.length && (r = Ct[0], r.blockedOn === null); ) sh(r), r.blockedOn === null && Ct.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null) for (t = 0; t < r.length; t += 3) {
      var o = r[t], a = r[t + 1], i = o[qn] || null;
      if (typeof a == "function") i || fh(r);
      else if (i) {
        var l = null;
        if (a && a.hasAttribute("formAction")) {
          if (o = a, i = a[qn] || null) l = i.formAction;
          else if (As(o) !== null) continue;
        } else l = i.action;
        typeof l == "function" ? r[t + 1] = l : (r.splice(t, 3), t -= 3), fh(r);
      }
    }
  }
  function dh() {
    function e(a) {
      a.canIntercept && a.info === "react-transition" && a.intercept({ handler: function() {
        return new Promise(function(i) {
          return o = i;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function n() {
      o !== null && (o(), o = null), t || setTimeout(r, 20);
    }
    function r() {
      if (!t && !navigation.transition) {
        var a = navigation.currentEntry;
        a && a.url != null && navigation.navigate(a.url, { state: a.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var t = !1, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(r, 100), function() {
        t = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), o !== null && (o(), o = null);
      };
    }
  }
  function Vs(e) {
    this._internalRoot = e;
  }
  ll.prototype.render = Vs.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(u(409));
    var r = n.current, t = lr();
    th(r, t, e, n, null, null);
  }, ll.prototype.unmount = Vs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      th(e.current, 2, null, e, null, null), Bi(), n[no] = null;
    }
  };
  function ll(e) {
    this._internalRoot = e;
  }
  ll.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Js();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < Ct.length && n !== 0 && n < Ct[r].priority; r++) ;
      Ct.splice(r, 0, e), r === 0 && sh(e);
    }
  };
  var ph = E.version;
  if (ph !== "19.3.0") throw Error(u(527, ph, "19.3.0"));
  ue.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0) throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = D(n), e = e !== null ? O(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Eg = { bundleType: 0, version: "19.3.0", rendererPackageName: "react-dom", currentDispatcherRef: B, reconcilerVersion: "19.3.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ul.isDisabled && ul.supportsFiber) try {
      bn = ul.inject(Eg), cn = ul;
    } catch {
    }
  }
  return Ra.createRoot = function(e, n) {
    if (!T(e)) throw Error(u(299));
    var r = !1, t = "", o = rd, a = td, i = od;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (t = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (a = n.onCaughtError), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), n = nh(e, 1, !1, null, null, r, t, null, o, a, i, dh), e[no] = n.current, ys(e), new Vs(n);
  }, Ra.hydrateRoot = function(e, n, r) {
    if (!T(e)) throw Error(u(299));
    var t = !1, o = "", a = rd, i = td, l = od, s = null;
    return r != null && (r.unstable_strictMode === !0 && (t = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onUncaughtError !== void 0 && (a = r.onUncaughtError), r.onCaughtError !== void 0 && (i = r.onCaughtError), r.onRecoverableError !== void 0 && (l = r.onRecoverableError), r.formState !== void 0 && (s = r.formState)), n = nh(e, 1, !0, n, r ?? null, t, o, s, a, i, l, dh), n.context = rh(null), r = n.current, t = lr(), t = ml(t), o = ct(t), o.callback = null, ft(r, o, t), r = t, n.current.lanes = r, Go(n, r), Ar(n), e[no] = n.current, ys(e), new ll(n);
  }, Ra.version = "19.3.0", Ra;
}
var Eh;
function Mg() {
  if (Eh) return Ws.exports;
  Eh = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
    } catch (E) {
      console.error(E);
    }
  }
  return f(), Ws.exports = zg(), Ws.exports;
}
var Ig = Mg(), Nh = { exports: {} }, Aa = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ch;
function Dg() {
  if (Ch) return Aa;
  Ch = 1;
  var f = Symbol.for("react.transitional.element"), E = Symbol.for("react.fragment");
  function k(u, T, P) {
    var F = null;
    if (P !== void 0 && (F = "" + P), T.key !== void 0 && (F = "" + T.key), "key" in T) {
      P = {};
      for (var $ in T) $ !== "key" && (P[$] = T[$]);
    } else P = T;
    return T = P.ref, { $$typeof: f, type: u, key: F, ref: T !== void 0 ? T : null, props: P };
  }
  return Aa.Fragment = E, Aa.jsx = k, Aa.jsxs = k, Aa;
}
var _h;
function Fg() {
  return _h || (_h = 1, Nh.exports = Dg()), Nh.exports;
}
var C = Fg();
const sl = { top: 24, right: 24, bottom: 34, left: 48 };
function Th(f, E, k, u, T, P) {
  const F = (u == null ? void 0 : u.left) ?? sl.left, $ = (u == null ? void 0 : u.right) ?? sl.right, z = (u == null ? void 0 : u.top) ?? sl.top, D = (u == null ? void 0 : u.bottom) ?? sl.bottom, O = u && u.top !== void 0 && u.right !== void 0 && u.bottom !== void 0 && u.left !== void 0 ? u : { top: z, right: $, bottom: D, left: F }, g = f ? f.length : 0;
  if (g === 0) return { points: [], minVal: T ?? 0, maxVal: P ?? 0, padding: O };
  let M = T !== void 0 ? T : 1 / 0, re = P !== void 0 ? P : -1 / 0;
  if (T === void 0 || P === void 0) for (let ae = 0; ae < g; ae++) {
    const ee = f[ae], ce = typeof ee == "number" ? ee : ee.value, se = Number.isFinite(ce) ? ce : 0;
    T === void 0 && se < M && (M = se), P === void 0 && se > re && (re = se);
  }
  (M === re || !Number.isFinite(M)) && (M = M > 0 ? 0 : M - 1, re = re === 0 ? 1 : re + 1);
  const le = Math.max(1, E - F - $), H = Math.max(1, k - z - D), K = re - M || 1, Q = g > 1 ? le / (g - 1) : le / 2, ke = new Array(g);
  for (let ae = 0; ae < g; ae++) {
    const ee = f[ae], ce = typeof ee == "number", se = ce ? Number.isFinite(ee) ? ee : 0 : Number.isFinite(ee.value) ? ee.value : 0, G = ce ? void 0 : ee.label, V = g === 1 ? F + le / 2 : F + ae * Q, Se = z + H - (se - M) / K * H, De = Math.round(V * 10) / 10, Je = Math.round(Se * 10) / 10;
    ke[ae] = G !== void 0 ? { x: De, y: Je, value: se, label: G } : { x: De, y: Je, value: se };
  }
  return { points: ke, minVal: M, maxVal: re, padding: O };
}
function zh(f, E = 7) {
  const k = /* @__PURE__ */ new Set();
  if (f <= 0) return k;
  const u = f <= E ? f : Math.max(2, E);
  for (let T = 0; T < u; T++) k.add(f <= E ? T : Math.round(T / (u - 1) * (f - 1)));
  return k;
}
function Ze(f) {
  return Math.round(f * 10) / 10;
}
function dl(f, E = !0, k = 0.25) {
  const u = f.length;
  if (u === 0) return "";
  if (u === 1) return `M ${Ze(f[0].x)},${Ze(f[0].y)}`;
  if (!E || k === 0 || u === 2) {
    const P = new Array(u);
    for (let F = 0; F < u; F++) {
      const $ = f[F];
      P[F] = `${F === 0 ? "M" : "L"} ${Ze($.x)},${Ze($.y)}`;
    }
    return P.join(" ");
  }
  const T = new Array(u);
  T[0] = `M ${Ze(f[0].x)},${Ze(f[0].y)}`;
  for (let P = 0; P < u - 1; P++) {
    const F = P > 0 ? f[P - 1] : f[P], $ = f[P], z = f[P + 1], D = P < u - 2 ? f[P + 2] : z, O = Ze($.x + (z.x - F.x) * k), g = Ze($.y + (z.y - F.y) * k), M = Ze(z.x - (D.x - $.x) * k), re = Ze(z.y - (D.y - $.y) * k);
    T[P + 1] = `C ${O},${g} ${M},${re} ${Ze(z.x)},${Ze(z.y)}`;
  }
  return T.join(" ");
}
function Mh(f, E, k = !0, u = 0.25, T) {
  const P = f.length;
  if (P === 0) return "";
  const F = T ?? dl(f, k, u), $ = f[0], z = f[P - 1], D = Ze(E);
  return `${F} L ${Ze(z.x)},${D} L ${Ze($.x)},${D} Z`;
}
function jg(f, E, k = !0, u = 0.25, T) {
  const P = f.length, F = E.length;
  if (P === 0) return "";
  const $ = T ?? dl(f, k, u);
  if (F === 0) return `${$} Z`;
  const z = new Array(F);
  for (let D = F - 1, O = 0; D >= 0; D--, O++) {
    const g = E[D];
    z[O] = `L ${Ze(g.x)},${Ze(g.y)}`;
  }
  return `${$} ${z.join(" ")} Z`;
}
function Pt(f, E, k, u, T, P = !0, F = !1) {
  const $ = P && F ? u / 2 : u, z = Math.max(0, Math.min(T, k / 2, $)), D = P ? z : 0, O = F ? z : 0, g = Ze(f), M = Ze(E), re = Ze(k), le = Ze(u);
  if (D <= 0 && O <= 0) return `M ${g},${M} h ${re} v ${le} h ${-re} Z`;
  const H = Ze(D), K = Ze(O), Q = [`M ${Ze(f + D)},${M}`];
  return Q.push(`h ${Ze(k - 2 * D)}`), D > 0 && Q.push(`a ${H},${H} 0 0 1 ${H},${H}`), Q.push(`v ${Ze(u - D - O)}`), O > 0 && Q.push(`a ${K},${K} 0 0 1 ${-K},${K}`), Q.push(`h ${Ze(-(k - 2 * O))}`), O > 0 && Q.push(`a ${K},${K} 0 0 1 ${-K},${-K}`), Q.push(`v ${Ze(-(u - D - O))}`), D > 0 && Q.push(`a ${H},${H} 0 0 1 ${H},${-H}`), Q.push("Z"), Q.join(" ");
}
function Ih(f) {
  const { data: E = [], series: k, x: u, y: T, colors: P, defaultPalette: F = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#06b6d4", "#8b5cf6"] } = f, $ = P && P.length > 0 ? P : F;
  if (k && k.length > 0) return { data: [], series: k, isMultiSeries: !0 };
  if (!E || E.length === 0) return { data: [], series: void 0, isMultiSeries: !1 };
  if (Array.isArray(T) && T.length > 0) {
    const z = T.map((D, O) => ({ id: `s-${D}-${O}`, name: D, color: $[O % $.length], data: E.map((g) => {
      const M = typeof g == "object" && g !== null && Number(g[D]) || 0, re = u && typeof g == "object" && g !== null && g[u] !== void 0 ? String(g[u]) : void 0;
      return re !== void 0 ? { value: M, label: re } : { value: M };
    }) }));
    return { data: [], series: z, isMultiSeries: !0 };
  }
  return typeof T == "string" ? { data: E.map((z) => {
    const D = typeof z == "object" && z !== null && Number(z[T]) || 0, O = u && typeof z == "object" && z !== null && z[u] !== void 0 ? String(z[u]) : typeof z == "object" && z !== null && z.label !== void 0 ? String(z.label) : void 0;
    return O !== void 0 ? { value: D, label: O } : { value: D };
  }), series: void 0, isMultiSeries: !1 } : u && E.length > 0 && typeof E[0] == "object" && E[0] !== null && "value" in E[0] ? { data: E.map((z) => {
    const D = Number(z.value) || 0, O = z[u] !== void 0 ? String(z[u]) : z.label;
    return O !== void 0 ? { value: D, label: O } : { value: D };
  }), series: void 0, isMultiSeries: !1 } : { data: E, series: void 0, isMultiSeries: !1 };
}
const Rg = "0 10px 30px rgba(0,0,0,.4)", Ag = { default: ["#6366f1", "#070b14", "#1e293b", Rg, "#f1f5f9"], tokyonight: ["#7aa2f7", "#1a1b26", "#2f3549", "0 15px 35px rgba(0,0,0,.55)", "#c0caf5", { glow: !0, gradientStartOpacity: 0.28 }], cyberpunk: ["#00f0ff", "#050508", "rgba(0,240,255,.25)", "0 0 35px rgba(0,240,255,.12)", "#00f0ff", { glow: !0, gradientStartOpacity: 0.35 }], glass: ["#10b981", "rgba(15,23,42,.75)", "rgba(255,255,255,.12)", "0 20px 40px rgba(0,0,0,.4)", "#fff", { strokeWidth: 3.5, gradientStartOpacity: 0.35, backdropFilter: "blur(16px)" }], paper: ["#4f46e5", "#f8fafc", "#e2e8f0", "0 10px 25px rgba(0,0,0,.05)", "#0f172a", { gradientStartOpacity: 0.12 }], terminal: ["#22c55e", "#020c04", "rgba(34,197,94,.3)", "0 0 25px rgba(34,197,94,.15)", "#4ade80", { smooth: !1, strokeWidth: 2.5, strokeDasharray: "5 5", fillGradient: !1, glow: !0, fontFamily: "monospace" }] }, cl = Object.fromEntries(Object.entries(Ag).map(([f, [E, k, u, T, P, F = {}]]) => {
  const { glow: $ = !1, smooth: z = !0, strokeWidth: D = 3, strokeDasharray: O, fillGradient: g = !1, gradientStartOpacity: M = 0.25, ...re } = F;
  return [f, { color: E, smooth: z, strokeWidth: D, fillGradient: g, gradientStartOpacity: M, showGrid: !0, gridLines: 4, showXAxis: !0, showYAxis: !0, glow: $, strokeDasharray: O, containerStyle: { borderRadius: "16px", padding: "22px", background: k, border: `1px solid ${u}`, boxShadow: T, color: P, ...re } }];
})), $g = { top: 24, right: 24, bottom: 34, left: 48 }, Lt = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#06b6d4", "#8b5cf6"], Dh = { position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }, Ph = (f = []) => {
  if (!f || f.length === 0) return [];
  const E = f.length, k = new Array(E);
  for (let u = 0; u < E; u++) {
    const T = f[u];
    if (typeof T == "number") k[u] = { value: Number.isFinite(T) ? T : 0 };
    else {
      const P = Number.isFinite(T.value) ? T.value : 0;
      k[u] = T.label !== void 0 ? { value: P, label: T.label } : { value: P };
    }
  }
  return k;
}, Fh = { width: "100%", height: "auto", display: "block", overflow: "visible", touchAction: "pan-y" };
function jh(f) {
  var ae;
  const E = f.variant || "default", k = cl[E] || cl.default, u = f.color ?? k.color, T = { ...$g, ...f.padding }, P = Ie.useRef(null), [F, $] = Ie.useState(null);
  Ie.useEffect(() => {
    if (!f.responsive) return;
    const ee = P.current;
    if (!ee) return;
    const ce = () => {
      const G = ee.getBoundingClientRect(), V = Math.floor(G.width);
      V > 0 && $((Se) => (Se == null ? void 0 : Se.width) === V ? Se : { width: V, height: f.height ?? 220 });
    };
    if (ce(), typeof ResizeObserver > "u") return window.addEventListener("resize", ce), () => window.removeEventListener("resize", ce);
    const se = new ResizeObserver((G) => {
      if (!G.length) return;
      const { width: V } = G[0].contentRect, Se = Math.floor(V);
      Se > 0 && $((De) => (De == null ? void 0 : De.width) === Se ? De : { width: Se, height: f.height ?? 220 });
    });
    return se.observe(ee), () => se.disconnect();
  }, [f.responsive, f.height]);
  const z = (F == null ? void 0 : F.width) ?? f.width ?? 500, D = (F == null ? void 0 : F.height) ?? f.height ?? 220, O = Math.max(1, z - T.left - T.right), g = Math.max(1, D - T.top - T.bottom), M = D - T.bottom, re = f.valueFormatter || ((ee) => String(Math.round(ee))), le = Ie.useId().replace(/:/g, "-"), H = `gl-${le}`, K = f.card !== !1, Q = { position: "relative", width: "100%", maxWidth: "100%", boxSizing: "border-box", ...K ? k.containerStyle : { borderRadius: 0, padding: 0, background: "transparent", border: "none", boxShadow: "none", color: ((ae = k.containerStyle) == null ? void 0 : ae.color) || "currentColor" }, ...f.style }, ke = f.ariaLabel || f.title || "Interactive chart";
  return { preset: k, color: u, pad: T, width: z, height: D, chartWidth: O, chartHeight: g, baselineY: M, valueFormatter: re, uid: le, glowId: H, containerStyle: Q, containerRef: P, ariaLabel: ke, card: K, showGrid: f.showGrid ?? k.showGrid ?? !0, gridLines: f.gridLines ?? k.gridLines ?? 4, showXAxis: f.showXAxis ?? k.showXAxis ?? !0, showYAxis: f.showYAxis ?? k.showYAxis ?? !0, glow: f.glow ?? k.glow ?? !1, crosshair: f.crosshair ?? !1, animated: f.animated ?? !0, negativeColor: f.negativeColor ?? "#f7768e", showZeroLine: f.showZeroLine ?? !0 };
}
const Bs = Bo.memo(({ title: f, subtitle: E, metric: k, color: u, marginBottom: T = 14 }) => !f && !k && !E ? null : C.jsxs("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: T, gap: 8 }, children: [C.jsxs("div", { children: [f && C.jsx("h3", { style: { margin: 0, fontSize: 15, fontWeight: 700 }, children: f }), E && C.jsx("p", { style: { margin: "2px 0 0", fontSize: 12, opacity: 0.75 }, children: E })] }), k && C.jsx("div", { style: { fontSize: 18, fontWeight: 800, color: u, textAlign: "right" }, children: k })] })), qs = Bo.memo(({ height: f, className: E = "", style: k }) => C.jsx("div", { className: `pure-svg-empty ${E}`, style: { display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", fontSize: 14, ...k, height: f }, children: "No data to display" }));
Bo.memo(({ xPercent: f, yPercent: E, borderColor: k = "#334155", children: u }) => C.jsx("div", { style: { position: "absolute", left: `${f}%`, top: `${E}%`, transform: "translate(-50%, -130%)", backgroundColor: "#0f172a", color: "#ffffff", padding: "4px 8px", borderRadius: 6, fontSize: 12, fontWeight: 700, pointerEvents: "none", whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(0,0,0,0.4)", border: `1px solid ${k}`, zIndex: 10 }, children: u }));
const Rh = Bo.memo(({ showGrid: f = !0, showYAxis: E = !0, gridLines: k = 4, minVal: u, maxVal: T, pad: P, width: F, height: $, valueFormatter: z, showZeroLine: D = !0, zeroY: O }) => {
  if (!f || k <= 1) return null;
  const g = Math.max(1, $ - P.top - P.bottom), M = (T - u) / (k - 1), re = g / (k - 1);
  let le = "";
  const H = [];
  for (let Q = 0; Q < k; Q++) {
    const ke = P.top + Q * re, ae = Math.round(T - Q * M);
    le += `M${P.left} ${ke}H${F - P.right}`, E && H.push(C.jsx("text", { x: P.left - 8, y: ke + 3.5, children: z(ae) }, Q));
  }
  const K = O !== void 0 ? O : u < 0 && T > 0 ? P.top + (T - 0) / (T - u) * g : void 0;
  return C.jsxs("g", { className: "pure-svg-grid", children: [C.jsx("path", { d: le, stroke: "currentColor", strokeOpacity: 0.15, strokeDasharray: "3 3", strokeWidth: 1 }), D && K !== void 0 && C.jsx("line", { x1: P.left, y1: K, x2: F - P.right, y2: K, stroke: "currentColor", strokeOpacity: 0.4, strokeWidth: 1.5 }), E && C.jsx("g", { fill: "currentColor", opacity: 0.65, fontSize: 10, fontWeight: "600", fontFamily: "monospace", textAnchor: "end", children: H })] });
}), Gs = Bo.memo(({ id: f, color: E }) => C.jsx("filter", { id: f, x: "-50%", y: "-50%", width: "200%", height: "200%", children: C.jsx("feDropShadow", { dx: "0", dy: "0", stdDeviation: "4", floodColor: E, floodOpacity: "0.75" }) })), Ah = Bo.memo(({ x: f, y: E, baselineY: k, padLeft: u, padRight: T, width: P, color: F, valueStr: $, label: z }) => {
  const D = Math.max(34, $.length * 7 + 10), O = z ? Math.max(32, z.length * 7 + 12) : 0, g = Math.max(u + O / 2, Math.min(P - T - O / 2, f));
  return C.jsxs("g", { className: "pure-svg-crosshair", pointerEvents: "none", children: [C.jsx("path", { d: `M${f} ${E}V${k}M${u} ${E}H${f}`, stroke: F, strokeWidth: 1.5, strokeDasharray: "3 3", strokeOpacity: 0.65 }), C.jsxs("g", { fill: F, children: [C.jsx("rect", { x: u - 7 - D, y: E - 9, width: D, height: 18, rx: 4 }), z && C.jsx("rect", { x: g - O / 2, y: k + 7, width: O, height: 18, rx: 4 })] }), C.jsxs("g", { fill: "#fff", fontSize: "10", fontWeight: "700", fontFamily: "monospace", textAnchor: "middle", children: [C.jsx("text", { x: u - 7 - D / 2, y: E + 3.5, children: $ }), z && C.jsx("text", { x: g, y: k + 19.5, children: z })] })] });
});
function Vg(f) {
  const { data: E = [], series: k, x: u, y: T, stacked: P = !0, stackGap: F = 0, showLegend: $ = !0, radius: z = 6, barGap: D = 0.3, showValues: O = !1, title: g, subtitle: M, metric: re, className: le = "", onBarHover: H, renderTooltip: K } = f, Q = jh(f), { color: ke, pad: ae, width: ee, height: ce, chartWidth: se, chartHeight: G, baselineY: V, valueFormatter: Se, glowId: De, containerStyle: Je, containerRef: Xe, ariaLabel: dn, showGrid: Nn, gridLines: nn, showXAxis: N, showYAxis: X, glow: ne, crosshair: $e, animated: Ce, negativeColor: an, showZeroLine: An } = Q, [Tn, d] = Ie.useState(null), [L, U] = Ie.useState(!1);
  Ie.useEffect(() => {
    if (!L) return;
    const I = (de) => {
      Xe.current && !Xe.current.contains(de.target) && (U(!1), d(null), H == null || H(null));
    };
    return document.addEventListener("pointerdown", I), () => {
      document.removeEventListener("pointerdown", I);
    };
  }, [L, H, Xe]);
  const Y = Ie.useMemo(() => Ih({ data: E, series: k, x: u, y: T, defaultPalette: Lt }), [E, k, u, T]), pe = Y.isMultiSeries, ie = Ie.useMemo(() => Y.series && Y.series.length > 0 ? Y.series.map((I, de) => ({ id: I.id || `bs-${de}`, name: I.name || `Series ${de + 1}`, color: I.color || Lt[de % Lt.length], data: Ph(I.data) })) : [{ id: "def", name: "Default", color: ke, data: Ph(Y.data) }], [Y, ke]), te = Ie.useMemo(() => Math.max(0, ...ie.map((I) => I.data.length)), [ie]), B = Ie.useMemo(() => ie.find((I) => I.data.some((de) => de.label)) || ie[0], [ie]), ue = (I) => {
    var de;
    return ((de = B == null ? void 0 : B.data[I]) == null ? void 0 : de.label) || `#${I + 1}`;
  }, { minVal: R, maxVal: Zn, categoryPosTotals: Jn, categoryNegTotals: pn } = Ie.useMemo(() => {
    var Ne;
    if (te === 0) return { minVal: 0, maxVal: 1, categoryPosTotals: [], categoryNegTotals: [] };
    if (pe && P) {
      const sn = new Array(te), Oe = new Array(te);
      let ye = 0, xe = 0;
      for (let Be = 0; Be < te; Be++) {
        let on = 0, w = 0;
        for (let _ = 0; _ < ie.length; _++) {
          const A = ((Ne = ie[_].data[Be]) == null ? void 0 : Ne.value) || 0;
          A > 0 ? on += A : A < 0 && (w += A);
        }
        sn[Be] = on, Oe[Be] = w, w < ye && (ye = w), on > xe && (xe = on);
      }
      return ye === xe && (ye = ye > 0 ? 0 : ye - 1, xe = xe === 0 ? 1 : xe + 1), { minVal: ye, maxVal: xe, categoryPosTotals: sn, categoryNegTotals: Oe };
    }
    let I = 0, de = 0;
    for (const sn of ie) for (const Oe of sn.data) Oe.value < I && (I = Oe.value), Oe.value > de && (de = Oe.value);
    return I === de && (I = I > 0 ? 0 : I - 1, de = de === 0 ? 1 : de + 1), { minVal: I, maxVal: de, categoryPosTotals: [], categoryNegTotals: [] };
  }, [ie, te, pe, P]), He = Math.max(1e-4, Zn - R), ve = R < 0 && Zn > 0 ? ae.top + (Zn - 0) / He * G : R >= 0 ? V : ae.top, je = te > 0 ? se / te : se, Ye = Math.max(2, je * (1 - D)), gn = (je - Ye) / 2, un = Ie.useMemo(() => {
    var de, Ne, sn;
    if (te === 0) return [];
    const I = [];
    if (pe && P) {
      const Oe = Math.max(0, F);
      for (let ye = 0; ye < te; ye++) {
        const xe = ae.left + ye * je + gn;
        let Be = 0, on = 0, w = -1, _ = -1;
        const A = Jn[ye] || 0, J = pn[ye] || 0;
        for (let W = 0; W < ie.length; W++) {
          const me = ((de = ie[W].data[ye]) == null ? void 0 : de.value) || 0;
          me > 0 ? w = W : me < 0 && _ === -1 && (_ = W);
        }
        for (let W = 0; W < ie.length; W++) {
          const me = ie[W], Te = ((Ne = me.data[ye]) == null ? void 0 : Ne.value) || 0;
          if (Te === 0 && ie.length > 1) continue;
          const Fe = Te < 0, Re = Math.max(Te !== 0 ? 2 : 0, Math.abs(Te) / He * G);
          let bn = ve, cn = "", yn = 0;
          if (Fe) {
            bn = ve + on;
            const _r = W === _;
            if (Oe > 0) yn = Math.min(z, Ye / 2, Re / 2), cn = Pt(xe, bn, Ye, Re, yn, !0, !0), on += Re + Oe;
            else {
              yn = Math.min(z, Ye / 2, Re);
              const br = !1, Pr = _r;
              cn = Pt(xe, bn, Ye, Re + (_r ? 0 : 0.5), yn, br, Pr), on += Re;
            }
          } else {
            const _r = W === w;
            if (bn = ve - Be - Re, Oe > 0) yn = Math.min(z, Ye / 2, Re / 2), cn = Pt(xe, bn, Ye, Re, yn, !0, !0), Be += Re + Oe;
            else {
              yn = Math.min(z, Ye / 2, Re);
              const br = _r;
              cn = Pt(xe, bn, Ye, Re + (_r ? 0 : 0.5), yn, br, !1), Be += Re;
            }
          }
          const wn = Fe ? Math.abs(J) : A, Ot = wn > 0 ? (Math.abs(Te) / wn * 100).toFixed(1) : "0", eo = Fe && an ? an : me.color;
          I.push({ key: `${me.id}-${ye}`, seriesIdx: W, catIdx: ye, x: xe, y: bn, width: Ye, height: Re, rx: yn, path: cn, value: Te, label: ue(ye), seriesName: me.name, seriesColor: eo, stackTotal: wn, percent: Ot });
        }
      }
    } else if (pe && !P) {
      const Oe = ie.length, ye = Math.max(2, Ye / Oe);
      for (let xe = 0; xe < te; xe++) for (let Be = 0; Be < Oe; Be++) {
        const on = ie[Be], w = ((sn = on.data[xe]) == null ? void 0 : sn.value) || 0, _ = w < 0, A = ae.left + xe * je + gn + Be * ye, J = Math.max(w !== 0 ? 2 : 0, Math.abs(w) / He * G), W = Math.min(z, ye / 2, J);
        let me = ve, Te = "";
        _ ? (me = ve, Te = Pt(A, me, ye, J, W, !1, !0)) : (me = ve - J, Te = Pt(A, me, ye, J, W, !0, !1));
        const Fe = _ && an ? an : on.color;
        I.push({ key: `${on.id}-${xe}`, seriesIdx: Be, catIdx: xe, x: A, y: me, width: ye, height: J, rx: W, path: Te, value: w, label: ue(xe), seriesName: on.name, seriesColor: Fe });
      }
    } else {
      const Oe = ie[0];
      for (let ye = 0; ye < te; ye++) {
        const xe = Oe.data[ye], Be = (xe == null ? void 0 : xe.value) || 0, on = Be < 0, w = ae.left + ye * je + gn, _ = Math.max(Be !== 0 ? 2 : 0, Math.abs(Be) / He * G), A = Math.min(z, Ye / 2, _);
        let J = ve, W = "";
        on ? (J = ve, W = Pt(w, J, Ye, _, A, !1, !0)) : (J = ve - _, W = Pt(w, J, Ye, _, A, !0, !1));
        const me = on && an ? an : Oe.color;
        I.push({ key: `${Oe.id}-${ye}`, seriesIdx: 0, catIdx: ye, x: w, y: J, width: Ye, height: _, rx: A, path: W, value: Be, label: (xe == null ? void 0 : xe.label) || ue(ye), seriesName: Oe.name, seriesColor: me });
      }
    }
    return I;
  }, [te, pe, P, F, ie, Jn, pn, ae.left, ae.top, je, gn, Ye, V, ve, He, G, z, B, an]), $r = Ie.useMemo(() => {
    if (!te) return /* @__PURE__ */ new Set();
    const I = Math.min(8, Math.max(2, Math.floor(se / 55)));
    return zh(te, I);
  }, [te, se]), vr = Ce ? { transition: "y 0.45s cubic-bezier(0.4, 0, 0.2, 1), height 0.45s cubic-bezier(0.4, 0, 0.2, 1)" } : void 0, he = Ie.useMemo(() => Tn && un.find((I) => I.key === Tn) || null, [Tn, un]), _e = (I) => {
    Tn !== I.key && (d(I.key), H == null || H({ value: I.value, index: I.catIdx, label: I.label, seriesName: I.seriesName }));
  }, sr = () => {
    L || (d(null), H == null || H(null));
  }, er = (I) => {
    if (!I.touches || I.touches.length === 0) return;
    const de = I.touches[0], Ne = I.currentTarget.getBoundingClientRect();
    if (!Ne.width || !Ne.height) return;
    const sn = de.clientX - Ne.left, Oe = de.clientY - Ne.top, ye = ae.left + sn / Ne.width * se, xe = ae.top + Oe / Ne.height * G, Be = Math.max(0, Math.min(te - 1, Math.floor((ye - ae.left) / je))), on = un.filter((A) => A.catIdx === Be);
    if (!on.length) return;
    let w = on[0], _ = 1 / 0;
    for (const A of on) {
      const J = A.y + A.height / 2, W = Math.abs(J - xe);
      W < _ && (_ = W, w = A);
    }
    U(!0), _e(w);
  }, Bn = (I) => {
    if (!(!te || !un.length)) if (I.key === "ArrowRight") {
      I.preventDefault(), U(!0);
      const de = he ? he.catIdx : -1, Ne = de < te - 1 ? de + 1 : 0, sn = un.find((Oe) => Oe.catIdx === Ne);
      sn && _e(sn);
    } else if (I.key === "ArrowLeft") {
      I.preventDefault(), U(!0);
      const de = he ? he.catIdx : -1, Ne = de > 0 ? de - 1 : te - 1, sn = un.find((Oe) => Oe.catIdx === Ne);
      sn && _e(sn);
    } else if (I.key === "Home") {
      I.preventDefault(), U(!0);
      const de = un.find((Ne) => Ne.catIdx === 0);
      de && _e(de);
    } else if (I.key === "End") {
      I.preventDefault(), U(!0);
      const de = un.find((Ne) => Ne.catIdx === te - 1);
      de && _e(de);
    } else I.key === "Escape" && (I.preventDefault(), U(!1), d(null), H == null || H(null));
  };
  return te === 0 ? C.jsx(qs, { height: ce, className: le, style: Je }) : C.jsxs("div", { ref: Xe, className: `pure-svg-chart-container ${le}`, style: Je, children: [C.jsx(Bs, { title: g, subtitle: M, metric: re, color: ke }), pe && $ && C.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 12, fontSize: 12 }, children: ie.map((I) => C.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [C.jsx("span", { style: { width: 12, height: 12, borderRadius: 3, backgroundColor: I.color, display: "inline-block" } }), C.jsx("span", { style: { opacity: 0.9, fontWeight: 600 }, children: I.name })] }, I.id)) }), C.jsxs("div", { style: { position: "relative", width: "100%", touchAction: "pan-y" }, children: [C.jsxs("svg", { viewBox: `0 0 ${ee} ${ce}`, style: Fh, tabIndex: 0, role: "img", "aria-label": dn, onKeyDown: Bn, onTouchStart: er, onTouchMove: er, children: [C.jsx("defs", { children: ne && C.jsx(Gs, { id: De, color: ke }) }), C.jsx(Rh, { showGrid: Nn, showYAxis: X, gridLines: nn, minVal: R, maxVal: Zn, pad: ae, width: ee, height: ce, valueFormatter: Se, showZeroLine: An, zeroY: ve }), $e && he && C.jsx(Ah, { x: he.x + he.width / 2, y: he.y, baselineY: ve, padLeft: ae.left, padRight: ae.right, width: ee, color: he.seriesColor || ke, valueStr: Se(he.value), label: he.label }), un.map((I) => {
    const de = Tn === I.key;
    return C.jsxs("g", { children: [O && !pe && (te <= 15 || $r.has(I.catIdx)) && C.jsx("text", { x: I.x + I.width / 2, y: I.value < 0 ? I.y + I.height + 14 : I.y - 6, textAnchor: "middle", fill: "currentColor", fontSize: "11", fontWeight: "700", children: Se(I.value) }), C.jsx("path", { d: I.path, fill: I.seriesColor, opacity: de ? 1 : 0.88, filter: ne ? `url(#${De})` : void 0, style: { ...vr, cursor: "pointer" }, onMouseEnter: () => _e(I), onMouseLeave: sr, onTouchStart: (Ne) => {
      Ne.stopPropagation(), U(!0), _e(I);
    } }), I.width < 28 && C.jsx("rect", { x: I.x - Math.max(0, (28 - I.width) / 2), y: I.y, width: Math.max(28, I.width), height: I.height, fill: "transparent", style: { cursor: "pointer" }, onMouseEnter: () => _e(I), onMouseLeave: sr, onTouchStart: (Ne) => {
      Ne.stopPropagation(), U(!0), _e(I);
    } })] }, I.key);
  }), N && Array.from($r).map((I) => {
    const de = ue(I), Ne = ae.left + I * je + je / 2;
    return C.jsx("text", { x: Ne, y: V + 18, textAnchor: "middle", fill: "currentColor", opacity: 0.65, fontSize: "11", fontWeight: "500", children: de }, I);
  }), he && !O && !K && (() => {
    const I = he.x + he.width / 2, de = he.y, Ne = he.label ? `${he.label}: ` : "", sn = he.percent ? ` (${he.percent}%)` : "", Oe = `${pe ? `${he.seriesName} — ` : ""}${Ne}${Se(he.value)}${sn}`, ye = Math.max(40, Oe.length * 7 + 16), xe = Math.max(ae.left + ye / 2, Math.min(ee - ae.right - ye / 2, I)), Be = de - 10;
    return C.jsxs("g", { pointerEvents: "none", children: [C.jsx("rect", { x: xe - ye / 2, y: Be - 16, width: ye, height: 20, rx: 5, fill: "#0f172a", stroke: he.seriesColor || ke, strokeWidth: 1 }), C.jsx("text", { x: xe, y: Be - 2, textAnchor: "middle", fill: "#fff", fontSize: "11", fontWeight: "700", fontFamily: "monospace", children: Oe })] });
  })()] }), he && !O && K && C.jsx("div", { "data-testid": "custom-tooltip", style: { position: "absolute", left: `${(he.x + he.width / 2) / ee * 100}%`, top: `${he.y / ce * 100}%`, transform: "translate(-50%, -100%)", pointerEvents: "none", zIndex: 10, whiteSpace: "nowrap" }, children: K({ item: { value: he.value, index: he.catIdx, label: he.label, seriesName: he.seriesName, seriesColor: he.seriesColor, percent: he.percent }, formattedValue: Se(he.value) }) }), C.jsx("div", { style: Dh, "aria-live": "polite", "aria-atomic": "true", children: he ? `${pe ? `${he.seriesName} — ` : ""}${he.label ? `${he.label}: ` : ""}${Se(he.value)}${he.percent ? ` (${he.percent}%)` : ""}` : "" })] })] });
}
function Wg(f, E) {
  const k = f.length;
  if (E >= k || E <= 2 || k <= 2) return f;
  const u = new Array(E);
  let T = 0;
  const P = (k - 2) / (E - 2);
  let F = 0;
  u[T++] = f[F];
  for (let $ = 0; $ < E - 2; $++) {
    let z = 0, D = 0;
    const O = Math.floor(($ + 1) * P) + 1, g = Math.min(Math.floor(($ + 2) * P) + 1, k), M = g - O;
    for (let ee = O; ee < g; ee++) {
      const ce = f[ee], se = typeof ce == "number" ? ce : ce.value;
      z += ee, D += Number.isFinite(se) ? se : 0;
    }
    M > 0 && (z /= M, D /= M);
    const re = f[F], le = F, H = typeof re == "number" ? re : re.value, K = Math.floor($ * P) + 1, Q = Math.min(Math.floor(($ + 1) * P) + 1, k);
    let ke = -1, ae = K;
    for (let ee = K; ee < Q; ee++) {
      const ce = f[ee], se = typeof ce == "number" ? ce : ce.value, G = Number.isFinite(se) ? se : 0, V = Math.abs((le - z) * (G - H) - (le - ee) * (D - H));
      V > ke && (ke = V, ae = ee);
    }
    u[T++] = f[ae], F = ae;
  }
  return u[T] = f[k - 1], u;
}
function Lh(f, E) {
  if (!E.length) return null;
  if (typeof f == "number" && f >= 0 && f < E.length) return E[f].x;
  const k = String(f), u = E.find((P) => P.label === k);
  if (u) return u.x;
  const T = new Date(f).getTime();
  if (!isNaN(T)) {
    let P = E[0], F = 1 / 0;
    for (const $ of E) if ($.label) {
      const z = new Date($.label).getTime();
      if (!isNaN(z)) {
        const D = Math.abs(z - T);
        D < F && (F = D, P = $);
      }
    }
    return P.x;
  }
  return null;
}
function Hg(f) {
  var on;
  const { data: E, series: k, x: u, y: T, curvature: P = 0.25, dots: F, showDots: $, dotRadius: z, showValues: D = !1, title: O, subtitle: g, metric: M, showLegend: re = !0, stacked: le = !1, maxDisplayPoints: H = 300, className: K = "", onPointHover: Q, renderTooltip: ke, zones: ae } = f, ee = F ?? ($ !== void 0 ? $ ? "always" : "none" : "hover"), ce = jh(f), { preset: se, color: G, pad: V, width: Se, height: De, chartWidth: Je, chartHeight: Xe, baselineY: dn, valueFormatter: Nn, uid: nn, glowId: N, containerStyle: X, containerRef: ne, ariaLabel: $e, showGrid: Ce, gridLines: an, showXAxis: An, showYAxis: Tn, glow: d, crosshair: L, animated: U, showZeroLine: Y } = ce, pe = f.smooth ?? se.smooth, ie = f.strokeWidth ?? se.strokeWidth, te = f.strokeDasharray ?? se.strokeDasharray, B = f.fillGradient ?? se.fillGradient, ue = f.gradientStartOpacity ?? se.gradientStartOpacity, [R, Zn] = Ie.useState(null), [Jn, pn] = Ie.useState(!1);
  Ie.useEffect(() => {
    if (!Jn) return;
    const w = (_) => {
      ne.current && !ne.current.contains(_.target) && (pn(!1), Zn(null), Q == null || Q(null));
    };
    return document.addEventListener("pointerdown", w), () => {
      document.removeEventListener("pointerdown", w);
    };
  }, [Jn, Q, ne]);
  const He = Ie.useMemo(() => Ih({ data: E, series: k, x: u, y: T, colors: f.colors, defaultPalette: Lt }), [E, k, u, T, f.colors]), ve = Ie.useMemo(() => He.series && He.series.length > 0 ? He.series.map((w, _) => ({ id: w.id || `s-${_}`, name: w.name || `Series ${_ + 1}`, data: w.data || [], color: w.color || Lt[_ % Lt.length], strokeWidth: w.strokeWidth ?? ie, strokeDasharray: w.strokeDasharray ?? te, fillGradient: w.fillGradient ?? ((le || _ === 0) && B) })) : [{ id: "def", name: "Default", data: He.data || [], color: G, strokeWidth: ie, strokeDasharray: te, fillGradient: B }], [He, G, ie, te, B, le]), je = He.isMultiSeries, Ye = Ie.useMemo(() => {
    if (!je || !le) return ve.map((A) => ({ ...A, dataWithOrig: A.data }));
    const w = Math.max(0, ...ve.map((A) => A.data.length)), _ = new Array(w).fill(0);
    return ve.map((A) => {
      const J = A.data.map((W, me) => {
        const Te = Math.max(0, typeof W == "number" ? W : W.value);
        return _[me] = (_[me] || 0) + Te, { value: _[me], origValue: Te, label: typeof W == "object" ? W.label : void 0 };
      });
      return { ...A, dataWithOrig: J };
    });
  }, [ve, je, le]), { minVal: gn, maxVal: un } = Ie.useMemo(() => {
    let w = 1 / 0, _ = -1 / 0;
    for (const A of Ye) for (const J of A.dataWithOrig) {
      const W = typeof J == "number" ? J : J.value;
      Number.isFinite(W) && (W < w && (w = W), W > _ && (_ = W));
    }
    return le && je && (w = Math.min(0, w)), w === 1 / 0 ? { minVal: 0, maxVal: 1 } : (w === _ && (w = w > 0 ? 0 : w - 1, _ = _ === 0 ? 1 : _ + 1), { minVal: w, maxVal: _ });
  }, [Ye, le, je]), $r = Math.max(1e-4, un - gn), vr = gn < 0 && un > 0 ? V.top + (un - 0) / $r * Xe : gn >= 0 ? dn : V.top, he = gn < 0 && un > 0 || un <= 0 ? vr : dn, _e = Ie.useMemo(() => {
    var _;
    const w = [];
    for (let A = 0; A < Ye.length; A++) {
      const J = Ye[A], W = H && H > 2 && J.dataWithOrig.length > H ? Wg(J.dataWithOrig, H) : J.dataWithOrig, { points: me } = Th(W, Se, De, V, gn, un);
      if (le && je) for (let Re = 0; Re < me.length; Re++) me[Re].originalValue = ((_ = W[Re]) == null ? void 0 : _.origValue) ?? me[Re].value;
      const Te = dl(me, pe, P);
      let Fe = "";
      J.fillGradient && (le && je && A > 0 ? Fe = jg(me, w[A - 1].points, pe, P, Te) : Fe = Mh(me, he, pe, P, Te)), w.push({ ...J, points: me, linePath: Te, areaPath: Fe, gradId: `gr-${nn}-${A}` });
    }
    return w;
  }, [Ye, Se, De, V, he, gn, un, pe, P, nn, H, le, je]), sr = Math.max(0, ..._e.map((w) => w.points.length)), er = z ?? (sr > 50 ? 2.5 : sr > 25 ? 3 : 4), Bn = f.labelFormatter || ((w) => w), I = Ie.useMemo(() => {
    var Te;
    const w = _e.find((Fe) => Fe.points.some((Re) => Re.label)) || _e[0];
    if (!w || !w.points.length) return [];
    const _ = [];
    for (let Fe = 0; Fe < w.points.length; Fe++) {
      const Re = w.points[Fe];
      Re.label && _.push(Re);
    }
    if (!_.length) return [];
    const A = (Te = _[0]) != null && Te.label ? Bn(_[0].label) : "", J = Math.max(45, A.length * 7 + 20), W = Math.min(8, Math.max(2, Math.floor(Je / J))), me = zh(_.length, W);
    return Array.from(me).map((Fe) => ({ x: _[Fe].x, label: _[Fe].label, formattedLabel: _[Fe].label ? Bn(_[Fe].label) : "" }));
  }, [_e, Je, Bn]), de = U ? { transition: "d 0.45s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s, fill 0.3s" } : void 0, Ne = (w, _, A, J) => {
    const W = { ...w, seriesName: _, seriesColor: A, index: J };
    Zn(W), Q == null || Q(W);
  }, sn = () => {
    Jn || (Zn(null), Q == null || Q(null));
  }, Oe = (w, _) => {
    let A = null, J, W = 1 / 0, me, Te;
    for (const Fe of _e) {
      if (!Fe.points.length) continue;
      let Re = 0, bn = Fe.points.length - 1;
      for (; Re <= bn; ) {
        const Pr = Re + bn >> 1;
        Fe.points[Pr].x < w ? Re = Pr + 1 : bn = Pr - 1;
      }
      const cn = Math.max(0, Math.min(Fe.points.length - 1, Re)), yn = Math.max(0, cn - 1), wn = Math.abs(Fe.points[yn].x - w) < Math.abs(Fe.points[cn].x - w) ? yn : cn, Ot = Fe.points[wn], eo = Ot.x - w, _r = Ot.y - _, br = eo * eo + _r * _r;
      br < W && (W = br, A = Ot, J = wn, me = Fe.name, Te = Fe.color);
    }
    if (A) {
      if (R && R.x === A.x && R.y === A.y && R.seriesName === me) return;
      Ne(A, me, Te, J);
    }
  }, ye = (w) => {
    const _ = w.currentTarget.getBoundingClientRect();
    if (!_.width || !_.height) return;
    const A = w.clientX - _.left, J = w.clientY - _.top, W = V.left + A / _.width * Je, me = V.top + J / _.height * (dn - V.top);
    Oe(W, me);
  }, xe = (w) => {
    if (!w.touches || w.touches.length === 0) return;
    const _ = w.touches[0], A = w.currentTarget.getBoundingClientRect();
    if (!A.width || !A.height) return;
    const J = _.clientX - A.left, W = _.clientY - A.top, me = V.left + J / A.width * Je, Te = V.top + W / A.height * (dn - V.top);
    pn(!0), Oe(me, Te);
  }, Be = (w) => {
    var A;
    const _ = ((A = _e[0]) == null ? void 0 : A.points) || [];
    if (_.length) if (w.key === "ArrowRight") {
      w.preventDefault(), pn(!0);
      const J = R ? _.findIndex((Te) => Te.x === R.x && Te.y === R.y) : -1, W = J < _.length - 1 ? J + 1 : 0, me = _[W];
      Ne(me, _e[0].name, _e[0].color, W);
    } else if (w.key === "ArrowLeft") {
      w.preventDefault(), pn(!0);
      const J = R ? _.findIndex((Te) => Te.x === R.x && Te.y === R.y) : -1, W = J > 0 ? J - 1 : _.length - 1, me = _[W];
      Ne(me, _e[0].name, _e[0].color, W);
    } else w.key === "Home" ? (w.preventDefault(), pn(!0), Ne(_[0], _e[0].name, _e[0].color, 0)) : w.key === "End" ? (w.preventDefault(), pn(!0), Ne(_[_.length - 1], _e[0].name, _e[0].color, _.length - 1)) : w.key === "Escape" && (w.preventDefault(), pn(!1), Zn(null), Q == null || Q(null));
  };
  return sr ? C.jsxs("div", { ref: ne, className: `pure-svg-chart-container ${K}`, style: X, children: [C.jsx(Bs, { title: O, subtitle: g, metric: M, color: G, marginBottom: je && re ? 8 : 14 }), je && re && C.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 12, fontSize: 12 }, children: _e.map((w) => C.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [C.jsx("span", { style: { width: 12, height: 3, borderRadius: 2, backgroundColor: w.color, display: "inline-block" } }), C.jsx("span", { style: { opacity: 0.9, fontWeight: 600 }, children: w.name })] }, w.id)) }), C.jsxs("div", { style: { position: "relative", width: "100%", touchAction: "pan-y" }, children: [C.jsxs("svg", { viewBox: `0 0 ${Se} ${De}`, style: Fh, tabIndex: 0, role: "img", "aria-label": $e, onKeyDown: Be, children: [C.jsxs("defs", { children: [_e.map((w) => w.fillGradient ? C.jsxs("linearGradient", { id: w.gradId, x1: "0", y1: "0", x2: "0", y2: "1", children: [C.jsx("stop", { offset: "0%", stopColor: w.color, stopOpacity: ue }), C.jsx("stop", { offset: "100%", stopColor: w.color, stopOpacity: 0 })] }, w.gradId) : null), d && C.jsx(Gs, { id: N, color: G })] }), ae && ae.length > 0 && C.jsx("g", { className: "chart-zones", pointerEvents: "none", children: ae.map((w, _) => {
    var bn;
    const A = ((bn = _e[0]) == null ? void 0 : bn.points) || [];
    if (!A.length) return null;
    const J = Lh(w.startX, A), W = Lh(w.endX, A);
    if (J === null || W === null) return null;
    const me = Math.min(J, W), Te = Math.max(J, W), Fe = Math.max(2, Te - me), Re = Math.max(0, dn - V.top);
    return C.jsxs("g", { children: [C.jsx("rect", { "data-testid": "chart-zone", x: me, y: V.top, width: Fe, height: Re, fill: w.color || "rgba(59, 130, 246, 0.08)", rx: 2 }), w.label && C.jsx("text", { "data-testid": "chart-zone-label", x: me + Fe / 2, y: w.labelPosition === "bottom" ? dn - 8 : V.top + 14, textAnchor: "middle", fill: "currentColor", opacity: 0.65, fontSize: "10", fontWeight: "600", children: w.label })] }, w.id || `zone-${_}`);
  }) }), C.jsx(Rh, { showGrid: Ce, showYAxis: Tn, gridLines: an, minVal: gn, maxVal: un, pad: V, width: Se, height: De, valueFormatter: Nn, showZeroLine: Y, zeroY: vr }), _e.map((w) => w.fillGradient && w.areaPath ? C.jsx("path", { d: w.areaPath, fill: `url(#${w.gradId})`, style: de, pointerEvents: "none" }, `a-${w.id}`) : null), _e.map((w) => C.jsx("path", { d: w.linePath, fill: "none", stroke: w.color, strokeWidth: w.strokeWidth, strokeDasharray: w.strokeDasharray, strokeLinecap: "round", strokeLinejoin: "round", filter: d ? `url(#${N})` : void 0, style: de, pointerEvents: "none" }, `l-${w.id}`)), L && R && C.jsx(Ah, { x: R.x, y: R.y, baselineY: dn, padLeft: V.left, padRight: V.right, width: Se, color: R.seriesColor || G, valueStr: Nn(R.originalValue !== void 0 ? R.originalValue : R.value), label: R.label }), D && !je && ((on = _e[0]) == null ? void 0 : on.points.map((w, _) => sr <= 25 || _ % Math.ceil(sr / 12) === 0 ? C.jsx("text", { x: w.x, y: w.value < 0 ? w.y + er + 14 : w.y - (er + 6), textAnchor: "middle", fill: "currentColor", fontSize: "11", fontWeight: "700", pointerEvents: "none", children: Nn(w.value) }, `val-${_}`) : null)), ee === "always" && _e.map((w) => w.points.map((_, A) => {
    const J = (R == null ? void 0 : R.x) === _.x && (R == null ? void 0 : R.y) === _.y;
    return C.jsxs("g", { children: [C.jsx("circle", { cx: _.x, cy: _.y, r: J ? er * 1.5 : er, fill: J ? "#fff" : w.color, stroke: w.color, strokeWidth: J ? 3 : 2, style: { cursor: "pointer", transition: U ? "all 0.2s" : void 0 }, pointerEvents: "none" }), C.jsx("circle", { cx: _.x, cy: _.y, r: Math.max(16, er * 2.5), fill: "transparent", style: { cursor: "pointer" }, onMouseEnter: () => Ne(_, w.name, w.color, A), onMouseLeave: sn, onTouchStart: (W) => {
      W.stopPropagation(), pn(!0), Ne(_, w.name, w.color, A);
    } })] }, `${w.id}-${A}`);
  })), ee === "hover" && R && C.jsx("circle", { "data-testid": "active-hover-dot", cx: R.x, cy: R.y, r: er * 1.5, fill: "#fff", stroke: R.seriesColor || G, strokeWidth: 3, pointerEvents: "none" }), C.jsx("rect", { x: V.left, y: V.top, width: Je, height: Math.max(0, dn - V.top), fill: "transparent", style: { cursor: "crosshair" }, onMouseMove: ye, onMouseLeave: sn, onTouchStart: xe, onTouchMove: xe }), An && I.map((w, _) => C.jsx("text", { x: w.x, y: dn + 18, textAnchor: _ === 0 ? "start" : _ === I.length - 1 ? "end" : "middle", fill: "currentColor", opacity: 0.65, fontSize: "11", fontWeight: "500", children: w.formattedLabel }, _)), R && !D && !ke && (() => {
    const w = R.originalValue !== void 0 ? R.originalValue : R.value, _ = (R.seriesName && je ? `${R.seriesName}: ` : "") + (R.label ? `${R.label} — ` : "") + Nn(w), A = Math.max(40, _.length * 7 + 16), J = Math.max(V.left + A / 2, Math.min(Se - V.right - A / 2, R.x)), W = R.y - er - 8;
    return C.jsxs("g", { pointerEvents: "none", children: [C.jsx("rect", { x: J - A / 2, y: W - 16, width: A, height: 20, rx: 5, fill: "#0f172a", stroke: R.seriesColor || "#334155", strokeWidth: 1 }), C.jsx("text", { x: J, y: W - 2, textAnchor: "middle", fill: "#fff", fontSize: "11", fontWeight: "700", fontFamily: "monospace", children: _ })] });
  })()] }), R && !D && ke && C.jsx("div", { "data-testid": "custom-tooltip", style: { position: "absolute", left: `${R.x / Se * 100}%`, top: `${R.y / De * 100}%`, transform: "translate(-50%, -100%)", pointerEvents: "none", zIndex: 10, whiteSpace: "nowrap" }, children: ke({ point: R, seriesName: R.seriesName, seriesColor: R.seriesColor, value: R.originalValue !== void 0 ? R.originalValue : R.value, formattedValue: Nn(R.originalValue !== void 0 ? R.originalValue : R.value), allSeriesPoints: je ? _e.map((w) => {
    const _ = R.index !== void 0 && R.index >= 0 && R.index < w.points.length ? w.points[R.index] : w.points.find((J) => J.x === R.x), A = (_ == null ? void 0 : _.originalValue) !== void 0 ? _.originalValue : _ ? _.value : 0;
    return { seriesName: w.name, seriesColor: w.color, value: A, formattedValue: Nn(A) };
  }) : void 0 }) }), C.jsx("div", { style: Dh, "aria-live": "polite", "aria-atomic": "true", children: R ? `${R.seriesName && je ? `${R.seriesName}: ` : ""}${R.label ? `${R.label}, ` : ""}${Nn(R.originalValue !== void 0 ? R.originalValue : R.value)}` : "" })] })] }) : C.jsx(qs, { height: De, className: K, style: X });
}
const Ug = ({ variant: f = "default", data: E = [], size: k = 240, innerRadiusRatio: u = 0.68, title: T, subtitle: P, metric: F, centerLabel: $, centerValue: z, showLegend: D = !0, animated: O = !0, valueFormatter: g = (K) => String(Math.round(K)), className: M = "", card: re = !0, style: le, onSliceHover: H }) => {
  var nn;
  const K = cl[f] || cl.default, [Q, ke] = Ie.useState(null), ae = `d-gl-${Ie.useId().replace(/:/g, "-")}`, ee = Ie.useMemo(() => E.map((N, X) => ({ label: N.label || `Slice ${X + 1}`, value: Number.isFinite(N.value) && N.value > 0 ? N.value : 0, color: N.color || Lt[X % Lt.length] })).filter((N) => N.value > 0), [E]), ce = Ie.useMemo(() => ee.reduce((N, X) => N + X.value, 0), [ee]), se = k / 2 * Math.max(0.1, 1 - Math.min(0.9, u)), G = (k - se) / 2, V = 2 * Math.PI * G, Se = Ie.useMemo(() => {
    if (!ce) return [];
    let N = 0;
    const X = ee.length > 1 ? Math.max(2, se * 0.1) : 0;
    return ee.map((ne, $e) => {
      const Ce = ne.value / ce * V, an = Math.max(0, Ce - X), An = `${an} ${V - an}`, Tn = -N;
      return N += Ce, { ...ne, index: $e, strokeDasharray: An, strokeDashoffset: Tn, percentage: (ne.value / ce * 100).toFixed(1) };
    });
  }, [ee, ce, V, se]), De = (N) => {
    Q !== N && (ke(N), H == null || H(N !== null ? ee[N] : null));
  }, Je = { position: "relative", boxSizing: "border-box", width: "100%", ...re !== !1 ? K.containerStyle : { borderRadius: 0, padding: 0, background: "transparent", border: "none", boxShadow: "none", color: ((nn = K.containerStyle) == null ? void 0 : nn.color) || "currentColor" }, ...le };
  if (!ee.length || !ce) return C.jsx(qs, { height: k, className: M, style: Je });
  const Xe = Q !== null ? Se[Q] : null, dn = Xe ? g(Xe.value) : z !== void 0 ? z : g(ce), Nn = Xe ? `${Xe.label} (${Xe.percentage}%)` : $ || "Total";
  return C.jsxs("div", { className: `pure-svg-chart-container ${M}`, style: Je, children: [C.jsx(Bs, { title: T, subtitle: P, metric: F, color: K.color }), C.jsxs("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }, children: [C.jsx("div", { style: { position: "relative", width: k, height: k, flexShrink: 0 }, children: C.jsxs("svg", { viewBox: `0 0 ${k} ${k}`, style: { width: "100%", height: "100%", overflow: "visible" }, children: [C.jsx("defs", { children: C.jsx(Gs, { id: ae, color: K.color }) }), C.jsxs("g", { style: { transform: "rotate(-90deg)", transformOrigin: "center" }, children: [C.jsx("circle", { cx: k / 2, cy: k / 2, r: G, fill: "none", stroke: "currentColor", strokeOpacity: 0.08, strokeWidth: se }), Se.map((N) => {
    const X = Q === N.index;
    return C.jsx("circle", { cx: k / 2, cy: k / 2, r: G, fill: "none", stroke: N.color, strokeWidth: X ? se + 4 : se, strokeDasharray: N.strokeDasharray, strokeDashoffset: N.strokeDashoffset, filter: X ? `url(#${ae})` : void 0, style: { cursor: "pointer", opacity: Q === null || X ? 1 : 0.45, transition: O ? "stroke-width 0.25s, opacity 0.25s" : void 0 }, onMouseEnter: () => De(N.index), onMouseLeave: () => De(null) }, N.index);
  })] }), C.jsx("text", { x: k / 2, y: k / 2 - 2, textAnchor: "middle", fill: Xe ? Xe.color : "currentColor", fontSize: k > 200 ? 20 : 16, fontWeight: "800", children: dn }), C.jsx("text", { x: k / 2, y: k / 2 + 14, textAnchor: "middle", fill: "currentColor", opacity: 0.7, fontSize: 10, fontWeight: "600", letterSpacing: "0.04em", children: Nn })] }) }), D && C.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 8, fontSize: 12, minWidth: 130 }, children: Se.map((N) => C.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, cursor: "pointer", opacity: Q === null || Q === N.index ? 1 : 0.45, fontWeight: Q === N.index ? 700 : 500 }, onMouseEnter: () => De(N.index), onMouseLeave: () => De(null), children: [C.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [C.jsx("span", { style: { width: 8, height: 8, borderRadius: "50%", backgroundColor: N.color, display: "inline-block" } }), C.jsx("span", { children: N.label })] }), C.jsxs("span", { style: { fontFamily: "monospace", opacity: 0.85 }, children: [N.percentage, "%"] })] }, N.index)) })] })] });
}, Bg = { top: 3, right: 3, bottom: 3, left: 3 }, qg = ({ data: f = [], width: E = 120, height: k = 34, color: u = "#6366f1", strokeWidth: T = 2, smooth: P = !0, fillArea: F = !0, fillOpacity: $ = 0.15, showEndDot: z = !0, className: D = "", style: O }) => {
  const g = `sp-${Ie.useId().replace(/:/g, "-")}`, { points: M } = Th(f, E, k, Bg);
  if (!M.length) return null;
  const re = dl(M, P, 0.25), le = F ? Mh(M, k - 3, P, 0.25, re) : "", H = M[M.length - 1];
  return C.jsxs("svg", { viewBox: `0 0 ${E} ${k}`, className: `pure-svg-sparkline ${D}`, style: { width: E, height: k, display: "inline-block", verticalAlign: "middle", overflow: "visible", ...O }, children: [F && C.jsx("defs", { children: C.jsxs("linearGradient", { id: g, x1: "0", y1: "0", x2: "0", y2: "1", children: [C.jsx("stop", { offset: "0%", stopColor: u, stopOpacity: $ }), C.jsx("stop", { offset: "100%", stopColor: u, stopOpacity: 0 })] }) }), F && le && C.jsx("path", { d: le, fill: `url(#${g})`, pointerEvents: "none" }), C.jsx("path", { d: re, fill: "none", stroke: u, strokeWidth: T, strokeLinecap: "round", strokeLinejoin: "round" }), z && C.jsxs("g", { fill: u, children: [C.jsx("circle", { cx: H.x, cy: H.y, r: T * 2.2, opacity: 0.3 }), C.jsx("circle", { cx: H.x, cy: H.y, r: T })] })] });
};
async function Qg(f, E = "png", k = "chart", u) {
  var ke;
  if (typeof window > "u" || typeof document > "u") throw new Error("exportChartAsImage can only be executed in a browser environment with DOM access.");
  const T = f && "current" in f ? f.current : f;
  if (!T) throw new Error("exportChartAsImage: provided target element or ref is null or undefined.");
  const P = T instanceof SVGSVGElement ? T : T.querySelector("svg");
  if (!P) throw new Error("exportChartAsImage: no <svg> element found inside the provided target.");
  const F = P.cloneNode(!0);
  F.setAttribute("xmlns", "http://www.w3.org/2000/svg"), F.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  const $ = (ke = P.viewBox) == null ? void 0 : ke.baseVal, z = P.getBoundingClientRect(), D = $ != null && $.width && $.width > 0 ? $.width : z.width || 500, O = $ != null && $.height && $.height > 0 ? $.height : z.height || 220;
  F.setAttribute("width", String(D)), F.setAttribute("height", String(O));
  const g = window.getComputedStyle(P).color || "#cbd5e1";
  F.style.color = g;
  const M = new XMLSerializer().serializeToString(F);
  if (E === "svg") {
    const ae = new Blob([M], { type: "image/svg+xml;charset=utf-8" });
    Oh(ae, `${k}.svg`);
    return;
  }
  const re = u != null && u.scale && u.scale > 0 ? u.scale : 2, le = document.createElement("canvas");
  le.width = Math.round(D * re), le.height = Math.round(O * re);
  const H = le.getContext("2d");
  if (!H) throw new Error("exportChartAsImage: failed to create 2D canvas context.");
  u != null && u.background && (H.fillStyle = u.background, H.fillRect(0, 0, le.width, le.height));
  const K = new Blob([M], { type: "image/svg+xml;charset=utf-8" }), Q = URL.createObjectURL(K);
  return await new Promise((ae, ee) => {
    const ce = new Image();
    ce.onload = () => {
      H.drawImage(ce, 0, 0, le.width, le.height), URL.revokeObjectURL(Q), ae();
    }, ce.onerror = (se) => {
      URL.revokeObjectURL(Q), ee(new Error(`exportChartAsImage: failed to load SVG into image: ${se}`));
    }, ce.src = Q;
  }), new Promise((ae, ee) => {
    le.toBlob((ce) => {
      if (!ce) {
        ee(new Error("exportChartAsImage: canvas toBlob conversion returned null."));
        return;
      }
      Oh(ce, `${k}.png`), ae();
    }, "image/png");
  });
}
function Oh(f, E) {
  const k = URL.createObjectURL(f), u = document.createElement("a");
  u.href = k, u.download = E, document.body.appendChild(u), u.click(), document.body.removeChild(u), setTimeout(() => URL.revokeObjectURL(k), 1e3);
}
const fl = /* @__PURE__ */ new WeakMap();
function Gg(f) {
  let E = fl.get(f);
  return E || (E = Ig.createRoot(f), fl.set(f, E)), E;
}
function pl(f, E) {
  Gg(f).render(E);
}
function Xg(f) {
  const E = fl.get(f);
  E && (E.unmount(), fl.delete(f));
}
function Yg(f, E) {
  pl(f, Ie.createElement(Vg, E));
}
function Kg(f, E) {
  pl(f, Ie.createElement(Hg, E));
}
function Zg(f, E) {
  pl(f, Ie.createElement(Ug, E));
}
function Jg(f, E) {
  pl(f, Ie.createElement(qg, E));
}
const ey = Ie.createElement;
export {
  cl as CHART_VARIANTS,
  Bo as React,
  Vg as SvgBarChart,
  Ah as SvgCrosshair,
  Ug as SvgDonutChart,
  Hg as SvgLineChart,
  qg as SvgSparkline,
  ey as createElement,
  Qg as exportChartAsImage,
  Gg as getOrCreateRoot,
  pl as mountChart,
  Yg as renderBarChart,
  Zg as renderDonutChart,
  Kg as renderLineChart,
  Jg as renderSparkline,
  Xg as unmountChart
};
