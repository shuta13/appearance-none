(() => {
var exports = {};
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 8088:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Nav_wrap__JxA9Y"
};


/***/ }),

/***/ 1201:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "PreviewImage_wrapper__A0X6m",
	"image": "PreviewImage_image__YMp_o",
	"clase_button": "PreviewImage_clase_button__7TGMF"
};


/***/ }),

/***/ 2075:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "ShareButtonContainer_wrap__oVgtF",
	"box": "ShareButtonContainer_box__2gDDU"
};


/***/ }),

/***/ 5449:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Tag_wrap__TRy1Z"
};


/***/ }),

/***/ 9626:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "TagLinkContainer_wrap__QvGgR"
};


/***/ }),

/***/ 852:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Template_wrap__WVYva",
	"title": "Template_title__RzGHI",
	"heading": "Template_heading__V8jas",
	"blog_article": "Template_blog_article__Rvkx3",
	"toc": "Template_toc__wKeSQ",
	"image": "Template_image__Umgfy"
};


/***/ }),

/***/ 7693:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "ToC_wrap__ICnOn",
	"li_text": "ToC_li_text__3_HNl"
};


/***/ }),

/***/ 4442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ Nav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../../packages/utils/str.ts
var str = __webpack_require__(7360);
// EXTERNAL MODULE: ./src/components/Nav/Nav.module.scss
var Nav_module = __webpack_require__(8088);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./src/components/Nav/Nav.tsx




const MAX_STRING_LENGTH = 20;
const Nav = ({ prevEntry , nextEntry  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Nav_module_default()).wrap,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: prevEntry && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: prevEntry.head.slug,
                        children: (0,str/* summarize */.I)(prevEntry.head.title, MAX_STRING_LENGTH)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: nextEntry && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: nextEntry.head.slug,
                        children: (0,str/* summarize */.I)(nextEntry.head.title, MAX_STRING_LENGTH)
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Nav/index.ts



/***/ }),

/***/ 4285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* reexport */ PreviewImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(6577);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/PreviewImage/PreviewImage.module.scss
var PreviewImage_module = __webpack_require__(1201);
var PreviewImage_module_default = /*#__PURE__*/__webpack_require__.n(PreviewImage_module);
;// CONCATENATED MODULE: ./src/components/PreviewImage/PreviewImage.tsx



const PreviewImage = ({ src , alt , width , height , onClick  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PreviewImage_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: src,
                alt: alt,
                width: width,
                height: height,
                className: (PreviewImage_module_default()).image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: onClick,
                className: (PreviewImage_module_default()).clase_button,
                autoFocus: true,
                children: "Close"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/PreviewImage/index.ts



/***/ }),

/***/ 7090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* reexport */ ShareButtonContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(6577);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ShareButtonContainer/ShareButtonContainer.module.scss
var ShareButtonContainer_module = __webpack_require__(2075);
var ShareButtonContainer_module_default = /*#__PURE__*/__webpack_require__.n(ShareButtonContainer_module);
// EXTERNAL MODULE: ../../packages/utils/hooks/index.ts
var hooks = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/components/ShareButtonContainer/ShareButtonContainer.tsx




const ShareButtonContainer = ()=>{
    const { mounted  } = (0,hooks/* useMount */.b)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ShareButtonContainer_module_default()).wrap,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://twitter.com/share?ref_src=twsrc%5Etfw",
                className: "twitter-share-button",
                "data-show-count": "false",
                style: {
                    outline: "none"
                },
                children: "Tweet"
            }),
            mounted && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://b.hatena.ne.jp/entry/",
                className: "hatena-bookmark-button",
                "data-hatena-bookmark-layout": "basic-label",
                "data-hatena-bookmark-lang": "ja",
                title: "このエントリーをはてなブックマークに追加",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png",
                    alt: "このエントリーをはてなブックマークに追加",
                    width: "20",
                    height: "20",
                    style: {
                        border: "none"
                    }
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/ShareButtonContainer/index.ts



/***/ }),

/***/ 4671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* reexport */ TagLinkContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Tag/Tag.module.scss
var Tag_module = __webpack_require__(5449);
var Tag_module_default = /*#__PURE__*/__webpack_require__.n(Tag_module);
;// CONCATENATED MODULE: ./src/components/Tag/Tag.tsx



const Tag = ({ tagName  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: `/tags/${tagName}`,
        className: (Tag_module_default()).wrap,
        children: [
            "#",
            tagName
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Tag/index.ts


// EXTERNAL MODULE: ./src/components/TagLinkContainer/TagLinkContainer.module.scss
var TagLinkContainer_module = __webpack_require__(9626);
var TagLinkContainer_module_default = /*#__PURE__*/__webpack_require__.n(TagLinkContainer_module);
;// CONCATENATED MODULE: ./src/components/TagLinkContainer/TagLinkContainer.tsx



const TagLinkContainer = ({ head: { tags  }  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (TagLinkContainer_module_default()).wrap,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
                    tagName: tag
                })
            }, tag))
    });
};

