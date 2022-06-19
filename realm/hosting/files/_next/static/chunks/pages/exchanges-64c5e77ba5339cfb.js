(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [937],
  {
    4651: function (n, e, r) {
      "use strict";
      r.d(e, {
        Ee: function () {
          return f;
        },
      });
      var t = r(2846),
        o = r(5031),
        i = r(7294),
        a = r(7375);
      function c() {
        return (c =
          Object.assign ||
          function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var t in r)
                Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t]);
            }
            return n;
          }).apply(this, arguments);
      }
      function s(n, e) {
        if (null == n) return {};
        var r,
          t,
          o = {},
          i = Object.keys(n);
        for (t = 0; t < i.length; t++)
          (r = i[t]), e.indexOf(r) >= 0 || (o[r] = n[r]);
        return o;
      }
      var l = ["htmlWidth", "htmlHeight", "alt"],
        u = [
          "fallbackSrc",
          "fallback",
          "src",
          "srcSet",
          "align",
          "fit",
          "loading",
          "ignoreFallback",
          "crossOrigin",
        ],
        d = i.forwardRef(function (n, e) {
          var r = n.htmlWidth,
            t = n.htmlHeight,
            o = n.alt,
            a = s(n, l);
          return i.createElement(
            "img",
            c({ width: r, height: t, ref: e, alt: o }, a)
          );
        }),
        f = (0, t.Gp)(function (n, e) {
          var r = n.fallbackSrc,
            l = n.fallback,
            f = n.src,
            g = n.srcSet,
            h = n.align,
            p = n.fit,
            m = n.loading,
            x = n.ignoreFallback,
            v = n.crossOrigin,
            k = s(n, u),
            b = null != m || x || (void 0 === r && void 0 === l),
            w = (function (n) {
              var e = n.loading,
                r = n.src,
                t = n.srcSet,
                o = n.onLoad,
                c = n.onError,
                s = n.crossOrigin,
                l = n.sizes,
                u = n.ignoreFallback,
                d = (0, i.useState)("pending"),
                f = d[0],
                g = d[1];
              (0, i.useEffect)(
                function () {
                  g(r ? "loading" : "pending");
                },
                [r]
              );
              var h = (0, i.useRef)(),
                p = (0, i.useCallback)(
                  function () {
                    if (r) {
                      m();
                      var n = new Image();
                      (n.src = r),
                        s && (n.crossOrigin = s),
                        t && (n.srcset = t),
                        l && (n.sizes = l),
                        e && (n.loading = e),
                        (n.onload = function (n) {
                          m(), g("loaded"), null == o || o(n);
                        }),
                        (n.onerror = function (n) {
                          m(), g("failed"), null == c || c(n);
                        }),
                        (h.current = n);
                    }
                  },
                  [r, s, t, l, o, c, e]
                ),
                m = function () {
                  h.current &&
                    ((h.current.onload = null),
                    (h.current.onerror = null),
                    (h.current = null));
                };
              return (
                (0, a.Gw)(
                  function () {
                    if (!u)
                      return (
                        "loading" === f && p(),
                        function () {
                          m();
                        }
                      );
                  },
                  [f, p, u]
                ),
                u ? "loaded" : f
              );
            })(c({}, n, { ignoreFallback: b })),
            y = c(
              { ref: e, objectFit: p, objectPosition: h },
              b ? k : (0, o.CE)(k, ["onError", "onLoad"])
            );
          return "loaded" !== w
            ? l ||
                i.createElement(
                  t.m$.img,
                  c(
                    { as: d, className: "chakra-image__placeholder", src: r },
                    y
                  )
                )
            : i.createElement(
                t.m$.img,
                c(
                  {
                    as: d,
                    src: f,
                    srcSet: g,
                    crossOrigin: v,
                    loading: m,
                    className: "chakra-image",
                  },
                  y
                )
              );
        });
      o.Ts && (f.displayName = "Image");
    },
    8280: function (n, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/exchanges",
        function () {
          return r(7016);
        },
      ]);
    },
    7016: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return m;
          },
        });
      var t = r(5666),
        o = r.n(t),
        i = r(5893),
        a = r(4654),
        c = r(8527),
        s = r(5113),
        l = r(7375),
        u = r(4651),
        d = r(7294),
        f = r(4783),
        g = r(1163),
        h = r(8485);
      function p(n, e, r, t, o, i, a) {
        try {
          var c = n[i](a),
            s = c.value;
        } catch (l) {
          return void r(l);
        }
        c.done ? e(s) : Promise.resolve(s).then(t, o);
      }
      function m() {
        var n = (0, g.useRouter)(),
          e = (0, a.pm)(),
          r = (0, d.useState)([]),
          t = r[0],
          l = r[1];
        return (
          (0, d.useEffect)(function () {
            var r,
              t = window.localStorage.getItem("key");
            (t && 0 !== t.length) ||
              (e({
                status: "warning",
                title: "Warning",
                description:
                  "You need to set a sync key before accessing exchanges \ud83d\ude09",
                duration: 9e3,
                isClosable: !0,
              }),
              n.push("/settings")),
              ((r = o().mark(function n() {
                var e, r;
                return o().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = f.Mq("lotir-mongo-realm-expo-images-qhlli")),
                          (n.next = 3),
                          e.currentUser.functions.getMessages(t)
                        );
                      case 3:
                        (r = n.sent), l(r);
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })),
              function () {
                var n = this,
                  e = arguments;
                return new Promise(function (t, o) {
                  var i = r.apply(n, e);
                  function a(n) {
                    p(i, t, o, a, c, "next", n);
                  }
                  function c(n) {
                    p(i, t, o, a, c, "throw", n);
                  }
                  a(void 0);
                });
              })();
          }, []),
          (0, i.jsxs)(c.kC, {
            px: 4,
            direction: "column",
            mx: "auto",
            my: 16,
            children: [
              (0, i.jsx)(c.X6, { children: "Your last exchanges" }),
              (0, i.jsxs)(c.xv, {
                marginTop: 2,
                color: "gray.500",
                fontSize: 14,
                children: [
                  "Click on text to copy to clipboard ",
                  (0, i.jsx)(h.TI, {}),
                ],
              }),
              (0, i.jsxs)(c.kC, {
                wrap: "wrap",
                gap: 4,
                marginTop: 6,
                height: "100%",
                children: [
                  0 === t.length &&
                    (0, i.jsxs)(c.kC, {
                      width: "100%",
                      direction: "column",
                      justify: "center",
                      align: "center",
                      my: 32,
                      children: [
                        (0, i.jsx)(c.xv, {
                          fontSize: 14,
                          fontWeight: 600,
                          children: "You don't have any exchanges yet",
                        }),
                        (0, i.jsx)(s.zx, {
                          onClick: function () {
                            return n.push("/text");
                          },
                          marginTop: 4,
                          size: "sm",
                          children: "Create first exchange",
                        }),
                      ],
                    }),
                  t.map(function (n) {
                    return (0,
                    i.jsx)(x, { platform: n.platform, title: n.title, body: n.body }, Math.random());
                  }),
                ],
              }),
            ],
          })
        );
      }
      var x = function (n) {
        var e = n.platform,
          r = n.title,
          t = n.body,
          o = (0, l.VP)(t).onCopy,
          s = (0, a.pm)();
        return t.startsWith("https://") && t.endsWith(".png")
          ? (0, i.jsxs)(c.kC, {
              onClick: function () {
                return window.open(t);
              },
              cursor: "pointer",
              backgroundColor: "flish.100",
              p: 3,
              borderRadius: 10,
              width: "30%",
              minWidth: 320,
              direction: "column",
              mx: "auto",
              children: [
                (0, i.jsx)(c.X6, {
                  fontSize: 20,
                  marginBottom: 4,
                  children: r,
                }),
                (0, i.jsx)(u.Ee, { src: t }),
                (0, i.jsxs)(c.xv, {
                  marginTop: 2,
                  fontSize: 13,
                  marginLeft: "auto",
                  color: "gray.500",
                  children: ["From ", e],
                }),
              ],
            })
          : (0, i.jsxs)(c.kC, {
              direction: "column",
              backgroundColor: "flish.100",
              p: 5,
              borderRadius: 10,
              width: "30%",
              minWidth: 320,
              mx: "auto",
              maxHeight: "240px",
              children: [
                (0, i.jsx)(c.X6, {
                  fontSize: 20,
                  marginBottom: 4,
                  children: r,
                }),
                (0, i.jsx)(c.xv, {
                  onClick: function () {
                    o(),
                      s({
                        status: "success",
                        title: "Copied",
                        description: "Content has been copied to clipboard",
                        duration: 9e3,
                        isClosable: !0,
                      });
                  },
                  cursor: "copy",
                  color: "gray.500",
                  fontSize: 15,
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                  textOverflow: "ellipsis",
                  children: t,
                }),
                (0, i.jsxs)(c.xv, {
                  marginTop: "auto",
                  fontSize: 13,
                  marginLeft: "auto",
                  color: "gray.500",
                  children: ["From ", e],
                }),
              ],
            });
      };
    },
    1163: function (n, e, r) {
      n.exports = r(387);
    },
  },
  function (n) {
    n.O(0, [654, 774, 888, 179], function () {
      return (e = 8280), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
