(function (e) {
  function t(t) {
    for (
      var i, a, c = t[0], s = t[1], l = t[2], d = 0, h = [];
      d < c.length;
      d++
    )
      (a = c[d]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && h.push(r[a][0]),
        (r[a] = 0);
    for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
    u && u(t);
    while (h.length) h.shift()();
    return o.push.apply(o, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], i = !0, c = 1; c < n.length; c++) {
        var s = n[c];
        0 !== r[s] && (i = !1);
      }
      i && (o.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var i = {},
    r = { app: 0 },
    o = [];
  function a(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = i),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "dist/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var u = s;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "00dd": function (e, t, n) {},
  "11da": function (e, t, n) {},
  "1b9c": function (e, t, n) {},
  "1de8": function (e, t, n) {
    e.exports = n.p + "img/demo4.658f86ab.jpg";
  },
  "3fab": function (e, t, n) {
    e.exports = n.p + "img/demo2.d185c21c.jpg";
  },
  4435: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACB0lEQVR42q2USy8DURiGD0NdirZmOtOq0kH1kt4T90uj2AmxwMJ1JzaiupFYSdj4CX6Cn9AfYGXLSlhghY0ICwve03wjY9R0JJo8mbZz5jlz3vOdj0Wj0e1IJLITDod3cc3zqyzLScaYB0jAAeygDtQAAVQRPz+ZTObDSDKZvBJFsQ+3/UABraCJpLWm0nJCkl67XK5RDFGBF4igGdSbSn8TkvTG6XRmMawbtFMELQZp9TepmVAnncDQoCVpKpV6sCJ1OBw5kvpNpW63exEPPP1B2ltByvqxo+v/KGUpMIacNhKJxG0lKSK6VxRlzkTKovwtwYTdbl+B9M7Cmz6StAf4SKqVVKkk4mAITEG6akXKNxPSWZ1UK/7Sjx5a+jCYhnTtD9IZPNMF2kjK3JRFCKTBiFVpOp1+V1W1gPzH6UTx818KlEs7KGi99Nflc1kgEDjw+Xxb+P6CpnJEDtZAUhl0Gt500mazLcVisUvDUt8gOvR4PAXIXrX/g8HgJqOtbqQ2pdAsIV2mOUEQ5iG90GTIbR/s6WWceDxeZFTdeqmsW34CDIAspHOQnnNRORkH/fSY0aHmUptB6qfdjwHeG3kry3m93nw5GSYr0tivnqZJtUwlKqkuKn6e66AkScu8sPUydP1Tut+rdTFNKhikIjXXAOXKD0AGDWUBeZ0hz2cs84Ty5pOqn0HMGhL4OcejAAAAAElFTkSuQmCC";
  },
  "48b5": function (e, t, n) {
    "use strict";
    n("6cdc");
  },
  "55cb": function (e, t, n) {
    "use strict";
    n("c1a3");
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var i = n("7a23");
    function r(e, t, n, r, o, a) {
      var c = Object(i["resolveComponent"])("Demo1"),
        s = Object(i["resolveComponent"])("Demo2"),
        l = Object(i["resolveComponent"])("Demo4"),
        u = Object(i["resolveComponent"])("Demo3"),
        d = Object(i["resolveComponent"])("Demo32"),
        h = Object(i["resolveComponent"])("Demo5"),
        f = Object(i["resolveComponent"])("Demo6");
      return (
        Object(i["openBlock"])(),
        Object(i["createElementBlock"])("div", null, [
          Object(i["createVNode"])(c),
          Object(i["createVNode"])(s),
          Object(i["createVNode"])(l),
          Object(i["createVNode"])(u),
          Object(i["createVNode"])(d),
          Object(i["createVNode"])(h),
          Object(i["createVNode"])(f),
        ])
      );
    }
    var o = function (e) {
        return (
          Object(i["pushScopeId"])("data-v-70e214e2"),
          (e = e()),
          Object(i["popScopeId"])(),
          e
        );
      },
      a = { class: "container" },
      c = o(function () {
        return Object(i["createElementVNode"])(
          "h1",
          { name: "demo1", id: "demo1" },
          [
            Object(i["createElementVNode"])(
              "a",
              { href: "#demo1" },
              "推荐用法"
            ),
          ],
          -1
        );
      }),
      s = { class: "markBox", ref: "markBox0" },
      l = { class: "btnGroup" },
      u = Object(i["createTextVNode"])("新增标注"),
      d = Object(i["createTextVNode"])("退出新增"),
      h = Object(i["createTextVNode"])("获取标注（控制台查看）"),
      f = Object(i["createTextVNode"])("删除全部");
    function m(e, t, n, r, o, m) {
      var v = Object(i["resolveComponent"])("el-button");
      return (
        Object(i["openBlock"])(),
        Object(i["createElementBlock"])("div", a, [
          c,
          Object(i["createElementVNode"])("div", s, null, 512),
          Object(i["createElementVNode"])("div", l, [
            Object(i["createVNode"])(
              v,
              {
                type: "primary",
                onClick: m.create0,
                disabled: !o.editing0 || !!o.curEditMarkItem0,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [u];
                }),
                _: 1,
              },
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              v,
              {
                type: "primary",
                onClick: m.exit0,
                disabled: !o.isCreateMarking0,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [d];
                }),
                _: 1,
              },
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              v,
              { type: "primary", onClick: m.getMarkData0 },
              {
                default: Object(i["withCtx"])(function () {
                  return [h];
                }),
                _: 1,
              },
              8,
              ["onClick"]
            ),
            Object(i["createVNode"])(
              v,
              {
                type: "primary",
                icon: "el-icon-delete",
                onClick: e.deleteItem1,
                disabled: !o.curEditMarkItem0,
              },
              null,
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              v,
              {
                type: "primary",
                icon: "el-icon-delete",
                onClick: m.deleteAll0,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [f];
                }),
                _: 1,
              },
              8,
              ["onClick"]
            ),
          ]),
        ])
      );
    }
    var v = n("5530"),
      b = n("d4ec"),
      p = n("bee2"),
      k = n("ade3"),
      g =
        (n("99af"),
        n("a434"),
        (function () {
          function e() {
            Object(b["a"])(this, e),
              (this.observerListeners = {}),
              (this.observerToken = 0);
          }
          return (
            Object(p["a"])(e, [
              {
                key: "publish",
                value: function (e) {
                  if (!e || !this.observerListeners[e]) return !1;
                  for (
                    var t = this.observerListeners[e],
                      n = arguments.length,
                      i = new Array(n > 1 ? n - 1 : 0),
                      r = 1;
                    r < n;
                    r++
                  )
                    i[r - 1] = arguments[r];
                  for (var o = 0; o < t.length; o++)
                    t[o].context
                      ? t[o].fn.apply(t[o].context, i)
                      : t[o].fn.apply(t[o].fn, i);
                },
              },
              {
                key: "subscribe",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "";
                  return (
                    this.observerListeners[e] ||
                      (this.observerListeners[e] = []),
                    this.observerToken++,
                    this.observerListeners[e].push({
                      fn: t,
                      context: n,
                      token: this.observerToken,
                    }),
                    this.observerToken
                  );
                },
              },
              {
                key: "unsubscribe",
                value: function (e) {
                  if (!e) return !1;
                  for (var t in this.observerListeners)
                    if (this.observerListeners.hasOwnProperty(t))
                      for (var n = 0; n < this.observerListeners[t].length; n++)
                        this.observerListeners[t][n].token === e &&
                          this.observerListeners[t].splice(n, 1);
                },
              },
              {
                key: "clearTopic",
                value: function (e) {
                  if (!e) return !1;
                  for (var t in this.observerListeners)
                    this.observerListeners.hasOwnProperty(t) &&
                      t === e &&
                      delete this.observerListeners[t];
                },
              },
              {
                key: "clearAll",
                value: function () {
                  (this.observerListeners = {}), (this.observerToken = 0);
                },
              },
            ]),
            e
          );
        })());
    n("159b"), n("d3b7");
    function y(e, t, n, i) {
      var r = !1,
        o = [t.x - e.x, t.y - e.y],
        a = [n.x - e.x, n.y - e.y],
        c = [i.x - e.x, i.y - e.y],
        s = o[0] * a[1] - o[1] * a[0],
        l = o[0] * c[1] - o[1] * c[0],
        u = [n.x - i.x, n.y - i.y],
        d = [e.x - i.x, e.y - i.y],
        h = [t.x - i.x, t.y - i.y],
        f = u[0] * d[1] - u[1] * d[0],
        m = u[0] * h[1] - u[1] * h[0];
      return s * l < 0 && f * m < 0 && (r = !0), r;
    }
    function C(e, t, n, i, r, o) {
      if (e === n) return Math.abs(r - e);
      var a,
        c,
        s = 1;
      return (
        (a = (t - i) / (n - e)),
        (c = 0 - s * t - a * e),
        Math.abs((a * r + s * o + c) / Math.sqrt(a * a + s * s))
      );
    }
    function O(e, t, n, i) {
      var r = (180 * Math.atan2(i - t, n - e)) / Math.PI;
      return r > 0 ? r - 360 : r;
    }
    function x(e, t, n, i, r) {
      if (e === n) return Math.min(t, i);
      var o,
        a,
        c = 1;
      (o = (t - i) / (n - e)), (a = 0 - c * t - o * e);
      var s = function (e) {
        return (0 - a - o * e) / c;
      };
      return s(r);
    }
    function E(e, t, n, i) {
      var r = [];
      if (e === n)
        for (var o = Math.abs(i - t), a = Math.min(t, i), c = 0; c <= o; c++)
          r.push([e, a + c]);
      else {
        var s,
          l,
          u = 1;
        (s = (t - i) / (n - e)), (l = 0 - u * t - s * e);
        for (
          var d = function (e) {
              return (0 - l - s * e) / u;
            },
            h = Math.abs(n - e),
            f = Math.min(e, n),
            m = 0;
          m <= h;
          m++
        )
          r.push([f + m, d(f + m)]);
      }
      return r;
    }
    function I(e, t, n, i) {
      return Math.sqrt(Math.pow(e - n, 2) + Math.pow(t - i, 2));
    }
    function j(e, t, n, i, r, o) {
      var a = E(e, t, n, i),
        c = 1 / 0,
        s = null;
      return (
        a.forEach(function (e) {
          var t = I(e[0], e[1], r, o);
          t < c && ((c = t), (s = e));
        }),
        s
      );
    }
    function P(e) {
      return new Promise(function (t, n) {
        var i = new Image();
        (i.onload = function () {
          t(i);
        }),
          (i.onerror = function (e) {
            n(e);
          }),
          (i.src = e);
      });
    }
    var N = {
        checkLineSegmentCross: y,
        loadImage: P,
        getTwoPointDistance: I,
        getLinePointYByX: x,
        getLineAllPoint: E,
        getLinePointDistance: C,
        getAngle: O,
        getNearestPointFromLine: j,
      },
      A = n("2909"),
      T =
        (n("d81d"),
        n("c740"),
        n("caad"),
        n("2532"),
        n("4de4"),
        n("cb29"),
        {
          lineWidth: 3,
          strokeColor: "rgba(0, 136, 255, 1)",
          lineJoin: "round",
          frontLineWidth: 3,
          frontStrokeColor: "rgba(0, 136, 255, 1)",
          frontLineJoin: "round",
        }),
      M = "rgba(0, 136, 255, 0.5)",
      S = {
        lineWidth: 3,
        strokeColor: "rgba(0, 136, 255, 1)",
        fillColor: "rgba(0, 136, 255, 0.5)",
      },
      w = {
        showPoint: !0,
        pointType: "square",
        pointWidth: 3,
        lineType: "line",
      },
      L = (function () {
        function e() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          Object(b["a"])(this, e),
            (this.ctx = t),
            this.updateOpt(n),
            (this.pointArr = n.pointArr || []),
            (this.isClosePath = !1),
            (this.isEditing = !1),
            (this.isDragging = !1),
            (this.dragPointIndex = -1),
            (this.dragCachePointArr = []),
            (this.hoverActive = !1),
            (this.areaToPointPos = null);
        }
        return (
          Object(p["a"])(e, [
            {
              key: "updateOpt",
              value: function (e) {
                (this.opt = Object(v["a"])(Object(v["a"])({}, w), e)),
                  (this.data = e.data || null),
                  (this.strokeStyle = e.strokeStyle
                    ? Object(v["a"])(Object(v["a"])({}, T), e.strokeStyle)
                    : T),
                  (this.fillColor = e.fillColor || M),
                  (this.pointStyle = e.pointStyle
                    ? Object(v["a"])(Object(v["a"])({}, S), e.pointStyle)
                    : S),
                  (this.updatePointFn = e.updatePoint),
                  (this.area = e.area || !1),
                  (this.enableAddPoint = e.enableAddPoint || !1);
              },
            },
            {
              key: "enable",
              value: function () {
                (this.isEditing = !0), this.insertFictitiousPoints();
              },
            },
            {
              key: "disable",
              value: function () {
                (this.isEditing = !1), this.removeFictitiousPoints();
              },
            },
            {
              key: "getTruePointArr",
              value: function () {
                return this.pointArr.filter(function (e) {
                  return !e.fictitious;
                });
              },
            },
            {
              key: "getPointLength",
              value: function () {
                return this.getTruePointArr().length;
              },
            },
            {
              key: "pushPoint",
              value: function (e, t) {
                this.isEditing &&
                  !this.isClosePath &&
                  this.pointArr.push({ x: e, y: t });
              },
            },
            {
              key: "removePoint",
              value: function (e) {
                this.pointArr[e].fictitious ||
                  (this.pointArr.splice(e, 1),
                  this.removeFictitiousPoints(),
                  this.insertFictitiousPoints());
              },
            },
            {
              key: "areaToPoint",
              value: function (e, t) {
                this.areaToPointPos = { x: e, y: t };
              },
            },
            {
              key: "render",
              value: function () {
                (this.isClosePath || this.area) && this.renderArea(),
                  "custom" === this.opt.lineType
                    ? this.opt.customRenderLine &&
                      this.opt.customRenderLine(this)
                    : "borderLine" === this.opt.lineType
                    ? (this.renderLines(this.strokeStyle),
                      this.renderLines(
                        Object(v["a"])(
                          Object(v["a"])({}, this.strokeStyle),
                          {},
                          {
                            lineWidth: this.strokeStyle.frontLineWidth,
                            strokeColor: this.strokeStyle.frontStrokeColor,
                            lineJoin: this.strokeStyle.frontLineJoin,
                          }
                        )
                      ))
                    : this.renderLines(this.strokeStyle),
                  this.renderPoints();
              },
            },
            {
              key: "renderArea",
              value: function () {
                this.ctx.save(),
                  (this.ctx.fillStyle = this.fillColor),
                  this.ctx.beginPath();
                for (
                  var e = this.pointArr.concat(
                      this.area && this.areaToPointPos
                        ? [this.areaToPointPos]
                        : []
                    ),
                    t = 0;
                  t < e.length;
                  t++
                ) {
                  var n = e[t].x,
                    i = e[t].y;
                  0 === t ? this.ctx.moveTo(n, i) : this.ctx.lineTo(n, i);
                }
                this.ctx.closePath(), this.ctx.fill(), this.ctx.restore();
              },
            },
            {
              key: "renderLines",
              value: function (e, t) {
                var n = e.lineWidth,
                  i = e.strokeColor,
                  r = e.lineJoin;
                this.ctx.save(),
                  (this.ctx.lineWidth = n),
                  (this.ctx.strokeStyle = i),
                  (this.ctx.lineJoin = r),
                  this.ctx.beginPath();
                for (
                  var o = this.pointArr.concat(
                      this.area && this.areaToPointPos
                        ? [this.areaToPointPos]
                        : []
                    ),
                    a = 0;
                  a < o.length;
                  a++
                ) {
                  var c = o[a].x,
                    s = o[a].y;
                  0 === a ? this.ctx.moveTo(c, s) : this.ctx.lineTo(c, s);
                }
                (this.isClosePath || this.area) && this.ctx.closePath(),
                  t || this.ctx.stroke(),
                  this.ctx.restore();
              },
            },
            {
              key: "renderPoints",
              value: function (e, t) {
                for (var n = 0; n < this.pointArr.length; n++) {
                  this.ctx.beginPath();
                  var i = this.pointArr[n].x,
                    r = this.pointArr[n].y;
                  (this.isEditing || e || this.hoverActive) &&
                    (this.drawPoint(i, r, e, !1, this.pointArr[n].fictitious),
                    t && t(n));
                }
              },
            },
            {
              key: "insertFictitiousPoints",
              value: function () {
                if (this.isEditing && this.isClosePath && this.enableAddPoint) {
                  this.removeFictitiousPoints();
                  for (
                    var e = [], t = this.pointArr, n = t.length, i = 0;
                    i < n - 1;
                    i++
                  ) {
                    var r = t[i],
                      o = t[i + 1];
                    e.push({
                      x: (r.x + o.x) / 2,
                      y: (r.y + o.y) / 2,
                      fictitious: !0,
                    });
                  }
                  e.push({
                    x: (t[n - 1].x + t[0].x) / 2,
                    y: (t[n - 1].y + t[0].y) / 2,
                    fictitious: !0,
                  });
                  for (var a = [], c = 0; c < this.pointArr.length; c++)
                    a.push(this.pointArr[c]), a.push(e.shift());
                  this.pointArr = a;
                }
              },
            },
            {
              key: "removeFictitiousPoints",
              value: function () {
                this.pointArr = this.getTruePointArr();
              },
            },
            {
              key: "drawPoint",
              value: function (e, t, n, i, r) {
                var o = this.opt,
                  a = o.customRenderPoint,
                  c = o.showPoint,
                  s = o.pointType,
                  l = o.pointWidth;
                if ((i && this.ctx.beginPath(), a))
                  a(this.ctx, e, t, n, this.pointStyle);
                else {
                  switch (
                    (this.ctx.save(),
                    (this.ctx.lineWidth = this.pointStyle.lineWidth),
                    (this.ctx.strokeStyle = this.pointStyle.strokeColor),
                    (this.ctx.fillStyle = this.pointStyle.fillColor),
                    r &&
                      ((this.ctx.strokeStyle = this.pointStyle.fillColor),
                      (this.ctx.fillStyle = this.pointStyle.strokeColor)),
                    s)
                  ) {
                    case "square":
                      this.ctx.rect(e - l, t - l, 2 * l, 2 * l);
                      break;
                    case "circle":
                      this.ctx.arc(e, t, 2 * l, 0, 2 * Math.PI);
                      break;
                    default:
                      break;
                  }
                  n || (c && (this.ctx.fill(), this.ctx.stroke())),
                    this.ctx.restore();
                }
              },
            },
            {
              key: "checkInPath",
              value: function (e, t) {
                return (
                  this.renderLines(this.strokeStyle, !0),
                  this.ctx.isPointInPath(e, t)
                );
              },
            },
            {
              key: "checkInPoints",
              value: function (e, t) {
                var n = this,
                  i = -1;
                return (
                  this.renderPoints(!0, function (r) {
                    n.ctx.isPointInPath(e, t) && (i = r);
                  }),
                  i
                );
              },
            },
            {
              key: "closePath",
              value: function () {
                (this.areaToPointPos = null), (this.isClosePath = !0);
              },
            },
            {
              key: "enableDrag",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : -1;
                (this.isDragging = !0),
                  (this.dragPointIndex = e),
                  (this.dragCachePointArr = JSON.parse(
                    JSON.stringify(this.pointArr)
                  ));
              },
            },
            {
              key: "getTruePointIndex",
              value: function (e) {
                if (-1 === e || this.pointArr[e].fictitious) return e;
                for (var t = 0, n = 0; n < e; n++)
                  this.pointArr[n].fictitious && t++;
                return e - t;
              },
            },
            {
              key: "disableDrag",
              value: function () {
                (this.isDragging = !1),
                  (this.dragPointIndex = -1),
                  (this.dragCachePointArr = []),
                  this.insertFictitiousPoints();
              },
            },
            {
              key: "dragPoint",
              value: function (e, t) {
                if (this.isDragging && -1 !== this.dragPointIndex)
                  if (
                    (this.pointArr[this.dragPointIndex].fictitious &&
                      delete this.pointArr[this.dragPointIndex].fictitious,
                    (this.dragPointIndex = this.getTruePointIndex(
                      this.dragPointIndex
                    )),
                    this.removeFictitiousPoints(),
                    this.updatePointFn)
                  ) {
                    for (
                      var n = arguments.length,
                        i = new Array(n > 2 ? n - 2 : 0),
                        r = 2;
                      r < n;
                      r++
                    )
                      i[r - 2] = arguments[r];
                    this.updatePointFn.apply(this, [this, e, t].concat(i));
                  } else
                    this.pointArr.splice(
                      this.dragPointIndex,
                      1,
                      Object(v["a"])(
                        Object(v["a"])({}, this.pointArr[this.dragPointIndex]),
                        {},
                        { x: e, y: t }
                      )
                    );
              },
            },
            {
              key: "dragAll",
              value: function (e, t) {
                this.isDragging &&
                  (this.pointArr = this.dragCachePointArr.map(function (n) {
                    return Object(v["a"])(
                      Object(v["a"])({}, n),
                      {},
                      { x: n.x + e, y: n.y + t }
                    );
                  }));
              },
            },
            {
              key: "enableHoverActive",
              value: function () {
                this.hoverActive = !0;
              },
            },
            {
              key: "disableHoverActive",
              value: function () {
                this.hoverActive = !1;
              },
            },
            {
              key: "checkLineSegmentCross",
              value: function () {
                if (!this.checkCrossPrevCheck()) return !1;
                for (
                  var e = this.createLineSegments(!0),
                    t = e.length,
                    n = !1,
                    i = 0;
                  i < t;
                  i++
                ) {
                  var r = e[i];
                  this.checkCrossWithLineSegments(r[0], r[1], !0) && (n = !0);
                }
                return n;
              },
            },
            {
              key: "checkNextLineSegmentCross",
              value: function (e, t) {
                if (!this.checkCrossPrevCheck()) return !1;
                var n = this.getTruePointArr(),
                  i = n.length,
                  r = { x: e, y: t },
                  o = n[i - 1];
                return this.checkCrossWithLineSegments(r, o);
              },
            },
            {
              key: "checkEndLineSegmentCross",
              value: function () {
                if (!this.checkCrossPrevCheck()) return !1;
                var e = this.getTruePointArr(),
                  t = e.length,
                  n = e[t - 1],
                  i = e[0];
                return this.checkCrossWithLineSegments(n, i);
              },
            },
            {
              key: "checkCrossWithLineSegments",
              value: function (e, t, n) {
                for (
                  var i = this.createLineSegments(n), r = !1, o = 0;
                  o < i.length;
                  o++
                ) {
                  var a = i[o],
                    c = a[0],
                    s = a[1];
                  N.checkLineSegmentCross(c, s, e, t) && (r = !0);
                }
                return r;
              },
            },
            {
              key: "createLineSegments",
              value: function (e) {
                for (
                  var t = this.getTruePointArr(), n = t.length, i = [], r = 0;
                  r < n - 1;
                  r++
                )
                  i.push([t[r], t[r + 1]]);
                return e && i.push([t[n - 1], t[0]]), i;
              },
            },
            {
              key: "checkCrossPrevCheck",
              value: function () {
                var e = this.getTruePointArr().length;
                return !(e <= 2);
              },
            },
            {
              key: "getPintNearestLine",
              value: function (e, t) {
                var n = this.createLineSegments(this.isClosePath);
                if (n.length <= 0) return null;
                -1 !== this.dragPointIndex &&
                  (0 === this.dragPointIndex
                    ? (n.splice(0, 1), n.splice(-1, 1))
                    : n.splice(this.dragPointIndex - 1, 2));
                for (var i, r = 1 / 0, o = 0; o < n.length; o++) {
                  var a = n[o],
                    c = a[0],
                    s = a[1],
                    l = N.getLinePointDistance(c.x, c.y, s.x, s.y, e, t);
                  l < r && ((r = l), (i = a));
                }
                return [r, i];
              },
            },
          ]),
          e
        );
      })(),
      V = {
        value: [],
        max: -1,
        hoverActive: !1,
        readonly: !1,
        single: !1,
        noCrossing: !1,
        dbClickRemovePoint: !1,
        area: !1,
        adsorbent: !0,
        adsorbentNum: 5,
        adsorbentLine: !0,
        dbClickActive: !1,
        singleClickComplete: !0,
        enableAddPoint: !1,
      };
    function D(e, t) {
      var n = null,
        i = new Promise(function (e) {
          n = e;
        }),
        r = Object(v["a"])(Object(v["a"])({}, V), e.opt);
      r.dbClickActive &&
        (e.opt.cursorTips
          ? e.opt.cursorTips.HOVER ||
            (e.opt.cursorTips.HOVER = "双击激活该区域并进入编辑状态")
          : (e.opt.cursorTips = { HOVER: "双击激活该区域并进入编辑状态" }));
      var o = [],
        a = null,
        c = { x: 0, y: 0 },
        s = { x: 0, y: 0 },
        l = r.readonly,
        u = !1,
        d = null,
        h = null,
        f = 0,
        m = null,
        b = [0, 0],
        p = { x: 0, y: 0 },
        k = !1,
        g = O();
      function y() {
        r.value.length > 0 &&
          (r.value.forEach(function (t) {
            var n = new L(
              e.ctx,
              Object(v["a"])(
                Object(v["a"])(Object(v["a"])({ id: f++ }, r), t),
                {},
                {
                  pointArr: t.pointArr.map(function (t) {
                    return {
                      x: t.x * e.canvasEleRectInfo.width,
                      y: t.y * e.canvasEleRectInfo.height,
                    };
                  }),
                }
              )
            );
            n.closePath(), o.push(n);
          }),
          x());
      }
      function C() {
        return {
          markItemList: o,
          curEditingMarkItem: a,
          isReadonly: l,
          isCreateMarking: u,
        };
      }
      function O() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new L(
          e.ctx,
          Object(v["a"])(
            Object(v["a"])(
              Object(v["a"])(Object(v["a"])({ id: f++ }, r), d),
              t
            ),
            {},
            { area: r.area }
          )
        );
      }
      function x() {
        e.clearCanvas(),
          r.single && (a || u)
            ? a && a.render()
            : o.forEach(function (e) {
                e.render();
              }),
          m && g.drawPoint(m[0], m[1], !1, !0);
      }
      function E() {
        o.forEach(function (e) {
          e.disable();
        });
      }
      function I() {
        o.forEach(function (e) {
          e.disableHoverActive();
        });
      }
      function j(e, t) {
        for (var n = o.length - 1; n >= 0; n--) {
          var i = o[n];
          if (i.checkInPath(e, t) || -1 !== i.checkInPoints(e, t)) return i;
        }
      }
      function P(e, t) {
        for (var n = [], i = o.length - 1; i >= 0; i--) {
          var r = o[i];
          (r.checkInPath(e, t) || -1 !== r.checkInPoints(e, t)) && n.push(r);
        }
        return n;
      }
      function N() {
        return o.map(function (t) {
          var n = t.pointArr.map(function (t) {
            return {
              x: t.x / e.canvasEleRectInfo.width,
              y: t.y / e.canvasEleRectInfo.height,
            };
          });
          return { data: t.data, pointArr: n };
        });
      }
      function T() {
        return a && !a.isClosePath;
      }
      function M() {
        l = !1;
      }
      function S() {
        I(), E(), B(null), x();
      }
      function w() {
        return !T() && (S(), (l = !0), !0);
      }
      function D(t) {
        return !l && ((u = t), e.emit("IS-CREATE-MARKING-CHANGE", t), !0);
      }
      function R() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return (
          !T() && !l && (S(), (d = t), D(!0), r.single && e.clearCanvas(), !0)
        );
      }
      function _() {
        if (!u) return !1;
        if ((D(!1), T())) {
          var e = o.findIndex(function (e) {
            return e === a;
          });
          o.splice(e, 1);
        }
        S();
      }
      function B(t) {
        return !l && ((a = t), e.emit("CURRENT-MARK-ITEM-CHANGE", t), !0);
      }
      function G(t) {
        if (!t) return !1;
        var n = o.findIndex(function (e) {
          return e === t;
        });
        if (-1 !== n) {
          a === t && B(null);
          var i = o.splice(n, 1);
          return x(), e.emit("DELETE-MARKING-ITEM", i[0], n), !0;
        }
        return !1;
      }
      function U() {
        (o = []), B(null), x(), e.emit("DELETE-ALL-MARKING-ITEM");
      }
      function H(e, n) {
        if (!r.adsorbent) return [e, n];
        var i = 1 / 0,
          c = e,
          s = n,
          l = null;
        return (
          o.forEach(function (o) {
            if (
              (o.pointArr.forEach(function (u, d) {
                if (!a || o !== a || o.dragPointIndex !== d) {
                  var h = t.getTwoPointDistance(u.x, u.y, e, n);
                  h <= r.adsorbentNum &&
                    h < i &&
                    ((i = h), (c = u.x), (s = u.y), (l = [c, s]));
                }
              }),
              r.adsorbentLine)
            ) {
              var u = o.getPintNearestLine(e, n);
              if (u && u[0] <= r.adsorbentNum) {
                var d = u[1],
                  h = d[0],
                  f = d[1],
                  m = Math.min(h.x, f.x),
                  v = Math.max(h.x, f.x);
                if (e >= m && e <= v) {
                  var b = t.getNearestPointFromLine(h.x, h.y, f.x, f.y, e, n);
                  (c = b[0]), (s = b[1]), (l = [c, s]);
                }
              }
            }
          }),
          (m = l),
          [c, s]
        );
      }
      function K(e, n) {
        if (!r.adsorbent) return [e, n];
        var i = 1 / 0,
          s = null,
          l = null;
        a.pointArr.forEach(function (e) {
          o.forEach(function (n) {
            n !== a &&
              n.pointArr.forEach(function (n) {
                var r = t.getTwoPointDistance(e.x, e.y, n.x, n.y);
                r < i && ((i = r), (s = e), (l = n));
              });
          });
        }),
          i <= r.adsorbentNum &&
            ((b = [l.x - s.x, l.y - s.y]), (c.x -= b[0]), (c.y -= b[1]));
      }
      return (
        e.on("UPDATED_OPT", function (t) {
          (r = Object(v["a"])(Object(v["a"])({}, V), e.opt)),
            e.clearCanvas(),
            o.forEach(function (e) {
              e.updateOpt(r), e.render();
            });
        }),
        y(),
        e.on("CLICK", function (t) {
          if (!l)
            if (r.mobile || !k) {
              var n = e.toCanvasPos(t),
                i = n.x,
                c = n.y,
                s = null;
              if (u) {
                var d = i,
                  h = c;
                if ((m && ((d = m[0]), (h = m[1]), (m = null)), a))
                  if (r.noCrossing) {
                    var f = a.checkNextLineSegmentCross(d, h);
                    f ? e.emit("LINE-CROSS", a) : a.pushPoint(d, h);
                  } else a.pushPoint(d, h);
                else
                  -1 === r.max || o.length < r.max
                    ? (E(), B(O()), a.enable(), a.pushPoint(d, h), o.push(a))
                    : (e.emit("COUNT-LIMIT", a), D(!1));
              } else
                (s = j(i, c))
                  ? r.dbClickActive ||
                    P(i, c).includes(a) ||
                    ((!r.single || (r.single && !a)) && (E(), s.enable(), B(s)))
                  : !r.single && r.singleClickComplete && S();
              x();
            } else k = !1;
        }),
        e.on("DOUBLE-CLICK", function (t) {
          if (!l) {
            var n = e.toCanvasPos(t),
              i = n.x,
              o = n.y,
              c = !0,
              s = j(i, o),
              d = !(!s || !a) && s === a;
            if (a) {
              var h = a.checkInPoints(i, o);
              r.dbClickRemovePoint && -1 !== h
                ? ((c = !1),
                  a.getPointLength() > 3
                    ? (a.removePoint(h), x())
                    : e.emit("NOT-ENOUGH-POINTS-REMOVE", a))
                : a.getPointLength() < 3
                ? ((c = !1), e.emit("NOT-ENOUGH-END-POINTS", a))
                : r.noCrossing && a.checkEndLineSegmentCross()
                ? ((c = !1), e.emit("LINE-CROSS", a))
                : (u && e.emit("COMPLETE-CREATE-ITEM", a, t),
                  D(!1),
                  a.closePath(),
                  a.disable(),
                  (m = null),
                  B(null),
                  x(),
                  e.emit("COMPLETE-EDIT-ITEM", a, t));
            }
            r.dbClickActive &&
              !u &&
              c &&
              s &&
              !d &&
              (E(), s.enable(), B(s), x());
          }
        }),
        e.on("MOUSEDOWN", function (t) {
          if (!l) {
            var n = e.toCanvasPos(t),
              i = n.x,
              o = n.y;
            if (a && a.isEditing && a.isClosePath) {
              var u = a.checkInPoints(i, o),
                d = a.checkInPath(i, o);
              (d || -1 !== u) &&
                (r.noCrossing && (h = JSON.parse(JSON.stringify(a.pointArr))),
                (c.x = i),
                (c.y = o),
                (s.x = i),
                (s.y = o),
                a.enableDrag(u));
            }
          }
        }),
        e.on("MOUSEMOVE", function (n) {
          if (!l) {
            var i = e.toCanvasPos(n),
              o = i.x,
              d = i.y;
            if (a && a.isDragging) {
              if (-1 !== a.dragPointIndex) {
                var h;
                (h = a).dragPoint.apply(h, Object(A["a"])(H(o, d)).concat([e]));
              } else {
                K(),
                  0 !== b[0] &&
                    0 !== b[1] &&
                    0 === p.x &&
                    0 === p.y &&
                    ((p.x = o), (p.y = d)),
                  0 !== p.x &&
                    0 !== p.y &&
                    t.getTwoPointDistance(p.x, p.y, o, d) > r.adsorbentNum &&
                    ((b = [0, 0]),
                    (c.x = s.x),
                    (c.y = s.y),
                    (p.x = 0),
                    (p.y = 0));
                var f = o - c.x,
                  m = d - c.y;
                a.dragAll(f, m);
              }
              x();
              var v = a.checkInPoints(o, d);
              e.emit("HOVER-ITEM", a, a, P(o, d), n, v);
            } else if (u) {
              var k,
                g = o - c.x,
                y = d - c.y,
                C = H(g, y);
              if (r.area && a) (k = a).areaToPoint.apply(k, Object(A["a"])(C));
              x();
            } else if (!u) {
              var O = j(o, d);
              if (
                (!r.hoverActive ||
                  (a && !a.isClosePath) ||
                  (I(), O && O.enableHoverActive(), x()),
                O && O.isClosePath)
              ) {
                var E = O.checkInPoints(o, d);
                e.emit("HOVER-ITEM", O, a, P(o, d), n, E);
              }
            }
          }
        }),
        e.on("MOUSEUP", function (t) {
          l ||
            (a &&
              a.isDragging &&
              ((k = !0),
              a.disableDrag(),
              (c.x = 0),
              (c.y = 0),
              (s.x = 0),
              (s.y = 0),
              r.noCrossing &&
                a.checkLineSegmentCross() &&
                (e.emit("LINE-CROSS", a), (a.pointArr = h), (h = null)),
              x()));
        }),
        (e._disableAllItemsEdit = E),
        (e._setMarkEditItem = B),
        (e._createNewMarkItem = O),
        (e._setIsCreateMarking = D),
        (e._render = x),
        (e._disableAllItemsHoverActive = I),
        (e._checkInPathItem = j),
        (e._checkInPathAllItems = P),
        (e._getIsCreateIngMarkItem = T),
        (e.getState = C),
        (e.getMarkData = N),
        (e.enableEdit = M),
        (e.disableEdit = w),
        (e.deleteMarkItem = G),
        (e.deleteAllMarkItem = U),
        (e.createMarkItem = R),
        (e.exitCreate = _),
        (e.reset = S),
        n(),
        i
      );
    }
    var R = n("f7ff"),
      _ = n.n(R),
      B = { dbClickTime: 200 },
      G = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ((Object(b["a"])(this, e), !t.el)) throw new Error("el属性为空");
          if (
            ((this.opt = Object(v["a"])(Object(v["a"])({}, B), t)),
            (this.el =
              "string" === typeof t.el ? document.querySelector(t.el) : t.el),
            !this.el)
          )
            throw new Error("容器元素获取失败");
          (this.elRectInfo = null),
            (this.canvasEle = null),
            (this.canvasEleRectInfo = null),
            (this.ctx = null),
            (this.clickTimer = null),
            (this.observer = new g()),
            (this.mousedownPos = { x: 0, y: 0 }),
            (this.mouseupPos = { x: 0, y: 0 }),
            (this.lastClickTime = 0),
            this.bindEventCallback(),
            this.init(),
            this.usePlugins();
        }
        return (
          Object(p["a"])(
            e,
            [
              {
                key: "updateOpt",
                value: function (e) {
                  (this.opt = _()(this.opt, e)),
                    this.emit("UPDATED_OPT", this.opt);
                },
              },
              {
                key: "usePlugins",
                value: function () {
                  var t = this,
                    n = 0,
                    i = e.pluginList.length,
                    r = function r() {
                      if (n >= i) t.emit("PLUGINS_LOADED");
                      else {
                        var o = e.pluginList[n];
                        o(t, N).then(function () {
                          n++, r();
                        });
                      }
                    };
                  r();
                },
              },
              {
                key: "emit",
                value: function (e) {
                  for (
                    var t,
                      n = arguments.length,
                      i = new Array(n > 1 ? n - 1 : 0),
                      r = 1;
                    r < n;
                    r++
                  )
                    i[r - 1] = arguments[r];
                  (t = this.observer).publish.apply(t, [e].concat(i));
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return this.observer.subscribe(e, t);
                },
              },
              {
                key: "off",
                value: function (e) {
                  this.observer.unsubscribe(e);
                },
              },
              {
                key: "init",
                value: function () {
                  this.createElement(),
                    (this.ctx = this.canvasEle.getContext("2d")),
                    this.bindEvent();
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.unbindEvent(),
                    this.el.removeChild(this.canvasEle),
                    this.emit("DESTORY"),
                    this.observer.clearAll();
                },
              },
              {
                key: "createElement",
                value: function () {
                  this.elRectInfo = this.el.getBoundingClientRect();
                  var e = this.elRectInfo,
                    t = e.width,
                    n = e.height;
                  (this.canvasEle = document.createElement("canvas")),
                    (this.canvasEle.width = t),
                    (this.canvasEle.height = n),
                    (this.canvasEleRectInfo = { width: t, height: n }),
                    this.el.appendChild(this.canvasEle);
                },
              },
              {
                key: "bindEventCallback",
                value: function () {
                  (this.onclick = this.onclick.bind(this)),
                    (this.onmousedown = this.onmousedown.bind(this)),
                    (this.onmousemove = this.onmousemove.bind(this)),
                    (this.onmouseup = this.onmouseup.bind(this)),
                    (this.onmouseenter = this.onmouseenter.bind(this)),
                    (this.onmouseleave = this.onmouseleave.bind(this)),
                    (this.onWindowClick = this.onWindowClick.bind(this));
                },
              },
              {
                key: "bindEvent",
                value: function () {
                  var e = this.opt.mobile;
                  this.canvasEle.addEventListener("click", this.onclick),
                    this.canvasEle.addEventListener(
                      e ? "touchstart" : "mousedown",
                      this.onmousedown
                    ),
                    this.canvasEle.addEventListener(
                      e ? "touchmove" : "mousemove",
                      this.onmousemove
                    ),
                    window.addEventListener(
                      e ? "touchend" : "mouseup",
                      this.onmouseup
                    ),
                    this.canvasEle.addEventListener(
                      "mouseenter",
                      this.onmouseenter
                    ),
                    this.canvasEle.addEventListener(
                      "mouseleave",
                      this.onmouseleave
                    ),
                    window.addEventListener("click", this.onWindowClick);
                },
              },
              {
                key: "unbindEvent",
                value: function () {
                  var e = this.opt.mobile;
                  this.canvasEle.removeEventListener("click", this.onclick),
                    this.canvasEle.removeEventListener(
                      e ? "touchstart" : "mousedown",
                      this.onmousedown
                    ),
                    this.canvasEle.removeEventListener(
                      e ? "touchmove" : "mousemove",
                      this.onmousemove
                    ),
                    window.removeEventListener(
                      e ? "touchend" : "mouseup",
                      this.onmouseup
                    ),
                    this.canvasEle.removeEventListener(
                      "mouseenter",
                      this.onmouseenter
                    ),
                    this.canvasEle.removeEventListener(
                      "mouseleave",
                      this.onmouseleave
                    ),
                    window.removeEventListener("click", this.onWindowClick);
                },
              },
              {
                key: "onclick",
                value: function (e) {
                  var t = this;
                  this.clickTimer &&
                    (clearTimeout(this.clickTimer), (this.clickTimer = null)),
                    (this.clickTimer = setTimeout(function () {
                      t.emit("CLICK", e);
                    }, this.opt.dbClickTime)),
                    Date.now() - this.lastClickTime <= this.opt.dbClickTime &&
                      (clearTimeout(this.clickTimer),
                      (this.clickTimer = null),
                      (this.lastClickTime = 0),
                      this.emit("DOUBLE-CLICK", e)),
                    (this.lastClickTime = Date.now());
                },
              },
              {
                key: "onmousedown",
                value: function (e) {
                  this.opt.mobile && (e = e.touches[0]),
                    (this.mousedownPos = { x: e.clientX, y: e.clientY }),
                    this.emit("MOUSEDOWN", e);
                },
              },
              {
                key: "onmousemove",
                value: function (e) {
                  this.opt.mobile && (e = e.touches[0]),
                    this.emit("MOUSEMOVE", e);
                },
              },
              {
                key: "onmouseup",
                value: function (e) {
                  this.opt.mobile && (e = e.touches[0]),
                    e || (e = { clientX: 0, clientY: 0 }),
                    (this.mouseupPos = { x: e.clientX, y: e.clientY }),
                    this.emit("MOUSEUP", e);
                },
              },
              {
                key: "onmouseenter",
                value: function (e) {
                  this.emit("MOUSEENTER", e);
                },
              },
              {
                key: "onmouseleave",
                value: function (e) {
                  this.emit("MOUSELEAVE", e);
                },
              },
              {
                key: "onWindowClick",
                value: function (e) {
                  this.emit("WINDOW-CLICK", e);
                },
              },
              {
                key: "clearCanvas",
                value: function () {
                  this.ctx.clearRect(
                    0,
                    0,
                    this.canvasEle.width,
                    this.canvasEle.height
                  );
                },
              },
              {
                key: "toCanvasPos",
                value: function (e) {
                  var t = e.clientX,
                    n = e.clientY,
                    i = this.canvasEle.getBoundingClientRect(),
                    r = i.left,
                    o = i.top,
                    a = t - r,
                    c = n - o;
                  return { x: a, y: c };
                },
              },
            ],
            [
              {
                key: "use",
                value: function (t) {
                  var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : -1;
                  if (t) {
                    if (t.used) return this;
                    (t.used = !0),
                      -1 === n
                        ? e.pluginList.push(t)
                        : e.pluginList.splice(n, 0, t);
                  }
                },
              },
            ]
          ),
          e
        );
      })();
    Object(k["a"])(G, "pluginList", []), G.use(D);
    var U = G,
      H = null,
      K = {
        data: function () {
          return { editing0: !0, curEditMarkItem0: null, isCreateMarking0: !1 };
        },
        mounted: function () {
          var e = this;
          setTimeout(function () {
            (H = new U({
              el: e.$refs.markBox0,
              hoverActive: !1,
              dbClickActive: !0,
              noCrossing: !0,
              enableAddPoint: !0,
              area: !0,
              showPen: !1,
              singleClickComplete: !1,
              pointType: "circle",
              pointWidth: 2,
              pointStyle: {
                lineWidth: 2,
                strokeColor: "#0088FF",
                fillColor: "#fff",
              },
              lineType: "borderLine",
              strokeStyle: {
                lineWidth: 5,
                strokeColor: "rgba(255, 255, 255, 0.7)",
                frontLineWidth: 3,
                frontStrokeColor: "#2196F3",
              },
              fillColor: "rgba(0,136,255,0.30)",
              dbClickRemovePoint: !0,
            })),
              H.on("CURRENT-MARK-ITEM-CHANGE", function (t) {
                e.curEditMarkItem0 = t;
              }),
              H.on("IS-CREATE-MARKING-CHANGE", function (t) {
                e.isCreateMarking0 = t;
              }),
              H.on("NOT-ENOUGH-END-POINTS", function (t) {
                e.$message.warning("至少需要绘制三个端点");
              }),
              H.on("LINE-CROSS", function (t) {
                e.$message.warning("线段不允许交叉");
              }),
              H.on("NOT-ENOUGH-POINTS-REMOVE", function (t) {
                e.$message.warning("至少需要三个端点");
              });
          });
        },
        methods: {
          getMarkData0: function () {
            console.log(H.getMarkData(), JSON.stringify(H.getMarkData()));
          },
          deleteItem0: function () {
            H.deleteMarkItem(this.curEditMarkItem0);
          },
          deleteAll0: function () {
            H.deleteAllMarkItem();
          },
          create0: function () {
            H.createMarkItem();
          },
          exit0: function () {
            H.exitCreate();
          },
        },
      },
      W = (n("d69f"), n("6b0d")),
      F = n.n(W);
    const J = F()(K, [
      ["render", m],
      ["__scopeId", "data-v-70e214e2"],
    ]);
    var q = J,
      $ = function (e) {
        return (
          Object(i["pushScopeId"])("data-v-309cb156"),
          (e = e()),
          Object(i["popScopeId"])(),
          e
        );
      },
      X = { class: "container" },
      Y = $(function () {
        return Object(i["createElementVNode"])(
          "h1",
          { name: "demo2", id: "demo2" },
          [
            Object(i["createElementVNode"])(
              "a",
              { href: "#demo2" },
              "基础用法"
            ),
          ],
          -1
        );
      }),
      z = { class: "markBox", ref: "markBox1" },
      Q = Object(i["createTextVNode"])("新增标注"),
      Z = Object(i["createTextVNode"])("退出新增"),
      ee = Object(i["createTextVNode"])("获取标注（控制台查看）"),
      te = Object(i["createTextVNode"])("删除全部");
    function ne(e, t, n, r, o, a) {
      var c = Object(i["resolveComponent"])("el-button");
      return (
        Object(i["openBlock"])(),
        Object(i["createElementBlock"])("div", X, [
          Y,
          Object(i["createElementVNode"])("div", z, null, 512),
          Object(i["createVNode"])(
            c,
            {
              type: "primary",
              onClick: a.create1,
              disabled: !o.editing1 || !!o.curEditMarkItem1,
            },
            {
              default: Object(i["withCtx"])(function () {
                return [Q];
              }),
              _: 1,
            },
            8,
            ["onClick", "disabled"]
          ),
          Object(i["createVNode"])(
            c,
            {
              type: "primary",
              onClick: a.exit1,
              disabled: !o.isCreateMarking1,
            },
            {
              default: Object(i["withCtx"])(function () {
                return [Z];
              }),
              _: 1,
            },
            8,
            ["onClick", "disabled"]
          ),
          Object(i["createVNode"])(
            c,
            { type: "primary", onClick: a.getMarkData1 },
            {
              default: Object(i["withCtx"])(function () {
                return [ee];
              }),
              _: 1,
            },
            8,
            ["onClick"]
          ),
          Object(i["createVNode"])(
            c,
            {
              type: "primary",
              icon: "el-icon-delete",
              onClick: a.deleteItem1,
              disabled: !o.curEditMarkItem1,
            },
            null,
            8,
            ["onClick", "disabled"]
          ),
          Object(i["createVNode"])(
            c,
            { type: "primary", icon: "el-icon-delete", onClick: a.deleteAll1 },
            {
              default: Object(i["withCtx"])(function () {
                return [te];
              }),
              _: 1,
            },
            8,
            ["onClick"]
          ),
        ])
      );
    }
    var ie = null,
      re = {
        data: function () {
          return { editing1: !0, curEditMarkItem1: null, isCreateMarking1: !1 };
        },
        mounted: function () {
          var e = this;
          setTimeout(function () {
            (ie = new U({ el: e.$refs.markBox1, hoverActive: !0 })),
              ie.on("CURRENT-MARK-ITEM-CHANGE", function (t) {
                e.curEditMarkItem1 = t;
              }),
              ie.on("IS-CREATE-MARKING-CHANGE", function (t) {
                e.isCreateMarking1 = t;
              }),
              ie.on("NOT-ENOUGH-END-POINTS", function (t) {
                e.$message.warning("至少需要绘制三个端点");
              });
          });
        },
        methods: {
          getMarkData1: function () {
            console.log(ie.getMarkData(), JSON.stringify(ie.getMarkData()));
          },
          deleteItem1: function () {
            ie.deleteMarkItem(this.curEditMarkItem1);
          },
          deleteAll1: function () {
            ie.deleteAllMarkItem();
          },
          create1: function () {
            ie.createMarkItem();
          },
          exit1: function () {
            ie.exitCreate();
          },
        },
      };
    n("55cb");
    const oe = F()(re, [
      ["render", ne],
      ["__scopeId", "data-v-309cb156"],
    ]);
    var ae = oe,
      ce = function (e) {
        return (
          Object(i["pushScopeId"])("data-v-6f7eab21"),
          (e = e()),
          Object(i["popScopeId"])(),
          e
        );
      },
      se = { class: "container" },
      le = ce(function () {
        return Object(i["createElementVNode"])(
          "h1",
          { name: "demo3", id: "demo3" },
          [
            Object(i["createElementVNode"])(
              "a",
              { href: "#demo3" },
              "标注图片"
            ),
          ],
          -1
        );
      }),
      ue = { class: "markBox", ref: "markBox2" },
      de = Object(i["createTextVNode"])("新增标注"),
      he = Object(i["createTextVNode"])("退出新增"),
      fe = Object(i["createTextVNode"])("获取标注（控制台查看）"),
      me = Object(i["createTextVNode"])("删除全部");
    function ve(e, t, n, r, o, a) {
      var c = Object(i["resolveComponent"])("el-button");
      return (
        Object(i["openBlock"])(),
        Object(i["createElementBlock"])("div", se, [
          le,
          Object(i["createElementVNode"])("div", ue, null, 512),
          Object(i["createVNode"])(
            c,
            {
              type: "primary",
              onClick: a.create2,
              disabled: !o.editing2 || !!o.curEditMarkItem2,
            },
            {
              default: Object(i["withCtx"])(function () {
                return [de];
              }),
              _: 1,
            },
            8,
            ["onClick", "disabled"]
          ),
          Object(i["createVNode"])(
            c,
            {
              type: "primary",
              onClick: a.exit2,
              disabled: !o.isCreateMarking2,
            },
            {
              default: Object(i["withCtx"])(function () {
                return [he];
              }),
              _: 1,
            },
            8,
            ["onClick", "disabled"]
          ),
          Object(i["createVNode"])(
            c,
            { type: "primary", onClick: a.getMarkData2 },
            {
              default: Object(i["withCtx"])(function () {
                return [fe];
              }),
              _: 1,
            },
            8,
            ["onClick"]
          ),
          Object(i["createVNode"])(
            c,
            {
              type: "primary",
              icon: "el-icon-delete",
              onClick: a.deleteItem2,
              disabled: !o.curEditMarkItem2,
            },
            null,
            8,
            ["onClick", "disabled"]
          ),
          Object(i["createVNode"])(
            c,
            { type: "primary", icon: "el-icon-delete", onClick: a.deleteAll2 },
            {
              default: Object(i["withCtx"])(function () {
                return [me];
              }),
              _: 1,
            },
            8,
            ["onClick"]
          ),
        ])
      );
    }
    n("b64b");
    var be = { elBg: "", bg: "" };
    function pe(e) {
      var t = null,
        n = new Promise(function (e) {
          t = e;
        }),
        i = Object(v["a"])(Object(v["a"])({}, be), e.opt);
      if (!i.img) return t(), n;
      var r = e.elRectInfo,
        o = e.canvasEle,
        a = null,
        c = null,
        s = 0,
        l = 0,
        u = 0,
        d = 0,
        h = 0,
        f = !1;
      function m() {
        N.loadImage(i.img)
          .then(function (e) {
            (c = e), (s = c.width), (l = c.height), p(), f || t();
          })
          .catch(function (n) {
            e.observer.publish("IMG-LOAD-ERROR", n), f || t();
          });
      }
      function b(t) {
        t && ((f = !0), (e.opt.img = t), (i.img = t), m());
      }
      function p() {
        k(),
          (e.canvasEleRectInfo = {
            width: u,
            height: d,
            left: (r.width - u) / 2,
            top: (r.height - d) / 2,
          }),
          g(),
          y(o, { zIndex: 2 }),
          C(),
          f && e._render();
      }
      function k() {
        if (r.width >= s && r.height >= l) (h = 1), (u = s), (d = l);
        else {
          var e = s / l,
            t = r.width / r.height;
          t > e
            ? ((h = l / r.height), (u = s / h), (d = r.height))
            : ((h = s / r.width), (u = r.width), (d = l / h));
        }
      }
      function g() {
        var t = window.getComputedStyle(e.el).position;
        "static" === t && (e.el.style.position = "relative"),
          i.elBg && (e.el.style.background = i.elBg);
      }
      function y(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (t.width = u),
          (t.height = d),
          (t.style.position = "absolute"),
          (t.style.left = e.canvasEleRectInfo.left + "px"),
          (t.style.top = e.canvasEleRectInfo.top + "px"),
          Object.keys(n).forEach(function (e) {
            t.style[e] = n[e];
          });
      }
      function C() {
        a = a || document.createElement("canvas");
        var t = { zIndex: 1 };
        i.bg && (t.background = i.bg), y(a, t), e.el.appendChild(a);
        var n = a.getContext("2d");
        n.drawImage(c, 0, 0, u, d);
      }
      return (
        e.on("DESTORY", function () {
          a && e.el.removeChild(a);
        }),
        m(),
        (e.image = c),
        (e.ratio = h),
        (e.refreshImage = b),
        n
      );
    }
    U.use(pe, 0);
    var ke = null,
      ge = {
        data: function () {
          return { editing2: !0, curEditMarkItem2: null, isCreateMarking2: !1 };
        },
        mounted: function () {
          var e = this;
          setTimeout(function () {
            (ke = new U({
              el: e.$refs.markBox2,
              hoverActive: !0,
              img: n("a0e8"),
              elBg: "#000",
              max: 3,
              noCrossing: !0,
            })),
              ke.on("CURRENT-MARK-ITEM-CHANGE", function (t) {
                e.curEditMarkItem2 = t;
              }),
              ke.on("IS-CREATE-MARKING-CHANGE", function (t) {
                e.isCreateMarking2 = t;
              }),
              ke.on("LINE-CROSS", function (t) {
                e.$message.warning("线段不允许交叉");
              }),
              ke.on("NOT-ENOUGH-END-POINTS", function (t) {
                e.$message.warning("至少需要绘制三个端点");
              }),
              ke.on("COUNT-LIMIT", function (t) {
                e.$message.warning("最多只能绘制三个区域");
              });
          });
        },
        methods: {
          getMarkData2: function () {
            console.log(ke.getMarkData(), JSON.stringify(ke.getMarkData()));
          },
          deleteItem2: function () {
            ke.deleteMarkItem(this.curEditMarkItem2);
          },
          deleteAll2: function () {
            ke.deleteAllMarkItem();
          },
          create2: function () {
            ke.createMarkItem();
          },
          exit2: function () {
            ke.exitCreate();
          },
        },
      };
    n("c25b");
    const ye = F()(ge, [
      ["render", ve],
      ["__scopeId", "data-v-6f7eab21"],
    ]);
    var Ce = ye,
      Oe = function (e) {
        return (
          Object(i["pushScopeId"])("data-v-5a1e1e2b"),
          (e = e()),
          Object(i["popScopeId"])(),
          e
        );
      },
      xe = { class: "container", ref: "container" },
      Ee = Oe(function () {
        return Object(i["createElementVNode"])(
          "h1",
          { name: "demo4", id: "demo4" },
          [
            Object(i["createElementVNode"])(
              "a",
              { href: "#demo4" },
              "特定形状"
            ),
          ],
          -1
        );
      }),
      Ie = { class: "markBox", ref: "markBox3" },
      je = Object(i["createTextVNode"])("创建形状"),
      Pe = Object(i["createTextVNode"])("退出新增"),
      Ne = Object(i["createTextVNode"])("获取标注（控制台查看）"),
      Ae = Object(i["createTextVNode"])("删除全部");
    function Te(e, t, n, r, o, a) {
      var c = Object(i["resolveComponent"])("el-button");
      return (
        Object(i["openBlock"])(),
        Object(i["createElementBlock"])(
          "div",
          xe,
          [
            Ee,
            Object(i["createElementVNode"])("div", Ie, null, 512),
            Object(i["createVNode"])(
              c,
              {
                type: "primary",
                onClick: a.createShape3,
                disabled: !o.editing3 || !!o.curEditMarkItem3,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [je];
                }),
                _: 1,
              },
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              c,
              {
                type: "primary",
                onClick: a.exit3,
                disabled: !o.isCreateMarking3,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [Pe];
                }),
                _: 1,
              },
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              c,
              { type: "primary", onClick: a.getMarkData3 },
              {
                default: Object(i["withCtx"])(function () {
                  return [Ne];
                }),
                _: 1,
              },
              8,
              ["onClick"]
            ),
            Object(i["createVNode"])(
              c,
              {
                type: "primary",
                icon: "el-icon-delete",
                onClick: a.deleteItem3,
                disabled: !o.curEditMarkItem3,
              },
              null,
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              c,
              {
                type: "primary",
                icon: "el-icon-delete",
                onClick: a.deleteAll3,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [Ae];
                }),
                _: 1,
              },
              8,
              ["onClick"]
            ),
          ],
          512
        )
      );
    }
    var Me = {
      shape: {
        square: {
          create: function (e) {
            var t,
              n = e.width,
              i = e.height;
            t = n > i ? 0.5 * i : 0.5 * n;
            var r = (n - t) / 2,
              o = (i - t) / 2;
            return [
              { x: r, y: o },
              { x: r + t, y: o },
              { x: r + t, y: o + t },
              { x: r, y: o + t },
            ];
          },
          update: function (e, t, n) {
            var i = (e.dragPointIndex + 2) % 4,
              r = e.pointArr[i],
              o = Math.max(Math.abs(t - r.x), Math.abs(n - r.y)),
              a = t > r.x ? r.x + o : r.x - o,
              c = n > r.y ? r.y + o : r.y - o,
              s = e.dragPointIndex % 2 === 0;
            (e.pointArr[i] = { x: r.x, y: r.y }),
              (e.pointArr[e.dragPointIndex] = { x: a, y: c }),
              (e.pointArr[(e.dragPointIndex + 1) % 4] = {
                x: s ? a : r.x,
                y: s ? r.y : c,
              }),
              (e.pointArr[(e.dragPointIndex + 3) % 4] = {
                x: s ? r.x : a,
                y: s ? c : r.y,
              });
          },
        },
        rectangle: {
          create: function (e) {
            var t,
              n = e.width,
              i = e.height;
            t = n > i ? 0.5 * i : 0.5 * n;
            var r = (n - t) / 2,
              o = (i - t) / 2;
            return [
              { x: r, y: o },
              { x: r + t, y: o },
              { x: r + t, y: o + t },
              { x: r, y: o + t },
            ];
          },
          update: function (e, t, n) {
            var i = -1,
              r = -1;
            switch (e.dragPointIndex) {
              case 0:
                (i = 3), (r = 1);
                break;
              case 1:
                (i = 2), (r = 0);
                break;
              case 2:
                (i = 1), (r = 3);
                break;
              case 3:
                (i = 0), (r = 2);
                break;
              default:
                break;
            }
            (e.pointArr[e.dragPointIndex] = { x: t, y: n }),
              (e.pointArr[i].x = t),
              (e.pointArr[r].y = n);
          },
        },
      },
      max: -1,
    };
    function Se(e) {
      var t = null,
        n = new Promise(function (e) {
          t = e;
        }),
        i = Object(v["a"])(
          Object(v["a"])(Object(v["a"])({}, Me), e.opt),
          {},
          { shape: Object(v["a"])(Object(v["a"])({}, Me.shape), e.opt.shape) }
        ),
        r = e._disableAllItemsEdit,
        o = e._setMarkEditItem,
        a = e._createNewMarkItem,
        c = e._setIsCreateMarking,
        s = e._render;
      function l() {
        var t = e.getState(),
          n = t.markItemList;
        n.forEach(function (e) {
          e.opt.shape &&
            i.shape[e.opt.shape] &&
            (e.updatePointFn = i.shape[e.opt.shape].update);
        });
      }
      function u(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          l = i.shape[t];
        if (l) {
          var u = e.getState(),
            d = u.markItemList;
          -1 === i.max || d.length < i.max
            ? (r(),
              o(
                a(
                  Object(v["a"])(
                    {
                      pointArr: l.create(e.canvasEleRectInfo),
                      updatePoint: l.update,
                    },
                    n
                  )
                )
              ),
              e.getState().curEditingMarkItem.closePath(),
              e.getState().curEditingMarkItem.enable(),
              d.push(e.getState().curEditingMarkItem),
              c(!1),
              e.emit("COMPLETE-EDIT-ITEM", e.getState().curEditingMarkItem))
            : (e.observer.publish("COUNT-LIMIT", curEditingMarkItem), c(!1)),
            s();
        }
      }
      return l(), (e.createShapeMarkItem = u), t(), n;
    }
    U.use(Se);
    var we = null,
      Le = {
        data: function () {
          return { editing3: !0, curEditMarkItem3: null, isCreateMarking3: !1 };
        },
        mounted: function () {
          var e = this;
          setTimeout(function () {
            (we = new U({ el: e.$refs.markBox3, hoverActive: !0 })),
              we.on("CURRENT-MARK-ITEM-CHANGE", function (t) {
                e.curEditMarkItem3 = t;
              }),
              we.on("IS-CREATE-MARKING-CHANGE", function (t) {
                e.isCreateMarking3 = t;
              }),
              we.on("NOT-ENOUGH-END-POINTS", function (t) {
                e.$message.warning("至少需要绘制三个端点");
              });
          });
        },
        methods: {
          getMarkData3: function () {
            console.log(we.getMarkData(), JSON.stringify(we.getMarkData()));
          },
          deleteItem3: function () {
            we.deleteMarkItem(this.curEditMarkItem);
          },
          deleteAll3: function () {
            we.deleteAllMarkItem();
          },
          exit3: function () {
            we.exitCreate();
          },
          createShape3: function () {
            we.createShapeMarkItem("rectangle", {
              fillColor: "rgba(250,50,57,0.30)",
            });
          },
        },
      };
    n("a5b5");
    const Ve = F()(Le, [
      ["render", Te],
      ["__scopeId", "data-v-5a1e1e2b"],
    ]);
    var De = Ve,
      Re = function (e) {
        return (
          Object(i["pushScopeId"])("data-v-4fee0810"),
          (e = e()),
          Object(i["popScopeId"])(),
          e
        );
      },
      _e = { class: "container" },
      Be = Re(function () {
        return Object(i["createElementVNode"])(
          "h1",
          { name: "demo5", id: "demo5" },
          [
            Object(i["createElementVNode"])(
              "a",
              { href: "#demo5" },
              "单独编辑"
            ),
          ],
          -1
        );
      }),
      Ge = { class: "markBox", ref: "markBox4" },
      Ue = Object(i["createTextVNode"])("新增标注"),
      He = Object(i["createTextVNode"])("退出新增"),
      Ke = Object(i["createTextVNode"])("获取标注（控制台查看）"),
      We = Object(i["createTextVNode"])("删除全部");
    function Fe(e, t, n, r, o, a) {
      var c = Object(i["resolveComponent"])("el-button");
      return (
        Object(i["openBlock"])(),
        Object(i["createElementBlock"])("div", _e, [
          Be,
          Object(i["createElementVNode"])("div", Ge, null, 512),
          Object(i["createVNode"])(
            c,
            {
              type: "primary",
              onClick: a.create4,
              disabled: !o.editing4 || !!o.curEditMarkItem4,
            },
            {
              default: Object(i["withCtx"])(function () {
                return [Ue];
              }),
              _: 1,
            },
            8,
            ["onClick", "disabled"]
          ),
          Object(i["createVNode"])(
            c,
            {
              type: "primary",
              onClick: a.exit4,
              disabled: !o.isCreateMarking4,
            },
            {
              default: Object(i["withCtx"])(function () {
                return [He];
              }),
              _: 1,
            },
            8,
            ["onClick", "disabled"]
          ),
          Object(i["createVNode"])(
            c,
            { type: "primary", onClick: a.getMarkData4 },
            {
              default: Object(i["withCtx"])(function () {
                return [Ke];
              }),
              _: 1,
            },
            8,
            ["onClick"]
          ),
          Object(i["createVNode"])(
            c,
            {
              type: "primary",
              icon: "el-icon-delete",
              onClick: a.deleteItem4,
              disabled: !o.curEditMarkItem4,
            },
            null,
            8,
            ["onClick", "disabled"]
          ),
          Object(i["createVNode"])(
            c,
            { type: "primary", icon: "el-icon-delete", onClick: a.deleteAll4 },
            {
              default: Object(i["withCtx"])(function () {
                return [We];
              }),
              _: 1,
            },
            8,
            ["onClick"]
          ),
        ])
      );
    }
    var Je = {
      showPen: !0,
      penImg: n("4435"),
      cursorTips: {
        START: "单击进行绘制，双击结束操作",
        EDITING: "拖曳移动节点或区域，双击结束操作",
        HOVER: "单击激活该区域并进入编辑状态",
        EDITING_POINT: "拖拽移动节点，修改区域边界，双击删除节点",
      },
    };
    function qe(e) {
      var t = null,
        n = new Promise(function (e) {
          t = e;
        }),
        i = Object(v["a"])(Object(v["a"])({}, Je), e.opt),
        r = e.canvasEle,
        o = null,
        a = Object(v["a"])(Object(v["a"])({}, Je.cursorTips), i.cursorTips),
        c = !1;
      function s() {
        (o = document.createElement("div")),
          (o.style.cssText =
            "\n            position: fixed;\n            height: 20px;\n            background-color: #fff;\n            color: #000;\n            line-height: 20px;\n            font-size: 12px;\n            padding: 0 10px;\n            user-select: none;\n            display: none;\n            z-index: 3;\n        "),
          document.body.appendChild(o);
      }
      function l() {
        o.style.display = "block";
      }
      function u() {
        o.style.display = "none";
      }
      function d() {
        i.showPen && (r.style.cursor = "url('".concat(i.penImg, "') ,default"));
      }
      function h() {
        r.style.cursor = "default";
      }
      function f(e, t) {
        (o.style.left = e + "px"), (o.style.top = t + "px");
      }
      function m() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        o.innerHTML = e;
      }
      function b() {
        h(), u(), f(0, 0), m();
      }
      return (
        s(),
        e.on("MOUSEMOVE", function (t) {
          c
            ? h()
            : (b(),
              e.getState().isCreateMarking &&
                (d(), f(t.clientX + 30, t.clientY), m(a.START), l())),
            (c = !1);
        }),
        e.on("MOUSELEAVE", function (e) {
          b();
        }),
        e.on("HOVER-ITEM", function (t, n, r, o, s) {
          (n && !n.isClosePath) ||
            ((c = !0),
            f(o.clientX + 30, o.clientY),
            e.opt.single
              ? n && r.includes(n)
                ? (i.dbClickRemovePoint && -1 !== s
                    ? m(a.EDITING_POINT)
                    : m(a.EDITING),
                  l())
                : n
                ? (m(), u())
                : (m(a.HOVER), l())
              : n && r.includes(n)
              ? (i.dbClickRemovePoint && -1 !== s
                  ? m(a.EDITING_POINT)
                  : m(a.EDITING),
                l())
              : t.isEditing
              ? (m(a.EDITING), l())
              : (m(a.HOVER), l()));
        }),
        e.on("COMPLETE-EDIT-ITEM", function () {
          b();
        }),
        t(),
        n
      );
    }
    U.use(qe);
    var $e = null,
      Xe = {
        data: function () {
          return { editing4: !0, curEditMarkItem4: null, isCreateMarking4: !1 };
        },
        mounted: function () {
          var e = this;
          setTimeout(function () {
            ($e = new U({ el: e.$refs.markBox4, hoverActive: !0, single: !0 })),
              $e.on("CURRENT-MARK-ITEM-CHANGE", function (t) {
                e.curEditMarkItem4 = t;
              }),
              $e.on("IS-CREATE-MARKING-CHANGE", function (t) {
                e.isCreateMarking4 = t;
              }),
              $e.on("NOT-ENOUGH-END-POINTS", function (t) {
                e.$message.warning("至少需要绘制三个端点");
              });
          });
        },
        methods: {
          getMarkData4: function () {
            console.log($e.getMarkData(), JSON.stringify($e.getMarkData()));
          },
          deleteItem4: function () {
            $e.deleteMarkItem(this.curEditMarkItem4);
          },
          deleteAll4: function () {
            $e.deleteAllMarkItem();
          },
          create4: function () {
            $e.createMarkItem();
          },
          exit4: function () {
            $e.exitCreate();
          },
        },
      };
    n("8dcc");
    const Ye = F()(Xe, [
      ["render", Fe],
      ["__scopeId", "data-v-4fee0810"],
    ]);
    var ze = Ye,
      Qe = function (e) {
        return (
          Object(i["pushScopeId"])("data-v-ce92a108"),
          (e = e()),
          Object(i["popScopeId"])(),
          e
        );
      },
      Ze = { class: "container", ref: "container" },
      et = Qe(function () {
        return Object(i["createElementVNode"])(
          "h1",
          { name: "demo6", id: "demo6" },
          [
            Object(i["createElementVNode"])(
              "a",
              { href: "#demo6" },
              "综合示例"
            ),
          ],
          -1
        );
      }),
      tt = { class: "markBox", ref: "markBox5" },
      nt = Object(i["createTextVNode"])("新增标注"),
      it = Object(i["createTextVNode"])("创建形状"),
      rt = Object(i["createTextVNode"])("退出新增"),
      ot = Object(i["createTextVNode"])("获取标注（控制台查看）"),
      at = Object(i["createTextVNode"])("删除全部");
    function ct(e, t, n, r, o, a) {
      var c = Object(i["resolveComponent"])("el-button");
      return (
        Object(i["openBlock"])(),
        Object(i["createElementBlock"])(
          "div",
          Ze,
          [
            et,
            Object(i["createElementVNode"])("div", tt, null, 512),
            Object(i["createVNode"])(
              c,
              { type: "primary", onClick: a.edit5 },
              {
                default: Object(i["withCtx"])(function () {
                  return [
                    Object(i["createTextVNode"])(
                      Object(i["toDisplayString"])(
                        o.editing5 ? "切换到只读模式" : "切换到编辑模式"
                      ),
                      1
                    ),
                  ];
                }),
                _: 1,
              },
              8,
              ["onClick"]
            ),
            Object(i["createVNode"])(
              c,
              {
                type: "primary",
                onClick: a.create5,
                disabled: !o.editing5 || !!o.curEditMarkItem5,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [nt];
                }),
                _: 1,
              },
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              c,
              {
                type: "primary",
                onClick: a.createShape5,
                disabled: !o.editing5 || !!o.curEditMarkItem5,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [it];
                }),
                _: 1,
              },
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              c,
              {
                type: "primary",
                onClick: a.exit5,
                disabled: !o.isCreateMarking5,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [rt];
                }),
                _: 1,
              },
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              c,
              { type: "primary", onClick: a.getMarkData5 },
              {
                default: Object(i["withCtx"])(function () {
                  return [ot];
                }),
                _: 1,
              },
              8,
              ["onClick"]
            ),
            Object(i["createVNode"])(
              c,
              {
                type: "primary",
                icon: "el-icon-delete",
                onClick: a.deleteItem5,
                disabled: !o.curEditMarkItem5,
              },
              null,
              8,
              ["onClick", "disabled"]
            ),
            Object(i["createVNode"])(
              c,
              {
                type: "primary",
                icon: "el-icon-delete",
                onClick: a.deleteAll5,
              },
              {
                default: Object(i["withCtx"])(function () {
                  return [at];
                }),
                _: 1,
              },
              8,
              ["onClick"]
            ),
          ],
          512
        )
      );
    }
    U.use(pe, 0), U.use(Se), U.use(qe);
    var st = null,
      lt = {
        data: function () {
          return { editing5: !1, curEditMarkItem5: null, isCreateMarking5: !1 };
        },
        mounted: function () {
          var e = this;
          setTimeout(function () {
            (st = new U({
              el: e.$refs.markBox5,
              value: [
                {
                  data: "区域1",
                  pointArr: [
                    { x: 0.5409663865546218, y: 0.16607004643962847 },
                    { x: 1.009453781512605, y: 0.19393382352941177 },
                    { x: 0.8960084033613446, y: 0.6273703560371517 },
                    { x: 0.6039915966386554, y: 0.8502805727554179 },
                    { x: 0.39810924369747897, y: 0.5097232972136223 },
                    { x: 0.5577731092436975, y: 0.4137480650154799 },
                  ],
                  fillColor: "rgba(250,50,57,0.30)",
                  strokeStyle: { strokeColor: "red" },
                  pointStyle: { fillColor: "#FFCC00", strokeColor: "#FFCC00" },
                },
                {
                  data: null,
                  pointArr: [
                    { x: 0.0703781512605042, y: 0.15368614551083593 },
                    { x: 0.23004201680672268, y: 0.04842298761609907 },
                    { x: 0.13970588235294118, y: 0.28062113003095973 },
                    { x: 0.21533613445378152, y: 0.4508997678018576 },
                    { x: 0.19432773109243698, y: 0.655234133126935 },
                    { x: 0.27836134453781514, y: 0.8007449690402477 },
                    { x: 0.1796218487394958, y: 0.806936919504644 },
                    { x: 0.11659663865546219, y: 0.8595684984520123 },
                  ],
                },
                {
                  data: null,
                  shape: "square",
                  pointArr: [
                    { x: 0.37, y: 0.2025 },
                    { x: 0.7033333333333334, y: 0.2025 },
                    { x: 0.7033333333333334, y: 0.7025 },
                    { x: 0.37, y: 0.7025 },
                  ],
                  fillColor: "rgba(255,223,66,0.80)",
                  strokeStyle: { strokeColor: "#FFCC00" },
                },
              ],
              showPoint: !0,
              pointType: "square",
              pointWidth: 3,
              pointStyle: {
                lineWidth: 3,
                strokeColor: "#fff",
                fillColor: "#fff",
              },
              max: 5,
              hoverActive: !0,
              readonly: !0,
              showPen: !0,
              single: !1,
              noCrossing: !0,
              img: n("a0e8"),
              elBg: "#000",
              bg: "#fff",
            })),
              st.on("CURRENT-MARK-ITEM-CHANGE", function (t) {
                e.curEditMarkItem5 = t;
              }),
              st.on("IS-CREATE-MARKING-CHANGE", function (t) {
                e.isCreateMarking5 = t;
              }),
              st.on("LINE-CROSS", function (t) {
                e.$message.warning("线段不允许交叉");
              }),
              st.on("NOT-ENOUGH-END-POINTS", function (t) {
                e.$message.warning("至少需要绘制三个端点");
              }),
              st.on("COUNT-LIMIT", function (t) {
                e.$message.warning("最多只能绘制三个区域");
              });
          });
        },
        methods: {
          edit5: function () {
            if (this.editing5) {
              var e = st.disableEdit();
              if (!e) return void this.$message.warning("请先完成编辑");
            } else st.enableEdit();
            this.editing5 = !this.editing5;
          },
          getMarkData5: function () {
            console.log(st.getMarkData(), JSON.stringify(st.getMarkData()));
          },
          deleteItem5: function () {
            mark.deleteMarkItem(this.curEditMarkItem5);
          },
          deleteAll5: function () {
            st.deleteAllMarkItem();
          },
          create5: function () {
            st.createMarkItem({
              data: "新标注",
              fillColor: "rgba(155,224,255,0.27)",
            });
          },
          exit5: function () {
            st.exitCreate();
          },
          createShape5: function () {
            st.createShapeMarkItem("square");
          },
        },
      };
    n("48b5");
    const ut = F()(lt, [
      ["render", ct],
      ["__scopeId", "data-v-ce92a108"],
    ]);
    var dt = ut,
      ht = function (e) {
        return (
          Object(i["pushScopeId"])("data-v-12a2712d"),
          (e = e()),
          Object(i["popScopeId"])(),
          e
        );
      },
      ft = { class: "container" },
      mt = ht(function () {
        return Object(i["createElementVNode"])(
          "h1",
          { name: "demo3-2", id: "demo3-2" },
          [
            Object(i["createElementVNode"])(
              "a",
              { href: "#demo3-2" },
              "标注图片（可切换图片）"
            ),
          ],
          -1
        );
      }),
      vt = { class: "markBox", ref: "markBox2" },
      bt = Object(i["createTextVNode"])("刷新图片"),
      pt = Object(i["createTextVNode"])("获取标注（控制台查看）");
    function kt(e, t, n, r, o, a) {
      var c = Object(i["resolveComponent"])("el-button");
      return (
        Object(i["openBlock"])(),
        Object(i["createElementBlock"])("div", ft, [
          mt,
          Object(i["createElementVNode"])("div", vt, null, 512),
          Object(i["createVNode"])(
            c,
            { type: "primary", onClick: a.refresh },
            {
              default: Object(i["withCtx"])(function () {
                return [bt];
              }),
              _: 1,
            },
            8,
            ["onClick"]
          ),
          Object(i["createVNode"])(
            c,
            { type: "primary", onClick: a.getMarkData2 },
            {
              default: Object(i["withCtx"])(function () {
                return [pt];
              }),
              _: 1,
            },
            8,
            ["onClick"]
          ),
        ])
      );
    }
    U.use(pe, 0), U.use(Se);
    var gt = [n("3fab"), n("df31"), n("1de8"), n("ed9d"), n("6acb"), n("a0e8")],
      yt = null,
      Ct = {
        data: function () {
          return { editing2: !0 };
        },
        mounted: function () {
          var e = this;
          setTimeout(function () {
            (yt = new U({
              el: e.$refs.markBox2,
              hoverActive: !0,
              img: gt[0],
              elBg: "#000",
              max: 3,
              noCrossing: !0,
            })),
              yt.on("PLUGINS_LOADED", function () {
                e.create2();
              });
          });
        },
        methods: {
          refresh: function () {
            var e = Math.floor(Math.random() * gt.length);
            yt.refreshImage(gt[e]);
          },
          getMarkData2: function () {
            console.log(yt.getMarkData(), JSON.stringify(yt.getMarkData()));
          },
          create2: function () {
            yt.createShapeMarkItem("square", {
              fillColor: "rgba(250,50,57,0.30)",
            });
          },
        },
      };
    n("7729");
    const Ot = F()(Ct, [
      ["render", kt],
      ["__scopeId", "data-v-12a2712d"],
    ]);
    var xt = Ot,
      Et = {
        name: "App",
        components: {
          Demo1: q,
          Demo2: ae,
          Demo3: Ce,
          Demo4: De,
          Demo5: ze,
          Demo6: dt,
          Demo32: xt,
        },
      };
    n("9ac5");
    const It = F()(Et, [["render", r]]);
    var jt = It,
      Pt = n("1250"),
      Nt = (n("7437"), Object(i["createApp"])(jt));
    Nt.use(Pt["a"]), Nt.mount("#app");
  },
  "6acb": function (e, t, n) {
    e.exports = n.p + "img/demo6.a31ecc53.png";
  },
  "6cdc": function (e, t, n) {},
  7729: function (e, t, n) {
    "use strict";
    n("00dd");
  },
  "8dcc": function (e, t, n) {
    "use strict";
    n("a308");
  },
  "9ac5": function (e, t, n) {
    "use strict";
    n("a746");
  },
  a0e8: function (e, t, n) {
    e.exports = n.p + "img/demo.79c8fe50.png";
  },
  a308: function (e, t, n) {},
  a5b5: function (e, t, n) {
    "use strict";
    n("11da");
  },
  a746: function (e, t, n) {},
  c1a3: function (e, t, n) {},
  c25b: function (e, t, n) {
    "use strict";
    n("1b9c");
  },
  d098: function (e, t, n) {},
  d69f: function (e, t, n) {
    "use strict";
    n("d098");
  },
  df31: function (e, t, n) {
    e.exports = n.p + "img/demo3.61b52fff.jpg";
  },
  ed9d: function (e, t, n) {
    e.exports = n.p + "img/demo5.42d7a9fd.png";
  },
});
//# sourceMappingURL=app.051b61cc.js.map
