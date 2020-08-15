(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    348: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return l;
      });
      var a = n(0),
        c = n.n(a),
        l = (n(352),
        function(e) {
          var t = e.text;
          return c.a.createElement(
            "h1",
            { className: "page-heading" },
            t,
            c.a.createElement("span", null, ".")
          );
        });
      t.b = function(e) {
        var t = e.text,
          n = e.className;
        return c.a.createElement(
          "div",
          { className: "heading ".concat(n || "") },
          t,
          c.a.createElement("span", null, ".")
        );
      };
    },
    350: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      var a = n(0),
        c = n.n(a),
        l = n(344),
        i = (n(353),
        function(e) {
          var t = e.label,
            n = e.to;
          return c.a.createElement(
            l.a,
            { to: n, className: "link-button" },
            c.a.createElement("span", null, t)
          );
        });
      t.b = function(e) {
        var t = e.label,
          n = e.type,
          a = e.onClick;
        return c.a.createElement(
          "button",
          { className: "button ".concat(n || ""), onClick: a },
          c.a.createElement("span", null, t)
        );
      };
    },
    352: function(e, t, n) {},
    353: function(e, t, n) {},
    357: function(e, t, n) {
      e.exports = n.p + "static/media/youtube.61234168.PNG";
    },
    358: function(e, t, n) {
      "use strict";
      var a = n(0),
        c = n.n(a);
      n(359);
      t.a = function(e) {
        var t = e.image,
          n = e.name,
          a = e.type,
          l = e.className,
          i = e.onClick;
        return c.a.createElement(
          "div",
          { className: "project-card ".concat(l || "") },
          c.a.createElement("img", { src: t, alt: "", onClick: i }),
          c.a.createElement("h3", { className: "name", onClick: i }, n, " "),
          c.a.createElement("p", { className: "type", onClick: i }, a)
        );
      };
    },
    359: function(e, t, n) {},
    491: function(e, t, n) {
      e.exports = n.p + "static/media/crown.869ad086.PNG";
    },
    492: function(e, t, n) {
      e.exports = n.p + "static/media/monstersilk.ecbb74db.PNG";
    },
    500: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(378),
        c = n(0),
        l = n.n(c),
        i = n(43),
        r = n(357),
        o = n.n(r),
        m = n(491),
        s = n.n(m),
        u = n(492),
        p = n.n(u),
        b = n(348),
        E = n(358),
        d = n(350);
      function w() {
        var e = Object(a.a)([
          "\n  position: relative;\n  margin: 15px 0;\n  width: 100%;\n  text-align: center;\n"
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      var f = n(386).a.div(w());
      t.default = function() {
        return l.a.createElement(
          "section",
          { className: "projects" },
          l.a.createElement(
            i.b,
            null,
            l.a.createElement(
              i.d,
              null,
              l.a.createElement(
                i.a,
                { lg: 12 },
                l.a.createElement(
                  "div",
                  { className: "text-center" },
                  l.a.createElement(b.b, {
                    text: "Recent Work",
                    className: "text-white"
                  })
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: "list" },
              l.a.createElement(
                i.d,
                { className: "m-0" },
                l.a.createElement(
                  i.a,
                  { xs: 12, sm: 12, md: 12, lg: 12 },
                  l.a.createElement(E.a, {
                    className: "text-white",
                    name: "Crown Store",
                    type: "E-commerce",
                    image: s.a,
                    onClick: function() {
                      window.open("http://crwn-store.herokuapp.com/", "_blank");
                    }
                  }),
                  l.a.createElement(
                    f,
                    null,
                    l.a.createElement(d.b, {
                      label: "View Github \u2192",
                      onClick: function() {
                        window.open(
                          "https://github.com/jayamathan/V2-crwn-clothing",
                          "_blank"
                        );
                      }
                    })
                  )
                ),
                l.a.createElement(
                  i.a,
                  { xs: 12, sm: 12, md: 12, lg: 12 },
                  l.a.createElement(E.a, {
                    name: "Monster & Silk",
                    type: "Web App",
                    image: p.a,
                    onClick: function() {
                      window.open(
                        "https://monsters-and-silk.web.app/",
                        "_blank"
                      );
                    }
                  }),
                  l.a.createElement(
                    f,
                    null,
                    l.a.createElement(d.b, {
                      label: "View Github \u2192",
                      onClick: function() {
                        window.open(
                          "https://github.com/jayamathan/Digital-Agency",
                          "_blank"
                        );
                      }
                    })
                  )
                ),
                l.a.createElement(
                  i.a,
                  { xs: 12, sm: 12, md: 12, lg: 12 },
                  l.a.createElement(E.a, {
                    name: "Youtube Clone",
                    type: "Web App",
                    image: o.a,
                    onClick: function() {
                      window.open("https://youtube-jm.netlify.com/", "_blank");
                    }
                  }),
                  l.a.createElement(
                    f,
                    null,
                    l.a.createElement(d.b, {
                      label: "View Github \u2192",
                      onClick: function() {
                        window.open(
                          "https://github.com/jayamathan/Youtube_Clone",
                          "_blank"
                        );
                      }
                    })
                  )
                )
              )
            ),
            l.a.createElement(
              i.d,
              null,
              l.a.createElement(
                i.a,
                { lg: 12 },
                l.a.createElement("div", { className: "text-center" })
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=mywork.22005b43.chunk.js.map