;// CONCATENATED MODULE: ./src/components/TagLinkContainer/index.ts



/***/ }),

/***/ 3179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1500);
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9560);
/* harmony import */ var _Template_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(852);
/* harmony import */ var _Template_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Template_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8632);
/* harmony import */ var utils_str__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7360);
/* harmony import */ var _ShareButtonContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7090);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3135);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6809);
/* harmony import */ var _TagLinkContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4671);
/* harmony import */ var _ToC__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8714);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1871);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _PreviewImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4285);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_6__, remark_gfm__WEBPACK_IMPORTED_MODULE_9__, _ToC__WEBPACK_IMPORTED_MODULE_11__, rehype_raw__WEBPACK_IMPORTED_MODULE_12__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_6__, remark_gfm__WEBPACK_IMPORTED_MODULE_9__, _ToC__WEBPACK_IMPORTED_MODULE_11__, rehype_raw__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Heading = (props)=>{
    const { node  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        id: node.children[0].value,
        href: `#${node.children[0].value}`,
        className: (_Template_module_scss__WEBPACK_IMPORTED_MODULE_16___default().heading),
        children: node.children[0].value
    });
};
const Article = ({ head , body  })=>{
    const articleRef = (0,react__WEBPACK_IMPORTED_MODULE_13__.useRef)(null);
    const [clickedImage, setClickedImage] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
    const [clickedImageProps, setClickedImageProps] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)({
        src: "",
        alt: ""
    });
    const handleClickImage = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(({ src , alt  })=>{
        setClickedImageProps({
            src,
            alt
        });
        setClickedImage((prev)=>!prev);
    }, [
        setClickedImageProps,
        setClickedImage
    ]);
    const handleClickClosePreview = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(()=>{
        setClickedImage(false);
    }, [
        setClickedImage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        if (false) {}
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_Template_module_scss__WEBPACK_IMPORTED_MODULE_16___default().wrap),
        ref: articleRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Day__WEBPACK_IMPORTED_MODULE_2__/* .Day */ .J, {
                head: head
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_Template_module_scss__WEBPACK_IMPORTED_MODULE_16___default().title),
                children: head.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TagLinkContainer__WEBPACK_IMPORTED_MODULE_10__/* .TagLinkContainer */ .d, {
                head: head
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_Template_module_scss__WEBPACK_IMPORTED_MODULE_16___default().toc),
                children: "目次"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToC__WEBPACK_IMPORTED_MODULE_11__/* .ToC */ .C, {
                body: body
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
                rehypePlugins: [
                    rehype_raw__WEBPACK_IMPORTED_MODULE_12__["default"]
                ],
                className: (_Template_module_scss__WEBPACK_IMPORTED_MODULE_16___default().blog_article),
                remarkPlugins: [
                    remark_gfm__WEBPACK_IMPORTED_MODULE_9__["default"]
                ],
                components: {
                    a: ({ children , href  })=>{
                        // @ts-ignore
                        if (href?.match("http")) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                // @ts-ignore
                                href: href,
                                target: "_blank",
                                rel: "nofollow noreferrer noopener",
                                children: children
                            });
                        }
                        // @ts-ignore
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: href,
                            children: children
                        });
                    },
                    code: ({ node , inline , className , children , ...props })=>{
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7__.Prism, {
                            // @ts-expect-error Avoid conflicting with JSX.IntrinsicElement types.
                            style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_8__.tomorrow,
                            language: match[1],
                            ...props,
                            children: String(children).replace(/\n$/, "")
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                            className: className,
                            ...props,
                            children: children
                        });
                    },
                    h1: ({ node , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            ...props,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                                node: node
                            })
                        }),
                    h2: ({ node , ...props })=>// @ts-expect-error Children should have value.
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            id: `#${node.children[0].value}`,
                            ...props,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                                node: node
                            })
                        }),
                    h3: ({ node , ...props })=>// @ts-expect-error Children should have value.
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            id: `#${node.children[0].value}`,
                            ...props,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                                node: node
                            })
                        }),
                    img: ({ src , alt  })=>{
                        if (typeof src !== "string" || typeof alt !== "string") return null;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_15___default()), {
                                width: 560,
                                height: 315,
                                src: src,
                                alt: alt,
                                loading: "lazy",
                                onClick: ()=>handleClickImage({
                                        src,
                                        alt
                                    }),
                                tabIndex: 0,
                                className: (_Template_module_scss__WEBPACK_IMPORTED_MODULE_16___default().image)
                            })
                        });
                    }
                },
                children: body.content.toString()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShareButtonContainer__WEBPACK_IMPORTED_MODULE_5__/* .ShareButtonContainer */ .V, {}),
            clickedImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PreviewImage__WEBPACK_IMPORTED_MODULE_14__/* .PreviewImage */ .S, {
                src: clickedImageProps.src,
                alt: clickedImageProps.alt,
                onClick: handleClickClosePreview
            })
        ]
    });
};
const Template = (props)=>{
    const { head , body  } = props;
    const title = head.title;
    const description = (0,utils_str__WEBPACK_IMPORTED_MODULE_4__/* .summarize */ .I)("" /** @todo serialize body.content */ );
    const jsonLd = {
        title: title,
        description: description,
        url: _config__WEBPACK_IMPORTED_MODULE_1__/* .BlogHost */ .Ln + `/entry/${head.slug}`,
        imageUrl: _config__WEBPACK_IMPORTED_MODULE_1__/* .OgImageUrl */ .Wx,
        updated: _config__WEBPACK_IMPORTED_MODULE_1__/* .DateNow */ .Nf
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SEO__WEBPACK_IMPORTED_MODULE_3__/* .SEO */ .H, {
                title: title,
                description: description,
                propsJsonLd: jsonLd
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Article, {
                ...props
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* reexport safe */ _Template__WEBPACK_IMPORTED_MODULE_0__.Y)
/* harmony export */ });
/* harmony import */ var _Template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3179);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Template__WEBPACK_IMPORTED_MODULE_0__]);
_Template__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ ToC)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ToC_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7693);
/* harmony import */ var _ToC_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ToC_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6016);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_2__, remark__WEBPACK_IMPORTED_MODULE_3__]);
([unist_util_visit__WEBPACK_IMPORTED_MODULE_2__, remark__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const createHeadingNodes = (content)=>{
    /** @todo fix */ const mdast = (content && (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().parse(content.toString())) ?? "";
    if (typeof mdast !== "string") {
        const headingNodes = [];
        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_2__.visit)(mdast, "heading", (child)=>{
            const headingNode = {
                depth: child.depth,
                // @ts-expect-error Children should have value.
                value: child.children[0].value
            };
            headingNodes.push(headingNode);
        });
        return headingNodes;
    }
};
const renderToC = (depth, value)=>{
    switch(depth){
        case 2:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: (_ToC_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li_text),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: `#${value}`,
                    children: value
                })
            });
        case 3:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: (_ToC_module_scss__WEBPACK_IMPORTED_MODULE_4___default().li_text),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `#${value}`,
                        children: value
                    })
                })
            });
    }
};
const ToC = ({ body  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: (_ToC_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrap),
        children: createHeadingNodes(body.content)?.map((node, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                children: renderToC(node.depth, node.value)
            }, i))
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _ToC__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _ToC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToC__WEBPACK_IMPORTED_MODULE_0__]);
_ToC__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9071);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4442);
/* harmony import */ var _usecases_getBlogData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2102);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Template__WEBPACK_IMPORTED_MODULE_1__]);
_components_Template__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const BlogPost = (props)=>{
    const { entry , prevEntry , nextEntry  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Template__WEBPACK_IMPORTED_MODULE_1__/* .Template */ .Y, {
                ...entry
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__/* .Nav */ .J, {
                prevEntry: prevEntry,
                nextEntry: nextEntry
            })
        ]
    });
};
const getStaticProps = async (context)=>{
    const data = await (0,_usecases_getBlogData__WEBPACK_IMPORTED_MODULE_3__/* .getBlogData */ .T)();
    const entry = data.find((d)=>d.head.slug === context.params?.slug);
    const currentIndex = data.indexOf(entry);
    const prevEntry = currentIndex !== -1 && currentIndex < data.length - 1 ? data[currentIndex + 1] : null;
    const nextEntry = currentIndex !== -1 && currentIndex > 0 ? data[currentIndex - 1] : null;
    if (entry != null) {
        return {
            props: {
                entry,
                prevEntry,
                nextEntry
            }
        };
    } else {
        return {
            notFound: true
        };
    }
};
const getStaticPaths = async ()=>{
    const data = await (0,_usecases_getBlogData__WEBPACK_IMPORTED_MODULE_3__/* .getBlogData */ .T)();
    if (data != null) {
        const paths = data.map((d)=>({
                params: {
                    slug: d.head.slug
                }
            }));
        return {
            paths,
            fallback: false
        };
    } else {
        throw new Error();
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 891:
/***/ ((module) => {

"use strict";
module.exports = require("@notionhq/client");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 7123:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/ja");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 727:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 4794:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4579:
/***/ ((module) => {

"use strict";
module.exports = require("remove-markdown");

/***/ }),

/***/ 3135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ }),

/***/ 1871:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-raw");;

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

"use strict";
module.exports = import("unist-util-visit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [274,97,577,830], () => (__webpack_exec__(3095)));
module.exports = __webpack_exports__;

})();