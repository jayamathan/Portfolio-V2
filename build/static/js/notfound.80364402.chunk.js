(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    349: function(e, t, n) {
      "use strict";
      var a = n(65),
        o = n.n(a);
      t.a = {
        default: {
          title: "Jayamathan Shanmugam",
          description: "Full stack/JavaScript/Front-End/ReactJS Developer.",
          image: { logo: o.a },
          twitter: "@JayamathanSkj",
          sep: " - ",
          siteURL: "https://jayamathan.netlify.com",
          keywords:
            "jayamathan, Web developer, full stack developer, Full Stack Developer,Front End Developer,front end developer, reactjs developer, javascript developer, Freelance web developer, HTML to PSD Developer, Responsive web developer, react js developer, react developer, react native developer, js developer, Javascript Developer",
          facebookAppId: "XXXXXXXXX",
          updated: new Date().toDateString(),
          published: new Date().toDateString(),
          contentType: "website"
        },
        home: {
          id: "home",
          title: "Home",
          description: "Have a look on my recent projects"
        },
        about: {
          id: "about",
          title: "About",
          description: "Read More about Jayamathan S"
        },
        contact: {
          id: "contact",
          title: "Contact",
          description: "Get in touch"
        },
        notfound: {
          id: "notfound",
          title: "Oops! 404",
          description: "This is not the web page you are looking for."
        }
      };
    },
    351: function(e, t, n) {
      "use strict";
      var a = n(366),
        o = n(24),
        i = n(25),
        r = n(27),
        c = n(26),
        p = n(28),
        l = n(0),
        s = n.n(l),
        d = n(147),
        u = n(364),
        m = n.n(u),
        h = n(349),
        f = h.a.default.siteURL,
        g = h.a.default.title,
        b = h.a.default.description,
        v = h.a.default.keywords,
        w = h.a.default.image,
        y = h.a.default.twitter,
        X = h.a.default.sep,
        k = h.a.default.updated,
        j = h.a.default.published,
        D = h.a.default.contentType,
        O = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(r.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(i.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    o = e.image,
                    i = e.contentType,
                    r = e.twitter,
                    c = e.noCrawl,
                    p = e.published,
                    l = e.updated,
                    s = e.category,
                    d = e.tags,
                    u = e.keywords,
                    m = n ? (n + X + g).substring(0, 60) : g,
                    h = a ? a.substring(0, 155) : b,
                    O = o ? "".concat(f).concat(o) : w,
                    S = [
                      { itemprop: "name", content: m },
                      { itemprop: "description", content: h },
                      { itemprop: "image", content: O },
                      { name: "description", content: h },
                      { name: "keywords", content: u || v },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: m },
                      { name: "twitter:description", content: h },
                      { name: "twitter:creator", content: r || y },
                      { name: "twitter:image:src", content: O },
                      { property: "og:title", content: m },
                      { property: "og:type", content: i || D },
                      { property: "og:url", content: f + t },
                      { property: "og:image", content: O },
                      { property: "og:description", content: h },
                      { property: "og:site_name", content: g },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c
                      ? S.push({ name: "robots", content: "noindex, nofollow" })
                      : S.push({ name: "robots", content: "index, follow" }),
                    p &&
                      S.push({
                        name: "article:published_time",
                        content: p || j
                      }),
                    l &&
                      S.push({
                        name: "article:modified_time",
                        content: l || k
                      }),
                    s && S.push({ name: "article:section", content: s }),
                    d && S.push({ name: "article:tag", content: d }),
                    S
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.id,
                    o = e.className,
                    i = Object(a.a)(e, ["children", "id", "className"]);
                  return s.a.createElement(
                    "div",
                    { id: n, className: o },
                    s.a.createElement(m.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          i.schema || "WebPage"
                        )
                      },
                      title: i.title ? i.title + X + g : g,
                      link: [
                        {
                          rel: "canonical",
                          href: f + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(i, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(l.Component);
      t.a = Object(d.a)(O);
    },
    493: function(e, t, n) {},
    501: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        o = n.n(a),
        i = n(351),
        r = (n(493), n(349));
      t.default = function() {
        return o.a.createElement(
          i.a,
          Object.assign({}, r.a.notfound, { noCrawl: !0 }),
          o.a.createElement(
            "div",
            { className: "notfound" },
            o.a.createElement("h2", null, "oops! 404"),
            o.a.createElement(
              "p",
              null,
              "This is not the web page you are looking for."
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=notfound.80364402.chunk.js.map
