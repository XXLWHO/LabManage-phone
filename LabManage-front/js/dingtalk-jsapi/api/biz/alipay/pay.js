"use strict";function pay$(d){return ddSdk_1.ddSdk.invokeAPI(apiName,d)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.pay$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiName="biz.alipay.pay";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.8.0"},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.8.0"},_a)),exports.pay$=pay$,exports.default=pay$;