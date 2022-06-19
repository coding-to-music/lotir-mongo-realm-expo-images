(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [330],
  {
    1373: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/newText",
        function () {
          return t(175);
        },
      ]);
    },
    175: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return b;
          },
        });
      var r = t(5666),
        a = t.n(r),
        i = t(5893),
        s = t(9762),
        o = t(2846),
        c = t(5031),
        u = t(7294);
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var h = ["className", "rows"],
        f = (0, o.Gp)(function (e, n) {
          var t = (0, o.mq)("Textarea", e),
            r = (0, o.Lr)(e),
            a = r.className,
            i = r.rows,
            f = (function (e, n) {
              if (null == e) return {};
              var t,
                r,
                a = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
              return a;
            })(r, h),
            d = (0, s.Yp)(f),
            p = i ? (0, c.CE)(t, ["h", "minH", "height", "minHeight"]) : t;
          return u.createElement(
            o.m$.textarea,
            l({ ref: n, rows: i }, d, {
              className: (0, c.cx)("chakra-textarea", a),
              __css: p,
            })
          );
        });
      c.Ts && (f.displayName = "Textarea");
      var d = t(4654),
        p = t(8527),
        g = t(4612),
        x = t(5113),
        m = t(4783),
        v = t(1163);
      function w(e, n, t, r, a, i, s) {
        try {
          var o = e[i](s),
            c = o.value;
        } catch (u) {
          return void t(u);
        }
        o.done ? n(c) : Promise.resolve(c).then(r, a);
      }
      function y(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(n, t);
            function s(e) {
              w(i, r, a, s, o, "next", e);
            }
            function o(e) {
              w(i, r, a, s, o, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function b() {
        var e = (0, v.useRouter)(),
          n = (0, d.pm)(),
          t = (0, u.useState)(""),
          r = t[0],
          o = t[1],
          c = (0, u.useState)(""),
          l = c[0],
          h = c[1];
        function w() {
          return (w = y(
            a().mark(function t() {
              var i, s;
              return a().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = window.localStorage.getItem("key")),
                        (s = m.Mq("lotir-mongo-realm-expo-images-cetxm")),
                        (t.next = 4),
                        s.currentUser.functions
                          .addMessage("website", i, r, l)
                          .catch(function (e) {
                            n({
                              status: "error",
                              title: "Error",
                              description: e.message,
                              duration: 9e3,
                              isClosable: !0,
                            });
                          })
                      );
                    case 4:
                      n({
                        title: "Success",
                        description: "Content has been sent to your phone",
                        status: "success",
                        duration: 9e3,
                        isClosable: !0,
                      }),
                        e.push("/");
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        return (
          (0, u.useEffect)(function () {
            var t = window.localStorage.getItem("key");
            (t && 0 !== t.length) ||
              (n({
                status: "warning",
                title: "Warning",
                description:
                  "You need to set a sync key before accessing exchanges \ud83d\ude09",
                duration: 9e3,
                isClosable: !0,
              }),
              e.push("/settings"));
          }, []),
          (0, i.jsxs)(p.kC, {
            px: 4,
            direction: "column",
            maxWidth: "640px",
            mx: "auto",
            my: 16,
            children: [
              (0, i.jsx)(p.X6, { children: "Send text to your phone" }),
              (0, i.jsxs)(s.NI, {
                isInvalid: 0 === r.length,
                marginTop: 8,
                children: [
                  (0, i.jsx)(s.lX, { children: "Title" }),
                  (0, i.jsx)(g.II, {
                    value: r,
                    "aria-label": "title",
                    placeholder: "Alicia's phone number",
                    onChange: function (e) {
                      return o(e.target.value);
                    },
                  }),
                  (0, i.jsx)(s.Q6, {
                    children:
                      "Choose a meaningful name to retrieve it easily later",
                  }),
                  (0, i.jsx)(s.J1, { children: "This can't be empty." }),
                ],
              }),
              (0, i.jsxs)(s.NI, {
                isInvalid: 0 === l.length,
                marginTop: 8,
                children: [
                  (0, i.jsx)(s.lX, { children: "Body" }),
                  (0, i.jsx)(f, {
                    value: l,
                    backgroundColor: "flish.400",
                    "aria-label": "content",
                    placeholder: "(000) 000-0000",
                    onChange: function (e) {
                      return h(e.target.value);
                    },
                  }),
                  (0, i.jsx)(s.Q6, { children: "The content of the exchange" }),
                  (0, i.jsx)(s.J1, { children: "This can't be empty." }),
                ],
              }),
              (0, i.jsx)(x.zx, {
                variant: "white",
                marginTop: 4,
                marginLeft: "auto",
                isDisabled: 0 === r.length || 0 === l.length,
                onClick: function () {
                  return w.apply(this, arguments);
                },
                children: "Send to phone",
              }),
            ],
          })
        );
      }
    },
    1163: function (e, n, t) {
      e.exports = t(387);
    },
  },
  function (e) {
    e.O(0, [654, 612, 774, 888, 179], function () {
      return (n = 1373), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
