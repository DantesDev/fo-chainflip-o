(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [56],
  {
    5683: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/token",
        function () {
          return n(7112);
        },
      ]);
    },
    8747: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(1527),
        i = n(2957),
        s = n(2180),
        l = n(2187),
        r = n.n(l),
        o = n(4240);
      function c(e) {
        let { sectionList: t, assetsNamespace: n, page: l } = e,
          c = (0, o.a)(l);
        return (0, a.jsx)("div", {
          className: "flex flex-col",
          children: Object.entries(t).map((e) => {
            let [t, l] = e;
            return (0, a.jsxs)(
              "div",
              {
                className:
                  "flex flex-col space-y-4 border-b border-b-cf-gray-3 py-14 last:border-b-0",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-24 text-cf-white",
                    children: t,
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
                    children: l.map((e) => {
                      let {
                        name: t,
                        pill: l,
                        description: o,
                        link: d,
                        wideLogo: h,
                        promo: p,
                        cta: x,
                      } = e;
                      return (0, a.jsxs)(
                        "div",
                        {
                          className: "flex flex-col",
                          children: [
                            p &&
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center gap-x-1.5 rounded-t-md border border-cf-green-1/20 bg-cf-green-4 px-4 py-1 font-aeonikMedium text-14 text-cf-green-1",
                                children: [(0, a.jsx)(s.Og, {}), p],
                              }),
                            (0, a.jsxs)("div", {
                              className: r()(
                                "flex flex-1 flex-col rounded-md border border-cf-gray-4 bg-cf-gray-2",
                                !!p && "rounded-t-none border-t-0"
                              ),
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex-1 space-y-4 p-4",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "flex space-x-4",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: r()(
                                            "flex h-[60px] items-center justify-center rounded-md border border-cf-gray-4 bg-gradient-to-b from-cf-gray-3 to-cf-gray-4",
                                            h ? "px-2" : "aspect-square"
                                          ),
                                          children: (0, a.jsx)("img", {
                                            src: "/images/"
                                              .concat(n, "/")
                                              .concat(
                                                t.replaceAll(" ", ""),
                                                ".svg"
                                              ),
                                            alt: "".concat(t, " logo"),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "flex flex-col space-y-1",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className:
                                                "flex max-w-fit items-center justify-center rounded-full border border-cf-gray-5 bg-cf-gray-4 px-2 py-0.5 text-12 text-cf-light-3",
                                              children: l,
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "font-aeonikMedium text-20 text-cf-white",
                                              children: t,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    o &&
                                      (0, a.jsx)("div", {
                                        className: "text-14 text-cf-light-3",
                                        children: o,
                                      }),
                                  ],
                                }),
                                null !== d
                                  ? (0, a.jsxs)("a", {
                                      href: d,
                                      className:
                                        "group flex justify-between rounded-b-[4px] border-t border-cf-gray-4 p-4 font-aeonikMedium text-14 transition hover:bg-cf-gray-4 hover:text-cf-white",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      onClick: () =>
                                        c({
                                          label: ""
                                            .concat(
                                              null != x ? x : "Go to website",
                                              " ("
                                            )
                                            .concat(t, ")"),
                                          action: "click",
                                        }),
                                      children: [
                                        (0, a.jsx)("span", {
                                          children:
                                            null != x ? x : "Go to website",
                                        }),
                                        (0, a.jsx)(i.e0, {
                                          direction: "right",
                                          className:
                                            "transition group-hover:translate-x-1.5",
                                        }),
                                      ],
                                    })
                                  : (0, a.jsx)("div", {
                                      className:
                                        "group flex justify-between rounded-b-[4px] border-t border-cf-gray-4 p-4 font-aeonikMedium text-14",
                                      children: "Coming soon",
                                    }),
                              ],
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              },
              t
            );
          }),
        });
      }
    },
    599: function (e, t, n) {
      "use strict";
      var a = n(959),
        i = n(2187),
        s = n.n(i);
      t.Z = (e) => {
        let { children: t, as: n, className: i } = e;
        return (0, a.createElement)(
          n,
          {
            className: s()(
              i,
              "text-transparent bg-clip-text bg-[linear-gradient(91.69deg,#FFFFFF_29.28%,#9F9F9F_81.44%)] font-aeonikMedium"
            ),
          },
          t
        );
      };
    },
    7112: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return u;
          },
          default: function () {
            return f;
          },
        });
      var a = n(1527),
        i = n(4243),
        s = n(2180),
        l = n(7688),
        r = n(8747),
        o = n(599);
      function c(e) {
        let { message: t } = e;
        return (0, a.jsx)(i.u, {
          message: t,
          children: (0, a.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "7.68254",
                fill: "#2B2B2B",
                stroke: "#424242",
                strokeWidth: "0.634921",
              }),
              (0, a.jsx)("path", {
                d: "M10.529 10.819H9.319C9.319 10.0783 9.55 9.46233 10.012 8.971C10.4813 8.47967 11.1157 8.234 11.915 8.234C12.6703 8.234 13.2717 8.421 13.719 8.795C14.1663 9.169 14.39 9.64933 14.39 10.236C14.39 10.6907 14.2947 11.061 14.104 11.347C13.9133 11.6257 13.642 11.8897 13.29 12.139C12.938 12.381 12.6887 12.5863 12.542 12.755C12.3953 12.9237 12.322 13.1327 12.322 13.382V13.602H11.2V13.25C11.2 12.9713 11.2587 12.7257 11.376 12.513C11.4933 12.293 11.6217 12.1243 11.761 12.007C11.9003 11.8897 12.1057 11.743 12.377 11.567C12.8977 11.2223 13.158 10.819 13.158 10.357C13.158 10.0417 13.0443 9.785 12.817 9.587C12.5897 9.389 12.2927 9.29 11.926 9.29C11.5007 9.29 11.1597 9.433 10.903 9.719C10.6537 9.99767 10.529 10.3643 10.529 10.819ZM11.244 15.868C11.1047 15.7287 11.035 15.549 11.035 15.329C11.035 15.109 11.1047 14.933 11.244 14.801C11.3907 14.6617 11.574 14.592 11.794 14.592C12.014 14.592 12.1937 14.6617 12.333 14.801C12.4723 14.933 12.542 15.109 12.542 15.329C12.542 15.549 12.4723 15.7287 12.333 15.868C12.1937 16 12.014 16.066 11.794 16.066C11.574 16.066 11.3907 16 11.244 15.868Z",
                fill: "#909090",
              }),
            ],
          }),
        });
      }
      var d = n(3021);
      let h = [
          {
            q: "What is it?",
            a: (0, a.jsxs)("p", {
              children: [
                "The FLIP token is the ERC-20 protocol token of the Chainflip decentralised exchange. Although Chainflip has its own blockchain, the multi-chain nature of the project allows the $FLIP token to be issued on Ethereum for ease of use and adoption. Staking done on the Ethereum State Chain Gateway contract loads those tokens onto the Chainflip State Chain for use in the appchain environment. You can test this out on the Perseverance testnet right now!",
              ],
            }),
          },
          {
            q: "What is the utility?",
            a: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("p", {
                  children:
                    "The primary utility of the $FLIP token is used as collateral for Validator auctions. Validators require large stakes, earn rewards from the block reward, and maintain the state chain for Chainflip by jointly controlling the liquidity vaults.",
                }),
                (0, a.jsx)("p", {
                  children:
                    "The rewards that Validators earn is offset by the DEX automatically converting the network fees collected in USD into $FLIP and then burning it automatically within the protocol. This is done without the user needing to buy $FLIP themselves. Therefore, even if you don't use the token to stake, there is still potential benefit in holding $FLIP.",
                }),
                (0, a.jsx)("p", {
                  children:
                    "$FLIP is also required for Liquidity Provision and Relaying services in order to process instructions on the decentralised exchange. All transaction fees on the State Chain are burned.",
                }),
                (0, a.jsxs)("p", {
                  children: [
                    "You can read more about the value capture mechanism built into the protocol in our docs article, Incentive Design: Emission & Burning.",
                  ],
                }),
              ],
            }),
          },
        ],
        p = {
          "Token Info": [
            {
              pill: "Decentralised Exchange",
              name: "Uniswap",
              link: "https://info.uniswap.org/#/pools/0x7f7ff8f22a902bb9b0aef07c6cb41d91a47e18e1",
              cta: "Buy Now",
            },
            {
              pill: "Contract Addresses",
              name: "Etherscan",
              link: "https://etherscan.io/address/0x826180541412D574cf1336d22c0C0a287822678A",
              cta: "View on explorer",
            },
          ],
        },
        x = (0, n(4240).a)("token page");
      var u = !0;
      function f(e) {
        let {
          price: t,
          marketCap: n,
          fullyDilutedValuation: u,
          totalSupply: f,
        } = e;
        return (
          l.ZP.send({ hitType: "pageview", page: "token" }),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("img", {
                src: "/images/token/hero.svg",
                alt: "",
                className: "absolute right-0 top-0 -z-10",
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col space-y-32 md:space-y-40",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex max-w-[573px] flex-col space-y-6",
                    children: [
                      (0, a.jsx)(o.Z, {
                        as: "h1",
                        className: "max-w-fit text-[64px]",
                        children: "The Token",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col space-y-3",
                        children: [
                          (0, a.jsx)("p", {
                            children:
                              "So, you're interested in $FLIP then? You've come to the right place. Here, we'll explore the $FLIP token, its characteristics, and information regarding the supply.",
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "This page will be the source of truth for all questions regarding the $FLIP token, and will always reflect the most recent supply statistics. If a friend (or stranger on Telegram) asks about $FLIP, make sure you point them to this page.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "!mt-20 flex flex-col space-y-10 md:!mt-40",
                    children: h.map((e) => {
                      let { q: t, a: n } = e;
                      return (0, a.jsxs)(
                        "div",
                        {
                          className:
                            "flex flex-col justify-between space-y-3 md:flex-row md:space-y-0",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-24 text-cf-white md:text-[32px]",
                              children: t,
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "flex flex-col space-y-5 text-14 md:max-w-[610px] md:text-16",
                              children: n,
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  (0, a.jsx)(r.Z, {
                    sectionList: p,
                    assetsNamespace: "token",
                    page: "token",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 5683));
    }),
      (_N_E = e.O());
  },
]);
