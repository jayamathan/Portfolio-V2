(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    348: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return l;
      });
      var n = a(0),
        r = a.n(n),
        l = (a(352),
        function(e) {
          var t = e.text;
          return r.a.createElement(
            "h1",
            { className: "page-heading" },
            t,
            r.a.createElement("span", null, ".")
          );
        });
      t.b = function(e) {
        var t = e.text,
          a = e.className;
        return r.a.createElement(
          "div",
          { className: "heading ".concat(a || "") },
          t,
          r.a.createElement("span", null, ".")
        );
      };
    },
    349: function(e, t, a) {
      "use strict";
      var n = a(65),
        r = a.n(n);
      t.a = {
        default: {
          title: "Jayamathan Shanmugam",
          description: "Full stack/JavaScript/Front-End/ReactJS Developer.",
          image: { logo: r.a },
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
    350: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return o;
      });
      var n = a(0),
        r = a.n(n),
        l = a(344),
        o = (a(353),
        function(e) {
          var t = e.label,
            a = e.to;
          return r.a.createElement(
            l.a,
            { to: a, className: "link-button" },
            r.a.createElement("span", null, t)
          );
        });
      t.b = function(e) {
        var t = e.label,
          a = e.type,
          n = e.onClick;
        return r.a.createElement(
          "button",
          { className: "button ".concat(a || ""), onClick: n },
          r.a.createElement("span", null, t)
        );
      };
    },
    351: function(e, t, a) {
      "use strict";
      var n = a(366),
        r = a(24),
        l = a(25),
        o = a(27),
        c = a(26),
        s = a(28),
        i = a(0),
        m = a.n(i),
        u = a(147),
        p = a(364),
        d = a.n(p),
        g = a(349),
        h = g.a.default.siteURL,
        f = g.a.default.title,
        b = g.a.default.description,
        v = g.a.default.keywords,
        E = g.a.default.image,
        y = g.a.default.twitter,
        w = g.a.default.sep,
        j = g.a.default.updated,
        k = g.a.default.published,
        N = g.a.default.contentType,
        O = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(o.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(l.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var a = e.title,
                    n = e.description,
                    r = e.image,
                    l = e.contentType,
                    o = e.twitter,
                    c = e.noCrawl,
                    s = e.published,
                    i = e.updated,
                    m = e.category,
                    u = e.tags,
                    p = e.keywords,
                    d = a ? (a + w + f).substring(0, 60) : f,
                    g = n ? n.substring(0, 155) : b,
                    O = r ? "".concat(h).concat(r) : E,
                    C = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: g },
                      { itemprop: "image", content: O },
                      { name: "description", content: g },
                      { name: "keywords", content: p || v },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: y },
                      { name: "twitter:title", content: d },
                      { name: "twitter:description", content: g },
                      { name: "twitter:creator", content: o || y },
                      { name: "twitter:image:src", content: O },
                      { property: "og:title", content: d },
                      { property: "og:type", content: l || N },
                      { property: "og:url", content: h + t },
                      { property: "og:image", content: O },
                      { property: "og:description", content: g },
                      { property: "og:site_name", content: f },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c
                      ? C.push({ name: "robots", content: "noindex, nofollow" })
                      : C.push({ name: "robots", content: "index, follow" }),
                    s &&
                      C.push({
                        name: "article:published_time",
                        content: s || k
                      }),
                    i &&
                      C.push({
                        name: "article:modified_time",
                        content: i || j
                      }),
                    m && C.push({ name: "article:section", content: m }),
                    u && C.push({ name: "article:tag", content: u }),
                    C
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    a = e.id,
                    r = e.className,
                    l = Object(n.a)(e, ["children", "id", "className"]);
                  return m.a.createElement(
                    "div",
                    { id: a, className: r },
                    m.a.createElement(d.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          l.schema || "WebPage"
                        )
                      },
                      title: l.title ? l.title + w + f : f,
                      link: [
                        {
                          rel: "canonical",
                          href: h + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(l, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(i.Component);
      t.a = Object(u.a)(O);
    },
    352: function(e, t, a) {},
    353: function(e, t, a) {},
    360: function(e, t, a) {},
    361: function(e, t, a) {},
    362: function(e, t, a) {},
    363: function(e, t, a) {},
    365: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(387),
        r = a(24),
        l = a(25),
        o = a(27),
        c = a(26),
        s = a(28),
        i = a(0),
        m = a.n(i),
        u = a(388),
        p = a.n(u),
        d = a(351),
        g = (a(360), a(43)),
        h = a(348),
        f = a(116),
        b = (a(361),
        a(362),
        function(e) {
          var t = e.id,
            a = e.label,
            n = e.type,
            r = e.name,
            l = e.value,
            o = e.className,
            c = e.onChange,
            s = e.error;
          return m.a.createElement(
            "div",
            { className: "label-input-group" },
            m.a.createElement("label", { htmlFor: t }, a),
            m.a.createElement("input", {
              id: t,
              type: n,
              name: r,
              value: l,
              className: o,
              onChange: c
            }),
            m.a.createElement("div", { className: "error" }, s && s[r] && s.msg)
          );
        }),
        v = (a(363),
        function(e) {
          var t = e.id,
            a = e.label,
            n = e.name,
            r = e.value,
            l = e.className,
            o = e.onChange,
            c = e.error;
          return m.a.createElement(
            "div",
            { className: "label-input-group" },
            m.a.createElement("label", { htmlFor: t }, a),
            m.a.createElement("textarea", {
              id: t,
              name: n,
              value: r,
              className: l,
              onChange: o
            }),
            m.a.createElement(
              "div",
              { className: "error" },
              c && c[n] && m.a.createElement("span", null, c.msg)
            )
          );
        }),
        E = a(350),
        y = a(114),
        w = (function(e) {
          function t() {
            var e;
            return (
              Object(r.a)(this, t),
              ((e = Object(o.a)(
                this,
                Object(c.a)(t).call(this)
              )).changehandler = function(t) {
                var a = t.target.name,
                  n = t.target.value;
                e.setState(function(e) {
                  var t;
                  return (
                    (t = {}),
                    Object(f.a)(t, a, n),
                    Object(f.a)(t, "error", {}),
                    t
                  );
                });
              }),
              (e.submitHandler = function() {
                var t = e.state,
                  a = t.name,
                  n = t.email,
                  r = t.message,
                  l = t.error,
                  o = t.form;
                if (!o || "Pending" !== o.state) {
                  if (a.length < 3) {
                    var c = Object.assign({}, l);
                    return (
                      (c.name = !0),
                      (c.msg = "Please enter at least 3 characters."),
                      void e.setState({ error: c })
                    );
                  }
                  if (!y.a.test(n)) {
                    var s = Object.assign({}, l);
                    return (
                      (s.email = !0),
                      (s.msg = "Please enter a valid email address."),
                      void e.setState({ error: s })
                    );
                  }
                  if (r.length < 20) {
                    var i = Object.assign({}, l);
                    return (
                      (i.message = !0),
                      (i.msg = "Please enter at least 20 characters."),
                      void e.setState({ error: i })
                    );
                  }
                  e.setState({ form: { msg: "", state: "Pending" } }),
                    fetch("http://imabhi.herokuapp.com/contact", {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({ name: a, email: n, query: r })
                    })
                      .then(function(e) {
                        return e.json();
                      })
                      .then(function(t) {
                        t.success
                          ? e.setState({
                              name: "",
                              email: "",
                              message: "",
                              error: {},
                              form: {
                                msg: 'Thanks "'.concat(
                                  a,
                                  '", your message is successfully submitted! I will contact you as soon as possible.'
                                ),
                                state: "Success"
                              }
                            })
                          : e.setState({
                              form: {
                                msg:
                                  "OOPs!! Something went wrong.Please try again later.",
                                state: "Error"
                              }
                            });
                      });
                }
              }),
              (e.state = {
                name: "",
                email: "",
                message: "",
                form: { msg: "" }
              }),
              e
            );
          }
          return (
            Object(s.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.name,
                    a = e.email,
                    n = e.message,
                    r = e.error,
                    l = e.form;
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    m.a.createElement(
                      g.d,
                      null,
                      m.a.createElement(
                        g.a,
                        { xs: 12, sm: 12, md: 6, lg: 6 },
                        m.a.createElement(b, {
                          id: "name",
                          label: "Name",
                          type: "text",
                          name: "name",
                          value: t,
                          className: "",
                          onChange: this.changehandler,
                          error: r
                        })
                      ),
                      m.a.createElement(
                        g.a,
                        { xs: 12, sm: 12, md: 6, lg: 6 },
                        m.a.createElement(b, {
                          id: "email",
                          label: "E-mail address",
                          type: "email",
                          name: "email",
                          value: a,
                          className: "",
                          onChange: this.changehandler,
                          error: r
                        })
                      )
                    ),
                    m.a.createElement(
                      g.d,
                      null,
                      m.a.createElement(
                        g.a,
                        { xs: 12, sm: 12, md: 12, lg: 12 },
                        m.a.createElement(v, {
                          id: "message",
                          label: "Message",
                          name: "message",
                          value: n,
                          className: "",
                          onChange: this.changehandler,
                          error: r
                        })
                      )
                    ),
                    m.a.createElement(
                      g.d,
                      null,
                      m.a.createElement(
                        g.a,
                        {
                          xs: 12,
                          sm: 12,
                          md: 12,
                          lg: 12,
                          className: "text-center"
                        },
                        m.a.createElement(E.b, {
                          label: "Submit \u2192",
                          onClick: this.submitHandler
                        }),
                        m.a.createElement("div", { className: l.state }, l.msg)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(m.a.Component),
        j = a(349);
      a.d(t, "FollowMe", function() {
        return x;
      });
      var k = function(e) {
        var t = e.text;
        return m.a.createElement("div", { className: "map-text" }, t);
      };
      function N(e) {
        return {
          layerType: "TransitLayer",
          fullscreenControl: !1,
          streetViewControl: !1,
          panControl: !1,
          mapTypeControl: !1,
          scrollwheel: !0,
          zoomControl: !1,
          styles: [
            {
              stylers: [
                { saturation: -100 },
                { gamma: 0.8 },
                { lightness: 4 },
                { visibility: "on" }
              ]
            }
          ]
        };
      }
      var O = { lat: 12.7369, lng: 80.0144 },
        C = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(o.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    m.a.createElement(
                      "div",
                      { className: "map-wrapper" },
                      m.a.createElement(
                        p.a,
                        {
                          bootstrapURLKeys: {
                            key: "AIzaSyCnf5QOgx8eqc103p2b2uyZRK48CIqtcT4"
                          },
                          defaultCenter: Object(n.a)({}, O),
                          defaultZoom: this.props.zoom,
                          options: N
                        },
                        m.a.createElement(
                          k,
                          Object.assign({}, O, { text: "JM." })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(m.a.PureComponent);
      C.defaultProps = { zoom: 16 };
      var x = function() {
          return m.a.createElement(
            "div",
            { className: "follow-me" },
            m.a.createElement(h.b, {
              text: "Follow Me",
              className: "text-center"
            }),
            m.a.createElement(
              "ul",
              null,
              m.a.createElement(
                "li",
                null,
                m.a.createElement(
                  "a",
                  {
                    href: "https://www.instagram.com/jayamathan_s/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  m.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/instagram-icon.svg",
                    alt: "instagram"
                  })
                )
              ),
              m.a.createElement(
                "li",
                null,
                m.a.createElement(
                  "a",
                  {
                    href: "https://www.facebook.com/jayamathan.skj",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  m.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/facebook.svg",
                    alt: "facebook"
                  })
                )
              ),
              m.a.createElement(
                "li",
                null,
                m.a.createElement(
                  "a",
                  {
                    href: "https://www.linkedin.com/in/jayamathan-s/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  m.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/linkedin.svg",
                    alt: "linkedin"
                  })
                )
              ),
              m.a.createElement(
                "li",
                null,
                m.a.createElement(
                  "a",
                  {
                    href: "https://github.com/jayamathan",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  m.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/github-icon.svg",
                    alt: "github"
                  })
                )
              ),
              m.a.createElement(
                "li",
                null,
                m.a.createElement(
                  "a",
                  {
                    href: "https://twitter.com/JayamathanSkj",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  m.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/twitter.svg",
                    alt: "twitter"
                  })
                )
              )
            )
          );
        },
        S = function() {
          return m.a.createElement(
            "div",
            { className: "address" },
            m.a.createElement(h.b, {
              text: " Always happy to hear from you",
              className: "text-center"
            }),
            m.a.createElement("span", null, "Address"),
            m.a.createElement(
              "p",
              null,
              "C3 203 Aqualily Apartments, Mahindra world city, Chennai - 603002"
            ),
            m.a.createElement("span", null, "Email"),
            m.a.createElement(
              "p",
              null,
              m.a.createElement(
                "a",
                { href: "mailto:jayamathanskj03@gmail.com" },
                "jayamathanskj03@gmail.com"
              )
            )
          );
        };
      t.default = function() {
        return m.a.createElement(
          d.a,
          j.a.contact,
          m.a.createElement(
            "div",
            { className: "contact" },
            m.a.createElement(
              g.b,
              null,
              m.a.createElement(
                g.d,
                null,
                m.a.createElement(
                  "div",
                  { className: "contact-heading" },
                  m.a.createElement(h.a, { text: "Get in Touch" })
                )
              )
            ),
            m.a.createElement(
              g.b,
              null,
              m.a.createElement(C, null),
              m.a.createElement(
                "div",
                { className: "contact-content" },
                m.a.createElement(
                  g.d,
                  null,
                  m.a.createElement(
                    g.a,
                    { xs: 12, sm: 12, md: 6, lg: 6 },
                    m.a.createElement(S, null)
                  ),
                  m.a.createElement(
                    g.a,
                    { xs: 12, sm: 12, md: 6, lg: 6 },
                    m.a.createElement(w, null)
                  )
                )
              )
            ),
            m.a.createElement(
              g.b,
              null,
              m.a.createElement(
                g.d,
                null,
                m.a.createElement(
                  g.a,
                  { xs: 12, sm: 12, md: 12, lg: 12 },
                  m.a.createElement(x, null)
                )
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=contact.71dd2fb2.chunk.js.map
