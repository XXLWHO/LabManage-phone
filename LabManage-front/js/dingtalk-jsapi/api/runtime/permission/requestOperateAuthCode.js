"use strict";function requestOperateAuthCode$(e){return ddSdk_1.ddSdk.invokeAPI(apiName,e)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.requestOperateAuthCode$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiName="runtime.permission.requestOperateAuthCode",paramsDeal=function(e){return Object.assign(e,{url:location.href.split("#")[0]})};ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.pc]={vs:"3.3.0",paramsDeal:paramsDeal},_a[ddSdk_1.ENV_ENUM.ios]={vs:"3.3.0"},_a[ddSdk_1.ENV_ENUM.android]={vs:"3.3.0"},_a)),exports.requestOperateAuthCode$=requestOperateAuthCode$,exports.default=requestOperateAuthCode$;