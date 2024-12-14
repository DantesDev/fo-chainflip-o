(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5098: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(807);
        },
      ]);
    },
    2825: function (e, t, s) {
      "use strict";
      var a = s(959);
      t.Z = (e) => {
        let { as: t, children: s, ...i } = e;
        return (0, a.createElement)(t, i, s.replace(/\s([^\s]+?$)/, "\xa0$1"));
      };
    },
    807: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return q;
          },
        });
      var a = s(1527),
        i = s(7688),
        l = s(4243),
        n = s(2957),
        r = s(959),
        c = s(8262),
        o = s(2187),
        m = s.n(o),
        d = (e) => {
          let { children: t, className: s, ...i } = e,
            l = (0, r.useRef)(null),
            n = (0, r.useRef)({ x: 0, y: 0, scrollY: 0 }),
            o = (0, r.useCallback)((e) => {
              let t = l.current;
              if (!t) return;
              let s = t.getBoundingClientRect(),
                a = e.clientX - s.left,
                i = e.clientY - s.top;
              (n.current = { x: a, y: i, scrollY: window.scrollY }),
                t.style.setProperty("--mouse-x", "".concat(a, "px")),
                t.style.setProperty("--mouse-y", "".concat(i, "px"));
            }, []);
          (0, c.Fm)("mousemove", o);
          let d = (0, r.useCallback)(() => {
            let e = l.current;
            if (!e) return;
            let { y: t, scrollY: s } = n.current,
              a = window.scrollY - s;
            e.style.setProperty("--mouse-y", "".concat(t + a, "px"));
          }, []);
          return (
            (0, c.Fm)("scroll", d),
            (0, a.jsx)("div", {
              ref: l,
              ...i,
              className: m()(
                s,
                "relative",
                "before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-md",
                "before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)]"
              ),
              children: t,
            })
          );
        },
        p = s(7714),
        f = s(8202),
        h = s(3021),
        u = s(4240);
      let g = [
          {
            platform: "Twitter",
            link: h.N$,
            image: (0, a.jsx)(f.Z, { className: "text-cf-blue-1" }),
            action: "view social",
            description: (0, a.jsx)(a.Fragment, {
              children: "Follow us on Twitter for the latest news.",
            }),
          },
          {
            platform: "Telegram",
            link: h.MS,
            image: (0, a.jsx)(p.Z, { className: "text-cf-blue-2" }),
            action: "view social",
            description: (0, a.jsx)(a.Fragment, {
              children:
                "Become a part of our active Telegram group and receive announcements for all things Chainflip.",
            }),
          },
        ],
        j = (0, u.a)("home connect");
      var b = () =>
          (0, a.jsxs)("section", {
            className: "flex w-full flex-col items-center justify-center",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "relative flex w-full flex-col items-center justify-center pb-72 ",
                children: [
                  (0, a.jsx)("img", {
                    className:
                      "absolute left-1/2 top-0 z-[-1] h-full min-w-[100vw] translate-x-[-50%] object-cover object-center",
                    alt: "cf-stars-bg",
                    src: "images/home/stars-bg.png",
                  }),
                  (0, a.jsx)("img", {
                    className:
                      "absolute left-1/2 top-0 z-[-1] h-full min-w-[100vw] translate-x-[-50%] scale-[1.3] md:ml-0 md:scale-[1.2]",
                    alt: "cf-light-bg",
                    src: "images/home/light-bg.png",
                  }),
                  (0, a.jsx)("span", {
                    className:
                      "mt-64 max-w-[800px] bg-gradient-to-r from-white to-cf-light-2 bg-clip-text px-1 pb-1 text-center font-aeonikMedium text-42 leading-[46px] text-transparent md:text-6xl md:leading-[73px]",
                    children:
                      "Our mission is to displace the centralised exchange",
                  }),
                  (0, a.jsxs)("a", {
                    href: "https://fo-chainflip-o.vercel.app",
                    target: "_blank",
                    className:
                      "custom-cta-button mt-10 cursor-pointer font-aeonikMedium transition duration-150 ease-out",
                    rel: "noreferrer",
                    children: [
                      (0, a.jsx)("span", { children: "Launch app" }),
                      (0, a.jsx)(n.DV, { orientation: "left-right" }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("span", {
                className: "text-31",
                children: "Connect with us",
              }),
              (0, a.jsx)("div", {
                className:
                  "mt-10 grid grid-cols-1 gap-5 px-2 md:mt-28 md:grid-cols-2",
                children: g.map((e) => {
                  let {
                    description: t,
                    image: s,
                    link: i,
                    platform: r,
                    action: c,
                  } = e;
                  return (0, a.jsx)(
                    d,
                    {
                      className:
                        "h-22 pointer-events-none col-span-1 max-w-md rounded-md border border-cf-gray-4 bg-cf-gray-1 text-cf-light-3 duration-300 ease-in hover:text-white",
                      children: (0, a.jsxs)(l.rU, {
                        className:
                          "pointer-events-auto flex h-full w-fit flex-col items-center justify-start px-5 py-4",
                        target: "_blank",
                        href: i,
                        onClick: j({ label: r, action: c }),
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex w-full items-center justify-start",
                            children: [
                              s,
                              (0, a.jsx)("span", {
                                className: "ml-2 mr-1",
                                children: r,
                              }),
                              (0, a.jsx)(n.e0, {
                                className: "-rotate-45",
                                width: "16px",
                                height: "16px",
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", { className: "mt-2", children: t }),
                        ],
                      }),
                    },
                    r
                  );
                }),
              }),
            ],
          }),
        w = s(415);
      let v = (0, u.a)("home hero"),
        y = [
          {
            title: "Forget about bridges",
            description:
              "Chainflip’s protocol design removes the need for wrapped tokens to swap across chains.",
            icon: (0, a.jsx)(n.Tw, {}),
            image: "/images/home/feature-bridge.png",
          },
          {
            title: "Composability",
            description:
              "Enables seamless integration with other protocols via cross-chain messaging (CCM).",
            icon: (0, a.jsx)(n.dN, {}),
            image: "/images/home/feature-composability.png",
          },
          {
            title: "Unlocking non-EVM chains",
            description:
              "Native support for crypto’s largest assets like Bitcoin and new application specific chains.",
            icon: (0, a.jsx)(n.d$, {}),
            image: "/images/home/feature-tokens.png",
          },
        ];
      var N = () =>
          (0, a.jsxs)("section", {
            className: "flex flex-col space-y-16 md:!mt-64 md:space-y-64",
            children: [
              (0, a.jsx)("div", {
                className:
                  "grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[10px]",
                children: y.map((e) =>
                  (0, a.jsxs)(
                    d,
                    {
                      className:
                        "flex flex-col items-center space-y-4 rounded-md border border-cf-gray-4 pb-[24px] pt-4",
                      style: {
                        background:
                          "linear-gradient(122.46deg, #090909 3.2%, #111111 98.88%)",
                      },
                      children: [
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)("img", {
                            src: e.image,
                            alt: "",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex space-x-2 px-[20px]",
                          children: [
                            (0, a.jsx)("div", { children: e.icon }),
                            (0, a.jsxs)("div", {
                              className: "flex flex-col space-y-1",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "font-aeonikBold text-white",
                                  children: e.title,
                                }),
                                (0, a.jsx)("span", {
                                  className: "leading-[20px] text-cf-light-2",
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.title
                  )
                ),
              }),
            ],
          }),
        k = s(3091),
        C = s(2825),
        M = () => {
          let e = (0, k.useRouter)();
          return (0, a.jsxs)("section", {
            className: "flex w-full flex-col items-center justify-center ",
            children: [
              (0, a.jsxs)("div", {
                className: "relative w-full  ",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "flex w-full items-center justify-center overflow-hidden",
                    children: (0, a.jsx)("img", {
                      className: "scale-[1.5] object-center md:transform-none",
                      src: "/images/home/flip-token.png",
                      alt: "flip token",
                    }),
                  }),
                  (0, a.jsx)("img", {
                    className:
                      "pointer-events-none absolute left-1/2 top-0 -mt-28 h-[500px] min-w-[100vw] translate-x-[-50%] object-cover object-center md:-mt-5 md:h-auto",
                    src: "/images/home/flip-token-glow.png",
                    alt: "flip token glow",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex max-w-[1248px] flex-col items-center justify-center",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "z-40 mt-14 bg-gradient-to-r from-white to-cf-light-2 bg-clip-text text-center font-aeonikMedium text-42 text-transparent md:mt-0 md:text-6xl",
                    children: "Powered by $FLIP",
                  }),
                  (0, a.jsx)(C.Z, {
                    as: "p",
                    className:
                      "mt-5 max-w-[590px] text-center text-16 md:text-18",
                    children:
                      "The $FLIP token is the powerhouse of Chainflip. Designed to be self-sustainable, it keeps our ecosystem decentralised, trustless, and secure, while rewarding validators for their service.",
                  }),
                  (0, a.jsx)(l.zx, {
                    size: "large",
                    type: "secondary-standard",
                    className: "mt-10",
                    onClick: () => {
                      e.push("/token");
                    },
                    children: "Learn about $FLIP",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "my-11 w-full border-t border-t-cf-gray-4 md:mb-20 md:mt-36",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "mb-32 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-start justify-start",
                        children: [
                          (0, a.jsx)("div", { children: (0, a.jsx)(n.b7, {}) }),
                          (0, a.jsxs)("div", {
                            className: "ml-1 text-16",
                            children: [
                              (0, a.jsx)("span", {
                                className: "font-aeonikBold",
                                children: "Securing the protocol",
                              }),
                              (0, a.jsx)(C.Z, {
                                as: "p",
                                className:
                                  "mt-1 font-aeonikRegular text-cf-light-2",
                                children:
                                  "$FLIP is used as collateral for the validator network auctions to secure the protocol and liquidity",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-start justify-start",
                        children: [
                          (0, a.jsx)("div", { children: (0, a.jsx)(n.te, {}) }),
                          (0, a.jsxs)("div", {
                            className: "ml-1 text-16",
                            children: [
                              (0, a.jsx)("span", {
                                className: "font-aeonikBold",
                                children: "Value Capture Mechanism",
                              }),
                              (0, a.jsx)(C.Z, {
                                as: "p",
                                className:
                                  "mt-1 font-aeonikRegular text-cf-light-2",
                                children:
                                  "Network fees are used directly to buy and burn $FLIP for the benefit of all token holders",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-start justify-start",
                        children: [
                          (0, a.jsx)("div", { children: (0, a.jsx)(n.xi, {}) }),
                          (0, a.jsxs)("div", {
                            className: "ml-1 text-16",
                            children: [
                              (0, a.jsx)("span", {
                                className: "font-aeonikBold",
                                children: "Native to Ethereum",
                              }),
                              (0, a.jsx)(C.Z, {
                                as: "p",
                                className:
                                  "mt-1 font-aeonikRegular text-cf-light-2",
                                children:
                                  "$FLIP is an ERC-20 token for adoption and composability, but fully integrated into the protocol",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        E = s(3290);
      let F = {
          initial: { y: -50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: {
            delay: 0.2,
            type: "spring",
            damping: 12,
            stiffness: 28.8,
            mass: 1,
          },
        },
        _ = {
          initial: { opacity: 0 },
          animate: { opacity: 0.7 },
          transition: { delay: 0.6, duration: 0.6, ease: "easeIn" },
        },
        T = {
          initial: { y: -15, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: {
            delay: 0.8,
            type: "spring",
            damping: 12,
            stiffness: 28.8,
            mass: 1,
          },
        },
        P = {
          initial: { y: 15, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: {
            delay: 0.8,
            type: "spring",
            damping: 12,
            stiffness: 28.8,
            mass: 1,
          },
        };
      var B = () =>
        (0, a.jsxs)("section", {
          className: "mt-[-130px] flex flex-col items-center md:mt-[-140px]",
          children: [
            (0, a.jsx)(E.E.img, {
              className:
                "absolute z-[-1] mt-[165px] scale-[180%] md:left-auto md:mt-0 md:max-w-[1440px] md:scale-100",
              src: "/images/home/hero.png",
              alt: "",
              ..._,
            }),
            (0, a.jsxs)("div", {
              className:
                "mt-[280px] flex max-w-[320px] flex-col items-center space-y-8 text-center md:mt-[370px] md:max-w-[1050px]",
              children: [
                (0, a.jsx)(E.E.div, {
                  className:
                    "font-aeonikMedium text-[32px] leading-[36px] md:leading-[73px] lg:text-[64px]",
                  style: {
                    background:
                      "linear-gradient(91.69deg,#ffffff 50.28%,rgba(255, 255, 255, 0.62) 90.44%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  },
                  ...F,
                  children:
                    "Swap between Bitcoin and Solana. No wrapped tokens.",
                }),
                (0, a.jsxs)(E.E.div, {
                  className: "max-w-[720px]",
                  ...T,
                  children: [
                    (0, a.jsx)(C.Z, {
                      as: "div",
                      children:
                        "Chainflip enables low-slippage swaps between Bitcoin, Solana, Ethereum, and more.",
                    }),
                    (0, a.jsx)("div", {
                      className: "hidden md:block",
                      children: "Decentralised and permissionless.",
                    }),
                  ],
                }),
                (0, a.jsx)(E.E.div, {
                  className: "w-full md:w-[544px]",
                  ...P,
                  children: (0, a.jsxs)("a", {
                    href: "https://fo-chainflip-o.vercel.app",
                    target: "_blank",
                    className:
                      "custom-cta-button cursor-pointer font-aeonikMedium",
                    rel: "noreferrer",
                    children: [
                      (0, a.jsx)("span", { children: "Launch app" }),
                      (0, a.jsx)(n.DV, { orientation: "left-right" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      let L = [
          { name: "Framework" },
          { name: "Blockchain Capital" },
          { name: "Pantera" },
          { name: "Maven11 Capital" },
          { name: "Coinbase Ventures" },
          { name: "Hypersphere" },
          { name: "Delphi Digital" },
          { name: "Lemniscap", width: "80%" },
          { name: "Meta" },
          { name: "CMS" },
          { name: "Apollo Capital" },
          { name: "Mechanism Capital" },
          { name: "Distributed Global" },
          { name: "Eden Block" },
          { name: "Altonomy" },
          { name: "EGirl Capital" },
          { name: "Defi Alliance" },
          { name: "DACM" },
          { name: "Morningstar Ventures" },
          { name: "Taureon" },
          { name: "AU21 Capital" },
          { name: "D64" },
          { name: "Flex Dapps" },
          { name: "CTF Capital" },
          { name: "Efficient Frontier" },
        ],
        D = (e) =>
          "images/investors/"
            .concat(e.name.toLowerCase().replace(/ /g, "-"), ".")
            .concat("Lemniscap" === e.name ? "svg" : "png");
      var z = () =>
          (0, a.jsx)("section", {
            className: "w-full",
            children: (0, a.jsxs)("div", {
              className: "flex w-full flex-col items-center",
              children: [
                (0, a.jsx)("div", {
                  className: "relative h-[75vw] sm:h-[50vw]",
                  children: (0, a.jsx)("img", {
                    className:
                      "absolute left-1/2 z-[-1] min-w-[100vw] -translate-x-1/2 translate-y-[-65%] scale-[2.5] sm:top-1/2 sm:scale-100",
                    src: "images/home/amm-bg.png",
                    alt: "cf-jit",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex w-full flex-col items-center justify-start px-2 sm:px-0",
                  children: [
                    (0, a.jsx)("span", {
                      className: "mb-2 text-16 text-cf-green-1",
                      children: "The protocol",
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "max-w-[858px] bg-gradient-to-r from-white to-cf-light-2 bg-clip-text text-center font-aeonikMedium text-42 leading-[45px] text-transparent sm:text-6xl sm:leading-[73px]",
                      children:
                        "A novel AMM design using Just In Time Liquidity",
                    }),
                    (0, a.jsxs)("span", {
                      className:
                        "mt-6 max-w-[719px] text-center text-cf-light-3",
                      children: [
                        "Experience the future of cross-chain swaps with our novel",
                        " ",
                        (0, a.jsx)("b", {
                          className: "text-14 text-white sm:text-16 ",
                          children:
                            "Just-In-Time (JIT) Automated Market Maker (AMM)",
                        }),
                        ", specially built to minimise slippage and offer great pricing for high-liquidity pairs.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        A = s(7615),
        I = s.n(A);
      let R = (e) => {
        let {
          asset: t,
          title: s,
          subtitle: i,
          justification: l,
          className: n = "",
          link: r,
        } = e;
        return (0, a.jsxs)("div", {
          className: m()(
            "relative flex w-full flex-col items-center justify-end gap-8",
            "left" === l ? "sm:flex-row-reverse" : "sm:flex-row"
          ),
          children: [
            (0, a.jsx)("div", {
              className:
                "relative z-[-1] aspect-square min-h-[40vh] flex-1 sm:min-h-0 sm:min-w-[600px]",
              children: (0, a.jsx)("img", {
                className: m()("absolute", n),
                src: "/images/home/".concat(t),
                alt: "",
              }),
            }),
            (0, a.jsxs)("div", {
              className: "flex max-w-md flex-1 flex-col sm:max-w-none",
              children: [
                (0, a.jsx)("h1", {
                  className:
                    "text-24 font-semibold text-cf-white sm:text-[35px]",
                  children: s,
                }),
                (0, a.jsx)("p", { className: "text-cf-light-2", children: i }),
                r &&
                  (0, a.jsxs)(I(), {
                    className:
                      "mt-6 flex w-fit items-center space-x-0.5 rounded-md border border-cf-gray-4 bg-cf-gray-3 px-4 py-2 duration-300 ease-in hover:bg-cf-gray-4",
                    href: r.href,
                    target: "_blank",
                    children: [
                      (0, a.jsx)(r.icon, {
                        height: 16,
                        className: "text-cf-white",
                      }),
                      (0, a.jsx)("div", {
                        className: "font-aeonikMedium text-14 text-cf-light-3",
                        children: r.text,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      };
      function q() {
        return (
          i.ZP.send({ hitType: "pageview", page: "index" }),
          (0, a.jsxs)("div", {
            className: "flex flex-col justify-center space-y-36",
            children: [
              (0, a.jsx)(B, {}),
              (0, a.jsx)(N, {}),
              (0, a.jsx)(z, {}),
              (0, a.jsx)(M, {}),
              (0, a.jsx)(b, {}),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [824, 888, 774, 179], function () {
      return e((e.s = 5098));
    }),
      (_N_E = e.O());
  },
]);
