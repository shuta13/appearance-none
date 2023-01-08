exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 5674:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Day_wrap__sxwyi"
};


/***/ }),

/***/ 9560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ Day)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "dayjs/locale/ja"
var ja_ = __webpack_require__(7123);
var ja_default = /*#__PURE__*/__webpack_require__.n(ja_);
// EXTERNAL MODULE: ./src/components/Day/Day.module.scss
var Day_module = __webpack_require__(5674);
var Day_module_default = /*#__PURE__*/__webpack_require__.n(Day_module);
;// CONCATENATED MODULE: ./src/components/Day/Day.tsx




external_dayjs_default().locale((ja_default()));
const Day = ({ head: { created  }  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: (Day_module_default()).wrap,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                dateTime: external_dayjs_default()(created).format("YYYY-MM-DD"),
                children: external_dayjs_default()(created).format("YYYY/MM/DD")
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Day/index.ts



/***/ }),

/***/ 8632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1500);



// see: https://github.com/vercel/next.js/issues/2213#issuecomment-307478160
// see: https://technicalseo.com/tools/schema-markup-generator/
const jsonLd = (args)=>{
    const { title , updated , url , imageUrl , description  } = args;
    const json = [
        {
            "@context": "http://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": url
            },
            headline: title,
            description: description,
            url: url,
            image: [
                imageUrl
            ],
            author: {
                "@type": "Person",
                name: "did0es",
                url: "https://did0es.me"
            },
            publisher: {
                "@type": "Organization",
                name: "did0es",
                url: "https://did0es.me",
                logo: {
                    "@type": "ImageObject",
                    url: "https://blog.did0es.me/images/icon.png"
                }
            },
            datePublished: updated,
            dateModified: updated
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: _config__WEBPACK_IMPORTED_MODULE_2__/* .BlogTitle */ .eT,
                    item: "https://blog.did0es.me"
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: title,
                    item: url
                }
            ]
        }
    ];
    return JSON.stringify(json);
};
const SEO = (props)=>{
    const { title =_config__WEBPACK_IMPORTED_MODULE_2__/* .BlogTitle */ .eT , description =_config__WEBPACK_IMPORTED_MODULE_2__/* .BlogDescription */ .x$ , propsJsonLd =_config__WEBPACK_IMPORTED_MODULE_2__/* .DefaultJsonId */ .Gk  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/images/icon.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1.0, width=device-width"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: `${description}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: `${title}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: "https://blog.did0es.me/images/og.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: `${description}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:locale",
                content: "ja_JP"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: "https://blog.did0es.me"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: `${title}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: `${title}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: `${description}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: "https://blog.did0es.me/images/og.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image:secure_url",
                content: "https://blog.did0es.me/images/og.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image:type",
                content: "image/png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image:width",
                content: "1200"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image:height",
                content: "630"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title === _config__WEBPACK_IMPORTED_MODULE_2__/* .BlogTitle */ .eT ? _config__WEBPACK_IMPORTED_MODULE_2__/* .BlogTitle */ .eT : `${title} | ${_config__WEBPACK_IMPORTED_MODULE_2__/* .BlogTitle */ .eT}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: jsonLd({
                        ...propsJsonLd
                    })
                }
            })
        ]
    });
};


/***/ }),

/***/ 1500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gk": () => (/* binding */ DefaultJsonId),
/* harmony export */   "Ln": () => (/* binding */ BlogHost),
/* harmony export */   "Nf": () => (/* binding */ DateNow),
/* harmony export */   "Wx": () => (/* binding */ OgImageUrl),
/* harmony export */   "eT": () => (/* binding */ BlogTitle),
/* harmony export */   "x$": () => (/* binding */ BlogDescription)
/* harmony export */ });
/* unused harmony export TagsMap */
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const BlogTitle = "{ appearance: none }";
const BlogDescription = "何も見えない";
const BlogHost = "https://blog.did0es.me";
const OgImageUrl = "https://blog.did0es.me/images/og.png";
const DateNow = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().toISOString();
const TagsMap = {
    engineering: "技術",
    lifestyle: "生活",
    frontend: "フロントエンド",
    react: "React",
    webgl: "WebGL",
    vj: "VJ",
    nextjs: "Next.js",
    personal_research: "自由研究",
    others: "その他"
};
const DefaultJsonId = {
    title: BlogTitle,
    description: BlogDescription,
    url: BlogHost,
    imageUrl: OgImageUrl,
    updated: DateNow
};


/***/ }),

/***/ 2102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ getBlogData)
});

// EXTERNAL MODULE: external "@notionhq/client"
var client_ = __webpack_require__(891);
;// CONCATENATED MODULE: ../../packages/utils/notion.ts

function createNotionClient() {
    const accessToken = process.env.NOTION_ACCESS_TOKEN;
    return new client_.Client({
        auth: accessToken
    });
}

;// CONCATENATED MODULE: ./src/usecases/getBlogData.ts

async function getBlogData() {
    const client = createNotionClient();
    const databaseId = process.env.NOTION_DATABASE_ID;
    try {
        const databaseResults = (await client.databases.query({
            database_id: databaseId,
            filter: {
                property: "Status",
                select: {
                    equals: "Published"
                }
            }
        })).results;
        const entries = [];
        for (const result of databaseResults){
            const pageProps = (await client.pages.retrieve({
                page_id: result.id
            })).properties;
            const pageContents = await client.blocks.children.list({
                block_id: result.id
            });
            entries.push({
                head: {
                    slug: pageProps.Slug.rich_text[0].plain_text,
                    tags: pageProps.Tags.multi_select.map(({ name  })=>name),
                    created: pageProps.Created.created_time,
                    updated: pageProps.Updated.last_edited_time,
                    title: pageProps.Name.title[0].plain_text,
                    coverImageUrl: pageProps.cover?.external.url ?? null
                },
                body: {
                    content: pageContents.results
                }
            });
        }
        return entries;
    } catch (e) {
        throw e;
    }
}


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useMount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMount = ()=>{
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setMounted(true);
    }, []);
    return {
        mounted
    };
};


/***/ }),

/***/ 7360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ summarize)
/* harmony export */ });
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4579);
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remove_markdown__WEBPACK_IMPORTED_MODULE_0__);

const summarize = (body, limit = 160)=>{
    const text = remove_markdown__WEBPACK_IMPORTED_MODULE_0___default()(body).replace(/\n/g, " ");
    return text.length > limit ? text.substring(0, limit) + "..." : text;
};


/***/ })

};
;