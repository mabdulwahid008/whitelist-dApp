"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WHITELIST_CONTRACT_ADDRESS\": function() { return /* binding */ WHITELIST_CONTRACT_ADDRESS; },\n/* harmony export */   \"abi\": function() { return /* binding */ abi; }\n/* harmony export */ });\nconst WHITELIST_CONTRACT_ADDRESS = \"0xD8aD849BaC945f57BC78f4396D874DcFEc6C2aaC\";\n// export const WHITELIST_CONTRACT_ADDRESS = \"0x533eaeb82B4695645420220de937503d3AA9c659\";\nconst abi = [\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"uint8\",\n                \"name\": \"_maxWhitelistedAddresses\",\n                \"type\": \"uint8\"\n            }\n        ],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"constructor\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"addAddressToWhitelist\",\n        \"outputs\": [],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"maxWhitelistedAddresses\",\n        \"outputs\": [\n            {\n                \"internalType\": \"uint8\",\n                \"name\": \"\",\n                \"type\": \"uint8\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [],\n        \"name\": \"numAddressesWhitelisted\",\n        \"outputs\": [\n            {\n                \"internalType\": \"uint8\",\n                \"name\": \"\",\n                \"type\": \"uint8\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"address\",\n                \"name\": \"\",\n                \"type\": \"address\"\n            }\n        ],\n        \"name\": \"whitelistedAddresses\",\n        \"outputs\": [\n            {\n                \"internalType\": \"bool\",\n                \"name\": \"\",\n                \"type\": \"bool\"\n            }\n        ],\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSw2QkFBNkIsNkNBQTZDO0FBQ3ZGLDBGQUEwRjtBQUNuRixNQUFNQyxNQUFPO0lBQ2hCO1FBQ0UsVUFBVTtZQUNSO2dCQUNFLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1Y7U0FDRDtRQUNELG1CQUFtQjtRQUNuQixRQUFRO0lBQ1Y7SUFDQTtRQUNFLFVBQVUsRUFBRTtRQUNaLFFBQVE7UUFDUixXQUFXLEVBQUU7UUFDYixtQkFBbUI7UUFDbkIsUUFBUTtJQUNWO0lBQ0E7UUFDRSxVQUFVLEVBQUU7UUFDWixRQUFRO1FBQ1IsV0FBVztZQUNUO2dCQUNFLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1Y7U0FDRDtRQUNELG1CQUFtQjtRQUNuQixRQUFRO0lBQ1Y7SUFDQTtRQUNFLFVBQVUsRUFBRTtRQUNaLFFBQVE7UUFDUixXQUFXO1lBQ1Q7Z0JBQ0UsZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDVjtTQUNEO1FBQ0QsbUJBQW1CO1FBQ25CLFFBQVE7SUFDVjtJQUNBO1FBQ0UsVUFBVTtZQUNSO2dCQUNFLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1Y7U0FDRDtRQUNELFFBQVE7UUFDUixXQUFXO1lBQ1Q7Z0JBQ0UsZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDVjtTQUNEO1FBQ0QsbUJBQW1CO1FBQ25CLFFBQVE7SUFDVjtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC5qcz8zNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyA9IFwiMHhEOGFEODQ5QmFDOTQ1ZjU3QkM3OGY0Mzk2RDg3NERjRkVjNkMyYWFDXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyA9IFwiMHg1MzNlYWViODJCNDY5NTY0NTQyMDIyMGRlOTM3NTAzZDNBQTljNjU5XCI7XHJcbmV4cG9ydCBjb25zdCBhYmkgPSAgW1xyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50OFwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiX21heFdoaXRlbGlzdGVkQWRkcmVzc2VzXCIsXHJcbiAgICAgICAgICBcInR5cGVcIjogXCJ1aW50OFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiY29uc3RydWN0b3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpbnB1dHNcIjogW10sXHJcbiAgICAgIFwibmFtZVwiOiBcImFkZEFkZHJlc3NUb1doaXRlbGlzdFwiLFxyXG4gICAgICBcIm91dHB1dHNcIjogW10sXHJcbiAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG4gICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXSxcclxuICAgICAgXCJuYW1lXCI6IFwibWF4V2hpdGVsaXN0ZWRBZGRyZXNzZXNcIixcclxuICAgICAgXCJvdXRwdXRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQ4XCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQ4XCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG4gICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXSxcclxuICAgICAgXCJuYW1lXCI6IFwibnVtQWRkcmVzc2VzV2hpdGVsaXN0ZWRcIixcclxuICAgICAgXCJvdXRwdXRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQ4XCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQ4XCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG4gICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImlucHV0c1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgIFwidHlwZVwiOiBcImFkZHJlc3NcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJuYW1lXCI6IFwid2hpdGVsaXN0ZWRBZGRyZXNzZXNcIixcclxuICAgICAgXCJvdXRwdXRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcImJvb2xcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG4gICAgfVxyXG4gIF0iXSwibmFtZXMiOlsiV0hJVEVMSVNUX0NPTlRSQUNUX0FERFJFU1MiLCJhYmkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});