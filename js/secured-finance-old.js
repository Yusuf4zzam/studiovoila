/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var qi = s(() => {
    window.tram = (function (e) {
      function t(c, p) {
        var g = new X.Bare();
        return g.init(c, p);
      }
      function r(c) {
        return c.replace(/[A-Z]/g, function (p) {
          return "-" + p.toLowerCase();
        });
      }
      function n(c) {
        var p = parseInt(c.slice(1), 16),
          g = (p >> 16) & 255,
          y = (p >> 8) & 255,
          h = 255 & p;
        return [g, y, h];
      }
      function i(c, p, g) {
        return (
          "#" + ((1 << 24) | (c << 16) | (p << 8) | g).toString(16).slice(1)
        );
      }
      function a() {}
      function o(c, p) {
        f("Type warning: Expected: [" + c + "] Got: [" + typeof p + "] " + p);
      }
      function u(c, p, g) {
        f("Units do not match [" + c + "]: " + p + ", " + g);
      }
      function l(c, p, g) {
        if ((p !== void 0 && (g = p), c === void 0)) return g;
        var y = g;
        return (
          Ni.test(c) || !tn.test(c)
            ? (y = parseInt(c, 10))
            : tn.test(c) && (y = 1e3 * parseFloat(c)),
          0 > y && (y = 0),
          y === y ? y : g
        );
      }
      function f(c) {
        _e.debug && window && window.console.warn(c);
      }
      function E(c) {
        for (var p = -1, g = c ? c.length : 0, y = []; ++p < g; ) {
          var h = c[p];
          h && y.push(h);
        }
        return y;
      }
      var d = (function (c, p, g) {
          function y(Q) {
            return typeof Q == "object";
          }
          function h(Q) {
            return typeof Q == "function";
          }
          function I() {}
          function W(Q, le) {
            function U() {
              var we = new ne();
              return h(we.init) && we.init.apply(we, arguments), we;
            }
            function ne() {}
            le === g && ((le = Q), (Q = Object)), (U.Bare = ne);
            var ie,
              ye = (I[c] = Q[c]),
              $e = (ne[c] = U[c] = new I());
            return (
              ($e.constructor = U),
              (U.mixin = function (we) {
                return (ne[c] = U[c] = W(U, we)[c]), U;
              }),
              (U.open = function (we) {
                if (
                  ((ie = {}),
                  h(we) ? (ie = we.call(U, $e, ye, U, Q)) : y(we) && (ie = we),
                  y(ie))
                )
                  for (var _r in ie) p.call(ie, _r) && ($e[_r] = ie[_r]);
                return h($e.init) || ($e.init = Q), U;
              }),
              U.open(le)
            );
          }
          return W;
        })("prototype", {}.hasOwnProperty),
        v = {
          ease: [
            "ease",
            function (c, p, g, y) {
              var h = (c /= y) * c,
                I = h * c;
              return (
                p +
                g * (-2.75 * I * h + 11 * h * h + -15.5 * I + 8 * h + 0.25 * c)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (c, p, g, y) {
              var h = (c /= y) * c,
                I = h * c;
              return p + g * (-1 * I * h + 3 * h * h + -3 * I + 2 * h);
            },
          ],
          "ease-out": [
            "ease-out",
            function (c, p, g, y) {
              var h = (c /= y) * c,
                I = h * c;
              return (
                p +
                g * (0.3 * I * h + -1.6 * h * h + 2.2 * I + -1.8 * h + 1.9 * c)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (c, p, g, y) {
              var h = (c /= y) * c,
                I = h * c;
              return p + g * (2 * I * h + -5 * h * h + 2 * I + 2 * h);
            },
          ],
          linear: [
            "linear",
            function (c, p, g, y) {
              return (g * c) / y + p;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (c, p, g, y) {
              return g * (c /= y) * c + p;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (c, p, g, y) {
              return -g * (c /= y) * (c - 2) + p;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (c, p, g, y) {
              return (c /= y / 2) < 1
                ? (g / 2) * c * c + p
                : (-g / 2) * (--c * (c - 2) - 1) + p;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (c, p, g, y) {
              return g * (c /= y) * c * c + p;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (c, p, g, y) {
              return g * ((c = c / y - 1) * c * c + 1) + p;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (c, p, g, y) {
              return (c /= y / 2) < 1
                ? (g / 2) * c * c * c + p
                : (g / 2) * ((c -= 2) * c * c + 2) + p;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (c, p, g, y) {
              return g * (c /= y) * c * c * c + p;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (c, p, g, y) {
              return -g * ((c = c / y - 1) * c * c * c - 1) + p;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (c, p, g, y) {
              return (c /= y / 2) < 1
                ? (g / 2) * c * c * c * c + p
                : (-g / 2) * ((c -= 2) * c * c * c - 2) + p;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (c, p, g, y) {
              return g * (c /= y) * c * c * c * c + p;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (c, p, g, y) {
              return g * ((c = c / y - 1) * c * c * c * c + 1) + p;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (c, p, g, y) {
              return (c /= y / 2) < 1
                ? (g / 2) * c * c * c * c * c + p
                : (g / 2) * ((c -= 2) * c * c * c * c + 2) + p;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (c, p, g, y) {
              return -g * Math.cos((c / y) * (Math.PI / 2)) + g + p;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (c, p, g, y) {
              return g * Math.sin((c / y) * (Math.PI / 2)) + p;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (c, p, g, y) {
              return (-g / 2) * (Math.cos((Math.PI * c) / y) - 1) + p;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (c, p, g, y) {
              return c === 0 ? p : g * Math.pow(2, 10 * (c / y - 1)) + p;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (c, p, g, y) {
              return c === y
                ? p + g
                : g * (-Math.pow(2, (-10 * c) / y) + 1) + p;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (c, p, g, y) {
              return c === 0
                ? p
                : c === y
                ? p + g
                : (c /= y / 2) < 1
                ? (g / 2) * Math.pow(2, 10 * (c - 1)) + p
                : (g / 2) * (-Math.pow(2, -10 * --c) + 2) + p;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (c, p, g, y) {
              return -g * (Math.sqrt(1 - (c /= y) * c) - 1) + p;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (c, p, g, y) {
              return g * Math.sqrt(1 - (c = c / y - 1) * c) + p;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (c, p, g, y) {
              return (c /= y / 2) < 1
                ? (-g / 2) * (Math.sqrt(1 - c * c) - 1) + p
                : (g / 2) * (Math.sqrt(1 - (c -= 2) * c) + 1) + p;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (c, p, g, y, h) {
              return (
                h === void 0 && (h = 1.70158),
                g * (c /= y) * c * ((h + 1) * c - h) + p
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (c, p, g, y, h) {
              return (
                h === void 0 && (h = 1.70158),
                g * ((c = c / y - 1) * c * ((h + 1) * c + h) + 1) + p
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (c, p, g, y, h) {
              return (
                h === void 0 && (h = 1.70158),
                (c /= y / 2) < 1
                  ? (g / 2) * c * c * (((h *= 1.525) + 1) * c - h) + p
                  : (g / 2) *
                      ((c -= 2) * c * (((h *= 1.525) + 1) * c + h) + 2) +
                    p
              );
            },
          ],
        },
        O = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        R = document,
        S = window,
        w = "bkwld-tram",
        A = /[\-\.0-9]/g,
        b = /[A-Z]/,
        T = "number",
        x = /^(rgb|#)/,
        L = /(em|cm|mm|in|pt|pc|px)$/,
        C = /(em|cm|mm|in|pt|pc|px|%)$/,
        G = /(deg|rad|turn)$/,
        H = "unitless",
        j = /(all|none) 0s ease 0s/,
        re = /^(width|height)$/,
        $ = " ",
        P = R.createElement("a"),
        _ = ["Webkit", "Moz", "O", "ms"],
        q = ["-webkit-", "-moz-", "-o-", "-ms-"],
        M = function (c) {
          if (c in P.style) return { dom: c, css: c };
          var p,
            g,
            y = "",
            h = c.split("-");
          for (p = 0; p < h.length; p++)
            y += h[p].charAt(0).toUpperCase() + h[p].slice(1);
          for (p = 0; p < _.length; p++)
            if (((g = _[p] + y), g in P.style))
              return { dom: g, css: q[p] + c };
        },
        F = (t.support = {
          bind: Function.prototype.bind,
          transform: M("transform"),
          transition: M("transition"),
          backface: M("backface-visibility"),
          timing: M("transition-timing-function"),
        });
      if (F.transition) {
        var K = F.timing.dom;
        if (((P.style[K] = v["ease-in-back"][0]), !P.style[K]))
          for (var Z in O) v[Z][0] = O[Z];
      }
      var N = (t.frame = (function () {
          var c =
            S.requestAnimationFrame ||
            S.webkitRequestAnimationFrame ||
            S.mozRequestAnimationFrame ||
            S.oRequestAnimationFrame ||
            S.msRequestAnimationFrame;
          return c && F.bind
            ? c.bind(S)
            : function (p) {
                S.setTimeout(p, 16);
              };
        })()),
        V = (t.now = (function () {
          var c = S.performance,
            p = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
          return p && F.bind
            ? p.bind(c)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        B = d(function (c) {
          function p(k, se) {
            var Ee = E(("" + k).split($)),
              ue = Ee[0];
            se = se || {};
            var Ce = gr[ue];
            if (!Ce) return f("Unsupported property: " + ue);
            if (!se.weak || !this.props[ue]) {
              var Ue = Ce[0],
                Pe = this.props[ue];
              return (
                Pe || (Pe = this.props[ue] = new Ue.Bare()),
                Pe.init(this.$el, Ee, Ce, se),
                Pe
              );
            }
          }
          function g(k, se, Ee) {
            if (k) {
              var ue = typeof k;
              if (
                (se ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ue == "number" && se)
              )
                return (
                  (this.timer = new pe({
                    duration: k,
                    context: this,
                    complete: I,
                  })),
                  void (this.active = !0)
                );
              if (ue == "string" && se) {
                switch (k) {
                  case "hide":
                    U.call(this);
                    break;
                  case "stop":
                    W.call(this);
                    break;
                  case "redraw":
                    ne.call(this);
                    break;
                  default:
                    p.call(this, k, Ee && Ee[1]);
                }
                return I.call(this);
              }
              if (ue == "function") return void k.call(this, this);
              if (ue == "object") {
                var Ce = 0;
                $e.call(
                  this,
                  k,
                  function (Ie, Zy) {
                    Ie.span > Ce && (Ce = Ie.span), Ie.stop(), Ie.animate(Zy);
                  },
                  function (Ie) {
                    "wait" in Ie && (Ce = l(Ie.wait, 0));
                  }
                ),
                  ye.call(this),
                  Ce > 0 &&
                    ((this.timer = new pe({ duration: Ce, context: this })),
                    (this.active = !0),
                    se && (this.timer.complete = I));
                var Ue = this,
                  Pe = !1,
                  rn = {};
                N(function () {
                  $e.call(Ue, k, function (Ie) {
                    Ie.active && ((Pe = !0), (rn[Ie.name] = Ie.nextStyle));
                  }),
                    Pe && Ue.$el.css(rn);
                });
              }
            }
          }
          function y(k) {
            (k = l(k, 0)),
              this.active
                ? this.queue.push({ options: k })
                : ((this.timer = new pe({
                    duration: k,
                    context: this,
                    complete: I,
                  })),
                  (this.active = !0));
          }
          function h(k) {
            return this.active
              ? (this.queue.push({ options: k, args: arguments }),
                void (this.timer.complete = I))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function I() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var k = this.queue.shift();
              g.call(this, k.options, !0, k.args);
            }
          }
          function W(k) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var se;
            typeof k == "string"
              ? ((se = {}), (se[k] = 1))
              : (se = typeof k == "object" && k != null ? k : this.props),
              $e.call(this, se, we),
              ye.call(this);
          }
          function Q(k) {
            W.call(this, k), $e.call(this, k, _r, $y);
          }
          function le(k) {
            typeof k != "string" && (k = "block"), (this.el.style.display = k);
          }
          function U() {
            W.call(this), (this.el.style.display = "none");
          }
          function ne() {
            this.el.offsetHeight;
          }
          function ie() {
            W.call(this), e.removeData(this.el, w), (this.$el = this.el = null);
          }
          function ye() {
            var k,
              se,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (k in this.props)
              (se = this.props[k]), se.active && Ee.push(se.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
                ((this.style = Ee), (this.el.style[F.transition.dom] = Ee));
          }
          function $e(k, se, Ee) {
            var ue,
              Ce,
              Ue,
              Pe,
              rn = se !== we,
              Ie = {};
            for (ue in k)
              (Ue = k[ue]),
                ue in Ye
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[ue] = Ue))
                  : (b.test(ue) && (ue = r(ue)),
                    ue in gr
                      ? (Ie[ue] = Ue)
                      : (Pe || (Pe = {}), (Pe[ue] = Ue)));
            for (ue in Ie) {
              if (((Ue = Ie[ue]), (Ce = this.props[ue]), !Ce)) {
                if (!rn) continue;
                Ce = p.call(this, ue);
              }
              se.call(this, Ce, Ue);
            }
            Ee && Pe && Ee.call(this, Pe);
          }
          function we(k) {
            k.stop();
          }
          function _r(k, se) {
            k.set(se);
          }
          function $y(k) {
            this.$el.css(k);
          }
          function Xe(k, se) {
            c[k] = function () {
              return this.children
                ? Qy.call(this, se, arguments)
                : (this.el && se.apply(this, arguments), this);
            };
          }
          function Qy(k, se) {
            var Ee,
              ue = this.children.length;
            for (Ee = 0; ue > Ee; Ee++) k.apply(this.children[Ee], se);
            return this;
          }
          (c.init = function (k) {
            if (
              ((this.$el = e(k)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              _e.keepInherited && !_e.fallback)
            ) {
              var se = Er(this.el, "transition");
              se && !j.test(se) && (this.upstream = se);
            }
            F.backface &&
              _e.hideBackface &&
              pt(this.el, F.backface.css, "hidden");
          }),
            Xe("add", p),
            Xe("start", g),
            Xe("wait", y),
            Xe("then", h),
            Xe("next", I),
            Xe("stop", W),
            Xe("set", Q),
            Xe("show", le),
            Xe("hide", U),
            Xe("redraw", ne),
            Xe("destroy", ie);
        }),
        X = d(B, function (c) {
          function p(g, y) {
            var h = e.data(g, w) || e.data(g, w, new B.Bare());
            return h.el || h.init(g), y ? h.start(y) : h;
          }
          c.init = function (g, y) {
            var h = e(g);
            if (!h.length) return this;
            if (h.length === 1) return p(h[0], y);
            var I = [];
            return (
              h.each(function (W, Q) {
                I.push(p(Q, y));
              }),
              (this.children = I),
              this
            );
          };
        }),
        D = d(function (c) {
          function p() {
            var I = this.get();
            this.update("auto");
            var W = this.get();
            return this.update(I), W;
          }
          function g(I, W, Q) {
            return W !== void 0 && (Q = W), I in v ? I : Q;
          }
          function y(I) {
            var W = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(I);
            return (W ? i(W[1], W[2], W[3]) : I).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var h = { duration: 500, ease: "ease", delay: 0 };
          (c.init = function (I, W, Q, le) {
            (this.$el = I), (this.el = I[0]);
            var U = W[0];
            Q[2] && (U = Q[2]),
              hr[U] && (U = hr[U]),
              (this.name = U),
              (this.type = Q[1]),
              (this.duration = l(W[1], this.duration, h.duration)),
              (this.ease = g(W[2], this.ease, h.ease)),
              (this.delay = l(W[3], this.delay, h.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = re.test(this.name)),
              (this.unit = le.unit || this.unit || _e.defaultUnit),
              (this.angle = le.angle || this.angle || _e.defaultAngle),
              _e.fallback || le.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    $ +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? $ + v[this.ease][0] : "") +
                    (this.delay ? $ + this.delay + "ms" : "")));
          }),
            (c.set = function (I) {
              (I = this.convert(I, this.type)), this.update(I), this.redraw();
            }),
            (c.transition = function (I) {
              (this.active = !0),
                (I = this.convert(I, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  I == "auto" && (I = p.call(this))),
                (this.nextStyle = I);
            }),
            (c.fallback = function (I) {
              var W =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (I = this.convert(I, this.type)),
                this.auto &&
                  (W == "auto" && (W = this.convert(this.get(), this.type)),
                  I == "auto" && (I = p.call(this))),
                (this.tween = new z({
                  from: W,
                  to: I,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (c.get = function () {
              return Er(this.el, this.name);
            }),
            (c.update = function (I) {
              pt(this.el, this.name, I);
            }),
            (c.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                pt(this.el, this.name, this.get()));
              var I = this.tween;
              I && I.context && I.destroy();
            }),
            (c.convert = function (I, W) {
              if (I == "auto" && this.auto) return I;
              var Q,
                le = typeof I == "number",
                U = typeof I == "string";
              switch (W) {
                case T:
                  if (le) return I;
                  if (U && I.replace(A, "") === "") return +I;
                  Q = "number(unitless)";
                  break;
                case x:
                  if (U) {
                    if (I === "" && this.original) return this.original;
                    if (W.test(I))
                      return I.charAt(0) == "#" && I.length == 7 ? I : y(I);
                  }
                  Q = "hex or rgb string";
                  break;
                case L:
                  if (le) return I + this.unit;
                  if (U && W.test(I)) return I;
                  Q = "number(px) or string(unit)";
                  break;
                case C:
                  if (le) return I + this.unit;
                  if (U && W.test(I)) return I;
                  Q = "number(px) or string(unit or %)";
                  break;
                case G:
                  if (le) return I + this.angle;
                  if (U && W.test(I)) return I;
                  Q = "number(deg) or string(angle)";
                  break;
                case H:
                  if (le || (U && C.test(I))) return I;
                  Q = "number(unitless) or string(unit or %)";
              }
              return o(Q, I), I;
            }),
            (c.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        Y = d(D, function (c, p) {
          c.init = function () {
            p.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), x));
          };
        }),
        ae = d(D, function (c, p) {
          (c.init = function () {
            p.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (c.get = function () {
              return this.$el[this.name]();
            }),
            (c.update = function (g) {
              this.$el[this.name](g);
            });
        }),
        oe = d(D, function (c, p) {
          function g(y, h) {
            var I, W, Q, le, U;
            for (I in y)
              (le = Ye[I]),
                (Q = le[0]),
                (W = le[1] || I),
                (U = this.convert(y[I], Q)),
                h.call(this, W, U, Q);
          }
          (c.init = function () {
            p.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Ye.perspective &&
                  _e.perspective &&
                  ((this.current.perspective = _e.perspective),
                  pt(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (c.set = function (y) {
              g.call(this, y, function (h, I) {
                this.current[h] = I;
              }),
                pt(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (c.transition = function (y) {
              var h = this.values(y);
              this.tween = new Ft({
                current: this.current,
                values: h,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var I,
                W = {};
              for (I in this.current) W[I] = I in h ? h[I] : this.current[I];
              (this.active = !0), (this.nextStyle = this.style(W));
            }),
            (c.fallback = function (y) {
              var h = this.values(y);
              this.tween = new Ft({
                current: this.current,
                values: h,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (c.update = function () {
              pt(this.el, this.name, this.style(this.current));
            }),
            (c.style = function (y) {
              var h,
                I = "";
              for (h in y) I += h + "(" + y[h] + ") ";
              return I;
            }),
            (c.values = function (y) {
              var h,
                I = {};
              return (
                g.call(this, y, function (W, Q, le) {
                  (I[W] = Q),
                    this.current[W] === void 0 &&
                      ((h = 0),
                      ~W.indexOf("scale") && (h = 1),
                      (this.current[W] = this.convert(h, le)));
                }),
                I
              );
            });
        }),
        z = d(function (c) {
          function p(U) {
            Q.push(U) === 1 && N(g);
          }
          function g() {
            var U,
              ne,
              ie,
              ye = Q.length;
            if (ye)
              for (N(g), ne = V(), U = ye; U--; )
                (ie = Q[U]), ie && ie.render(ne);
          }
          function y(U) {
            var ne,
              ie = e.inArray(U, Q);
            ie >= 0 &&
              ((ne = Q.slice(ie + 1)),
              (Q.length = ie),
              ne.length && (Q = Q.concat(ne)));
          }
          function h(U) {
            return Math.round(U * le) / le;
          }
          function I(U, ne, ie) {
            return i(
              U[0] + ie * (ne[0] - U[0]),
              U[1] + ie * (ne[1] - U[1]),
              U[2] + ie * (ne[2] - U[2])
            );
          }
          var W = { ease: v.ease[1], from: 0, to: 1 };
          (c.init = function (U) {
            (this.duration = U.duration || 0), (this.delay = U.delay || 0);
            var ne = U.ease || W.ease;
            v[ne] && (ne = v[ne][1]),
              typeof ne != "function" && (ne = W.ease),
              (this.ease = ne),
              (this.update = U.update || a),
              (this.complete = U.complete || a),
              (this.context = U.context || this),
              (this.name = U.name);
            var ie = U.from,
              ye = U.to;
            ie === void 0 && (ie = W.from),
              ye === void 0 && (ye = W.to),
              (this.unit = U.unit || ""),
              typeof ie == "number" && typeof ye == "number"
                ? ((this.begin = ie), (this.change = ye - ie))
                : this.format(ye, ie),
              (this.value = this.begin + this.unit),
              (this.start = V()),
              U.autoplay !== !1 && this.play();
          }),
            (c.play = function () {
              this.active ||
                (this.start || (this.start = V()), (this.active = !0), p(this));
            }),
            (c.stop = function () {
              this.active && ((this.active = !1), y(this));
            }),
            (c.render = function (U) {
              var ne,
                ie = U - this.start;
              if (this.delay) {
                if (ie <= this.delay) return;
                ie -= this.delay;
              }
              if (ie < this.duration) {
                var ye = this.ease(ie, 0, 1, this.duration);
                return (
                  (ne = this.startRGB
                    ? I(this.startRGB, this.endRGB, ye)
                    : h(this.begin + ye * this.change)),
                  (this.value = ne + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ne = this.endHex || this.begin + this.change),
                (this.value = ne + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (c.format = function (U, ne) {
              if (((ne += ""), (U += ""), U.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ne)),
                  (this.endRGB = n(U)),
                  (this.endHex = U),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ie = ne.replace(A, ""),
                  ye = U.replace(A, "");
                ie !== ye && u("tween", ne, U), (this.unit = ie);
              }
              (ne = parseFloat(ne)),
                (U = parseFloat(U)),
                (this.begin = this.value = ne),
                (this.change = U - ne);
            }),
            (c.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = a);
            });
          var Q = [],
            le = 1e3;
        }),
        pe = d(z, function (c) {
          (c.init = function (p) {
            (this.duration = p.duration || 0),
              (this.complete = p.complete || a),
              (this.context = p.context),
              this.play();
          }),
            (c.render = function (p) {
              var g = p - this.start;
              g < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Ft = d(z, function (c, p) {
          (c.init = function (g) {
            (this.context = g.context),
              (this.update = g.update),
              (this.tweens = []),
              (this.current = g.current);
            var y, h;
            for (y in g.values)
              (h = g.values[y]),
                this.current[y] !== h &&
                  this.tweens.push(
                    new z({
                      name: y,
                      from: this.current[y],
                      to: h,
                      duration: g.duration,
                      delay: g.delay,
                      ease: g.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (c.render = function (g) {
              var y,
                h,
                I = this.tweens.length,
                W = !1;
              for (y = I; y--; )
                (h = this.tweens[y]),
                  h.context &&
                    (h.render(g), (this.current[h.name] = h.value), (W = !0));
              return W
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (c.destroy = function () {
              if ((p.destroy.call(this), this.tweens)) {
                var g,
                  y = this.tweens.length;
                for (g = y; g--; ) this.tweens[g].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        _e = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !F.transition,
          agentTests: [],
        });
      (t.fallback = function (c) {
        if (!F.transition) return (_e.fallback = !0);
        _e.agentTests.push("(" + c + ")");
        var p = new RegExp(_e.agentTests.join("|"), "i");
        _e.fallback = p.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (c) {
          return new z(c);
        }),
        (t.delay = function (c, p, g) {
          return new pe({ complete: p, duration: c, context: g });
        }),
        (e.fn.tram = function (c) {
          return t.call(null, this, c);
        });
      var pt = e.style,
        Er = e.css,
        hr = { transform: F.transform && F.transform.css },
        gr = {
          color: [Y, x],
          background: [Y, x, "background-color"],
          "outline-color": [Y, x],
          "border-color": [Y, x],
          "border-top-color": [Y, x],
          "border-right-color": [Y, x],
          "border-bottom-color": [Y, x],
          "border-left-color": [Y, x],
          "border-width": [D, L],
          "border-top-width": [D, L],
          "border-right-width": [D, L],
          "border-bottom-width": [D, L],
          "border-left-width": [D, L],
          "border-spacing": [D, L],
          "letter-spacing": [D, L],
          margin: [D, L],
          "margin-top": [D, L],
          "margin-right": [D, L],
          "margin-bottom": [D, L],
          "margin-left": [D, L],
          padding: [D, L],
          "padding-top": [D, L],
          "padding-right": [D, L],
          "padding-bottom": [D, L],
          "padding-left": [D, L],
          "outline-width": [D, L],
          opacity: [D, T],
          top: [D, C],
          right: [D, C],
          bottom: [D, C],
          left: [D, C],
          "font-size": [D, C],
          "text-indent": [D, C],
          "word-spacing": [D, C],
          width: [D, C],
          "min-width": [D, C],
          "max-width": [D, C],
          height: [D, C],
          "min-height": [D, C],
          "max-height": [D, C],
          "line-height": [D, H],
          "scroll-top": [ae, T, "scrollTop"],
          "scroll-left": [ae, T, "scrollLeft"],
        },
        Ye = {};
      F.transform &&
        ((gr.transform = [oe]),
        (Ye = {
          x: [C, "translateX"],
          y: [C, "translateY"],
          rotate: [G],
          rotateX: [G],
          rotateY: [G],
          scale: [T],
          scaleX: [T],
          scaleY: [T],
          skew: [G],
          skewX: [G],
          skewY: [G],
        })),
        F.transform &&
          F.backface &&
          ((Ye.z = [C, "translateZ"]),
          (Ye.rotateZ = [G]),
          (Ye.scaleZ = [T]),
          (Ye.perspective = [L]));
      var Ni = /ms/,
        tn = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var vs = s((HV, ps) => {
    var Jy = window.$,
      eI = qi() && Jy.tram;
    ps.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        a = r.push,
        o = r.slice,
        u = r.concat,
        l = n.toString,
        f = n.hasOwnProperty,
        E = r.forEach,
        d = r.map,
        v = r.reduce,
        O = r.reduceRight,
        R = r.filter,
        S = r.every,
        w = r.some,
        A = r.indexOf,
        b = r.lastIndexOf,
        T = Array.isArray,
        x = Object.keys,
        L = i.bind,
        C =
          (e.each =
          e.forEach =
            function (_, q, M) {
              if (_ == null) return _;
              if (E && _.forEach === E) _.forEach(q, M);
              else if (_.length === +_.length) {
                for (var F = 0, K = _.length; F < K; F++)
                  if (q.call(M, _[F], F, _) === t) return;
              } else
                for (var Z = e.keys(_), F = 0, K = Z.length; F < K; F++)
                  if (q.call(M, _[Z[F]], Z[F], _) === t) return;
              return _;
            });
      (e.map = e.collect =
        function (_, q, M) {
          var F = [];
          return _ == null
            ? F
            : d && _.map === d
            ? _.map(q, M)
            : (C(_, function (K, Z, N) {
                F.push(q.call(M, K, Z, N));
              }),
              F);
        }),
        (e.find = e.detect =
          function (_, q, M) {
            var F;
            return (
              G(_, function (K, Z, N) {
                if (q.call(M, K, Z, N)) return (F = K), !0;
              }),
              F
            );
          }),
        (e.filter = e.select =
          function (_, q, M) {
            var F = [];
            return _ == null
              ? F
              : R && _.filter === R
              ? _.filter(q, M)
              : (C(_, function (K, Z, N) {
                  q.call(M, K, Z, N) && F.push(K);
                }),
                F);
          });
      var G =
        (e.some =
        e.any =
          function (_, q, M) {
            q || (q = e.identity);
            var F = !1;
            return _ == null
              ? F
              : w && _.some === w
              ? _.some(q, M)
              : (C(_, function (K, Z, N) {
                  if (F || (F = q.call(M, K, Z, N))) return t;
                }),
                !!F);
          });
      (e.contains = e.include =
        function (_, q) {
          return _ == null
            ? !1
            : A && _.indexOf === A
            ? _.indexOf(q) != -1
            : G(_, function (M) {
                return M === q;
              });
        }),
        (e.delay = function (_, q) {
          var M = o.call(arguments, 2);
          return setTimeout(function () {
            return _.apply(null, M);
          }, q);
        }),
        (e.defer = function (_) {
          return e.delay.apply(e, [_, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (_) {
          var q, M, F;
          return function () {
            q ||
              ((q = !0),
              (M = arguments),
              (F = this),
              eI.frame(function () {
                (q = !1), _.apply(F, M);
              }));
          };
        }),
        (e.debounce = function (_, q, M) {
          var F,
            K,
            Z,
            N,
            V,
            B = function () {
              var X = e.now() - N;
              X < q
                ? (F = setTimeout(B, q - X))
                : ((F = null), M || ((V = _.apply(Z, K)), (Z = K = null)));
            };
          return function () {
            (Z = this), (K = arguments), (N = e.now());
            var X = M && !F;
            return (
              F || (F = setTimeout(B, q)),
              X && ((V = _.apply(Z, K)), (Z = K = null)),
              V
            );
          };
        }),
        (e.defaults = function (_) {
          if (!e.isObject(_)) return _;
          for (var q = 1, M = arguments.length; q < M; q++) {
            var F = arguments[q];
            for (var K in F) _[K] === void 0 && (_[K] = F[K]);
          }
          return _;
        }),
        (e.keys = function (_) {
          if (!e.isObject(_)) return [];
          if (x) return x(_);
          var q = [];
          for (var M in _) e.has(_, M) && q.push(M);
          return q;
        }),
        (e.has = function (_, q) {
          return f.call(_, q);
        }),
        (e.isObject = function (_) {
          return _ === Object(_);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var H = /(.)^/,
        j = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        re = /\\|'|\r|\n|\u2028|\u2029/g,
        $ = function (_) {
          return "\\" + j[_];
        },
        P = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (_, q, M) {
          !q && M && (q = M), (q = e.defaults({}, q, e.templateSettings));
          var F = RegExp(
              [
                (q.escape || H).source,
                (q.interpolate || H).source,
                (q.evaluate || H).source,
              ].join("|") + "|$",
              "g"
            ),
            K = 0,
            Z = "__p+='";
          _.replace(F, function (X, D, Y, ae, oe) {
            return (
              (Z += _.slice(K, oe).replace(re, $)),
              (K = oe + X.length),
              D
                ? (Z +=
                    `'+
    ((__t=(` +
                    D +
                    `))==null?'':_.escape(__t))+
    '`)
                : Y
                ? (Z +=
                    `'+
    ((__t=(` +
                    Y +
                    `))==null?'':__t)+
    '`)
                : ae &&
                  (Z +=
                    `';
    ` +
                    ae +
                    `
    __p+='`),
              X
            );
          }),
            (Z += `';
    `);
          var N = q.variable;
          if (N) {
            if (!P.test(N))
              throw new Error("variable is not a bare identifier: " + N);
          } else
            (Z =
              `with(obj||{}){
    ` +
              Z +
              `}
    `),
              (N = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            Z +
            `return __p;
    `;
          var V;
          try {
            V = new Function(q.variable || "obj", "_", Z);
          } catch (X) {
            throw ((X.source = Z), X);
          }
          var B = function (X) {
            return V.call(this, X, e);
          };
          return (
            (B.source =
              "function(" +
              N +
              `){
    ` +
              Z +
              "}"),
            B
          );
        }),
        e
      );
    })();
  });
  var st = s((jV, ms) => {
    var ce = {},
      Gt = {},
      Xt = [],
      Pi = window.Webflow || [],
      vt = window.jQuery,
      Be = vt(window),
      tI = vt(document),
      Qe = vt.isFunction,
      Ve = (ce._ = vs()),
      hs = (ce.tram = qi() && vt.tram),
      an = !1,
      xi = !1;
    hs.config.hideBackface = !1;
    hs.config.keepInherited = !0;
    ce.define = function (e, t, r) {
      Gt[e] && _s(Gt[e]);
      var n = (Gt[e] = t(vt, Ve, r) || {});
      return gs(n), n;
    };
    ce.require = function (e) {
      return Gt[e];
    };
    function gs(e) {
      ce.env() &&
        (Qe(e.design) && Be.on("__wf_design", e.design),
        Qe(e.preview) && Be.on("__wf_preview", e.preview)),
        Qe(e.destroy) && Be.on("__wf_destroy", e.destroy),
        e.ready && Qe(e.ready) && rI(e);
    }
    function rI(e) {
      if (an) {
        e.ready();
        return;
      }
      Ve.contains(Xt, e.ready) || Xt.push(e.ready);
    }
    function _s(e) {
      Qe(e.design) && Be.off("__wf_design", e.design),
        Qe(e.preview) && Be.off("__wf_preview", e.preview),
        Qe(e.destroy) && Be.off("__wf_destroy", e.destroy),
        e.ready && Qe(e.ready) && nI(e);
    }
    function nI(e) {
      Xt = Ve.filter(Xt, function (t) {
        return t !== e.ready;
      });
    }
    ce.push = function (e) {
      if (an) {
        Qe(e) && e();
        return;
      }
      Pi.push(e);
    };
    ce.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var nn = navigator.userAgent.toLowerCase(),
      ys = (ce.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      iI = (ce.env.chrome =
        /chrome/.test(nn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(nn.match(/chrome\/(\d+)\./)[1], 10)),
      aI = (ce.env.ios = /(ipod|iphone|ipad)/.test(nn));
    ce.env.safari = /safari/.test(nn) && !iI && !aI;
    var Li;
    ys &&
      tI.on("touchstart mousedown", function (e) {
        Li = e.target;
      });
    ce.validClick = ys
      ? function (e) {
          return e === Li || vt.contains(e, Li);
        }
      : function () {
          return !0;
        };
    var Is = "resize.webflow orientationchange.webflow load.webflow",
      oI = "scroll.webflow " + Is;
    ce.resize = Mi(Be, Is);
    ce.scroll = Mi(Be, oI);
    ce.redraw = Mi();
    function Mi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ve.throttle(function (i) {
          Ve.each(r, function (a) {
            a(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ve.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ve.filter(r, function (a) {
            return a !== i;
          });
        }),
        n
      );
    }
    ce.location = function (e) {
      window.location = e;
    };
    ce.env() && (ce.location = function () {});
    ce.ready = function () {
      (an = !0), xi ? sI() : Ve.each(Xt, Es), Ve.each(Pi, Es), ce.resize.up();
    };
    function Es(e) {
      Qe(e) && e();
    }
    function sI() {
      (xi = !1), Ve.each(Gt, gs);
    }
    var St;
    ce.load = function (e) {
      St.then(e);
    };
    function Ts() {
      St && (St.reject(), Be.off("load", St.resolve)),
        (St = new vt.Deferred()),
        Be.on("load", St.resolve);
    }
    ce.destroy = function (e) {
      (e = e || {}),
        (xi = !0),
        Be.triggerHandler("__wf_destroy"),
        e.domready != null && (an = e.domready),
        Ve.each(Gt, _s),
        ce.resize.off(),
        ce.scroll.off(),
        ce.redraw.off(),
        (Xt = []),
        (Pi = []),
        St.state() === "pending" && Ts();
    };
    vt(ce.ready);
    Ts();
    ms.exports = window.Webflow = ce;
  });
  var As = s((kV, Ss) => {
    var Os = st();
    Os.define(
      "brand",
      (Ss.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          a = ".w-webflow-badge",
          o = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          l =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var O = n.attr("data-wf-status"),
            R = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(R) && o.hostname !== R && (O = !0),
            O &&
              !u &&
              ((f = f || d()),
              v(),
              setTimeout(v, 500),
              e(r).off(l, E).on(l, E));
        };
        function E() {
          var O =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", O ? "display: none !important;" : "");
        }
        function d() {
          var O = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            R = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            S = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return O.append(R, S), O[0];
        }
        function v() {
          var O = i.children(a),
            R = O.length && O.get(0) === f,
            S = Os.env("editor");
          if (R) {
            S && O.remove();
            return;
          }
          O.length && O.remove(), S || i.append(f);
        }
        return t;
      })
    );
  });
  var Rs = s((KV, bs) => {
    var uI = st();
    uI.define(
      "focus-visible",
      (bs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            a = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(T) {
            return !!(
              T &&
              T !== document &&
              T.nodeName !== "HTML" &&
              T.nodeName !== "BODY" &&
              "classList" in T &&
              "contains" in T.classList
            );
          }
          function l(T) {
            var x = T.type,
              L = T.tagName;
            return !!(
              (L === "INPUT" && o[x] && !T.readOnly) ||
              (L === "TEXTAREA" && !T.readOnly) ||
              T.isContentEditable
            );
          }
          function f(T) {
            T.getAttribute("data-wf-focus-visible") ||
              T.setAttribute("data-wf-focus-visible", "true");
          }
          function E(T) {
            T.getAttribute("data-wf-focus-visible") &&
              T.removeAttribute("data-wf-focus-visible");
          }
          function d(T) {
            T.metaKey ||
              T.altKey ||
              T.ctrlKey ||
              (u(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function v() {
            n = !1;
          }
          function O(T) {
            u(T.target) && (n || l(T.target)) && f(T.target);
          }
          function R(T) {
            u(T.target) &&
              T.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(a),
              (a = window.setTimeout(function () {
                i = !1;
              }, 100)),
              E(T.target));
          }
          function S() {
            document.visibilityState === "hidden" && (i && (n = !0), w());
          }
          function w() {
            document.addEventListener("mousemove", b),
              document.addEventListener("mousedown", b),
              document.addEventListener("mouseup", b),
              document.addEventListener("pointermove", b),
              document.addEventListener("pointerdown", b),
              document.addEventListener("pointerup", b),
              document.addEventListener("touchmove", b),
              document.addEventListener("touchstart", b),
              document.addEventListener("touchend", b);
          }
          function A() {
            document.removeEventListener("mousemove", b),
              document.removeEventListener("mousedown", b),
              document.removeEventListener("mouseup", b),
              document.removeEventListener("pointermove", b),
              document.removeEventListener("pointerdown", b),
              document.removeEventListener("pointerup", b),
              document.removeEventListener("touchmove", b),
              document.removeEventListener("touchstart", b),
              document.removeEventListener("touchend", b);
          }
          function b(T) {
            (T.target.nodeName && T.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), A());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", v, !0),
            document.addEventListener("pointerdown", v, !0),
            document.addEventListener("touchstart", v, !0),
            document.addEventListener("visibilitychange", S, !0),
            w(),
            r.addEventListener("focus", O, !0),
            r.addEventListener("blur", R, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ns = s((zV, Cs) => {
    var ws = st();
    ws.define(
      "focus",
      (Cs.exports = function () {
        var e = [],
          t = !1;
        function r(o) {
          t &&
            (o.preventDefault(),
            o.stopPropagation(),
            o.stopImmediatePropagation(),
            e.unshift(o));
        }
        function n(o) {
          var u = o.target,
            l = u.tagName;
          return (
            (/^a$/i.test(l) && u.href != null) ||
            (/^(button|textarea)$/i.test(l) && u.disabled !== !0) ||
            (/^input$/i.test(l) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(l) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(l) ||
            (/^video$/i.test(l) && u.controls === !0)
          );
        }
        function i(o) {
          n(o) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, o.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function a() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            ws.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: a };
      })
    );
  });
  var Ps = s((YV, Ls) => {
    "use strict";
    var Di = window.jQuery,
      Ze = {},
      on = [],
      qs = ".w-ix",
      sn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Di(t).triggerHandler(Ze.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Di(t).triggerHandler(Ze.types.OUTRO));
        },
      };
    Ze.triggers = {};
    Ze.types = { INTRO: "w-ix-intro" + qs, OUTRO: "w-ix-outro" + qs };
    Ze.init = function () {
      for (var e = on.length, t = 0; t < e; t++) {
        var r = on[t];
        r[0](0, r[1]);
      }
      (on = []), Di.extend(Ze.triggers, sn);
    };
    Ze.async = function () {
      for (var e in sn) {
        var t = sn[e];
        sn.hasOwnProperty(e) &&
          (Ze.triggers[e] = function (r, n) {
            on.push([t, n]);
          });
      }
    };
    Ze.async();
    Ls.exports = Ze;
  });
  var Fs = s(($V, Ds) => {
    "use strict";
    var Fi = Ps();
    function xs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var cI = window.jQuery,
      un = {},
      Ms = ".w-ix",
      lI = {
        reset: function (e, t) {
          Fi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Fi.triggers.intro(e, t), xs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Fi.triggers.outro(e, t), xs(t, "COMPONENT_INACTIVE");
        },
      };
    un.triggers = {};
    un.types = { INTRO: "w-ix-intro" + Ms, OUTRO: "w-ix-outro" + Ms };
    cI.extend(un.triggers, lI);
    Ds.exports = un;
  });
  var Gs = s((QV, ut) => {
    function Gi(e) {
      return (
        (ut.exports = Gi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (ut.exports.__esModule = !0),
        (ut.exports.default = ut.exports),
        Gi(e)
      );
    }
    (ut.exports = Gi),
      (ut.exports.__esModule = !0),
      (ut.exports.default = ut.exports);
  });
  var Ut = s((ZV, yr) => {
    var fI = Gs().default;
    function Xs(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Xs = function (i) {
        return i ? r : t;
      })(e);
    }
    function dI(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (fI(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Xs(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(n, a, o)
            : (n[a] = e[a]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (yr.exports = dI),
      (yr.exports.__esModule = !0),
      (yr.exports.default = yr.exports);
  });
  var Je = s((JV, Ir) => {
    function pI(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Ir.exports = pI),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var ve = s((eB, Us) => {
    var cn = function (e) {
      return e && e.Math == Math && e;
    };
    Us.exports =
      cn(typeof globalThis == "object" && globalThis) ||
      cn(typeof window == "object" && window) ||
      cn(typeof self == "object" && self) ||
      cn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Vt = s((tB, Vs) => {
    Vs.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var At = s((rB, Bs) => {
    var vI = Vt();
    Bs.exports = !vI(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var ln = s((nB, Ws) => {
    var Tr = Function.prototype.call;
    Ws.exports = Tr.bind
      ? Tr.bind(Tr)
      : function () {
          return Tr.apply(Tr, arguments);
        };
  });
  var Ks = s((ks) => {
    "use strict";
    var Hs = {}.propertyIsEnumerable,
      js = Object.getOwnPropertyDescriptor,
      EI = js && !Hs.call({ 1: 2 }, 1);
    ks.f = EI
      ? function (t) {
          var r = js(this, t);
          return !!r && r.enumerable;
        }
      : Hs;
  });
  var Xi = s((aB, zs) => {
    zs.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var We = s((oB, $s) => {
    var Ys = Function.prototype,
      Ui = Ys.bind,
      Vi = Ys.call,
      hI = Ui && Ui.bind(Vi);
    $s.exports = Ui
      ? function (e) {
          return e && hI(Vi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Vi.apply(e, arguments);
            }
          );
        };
  });
  var Js = s((sB, Zs) => {
    var Qs = We(),
      gI = Qs({}.toString),
      _I = Qs("".slice);
    Zs.exports = function (e) {
      return _I(gI(e), 8, -1);
    };
  });
  var tu = s((uB, eu) => {
    var yI = ve(),
      II = We(),
      TI = Vt(),
      mI = Js(),
      Bi = yI.Object,
      OI = II("".split);
    eu.exports = TI(function () {
      return !Bi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return mI(e) == "String" ? OI(e, "") : Bi(e);
        }
      : Bi;
  });
  var Wi = s((cB, ru) => {
    var SI = ve(),
      AI = SI.TypeError;
    ru.exports = function (e) {
      if (e == null) throw AI("Can't call method on " + e);
      return e;
    };
  });
  var mr = s((lB, nu) => {
    var bI = tu(),
      RI = Wi();
    nu.exports = function (e) {
      return bI(RI(e));
    };
  });
  var et = s((fB, iu) => {
    iu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Bt = s((dB, au) => {
    var wI = et();
    au.exports = function (e) {
      return typeof e == "object" ? e !== null : wI(e);
    };
  });
  var Or = s((pB, ou) => {
    var Hi = ve(),
      CI = et(),
      NI = function (e) {
        return CI(e) ? e : void 0;
      };
    ou.exports = function (e, t) {
      return arguments.length < 2 ? NI(Hi[e]) : Hi[e] && Hi[e][t];
    };
  });
  var uu = s((vB, su) => {
    var qI = We();
    su.exports = qI({}.isPrototypeOf);
  });
  var lu = s((EB, cu) => {
    var LI = Or();
    cu.exports = LI("navigator", "userAgent") || "";
  });
  var gu = s((hB, hu) => {
    var Eu = ve(),
      ji = lu(),
      fu = Eu.process,
      du = Eu.Deno,
      pu = (fu && fu.versions) || (du && du.version),
      vu = pu && pu.v8,
      He,
      fn;
    vu &&
      ((He = vu.split(".")),
      (fn = He[0] > 0 && He[0] < 4 ? 1 : +(He[0] + He[1])));
    !fn &&
      ji &&
      ((He = ji.match(/Edge\/(\d+)/)),
      (!He || He[1] >= 74) &&
        ((He = ji.match(/Chrome\/(\d+)/)), He && (fn = +He[1])));
    hu.exports = fn;
  });
  var ki = s((gB, yu) => {
    var _u = gu(),
      PI = Vt();
    yu.exports =
      !!Object.getOwnPropertySymbols &&
      !PI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && _u && _u < 41)
        );
      });
  });
  var Ki = s((_B, Iu) => {
    var xI = ki();
    Iu.exports = xI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var zi = s((yB, Tu) => {
    var MI = ve(),
      DI = Or(),
      FI = et(),
      GI = uu(),
      XI = Ki(),
      UI = MI.Object;
    Tu.exports = XI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = DI("Symbol");
          return FI(t) && GI(t.prototype, UI(e));
        };
  });
  var Ou = s((IB, mu) => {
    var VI = ve(),
      BI = VI.String;
    mu.exports = function (e) {
      try {
        return BI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Au = s((TB, Su) => {
    var WI = ve(),
      HI = et(),
      jI = Ou(),
      kI = WI.TypeError;
    Su.exports = function (e) {
      if (HI(e)) return e;
      throw kI(jI(e) + " is not a function");
    };
  });
  var Ru = s((mB, bu) => {
    var KI = Au();
    bu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : KI(r);
    };
  });
  var Cu = s((OB, wu) => {
    var zI = ve(),
      Yi = ln(),
      $i = et(),
      Qi = Bt(),
      YI = zI.TypeError;
    wu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e)))) ||
        ($i((r = e.valueOf)) && !Qi((n = Yi(r, e)))) ||
        (t !== "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e))))
      )
        return n;
      throw YI("Can't convert object to primitive value");
    };
  });
  var qu = s((SB, Nu) => {
    Nu.exports = !1;
  });
  var dn = s((AB, Pu) => {
    var Lu = ve(),
      $I = Object.defineProperty;
    Pu.exports = function (e, t) {
      try {
        $I(Lu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Lu[e] = t;
      }
      return t;
    };
  });
  var pn = s((bB, Mu) => {
    var QI = ve(),
      ZI = dn(),
      xu = "__core-js_shared__",
      JI = QI[xu] || ZI(xu, {});
    Mu.exports = JI;
  });
  var Zi = s((RB, Fu) => {
    var eT = qu(),
      Du = pn();
    (Fu.exports = function (e, t) {
      return Du[e] || (Du[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: eT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Xu = s((wB, Gu) => {
    var tT = ve(),
      rT = Wi(),
      nT = tT.Object;
    Gu.exports = function (e) {
      return nT(rT(e));
    };
  });
  var Et = s((CB, Uu) => {
    var iT = We(),
      aT = Xu(),
      oT = iT({}.hasOwnProperty);
    Uu.exports =
      Object.hasOwn ||
      function (t, r) {
        return oT(aT(t), r);
      };
  });
  var Ji = s((NB, Vu) => {
    var sT = We(),
      uT = 0,
      cT = Math.random(),
      lT = sT((1).toString);
    Vu.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + lT(++uT + cT, 36);
    };
  });
  var ea = s((qB, ku) => {
    var fT = ve(),
      dT = Zi(),
      Bu = Et(),
      pT = Ji(),
      Wu = ki(),
      ju = Ki(),
      Wt = dT("wks"),
      bt = fT.Symbol,
      Hu = bt && bt.for,
      vT = ju ? bt : (bt && bt.withoutSetter) || pT;
    ku.exports = function (e) {
      if (!Bu(Wt, e) || !(Wu || typeof Wt[e] == "string")) {
        var t = "Symbol." + e;
        Wu && Bu(bt, e)
          ? (Wt[e] = bt[e])
          : ju && Hu
          ? (Wt[e] = Hu(t))
          : (Wt[e] = vT(t));
      }
      return Wt[e];
    };
  });
  var $u = s((LB, Yu) => {
    var ET = ve(),
      hT = ln(),
      Ku = Bt(),
      zu = zi(),
      gT = Ru(),
      _T = Cu(),
      yT = ea(),
      IT = ET.TypeError,
      TT = yT("toPrimitive");
    Yu.exports = function (e, t) {
      if (!Ku(e) || zu(e)) return e;
      var r = gT(e, TT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = hT(r, e, t)), !Ku(n) || zu(n))
        )
          return n;
        throw IT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), _T(e, t);
    };
  });
  var ta = s((PB, Qu) => {
    var mT = $u(),
      OT = zi();
    Qu.exports = function (e) {
      var t = mT(e, "string");
      return OT(t) ? t : t + "";
    };
  });
  var na = s((xB, Ju) => {
    var ST = ve(),
      Zu = Bt(),
      ra = ST.document,
      AT = Zu(ra) && Zu(ra.createElement);
    Ju.exports = function (e) {
      return AT ? ra.createElement(e) : {};
    };
  });
  var ia = s((MB, ec) => {
    var bT = At(),
      RT = Vt(),
      wT = na();
    ec.exports =
      !bT &&
      !RT(function () {
        return (
          Object.defineProperty(wT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var aa = s((rc) => {
    var CT = At(),
      NT = ln(),
      qT = Ks(),
      LT = Xi(),
      PT = mr(),
      xT = ta(),
      MT = Et(),
      DT = ia(),
      tc = Object.getOwnPropertyDescriptor;
    rc.f = CT
      ? tc
      : function (t, r) {
          if (((t = PT(t)), (r = xT(r)), DT))
            try {
              return tc(t, r);
            } catch {}
          if (MT(t, r)) return LT(!NT(qT.f, t, r), t[r]);
        };
  });
  var Sr = s((FB, ic) => {
    var nc = ve(),
      FT = Bt(),
      GT = nc.String,
      XT = nc.TypeError;
    ic.exports = function (e) {
      if (FT(e)) return e;
      throw XT(GT(e) + " is not an object");
    };
  });
  var Ar = s((sc) => {
    var UT = ve(),
      VT = At(),
      BT = ia(),
      ac = Sr(),
      WT = ta(),
      HT = UT.TypeError,
      oc = Object.defineProperty;
    sc.f = VT
      ? oc
      : function (t, r, n) {
          if ((ac(t), (r = WT(r)), ac(n), BT))
            try {
              return oc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw HT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var vn = s((XB, uc) => {
    var jT = At(),
      kT = Ar(),
      KT = Xi();
    uc.exports = jT
      ? function (e, t, r) {
          return kT.f(e, t, KT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var sa = s((UB, cc) => {
    var zT = We(),
      YT = et(),
      oa = pn(),
      $T = zT(Function.toString);
    YT(oa.inspectSource) ||
      (oa.inspectSource = function (e) {
        return $T(e);
      });
    cc.exports = oa.inspectSource;
  });
  var dc = s((VB, fc) => {
    var QT = ve(),
      ZT = et(),
      JT = sa(),
      lc = QT.WeakMap;
    fc.exports = ZT(lc) && /native code/.test(JT(lc));
  });
  var ua = s((BB, vc) => {
    var em = Zi(),
      tm = Ji(),
      pc = em("keys");
    vc.exports = function (e) {
      return pc[e] || (pc[e] = tm(e));
    };
  });
  var En = s((WB, Ec) => {
    Ec.exports = {};
  });
  var Tc = s((HB, Ic) => {
    var rm = dc(),
      yc = ve(),
      ca = We(),
      nm = Bt(),
      im = vn(),
      la = Et(),
      fa = pn(),
      am = ua(),
      om = En(),
      hc = "Object already initialized",
      pa = yc.TypeError,
      sm = yc.WeakMap,
      hn,
      br,
      gn,
      um = function (e) {
        return gn(e) ? br(e) : hn(e, {});
      },
      cm = function (e) {
        return function (t) {
          var r;
          if (!nm(t) || (r = br(t)).type !== e)
            throw pa("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    rm || fa.state
      ? ((ht = fa.state || (fa.state = new sm())),
        (gc = ca(ht.get)),
        (da = ca(ht.has)),
        (_c = ca(ht.set)),
        (hn = function (e, t) {
          if (da(ht, e)) throw new pa(hc);
          return (t.facade = e), _c(ht, e, t), t;
        }),
        (br = function (e) {
          return gc(ht, e) || {};
        }),
        (gn = function (e) {
          return da(ht, e);
        }))
      : ((Rt = am("state")),
        (om[Rt] = !0),
        (hn = function (e, t) {
          if (la(e, Rt)) throw new pa(hc);
          return (t.facade = e), im(e, Rt, t), t;
        }),
        (br = function (e) {
          return la(e, Rt) ? e[Rt] : {};
        }),
        (gn = function (e) {
          return la(e, Rt);
        }));
    var ht, gc, da, _c, Rt;
    Ic.exports = { set: hn, get: br, has: gn, enforce: um, getterFor: cm };
  });
  var Sc = s((jB, Oc) => {
    var va = At(),
      lm = Et(),
      mc = Function.prototype,
      fm = va && Object.getOwnPropertyDescriptor,
      Ea = lm(mc, "name"),
      dm = Ea && function () {}.name === "something",
      pm = Ea && (!va || (va && fm(mc, "name").configurable));
    Oc.exports = { EXISTS: Ea, PROPER: dm, CONFIGURABLE: pm };
  });
  var Cc = s((kB, wc) => {
    var vm = ve(),
      Ac = et(),
      Em = Et(),
      bc = vn(),
      hm = dn(),
      gm = sa(),
      Rc = Tc(),
      _m = Sc().CONFIGURABLE,
      ym = Rc.get,
      Im = Rc.enforce,
      Tm = String(String).split("String");
    (wc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        a = n ? !!n.enumerable : !1,
        o = n ? !!n.noTargetGet : !1,
        u = n && n.name !== void 0 ? n.name : t,
        l;
      if (
        (Ac(r) &&
          (String(u).slice(0, 7) === "Symbol(" &&
            (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!Em(r, "name") || (_m && r.name !== u)) && bc(r, "name", u),
          (l = Im(r)),
          l.source || (l.source = Tm.join(typeof u == "string" ? u : ""))),
        e === vm)
      ) {
        a ? (e[t] = r) : hm(t, r);
        return;
      } else i ? !o && e[t] && (a = !0) : delete e[t];
      a ? (e[t] = r) : bc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Ac(this) && ym(this).source) || gm(this);
    });
  });
  var ha = s((KB, Nc) => {
    var mm = Math.ceil,
      Om = Math.floor;
    Nc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? Om : mm)(t);
    };
  });
  var Lc = s((zB, qc) => {
    var Sm = ha(),
      Am = Math.max,
      bm = Math.min;
    qc.exports = function (e, t) {
      var r = Sm(e);
      return r < 0 ? Am(r + t, 0) : bm(r, t);
    };
  });
  var xc = s((YB, Pc) => {
    var Rm = ha(),
      wm = Math.min;
    Pc.exports = function (e) {
      return e > 0 ? wm(Rm(e), 9007199254740991) : 0;
    };
  });
  var Dc = s(($B, Mc) => {
    var Cm = xc();
    Mc.exports = function (e) {
      return Cm(e.length);
    };
  });
  var ga = s((QB, Gc) => {
    var Nm = mr(),
      qm = Lc(),
      Lm = Dc(),
      Fc = function (e) {
        return function (t, r, n) {
          var i = Nm(t),
            a = Lm(i),
            o = qm(n, a),
            u;
          if (e && r != r) {
            for (; a > o; ) if (((u = i[o++]), u != u)) return !0;
          } else
            for (; a > o; o++)
              if ((e || o in i) && i[o] === r) return e || o || 0;
          return !e && -1;
        };
      };
    Gc.exports = { includes: Fc(!0), indexOf: Fc(!1) };
  });
  var ya = s((ZB, Uc) => {
    var Pm = We(),
      _a = Et(),
      xm = mr(),
      Mm = ga().indexOf,
      Dm = En(),
      Xc = Pm([].push);
    Uc.exports = function (e, t) {
      var r = xm(e),
        n = 0,
        i = [],
        a;
      for (a in r) !_a(Dm, a) && _a(r, a) && Xc(i, a);
      for (; t.length > n; ) _a(r, (a = t[n++])) && (~Mm(i, a) || Xc(i, a));
      return i;
    };
  });
  var _n = s((JB, Vc) => {
    Vc.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var Wc = s((Bc) => {
    var Fm = ya(),
      Gm = _n(),
      Xm = Gm.concat("length", "prototype");
    Bc.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return Fm(t, Xm);
      };
  });
  var jc = s((Hc) => {
    Hc.f = Object.getOwnPropertySymbols;
  });
  var Kc = s((rW, kc) => {
    var Um = Or(),
      Vm = We(),
      Bm = Wc(),
      Wm = jc(),
      Hm = Sr(),
      jm = Vm([].concat);
    kc.exports =
      Um("Reflect", "ownKeys") ||
      function (t) {
        var r = Bm.f(Hm(t)),
          n = Wm.f;
        return n ? jm(r, n(t)) : r;
      };
  });
  var Yc = s((nW, zc) => {
    var km = Et(),
      Km = Kc(),
      zm = aa(),
      Ym = Ar();
    zc.exports = function (e, t) {
      for (var r = Km(t), n = Ym.f, i = zm.f, a = 0; a < r.length; a++) {
        var o = r[a];
        km(e, o) || n(e, o, i(t, o));
      }
    };
  });
  var Qc = s((iW, $c) => {
    var $m = Vt(),
      Qm = et(),
      Zm = /#|\.prototype\./,
      Rr = function (e, t) {
        var r = eO[Jm(e)];
        return r == rO ? !0 : r == tO ? !1 : Qm(t) ? $m(t) : !!t;
      },
      Jm = (Rr.normalize = function (e) {
        return String(e).replace(Zm, ".").toLowerCase();
      }),
      eO = (Rr.data = {}),
      tO = (Rr.NATIVE = "N"),
      rO = (Rr.POLYFILL = "P");
    $c.exports = Rr;
  });
  var Jc = s((aW, Zc) => {
    var Ia = ve(),
      nO = aa().f,
      iO = vn(),
      aO = Cc(),
      oO = dn(),
      sO = Yc(),
      uO = Qc();
    Zc.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        a,
        o,
        u,
        l,
        f,
        E;
      if (
        (n
          ? (o = Ia)
          : i
          ? (o = Ia[r] || oO(r, {}))
          : (o = (Ia[r] || {}).prototype),
        o)
      )
        for (u in t) {
          if (
            ((f = t[u]),
            e.noTargetGet ? ((E = nO(o, u)), (l = E && E.value)) : (l = o[u]),
            (a = uO(n ? u : r + (i ? "." : "#") + u, e.forced)),
            !a && l !== void 0)
          ) {
            if (typeof f == typeof l) continue;
            sO(f, l);
          }
          (e.sham || (l && l.sham)) && iO(f, "sham", !0), aO(o, u, f, e);
        }
    };
  });
  var tl = s((oW, el) => {
    var cO = ya(),
      lO = _n();
    el.exports =
      Object.keys ||
      function (t) {
        return cO(t, lO);
      };
  });
  var nl = s((sW, rl) => {
    var fO = At(),
      dO = Ar(),
      pO = Sr(),
      vO = mr(),
      EO = tl();
    rl.exports = fO
      ? Object.defineProperties
      : function (t, r) {
          pO(t);
          for (var n = vO(r), i = EO(r), a = i.length, o = 0, u; a > o; )
            dO.f(t, (u = i[o++]), n[u]);
          return t;
        };
  });
  var al = s((uW, il) => {
    var hO = Or();
    il.exports = hO("document", "documentElement");
  });
  var pl = s((cW, dl) => {
    var gO = Sr(),
      _O = nl(),
      ol = _n(),
      yO = En(),
      IO = al(),
      TO = na(),
      mO = ua(),
      sl = ">",
      ul = "<",
      ma = "prototype",
      Oa = "script",
      ll = mO("IE_PROTO"),
      Ta = function () {},
      fl = function (e) {
        return ul + Oa + sl + e + ul + "/" + Oa + sl;
      },
      cl = function (e) {
        e.write(fl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      OO = function () {
        var e = TO("iframe"),
          t = "java" + Oa + ":",
          r;
        return (
          (e.style.display = "none"),
          IO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(fl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      yn,
      In = function () {
        try {
          yn = new ActiveXObject("htmlfile");
        } catch {}
        In =
          typeof document < "u"
            ? document.domain && yn
              ? cl(yn)
              : OO()
            : cl(yn);
        for (var e = ol.length; e--; ) delete In[ma][ol[e]];
        return In();
      };
    yO[ll] = !0;
    dl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Ta[ma] = gO(t)), (n = new Ta()), (Ta[ma] = null), (n[ll] = t))
            : (n = In()),
          r === void 0 ? n : _O(n, r)
        );
      };
  });
  var El = s((lW, vl) => {
    var SO = ea(),
      AO = pl(),
      bO = Ar(),
      Sa = SO("unscopables"),
      Aa = Array.prototype;
    Aa[Sa] == null && bO.f(Aa, Sa, { configurable: !0, value: AO(null) });
    vl.exports = function (e) {
      Aa[Sa][e] = !0;
    };
  });
  var hl = s(() => {
    "use strict";
    var RO = Jc(),
      wO = ga().includes,
      CO = El();
    RO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return wO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    CO("includes");
  });
  var _l = s((pW, gl) => {
    var NO = ve(),
      qO = We();
    gl.exports = function (e, t) {
      return qO(NO[e].prototype[t]);
    };
  });
  var Il = s((vW, yl) => {
    hl();
    var LO = _l();
    yl.exports = LO("Array", "includes");
  });
  var ml = s((EW, Tl) => {
    var PO = Il();
    Tl.exports = PO;
  });
  var Sl = s((hW, Ol) => {
    var xO = ml();
    Ol.exports = xO;
  });
  var ba = s((gW, Al) => {
    var MO =
      typeof global == "object" && global && global.Object === Object && global;
    Al.exports = MO;
  });
  var je = s((_W, bl) => {
    var DO = ba(),
      FO = typeof self == "object" && self && self.Object === Object && self,
      GO = DO || FO || Function("return this")();
    bl.exports = GO;
  });
  var Ht = s((yW, Rl) => {
    var XO = je(),
      UO = XO.Symbol;
    Rl.exports = UO;
  });
  var ql = s((IW, Nl) => {
    var wl = Ht(),
      Cl = Object.prototype,
      VO = Cl.hasOwnProperty,
      BO = Cl.toString,
      wr = wl ? wl.toStringTag : void 0;
    function WO(e) {
      var t = VO.call(e, wr),
        r = e[wr];
      try {
        e[wr] = void 0;
        var n = !0;
      } catch {}
      var i = BO.call(e);
      return n && (t ? (e[wr] = r) : delete e[wr]), i;
    }
    Nl.exports = WO;
  });
  var Pl = s((TW, Ll) => {
    var HO = Object.prototype,
      jO = HO.toString;
    function kO(e) {
      return jO.call(e);
    }
    Ll.exports = kO;
  });
  var gt = s((mW, Dl) => {
    var xl = Ht(),
      KO = ql(),
      zO = Pl(),
      YO = "[object Null]",
      $O = "[object Undefined]",
      Ml = xl ? xl.toStringTag : void 0;
    function QO(e) {
      return e == null
        ? e === void 0
          ? $O
          : YO
        : Ml && Ml in Object(e)
        ? KO(e)
        : zO(e);
    }
    Dl.exports = QO;
  });
  var Ra = s((OW, Fl) => {
    function ZO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Fl.exports = ZO;
  });
  var wa = s((SW, Gl) => {
    var JO = Ra(),
      eS = JO(Object.getPrototypeOf, Object);
    Gl.exports = eS;
  });
  var ct = s((AW, Xl) => {
    function tS(e) {
      return e != null && typeof e == "object";
    }
    Xl.exports = tS;
  });
  var Ca = s((bW, Vl) => {
    var rS = gt(),
      nS = wa(),
      iS = ct(),
      aS = "[object Object]",
      oS = Function.prototype,
      sS = Object.prototype,
      Ul = oS.toString,
      uS = sS.hasOwnProperty,
      cS = Ul.call(Object);
    function lS(e) {
      if (!iS(e) || rS(e) != aS) return !1;
      var t = nS(e);
      if (t === null) return !0;
      var r = uS.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Ul.call(r) == cS;
    }
    Vl.exports = lS;
  });
  var Bl = s((Na) => {
    "use strict";
    Object.defineProperty(Na, "__esModule", { value: !0 });
    Na.default = fS;
    function fS(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Wl = s((La, qa) => {
    "use strict";
    Object.defineProperty(La, "__esModule", { value: !0 });
    var dS = Bl(),
      pS = vS(dS);
    function vS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var jt;
    typeof self < "u"
      ? (jt = self)
      : typeof window < "u"
      ? (jt = window)
      : typeof global < "u"
      ? (jt = global)
      : typeof qa < "u"
      ? (jt = qa)
      : (jt = Function("return this")());
    var ES = (0, pS.default)(jt);
    La.default = ES;
  });
  var Pa = s((Cr) => {
    "use strict";
    Cr.__esModule = !0;
    Cr.ActionTypes = void 0;
    Cr.default = Kl;
    var hS = Ca(),
      gS = kl(hS),
      _S = Wl(),
      Hl = kl(_S);
    function kl(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var jl = (Cr.ActionTypes = { INIT: "@@redux/INIT" });
    function Kl(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(Kl)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        a = t,
        o = [],
        u = o,
        l = !1;
      function f() {
        u === o && (u = o.slice());
      }
      function E() {
        return a;
      }
      function d(S) {
        if (typeof S != "function")
          throw new Error("Expected listener to be a function.");
        var w = !0;
        return (
          f(),
          u.push(S),
          function () {
            if (w) {
              (w = !1), f();
              var b = u.indexOf(S);
              u.splice(b, 1);
            }
          }
        );
      }
      function v(S) {
        if (!(0, gS.default)(S))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof S.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (l) throw new Error("Reducers may not dispatch actions.");
        try {
          (l = !0), (a = i(a, S));
        } finally {
          l = !1;
        }
        for (var w = (o = u), A = 0; A < w.length; A++) w[A]();
        return S;
      }
      function O(S) {
        if (typeof S != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = S), v({ type: jl.INIT });
      }
      function R() {
        var S,
          w = d;
        return (
          (S = {
            subscribe: function (b) {
              if (typeof b != "object")
                throw new TypeError("Expected the observer to be an object.");
              function T() {
                b.next && b.next(E());
              }
              T();
              var x = w(T);
              return { unsubscribe: x };
            },
          }),
          (S[Hl.default] = function () {
            return this;
          }),
          S
        );
      }
      return (
        v({ type: jl.INIT }),
        (n = { dispatch: v, subscribe: d, getState: E, replaceReducer: O }),
        (n[Hl.default] = R),
        n
      );
    }
  });
  var Ma = s((xa) => {
    "use strict";
    xa.__esModule = !0;
    xa.default = yS;
    function yS(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var $l = s((Da) => {
    "use strict";
    Da.__esModule = !0;
    Da.default = SS;
    var zl = Pa(),
      IS = Ca(),
      NW = Yl(IS),
      TS = Ma(),
      qW = Yl(TS);
    function Yl(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function mS(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function OS(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: zl.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                zl.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function SS(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var a = Object.keys(r);
      if (!1) var o;
      var u;
      try {
        OS(r);
      } catch (l) {
        u = l;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          E = arguments[1];
        if (u) throw u;
        if (!1) var d;
        for (var v = !1, O = {}, R = 0; R < a.length; R++) {
          var S = a[R],
            w = r[S],
            A = f[S],
            b = w(A, E);
          if (typeof b > "u") {
            var T = mS(S, E);
            throw new Error(T);
          }
          (O[S] = b), (v = v || b !== A);
        }
        return v ? O : f;
      };
    }
  });
  var Zl = s((Fa) => {
    "use strict";
    Fa.__esModule = !0;
    Fa.default = AS;
    function Ql(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function AS(e, t) {
      if (typeof e == "function") return Ql(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var a = r[i],
          o = e[a];
        typeof o == "function" && (n[a] = Ql(o, t));
      }
      return n;
    }
  });
  var Xa = s((Ga) => {
    "use strict";
    Ga.__esModule = !0;
    Ga.default = bS;
    function bS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (a) {
          return a;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (a, o) {
          return o(a);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Jl = s((Ua) => {
    "use strict";
    Ua.__esModule = !0;
    var RS =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Ua.default = qS;
    var wS = Xa(),
      CS = NS(wS);
    function NS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function qS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, a, o) {
          var u = n(i, a, o),
            l = u.dispatch,
            f = [],
            E = {
              getState: u.getState,
              dispatch: function (v) {
                return l(v);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(E);
            })),
            (l = CS.default.apply(void 0, f)(u.dispatch)),
            RS({}, u, { dispatch: l })
          );
        };
      };
    }
  });
  var Va = s((Fe) => {
    "use strict";
    Fe.__esModule = !0;
    Fe.compose =
      Fe.applyMiddleware =
      Fe.bindActionCreators =
      Fe.combineReducers =
      Fe.createStore =
        void 0;
    var LS = Pa(),
      PS = kt(LS),
      xS = $l(),
      MS = kt(xS),
      DS = Zl(),
      FS = kt(DS),
      GS = Jl(),
      XS = kt(GS),
      US = Xa(),
      VS = kt(US),
      BS = Ma(),
      DW = kt(BS);
    function kt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Fe.createStore = PS.default;
    Fe.combineReducers = MS.default;
    Fe.bindActionCreators = FS.default;
    Fe.applyMiddleware = XS.default;
    Fe.compose = VS.default;
  });
  var ef = s((Se) => {
    "use strict";
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.QuickEffectIds =
      Se.QuickEffectDirectionConsts =
      Se.EventTypeConsts =
      Se.EventLimitAffectedElements =
      Se.EventContinuousMouseAxes =
      Se.EventBasedOn =
      Se.EventAppliesTo =
        void 0;
    var WS = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Se.EventTypeConsts = WS;
    var HS = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Se.EventAppliesTo = HS;
    var jS = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Se.EventBasedOn = jS;
    var kS = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Se.EventContinuousMouseAxes = kS;
    var KS = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Se.EventLimitAffectedElements = KS;
    var zS = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Se.QuickEffectIds = zS;
    var YS = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Se.QuickEffectDirectionConsts = YS;
  });
  var Ba = s((Kt) => {
    "use strict";
    Object.defineProperty(Kt, "__esModule", { value: !0 });
    Kt.ActionTypeConsts = Kt.ActionAppliesTo = void 0;
    var $S = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    Kt.ActionTypeConsts = $S;
    var QS = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    Kt.ActionAppliesTo = QS;
  });
  var tf = s((Tn) => {
    "use strict";
    Object.defineProperty(Tn, "__esModule", { value: !0 });
    Tn.InteractionTypeConsts = void 0;
    var ZS = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Tn.InteractionTypeConsts = ZS;
  });
  var rf = s((mn) => {
    "use strict";
    Object.defineProperty(mn, "__esModule", { value: !0 });
    mn.ReducedMotionTypes = void 0;
    var JS = Ba(),
      {
        TRANSFORM_MOVE: eA,
        TRANSFORM_SCALE: tA,
        TRANSFORM_ROTATE: rA,
        TRANSFORM_SKEW: nA,
        STYLE_SIZE: iA,
        STYLE_FILTER: aA,
        STYLE_FONT_VARIATION: oA,
      } = JS.ActionTypeConsts,
      sA = {
        [eA]: !0,
        [tA]: !0,
        [rA]: !0,
        [nA]: !0,
        [iA]: !0,
        [aA]: !0,
        [oA]: !0,
      };
    mn.ReducedMotionTypes = sA;
  });
  var nf = s((ee) => {
    "use strict";
    Object.defineProperty(ee, "__esModule", { value: !0 });
    ee.IX2_VIEWPORT_WIDTH_CHANGED =
      ee.IX2_TEST_FRAME_RENDERED =
      ee.IX2_STOP_REQUESTED =
      ee.IX2_SESSION_STOPPED =
      ee.IX2_SESSION_STARTED =
      ee.IX2_SESSION_INITIALIZED =
      ee.IX2_RAW_DATA_IMPORTED =
      ee.IX2_PREVIEW_REQUESTED =
      ee.IX2_PLAYBACK_REQUESTED =
      ee.IX2_PARAMETER_CHANGED =
      ee.IX2_MEDIA_QUERIES_DEFINED =
      ee.IX2_INSTANCE_STARTED =
      ee.IX2_INSTANCE_REMOVED =
      ee.IX2_INSTANCE_ADDED =
      ee.IX2_EVENT_STATE_CHANGED =
      ee.IX2_EVENT_LISTENER_ADDED =
      ee.IX2_ELEMENT_STATE_CHANGED =
      ee.IX2_CLEAR_REQUESTED =
      ee.IX2_ANIMATION_FRAME_CHANGED =
      ee.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var uA = "IX2_RAW_DATA_IMPORTED";
    ee.IX2_RAW_DATA_IMPORTED = uA;
    var cA = "IX2_SESSION_INITIALIZED";
    ee.IX2_SESSION_INITIALIZED = cA;
    var lA = "IX2_SESSION_STARTED";
    ee.IX2_SESSION_STARTED = lA;
    var fA = "IX2_SESSION_STOPPED";
    ee.IX2_SESSION_STOPPED = fA;
    var dA = "IX2_PREVIEW_REQUESTED";
    ee.IX2_PREVIEW_REQUESTED = dA;
    var pA = "IX2_PLAYBACK_REQUESTED";
    ee.IX2_PLAYBACK_REQUESTED = pA;
    var vA = "IX2_STOP_REQUESTED";
    ee.IX2_STOP_REQUESTED = vA;
    var EA = "IX2_CLEAR_REQUESTED";
    ee.IX2_CLEAR_REQUESTED = EA;
    var hA = "IX2_EVENT_LISTENER_ADDED";
    ee.IX2_EVENT_LISTENER_ADDED = hA;
    var gA = "IX2_EVENT_STATE_CHANGED";
    ee.IX2_EVENT_STATE_CHANGED = gA;
    var _A = "IX2_ANIMATION_FRAME_CHANGED";
    ee.IX2_ANIMATION_FRAME_CHANGED = _A;
    var yA = "IX2_PARAMETER_CHANGED";
    ee.IX2_PARAMETER_CHANGED = yA;
    var IA = "IX2_INSTANCE_ADDED";
    ee.IX2_INSTANCE_ADDED = IA;
    var TA = "IX2_INSTANCE_STARTED";
    ee.IX2_INSTANCE_STARTED = TA;
    var mA = "IX2_INSTANCE_REMOVED";
    ee.IX2_INSTANCE_REMOVED = mA;
    var OA = "IX2_ELEMENT_STATE_CHANGED";
    ee.IX2_ELEMENT_STATE_CHANGED = OA;
    var SA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ee.IX2_ACTION_LIST_PLAYBACK_CHANGED = SA;
    var AA = "IX2_VIEWPORT_WIDTH_CHANGED";
    ee.IX2_VIEWPORT_WIDTH_CHANGED = AA;
    var bA = "IX2_MEDIA_QUERIES_DEFINED";
    ee.IX2_MEDIA_QUERIES_DEFINED = bA;
    var RA = "IX2_TEST_FRAME_RENDERED";
    ee.IX2_TEST_FRAME_RENDERED = RA;
  });
  var af = s((m) => {
    "use strict";
    Object.defineProperty(m, "__esModule", { value: !0 });
    m.W_MOD_JS =
      m.W_MOD_IX =
      m.WILL_CHANGE =
      m.WIDTH =
      m.WF_PAGE =
      m.TRANSLATE_Z =
      m.TRANSLATE_Y =
      m.TRANSLATE_X =
      m.TRANSLATE_3D =
      m.TRANSFORM =
      m.SKEW_Y =
      m.SKEW_X =
      m.SKEW =
      m.SIBLINGS =
      m.SCALE_Z =
      m.SCALE_Y =
      m.SCALE_X =
      m.SCALE_3D =
      m.ROTATE_Z =
      m.ROTATE_Y =
      m.ROTATE_X =
      m.RENDER_TRANSFORM =
      m.RENDER_STYLE =
      m.RENDER_PLUGIN =
      m.RENDER_GENERAL =
      m.PRESERVE_3D =
      m.PLAIN_OBJECT =
      m.PARENT =
      m.OPACITY =
      m.IX2_ID_DELIMITER =
      m.IMMEDIATE_CHILDREN =
      m.HTML_ELEMENT =
      m.HEIGHT =
      m.FONT_VARIATION_SETTINGS =
      m.FLEX =
      m.FILTER =
      m.DISPLAY =
      m.CONFIG_Z_VALUE =
      m.CONFIG_Z_UNIT =
      m.CONFIG_Y_VALUE =
      m.CONFIG_Y_UNIT =
      m.CONFIG_X_VALUE =
      m.CONFIG_X_UNIT =
      m.CONFIG_VALUE =
      m.CONFIG_UNIT =
      m.COMMA_DELIMITER =
      m.COLOR =
      m.COLON_DELIMITER =
      m.CHILDREN =
      m.BOUNDARY_SELECTOR =
      m.BORDER_COLOR =
      m.BAR_DELIMITER =
      m.BACKGROUND_COLOR =
      m.BACKGROUND =
      m.AUTO =
      m.ABSTRACT_NODE =
        void 0;
    var wA = "|";
    m.IX2_ID_DELIMITER = wA;
    var CA = "data-wf-page";
    m.WF_PAGE = CA;
    var NA = "w-mod-js";
    m.W_MOD_JS = NA;
    var qA = "w-mod-ix";
    m.W_MOD_IX = qA;
    var LA = ".w-dyn-item";
    m.BOUNDARY_SELECTOR = LA;
    var PA = "xValue";
    m.CONFIG_X_VALUE = PA;
    var xA = "yValue";
    m.CONFIG_Y_VALUE = xA;
    var MA = "zValue";
    m.CONFIG_Z_VALUE = MA;
    var DA = "value";
    m.CONFIG_VALUE = DA;
    var FA = "xUnit";
    m.CONFIG_X_UNIT = FA;
    var GA = "yUnit";
    m.CONFIG_Y_UNIT = GA;
    var XA = "zUnit";
    m.CONFIG_Z_UNIT = XA;
    var UA = "unit";
    m.CONFIG_UNIT = UA;
    var VA = "transform";
    m.TRANSFORM = VA;
    var BA = "translateX";
    m.TRANSLATE_X = BA;
    var WA = "translateY";
    m.TRANSLATE_Y = WA;
    var HA = "translateZ";
    m.TRANSLATE_Z = HA;
    var jA = "translate3d";
    m.TRANSLATE_3D = jA;
    var kA = "scaleX";
    m.SCALE_X = kA;
    var KA = "scaleY";
    m.SCALE_Y = KA;
    var zA = "scaleZ";
    m.SCALE_Z = zA;
    var YA = "scale3d";
    m.SCALE_3D = YA;
    var $A = "rotateX";
    m.ROTATE_X = $A;
    var QA = "rotateY";
    m.ROTATE_Y = QA;
    var ZA = "rotateZ";
    m.ROTATE_Z = ZA;
    var JA = "skew";
    m.SKEW = JA;
    var eb = "skewX";
    m.SKEW_X = eb;
    var tb = "skewY";
    m.SKEW_Y = tb;
    var rb = "opacity";
    m.OPACITY = rb;
    var nb = "filter";
    m.FILTER = nb;
    var ib = "font-variation-settings";
    m.FONT_VARIATION_SETTINGS = ib;
    var ab = "width";
    m.WIDTH = ab;
    var ob = "height";
    m.HEIGHT = ob;
    var sb = "backgroundColor";
    m.BACKGROUND_COLOR = sb;
    var ub = "background";
    m.BACKGROUND = ub;
    var cb = "borderColor";
    m.BORDER_COLOR = cb;
    var lb = "color";
    m.COLOR = lb;
    var fb = "display";
    m.DISPLAY = fb;
    var db = "flex";
    m.FLEX = db;
    var pb = "willChange";
    m.WILL_CHANGE = pb;
    var vb = "AUTO";
    m.AUTO = vb;
    var Eb = ",";
    m.COMMA_DELIMITER = Eb;
    var hb = ":";
    m.COLON_DELIMITER = hb;
    var gb = "|";
    m.BAR_DELIMITER = gb;
    var _b = "CHILDREN";
    m.CHILDREN = _b;
    var yb = "IMMEDIATE_CHILDREN";
    m.IMMEDIATE_CHILDREN = yb;
    var Ib = "SIBLINGS";
    m.SIBLINGS = Ib;
    var Tb = "PARENT";
    m.PARENT = Tb;
    var mb = "preserve-3d";
    m.PRESERVE_3D = mb;
    var Ob = "HTML_ELEMENT";
    m.HTML_ELEMENT = Ob;
    var Sb = "PLAIN_OBJECT";
    m.PLAIN_OBJECT = Sb;
    var Ab = "ABSTRACT_NODE";
    m.ABSTRACT_NODE = Ab;
    var bb = "RENDER_TRANSFORM";
    m.RENDER_TRANSFORM = bb;
    var Rb = "RENDER_GENERAL";
    m.RENDER_GENERAL = Rb;
    var wb = "RENDER_STYLE";
    m.RENDER_STYLE = wb;
    var Cb = "RENDER_PLUGIN";
    m.RENDER_PLUGIN = Cb;
  });
  var xe = s((Te) => {
    "use strict";
    var of = Ut().default;
    Object.defineProperty(Te, "__esModule", { value: !0 });
    var On = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    Te.IX2EngineConstants = Te.IX2EngineActionTypes = void 0;
    var Wa = ef();
    Object.keys(Wa).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(On, e) ||
        (e in Te && Te[e] === Wa[e]) ||
        Object.defineProperty(Te, e, {
          enumerable: !0,
          get: function () {
            return Wa[e];
          },
        });
    });
    var Ha = Ba();
    Object.keys(Ha).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(On, e) ||
        (e in Te && Te[e] === Ha[e]) ||
        Object.defineProperty(Te, e, {
          enumerable: !0,
          get: function () {
            return Ha[e];
          },
        });
    });
    var ja = tf();
    Object.keys(ja).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(On, e) ||
        (e in Te && Te[e] === ja[e]) ||
        Object.defineProperty(Te, e, {
          enumerable: !0,
          get: function () {
            return ja[e];
          },
        });
    });
    var ka = rf();
    Object.keys(ka).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(On, e) ||
        (e in Te && Te[e] === ka[e]) ||
        Object.defineProperty(Te, e, {
          enumerable: !0,
          get: function () {
            return ka[e];
          },
        });
    });
    var Nb = of(nf());
    Te.IX2EngineActionTypes = Nb;
    var qb = of(af());
    Te.IX2EngineConstants = qb;
  });
  var sf = s((Sn) => {
    "use strict";
    Object.defineProperty(Sn, "__esModule", { value: !0 });
    Sn.ixData = void 0;
    var Lb = xe(),
      { IX2_RAW_DATA_IMPORTED: Pb } = Lb.IX2EngineActionTypes,
      xb = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case Pb:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Sn.ixData = xb;
  });
  var Nr = s((kW, lt) => {
    function Ka() {
      return (
        (lt.exports = Ka =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (lt.exports.__esModule = !0),
        (lt.exports.default = lt.exports),
        Ka.apply(this, arguments)
      );
    }
    (lt.exports = Ka),
      (lt.exports.__esModule = !0),
      (lt.exports.default = lt.exports);
  });
  var zt = s((he) => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    var Mb =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    he.clone = bn;
    he.addLast = lf;
    he.addFirst = ff;
    he.removeLast = df;
    he.removeFirst = pf;
    he.insert = vf;
    he.removeAt = Ef;
    he.replaceAt = hf;
    he.getIn = Rn;
    he.set = wn;
    he.setIn = Cn;
    he.update = _f;
    he.updateIn = yf;
    he.merge = If;
    he.mergeDeep = Tf;
    he.mergeIn = mf;
    he.omit = Of;
    he.addDefaults = Sf;
    var uf = "INVALID_ARGS";
    function cf(e) {
      throw new Error(e);
    }
    function za(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Db = {}.hasOwnProperty;
    function bn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = za(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Me(e, t, r) {
      var n = r;
      n == null && cf(uf);
      for (
        var i = !1, a = arguments.length, o = Array(a > 3 ? a - 3 : 0), u = 3;
        u < a;
        u++
      )
        o[u - 3] = arguments[u];
      for (var l = 0; l < o.length; l++) {
        var f = o[l];
        if (f != null) {
          var E = za(f);
          if (E.length)
            for (var d = 0; d <= E.length; d++) {
              var v = E[d];
              if (!(e && n[v] !== void 0)) {
                var O = f[v];
                t && An(n[v]) && An(O) && (O = Me(e, t, n[v], O)),
                  !(O === void 0 || O === n[v]) &&
                    (i || ((i = !0), (n = bn(n))), (n[v] = O));
              }
            }
        }
      }
      return n;
    }
    function An(e) {
      var t = typeof e > "u" ? "undefined" : Mb(e);
      return e != null && (t === "object" || t === "function");
    }
    function lf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function ff(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function df(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function pf(e) {
      return e.length ? e.slice(1) : e;
    }
    function vf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Ef(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function hf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), a = 0; a < n; a++) i[a] = e[a];
      return (i[t] = r), i;
    }
    function Rn(e, t) {
      if ((!Array.isArray(t) && cf(uf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function wn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var a = bn(i);
      return (a[t] = r), a;
    }
    function gf(e, t, r, n) {
      var i = void 0,
        a = t[n];
      if (n === t.length - 1) i = r;
      else {
        var o =
          An(e) && An(e[a]) ? e[a] : typeof t[n + 1] == "number" ? [] : {};
        i = gf(o, t, r, n + 1);
      }
      return wn(e, a, i);
    }
    function Cn(e, t, r) {
      return t.length ? gf(e, t, r, 0) : r;
    }
    function _f(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return wn(e, t, i);
    }
    function yf(e, t, r) {
      var n = Rn(e, t),
        i = r(n);
      return Cn(e, t, i);
    }
    function If(e, t, r, n, i, a) {
      for (
        var o = arguments.length, u = Array(o > 6 ? o - 6 : 0), l = 6;
        l < o;
        l++
      )
        u[l - 6] = arguments[l];
      return u.length
        ? Me.call.apply(Me, [null, !1, !1, e, t, r, n, i, a].concat(u))
        : Me(!1, !1, e, t, r, n, i, a);
    }
    function Tf(e, t, r, n, i, a) {
      for (
        var o = arguments.length, u = Array(o > 6 ? o - 6 : 0), l = 6;
        l < o;
        l++
      )
        u[l - 6] = arguments[l];
      return u.length
        ? Me.call.apply(Me, [null, !1, !0, e, t, r, n, i, a].concat(u))
        : Me(!1, !0, e, t, r, n, i, a);
    }
    function mf(e, t, r, n, i, a, o) {
      var u = Rn(e, t);
      u == null && (u = {});
      for (
        var l = void 0,
          f = arguments.length,
          E = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        E[d - 7] = arguments[d];
      return (
        E.length
          ? (l = Me.call.apply(Me, [null, !1, !1, u, r, n, i, a, o].concat(E)))
          : (l = Me(!1, !1, u, r, n, i, a, o)),
        Cn(e, t, l)
      );
    }
    function Of(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (Db.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var a = {}, o = za(e), u = 0; u < o.length; u++) {
        var l = o[u];
        r.indexOf(l) >= 0 || (a[l] = e[l]);
      }
      return a;
    }
    function Sf(e, t, r, n, i, a) {
      for (
        var o = arguments.length, u = Array(o > 6 ? o - 6 : 0), l = 6;
        l < o;
        l++
      )
        u[l - 6] = arguments[l];
      return u.length
        ? Me.call.apply(Me, [null, !0, !1, e, t, r, n, i, a].concat(u))
        : Me(!0, !1, e, t, r, n, i, a);
    }
    var Fb = {
      clone: bn,
      addLast: lf,
      addFirst: ff,
      removeLast: df,
      removeFirst: pf,
      insert: vf,
      removeAt: Ef,
      replaceAt: hf,
      getIn: Rn,
      set: wn,
      setIn: Cn,
      update: _f,
      updateIn: yf,
      merge: If,
      mergeDeep: Tf,
      mergeIn: mf,
      omit: Of,
      addDefaults: Sf,
    };
    he.default = Fb;
  });
  var bf = s((Nn) => {
    "use strict";
    var Gb = Je().default;
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ixRequest = void 0;
    var Xb = Gb(Nr()),
      Ub = xe(),
      Vb = zt(),
      {
        IX2_PREVIEW_REQUESTED: Bb,
        IX2_PLAYBACK_REQUESTED: Wb,
        IX2_STOP_REQUESTED: Hb,
        IX2_CLEAR_REQUESTED: jb,
      } = Ub.IX2EngineActionTypes,
      kb = { preview: {}, playback: {}, stop: {}, clear: {} },
      Af = Object.create(null, {
        [Bb]: { value: "preview" },
        [Wb]: { value: "playback" },
        [Hb]: { value: "stop" },
        [jb]: { value: "clear" },
      }),
      Kb = (e = kb, t) => {
        if (t.type in Af) {
          let r = [Af[t.type]];
          return (0, Vb.setIn)(e, [r], (0, Xb.default)({}, t.payload));
        }
        return e;
      };
    Nn.ixRequest = Kb;
  });
  var wf = s((qn) => {
    "use strict";
    Object.defineProperty(qn, "__esModule", { value: !0 });
    qn.ixSession = void 0;
    var zb = xe(),
      tt = zt(),
      {
        IX2_SESSION_INITIALIZED: Yb,
        IX2_SESSION_STARTED: $b,
        IX2_TEST_FRAME_RENDERED: Qb,
        IX2_SESSION_STOPPED: Zb,
        IX2_EVENT_LISTENER_ADDED: Jb,
        IX2_EVENT_STATE_CHANGED: e0,
        IX2_ANIMATION_FRAME_CHANGED: t0,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: r0,
        IX2_VIEWPORT_WIDTH_CHANGED: n0,
        IX2_MEDIA_QUERIES_DEFINED: i0,
      } = zb.IX2EngineActionTypes,
      Rf = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      a0 = 20,
      o0 = (e = Rf, t) => {
        switch (t.type) {
          case Yb: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, tt.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case $b:
            return (0, tt.set)(e, "active", !0);
          case Qb: {
            let {
              payload: { step: r = a0 },
            } = t;
            return (0, tt.set)(e, "tick", e.tick + r);
          }
          case Zb:
            return Rf;
          case t0: {
            let {
              payload: { now: r },
            } = t;
            return (0, tt.set)(e, "tick", r);
          }
          case Jb: {
            let r = (0, tt.addLast)(e.eventListeners, t.payload);
            return (0, tt.set)(e, "eventListeners", r);
          }
          case e0: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, tt.setIn)(e, ["eventState", r], n);
          }
          case r0: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, tt.setIn)(e, ["playbackState", r], n);
          }
          case n0: {
            let { width: r, mediaQueries: n } = t.payload,
              i = n.length,
              a = null;
            for (let o = 0; o < i; o++) {
              let { key: u, min: l, max: f } = n[o];
              if (r >= l && r <= f) {
                a = u;
                break;
              }
            }
            return (0, tt.merge)(e, { viewportWidth: r, mediaQueryKey: a });
          }
          case i0:
            return (0, tt.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    qn.ixSession = o0;
  });
  var Nf = s(($W, Cf) => {
    function s0() {
      (this.__data__ = []), (this.size = 0);
    }
    Cf.exports = s0;
  });
  var Ln = s((QW, qf) => {
    function u0(e, t) {
      return e === t || (e !== e && t !== t);
    }
    qf.exports = u0;
  });
  var qr = s((ZW, Lf) => {
    var c0 = Ln();
    function l0(e, t) {
      for (var r = e.length; r--; ) if (c0(e[r][0], t)) return r;
      return -1;
    }
    Lf.exports = l0;
  });
  var xf = s((JW, Pf) => {
    var f0 = qr(),
      d0 = Array.prototype,
      p0 = d0.splice;
    function v0(e) {
      var t = this.__data__,
        r = f0(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : p0.call(t, r, 1), --this.size, !0;
    }
    Pf.exports = v0;
  });
  var Df = s((e5, Mf) => {
    var E0 = qr();
    function h0(e) {
      var t = this.__data__,
        r = E0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Mf.exports = h0;
  });
  var Gf = s((t5, Ff) => {
    var g0 = qr();
    function _0(e) {
      return g0(this.__data__, e) > -1;
    }
    Ff.exports = _0;
  });
  var Uf = s((r5, Xf) => {
    var y0 = qr();
    function I0(e, t) {
      var r = this.__data__,
        n = y0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Xf.exports = I0;
  });
  var Lr = s((n5, Vf) => {
    var T0 = Nf(),
      m0 = xf(),
      O0 = Df(),
      S0 = Gf(),
      A0 = Uf();
    function Yt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Yt.prototype.clear = T0;
    Yt.prototype.delete = m0;
    Yt.prototype.get = O0;
    Yt.prototype.has = S0;
    Yt.prototype.set = A0;
    Vf.exports = Yt;
  });
  var Wf = s((i5, Bf) => {
    var b0 = Lr();
    function R0() {
      (this.__data__ = new b0()), (this.size = 0);
    }
    Bf.exports = R0;
  });
  var jf = s((a5, Hf) => {
    function w0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Hf.exports = w0;
  });
  var Kf = s((o5, kf) => {
    function C0(e) {
      return this.__data__.get(e);
    }
    kf.exports = C0;
  });
  var Yf = s((s5, zf) => {
    function N0(e) {
      return this.__data__.has(e);
    }
    zf.exports = N0;
  });
  var rt = s((u5, $f) => {
    function q0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    $f.exports = q0;
  });
  var Ya = s((c5, Qf) => {
    var L0 = gt(),
      P0 = rt(),
      x0 = "[object AsyncFunction]",
      M0 = "[object Function]",
      D0 = "[object GeneratorFunction]",
      F0 = "[object Proxy]";
    function G0(e) {
      if (!P0(e)) return !1;
      var t = L0(e);
      return t == M0 || t == D0 || t == x0 || t == F0;
    }
    Qf.exports = G0;
  });
  var Jf = s((l5, Zf) => {
    var X0 = je(),
      U0 = X0["__core-js_shared__"];
    Zf.exports = U0;
  });
  var rd = s((f5, td) => {
    var $a = Jf(),
      ed = (function () {
        var e = /[^.]+$/.exec(($a && $a.keys && $a.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function V0(e) {
      return !!ed && ed in e;
    }
    td.exports = V0;
  });
  var Qa = s((d5, nd) => {
    var B0 = Function.prototype,
      W0 = B0.toString;
    function H0(e) {
      if (e != null) {
        try {
          return W0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    nd.exports = H0;
  });
  var ad = s((p5, id) => {
    var j0 = Ya(),
      k0 = rd(),
      K0 = rt(),
      z0 = Qa(),
      Y0 = /[\\^$.*+?()[\]{}|]/g,
      $0 = /^\[object .+?Constructor\]$/,
      Q0 = Function.prototype,
      Z0 = Object.prototype,
      J0 = Q0.toString,
      eR = Z0.hasOwnProperty,
      tR = RegExp(
        "^" +
          J0.call(eR)
            .replace(Y0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function rR(e) {
      if (!K0(e) || k0(e)) return !1;
      var t = j0(e) ? tR : $0;
      return t.test(z0(e));
    }
    id.exports = rR;
  });
  var sd = s((v5, od) => {
    function nR(e, t) {
      return e?.[t];
    }
    od.exports = nR;
  });
  var _t = s((E5, ud) => {
    var iR = ad(),
      aR = sd();
    function oR(e, t) {
      var r = aR(e, t);
      return iR(r) ? r : void 0;
    }
    ud.exports = oR;
  });
  var Pn = s((h5, cd) => {
    var sR = _t(),
      uR = je(),
      cR = sR(uR, "Map");
    cd.exports = cR;
  });
  var Pr = s((g5, ld) => {
    var lR = _t(),
      fR = lR(Object, "create");
    ld.exports = fR;
  });
  var pd = s((_5, dd) => {
    var fd = Pr();
    function dR() {
      (this.__data__ = fd ? fd(null) : {}), (this.size = 0);
    }
    dd.exports = dR;
  });
  var Ed = s((y5, vd) => {
    function pR(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    vd.exports = pR;
  });
  var gd = s((I5, hd) => {
    var vR = Pr(),
      ER = "__lodash_hash_undefined__",
      hR = Object.prototype,
      gR = hR.hasOwnProperty;
    function _R(e) {
      var t = this.__data__;
      if (vR) {
        var r = t[e];
        return r === ER ? void 0 : r;
      }
      return gR.call(t, e) ? t[e] : void 0;
    }
    hd.exports = _R;
  });
  var yd = s((T5, _d) => {
    var yR = Pr(),
      IR = Object.prototype,
      TR = IR.hasOwnProperty;
    function mR(e) {
      var t = this.__data__;
      return yR ? t[e] !== void 0 : TR.call(t, e);
    }
    _d.exports = mR;
  });
  var Td = s((m5, Id) => {
    var OR = Pr(),
      SR = "__lodash_hash_undefined__";
    function AR(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = OR && t === void 0 ? SR : t),
        this
      );
    }
    Id.exports = AR;
  });
  var Od = s((O5, md) => {
    var bR = pd(),
      RR = Ed(),
      wR = gd(),
      CR = yd(),
      NR = Td();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = bR;
    $t.prototype.delete = RR;
    $t.prototype.get = wR;
    $t.prototype.has = CR;
    $t.prototype.set = NR;
    md.exports = $t;
  });
  var bd = s((S5, Ad) => {
    var Sd = Od(),
      qR = Lr(),
      LR = Pn();
    function PR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Sd(),
          map: new (LR || qR)(),
          string: new Sd(),
        });
    }
    Ad.exports = PR;
  });
  var wd = s((A5, Rd) => {
    function xR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Rd.exports = xR;
  });
  var xr = s((b5, Cd) => {
    var MR = wd();
    function DR(e, t) {
      var r = e.__data__;
      return MR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Cd.exports = DR;
  });
  var qd = s((R5, Nd) => {
    var FR = xr();
    function GR(e) {
      var t = FR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Nd.exports = GR;
  });
  var Pd = s((w5, Ld) => {
    var XR = xr();
    function UR(e) {
      return XR(this, e).get(e);
    }
    Ld.exports = UR;
  });
  var Md = s((C5, xd) => {
    var VR = xr();
    function BR(e) {
      return VR(this, e).has(e);
    }
    xd.exports = BR;
  });
  var Fd = s((N5, Dd) => {
    var WR = xr();
    function HR(e, t) {
      var r = WR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Dd.exports = HR;
  });
  var xn = s((q5, Gd) => {
    var jR = bd(),
      kR = qd(),
      KR = Pd(),
      zR = Md(),
      YR = Fd();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = jR;
    Qt.prototype.delete = kR;
    Qt.prototype.get = KR;
    Qt.prototype.has = zR;
    Qt.prototype.set = YR;
    Gd.exports = Qt;
  });
  var Ud = s((L5, Xd) => {
    var $R = Lr(),
      QR = Pn(),
      ZR = xn(),
      JR = 200;
    function ew(e, t) {
      var r = this.__data__;
      if (r instanceof $R) {
        var n = r.__data__;
        if (!QR || n.length < JR - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new ZR(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Xd.exports = ew;
  });
  var Za = s((P5, Vd) => {
    var tw = Lr(),
      rw = Wf(),
      nw = jf(),
      iw = Kf(),
      aw = Yf(),
      ow = Ud();
    function Zt(e) {
      var t = (this.__data__ = new tw(e));
      this.size = t.size;
    }
    Zt.prototype.clear = rw;
    Zt.prototype.delete = nw;
    Zt.prototype.get = iw;
    Zt.prototype.has = aw;
    Zt.prototype.set = ow;
    Vd.exports = Zt;
  });
  var Wd = s((x5, Bd) => {
    var sw = "__lodash_hash_undefined__";
    function uw(e) {
      return this.__data__.set(e, sw), this;
    }
    Bd.exports = uw;
  });
  var jd = s((M5, Hd) => {
    function cw(e) {
      return this.__data__.has(e);
    }
    Hd.exports = cw;
  });
  var Kd = s((D5, kd) => {
    var lw = xn(),
      fw = Wd(),
      dw = jd();
    function Mn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new lw(); ++t < r; ) this.add(e[t]);
    }
    Mn.prototype.add = Mn.prototype.push = fw;
    Mn.prototype.has = dw;
    kd.exports = Mn;
  });
  var Yd = s((F5, zd) => {
    function pw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    zd.exports = pw;
  });
  var Qd = s((G5, $d) => {
    function vw(e, t) {
      return e.has(t);
    }
    $d.exports = vw;
  });
  var Ja = s((X5, Zd) => {
    var Ew = Kd(),
      hw = Yd(),
      gw = Qd(),
      _w = 1,
      yw = 2;
    function Iw(e, t, r, n, i, a) {
      var o = r & _w,
        u = e.length,
        l = t.length;
      if (u != l && !(o && l > u)) return !1;
      var f = a.get(e),
        E = a.get(t);
      if (f && E) return f == t && E == e;
      var d = -1,
        v = !0,
        O = r & yw ? new Ew() : void 0;
      for (a.set(e, t), a.set(t, e); ++d < u; ) {
        var R = e[d],
          S = t[d];
        if (n) var w = o ? n(S, R, d, t, e, a) : n(R, S, d, e, t, a);
        if (w !== void 0) {
          if (w) continue;
          v = !1;
          break;
        }
        if (O) {
          if (
            !hw(t, function (A, b) {
              if (!gw(O, b) && (R === A || i(R, A, r, n, a))) return O.push(b);
            })
          ) {
            v = !1;
            break;
          }
        } else if (!(R === S || i(R, S, r, n, a))) {
          v = !1;
          break;
        }
      }
      return a.delete(e), a.delete(t), v;
    }
    Zd.exports = Iw;
  });
  var ep = s((U5, Jd) => {
    var Tw = je(),
      mw = Tw.Uint8Array;
    Jd.exports = mw;
  });
  var rp = s((V5, tp) => {
    function Ow(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    tp.exports = Ow;
  });
  var ip = s((B5, np) => {
    function Sw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    np.exports = Sw;
  });
  var cp = s((W5, up) => {
    var ap = Ht(),
      op = ep(),
      Aw = Ln(),
      bw = Ja(),
      Rw = rp(),
      ww = ip(),
      Cw = 1,
      Nw = 2,
      qw = "[object Boolean]",
      Lw = "[object Date]",
      Pw = "[object Error]",
      xw = "[object Map]",
      Mw = "[object Number]",
      Dw = "[object RegExp]",
      Fw = "[object Set]",
      Gw = "[object String]",
      Xw = "[object Symbol]",
      Uw = "[object ArrayBuffer]",
      Vw = "[object DataView]",
      sp = ap ? ap.prototype : void 0,
      eo = sp ? sp.valueOf : void 0;
    function Bw(e, t, r, n, i, a, o) {
      switch (r) {
        case Vw:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case Uw:
          return !(e.byteLength != t.byteLength || !a(new op(e), new op(t)));
        case qw:
        case Lw:
        case Mw:
          return Aw(+e, +t);
        case Pw:
          return e.name == t.name && e.message == t.message;
        case Dw:
        case Gw:
          return e == t + "";
        case xw:
          var u = Rw;
        case Fw:
          var l = n & Cw;
          if ((u || (u = ww), e.size != t.size && !l)) return !1;
          var f = o.get(e);
          if (f) return f == t;
          (n |= Nw), o.set(e, t);
          var E = bw(u(e), u(t), n, i, a, o);
          return o.delete(e), E;
        case Xw:
          if (eo) return eo.call(e) == eo.call(t);
      }
      return !1;
    }
    up.exports = Bw;
  });
  var Dn = s((H5, lp) => {
    function Ww(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    lp.exports = Ww;
  });
  var Ae = s((j5, fp) => {
    var Hw = Array.isArray;
    fp.exports = Hw;
  });
  var to = s((k5, dp) => {
    var jw = Dn(),
      kw = Ae();
    function Kw(e, t, r) {
      var n = t(e);
      return kw(e) ? n : jw(n, r(e));
    }
    dp.exports = Kw;
  });
  var vp = s((K5, pp) => {
    function zw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
        var o = e[r];
        t(o, r, e) && (a[i++] = o);
      }
      return a;
    }
    pp.exports = zw;
  });
  var ro = s((z5, Ep) => {
    function Yw() {
      return [];
    }
    Ep.exports = Yw;
  });
  var no = s((Y5, gp) => {
    var $w = vp(),
      Qw = ro(),
      Zw = Object.prototype,
      Jw = Zw.propertyIsEnumerable,
      hp = Object.getOwnPropertySymbols,
      eC = hp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                $w(hp(e), function (t) {
                  return Jw.call(e, t);
                }));
          }
        : Qw;
    gp.exports = eC;
  });
  var yp = s(($5, _p) => {
    function tC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    _p.exports = tC;
  });
  var Tp = s((Q5, Ip) => {
    var rC = gt(),
      nC = ct(),
      iC = "[object Arguments]";
    function aC(e) {
      return nC(e) && rC(e) == iC;
    }
    Ip.exports = aC;
  });
  var Mr = s((Z5, Sp) => {
    var mp = Tp(),
      oC = ct(),
      Op = Object.prototype,
      sC = Op.hasOwnProperty,
      uC = Op.propertyIsEnumerable,
      cC = mp(
        (function () {
          return arguments;
        })()
      )
        ? mp
        : function (e) {
            return oC(e) && sC.call(e, "callee") && !uC.call(e, "callee");
          };
    Sp.exports = cC;
  });
  var bp = s((J5, Ap) => {
    function lC() {
      return !1;
    }
    Ap.exports = lC;
  });
  var Fn = s((Dr, Jt) => {
    var fC = je(),
      dC = bp(),
      Cp = typeof Dr == "object" && Dr && !Dr.nodeType && Dr,
      Rp = Cp && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
      pC = Rp && Rp.exports === Cp,
      wp = pC ? fC.Buffer : void 0,
      vC = wp ? wp.isBuffer : void 0,
      EC = vC || dC;
    Jt.exports = EC;
  });
  var Gn = s((eH, Np) => {
    var hC = 9007199254740991,
      gC = /^(?:0|[1-9]\d*)$/;
    function _C(e, t) {
      var r = typeof e;
      return (
        (t = t ?? hC),
        !!t &&
          (r == "number" || (r != "symbol" && gC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Np.exports = _C;
  });
  var Xn = s((tH, qp) => {
    var yC = 9007199254740991;
    function IC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yC;
    }
    qp.exports = IC;
  });
  var Pp = s((rH, Lp) => {
    var TC = gt(),
      mC = Xn(),
      OC = ct(),
      SC = "[object Arguments]",
      AC = "[object Array]",
      bC = "[object Boolean]",
      RC = "[object Date]",
      wC = "[object Error]",
      CC = "[object Function]",
      NC = "[object Map]",
      qC = "[object Number]",
      LC = "[object Object]",
      PC = "[object RegExp]",
      xC = "[object Set]",
      MC = "[object String]",
      DC = "[object WeakMap]",
      FC = "[object ArrayBuffer]",
      GC = "[object DataView]",
      XC = "[object Float32Array]",
      UC = "[object Float64Array]",
      VC = "[object Int8Array]",
      BC = "[object Int16Array]",
      WC = "[object Int32Array]",
      HC = "[object Uint8Array]",
      jC = "[object Uint8ClampedArray]",
      kC = "[object Uint16Array]",
      KC = "[object Uint32Array]",
      de = {};
    de[XC] =
      de[UC] =
      de[VC] =
      de[BC] =
      de[WC] =
      de[HC] =
      de[jC] =
      de[kC] =
      de[KC] =
        !0;
    de[SC] =
      de[AC] =
      de[FC] =
      de[bC] =
      de[GC] =
      de[RC] =
      de[wC] =
      de[CC] =
      de[NC] =
      de[qC] =
      de[LC] =
      de[PC] =
      de[xC] =
      de[MC] =
      de[DC] =
        !1;
    function zC(e) {
      return OC(e) && mC(e.length) && !!de[TC(e)];
    }
    Lp.exports = zC;
  });
  var Mp = s((nH, xp) => {
    function YC(e) {
      return function (t) {
        return e(t);
      };
    }
    xp.exports = YC;
  });
  var Fp = s((Fr, er) => {
    var $C = ba(),
      Dp = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
      Gr = Dp && typeof er == "object" && er && !er.nodeType && er,
      QC = Gr && Gr.exports === Dp,
      io = QC && $C.process,
      ZC = (function () {
        try {
          var e = Gr && Gr.require && Gr.require("util").types;
          return e || (io && io.binding && io.binding("util"));
        } catch {}
      })();
    er.exports = ZC;
  });
  var Un = s((iH, Up) => {
    var JC = Pp(),
      eN = Mp(),
      Gp = Fp(),
      Xp = Gp && Gp.isTypedArray,
      tN = Xp ? eN(Xp) : JC;
    Up.exports = tN;
  });
  var ao = s((aH, Vp) => {
    var rN = yp(),
      nN = Mr(),
      iN = Ae(),
      aN = Fn(),
      oN = Gn(),
      sN = Un(),
      uN = Object.prototype,
      cN = uN.hasOwnProperty;
    function lN(e, t) {
      var r = iN(e),
        n = !r && nN(e),
        i = !r && !n && aN(e),
        a = !r && !n && !i && sN(e),
        o = r || n || i || a,
        u = o ? rN(e.length, String) : [],
        l = u.length;
      for (var f in e)
        (t || cN.call(e, f)) &&
          !(
            o &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (a &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              oN(f, l))
          ) &&
          u.push(f);
      return u;
    }
    Vp.exports = lN;
  });
  var Vn = s((oH, Bp) => {
    var fN = Object.prototype;
    function dN(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || fN;
      return e === r;
    }
    Bp.exports = dN;
  });
  var Hp = s((sH, Wp) => {
    var pN = Ra(),
      vN = pN(Object.keys, Object);
    Wp.exports = vN;
  });
  var Bn = s((uH, jp) => {
    var EN = Vn(),
      hN = Hp(),
      gN = Object.prototype,
      _N = gN.hasOwnProperty;
    function yN(e) {
      if (!EN(e)) return hN(e);
      var t = [];
      for (var r in Object(e)) _N.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    jp.exports = yN;
  });
  var wt = s((cH, kp) => {
    var IN = Ya(),
      TN = Xn();
    function mN(e) {
      return e != null && TN(e.length) && !IN(e);
    }
    kp.exports = mN;
  });
  var Xr = s((lH, Kp) => {
    var ON = ao(),
      SN = Bn(),
      AN = wt();
    function bN(e) {
      return AN(e) ? ON(e) : SN(e);
    }
    Kp.exports = bN;
  });
  var Yp = s((fH, zp) => {
    var RN = to(),
      wN = no(),
      CN = Xr();
    function NN(e) {
      return RN(e, CN, wN);
    }
    zp.exports = NN;
  });
  var Zp = s((dH, Qp) => {
    var $p = Yp(),
      qN = 1,
      LN = Object.prototype,
      PN = LN.hasOwnProperty;
    function xN(e, t, r, n, i, a) {
      var o = r & qN,
        u = $p(e),
        l = u.length,
        f = $p(t),
        E = f.length;
      if (l != E && !o) return !1;
      for (var d = l; d--; ) {
        var v = u[d];
        if (!(o ? v in t : PN.call(t, v))) return !1;
      }
      var O = a.get(e),
        R = a.get(t);
      if (O && R) return O == t && R == e;
      var S = !0;
      a.set(e, t), a.set(t, e);
      for (var w = o; ++d < l; ) {
        v = u[d];
        var A = e[v],
          b = t[v];
        if (n) var T = o ? n(b, A, v, t, e, a) : n(A, b, v, e, t, a);
        if (!(T === void 0 ? A === b || i(A, b, r, n, a) : T)) {
          S = !1;
          break;
        }
        w || (w = v == "constructor");
      }
      if (S && !w) {
        var x = e.constructor,
          L = t.constructor;
        x != L &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof x == "function" &&
            x instanceof x &&
            typeof L == "function" &&
            L instanceof L
          ) &&
          (S = !1);
      }
      return a.delete(e), a.delete(t), S;
    }
    Qp.exports = xN;
  });
  var ev = s((pH, Jp) => {
    var MN = _t(),
      DN = je(),
      FN = MN(DN, "DataView");
    Jp.exports = FN;
  });
  var rv = s((vH, tv) => {
    var GN = _t(),
      XN = je(),
      UN = GN(XN, "Promise");
    tv.exports = UN;
  });
  var iv = s((EH, nv) => {
    var VN = _t(),
      BN = je(),
      WN = VN(BN, "Set");
    nv.exports = WN;
  });
  var oo = s((hH, av) => {
    var HN = _t(),
      jN = je(),
      kN = HN(jN, "WeakMap");
    av.exports = kN;
  });
  var Wn = s((gH, dv) => {
    var so = ev(),
      uo = Pn(),
      co = rv(),
      lo = iv(),
      fo = oo(),
      fv = gt(),
      tr = Qa(),
      ov = "[object Map]",
      KN = "[object Object]",
      sv = "[object Promise]",
      uv = "[object Set]",
      cv = "[object WeakMap]",
      lv = "[object DataView]",
      zN = tr(so),
      YN = tr(uo),
      $N = tr(co),
      QN = tr(lo),
      ZN = tr(fo),
      Ct = fv;
    ((so && Ct(new so(new ArrayBuffer(1))) != lv) ||
      (uo && Ct(new uo()) != ov) ||
      (co && Ct(co.resolve()) != sv) ||
      (lo && Ct(new lo()) != uv) ||
      (fo && Ct(new fo()) != cv)) &&
      (Ct = function (e) {
        var t = fv(e),
          r = t == KN ? e.constructor : void 0,
          n = r ? tr(r) : "";
        if (n)
          switch (n) {
            case zN:
              return lv;
            case YN:
              return ov;
            case $N:
              return sv;
            case QN:
              return uv;
            case ZN:
              return cv;
          }
        return t;
      });
    dv.exports = Ct;
  });
  var Iv = s((_H, yv) => {
    var po = Za(),
      JN = Ja(),
      eq = cp(),
      tq = Zp(),
      pv = Wn(),
      vv = Ae(),
      Ev = Fn(),
      rq = Un(),
      nq = 1,
      hv = "[object Arguments]",
      gv = "[object Array]",
      Hn = "[object Object]",
      iq = Object.prototype,
      _v = iq.hasOwnProperty;
    function aq(e, t, r, n, i, a) {
      var o = vv(e),
        u = vv(t),
        l = o ? gv : pv(e),
        f = u ? gv : pv(t);
      (l = l == hv ? Hn : l), (f = f == hv ? Hn : f);
      var E = l == Hn,
        d = f == Hn,
        v = l == f;
      if (v && Ev(e)) {
        if (!Ev(t)) return !1;
        (o = !0), (E = !1);
      }
      if (v && !E)
        return (
          a || (a = new po()),
          o || rq(e) ? JN(e, t, r, n, i, a) : eq(e, t, l, r, n, i, a)
        );
      if (!(r & nq)) {
        var O = E && _v.call(e, "__wrapped__"),
          R = d && _v.call(t, "__wrapped__");
        if (O || R) {
          var S = O ? e.value() : e,
            w = R ? t.value() : t;
          return a || (a = new po()), i(S, w, r, n, a);
        }
      }
      return v ? (a || (a = new po()), tq(e, t, r, n, i, a)) : !1;
    }
    yv.exports = aq;
  });
  var vo = s((yH, Ov) => {
    var oq = Iv(),
      Tv = ct();
    function mv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Tv(e) && !Tv(t))
        ? e !== e && t !== t
        : oq(e, t, r, n, mv, i);
    }
    Ov.exports = mv;
  });
  var Av = s((IH, Sv) => {
    var sq = Za(),
      uq = vo(),
      cq = 1,
      lq = 2;
    function fq(e, t, r, n) {
      var i = r.length,
        a = i,
        o = !n;
      if (e == null) return !a;
      for (e = Object(e); i--; ) {
        var u = r[i];
        if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < a; ) {
        u = r[i];
        var l = u[0],
          f = e[l],
          E = u[1];
        if (o && u[2]) {
          if (f === void 0 && !(l in e)) return !1;
        } else {
          var d = new sq();
          if (n) var v = n(f, E, l, e, t, d);
          if (!(v === void 0 ? uq(E, f, cq | lq, n, d) : v)) return !1;
        }
      }
      return !0;
    }
    Sv.exports = fq;
  });
  var Eo = s((TH, bv) => {
    var dq = rt();
    function pq(e) {
      return e === e && !dq(e);
    }
    bv.exports = pq;
  });
  var wv = s((mH, Rv) => {
    var vq = Eo(),
      Eq = Xr();
    function hq(e) {
      for (var t = Eq(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, vq(i)];
      }
      return t;
    }
    Rv.exports = hq;
  });
  var ho = s((OH, Cv) => {
    function gq(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Cv.exports = gq;
  });
  var qv = s((SH, Nv) => {
    var _q = Av(),
      yq = wv(),
      Iq = ho();
    function Tq(e) {
      var t = yq(e);
      return t.length == 1 && t[0][2]
        ? Iq(t[0][0], t[0][1])
        : function (r) {
            return r === e || _q(r, e, t);
          };
    }
    Nv.exports = Tq;
  });
  var Ur = s((AH, Lv) => {
    var mq = gt(),
      Oq = ct(),
      Sq = "[object Symbol]";
    function Aq(e) {
      return typeof e == "symbol" || (Oq(e) && mq(e) == Sq);
    }
    Lv.exports = Aq;
  });
  var jn = s((bH, Pv) => {
    var bq = Ae(),
      Rq = Ur(),
      wq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Cq = /^\w*$/;
    function Nq(e, t) {
      if (bq(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        Rq(e)
        ? !0
        : Cq.test(e) || !wq.test(e) || (t != null && e in Object(t));
    }
    Pv.exports = Nq;
  });
  var Dv = s((RH, Mv) => {
    var xv = xn(),
      qq = "Expected a function";
    function go(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(qq);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          a = r.cache;
        if (a.has(i)) return a.get(i);
        var o = e.apply(this, n);
        return (r.cache = a.set(i, o) || a), o;
      };
      return (r.cache = new (go.Cache || xv)()), r;
    }
    go.Cache = xv;
    Mv.exports = go;
  });
  var Gv = s((wH, Fv) => {
    var Lq = Dv(),
      Pq = 500;
    function xq(e) {
      var t = Lq(e, function (n) {
          return r.size === Pq && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Fv.exports = xq;
  });
  var Uv = s((CH, Xv) => {
    var Mq = Gv(),
      Dq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Fq = /\\(\\)?/g,
      Gq = Mq(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(Dq, function (r, n, i, a) {
            t.push(i ? a.replace(Fq, "$1") : n || r);
          }),
          t
        );
      });
    Xv.exports = Gq;
  });
  var _o = s((NH, Vv) => {
    function Xq(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    Vv.exports = Xq;
  });
  var Kv = s((qH, kv) => {
    var Bv = Ht(),
      Uq = _o(),
      Vq = Ae(),
      Bq = Ur(),
      Wq = 1 / 0,
      Wv = Bv ? Bv.prototype : void 0,
      Hv = Wv ? Wv.toString : void 0;
    function jv(e) {
      if (typeof e == "string") return e;
      if (Vq(e)) return Uq(e, jv) + "";
      if (Bq(e)) return Hv ? Hv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -Wq ? "-0" : t;
    }
    kv.exports = jv;
  });
  var Yv = s((LH, zv) => {
    var Hq = Kv();
    function jq(e) {
      return e == null ? "" : Hq(e);
    }
    zv.exports = jq;
  });
  var Vr = s((PH, $v) => {
    var kq = Ae(),
      Kq = jn(),
      zq = Uv(),
      Yq = Yv();
    function $q(e, t) {
      return kq(e) ? e : Kq(e, t) ? [e] : zq(Yq(e));
    }
    $v.exports = $q;
  });
  var rr = s((xH, Qv) => {
    var Qq = Ur(),
      Zq = 1 / 0;
    function Jq(e) {
      if (typeof e == "string" || Qq(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -Zq ? "-0" : t;
    }
    Qv.exports = Jq;
  });
  var kn = s((MH, Zv) => {
    var eL = Vr(),
      tL = rr();
    function rL(e, t) {
      t = eL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[tL(t[r++])];
      return r && r == n ? e : void 0;
    }
    Zv.exports = rL;
  });
  var Kn = s((DH, Jv) => {
    var nL = kn();
    function iL(e, t, r) {
      var n = e == null ? void 0 : nL(e, t);
      return n === void 0 ? r : n;
    }
    Jv.exports = iL;
  });
  var tE = s((FH, eE) => {
    function aL(e, t) {
      return e != null && t in Object(e);
    }
    eE.exports = aL;
  });
  var nE = s((GH, rE) => {
    var oL = Vr(),
      sL = Mr(),
      uL = Ae(),
      cL = Gn(),
      lL = Xn(),
      fL = rr();
    function dL(e, t, r) {
      t = oL(t, e);
      for (var n = -1, i = t.length, a = !1; ++n < i; ) {
        var o = fL(t[n]);
        if (!(a = e != null && r(e, o))) break;
        e = e[o];
      }
      return a || ++n != i
        ? a
        : ((i = e == null ? 0 : e.length),
          !!i && lL(i) && cL(o, i) && (uL(e) || sL(e)));
    }
    rE.exports = dL;
  });
  var aE = s((XH, iE) => {
    var pL = tE(),
      vL = nE();
    function EL(e, t) {
      return e != null && vL(e, t, pL);
    }
    iE.exports = EL;
  });
  var sE = s((UH, oE) => {
    var hL = vo(),
      gL = Kn(),
      _L = aE(),
      yL = jn(),
      IL = Eo(),
      TL = ho(),
      mL = rr(),
      OL = 1,
      SL = 2;
    function AL(e, t) {
      return yL(e) && IL(t)
        ? TL(mL(e), t)
        : function (r) {
            var n = gL(r, e);
            return n === void 0 && n === t ? _L(r, e) : hL(t, n, OL | SL);
          };
    }
    oE.exports = AL;
  });
  var zn = s((VH, uE) => {
    function bL(e) {
      return e;
    }
    uE.exports = bL;
  });
  var yo = s((BH, cE) => {
    function RL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    cE.exports = RL;
  });
  var fE = s((WH, lE) => {
    var wL = kn();
    function CL(e) {
      return function (t) {
        return wL(t, e);
      };
    }
    lE.exports = CL;
  });
  var pE = s((HH, dE) => {
    var NL = yo(),
      qL = fE(),
      LL = jn(),
      PL = rr();
    function xL(e) {
      return LL(e) ? NL(PL(e)) : qL(e);
    }
    dE.exports = xL;
  });
  var yt = s((jH, vE) => {
    var ML = qv(),
      DL = sE(),
      FL = zn(),
      GL = Ae(),
      XL = pE();
    function UL(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? FL
        : typeof e == "object"
        ? GL(e)
          ? DL(e[0], e[1])
          : ML(e)
        : XL(e);
    }
    vE.exports = UL;
  });
  var Io = s((kH, EE) => {
    var VL = yt(),
      BL = wt(),
      WL = Xr();
    function HL(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!BL(t)) {
          var a = VL(r, 3);
          (t = WL(t)),
            (r = function (u) {
              return a(i[u], u, i);
            });
        }
        var o = e(t, r, n);
        return o > -1 ? i[a ? t[o] : o] : void 0;
      };
    }
    EE.exports = HL;
  });
  var To = s((KH, hE) => {
    function jL(e, t, r, n) {
      for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
        if (t(e[a], a, e)) return a;
      return -1;
    }
    hE.exports = jL;
  });
  var _E = s((zH, gE) => {
    var kL = /\s/;
    function KL(e) {
      for (var t = e.length; t-- && kL.test(e.charAt(t)); );
      return t;
    }
    gE.exports = KL;
  });
  var IE = s((YH, yE) => {
    var zL = _E(),
      YL = /^\s+/;
    function $L(e) {
      return e && e.slice(0, zL(e) + 1).replace(YL, "");
    }
    yE.exports = $L;
  });
  var Yn = s(($H, OE) => {
    var QL = IE(),
      TE = rt(),
      ZL = Ur(),
      mE = 0 / 0,
      JL = /^[-+]0x[0-9a-f]+$/i,
      eP = /^0b[01]+$/i,
      tP = /^0o[0-7]+$/i,
      rP = parseInt;
    function nP(e) {
      if (typeof e == "number") return e;
      if (ZL(e)) return mE;
      if (TE(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = TE(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = QL(e);
      var r = eP.test(e);
      return r || tP.test(e) ? rP(e.slice(2), r ? 2 : 8) : JL.test(e) ? mE : +e;
    }
    OE.exports = nP;
  });
  var bE = s((QH, AE) => {
    var iP = Yn(),
      SE = 1 / 0,
      aP = 17976931348623157e292;
    function oP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = iP(e)), e === SE || e === -SE)) {
        var t = e < 0 ? -1 : 1;
        return t * aP;
      }
      return e === e ? e : 0;
    }
    AE.exports = oP;
  });
  var mo = s((ZH, RE) => {
    var sP = bE();
    function uP(e) {
      var t = sP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    RE.exports = uP;
  });
  var CE = s((JH, wE) => {
    var cP = To(),
      lP = yt(),
      fP = mo(),
      dP = Math.max;
    function pP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : fP(r);
      return i < 0 && (i = dP(n + i, 0)), cP(e, lP(t, 3), i);
    }
    wE.exports = pP;
  });
  var Oo = s((ej, NE) => {
    var vP = Io(),
      EP = CE(),
      hP = vP(EP);
    NE.exports = hP;
  });
  var Qn = s((Ne) => {
    "use strict";
    var gP = Je().default;
    Object.defineProperty(Ne, "__esModule", { value: !0 });
    Ne.withBrowser =
      Ne.TRANSFORM_STYLE_PREFIXED =
      Ne.TRANSFORM_PREFIXED =
      Ne.IS_BROWSER_ENV =
      Ne.FLEX_PREFIXED =
      Ne.ELEMENT_MATCHES =
        void 0;
    var _P = gP(Oo()),
      LE = typeof window < "u";
    Ne.IS_BROWSER_ENV = LE;
    var $n = (e, t) => (LE ? e() : t);
    Ne.withBrowser = $n;
    var yP = $n(() =>
      (0, _P.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Ne.ELEMENT_MATCHES = yP;
    var IP = $n(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let i = 0; i < n; i++) {
          let a = t[i];
          if (((e.style.display = a), e.style.display === a)) return a;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Ne.FLEX_PREFIXED = IP;
    var PE = $n(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let i = 0; i < n; i++) {
          let a = t[i] + r;
          if (e.style[a] !== void 0) return a;
        }
      }
      return "transform";
    }, "transform");
    Ne.TRANSFORM_PREFIXED = PE;
    var qE = PE.split("transform")[0],
      TP = qE ? qE + "TransformStyle" : "transformStyle";
    Ne.TRANSFORM_STYLE_PREFIXED = TP;
  });
  var So = s((rj, GE) => {
    var mP = 4,
      OP = 0.001,
      SP = 1e-7,
      AP = 10,
      Br = 11,
      Zn = 1 / (Br - 1),
      bP = typeof Float32Array == "function";
    function xE(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function ME(e, t) {
      return 3 * t - 6 * e;
    }
    function DE(e) {
      return 3 * e;
    }
    function Jn(e, t, r) {
      return ((xE(t, r) * e + ME(t, r)) * e + DE(t)) * e;
    }
    function FE(e, t, r) {
      return 3 * xE(t, r) * e * e + 2 * ME(t, r) * e + DE(t);
    }
    function RP(e, t, r, n, i) {
      var a,
        o,
        u = 0;
      do
        (o = t + (r - t) / 2), (a = Jn(o, n, i) - e), a > 0 ? (r = o) : (t = o);
      while (Math.abs(a) > SP && ++u < AP);
      return o;
    }
    function wP(e, t, r, n) {
      for (var i = 0; i < mP; ++i) {
        var a = FE(t, r, n);
        if (a === 0) return t;
        var o = Jn(t, r, n) - e;
        t -= o / a;
      }
      return t;
    }
    GE.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var a = bP ? new Float32Array(Br) : new Array(Br);
      if (t !== r || n !== i)
        for (var o = 0; o < Br; ++o) a[o] = Jn(o * Zn, t, n);
      function u(l) {
        for (var f = 0, E = 1, d = Br - 1; E !== d && a[E] <= l; ++E) f += Zn;
        --E;
        var v = (l - a[E]) / (a[E + 1] - a[E]),
          O = f + v * Zn,
          R = FE(O, t, n);
        return R >= OP ? wP(l, O, t, n) : R === 0 ? O : RP(l, f, f + Zn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Jn(u(f), r, i);
      };
    };
  });
  var Ao = s((J) => {
    "use strict";
    var CP = Je().default;
    Object.defineProperty(J, "__esModule", { value: !0 });
    J.bounce = fx;
    J.bouncePast = dx;
    J.easeOut = J.easeInOut = J.easeIn = J.ease = void 0;
    J.inBack = rx;
    J.inCirc = ZP;
    J.inCubic = FP;
    J.inElastic = ax;
    J.inExpo = YP;
    J.inOutBack = ix;
    J.inOutCirc = ex;
    J.inOutCubic = XP;
    J.inOutElastic = sx;
    J.inOutExpo = QP;
    J.inOutQuad = DP;
    J.inOutQuart = BP;
    J.inOutQuint = jP;
    J.inOutSine = zP;
    J.inQuad = xP;
    J.inQuart = UP;
    J.inQuint = WP;
    J.inSine = kP;
    J.outBack = nx;
    J.outBounce = tx;
    J.outCirc = JP;
    J.outCubic = GP;
    J.outElastic = ox;
    J.outExpo = $P;
    J.outQuad = MP;
    J.outQuart = VP;
    J.outQuint = HP;
    J.outSine = KP;
    J.swingFrom = cx;
    J.swingFromTo = ux;
    J.swingTo = lx;
    var ei = CP(So()),
      ft = 1.70158,
      NP = (0, ei.default)(0.25, 0.1, 0.25, 1);
    J.ease = NP;
    var qP = (0, ei.default)(0.42, 0, 1, 1);
    J.easeIn = qP;
    var LP = (0, ei.default)(0, 0, 0.58, 1);
    J.easeOut = LP;
    var PP = (0, ei.default)(0.42, 0, 0.58, 1);
    J.easeInOut = PP;
    function xP(e) {
      return Math.pow(e, 2);
    }
    function MP(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function DP(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function FP(e) {
      return Math.pow(e, 3);
    }
    function GP(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function XP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function UP(e) {
      return Math.pow(e, 4);
    }
    function VP(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function BP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function WP(e) {
      return Math.pow(e, 5);
    }
    function HP(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function jP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function kP(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function KP(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function zP(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function YP(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function $P(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function QP(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function ZP(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function JP(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function ex(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function tx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function rx(e) {
      let t = ft;
      return e * e * ((t + 1) * e - t);
    }
    function nx(e) {
      let t = ft;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function ix(e) {
      let t = ft;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function ax(e) {
      let t = ft,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function ox(e) {
      let t = ft,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function sx(e) {
      let t = ft,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function ux(e) {
      let t = ft;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function cx(e) {
      let t = ft;
      return e * e * ((t + 1) * e - t);
    }
    function lx(e) {
      let t = ft;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function fx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function dx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Ro = s((Wr) => {
    "use strict";
    var px = Je().default,
      vx = Ut().default;
    Object.defineProperty(Wr, "__esModule", { value: !0 });
    Wr.applyEasing = gx;
    Wr.createBezierEasing = hx;
    Wr.optimizeFloat = bo;
    var XE = vx(Ao()),
      Ex = px(So());
    function bo(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
    function hx(e) {
      return (0, Ex.default)(...e);
    }
    function gx(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : bo(r ? (t > 0 ? r(t) : t) : t > 0 && e && XE[e] ? XE[e](t) : t);
    }
  });
  var WE = s((nr) => {
    "use strict";
    Object.defineProperty(nr, "__esModule", { value: !0 });
    nr.createElementState = BE;
    nr.ixElements = void 0;
    nr.mergeActionState = wo;
    var ti = zt(),
      VE = xe(),
      {
        HTML_ELEMENT: aj,
        PLAIN_OBJECT: _x,
        ABSTRACT_NODE: oj,
        CONFIG_X_VALUE: yx,
        CONFIG_Y_VALUE: Ix,
        CONFIG_Z_VALUE: Tx,
        CONFIG_VALUE: mx,
        CONFIG_X_UNIT: Ox,
        CONFIG_Y_UNIT: Sx,
        CONFIG_Z_UNIT: Ax,
        CONFIG_UNIT: bx,
      } = VE.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: Rx,
        IX2_INSTANCE_ADDED: wx,
        IX2_ELEMENT_STATE_CHANGED: Cx,
      } = VE.IX2EngineActionTypes,
      UE = {},
      Nx = "refState",
      qx = (e = UE, t = {}) => {
        switch (t.type) {
          case Rx:
            return UE;
          case wx: {
            let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: a,
                refType: o,
              } = t.payload,
              { actionTypeId: u } = a,
              l = e;
            return (
              (0, ti.getIn)(l, [r, n]) !== n && (l = BE(l, n, o, r, a)),
              wo(l, r, u, i, a)
            );
          }
          case Cx: {
            let {
              elementId: r,
              actionTypeId: n,
              current: i,
              actionItem: a,
            } = t.payload;
            return wo(e, r, n, i, a);
          }
          default:
            return e;
        }
      };
    nr.ixElements = qx;
    function BE(e, t, r, n, i) {
      let a =
        r === _x ? (0, ti.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, ti.mergeIn)(e, [n], { id: n, ref: t, refId: a, refType: r });
    }
    function wo(e, t, r, n, i) {
      let a = Px(i),
        o = [t, Nx, r];
      return (0, ti.mergeIn)(e, o, n, a);
    }
    var Lx = [
      [yx, Ox],
      [Ix, Sx],
      [Tx, Ax],
      [mx, bx],
    ];
    function Px(e) {
      let { config: t } = e;
      return Lx.reduce((r, n) => {
        let i = n[0],
          a = n[1],
          o = t[i],
          u = t[a];
        return o != null && u != null && (r[a] = u), r;
      }, {});
    }
  });
  var HE = s((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    be.renderPlugin =
      be.getPluginOrigin =
      be.getPluginDuration =
      be.getPluginDestination =
      be.getPluginConfig =
      be.createPluginInstance =
      be.clearPlugin =
        void 0;
    var xx = (e) => e.value;
    be.getPluginConfig = xx;
    var Mx = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    be.getPluginDuration = Mx;
    var Dx = (e) => e || { value: 0 };
    be.getPluginOrigin = Dx;
    var Fx = (e) => ({ value: e.value });
    be.getPluginDestination = Fx;
    var Gx = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    be.createPluginInstance = Gx;
    var Xx = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    be.renderPlugin = Xx;
    var Ux = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    be.clearPlugin = Ux;
  });
  var Co = s((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    Oe.isPluginType = Wx;
    Oe.renderPlugin = void 0;
    var Nt = HE(),
      jE = xe(),
      Vx = Qn(),
      Bx = {
        [jE.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: Nt.getPluginConfig,
          getOrigin: Nt.getPluginOrigin,
          getDuration: Nt.getPluginDuration,
          getDestination: Nt.getPluginDestination,
          createInstance: Nt.createPluginInstance,
          render: Nt.renderPlugin,
          clear: Nt.clearPlugin,
        },
      };
    function Wx(e) {
      return e === jE.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var qt = (e) => (t) => {
        if (!Vx.IS_BROWSER_ENV) return () => null;
        let r = Bx[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      Hx = qt("getConfig");
    Oe.getPluginConfig = Hx;
    var jx = qt("getOrigin");
    Oe.getPluginOrigin = jx;
    var kx = qt("getDuration");
    Oe.getPluginDuration = kx;
    var Kx = qt("getDestination");
    Oe.getPluginDestination = Kx;
    var zx = qt("createInstance");
    Oe.createPluginInstance = zx;
    var Yx = qt("render");
    Oe.renderPlugin = Yx;
    var $x = qt("clear");
    Oe.clearPlugin = $x;
  });
  var KE = s((lj, kE) => {
    function Qx(e, t) {
      return e == null || e !== e ? t : e;
    }
    kE.exports = Qx;
  });
  var YE = s((fj, zE) => {
    function Zx(e, t, r, n) {
      var i = -1,
        a = e == null ? 0 : e.length;
      for (n && a && (r = e[++i]); ++i < a; ) r = t(r, e[i], i, e);
      return r;
    }
    zE.exports = Zx;
  });
  var QE = s((dj, $E) => {
    function Jx(e) {
      return function (t, r, n) {
        for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
          var l = o[e ? u : ++i];
          if (r(a[l], l, a) === !1) break;
        }
        return t;
      };
    }
    $E.exports = Jx;
  });
  var JE = s((pj, ZE) => {
    var eM = QE(),
      tM = eM();
    ZE.exports = tM;
  });
  var No = s((vj, eh) => {
    var rM = JE(),
      nM = Xr();
    function iM(e, t) {
      return e && rM(e, t, nM);
    }
    eh.exports = iM;
  });
  var rh = s((Ej, th) => {
    var aM = wt();
    function oM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!aM(r)) return e(r, n);
        for (
          var i = r.length, a = t ? i : -1, o = Object(r);
          (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;

        );
        return r;
      };
    }
    th.exports = oM;
  });
  var qo = s((hj, nh) => {
    var sM = No(),
      uM = rh(),
      cM = uM(sM);
    nh.exports = cM;
  });
  var ah = s((gj, ih) => {
    function lM(e, t, r, n, i) {
      return (
        i(e, function (a, o, u) {
          r = n ? ((n = !1), a) : t(r, a, o, u);
        }),
        r
      );
    }
    ih.exports = lM;
  });
  var sh = s((_j, oh) => {
    var fM = YE(),
      dM = qo(),
      pM = yt(),
      vM = ah(),
      EM = Ae();
    function hM(e, t, r) {
      var n = EM(e) ? fM : vM,
        i = arguments.length < 3;
      return n(e, pM(t, 4), r, i, dM);
    }
    oh.exports = hM;
  });
  var ch = s((yj, uh) => {
    var gM = To(),
      _M = yt(),
      yM = mo(),
      IM = Math.max,
      TM = Math.min;
    function mM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = yM(r)), (i = r < 0 ? IM(n + i, 0) : TM(i, n - 1))),
        gM(e, _M(t, 3), i, !0)
      );
    }
    uh.exports = mM;
  });
  var fh = s((Ij, lh) => {
    var OM = Io(),
      SM = ch(),
      AM = OM(SM);
    lh.exports = AM;
  });
  var ph = s((ri) => {
    "use strict";
    Object.defineProperty(ri, "__esModule", { value: !0 });
    ri.default = void 0;
    var bM = Object.prototype.hasOwnProperty;
    function dh(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function RM(e, t) {
      if (dh(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
        if (!bM.call(t, r[i]) || !dh(e[r[i]], t[r[i]])) return !1;
      return !0;
    }
    var wM = RM;
    ri.default = wM;
  });
  var xh = s((fe) => {
    "use strict";
    var ai = Je().default;
    Object.defineProperty(fe, "__esModule", { value: !0 });
    fe.cleanupHTMLElement = AD;
    fe.clearAllStyles = SD;
    fe.getActionListProgress = RD;
    fe.getAffectedElements = Fo;
    fe.getComputedStyle = JM;
    fe.getDestinationValues = oD;
    fe.getElementId = YM;
    fe.getInstanceId = KM;
    fe.getInstanceOrigin = rD;
    fe.getItemConfigByKey = void 0;
    fe.getMaxDurationItemIndex = Ph;
    fe.getNamespacedParameterId = ND;
    fe.getRenderType = Nh;
    fe.getStyleProp = sD;
    fe.mediaQueriesEqual = LD;
    fe.observeStore = ZM;
    fe.reduceListToGroup = wD;
    fe.reifyState = $M;
    fe.renderHTMLElement = uD;
    Object.defineProperty(fe, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return Oh.default;
      },
    });
    fe.shouldAllowMediaQuery = qD;
    fe.shouldNamespaceEventParameter = CD;
    fe.stringifyTarget = PD;
    var It = ai(KE()),
      Po = ai(sh()),
      Lo = ai(fh()),
      vh = zt(),
      Lt = xe(),
      Oh = ai(ph()),
      CM = Ro(),
      at = Co(),
      qe = Qn(),
      {
        BACKGROUND: NM,
        TRANSFORM: qM,
        TRANSLATE_3D: LM,
        SCALE_3D: PM,
        ROTATE_X: xM,
        ROTATE_Y: MM,
        ROTATE_Z: DM,
        SKEW: FM,
        PRESERVE_3D: GM,
        FLEX: XM,
        OPACITY: ni,
        FILTER: Hr,
        FONT_VARIATION_SETTINGS: jr,
        WIDTH: nt,
        HEIGHT: it,
        BACKGROUND_COLOR: Sh,
        BORDER_COLOR: UM,
        COLOR: VM,
        CHILDREN: Eh,
        IMMEDIATE_CHILDREN: BM,
        SIBLINGS: hh,
        PARENT: WM,
        DISPLAY: ii,
        WILL_CHANGE: ir,
        AUTO: Tt,
        COMMA_DELIMITER: kr,
        COLON_DELIMITER: HM,
        BAR_DELIMITER: gh,
        RENDER_TRANSFORM: Ah,
        RENDER_GENERAL: xo,
        RENDER_STYLE: Mo,
        RENDER_PLUGIN: bh,
      } = Lt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: ar,
        TRANSFORM_SCALE: or,
        TRANSFORM_ROTATE: sr,
        TRANSFORM_SKEW: Kr,
        STYLE_OPACITY: Rh,
        STYLE_FILTER: zr,
        STYLE_FONT_VARIATION: Yr,
        STYLE_SIZE: ur,
        STYLE_BACKGROUND_COLOR: cr,
        STYLE_BORDER: lr,
        STYLE_TEXT_COLOR: fr,
        GENERAL_DISPLAY: oi,
      } = Lt.ActionTypeConsts,
      jM = "OBJECT_VALUE",
      wh = (e) => e.trim(),
      Do = Object.freeze({ [cr]: Sh, [lr]: UM, [fr]: VM }),
      Ch = Object.freeze({
        [qe.TRANSFORM_PREFIXED]: qM,
        [Sh]: NM,
        [ni]: ni,
        [Hr]: Hr,
        [nt]: nt,
        [it]: it,
        [jr]: jr,
      }),
      _h = {},
      kM = 1;
    function KM() {
      return "i" + kM++;
    }
    var zM = 1;
    function YM(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + zM++;
    }
    function $M({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Po.default)(
          e,
          (o, u) => {
            let { eventTypeId: l } = u;
            return o[l] || (o[l] = {}), (o[l][u.id] = u), o;
          },
          {}
        ),
        i = r && r.mediaQueries,
        a = [];
      return (
        i
          ? (a = i.map((o) => o.key))
          : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: i,
            mediaQueryKeys: a,
          },
        }
      );
    }
    var QM = (e, t) => e === t;
    function ZM({ store: e, select: t, onChange: r, comparator: n = QM }) {
      let { getState: i, subscribe: a } = e,
        o = a(l),
        u = t(i());
      function l() {
        let f = t(i());
        if (f == null) {
          o();
          return;
        }
        n(f, u) || ((u = f), r(u, e));
      }
      return o;
    }
    function yh(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: a,
          appliesTo: o,
          useEventTarget: u,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: a,
          appliesTo: o,
          useEventTarget: u,
        };
      }
      return {};
    }
    function Fo({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i,
    }) {
      var a, o, u;
      if (!i) throw new Error("IX2 missing elementApi");
      let { targets: l } = e;
      if (Array.isArray(l) && l.length > 0)
        return l.reduce(
          (M, F) =>
            M.concat(
              Fo({
                config: { target: F },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: E,
          queryDocument: d,
          getChildElements: v,
          getSiblingElements: O,
          matchSelector: R,
          elementContains: S,
          isSiblingNode: w,
        } = i,
        { target: A } = e;
      if (!A) return [];
      let {
        id: b,
        objectId: T,
        selector: x,
        selectorGuids: L,
        appliesTo: C,
        useEventTarget: G,
      } = yh(A);
      if (T) return [_h[T] || (_h[T] = {})];
      if (C === Lt.EventAppliesTo.PAGE) {
        let M = f(b);
        return M ? [M] : [];
      }
      let j =
          ((a =
            t == null ||
            (o = t.action) === null ||
            o === void 0 ||
            (u = o.config) === null ||
            u === void 0
              ? void 0
              : u.affectedElements) !== null && a !== void 0
            ? a
            : {})[b || x] || {},
        re = !!(j.id || j.selector),
        $,
        P,
        _,
        q = t && E(yh(t.target));
      if (
        (re
          ? (($ = j.limitAffectedElements), (P = q), (_ = E(j)))
          : (P = _ = E({ id: b, selector: x, selectorGuids: L })),
        t && G)
      ) {
        let M = r && (_ || G === !0) ? [r] : d(q);
        if (_) {
          if (G === WM) return d(_).filter((F) => M.some((K) => S(F, K)));
          if (G === Eh) return d(_).filter((F) => M.some((K) => S(K, F)));
          if (G === hh) return d(_).filter((F) => M.some((K) => w(K, F)));
        }
        return M;
      }
      return P == null || _ == null
        ? []
        : qe.IS_BROWSER_ENV && n
        ? d(_).filter((M) => n.contains(M))
        : $ === Eh
        ? d(P, _)
        : $ === BM
        ? v(d(P)).filter(R(_))
        : $ === hh
        ? O(d(P)).filter(R(_))
        : d(_);
    }
    function JM({ element: e, actionItem: t }) {
      if (!qe.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case ur:
        case cr:
        case lr:
        case fr:
        case oi:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Ih = /px/,
      eD = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = cD[n.type]), r),
          e || {}
        ),
      tD = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = lD[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function rD(e, t = {}, r = {}, n, i) {
      let { getStyle: a } = i,
        { actionTypeId: o } = n;
      if ((0, at.isPluginType)(o)) return (0, at.getPluginOrigin)(o)(t[o]);
      switch (n.actionTypeId) {
        case ar:
        case or:
        case sr:
        case Kr:
          return t[n.actionTypeId] || Go[n.actionTypeId];
        case zr:
          return eD(t[n.actionTypeId], n.config.filters);
        case Yr:
          return tD(t[n.actionTypeId], n.config.fontVariations);
        case Rh:
          return { value: (0, It.default)(parseFloat(a(e, ni)), 1) };
        case ur: {
          let u = a(e, nt),
            l = a(e, it),
            f,
            E;
          return (
            n.config.widthUnit === Tt
              ? (f = Ih.test(u) ? parseFloat(u) : parseFloat(r.width))
              : (f = (0, It.default)(parseFloat(u), parseFloat(r.width))),
            n.config.heightUnit === Tt
              ? (E = Ih.test(l) ? parseFloat(l) : parseFloat(r.height))
              : (E = (0, It.default)(parseFloat(l), parseFloat(r.height))),
            { widthValue: f, heightValue: E }
          );
        }
        case cr:
        case lr:
        case fr:
          return TD({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: a,
          });
        case oi:
          return { value: (0, It.default)(a(e, ii), r.display) };
        case jM:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var nD = (e, t) => (t && (e[t.type] = t.value || 0), e),
      iD = (e, t) => (t && (e[t.type] = t.value || 0), e),
      aD = (e, t, r) => {
        if ((0, at.isPluginType)(e)) return (0, at.getPluginConfig)(e)(r, t);
        switch (e) {
          case zr: {
            let n = (0, Lo.default)(r.filters, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          case Yr: {
            let n = (0, Lo.default)(r.fontVariations, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    fe.getItemConfigByKey = aD;
    function oD({ element: e, actionItem: t, elementApi: r }) {
      if ((0, at.isPluginType)(t.actionTypeId))
        return (0, at.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case ar:
        case or:
        case sr:
        case Kr: {
          let { xValue: n, yValue: i, zValue: a } = t.config;
          return { xValue: n, yValue: i, zValue: a };
        }
        case ur: {
          let { getStyle: n, setStyle: i, getProperty: a } = r,
            { widthUnit: o, heightUnit: u } = t.config,
            { widthValue: l, heightValue: f } = t.config;
          if (!qe.IS_BROWSER_ENV) return { widthValue: l, heightValue: f };
          if (o === Tt) {
            let E = n(e, nt);
            i(e, nt, ""), (l = a(e, "offsetWidth")), i(e, nt, E);
          }
          if (u === Tt) {
            let E = n(e, it);
            i(e, it, ""), (f = a(e, "offsetHeight")), i(e, it, E);
          }
          return { widthValue: l, heightValue: f };
        }
        case cr:
        case lr:
        case fr: {
          let { rValue: n, gValue: i, bValue: a, aValue: o } = t.config;
          return { rValue: n, gValue: i, bValue: a, aValue: o };
        }
        case zr:
          return t.config.filters.reduce(nD, {});
        case Yr:
          return t.config.fontVariations.reduce(iD, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function Nh(e) {
      if (/^TRANSFORM_/.test(e)) return Ah;
      if (/^STYLE_/.test(e)) return Mo;
      if (/^GENERAL_/.test(e)) return xo;
      if (/^PLUGIN_/.test(e)) return bh;
    }
    function sD(e, t) {
      return e === Mo ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function uD(e, t, r, n, i, a, o, u, l) {
      switch (u) {
        case Ah:
          return pD(e, t, r, i, o);
        case Mo:
          return mD(e, t, r, i, a, o);
        case xo:
          return OD(e, i, o);
        case bh: {
          let { actionTypeId: f } = i;
          if ((0, at.isPluginType)(f)) return (0, at.renderPlugin)(f)(l, t, i);
        }
      }
    }
    var Go = {
        [ar]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [or]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Kr]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      cD = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      lD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      fD = (e, t) => {
        let r = (0, Lo.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      dD = Object.keys(Go);
    function pD(e, t, r, n, i) {
      let a = dD
          .map((u) => {
            let l = Go[u],
              {
                xValue: f = l.xValue,
                yValue: E = l.yValue,
                zValue: d = l.zValue,
                xUnit: v = "",
                yUnit: O = "",
                zUnit: R = "",
              } = t[u] || {};
            switch (u) {
              case ar:
                return `${LM}(${f}${v}, ${E}${O}, ${d}${R})`;
              case or:
                return `${PM}(${f}${v}, ${E}${O}, ${d}${R})`;
              case sr:
                return `${xM}(${f}${v}) ${MM}(${E}${O}) ${DM}(${d}${R})`;
              case Kr:
                return `${FM}(${f}${v}, ${E}${O})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: o } = i;
      Pt(e, qe.TRANSFORM_PREFIXED, i),
        o(e, qe.TRANSFORM_PREFIXED, a),
        hD(n, r) && o(e, qe.TRANSFORM_STYLE_PREFIXED, GM);
    }
    function vD(e, t, r, n) {
      let i = (0, Po.default)(t, (o, u, l) => `${o} ${l}(${u}${fD(l, r)})`, ""),
        { setStyle: a } = n;
      Pt(e, Hr, n), a(e, Hr, i);
    }
    function ED(e, t, r, n) {
      let i = (0, Po.default)(
          t,
          (o, u, l) => (o.push(`"${l}" ${u}`), o),
          []
        ).join(", "),
        { setStyle: a } = n;
      Pt(e, jr, n), a(e, jr, i);
    }
    function hD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === ar && n !== void 0) ||
        (e === or && n !== void 0) ||
        (e === sr && (t !== void 0 || r !== void 0))
      );
    }
    var gD = "\\(([^)]+)\\)",
      _D = /^rgb/,
      yD = RegExp(`rgba?${gD}`);
    function ID(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function TD({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let i = Do[t],
        a = n(e, i),
        o = _D.test(a) ? a : r[i],
        u = ID(yD, o).split(kr);
      return {
        rValue: (0, It.default)(parseInt(u[0], 10), 255),
        gValue: (0, It.default)(parseInt(u[1], 10), 255),
        bValue: (0, It.default)(parseInt(u[2], 10), 255),
        aValue: (0, It.default)(parseFloat(u[3]), 1),
      };
    }
    function mD(e, t, r, n, i, a) {
      let { setStyle: o } = a;
      switch (n.actionTypeId) {
        case ur: {
          let { widthUnit: u = "", heightUnit: l = "" } = n.config,
            { widthValue: f, heightValue: E } = r;
          f !== void 0 &&
            (u === Tt && (u = "px"), Pt(e, nt, a), o(e, nt, f + u)),
            E !== void 0 &&
              (l === Tt && (l = "px"), Pt(e, it, a), o(e, it, E + l));
          break;
        }
        case zr: {
          vD(e, r, n.config, a);
          break;
        }
        case Yr: {
          ED(e, r, n.config, a);
          break;
        }
        case cr:
        case lr:
        case fr: {
          let u = Do[n.actionTypeId],
            l = Math.round(r.rValue),
            f = Math.round(r.gValue),
            E = Math.round(r.bValue),
            d = r.aValue;
          Pt(e, u, a),
            o(
              e,
              u,
              d >= 1 ? `rgb(${l},${f},${E})` : `rgba(${l},${f},${E},${d})`
            );
          break;
        }
        default: {
          let { unit: u = "" } = n.config;
          Pt(e, i, a), o(e, i, r.value + u);
          break;
        }
      }
    }
    function OD(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case oi: {
          let { value: i } = t.config;
          i === XM && qe.IS_BROWSER_ENV
            ? n(e, ii, qe.FLEX_PREFIXED)
            : n(e, ii, i);
          return;
        }
      }
    }
    function Pt(e, t, r) {
      if (!qe.IS_BROWSER_ENV) return;
      let n = Ch[t];
      if (!n) return;
      let { getStyle: i, setStyle: a } = r,
        o = i(e, ir);
      if (!o) {
        a(e, ir, n);
        return;
      }
      let u = o.split(kr).map(wh);
      u.indexOf(n) === -1 && a(e, ir, u.concat(n).join(kr));
    }
    function qh(e, t, r) {
      if (!qe.IS_BROWSER_ENV) return;
      let n = Ch[t];
      if (!n) return;
      let { getStyle: i, setStyle: a } = r,
        o = i(e, ir);
      !o ||
        o.indexOf(n) === -1 ||
        a(
          e,
          ir,
          o
            .split(kr)
            .map(wh)
            .filter((u) => u !== n)
            .join(kr)
        );
    }
    function SD({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: i = {} } = r;
      Object.keys(n).forEach((a) => {
        let o = n[a],
          { config: u } = o.action,
          { actionListId: l } = u,
          f = i[l];
        f && Th({ actionList: f, event: o, elementApi: t });
      }),
        Object.keys(i).forEach((a) => {
          Th({ actionList: i[a], elementApi: t });
        });
    }
    function Th({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e;
      n &&
        n.forEach((a) => {
          mh({ actionGroup: a, event: t, elementApi: r });
        }),
        i &&
          i.forEach((a) => {
            let { continuousActionGroups: o } = a;
            o.forEach((u) => {
              mh({ actionGroup: u, event: t, elementApi: r });
            });
          });
    }
    function mh({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: i, config: a }) => {
        let o;
        (0, at.isPluginType)(i)
          ? (o = (0, at.clearPlugin)(i))
          : (o = Lh({ effect: bD, actionTypeId: i, elementApi: r })),
          Fo({ config: a, event: t, elementApi: r }).forEach(o);
      });
    }
    function AD(e, t, r) {
      let { setStyle: n, getStyle: i } = r,
        { actionTypeId: a } = t;
      if (a === ur) {
        let { config: o } = t;
        o.widthUnit === Tt && n(e, nt, ""), o.heightUnit === Tt && n(e, it, "");
      }
      i(e, ir) && Lh({ effect: qh, actionTypeId: a, elementApi: r })(e);
    }
    var Lh =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case ar:
          case or:
          case sr:
          case Kr:
            e(n, qe.TRANSFORM_PREFIXED, r);
            break;
          case zr:
            e(n, Hr, r);
            break;
          case Yr:
            e(n, jr, r);
            break;
          case Rh:
            e(n, ni, r);
            break;
          case ur:
            e(n, nt, r), e(n, it, r);
            break;
          case cr:
          case lr:
          case fr:
            e(n, Do[t], r);
            break;
          case oi:
            e(n, ii, r);
            break;
        }
      };
    function bD(e, t, r) {
      let { setStyle: n } = r;
      qh(e, t, r),
        n(e, t, ""),
        t === qe.TRANSFORM_PREFIXED && n(e, qe.TRANSFORM_STYLE_PREFIXED, "");
    }
    function Ph(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, i) => {
          let { config: a } = n,
            o = a.delay + a.duration;
          o >= t && ((t = o), (r = i));
        }),
        r
      );
    }
    function RD(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: i, verboseTimeElapsed: a = 0 } = t,
        o = 0,
        u = 0;
      return (
        r.forEach((l, f) => {
          if (n && f === 0) return;
          let { actionItems: E } = l,
            d = E[Ph(E)],
            { config: v, actionTypeId: O } = d;
          i.id === d.id && (u = o + a);
          let R = Nh(O) === xo ? 0 : v.duration;
          o += v.delay + R;
        }),
        o > 0 ? (0, CM.optimizeFloat)(u / o) : 0
      );
    }
    function wD({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e,
        a = [],
        o = (u) => (
          a.push((0, vh.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
          u.id === t
        );
      return (
        n && n.some(({ actionItems: u }) => u.some(o)),
        i &&
          i.some((u) => {
            let { continuousActionGroups: l } = u;
            return l.some(({ actionItems: f }) => f.some(o));
          }),
        (0, vh.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: a }] },
        })
      );
    }
    function CD(e, { basedOn: t }) {
      return (
        (e === Lt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Lt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Lt.EventTypeConsts.MOUSE_MOVE && t === Lt.EventBasedOn.ELEMENT)
      );
    }
    function ND(e, t) {
      return e + HM + t;
    }
    function qD(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function LD(e, t) {
      return (0, Oh.default)(e && e.sort(), t && t.sort());
    }
    function PD(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + gh + r + gh + n;
    }
  });
  var xt = s((Le) => {
    "use strict";
    var dr = Ut().default;
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.IX2VanillaUtils =
      Le.IX2VanillaPlugins =
      Le.IX2ElementsReducer =
      Le.IX2Easings =
      Le.IX2EasingUtils =
      Le.IX2BrowserSupport =
        void 0;
    var xD = dr(Qn());
    Le.IX2BrowserSupport = xD;
    var MD = dr(Ao());
    Le.IX2Easings = MD;
    var DD = dr(Ro());
    Le.IX2EasingUtils = DD;
    var FD = dr(WE());
    Le.IX2ElementsReducer = FD;
    var GD = dr(Co());
    Le.IX2VanillaPlugins = GD;
    var XD = dr(xh());
    Le.IX2VanillaUtils = XD;
  });
  var Gh = s((ui) => {
    "use strict";
    Object.defineProperty(ui, "__esModule", { value: !0 });
    ui.ixInstances = void 0;
    var Mh = xe(),
      Dh = xt(),
      pr = zt(),
      {
        IX2_RAW_DATA_IMPORTED: UD,
        IX2_SESSION_STOPPED: VD,
        IX2_INSTANCE_ADDED: BD,
        IX2_INSTANCE_STARTED: WD,
        IX2_INSTANCE_REMOVED: HD,
        IX2_ANIMATION_FRAME_CHANGED: jD,
      } = Mh.IX2EngineActionTypes,
      {
        optimizeFloat: si,
        applyEasing: Fh,
        createBezierEasing: kD,
      } = Dh.IX2EasingUtils,
      { RENDER_GENERAL: KD } = Mh.IX2EngineConstants,
      {
        getItemConfigByKey: Xo,
        getRenderType: zD,
        getStyleProp: YD,
      } = Dh.IX2VanillaUtils,
      $D = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: a,
            smoothing: o,
            restingValue: u,
            actionTypeId: l,
            customEasingFn: f,
            skipMotion: E,
            skipToValue: d,
          } = e,
          { parameters: v } = t.payload,
          O = Math.max(1 - o, 0.01),
          R = v[n];
        R == null && ((O = 1), (R = u));
        let S = Math.max(R, 0) || 0,
          w = si(S - r),
          A = E ? d : si(r + w * O),
          b = A * 100;
        if (A === r && e.current) return e;
        let T, x, L, C;
        for (let H = 0, { length: j } = i; H < j; H++) {
          let { keyframe: re, actionItems: $ } = i[H];
          if ((H === 0 && (T = $[0]), b >= re)) {
            T = $[0];
            let P = i[H + 1],
              _ = P && b !== re;
            (x = _ ? P.actionItems[0] : null),
              _ && ((L = re / 100), (C = (P.keyframe - re) / 100));
          }
        }
        let G = {};
        if (T && !x)
          for (let H = 0, { length: j } = a; H < j; H++) {
            let re = a[H];
            G[re] = Xo(l, re, T.config);
          }
        else if (T && x && L !== void 0 && C !== void 0) {
          let H = (A - L) / C,
            j = T.config.easing,
            re = Fh(j, H, f);
          for (let $ = 0, { length: P } = a; $ < P; $++) {
            let _ = a[$],
              q = Xo(l, _, T.config),
              K = (Xo(l, _, x.config) - q) * re + q;
            G[_] = K;
          }
        }
        return (0, pr.merge)(e, { position: A, current: G });
      },
      QD = (e, t) => {
        let {
            active: r,
            origin: n,
            start: i,
            immediate: a,
            renderType: o,
            verbose: u,
            actionItem: l,
            destination: f,
            destinationKeys: E,
            pluginDuration: d,
            instanceDelay: v,
            customEasingFn: O,
            skipMotion: R,
          } = e,
          S = l.config.easing,
          { duration: w, delay: A } = l.config;
        d != null && (w = d),
          (A = v ?? A),
          o === KD ? (w = 0) : (a || R) && (w = A = 0);
        let { now: b } = t.payload;
        if (r && n) {
          let T = b - (i + A);
          if (u) {
            let H = b - i,
              j = w + A,
              re = si(Math.min(Math.max(0, H / j), 1));
            e = (0, pr.set)(e, "verboseTimeElapsed", j * re);
          }
          if (T < 0) return e;
          let x = si(Math.min(Math.max(0, T / w), 1)),
            L = Fh(S, x, O),
            C = {},
            G = null;
          return (
            E.length &&
              (G = E.reduce((H, j) => {
                let re = f[j],
                  $ = parseFloat(n[j]) || 0,
                  _ = (parseFloat(re) - $) * L + $;
                return (H[j] = _), H;
              }, {})),
            (C.current = G),
            (C.position = x),
            x === 1 && ((C.active = !1), (C.complete = !0)),
            (0, pr.merge)(e, C)
          );
        }
        return e;
      },
      ZD = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case UD:
            return t.payload.ixInstances || Object.freeze({});
          case VD:
            return Object.freeze({});
          case BD: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: a,
                eventTarget: o,
                eventStateKey: u,
                actionListId: l,
                groupIndex: f,
                isCarrier: E,
                origin: d,
                destination: v,
                immediate: O,
                verbose: R,
                continuous: S,
                parameterId: w,
                actionGroups: A,
                smoothing: b,
                restingValue: T,
                pluginInstance: x,
                pluginDuration: L,
                instanceDelay: C,
                skipMotion: G,
                skipToValue: H,
              } = t.payload,
              { actionTypeId: j } = i,
              re = zD(j),
              $ = YD(re, j),
              P = Object.keys(v).filter((q) => v[q] != null),
              { easing: _ } = i.config;
            return (0, pr.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: v,
              destinationKeys: P,
              immediate: O,
              verbose: R,
              current: null,
              actionItem: i,
              actionTypeId: j,
              eventId: a,
              eventTarget: o,
              eventStateKey: u,
              actionListId: l,
              groupIndex: f,
              renderType: re,
              isCarrier: E,
              styleProp: $,
              continuous: S,
              parameterId: w,
              actionGroups: A,
              smoothing: b,
              restingValue: T,
              pluginInstance: x,
              pluginDuration: L,
              instanceDelay: C,
              skipMotion: G,
              skipToValue: H,
              customEasingFn:
                Array.isArray(_) && _.length === 4 ? kD(_) : void 0,
            });
          }
          case WD: {
            let { instanceId: r, time: n } = t.payload;
            return (0, pr.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case HD: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              i = Object.keys(e),
              { length: a } = i;
            for (let o = 0; o < a; o++) {
              let u = i[o];
              u !== r && (n[u] = e[u]);
            }
            return n;
          }
          case jD: {
            let r = e,
              n = Object.keys(e),
              { length: i } = n;
            for (let a = 0; a < i; a++) {
              let o = n[a],
                u = e[o],
                l = u.continuous ? $D : QD;
              r = (0, pr.set)(r, o, l(u, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    ui.ixInstances = ZD;
  });
  var Xh = s((ci) => {
    "use strict";
    Object.defineProperty(ci, "__esModule", { value: !0 });
    ci.ixParameters = void 0;
    var JD = xe(),
      {
        IX2_RAW_DATA_IMPORTED: eF,
        IX2_SESSION_STOPPED: tF,
        IX2_PARAMETER_CHANGED: rF,
      } = JD.IX2EngineActionTypes,
      nF = (e = {}, t) => {
        switch (t.type) {
          case eF:
            return t.payload.ixParameters || {};
          case tF:
            return {};
          case rF: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    ci.ixParameters = nF;
  });
  var Uh = s((li) => {
    "use strict";
    Object.defineProperty(li, "__esModule", { value: !0 });
    li.default = void 0;
    var iF = Va(),
      aF = sf(),
      oF = bf(),
      sF = wf(),
      uF = xt(),
      cF = Gh(),
      lF = Xh(),
      { ixElements: fF } = uF.IX2ElementsReducer,
      dF = (0, iF.combineReducers)({
        ixData: aF.ixData,
        ixRequest: oF.ixRequest,
        ixSession: sF.ixSession,
        ixElements: fF,
        ixInstances: cF.ixInstances,
        ixParameters: lF.ixParameters,
      });
    li.default = dF;
  });
  var Vh = s((Rj, $r) => {
    function pF(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        i,
        a;
      for (a = 0; a < n.length; a++)
        (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
      return r;
    }
    ($r.exports = pF),
      ($r.exports.__esModule = !0),
      ($r.exports.default = $r.exports);
  });
  var Wh = s((wj, Bh) => {
    var vF = gt(),
      EF = Ae(),
      hF = ct(),
      gF = "[object String]";
    function _F(e) {
      return typeof e == "string" || (!EF(e) && hF(e) && vF(e) == gF);
    }
    Bh.exports = _F;
  });
  var jh = s((Cj, Hh) => {
    var yF = yo(),
      IF = yF("length");
    Hh.exports = IF;
  });
  var Kh = s((Nj, kh) => {
    var TF = "\\ud800-\\udfff",
      mF = "\\u0300-\\u036f",
      OF = "\\ufe20-\\ufe2f",
      SF = "\\u20d0-\\u20ff",
      AF = mF + OF + SF,
      bF = "\\ufe0e\\ufe0f",
      RF = "\\u200d",
      wF = RegExp("[" + RF + TF + AF + bF + "]");
    function CF(e) {
      return wF.test(e);
    }
    kh.exports = CF;
  });
  var rg = s((qj, tg) => {
    var Yh = "\\ud800-\\udfff",
      NF = "\\u0300-\\u036f",
      qF = "\\ufe20-\\ufe2f",
      LF = "\\u20d0-\\u20ff",
      PF = NF + qF + LF,
      xF = "\\ufe0e\\ufe0f",
      MF = "[" + Yh + "]",
      Uo = "[" + PF + "]",
      Vo = "\\ud83c[\\udffb-\\udfff]",
      DF = "(?:" + Uo + "|" + Vo + ")",
      $h = "[^" + Yh + "]",
      Qh = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Zh = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      FF = "\\u200d",
      Jh = DF + "?",
      eg = "[" + xF + "]?",
      GF = "(?:" + FF + "(?:" + [$h, Qh, Zh].join("|") + ")" + eg + Jh + ")*",
      XF = eg + Jh + GF,
      UF = "(?:" + [$h + Uo + "?", Uo, Qh, Zh, MF].join("|") + ")",
      zh = RegExp(Vo + "(?=" + Vo + ")|" + UF + XF, "g");
    function VF(e) {
      for (var t = (zh.lastIndex = 0); zh.test(e); ) ++t;
      return t;
    }
    tg.exports = VF;
  });
  var ig = s((Lj, ng) => {
    var BF = jh(),
      WF = Kh(),
      HF = rg();
    function jF(e) {
      return WF(e) ? HF(e) : BF(e);
    }
    ng.exports = jF;
  });
  var og = s((Pj, ag) => {
    var kF = Bn(),
      KF = Wn(),
      zF = wt(),
      YF = Wh(),
      $F = ig(),
      QF = "[object Map]",
      ZF = "[object Set]";
    function JF(e) {
      if (e == null) return 0;
      if (zF(e)) return YF(e) ? $F(e) : e.length;
      var t = KF(e);
      return t == QF || t == ZF ? e.size : kF(e).length;
    }
    ag.exports = JF;
  });
  var ug = s((xj, sg) => {
    var e1 = "Expected a function";
    function t1(e) {
      if (typeof e != "function") throw new TypeError(e1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    sg.exports = t1;
  });
  var Bo = s((Mj, cg) => {
    var r1 = _t(),
      n1 = (function () {
        try {
          var e = r1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    cg.exports = n1;
  });
  var Wo = s((Dj, fg) => {
    var lg = Bo();
    function i1(e, t, r) {
      t == "__proto__" && lg
        ? lg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    fg.exports = i1;
  });
  var pg = s((Fj, dg) => {
    var a1 = Wo(),
      o1 = Ln(),
      s1 = Object.prototype,
      u1 = s1.hasOwnProperty;
    function c1(e, t, r) {
      var n = e[t];
      (!(u1.call(e, t) && o1(n, r)) || (r === void 0 && !(t in e))) &&
        a1(e, t, r);
    }
    dg.exports = c1;
  });
  var hg = s((Gj, Eg) => {
    var l1 = pg(),
      f1 = Vr(),
      d1 = Gn(),
      vg = rt(),
      p1 = rr();
    function v1(e, t, r, n) {
      if (!vg(e)) return e;
      t = f1(t, e);
      for (var i = -1, a = t.length, o = a - 1, u = e; u != null && ++i < a; ) {
        var l = p1(t[i]),
          f = r;
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return e;
        if (i != o) {
          var E = u[l];
          (f = n ? n(E, l, u) : void 0),
            f === void 0 && (f = vg(E) ? E : d1(t[i + 1]) ? [] : {});
        }
        l1(u, l, f), (u = u[l]);
      }
      return e;
    }
    Eg.exports = v1;
  });
  var _g = s((Xj, gg) => {
    var E1 = kn(),
      h1 = hg(),
      g1 = Vr();
    function _1(e, t, r) {
      for (var n = -1, i = t.length, a = {}; ++n < i; ) {
        var o = t[n],
          u = E1(e, o);
        r(u, o) && h1(a, g1(o, e), u);
      }
      return a;
    }
    gg.exports = _1;
  });
  var Ig = s((Uj, yg) => {
    var y1 = Dn(),
      I1 = wa(),
      T1 = no(),
      m1 = ro(),
      O1 = Object.getOwnPropertySymbols,
      S1 = O1
        ? function (e) {
            for (var t = []; e; ) y1(t, T1(e)), (e = I1(e));
            return t;
          }
        : m1;
    yg.exports = S1;
  });
  var mg = s((Vj, Tg) => {
    function A1(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Tg.exports = A1;
  });
  var Sg = s((Bj, Og) => {
    var b1 = rt(),
      R1 = Vn(),
      w1 = mg(),
      C1 = Object.prototype,
      N1 = C1.hasOwnProperty;
    function q1(e) {
      if (!b1(e)) return w1(e);
      var t = R1(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !N1.call(e, n))) || r.push(n);
      return r;
    }
    Og.exports = q1;
  });
  var bg = s((Wj, Ag) => {
    var L1 = ao(),
      P1 = Sg(),
      x1 = wt();
    function M1(e) {
      return x1(e) ? L1(e, !0) : P1(e);
    }
    Ag.exports = M1;
  });
  var wg = s((Hj, Rg) => {
    var D1 = to(),
      F1 = Ig(),
      G1 = bg();
    function X1(e) {
      return D1(e, G1, F1);
    }
    Rg.exports = X1;
  });
  var Ng = s((jj, Cg) => {
    var U1 = _o(),
      V1 = yt(),
      B1 = _g(),
      W1 = wg();
    function H1(e, t) {
      if (e == null) return {};
      var r = U1(W1(e), function (n) {
        return [n];
      });
      return (
        (t = V1(t)),
        B1(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    Cg.exports = H1;
  });
  var Lg = s((kj, qg) => {
    var j1 = yt(),
      k1 = ug(),
      K1 = Ng();
    function z1(e, t) {
      return K1(e, k1(j1(t)));
    }
    qg.exports = z1;
  });
  var xg = s((Kj, Pg) => {
    var Y1 = Bn(),
      $1 = Wn(),
      Q1 = Mr(),
      Z1 = Ae(),
      J1 = wt(),
      e2 = Fn(),
      t2 = Vn(),
      r2 = Un(),
      n2 = "[object Map]",
      i2 = "[object Set]",
      a2 = Object.prototype,
      o2 = a2.hasOwnProperty;
    function s2(e) {
      if (e == null) return !0;
      if (
        J1(e) &&
        (Z1(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          e2(e) ||
          r2(e) ||
          Q1(e))
      )
        return !e.length;
      var t = $1(e);
      if (t == n2 || t == i2) return !e.size;
      if (t2(e)) return !Y1(e).length;
      for (var r in e) if (o2.call(e, r)) return !1;
      return !0;
    }
    Pg.exports = s2;
  });
  var Dg = s((zj, Mg) => {
    var u2 = Wo(),
      c2 = No(),
      l2 = yt();
    function f2(e, t) {
      var r = {};
      return (
        (t = l2(t, 3)),
        c2(e, function (n, i, a) {
          u2(r, i, t(n, i, a));
        }),
        r
      );
    }
    Mg.exports = f2;
  });
  var Gg = s((Yj, Fg) => {
    function d2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    Fg.exports = d2;
  });
  var Ug = s(($j, Xg) => {
    var p2 = zn();
    function v2(e) {
      return typeof e == "function" ? e : p2;
    }
    Xg.exports = v2;
  });
  var Bg = s((Qj, Vg) => {
    var E2 = Gg(),
      h2 = qo(),
      g2 = Ug(),
      _2 = Ae();
    function y2(e, t) {
      var r = _2(e) ? E2 : h2;
      return r(e, g2(t));
    }
    Vg.exports = y2;
  });
  var Hg = s((Zj, Wg) => {
    var I2 = je(),
      T2 = function () {
        return I2.Date.now();
      };
    Wg.exports = T2;
  });
  var Kg = s((Jj, kg) => {
    var m2 = rt(),
      Ho = Hg(),
      jg = Yn(),
      O2 = "Expected a function",
      S2 = Math.max,
      A2 = Math.min;
    function b2(e, t, r) {
      var n,
        i,
        a,
        o,
        u,
        l,
        f = 0,
        E = !1,
        d = !1,
        v = !0;
      if (typeof e != "function") throw new TypeError(O2);
      (t = jg(t) || 0),
        m2(r) &&
          ((E = !!r.leading),
          (d = "maxWait" in r),
          (a = d ? S2(jg(r.maxWait) || 0, t) : a),
          (v = "trailing" in r ? !!r.trailing : v));
      function O(C) {
        var G = n,
          H = i;
        return (n = i = void 0), (f = C), (o = e.apply(H, G)), o;
      }
      function R(C) {
        return (f = C), (u = setTimeout(A, t)), E ? O(C) : o;
      }
      function S(C) {
        var G = C - l,
          H = C - f,
          j = t - G;
        return d ? A2(j, a - H) : j;
      }
      function w(C) {
        var G = C - l,
          H = C - f;
        return l === void 0 || G >= t || G < 0 || (d && H >= a);
      }
      function A() {
        var C = Ho();
        if (w(C)) return b(C);
        u = setTimeout(A, S(C));
      }
      function b(C) {
        return (u = void 0), v && n ? O(C) : ((n = i = void 0), o);
      }
      function T() {
        u !== void 0 && clearTimeout(u), (f = 0), (n = l = i = u = void 0);
      }
      function x() {
        return u === void 0 ? o : b(Ho());
      }
      function L() {
        var C = Ho(),
          G = w(C);
        if (((n = arguments), (i = this), (l = C), G)) {
          if (u === void 0) return R(l);
          if (d) return clearTimeout(u), (u = setTimeout(A, t)), O(l);
        }
        return u === void 0 && (u = setTimeout(A, t)), o;
      }
      return (L.cancel = T), (L.flush = x), L;
    }
    kg.exports = b2;
  });
  var Yg = s((ek, zg) => {
    var R2 = Kg(),
      w2 = rt(),
      C2 = "Expected a function";
    function N2(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(C2);
      return (
        w2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        R2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    zg.exports = N2;
  });
  var fi = s((te) => {
    "use strict";
    var q2 = Je().default;
    Object.defineProperty(te, "__esModule", { value: !0 });
    te.viewportWidthChanged =
      te.testFrameRendered =
      te.stopRequested =
      te.sessionStopped =
      te.sessionStarted =
      te.sessionInitialized =
      te.rawDataImported =
      te.previewRequested =
      te.playbackRequested =
      te.parameterChanged =
      te.mediaQueriesDefined =
      te.instanceStarted =
      te.instanceRemoved =
      te.instanceAdded =
      te.eventStateChanged =
      te.eventListenerAdded =
      te.elementStateChanged =
      te.clearRequested =
      te.animationFrameChanged =
      te.actionListPlaybackChanged =
        void 0;
    var $g = q2(Nr()),
      Qg = xe(),
      L2 = xt(),
      {
        IX2_RAW_DATA_IMPORTED: P2,
        IX2_SESSION_INITIALIZED: x2,
        IX2_SESSION_STARTED: M2,
        IX2_SESSION_STOPPED: D2,
        IX2_PREVIEW_REQUESTED: F2,
        IX2_PLAYBACK_REQUESTED: G2,
        IX2_STOP_REQUESTED: X2,
        IX2_CLEAR_REQUESTED: U2,
        IX2_EVENT_LISTENER_ADDED: V2,
        IX2_TEST_FRAME_RENDERED: B2,
        IX2_EVENT_STATE_CHANGED: W2,
        IX2_ANIMATION_FRAME_CHANGED: H2,
        IX2_PARAMETER_CHANGED: j2,
        IX2_INSTANCE_ADDED: k2,
        IX2_INSTANCE_STARTED: K2,
        IX2_INSTANCE_REMOVED: z2,
        IX2_ELEMENT_STATE_CHANGED: Y2,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: $2,
        IX2_VIEWPORT_WIDTH_CHANGED: Q2,
        IX2_MEDIA_QUERIES_DEFINED: Z2,
      } = Qg.IX2EngineActionTypes,
      { reifyState: J2 } = L2.IX2VanillaUtils,
      eG = (e) => ({ type: P2, payload: (0, $g.default)({}, J2(e)) });
    te.rawDataImported = eG;
    var tG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: x2,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    te.sessionInitialized = tG;
    var rG = () => ({ type: M2 });
    te.sessionStarted = rG;
    var nG = () => ({ type: D2 });
    te.sessionStopped = nG;
    var iG = ({ rawData: e, defer: t }) => ({
      type: F2,
      payload: { defer: t, rawData: e },
    });
    te.previewRequested = iG;
    var aG = ({
      actionTypeId: e = Qg.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: i,
      immediate: a,
      testManual: o,
      verbose: u,
      rawData: l,
    }) => ({
      type: G2,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: o,
        eventId: n,
        allowEvents: i,
        immediate: a,
        verbose: u,
        rawData: l,
      },
    });
    te.playbackRequested = aG;
    var oG = (e) => ({ type: X2, payload: { actionListId: e } });
    te.stopRequested = oG;
    var sG = () => ({ type: U2 });
    te.clearRequested = sG;
    var uG = (e, t) => ({
      type: V2,
      payload: { target: e, listenerParams: t },
    });
    te.eventListenerAdded = uG;
    var cG = (e = 1) => ({ type: B2, payload: { step: e } });
    te.testFrameRendered = cG;
    var lG = (e, t) => ({ type: W2, payload: { stateKey: e, newState: t } });
    te.eventStateChanged = lG;
    var fG = (e, t) => ({ type: H2, payload: { now: e, parameters: t } });
    te.animationFrameChanged = fG;
    var dG = (e, t) => ({ type: j2, payload: { key: e, value: t } });
    te.parameterChanged = dG;
    var pG = (e) => ({ type: k2, payload: (0, $g.default)({}, e) });
    te.instanceAdded = pG;
    var vG = (e, t) => ({ type: K2, payload: { instanceId: e, time: t } });
    te.instanceStarted = vG;
    var EG = (e) => ({ type: z2, payload: { instanceId: e } });
    te.instanceRemoved = EG;
    var hG = (e, t, r, n) => ({
      type: Y2,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    te.elementStateChanged = hG;
    var gG = ({ actionListId: e, isPlaying: t }) => ({
      type: $2,
      payload: { actionListId: e, isPlaying: t },
    });
    te.actionListPlaybackChanged = gG;
    var _G = ({ width: e, mediaQueries: t }) => ({
      type: Q2,
      payload: { width: e, mediaQueries: t },
    });
    te.viewportWidthChanged = _G;
    var yG = () => ({ type: Z2 });
    te.mediaQueriesDefined = yG;
  });
  var e_ = s((Re) => {
    "use strict";
    Object.defineProperty(Re, "__esModule", { value: !0 });
    Re.elementContains = qG;
    Re.getChildElements = PG;
    Re.getClosestElement = void 0;
    Re.getProperty = bG;
    Re.getQuerySelector = wG;
    Re.getRefType = DG;
    Re.getSiblingElements = xG;
    Re.getStyle = AG;
    Re.getValidDocument = CG;
    Re.isSiblingNode = LG;
    Re.matchSelector = RG;
    Re.queryDocument = NG;
    Re.setStyle = SG;
    var IG = xt(),
      TG = xe(),
      { ELEMENT_MATCHES: jo } = IG.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: Zg,
        HTML_ELEMENT: mG,
        PLAIN_OBJECT: OG,
        WF_PAGE: Jg,
      } = TG.IX2EngineConstants;
    function SG(e, t, r) {
      e.style[t] = r;
    }
    function AG(e, t) {
      return e.style[t];
    }
    function bG(e, t) {
      return e[t];
    }
    function RG(e) {
      return (t) => t[jo](e);
    }
    function wG({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(Zg) !== -1) {
          let n = e.split(Zg),
            i = n[0];
          if (((r = n[1]), i !== document.documentElement.getAttribute(Jg)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function CG(e) {
      return e == null || e === document.documentElement.getAttribute(Jg)
        ? document
        : null;
    }
    function NG(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function qG(e, t) {
      return e.contains(t);
    }
    function LG(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function PG(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: i } = e[r],
          { length: a } = i;
        if (a) for (let o = 0; o < a; o++) t.push(i[o]);
      }
      return t;
    }
    function xG(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: i } = e; n < i; n++) {
        let { parentNode: a } = e[n];
        if (!a || !a.children || !a.children.length || r.indexOf(a) !== -1)
          continue;
        r.push(a);
        let o = a.firstElementChild;
        for (; o != null; )
          e.indexOf(o) === -1 && t.push(o), (o = o.nextElementSibling);
      }
      return t;
    }
    var MG = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[jo] && r[jo](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Re.getClosestElement = MG;
    function DG(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? mG
          : OG
        : null;
    }
  });
  var ko = s((nk, r_) => {
    var FG = rt(),
      t_ = Object.create,
      GG = (function () {
        function e() {}
        return function (t) {
          if (!FG(t)) return {};
          if (t_) return t_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    r_.exports = GG;
  });
  var di = s((ik, n_) => {
    function XG() {}
    n_.exports = XG;
  });
  var vi = s((ak, i_) => {
    var UG = ko(),
      VG = di();
    function pi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    pi.prototype = UG(VG.prototype);
    pi.prototype.constructor = pi;
    i_.exports = pi;
  });
  var u_ = s((ok, s_) => {
    var a_ = Ht(),
      BG = Mr(),
      WG = Ae(),
      o_ = a_ ? a_.isConcatSpreadable : void 0;
    function HG(e) {
      return WG(e) || BG(e) || !!(o_ && e && e[o_]);
    }
    s_.exports = HG;
  });
  var f_ = s((sk, l_) => {
    var jG = Dn(),
      kG = u_();
    function c_(e, t, r, n, i) {
      var a = -1,
        o = e.length;
      for (r || (r = kG), i || (i = []); ++a < o; ) {
        var u = e[a];
        t > 0 && r(u)
          ? t > 1
            ? c_(u, t - 1, r, n, i)
            : jG(i, u)
          : n || (i[i.length] = u);
      }
      return i;
    }
    l_.exports = c_;
  });
  var p_ = s((uk, d_) => {
    var KG = f_();
    function zG(e) {
      var t = e == null ? 0 : e.length;
      return t ? KG(e, 1) : [];
    }
    d_.exports = zG;
  });
  var E_ = s((ck, v_) => {
    function YG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    v_.exports = YG;
  });
  var __ = s((lk, g_) => {
    var $G = E_(),
      h_ = Math.max;
    function QG(e, t, r) {
      return (
        (t = h_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, a = h_(n.length - t, 0), o = Array(a);
            ++i < a;

          )
            o[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
          return (u[t] = r(o)), $G(e, this, u);
        }
      );
    }
    g_.exports = QG;
  });
  var I_ = s((fk, y_) => {
    function ZG(e) {
      return function () {
        return e;
      };
    }
    y_.exports = ZG;
  });
  var O_ = s((dk, m_) => {
    var JG = I_(),
      T_ = Bo(),
      eX = zn(),
      tX = T_
        ? function (e, t) {
            return T_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: JG(t),
              writable: !0,
            });
          }
        : eX;
    m_.exports = tX;
  });
  var A_ = s((pk, S_) => {
    var rX = 800,
      nX = 16,
      iX = Date.now;
    function aX(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = iX(),
          i = nX - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= rX) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    S_.exports = aX;
  });
  var R_ = s((vk, b_) => {
    var oX = O_(),
      sX = A_(),
      uX = sX(oX);
    b_.exports = uX;
  });
  var C_ = s((Ek, w_) => {
    var cX = p_(),
      lX = __(),
      fX = R_();
    function dX(e) {
      return fX(lX(e, void 0, cX), e + "");
    }
    w_.exports = dX;
  });
  var L_ = s((hk, q_) => {
    var N_ = oo(),
      pX = N_ && new N_();
    q_.exports = pX;
  });
  var x_ = s((gk, P_) => {
    function vX() {}
    P_.exports = vX;
  });
  var Ko = s((_k, D_) => {
    var M_ = L_(),
      EX = x_(),
      hX = M_
        ? function (e) {
            return M_.get(e);
          }
        : EX;
    D_.exports = hX;
  });
  var G_ = s((yk, F_) => {
    var gX = {};
    F_.exports = gX;
  });
  var zo = s((Ik, U_) => {
    var X_ = G_(),
      _X = Object.prototype,
      yX = _X.hasOwnProperty;
    function IX(e) {
      for (
        var t = e.name + "", r = X_[t], n = yX.call(X_, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          a = i.func;
        if (a == null || a == e) return i.name;
      }
      return t;
    }
    U_.exports = IX;
  });
  var hi = s((Tk, V_) => {
    var TX = ko(),
      mX = di(),
      OX = 4294967295;
    function Ei(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = OX),
        (this.__views__ = []);
    }
    Ei.prototype = TX(mX.prototype);
    Ei.prototype.constructor = Ei;
    V_.exports = Ei;
  });
  var W_ = s((mk, B_) => {
    function SX(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    B_.exports = SX;
  });
  var j_ = s((Ok, H_) => {
    var AX = hi(),
      bX = vi(),
      RX = W_();
    function wX(e) {
      if (e instanceof AX) return e.clone();
      var t = new bX(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = RX(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    H_.exports = wX;
  });
  var z_ = s((Sk, K_) => {
    var CX = hi(),
      k_ = vi(),
      NX = di(),
      qX = Ae(),
      LX = ct(),
      PX = j_(),
      xX = Object.prototype,
      MX = xX.hasOwnProperty;
    function gi(e) {
      if (LX(e) && !qX(e) && !(e instanceof CX)) {
        if (e instanceof k_) return e;
        if (MX.call(e, "__wrapped__")) return PX(e);
      }
      return new k_(e);
    }
    gi.prototype = NX.prototype;
    gi.prototype.constructor = gi;
    K_.exports = gi;
  });
  var $_ = s((Ak, Y_) => {
    var DX = hi(),
      FX = Ko(),
      GX = zo(),
      XX = z_();
    function UX(e) {
      var t = GX(e),
        r = XX[t];
      if (typeof r != "function" || !(t in DX.prototype)) return !1;
      if (e === r) return !0;
      var n = FX(r);
      return !!n && e === n[0];
    }
    Y_.exports = UX;
  });
  var ey = s((bk, J_) => {
    var Q_ = vi(),
      VX = C_(),
      BX = Ko(),
      Yo = zo(),
      WX = Ae(),
      Z_ = $_(),
      HX = "Expected a function",
      jX = 8,
      kX = 32,
      KX = 128,
      zX = 256;
    function YX(e) {
      return VX(function (t) {
        var r = t.length,
          n = r,
          i = Q_.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var a = t[n];
          if (typeof a != "function") throw new TypeError(HX);
          if (i && !o && Yo(a) == "wrapper") var o = new Q_([], !0);
        }
        for (n = o ? n : r; ++n < r; ) {
          a = t[n];
          var u = Yo(a),
            l = u == "wrapper" ? BX(a) : void 0;
          l &&
          Z_(l[0]) &&
          l[1] == (KX | jX | kX | zX) &&
          !l[4].length &&
          l[9] == 1
            ? (o = o[Yo(l[0])].apply(o, l[3]))
            : (o = a.length == 1 && Z_(a) ? o[u]() : o.thru(a));
        }
        return function () {
          var f = arguments,
            E = f[0];
          if (o && f.length == 1 && WX(E)) return o.plant(E).value();
          for (var d = 0, v = r ? t[d].apply(this, f) : E; ++d < r; )
            v = t[d].call(this, v);
          return v;
        };
      });
    }
    J_.exports = YX;
  });
  var ry = s((Rk, ty) => {
    var $X = ey(),
      QX = $X();
    ty.exports = QX;
  });
  var iy = s((wk, ny) => {
    function ZX(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    ny.exports = ZX;
  });
  var oy = s((Ck, ay) => {
    var JX = iy(),
      $o = Yn();
    function eU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = $o(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = $o(t)), (t = t === t ? t : 0)),
        JX($o(e), t, r)
      );
    }
    ay.exports = eU;
  });
  var Sy = s((mi) => {
    "use strict";
    var Ti = Je().default;
    Object.defineProperty(mi, "__esModule", { value: !0 });
    mi.default = void 0;
    var Ge = Ti(Nr()),
      tU = Ti(ry()),
      rU = Ti(Kn()),
      nU = Ti(oy()),
      Mt = xe(),
      Qo = ts(),
      _i = fi(),
      iU = xt(),
      {
        MOUSE_CLICK: aU,
        MOUSE_SECOND_CLICK: oU,
        MOUSE_DOWN: sU,
        MOUSE_UP: uU,
        MOUSE_OVER: cU,
        MOUSE_OUT: lU,
        DROPDOWN_CLOSE: fU,
        DROPDOWN_OPEN: dU,
        SLIDER_ACTIVE: pU,
        SLIDER_INACTIVE: vU,
        TAB_ACTIVE: EU,
        TAB_INACTIVE: hU,
        NAVBAR_CLOSE: gU,
        NAVBAR_OPEN: _U,
        MOUSE_MOVE: yU,
        PAGE_SCROLL_DOWN: Ey,
        SCROLL_INTO_VIEW: hy,
        SCROLL_OUT_OF_VIEW: IU,
        PAGE_SCROLL_UP: TU,
        SCROLLING_IN_VIEW: mU,
        PAGE_FINISH: gy,
        ECOMMERCE_CART_CLOSE: OU,
        ECOMMERCE_CART_OPEN: SU,
        PAGE_START: _y,
        PAGE_SCROLL: AU,
      } = Mt.EventTypeConsts,
      Zo = "COMPONENT_ACTIVE",
      yy = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: sy } = Mt.IX2EngineConstants,
      { getNamespacedParameterId: uy } = iU.IX2VanillaUtils,
      Iy = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      Zr = Iy(({ element: e, nativeEvent: t }) => e === t.target),
      bU = Iy(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      ot = (0, tU.default)([Zr, bU]),
      Ty = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            i = n[t];
          if (i && !wU[i.eventTypeId]) return i;
        }
        return null;
      },
      RU = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!Ty(e, n);
      },
      De = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
        let { action: a, id: o } = t,
          { actionListId: u, autoStopEventId: l } = a.config,
          f = Ty(e, l);
        return (
          f &&
            (0, Qo.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: r,
              eventStateKey: l + sy + n.split(sy)[1],
              actionListId: (0, rU.default)(f, "action.config.actionListId"),
            }),
          (0, Qo.stopActionGroup)({
            store: e,
            eventId: o,
            eventTarget: r,
            eventStateKey: n,
            actionListId: u,
          }),
          (0, Qo.startActionGroup)({
            store: e,
            eventId: o,
            eventTarget: r,
            eventStateKey: n,
            actionListId: u,
          }),
          i
        );
      },
      ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      Jr = { handler: ke(ot, De) },
      my = (0, Ge.default)({}, Jr, { types: [Zo, yy].join(" ") }),
      Jo = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      cy = "mouseover mouseout",
      es = { types: Jo },
      wU = { PAGE_START: _y, PAGE_FINISH: gy },
      Qr = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, nU.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      CU = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      NU = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: i } = t,
          a = e.contains(n);
        if (r === "mouseover" && a) return !0;
        let o = e.contains(i);
        return !!(r === "mouseout" && a && o);
      },
      qU = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: i } = Qr(),
          a = r.scrollOffsetValue,
          l = r.scrollOffsetUnit === "PX" ? a : (i * (a || 0)) / 100;
        return CU(t.getBoundingClientRect(), {
          left: 0,
          top: l,
          right: n,
          bottom: i - l,
        });
      },
      Oy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          i = [Zo, yy].indexOf(n) !== -1 ? n === Zo : r.isActive,
          a = (0, Ge.default)({}, r, { isActive: i });
        return ((!r || a.isActive !== r.isActive) && e(t, a)) || a;
      },
      ly = (e) => (t, r) => {
        let n = { elementHovered: NU(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      LU = (e) => (t, r) => {
        let n = (0, Ge.default)({}, r, { elementVisible: qU(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      fy =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: i, innerHeight: a } = Qr(),
            {
              event: { config: o, eventTypeId: u },
            } = t,
            { scrollOffsetValue: l, scrollOffsetUnit: f } = o,
            E = f === "PX",
            d = i - a,
            v = Number((n / d).toFixed(2));
          if (r && r.percentTop === v) return r;
          let O = (E ? l : (a * (l || 0)) / 100) / d,
            R,
            S,
            w = 0;
          r &&
            ((R = v > r.percentTop),
            (S = r.scrollingDown !== R),
            (w = S ? v : r.anchorTop));
          let A = u === Ey ? v >= w + O : v <= w - O,
            b = (0, Ge.default)({}, r, {
              percentTop: v,
              inBounds: A,
              anchorTop: w,
              scrollingDown: R,
            });
          return (r && A && (S || b.inBounds !== r.inBounds) && e(t, b)) || b;
        },
      PU = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      xU = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      MU = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      dy =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      yi = (e = !0) =>
        (0, Ge.default)({}, my, {
          handler: ke(
            e ? ot : Zr,
            Oy((t, r) => (r.isActive ? Jr.handler(t, r) : r))
          ),
        }),
      Ii = (e = !0) =>
        (0, Ge.default)({}, my, {
          handler: ke(
            e ? ot : Zr,
            Oy((t, r) => (r.isActive ? r : Jr.handler(t, r)))
          ),
        }),
      py = (0, Ge.default)({}, es, {
        handler: LU((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: i } = e,
            { ixData: a } = i.getState(),
            { events: o } = a;
          return !o[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === hy) === r
            ? (De(e), (0, Ge.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      vy = 0.05,
      DU = {
        [pU]: yi(),
        [vU]: Ii(),
        [dU]: yi(),
        [fU]: Ii(),
        [_U]: yi(!1),
        [gU]: Ii(!1),
        [EU]: yi(),
        [hU]: Ii(),
        [SU]: { types: "ecommerce-cart-open", handler: ke(ot, De) },
        [OU]: { types: "ecommerce-cart-close", handler: ke(ot, De) },
        [aU]: {
          types: "click",
          handler: ke(
            ot,
            dy((e, { clickCount: t }) => {
              RU(e) ? t === 1 && De(e) : De(e);
            })
          ),
        },
        [oU]: {
          types: "click",
          handler: ke(
            ot,
            dy((e, { clickCount: t }) => {
              t === 2 && De(e);
            })
          ),
        },
        [sU]: (0, Ge.default)({}, Jr, { types: "mousedown" }),
        [uU]: (0, Ge.default)({}, Jr, { types: "mouseup" }),
        [cU]: {
          types: cy,
          handler: ke(
            ot,
            ly((e, t) => {
              t.elementHovered && De(e);
            })
          ),
        },
        [lU]: {
          types: cy,
          handler: ke(
            ot,
            ly((e, t) => {
              t.elementHovered || De(e);
            })
          ),
        },
        [yU]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: i,
            },
            a = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: o,
                selectedAxis: u,
                continuousParameterGroupId: l,
                reverse: f,
                restingState: E = 0,
              } = r,
              {
                clientX: d = a.clientX,
                clientY: v = a.clientY,
                pageX: O = a.pageX,
                pageY: R = a.pageY,
              } = n,
              S = u === "X_AXIS",
              w = n.type === "mouseout",
              A = E / 100,
              b = l,
              T = !1;
            switch (o) {
              case Mt.EventBasedOn.VIEWPORT: {
                A = S
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(v, window.innerHeight) / window.innerHeight;
                break;
              }
              case Mt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: x,
                  scrollTop: L,
                  scrollWidth: C,
                  scrollHeight: G,
                } = Qr();
                A = S ? Math.min(x + O, C) / C : Math.min(L + R, G) / G;
                break;
              }
              case Mt.EventBasedOn.ELEMENT:
              default: {
                b = uy(i, l);
                let x = n.type.indexOf("mouse") === 0;
                if (x && ot({ element: t, nativeEvent: n }) !== !0) break;
                let L = t.getBoundingClientRect(),
                  { left: C, top: G, width: H, height: j } = L;
                if (!x && !PU({ left: d, top: v }, L)) break;
                (T = !0), (A = S ? (d - C) / H : (v - G) / j);
                break;
              }
            }
            return (
              w && (A > 1 - vy || A < vy) && (A = Math.round(A)),
              (o !== Mt.EventBasedOn.ELEMENT || T || T !== a.elementHovered) &&
                ((A = f ? 1 - A : A),
                e.dispatch((0, _i.parameterChanged)(b, A))),
              { elementHovered: T, clientX: d, clientY: v, pageX: O, pageY: R }
            );
          },
        },
        [AU]: {
          types: Jo,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: i, scrollHeight: a, clientHeight: o } = Qr(),
              u = i / (a - o);
            (u = n ? 1 - u : u), e.dispatch((0, _i.parameterChanged)(r, u));
          },
        },
        [mU]: {
          types: Jo,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: a,
                scrollTop: o,
                scrollWidth: u,
                scrollHeight: l,
                clientHeight: f,
              } = Qr(),
              {
                basedOn: E,
                selectedAxis: d,
                continuousParameterGroupId: v,
                startsEntering: O,
                startsExiting: R,
                addEndOffset: S,
                addStartOffset: w,
                addOffsetValue: A = 0,
                endOffsetValue: b = 0,
              } = r,
              T = d === "X_AXIS";
            if (E === Mt.EventBasedOn.VIEWPORT) {
              let x = T ? a / u : o / l;
              return (
                x !== i.scrollPercent &&
                  t.dispatch((0, _i.parameterChanged)(v, x)),
                { scrollPercent: x }
              );
            } else {
              let x = uy(n, v),
                L = e.getBoundingClientRect(),
                C = (w ? A : 0) / 100,
                G = (S ? b : 0) / 100;
              (C = O ? C : 1 - C), (G = R ? G : 1 - G);
              let H = L.top + Math.min(L.height * C, f),
                re = L.top + L.height * G - H,
                $ = Math.min(f + re, l),
                _ = Math.min(Math.max(0, f - H), $) / $;
              return (
                _ !== i.scrollPercent &&
                  t.dispatch((0, _i.parameterChanged)(x, _)),
                { scrollPercent: _ }
              );
            }
          },
        },
        [hy]: py,
        [IU]: py,
        [Ey]: (0, Ge.default)({}, es, {
          handler: fy((e, t) => {
            t.scrollingDown && De(e);
          }),
        }),
        [TU]: (0, Ge.default)({}, es, {
          handler: fy((e, t) => {
            t.scrollingDown || De(e);
          }),
        }),
        [gy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: ke(Zr, xU(De)),
        },
        [_y]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: ke(Zr, MU(De)),
        },
      };
    mi.default = DU;
  });
  var ts = s((Ot) => {
    "use strict";
    var ze = Je().default,
      FU = Ut().default;
    Object.defineProperty(Ot, "__esModule", { value: !0 });
    Ot.observeRequests = dV;
    Ot.startActionGroup = us;
    Ot.startEngine = bi;
    Ot.stopActionGroup = ss;
    Ot.stopAllActionGroups = Py;
    Ot.stopEngine = Ri;
    var GU = ze(Nr()),
      XU = ze(Vh()),
      UU = ze(Oo()),
      mt = ze(Kn()),
      VU = ze(og()),
      BU = ze(Lg()),
      WU = ze(xg()),
      HU = ze(Dg()),
      en = ze(Bg()),
      jU = ze(Yg()),
      Ke = xe(),
      Ry = xt(),
      ge = fi(),
      me = FU(e_()),
      kU = ze(Sy()),
      KU = ["store", "computedStyle"],
      zU = Object.keys(Ke.QuickEffectIds),
      rs = (e) => zU.includes(e),
      {
        COLON_DELIMITER: ns,
        BOUNDARY_SELECTOR: Oi,
        HTML_ELEMENT: wy,
        RENDER_GENERAL: YU,
        W_MOD_IX: Ay,
      } = Ke.IX2EngineConstants,
      {
        getAffectedElements: Si,
        getElementId: $U,
        getDestinationValues: is,
        observeStore: Dt,
        getInstanceId: QU,
        renderHTMLElement: ZU,
        clearAllStyles: Cy,
        getMaxDurationItemIndex: JU,
        getComputedStyle: eV,
        getInstanceOrigin: tV,
        reduceListToGroup: rV,
        shouldNamespaceEventParameter: nV,
        getNamespacedParameterId: iV,
        shouldAllowMediaQuery: Ai,
        cleanupHTMLElement: aV,
        stringifyTarget: oV,
        mediaQueriesEqual: sV,
        shallowEqual: uV,
      } = Ry.IX2VanillaUtils,
      {
        isPluginType: as,
        createPluginInstance: os,
        getPluginDuration: cV,
      } = Ry.IX2VanillaPlugins,
      by = navigator.userAgent,
      lV = by.match(/iPad/i) || by.match(/iPhone/),
      fV = 12;
    function dV(e) {
      Dt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: EV }),
        Dt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: hV,
        }),
        Dt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: gV }),
        Dt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: _V });
    }
    function pV(e) {
      Dt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Ri(e),
            Cy({ store: e, elementApi: me }),
            bi({ store: e, allowEvents: !0 }),
            Ny();
        },
      });
    }
    function vV(e, t) {
      let r = Dt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function EV({ rawData: e, defer: t }, r) {
      let n = () => {
        bi({ store: r, rawData: e, allowEvents: !0 }), Ny();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Ny() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function hV(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          eventId: a,
          allowEvents: o,
          immediate: u,
          testManual: l,
          verbose: f = !0,
        } = e,
        { rawData: E } = e;
      if (n && i && E && u) {
        let d = E.actionLists[n];
        d && (E = rV({ actionList: d, actionItemId: i, rawData: E }));
      }
      if (
        (bi({ store: t, rawData: E, allowEvents: o, testManual: l }),
        (n && r === Ke.ActionTypeConsts.GENERAL_START_ACTION) || rs(r))
      ) {
        ss({ store: t, actionListId: n }),
          Ly({ store: t, actionListId: n, eventId: a });
        let d = us({
          store: t,
          eventId: a,
          actionListId: n,
          immediate: u,
          verbose: f,
        });
        f &&
          d &&
          t.dispatch(
            (0, ge.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !u,
            })
          );
      }
    }
    function gV({ actionListId: e }, t) {
      e ? ss({ store: t, actionListId: e }) : Py({ store: t }), Ri(t);
    }
    function _V(e, t) {
      Ri(t), Cy({ store: t, elementApi: me });
    }
    function bi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: i } = e.getState();
      t && e.dispatch((0, ge.rawDataImported)(t)),
        i.active ||
          (e.dispatch(
            (0, ge.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Oi),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (SV(e),
            yV(),
            e.getState().ixSession.hasDefinedMediaQueries && pV(e)),
          e.dispatch((0, ge.sessionStarted)()),
          IV(e, n));
    }
    function yV() {
      let { documentElement: e } = document;
      e.className.indexOf(Ay) === -1 && (e.className += ` ${Ay}`);
    }
    function IV(e, t) {
      let r = (n) => {
        let { ixSession: i, ixParameters: a } = e.getState();
        i.active &&
          (e.dispatch((0, ge.animationFrameChanged)(n, a)),
          t ? vV(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Ri(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(TV), e.dispatch((0, ge.sessionStopped)());
      }
    }
    function TV({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function mV({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: a,
      parameterGroup: o,
      smoothing: u,
      restingValue: l,
    }) {
      let { ixData: f, ixSession: E } = e.getState(),
        { events: d } = f,
        v = d[n],
        { eventTypeId: O } = v,
        R = {},
        S = {},
        w = [],
        { continuousActionGroups: A } = o,
        { id: b } = o;
      nV(O, i) && (b = iV(t, b));
      let T = E.hasBoundaryNodes && r ? me.getClosestElement(r, Oi) : null;
      A.forEach((x) => {
        let { keyframe: L, actionItems: C } = x;
        C.forEach((G) => {
          let { actionTypeId: H } = G,
            { target: j } = G.config;
          if (!j) return;
          let re = j.boundaryMode ? T : null,
            $ = oV(j) + ns + H;
          if (((S[$] = OV(S[$], L, G)), !R[$])) {
            R[$] = !0;
            let { config: P } = G;
            Si({
              config: P,
              event: v,
              eventTarget: r,
              elementRoot: re,
              elementApi: me,
            }).forEach((_) => {
              w.push({ element: _, key: $ });
            });
          }
        });
      }),
        w.forEach(({ element: x, key: L }) => {
          let C = S[L],
            G = (0, mt.default)(C, "[0].actionItems[0]", {}),
            { actionTypeId: H } = G,
            j = as(H) ? os(H)(x, G) : null,
            re = is({ element: x, actionItem: G, elementApi: me }, j);
          cs({
            store: e,
            element: x,
            eventId: n,
            actionListId: a,
            actionItem: G,
            destination: re,
            continuous: !0,
            parameterId: b,
            actionGroups: C,
            smoothing: u,
            restingValue: l,
            pluginInstance: j,
          });
        });
    }
    function OV(e = [], t, r) {
      let n = [...e],
        i;
      return (
        n.some((a, o) => (a.keyframe === t ? ((i = o), !0) : !1)),
        i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[i].actionItems.push(r),
        n
      );
    }
    function SV(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      qy(e),
        (0, en.default)(r, (i, a) => {
          let o = kU.default[a];
          if (!o) {
            console.warn(`IX2 event type not configured: ${a}`);
            return;
          }
          NV({ logic: o, store: e, events: i });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && bV(e);
    }
    var AV = ["resize", "orientationchange"];
    function bV(e) {
      let t = () => {
        qy(e);
      };
      AV.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, ge.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function qy(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: i } = r;
        e.dispatch((0, ge.viewportWidthChanged)({ width: n, mediaQueries: i }));
      }
    }
    var RV = (e, t) => (0, BU.default)((0, HU.default)(e, t), WU.default),
      wV = (e, t) => {
        (0, en.default)(e, (r, n) => {
          r.forEach((i, a) => {
            let o = n + ns + a;
            t(i, n, o);
          });
        });
      },
      CV = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Si({ config: t, elementApi: me });
      };
    function NV({ logic: e, store: t, events: r }) {
      qV(r);
      let { types: n, handler: i } = e,
        { ixData: a } = t.getState(),
        { actionLists: o } = a,
        u = RV(r, CV);
      if (!(0, VU.default)(u)) return;
      (0, en.default)(u, (d, v) => {
        let O = r[v],
          { action: R, id: S, mediaQueries: w = a.mediaQueryKeys } = O,
          { actionListId: A } = R.config;
        sV(w, a.mediaQueryKeys) || t.dispatch((0, ge.mediaQueriesDefined)()),
          R.actionTypeId === Ke.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(O.config) ? O.config : [O.config]).forEach((T) => {
              let { continuousParameterGroupId: x } = T,
                L = (0, mt.default)(o, `${A}.continuousParameterGroups`, []),
                C = (0, UU.default)(L, ({ id: j }) => j === x),
                G = (T.smoothing || 0) / 100,
                H = (T.restingState || 0) / 100;
              C &&
                d.forEach((j, re) => {
                  let $ = S + ns + re;
                  mV({
                    store: t,
                    eventStateKey: $,
                    eventTarget: j,
                    eventId: S,
                    eventConfig: T,
                    actionListId: A,
                    parameterGroup: C,
                    smoothing: G,
                    restingValue: H,
                  });
                });
            }),
          (R.actionTypeId === Ke.ActionTypeConsts.GENERAL_START_ACTION ||
            rs(R.actionTypeId)) &&
            Ly({ store: t, actionListId: A, eventId: S });
      });
      let l = (d) => {
          let { ixSession: v } = t.getState();
          wV(u, (O, R, S) => {
            let w = r[R],
              A = v.eventState[S],
              { action: b, mediaQueries: T = a.mediaQueryKeys } = w;
            if (!Ai(T, v.mediaQueryKey)) return;
            let x = (L = {}) => {
              let C = i(
                {
                  store: t,
                  element: O,
                  event: w,
                  eventConfig: L,
                  nativeEvent: d,
                  eventStateKey: S,
                },
                A
              );
              uV(C, A) || t.dispatch((0, ge.eventStateChanged)(S, C));
            };
            b.actionTypeId === Ke.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(w.config) ? w.config : [w.config]).forEach(x)
              : x();
          });
        },
        f = (0, jU.default)(l, fV),
        E = ({ target: d = document, types: v, throttle: O }) => {
          v.split(" ")
            .filter(Boolean)
            .forEach((R) => {
              let S = O ? f : l;
              d.addEventListener(R, S),
                t.dispatch((0, ge.eventListenerAdded)(d, [R, S]));
            });
        };
      Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e);
    }
    function qV(e) {
      if (!lV) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: i, target: a } = e[n],
          o = me.getQuerySelector(a);
        t[o] ||
          ((i === Ke.EventTypeConsts.MOUSE_CLICK ||
            i === Ke.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[o] = !0),
            (r += o + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Ly({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: i } = e.getState(),
        { actionLists: a, events: o } = n,
        u = o[r],
        l = a[t];
      if (l && l.useFirstGroupAsInitialState) {
        let f = (0, mt.default)(l, "actionItemGroups[0].actionItems", []),
          E = (0, mt.default)(u, "mediaQueries", n.mediaQueryKeys);
        if (!Ai(E, i.mediaQueryKey)) return;
        f.forEach((d) => {
          var v;
          let { config: O, actionTypeId: R } = d,
            S =
              (O == null || (v = O.target) === null || v === void 0
                ? void 0
                : v.useEventTarget) === !0
                ? { target: u.target, targets: u.targets }
                : O,
            w = Si({ config: S, event: u, elementApi: me }),
            A = as(R);
          w.forEach((b) => {
            let T = A ? os(R)(b, d) : null;
            cs({
              destination: is({ element: b, actionItem: d, elementApi: me }, T),
              immediate: !0,
              store: e,
              element: b,
              eventId: r,
              actionItem: d,
              actionListId: t,
              pluginInstance: T,
            });
          });
        });
      }
    }
    function Py({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, en.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: i } = r;
          ls(r, e),
            i &&
              e.dispatch(
                (0, ge.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ss({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
    }) {
      let { ixInstances: a, ixSession: o } = e.getState(),
        u = o.hasBoundaryNodes && r ? me.getClosestElement(r, Oi) : null;
      (0, en.default)(a, (l) => {
        let f = (0, mt.default)(l, "actionItem.config.target.boundaryMode"),
          E = n ? l.eventStateKey === n : !0;
        if (l.actionListId === i && l.eventId === t && E) {
          if (u && f && !me.elementContains(u, l.element)) return;
          ls(l, e),
            l.verbose &&
              e.dispatch(
                (0, ge.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function us({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: a = 0,
      immediate: o,
      verbose: u,
    }) {
      var l;
      let { ixData: f, ixSession: E } = e.getState(),
        { events: d } = f,
        v = d[t] || {},
        { mediaQueries: O = f.mediaQueryKeys } = v,
        R = (0, mt.default)(f, `actionLists.${i}`, {}),
        { actionItemGroups: S, useFirstGroupAsInitialState: w } = R;
      if (!S || !S.length) return !1;
      a >= S.length && (0, mt.default)(v, "config.loop") && (a = 0),
        a === 0 && w && a++;
      let b =
          (a === 0 || (a === 1 && w)) &&
          rs((l = v.action) === null || l === void 0 ? void 0 : l.actionTypeId)
            ? v.config.delay
            : void 0,
        T = (0, mt.default)(S, [a, "actionItems"], []);
      if (!T.length || !Ai(O, E.mediaQueryKey)) return !1;
      let x = E.hasBoundaryNodes && r ? me.getClosestElement(r, Oi) : null,
        L = JU(T),
        C = !1;
      return (
        T.forEach((G, H) => {
          let { config: j, actionTypeId: re } = G,
            $ = as(re),
            { target: P } = j;
          if (!P) return;
          let _ = P.boundaryMode ? x : null;
          Si({
            config: j,
            event: v,
            eventTarget: r,
            elementRoot: _,
            elementApi: me,
          }).forEach((M, F) => {
            let K = $ ? os(re)(M, G) : null,
              Z = $ ? cV(re)(M, G) : null;
            C = !0;
            let N = L === H && F === 0,
              V = eV({ element: M, actionItem: G }),
              B = is({ element: M, actionItem: G, elementApi: me }, K);
            cs({
              store: e,
              element: M,
              actionItem: G,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: i,
              groupIndex: a,
              isCarrier: N,
              computedStyle: V,
              destination: B,
              immediate: o,
              verbose: u,
              pluginInstance: K,
              pluginDuration: Z,
              instanceDelay: b,
            });
          });
        }),
        C
      );
    }
    function cs(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        i = (0, XU.default)(e, KU),
        {
          element: a,
          actionItem: o,
          immediate: u,
          pluginInstance: l,
          continuous: f,
          restingValue: E,
          eventId: d,
        } = i,
        v = !f,
        O = QU(),
        { ixElements: R, ixSession: S, ixData: w } = r.getState(),
        A = $U(R, a),
        { refState: b } = R[A] || {},
        T = me.getRefType(a),
        x = S.reducedMotion && Ke.ReducedMotionTypes[o.actionTypeId],
        L;
      if (x && f)
        switch (
          (t = w.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case Ke.EventTypeConsts.MOUSE_MOVE:
          case Ke.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            L = E;
            break;
          default:
            L = 0.5;
            break;
        }
      let C = tV(a, b, n, o, me, l);
      if (
        (r.dispatch(
          (0, ge.instanceAdded)(
            (0, GU.default)(
              {
                instanceId: O,
                elementId: A,
                origin: C,
                refType: T,
                skipMotion: x,
                skipToValue: L,
              },
              i
            )
          )
        ),
        xy(document.body, "ix2-animation-started", O),
        u)
      ) {
        LV(r, O);
        return;
      }
      Dt({ store: r, select: ({ ixInstances: G }) => G[O], onChange: My }),
        v && r.dispatch((0, ge.instanceStarted)(O, S.tick));
    }
    function ls(e, t) {
      xy(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: i } = t.getState(),
        { ref: a, refType: o } = i[r] || {};
      o === wy && aV(a, n, me), t.dispatch((0, ge.instanceRemoved)(e.id));
    }
    function xy(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function LV(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, ge.instanceStarted)(t, 0)),
        e.dispatch((0, ge.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      My(n[t], e);
    }
    function My(e, t) {
      let {
          active: r,
          continuous: n,
          complete: i,
          elementId: a,
          actionItem: o,
          actionTypeId: u,
          renderType: l,
          current: f,
          groupIndex: E,
          eventId: d,
          eventTarget: v,
          eventStateKey: O,
          actionListId: R,
          isCarrier: S,
          styleProp: w,
          verbose: A,
          pluginInstance: b,
        } = e,
        { ixData: T, ixSession: x } = t.getState(),
        { events: L } = T,
        C = L[d] || {},
        { mediaQueries: G = T.mediaQueryKeys } = C;
      if (Ai(G, x.mediaQueryKey) && (n || r || i)) {
        if (f || (l === YU && i)) {
          t.dispatch((0, ge.elementStateChanged)(a, u, f, o));
          let { ixElements: H } = t.getState(),
            { ref: j, refType: re, refState: $ } = H[a] || {},
            P = $ && $[u];
          switch (re) {
            case wy: {
              ZU(j, $, P, d, o, w, me, l, b);
              break;
            }
          }
        }
        if (i) {
          if (S) {
            let H = us({
              store: t,
              eventId: d,
              eventTarget: v,
              eventStateKey: O,
              actionListId: R,
              groupIndex: E + 1,
              verbose: A,
            });
            A &&
              !H &&
              t.dispatch(
                (0, ge.actionListPlaybackChanged)({
                  actionListId: R,
                  isPlaying: !1,
                })
              );
          }
          ls(e, t);
        }
      }
    }
  });
  var Fy = s((dt) => {
    "use strict";
    var PV = Ut().default,
      xV = Je().default;
    Object.defineProperty(dt, "__esModule", { value: !0 });
    dt.actions = void 0;
    dt.destroy = Dy;
    dt.init = XV;
    dt.setEnv = GV;
    dt.store = void 0;
    Sl();
    var MV = Va(),
      DV = xV(Uh()),
      fs = ts(),
      FV = PV(fi());
    dt.actions = FV;
    var wi = (0, MV.createStore)(DV.default);
    dt.store = wi;
    function GV(e) {
      e() && (0, fs.observeRequests)(wi);
    }
    function XV(e) {
      Dy(), (0, fs.startEngine)({ store: wi, rawData: e, allowEvents: !0 });
    }
    function Dy() {
      (0, fs.stopEngine)(wi);
    }
  });
  var Vy = s((Pk, Uy) => {
    var Gy = st(),
      Xy = Fy();
    Xy.setEnv(Gy.env);
    Gy.define(
      "ix2",
      (Uy.exports = function () {
        return Xy;
      })
    );
  });
  var Wy = s((xk, By) => {
    var vr = st();
    vr.define(
      "links",
      (By.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          a = vr.env(),
          o = window.location,
          u = document.createElement("a"),
          l = "w--current",
          f = /index\.(html|php)$/,
          E = /\/$/,
          d,
          v;
        r.ready = r.design = r.preview = O;
        function O() {
          (i = a && vr.env("design")),
            (v = vr.env("slug") || o.pathname || ""),
            vr.scroll.off(S),
            (d = []);
          for (var A = document.links, b = 0; b < A.length; ++b) R(A[b]);
          d.length && (vr.scroll.on(S), S());
        }
        function R(A) {
          var b =
            (i && A.getAttribute("href-disabled")) || A.getAttribute("href");
          if (((u.href = b), !(b.indexOf(":") >= 0))) {
            var T = e(A);
            if (
              u.hash.length > 1 &&
              u.host + u.pathname === o.host + o.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
              var x = e(u.hash);
              x.length && d.push({ link: T, sec: x, active: !1 });
              return;
            }
            if (!(b === "#" || b === "")) {
              var L = u.href === o.href || b === v || (f.test(b) && E.test(v));
              w(T, l, L);
            }
          }
        }
        function S() {
          var A = n.scrollTop(),
            b = n.height();
          t.each(d, function (T) {
            var x = T.link,
              L = T.sec,
              C = L.offset().top,
              G = L.outerHeight(),
              H = b * 0.5,
              j = L.is(":visible") && C + G - H >= A && C + H <= A + b;
            T.active !== j && ((T.active = j), w(x, l, j));
          });
        }
        function w(A, b, T) {
          var x = A.hasClass(b);
          (T && x) || (!T && !x) || (T ? A.addClass(b) : A.removeClass(b));
        }
        return r;
      })
    );
  });
  var jy = s((Mk, Hy) => {
    var Ci = st();
    Ci.define(
      "scroll",
      (Hy.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = R() ? null : window.history,
          i = e(window),
          a = e(document),
          o = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (P) {
              window.setTimeout(P, 15);
            },
          l = Ci.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            l +
            " > .header, " +
            l +
            " > .w-nav:not([data-no-scroll])",
          E = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
          v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          O = document.createElement("style");
        O.appendChild(document.createTextNode(v));
        function R() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var S = /^#[a-zA-Z0-9][\w:.-]*$/;
        function w(P) {
          return S.test(P.hash) && P.host + P.pathname === r.host + r.pathname;
        }
        let A =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function b() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            A.matches
          );
        }
        function T(P, _) {
          var q;
          switch (_) {
            case "add":
              (q = P.attr("tabindex")),
                q
                  ? P.attr("data-wf-tabindex-swap", q)
                  : P.attr("tabindex", "-1");
              break;
            case "remove":
              (q = P.attr("data-wf-tabindex-swap")),
                q
                  ? (P.attr("tabindex", q),
                    P.removeAttr("data-wf-tabindex-swap"))
                  : P.removeAttr("tabindex");
              break;
          }
          P.toggleClass("wf-force-outline-none", _ === "add");
        }
        function x(P) {
          var _ = P.currentTarget;
          if (
            !(
              Ci.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))
            )
          ) {
            var q = w(_) ? _.hash : "";
            if (q !== "") {
              var M = e(q);
              M.length &&
                (P && (P.preventDefault(), P.stopPropagation()),
                L(q, P),
                window.setTimeout(
                  function () {
                    C(M, function () {
                      T(M, "add"),
                        M.get(0).focus({ preventScroll: !0 }),
                        T(M, "remove");
                    });
                  },
                  P ? 0 : 300
                ));
            }
          }
        }
        function L(P) {
          if (
            r.hash !== P &&
            n &&
            n.pushState &&
            !(Ci.env.chrome && r.protocol === "file:")
          ) {
            var _ = n.state && n.state.hash;
            _ !== P && n.pushState({ hash: P }, "", P);
          }
        }
        function C(P, _) {
          var q = i.scrollTop(),
            M = G(P);
          if (q !== M) {
            var F = H(P, q, M),
              K = Date.now(),
              Z = function () {
                var N = Date.now() - K;
                window.scroll(0, j(q, M, N, F)),
                  N <= F ? u(Z) : typeof _ == "function" && _();
              };
            u(Z);
          }
        }
        function G(P) {
          var _ = e(f),
            q = _.css("position") === "fixed" ? _.outerHeight() : 0,
            M = P.offset().top - q;
          if (P.data("scroll") === "mid") {
            var F = i.height() - q,
              K = P.outerHeight();
            K < F && (M -= Math.round((F - K) / 2));
          }
          return M;
        }
        function H(P, _, q) {
          if (b()) return 0;
          var M = 1;
          return (
            o.add(P).each(function (F, K) {
              var Z = parseFloat(K.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (M = Z);
            }),
            (472.143 * Math.log(Math.abs(_ - q) + 125) - 2e3) * M
          );
        }
        function j(P, _, q, M) {
          return q > M ? _ : P + (_ - P) * re(q / M);
        }
        function re(P) {
          return P < 0.5
            ? 4 * P * P * P
            : (P - 1) * (2 * P - 2) * (2 * P - 2) + 1;
        }
        function $() {
          var { WF_CLICK_EMPTY: P, WF_CLICK_SCROLL: _ } = t;
          a.on(_, d, x),
            a.on(P, E, function (q) {
              q.preventDefault();
            }),
            document.head.insertBefore(O, document.head.firstChild);
        }
        return { ready: $ };
      })
    );
  });
  var Ky = s((Dk, ky) => {
    var UV = st();
    UV.define(
      "touch",
      (ky.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (a) {
            return (
              (a = typeof a == "string" ? e(a).get(0) : a), a ? new n(a) : null
            );
          });
        function n(a) {
          var o = !1,
            u = !1,
            l = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            E;
          a.addEventListener("touchstart", d, !1),
            a.addEventListener("touchmove", v, !1),
            a.addEventListener("touchend", O, !1),
            a.addEventListener("touchcancel", R, !1),
            a.addEventListener("mousedown", d, !1),
            a.addEventListener("mousemove", v, !1),
            a.addEventListener("mouseup", O, !1),
            a.addEventListener("mouseout", R, !1);
          function d(w) {
            var A = w.touches;
            (A && A.length > 1) ||
              ((o = !0),
              A ? ((u = !0), (f = A[0].clientX)) : (f = w.clientX),
              (E = f));
          }
          function v(w) {
            if (o) {
              if (u && w.type === "mousemove") {
                w.preventDefault(), w.stopPropagation();
                return;
              }
              var A = w.touches,
                b = A ? A[0].clientX : w.clientX,
                T = b - E;
              (E = b),
                Math.abs(T) > l &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", w, { direction: T > 0 ? "right" : "left" }), R());
            }
          }
          function O(w) {
            if (o && ((o = !1), u && w.type === "mouseup")) {
              w.preventDefault(), w.stopPropagation(), (u = !1);
              return;
            }
          }
          function R() {
            o = !1;
          }
          function S() {
            a.removeEventListener("touchstart", d, !1),
              a.removeEventListener("touchmove", v, !1),
              a.removeEventListener("touchend", O, !1),
              a.removeEventListener("touchcancel", R, !1),
              a.removeEventListener("mousedown", d, !1),
              a.removeEventListener("mousemove", v, !1),
              a.removeEventListener("mouseup", O, !1),
              a.removeEventListener("mouseout", R, !1),
              (a = null);
          }
          this.destroy = S;
        }
        function i(a, o, u) {
          var l = e.Event(a, { originalEvent: o });
          e(o.target).trigger(l, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Yy = s((Fk, zy) => {
    var ds = st();
    ds.define(
      "forms",
      (zy.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          a = window.location,
          o = window.XDomainRequest && !window.atob,
          u = ".w-form",
          l,
          f = /e(-)?mail/i,
          E = /^\S+@\S+$/,
          d = window.alert,
          v = ds.env(),
          O,
          R,
          S,
          w = /list-manage[1-9]?.com/i,
          A = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              b(), !v && !O && x();
            };
        function b() {
          (l = e("html").attr("data-wf-site")),
            (R = "https://webflow.com/api/v1/form/" + l),
            o &&
              R.indexOf("https://webflow.com") >= 0 &&
              (R = R.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (S = `${R}/signFile`),
            (i = e(u + " form")),
            i.length && i.each(T);
        }
        function T(N, V) {
          var B = e(V),
            X = e.data(V, u);
          X || (X = e.data(V, u, { form: B })), L(X);
          var D = B.closest("div.w-form");
          (X.done = D.find("> .w-form-done")),
            (X.fail = D.find("> .w-form-fail")),
            (X.fileUploads = D.find(".w-file-upload")),
            X.fileUploads.each(function (oe) {
              F(oe, X);
            });
          var Y =
            X.form.attr("aria-label") || X.form.attr("data-name") || "Form";
          X.done.attr("aria-label") || X.form.attr("aria-label", Y),
            X.done.attr("tabindex", "-1"),
            X.done.attr("role", "region"),
            X.done.attr("aria-label") ||
              X.done.attr("aria-label", Y + " success"),
            X.fail.attr("tabindex", "-1"),
            X.fail.attr("role", "region"),
            X.fail.attr("aria-label") ||
              X.fail.attr("aria-label", Y + " failure");
          var ae = (X.action = B.attr("action"));
          if (
            ((X.handler = null),
            (X.redirect = B.attr("data-redirect")),
            w.test(ae))
          ) {
            X.handler = _;
            return;
          }
          if (!ae) {
            if (l) {
              X.handler = P;
              return;
            }
            A();
          }
        }
        function x() {
          (O = !0),
            n.on("submit", u + " form", function (oe) {
              var z = e.data(this, u);
              z.handler && ((z.evt = oe), z.handler(z));
            });
          let N = ".w-checkbox-input",
            V = ".w-radio-input",
            B = "w--redirected-checked",
            X = "w--redirected-focus",
            D = "w--redirected-focus-visible",
            Y = ":focus-visible, [data-wf-focus-visible]",
            ae = [
              ["checkbox", N],
              ["radio", V],
            ];
          n.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + N + ")",
            (oe) => {
              e(oe.target).siblings(N).toggleClass(B);
            }
          ),
            n.on("change", u + ' form input[type="radio"]', (oe) => {
              e(`input[name="${oe.target.name}"]:not(${N})`).map((pe, Ft) =>
                e(Ft).siblings(V).removeClass(B)
              );
              let z = e(oe.target);
              z.hasClass("w-radio-input") || z.siblings(V).addClass(B);
            }),
            ae.forEach(([oe, z]) => {
              n.on(
                "focus",
                u + ` form input[type="${oe}"]:not(` + z + ")",
                (pe) => {
                  e(pe.target).siblings(z).addClass(X),
                    e(pe.target).filter(Y).siblings(z).addClass(D);
                }
              ),
                n.on(
                  "blur",
                  u + ` form input[type="${oe}"]:not(` + z + ")",
                  (pe) => {
                    e(pe.target).siblings(z).removeClass(`${X} ${D}`);
                  }
                );
            });
        }
        function L(N) {
          var V = (N.btn = N.form.find(':input[type="submit"]'));
          (N.wait = N.btn.attr("data-wait") || null),
            (N.success = !1),
            V.prop("disabled", !1),
            N.label && V.val(N.label);
        }
        function C(N) {
          var V = N.btn,
            B = N.wait;
          V.prop("disabled", !0), B && ((N.label = V.val()), V.val(B));
        }
        function G(N, V) {
          var B = null;
          return (
            (V = V || {}),
            N.find(':input:not([type="submit"]):not([type="file"])').each(
              function (X, D) {
                var Y = e(D),
                  ae = Y.attr("type"),
                  oe =
                    Y.attr("data-name") || Y.attr("name") || "Field " + (X + 1),
                  z = Y.val();
                if (ae === "checkbox") z = Y.is(":checked");
                else if (ae === "radio") {
                  if (V[oe] === null || typeof V[oe] == "string") return;
                  z =
                    N.find(
                      'input[name="' + Y.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof z == "string" && (z = e.trim(z)),
                  (V[oe] = z),
                  (B = B || $(Y, ae, oe, z));
              }
            ),
            B
          );
        }
        function H(N) {
          var V = {};
          return (
            N.find(':input[type="file"]').each(function (B, X) {
              var D = e(X),
                Y = D.attr("data-name") || D.attr("name") || "File " + (B + 1),
                ae = D.attr("data-value");
              typeof ae == "string" && (ae = e.trim(ae)), (V[Y] = ae);
            }),
            V
          );
        }
        let j = { _mkto_trk: "marketo" };
        function re() {
          return document.cookie.split("; ").reduce(function (V, B) {
            let X = B.split("="),
              D = X[0];
            if (D in j) {
              let Y = j[D],
                ae = X.slice(1).join("=");
              V[Y] = ae;
            }
            return V;
          }, {});
        }
        function $(N, V, B, X) {
          var D = null;
          return (
            V === "password"
              ? (D = "Passwords cannot be submitted.")
              : N.attr("required")
              ? X
                ? f.test(N.attr("type")) &&
                  (E.test(X) ||
                    (D = "Please enter a valid email address for: " + B))
                : (D = "Please fill out the required field: " + B)
              : B === "g-recaptcha-response" &&
                !X &&
                (D = "Please confirm you\u2019re not a robot."),
            D
          );
        }
        function P(N) {
          M(N), q(N);
        }
        function _(N) {
          L(N);
          var V = N.form,
            B = {};
          if (/^https/.test(a.href) && !/^https/.test(N.action)) {
            V.attr("method", "post");
            return;
          }
          M(N);
          var X = G(V, B);
          if (X) return d(X);
          C(N);
          var D;
          t.each(B, function (z, pe) {
            f.test(pe) && (B.EMAIL = z),
              /^((full[ _-]?)?name)$/i.test(pe) && (D = z),
              /^(first[ _-]?name)$/i.test(pe) && (B.FNAME = z),
              /^(last[ _-]?name)$/i.test(pe) && (B.LNAME = z);
          }),
            D &&
              !B.FNAME &&
              ((D = D.split(" ")),
              (B.FNAME = D[0]),
              (B.LNAME = B.LNAME || D[1]));
          var Y = N.action.replace("/post?", "/post-json?") + "&c=?",
            ae = Y.indexOf("u=") + 2;
          ae = Y.substring(ae, Y.indexOf("&", ae));
          var oe = Y.indexOf("id=") + 3;
          (oe = Y.substring(oe, Y.indexOf("&", oe))),
            (B["b_" + ae + "_" + oe] = ""),
            e
              .ajax({ url: Y, data: B, dataType: "jsonp" })
              .done(function (z) {
                (N.success = z.result === "success" || /already/.test(z.msg)),
                  N.success || console.info("MailChimp error: " + z.msg),
                  q(N);
              })
              .fail(function () {
                q(N);
              });
        }
        function q(N) {
          var V = N.form,
            B = N.redirect,
            X = N.success;
          if (X && B) {
            ds.location(B);
            return;
          }
          N.done.toggle(X),
            N.fail.toggle(!X),
            X ? N.done.focus() : N.fail.focus(),
            V.toggle(!X),
            L(N);
        }
        function M(N) {
          N.evt && N.evt.preventDefault(), (N.evt = null);
        }
        function F(N, V) {
          if (!V.fileUploads || !V.fileUploads[N]) return;
          var B,
            X = e(V.fileUploads[N]),
            D = X.find("> .w-file-upload-default"),
            Y = X.find("> .w-file-upload-uploading"),
            ae = X.find("> .w-file-upload-success"),
            oe = X.find("> .w-file-upload-error"),
            z = D.find(".w-file-upload-input"),
            pe = D.find(".w-file-upload-label"),
            Ft = pe.children(),
            _e = oe.find(".w-file-upload-error-msg"),
            pt = ae.find(".w-file-upload-file"),
            Er = ae.find(".w-file-remove-link"),
            hr = pt.find(".w-file-upload-file-name"),
            gr = _e.attr("data-w-size-error"),
            Ye = _e.attr("data-w-type-error"),
            Ni = _e.attr("data-w-generic-error");
          if (
            (v ||
              pe.on("click keydown", function (h) {
                (h.type === "keydown" && h.which !== 13 && h.which !== 32) ||
                  (h.preventDefault(), z.click());
              }),
            pe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Er.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            v)
          )
            z.on("click", function (h) {
              h.preventDefault();
            }),
              pe.on("click", function (h) {
                h.preventDefault();
              }),
              Ft.on("click", function (h) {
                h.preventDefault();
              });
          else {
            Er.on("click keydown", function (h) {
              if (h.type === "keydown") {
                if (h.which !== 13 && h.which !== 32) return;
                h.preventDefault();
              }
              z.removeAttr("data-value"),
                z.val(""),
                hr.html(""),
                D.toggle(!0),
                ae.toggle(!1),
                pe.focus();
            }),
              z.on("change", function (h) {
                (B = h.target && h.target.files && h.target.files[0]),
                  B &&
                    (D.toggle(!1),
                    oe.toggle(!1),
                    Y.toggle(!0),
                    Y.focus(),
                    hr.text(B.name),
                    y() || C(V),
                    (V.fileUploads[N].uploading = !0),
                    K(B, p));
              });
            var tn = pe.outerHeight();
            z.height(tn), z.width(1);
          }
          function c(h) {
            var I = h.responseJSON && h.responseJSON.msg,
              W = Ni;
            typeof I == "string" && I.indexOf("InvalidFileTypeError") === 0
              ? (W = Ye)
              : typeof I == "string" &&
                I.indexOf("MaxFileSizeError") === 0 &&
                (W = gr),
              _e.text(W),
              z.removeAttr("data-value"),
              z.val(""),
              Y.toggle(!1),
              D.toggle(!0),
              oe.toggle(!0),
              oe.focus(),
              (V.fileUploads[N].uploading = !1),
              y() || L(V);
          }
          function p(h, I) {
            if (h) return c(h);
            var W = I.fileName,
              Q = I.postData,
              le = I.fileId,
              U = I.s3Url;
            z.attr("data-value", le), Z(U, Q, B, W, g);
          }
          function g(h) {
            if (h) return c(h);
            Y.toggle(!1),
              ae.css("display", "inline-block"),
              ae.focus(),
              (V.fileUploads[N].uploading = !1),
              y() || L(V);
          }
          function y() {
            var h = (V.fileUploads && V.fileUploads.toArray()) || [];
            return h.some(function (I) {
              return I.uploading;
            });
          }
        }
        function K(N, V) {
          var B = new URLSearchParams({ name: N.name, size: N.size });
          e.ajax({ type: "GET", url: `${S}?${B}`, crossDomain: !0 })
            .done(function (X) {
              V(null, X);
            })
            .fail(function (X) {
              V(X);
            });
        }
        function Z(N, V, B, X, D) {
          var Y = new FormData();
          for (var ae in V) Y.append(ae, V[ae]);
          Y.append("file", B, X),
            e
              .ajax({
                type: "POST",
                url: N,
                data: Y,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                D(null);
              })
              .fail(function (oe) {
                D(oe);
              });
        }
        return r;
      })
    );
  });
  As();
  Rs();
  Ns();
  Fs();
  Vy();
  Wy();
  jy();
  Ky();
  Yy();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|9b6a5b1b-deae-fa9e-6714-8e7f4c80f745",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|9b6a5b1b-deae-fa9e-6714-8e7f4c80f745",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-p",
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1666605125102,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-27", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|3dea77b0-e23b-aaa2-cac3-98bd744e3dea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|3dea77b0-e23b-aaa2-cac3-98bd744e3dea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-27-p",
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1666615406203,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee4f73c2b87d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666618543106,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|228c6fc4-0e6b-1a45-7aca-73097391fe53",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|228c6fc4-0e6b-1a45-7aca-73097391fe53",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666625809509,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|228c6fc4-0e6b-1a45-7aca-73097391fe53",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|228c6fc4-0e6b-1a45-7aca-73097391fe53",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666625809509,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|73230e18-7b27-f1a7-f92d-4c48f023a01b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|73230e18-7b27-f1a7-f92d-4c48f023a01b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666696173939,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|73230e18-7b27-f1a7-f92d-4c48f023a01b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|73230e18-7b27-f1a7-f92d-4c48f023a01b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666696173940,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-9", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|bad189a8-2038-d4bf-2cce-24e84386025e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|bad189a8-2038-d4bf-2cce-24e84386025e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-9-p",
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1666698291976,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|5abfb56c-2e3c-6ddf-8a6b-3cf864d13aa1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|5abfb56c-2e3c-6ddf-8a6b-3cf864d13aa1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1666703194326,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|2daf7106-6c9b-0241-76ce-c7617fbb175a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|2daf7106-6c9b-0241-76ce-c7617fbb175a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666704290627,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|2daf7106-6c9b-0241-76ce-c7617fbb175a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|2daf7106-6c9b-0241-76ce-c7617fbb175a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666704290627,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-14", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|9a84be8d-eba8-282d-5afb-31d3845c3325",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|9a84be8d-eba8-282d-5afb-31d3845c3325",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-14-p",
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1666708890500,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|3d4443a1-a861-a2d9-c122-a5ded2f1eaf3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|3d4443a1-a861-a2d9-c122-a5ded2f1eaf3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666711553634,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|3d4443a1-a861-a2d9-c122-a5ded2f1eaf3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|3d4443a1-a861-a2d9-c122-a5ded2f1eaf3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666711553634,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|74dc21dd-3c2d-e5f0-4c84-e8358cd54f1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|74dc21dd-3c2d-e5f0-4c84-e8358cd54f1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666773820761,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|74dc21dd-3c2d-e5f0-4c84-e8358cd54f1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|74dc21dd-3c2d-e5f0-4c84-e8358cd54f1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666773820763,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-19", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|74dc21dd-3c2d-e5f0-4c84-e8358cd54f1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|74dc21dd-3c2d-e5f0-4c84-e8358cd54f1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-19-p",
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1666778141893,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|20d135fe-8a0d-c0d3-3d18-2f51da9fda16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|20d135fe-8a0d-c0d3-3d18-2f51da9fda16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666790256988,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|20d135fe-8a0d-c0d3-3d18-2f51da9fda16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|20d135fe-8a0d-c0d3-3d18-2f51da9fda16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666790256988,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-22", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|46441260-72ff-bb04-7c95-8852b3ed744d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|46441260-72ff-bb04-7c95-8852b3ed744d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-22-p",
          smoothing: 72,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1666798542481,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-23", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee4f73c2b87d|857c23a2-1993-c729-3e2e-1d9070f0f52d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|857c23a2-1993-c729-3e2e-1d9070f0f52d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-23-p",
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1666875529892,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|92d97db6-e2f0-97e8-162c-dd1e092f10a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|92d97db6-e2f0-97e8-162c-dd1e092f10a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666882140333,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|92d97db6-e2f0-97e8-162c-dd1e092f10a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|92d97db6-e2f0-97e8-162c-dd1e092f10a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666882140333,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666973348106,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|70ad9961-268a-561b-24d4-94a7ae81636c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|70ad9961-268a-561b-24d4-94a7ae81636c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666985116371,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|70ad9961-268a-561b-24d4-94a7ae81636c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|70ad9961-268a-561b-24d4-94a7ae81636c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1666985116371,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-2", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee4f73c2b87d|3dea77b0-e23b-aaa2-cac3-98bd744e3dea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|3dea77b0-e23b-aaa2-cac3-98bd744e3dea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-2-p",
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1666987344893,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-30", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|56b91e4e-f2ff-1254-fb27-331f9d7527c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|56b91e4e-f2ff-1254-fb27-331f9d7527c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-30-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1667050026789,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee4f73c2b87d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1667057809396,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee4f73c2b87d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1667057809397,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee4f73c2b87d|24d33c63-f90b-710b-6814-f3fe985a796b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|24d33c63-f90b-710b-6814-f3fe985a796b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1667058846999,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee4f73c2b87d|24d33c63-f90b-710b-6814-f3fe985a796b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|24d33c63-f90b-710b-6814-f3fe985a796b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1667058847000,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        selector: ".m-open-menu__link",
        originalId:
          "64357e0972ffee4f73c2b87d|615f62b1-cbeb-db6d-35b1-181b6d3d4e8a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".m-open-menu__link",
          originalId:
            "64357e0972ffee4f73c2b87d|615f62b1-cbeb-db6d-35b1-181b6d3d4e8a",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1667128900914,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|418bead1-2a16-fae5-81f3-d14489478f36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|418bead1-2a16-fae5-81f3-d14489478f36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1667128924845,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668093700501,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668093700502,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|a0a19611-fad6-0650-6e84-d5b36d992f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|a0a19611-fad6-0650-6e84-d5b36d992f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668094792427,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee4f73c2b87d|a0a19611-fad6-0650-6e84-d5b36d992f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee4f73c2b87d|a0a19611-fad6-0650-6e84-d5b36d992f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668094792427,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-22", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|46441260-72ff-bb04-7c95-8852b3ed744d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|46441260-72ff-bb04-7c95-8852b3ed744d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-22-p",
          smoothing: 72,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1668425797103,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-23", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|857c23a2-1993-c729-3e2e-1d9070f0f52d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|857c23a2-1993-c729-3e2e-1d9070f0f52d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-23-p",
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1668425797103,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|92d97db6-e2f0-97e8-162c-dd1e092f10a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|92d97db6-e2f0-97e8-162c-dd1e092f10a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|92d97db6-e2f0-97e8-162c-dd1e092f10a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|92d97db6-e2f0-97e8-162c-dd1e092f10a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|70ad9961-268a-561b-24d4-94a7ae81636c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|70ad9961-268a-561b-24d4-94a7ae81636c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|70ad9961-268a-561b-24d4-94a7ae81636c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|70ad9961-268a-561b-24d4-94a7ae81636c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee5e5cc2b87c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee5e5cc2b87c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|24d33c63-f90b-710b-6814-f3fe985a796b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|24d33c63-f90b-710b-6814-f3fe985a796b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|24d33c63-f90b-710b-6814-f3fe985a796b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|24d33c63-f90b-710b-6814-f3fe985a796b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|418bead1-2a16-fae5-81f3-d14489478f36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|418bead1-2a16-fae5-81f3-d14489478f36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1668425797103,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|a0a19611-fad6-0650-6e84-d5b36d992f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|a0a19611-fad6-0650-6e84-d5b36d992f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee5e5cc2b87c|a0a19611-fad6-0650-6e84-d5b36d992f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee5e5cc2b87c|a0a19611-fad6-0650-6e84-d5b36d992f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668425797103,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668432881481,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|70ad9961-268a-561b-24d4-94a7ae81636c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|70ad9961-268a-561b-24d4-94a7ae81636c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668432881481,
    },
    "e-114": {
      id: "e-114",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|70ad9961-268a-561b-24d4-94a7ae81636c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|70ad9961-268a-561b-24d4-94a7ae81636c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668432881481,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668432881481,
    },
    "e-118": {
      id: "e-118",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-117",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668432881481,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-122",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|418bead1-2a16-fae5-81f3-d14489478f36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|418bead1-2a16-fae5-81f3-d14489478f36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1668432881481,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668432881481,
    },
    "e-124": {
      id: "e-124",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-123",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668432881481,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-126",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|a0a19611-fad6-0650-6e84-d5b36d992f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|a0a19611-fad6-0650-6e84-d5b36d992f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668432881481,
    },
    "e-126": {
      id: "e-126",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-58",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-125",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|a0a19611-fad6-0650-6e84-d5b36d992f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|a0a19611-fad6-0650-6e84-d5b36d992f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668432881481,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-39", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|3dea77b0-e23b-aaa2-cac3-98bd744e3dea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|3dea77b0-e23b-aaa2-cac3-98bd744e3dea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-39-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1668515513687,
    },
    "e-148": {
      id: "e-148",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-149",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|c0d70e7f-3ef0-08e1-c62f-bbba9df1e9af",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|c0d70e7f-3ef0-08e1-c62f-bbba9df1e9af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668691502398,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-148",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|c0d70e7f-3ef0-08e1-c62f-bbba9df1e9af",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|c0d70e7f-3ef0-08e1-c62f-bbba9df1e9af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668691502404,
    },
    "e-152": {
      id: "e-152",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-153",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|71d9dd82-1edf-83f9-5767-63955f19a658",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|71d9dd82-1edf-83f9-5767-63955f19a658",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668692569673,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|71d9dd82-1edf-83f9-5767-63955f19a658",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|71d9dd82-1edf-83f9-5767-63955f19a658",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668692569678,
    },
    "e-164": {
      id: "e-164",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-165",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|acb56ca7-5ac9-eed4-9a53-02151bc8c415",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|acb56ca7-5ac9-eed4-9a53-02151bc8c415",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668783439388,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|acb56ca7-5ac9-eed4-9a53-02151bc8c415",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|acb56ca7-5ac9-eed4-9a53-02151bc8c415",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1668783439392,
    },
    "e-166": {
      id: "e-166",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-167",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|ec2e6bda-9509-3242-53aa-47f1cfbb0565",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ec2e6bda-9509-3242-53aa-47f1cfbb0565",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028791775,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-166",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|ec2e6bda-9509-3242-53aa-47f1cfbb0565",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ec2e6bda-9509-3242-53aa-47f1cfbb0565",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028791779,
    },
    "e-168": {
      id: "e-168",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-169",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|e47f062c-92d2-0a9c-3e75-fae8c2a598a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|e47f062c-92d2-0a9c-3e75-fae8c2a598a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028807885,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|e47f062c-92d2-0a9c-3e75-fae8c2a598a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|e47f062c-92d2-0a9c-3e75-fae8c2a598a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028807890,
    },
    "e-170": {
      id: "e-170",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-171",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|9244ec50-3cc1-a1eb-ac1c-210689d33cb5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|9244ec50-3cc1-a1eb-ac1c-210689d33cb5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028821453,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|9244ec50-3cc1-a1eb-ac1c-210689d33cb5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|9244ec50-3cc1-a1eb-ac1c-210689d33cb5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028821457,
    },
    "e-172": {
      id: "e-172",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-173",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|a8f39b7e-adba-6f88-091c-929b83f90b8e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|a8f39b7e-adba-6f88-091c-929b83f90b8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028835123,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-172",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|a8f39b7e-adba-6f88-091c-929b83f90b8e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|a8f39b7e-adba-6f88-091c-929b83f90b8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028835126,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-175",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|ea8dd25c-dfb9-81a1-0a70-bce689a714ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ea8dd25c-dfb9-81a1-0a70-bce689a714ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028850063,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|ea8dd25c-dfb9-81a1-0a70-bce689a714ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ea8dd25c-dfb9-81a1-0a70-bce689a714ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028850069,
    },
    "e-176": {
      id: "e-176",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-177",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|7734f6ee-da71-2eee-5bdb-d9b955692310",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|7734f6ee-da71-2eee-5bdb-d9b955692310",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028866768,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-176",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|7734f6ee-da71-2eee-5bdb-d9b955692310",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|7734f6ee-da71-2eee-5bdb-d9b955692310",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028866771,
    },
    "e-178": {
      id: "e-178",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-179",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|c502e2c8-42a2-ca09-5753-032f3c4973db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|c502e2c8-42a2-ca09-5753-032f3c4973db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028902602,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-178",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|c502e2c8-42a2-ca09-5753-032f3c4973db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|c502e2c8-42a2-ca09-5753-032f3c4973db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028902607,
    },
    "e-180": {
      id: "e-180",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-181",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|88837b50-8083-7c8b-8f21-4acf37865f55",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|88837b50-8083-7c8b-8f21-4acf37865f55",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028916635,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|88837b50-8083-7c8b-8f21-4acf37865f55",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|88837b50-8083-7c8b-8f21-4acf37865f55",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028916639,
    },
    "e-182": {
      id: "e-182",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-183",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|b485b6a1-e0e2-930d-236e-932d6f5316e3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|b485b6a1-e0e2-930d-236e-932d6f5316e3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028938078,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-182",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|b485b6a1-e0e2-930d-236e-932d6f5316e3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|b485b6a1-e0e2-930d-236e-932d6f5316e3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669028938082,
    },
    "e-184": {
      id: "e-184",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-59",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-185",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|a0a19611-fad6-0650-6e84-d5b36d992f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|a0a19611-fad6-0650-6e84-d5b36d992f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669208600528,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-60",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-184",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|a0a19611-fad6-0650-6e84-d5b36d992f45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|a0a19611-fad6-0650-6e84-d5b36d992f45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669208600529,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-63", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23ca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-63-p",
          smoothing: 86,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 40,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669287839650,
    },
    "e-192": {
      id: "e-192",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-67",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-193",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669289909073,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-68",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-192",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669289909073,
    },
    "e-198": {
      id: "e-198",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-65",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-199",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669290454462,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-198",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669290454463,
    },
    "e-200": {
      id: "e-200",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-70",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-201",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669291011872,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-200",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669291011873,
    },
    "e-202": {
      id: "e-202",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-72",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-203",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669291070022,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-73",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-202",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669291070048,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-74", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: "._2s-card--anim",
        originalId:
          "64357e0972ffee1e51c2b876|1ad64463-54cc-f674-7598-e2b37af32daa",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: "._2s-card--anim",
          originalId:
            "64357e0972ffee1e51c2b876|1ad64463-54cc-f674-7598-e2b37af32daa",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-74-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669293789288,
    },
    "e-206": {
      id: "e-206",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-75", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "64357e0972ffee1e51c2b876",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-75-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 84,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-75-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 84,
          restingState: 50,
        },
      ],
      createdOn: 1669305511123,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-78",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-210",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: "._6s-link-bt",
        originalId:
          "64357e0972ffee1e51c2b876|aa01fc91-95ad-5483-c24b-ecfbe1763a00",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: "._6s-link-bt",
          originalId:
            "64357e0972ffee1e51c2b876|aa01fc91-95ad-5483-c24b-ecfbe1763a00",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669305994783,
    },
    "e-210": {
      id: "e-210",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-209",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: "._6s-link-bt",
        originalId:
          "64357e0972ffee1e51c2b876|aa01fc91-95ad-5483-c24b-ecfbe1763a00",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: "._6s-link-bt",
          originalId:
            "64357e0972ffee1e51c2b876|aa01fc91-95ad-5483-c24b-ecfbe1763a00",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669305994784,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-212",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|085dbf5a-0c44-9d23-ab94-4d8be1a0920f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|085dbf5a-0c44-9d23-ab94-4d8be1a0920f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669366928866,
    },
    "e-212": {
      id: "e-212",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-69",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-211",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|085dbf5a-0c44-9d23-ab94-4d8be1a0920f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|085dbf5a-0c44-9d23-ab94-4d8be1a0920f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669366928868,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-214",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669367500374,
    },
    "e-214": {
      id: "e-214",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-213",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669367500374,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-80", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-80-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 40,
        },
      ],
      createdOn: 1669368210001,
    },
    "e-218": {
      id: "e-218",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-76",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-219",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d590e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d590e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669381288566,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-77",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-218",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d590e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d590e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669381288566,
    },
    "e-236": {
      id: "e-236",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-237",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|dd3de6e2-145e-fd1f-26f4-8dd7f0ac256c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|dd3de6e2-145e-fd1f-26f4-8dd7f0ac256c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669381299006,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-236",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|dd3de6e2-145e-fd1f-26f4-8dd7f0ac256c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|dd3de6e2-145e-fd1f-26f4-8dd7f0ac256c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669381299006,
    },
    "e-238": {
      id: "e-238",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-239",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|dd3de6e2-145e-fd1f-26f4-8dd7f0ac25fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|dd3de6e2-145e-fd1f-26f4-8dd7f0ac25fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669381299006,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-238",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|dd3de6e2-145e-fd1f-26f4-8dd7f0ac25fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|dd3de6e2-145e-fd1f-26f4-8dd7f0ac25fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669381299006,
    },
    "e-252": {
      id: "e-252",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-81", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|39680133-aa6e-3c28-a19a-1cea8a3a3729",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|39680133-aa6e-3c28-a19a-1cea8a3a3729",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-81-p",
          smoothing: 84,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669381346602,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-83", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|70527781-5b61-d591-b822-f39991ce0dac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|70527781-5b61-d591-b822-f39991ce0dac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-83-p",
          smoothing: 84,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669381386594,
    },
    "e-254": {
      id: "e-254",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-84", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|0cb22d47-44cb-b74d-466b-40ceab2caf2e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|0cb22d47-44cb-b74d-466b-40ceab2caf2e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-84-p",
          smoothing: 84,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669381436877,
    },
    "e-256": {
      id: "e-256",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-85", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-85-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669627488316,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-86", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-86-p",
          smoothing: 84,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669627533742,
    },
    "e-258": {
      id: "e-258",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-87", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-87-p",
          smoothing: 84,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669628154577,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-88", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-88-p",
          smoothing: 84,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 10,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669632920721,
    },
    "e-260": {
      id: "e-260",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-89", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "64357e0972ffee1e51c2b876|ccd16ebb-786d-7a66-d8ec-a240a7a20ba4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ccd16ebb-786d-7a66-d8ec-a240a7a20ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-89-p",
          smoothing: 84,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669637132162,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-91",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-262",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|ccd16ebb-786d-7a66-d8ec-a240a7a20ba4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ccd16ebb-786d-7a66-d8ec-a240a7a20ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669643385311,
    },
    "e-262": {
      id: "e-262",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-90",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-261",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|ccd16ebb-786d-7a66-d8ec-a240a7a20ba4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ccd16ebb-786d-7a66-d8ec-a240a7a20ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669643385312,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-92", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|b8f53a3a-69bf-b115-f91f-29b613cb7046",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|b8f53a3a-69bf-b115-f91f-29b613cb7046",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-92-p",
          smoothing: 84,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 10,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669710330934,
    },
    "e-264": {
      id: "e-264",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-93", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|75dedc3f-aeae-4d63-b6ee-34fcb847da21",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|75dedc3f-aeae-4d63-b6ee-34fcb847da21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-93-p",
          smoothing: 84,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 15,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669710510092,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-94", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|0cb22d47-44cb-b74d-466b-40ceab2caf2e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|0cb22d47-44cb-b74d-466b-40ceab2caf2e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-94-p",
          smoothing: 84,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669710586032,
    },
    "e-268": {
      id: "e-268",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-95",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-269",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".bt-hover",
        originalId:
          "64357e0972ffee1e51c2b876|afeac50a-b40c-b994-1715-55f0aded6b35",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".bt-hover",
          originalId:
            "64357e0972ffee1e51c2b876|afeac50a-b40c-b994-1715-55f0aded6b35",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669712591936,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-96",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-268",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".bt-hover",
        originalId:
          "64357e0972ffee1e51c2b876|afeac50a-b40c-b994-1715-55f0aded6b35",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".bt-hover",
          originalId:
            "64357e0972ffee1e51c2b876|afeac50a-b40c-b994-1715-55f0aded6b35",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669712591937,
    },
    "e-270": {
      id: "e-270",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-97", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|ccd16ebb-786d-7a66-d8ec-a240a7a20ba4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|ccd16ebb-786d-7a66-d8ec-a240a7a20ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-97-p",
          smoothing: 84,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1669806757349,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-98",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-272",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669813153699,
    },
    "e-272": {
      id: "e-272",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-271",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669813153701,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669813225432,
    },
    "e-274": {
      id: "e-274",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-101",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-273",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669813225433,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-102",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-276",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669813300891,
    },
    "e-276": {
      id: "e-276",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-103",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-275",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff23f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669813300892,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-104",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-278",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669813355675,
    },
    "e-278": {
      id: "e-278",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-105",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-277",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2405",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1669813355706,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-82", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-82-p",
          smoothing: 80,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1678191312238,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-280",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64357e0972ffee1e51c2b876",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64357e0972ffee1e51c2b876",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680861784555,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-107",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        appliesTo: "PAGE",
        styleBlockIds: [],
        id: "64357e0972ffee1e51c2b876",
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681230347934,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "scroll-anim 1s out",
      continuousParameterGroups: [
        {
          id: "a-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1-slide",
                      selectorGuids: ["9c998de9-cdb4-e9d8-1d63-68290dadf998"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-4",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1-slide",
                      selectorGuids: ["9c998de9-cdb4-e9d8-1d63-68290dadf998"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1-slide",
                      selectorGuids: ["9c998de9-cdb4-e9d8-1d63-68290dadf998"],
                    },
                    xValue: 1.1,
                    yValue: 1.1,
                    locked: true,
                  },
                },
                {
                  id: "a-n-12",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-content",
                      selectorGuids: ["b363f64f-580d-831f-54f5-a0d800c80232"],
                    },
                    xValue: 0.912,
                    yValue: 0.912,
                    locked: true,
                  },
                },
                {
                  id: "a-n-14",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-content",
                      selectorGuids: ["b363f64f-580d-831f-54f5-a0d800c80232"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-n-16",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-content",
                      selectorGuids: ["b363f64f-580d-831f-54f5-a0d800c80232"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-18",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-video",
                      selectorGuids: ["93e77efa-9161-a0e4-5168-cc18526cfa5c"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1-slide",
                      selectorGuids: ["9c998de9-cdb4-e9d8-1d63-68290dadf998"],
                    },
                    yValue: -100,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1-slide",
                      selectorGuids: ["9c998de9-cdb4-e9d8-1d63-68290dadf998"],
                    },
                    zValue: 10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-n-7",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1-slide",
                      selectorGuids: ["9c998de9-cdb4-e9d8-1d63-68290dadf998"],
                    },
                    xValue: 0.6,
                    yValue: 0.6,
                    locked: true,
                  },
                },
                {
                  id: "a-n-13",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-content",
                      selectorGuids: ["b363f64f-580d-831f-54f5-a0d800c80232"],
                    },
                    xValue: 1.43,
                    yValue: 1.43,
                    locked: true,
                  },
                },
                {
                  id: "a-n-15",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-content",
                      selectorGuids: ["b363f64f-580d-831f-54f5-a0d800c80232"],
                    },
                    zValue: -10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-n-17",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-content",
                      selectorGuids: ["b363f64f-580d-831f-54f5-a0d800c80232"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-n-19",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-video",
                      selectorGuids: ["93e77efa-9161-a0e4-5168-cc18526cfa5c"],
                    },
                    yValue: 40,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1666605128522,
    },
    "a-27": {
      id: "a-27",
      title: "scroll-anim 0s mob",
      continuousParameterGroups: [
        {
          id: "a-27-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-27-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-bts",
                      selectorGuids: ["d630534b-b172-4fb5-29f4-4410a759b0e8"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-27-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-1",
                      selectorGuids: ["407f9956-ee50-b508-4554-49b1c7c2f99f"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-27-n-8",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-1",
                      selectorGuids: ["407f9956-ee50-b508-4554-49b1c7c2f99f"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-fill-3",
                      selectorGuids: ["bb4c4b7a-7b27-1419-c415-8dc974d2448d"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-27-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-bts",
                      selectorGuids: ["d630534b-b172-4fb5-29f4-4410a759b0e8"],
                    },
                    yValue: -54,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-27-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-1",
                      selectorGuids: ["407f9956-ee50-b508-4554-49b1c7c2f99f"],
                    },
                    yValue: -100,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-27-n-11",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-1",
                      selectorGuids: ["407f9956-ee50-b508-4554-49b1c7c2f99f"],
                    },
                    xValue: 2,
                    yValue: 2,
                    locked: true,
                  },
                },
                {
                  id: "a-27-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-fill-3",
                      selectorGuids: ["bb4c4b7a-7b27-1419-c415-8dc974d2448d"],
                    },
                    yValue: -100,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1666615000943,
    },
    "a-4": {
      id: "a-4",
      title: "load page",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|33995364-bacd-8a7f-0bc5-0cae5ceb54c9",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                xValue: 0.5,
                yValue: 0.5,
                locked: true,
              },
            },
            {
              id: "a-4-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-4-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-12",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-4-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-15",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-4-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|c1a90bff-c197-c690-601a-1efbec0b9614",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|aec8866b-6daf-a0d5-7f68-47dfa27fd618",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d4357031-2458-8b04-3e90-a81295783d59",
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e3664499-0f72-f1f5-bd7f-cf4422985304",
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-37",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|33995364-bacd-8a7f-0bc5-0cae5ceb54c9",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "64357e0972ffee4f73c2b87d|33995364-bacd-8a7f-0bc5-0cae5ceb54c9",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 900,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                yValue: -45,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 900,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-4-n-34",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 770,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d4357031-2458-8b04-3e90-a81295783d59",
                },
                xValue: -35,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-35",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 770,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e3664499-0f72-f1f5-bd7f-cf4422985304",
                },
                xValue: 35,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-18",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-4-n-21",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 500,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-4-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-25",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-24",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 600,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-4-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "easeOut",
                duration: 400,
                target: {
                  id: "64357e0972ffee4f73c2b87d|c1a90bff-c197-c690-601a-1efbec0b9614",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "easeOut",
                duration: 400,
                target: {
                  id: "64357e0972ffee4f73c2b87d|aec8866b-6daf-a0d5-7f68-47dfa27fd618",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "easeOut",
                duration: 400,
                target: {
                  id: "64357e0972ffee4f73c2b87d|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1666618548625,
    },
    "a-5": {
      id: "a-5",
      title: "0s into-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__1s-head",
                  selectorGuids: ["597f8b02-534d-ec78-303f-00b2c4115a69"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-anim__1s-head",
                  selectorGuids: ["597f8b02-534d-ec78-303f-00b2c4115a69"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".scroll-anim__1s-head",
                  selectorGuids: ["597f8b02-534d-ec78-303f-00b2c4115a69"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-5-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".scroll-anim__1s-head",
                  selectorGuids: ["597f8b02-534d-ec78-303f-00b2c4115a69"],
                },
                yValue: -20,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1666625812377,
    },
    "a-6": {
      id: "a-6",
      title: "0s out-of-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__1s-head",
                  selectorGuids: ["597f8b02-534d-ec78-303f-00b2c4115a69"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".scroll-anim__1s-head",
                  selectorGuids: ["597f8b02-534d-ec78-303f-00b2c4115a69"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666625812377,
    },
    "a-7": {
      id: "a-7",
      title: "1s into-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|611cd2d6-4e5f-4f10-e7c5-1db27479fafd",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|816b6b0a-6e35-5095-d92d-562ba2aafe05",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d65e153c-607f-5888-3483-f233203a3046",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-anim__1s-h-img",
                  selectorGuids: ["7216fa1d-c23c-7022-73d8-4a0965911b44"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-25",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-anim__1s-description",
                  selectorGuids: ["dcc7ad85-943b-dc65-274f-d0645f3b45d0"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-39",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__1s-text-container",
                  selectorGuids: ["fdd08b16-8863-765f-0477-c5bda5bd70c2"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-38",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__1s-text-container",
                  selectorGuids: ["fdd08b16-8863-765f-0477-c5bda5bd70c2"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-37",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__1s-h-img",
                  selectorGuids: ["7216fa1d-c23c-7022-73d8-4a0965911b44"],
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-35",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d65e153c-607f-5888-3483-f233203a3046",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-7-n-34",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d65e153c-607f-5888-3483-f233203a3046",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-32",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|816b6b0a-6e35-5095-d92d-562ba2aafe05",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-7-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|816b6b0a-6e35-5095-d92d-562ba2aafe05",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-29",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|611cd2d6-4e5f-4f10-e7c5-1db27479fafd",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-7-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|611cd2d6-4e5f-4f10-e7c5-1db27479fafd",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__1s-bts",
                  selectorGuids: ["d630534b-b172-4fb5-29f4-4410a759b0e8"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".scroll-anim__1s-bts",
                  selectorGuids: ["d630534b-b172-4fb5-29f4-4410a759b0e8"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|816b6b0a-6e35-5095-d92d-562ba2aafe05",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|611cd2d6-4e5f-4f10-e7c5-1db27479fafd",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-18",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 300,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|816b6b0a-6e35-5095-d92d-562ba2aafe05",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-7-n-17",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 300,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|611cd2d6-4e5f-4f10-e7c5-1db27479fafd",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-7-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|816b6b0a-6e35-5095-d92d-562ba2aafe05",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|611cd2d6-4e5f-4f10-e7c5-1db27479fafd",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d65e153c-607f-5888-3483-f233203a3046",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-19",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d65e153c-607f-5888-3483-f233203a3046",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-7-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d65e153c-607f-5888-3483-f233203a3046",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  selector: ".scroll-anim__1s-h-img",
                  selectorGuids: ["7216fa1d-c23c-7022-73d8-4a0965911b44"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-23",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  selector: ".scroll-anim__1s-h-img",
                  selectorGuids: ["7216fa1d-c23c-7022-73d8-4a0965911b44"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".scroll-anim__1s-description",
                  selectorGuids: ["dcc7ad85-943b-dc65-274f-d0645f3b45d0"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1666696178439,
    },
    "a-8": {
      id: "a-8",
      title: "1s out-of-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 400,
                target: {
                  selector: ".scroll-anim__1s-bts",
                  selectorGuids: ["d630534b-b172-4fb5-29f4-4410a759b0e8"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 400,
                target: {
                  id: "64357e0972ffee4f73c2b87d|611cd2d6-4e5f-4f10-e7c5-1db27479fafd",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 400,
                target: {
                  id: "64357e0972ffee4f73c2b87d|816b6b0a-6e35-5095-d92d-562ba2aafe05",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 400,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d65e153c-607f-5888-3483-f233203a3046",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 400,
                target: {
                  selector: ".scroll-anim__1s-h-img",
                  selectorGuids: ["7216fa1d-c23c-7022-73d8-4a0965911b44"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 400,
                target: {
                  selector: ".scroll-anim__1s-description",
                  selectorGuids: ["dcc7ad85-943b-dc65-274f-d0645f3b45d0"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-14",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__1s-text-container",
                  selectorGuids: ["fdd08b16-8863-765f-0477-c5bda5bd70c2"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666696178439,
    },
    "a-9": {
      id: "a-9",
      title: "scroll-anim 0s text-container",
      continuousParameterGroups: [
        {
          id: "a-9-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-9-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-text-container",
                      selectorGuids: ["fdd08b16-8863-765f-0477-c5bda5bd70c2"],
                    },
                    yValue: 15,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-9-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-text-container",
                      selectorGuids: ["fdd08b16-8863-765f-0477-c5bda5bd70c2"],
                    },
                    yValue: -15,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1666605128522,
    },
    "a-11": {
      id: "a-11",
      title: "scroll-anim 2s in out",
      continuousParameterGroups: [
        {
          id: "a-11-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-11-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-9",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    zValue: -10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-11-n-10",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    xValue: 0.6,
                    yValue: 0.6,
                    locked: true,
                  },
                },
                {
                  id: "a-11-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    yValue: -50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-12",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    zValue: 10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-11-n-13",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    xValue: 1.43,
                    yValue: 1.43,
                    locked: true,
                  },
                },
                {
                  id: "a-11-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-video",
                      selectorGuids: ["5e833990-6d31-8519-7347-cd8d9a2a7a56"],
                    },
                    yValue: -40,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 33,
              actionItems: [
                {
                  id: "a-11-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-2",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-11-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    xValue: 1.1,
                    yValue: 1.1,
                    locked: true,
                  },
                },
                {
                  id: "a-11-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-11-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    xValue: 0.912,
                    yValue: 0.912,
                    locked: true,
                  },
                },
                {
                  id: "a-11-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-video",
                      selectorGuids: ["5e833990-6d31-8519-7347-cd8d9a2a7a56"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-29",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-text-container",
                      selectorGuids: ["ba32b70f-4cb1-bad0-3d9c-c8273cf2b2e9"],
                    },
                    yValue: 15,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 67,
              actionItems: [
                {
                  id: "a-11-n-15",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-16",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-11-n-17",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    xValue: 1.1,
                    yValue: 1.1,
                    locked: true,
                  },
                },
                {
                  id: "a-11-n-18",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-19",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-11-n-20",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    xValue: 0.912,
                    yValue: 0.912,
                    locked: true,
                  },
                },
                {
                  id: "a-11-n-21",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-video",
                      selectorGuids: ["5e833990-6d31-8519-7347-cd8d9a2a7a56"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-30",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-text-container",
                      selectorGuids: ["ba32b70f-4cb1-bad0-3d9c-c8273cf2b2e9"],
                    },
                    yValue: -15,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-11-n-22",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    yValue: -100,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-23",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    zValue: 10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-11-n-24",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2-slide",
                      selectorGuids: ["0926730c-8e80-c8c1-4481-22b01cb36d0a"],
                    },
                    xValue: 0.6,
                    yValue: 0.6,
                    locked: true,
                  },
                },
                {
                  id: "a-11-n-25",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-26",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    zValue: -10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-11-n-27",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-content",
                      selectorGuids: ["e694f871-d0b8-ed51-3726-adaac5b079f4"],
                    },
                    xValue: 1.43,
                    yValue: 1.43,
                    locked: true,
                  },
                },
                {
                  id: "a-11-n-28",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__2s-video",
                      selectorGuids: ["5e833990-6d31-8519-7347-cd8d9a2a7a56"],
                    },
                    yValue: 40,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1666605128522,
    },
    "a-12": {
      id: "a-12",
      title: "2s into-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf92b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-39",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf931",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-anim__2s-h-img",
                  selectorGuids: ["d87c4295-b05a-80b5-816c-f33b6fd0da04"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-37",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-anim__2s-description",
                  selectorGuids: ["6c350fd5-36e8-4ce6-5079-ecdb1db05667"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf92b",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-32",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf92b",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-12-n-34",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__2s-h-img",
                  selectorGuids: ["d87c4295-b05a-80b5-816c-f33b6fd0da04"],
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf931",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-29",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf931",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-41",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf92b",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-12-n-40",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf92b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-42",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf92b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-45",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  selector: ".scroll-anim__2s-h-img",
                  selectorGuids: ["d87c4295-b05a-80b5-816c-f33b6fd0da04"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-44",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  selector: ".scroll-anim__2s-h-img",
                  selectorGuids: ["d87c4295-b05a-80b5-816c-f33b6fd0da04"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-48",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf931",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-47",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf931",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-12-n-46",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf931",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-43",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "easeOut",
                duration: 600,
                target: {
                  selector: ".scroll-anim__2s-description",
                  selectorGuids: ["6c350fd5-36e8-4ce6-5079-ecdb1db05667"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1666696178439,
    },
    "a-13": {
      id: "a-13",
      title: "2s out-of-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf92b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|1baface0-65a3-a54d-4fad-609fd6dbf931",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-13-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  selector: ".scroll-anim__2s-h-img",
                  selectorGuids: ["d87c4295-b05a-80b5-816c-f33b6fd0da04"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  selector: ".scroll-anim__2s-description",
                  selectorGuids: ["6c350fd5-36e8-4ce6-5079-ecdb1db05667"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666696178439,
    },
    "a-14": {
      id: "a-14",
      title: "scroll-anim 3s in out",
      continuousParameterGroups: [
        {
          id: "a-14-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-14-n-31",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-32",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    zValue: -10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-14-n-33",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    xValue: 0.6,
                    yValue: 0.6,
                    locked: true,
                  },
                },
                {
                  id: "a-14-n-34",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    yValue: -50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-35",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    zValue: 10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-14-n-36",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    xValue: 1.43,
                    yValue: 1.43,
                    locked: true,
                  },
                },
                {
                  id: "a-14-n-37",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-video",
                      selectorGuids: ["88921b62-bad2-bc3b-616a-7384d0e7293a"],
                    },
                    yValue: -40,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 33,
              actionItems: [
                {
                  id: "a-14-n-38",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-39",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-14-n-40",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    xValue: 1.1,
                    yValue: 1.1,
                    locked: true,
                  },
                },
                {
                  id: "a-14-n-41",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-42",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-14-n-43",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    xValue: 0.912,
                    yValue: 0.912,
                    locked: true,
                  },
                },
                {
                  id: "a-14-n-44",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-video",
                      selectorGuids: ["88921b62-bad2-bc3b-616a-7384d0e7293a"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-45",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-text-container",
                      selectorGuids: ["0eb7f99f-2ba2-ca4b-f114-f96efe90a285"],
                    },
                    yValue: 15,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 67,
              actionItems: [
                {
                  id: "a-14-n-47",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-48",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-14-n-49",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    xValue: 1.1,
                    yValue: 1.1,
                    locked: true,
                  },
                },
                {
                  id: "a-14-n-50",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-51",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-14-n-52",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    xValue: 0.912,
                    yValue: 0.912,
                    locked: true,
                  },
                },
                {
                  id: "a-14-n-53",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-video",
                      selectorGuids: ["88921b62-bad2-bc3b-616a-7384d0e7293a"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-46",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-text-container",
                      selectorGuids: ["0eb7f99f-2ba2-ca4b-f114-f96efe90a285"],
                    },
                    yValue: -15,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-14-n-54",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    yValue: -100,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-55",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    zValue: 10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-14-n-56",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3-slide",
                      selectorGuids: ["cd396821-29d6-5d7f-079b-3075fbe5c6b5"],
                    },
                    xValue: 0.6,
                    yValue: 0.6,
                    locked: true,
                  },
                },
                {
                  id: "a-14-n-57",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-14-n-58",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    zValue: -10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-14-n-59",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-content",
                      selectorGuids: ["2f6deff6-3986-b904-d476-b58620831376"],
                    },
                    xValue: 1.43,
                    yValue: 1.43,
                    locked: true,
                  },
                },
                {
                  id: "a-14-n-60",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__3s-video",
                      selectorGuids: ["88921b62-bad2-bc3b-616a-7384d0e7293a"],
                    },
                    yValue: 40,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1666605128522,
    },
    "a-15": {
      id: "a-15",
      title: "3s into-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e470",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-39",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-anim__3s-description",
                  selectorGuids: ["fc51ab98-7592-4fff-62d8-1c0701ab2798"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e473",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-37",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|08afc4a0-63b2-6fa5-6d01-8f59105fc611",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-anim__3s-h-img",
                  selectorGuids: ["55503c20-85d0-73d6-c407-0d43760bbc65"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-40",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e470",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-50",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e473",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-15-n-49",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e473",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-46",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__3s-h-img",
                  selectorGuids: ["55503c20-85d0-73d6-c407-0d43760bbc65"],
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-44",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|08afc4a0-63b2-6fa5-6d01-8f59105fc611",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-15-n-43",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|08afc4a0-63b2-6fa5-6d01-8f59105fc611",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-41",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e470",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e470",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-24",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e470",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-15-n-25",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e470",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|08afc4a0-63b2-6fa5-6d01-8f59105fc611",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-29",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|08afc4a0-63b2-6fa5-6d01-8f59105fc611",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-15-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|08afc4a0-63b2-6fa5-6d01-8f59105fc611",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e473",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-32",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e473",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-15-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e473",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  selector: ".scroll-anim__3s-h-img",
                  selectorGuids: ["55503c20-85d0-73d6-c407-0d43760bbc65"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-26",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  selector: ".scroll-anim__3s-h-img",
                  selectorGuids: ["55503c20-85d0-73d6-c407-0d43760bbc65"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "easeOut",
                duration: 600,
                target: {
                  selector: ".scroll-anim__3s-description",
                  selectorGuids: ["fc51ab98-7592-4fff-62d8-1c0701ab2798"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1666696178439,
    },
    "a-16": {
      id: "a-16",
      title: "3s out-of-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e470",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  selector: ".scroll-anim__3s-description",
                  selectorGuids: ["fc51ab98-7592-4fff-62d8-1c0701ab2798"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|14da7d19-f9d6-78d7-d432-95e1c942e473",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|08afc4a0-63b2-6fa5-6d01-8f59105fc611",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  selector: ".scroll-anim__3s-h-img",
                  selectorGuids: ["55503c20-85d0-73d6-c407-0d43760bbc65"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666696178439,
    },
    "a-17": {
      id: "a-17",
      title: "4s features into-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-wrapper-2-2",
                  selectorGuids: ["7ffd95e7-6c67-0b07-644d-4103a13fdfdc"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-anim__4s-ftrs-img-1",
                  selectorGuids: ["f83a26a8-ff8b-bbdc-2589-f6693453d55d"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-17-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-3-1",
                  selectorGuids: ["d9611d39-54a4-c523-bece-e4fda618b959"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-3-2",
                  selectorGuids: ["a88efbee-cf64-d907-d74f-ab0f5005514e"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1500,
                target: {
                  selector: ".scroll-anim__4s-ftrs-img-1",
                  selectorGuids: ["f83a26a8-ff8b-bbdc-2589-f6693453d55d"],
                },
                zValue: 360,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 500,
                easing: "ease",
                duration: 1500,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-wrapper-2-2",
                  selectorGuids: ["7ffd95e7-6c67-0b07-644d-4103a13fdfdc"],
                },
                yValue: null,
                zValue: 360,
                xUnit: "DEG",
                yUnit: "deg",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-3-1",
                  selectorGuids: ["d9611d39-54a4-c523-bece-e4fda618b959"],
                },
                yValue: 37.1,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-3-2",
                  selectorGuids: ["a88efbee-cf64-d907-d74f-ab0f5005514e"],
                },
                yValue: -37.1,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-3-1",
                  selectorGuids: ["d9611d39-54a4-c523-bece-e4fda618b959"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-3-2",
                  selectorGuids: ["a88efbee-cf64-d907-d74f-ab0f5005514e"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666773831763,
    },
    "a-18": {
      id: "a-18",
      title: "4s features out-of-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-wrapper-2-2",
                  selectorGuids: ["7ffd95e7-6c67-0b07-644d-4103a13fdfdc"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".scroll-anim__4s-ftrs-img-1",
                  selectorGuids: ["f83a26a8-ff8b-bbdc-2589-f6693453d55d"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-18-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-3-1",
                  selectorGuids: ["d9611d39-54a4-c523-bece-e4fda618b959"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".scroll-anim__4s-ftrs-circle-3-2",
                  selectorGuids: ["a88efbee-cf64-d907-d74f-ab0f5005514e"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666773831763,
    },
    "a-19": {
      id: "a-19",
      title: "scroll-anim 4s in",
      continuousParameterGroups: [
        {
          id: "a-19-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-19-n-31",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4-slide",
                      selectorGuids: ["0b3a886d-3dd4-bba4-ab87-de088deba708"],
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-32",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4-slide",
                      selectorGuids: ["0b3a886d-3dd4-bba4-ab87-de088deba708"],
                    },
                    xValue: 0.6,
                    yValue: 0.6,
                    locked: true,
                  },
                },
                {
                  id: "a-19-n-33",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4-slide",
                      selectorGuids: ["0b3a886d-3dd4-bba4-ab87-de088deba708"],
                    },
                    zValue: -10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-19-n-34",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-content",
                      selectorGuids: ["26a68272-820d-05d9-6200-e83e7e73e2e5"],
                    },
                    yValue: -50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-35",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-content",
                      selectorGuids: ["26a68272-820d-05d9-6200-e83e7e73e2e5"],
                    },
                    xValue: 1.43,
                    yValue: 1.43,
                    locked: true,
                  },
                },
                {
                  id: "a-19-n-36",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-content",
                      selectorGuids: ["26a68272-820d-05d9-6200-e83e7e73e2e5"],
                    },
                    zValue: 10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-19-n-37",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-video",
                      selectorGuids: ["e7ea5ddc-208c-bf4e-e63c-961193d32395"],
                    },
                    yValue: -40,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-45",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-text-container",
                      selectorGuids: ["59dcecac-57dd-6eb5-7701-acc83e84451c"],
                    },
                    yValue: 60,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 33,
              actionItems: [
                {
                  id: "a-19-n-38",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4-slide",
                      selectorGuids: ["0b3a886d-3dd4-bba4-ab87-de088deba708"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-39",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4-slide",
                      selectorGuids: ["0b3a886d-3dd4-bba4-ab87-de088deba708"],
                    },
                    xValue: 1.1,
                    yValue: 1.1,
                    locked: true,
                  },
                },
                {
                  id: "a-19-n-40",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4-slide",
                      selectorGuids: ["0b3a886d-3dd4-bba4-ab87-de088deba708"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-19-n-41",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-content",
                      selectorGuids: ["26a68272-820d-05d9-6200-e83e7e73e2e5"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-42",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-content",
                      selectorGuids: ["26a68272-820d-05d9-6200-e83e7e73e2e5"],
                    },
                    xValue: 0.912,
                    yValue: 0.912,
                    locked: true,
                  },
                },
                {
                  id: "a-19-n-43",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-content",
                      selectorGuids: ["26a68272-820d-05d9-6200-e83e7e73e2e5"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-19-n-44",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-video",
                      selectorGuids: ["e7ea5ddc-208c-bf4e-e63c-961193d32395"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 80,
              actionItems: [
                {
                  id: "a-19-n-46",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__4s-text-container",
                      selectorGuids: ["59dcecac-57dd-6eb5-7701-acc83e84451c"],
                    },
                    yValue: -60,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1666605128522,
    },
    "a-20": {
      id: "a-20",
      title: "4s into-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n-68",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cde",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-67",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea95",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-66",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|ee265920-e118-01f4-d767-51426887c12d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-65",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|406f03d8-3eee-44aa-dec3-dfe7b773c7b7",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-62",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e4330eaf-d0dc-98ee-640d-91fc8b0915ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-59",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|950ad808-0091-4bf6-b725-e430ba1f0bdd",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-56",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  selector: ".scroll-anim__4s-ftrs-img-container",
                  selectorGuids: ["ce87eafa-8f6d-4ca7-1035-c1e35a8983c1"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-55",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cda",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-52",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea91",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-49",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|742765cc-a1e5-a4e9-4b67-be5b3f2c252d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-64",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|406f03d8-3eee-44aa-dec3-dfe7b773c7b7",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-20-n-61",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e4330eaf-d0dc-98ee-640d-91fc8b0915ca",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-20-n-58",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|950ad808-0091-4bf6-b725-e430ba1f0bdd",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-20-n-54",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cda",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-20-n-51",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea91",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-20-n-48",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|742765cc-a1e5-a4e9-4b67-be5b3f2c252d",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-20-n-47",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|742765cc-a1e5-a4e9-4b67-be5b3f2c252d",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-63",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|406f03d8-3eee-44aa-dec3-dfe7b773c7b7",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-60",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e4330eaf-d0dc-98ee-640d-91fc8b0915ca",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-57",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|950ad808-0091-4bf6-b725-e430ba1f0bdd",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-53",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cda",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-50",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea91",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-26",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|742765cc-a1e5-a4e9-4b67-be5b3f2c252d",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-27",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|742765cc-a1e5-a4e9-4b67-be5b3f2c252d",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-20-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|742765cc-a1e5-a4e9-4b67-be5b3f2c252d",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea91",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-33",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea91",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-20-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea91",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-35",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cda",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-36",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cda",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-20-n-37",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cda",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-25",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".scroll-anim__4s-ftrs-img-container",
                  selectorGuids: ["ce87eafa-8f6d-4ca7-1035-c1e35a8983c1"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|950ad808-0091-4bf6-b725-e430ba1f0bdd",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-30",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|950ad808-0091-4bf6-b725-e430ba1f0bdd",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-20-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|950ad808-0091-4bf6-b725-e430ba1f0bdd",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-38",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e4330eaf-d0dc-98ee-640d-91fc8b0915ca",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-39",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e4330eaf-d0dc-98ee-640d-91fc8b0915ca",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-20-n-40",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e4330eaf-d0dc-98ee-640d-91fc8b0915ca",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-41",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|406f03d8-3eee-44aa-dec3-dfe7b773c7b7",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-42",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|406f03d8-3eee-44aa-dec3-dfe7b773c7b7",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-20-n-43",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|406f03d8-3eee-44aa-dec3-dfe7b773c7b7",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-44",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|ee265920-e118-01f4-d767-51426887c12d",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-45",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea95",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-46",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cde",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1666696178439,
    },
    "a-21": {
      id: "a-21",
      title: "4s out-of-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cde",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea95",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|ee265920-e118-01f4-d767-51426887c12d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|406f03d8-3eee-44aa-dec3-dfe7b773c7b7",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e4330eaf-d0dc-98ee-640d-91fc8b0915ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|950ad808-0091-4bf6-b725-e430ba1f0bdd",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  selector: ".scroll-anim__4s-ftrs-img-container",
                  selectorGuids: ["ce87eafa-8f6d-4ca7-1035-c1e35a8983c1"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|21355b44-b60e-38da-669e-286a1d619cda",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|4272eca1-46ae-ef56-f97c-80463109ea91",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|742765cc-a1e5-a4e9-4b67-be5b3f2c252d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666696178439,
    },
    "a-22": {
      id: "a-22",
      title: "scroll-anim 5s",
      continuousParameterGroups: [
        {
          id: "a-22-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-22-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._5s-iphone",
                      selectorGuids: ["6c7e845d-b697-78e1-1bad-c33b91e2ab2a"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-22-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._5s-ipad",
                      selectorGuids: ["b20675f8-1bb2-5864-df96-b0d17bb276e9"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-22-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-big-text",
                      selectorGuids: ["9fc538da-6bc3-9616-dec3-e3cab3d9c0a1"],
                    },
                    xValue: 0,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-22-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._5s-iphone",
                      selectorGuids: ["6c7e845d-b697-78e1-1bad-c33b91e2ab2a"],
                    },
                    yValue: 30,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-22-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._5s-ipad",
                      selectorGuids: ["b20675f8-1bb2-5864-df96-b0d17bb276e9"],
                    },
                    yValue: 70,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-22-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-big-text",
                      selectorGuids: ["9fc538da-6bc3-9616-dec3-e3cab3d9c0a1"],
                    },
                    xValue: -43,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1666798552541,
    },
    "a-23": {
      id: "a-23",
      title: "scroll-anim 6s",
      continuousParameterGroups: [
        {
          id: "a-23-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-23-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._6s-horizontal-wrapper",
                      selectorGuids: ["e80bd452-9508-8a7c-99f6-810f0db466f5"],
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-23-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._6s-header",
                      selectorGuids: ["5cd27c05-2cff-4f1f-a7ff-27af439b1b8b"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 15,
              actionItems: [
                {
                  id: "a-23-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._6s-header",
                      selectorGuids: ["5cd27c05-2cff-4f1f-a7ff-27af439b1b8b"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-23-n-5",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._6s-header",
                      selectorGuids: ["5cd27c05-2cff-4f1f-a7ff-27af439b1b8b"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 16,
              actionItems: [
                {
                  id: "a-23-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._6s-header",
                      selectorGuids: ["5cd27c05-2cff-4f1f-a7ff-27af439b1b8b"],
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-23-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._6s-horizontal-wrapper",
                      selectorGuids: ["e80bd452-9508-8a7c-99f6-810f0db466f5"],
                    },
                    xValue: -100,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1666864825967,
    },
    "a-24": {
      id: "a-24",
      title: "7s hor move into-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._7s-hor-animate-1",
                  selectorGuids: ["b882e3f2-1dfe-44e5-85ff-4832c6eafcf3"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._7s-hor-animate-2",
                  selectorGuids: ["cad65a40-127b-f43c-625e-15de6ff82dbc"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._7s-hor-animate-1",
                  selectorGuids: ["b882e3f2-1dfe-44e5-85ff-4832c6eafcf3"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._7s-hor-animate-2",
                  selectorGuids: ["cad65a40-127b-f43c-625e-15de6ff82dbc"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666882147490,
    },
    "a-25": {
      id: "a-25",
      title: "7s hor move out-of-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._7s-hor-animate-1",
                  selectorGuids: ["b882e3f2-1dfe-44e5-85ff-4832c6eafcf3"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: "._7s-hor-animate-2",
                  selectorGuids: ["cad65a40-127b-f43c-625e-15de6ff82dbc"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666882147490,
    },
    "a-26": {
      id: "a-26",
      title: "mob load page",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|33995364-bacd-8a7f-0bc5-0cae5ceb54c9",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                yValue: 63,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                xValue: 0.5,
                yValue: 0.5,
                locked: true,
              },
            },
            {
              id: "a-26-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-26-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-26-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                yValue: 2.7777777777777777,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-11",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-26-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|c1a90bff-c197-c690-601a-1efbec0b9614",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|aec8866b-6daf-a0d5-7f68-47dfa27fd618",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d4357031-2458-8b04-3e90-a81295783d59",
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e3664499-0f72-f1f5-bd7f-cf4422985304",
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|0ac64102-3536-c601-5aa3-907b864f607b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|7f96e916-c5c0-f2e1-200b-a96fac32cef1",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-40",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "64357e0972ffee4f73c2b87d|33995364-bacd-8a7f-0bc5-0cae5ceb54c9",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 900,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-20",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 900,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-26-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 770,
                target: {
                  id: "64357e0972ffee4f73c2b87d|d4357031-2458-8b04-3e90-a81295783d59",
                },
                xValue: -35,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 770,
                target: {
                  id: "64357e0972ffee4f73c2b87d|e3664499-0f72-f1f5-bd7f-cf4422985304",
                },
                xValue: 35,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-25",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 400,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|6d6d8ff6-ddba-839f-e102-dbb989ec71ad",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-26-n-26",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 500,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-26-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|b74e7f4a-debd-808d-a3b3-9a2c02181b1b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-30",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 600,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-26-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: [0.25, 0.1, 0.13, 1],
                duration: 800,
                target: {
                  id: "64357e0972ffee4f73c2b87d|8368199b-d2f0-d3ac-70b9-b95c2d44ad13",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "easeOut",
                duration: 400,
                target: {
                  id: "64357e0972ffee4f73c2b87d|c1a90bff-c197-c690-601a-1efbec0b9614",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "easeOut",
                duration: 400,
                target: {
                  id: "64357e0972ffee4f73c2b87d|aec8866b-6daf-a0d5-7f68-47dfa27fd618",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-37",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "easeOut",
                duration: 600,
                target: {
                  id: "64357e0972ffee4f73c2b87d|0ac64102-3536-c601-5aa3-907b864f607b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-39",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|7f96e916-c5c0-f2e1-200b-a96fac32cef1",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-41",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "easeOut",
                duration: 400,
                target: {
                  id: "64357e0972ffee4f73c2b87d|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee4f73c2b87d|9a46931a-d710-488f-5ff0-f9e14ef78139",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1666618548625,
    },
    "a-28": {
      id: "a-28",
      title: "mob menu open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".m-open-menu",
                  selectorGuids: ["9ee1236d-49a0-0905-9119-42143062b72d"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".m-open-menu__link",
                  selectorGuids: ["cf4919eb-d519-e719-5395-e2b6a81b26c5"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".m-close-menu__line-2",
                  selectorGuids: ["93726566-5cc4-5dee-f2f5-448dd73a80a6"],
                },
                yValue: 0.75,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".m-close-menu__line-1",
                  selectorGuids: ["a41c4d11-36cb-b88f-4ea6-586f05d50bd6"],
                },
                yValue: -0.75,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-9",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".m-close-menu__line-1",
                  selectorGuids: ["a41c4d11-36cb-b88f-4ea6-586f05d50bd6"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-28-n-10",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".m-close-menu__line-2",
                  selectorGuids: ["93726566-5cc4-5dee-f2f5-448dd73a80a6"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-28-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".m-open-menu__button",
                  selectorGuids: ["996850c8-4a06-4686-7bcf-63f7e50ba4fc"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".m-open-menu",
                  selectorGuids: ["9ee1236d-49a0-0905-9119-42143062b72d"],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".m-open-menu__link",
                  selectorGuids: ["cf4919eb-d519-e719-5395-e2b6a81b26c5"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".m-close-menu__line-2",
                  selectorGuids: ["93726566-5cc4-5dee-f2f5-448dd73a80a6"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".m-close-menu__line-1",
                  selectorGuids: ["a41c4d11-36cb-b88f-4ea6-586f05d50bd6"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".m-open-menu__button",
                  selectorGuids: ["996850c8-4a06-4686-7bcf-63f7e50ba4fc"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-12",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".m-close-menu__line-2",
                  selectorGuids: ["93726566-5cc4-5dee-f2f5-448dd73a80a6"],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-28-n-11",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".m-close-menu__line-1",
                  selectorGuids: ["a41c4d11-36cb-b88f-4ea6-586f05d50bd6"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1666985029225,
    },
    "a-29": {
      id: "a-29",
      title: "mob menu close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n-7",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".m-open-menu",
                  selectorGuids: ["9ee1236d-49a0-0905-9119-42143062b72d"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-29-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".m-open-menu__link",
                  selectorGuids: ["cf4919eb-d519-e719-5395-e2b6a81b26c5"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-12",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".m-close-menu__line-1",
                  selectorGuids: ["a41c4d11-36cb-b88f-4ea6-586f05d50bd6"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-29-n-11",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".m-close-menu__line-2",
                  selectorGuids: ["93726566-5cc4-5dee-f2f5-448dd73a80a6"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-29-n-13",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".m-open-menu",
                  selectorGuids: ["9ee1236d-49a0-0905-9119-42143062b72d"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-29-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".m-open-menu__button",
                  selectorGuids: ["996850c8-4a06-4686-7bcf-63f7e50ba4fc"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".m-close-menu__line-1",
                  selectorGuids: ["a41c4d11-36cb-b88f-4ea6-586f05d50bd6"],
                },
                yValue: -0.75,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".m-close-menu__line-2",
                  selectorGuids: ["93726566-5cc4-5dee-f2f5-448dd73a80a6"],
                },
                yValue: 0.75,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1666985029225,
    },
    "a-2": {
      id: "a-2",
      title: "scroll-anim 0s",
      continuousParameterGroups: [
        {
          id: "a-2-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-2-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-1",
                      selectorGuids: ["407f9956-ee50-b508-4554-49b1c7c2f99f"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-2-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-1",
                      selectorGuids: ["407f9956-ee50-b508-4554-49b1c7c2f99f"],
                    },
                    yValue: -45,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-2-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-bts",
                      selectorGuids: ["d630534b-b172-4fb5-29f4-4410a759b0e8"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-2-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-1",
                      selectorGuids: ["407f9956-ee50-b508-4554-49b1c7c2f99f"],
                    },
                    xValue: 2.7,
                    yValue: 2.7,
                    locked: true,
                  },
                },
                {
                  id: "a-2-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-mask-1",
                      selectorGuids: ["407f9956-ee50-b508-4554-49b1c7c2f99f"],
                    },
                    yValue: -212,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-2-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".scroll-anim__1s-bts",
                      selectorGuids: ["d630534b-b172-4fb5-29f4-4410a759b0e8"],
                    },
                    yValue: -54,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1666615000943,
    },
    "a-30": {
      id: "a-30",
      title: "scroll anim frame",
      continuousParameterGroups: [
        {
          id: "a-30-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-30-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame",
                      selectorGuids: ["f7e48525-a52b-19d3-c779-269f9286737c"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 1,
              actionItems: [
                {
                  id: "a-30-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame",
                      selectorGuids: ["f7e48525-a52b-19d3-c779-269f9286737c"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 34,
              actionItems: [
                {
                  id: "a-30-n-9",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-1",
                      selectorGuids: ["ae8a4da2-adf1-21d5-aae1-949cee94d4b2"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-30-n-10",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-2",
                      selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                    },
                    value: 0.3,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-30-n-7",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-2",
                      selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-30-n-8",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-1",
                      selectorGuids: ["ae8a4da2-adf1-21d5-aae1-949cee94d4b2"],
                    },
                    value: 0.3,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 59,
              actionItems: [
                {
                  id: "a-30-n-11",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-2",
                      selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-30-n-13",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-3",
                      selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                    },
                    value: 0.3,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: "a-30-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-2",
                      selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                    },
                    value: 0.3,
                    unit: "",
                  },
                },
                {
                  id: "a-30-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-3",
                      selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 84,
              actionItems: [
                {
                  id: "a-30-n-15",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-3",
                      selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-30-n-17",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-4",
                      selectorGuids: ["d7314e39-ded0-a3bf-9134-06b7b655d178"],
                    },
                    value: 0.3,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 85,
              actionItems: [
                {
                  id: "a-30-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-3",
                      selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                    },
                    value: 0.3,
                    unit: "",
                  },
                },
                {
                  id: "a-30-n-18",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame__number-4",
                      selectorGuids: ["d7314e39-ded0-a3bf-9134-06b7b655d178"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 99,
              actionItems: [
                {
                  id: "a-30-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame",
                      selectorGuids: ["f7e48525-a52b-19d3-c779-269f9286737c"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-30-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".animate-frame",
                      selectorGuids: ["f7e48525-a52b-19d3-c779-269f9286737c"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1667050031147,
    },
    "a-31": {
      id: "a-31",
      title: "menu visible",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|c1a90bff-c197-c690-601a-1efbec0b9614",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1667057816104,
    },
    "a-32": {
      id: "a-32",
      title: "menu hide",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|c1a90bff-c197-c690-601a-1efbec0b9614",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "64357e0972ffee4f73c2b87d|c1a90bff-c197-c690-601a-1efbec0b9614",
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1667057816104,
    },
    "a-33": {
      id: "a-33",
      title: "dark-menu into-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".container-menu__light",
                  selectorGuids: ["f13e1694-dcee-68eb-a0a2-219104226064"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".container-menu__light",
                  selectorGuids: ["f13e1694-dcee-68eb-a0a2-219104226064"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".container-menu__dark",
                  selectorGuids: ["b05a21a0-ec82-ea86-ba06-d7100ed2841a"],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1667058857175,
    },
    "a-34": {
      id: "a-34",
      title: "dark-menu out-of-view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".container-menu__light",
                  selectorGuids: ["f13e1694-dcee-68eb-a0a2-219104226064"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".container-menu__dark",
                  selectorGuids: ["b05a21a0-ec82-ea86-ba06-d7100ed2841a"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1667058857175,
    },
    "a-35": {
      id: "a-35",
      title: "video-bt on-hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".bt-video__container",
                  selectorGuids: ["d625025a-a608-bee5-fff4-5beffcceb659"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-35-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".bt-video__img",
                  selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                },
                xValue: 1.3,
                yValue: 1.3,
                locked: true,
              },
            },
            {
              id: "a-35-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".bt-video__bt",
                  selectorGuids: ["dfc9ee2e-b8cc-ab48-1a96-5db3d7f8d0c9"],
                },
                globalSwatchId: "8e83b90b",
                rValue: 81,
                bValue: 255,
                gValue: 98,
                aValue: 1,
              },
            },
            {
              id: "a-35-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".bt-video__bt",
                  selectorGuids: ["dfc9ee2e-b8cc-ab48-1a96-5db3d7f8d0c9"],
                },
                globalSwatchId: "c0a80a89",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".bt-video__container",
                  selectorGuids: ["d625025a-a608-bee5-fff4-5beffcceb659"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-35-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".bt-video__img",
                  selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-35-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".bt-video__bt",
                  selectorGuids: ["dfc9ee2e-b8cc-ab48-1a96-5db3d7f8d0c9"],
                },
                globalSwatchId: "db420f8a",
                rValue: 2,
                bValue: 54,
                gValue: 35,
                aValue: 1,
              },
            },
            {
              id: "a-35-n-8",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".bt-video__bt",
                  selectorGuids: ["dfc9ee2e-b8cc-ab48-1a96-5db3d7f8d0c9"],
                },
                globalSwatchId: "298db438",
                rValue: 202,
                bValue: 196,
                gValue: 252,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1668090533972,
    },
    "a-36": {
      id: "a-36",
      title: "video-bt hover-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  selector: ".bt-video__container",
                  selectorGuids: ["d625025a-a608-bee5-fff4-5beffcceb659"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-36-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".bt-video__img",
                  selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                },
                xValue: 1.3,
                yValue: 1.3,
                locked: true,
              },
            },
            {
              id: "a-36-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".bt-video__bt",
                  selectorGuids: ["dfc9ee2e-b8cc-ab48-1a96-5db3d7f8d0c9"],
                },
                globalSwatchId: "c0a80a89",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-36-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".bt-video__bt",
                  selectorGuids: ["dfc9ee2e-b8cc-ab48-1a96-5db3d7f8d0c9"],
                },
                globalSwatchId: "8e83b90b",
                rValue: 81,
                bValue: 255,
                gValue: 98,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1668090533972,
    },
    "a-37": {
      id: "a-37",
      title: "video-bt hide",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-37-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-slide__bt-container",
                  selectorGuids: ["49d5f84f-adcf-565e-c20c-815171efc571"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-37-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-37-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".bt-video__bt",
                  selectorGuids: ["dfc9ee2e-b8cc-ab48-1a96-5db3d7f8d0c9"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-37-n-16",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero-slide__bt-container",
                  selectorGuids: ["49d5f84f-adcf-565e-c20c-815171efc571"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  selector: ".bt-video__bt",
                  selectorGuids: ["dfc9ee2e-b8cc-ab48-1a96-5db3d7f8d0c9"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-17",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
            {
              id: "a-37-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                value: "none",
              },
            },
            {
              id: "a-37-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-slide__bt-container",
                  selectorGuids: ["49d5f84f-adcf-565e-c20c-815171efc571"],
                },
                value: "none",
              },
            },
            {
              id: "a-37-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1668094820812,
    },
    "a-38": {
      id: "a-38",
      title: "video-bt show",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                value: "flex",
              },
            },
            {
              id: "a-38-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: "flex",
              },
            },
            {
              id: "a-38-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-slide__bt-container",
                  selectorGuids: ["49d5f84f-adcf-565e-c20c-815171efc571"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero-slide__bt-container",
                  selectorGuids: ["49d5f84f-adcf-565e-c20c-815171efc571"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-38-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".bt-video__bt",
                  selectorGuids: ["dfc9ee2e-b8cc-ab48-1a96-5db3d7f8d0c9"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1668094820812,
    },
    "a-57": {
      id: "a-57",
      title: "video-bt hide new",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-57-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-57-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-57-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1668094820812,
    },
    "a-58": {
      id: "a-58",
      title: "video-bt show new",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-58-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero-slide__links-container",
                  selectorGuids: ["ee572adf-bd70-ff62-05ee-a4a96a4f27fa"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1668094820812,
    },
    "a-39": {
      id: "a-39",
      title: "hero animate-arc",
      continuousParameterGroups: [
        {
          id: "a-39-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-39-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__head",
                      selectorGuids: ["ae1e7d03-6373-cf2c-b3be-d6723f57f357"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-39-n-5",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__oval-img",
                      selectorGuids: ["4ec39cd3-a9c4-e9ef-b40c-e743b2d3fcf8"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-39-n-13",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__head-is1",
                      selectorGuids: ["a8b917c2-3074-9ffc-d773-caa9f0a3a5f8"],
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-39-n-14",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__head-is2",
                      selectorGuids: ["01f7d0f3-e0e8-3aa7-13b9-80d223af5bd3"],
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-39-n-15",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__head-is3",
                      selectorGuids: ["bcf69ba9-6121-d583-058e-4a33706b8d00"],
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-39-n-10",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__head-is1",
                      selectorGuids: ["a8b917c2-3074-9ffc-d773-caa9f0a3a5f8"],
                    },
                    yValue: -15,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-39-n-11",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__head-is2",
                      selectorGuids: ["01f7d0f3-e0e8-3aa7-13b9-80d223af5bd3"],
                    },
                    yValue: -15,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-39-n-12",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__head-is3",
                      selectorGuids: ["bcf69ba9-6121-d583-058e-4a33706b8d00"],
                    },
                    yValue: -15,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-39-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__head",
                      selectorGuids: ["ae1e7d03-6373-cf2c-b3be-d6723f57f357"],
                    },
                    yValue: -70,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-39-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__oval-img",
                      selectorGuids: ["4ec39cd3-a9c4-e9ef-b40c-e743b2d3fcf8"],
                    },
                    xValue: 1.9,
                    yValue: 1.9,
                    locked: true,
                  },
                },
                {
                  id: "a-39-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__oval-img",
                      selectorGuids: ["4ec39cd3-a9c4-e9ef-b40c-e743b2d3fcf8"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-39-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__oval-img",
                      selectorGuids: ["4ec39cd3-a9c4-e9ef-b40c-e743b2d3fcf8"],
                    },
                    yValue: -80,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-39-n-9",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero-slide__oval-img",
                      selectorGuids: ["4ec39cd3-a9c4-e9ef-b40c-e743b2d3fcf8"],
                    },
                    xValue: 3.8,
                    yValue: 3.8,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1668515427674,
    },
    "a-44": {
      id: "a-44",
      title: "button-scale-hover-in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-44-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  id: "64357e0972ffee1e51c2b876|8312a1a5-dae7-16a1-8cec-e79ee9e966df",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-44-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  id: "64357e0972ffee1e51c2b876|8312a1a5-dae7-16a1-8cec-e79ee9e966df",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
            {
              id: "a-44-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  id: "64357e0972ffee1e51c2b876|8312a1a5-dae7-16a1-8cec-e79ee9e966df",
                },
                globalSwatchId: "c0a80a89",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1668690253720,
    },
    "a-45": {
      id: "a-45",
      title: "button-scale-hover-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-45-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  id: "64357e0972ffee1e51c2b876|8312a1a5-dae7-16a1-8cec-e79ee9e966df",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-45-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  id: "64357e0972ffee1e51c2b876|8312a1a5-dae7-16a1-8cec-e79ee9e966df",
                },
                globalSwatchId: "298db438",
                rValue: 202,
                bValue: 196,
                gValue: 252,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1668690253720,
    },
    "a-54": {
      id: "a-54",
      title: "footer-link-hover-in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-54-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sign",
                  selectorGuids: ["44e19026-97a1-291d-bc0d-8b7d1f53ce8d"],
                },
                xValue: 0.2,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-54-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 150,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer__link-line.line-2",
                  selectorGuids: [
                    "9db3dd6b-be80-3a69-061e-4aec2021450f",
                    "e7e660b8-7d23-8c93-843f-c764b3537c0c",
                  ],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-54-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 150,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer__link-line.line-1",
                  selectorGuids: [
                    "9db3dd6b-be80-3a69-061e-4aec2021450f",
                    "8d6ca55b-2480-a083-8b07-266654f71a46",
                  ],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1668783443552,
    },
    "a-55": {
      id: "a-55",
      title: "footer-link-hover-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-55-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".sign",
                  selectorGuids: ["44e19026-97a1-291d-bc0d-8b7d1f53ce8d"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 150,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer__link-line.line-2",
                  selectorGuids: [
                    "9db3dd6b-be80-3a69-061e-4aec2021450f",
                    "e7e660b8-7d23-8c93-843f-c764b3537c0c",
                  ],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-55-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 150,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".footer__link-line.line-1",
                  selectorGuids: [
                    "9db3dd6b-be80-3a69-061e-4aec2021450f",
                    "8d6ca55b-2480-a083-8b07-266654f71a46",
                  ],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1668783443552,
    },
    "a-59": {
      id: "a-59",
      title: "btn-hero-hide",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-59-n-20",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-button__bg.transparent.is1",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "6cb6620d-e0ca-6eb2-0c60-426d803ffb12",
                    "660ed600-7fe7-8291-f1e1-4eb933e5b0bb",
                  ],
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-59-n-21",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-button__bg.is2",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "e704ab66-974d-d3e3-8d21-8744c6a37ea4",
                  ],
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-59-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button-green-container.margin-left.mob",
                  selectorGuids: [
                    "37f84014-7d4e-075a-2e92-86e8d763f576",
                    "72dc8963-931e-326e-cb60-a1942d1ba483",
                    "6dfdb89c-d01d-ef25-f548-b8a4b8ba113f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-59-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button-container.mob-hide",
                  selectorGuids: [
                    "9a8c95ed-2e97-50d1-6219-961e3c7a5e06",
                    "29593a1a-c412-cb10-5491-471bf0395d58",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-59-n-28",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-59-n-29",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-59-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-59-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-59-n-51",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".menu-button__bg.is2",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "e704ab66-974d-d3e3-8d21-8744c6a37ea4",
                  ],
                },
                widthValue: 40,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-59-n-52",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".menu-button__bg.transparent.is1",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "6cb6620d-e0ca-6eb2-0c60-426d803ffb12",
                    "660ed600-7fe7-8291-f1e1-4eb933e5b0bb",
                  ],
                },
                widthValue: 40,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-59-n-53",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".button-green-container.margin-left.mob",
                  selectorGuids: [
                    "37f84014-7d4e-075a-2e92-86e8d763f576",
                    "72dc8963-931e-326e-cb60-a1942d1ba483",
                    "6dfdb89c-d01d-ef25-f548-b8a4b8ba113f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-59-n-54",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".button-container.mob-hide",
                  selectorGuids: [
                    "9a8c95ed-2e97-50d1-6219-961e3c7a5e06",
                    "29593a1a-c412-cb10-5491-471bf0395d58",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-59-n-55",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
            {
              id: "a-59-n-56",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
            {
              id: "a-59-n-57",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-59-n-58",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-59-n-59",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-slide__bt-container",
                  selectorGuids: ["49d5f84f-adcf-565e-c20c-815171efc571"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1668619115550,
    },
    "a-60": {
      id: "a-60",
      title: "btn-hero-visible",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-60-n-17",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-slide__bt-container",
                  selectorGuids: ["49d5f84f-adcf-565e-c20c-815171efc571"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-60-n-9",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".menu-button__bg.is2",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "e704ab66-974d-d3e3-8d21-8744c6a37ea4",
                  ],
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-60-n-10",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".menu-button__bg.transparent.is1",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "6cb6620d-e0ca-6eb2-0c60-426d803ffb12",
                    "660ed600-7fe7-8291-f1e1-4eb933e5b0bb",
                  ],
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-60-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".button-green-container.margin-left.mob",
                  selectorGuids: [
                    "37f84014-7d4e-075a-2e92-86e8d763f576",
                    "72dc8963-931e-326e-cb60-a1942d1ba483",
                    "6dfdb89c-d01d-ef25-f548-b8a4b8ba113f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-60-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".button-container.mob-hide",
                  selectorGuids: [
                    "9a8c95ed-2e97-50d1-6219-961e3c7a5e06",
                    "29593a1a-c412-cb10-5491-471bf0395d58",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-60-n-13",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-60-n-14",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-60-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-60-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1668619115550,
    },
    "a-63": {
      id: "a-63",
      title: "scroll-anim 1s",
      continuousParameterGroups: [
        {
          id: "a-63-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-63-n",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is1",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "a3110989-3485-d4c9-ac7b-9b0d9e4b4834",
                      ],
                    },
                    yValue: 40,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-3",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is2",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "79f0ace3-2dd8-6169-ed2d-6377d9267ea1",
                      ],
                    },
                    yValue: 45,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-4",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is3",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "9f78993d-45d6-ebd6-292e-4db275cb1125",
                      ],
                    },
                    yValue: 50,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is4",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "b82ffd79-4549-d6ef-48e4-dc7c6cfab8b4",
                      ],
                    },
                    yValue: 55,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-6",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is5",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "b8ed574b-a08c-0179-fcc9-49ce6ec81371",
                      ],
                    },
                    xValue: null,
                    yValue: 60,
                    zValue: null,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is1",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "a3110989-3485-d4c9-ac7b-9b0d9e4b4834",
                      ],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-63-n-13",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is2",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "79f0ace3-2dd8-6169-ed2d-6377d9267ea1",
                      ],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-63-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is3",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "9f78993d-45d6-ebd6-292e-4db275cb1125",
                      ],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-63-n-15",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is4",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "b82ffd79-4549-d6ef-48e4-dc7c6cfab8b4",
                      ],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-63-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is5",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "b8ed574b-a08c-0179-fcc9-49ce6ec81371",
                      ],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-63-n-26",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is6",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "2c85ddd0-9dbf-aebb-ee11-87f1ea9243b3",
                      ],
                    },
                    yValue: 65,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-27",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is6",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "2c85ddd0-9dbf-aebb-ee11-87f1ea9243b3",
                      ],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-63-n-7",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is1",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "a3110989-3485-d4c9-ac7b-9b0d9e4b4834",
                      ],
                    },
                    yValue: 0,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-17",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is1",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "a3110989-3485-d4c9-ac7b-9b0d9e4b4834",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 55,
              actionItems: [
                {
                  id: "a-63-n-8",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is2",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "79f0ace3-2dd8-6169-ed2d-6377d9267ea1",
                      ],
                    },
                    yValue: 0,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-18",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is2",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "79f0ace3-2dd8-6169-ed2d-6377d9267ea1",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: "a-63-n-9",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is3",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "9f78993d-45d6-ebd6-292e-4db275cb1125",
                      ],
                    },
                    yValue: 0,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-19",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is3",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "9f78993d-45d6-ebd6-292e-4db275cb1125",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 65,
              actionItems: [
                {
                  id: "a-63-n-10",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is4",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "b82ffd79-4549-d6ef-48e4-dc7c6cfab8b4",
                      ],
                    },
                    yValue: 0,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-20",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is4",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "b82ffd79-4549-d6ef-48e4-dc7c6cfab8b4",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 70,
              actionItems: [
                {
                  id: "a-63-n-11",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is5",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "b8ed574b-a08c-0179-fcc9-49ce6ec81371",
                      ],
                    },
                    yValue: 0,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-21",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is5",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "b8ed574b-a08c-0179-fcc9-49ce6ec81371",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 85,
              actionItems: [
                {
                  id: "a-63-n-24",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is6",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "2c85ddd0-9dbf-aebb-ee11-87f1ea9243b3",
                      ],
                    },
                    yValue: 0,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-63-n-25",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".hero-quote__span.is6",
                      selectorGuids: [
                        "cbccc911-df16-214b-77d1-72ac8296d695",
                        "2c85ddd0-9dbf-aebb-ee11-87f1ea9243b3",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669285175933,
    },
    "a-67": {
      id: "a-67",
      title: "slide-nav-1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-67-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-frame__number-1",
                  selectorGuids: ["ae8a4da2-adf1-21d5-aae1-949cee94d4b2"],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-67-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-1",
                  selectorGuids: ["ae8a4da2-adf1-21d5-aae1-949cee94d4b2"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669289640711,
    },
    "a-68": {
      id: "a-68",
      title: "slide-nav-1-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-68-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-1",
                  selectorGuids: ["ae8a4da2-adf1-21d5-aae1-949cee94d4b2"],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669289640711,
    },
    "a-65": {
      id: "a-65",
      title: "slide-nav-2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-65-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-frame__number-2",
                  selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-65-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-2",
                  selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669289640711,
    },
    "a-66": {
      id: "a-66",
      title: "slide-nav-2--out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-66-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-2",
                  selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669289640711,
    },
    "a-70": {
      id: "a-70",
      title: "slide-nav-3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-70-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-frame__number-3",
                  selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-70-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-3",
                  selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669289640711,
    },
    "a-71": {
      id: "a-71",
      title: "slide-nav-3--out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-71-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-3",
                  selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669289640711,
    },
    "a-72": {
      id: "a-72",
      title: "slide-nav-4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-72-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-4",
                  selectorGuids: ["d7314e39-ded0-a3bf-9134-06b7b655d178"],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-72-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-4",
                  selectorGuids: ["d7314e39-ded0-a3bf-9134-06b7b655d178"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669289640711,
    },
    "a-73": {
      id: "a-73",
      title: "slide-nav-4--out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-73-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-4",
                  selectorGuids: ["d7314e39-ded0-a3bf-9134-06b7b655d178"],
                },
                value: 0.3,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669289640711,
    },
    "a-74": {
      id: "a-74",
      title: "scroll-anim 2s",
      continuousParameterGroups: [
        {
          id: "a-74-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-74-n",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-h-is1",
                      selectorGuids: ["b735e5eb-3b9f-5946-eaba-eaf3a24edec3"],
                    },
                    yValue: 30,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-74-n-3",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-h-is2",
                      selectorGuids: ["74888b38-5c18-9fd2-ed24-2364a67e6302"],
                    },
                    yValue: 30,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
                {
                  id: "a-74-n-9",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-h-is1",
                      selectorGuids: ["b735e5eb-3b9f-5946-eaba-eaf3a24edec3"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-74-n-10",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-h-is2",
                      selectorGuids: ["74888b38-5c18-9fd2-ed24-2364a67e6302"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-74-n-13",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-desc",
                      selectorGuids: ["f4dc0006-fd6a-88f6-b5e8-c6f877e64033"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-74-n-11",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-h-is1",
                      selectorGuids: ["b735e5eb-3b9f-5946-eaba-eaf3a24edec3"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-74-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-desc",
                      selectorGuids: ["f4dc0006-fd6a-88f6-b5e8-c6f877e64033"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-74-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-h-is2",
                      selectorGuids: ["74888b38-5c18-9fd2-ed24-2364a67e6302"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-74-n-7",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-h-is1",
                      selectorGuids: ["b735e5eb-3b9f-5946-eaba-eaf3a24edec3"],
                    },
                    yValue: 0,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
              ],
            },
            {
              keyframe: 70,
              actionItems: [
                {
                  id: "a-74-n-8",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-h-is2",
                      selectorGuids: ["74888b38-5c18-9fd2-ed24-2364a67e6302"],
                    },
                    yValue: 0,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669293258110,
    },
    "a-75": {
      id: "a-75",
      title: "c-cursor",
      continuousParameterGroups: [
        {
          id: "a-75-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-75-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".c-cursor__snap",
                      selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                    },
                    xValue: -50,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-75-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".c-cursor__snap",
                      selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                    },
                    xValue: 50,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-75-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-75-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".c-cursor__snap",
                      selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                    },
                    yValue: -50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-75-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".c-cursor__snap",
                      selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669305233402,
    },
    "a-78": {
      id: "a-78",
      title: "c-cursor-link--in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-78-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".c-cursor__snap",
                  selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-78-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|5ec410f5-f07d-d24a-05cd-4882ebb610f0",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-78-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".c-cursor__snap",
                  selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                },
                xValue: 0.1,
                yValue: 0.1,
                locked: true,
              },
            },
            {
              id: "a-78-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  id: "64357e0972ffee1e51c2b876|5ec410f5-f07d-d24a-05cd-4882ebb610f0",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669306002638,
    },
    "a-79": {
      id: "a-79",
      title: "c-cursor-link--out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-79-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".c-cursor__snap",
                  selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-79-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  id: "64357e0972ffee1e51c2b876|5ec410f5-f07d-d24a-05cd-4882ebb610f0",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669306002638,
    },
    "a-64": {
      id: "a-64",
      title: "slide-navigation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-64-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".animate-frame",
                  selectorGuids: ["f7e48525-a52b-19d3-c779-269f9286737c"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-64-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame",
                  selectorGuids: ["f7e48525-a52b-19d3-c779-269f9286737c"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669289640711,
    },
    "a-69": {
      id: "a-69",
      title: "slide-navigation-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-69-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame",
                  selectorGuids: ["f7e48525-a52b-19d3-c779-269f9286737c"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669289640711,
    },
    "a-80": {
      id: "a-80",
      title: "scroll-anim 4s",
      continuousParameterGroups: [
        {
          id: "a-80-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-80-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2408",
                    },
                    xValue: 6,
                    yValue: 30,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2408",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-80-n-7",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff240c",
                    },
                    xValue: 6,
                    yValue: 30,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-8",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff240c",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-80-n-9",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2415",
                    },
                    xValue: 6,
                    yValue: 30,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-10",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2415",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-80-n-11",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff241a",
                    },
                    xValue: 6,
                    yValue: 30,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff241a",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-80-n-13",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2422",
                    },
                    xValue: 6,
                    yValue: 30,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2422",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-80-n-15",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2426",
                    },
                    xValue: 6,
                    yValue: 30,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2426",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-80-n-17",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2408",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-18",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2408",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-80-n-19",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff240c",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-20",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff240c",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-80-n-21",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2415",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-22",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2415",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-80-n-23",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff241a",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-24",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff241a",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-80-n-25",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2422",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-26",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2422",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: "a-80-n-27",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2426",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "deg",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-80-n-28",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|84478833-fd79-2bd1-f607-afa7afff2426",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669293258110,
    },
    "a-76": {
      id: "a-76",
      title: "c-cursor-visible",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-76-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".c-cursor",
                  selectorGuids: ["5b3c8a67-f01e-4fd3-94b5-89179cd21552"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".c-cursor__wrapper",
                  selectorGuids: ["c5c6825b-2c5b-2bee-3dc9-0bd1d8fae132"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".c-cursor__snap",
                  selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                },
                xValue: 0.5,
                yValue: 0.5,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-76-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".c-cursor",
                  selectorGuids: ["5b3c8a67-f01e-4fd3-94b5-89179cd21552"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".c-cursor__wrapper",
                  selectorGuids: ["c5c6825b-2c5b-2bee-3dc9-0bd1d8fae132"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".c-cursor__snap",
                  selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669305656553,
    },
    "a-77": {
      id: "a-77",
      title: "c-cursor-hidden",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-77-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".c-cursor",
                  selectorGuids: ["5b3c8a67-f01e-4fd3-94b5-89179cd21552"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-77-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".c-cursor__wrapper",
                  selectorGuids: ["c5c6825b-2c5b-2bee-3dc9-0bd1d8fae132"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-77-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".c-cursor__snap",
                  selectorGuids: ["a31313e0-439d-3282-7926-d0805dac0e47"],
                },
                xValue: 0.5,
                yValue: 0.5,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669305656553,
    },
    "a-81": {
      id: "a-81",
      title: "s6-scale",
      continuousParameterGroups: [
        {
          id: "a-81-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-81-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".wrapper-s1",
                      selectorGuids: ["c2b3736f-5e50-6f61-5edd-bff2ecae0d3a"],
                    },
                    xValue: 0.9,
                    yValue: 0.9,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-81-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".wrapper-s1",
                      selectorGuids: ["c2b3736f-5e50-6f61-5edd-bff2ecae0d3a"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669377915624,
    },
    "a-83": {
      id: "a-83",
      title: "s7-scale",
      continuousParameterGroups: [
        {
          id: "a-83-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-83-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".wrapper-s2",
                      selectorGuids: ["431aa9ba-ac87-e24a-d22e-fc6b6ba06dfc"],
                    },
                    xValue: 0.85,
                    yValue: 0.85,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-83-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".wrapper-s2",
                      selectorGuids: ["431aa9ba-ac87-e24a-d22e-fc6b6ba06dfc"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669377915624,
    },
    "a-84": {
      id: "a-84",
      title: "s8-scale",
      continuousParameterGroups: [
        {
          id: "a-84-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-84-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._8s-wrapper",
                      selectorGuids: ["53a07114-eda1-7666-07aa-4fe7c4726d3a"],
                    },
                    xValue: 0.85,
                    yValue: 0.85,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-84-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._8s-wrapper",
                      selectorGuids: ["53a07114-eda1-7666-07aa-4fe7c4726d3a"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669377915624,
    },
    "a-85": {
      id: "a-85",
      title: "s5-scale",
      continuousParameterGroups: [
        {
          id: "a-85-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-85-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-wrapper",
                      selectorGuids: ["e3eb0b7d-7aa6-e4e1-0e88-09891f0745b5"],
                    },
                    xValue: 0.9,
                    yValue: 0.9,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-85-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-wrapper",
                      selectorGuids: ["e3eb0b7d-7aa6-e4e1-0e88-09891f0745b5"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669377915624,
    },
    "a-86": {
      id: "a-86",
      title: "s5-text",
      continuousParameterGroups: [
        {
          id: "a-86-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-86-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-big-text",
                      selectorGuids: ["9fc538da-6bc3-9616-dec3-e3cab3d9c0a1"],
                    },
                    xValue: 5,
                    yValue: null,
                    xUnit: "vw",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-86-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-text-mask",
                      selectorGuids: ["49f31f1d-fc75-d176-d98e-4a2267d1757a"],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "em",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 73,
              actionItems: [
                {
                  id: "a-86-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-big-text",
                      selectorGuids: ["9fc538da-6bc3-9616-dec3-e3cab3d9c0a1"],
                    },
                    xValue: -20,
                    yValue: null,
                    xUnit: "vw",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-86-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-text-mask",
                      selectorGuids: ["49f31f1d-fc75-d176-d98e-4a2267d1757a"],
                    },
                    yValue: 60,
                    xUnit: "PX",
                    yUnit: "em",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669627540678,
    },
    "a-87": {
      id: "a-87",
      title: "s5-device-scroll",
      continuousParameterGroups: [
        {
          id: "a-87-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-87-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-ipad",
                      selectorGuids: ["b20675f8-1bb2-5864-df96-b0d17bb276e9"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-87-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-iphone",
                      selectorGuids: ["6c7e845d-b697-78e1-1bad-c33b91e2ab2a"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-87-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-ipad",
                      selectorGuids: ["b20675f8-1bb2-5864-df96-b0d17bb276e9"],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-87-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._5s-iphone",
                      selectorGuids: ["6c7e845d-b697-78e1-1bad-c33b91e2ab2a"],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669628158550,
    },
    "a-88": {
      id: "a-88",
      title: "s5-heading",
      continuousParameterGroups: [
        {
          id: "a-88-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-88-n",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|62159921-5615-0bab-eba9-bb6c48307efb",
                    },
                    yValue: 20,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-88-n-3",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|bf9745ec-22c5-ccc5-c468-c327e68023ec",
                    },
                    yValue: 20,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-88-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|bf9745ec-22c5-ccc5-c468-c327e68023ec",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-7",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|62159921-5615-0bab-eba9-bb6c48307efb",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|7bea2957-4f72-1179-b0ab-df1aafd98bc7",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-15",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|604738b8-78f1-acc4-616e-61174fc35f3e",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-10",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|604738b8-78f1-acc4-616e-61174fc35f3e",
                    },
                    yValue: 25,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-88-n-11",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|7bea2957-4f72-1179-b0ab-df1aafd98bc7",
                    },
                    yValue: 25,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 6,
              actionItems: [
                {
                  id: "a-88-n-8",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|bf9745ec-22c5-ccc5-c468-c327e68023ec",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-9",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|62159921-5615-0bab-eba9-bb6c48307efb",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|7bea2957-4f72-1179-b0ab-df1aafd98bc7",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-17",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|604738b8-78f1-acc4-616e-61174fc35f3e",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-18",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|31c50989-4076-d814-dd3d-ed77c85e356c",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-19",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|c0d70e7f-3ef0-08e1-c62f-bbba9df1e9af",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-88-n-20",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|31c50989-4076-d814-dd3d-ed77c85e356c",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-88-n-21",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|c0d70e7f-3ef0-08e1-c62f-bbba9df1e9af",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-88-n-4",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|62159921-5615-0bab-eba9-bb6c48307efb",
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-88-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|bf9745ec-22c5-ccc5-c468-c327e68023ec",
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-88-n-12",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|604738b8-78f1-acc4-616e-61174fc35f3e",
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-88-n-13",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|7bea2957-4f72-1179-b0ab-df1aafd98bc7",
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669632975495,
    },
    "a-89": {
      id: "a-89",
      title: "hero-video",
      continuousParameterGroups: [
        {
          id: "a-89-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-89-n",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__container",
                      selectorGuids: ["d625025a-a608-bee5-fff4-5beffcceb659"],
                    },
                    widthValue: 8.194444444444445,
                    widthUnit: "vw",
                    heightUnit: "AUTO",
                    locked: false,
                  },
                },
                {
                  id: "a-89-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video",
                      selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-89-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__img",
                      selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-89-n-7",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__img",
                      selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                    },
                    xValue: 1.3,
                    yValue: 1.3,
                    locked: true,
                  },
                },
                {
                  id: "a-89-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video",
                      selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-89-n-2",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__container",
                      selectorGuids: ["d625025a-a608-bee5-fff4-5beffcceb659"],
                    },
                    widthValue: 4,
                    widthUnit: "vw",
                    heightUnit: "AUTO",
                    locked: false,
                  },
                },
                {
                  id: "a-89-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video",
                      selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-89-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__img",
                      selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                    },
                    xValue: -20,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-89-n-8",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__img",
                      selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                    },
                    xValue: 1.3,
                    yValue: 1.3,
                    locked: true,
                  },
                },
                {
                  id: "a-89-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video",
                      selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669637136062,
    },
    "a-91": {
      id: "a-91",
      title: "hero-video-anim--visible 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-91-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669209623130,
    },
    "a-90": {
      id: "a-90",
      title: "hero-video-anim--hide 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-90-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".bt-video",
                  selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669209623130,
    },
    "a-92": {
      id: "a-92",
      title: "s6-heading",
      continuousParameterGroups: [
        {
          id: "a-92-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-92-n",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5903",
                    },
                    yValue: 25,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-92-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5903",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-92-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5905",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-92-n-7",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5905",
                    },
                    yValue: 25,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 6,
              actionItems: [
                {
                  id: "a-92-n-10",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5903",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-92-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5905",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-92-n-13",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5908",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-92-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d590a",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-92-n-15",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5908",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-92-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d590a",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-92-n-17",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5903",
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-92-n-19",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "64357e0972ffee1e51c2b876|40ef0179-dd61-9a6a-caee-4471913d5905",
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669632975495,
    },
    "a-93": {
      id: "a-93",
      title: "s7-heading",
      continuousParameterGroups: [
        {
          id: "a-93-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-93-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._7s-header",
                      selectorGuids: ["eebe786b-c748-6e89-9153-d787c4442d09"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-93-n-6",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._7s-header",
                      selectorGuids: ["eebe786b-c748-6e89-9153-d787c4442d09"],
                    },
                    yValue: 25,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 6,
              actionItems: [
                {
                  id: "a-93-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._7s-header",
                      selectorGuids: ["eebe786b-c748-6e89-9153-d787c4442d09"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-93-n-7",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._7s-header",
                      selectorGuids: ["eebe786b-c748-6e89-9153-d787c4442d09"],
                    },
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669632975495,
    },
    "a-94": {
      id: "a-94",
      title: "s8-heading",
      continuousParameterGroups: [
        {
          id: "a-94-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-94-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._8s-header",
                      selectorGuids: ["a2a8a21e-c385-ebfd-cec3-63ee461eeb12"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-94-n-4",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._8s-header",
                      selectorGuids: ["a2a8a21e-c385-ebfd-cec3-63ee461eeb12"],
                    },
                    yValue: 25,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
              ],
            },
            {
              keyframe: 6,
              actionItems: [
                {
                  id: "a-94-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._8s-header",
                      selectorGuids: ["a2a8a21e-c385-ebfd-cec3-63ee461eeb12"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-94-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._8s-header",
                      selectorGuids: ["a2a8a21e-c385-ebfd-cec3-63ee461eeb12"],
                    },
                    yValue: 0,
                    zValue: null,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "deg",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669632975495,
    },
    "a-95": {
      id: "a-95",
      title: "bt-hover--in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-95-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".bt-bg",
                  selectorGuids: ["8c5156a1-a8ea-9f74-6d83-bbf0bb0cf8ae"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-95-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".bt-bg",
                  selectorGuids: ["8c5156a1-a8ea-9f74-6d83-bbf0bb0cf8ae"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1668690253720,
    },
    "a-96": {
      id: "a-96",
      title: "bt-hover--out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-96-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".bt-bg",
                  selectorGuids: ["8c5156a1-a8ea-9f74-6d83-bbf0bb0cf8ae"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1668690253720,
    },
    "a-97": {
      id: "a-97",
      title: "hero-video-mob",
      continuousParameterGroups: [
        {
          id: "a-97-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-97-n",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__container",
                      selectorGuids: ["d625025a-a608-bee5-fff4-5beffcceb659"],
                    },
                    widthValue: 20.56,
                    widthUnit: "vw",
                    heightUnit: "AUTO",
                    locked: false,
                  },
                },
                {
                  id: "a-97-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video",
                      selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-97-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__img",
                      selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-97-n-4",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__img",
                      selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                    },
                    xValue: 1.3,
                    yValue: 1.3,
                    locked: true,
                  },
                },
                {
                  id: "a-97-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video",
                      selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-97-n-6",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__container",
                      selectorGuids: ["d625025a-a608-bee5-fff4-5beffcceb659"],
                    },
                    widthValue: 9,
                    widthUnit: "vw",
                    heightUnit: "AUTO",
                    locked: false,
                  },
                },
                {
                  id: "a-97-n-7",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video",
                      selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-97-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__img",
                      selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                    },
                    xValue: -30,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-97-n-9",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video__img",
                      selectorGuids: ["a2022275-7275-eddc-509d-fec10ed22253"],
                    },
                    xValue: 1.3,
                    yValue: 1.3,
                    locked: true,
                  },
                },
                {
                  id: "a-97-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".bt-video",
                      selectorGuids: ["cc455b79-c864-3f3d-6d1e-dd5bb255097b"],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "vw",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669637136062,
    },
    "a-98": {
      id: "a-98",
      title: "m-slide-nav-1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-98-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-frame__number-1",
                  selectorGuids: ["ae8a4da2-adf1-21d5-aae1-949cee94d4b2"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-98-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-1",
                  selectorGuids: ["ae8a4da2-adf1-21d5-aae1-949cee94d4b2"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669289640711,
    },
    "a-99": {
      id: "a-99",
      title: "m-slide-nav-1-out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-99-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-1",
                  selectorGuids: ["ae8a4da2-adf1-21d5-aae1-949cee94d4b2"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669289640711,
    },
    "a-100": {
      id: "a-100",
      title: "m-slide-nav-2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-100-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-frame__number-2",
                  selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-100-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-2",
                  selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669289640711,
    },
    "a-101": {
      id: "a-101",
      title: "m-slide-nav-2--out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-101-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-2",
                  selectorGuids: ["fd4516da-d2c4-6be8-c583-7c7514542dd2"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669289640711,
    },
    "a-102": {
      id: "a-102",
      title: "m-slide-nav-3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-102-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animate-frame__number-3",
                  selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-102-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-3",
                  selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669289640711,
    },
    "a-103": {
      id: "a-103",
      title: "m-slide-nav-3--out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-103-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-3",
                  selectorGuids: ["2576d189-d70c-b9f6-4611-1c8ab54f56f9"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669289640711,
    },
    "a-104": {
      id: "a-104",
      title: "m-slide-nav-4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-104-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-4",
                  selectorGuids: ["d7314e39-ded0-a3bf-9134-06b7b655d178"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-104-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-4",
                  selectorGuids: ["d7314e39-ded0-a3bf-9134-06b7b655d178"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1669289640711,
    },
    "a-105": {
      id: "a-105",
      title: "m-slide-nav-4--out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-105-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  selector: ".animate-frame__number-4",
                  selectorGuids: ["d7314e39-ded0-a3bf-9134-06b7b655d178"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1669289640711,
    },
    "a-82": {
      id: "a-82",
      title: "scale-out",
      continuousParameterGroups: [
        {
          id: "a-82-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 80,
              actionItems: [
                {
                  id: "a-82-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-82-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "64357e0972ffee1e51c2b876|29e1fbe2-d5e7-4eba-667d-9dc3534c6a34",
                    },
                    xValue: 0.9,
                    yValue: 0.9,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1669378921946,
    },
    "a-106": {
      id: "a-106",
      title: "preloader",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-106-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 4000,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".preloader__wrapper",
                  selectorGuids: ["a30cdc45-6feb-1153-43ca-9b937fea63b8"],
                },
                yValue: -40,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-106-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 4000,
                easing: "ease",
                duration: 400,
                target: {
                  selector: ".preloader__wrapper",
                  selectorGuids: ["a30cdc45-6feb-1153-43ca-9b937fea63b8"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-106-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 4000,
                easing: "easeOut",
                duration: 400,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["91974c44-4810-c2a9-ec07-54e31865d0ba"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-106-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["91974c44-4810-c2a9-ec07-54e31865d0ba"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1680861790716,
    },
    "a-107": {
      id: "a-107",
      title: "animate after load page new + delay preloader",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-107-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-slide__oval-container",
                  selectorGuids: ["1b6a87c5-ecf4-9205-7370-bf43de4bcef9"],
                },
                xValue: 0.5,
                yValue: 0.5,
                locked: true,
              },
            },
            {
              id: "a-107-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".hero-slide__oval-container",
                  selectorGuids: ["1b6a87c5-ecf4-9205-7370-bf43de4bcef9"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-slide__fill-bg",
                  selectorGuids: ["81b7ef47-bbb4-e8bb-4851-c90f9414756d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be3",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be3",
                },
                xValue: 0,
                yValue: 75,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "DEG",
              },
            },
            {
              id: "a-107-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be5",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-7",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be5",
                },
                xValue: 0,
                yValue: 75,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "DEG",
              },
            },
            {
              id: "a-107-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|96c5a99d-f3e1-44a3-c049-ce568e2ecf6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-9",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|96c5a99d-f3e1-44a3-c049-ce568e2ecf6c",
                },
                xValue: 0,
                yValue: 75,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "DEG",
              },
            },
            {
              id: "a-107-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|dc81127e-fc18-05a4-0196-1ecbdcec1aed",
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-107-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".container-menu",
                  selectorGuids: ["89fb859e-3826-86b8-30d0-b6c622279c24"],
                },
                yValue: -1.1,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".container-menu",
                  selectorGuids: ["89fb859e-3826-86b8-30d0-b6c622279c24"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-slide__link-container",
                  selectorGuids: ["ee61181d-88f0-b8b8-8212-64c08d599481"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-slide__link-container",
                  selectorGuids: ["ee61181d-88f0-b8b8-8212-64c08d599481"],
                },
                yValue: 1.1,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-15",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
                },
                xValue: 0.8,
                yValue: 0.8,
                locked: true,
              },
            },
            {
              id: "a-107-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|181c0878-0e5c-bb24-d98e-b9028a1ae5b0",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-slide__oval-container",
                  selectorGuids: ["1b6a87c5-ecf4-9205-7370-bf43de4bcef9"],
                },
                xValue: 15,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-19",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".bt-video__img-container",
                  selectorGuids: ["105a43e6-eff3-6017-4c2d-a05d69216c55"],
                },
                xValue: 1.6,
                yValue: 1.6,
                locked: true,
              },
            },
            {
              id: "a-107-n-20",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-button__bg.transparent.is1",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "6cb6620d-e0ca-6eb2-0c60-426d803ffb12",
                    "660ed600-7fe7-8291-f1e1-4eb933e5b0bb",
                  ],
                },
                widthValue: 4,
                heightValue: 100,
                widthUnit: "vw",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-107-n-21",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-button__bg.is2",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "e704ab66-974d-d3e3-8d21-8744c6a37ea4",
                  ],
                },
                widthValue: 4,
                heightValue: 100,
                widthUnit: "vw",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-107-n-22",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-slide__oval-container",
                  selectorGuids: ["1b6a87c5-ecf4-9205-7370-bf43de4bcef9"],
                },
                xValue: -23,
                yValue: 44,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "DEG",
              },
            },
            {
              id: "a-107-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be3",
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be5",
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|96c5a99d-f3e1-44a3-c049-ce568e2ecf6c",
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button-green-container.margin-left.mob",
                  selectorGuids: [
                    "37f84014-7d4e-075a-2e92-86e8d763f576",
                    "72dc8963-931e-326e-cb60-a1942d1ba483",
                    "6dfdb89c-d01d-ef25-f548-b8a4b8ba113f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button-container.mob-hide",
                  selectorGuids: [
                    "9a8c95ed-2e97-50d1-6219-961e3c7a5e06",
                    "29593a1a-c412-cb10-5491-471bf0395d58",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-28",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
            {
              id: "a-107-n-29",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
            {
              id: "a-107-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-107-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "",
                duration: 0,
                target: {
                  id: "64357e0972ffee1e51c2b876|6351348a9becce665771eb98",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-107-n-33",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1400,
                target: {
                  selector: ".hero-slide__oval-container",
                  selectorGuids: ["1b6a87c5-ecf4-9205-7370-bf43de4bcef9"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-107-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".hero-slide__oval-container",
                  selectorGuids: ["1b6a87c5-ecf4-9205-7370-bf43de4bcef9"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-35",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be3",
                },
                yValue: 0,
                xUnit: "DEG",
                yUnit: "deg",
                zUnit: "DEG",
              },
            },
            {
              id: "a-107-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be3",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-37",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1400,
                target: {
                  selector: ".hero-slide__oval-container",
                  selectorGuids: ["1b6a87c5-ecf4-9205-7370-bf43de4bcef9"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-38",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".hero-slide__oval-container",
                  selectorGuids: ["1b6a87c5-ecf4-9205-7370-bf43de4bcef9"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "DEG",
              },
            },
            {
              id: "a-107-n-39",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1300,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be3",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-40",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1300,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be5",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-41",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1300,
                target: {
                  id: "64357e0972ffee1e51c2b876|96c5a99d-f3e1-44a3-c049-ce568e2ecf6c",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-42",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 200,
                target: {
                  selector: ".hero-slide__fill-bg",
                  selectorGuids: ["81b7ef47-bbb4-e8bb-4851-c90f9414756d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-107-n-43",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 800,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be5",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-44",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 1000,
                target: {
                  id: "64357e0972ffee1e51c2b876|8995ea1c-a38e-c732-729b-3eef13438be5",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "DEG",
              },
            },
            {
              id: "a-107-n-45",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: [0.26, 1, 0.48, 1],
                duration: 700,
                target: {
                  selector: ".container-menu",
                  selectorGuids: ["89fb859e-3826-86b8-30d0-b6c622279c24"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-46",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: [0.26, 1, 0.48, 1],
                duration: 700,
                target: {
                  selector: ".container-menu",
                  selectorGuids: ["89fb859e-3826-86b8-30d0-b6c622279c24"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-47",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 800,
                target: {
                  id: "64357e0972ffee1e51c2b876|96c5a99d-f3e1-44a3-c049-ce568e2ecf6c",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-48",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 1000,
                target: {
                  id: "64357e0972ffee1e51c2b876|96c5a99d-f3e1-44a3-c049-ce568e2ecf6c",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "deg",
                yUnit: "deg",
                zUnit: "DEG",
              },
            },
            {
              id: "a-107-n-49",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 400,
                target: {
                  id: "64357e0972ffee1e51c2b876|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-50",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 600,
                target: {
                  id: "64357e0972ffee1e51c2b876|ac0bb96c-bfad-8e8c-2867-bddf34b7315b",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-107-n-51",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".bt-video__img-container",
                  selectorGuids: ["105a43e6-eff3-6017-4c2d-a05d69216c55"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-107-n-52",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".menu-button__bg.is2",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "e704ab66-974d-d3e3-8d21-8744c6a37ea4",
                  ],
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-107-n-53",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".menu-button__bg.transparent.is1",
                  selectorGuids: [
                    "c71c7613-60f3-ced2-1c60-5b23b0b106aa",
                    "6cb6620d-e0ca-6eb2-0c60-426d803ffb12",
                    "660ed600-7fe7-8291-f1e1-4eb933e5b0bb",
                  ],
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-107-n-54",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".button-green-container.margin-left.mob",
                  selectorGuids: [
                    "37f84014-7d4e-075a-2e92-86e8d763f576",
                    "72dc8963-931e-326e-cb60-a1942d1ba483",
                    "6dfdb89c-d01d-ef25-f548-b8a4b8ba113f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-55",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".button-container.mob-hide",
                  selectorGuids: [
                    "9a8c95ed-2e97-50d1-6219-961e3c7a5e06",
                    "29593a1a-c412-cb10-5491-471bf0395d58",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-56",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-107-n-57",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 800,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-107-n-58",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 900,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero__bt-container",
                  selectorGuids: ["8fb7070f-d187-892f-a06d-107652c4295b"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-59",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 900,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".button-text",
                  selectorGuids: ["5c625644-62cb-748a-8789-2f103e2973d8"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-60",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: "easeOut",
                duration: 200,
                target: {
                  id: "64357e0972ffee1e51c2b876|181c0878-0e5c-bb24-d98e-b9028a1ae5b0",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-61",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: [0.26, 1, 0.48, 1],
                duration: 700,
                target: {
                  selector: ".hero-slide__link-container",
                  selectorGuids: ["ee61181d-88f0-b8b8-8212-64c08d599481"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-107-n-62",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1400,
                easing: [0.26, 1, 0.48, 1],
                duration: 700,
                target: {
                  selector: ".hero-slide__link-container",
                  selectorGuids: ["ee61181d-88f0-b8b8-8212-64c08d599481"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
            {
              id: "a-107-n-63",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 1400,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "64357e0972ffee1e51c2b876|dc81127e-fc18-05a4-0196-1ecbdcec1aed",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1668619115550,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
