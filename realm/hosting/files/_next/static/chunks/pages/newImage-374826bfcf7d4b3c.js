(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9],
  {
    1313: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/newImage",
        function () {
          return t(7520);
        },
      ]);
    },
    7520: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return m;
          },
        });
      var r = t(5666),
        i = t.n(r),
        a = t(5893),
        s = t(4654),
        o = t(8527),
        u = t(9762),
        c = t(4612),
        l = t(5113),
        d = t(7294),
        f = t(4783),
        h = t(1163);
      function p(e, n, t, r, i, a, s) {
        try {
          var o = e[a](s),
            u = o.value;
        } catch (c) {
          return void t(c);
        }
        o.done ? n(u) : Promise.resolve(u).then(r, i);
      }
      function g(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, i) {
            var a = e.apply(n, t);
            function s(e) {
              p(a, r, i, s, o, "next", e);
            }
            function o(e) {
              p(a, r, i, s, o, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function m() {
        var e = (0, h.useRouter)(),
          n = (0, s.pm)(),
          t = (0, d.useState)(""),
          r = t[0],
          p = t[1],
          m = (0, d.useRef)();
        function x() {
          return (x = g(
            i().mark(function t() {
              var a, s, o, u;
              return i().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((a = window.localStorage.getItem("key")),
                        (s = f.Mq("lotir-mongo-realm-expo-images-cetxm")),
                        0 !== m.current.files.length)
                      ) {
                        t.next = 5;
                        break;
                      }
                      return (
                        n({
                          status: "error",
                          title: "Error",
                          description: "You need to select an image",
                          duration: 9e3,
                          isClosable: !0,
                        }),
                        t.abrupt("return")
                      );
                    case 5:
                      (o = m.current.files[0]),
                        (u = new FileReader()).readAsDataURL(o),
                        (u.onload = g(
                          i().mark(function t() {
                            return i().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.next = 2),
                                      s.currentUser.functions
                                        .addImage(
                                          "website",
                                          a,
                                          r,
                                          u.result.slice(22)
                                        )
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
                                  case 2:
                                    n({
                                      title: "Success",
                                      description:
                                        "Content has been sent to your phone",
                                      status: "success",
                                      duration: 9e3,
                                      isClosable: !0,
                                    }),
                                      e.push("/");
                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        ));
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        return (
          console.log(m.current),
          (0, d.useEffect)(function () {
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
          (0, a.jsxs)(o.kC, {
            px: 4,
            direction: "column",
            maxWidth: "640px",
            mx: "auto",
            my: 16,
            children: [
              (0, a.jsx)(o.X6, { children: "Send an image to your phone" }),
              (0, a.jsxs)(u.NI, {
                isInvalid: 0 === r.length,
                marginTop: 8,
                children: [
                  (0, a.jsx)(u.lX, { children: "Title" }),
                  (0, a.jsx)(c.II, {
                    value: r,
                    "aria-label": "title",
                    placeholder: "Alicia's phone number",
                    onChange: function (e) {
                      return p(e.target.value);
                    },
                  }),
                  (0, a.jsx)(u.Q6, {
                    children:
                      "Choose a meaningful name to retrieve it easily later",
                  }),
                  (0, a.jsx)(u.J1, { children: "This can't be empty." }),
                ],
              }),
              (0, a.jsxs)(u.NI, {
                children: [
                  (0, a.jsx)(u.lX, { children: "Image" }),
                  (0, a.jsx)(c.II, {
                    ref: m,
                    type: "file",
                    name: "Image",
                    accept: "image/png",
                  }),
                ],
              }),
              (0, a.jsx)(l.zx, {
                variant: "white",
                marginTop: 4,
                marginLeft: "auto",
                isDisabled: 0 === r.length,
                onClick: function () {
                  return x.apply(this, arguments);
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
      return (n = 1313), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
