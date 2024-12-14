"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2585],
  {
    83344: (e, t, s) => {
      s.d(t, { FO: () => k });
      var i = s(59978),
        a = s(61720),
        n = s(36120),
        o = s(76617),
        r = s(86163),
        l = s(89571),
        d = s(98800),
        c = s(54665),
        x = s(87832);
      let p = (e) => {
          try {
            return (
              (0, r.vq)(e) ? o.cv({ data: e, ss58Format: n.GA }) : o.Jx(e), !0
            );
          } catch (e) {
            return !1;
          }
        },
        u = (e) => l.UJ(e),
        h = (e, t) => (0, i.R2)(e, t),
        m = (e) => h(e, "mainnet"),
        f = (e) => h(e, "testnet"),
        j = (e) => h(e, "regtest"),
        k = (e) => {
          let t = u(e),
            s = p(e),
            i = (0, d.Tx)();
          return {
            [c.tH.id]: t,
            [c.zO.id]: m(e),
            [c.Zj.id]: (0, a.r)(e),
            [c.Vm.id]: s,
            [c.yu.id]: t,
            [c.yX.id]: t,
            [c.v4.id]: t,
            [c.pL.id]: t,
            [c.Ai.id]: t,
            [c.y1.id]: t,
            [c.eG.id]: t,
            [c.Q0.id]: t,
            [c.DG.id]: t,
            [x.Fo.id]: t,
            [x.e5.id]: t,
            [x.WW.id]: t,
            [x.Lq.id]: "backspin" === i ? j(e) : f(e),
            [x.ol.id]: (0, a.r)(e),
            [x.bb.id]: (0, a.r)(e),
            [x.h2.id]: s,
            [x.v8.id]: t,
            [x.Zk.id]: t,
            [x.Oj.id]: t,
            [x.cn.id]: t,
            [x.tb.id]: t,
            [x.eb.id]: t,
            [x.d2.id]: t,
            [x.P7.id]: t,
            [x.$X.id]: t,
          };
        };
    },
    34601: (e, t, s) => {
      s.d(t, { j: () => c });
      var i = s(31549),
        a = s(44194),
        n = s(51865),
        o = s.n(n),
        r = s(6043),
        l = s(34114),
        d = s(98800);
      let c = (e) => {
        let {
            depositAmount: t,
            sourceAsset: s,
            egressAmount: n,
            destinationAsset: c,
            className: x,
            decimalCap: p = 8,
          } = e,
          [u, h] = (0, a.useState)(!1),
          m = (0, a.useRef)(!0),
          f = d.dt.fromAsset(t, s),
          j = d.dt.fromAsset(n, c),
          k = u ? f.ratio(j) : j.ratio(f);
        return (0, i.jsxs)(r.E.button, {
          animate: m.current ? "none" : u ? "flash2" : "flash",
          variants: {
            none: { opacity: 1 },
            flash: { opacity: [0, 1] },
            flash2: { opacity: [0, 1] },
          },
          transition: { duration: 0.15 },
          className: o()(
            "flex items-center gap-x-1 text-cf-light-3 transition duration-150 ease-in hover:text-white",
            x
          ),
          onClick: (e) => {
            e.stopPropagation(), (m.current = !1), h(!u);
          },
          children: [
            (0, i.jsxs)("span", {
              className: "flex items-center",
              children: [
                k.isNaN() ? "" : 1,
                " ",
                u ? d.Y8[c].symbol : d.Y8[s].symbol,
              ],
            }),
            (0, i.jsx)(l.oyI, { className: "cursor-pointer" }),
            (0, i.jsxs)("span", {
              className: "flex items-center",
              children: [
                k.isNaN() ? "" : k.toFormat(p),
                " ",
                u ? d.Y8[s].symbol : d.Y8[c].symbol,
              ],
            }),
          ],
        });
      };
    },
    82203: (e, t, s) => {
      s.d(t, { Z: () => n });
      var i = s(44194),
        a = s(86252);
      let n = (e) => {
        let t = (0, a.L)(),
          s = (0, i.useMemo)(
            () => (e ? [e] : []),
            [null == e ? void 0 : e.chain.id, null == e ? void 0 : e.address]
          );
        return (
          (0, i.useEffect)(() => t.watchTokens(s), [s]),
          { isLoading: t.isLoading, price: e && t.getPrice(e) }
        );
      };
    },
    55366: (e, t, s) => {
      s.d(t, { Z: () => a });
      var i = s(31549);
      let a = (e) =>
        (0, i.jsxs)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, i.jsx)("path", {
              d: "M13.75 6.75L19.25 12L13.75 17.25",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, i.jsx)("path", {
              d: "M19 12H4.75",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        });
    },
    91673: (e, t, s) => {
      s.d(t, { $T: () => i, fL: () => a, mZ: () => n });
      let i = "CHAINFLIP_SWAP_LIMITS",
        a = "CHAINFLIP_BLOCK_CONFIRMATIONS",
        n = "CHAINFLIP_BOOST_LIQUIDITY";
    },
    64480: (e, t, s) => {
      s.d(t, { h: () => r });
      var i = s(31549),
        a = s(44194),
        n = s(6043);
      let o = {
          bounce: 0,
          duration: 0.15,
          ease: "easeOut",
          damping: 20,
          stiffness: 150,
          mass: 0.4,
        },
        r = (e) => {
          let {
              children: t,
              className: s,
              transition: r = o,
              disable: l = !1,
            } = e,
            d = (0, a.useRef)(null),
            [c, x] = (0, a.useState)("auto");
          return (
            (0, a.useEffect)(() => {
              if (d.current) {
                let e = new ResizeObserver((e) => {
                  let t = e[0].contentRect.height;
                  x(l ? "auto" : t);
                });
                return (
                  e.observe(d.current),
                  () => {
                    e.disconnect();
                  }
                );
              }
            }, [l]),
            (0, i.jsx)(n.E.div, {
              className: s,
              style: { height: c },
              animate: { height: c },
              transition: r,
              children: (0, i.jsx)("div", { ref: d, children: t }),
            })
          );
        };
    },
    56557: (e, t, s) => {
      s.d(t, { Z: () => o });
      var i = s(44194),
        a = s(51865),
        n = s.n(a);
      let o = i.forwardRef((e, t) => {
        let { className: s, children: a, ...o } = e;
        return i.createElement(
          "div",
          {
            ...o,
            ref: t,
            className: n()("rounded-md border border-cf-gray-4", s),
          },
          a
        );
      });
    },
    13798: (e, t, s) => {
      s.d(t, { KI: () => v, bd: () => j });
      var i = s(31549),
        a = s(44194),
        n = s(9774),
        o = s(86163),
        r = s(51865),
        l = s.n(r),
        d = s(6043),
        c = s(21449),
        x = s(56156);
      function p(e) {
        let {
            label: t,
            count: s,
            children: n,
            className: o,
            buttonClassName: r,
            secondaryAction: p,
          } = e,
          [u, h] = (0, a.useState)(!1);
        return (0, i.jsxs)("div", {
          "data-open": u,
          className: l()(
            "w-full overflow-hidden rounded-md border border-cf-gray-4 bg-cf-gray-3 font-aeonikMedium text-14 text-cf-light-2 data-open:bg-cf-gray-3-5",
            o
          ),
          children: [
            (0, i.jsxs)("button", {
              "data-open": u,
              type: "button",
              onClick: () => h(!u),
              className: l()(
                "group flex w-full items-center justify-between p-3 outline-none transition ease-out hover:bg-cf-gray-3-5",
                "font-aeonikMedium data-open:text-cf-white",
                r
              ),
              children: [
                (0, i.jsxs)("span", {
                  children: [u ? "Hide" : "Show", " ", t, " (", s, ")"],
                }),
                (0, i.jsxs)("div", {
                  className: "flex items-center gap-x-2",
                  children: [
                    p &&
                      (0, i.jsx)(x.ZP, {
                        type: "secondary-standard",
                        size: "small",
                        onClick: (e) => {
                          e.stopPropagation(), p.onClick();
                        },
                        children: p.label,
                      }),
                    (0, i.jsx)("span", {
                      className:
                        "flex h-6 w-6 items-center justify-center rounded-md border border-cf-gray-5 bg-cf-gray-4 transition ease-out group-hover:bg-cf-gray-5 group-hover:text-cf-white",
                      children: (0, i.jsx)(c.DVO, { flip: !u }),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(d.E.div, {
              "data-open": u,
              initial: "closed",
              animate: u ? "open" : "closed",
              variants: {
                open: { height: "auto", opacity: 1 },
                closed: { height: "0px", opacity: 0 },
              },
              transition: { duration: 0.15 },
              className:
                "flex flex-col overflow-hidden p-3 py-0 text-12 data-open:pb-3",
              children: n,
            }),
          ],
        });
      }
      var u = s(34114),
        h = s(98800),
        m = s(20319);
      let f = {
          success: (0, i.jsx)(u.rE2, { className: "text-cf-green-1" }),
          processing: (0, i.jsx)(u.wGF, { className: "text-cf-orange-2" }),
          error: (0, i.jsx)(u.uC5, { className: "text-cf-red-1" }),
        },
        j = (e) => {
          let { href: t } = e;
          return (0, i.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            className:
              "flex h-6 w-6 items-center justify-center rounded-md border border-cf-gray-5 bg-cf-gray-4 transition ease-out hover:bg-cf-gray-5 hover:text-cf-white",
            children: (0, i.jsx)(u.MYx, {}),
          });
        },
        k = (e) => {
          let { status: t, message: s, link: a, timestamp: o } = e;
          return (0, i.jsxs)("div", {
            className:
              "flex h-9 items-center justify-between gap-x-2 text-cf-light-3",
            children: [
              (0, i.jsxs)("div", {
                className: "flex items-center gap-x-1",
                children: [
                  (0, i.jsx)("div", { children: f[t] }),
                  (0, i.jsx)("div", { children: s }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "flex items-center gap-x-2.5 whitespace-nowrap",
                children: [
                  null != o &&
                    (0, i.jsx)("span", {
                      className: "text-cf-light-2",
                      children: (0, n.Ku)(new Date(o).toISOString()),
                    }),
                  a && (0, i.jsx)(j, { href: a }),
                ],
              }),
            ],
          });
        },
        g = (e) => {
          let { amount: t, token: s } = e;
          return (0, i.jsxs)("span", {
            className: "text-cf-white",
            children: [
              h.dt.fromAsset(t, s.chainflipId).toCapped(),
              " ",
              s.symbol,
            ],
          });
        },
        y = (e, t, s) =>
          e.failedAt
            ? {
                message: (0, i.jsxs)(i.Fragment, {
                  children: [
                    "Sending ",
                    (0, i.jsx)(g, { amount: e.amount, token: t }),
                    " failed",
                  ],
                }),
                status: "error",
                link: (0, m.Yh)(e.failedBlockIndex),
                timestamp: e.failedAt,
              }
            : e.witnessedAt
            ? {
                message: (0, i.jsxs)(i.Fragment, {
                  children: [
                    "Sent ",
                    (0, i.jsx)(g, { amount: e.amount, token: t }),
                    " to",
                    " ",
                    (0, i.jsx)("span", {
                      className: "text-cf-white",
                      children: (0, o.$A)(s),
                    }),
                  ],
                }),
                status: "success",
                link: (0, m.Yh)(e.witnessedBlockIndex),
                timestamp: e.witnessedAt,
              }
            : {
                message: (0, i.jsxs)(i.Fragment, {
                  children: [
                    "Sending ",
                    (0, i.jsx)(g, { amount: e.amount, token: t }),
                    " to",
                    " ",
                    (0, i.jsx)("span", {
                      className: "text-cf-white",
                      children: (0, o.$A)(s),
                    }),
                  ],
                }),
                status: "processing",
                link: void 0,
                timestamp: void 0,
              },
        _ = (e, t, s) => {
          var a, n, o, r, l, d, c, x, p, u, h, f;
          let j = [],
            k = "swapEgress" in e && e.swapEgress ? e.swapEgress : void 0,
            _ = "refundEgress" in e && e.refundEgress ? e.refundEgress : void 0;
          k && j.push(y(k, s, e.destAddress)),
            _ &&
              j.push(
                y(
                  _,
                  t,
                  null !==
                    (o =
                      null === (n = e.depositChannel) || void 0 === n
                        ? void 0
                        : null === (a = n.fillOrKillParams) || void 0 === a
                        ? void 0
                        : a.refundAddress) && void 0 !== o
                    ? o
                    : ""
                )
              ),
            _ &&
              !k &&
              j.push({
                message: "Slippage tolerance exceeded",
                status: "error",
                link: (0, m.Yh)(_.scheduledBlockIndex),
                timestamp: _.scheduledAt,
              });
          let v = "swap" in e && e.swap ? e.swap : void 0,
            w = null == v ? void 0 : v.dca,
            C = null == v ? void 0 : v.regular;
          if (
            (v && w
              ? "swapEgress" in e || "refundEgress" in e
                ? "swapEgress" in e &&
                  j.push({
                    message: (0, i.jsxs)(i.Fragment, {
                      children: [
                        "Swapped ",
                        (0, i.jsx)(g, {
                          amount: v.swappedInputAmount,
                          token: t,
                        }),
                        " for",
                        " ",
                        (0, i.jsx)(g, {
                          amount: v.swappedOutputAmount,
                          token: s,
                        }),
                      ],
                    }),
                    status: "success",
                    link: (0, m.Yh)(
                      null === (p = w.lastExecutedChunk) || void 0 === p
                        ? void 0
                        : p.executedBlockIndex
                    ),
                    timestamp:
                      null === (u = w.lastExecutedChunk) || void 0 === u
                        ? void 0
                        : u.executedAt,
                  })
                : j.push({
                    message: (0, i.jsxs)(i.Fragment, {
                      children: [
                        "Swapping ",
                        (0, i.jsx)("span", {
                          className: "text-cf-white",
                          children: t.symbol,
                        }),
                        " for",
                        " ",
                        (0, i.jsx)("span", {
                          className: "text-cf-white",
                          children: s.symbol,
                        }),
                        " (",
                        w.executedChunks,
                        "/",
                        null !==
                          (x =
                            null === (l = e.depositChannel) || void 0 === l
                              ? void 0
                              : null === (r = l.dcaParams) || void 0 === r
                              ? void 0
                              : r.numberOfChunks) && void 0 !== x
                          ? x
                          : 0,
                        " chunks)",
                      ],
                    }),
                    status: "processing",
                    link: (0, m.Yh)(
                      null === (d = w.lastExecutedChunk) || void 0 === d
                        ? void 0
                        : d.executedBlockIndex
                    ),
                    timestamp:
                      null === (c = w.lastExecutedChunk) || void 0 === c
                        ? void 0
                        : c.executedAt,
                  })
              : v &&
                C &&
                (C.executedAt &&
                  j.push({
                    message: (0, i.jsxs)(i.Fragment, {
                      children: [
                        "Swapped ",
                        (0, i.jsx)(g, {
                          amount: v.originalInputAmount,
                          token: t,
                        }),
                        " for",
                        " ",
                        (0, i.jsx)(g, {
                          amount:
                            null !== (h = v.swappedOutputAmount) && void 0 !== h
                              ? h
                              : "0",
                          token: s,
                        }),
                      ],
                    }),
                    status: "success",
                    link: (0, m.Yh)(C.executedBlockIndex),
                    timestamp: C.executedAt,
                  }),
                C.scheduledAt &&
                  j.push({
                    message: "Swap scheduled",
                    status: "success",
                    link: (0, m.Yh)(C.scheduledBlockIndex),
                    timestamp: C.scheduledAt,
                  })),
            "deposit" in e)
          ) {
            let s = (0, i.jsx)(g, { amount: e.deposit.amount, token: t });
            "RECEIVING" === e.state
              ? j.push({
                  message: (0, i.jsxs)(i.Fragment, {
                    children: ["Receiving ", s],
                  }),
                  status: "processing",
                  link: void 0,
                  timestamp: void 0,
                })
              : (e.deposit.failedAt
                  ? j.push({
                      message: "Deposit failed",
                      status: "error",
                      link: (0, m.Yh)(e.deposit.failedBlockIndex),
                      timestamp: e.deposit.failedAt,
                    })
                  : !e.deposit.witnessedBlockIndex ||
                    (null === (f = e.boost) || void 0 === f
                      ? void 0
                      : f.boostedAt) ||
                    j.push({
                      message: (0, i.jsxs)(i.Fragment, {
                        children: [s, " deposited"],
                      }),
                      status: "success",
                      link: (0, m.Yh)(e.deposit.witnessedBlockIndex),
                      timestamp: e.deposit.witnessedAt,
                    }),
                e.boost &&
                  (e.boost.boostedAt
                    ? j.push({
                        message: (0, i.jsxs)(i.Fragment, {
                          children: [
                            s,
                            " deposit boosted after 1 block confirmation",
                          ],
                        }),
                        status: "success",
                        link: (0, m.Yh)(e.boost.boostedBlockIndex),
                        timestamp: e.boost.boostedAt,
                      })
                    : e.boost.skippedAt &&
                      j.push({
                        message:
                          "Boost attempt failed. Not enough available liquidity",
                        status: "error",
                        link: (0, m.Yh)(e.boost.skippedBlockIndex),
                        timestamp: e.boost.skippedAt,
                      })));
          }
          return (
            "WAITING" === e.state &&
              j.push({
                message: "Waiting for deposit",
                status: "processing",
                link: void 0,
                timestamp: void 0,
              }),
            e.depositChannel &&
              j.push({
                message: "Deposit channel created",
                status: "success",
                link: (0, m.Yh)(e.depositChannel.id, "channels"),
                timestamp: e.depositChannel.createdAt,
              }),
            j
          );
        },
        v = (e) => {
          let { status: t } = e;
          if ("chainflip" !== t.integration || !t.integrationData) return null;
          let { route: s, integrationData: n } = t,
            o = _(n, s.srcToken, s.destToken);
          return (0, i.jsx)(p, {
            label: "Log",
            count: o.length,
            className: "shadow-grayPop1",
            buttonClassName: "data-open:pb-1.5",
            children: o.map((e, t) =>
              (0, a.createElement)(k, { ...e, key: t })
            ),
          });
        };
    },
    56765: (e, t, s) => {
      s.d(t, { z: () => eh, u: () => ef });
      var i = s(31549),
        a = s(44194),
        n = s(10739),
        o = s(22472),
        r = s(70092),
        l = s(86163),
        d = s(17921),
        c = s(51865),
        x = s.n(c),
        p = s(6043),
        u = s(79386),
        h = s(54253),
        m = s(34601),
        f = s(51867),
        j = s(86252),
        k = s(55366),
        g = s(80512),
        y = s(78218),
        _ = s(88097),
        v = s(77567),
        w = s(75733),
        C = s(21449),
        b = s(34114),
        D = s(98800),
        A = s(20319),
        N = s(13798),
        S = s(2543),
        F = s(42451),
        T = s(40444),
        O = s(95539);
      let L = JSON.parse(
        '{"nm":"Main Scene","ddd":0,"h":32,"w":32,"meta":{"g":"@lottiefiles/creator 1.26.0"},"layers":[{"ty":4,"nm":"ic_downloading","sr":1,"st":0,"op":516.7,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[128,128,0]},"s":{"a":0,"k":[10,10]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.4,"y":1},"s":[16.05281253356935,-255],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[16.05281253356935,15.002000219726568],"t":28.67},{"o":{"x":0.333,"y":0},"i":{"x":0.5,"y":1},"s":[16.05281253356935,15.875250027465825],"t":33.33},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[16.052812533569337,27.216672698158895],"t":35.33},{"s":[201.528,645],"t":59.42}]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[5.789,5.798],[5.789,-5.77],[0,0],[0,0],[8.185,0],[0,-8.185],[0,0],[0,0],[5.788,-5.77],[-5.78,-5.789],[0,0],[-3.789,0],[-2.893,2.894],[0,0]],"o":[[-5.788,-5.77],[0,0],[0,0],[0,-8.185],[-8.185,0],[0,0],[0,0],[-5.789,-5.77],[-5.78,5.798],[0,0],[2.894,2.894],[3.79,0],[0,0],[5.789,-5.789]],"v":[[87.656,14.212],[66.71,14.212],[14.814,66.102],[14.814,-101.878],[-0.009,-116.692],[-14.823,-101.878],[-14.823,66.09],[-66.701,14.212],[-87.665,14.212],[-87.665,35.169],[-10.482,112.352],[0,116.693],[10.482,112.352],[87.656,35.169]]}}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.6588,1,0.8353]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[-4.752999999999474,-3.6815143303410878]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[122.72000000000052,125.56548566965893]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":1},{"ty":4,"nm":"Shape Layer 1","sr":1,"st":0,"op":516.7,"ip":0,"hd":true,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[202,210]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[394,394]}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.9569,0.4118,0.6196]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-1,-9]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":2}],"v":"5.7.0","fr":30,"op":65.33,"ip":0,"assets":[]}'
      );
      var B = s(13458),
        U = s(73335),
        E = s(5203),
        I = s(25727),
        W = s(13479);
      let M = (e) => {
          var t, s;
          let { status: n } = e,
            { requiredBlockConfirmations: o } = (0, B.Z)(
              n.route.srcToken.chain
            ),
            { depositViewState: r, setDepositViewState: l } = (0, U.Z)(),
            d = (0, F.Z)(),
            c =
              null !== (t = (0, W.qb)(n)) && void 0 !== t
                ? t
                : n.route.srcAmount;
          return (
            (0, a.useEffect)(() => {
              if (
                ("awaiting-deposit-confirmations" === r &&
                  (0, W.cC)(n) &&
                  l("transition-finished"),
                n.srcConfirmationCount &&
                  o &&
                  !(0, W.jk)(n) &&
                  l("awaiting-deposit-confirmations"),
                "awaiting-deposit-tx" === r)
              ) {
                let s = (0, W.zg)(n);
                if ((!n.depositAddress || !(0, W.U5)(n)) && (0, W.cC)(n))
                  l("transition-finished");
                else if (s || (0, W.pz)(n)) {
                  var e, t;
                  let { route: i } = n;
                  l(s ? "swap-boosted" : "boost-skipped"),
                    d(s ? E.I.DepositBoosted : E.I.InsufficientBoostLiquidity, {
                      props: {
                        assetFrom: ""
                          .concat(i.srcToken.chain.name, ".")
                          .concat(i.srcToken.symbol),
                        assetTo: ""
                          .concat(i.destToken.chain.name, ".")
                          .concat(i.destToken.symbol),
                        assetFromAmount: i.srcAmount.toFixed(),
                        quotedAmount: i.destAmount.toFixed(),
                        ...(s && {
                          boostFee:
                            null === (t = (0, W.O7)(n)) || void 0 === t
                              ? void 0
                              : null ===
                                  (e = t.find((e) => "BOOST" === e.type)) ||
                                void 0 === e
                              ? void 0
                              : e.amount,
                        }),
                      },
                    }),
                    setTimeout(() => {
                      l(
                        s
                          ? "transition-finished"
                          : "awaiting-deposit-confirmations"
                      );
                    }, 4e3);
                }
              }
            }, [n, o]),
            (0, a.useEffect)(() => {
              "waiting_for_src_tx_confirmation" === n.status &&
                d(E.I.ReceivingDepositAmount, {
                  props: {
                    assetFrom: ""
                      .concat(n.route.srcToken.chain.name, ".")
                      .concat(n.route.srcToken.symbol),
                    assetFromAmount: n.route.srcAmount.toFixed(),
                    assetTo: ""
                      .concat(n.route.destToken.chain.name, ".")
                      .concat(n.route.destToken.symbol),
                    quotedAmount: n.route.destAmount.toFixed(),
                    destinationAddress: n.destAddress,
                    integration: n.integration,
                  },
                });
            }, [n.status]),
            (0, i.jsxs)(S.M, {
              mode: "wait",
              children: [
                "awaiting-deposit-tx" === r &&
                  (0, i.jsxs)(
                    p.E.div,
                    {
                      className: "flex flex-row items-center gap-0.5",
                      ...I.LU,
                      children: [
                        (0, i.jsx)(O.Z, {
                          as: "div",
                          animationData: L,
                          autoplay: !0,
                          loop: !0,
                          className: "h-[24px] w-[24px]",
                        }),
                        (0, i.jsxs)("span", {
                          className: "font-aeonikMedium text-24 text-cf-white",
                          children: [
                            "Receiving ",
                            c.toCapped(),
                            " ",
                            n.route.srcToken.symbol,
                          ],
                        }),
                      ],
                    },
                    "awaiting-deposit-tx"
                  ),
                "awaiting-deposit-confirmations" === r &&
                  (0, i.jsx)(
                    p.E.div,
                    {
                      className: "flex flex-row items-center gap-0.5",
                      ...I.LU,
                      children: (0, i.jsxs)("span", {
                        className:
                          "inline-flex items-center font-aeonikMedium text-24 text-cf-white",
                        children: [
                          (0, i.jsx)(T.ZP, {
                            value: Math.min(
                              null !== (s = n.srcConfirmationCount) &&
                                void 0 !== s
                                ? s
                                : 0,
                              null != o ? o : 0
                            ).toString(),
                          }),
                          (0, i.jsxs)("span", {
                            className: "text-cf-light-2",
                            children: ["/", o],
                          }),
                          "\xa0 Block confirmations",
                        ],
                      }),
                    },
                    "awaiting-deposit-confirmations"
                  ),
                "swap-boosted" === r &&
                  (0, i.jsxs)(
                    p.E.div,
                    {
                      className: "flex flex-row items-center gap-0.5",
                      "data-testid": "deposit-boosted",
                      ...I.LU,
                      children: [
                        (0, i.jsx)(C.jrq, { className: "text-cf-pink-1" }),
                        (0, i.jsx)("span", {
                          className: "font-aeonikMedium text-24 text-cf-white",
                          children: "Deposit boosted!",
                        }),
                      ],
                    },
                    "swap-boosted"
                  ),
                "boost-skipped" === r &&
                  (0, i.jsxs)(
                    p.E.div,
                    {
                      className: "flex flex-row items-center gap-0.5",
                      "data-testid": "no-boost-liquidity",
                      ...I.LU,
                      children: [
                        (0, i.jsx)(C.jrq, { className: "text-cf-light-2" }),
                        (0, i.jsx)("span", {
                          className: "font-aeonikMedium text-24 text-cf-white",
                          children: "Not enough Boost liquidity",
                        }),
                      ],
                    },
                    "boost-skipped"
                  ),
              ],
            })
          );
        },
        Z = () =>
          (0, i.jsxs)("svg", {
            width: "56",
            height: "31",
            viewBox: "0 0 56 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("line", {
                x1: "19.5",
                y1: "14.6592",
                x2: "36.5",
                y2: "14.6592",
                stroke: "#424242",
                strokeLinecap: "round",
                strokeDasharray: "2 2",
              }),
              (0, i.jsxs)("g", {
                filter: "url(#filter0_d_65_21210)",
                children: [
                  (0, i.jsx)("circle", {
                    cx: "39.5",
                    cy: "14.6592",
                    r: "3.5",
                    fill: "#424242",
                  }),
                  (0, i.jsx)("circle", {
                    cx: "39.5",
                    cy: "14.6592",
                    r: "3.75",
                    stroke: "#5F5F5F",
                    strokeWidth: "0.5",
                  }),
                ],
              }),
              (0, i.jsxs)("g", {
                filter: "url(#filter1_d_65_21210)",
                children: [
                  (0, i.jsx)("circle", {
                    cx: "16.5752",
                    cy: "14.6592",
                    r: "3.5",
                    fill: "#424242",
                  }),
                  (0, i.jsx)("circle", {
                    cx: "16.5752",
                    cy: "14.6592",
                    r: "3.75",
                    stroke: "#5F5F5F",
                    strokeWidth: "0.5",
                  }),
                ],
              }),
              (0, i.jsxs)("defs", {
                children: [
                  (0, i.jsxs)("filter", {
                    id: "filter0_d_65_21210",
                    x: "25.5",
                    y: "0.65918",
                    width: "30",
                    height: "30",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                      (0, i.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, i.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha",
                      }),
                      (0, i.jsx)("feOffset", { dx: "1", dy: "1" }),
                      (0, i.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                      (0, i.jsx)("feComposite", {
                        in2: "hardAlpha",
                        operator: "out",
                      }),
                      (0, i.jsx)("feColorMatrix", {
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.48 0",
                      }),
                      (0, i.jsx)("feBlend", {
                        mode: "normal",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_65_21210",
                      }),
                      (0, i.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_65_21210",
                        result: "shape",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("filter", {
                    id: "filter1_d_65_21210",
                    x: "0.575195",
                    y: "0.65918",
                    width: "30",
                    height: "30",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                      (0, i.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, i.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha",
                      }),
                      (0, i.jsx)("feOffset", { dx: "-1", dy: "1" }),
                      (0, i.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                      (0, i.jsx)("feComposite", {
                        in2: "hardAlpha",
                        operator: "out",
                      }),
                      (0, i.jsx)("feColorMatrix", {
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.48 0",
                      }),
                      (0, i.jsx)("feBlend", {
                        mode: "normal",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_65_21210",
                      }),
                      (0, i.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_65_21210",
                        result: "shape",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      var P = s(54405);
      let G = {
          active: {
            border:
              "[background:linear-gradient(90deg,#0C0F0E_0%,#5AF6AB_100%)] border-r-[#5AF6AB]",
            progress:
              "[background:linear-gradient(270deg,#46DA93_0%,rgba(70,218,147,0)_100%)] border-r-[#5AF6AB] border-l-[#0C0F0E]",
            flagBackground:
              "[background:linear-gradient(270deg,#46DA93_0%,rgba(70,218,147,0)_100%)]",
            flag: "[background:linear-gradient(180deg,#46DA93_0%,#042113_101.35%)]",
          },
          inactive: {
            border:
              "[background:linear-gradient(90deg,#0C0C0B_0%,#A8E5FF_100%)] border-r-[#A8E5FF]",
            progress:
              "[background:linear-gradient(270deg,#A8E5FF_0%,rgba(247,147,26,0)_100%)] border-r-[#A8E5FF] border-l-[#0C0C0B]",
            flagBackground:
              "[background:linear-gradient(270deg,#A8E5FF_0%,rgba(247,147,26,0)_100%)]",
            flag: "[background:linear-gradient(180deg,#A8E5FF_0%,rgba(247,147,26,0)_100%)]",
          },
        },
        R = (e) => {
          let { status: t, progressPercent: s } = e,
            a = G[t];
          return (0, i.jsxs)("div", {
            className: "relative h-[25px] w-full",
            children: [
              (0, i.jsx)("div", {
                className:
                  "absolute left-0 top-0 z-[100] h-[7px] w-full rounded-sm border border-cf-gray-3-5 bg-cf-gray-3-5",
              }),
              0 !== s &&
                (0, i.jsxs)(p.E.div, {
                  initial: { width: 0 },
                  animate: { width: "".concat(s, "%") },
                  transition: {
                    type: "spring",
                    mass: 1,
                    stiffness: 80,
                    damping: 20,
                  },
                  className:
                    "absolute left-0 top-0 z-[101] flex w-full flex-col",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex h-[7px] flex-col",
                      children: [
                        (0, i.jsx)("div", {
                          className: x()("h-px w-full border-r", a.border),
                        }),
                        (0, i.jsx)("div", {
                          className: x()("h-[5px] w-full border-x", a.progress),
                        }),
                        (0, i.jsx)("div", {
                          className: x()("h-px w-full border-r", a.border),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex w-full flex-row",
                      children: [
                        (0, i.jsx)("div", {
                          className: x()(
                            "h-[19px] w-full opacity-20",
                            a.flagBackground
                          ),
                        }),
                        (0, i.jsx)("div", {
                          className: x()("-ml-px h-[19px] w-px", a.flag),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        };
      var q = s(13425);
      let Y = (e, t) => {
          if (
            "chainflip" !== e.integration ||
            !e.integrationData ||
            !e.integrationData.depositChannel
          )
            return;
          let {
              depositChannel: { dcaParams: s },
            } = e.integrationData,
            { dca: i } = t;
          if (!i || !s) return;
          let a =
              i.currentChunk && 0 !== i.currentChunk.retryCount
                ? "inactive"
                : "active",
            n = s.numberOfChunks,
            o = (i.executedChunks / n) * 100;
          return {
            executedChunks: i.executedChunks,
            percent: Math.max(o, 1),
            chunkStatus: a,
            totalChunks: n,
          };
        },
        V = (e) => {
          let { info: t, swap: s, srcToken: a, destToken: n } = e;
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-y-3",
            children: [
              (0, i.jsx)(R, {
                status: t.chunkStatus,
                progressPercent: t.percent,
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex items-center justify-between font-aeonikMedium text-20",
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex items-center gap-x-1",
                    children: [
                      (0, i.jsx)(T.ZP, {
                        className: "text-cf-light-4",
                        value: D.dt
                          .fromAsset(s.remainingInputAmount, a.chainflipId)
                          .toCapped(),
                      }),
                      (0, i.jsx)("span", { children: a.symbol }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex items-center gap-x-1",
                    children: [
                      (0, i.jsx)(T.ZP, {
                        className: "text-cf-light-4",
                        value: D.dt
                          .fromAsset(s.swappedOutputAmount, n.chainflipId)
                          .toCapped(),
                      }),
                      (0, i.jsx)("span", { children: n.symbol }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        z = (e) => {
          var t, s, a, n, o;
          let { status: r } = e,
            l = (0, W.jw)(r),
            d = l && Y(r, l),
            c =
              (null !==
                (n =
                  null == l
                    ? void 0
                    : null === (t = l.regular) || void 0 === t
                    ? void 0
                    : t.retryCount) && void 0 !== n
                ? n
                : 0) > 0 || (null == d ? void 0 : d.chunkStatus) === "inactive",
            { srcToken: x, destToken: p } = r.route;
          if (!l || !(0, P.jJ)(x) || !(0, P.jJ)(p)) return null;
          let h =
            c &&
            "chainflip" === r.integration &&
            (null === (a = r.integrationData) || void 0 === a
              ? void 0
              : null === (s = a.depositChannel) || void 0 === s
              ? void 0
              : s.fillOrKillParams) &&
            (0, D.Nj)(
              (0, D.MS)(
                r.integrationData.depositChannel.fillOrKillParams
                  .retryDurationBlocks,
                null !== (o = (0, W.fB)(r)) && void 0 !== o ? o : 0
              ),
              "less than a minute"
            );
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-y-2",
            "data-testid": d ? "swapping-dca" : "swapping-regular",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex items-center justify-between font-aeonikMedium",
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex items-center gap-1 text-20 text-cf-white",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex items-center gap-x-2",
                        children: [
                          !d && (0, i.jsx)(q.Z, { className: "!h-4 !w-4" }),
                          (0, i.jsx)("span", { children: "Swapping" }),
                        ],
                      }),
                      (0, i.jsx)("span", { children: r.route.srcToken.symbol }),
                      (0, i.jsx)(C.e0j, { className: "text-cf-light-2" }),
                      (0, i.jsx)("span", {
                        children: r.route.destToken.symbol,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "flex items-center gap-1 text-12 text-cf-light-2",
                    children:
                      d &&
                      (0, i.jsxs)("span", {
                        className: "inline-flex items-center",
                        children: [
                          "Chunks \xa0",
                          (0, i.jsx)(T.ZP, {
                            className: "text-cf-light-3",
                            value: d.executedChunks,
                          }),
                          "/",
                          d.totalChunks,
                        ],
                      }),
                  }),
                ],
              }),
              d &&
                (0, i.jsx)(V, { info: d, srcToken: x, destToken: p, swap: l }),
              h &&
                (0, i.jsxs)(u.UW, {
                  type: "info",
                  children: [
                    "Chainflip will attempt to meet your minimum payout for",
                    " ",
                    (0, i.jsx)("span", { className: "font-bold", children: h }),
                    " before initiating a refund.",
                  ],
                }),
            ],
          });
        };
      var K = s(19038);
      let $ = (e) =>
          (0, i.jsxs)("svg", {
            width: "300",
            height: "206",
            viewBox: "0 0 300 206",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("mask", {
                id: "mask0_1679_116404",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "-29",
                width: "309",
                height: "242",
                children: (0, i.jsx)("rect", {
                  y: "-28.5",
                  width: "309",
                  height: "241.5",
                  fill: "url(#paint0_linear_1679_116404)",
                }),
              }),
              (0, i.jsxs)("g", {
                mask: "url(#mask0_1679_116404)",
                children: [
                  (0, i.jsx)("mask", {
                    id: "mask1_1679_116404",
                    maskUnits: "userSpaceOnUse",
                    x: "-3",
                    y: "-91",
                    width: "311",
                    height: "305",
                    children: (0, i.jsx)("rect", {
                      x: "-2.10645",
                      y: "-90.6709",
                      width: "309.659",
                      height: "304.445",
                      fill: "url(#paint1_radial_1679_116404)",
                    }),
                  }),
                  (0, i.jsxs)("g", {
                    mask: "url(#mask1_1679_116404)",
                    children: [
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9879",
                        r: "150.137",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9894",
                        r: "136.583",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9852",
                        r: "123.029",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9868",
                        r: "109.475",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9879",
                        r: "95.9211",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9899",
                        r: "82.3671",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9889",
                        r: "67.7704",
                        fill: "#151515",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9847",
                        r: "54.2163",
                        fill: "#191919",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9863",
                        r: "40.6622",
                        fill: "url(#paint2_linear_1679_116404)",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        opacity: "0.5",
                        cx: "148.551",
                        cy: "59.9904",
                        r: "28.1508",
                        fill: "url(#paint3_linear_1679_116404)",
                        stroke: "#424242",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("path", {
                        opacity: "0.8",
                        d: "M171.489 59.9863C171.489 72.6544 161.22 82.924 148.552 82.924C135.884 82.924 125.614 72.6544 125.614 59.9863C125.614 47.3182 135.884 37.0487 148.552 37.0487C161.22 37.0487 171.489 47.3182 171.489 59.9863Z",
                        fill: "url(#paint4_linear_1679_116404)",
                        stroke: "#424242",
                        strokeWidth: "1.04262",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("path", {
                d: "M139.739 59.4999C139.739 54.6617 143.661 50.7395 148.5 50.7395C153.338 50.7395 157.26 54.6617 157.26 59.4999C157.26 64.3382 153.338 68.2603 148.5 68.2603C143.661 68.2603 139.739 64.3382 139.739 59.4999Z",
                stroke: "#F64848",
                strokeWidth: "1.8125",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M145.781 56.7812L151.219 62.2188",
                stroke: "#F64848",
                strokeWidth: "1.8125",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M151.219 56.7812L145.781 62.2188",
                stroke: "#F64848",
                strokeWidth: "1.8125",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsxs)("defs", {
                children: [
                  (0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_1679_116404",
                    x1: "154.5",
                    y1: "-13.1995",
                    x2: "154.5",
                    y2: "168.753",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", {
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.3",
                        stopColor: "#D9D9D9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.49",
                        stopColor: "#D9D9D9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.825897",
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("radialGradient", {
                    id: "paint1_radial_1679_116404",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(152.723 61.5518) rotate(90) scale(152.223 154.829)",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#D9D9D9" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint2_linear_1679_116404",
                    x1: "148.552",
                    y1: "18.8027",
                    x2: "148.552",
                    y2: "101.17",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#1F1F1F" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#272525",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint3_linear_1679_116404",
                    x1: "177.223",
                    y1: "31.3184",
                    x2: "119.879",
                    y2: "88.6625",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#2C2C2C" }),
                      (0, i.jsx)("stop", { offset: "1", stopColor: "#1B1B1B" }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint4_linear_1679_116404",
                    x1: "125.093",
                    y1: "36.5273",
                    x2: "172.011",
                    y2: "83.4453",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#252525" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#393939",
                        stopOpacity: "0.67",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        H = (e) =>
          (0, i.jsxs)("svg", {
            width: "300",
            height: "182",
            viewBox: "0 0 300 182",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("mask", {
                id: "mask0_1681_118035",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "-29",
                width: "309",
                height: "242",
                children: (0, i.jsx)("rect", {
                  y: "-28.5",
                  width: "309",
                  height: "241.5",
                  fill: "url(#paint0_linear_1681_118035)",
                }),
              }),
              (0, i.jsxs)("g", {
                mask: "url(#mask0_1681_118035)",
                children: [
                  (0, i.jsx)("mask", {
                    id: "mask1_1681_118035",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: "-3",
                    y: "-91",
                    width: "311",
                    height: "305",
                    children: (0, i.jsx)("rect", {
                      x: "-2.10645",
                      y: "-90.6709",
                      width: "309.659",
                      height: "304.445",
                      fill: "url(#paint1_radial_1681_118035)",
                    }),
                  }),
                  (0, i.jsxs)("g", {
                    mask: "url(#mask1_1681_118035)",
                    children: [
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9879",
                        r: "150.137",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9894",
                        r: "136.583",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9852",
                        r: "123.029",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9868",
                        r: "109.475",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9879",
                        r: "95.9211",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9899",
                        r: "82.3671",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9889",
                        r: "67.7704",
                        fill: "#151515",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9847",
                        r: "54.2163",
                        fill: "#191919",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9863",
                        r: "40.6622",
                        fill: "url(#paint2_linear_1681_118035)",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        opacity: "0.5",
                        cx: "148.551",
                        cy: "59.9904",
                        r: "28.1508",
                        fill: "url(#paint3_linear_1681_118035)",
                        stroke: "#424242",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("path", {
                        opacity: "0.8",
                        d: "M171.489 59.9863C171.489 72.6544 161.22 82.924 148.552 82.924C135.884 82.924 125.614 72.6544 125.614 59.9863C125.614 47.3182 135.884 37.0487 148.552 37.0487C161.22 37.0487 171.489 47.3182 171.489 59.9863Z",
                        fill: "url(#paint4_linear_1681_118035)",
                        stroke: "#424242",
                        strokeWidth: "1.04262",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("path", {
                d: "M149.709 67.0522C151.202 67.0522 152.662 66.6092 153.904 65.7794C155.146 64.9496 156.114 63.7701 156.686 62.3901C157.257 61.0102 157.407 59.4917 157.116 58.0267C156.824 56.5618 156.105 55.2161 155.049 54.16C153.993 53.1038 152.647 52.3845 151.182 52.0931C149.717 51.8017 148.199 51.9513 146.819 52.5229C145.439 53.0945 144.259 54.0624 143.429 55.3044C142.599 56.5463 142.157 58.0064 142.157 59.5001V62.382M144.271 61.3126L142.459 63.4272L140.042 61.3126",
                stroke: "#CDCDCD",
                strokeWidth: "1.8125",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M152.127 57.0825H148.502C147.835 57.0825 147.294 57.6235 147.294 58.2909C147.294 58.9582 147.835 59.4992 148.502 59.4992H150.919C151.586 59.4992 152.127 60.0402 152.127 60.7075C152.127 61.3748 151.586 61.9159 150.919 61.9159H147.294",
                stroke: "#CDCDCD",
                strokeWidth: "1.8125",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M149.711 64.3324L149.711 54.6658",
                stroke: "#CDCDCD",
                strokeWidth: "1.20833",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsxs)("defs", {
                children: [
                  (0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_1681_118035",
                    x1: "154.5",
                    y1: "-13.1995",
                    x2: "154.5",
                    y2: "168.753",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", {
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.3",
                        stopColor: "#D9D9D9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.49",
                        stopColor: "#D9D9D9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.825897",
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("radialGradient", {
                    id: "paint1_radial_1681_118035",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(152.723 61.5518) rotate(90) scale(152.223 154.829)",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#D9D9D9" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint2_linear_1681_118035",
                    x1: "148.552",
                    y1: "18.8027",
                    x2: "148.552",
                    y2: "101.17",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#1F1F1F" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#272525",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint3_linear_1681_118035",
                    x1: "177.223",
                    y1: "31.3184",
                    x2: "119.879",
                    y2: "88.6625",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#2C2C2C" }),
                      (0, i.jsx)("stop", { offset: "1", stopColor: "#1B1B1B" }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint4_linear_1681_118035",
                    x1: "125.093",
                    y1: "36.5273",
                    x2: "172.011",
                    y2: "83.4453",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#252525" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#393939",
                        stopOpacity: "0.67",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        Q = (e) =>
          (0, i.jsxs)("svg", {
            width: "300",
            height: "182",
            viewBox: "0 0 300 182",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("mask", {
                id: "mask0_1679_116429",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "-29",
                width: "309",
                height: "242",
                children: (0, i.jsx)("rect", {
                  y: "-28.5",
                  width: "309",
                  height: "241.5",
                  fill: "url(#paint0_linear_1679_116429)",
                }),
              }),
              (0, i.jsxs)("g", {
                mask: "url(#mask0_1679_116429)",
                children: [
                  (0, i.jsx)("mask", {
                    id: "mask1_1679_116429",
                    maskUnits: "userSpaceOnUse",
                    x: "-3",
                    y: "-91",
                    width: "311",
                    height: "305",
                    children: (0, i.jsx)("rect", {
                      x: "-2.10645",
                      y: "-90.6709",
                      width: "309.659",
                      height: "304.445",
                      fill: "url(#paint1_radial_1679_116429)",
                    }),
                  }),
                  (0, i.jsxs)("g", {
                    mask: "url(#mask1_1679_116429)",
                    children: [
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9879",
                        r: "150.137",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9894",
                        r: "136.583",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9852",
                        r: "123.029",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9868",
                        r: "109.475",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9879",
                        r: "95.9211",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9899",
                        r: "82.3671",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9889",
                        r: "67.7704",
                        fill: "#151515",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9847",
                        r: "54.2163",
                        fill: "#191919",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9863",
                        r: "40.6622",
                        fill: "url(#paint2_linear_1679_116429)",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        opacity: "0.5",
                        cx: "148.551",
                        cy: "59.9904",
                        r: "28.1508",
                        fill: "url(#paint3_linear_1679_116429)",
                        stroke: "#424242",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("path", {
                        opacity: "0.8",
                        d: "M171.489 59.9863C171.489 72.6544 161.22 82.924 148.552 82.924C135.884 82.924 125.614 72.6544 125.614 59.9863C125.614 47.3182 135.884 37.0487 148.552 37.0487C161.22 37.0487 171.489 47.3182 171.489 59.9863Z",
                        fill: "url(#paint4_linear_1679_116429)",
                        stroke: "#424242",
                        strokeWidth: "1.04262",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("g", {
                clipPath: "url(#clip0_1679_116429)",
                children: [
                  (0, i.jsx)("path", {
                    d: "M138.833 57.3891L157.417 51.1946L151.222 69.7782L148.018 60.5932L138.833 57.3891Z",
                    stroke: "#CDCDCD",
                    strokeWidth: "1.8125",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, i.jsx)("path", {
                    d: "M148.232 60.3797L150.582 58.03",
                    stroke: "#CDCDCD",
                    strokeWidth: "1.8125",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
              (0, i.jsxs)("defs", {
                children: [
                  (0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_1679_116429",
                    x1: "154.5",
                    y1: "-13.1995",
                    x2: "154.5",
                    y2: "168.753",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", {
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.3",
                        stopColor: "#D9D9D9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.49",
                        stopColor: "#D9D9D9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.825897",
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("radialGradient", {
                    id: "paint1_radial_1679_116429",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(152.723 61.5518) rotate(90) scale(152.223 154.829)",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#D9D9D9" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint2_linear_1679_116429",
                    x1: "148.552",
                    y1: "18.8027",
                    x2: "148.552",
                    y2: "101.17",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#1F1F1F" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#272525",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint3_linear_1679_116429",
                    x1: "177.223",
                    y1: "31.3184",
                    x2: "119.878",
                    y2: "88.6625",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#2C2C2C" }),
                      (0, i.jsx)("stop", { offset: "1", stopColor: "#1B1B1B" }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint4_linear_1679_116429",
                    x1: "125.093",
                    y1: "36.5273",
                    x2: "172.011",
                    y2: "83.4453",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#252525" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#393939",
                        stopOpacity: "0.67",
                      }),
                    ],
                  }),
                  (0, i.jsx)("clipPath", {
                    id: "clip0_1679_116429",
                    children: (0, i.jsx)("rect", {
                      width: "29",
                      height: "29",
                      fill: "white",
                      transform: "translate(134 45)",
                    }),
                  }),
                ],
              }),
            ],
          }),
        J = (e) =>
          (0, i.jsxs)("svg", {
            width: "300",
            height: "182",
            viewBox: "0 0 300 182",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("mask", {
                id: "mask0_475_146034",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "-29",
                width: "309",
                height: "242",
                children: (0, i.jsx)("rect", {
                  y: "-28.5",
                  width: "309",
                  height: "241.5",
                  fill: "url(#paint0_linear_475_146034)",
                }),
              }),
              (0, i.jsxs)("g", {
                mask: "url(#mask0_475_146034)",
                children: [
                  (0, i.jsx)("mask", {
                    id: "mask1_475_146034",
                    maskUnits: "userSpaceOnUse",
                    x: "-3",
                    y: "-91",
                    width: "311",
                    height: "305",
                    children: (0, i.jsx)("rect", {
                      x: "-2.10645",
                      y: "-90.6709",
                      width: "309.659",
                      height: "304.445",
                      fill: "url(#paint1_radial_475_146034)",
                    }),
                  }),
                  (0, i.jsxs)("g", {
                    mask: "url(#mask1_475_146034)",
                    children: [
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9879",
                        r: "150.137",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9894",
                        r: "136.583",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9852",
                        r: "123.029",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9868",
                        r: "109.475",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9879",
                        r: "95.9211",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9899",
                        r: "82.3671",
                        fill: "#161616",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.551",
                        cy: "59.9889",
                        r: "67.7704",
                        fill: "#151515",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9847",
                        r: "54.2163",
                        fill: "#191919",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        cx: "148.552",
                        cy: "59.9863",
                        r: "40.6622",
                        fill: "url(#paint2_linear_475_146034)",
                        stroke: "#252525",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("circle", {
                        opacity: "0.5",
                        cx: "148.551",
                        cy: "59.9904",
                        r: "28.1508",
                        fill: "url(#paint3_linear_475_146034)",
                        stroke: "#424242",
                        strokeWidth: "1.04262",
                      }),
                      (0, i.jsx)("path", {
                        opacity: "0.8",
                        d: "M171.489 59.9863C171.489 72.6544 161.22 82.924 148.552 82.924C135.884 82.924 125.614 72.6544 125.614 59.9863C125.614 47.3182 135.884 37.0487 148.552 37.0487C161.22 37.0487 171.489 47.3182 171.489 59.9863Z",
                        fill: "url(#paint4_linear_475_146034)",
                        stroke: "#424242",
                        strokeWidth: "1.04262",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("path", {
                d: "M148.82 51.7536C144.376 51.7536 140.774 55.3558 140.774 59.7993C140.774 64.2429 144.376 67.845 148.82 67.845C153.263 67.845 156.866 64.2429 156.866 59.7993C156.866 55.3558 153.263 51.7536 148.82 51.7536ZM139.252 59.7993C139.252 54.5152 143.536 50.2315 148.82 50.2315C154.104 50.2315 158.388 54.5152 158.388 59.7993C158.388 65.0835 154.104 69.3671 148.82 69.3671C143.536 69.3671 139.252 65.0835 139.252 59.7993Z",
                fill: "#46DA93",
                stroke: "url(#paint5_linear_475_146034)",
                strokeWidth: "0.3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M149.427 62.3006L149.427 62.3006C149.427 62.3007 149.427 62.3009 149.427 62.301C148.631 63.6873 146.604 63.6039 145.924 62.1566L145.924 62.1565L145.924 62.1564L145.924 62.1563L145.398 61.0336C145.219 60.6531 145.383 60.1999 145.763 60.0214C146.144 59.8429 146.597 60.0066 146.776 60.3871L147.302 61.51L147.302 61.5101C147.302 61.5101 147.302 61.5102 147.302 61.5102C147.459 61.8424 147.924 61.8615 148.107 61.5431L148.107 61.543L148.107 61.5429L148.107 61.5428L150.893 56.6875C151.102 56.3229 151.567 56.1969 151.932 56.4061C152.296 56.6153 152.422 57.0804 152.213 57.445L149.427 62.3006Z",
                fill: "#46DA93",
                stroke: "url(#paint6_linear_475_146034)",
                strokeWidth: "0.3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsxs)("defs", {
                children: [
                  (0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_475_146034",
                    x1: "154.5",
                    y1: "-13.1995",
                    x2: "154.5",
                    y2: "168.753",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", {
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.3",
                        stopColor: "#D9D9D9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.49",
                        stopColor: "#D9D9D9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "0.825897",
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("radialGradient", {
                    id: "paint1_radial_475_146034",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform:
                      "translate(152.723 61.5518) rotate(90) scale(152.223 154.829)",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#D9D9D9" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#D9D9D9",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint2_linear_475_146034",
                    x1: "148.552",
                    y1: "18.8027",
                    x2: "148.552",
                    y2: "101.17",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#1F1F1F" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#272525",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint3_linear_475_146034",
                    x1: "177.223",
                    y1: "31.3184",
                    x2: "119.878",
                    y2: "88.6625",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#2C2C2C" }),
                      (0, i.jsx)("stop", { offset: "1", stopColor: "#1B1B1B" }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint4_linear_475_146034",
                    x1: "125.093",
                    y1: "36.5273",
                    x2: "172.011",
                    y2: "83.4453",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#252525" }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#393939",
                        stopOpacity: "0.67",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint5_linear_475_146034",
                    x1: "148.82",
                    y1: "50.0815",
                    x2: "148.82",
                    y2: "69.5171",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#8EF8C5" }),
                      (0, i.jsx)("stop", { offset: "1", stopColor: "#6EC89D" }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "paint6_linear_475_146034",
                    x1: "148.82",
                    y1: "56.155",
                    x2: "148.82",
                    y2: "63.4431",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", { stopColor: "#8EF8C5" }),
                      (0, i.jsx)("stop", { offset: "1", stopColor: "#6EC89D" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        X = (e) => {
          let { token: t, amount: s, side: a } = e;
          return (0, i.jsxs)("div", {
            className: x()(
              "flex w-full flex-col items-center justify-center gap-y-1.5 rounded-md border border-cf-gray-5 p-2",
              "shadow-[0px_0px_0px_2px_#141414,0px_0px_14px_0px_rgba(0,0,0,0.32),3px_3px_18px_0px_rgba(0,0,0,0.16)_inset]",
              "[background:linear-gradient(180deg,rgba(255,255,255,0.06)_-19.26%,rgba(255,255,255,0)_60.89%),#252525]"
            ),
            children: [
              (0, i.jsx)("span", {
                className: "font-aeonikBold text-12 text-cf-light-2",
                children: "deposit" === a ? "Deposit" : "Receive",
              }),
              (0, i.jsx)(u.eB, { token: t }),
              (0, i.jsxs)("div", {
                className:
                  "flex items-center justify-between gap-x-2 font-aeonikMedium text-14 text-white",
                children: [
                  s.toCapped(),
                  " ",
                  t.symbol,
                  "deposit" === a &&
                    (0, i.jsx)(u.qi, { textToCopy: s.toFixed() }),
                ],
              }),
              (0, i.jsx)("span", {
                className: "text-13 text-cf-light-2",
                children: (0, i.jsx)(K.Q, { token: t, tokenAmount: s }),
              }),
            ],
          });
        },
        ee = (e) => {
          let { status: t } = e;
          return (0, i.jsxs)(
            "div",
            {
              className: "flex flex-row",
              children: [
                (0, i.jsx)(
                  X,
                  {
                    side: "deposit",
                    token: t.route.srcToken,
                    amount: t.route.srcAmount,
                  },
                  "deposit"
                ),
                (0, i.jsx)("div", {
                  className: "z-10 mx-[-17px] self-center",
                  children: (0, i.jsx)(Z, {}),
                }),
                (0, i.jsx)(
                  X,
                  {
                    side: "receive",
                    token: t.route.destToken,
                    amount: t.route.destAmount,
                  },
                  "receive"
                ),
              ],
            },
            "start-swap-status"
          );
        },
        et = (e) => {
          let t,
            s,
            n,
            { status: o } = e,
            r = (0, F.Z)(),
            l = (0, W.O7)(o),
            d = (0, W.Or)(o),
            c = (0, W.j)(o),
            x = c && new D.dt(c.amount, o.route.srcToken.decimals);
          (0, a.useEffect)(() => {
            let e = {
              assetFrom: ""
                .concat(o.route.srcToken.chain.name, ".")
                .concat(o.route.srcToken.symbol),
              assetFromAmount: o.route.srcAmount.toFixed(),
              assetTo: ""
                .concat(o.route.destToken.chain.name, ".")
                .concat(o.route.destToken.symbol),
              assetToAmount: o.route.destAmount.toFixed(),
              rate: o.route.destAmount.ratio(o.route.srcAmount).toFixed(),
              destinationAddress: o.destAddress,
              integration: o.integration,
            };
            if ("completed" !== o.status)
              r(E.I.SendingFunds, { props: { ...e } });
            else {
              var t;
              r(E.I.SwapComplete, {
                props: {
                  ...e,
                  boostFee:
                    "chainflip" === o.integration
                      ? null == l
                        ? void 0
                        : null === (t = l.find((e) => "BOOST" === e.type)) ||
                          void 0 === t
                        ? void 0
                        : t.amount
                      : void 0,
                },
              });
            }
          }, [o.status]);
          let p = Q;
          return (
            c && d
              ? ((s = "Partial refund initiated"),
                (t = "partial-refund-initiated-card"),
                (n = (0, i.jsxs)("span", {
                  className: "text-14",
                  children: [
                    "Chainflip couldn't meet your minimum payout rate. Your remaining",
                    " ",
                    (0, i.jsxs)("span", {
                      className: "font-aeonikBold",
                      children: [
                        null == x ? void 0 : x.toCapped(),
                        " ",
                        o.route.srcToken.symbol,
                      ],
                    }),
                    " ",
                    "deposit will be refunded",
                  ],
                })))
              : c
              ? ((p = H),
                (s = "Refund initiated"),
                (t = "refund-initiated-card"),
                (n = (0, i.jsxs)("span", {
                  className: "text-14",
                  children: [
                    "Chainflip couldn't meet your minimum payout rate. Your",
                    " ",
                    (0, i.jsxs)("span", {
                      className: "font-aeonikBold",
                      children: [
                        null == x ? void 0 : x.toCapped(),
                        " ",
                        o.route.srcToken.symbol,
                      ],
                    }),
                    " ",
                    "deposit will be refunded",
                  ],
                })))
              : ((s = "Sending funds"), (t = "broadcast-requested-card")),
            "completed" === o.status &&
              ((p = J),
              (s = c ? "Refund complete" : "Swap complete"),
              (t = c ? "refund-completed-card" : "swap-completed-card"),
              c &&
                d &&
                ((s = "Partial refund complete"),
                (t = "partial-refund-completed-card"))),
            (0, i.jsxs)("div", {
              className:
                "flex flex-col items-center p-3 pt-0 font-aeonikMedium",
              children: [
                (0, i.jsx)("div", {
                  className: "flex h-[110px] justify-center",
                  children: (0, i.jsx)(p, {
                    className: "pointer-events-none absolute",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "text-24 text-cf-white",
                  children: (0, i.jsx)("span", {
                    "data-testid": t,
                    children: s,
                  }),
                }),
                (null == x ? void 0 : x.gt(0)) &&
                  (0, i.jsxs)("div", {
                    className: "text-16",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "inline-flex flex-row items-center gap-1 text-cf-light-3",
                        children: [
                          (0, i.jsx)("div", { children: x.toCapped() }),
                          (0, i.jsx)(u.eB, {
                            token: o.route.srcToken,
                            size: "xsmall",
                            displayChainLogo: !1,
                          }),
                          (0, i.jsx)("div", {
                            children: o.route.srcToken.symbol,
                          }),
                        ],
                      }),
                      (0, i.jsxs)("span", {
                        className: "text-cf-light-2",
                        children: [
                          " ",
                          "(",
                          (0, i.jsx)(K.Q, {
                            token: o.route.srcToken,
                            tokenAmount: x,
                          }),
                          ")",
                        ],
                      }),
                    ],
                  }),
                o.route.destAmount.gt(0) &&
                  (0, i.jsxs)("div", {
                    className: "text-16",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "inline-flex flex-row items-center gap-1 text-cf-light-3",
                        children: [
                          (0, i.jsx)("div", {
                            children: o.route.destAmount.toCapped(),
                          }),
                          (0, i.jsx)(u.eB, {
                            token: o.route.destToken,
                            size: "xsmall",
                            displayChainLogo: !1,
                          }),
                          (0, i.jsx)("div", {
                            children: o.route.destToken.symbol,
                          }),
                        ],
                      }),
                      (0, i.jsxs)("span", {
                        className: "text-cf-light-2",
                        children: [
                          " ",
                          "(",
                          (0, i.jsx)(K.Q, {
                            token: o.route.destToken,
                            tokenAmount: o.route.destAmount,
                          }),
                          ")",
                        ],
                      }),
                    ],
                  }),
                n &&
                  "waiting_for_dest_tx" === o.status &&
                  (0, i.jsx)("div", {
                    className: "mt-[16px]",
                    children: (0, i.jsx)(u.UW, {
                      type: "warning",
                      children: n,
                    }),
                  }),
              ],
            })
          );
        },
        es = (e) => {
          let { status: t, depositViewState: s } = e;
          return "waiting_for_src_tx_confirmation" === t.status
            ? (0, i.jsx)(
                p.E.div,
                { ...I.LU, children: (0, i.jsx)(M, { status: t }) },
                "receiving-status"
              )
            : (0, i.jsxs)(S.M, {
                mode: "wait",
                children: [
                  "waiting_for_dest_tx" === t.status &&
                    (0, i.jsx)(
                      p.E.div,
                      {
                        ...I.LU,
                        children: (0, i.jsx)(S.M, {
                          mode: "wait",
                          children:
                            "transition-finished" !== s
                              ? (0, i.jsx)(
                                  p.E.div,
                                  {
                                    ...I.LU,
                                    children: (0, i.jsx)(M, { status: t }),
                                  },
                                  "receiving-status"
                                )
                              : (0, W.iF)(t)
                              ? (0, i.jsx)(
                                  p.E.div,
                                  {
                                    ...I.LU,
                                    children: (0, i.jsx)(et, { status: t }),
                                  },
                                  "broadcast-status"
                                )
                              : (0, i.jsx)(
                                  p.E.div,
                                  {
                                    ...I.LU,
                                    children: (0, i.jsx)(z, { status: t }),
                                  },
                                  "swapping-status"
                                ),
                        }),
                      },
                      "waiting-for-destination-status"
                    ),
                  "completed" === t.status &&
                    (0, i.jsx)(
                      p.E.div,
                      { ...I.LU, children: (0, i.jsx)(et, { status: t }) },
                      "broadcast-status"
                    ),
                ],
              });
        },
        ei = (e) => {
          let { status: t } = e;
          return (0, i.jsxs)("div", {
            className: "flex flex-col items-center p-3 pt-0 font-aeonikMedium",
            children: [
              (0, i.jsx)("div", {
                className: "flex h-[110px] justify-center",
                children: (0, i.jsx)($, {
                  className: "pointer-events-none absolute",
                }),
              }),
              (0, i.jsx)("div", {
                className: "text-24 text-cf-white",
                children: "Swap failed",
              }),
              (0, i.jsxs)("div", {
                className: "text-center text-16",
                children: [
                  "Contact us with ticket ",
                  (0, i.jsx)("span", {
                    className: "text-cf-white",
                    children: (0, W.Dw)(t),
                  }),
                  " to resolve the issue.",
                ],
              }),
            ],
          });
        },
        ea = (e) => {
          let { status: t } = e,
            s = (0, F.Z)(),
            { depositViewState: n, setDepositViewState: o } = (0, U.Z)();
          (0, a.useEffect)(() => {
            ["waiting_for_src_tx", "waiting_for_src_tx_confirmation"].includes(
              t.status
            )
              ? o("awaiting-deposit-tx")
              : o("transition-finished");
          }, []);
          let r = (0, W.iF)(t);
          return (
            (0, a.useEffect)(() => {
              r &&
                s(E.I.SwapExecuted, {
                  props: {
                    assetFrom: ""
                      .concat(t.route.srcToken.chain.name, ".")
                      .concat(t.route.srcToken.symbol),
                    assetFromAmount: t.route.srcAmount.toFixed(),
                    assetTo: ""
                      .concat(t.route.destToken.chain.name, ".")
                      .concat(t.route.destToken.symbol),
                    assetToAmount: t.route.destAmount.toFixed(),
                    rate: t.route.destAmount.ratio(t.route.srcAmount).toFixed(),
                    destinationAddress: t.destAddress,
                    integration: t.integration,
                  },
                });
            }, [r]),
            (0, i.jsxs)(S.M, {
              mode: "wait",
              children: [
                "waiting_for_src_tx" === t.status &&
                  (0, i.jsx)(
                    p.E.div,
                    { ...I.LU, children: (0, i.jsx)(ee, { status: t }) },
                    "start-swap-status"
                  ),
                ("waiting_for_src_tx_confirmation" === t.status ||
                  "waiting_for_dest_tx" === t.status ||
                  "completed" === t.status) &&
                  (0, i.jsx)(
                    p.E.div,
                    {
                      ...I.LU,
                      children: (0, i.jsx)(es, {
                        status: t,
                        depositViewState: n,
                      }),
                    },
                    "swap-processing-status"
                  ),
                "failed" === t.status &&
                  (0, i.jsx)(
                    p.E.div,
                    { ...I.LU, children: (0, i.jsx)(ei, { status: t }) },
                    "error-status"
                  ),
              ],
            })
          );
        };
      var en = s(41556),
        eo = s(58796),
        er = s(29199),
        el = s(64480),
        ed = s(56557);
      let ec = (e) => {
          let {
            label: t,
            icon: s,
            children: a,
            tooltipContent: n,
            tooltipLink: o,
          } = e;
          return (0, i.jsxs)("div", {
            className:
              "flex w-full items-center justify-between font-aeonikMedium text-13",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex flex-row items-center gap-x-1.5 text-cf-light-2",
                children: [
                  (0, i.jsx)("div", { children: s }),
                  (0, i.jsx)("span", { children: t }),
                  (0, i.jsx)(h.Z, { content: n, link: o }),
                ],
              }),
              a,
            ],
          });
        },
        ex = (e) => {
          let {
            label: t,
            children: s,
            tooltipContent: a,
            tooltipLink: n,
            className: o,
          } = e;
          return (0, i.jsxs)("div", {
            className: x()(
              "flex w-full items-center justify-between font-aeonikMedium text-14",
              o
            ),
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex flex-row items-center gap-x-1.5 text-cf-light-2",
                children: [
                  (0, i.jsx)("span", { children: t }),
                  (0, i.jsx)(h.Z, { content: a, link: n }),
                ],
              }),
              s,
            ],
          });
        },
        ep = (e) => {
          let { amount: t, token: s, label: a, tooltip: n } = e;
          return (0, i.jsx)(ex, {
            label: a,
            tooltipContent: n,
            className: "text-cf-light-3",
            children: (0, i.jsxs)("span", {
              className: "flex items-center gap-x-1",
              children: [
                (0, i.jsx)("span", {
                  children: null == t ? void 0 : t.toCapped(),
                }),
                (0, i.jsx)(u.eB, {
                  displayChainLogo: !1,
                  token: s,
                  size: "xsmall",
                }),
                (0, i.jsx)("span", { children: s.symbol }),
                (0, i.jsxs)("span", {
                  className: "text-cf-light-2",
                  children: [
                    "(",
                    (0, i.jsx)(K.Q, { token: s, tokenAmount: t }),
                    ")",
                  ],
                }),
              ],
            }),
          });
        },
        eu = (e) => {
          let { route: t, disabled: s } = e,
            [n, o] = (0, a.useState)(!1);
          if ("chainflip" === t.integration) {
            var r, l;
            let e = t.srcToken.chainflipId,
              s = t.destToken.chainflipId;
            return (0, i.jsx)(u.zr, {
              hideAmount: !0,
              flat: !0,
              routeInfo: { sourceAsset: e, destinationAsset: s },
              swapRequest: {
                sourceAsset: e,
                destinationAsset: s,
                executedSwaps: {
                  totalCount: 1,
                  aggregates: {
                    sum: {
                      swapInputAmount: t.srcAmount.toString(),
                      swapInputValueUsd: "0",
                      intermediateAmount:
                        null !==
                          (l =
                            null === (r = t.steps[1]) || void 0 === r
                              ? void 0
                              : r.srcAmount.toString()) && void 0 !== l
                          ? l
                          : "0",
                      intermediateValueUsd: "0",
                      swapOutputAmount: t.destAmount.toString(),
                      swapOutputValueUsd: "0",
                    },
                  },
                },
              },
              withTooltip: !0,
            });
          }
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: "flex items-center justify-around",
                children: [
                  (0, i.jsx)("div", {
                    className: "flex items-center justify-around gap-x-1",
                    children: t.steps.map((e, s) =>
                      (0, i.jsxs)(
                        a.Fragment,
                        {
                          children: [
                            (0, i.jsx)(u.eB, {
                              token: e.srcToken,
                              size: "small",
                              displayChainLogo: 1 !== s,
                            }),
                            (0, i.jsx)(k.Z, {
                              className: "text-cf-light-1",
                              width: "16px",
                              height: "16px",
                            }),
                            s === t.steps.length - 1 &&
                              (0, i.jsx)(u.eB, {
                                token: e.destToken,
                                size: "small",
                              }),
                          ],
                        },
                        e.protocolName + e.srcToken.symbol
                      )
                    ),
                  }),
                  (0, i.jsx)("button", {
                    type: "button",
                    disabled: s,
                    onClick: (e) => {
                      e.stopPropagation(), o(!n);
                    },
                    children: (0, i.jsx)(g.Z, {
                      flip: !n,
                      className: "cursor-pointer text-cf-light-3 duration-100",
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(p.E.div, {
                className:
                  "!mt-0 h-0 overflow-hidden font-aeonikMedium text-12 text-cf-light-2",
                animate: n ? "open" : "closed",
                variants: {
                  open: { height: "auto", opacity: 1 },
                  closed: { height: "0px", opacity: 0 },
                },
                transition: { duration: 0.15 },
                children: (0, i.jsx)("div", {
                  className: "mt-2 flex flex-col gap-y-2",
                  children: t.steps.map((e) =>
                    (0, i.jsx)(
                      "div",
                      {
                        children: (0, i.jsx)("div", {
                          className: "ml-1 flex items-end gap-x-1",
                          children: (0, i.jsxs)("div", {
                            className: "text-cf-light-2",
                            children: [
                              "Swap",
                              " ",
                              (0, i.jsx)("span", {
                                className: "font-aeonikMono font-semibold",
                                children: e.srcAmount.toCapped(),
                              }),
                              " ",
                              e.srcToken.symbol,
                              " to",
                              " ",
                              (0, i.jsx)("span", {
                                className: "font-aeonikMono font-semibold",
                                children: e.destAmount.toCapped(),
                              }),
                              " ",
                              e.destToken.symbol,
                              " via ",
                              e.protocolName,
                            ],
                          }),
                        }),
                      },
                      e.protocolName + e.srcToken.symbol
                    )
                  ),
                }),
              }),
            ],
          });
        },
        eh = (e) => {
          let { fees: t } = e;
          return t.map((e) => {
            let t;
            switch (e.name) {
              case f.Xw:
                t = (0, i.jsx)(b.e0j, { direction: "down" });
                break;
              case f.Qg:
                t = (0, i.jsx)(w.Z, {});
                break;
              case f.i9:
                t = (0, i.jsx)(b.YqE, {});
                break;
              case f.$8:
                t = (0, i.jsx)(y.Z, {});
            }
            return (0, i.jsx)(
              ec,
              {
                icon: t,
                label: e.name,
                tooltipContent:
                  e.name === f.i9 &&
                  "Fixed fee taken in $USDC by the protocol to buy and burn $FLIP",
                tooltipLink: e.name === f.i9 ? "" : void 0,
                children: (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsxs)("span", {
                      className: "text-white",
                      children: [e.amount.toCapped(), " ", e.token.symbol, " "],
                    }),
                    (0, i.jsxs)("span", {
                      className: "text-cf-light-2",
                      children: [
                        "(",
                        (0, i.jsx)(K.Q, {
                          token: e.token,
                          tokenAmount: e.amount,
                        }),
                        ")",
                      ],
                    }),
                  ],
                }),
              },
              e.name
            );
          });
        },
        em = (e) => {
          var t, s;
          let n,
            l,
            c,
            { status: x } = e,
            { route: u } = x,
            [h, k] = (0, a.useState)(!1),
            g = (0, en.Z)(en.T),
            y = (0, j.L)();
          (0, a.useEffect)(
            () =>
              y.watchTokens(
                u.platformFees.map((e) => {
                  let { token: t } = e;
                  return t;
                })
              ),
            [u]
          ),
            "chainflip" === x.integration &&
            x.integrationData &&
            "swap" in x.integrationData &&
            (null === (t = x.integrationData.swap) || void 0 === t
              ? void 0
              : t.dca)
              ? ((l = D.dt.fromAsset(
                  x.integrationData.swap.swappedInputAmount,
                  u.srcToken.chainflipId
                )),
                (c = D.dt.fromAsset(
                  x.integrationData.swap.swappedOutputAmount,
                  u.destToken.chainflipId
                )),
                (n = (
                  null !== (s = x.integrationData.fees) && void 0 !== s ? s : []
                )
                  .filter((e) => "LIQUIDITY" !== e.type)
                  .map((e) => {
                    let t = (0, o.Fr)(e),
                      s = (0, D.wj)(t);
                    return {
                      amount: D.dt.fromAsset(e.amount, t),
                      token: s,
                      name: f.nl[e.type],
                    };
                  })))
              : ((n =
                  "chainflip" === u.integration && "contract" === g
                    ? u.platformFees.filter((e) => e.name !== f.Xw)
                    : u.platformFees),
                (l = u.srcAmount),
                (c = u.destAmount));
          let w = d.Z.sum(
            ...n.map((e) => {
              var t;
              return e.amount
                .mul(null !== (t = y.getPrice(e.token)) && void 0 !== t ? t : 0)
                .toBigNumber();
            })
          );
          return (0, i.jsxs)("div", {
            className: "w-full",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex items-center justify-between font-aeonikMedium text-13",
                children: [
                  (0, i.jsx)(m.j, {
                    depositAmount: l.toString(),
                    sourceAsset: u.srcToken.chainflipId,
                    egressAmount: c.toString(),
                    destinationAsset: u.destToken.chainflipId,
                    decimalCap: 5,
                  }),
                  (0, i.jsx)("button", {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation(), k(!h);
                    },
                    className:
                      "group flex gap-x-3 transition ease-out hover:text-white",
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center gap-x-2",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex items-center gap-x-1",
                          children: [
                            (0, i.jsx)(_.Z, {}),
                            (0, i.jsx)("span", { children: (0, r.x)(w) }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "flex h-6 w-6 items-center justify-center rounded-md border border-cf-gray-5 bg-cf-gray-4 text-cf-light-3 transition ease-out group-hover:bg-cf-gray-5 group-hover:text-cf-white",
                          children: (0, i.jsx)(C.DVO, { flip: !h }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(p.E.div, {
                className: "overflow-hidden",
                initial: "closed",
                animate: h ? "open" : "closed",
                variants: {
                  open: { height: "auto", opacity: 1, marginTop: "auto" },
                  closed: { height: "0px", opacity: 0, marginTop: "0px" },
                },
                transition: { duration: 0.15 },
                children: (0, i.jsxs)("div", {
                  className: "flex w-full flex-col gap-y-2 pt-3",
                  children: [
                    (0, i.jsx)(eh, { fees: n }),
                    (0, i.jsx)("div", {
                      className: "w-full border-b border-cf-gray-4",
                    }),
                    (0, i.jsx)(ec, {
                      label: "Route",
                      icon: (0, i.jsx)(v.Z, {}),
                      children: (0, i.jsx)(eu, { route: u, disabled: !1 }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ef = (e) => {
          var t, s, a, o, r, d, c, x, h;
          let m,
            f,
            { status: j } = e,
            k = (0, n.useRouter)(),
            { route: g, destAddress: y } = j,
            _ = (0, W.qb)(j),
            v = (0, W.jw)(j),
            w = (0, W.Or)(j),
            C = w && new D.dt(w.amount, j.route.destToken.decimals),
            S = (0, W.j)(j),
            F = S && new D.dt(S.amount, j.route.srcToken.decimals),
            T = (0, eo.ZP)((e) => e.refundAddress),
            O = !1;
          "chainflip" === j.integration &&
            j.integrationData &&
            ((null === (c = j.integrationData.depositChannel) || void 0 === c
              ? void 0
              : c.fillOrKillParams) &&
              ((T =
                j.integrationData.depositChannel.fillOrKillParams
                  .refundAddress),
              (m = (0, er.zT)(
                j.route,
                j.integrationData.depositChannel.fillOrKillParams.minPrice
              ))),
            C ? (f = C) : ((f = j.route.destAmount), (O = !0)));
          let L = "chainflip" === g.integration && g.integrationData.isBoosted,
            B = g.durationSeconds > 0 ? (0, D.wu)(g.durationSeconds) : void 0,
            U =
              "chainflip" === g.integration &&
              g.integrationData.defaultDurationSeconds > 0
                ? (0, D.wu)(g.integrationData.defaultDurationSeconds)
                : void 0,
            E =
              "chainflip" === j.integration &&
              null !==
                (x =
                  null === (a = j.integrationData) || void 0 === a
                    ? void 0
                    : null === (s = a.depositChannel) || void 0 === s
                    ? void 0
                    : null === (t = s.dcaParams) || void 0 === t
                    ? void 0
                    : t.numberOfChunks) &&
              void 0 !== x
                ? x
                : 1,
            M =
              "chainflip" === j.integration
                ? (0, A.Yh)(
                    null === (o = j.integrationData) || void 0 === o
                      ? void 0
                      : o.swapId,
                    "swaps"
                  )
                : null,
            Z = j.duration ? (0, D.wu)(j.duration / 1e3) : void 0;
          return (0, i.jsxs)(ed.Z, {
            className:
              "flex w-full flex-col bg-cf-gray-3 text-12 shadow-grayPop1",
            children: [
              (0, i.jsxs)("div", {
                className: "flex items-center justify-between p-4",
                children: [
                  (0, i.jsxs)("span", {
                    className:
                      "font-aeonikMedium text-16 text-cf-light-3 transition ease-out",
                    children: [
                      "Swap",
                      " ",
                      "chainflip" === j.integration &&
                      (null === (r = j.integrationData) || void 0 === r
                        ? void 0
                        : r.swapId)
                        ? "#".concat(j.integrationData.swapId)
                        : "details",
                    ],
                  }),
                  M && (0, i.jsx)(N.bd, { href: M }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "w-full border-b border-cf-gray-4",
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-y-3 p-4",
                children: [
                  (0, i.jsx)(el.h, { children: (0, i.jsx)(ea, { status: j }) }),
                  (0, i.jsxs)(ed.Z, {
                    className:
                      "flex flex-col gap-3 bg-cf-gray-3-5 p-3 shadow-grayPop2",
                    children: [
                      _ &&
                        (0, i.jsx)(ep, {
                          label: "You deposited",
                          amount: _,
                          token: j.route.srcToken,
                        }),
                      "waiting_for_src_tx" !== j.status &&
                        (null == f ? void 0 : f.gt(0)) &&
                        (0, i.jsx)(ep, {
                          label: O ? "Est. payout" : "Payout",
                          amount: f,
                          token: j.route.destToken,
                        }),
                      S &&
                        (0, i.jsx)(ep, {
                          label: "Refund payout",
                          amount: F,
                          token: j.route.srcToken,
                        }),
                      m &&
                        !S &&
                        (0, i.jsx)(ep, {
                          label: "Min. payout",
                          tooltip:
                            "Minimum amount received at the destination address based on slippage tolerance and estimated fees",
                          amount: m,
                          token: j.route.destToken,
                        }),
                      E &&
                        E > 1 &&
                        (0, i.jsx)(ex, {
                          label: "Chunks",
                          tooltipContent:
                            "Chunks are portions of your deposit amount that are split up and swapped over time",
                          tooltipLink: void 0,
                          children:
                            "completed" === j.status || "refunded" === j.status
                              ? (0, i.jsxs)("span", {
                                  children: [
                                    null !==
                                      (h =
                                        null == v
                                          ? void 0
                                          : null === (d = v.dca) || void 0 === d
                                          ? void 0
                                          : d.executedChunks) && void 0 !== h
                                      ? h
                                      : 0,
                                    "/",
                                    E,
                                  ],
                                })
                              : (0, i.jsx)("span", { children: E }),
                        }),
                      (Z || B) &&
                        (0, i.jsx)(ex, {
                          label: Z ? "Completed in" : "Est. time to complete",
                          children: (0, i.jsxs)("div", {
                            className: "flex items-center gap-x-0.5",
                            children: [
                              L
                                ? (0, i.jsx)(b.xyn, {
                                    className: "text-cf-pink-1",
                                  })
                                : (0, i.jsx)(b.T39, {}),
                              (0, i.jsx)("span", {
                                className: "font-aeonikMedium text-14",
                                children: Z || B,
                              }),
                              L &&
                                U &&
                                (0, i.jsx)("span", {
                                  className:
                                    "pl-0.5 font-aeonikMedium text-12 text-cf-light-2 line-through",
                                  children: U,
                                }),
                            ],
                          }),
                        }),
                      (0, i.jsx)("div", {
                        className: "w-full border-b border-cf-gray-4",
                      }),
                      (0, i.jsx)(em, { status: j }),
                    ],
                  }),
                  (0, i.jsxs)(ed.Z, {
                    className:
                      "flex flex-col space-y-3 bg-cf-gray-3-5 p-3 shadow-grayPop2",
                    children: [
                      y &&
                        (0, i.jsx)(ex, {
                          label: "Destination address",
                          children: (0, i.jsxs)("div", {
                            className:
                              "flex items-center gap-x-1 font-aeonikMedium text-cf-light-3",
                            children: [
                              (0, i.jsx)(u.u, {
                                content: y,
                                children: (0, l.$A)(y),
                              }),
                              (0, i.jsx)(u.qi, { textToCopy: y }),
                            ],
                          }),
                        }),
                      T &&
                        (0, i.jsx)(ex, {
                          label: "Refund address",
                          children: (0, i.jsxs)("div", {
                            className:
                              "flex items-center gap-x-1 font-aeonikMedium text-cf-light-3",
                            children: [
                              (0, i.jsx)(u.u, {
                                content: T,
                                children: (0, l.$A)(T),
                              }),
                              (0, i.jsx)(u.qi, { textToCopy: T }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  "completed" === j.status &&
                    (0, i.jsx)(p.E.div, {
                      className: "flex flex-col",
                      ...I.LU,
                      children: (0, i.jsx)(u.zx, {
                        onClick: () => k.push("/"),
                        children: "Swap again",
                      }),
                    }),
                ],
              }),
            ],
          });
        };
    },
    19038: (e, t, s) => {
      s.d(t, { Q: () => r });
      var i = s(31549),
        a = s(70092),
        n = s(79386),
        o = s(82203);
      let r = (e) => {
        let { token: t, tokenAmount: s } = e,
          { price: r, isLoading: l } = (0, o.Z)(t);
        if (!s)
          return (0, i.jsxs)(i.Fragment, {
            children: ["$", Number(0).toFixed(2)],
          });
        if (!r && l) return (0, i.jsx)(n.AU, { width: 30, inline: !0 });
        if (!r) return null;
        let d = (0, a.x)(s.mul(r).toBigNumber());
        return d.includes("NaN") ? null : d;
      };
    },
    29903: (e, t, s) => {
      s.d(t, { Z: () => u });
      var i = s(31549),
        a = s(87604),
        n = s(60287),
        o = s(29266),
        r = s(87438),
        l = s(59495),
        d = s(68324),
        c = s(79386);
      let x = (e) => {
          let { chainId: t, requireConnection: s, tooltip: n, ...o } = e,
            { isConnected: x, chain: p } = (0, r.m)(),
            { switchChain: u } = (0, l.o)(),
            { openConnectModal: h } = (0, a.We)(),
            m = (0, d.HB)(t) || 1,
            { children: f, onClick: j } = o;
          return (
            s && !x
              ? ((f = "Connect Wallet"), (j = null != h ? h : j))
              : s &&
                m !== (null == p ? void 0 : p.id) &&
                ((f = "Switch Network"),
                (j = () => (null == u ? void 0 : u({ chainId: m })))),
            (0, i.jsx)(c.u, {
              content: n,
              disabled: !n,
              children: (0, i.jsx)(c.zx, { ...o, onClick: j, children: f }),
            })
          );
        },
        p = (e) => {
          let { chainId: t, requireConnection: s, tooltip: a, ...r } = e,
            { signTransaction: l } = (0, n.O)(),
            { setVisible: d } = (0, o.h)(),
            { children: x, onClick: p } = r;
          return (
            s &&
              !l &&
              ((x = "Connect Wallet"),
              (p = () => {
                d(!0);
              })),
            (0, i.jsx)(c.u, {
              content: a,
              disabled: !a,
              children: (0, i.jsx)(c.zx, { ...r, onClick: p, children: x }),
            })
          );
        },
        u = (e) => {
          let { chainId: t, ...s } = e;
          return (0, d.Jh)(t)
            ? (0, i.jsx)(p, { chainId: t, ...s })
            : (0, i.jsx)(x, { chainId: t, ...s });
        };
    },
    13458: (e, t, s) => {
      s.d(t, { Z: () => r });
      var i = s(87873),
        a = s(54405),
        n = s(91673),
        o = s(84952);
      let r = (e) => {
        if (!(0, a.jJ)(e))
          return { requiredBlockConfirmations: null, isLoading: !1 };
        let { data: t, isLoading: s } = (0, i.a)({
          queryKey: [n.fL, e.chainflipId],
          queryFn: () =>
            o._.getIntegration("chainflip").sdk.getRequiredBlockConfirmations(),
          select: (t) => ({ requiredBlockConfirmations: t[e.chainflipId] }),
        });
        return { ...t, isLoading: s };
      };
    },
    41556: (e, t, s) => {
      s.d(t, { T: () => l, Z: () => d });
      var i = s(86934),
        a = s(13944),
        n = s(13184);
      let o = {
          boostEnabled: !0,
          _depositMode: "channel",
          fillOrKillEnabled: !0,
          slippageTolerancePercent: "auto",
          swapDeadlineMinutes: 15,
        },
        r = (0, i.Ue)()(
          (0, a.mW)(
            (0, a.tJ)(
              (0, n.n)((e) => ({
                ...o,
                toggleBoostEnabled: () =>
                  e((e) => ({ boostEnabled: !e.boostEnabled })),
                setBoostEnabled: (t) => e({ boostEnabled: t }),
                setSlippageTolerancePercent: (t) =>
                  e({ slippageTolerancePercent: t }),
                setSwapDeadlineMinutes: (t) => e({ swapDeadlineMinutes: t }),
              })),
              {
                name: "cf.swap-settings",
                version: 5,
                migrate: (e, t) => (
                  t < 5 &&
                    ((e.fillOrKillEnabled = !0),
                    (e.slippageTolerancePercent = "auto")),
                  e
                ),
              }
            )
          )
        ),
        l = (e) => (e.fillOrKillEnabled ? "channel" : e._depositMode),
        d = r;
    },
    58796: (e, t, s) => {
      s.d(t, { Fv: () => c, P$: () => x, ZP: () => u, jG: () => p });
      var i = s(86934),
        a = s(13944),
        n = s(13184),
        o = s(83344),
        r = s(98800);
      let l = {
          srcToken: r.Y8.Btc,
          srcAmount: void 0,
          destToken: r.Y8.Eth,
          destinationAddress: "",
          selectedRoute: void 0,
          refundAddress: "",
        },
        d = (0, i.Ue)()(
          (0, a.mW)(
            (0, n.n)((e) => ({
              ...l,
              setSrcToken: (t) => e({ srcToken: t }, !1, "setSrcToken"),
              setSrcAmount: (t) => e({ srcAmount: t }, !1, "setSrcAmount"),
              setDestToken: (t) => e({ destToken: t }, !1, "setDestToken"),
              setDestinationAddress: (t) =>
                e({ destinationAddress: t }, !1, "setDestinationAddress"),
              setRefundAddress: (t) =>
                e({ refundAddress: t }, !1, "setRefundAddress"),
              setSelectedRoute: (t) =>
                e({ selectedRoute: t }, !1, "setSelectedRoute"),
              reset: (t, s) =>
                e({ ...l, srcToken: t, destToken: s }, !1, "reset"),
            }))
          )
        ),
        c = (e) => (t) => {
          let s = "".concat(e, "Address");
          return (
            "" !== t[s] &&
            (0, o.FO)(t[s])[
              "destination" === e ? t.destToken.chain.id : t.srcToken.chain.id
            ]
          );
        },
        x = (e) =>
          !!(e.srcAmount && e.srcToken && e.destToken && e.srcAmount.gt(0)),
        p = (e) => {
          var t, s, i, a;
          return null !==
            (a =
              (null === (t = e.selectedRoute) || void 0 === t
                ? void 0
                : t.integration) === "chainflip"
                ? null === (i = e.selectedRoute.integrationData) || void 0 === i
                  ? void 0
                  : null === (s = i.quote) || void 0 === s
                  ? void 0
                  : s.recommendedSlippageTolerancePercent
                : void 0) && void 0 !== a
            ? a
            : 1.5;
        },
        u = d;
    },
    21482: (e, t, s) => {
      s.d(t, { Z: () => a });
      var i = s(24648);
      let a = (e) => {
        let { isLoading: t, balances: s } = (0, i.R)(
          null == e ? void 0 : e.chain
        );
        return e
          ? { balance: e ? s[e.address] : void 0, isLoading: t }
          : { balance: void 0, isLoading: !1 };
      };
    },
    73335: (e, t, s) => {
      s.d(t, { Z: () => r });
      var i = s(86934),
        a = s(13944),
        n = s(13184);
      let o = { depositViewState: "awaiting-deposit-tx" },
        r = (0, i.Ue)()(
          (0, a.mW)(
            (0, n.n)((e) => ({
              ...o,
              setDepositViewState: (t) => e({ depositViewState: t }),
            }))
          )
        );
    },
    5203: (e, t, s) => {
      var i;
      s.d(t, { I: () => i }),
        (function (e) {
          (e.SelectAssetFrom = "select_asset_from"),
            (e.SelectAssetTo = "select_asset_to"),
            (e.SelectMaxBalance = "select_max_balance"),
            (e.SelectDestinationAddress = "select_destination_address"),
            (e.SelectDestinationAddressError =
              "select_destination_address_error"),
            (e.SelectRoute = "select_route"),
            (e.ViewMarketData = "view_market_data"),
            (e.CtaReviewSwap = "cta_review_swap"),
            (e.SendFromConnectedWallet = "send_from_connected_wallet"),
            (e.SelectDepositMode = "select_deposit_mode"),
            (e.ShowDepositAddress = "show_deposit_address"),
            (e.CtaStartSwap = "cta_start_swap"),
            (e.ReceivingDepositAmount = "receiving_deposit_amount"),
            (e.SwapExecuted = "swap_executed"),
            (e.SendingFunds = "sending_funds"),
            (e.SwapComplete = "swap_complete"),
            (e.ViewSettings = "view_settings"),
            (e.ShowLiquidityAlert = "show_liquidity_alert"),
            (e.LiquidityAlertCancel = "liquidity_alert_cancel"),
            (e.CtaLiquidityAlertProceed = "cta_liquidity_alert_proceed"),
            (e.ChangeRoute = "change_route"),
            (e.DepositChannelCreated = "deposit_channel_created"),
            (e.ToggleBoost = "toggle_boost"),
            (e.InsufficientBoostLiquidity = "insufficient_boost_liquidity"),
            (e.DepositBoosted = "deposit_boosted");
        })(i || (i = {}));
    },
    10242: (e) => {
      e.exports = JSON.parse(
        '{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.4.4","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":60.0000024438501,"w":100,"h":100,"nm":"Spinner","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"spinner Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,50,0],"ix":2},"a":{"a":0,"k":[160,284,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,19.882],[19.882,0],[0,-19.882],[-19.882,0]],"o":[[0,-19.882],[-19.882,0],[0,19.882],[19.882,0]],"v":[[36,0],[0,-36],[-36,0],[0,36]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":29,"s":[0]},{"t":51.0000020772726,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[100]},{"t":60.0000024438501,"s":[1]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":10,"ix":10},"g":{"p":2,"k":{"a":0,"k":[0,0.273,0.851,0.574,1,0,0,0],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":2,"lj":1,"ml":10,"ml2":{"a":0,"k":10,"ix":13},"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[160,284],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-90]},{"t":59.0000024031193,"s":[270]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0}],"markers":[]}'
      );
    },
  },
]);
//# sourceMappingURL=2585-bf4ee0ba07517360.js.map
