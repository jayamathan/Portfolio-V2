(window.webpackJsonp = window.webpackJsonp || []).push([
  [4, 5],
  {
    348: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      });
      var n = a(0),
        l = a.n(n),
        r = (a(352),
        function(e) {
          var t = e.text;
          return l.a.createElement(
            "h1",
            { className: "page-heading" },
            t,
            l.a.createElement("span", null, ".")
          );
        });
      t.b = function(e) {
        var t = e.text,
          a = e.className;
        return l.a.createElement(
          "div",
          { className: "heading ".concat(a || "") },
          t,
          l.a.createElement("span", null, ".")
        );
      };
    },
    349: function(e, t, a) {
      "use strict";
      var n = a(65),
        l = a.n(n);
      t.a = {
        default: {
          title: "Jayamathan Shanmugam",
          description: "Full stack/JavaScript/Front-End/ReactJS Developer.",
          image: { logo: l.a },
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
        return c;
      });
      var n = a(0),
        l = a.n(n),
        r = a(344),
        c = (a(353),
        function(e) {
          var t = e.label,
            a = e.to;
          return l.a.createElement(
            r.a,
            { to: a, className: "link-button" },
            l.a.createElement("span", null, t)
          );
        });
      t.b = function(e) {
        var t = e.label,
          a = e.type,
          n = e.onClick;
        return l.a.createElement(
          "button",
          { className: "button ".concat(a || ""), onClick: n },
          l.a.createElement("span", null, t)
        );
      };
    },
    351: function(e, t, a) {
      "use strict";
      var n = a(366),
        l = a(24),
        r = a(25),
        c = a(27),
        o = a(26),
        s = a(28),
        m = a(0),
        i = a.n(m),
        A = a(147),
        u = a(364),
        d = a.n(u),
        p = a(349),
        g = p.a.default.siteURL,
        E = p.a.default.title,
        h = p.a.default.description,
        f = p.a.default.keywords,
        b = p.a.default.image,
        w = p.a.default.twitter,
        v = p.a.default.sep,
        y = p.a.default.updated,
        C = p.a.default.published,
        B = p.a.default.contentType,
        k = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(c.a)(this, Object(o.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var a = e.title,
                    n = e.description,
                    l = e.image,
                    r = e.contentType,
                    c = e.twitter,
                    o = e.noCrawl,
                    s = e.published,
                    m = e.updated,
                    i = e.category,
                    A = e.tags,
                    u = e.keywords,
                    d = a ? (a + v + E).substring(0, 60) : E,
                    p = n ? n.substring(0, 155) : h,
                    k = l ? "".concat(g).concat(l) : b,
                    N = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: p },
                      { itemprop: "image", content: k },
                      { name: "description", content: p },
                      { name: "keywords", content: u || f },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: w },
                      { name: "twitter:title", content: d },
                      { name: "twitter:description", content: p },
                      { name: "twitter:creator", content: c || w },
                      { name: "twitter:image:src", content: k },
                      { property: "og:title", content: d },
                      { property: "og:type", content: r || B },
                      { property: "og:url", content: g + t },
                      { property: "og:image", content: k },
                      { property: "og:description", content: p },
                      { property: "og:site_name", content: E },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    o
                      ? N.push({ name: "robots", content: "noindex, nofollow" })
                      : N.push({ name: "robots", content: "index, follow" }),
                    s &&
                      N.push({
                        name: "article:published_time",
                        content: s || C
                      }),
                    m &&
                      N.push({
                        name: "article:modified_time",
                        content: m || y
                      }),
                    i && N.push({ name: "article:section", content: i }),
                    A && N.push({ name: "article:tag", content: A }),
                    N
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    a = e.id,
                    l = e.className,
                    r = Object(n.a)(e, ["children", "id", "className"]);
                  return i.a.createElement(
                    "div",
                    { id: a, className: l },
                    i.a.createElement(d.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          r.schema || "WebPage"
                        )
                      },
                      title: r.title ? r.title + v + E : E,
                      link: [
                        {
                          rel: "canonical",
                          href: g + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(r, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(m.Component);
      t.a = Object(A.a)(k);
    },
    352: function(e, t, a) {},
    353: function(e, t, a) {},
    357: function(e, t, a) {
      e.exports = a.p + "static/media/youtube.61234168.PNG";
    },
    358: function(e, t, a) {
      "use strict";
      var n = a(0),
        l = a.n(n);
      a(359);
      t.a = function(e) {
        var t = e.image,
          a = e.name,
          n = e.type,
          r = e.className,
          c = e.onClick;
        return l.a.createElement(
          "div",
          { className: "project-card ".concat(r || "") },
          l.a.createElement("img", { src: t, alt: "", onClick: c }),
          l.a.createElement("h3", { className: "name", onClick: c }, a, " "),
          l.a.createElement("p", { className: "type", onClick: c }, n)
        );
      };
    },
    359: function(e, t, a) {},
    360: function(e, t, a) {},
    361: function(e, t, a) {},
    362: function(e, t, a) {},
    363: function(e, t, a) {},
    365: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(387),
        l = a(24),
        r = a(25),
        c = a(27),
        o = a(26),
        s = a(28),
        m = a(0),
        i = a.n(m),
        A = a(388),
        u = a.n(A),
        d = a(351),
        p = (a(360), a(43)),
        g = a(348),
        E = a(116),
        h = (a(361),
        a(362),
        function(e) {
          var t = e.id,
            a = e.label,
            n = e.type,
            l = e.name,
            r = e.value,
            c = e.className,
            o = e.onChange,
            s = e.error;
          return i.a.createElement(
            "div",
            { className: "label-input-group" },
            i.a.createElement("label", { htmlFor: t }, a),
            i.a.createElement("input", {
              id: t,
              type: n,
              name: l,
              value: r,
              className: c,
              onChange: o
            }),
            i.a.createElement("div", { className: "error" }, s && s[l] && s.msg)
          );
        }),
        f = (a(363),
        function(e) {
          var t = e.id,
            a = e.label,
            n = e.name,
            l = e.value,
            r = e.className,
            c = e.onChange,
            o = e.error;
          return i.a.createElement(
            "div",
            { className: "label-input-group" },
            i.a.createElement("label", { htmlFor: t }, a),
            i.a.createElement("textarea", {
              id: t,
              name: n,
              value: l,
              className: r,
              onChange: c
            }),
            i.a.createElement(
              "div",
              { className: "error" },
              o && o[n] && i.a.createElement("span", null, o.msg)
            )
          );
        }),
        b = a(350),
        w = a(114),
        v = (function(e) {
          function t() {
            var e;
            return (
              Object(l.a)(this, t),
              ((e = Object(c.a)(
                this,
                Object(o.a)(t).call(this)
              )).changehandler = function(t) {
                var a = t.target.name,
                  n = t.target.value;
                e.setState(function(e) {
                  var t;
                  return (
                    (t = {}),
                    Object(E.a)(t, a, n),
                    Object(E.a)(t, "error", {}),
                    t
                  );
                });
              }),
              (e.submitHandler = function() {
                var t = e.state,
                  a = t.name,
                  n = t.email,
                  l = t.message,
                  r = t.error,
                  c = t.form;
                if (!c || "Pending" !== c.state) {
                  if (a.length < 3) {
                    var o = Object.assign({}, r);
                    return (
                      (o.name = !0),
                      (o.msg = "Please enter at least 3 characters."),
                      void e.setState({ error: o })
                    );
                  }
                  if (!w.a.test(n)) {
                    var s = Object.assign({}, r);
                    return (
                      (s.email = !0),
                      (s.msg = "Please enter a valid email address."),
                      void e.setState({ error: s })
                    );
                  }
                  if (l.length < 20) {
                    var m = Object.assign({}, r);
                    return (
                      (m.message = !0),
                      (m.msg = "Please enter at least 20 characters."),
                      void e.setState({ error: m })
                    );
                  }
                  e.setState({ form: { msg: "", state: "Pending" } }),
                    fetch("http://imabhi.herokuapp.com/contact", {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({ name: a, email: n, query: l })
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
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.name,
                    a = e.email,
                    n = e.message,
                    l = e.error,
                    r = e.form;
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      p.d,
                      null,
                      i.a.createElement(
                        p.a,
                        { xs: 12, sm: 12, md: 6, lg: 6 },
                        i.a.createElement(h, {
                          id: "name",
                          label: "Name",
                          type: "text",
                          name: "name",
                          value: t,
                          className: "",
                          onChange: this.changehandler,
                          error: l
                        })
                      ),
                      i.a.createElement(
                        p.a,
                        { xs: 12, sm: 12, md: 6, lg: 6 },
                        i.a.createElement(h, {
                          id: "email",
                          label: "E-mail address",
                          type: "email",
                          name: "email",
                          value: a,
                          className: "",
                          onChange: this.changehandler,
                          error: l
                        })
                      )
                    ),
                    i.a.createElement(
                      p.d,
                      null,
                      i.a.createElement(
                        p.a,
                        { xs: 12, sm: 12, md: 12, lg: 12 },
                        i.a.createElement(f, {
                          id: "message",
                          label: "Message",
                          name: "message",
                          value: n,
                          className: "",
                          onChange: this.changehandler,
                          error: l
                        })
                      )
                    ),
                    i.a.createElement(
                      p.d,
                      null,
                      i.a.createElement(
                        p.a,
                        {
                          xs: 12,
                          sm: 12,
                          md: 12,
                          lg: 12,
                          className: "text-center"
                        },
                        i.a.createElement(b.b, {
                          label: "Submit \u2192",
                          onClick: this.submitHandler
                        }),
                        i.a.createElement("div", { className: r.state }, r.msg)
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.Component),
        y = a(349);
      a.d(t, "FollowMe", function() {
        return I;
      });
      var C = function(e) {
        var t = e.text;
        return i.a.createElement("div", { className: "map-text" }, t);
      };
      function B(e) {
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
      var k = { lat: 12.7369, lng: 80.0144 },
        N = (function(e) {
          function t() {
            return (
              Object(l.a)(this, t),
              Object(c.a)(this, Object(o.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      "div",
                      { className: "map-wrapper" },
                      i.a.createElement(
                        u.a,
                        {
                          bootstrapURLKeys: {
                            key: "AIzaSyCnf5QOgx8eqc103p2b2uyZRK48CIqtcT4"
                          },
                          defaultCenter: Object(n.a)({}, k),
                          defaultZoom: this.props.zoom,
                          options: B
                        },
                        i.a.createElement(
                          C,
                          Object.assign({}, k, { text: "JM." })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.PureComponent);
      N.defaultProps = { zoom: 16 };
      var I = function() {
          return i.a.createElement(
            "div",
            { className: "follow-me" },
            i.a.createElement(g.b, {
              text: "Follow Me",
              className: "text-center"
            }),
            i.a.createElement(
              "ul",
              null,
              i.a.createElement(
                "li",
                null,
                i.a.createElement(
                  "a",
                  {
                    href: "https://www.instagram.com/jayamathan_s/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  i.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/instagram-icon.svg",
                    alt: "instagram"
                  })
                )
              ),
              i.a.createElement(
                "li",
                null,
                i.a.createElement(
                  "a",
                  {
                    href: "https://www.facebook.com/jayamathan.skj",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  i.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/facebook.svg",
                    alt: "facebook"
                  })
                )
              ),
              i.a.createElement(
                "li",
                null,
                i.a.createElement(
                  "a",
                  {
                    href: "https://www.linkedin.com/in/jayamathan-s/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  i.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/linkedin.svg",
                    alt: "linkedin"
                  })
                )
              ),
              i.a.createElement(
                "li",
                null,
                i.a.createElement(
                  "a",
                  {
                    href: "https://github.com/jayamathan",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  i.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/github-icon.svg",
                    alt: "github"
                  })
                )
              ),
              i.a.createElement(
                "li",
                null,
                i.a.createElement(
                  "a",
                  {
                    href: "https://twitter.com/JayamathanSkj",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  i.a.createElement("img", {
                    src: "https://cdn.svgporn.com/logos/twitter.svg",
                    alt: "twitter"
                  })
                )
              )
            )
          );
        },
        M = function() {
          return i.a.createElement(
            "div",
            { className: "address" },
            i.a.createElement(g.b, {
              text: " Always happy to hear from you",
              className: "text-center"
            }),
            i.a.createElement("span", null, "Address"),
            i.a.createElement(
              "p",
              null,
              "C3 203 Aqualily Apartments, Mahindra world city, Chennai - 603002"
            ),
            i.a.createElement("span", null, "Email"),
            i.a.createElement(
              "p",
              null,
              i.a.createElement(
                "a",
                { href: "mailto:jayamathanskj03@gmail.com" },
                "jayamathanskj03@gmail.com"
              )
            )
          );
        };
      t.default = function() {
        return i.a.createElement(
          d.a,
          y.a.contact,
          i.a.createElement(
            "div",
            { className: "contact" },
            i.a.createElement(
              p.b,
              null,
              i.a.createElement(
                p.d,
                null,
                i.a.createElement(
                  "div",
                  { className: "contact-heading" },
                  i.a.createElement(g.a, { text: "Get in Touch" })
                )
              )
            ),
            i.a.createElement(
              p.b,
              null,
              i.a.createElement(N, null),
              i.a.createElement(
                "div",
                { className: "contact-content" },
                i.a.createElement(
                  p.d,
                  null,
                  i.a.createElement(
                    p.a,
                    { xs: 12, sm: 12, md: 6, lg: 6 },
                    i.a.createElement(M, null)
                  ),
                  i.a.createElement(
                    p.a,
                    { xs: 12, sm: 12, md: 6, lg: 6 },
                    i.a.createElement(v, null)
                  )
                )
              )
            ),
            i.a.createElement(
              p.b,
              null,
              i.a.createElement(
                p.d,
                null,
                i.a.createElement(
                  p.a,
                  { xs: 12, sm: 12, md: 12, lg: 12 },
                  i.a.createElement(I, null)
                )
              )
            )
          )
        );
      };
    },
    368: function(e, t, a) {},
    369: function(e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    370: function(e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    371: function(e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    372: function(e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    373: function(e, t, a) {},
    374: function(e, t, a) {},
    375: function(e, t, a) {},
    376: function(e, t, a) {},
    377: function(e, t, a) {
      e.exports = a.p + "static/media/jayamathan_s.d51d7009.png";
    },
    384: function(e, t, a) {
      e.exports = a.p + "static/media/m&s.f5fc639f.png";
    },
    385: function(e, t, a) {
      e.exports = a.p + "static/media/crownclothing.ba758083.png";
    },
    407: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(351),
        c = (a(368), a(43)),
        o = a(369),
        s = a.n(o),
        m = a(370),
        i = a.n(m),
        A = a(371),
        u = a.n(A),
        d = a(372),
        p = a.n(d),
        g = (a(373),
        function() {
          return l.a.createElement(
            c.b,
            null,
            l.a.createElement(
              "div",
              { className: "testimonial" },
              l.a.createElement(
                c.d,
                { className: "flex" },
                l.a.createElement(
                  "div",
                  { className: "col-md-6" },
                  l.a.createElement(
                    "p",
                    null,
                    "Jayamathan has an excellent commitment and unwavering dedication to his work. He has a genuine intellectual curiosity and an innovative mindset to learn and implement novel concepts."
                  ),
                  l.a.createElement(
                    "span",
                    null,
                    "- Annamol Alex ",
                    l.a.createElement(
                      "i",
                      null,
                      " Lead Engineer at HTIC, IIT Madras"
                    )
                  ),
                  l.a.createElement("br", null),
                  l.a.createElement("span", null)
                ),
                l.a.createElement(
                  "div",
                  { className: "col-md-6" },
                  l.a.createElement(
                    "p",
                    null,
                    "Jayamathan has wonderful implementation skills in terms of front end, he learns everything quickly and great in exploring new skills."
                  ),
                  l.a.createElement(
                    "span",
                    null,
                    "- Chitra Gurumoorthy ",
                    l.a.createElement(
                      "i",
                      null,
                      " Technology Analyst at Infosys"
                    )
                  )
                )
              )
            )
          );
        }),
        E = function(e) {
          var t = e.image,
            a = e.name,
            n = e.desc,
            r = e.className;
          return l.a.createElement(
            "div",
            { className: "service-card ".concat(r || "") },
            l.a.createElement(
              "div",
              { className: "serivce-icon" },
              l.a.createElement("img", { src: t, alt: "" })
            ),
            l.a.createElement(
              "div",
              null,
              l.a.createElement("h4", null, a),
              l.a.createElement("p", null, n)
            )
          );
        },
        h = function() {
          return l.a.createElement(
            c.b,
            null,
            l.a.createElement(
              "section",
              { className: "services" },
              l.a.createElement(
                c.d,
                { className: "m-0" },
                l.a.createElement(
                  c.a,
                  { xs: 12, sm: 6, md: 6, lg: 6, className: "p-0" },
                  l.a.createElement(E, {
                    className: "",
                    image: i.a,
                    name: "Full stack development",
                    desc:
                      "I have experience with both FrontEnd and BackEnd Development. I also comfortable in working with databases, APIs and Github/Gitlab version control."
                  })
                ),
                l.a.createElement(
                  c.a,
                  { xs: 12, sm: 6, md: 6, lg: 6, className: "p-0" },
                  l.a.createElement(E, {
                    className: "",
                    image: s.a,
                    name: "Design and User Experience",
                    desc:
                      "As a FrontEnd Developer, I have a special eye for UI/UX Design. I approach problems with a customer-centric mindset which helped to develop intuitive meaningful products"
                  })
                )
              ),
              l.a.createElement(
                c.d,
                { className: "m-0" },
                l.a.createElement(
                  c.a,
                  { xs: 12, sm: 6, md: 6, lg: 6, className: "p-0" },
                  l.a.createElement(E, {
                    className: "border-left-0 border-bottom-0",
                    image: u.a,
                    name: "Responsibility and People",
                    desc:
                      "I take ownership of my work and I love to help people. I am also interested in influencing people in a positive approach without authority"
                  })
                ),
                l.a.createElement(
                  c.a,
                  { xs: 12, sm: 6, md: 6, lg: 6, className: "p-0" },
                  l.a.createElement(E, {
                    className: "border-right-0 border-bottom-0",
                    image: p.a,
                    name: "Continuous Learning",
                    desc:
                      "Curiosity shaped my journey all along. I always explore relevant things to learn that benefits to both my personal and professional development"
                  })
                )
              )
            )
          );
        },
        f = function() {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(g, null),
            l.a.createElement(h, null)
          );
        },
        b = a(348),
        w = (a(374), a(350)),
        v = function() {
          return l.a.createElement(
            "section",
            { className: "worktogether" },
            l.a.createElement(
              c.b,
              null,
              l.a.createElement(
                c.d,
                null,
                l.a.createElement(
                  c.a,
                  { xs: 12, sm: 12, md: 6, lg: 6 },
                  l.a.createElement(b.b, { text: "Get in Touch" }),
                  l.a.createElement("p", null, "Let's work together.")
                ),
                l.a.createElement(
                  c.a,
                  { xs: 12, sm: 12, md: 6, lg: 6, className: "button-wrapper" },
                  l.a.createElement(w.a, {
                    to: "/contact",
                    label: "Contact Me \u2192",
                    type: "white"
                  })
                )
              )
            )
          );
        },
        y = a(24),
        C = a(25),
        B = a(27),
        k = a(26),
        N = a(28),
        I = (a(375), a(114)),
        M = function(e) {
          var t = e.skill;
          return l.a.createElement(
            "div",
            { className: "skill-card" },
            l.a.createElement("img", { src: t.imgSrc, alt: t.name }),
            l.a.createElement("p", null, t.name)
          );
        },
        D = (function(e) {
          function t() {
            return (
              Object(y.a)(this, t),
              Object(B.a)(this, Object(k.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(N.a)(t, e),
            Object(C.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "section",
                    { className: "skills" },
                    l.a.createElement(
                      c.b,
                      null,
                      l.a.createElement(
                        c.d,
                        null,
                        l.a.createElement(
                          "div",
                          { className: "col-md-12 text-center" },
                          l.a.createElement(b.b, { text: "Skill Set" }),
                          l.a.createElement(
                            c.d,
                            null,
                            l.a.createElement(
                              "div",
                              { className: "skill-list" },
                              I.d.map(function(e, t) {
                                return l.a.createElement(M, {
                                  key: t,
                                  skill: e
                                });
                              })
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.a.Component),
        Q = (a(376),
        function() {
          return l.a.createElement(
            "div",
            { className: "experience" },
            l.a.createElement(
              c.d,
              { className: "mt-4" },
              l.a.createElement(
                c.a,
                { xs: 12, sm: 12, md: 12, lg: 12, className: "text-center" },
                l.a.createElement(b.b, { text: "Experience" })
              ),
              l.a.createElement(
                c.a,
                { xs: 12, sm: 12, md: 12, lg: 12 },
                l.a.createElement(
                  "div",
                  { className: "timeline-wrapper" },
                  l.a.createElement(
                    "div",
                    { className: "timeline" },
                    I.b.map(function(e, t) {
                      return l.a.createElement(
                        "div",
                        {
                          key: e.id,
                          className: "timeline-container ".concat(
                            t % 2 === 0 ? "left" : "right"
                          )
                        },
                        l.a.createElement(
                          "div",
                          { className: "timeline-content" },
                          l.a.createElement("h3", null, e.time),
                          l.a.createElement(
                            "h4",
                            null,
                            e.designation,
                            " ",
                            l.a.createElement("span", null, "at ", e.title)
                          ),
                          l.a.createElement("p", null, e.descriptiion)
                        )
                      );
                    })
                  )
                )
              )
            )
          );
        }),
        O = a(377),
        j = a.n(O),
        x = a(349),
        U = a(378),
        F = a(406),
        T = a(357),
        V = a.n(T),
        S = a(384),
        P = a.n(S),
        W = a(386),
        X = a(358),
        z = a(385),
        H = a.n(z);
      function G() {
        var e = Object(U.a)([
          "\n  position: relative;\n  margin: 15px 0;\n  width: 100%;\n  text-align: center;\n"
        ]);
        return (
          (G = function() {
            return e;
          }),
          e
        );
      }
      var R = W.a.div(G()),
        Z = function() {
          var e = function() {
              window.open("http://crwn-store.herokuapp.com/", "_blank");
            },
            t = function() {
              window.open("https://monsters-and-silk.web.app/", "_blank");
            },
            a = function() {
              window.open("https://youtube-jm.netlify.com/", "_blank");
            };
          return l.a.createElement(
            F.f,
            null,
            l.a.createElement(b.b, {
              text: "Recent Work",
              className: "text-center"
            }),
            l.a.createElement(
              F.c,
              {
                activeItem: 1,
                length: 3,
                showControls: !0,
                showIndicators: !0,
                className: "z-depth-1"
              },
              l.a.createElement(
                F.d,
                null,
                l.a.createElement(
                  F.e,
                  { itemId: "1", onClick: e },
                  l.a.createElement(
                    F.l,
                    null,
                    l.a.createElement(X.a, {
                      className: "text-white",
                      name: "Crown Store",
                      type: "E-commerce",
                      image: H.a,
                      onClick: e
                    }),
                    l.a.createElement(
                      "p",
                      null,
                      "Online Ecommerce Clothing website developed using React and Redux. This website acts like a native app in mobile browsers. This project has many latest features such as a Realtime stripe payments option, Gmail, and third party sign-in signout functionality."
                    ),
                    l.a.createElement(
                      R,
                      null,
                      l.a.createElement(w.b, {
                        label: "View Github \u2192",
                        onClick: function() {
                          window.open(
                            "https://github.com/jayamathan/V2-crwn-clothing",
                            "_blank"
                          );
                        }
                      })
                    )
                  )
                ),
                l.a.createElement(
                  F.e,
                  { itemId: "2", onClick: t },
                  l.a.createElement(
                    F.l,
                    null,
                    l.a.createElement(X.a, {
                      className: "text-white",
                      name: "Monster & Silk",
                      type:
                        "Digital Agency website built using sass & other css styles. Inspired from real website design",
                      image: P.a,
                      onClick: t
                    }),
                    l.a.createElement(
                      "p",
                      null,
                      "Sleek website for Innovative Digital Agency. This website is a remake of the existing website https://www.wolfwhale.com/. Building this website has been a ton of fun."
                    ),
                    l.a.createElement(
                      R,
                      null,
                      l.a.createElement(w.b, {
                        label: "View Github \u2192",
                        onClick: function() {
                          window.open(
                            "https://github.com/jayamathan/Digital-Agency",
                            "_blank"
                          );
                        }
                      })
                    )
                  )
                ),
                l.a.createElement(
                  F.e,
                  { itemId: "3", onClick: a },
                  l.a.createElement(
                    F.l,
                    null,
                    l.a.createElement(X.a, {
                      className: "text-white",
                      name: "Youtube Clone",
                      type: "Web App",
                      image: V.a,
                      onClick: a
                    }),
                    l.a.createElement(
                      "p",
                      null,
                      "Youtube clone built with ReactJs. This website provides realtime youtube data with suggestions. Also highlighted for Github Arctic Code Vault Contribution"
                    ),
                    l.a.createElement(
                      R,
                      null,
                      l.a.createElement(w.b, {
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
              )
            )
          );
        },
        q = function() {
          window.open("https://www.linkedin.com/in/jayamathan-s/", "_blank");
        },
        J = function() {
          return l.a.createElement(
            "div",
            { className: "intro", title: "Introduction" },
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                "p",
                { className: "greeting" },
                "Hi! There, I am"
              ),
              l.a.createElement(
                "h1",
                { className: "name" },
                "Jayamathan S",
                l.a.createElement("span", null)
              ),
              l.a.createElement(
                "h2",
                { className: "designation" },
                "Product Management Enthusiast"
              ),
              l.a.createElement(
                "h5",
                { className: "location" },
                "based in Chennai, India."
              )
            ),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(w.b, {
                onClick: q,
                label: "View LinkedIn \u2192"
              })
            )
          );
        },
        Y = function(e) {
          var t = e.heading,
            a = e.quote,
            n = e.writer,
            r = e.dir;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "div",
              {
                className: "testimonial-quote ".concat(r, " group"),
                title: "Quote"
              },
              l.a.createElement("p", null, t || ""),
              l.a.createElement("br", null),
              l.a.createElement(
                "div",
                { className: "quote-container" },
                l.a.createElement(
                  "blockquote",
                  null,
                  l.a.createElement("p", null, a)
                ),
                l.a.createElement(
                  "cite",
                  null,
                  l.a.createElement("span", null, n)
                )
              )
            )
          );
        },
        L = function() {
          return l.a.createElement(
            "section",
            { className: "landing", title: "Landing" },
            l.a.createElement(
              c.b,
              null,
              l.a.createElement(
                c.d,
                null,
                l.a.createElement(
                  c.a,
                  { xs: 12, lg: 6, md: 6, sm: 12 },
                  l.a.createElement(J, null)
                ),
                l.a.createElement(
                  c.a,
                  { xs: 12, lg: 6, md: 6, sm: 12, className: "float-right" },
                  l.a.createElement(Y, {
                    heading:
                      "Ideate\ud83d\udca1  <Build\ud83d\udcbb>  /*Launch\ud83d\ude80*/  Learn(\ud83d\udcd6)",
                    quote:
                      "Be stubborn on vision but flexible on details!\u201d",
                    writer: "- Jeff Bezos Amazon"
                  })
                )
              )
            )
          );
        },
        K = a(365);
      t.default = function() {
        return l.a.createElement(
          r.a,
          x.a.about,
          l.a.createElement(
            "div",
            { className: "about" },
            l.a.createElement(L, null),
            l.a.createElement(
              c.d,
              null,
              l.a.createElement(
                "div",
                { className: "about-heading" },
                l.a.createElement(b.a, { text: "About me" })
              )
            ),
            l.a.createElement(
              c.b,
              null,
              l.a.createElement(
                "div",
                { className: "about-content" },
                l.a.createElement(
                  c.d,
                  null,
                  l.a.createElement(
                    c.a,
                    { xs: 12, sm: 12, md: 8, lg: 8 },
                    l.a.createElement(
                      "p",
                      null,
                      "I am a crazy product enthusiast who hails from an Engineering background possessing an undying craze for problem-solving."
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "I started as an engineer experimenting with microprocessors, got curious, and grew into more holistic roles like Full-stack development \ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb and Product Management. Curiosity shaped my journey all along\ud83e\udd14!"
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "I have 3+ years of industry experience and built meaningful, intuitive products with a customer-centric mindset. This helped me develop an engineer\u2019s mind, a designer\u2019s intuition, and an entrepreneur\u2019s vision.",
                      " "
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "Currently, I\u2019m working as a Full-stack Developer(MTS-2) in Verizon, India."
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "My expertise includes both front end technologies such as Javascript, React, HTML, CSS, and back end technologies include Java, Python, NodeJs, Express."
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      "And currently I'm in",
                      " ",
                      l.a.createElement(
                        "span",
                        { role: "img", "aria-label": "heart-emoji" },
                        "\ud83d\udc96"
                      ),
                      " ",
                      "love with Product Management."
                    )
                  ),
                  l.a.createElement(
                    c.a,
                    { xs: 12, sm: 12, md: 4, lg: 4 },
                    l.a.createElement("img", {
                      src: j.a,
                      className: "img-fluid",
                      alt: ""
                    })
                  )
                ),
                l.a.createElement(Q, null)
              )
            ),
            l.a.createElement(
              "div",
              { className: "about1" },
              l.a.createElement(Z, null),
              l.a.createElement(D, null),
              l.a.createElement(f, null),
              l.a.createElement(v, null),
              l.a.createElement(K.FollowMe, null)
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=about.3b061aa5.chunk.js.map
