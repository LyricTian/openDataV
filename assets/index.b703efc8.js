var nr=Object.defineProperty,sr=Object.defineProperties;var ir=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var ar=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable;var $=(r,e,n)=>e in r?nr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,y=(r,e)=>{for(var n in e||(e={}))ar.call(e,n)&&$(r,n,e[n]);if(ve)for(var n of ve(e))or.call(e,n)&&$(r,n,e[n]);return r},q=(r,e)=>sr(r,ir(e));var _=(r,e,n)=>($(r,typeof e!="symbol"?e+"":e,n),n);import{O as ur,U as fr,V as lr,u as cr}from"./index.1dcaaf11.js";var $e={exports:{}},ue={exports:{}},_e=function(e,n){return function(){for(var t=new Array(arguments.length),i=0;i<t.length;i++)t[i]=arguments[i];return e.apply(n,t)}},dr=_e,S=Object.prototype.toString;function fe(r){return S.call(r)==="[object Array]"}function ae(r){return typeof r=="undefined"}function hr(r){return r!==null&&!ae(r)&&r.constructor!==null&&!ae(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function pr(r){return S.call(r)==="[object ArrayBuffer]"}function mr(r){return typeof FormData!="undefined"&&r instanceof FormData}function vr(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function yr(r){return typeof r=="string"}function br(r){return typeof r=="number"}function Fe(r){return r!==null&&typeof r=="object"}function L(r){if(S.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Er(r){return S.call(r)==="[object Date]"}function wr(r){return S.call(r)==="[object File]"}function Rr(r){return S.call(r)==="[object Blob]"}function Me(r){return S.call(r)==="[object Function]"}function Sr(r){return Fe(r)&&Me(r.pipe)}function Cr(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function xr(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function qr(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function le(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),fe(r))for(var n=0,s=r.length;n<s;n++)e.call(null,r[n],n,r);else for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.call(null,r[t],t,r)}function oe(){var r={};function e(t,i){L(r[i])&&L(t)?r[i]=oe(r[i],t):L(t)?r[i]=oe({},t):fe(t)?r[i]=t.slice():r[i]=t}for(var n=0,s=arguments.length;n<s;n++)le(arguments[n],e);return r}function Or(r,e,n){return le(e,function(t,i){n&&typeof t=="function"?r[i]=dr(t,n):r[i]=t}),r}function Ar(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var m={isArray:fe,isArrayBuffer:pr,isBuffer:hr,isFormData:mr,isArrayBufferView:vr,isString:yr,isNumber:br,isObject:Fe,isPlainObject:L,isUndefined:ae,isDate:Er,isFile:wr,isBlob:Rr,isFunction:Me,isStream:Sr,isURLSearchParams:Cr,isStandardBrowserEnv:qr,forEach:le,merge:oe,extend:Or,trim:xr,stripBOM:Ar},O=m;function ye(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Je=function(e,n,s){if(!n)return e;var t;if(s)t=s(n);else if(O.isURLSearchParams(n))t=n.toString();else{var i=[];O.forEach(n,function(l,f){l===null||typeof l=="undefined"||(O.isArray(l)?f=f+"[]":l=[l],O.forEach(l,function(a){O.isDate(a)?a=a.toISOString():O.isObject(a)&&(a=JSON.stringify(a)),i.push(ye(f)+"="+ye(a))}))}),t=i.join("&")}if(t){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+t}return e},Pr=m;function j(){this.handlers=[]}j.prototype.use=function(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};j.prototype.forEach=function(e){Pr.forEach(this.handlers,function(s){s!==null&&e(s)})};var Tr=j,Ur=m,Nr=function(e,n){Ur.forEach(e,function(t,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[i])})},ze=function(e,n,s,t,i){return e.config=n,s&&(e.code=s),e.request=t,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},F,be;function Ve(){if(be)return F;be=1;var r=ze;return F=function(n,s,t,i,u){var o=new Error(n);return r(o,s,t,i,u)},F}var M,Ee;function gr(){if(Ee)return M;Ee=1;var r=Ve();return M=function(n,s,t){var i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):s(r("Request failed with status code "+t.status,t.config,null,t.request,t))},M}var J,we;function Lr(){if(we)return J;we=1;var r=m;return J=r.isStandardBrowserEnv()?function(){return{write:function(s,t,i,u,o,l){var f=[];f.push(s+"="+encodeURIComponent(t)),r.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),r.isString(u)&&f.push("path="+u),r.isString(o)&&f.push("domain="+o),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(s){var t=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),J}var z,Re;function Br(){return Re||(Re=1,z=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),z}var V,Se;function jr(){return Se||(Se=1,V=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}),V}var W,Ce;function Dr(){if(Ce)return W;Ce=1;var r=Br(),e=jr();return W=function(s,t){return s&&!r(t)?e(s,t):t},W}var X,xe;function kr(){if(xe)return X;xe=1;var r=m,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return X=function(s){var t={},i,u,o;return s&&r.forEach(s.split(`
`),function(f){if(o=f.indexOf(":"),i=r.trim(f.substr(0,o)).toLowerCase(),u=r.trim(f.substr(o+1)),i){if(t[i]&&e.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([u]):t[i]=t[i]?t[i]+", "+u:u}}),t},X}var K,qe;function Ir(){if(qe)return K;qe=1;var r=m;return K=r.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),t;function i(u){var o=u;return n&&(s.setAttribute("href",o),o=s.href),s.setAttribute("href",o),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return t=i(window.location.href),function(o){var l=r.isString(o)?i(o):o;return l.protocol===t.protocol&&l.host===t.host}}():function(){return function(){return!0}}(),K}var G,Oe;function D(){if(Oe)return G;Oe=1;function r(e){this.message=e}return r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,G=r,G}var Y,Ae;function Pe(){if(Ae)return Y;Ae=1;var r=m,e=gr(),n=Lr(),s=Je,t=Dr(),i=kr(),u=Ir(),o=Ve(),l=k(),f=D();return Y=function(a){return new Promise(function(w,E){var P=a.data,T=a.headers,U=a.responseType,C;function de(){a.cancelToken&&a.cancelToken.unsubscribe(C),a.signal&&a.signal.removeEventListener("abort",C)}r.isFormData(P)&&delete T["Content-Type"];var d=new XMLHttpRequest;if(a.auth){var er=a.auth.username||"",rr=a.auth.password?unescape(encodeURIComponent(a.auth.password)):"";T.Authorization="Basic "+btoa(er+":"+rr)}var he=t(a.baseURL,a.url);d.open(a.method.toUpperCase(),s(he,a.params,a.paramsSerializer),!0),d.timeout=a.timeout;function pe(){if(!!d){var v="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,x=!U||U==="text"||U==="json"?d.responseText:d.response,R={data:x,status:d.status,statusText:d.statusText,headers:v,config:a,request:d};e(function(H){w(H),de()},function(H){E(H),de()},R),d=null}}if("onloadend"in d?d.onloadend=pe:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(pe)},d.onabort=function(){!d||(E(o("Request aborted",a,"ECONNABORTED",d)),d=null)},d.onerror=function(){E(o("Network Error",a,null,d)),d=null},d.ontimeout=function(){var x=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded",R=a.transitional||l.transitional;a.timeoutErrorMessage&&(x=a.timeoutErrorMessage),E(o(x,a,R.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var me=(a.withCredentials||u(he))&&a.xsrfCookieName?n.read(a.xsrfCookieName):void 0;me&&(T[a.xsrfHeaderName]=me)}"setRequestHeader"in d&&r.forEach(T,function(x,R){typeof P=="undefined"&&R.toLowerCase()==="content-type"?delete T[R]:d.setRequestHeader(R,x)}),r.isUndefined(a.withCredentials)||(d.withCredentials=!!a.withCredentials),U&&U!=="json"&&(d.responseType=a.responseType),typeof a.onDownloadProgress=="function"&&d.addEventListener("progress",a.onDownloadProgress),typeof a.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",a.onUploadProgress),(a.cancelToken||a.signal)&&(C=function(v){!d||(E(!v||v&&v.type?new f("canceled"):v),d.abort(),d=null)},a.cancelToken&&a.cancelToken.subscribe(C),a.signal&&(a.signal.aborted?C():a.signal.addEventListener("abort",C))),P||(P=null),d.send(P)})},Y}var Q,Te;function k(){if(Te)return Q;Te=1;var r=m,e=Nr,n=ze,s={"Content-Type":"application/x-www-form-urlencoded"};function t(l,f){!r.isUndefined(l)&&r.isUndefined(l["Content-Type"])&&(l["Content-Type"]=f)}function i(){var l;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(l=Pe()),l}function u(l,f,c){if(r.isString(l))try{return(f||JSON.parse)(l),r.trim(l)}catch(a){if(a.name!=="SyntaxError")throw a}return(c||JSON.stringify)(l)}var o={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:i(),transformRequest:[function(f,c){return e(c,"Accept"),e(c,"Content-Type"),r.isFormData(f)||r.isArrayBuffer(f)||r.isBuffer(f)||r.isStream(f)||r.isFile(f)||r.isBlob(f)?f:r.isArrayBufferView(f)?f.buffer:r.isURLSearchParams(f)?(t(c,"application/x-www-form-urlencoded;charset=utf-8"),f.toString()):r.isObject(f)||c&&c["Content-Type"]==="application/json"?(t(c,"application/json"),u(f)):f}],transformResponse:[function(f){var c=this.transitional||o.transitional,a=c&&c.silentJSONParsing,h=c&&c.forcedJSONParsing,w=!a&&this.responseType==="json";if(w||h&&r.isString(f)&&f.length)try{return JSON.parse(f)}catch(E){if(w)throw E.name==="SyntaxError"?n(E,this,"E_JSON_PARSE"):E}return f}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(f){return f>=200&&f<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};return r.forEach(["delete","get","head"],function(f){o.headers[f]={}}),r.forEach(["post","put","patch"],function(f){o.headers[f]=r.merge(s)}),Q=o,Q}var Hr=m,$r=k(),_r=function(e,n,s){var t=this||$r;return Hr.forEach(s,function(u){e=u.call(t,e,n)}),e},Z,Ue;function We(){return Ue||(Ue=1,Z=function(e){return!!(e&&e.__CANCEL__)}),Z}var Ne=m,ee=_r,Fr=We(),Mr=k(),Jr=D();function re(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Jr("canceled")}var zr=function(e){re(e),e.headers=e.headers||{},e.data=ee.call(e,e.data,e.headers,e.transformRequest),e.headers=Ne.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ne.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var n=e.adapter||Mr.adapter;return n(e).then(function(t){return re(e),t.data=ee.call(e,t.data,t.headers,e.transformResponse),t},function(t){return Fr(t)||(re(e),t&&t.response&&(t.response.data=ee.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},p=m,Xe=function(e,n){n=n||{};var s={};function t(c,a){return p.isPlainObject(c)&&p.isPlainObject(a)?p.merge(c,a):p.isPlainObject(a)?p.merge({},a):p.isArray(a)?a.slice():a}function i(c){if(p.isUndefined(n[c])){if(!p.isUndefined(e[c]))return t(void 0,e[c])}else return t(e[c],n[c])}function u(c){if(!p.isUndefined(n[c]))return t(void 0,n[c])}function o(c){if(p.isUndefined(n[c])){if(!p.isUndefined(e[c]))return t(void 0,e[c])}else return t(void 0,n[c])}function l(c){if(c in n)return t(e[c],n[c]);if(c in e)return t(void 0,e[c])}var f={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return p.forEach(Object.keys(e).concat(Object.keys(n)),function(a){var h=f[a]||i,w=h(a);p.isUndefined(w)&&h!==l||(s[a]=w)}),s},te,ge;function Ke(){return ge||(ge=1,te={version:"0.23.0"}),te}var Vr=Ke().version,ce={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ce[r]=function(s){return typeof s===r||"a"+(e<1?"n ":" ")+r}});var Le={};ce.transitional=function(e,n,s){function t(i,u){return"[Axios v"+Vr+"] Transitional option '"+i+"'"+u+(s?". "+s:"")}return function(i,u,o){if(e===!1)throw new Error(t(u," has been removed"+(n?" in "+n:"")));return n&&!Le[u]&&(Le[u]=!0,console.warn(t(u," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,u,o):!0}};function Wr(r,e,n){if(typeof r!="object")throw new TypeError("options must be an object");for(var s=Object.keys(r),t=s.length;t-- >0;){var i=s[t],u=e[i];if(u){var o=r[i],l=o===void 0||u(o,i,r);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(n!==!0)throw Error("Unknown option "+i)}}var Xr={assertOptions:Wr,validators:ce},Ge=m,Kr=Je,Be=Tr,je=zr,I=Xe,Ye=Xr,A=Ye.validators;function N(r){this.defaults=r,this.interceptors={request:new Be,response:new Be}}N.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=I(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;n!==void 0&&Ye.assertOptions(n,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1);var s=[],t=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(e)===!1||(t=t&&h.synchronous,s.unshift(h.fulfilled,h.rejected))});var i=[];this.interceptors.response.forEach(function(h){i.push(h.fulfilled,h.rejected)});var u;if(!t){var o=[je,void 0];for(Array.prototype.unshift.apply(o,s),o=o.concat(i),u=Promise.resolve(e);o.length;)u=u.then(o.shift(),o.shift());return u}for(var l=e;s.length;){var f=s.shift(),c=s.shift();try{l=f(l)}catch(a){c(a);break}}try{u=je(l)}catch(a){return Promise.reject(a)}for(;i.length;)u=u.then(i.shift(),i.shift());return u};N.prototype.getUri=function(e){return e=I(this.defaults,e),Kr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Ge.forEach(["delete","get","head","options"],function(e){N.prototype[e]=function(n,s){return this.request(I(s||{},{method:e,url:n,data:(s||{}).data}))}});Ge.forEach(["post","put","patch"],function(e){N.prototype[e]=function(n,s,t){return this.request(I(t||{},{method:e,url:n,data:s}))}});var Gr=N,ne,De;function Yr(){if(De)return ne;De=1;var r=D();function e(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(u){s=u});var t=this;this.promise.then(function(i){if(!!t._listeners){var u,o=t._listeners.length;for(u=0;u<o;u++)t._listeners[u](i);t._listeners=null}}),this.promise.then=function(i){var u,o=new Promise(function(l){t.subscribe(l),u=l}).then(i);return o.cancel=function(){t.unsubscribe(u)},o},n(function(u){t.reason||(t.reason=new r(u),s(t.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},e.prototype.unsubscribe=function(s){if(!!this._listeners){var t=this._listeners.indexOf(s);t!==-1&&this._listeners.splice(t,1)}},e.source=function(){var s,t=new e(function(u){s=u});return{token:t,cancel:s}},ne=e,ne}var se,ke;function Qr(){return ke||(ke=1,se=function(e){return function(s){return e.apply(null,s)}}),se}var ie,Ie;function Zr(){return Ie||(Ie=1,ie=function(e){return typeof e=="object"&&e.isAxiosError===!0}),ie}var He=m,et=_e,B=Gr,rt=Xe,tt=k();function Qe(r){var e=new B(r),n=et(B.prototype.request,e);return He.extend(n,B.prototype,e),He.extend(n,e),n.create=function(t){return Qe(rt(r,t))},n}var b=Qe(tt);b.Axios=B;b.Cancel=D();b.CancelToken=Yr();b.isCancel=We();b.VERSION=Ke().version;b.all=function(e){return Promise.all(e)};b.spread=Qr();b.isAxiosError=Zr();ue.exports=b;ue.exports.default=b;(function(r){r.exports=ue.exports})($e);const nt=ur($e.exports),g={baseURL:"",timeout:1e4,headers:{"Content-Type":fr.JSON}};function st(r){if(!r)return g;const{headers:e}=r;return e&&typeof e=="object"&&(g.headers=y(y({},g.headers),e)),y(y({},it(r,"headers")),g)}function it(r,e){return Object.keys(r).filter(n=>!e.includes(n)).reduce((n,s)=>(n[s]=r[s],n),{})}class Ze{constructor(e=!1){_(this,"axiosInstance");_(this,"isBlock",!1);this.axiosInstance=nt.create(st()),this.httpHookRequest(),this.httpHookResponse(),this.isBlock=e}httpHookRequest(){this.axiosInstance.interceptors.request.use(e=>{const s=lr().userToken;s&&e.headers&&(e.headers.authorization=s);const t=cr();return this.isBlock&&t.isEditMode?Promise.reject("http is disable where the mode is edit"):e},e=>Promise.reject(e))}httpHookResponse(){this.axiosInstance.interceptors.response.use(e=>e,e=>{const{response:n}=e;return n&&this.errorHandler(n.status,n.data.message),Promise.reject(e)})}errorHandler(e,n){console.log(e,n)}get(e){return this.request(q(y({},e),{method:"GET"}))}post(e){return this.request(q(y({},e),{method:"POST"}))}put(e){return this.request(q(y({},e),{method:"PUT"}))}patch(e){return this.request(q(y({},e),{method:"PATCH"}))}delete(e){return this.request(q(y({},e),{method:"DELETE"}))}request(e){return new Promise((n,s)=>{this.axiosInstance.request(e).then(t=>{n(t)}).catch(t=>{s(t)})})}}const ut=new Ze(!0),ft=new Ze(!1);export{ft as a,ut as h};
