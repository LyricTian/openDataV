var Ta=Object.defineProperty,Pa=Object.defineProperties;var Aa=Object.getOwnPropertyDescriptors;var vn=Object.getOwnPropertySymbols;var Na=Object.prototype.hasOwnProperty,Va=Object.prototype.propertyIsEnumerable;var gn=(e,t,n)=>t in e?Ta(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ft=(e,t)=>{for(var n in t||(t={}))Na.call(t,n)&&gn(e,n,t[n]);if(vn)for(var n of vn(t))Va.call(t,n)&&gn(e,n,t[n]);return e},_t=(e,t)=>Pa(e,Aa(t));var ke=(e,t,n)=>new Promise((a,o)=>{var r=s=>{try{i(n.next(s))}catch(u){o(u)}},l=s=>{try{i(n.throw(s))}catch(u){o(u)}},i=s=>s.done?a(s.value):Promise.resolve(s.value).then(r,l);i((n=n.apply(e,t)).next())});import{d as L,B,a2 as La,a3 as Ua,a4 as h,a5 as xn,a6 as Ma,a7 as $t,a8 as Oa,a9 as y,aa as M,ab as O,ac as Ae,ad as ja,ae as je,af as Te,ag as He,ah as Ze,ai as Ne,aj as it,ak as Qe,al as Xe,am as st,c as V,an as Tt,ao as dt,ap as cn,aq as ht,ar as Yt,as as Kt,at as Jt,au as Hn,av as Ha,aw as Y,ax as Pt,ay as Wn,az as _e,aA as Wa,aB as At,aC as ye,aD as tt,G as Pe,aE as be,aF as ut,aG as Xa,aH as Zt,aI as Ga,aJ as qa,aK as Ya,aL as Ka,aM as Ja,J as me,aN as Za,aO as le,aP as et,aQ as kt,aR as Qa,aS as eo,aT as xt,aU as to,M as De,aV as no,aW as ao,aX as Ee,aY as Xn,aZ as Dt,a_ as oo,a$ as bt,b0 as Gn,b1 as vt,b2 as mt,b3 as ro,b4 as lo,b5 as io,b6 as Qt,b7 as so,b8 as yn,b9 as _n,ba as uo,bb as co,F as Ce,bc as fo,bd as po,be as ho,bf as mo,bg as bo,bh as wn,bi as vo,bj as go,_ as we,E as Nt,I as at,o as R,b as J,K as fe,L as nt,f as Ve,a as v,C as Ie,N as P,r as ze,e as X,n as Vt,bk as xo,u as $e,bl as en,bm as Cn,S as qn,k as Sn,R as It,w as U,h as yo,bn as _o,i as zt,O as Lt,p as tn,bo as wo,bp as Yn,x as Me,bq as Co,br as So,H as Ut,bs as Kn,bt as Jn,bu as Zn,Y as Mt,bv as ko,bw as Ue,bx as Ro,by as $o,a1 as Do,a0 as Qn,bz as ea,bA as fn,bB as Io,v as zo,y as Bo,bC as Re,bD as Ot,bE as nn,bF as Fo,bG as Eo,bH as ta,bI as To,bJ as kn,bK as jt,bL as Po}from"./index.e04c72e0.js";import{u as na,a as aa,S as Ao}from"./Shape.c00136d1.js";import{e as Fe,u as Bt}from"./useEventBus.6ade5a91.js";import{u as No,s as Vo,g as Lo}from"./pages.13f04018.js";import{N as yt,a as pn,b as Ft}from"./FormItem.25f9f120.js";import"./index.bba27490.js";function oa(e,t,n){t/=100,n/=100;const a=t*Math.min(n,1-n)+n;return[e,a?(2-2*n/a)*100:0,a*100]}function Rt(e,t,n){t/=100,n/=100;const a=n-n*t/2,o=Math.min(a,1-a);return[e,o?(n-a)/o*100:0,a*100]}function Oe(e,t,n){t/=100,n/=100;let a=(o,r=(o+e/60)%6)=>n-n*t*Math.max(Math.min(r,4-r,1),0);return[a(5)*255,a(3)*255,a(1)*255]}function an(e,t,n){e/=255,t/=255,n/=255;let a=Math.max(e,t,n),o=a-Math.min(e,t,n),r=o&&(a==e?(t-n)/o:a==t?2+(n-e)/o:4+(e-t)/o);return[60*(r<0?r+6:r),a&&o/a*100,a*100]}function on(e,t,n){e/=255,t/=255,n/=255;let a=Math.max(e,t,n),o=a-Math.min(e,t,n),r=1-Math.abs(a+a-o-1),l=o&&(a==e?(t-n)/o:a==t?2+(n-e)/o:4+(e-t)/o);return[60*(l<0?l+6:l),r?o/r*100:0,(a+a-o)*50]}function rn(e,t,n){t/=100,n/=100;let a=t*Math.min(n,1-n),o=(r,l=(r+e/30)%12)=>n-a*Math.max(Math.min(l-3,9-l,1),-1);return[o(0)*255,o(8)*255,o(4)*255]}function ra(e,t="default",n=[]){const o=e.$slots[t];return o===void 0?n:o()}function Rn(e,t="default",n=[]){const{children:a}=e;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const o=a[t];if(typeof o=="function")return o()}return n}const Uo=xn(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[xn("&::-webkit-scrollbar",{width:0,height:0})]);var Mo=L({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=B(null);function t(o){!(o.currentTarget.offsetWidth<o.currentTarget.scrollWidth)||o.deltaY===0||(o.currentTarget.scrollLeft+=o.deltaY+o.deltaX,o.preventDefault())}const n=La();return Uo.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ua,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...o){var r;(r=e.value)===null||r===void 0||r.scrollTo(...o)}})},render(){return h("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),Oo=/\s/;function jo(e){for(var t=e.length;t--&&Oo.test(e.charAt(t)););return t}var Ho=/^\s+/;function Wo(e){return e&&e.slice(0,jo(e)+1).replace(Ho,"")}var $n=0/0,Xo=/^[-+]0x[0-9a-f]+$/i,Go=/^0b[01]+$/i,qo=/^0o[0-7]+$/i,Yo=parseInt;function Dn(e){if(typeof e=="number")return e;if(Ma(e))return $n;if($t(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=$t(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Wo(e);var n=Go.test(e);return n||qo.test(e)?Yo(e.slice(2),n?2:8):Xo.test(e)?$n:+e}var Ko=function(){return Oa.Date.now()},Ht=Ko,Jo="Expected a function",Zo=Math.max,Qo=Math.min;function ln(e,t,n){var a,o,r,l,i,s,u=0,f=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(Jo);t=Dn(t)||0,$t(n)&&(f=!!n.leading,d="maxWait"in n,r=d?Zo(Dn(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p);function m(I){var g=a,x=o;return a=o=void 0,u=I,l=e.apply(x,g),l}function w(I){return u=I,i=setTimeout(S,t),f?m(I):l}function C(I){var g=I-s,x=I-u,_=t-g;return d?Qo(_,r-x):_}function b(I){var g=I-s,x=I-u;return s===void 0||g>=t||g<0||d&&x>=r}function S(){var I=Ht();if(b(I))return $(I);i=setTimeout(S,C(I))}function $(I){return i=void 0,p&&a?m(I):(a=o=void 0,l)}function F(){i!==void 0&&clearTimeout(i),u=0,a=s=o=i=void 0}function T(){return i===void 0?l:$(Ht())}function j(){var I=Ht(),g=b(I);if(a=arguments,o=this,s=I,g){if(i===void 0)return w(s);if(d)return clearTimeout(i),i=setTimeout(S,t),m(s)}return i===void 0&&(i=setTimeout(S,t)),l}return j.cancel=F,j.flush=T,j}var er="Expected a function";function Wt(e,t,n){var a=!0,o=!0;if(typeof e!="function")throw new TypeError(er);return $t(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),ln(e,t,{leading:a,maxWait:t,trailing:o})}var la=L({name:"Add",render(){return h("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),tr=L({name:"ChevronLeft",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),nr=L({name:"Remove",render(){return h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),ar=y("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[M(">",[y("input",[M("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),M("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),y("button",[M("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[O("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),M("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[O("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),M("*",[M("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[M(">",[y("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y("base-selection",[y("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),y("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),O("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),M("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[M(">",[y("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),y("base-selection",[y("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),y("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),O("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const or={};var rr=L({name:"InputGroup",props:or,setup(e){const{mergedClsPrefixRef:t}=Ae(e);return ja("-input-group",ar,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:`${e}-input-group`},this.$slots)}});function lr(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function gt(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function ir(e){return e=Math.round(e),e>=360?359:e<0?0:e}function sr(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const dr={rgb:{hex(e){return je(Te(e))},hsl(e){const[t,n,a,o]=Te(e);return He([...on(t,n,a),o])},hsv(e){const[t,n,a,o]=Te(e);return Ze([...an(t,n,a),o])}},hex:{rgb(e){return Ne(Te(e))},hsl(e){const[t,n,a,o]=Te(e);return He([...on(t,n,a),o])},hsv(e){const[t,n,a,o]=Te(e);return Ze([...an(t,n,a),o])}},hsl:{hex(e){const[t,n,a,o]=it(e);return je([...rn(t,n,a),o])},rgb(e){const[t,n,a,o]=it(e);return Ne([...rn(t,n,a),o])},hsv(e){const[t,n,a,o]=it(e);return Ze([...oa(t,n,a),o])}},hsv:{hex(e){const[t,n,a,o]=Qe(e);return je([...Oe(t,n,a),o])},rgb(e){const[t,n,a,o]=Qe(e);return Ne([...Oe(t,n,a),o])},hsl(e){const[t,n,a,o]=Qe(e);return He([...Rt(t,n,a),o])}}};function ia(e,t,n){return n=n||gt(e),n?n===t?e:dr[n][t](e):null}const lt="12px",ur=12,Ye="6px",cr=6,fr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var pr=L({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=B(null);function n(r){!t.value||(Xe("mousemove",document,a),Xe("mouseup",document,o),a(r))}function a(r){const{value:l}=t;if(!l)return;const{width:i,left:s}=l.getBoundingClientRect(),u=ir((r.clientX-s-cr)/(i-ur)*360);e.onUpdateHue(u)}function o(){var r;st("mousemove",document,a),st("mouseup",document,o),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,handleMouseDown:n}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-slider`,style:{height:lt,borderRadius:Ye}},h("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:fr,height:lt,borderRadius:Ye,position:"relative"},onMousedown:this.handleMouseDown},h("div",{style:{position:"absolute",left:Ye,right:Ye,top:0,bottom:0}},h("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Ye})`,borderRadius:Ye,width:lt,height:lt}},h("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Ye,width:lt,height:lt}})))))}});const pt="12px",hr=12,Ke="6px";var mr=L({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=B(null);function n(r){!t.value||!e.rgba||(Xe("mousemove",document,a),Xe("mouseup",document,o),a(r))}function a(r){const{value:l}=t;if(!l)return;const{width:i,left:s}=l.getBoundingClientRect(),u=(r.clientX-s)/(i-hr);e.onUpdateAlpha(sr(u))}function o(){var r;st("mousemove",document,a),st("mouseup",document,o),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,railBackgroundImage:V(()=>{const{rgba:r}=e;return r?`linear-gradient(to right, rgba(${r[0]}, ${r[1]}, ${r[2]}, 0) 0%, rgba(${r[0]}, ${r[1]}, ${r[2]}, 1) 100%)`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:pt,borderRadius:Ke},onMousedown:this.handleMouseDown},h("div",{style:{borderRadius:Ke,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},h("div",{class:`${e}-color-picker-checkboard`}),h("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&h("div",{style:{position:"absolute",left:Ke,right:Ke,top:0,bottom:0}},h("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Ke})`,borderRadius:Ke,width:pt,height:pt}},h("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:Ne(this.rgba),borderRadius:Ke,width:pt,height:pt}}))))}});const wt="12px",Ct="6px";var br=L({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=B(null);function n(r){!t.value||(Xe("mousemove",document,a),Xe("mouseup",document,o),a(r))}function a(r){const{value:l}=t;if(!l)return;const{width:i,height:s,left:u,bottom:f}=l.getBoundingClientRect(),d=(f-r.clientY)/s,p=(r.clientX-u)/i,m=100*(p>1?1:p<0?0:p),w=100*(d>1?1:d<0?0:d);e.onUpdateSV(m,w)}function o(){var r;st("mousemove",document,a),st("mouseup",document,o),(r=e.onComplete)===null||r===void 0||r.call(e)}return{palleteRef:t,handleColor:V(()=>{const{rgba:r}=e;return r?`rgb(${r[0]}, ${r[1]}, ${r[2]})`:""}),handleMouseDown:n}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},h("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),h("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&h("div",{class:`${e}-color-picker-handle`,style:{width:wt,height:wt,borderRadius:Ct,left:`calc(${this.displayedSv[0]}% - ${Ct})`,bottom:`calc(${this.displayedSv[1]}% - ${Ct})`}},h("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Ct,width:wt,height:wt}})))}});const hn=Tt("n-color-picker");function vr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function gr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function xr(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function yr(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function _r(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const wr={paddingSmall:"0 4px"};var In=L({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=B(""),{themeRef:n}=dt(hn,null);cn(()=>{t.value=a()});function a(){const{value:l}=e;if(l===null)return"";const{label:i}=e;return i==="HEX"?l:i==="A"?`${Math.floor(l*100)}%`:String(Math.floor(l))}function o(l){t.value=l}function r(l){let i,s;switch(e.label){case"HEX":s=yr(l),s&&e.onUpdateValue(l),t.value=a();break;case"H":i=gr(l),i===!1?t.value=a():e.onUpdateValue(i);break;case"S":case"L":case"V":i=xr(l),i===!1?t.value=a():e.onUpdateValue(i);break;case"A":i=_r(l),i===!1?t.value=a():e.onUpdateValue(i);break;case"R":case"G":case"B":i=vr(l),i===!1?t.value=a():e.onUpdateValue(i);break}}return{mergedTheme:n,inputValue:t,handleInputChange:r,handleInputUpdateValue:o}},render(){const{mergedTheme:e}=this;return h(yt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:wr,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Cr=L({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){const{showAlpha:a}=e;if(e.mode==="hex"){e.onUpdateValue((a?je:ht)(n));return}let o;switch(e.valueArr===null?o=[0,0,0,0]:o=Array.from(e.valueArr),e.mode){case"hsv":o[t]=n,e.onUpdateValue((a?Ze:Jt)(o));break;case"rgb":o[t]=n,e.onUpdateValue((a?Ne:Kt)(o));break;case"hsl":o[t]=n,e.onUpdateValue((a?He:Yt)(o));break}}}},render(){const{clsPrefix:e,modes:t}=this;return h("div",{class:`${e}-color-picker-input`},h("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),h(rr,null,{default:()=>{const{mode:n,valueArr:a,showAlpha:o}=this;if(n==="hex"){let r=null;try{r=a===null?null:(o?je:ht)(a)}catch(l){}return h(In,{label:"HEX",showAlpha:o,value:r,onUpdateValue:l=>{this.handleUnitUpdateValue(0,l)}})}return(n+(o?"a":"")).split("").map((r,l)=>h(In,{label:r.toUpperCase(),value:a===null?null:a[l],onUpdateValue:i=>{this.handleUnitUpdateValue(l,i)}}))}}))}}),Sr=L({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:n}=dt(hn,null);return()=>{const{hsla:a,value:o,clsPrefix:r,onClick:l,disabled:i}=e,s=t.label||n.value;return h("div",{class:[`${r}-color-picker-trigger`,i&&`${r}-color-picker-trigger--disabled`],onClick:i?void 0:l},h("div",{class:`${r}-color-picker-trigger__fill`},h("div",{class:`${r}-color-picker-checkboard`}),h("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:a?He(a):""}}),o&&a?h("div",{class:`${r}-color-picker-trigger__value`,style:{color:a[2]>50||a[3]<.5?"black":"white"}},s?s(o):o):null))}}});function kr(e,t){if(t==="hsv"){const[n,a,o,r]=Qe(e);return Ne([...Oe(n,a,o),r])}return e}function Rr(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}var $r=L({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=V(()=>e.swatches.map(r=>{const l=gt(r);return{value:r,mode:l,legalValue:kr(r,l)}}));function n(r){const{mode:l}=e;let{value:i,mode:s}=r;return s||(s="hex",/^[a-zA-Z]+$/.test(i)?i=Rr(i):(Hn("color-picker",`color ${i} in swatches is invalid.`),i="#000000")),s===l?i:ia(i,l,s)}function a(r){e.onUpdateColor(n(r))}function o(r,l){r.key==="Enter"&&a(l)}return{parsedSwatchesRef:t,handleSwatchSelect:a,handleSwatchKeyDown:o}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>h("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(t),onKeydown:n=>this.handleSwatchKeyDown(n,t)},h("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Dr=L({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=gt(e);return Boolean(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(n){var a;const o=n.target.value;(a=e.onUpdateColor)===null||a===void 0||a.call(e,ia(o.toUpperCase(),e.mode,"hex")),n.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-preview__preview`},h("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),h("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Ir=M([y("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),y("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[Ha(),y("input",`
 text-align: center;
 `)]),y("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[M("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),y("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[O("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),M("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),y("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[O("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),y("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[O("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Y("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),y("color-picker-preview",`
 display: flex;
 `,[O("sliders",`
 flex: 1 0 auto;
 `),O("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),O("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),O("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),y("color-picker-input",`
 display: flex;
 align-items: center;
 `,[y("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),O("mode",`
 width: 72px;
 text-align: center;
 `)]),y("color-picker-control",`
 padding: 12px;
 `),y("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[y("button","margin-left: 8px;")]),y("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[O("value",`
 white-space: nowrap;
 position: relative;
 `),O("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),Y("disabled","cursor: not-allowed"),y("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[M("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),y("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[y("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[O("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),M("&:focus",`
 outline: none;
 `,[O("fill",[M("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const zr=Object.assign(Object.assign({},_e.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Zt.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var sn=L({name:"ColorPicker",props:zr,setup(e,{slots:t}){const n=B(null);let a=null;const o=Pt(e),{mergedSizeRef:r,mergedDisabledRef:l}=o,{localeRef:i}=Wn("global"),{mergedClsPrefixRef:s,namespaceRef:u,inlineThemeDisabled:f}=Ae(e),d=_e("ColorPicker","-color-picker",Ir,Wa,e,s);At(hn,{themeRef:d,renderLabelRef:ye(e,"renderLabel"),colorPickerSlots:t});const p=B(e.defaultShow),m=tt(ye(e,"show"),p);function w(c){const{onUpdateShow:k,"onUpdate:show":A}=e;k&&le(k,c),A&&le(A,c),p.value=c}const{defaultValue:C}=e,b=B(C===void 0?lr(e.modes,e.showAlpha):C),S=tt(ye(e,"value"),b),$=B([S.value]),F=B(0),T=V(()=>gt(S.value)),{modes:j}=e,I=B(gt(S.value)||j[0]||"rgb");function g(){const{modes:c}=e,{value:k}=I,A=c.findIndex(G=>G===k);~A?I.value=c[(A+1)%c.length]:I.value="rgb"}let x,_,z,N,q,ie,se,H;const Z=V(()=>{const{value:c}=S;if(!c)return null;switch(T.value){case"hsv":return Qe(c);case"hsl":return[x,_,z,H]=it(c),[...oa(x,_,z),H];case"rgb":case"hex":return[q,ie,se,H]=Te(c),[...an(q,ie,se),H]}}),W=V(()=>{const{value:c}=S;if(!c)return null;switch(T.value){case"rgb":case"hex":return Te(c);case"hsv":return[x,_,N,H]=Qe(c),[...Oe(x,_,N),H];case"hsl":return[x,_,z,H]=it(c),[...rn(x,_,z),H]}}),K=V(()=>{const{value:c}=S;if(!c)return null;switch(T.value){case"hsl":return it(c);case"hsv":return[x,_,N,H]=Qe(c),[...Rt(x,_,N),H];case"rgb":case"hex":return[q,ie,se,H]=Te(c),[...on(q,ie,se),H]}}),ce=V(()=>{switch(I.value){case"rgb":case"hex":return W.value;case"hsv":return Z.value;case"hsl":return K.value}}),pe=B(0),ve=B(1),ae=B([0,0]);function xe(c,k){const{value:A}=Z,G=pe.value,te=A?A[3]:1;ae.value=[c,k];const{showAlpha:ee}=e;switch(I.value){case"hsv":ne((ee?Ze:Jt)([G,c,k,te]),"cursor");break;case"hsl":ne((ee?He:Yt)([...Rt(G,c,k),te]),"cursor");break;case"rgb":ne((ee?Ne:Kt)([...Oe(G,c,k),te]),"cursor");break;case"hex":ne((ee?je:ht)([...Oe(G,c,k),te]),"cursor");break}}function de(c){pe.value=c;const{value:k}=Z;if(!k)return;const[,A,G,te]=k,{showAlpha:ee}=e;switch(I.value){case"hsv":ne((ee?Ze:Jt)([c,A,G,te]),"cursor");break;case"rgb":ne((ee?Ne:Kt)([...Oe(c,A,G),te]),"cursor");break;case"hex":ne((ee?je:ht)([...Oe(c,A,G),te]),"cursor");break;case"hsl":ne((ee?He:Yt)([...Rt(c,A,G),te]),"cursor");break}}function oe(c){switch(I.value){case"hsv":[x,_,N]=Z.value,ne(Ze([x,_,N,c]),"cursor");break;case"rgb":[q,ie,se]=W.value,ne(Ne([q,ie,se,c]),"cursor");break;case"hex":[q,ie,se]=W.value,ne(je([q,ie,se,c]),"cursor");break;case"hsl":[x,_,z]=K.value,ne(He([x,_,z,c]),"cursor");break}ve.value=c}function ne(c,k){k==="cursor"?a=c:a=null;const{nTriggerFormChange:A,nTriggerFormInput:G}=o,{onUpdateValue:te,"onUpdate:value":ee}=e;te&&le(te,c),ee&&le(ee,c),A(),G(),b.value=c}function ge(c){ne(c,"input"),kt(Se)}function Se(c=!0){const{value:k}=S;if(k){const{nTriggerFormChange:A,nTriggerFormInput:G}=o,{onComplete:te}=e;te&&te(k);const{value:ee}=$,{value:ue}=F;c&&(ee.splice(ue+1,ee.length,k),F.value=ue+1),A(),G()}}function Le(){const{value:c}=F;c-1<0||(ne($.value[c-1],"input"),Se(!1),F.value=c-1)}function ot(){const{value:c}=F;c<0||c+1>=$.value.length||(ne($.value[c+1],"input"),Se(!1),F.value=c+1)}function ct(){const{value:c}=S,{onConfirm:k}=e;k&&k(c),w(!1)}const rt=V(()=>F.value>=1),Be=V(()=>{const{value:c}=$;return c.length>1&&F.value<c.length-1});Pe(m,c=>{c||($.value=[S.value],F.value=0)}),cn(()=>{if(!(a&&a===S.value)){const{value:c}=Z;c&&(pe.value=c[0],ve.value=c[3],ae.value=[c[1],c[2]])}a=null});const D=V(()=>{const{value:c}=r,{common:{cubicBezierEaseInOut:k},self:{textColor:A,color:G,panelFontSize:te,boxShadow:ee,border:ue,borderRadius:re,dividerColor:he,[be("height",c)]:Ge,[be("fontSize",c)]:qe}}=d.value;return{"--n-bezier":k,"--n-text-color":A,"--n-color":G,"--n-panel-font-size":te,"--n-font-size":qe,"--n-box-shadow":ee,"--n-border":ue,"--n-border-radius":re,"--n-height":Ge,"--n-divider-color":he}}),E=f?ut("color-picker",V(()=>r.value[0]),D,e):void 0;function Q(){var c;const{value:k}=W,{value:A}=pe,{internalActions:G,modes:te,actions:ee}=e,{value:ue}=d,{value:re}=s;return h("div",{class:[`${re}-color-picker-panel`,E==null?void 0:E.themeClass.value],onDragstart:he=>{he.preventDefault()},style:f?void 0:D.value},h("div",{class:`${re}-color-picker-control`},h(br,{clsPrefix:re,rgba:k,displayedHue:A,displayedSv:ae.value,onUpdateSV:xe,onComplete:Se}),h("div",{class:`${re}-color-picker-preview`},h("div",{class:`${re}-color-picker-preview__sliders`},h(pr,{clsPrefix:re,hue:A,onUpdateHue:de,onComplete:Se}),e.showAlpha?h(mr,{clsPrefix:re,rgba:k,alpha:ve.value,onUpdateAlpha:oe,onComplete:Se}):null),e.showPreview?h(Dr,{clsPrefix:re,mode:I.value,color:W.value&&ht(W.value),onUpdateColor:he=>ne(he,"input")}):null),h(Cr,{clsPrefix:re,showAlpha:e.showAlpha,mode:I.value,modes:te,onUpdateMode:g,value:S.value,valueArr:ce.value,onUpdateValue:ge}),((c=e.swatches)===null||c===void 0?void 0:c.length)&&h($r,{clsPrefix:re,mode:I.value,swatches:e.swatches,onUpdateColor:he=>ne(he,"input")})),ee!=null&&ee.length?h("div",{class:`${re}-color-picker-action`},ee.includes("confirm")&&h(et,{size:"small",onClick:ct,theme:ue.peers.Button,themeOverrides:ue.peerOverrides.Button},{default:()=>i.value.confirm})):null,t.action?h("div",{class:`${re}-color-picker-action`},{default:t.action}):G?h("div",{class:`${re}-color-picker-action`},G.includes("undo")&&h(et,{size:"small",onClick:Le,disabled:!rt.value,theme:ue.peers.Button,themeOverrides:ue.peerOverrides.Button},{default:()=>i.value.undo}),G.includes("redo")&&h(et,{size:"small",onClick:ot,disabled:!Be.value,theme:ue.peers.Button,themeOverrides:ue.peerOverrides.Button},{default:()=>i.value.redo})):null)}return{mergedClsPrefix:s,namespace:u,selfRef:n,hsla:K,rgba:W,mergedShow:m,mergedDisabled:l,isMounted:Xa(),adjustedTo:Zt(e),mergedValue:S,handleTriggerClick(){w(!0)},handleClickOutside(c){var k;!((k=n.value)===null||k===void 0)&&k.contains(Ga(c))||w(!1)},renderPanel:Q,cssVars:f?void 0:D,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),h("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},h(qa,null,{default:()=>[h(Ya,null,{default:()=>h(Sr,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),h(Ka,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Zt.tdkey,to:this.adjustedTo},{default:()=>h(Ja,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?me(this.renderPanel(),[[Za,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),Br=y("collapse","width: 100%;",[y("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: 16px 0 0 0;
 `,[Y("disabled",[O("header","cursor: not-allowed;",[O("header-main",`
 color: var(--n-title-text-color-disabled);
 `),y("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),y("collapse-item","margin-left: 32px;"),M("&:first-child","margin-top: 0;"),M("&:first-child >",[O("header","padding-top: 0;")]),Y("left-arrow-placement",[O("header",[y("collapse-item-arrow","margin-right: 4px;")])]),Y("right-arrow-placement",[O("header",[y("collapse-item-arrow","margin-left: 4px;")])]),O("content-wrapper",[O("content-inner","padding-top: 16px;"),Qa({duration:"0.15s"})]),Y("active",[O("header",[Y("active",[y("collapse-item-arrow","transform: rotate(90deg);")])])]),M("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),O("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[O("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),O("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),y("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);const Fr=Object.assign(Object.assign({},_e.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),sa=Tt("n-collapse");var da=L({name:"Collapse",props:Fr,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:a,mergedRtlRef:o}=Ae(e),r=B(e.defaultExpandedNames),l=V(()=>e.expandedNames),i=tt(l,r),s=_e("Collapse","-collapse",Br,eo,e,n);function u(C){const{"onUpdate:expandedNames":b,onUpdateExpandedNames:S,onExpandedNamesChange:$}=e;S&&le(S,C),b&&le(b,C),$&&le($,C),r.value=C}function f(C){const{onItemHeaderClick:b}=e;b&&le(b,C)}function d(C,b,S){const{accordion:$}=e,{value:F}=i;if($)C?(u([b]),f({name:b,expanded:!0,event:S})):(u([]),f({name:b,expanded:!1,event:S}));else if(!Array.isArray(F))u([b]),f({name:b,expanded:!0,event:S});else{const T=F.slice(),j=T.findIndex(I=>b===I);~j?(T.splice(j,1),u(T),f({name:b,expanded:!1,event:S})):(T.push(b),u(T),f({name:b,expanded:!0,event:S}))}}At(sa,{props:e,mergedClsPrefixRef:n,expandedNamesRef:i,slots:t,toggleItem:d});const p=xt("Collapse",o,n),m=V(()=>{const{common:{cubicBezierEaseInOut:C},self:{titleFontWeight:b,dividerColor:S,titleTextColor:$,titleTextColorDisabled:F,textColor:T,arrowColor:j,fontSize:I,titleFontSize:g,arrowColorDisabled:x}}=s.value;return{"--n-font-size":I,"--n-bezier":C,"--n-text-color":T,"--n-divider-color":S,"--n-title-font-size":g,"--n-title-text-color":$,"--n-title-text-color-disabled":F,"--n-title-font-weight":b,"--n-arrow-color":j,"--n-arrow-color-disabled":x}}),w=a?ut("collapse",void 0,m,e):void 0;return{rtlEnabled:p,mergedTheme:s,mergedClsPrefix:n,cssVars:a?void 0:m,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),Er=L({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:to(ye(e,"show"))}},render(){return h(no,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:n,clsPrefix:a}=this,o=t==="show"&&n,r=h("div",{class:`${a}-collapse-item__content-wrapper`},h("div",{class:`${a}-collapse-item__content-inner`},this.$slots));return o?me(r,[[De,e]]):e?r:null}})}});const Tr={title:String,name:[String,Number],disabled:Boolean,displayDirective:String};var ua=L({name:"CollapseItem",props:Tr,setup(e){const{mergedRtlRef:t}=Ae(e),n=ao(),a=Ee(()=>{var d;return(d=e.name)!==null&&d!==void 0?d:n}),o=dt(sa);o||Xn("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:r,props:l,mergedClsPrefixRef:i,slots:s}=o,u=V(()=>{const{value:d}=r;if(Array.isArray(d)){const{value:p}=a;return!~d.findIndex(m=>m===p)}else if(d){const{value:p}=a;return p!==d}return!0});return{rtlEnabled:xt("Collapse",t,i),collapseSlots:s,randomName:n,mergedClsPrefix:i,collapsed:u,mergedDisplayDirective:V(()=>{const{displayDirective:d}=e;return d||l.displayDirective}),arrowPlacement:V(()=>l.arrowPlacement),handleClick(d){o&&!e.disabled&&o.toggleItem(u.value,a.value,d)}}},render(){var e;const{collapseSlots:t,$slots:n,arrowPlacement:a,collapsed:o,mergedDisplayDirective:r,mergedClsPrefix:l,disabled:i}=this,s=n.header?n.header():this.title,u=n["header-extra"]||t["header-extra"],f=n.arrow||t.arrow;return h("div",{class:[`${l}-collapse-item`,`${l}-collapse-item--${a}-arrow-placement`,i&&`${l}-collapse-item--disabled`,!o&&`${l}-collapse-item--active`]},h("div",{class:[`${l}-collapse-item__header`,!o&&`${l}-collapse-item__header--active`]},h("div",{class:`${l}-collapse-item__header-main`,onClick:this.handleClick},a==="right"&&s,h("div",{class:`${l}-collapse-item-arrow`,key:this.rtlEnabled?0:1},f?f({collapsed:o}):h(Dt,{clsPrefix:l},{default:(e=t.expandIcon)!==null&&e!==void 0?e:()=>this.rtlEnabled?h(tr,null):h(oo,null)})),a==="left"&&s),u&&h("div",{class:`${l}-collapse-item__header-extra`,onClick:this.handleClick},{default:u})),h(Er,{clsPrefix:l,displayDirective:r,show:!o},n))}});const Pr={name:String,value:{type:[String,Number],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,validator:()=>(Hn("radio","`checked-value` is deprecated, please use `checked` instead."),!0),default:void 0}},ca=Tt("n-radio-group");function dn(e){const t=Pt(e,{mergedSize($){const{size:F}=e;if(F!==void 0)return F;if(l){const{mergedSizeRef:{value:T}}=l;if(T!==void 0)return T}return $?$.mergedSize.value:"medium"},mergedDisabled($){return!!(e.disabled||l!=null&&l.disabledRef.value||$!=null&&$.disabled.value)}}),{mergedSizeRef:n,mergedDisabledRef:a}=t,o=B(null),r=B(null),l=dt(ca,null),i=B(e.defaultChecked),s=ye(e,"checked"),u=tt(s,i),f=Ee(()=>l?l.valueRef.value===e.value:u.value),d=Ee(()=>{const{name:$}=e;if($!==void 0)return $;if(l)return l.nameRef.value}),p=B(!1);function m(){if(l){const{doUpdateValue:$}=l,{value:F}=e;le($,F)}else{const{onUpdateChecked:$,"onUpdate:checked":F}=e,{nTriggerFormInput:T,nTriggerFormChange:j}=t;$&&le($,!0),F&&le(F,!0),T(),j(),i.value=!0}}function w(){a.value||f.value||m()}function C(){w()}function b(){p.value=!1}function S(){p.value=!0}return{mergedClsPrefix:l?l.mergedClsPrefixRef:Ae(e).mergedClsPrefixRef,inputRef:o,labelRef:r,mergedName:d,mergedDisabled:a,uncontrolledChecked:i,renderSafeChecked:f,focus:p,mergedSize:n,handleRadioInputChange:C,handleRadioInputBlur:b,handleRadioInputFocus:S}}dn.props=Pr;var Ar=y("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[O("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),y("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),O("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[M("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),Y("checked",{boxShadow:"var(--n-box-shadow-active)"},[M("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),O("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),bt("disabled",`
 cursor: pointer;
 `,[M("&:hover",[O("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),Y("focus",[M("&:not(:active)",[O("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),Y("disabled",`
 cursor: not-allowed;
 `,[O("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[M("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),Y("checked",`
 opacity: 1;
 `)]),O("label",{color:"var(--n-text-color-disabled)"}),y("radio-input",`
 cursor: not-allowed;
 `)])]),Nr=L({name:"Radio",props:Object.assign(Object.assign({},_e.props),dn.props),setup(e){const t=dn(e),n=_e("Radio","-radio",Ar,Gn,e,t.mergedClsPrefix),a=V(()=>{const{mergedSize:{value:u}}=t,{common:{cubicBezierEaseInOut:f},self:{boxShadow:d,boxShadowActive:p,boxShadowDisabled:m,boxShadowFocus:w,boxShadowHover:C,color:b,colorDisabled:S,textColor:$,textColorDisabled:F,dotColorActive:T,dotColorDisabled:j,labelPadding:I,labelLineHeight:g,[be("fontSize",u)]:x,[be("radioSize",u)]:_}}=n.value;return{"--n-bezier":f,"--n-label-line-height":g,"--n-box-shadow":d,"--n-box-shadow-active":p,"--n-box-shadow-disabled":m,"--n-box-shadow-focus":w,"--n-box-shadow-hover":C,"--n-color":b,"--n-color-disabled":S,"--n-dot-color-active":T,"--n-dot-color-disabled":j,"--n-font-size":x,"--n-radio-size":_,"--n-text-color":$,"--n-text-color-disabled":F,"--n-label-padding":I}}),{inlineThemeDisabled:o,mergedClsPrefixRef:r,mergedRtlRef:l}=Ae(e),i=xt("Radio",l,r),s=o?ut("radio",V(()=>t.mergedSize.value[0]),a,e):void 0;return Object.assign(t,{rtlEnabled:i,cssVars:o?void 0:a,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender})},render(){const{$slots:e,mergedClsPrefix:t,onRender:n,label:a}=this;return n==null||n(),h("label",{class:[`${t}-radio`,this.themeClass,{[`${t}-radio--rtl`]:this.rtlEnabled,[`${t}-radio--disabled`]:this.mergedDisabled,[`${t}-radio--checked`]:this.renderSafeChecked,[`${t}-radio--focus`]:this.focus}],style:this.cssVars},h("input",{ref:"inputRef",type:"radio",class:`${t}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),h("div",{class:`${t}-radio__dot-wrapper`},"\xA0",h("div",{class:[`${t}-radio__dot`,this.renderSafeChecked&&`${t}-radio__dot--checked`]})),vt(e.default,o=>!o&&!a?null:h("div",{ref:"labelRef",class:`${t}-radio__label`},o||a)))}}),Vr=y("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[O("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[Y("checked",{backgroundColor:"var(--n-button-border-color-active)"}),Y("disabled",{opacity:"var(--n-opacity-disabled)"})]),Y("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[y("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),O("splitor",{height:"var(--n-height)"})]),y("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[y("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),O("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),M("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[O("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),M("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[O("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),bt("disabled",`
 cursor: pointer;
 `,[M("&:hover",[O("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),bt("checked",{color:"var(--n-button-text-color-hover)"})]),Y("focus",[M("&:not(:active)",[O("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),Y("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),Y("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Lr(e,t,n){var a;const o=[];let r=!1;for(let l=0;l<e.length;++l){const i=e[l],s=(a=i.type)===null||a===void 0?void 0:a.name;s==="RadioButton"&&(r=!0);const u=i.props;if(s!=="RadioButton"){o.push(i);continue}if(l===0)o.push(i);else{const f=o[o.length-1].props,d=t===f.value,p=f.disabled,m=t===u.value,w=u.disabled,C=(d?2:0)+(p?0:1),b=(m?2:0)+(w?0:1),S={[`${n}-radio-group__splitor--disabled`]:p,[`${n}-radio-group__splitor--checked`]:d},$={[`${n}-radio-group__splitor--disabled`]:w,[`${n}-radio-group__splitor--checked`]:m},F=C<b?$:S;o.push(h("div",{class:[`${n}-radio-group__splitor`,F]}),i)}}return{children:o,isButtonGroup:r}}const Ur=Object.assign(Object.assign({},_e.props),{name:String,value:[String,Number],defaultValue:{type:[String,Number],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Mr=L({name:"RadioGroup",props:Ur,setup(e){const t=B(null),{mergedSizeRef:n,mergedDisabledRef:a,nTriggerFormChange:o,nTriggerFormInput:r,nTriggerFormBlur:l,nTriggerFormFocus:i}=Pt(e),{mergedClsPrefixRef:s,inlineThemeDisabled:u,mergedRtlRef:f}=Ae(e),d=_e("Radio","-radio-group",Vr,Gn,e,s),p=B(e.defaultValue),m=ye(e,"value"),w=tt(m,p);function C(j){const{onUpdateValue:I,"onUpdate:value":g}=e;I&&le(I,j),g&&le(g,j),p.value=j,o(),r()}function b(j){const{value:I}=t;!I||I.contains(j.relatedTarget)||i()}function S(j){const{value:I}=t;!I||I.contains(j.relatedTarget)||l()}At(ca,{mergedClsPrefixRef:s,nameRef:ye(e,"name"),valueRef:w,disabledRef:a,mergedSizeRef:n,doUpdateValue:C});const $=xt("Radio",f,s),F=V(()=>{const{value:j}=n,{common:{cubicBezierEaseInOut:I},self:{buttonBorderColor:g,buttonBorderColorActive:x,buttonBorderRadius:_,buttonBoxShadow:z,buttonBoxShadowFocus:N,buttonBoxShadowHover:q,buttonColorActive:ie,buttonTextColor:se,buttonTextColorActive:H,buttonTextColorHover:Z,opacityDisabled:W,[be("buttonHeight",j)]:K,[be("fontSize",j)]:ce}}=d.value;return{"--n-font-size":ce,"--n-bezier":I,"--n-button-border-color":g,"--n-button-border-color-active":x,"--n-button-border-radius":_,"--n-button-box-shadow":z,"--n-button-box-shadow-focus":N,"--n-button-box-shadow-hover":q,"--n-button-color-active":ie,"--n-button-text-color":se,"--n-button-text-color-hover":Z,"--n-button-text-color-active":H,"--n-height":K,"--n-opacity-disabled":W}}),T=u?ut("radio-group",V(()=>n.value[0]),F,e):void 0;return{selfElRef:t,rtlEnabled:$,mergedClsPrefix:s,mergedValue:w,handleFocusout:S,handleFocusin:b,cssVars:u?void 0:F,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){var e;const{mergedValue:t,mergedClsPrefix:n,handleFocusin:a,handleFocusout:o}=this,{children:r,isButtonGroup:l}=Lr(mt(ra(this)),t,n);return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{onFocusin:a,onFocusout:o,ref:"selfElRef",class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,l&&`${n}-radio-group--button-group`],style:this.cssVars},r)}});const fa=Symbol("DESCRIPTION_ITEM_FLAG");function Or(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[fa]:!1}var jr=M([y("descriptions",{fontSize:"var(--n-font-size)"},[y("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),y("descriptions-table-wrapper",[y("descriptions-table",[y("descriptions-table-row",[y("descriptions-table-header",{padding:"var(--n-th-padding)"}),y("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),bt("bordered",[y("descriptions-table-wrapper",[y("descriptions-table",[y("descriptions-table-row",[M("&:last-child",[y("descriptions-table-content",{paddingBottom:0})])])])])]),Y("left-label-placement",[y("descriptions-table-content",[M("> *",{verticalAlign:"top"})])]),Y("left-label-align",[M("th",{textAlign:"left"})]),Y("center-label-align",[M("th",{textAlign:"center"})]),Y("right-label-align",[M("th",{textAlign:"right"})]),Y("bordered",[y("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[y("descriptions-table",[y("descriptions-table-row",[M("&:not(:last-child)",[y("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),y("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),y("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[M("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),y("descriptions-table-content",[M("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),y("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),y("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[y("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[y("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),y("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[O("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),O("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),y("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),ro(y("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),lo(y("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);const Hr=Object.assign(Object.assign({},_e.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]});var Wr=L({name:"Descriptions",props:Hr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ae(e),a=_e("Descriptions","-descriptions",jr,io,e,t),o=V(()=>{const{size:l,bordered:i}=e,{common:{cubicBezierEaseInOut:s},self:{titleTextColor:u,thColor:f,thColorModal:d,thColorPopover:p,thTextColor:m,thFontWeight:w,tdTextColor:C,tdColor:b,tdColorModal:S,tdColorPopover:$,borderColor:F,borderColorModal:T,borderColorPopover:j,borderRadius:I,lineHeight:g,[be("fontSize",l)]:x,[be(i?"thPaddingBordered":"thPadding",l)]:_,[be(i?"tdPaddingBordered":"tdPadding",l)]:z}}=a.value;return{"--n-title-text-color":u,"--n-th-padding":_,"--n-td-padding":z,"--n-font-size":x,"--n-bezier":s,"--n-th-font-weight":w,"--n-line-height":g,"--n-th-text-color":m,"--n-td-text-color":C,"--n-th-color":f,"--n-th-color-modal":d,"--n-th-color-popover":p,"--n-td-color":b,"--n-td-color-modal":S,"--n-td-color-popover":$,"--n-border-radius":I,"--n-border-color":F,"--n-border-color-modal":T,"--n-border-color-popover":j}}),r=n?ut("descriptions",V(()=>{let l="";const{size:i,bordered:s}=e;return s&&(l+="a"),l+=i[0],l}),o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender,compitableColumn:Qt(e,["columns","column"]),inlineThemeDisabled:n}},render(){const e=this.$slots.default,t=e?mt(e()):[];t.length;const{compitableColumn:n,labelPlacement:a,labelAlign:o,size:r,bordered:l,title:i,cssVars:s,mergedClsPrefix:u,separator:f,onRender:d}=this;d==null||d();const p=t.filter(b=>Or(b)),m={span:0,row:[],secondRow:[],rows:[]},C=p.reduce((b,S,$)=>{const F=S.props||{},T=p.length-1===$,j=["label"in F?F.label:Rn(S,"label")],I=[Rn(S)],g=F.span||1,x=b.span;b.span+=g;const _=F.labelStyle||F["label-style"]||this.labelStyle,z=F.contentStyle||F["content-style"]||this.contentStyle;if(a==="left")l?b.row.push(h("th",{class:`${u}-descriptions-table-header`,colspan:1,style:_},j),h("td",{class:`${u}-descriptions-table-content`,colspan:T?(n-x)*2+1:g*2-1,style:z},I)):b.row.push(h("td",{class:`${u}-descriptions-table-content`,colspan:T?(n-x)*2:g*2},h("span",{class:`${u}-descriptions-table-content__label`,style:_},[...j,f&&h("span",{class:`${u}-descriptions-separator`},f)]),h("span",{class:`${u}-descriptions-table-content__content`,style:z},I)));else{const N=T?(n-x)*2:g*2;b.row.push(h("th",{class:`${u}-descriptions-table-header`,colspan:N,style:_},j)),b.secondRow.push(h("td",{class:`${u}-descriptions-table-content`,colspan:N,style:z},I))}return(b.span>=n||T)&&(b.span=0,b.row.length&&(b.rows.push(b.row),b.row=[]),a!=="left"&&b.secondRow.length&&(b.rows.push(b.secondRow),b.secondRow=[])),b},m).rows.map(b=>h("tr",{class:`${u}-descriptions-table-row`},b));return h("div",{style:s,class:[`${u}-descriptions`,this.themeClass,`${u}-descriptions--${a}-label-placement`,`${u}-descriptions--${o}-label-align`,`${u}-descriptions--${r}-size`,l&&`${u}-descriptions--bordered`]},i||this.$slots.header?h("div",{class:`${u}-descriptions-header`},i||ra(this,"header")):null,h("div",{class:`${u}-descriptions-table-wrapper`},h("table",{class:`${u}-descriptions-table`},h("tbody",null,C))))}});const Xr={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]};var Gr=L({name:"DescriptionsItem",[fa]:!0,props:Xr,render(){return null}});function qr(e){return e==null||typeof e=="string"&&e.trim()===""?null:Number(e)}function Yr(e){return e.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^\.\d+$/.test(e))}function Xt(e){return e==null?!0:!Number.isNaN(e)}function zn(e,t){return e==null?"":t===void 0?String(e):e.toFixed(t)}function Gt(e){if(e===null)return null;if(typeof e=="number")return e;{const t=Number(e);return Number.isNaN(t)?null:t}}var Kr=M([y("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),y("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]);const Bn=800,Fn=100,Jr=Object.assign(Object.assign({},_e.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]});var mn=L({name:"InputNumber",props:Jr,setup(e){const{mergedBorderedRef:t,mergedClsPrefixRef:n,mergedRtlRef:a}=Ae(e),o=_e("InputNumber","-input-number",Kr,so,e,n),{localeRef:r}=Wn("InputNumber"),l=Pt(e),{mergedSizeRef:i,mergedDisabledRef:s,mergedStatusRef:u}=l,f=B(null),d=B(null),p=B(null),m=B(e.defaultValue),w=ye(e,"value"),C=tt(w,m),b=B(""),S=c=>{const k=String(c).split(".")[1];return k?k.length:0},$=c=>{const k=[e.min,e.max,e.step,c].map(A=>A===void 0?0:S(A));return Math.max(...k)},F=Ee(()=>{const{placeholder:c}=e;return c!==void 0?c:r.value.placeholder}),T=Ee(()=>{const c=Gt(e.step);return c!==null?c===0?1:Math.abs(c):1}),j=Ee(()=>{const c=Gt(e.min);return c!==null?c:null}),I=Ee(()=>{const c=Gt(e.max);return c!==null?c:null}),g=c=>{const{value:k}=C;if(c===k){_();return}const{"onUpdate:value":A,onUpdateValue:G,onChange:te}=e,{nTriggerFormInput:ee,nTriggerFormChange:ue}=l;te&&le(te,c),G&&le(G,c),A&&le(A,c),m.value=c,ee(),ue()},x=({offset:c,doUpdateIfValid:k,fixPrecision:A,isInputing:G})=>{const{value:te}=b;if(G&&Yr(te))return!1;const ee=(e.parse||qr)(te);if(ee===null)return k&&g(null),null;if(Xt(ee)){const ue=S(ee),{precision:re}=e;if(re!==void 0&&re<ue&&!A)return!1;let he=parseFloat((ee+c).toFixed(re!=null?re:$(ee)));if(Xt(he)){const{value:Ge}=I,{value:qe}=j;if(Ge!==null&&he>Ge){if(!k||G)return!1;he=Ge}if(qe!==null&&he<qe){if(!k||G)return!1;he=qe}return e.validator&&!e.validator(he)?!1:(k&&g(he),he)}}return!1},_=()=>{const{value:c}=C;if(Xt(c)){const{format:k,precision:A}=e;k?b.value=k(c):c===null||A===void 0||S(c)>A?b.value=zn(c,void 0):b.value=zn(c,A)}else b.value=String(c)};_();const z=Ee(()=>x({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),N=Ee(()=>{const{value:c}=C;if(e.validator&&c===null)return!1;const{value:k}=T;return x({offset:-k,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),q=Ee(()=>{const{value:c}=C;if(e.validator&&c===null)return!1;const{value:k}=T;return x({offset:+k,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ie(c){const{onFocus:k}=e,{nTriggerFormFocus:A}=l;k&&le(k,c),A()}function se(c){var k,A;if(c.target===((k=f.value)===null||k===void 0?void 0:k.wrapperElRef))return;const G=x({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(G!==!1){const ue=(A=f.value)===null||A===void 0?void 0:A.inputElRef;ue&&(ue.value=String(G||"")),C.value===G&&_()}else _();const{onBlur:te}=e,{nTriggerFormBlur:ee}=l;te&&le(te,c),ee()}function H(c){const{onClear:k}=e;k&&le(k,c)}function Z(){const{value:c}=q;if(!c){ge();return}const{value:k}=C;if(k===null)e.validator||g(pe());else{const{value:A}=T;x({offset:A,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function W(){const{value:c}=N;if(!c){ne();return}const{value:k}=C;if(k===null)e.validator||g(pe());else{const{value:A}=T;x({offset:-A,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const K=ie,ce=se;function pe(){if(e.validator)return null;const{value:c}=j,{value:k}=I;return c!==null?Math.max(0,c):k!==null?Math.min(0,k):0}function ve(c){H(c),g(null)}function ae(c){var k,A,G;!((k=p.value)===null||k===void 0)&&k.$el.contains(c.target)&&c.preventDefault(),!((A=d.value)===null||A===void 0)&&A.$el.contains(c.target)&&c.preventDefault(),(G=f.value)===null||G===void 0||G.activate()}let xe=null,de=null,oe=null;function ne(){oe&&(window.clearTimeout(oe),oe=null),xe&&(window.clearInterval(xe),xe=null)}function ge(){Le&&(window.clearTimeout(Le),Le=null),de&&(window.clearInterval(de),de=null)}function Se(){ne(),oe=window.setTimeout(()=>{xe=window.setInterval(()=>{W()},Fn)},Bn),Xe("mouseup",document,ne,{once:!0})}let Le=null;function ot(){ge(),Le=window.setTimeout(()=>{de=window.setInterval(()=>{Z()},Fn)},Bn),Xe("mouseup",document,ge,{once:!0})}const ct=()=>{de||Z()},rt=()=>{xe||W()};function Be(c){var k,A;if(c.key==="Enter"){if(c.target===((k=f.value)===null||k===void 0?void 0:k.wrapperElRef))return;x({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((A=f.value)===null||A===void 0||A.deactivate())}else if(c.key==="ArrowUp"){if(!q.value||e.keyboard.ArrowUp===!1)return;c.preventDefault(),x({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&Z()}else if(c.key==="ArrowDown"){if(!N.value||e.keyboard.ArrowDown===!1)return;c.preventDefault(),x({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&W()}}function D(c){b.value=c,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&x({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Pe(C,()=>{_()});const E={focus:()=>{var c;return(c=f.value)===null||c===void 0?void 0:c.focus()},blur:()=>{var c;return(c=f.value)===null||c===void 0?void 0:c.blur()}},Q=xt("InputNumber",a,n);return Object.assign(Object.assign({},E),{rtlEnabled:Q,inputInstRef:f,minusButtonInstRef:d,addButtonInstRef:p,mergedClsPrefix:n,mergedBordered:t,uncontrolledValue:m,mergedValue:C,mergedPlaceholder:F,displayedValueInvalid:z,mergedSize:i,mergedDisabled:s,displayedValue:b,addable:q,minusable:N,mergedStatus:u,handleFocus:K,handleBlur:ce,handleClear:ve,handleMouseDown:ae,handleAddClick:ct,handleMinusClick:rt,handleAddMousedown:ot,handleMinusMousedown:Se,handleKeyDown:Be,handleUpdateDisplayedValue:D,mergedTheme:o,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:V(()=>{const{self:{iconColorDisabled:c}}=o.value,[k,A,G,te]=Te(c);return{textColorTextDisabled:`rgb(${k}, ${A}, ${G})`,opacityDisabled:`${te}`}})})},render(){const{mergedClsPrefix:e,$slots:t}=this,n=()=>h(_n,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>yn(t["minus-icon"],()=>[h(Dt,{clsPrefix:e},{default:()=>h(nr,null)})])}),a=()=>h(_n,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>yn(t["add-icon"],()=>[h(Dt,{clsPrefix:e},{default:()=>h(la,null)})])});return h("div",{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},h(yt,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var o;return this.showButton&&this.buttonPlacement==="both"?[n(),vt(t.prefix,r=>r?h("span",{class:`${e}-input-number-prefix`},r):null)]:(o=t.prefix)===null||o===void 0?void 0:o.call(t)},suffix:()=>{var o;return this.showButton?[vt(t.suffix,r=>r?h("span",{class:`${e}-input-number-suffix`},r):null),this.buttonPlacement==="right"?n():null,a()]:(o=t.suffix)===null||o===void 0?void 0:o.call(t)}}))}});const Zr=Object.assign(Object.assign({},_e.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),Qr=L({name:"Scrollbar",props:Zr,setup(){const e=B(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var a;(a=e.value)===null||a===void 0||a.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var a;(a=e.value)===null||a===void 0||a.scrollBy(n[0],n[1])}}),{scrollbarInstRef:e})},render(){return h(uo,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});var pa=Qr;const bn=Tt("n-tabs"),ha={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var Je=L({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ha,setup(e){const t=dt(bn,null);return t||Xn("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return h("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const el=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ho(ha,["displayDirective"]));var un=L({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:el,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:a,closableRef:o,tabStyleRef:r,tabChangeIdRef:l,onBeforeLeaveRef:i,triggerRef:s,handleAdd:u,activateTab:f,handleClose:d}=dt(bn);return{trigger:s,mergedClosable:V(()=>{if(e.internalAddable)return!1;const{closable:p}=e;return p===void 0?o.value:p}),style:r,clsPrefix:t,value:n,type:a,handleClose(p){p.stopPropagation(),!e.disabled&&d(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){u();return}const{name:p}=e,m=++l.id;if(p!==n.value){const{value:w}=i;w?Promise.resolve(w(e.name,n.value)).then(C=>{C&&l.id===m&&f(p)}):f(p)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:a,label:o,tab:r,value:l,mergedClosable:i,style:s,trigger:u,$slots:{default:f}}=this,d=o!=null?o:r;return h("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?h("div",{class:`${t}-tabs-tab-pad`}):null,h("div",Object.assign({key:n,"data-name":n,"data-disabled":a?!0:void 0},co({class:[`${t}-tabs-tab`,l===n&&`${t}-tabs-tab--active`,a&&`${t}-tabs-tab--disabled`,i&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:u==="click"?this.activateTab:void 0,onMouseenter:u==="hover"?this.activateTab:void 0,style:e?void 0:s},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),h("span",{class:`${t}-tabs-tab__label`},e?h(Ce,null,h("div",{class:`${t}-tabs-tab__height-placeholder`},"\xA0"),h(Dt,{clsPrefix:t},{default:()=>h(la,null)})):f?f():typeof d=="object"?d:fo(d!=null?d:n)),i&&this.type==="card"?h(po,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:a}):null))}}),tl=y("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[Y("segment-type",[y("tabs-rail",[M("&.transition-disabled","color: red;",[y("tabs-tab",`
 transition: none;
 `)])])]),y("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[y("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[y("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Y("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),M("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),Y("flex",[y("tabs-nav",{width:"100%"},[y("tabs-wrapper",{width:"100%"},[y("tabs-tab",{marginRight:0})])])]),y("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[O("prefix, suffix",`
 display: flex;
 align-items: center;
 `),O("prefix","padding-right: 16px;"),O("suffix","padding-left: 16px;")]),y("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[Y("shadow-before",[M("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),Y("shadow-after",[M("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),M("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),M("&::before",`
 left: 0;
 `),M("&::after",`
 right: 0;
 `)]),y("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),y("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),y("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),y("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Y("disabled",{cursor:"not-allowed"}),O("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),O("label",`
 display: flex;
 align-items: center;
 `)]),y("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[M("&.transition-disabled",`
 transition: none;
 `),Y("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),y("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),y("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[M("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),M("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),M("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),M("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),M("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),y("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),Y("line-type, bar-type",[y("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[M("&:hover",{color:"var(--n-tab-text-color-hover)"}),Y("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),Y("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),y("tabs-nav",[Y("line-type",[O("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),y("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),y("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),Y("card-type",[O("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),y("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),y("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),y("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[Y("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[O("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),bt("disabled",[M("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),Y("closable","padding-right: 6px;"),Y("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),Y("disabled","color: var(--n-tab-text-color-disabled);")]),y("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const nl=Object.assign(Object.assign({},_e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var Et=L({name:"Tabs",props:nl,setup(e,{slots:t}){var n,a,o,r;const{mergedClsPrefixRef:l,inlineThemeDisabled:i}=Ae(e),s=_e("Tabs","-tabs",tl,mo,e,l),u=B(null),f=B(null),d=B(null),p=B(null),m=B(null),w=B(!0),C=B(!0),b=Qt(e,["labelSize","size"]),S=Qt(e,["activeName","value"]),$=B((a=(n=S.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&a!==void 0?a:t.default?(r=(o=mt(t.default())[0])===null||o===void 0?void 0:o.props)===null||r===void 0?void 0:r.name:null),F=tt(S,$),T={id:0},j=V(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Pe(F,()=>{T.id=0,x()});function I(){var D;const{value:E}=F;return E===null?null:(D=u.value)===null||D===void 0?void 0:D.querySelector(`[data-name="${E}"]`)}function g(D){if(e.type==="card")return;const{value:E}=f;if(!!E&&D){const Q=`${l.value}-tabs-bar--disabled`,{barWidth:c}=e;if(D.dataset.disabled==="true"?E.classList.add(Q):E.classList.remove(Q),typeof c=="number"&&D.offsetWidth>=c){const k=Math.floor((D.offsetWidth-c)/2)+D.offsetLeft;E.style.left=`${k}px`,E.style.maxWidth=`${c}px`}else E.style.left=`${D.offsetLeft}px`,E.style.maxWidth=`${D.offsetWidth}px`;E.style.width="8192px",E.offsetWidth}}function x(){if(e.type==="card")return;const D=I();D&&g(D)}const _=B(null);let z=0,N=null;function q(D){const E=_.value;if(E){z=D.getBoundingClientRect().height;const Q=`${z}px`,c=()=>{E.style.height=Q,E.style.maxHeight=Q};N?(c(),N(),N=null):N=c}}function ie(D){const E=_.value;if(E){const Q=D.getBoundingClientRect().height,c=()=>{document.body.offsetHeight,E.style.maxHeight=`${Q}px`,E.style.height=`${Math.max(z,Q)}px`};N?(N(),N=null,c()):N=c}}function se(){const D=_.value;D&&(D.style.maxHeight="",D.style.height="")}const H={value:[]},Z=B("next");function W(D){const E=F.value;let Q="next";for(const c of H.value){if(c===E)break;if(c===D){Q="prev";break}}Z.value=Q,K(D)}function K(D){const{onActiveNameChange:E,onUpdateValue:Q,"onUpdate:value":c}=e;E&&le(E,D),Q&&le(Q,D),c&&le(c,D),$.value=D}function ce(D){const{onClose:E}=e;E&&le(E,D)}function pe(){const{value:D}=f;if(!D)return;const E="transition-disabled";D.classList.add(E),x(),D.classList.remove(E)}let ve=0;function ae(D){var E;if(D.contentRect.width===0&&D.contentRect.height===0||ve===D.contentRect.width)return;ve=D.contentRect.width;const{type:Q}=e;(Q==="line"||Q==="bar")&&pe(),Q!=="segment"&&Se((E=m.value)===null||E===void 0?void 0:E.$el)}const xe=Wt(ae,64);Pe([()=>e.justifyContent,()=>e.size],()=>{kt(()=>{const{type:D}=e;(D==="line"||D==="bar")&&pe()})});const de=B(!1);function oe(D){var E;const{target:Q,contentRect:{width:c}}=D,k=Q.parentElement.offsetWidth;if(!de.value)k<c&&(de.value=!0);else{const{value:A}=p;if(!A)return;k-c>A.$el.offsetWidth&&(de.value=!1)}Se((E=m.value)===null||E===void 0?void 0:E.$el)}const ne=Wt(oe,64);function ge(){const{onAdd:D}=e;D&&D(),kt(()=>{const E=I(),{value:Q}=m;!E||!Q||Q.scrollTo({left:E.offsetLeft,top:0,behavior:"smooth"})})}function Se(D){if(!D)return;const{scrollLeft:E,scrollWidth:Q,offsetWidth:c}=D;w.value=E<=0,C.value=E+c>=Q}const Le=Wt(D=>{Se(D.target)},64);At(bn,{triggerRef:ye(e,"trigger"),tabStyleRef:ye(e,"tabStyle"),paneClassRef:ye(e,"paneClass"),paneStyleRef:ye(e,"paneStyle"),mergedClsPrefixRef:l,typeRef:ye(e,"type"),closableRef:ye(e,"closable"),valueRef:F,tabChangeIdRef:T,onBeforeLeaveRef:ye(e,"onBeforeLeave"),activateTab:W,handleClose:ce,handleAdd:ge}),bo(()=>{x()}),cn(()=>{const{value:D}=d;if(!D)return;const{value:E}=l,Q=`${E}-tabs-nav-scroll-wrapper--shadow-before`,c=`${E}-tabs-nav-scroll-wrapper--shadow-after`;w.value?D.classList.remove(Q):D.classList.add(Q),C.value?D.classList.remove(c):D.classList.add(c)});const ot=B(null);Pe(F,()=>{if(e.type==="segment"){const D=ot.value;D&&kt(()=>{D.classList.add("transition-disabled"),D.offsetWidth,D.classList.remove("transition-disabled")})}});const ct={syncBarPosition:()=>{x()}},rt=V(()=>{const{value:D}=b,{type:E}=e,Q={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[E],c=`${D}${Q}`,{self:{barColor:k,closeIconColor:A,closeIconColorHover:G,closeIconColorPressed:te,tabColor:ee,tabBorderColor:ue,paneTextColor:re,tabFontWeight:he,tabBorderRadius:Ge,tabFontWeightActive:qe,colorSegment:va,fontWeightStrong:ga,tabColorSegment:xa,closeSize:ya,closeIconSize:_a,closeColorHover:wa,closeColorPressed:Ca,closeBorderRadius:Sa,[be("panePadding",D)]:ka,[be("tabPadding",c)]:Ra,[be("tabGap",c)]:$a,[be("tabTextColor",E)]:Da,[be("tabTextColorActive",E)]:Ia,[be("tabTextColorHover",E)]:za,[be("tabTextColorDisabled",E)]:Ba,[be("tabFontSize",D)]:Fa},common:{cubicBezierEaseInOut:Ea}}=s.value;return{"--n-bezier":Ea,"--n-color-segment":va,"--n-bar-color":k,"--n-tab-font-size":Fa,"--n-tab-text-color":Da,"--n-tab-text-color-active":Ia,"--n-tab-text-color-disabled":Ba,"--n-tab-text-color-hover":za,"--n-pane-text-color":re,"--n-tab-border-color":ue,"--n-tab-border-radius":Ge,"--n-close-size":ya,"--n-close-icon-size":_a,"--n-close-color-hover":wa,"--n-close-color-pressed":Ca,"--n-close-border-radius":Sa,"--n-close-icon-color":A,"--n-close-icon-color-hover":G,"--n-close-icon-color-pressed":te,"--n-tab-color":ee,"--n-tab-font-weight":he,"--n-tab-font-weight-active":qe,"--n-tab-padding":Ra,"--n-tab-gap":$a,"--n-pane-padding":ka,"--n-font-weight-strong":ga,"--n-tab-color-segment":xa}}),Be=i?ut("tabs",V(()=>`${b.value[0]}${e.type[0]}`),rt,e):void 0;return Object.assign({mergedClsPrefix:l,mergedValue:F,renderedNames:new Set,tabsRailElRef:ot,tabsPaneWrapperRef:_,tabsElRef:u,barElRef:f,addTabInstRef:p,xScrollInstRef:m,scrollWrapperElRef:d,addTabFixed:de,tabWrapperStyle:j,handleNavResize:xe,mergedSize:b,handleScroll:Le,handleTabsResize:ne,cssVars:i?void 0:rt,themeClass:Be==null?void 0:Be.themeClass,animationDirection:Z,renderNameListRef:H,onAnimationBeforeLeave:q,onAnimationEnter:ie,onAnimationAfterEnter:se,onRender:Be==null?void 0:Be.onRender},ct)},render(){const{mergedClsPrefix:e,type:t,addTabFixed:n,addable:a,mergedSize:o,renderNameListRef:r,onRender:l,$slots:{default:i,prefix:s,suffix:u}}=this;l==null||l();const f=i?mt(i()).filter(b=>b.type.__TAB_PANE__===!0):[],d=i?mt(i()).filter(b=>b.type.__TAB__===!0):[],p=!d.length,m=t==="card",w=t==="segment",C=!m&&!w&&this.justifyContent;return r.value=[],h("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${o}-size`,C&&`${e}-tabs--flex`],style:this.cssVars},h("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav`]},vt(s,b=>b&&h("div",{class:`${e}-tabs-nav__prefix`},b)),w?h("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},p?f.map((b,S)=>(r.value.push(b.props.name),h(un,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:S!==0}),b.children?{default:b.children.tab}:void 0))):d.map((b,S)=>(r.value.push(b.props.name),S===0?b:Pn(b)))):h(wn,{onResize:this.handleNavResize},{default:()=>h("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},h(Mo,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const b=h("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},C?null:h("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),p?f.map(($,F)=>(r.value.push($.props.name),qt(h(un,Object.assign({},$.props,{internalCreatedByPane:!0,internalLeftPadded:F!==0&&(!C||C==="center"||C==="start"||C==="end")}),$.children?{default:$.children.tab}:void 0)))):d.map(($,F)=>(r.value.push($.props.name),qt(F!==0&&!C?Pn($):$))),!n&&a&&m?Tn(a,(p?f.length:d.length)!==0):null,C?null:h("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let S=b;return m&&a&&(S=h(wn,{onResize:this.handleTabsResize},{default:()=>b})),h("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},S,m?h("div",{class:`${e}-tabs-pad`}):null,m?null:h("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),n&&a&&m?Tn(a,!0):null,vt(u,b=>b&&h("div",{class:`${e}-tabs-nav__suffix`},b))),p&&(this.animated?h("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},En(f,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):En(f,this.mergedValue,this.renderedNames)))}});function En(e,t,n,a,o,r,l){const i=[];return e.forEach(s=>{const{name:u,displayDirective:f,"display-directive":d}=s.props,p=w=>f===w||d===w,m=t===u;if(s.key!==void 0&&(s.key=u),m||p("show")||p("show:lazy")&&n.has(u)){n.has(u)||n.add(u);const w=!p("if");i.push(w?me(s,[[De,m]]):s)}}),l?h(vo,{name:`${l}-transition`,onBeforeLeave:a,onEnter:o,onAfterEnter:r},{default:()=>i}):i}function Tn(e,t){return h(un,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Pn(e){const t=go(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function qt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const al={class:"value"},ol=L({__name:"RulerLine",props:{scale:null,thick:null,palette:null,index:null,start:null,vertical:{type:Boolean},value:null,isShowReferLine:{type:Boolean}},emits:["onMouseDown","onRelease","onRemove"],setup(e,{emit:t}){const n=e,a=B(0),o=B(!0);Nt(()=>{a.value=n.value});const r=p=>{o.value=p>=0},l=V(()=>{const p=(a.value-n.start)*n.scale;r(p);const m=p+"px";return n.vertical?{top:m}:{left:m}}),i=V(()=>{var C,b;const p=`1px ${((C=n.palette)==null?void 0:C.lineBoardStyle)||"dashed"} ${(b=n.palette)==null?void 0:b.lineColor}`,m=n.vertical?{borderTop:p}:{borderLeft:p},w=n.isShowReferLine?n.vertical?"ns-resize":"ew-resize":"none";return ft({cursor:w},m)}),s=V(()=>n.vertical?{left:n.thick+"px"}:{top:n.thick+"px"}),u=p=>{p.stopPropagation();const m=n.vertical?p.clientY:p.clientX,w=a.value;t("onMouseDown");const C=S=>{const $=n.vertical?S.clientY:S.clientX,F=Math.round(w+($-m)/n.scale);a.value=F},b=()=>{t("onRelease",a.value,n.index),document.removeEventListener("mousemove",C,!0),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",C,!0),document.addEventListener("mouseup",b)},f=()=>{t("onRemove",n.index)},d=()=>[{text:"\u5220\u9664",subText:"",handler:()=>f()}];return(p,m)=>{const w=at("contextmenu");return me((R(),J("div",{class:"line",style:Ve([v(l),v(i)]),onMousedown:u},[fe("div",{class:"action",style:Ve(v(s))},[fe("span",al,nt(a.value),1)],4)],36)),[[De,o.value],[w,d,void 0,{stop:!0}]])}}});var rl=we(ol,[["__scopeId","data-v-34f8e82d"]]);const ll=e=>e<=.25?40:e<=.5?20:e<=1?10:e<=2?5:e<=4?2:1,An=.83,il=(e,t,n,a,o,r)=>{const{scale:l,width:i,height:s,ratio:u,palette:f}=o,{bgColor:d,fontColor:p,shadowColor:m,longfgColor:w,shortfgColor:C}=f;if(e.scale(u,u),e.clearRect(0,0,i,s),e.fillStyle=d,e.fillRect(0,0,i,s),a){const _=(n-t)*l,z=a*l;e.fillStyle=m,r?e.fillRect(_,0,z,s*3/8):e.fillRect(0,_,i*3/8,z)}const b=ll(l),S=b*l,$=b*10,F=$*l,T=Math.floor(t/b)*b,j=Math.floor(t/$)*$,I=(T-t)/b*S,g=(j-t)/$*F,x=t+Math.ceil((r?i:s)/l);e.beginPath(),e.fillStyle=p,e.strokeStyle=w;for(let _=j,z=0;_<x;_+=$,z++){const N=g+z*F+.5;r?e.moveTo(N,0):e.moveTo(0,N),e.save(),r?e.translate(N,s*.4):e.translate(i*.4,N),r||e.rotate(-Math.PI/2),e.scale(An/u,An/u),e.fillText(_.toString(),4*u,7*u),e.restore(),r?e.lineTo(N,s*9/16):e.lineTo(i*9/16,N)}e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=C;for(let _=T,z=0;_<x;_+=b,z++){const N=I+z*S+.5;r?e.moveTo(N,0):e.moveTo(0,N),_%$!==0&&(r?e.lineTo(N,s*1/4):e.lineTo(i*1/4,N))}e.stroke(),e.closePath(),e.setTransform(1,0,0,1,0,0)},sl=L({__name:"index",props:{showIndicator:{type:Boolean},valueNum:null,scale:null,ratio:null,palette:null,vertical:{type:Boolean},start:null,width:null,height:null,selectStart:null,selectLength:null},emits:["onAddLine","update:showIndicator","update:valueNum"],setup(e,{emit:t}){const n=e,a=Ie({canvasContext:null});let o=1;const r=B(null);Nt(()=>{o=n.ratio||window.devicePixelRatio||1,l(),i(o),s(o)});const l=()=>{a.canvasContext=r.value&&r.value.getContext("2d")},i=f=>{if(r.value){r.value.width=n.width*f,r.value.height=n.height*f;const d=a.canvasContext;d&&(d.font=`${12*f}px -apple-system,
                "Helvetica Neue", ".SFNSText-Regular",
                "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif`,d.lineWidth=1,d.textBaseline="middle")}},s=f=>{const d={scale:n.scale,width:n.width,height:n.height,palette:n.palette,ratio:f};a.canvasContext&&il(a.canvasContext,n.start,n.selectStart,n.selectLength,d,!n.vertical)};Pe(()=>n.start,()=>s(o)),Pe([()=>n.width,()=>n.height],()=>{i(o),s(o)});const u=(f,d)=>{const p=(C,b,S)=>Math.round(b+C/S),m=n.vertical?f.offsetY:f.offsetX,w=p(m,n.start,n.scale);switch(d){case"click":t("onAddLine",w);break;case"enter":t("update:valueNum",w),t("update:showIndicator",!0);break;default:t("update:valueNum",w);break}};return(f,d)=>(R(),J("canvas",{ref_key:"canvas",ref:r,class:"ruler",onClick:d[0]||(d[0]=p=>u(p,"click")),onMouseenter:d[1]||(d[1]=p=>u(p,"enter")),onMousemove:d[2]||(d[2]=p=>u(p,"move")),onMouseleave:d[3]||(d[3]=p=>f.$emit("update:showIndicator",!1))},null,544))}});const dl={class:"lines"},ul={class:"value"},cl=L({__name:"RulerWrapper",props:{scale:null,ratio:null,thick:null,selectStart:null,selectLength:null,isShowReferLine:{type:Boolean},palette:null,vertical:{type:Boolean,default:!0},width:{default:200},height:{default:200},start:{default:0}},setup(e,{expose:t}){const n=e,a=B(!1),o=B(0),r=B([]),l=V(()=>n.vertical?"v-container":"h-container");t({clearLines:()=>{r.value=[]}});const s=V(()=>{const m={width:`calc(100% - ${n.thick}px)`,height:`${n.thick+1}px`,left:`${n.start}px`},w={width:`${n.thick&&n.thick+1}px`,height:`calc(100% - ${n.thick}px)`,top:`${n.start}px`};return n.vertical?w:m}),u=V(()=>{var b,S;const m=(o.value-(n.start||0))*n.scale;let w="top",C="borderLeft";return w=n.vertical?"top":"left",C=n.vertical?"borderBottom":"borderLeft",{[w]:m+"px",[C]:`1px ${((b=n.palette)==null?void 0:b.lineBoardStyle)||"dashed"} ${(S=n.palette)==null?void 0:S.lineColor}`}}),f=m=>{r.value.push(m)},d=(m,w)=>{const C=m-(n.start||0),b=(n.vertical?n.height||200:n.width||200)/n.scale;C<0||C>b?p(w):r.value[w]=m},p=m=>{r.value.splice(m,1)};return(m,w)=>(R(),J("div",{class:Vt(v(l)),style:Ve(v(s))},[P(sl,{vertical:e.vertical,scale:e.scale,width:e.width,height:e.height,start:e.start,ratio:e.ratio,"select-start":e.selectStart,"select-length":e.selectLength,palette:e.palette,valueNum:o.value,"onUpdate:valueNum":w[0]||(w[0]=C=>o.value=C),showIndicator:a.value,"onUpdate:showIndicator":w[1]||(w[1]=C=>a.value=C),onOnAddLine:f},null,8,["vertical","scale","width","height","start","ratio","select-start","select-length","palette","valueNum","showIndicator"]),me(fe("div",dl,[(R(!0),J(Ce,null,ze(r.value,(C,b)=>(R(),X(rl,{key:C+b,index:b,value:C>>0,scale:e.scale,start:e.start,thick:e.thick,palette:e.palette,vertical:e.vertical,"is-show-refer-line":e.isShowReferLine,onOnRemove:p,onOnRelease:d},null,8,["index","value","scale","start","thick","palette","vertical","is-show-refer-line"]))),128))],512),[[De,e.isShowReferLine]]),me(fe("div",{class:"indicator",style:Ve(v(u))},[fe("div",ul,nt(o.value),1)],4),[[De,a.value]])],6))}});var Nn=we(cl,[["__scopeId","data-v-5a545815"]]);const fl={id:"mb-ruler",class:"style-ruler mb-ruler"},pl=L({__name:"Index",props:{scale:{default:1},ratio:{default:0},thick:{default:16},palette:null,startX:null,startY:null,width:{default:200},height:{default:200},shadow:null},setup(e){const t=e,n=B(null),a=B(null),o=B(!0),r=()=>{var s,u;(s=n.value)==null||s.clearLines(),(u=a.value)==null||u.clearLines(),o.value=!0},l=()=>[{text:"\u663E\u793A\u8F85\u52A9\u7EBF",subText:"",disable:o.value,handler:()=>o.value=!0},{text:"\u9690\u85CF\u8F85\u52A9\u7EBF",subText:"",disable:!o.value,handler:()=>o.value=!1},{text:"\u6E05\u7A7A\u8F85\u52A9\u7EBF",subText:"",disable:!o.value,handler:r}],i=V(()=>{function s(u,f){return Object.keys(u).forEach(d=>{d&&u.hasOwnProperty(d)&&(typeof f.key=="object"?u[d]=s(u[d],f[d]):f.hasOwnProperty(d)&&(u[d]=f[d]))}),u}return s({bgColor:"rgba(225,225,225, 0)",longfgColor:"#BABBBC",shortfgColor:"#C8CDD0",fontColor:"#7D8694",shadowColor:"#E8E8E8",lineColor:"#37d4cf",lineBoardStyle:"dashed",borderColor:"#DADADC",cornerActiveColor:"rgb(235, 86, 72, 0.6)",menu:{bgColor:"#fff",dividerColor:"#DBDBDB",listItem:{textColor:"#415058",hoverTextColor:"#298DF8",disabledTextColor:"rgba(65, 80, 88, 0.4)",bgColor:"#fff",hoverBgColor:"#F2F2F2"}}},t.palette||{})});return(s,u)=>{var d,p,m,w;const f=at("contextmenu");return me((R(),J("div",fl,[P(Nn,{vertical:!1,ref_key:"HRulerWrapperref",ref:a,width:e.width,height:16,"is-show-refer-line":o.value,thick:e.thick,ratio:e.ratio,start:e.startX,"select-start":((d=e.shadow)==null?void 0:d.x)||0,"select-length":((p=e.shadow)==null?void 0:p.width)||0,scale:e.scale,palette:v(i)},null,8,["width","is-show-refer-line","thick","ratio","start","select-start","select-length","scale","palette"]),P(Nn,{vertical:!0,ref_key:"VRulerWrapperref",ref:n,width:16,height:e.height,"is-show-refer-line":o.value,thick:e.thick,ratio:e.ratio,start:e.startY,"select-start":((m=e.shadow)==null?void 0:m.y)||0,"select-length":((w=e.shadow)==null?void 0:w.height)||0,scale:e.scale,palette:v(i)},null,8,["height","is-show-refer-line","thick","ratio","start","select-start","select-length","scale","palette"])])),[[f,l,void 0,{stop:!0}]])}}});const hl=L({__name:"Ruler",props:{width:null,height:null,isShowReferLine:{type:Boolean}},setup(e){const o={h:[],v:[]},r=20;return(l,i)=>(R(),X(v(pl),{thick:r,scale:1,width:e.width,height:e.height,startX:0,startY:0,lines:o,isShowReferLine:e.isShowReferLine},null,8,["width","height","isShowReferLine"]))}});var ml=we(hl,[["__scopeId","data-v-4d6ebb97"]]);const bl=L({__name:"Area",props:{start:null,width:null,height:null},setup(e){const t=na(),n=()=>{t.compose(),Fe.emit("hideArea")},a=()=>{t.flushLeft(),Fe.emit("hideArea")},o=()=>{t.flushRight(),Fe.emit("hideArea")},r=()=>{t.flushTop(),Fe.emit("hideArea")},l=()=>{t.flushBottom(),Fe.emit("hideArea")},i=()=>{t.flushRow(),Fe.emit("hideArea")},s=()=>{t.flushColumn(),Fe.emit("hideArea")},u=()=>{t.batchDeleteComponent(t.components),Fe.emit("hideArea")},f=()=>[{text:"\u7EC4\u5408",subText:"",disable:!t.canCompose,handler:n},{divider:!0},{text:"\u5220\u9664",subText:"Ctrl + Delete",disable:t.components.length<=0,handler:u},{divider:!0},{text:"\u5DE6\u5BF9\u9F50",subText:"",handler:a},{text:"\u53F3\u5BF9\u9F50",subText:"",handler:o},{text:"\u9876\u5BF9\u9F50",subText:"",handler:r},{text:"\u5E95\u5BF9\u9F50",subText:"",handler:l},{divider:!0},{text:"\u6C34\u5E73\u5BF9\u9F50",subText:"",handler:i},{text:"\u5782\u76F4\u5BF9\u9F50",subText:"",handler:s}];return(d,p)=>{const m=at("contextmenu");return me((R(),J("div",{style:Ve({left:e.start.x+"px",top:e.start.y+"px",width:e.width+"px",height:e.height+"px"}),class:"area"},null,4)),[[m,f,void 0,{stop:!0}]])}}});var Vn=we(bl,[["__scopeId","data-v-32723092"]]);const vl={},gl={class:"grid",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"},xl=xo('<defs data-v-69b4bead><pattern id="smallGrid" width="7.236328125" height="7.236328125" patternUnits="userSpaceOnUse" data-v-69b4bead><path d="M 7.236328125 0 L 0 0 0 7.236328125" fill="none" stroke="rgba(207, 207, 207, 0.3)" stroke-width="1" data-v-69b4bead></path></pattern><pattern id="grid" width="36.181640625" height="36.181640625" patternUnits="userSpaceOnUse" data-v-69b4bead><rect width="36.181640625" height="36.181640625" fill="url(#smallGrid)" data-v-69b4bead></rect><path d="M 36.181640625 0 L 0 0 0 36.181640625" fill="none" stroke="rgba(186, 186, 186, 0.5)" stroke-width="1" data-v-69b4bead></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" data-v-69b4bead></rect>',2),yl=[xl];function _l(e,t){return R(),J("svg",gl,yl)}var wl=we(vl,[["render",_l],["__scopeId","data-v-69b4bead"]]);const Cl={class:"mark-line"},Sl=L({__name:"MarkLine",setup(e){const t=$e(),n=B([]),a=Ie(["xt","xc","xb","yl","yc","yr"]),o=B(3),r=Ie({xt:!1,xc:!1,xb:!1,yl:!1,yc:!1,yr:!1}),l=p=>{n.value.push(p)},i=()=>{Object.keys(r).forEach(p=>{r[p]=!1})};Bt("move",p=>{s(p.isDownward,p.isRightward)}),Bt("unmove",()=>{i()});const s=(p,m)=>{const w=t.componentData;if(t.curComponent){const{top:C,left:b,right:S,bottom:$}=en(t.curComponent.positionStyle),F=(S-b)/2,T=($-C)/2;i(),w.forEach(j=>{if(j==t.curComponent)return;const I=en(j.positionStyle),{top:g,left:x,bottom:_,right:z}=I,N=(z-x)/2,q=(_-g)/2,ie={top:[{isNearly:u(C,g),lineNode:n.value[0],line:"xt",dragShift:g,lineShift:g},{isNearly:u($,g),lineNode:n.value[0],line:"xt",dragShift:g-($-C||0),lineShift:g},{isNearly:u((C||0)+T,g+q),lineNode:n.value[1],line:"xc",dragShift:g+q-T,lineShift:g+q},{isNearly:u(C,_),lineNode:n.value[2],line:"xb",dragShift:_,lineShift:_},{isNearly:u($,_),lineNode:n.value[2],line:"xb",dragShift:_-($-C||0),lineShift:_}],left:[{isNearly:u(b,x),lineNode:n.value[3],line:"yl",dragShift:x,lineShift:x},{isNearly:u(S,x),lineNode:n.value[3],line:"yl",dragShift:x-(S-b||0),lineShift:x},{isNearly:u((b||0)+F,x+N),lineNode:n.value[4],line:"yc",dragShift:x+N-F,lineShift:x+N},{isNearly:u(b,z),lineNode:n.value[5],line:"yr",dragShift:z,lineShift:z},{isNearly:u(S,z),lineNode:n.value[5],line:"yr",dragShift:z-(S-b||0),lineShift:z}]},se=[],{rotate:H}=t.curComponent.style;Object.keys(ie).forEach(Z=>{ie[Z].forEach(W=>{if(!W.isNearly)return;const K=H!=0?f(Z,W,{width:S-b,height:$-C}):W.dragShift;t.setCurComponentStyle(Z,K),W.lineNode.style[Z]=`${W.lineShift}px`,se.push(W.line)})}),se.length&&d(se,p,m)})}},u=(p,m)=>Math.abs(p-m)<=o.value,f=(p,m,w)=>{const{width:C,height:b}=t.curComponent.style;return p=="top"?Math.round(m.dragShift-(b-w.height)/2):Math.round(m.dragShift-(C-w.width)/2)},d=(p,m,w)=>{w?p.includes("yr")?r.yr=!0:p.includes("yc")?r.yc=!0:p.includes("yl")&&(r.yl=!0):p.includes("yl")?r.yl=!0:p.includes("yc")?r.yc=!0:p.includes("yr")&&(r.yr=!0),m?p.includes("xb")?r.xb=!0:p.includes("xc")?r.xc=!0:p.includes("xt")&&(r.xt=!0):p.includes("xt")?r.xt=!0:p.includes("xc")?r.xc=!0:p.includes("xb")&&(r.xb=!0)};return(p,m)=>(R(),J("div",Cl,[(R(!0),J(Ce,null,ze(a,w=>me((R(),J("div",{key:w,class:Vt(["line",w.includes("x")?"xline":"yline"]),ref_for:!0,ref:l},null,2)),[[De,r[w]||!1]])),128))]))}});var kl=we(Sl,[["__scopeId","data-v-7f01a757"]]);const Rl=["onMousedown"],$l=L({__name:"Index",setup(e){const t=$e(),n=na(),a=aa(),o=H=>Sn(H,["top","left","width","height","rotate"]),r=V(()=>n.style.width>0&&!g.value&&!t.isClickComponent),l=V(()=>({x:n.style.left,y:n.style.top})),i=V(()=>n.style.width),s=V(()=>n.style.height),u=()=>{g.value=!1,j.value=0,I.value=0,n.setAreaData({left:0,top:0,width:0,height:0},[])},f=()=>{t.clearCanvas()},d=(H,Z)=>{const W=document.querySelector("#editor").getBoundingClientRect(),K=Z.pageY-W.top,ce=Z.pageX-W.left;a.paste(!0,ce,K)},p=()=>[{text:"\u7C98\u8D34",subText:"Ctrl + V",handler:d},{text:"\u6E05\u7A7A\u753B\u5E03",subText:"",handler:f}];Bt("hideArea",u),Nt(()=>{console.log("\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F"),t.setEditMode(Cn.EDIT),document.addEventListener("paste",S)}),qn(()=>{console.log("\u8FDB\u5165\u9884\u89C8\u6A21\u5F0F"),t.setEditMode(Cn.PREVIEW),document.removeEventListener("paste",S),t.clearCanvas()});const m=V(()=>t.componentData),w=V(()=>t.canvasStyleData),C=V(()=>t.curComponent),b=V(()=>{const H=_t(ft({},w.value),{backgroundImage:w.value.image,backgroundSize:"cover"});return Sn(H,["width","height","backgroundImage","backgroundSize"])}),S=H=>{if(H.clipboardData){const Z=H.clipboardData.getData("text");try{const W=JSON.parse(Z);"component"in W&&(W.change("top",W.positionStyle.top+10),W.change("left",W.positionStyle.left+10),It(JSON.stringify(W)),H.preventDefault(),t.appendComponent(W))}catch(W){console.log(W)}}},$=B(0),F=B(0),T=Ie({x:0,y:0}),j=B(0),I=B(0),g=B(!0),x=B(null),_=B(!0),z=H=>{var ve;t.setClickComponentStatus(!1),H.preventDefault(),H.stopPropagation(),u();const Z=(ve=x.value)==null?void 0:ve.getBoundingClientRect();$.value=Z.x,F.value=Z.y;const W=H.clientX,K=H.clientY;T.x=W-$.value,T.y=K-F.value,g.value=!0;const ce=ae=>{ae.preventDefault(),ae.stopPropagation(),j.value=Math.abs(ae.clientX-W),I.value=Math.abs(ae.clientY-K),ae.clientX<W&&(T.x=ae.clientX-$.value),ae.clientY<K&&(T.y=ae.clientY-F.value)},pe=ae=>{if(document.removeEventListener("mousemove",ce),document.removeEventListener("mouseup",pe),ae.clientX==W&&ae.clientY==K){u();return}const xe={left:T.x,top:T.y,right:j.value+T.x,bottom:T.y+I.value},de=N(xe);if(de){const oe=de.rect;n.setAreaData({top:oe.top,left:oe.left,width:oe.right-oe.left,height:oe.bottom-oe.top,rotate:0},de.components),T.x=oe.left,T.y=oe.top,j.value=oe.right-oe.left,I.value=oe.bottom-oe.top}else u()};document.addEventListener("mousemove",ce),document.addEventListener("mouseup",pe)},N=H=>{const Z=[],W=new Set,K=new Set,ce=new Set,pe=new Set;if(t.componentData.forEach(ve=>{const{width:ae,height:xe,left:de,top:oe,rotate:ne}=ve.style,ge=en({width:ae,height:xe,left:de,top:oe,rotate:ne});ge.left>=H.left&&ge.right<=H.right&&ge.top>=H.top&&ge.bottom<=H.bottom&&(Z.push(ve),W.add(ge.left),K.add(ge.top),ce.add(ge.right),pe.add(ge.bottom))}),Z.length>0){const ve=Math.min(...W),ae=Math.max(...ce),xe=Math.min(...K),de=Math.max(...pe);return{components:Z,rect:{left:ve,right:ae,top:xe,bottom:de}}}},q=H=>ke(this,null,function*(){H.preventDefault(),H.stopPropagation();const Z=H.dataTransfer.getData("componentName");if(Z){const W=new tn[Z],K=document.querySelector("#editor").getBoundingClientRect(),ce=H.pageY-K.top,pe=H.pageX-K.left;W.change("top",ce),W.change("left",pe),t.appendComponent(W)}}),ie=H=>{H.preventDefault(),H.dataTransfer.dropEffect="copy"},se=()=>{t.isClickComponent||t.setCurComponent(void 0)};return(H,Z)=>{const W=at("contextmenu");return me((R(),J("div",{class:"editor edit",ref_key:"editor",ref:x,id:"editor",style:Ve(v(b)),onMousedown:Lt(z,["left"]),onDrop:q,onDragover:ie,onMouseup:se},[P(wl),P(ml,{width:v(w).width,height:v(w).height,isShowReferLine:_.value},null,8,["width","height","isShowReferLine"]),(R(!0),J(Ce,null,ze(v(m),(K,ce)=>(R(),J(Ce,{key:K.id},[v(t).isEditMode&&K.display?(R(),X(Ao,{key:0,id:"shape"+K.id,defaultStyle:K.style,style:Ve(o(K.style)),active:K.id===(v(C)||{}).id,info:K,class:Vt({lock:K.locked}),index:ce},{default:U(()=>[(R(),X(yo(K.component),{class:"component",style:Ve(v(_o)(K)),component:K,id:"component"+K.id},null,8,["style","component","id"]))]),_:2},1032,["id","defaultStyle","style","active","info","class","index"])):zt("",!0)],64))),128)),P(kl),g.value?(R(),X(Vn,{key:0,start:T,width:j.value,height:I.value},null,8,["start","width","height"])):v(r)?(R(),X(Vn,{key:1,start:v(l),width:v(i),height:v(s)},null,8,["start","width","height"])):zt("",!0)],44,Rl)),[[W,p,void 0,{stop:!0}]])}}});var Dl=we($l,[["__scopeId","data-v-47e5be5c"]]);const ma=wo(),We=$e(),St=Yn(),Il=()=>ke(void 0,null,function*(){const e=yield ma.lastRecord();e?We.setLayoutData({canvasData:e.canvasData,canvasStyle:e.canvasStyle}):Me.warning("\u6CA1\u6709\u5FEB\u7167\u4E86")}),zl=()=>ke(void 0,null,function*(){const e=yield ma.nextRecord();e?We.setLayoutData({canvasData:e.canvasData,canvasStyle:e.canvasStyle}):Me.warning("\u6CA1\u6709\u5FEB\u7167\u4E86")}),Bl=()=>{We.toggleShowEm()},Fl=()=>{const e=`${We.name}`||"layout";Co(`${e}.json`,JSON.stringify({canvasData:We.layoutData,canvasStyle:We.canvasStyleData}))},El=()=>{So(Tl,".json")},Tl=e=>{if(e.target&&e.target.result){const t=JSON.parse(e.target.result);t&&(We.setComponentData(t.canvasData),We.setCanvasStyle(t.canvasStyle))}},Pl=()=>{St.setNavTheme(St.darkTheme?"dark":"light"),St.setDarkTheme(!St.darkTheme)},Al=L({__name:"ThemeIcon",setup(e){const t=Yn(),n=V(()=>t.darkTheme?"sun-one":"moon");return(a,o)=>{const r=Ut("icon-park");return R(),X(r,{name:v(n)},null,8,["name"])}}}),Nl="2946854",Vl="\u65B9\u5411",Ll="iconfont",Ul="icon-",Ml="",Ol=[{icon_id:"11291350",name:"\u7EC4",font_class:"zu",unicode:"e854",unicode_decimal:59476},{icon_id:"1817751",name:"\u67F1\u5F62\u56FE",font_class:"zhuxingtu",unicode:"e626",unicode_decimal:58918},{icon_id:"3868284",name:"\u4EEA\u8868\u76D8",font_class:"yibiaopan",unicode:"eb67",unicode_decimal:60263},{icon_id:"4354243",name:"\u56FE\u8868-\u997C\u56FE",font_class:"tubiao-bingtu",unicode:"eb95",unicode_decimal:60309},{icon_id:"4354246",name:"\u56FE\u8868-\u5361\u7247",font_class:"tubiao-qiapian",unicode:"eb96",unicode_decimal:60310},{icon_id:"4354248",name:"\u56FE\u8868-\u6298\u7EBF\u56FE",font_class:"tubiao-zhexiantu",unicode:"eb97",unicode_decimal:60311},{icon_id:"4906240",name:"\u6309\u94AE\u7EC4",font_class:"anniuzu",unicode:"e782",unicode_decimal:59266},{icon_id:"5383645",name:"\u5BFC\u822A",font_class:"daohang",unicode:"e77d",unicode_decimal:59261},{icon_id:"5961366",name:"\u5217\u8868",font_class:"liebiao",unicode:"ec6b",unicode_decimal:60523},{icon_id:"5971297",name:"\u91C7\u7164\u673A",font_class:"caimeiji",unicode:"e603",unicode_decimal:58883},{icon_id:"7040619",name:"\u5176\u4ED6",font_class:"qita",unicode:"e63b",unicode_decimal:58939},{icon_id:"7556180",name:"\u5B9A\u5236",font_class:"dingzhi",unicode:"e609",unicode_decimal:58889},{icon_id:"9752796",name:"\u57FA\u7840",font_class:"jichu",unicode:"e60f",unicode_decimal:58895},{icon_id:"9921108",name:"chart",font_class:"chartt",unicode:"e60a",unicode_decimal:58890},{icon_id:"14475731",name:"\u88C5\u9970\u88C5\u4FEE",font_class:"zhuangshizhuangxiu",unicode:"e6a6",unicode_decimal:59046},{icon_id:"16562592",name:"\u6E29\u5EA6\u8BA1",font_class:"wenduji",unicode:"e6de",unicode_decimal:59102},{icon_id:"22712019",name:"\u6761\u5F62\u8FDB\u5EA6\u56FE",font_class:"tiaoxingjindutu",unicode:"e66b",unicode_decimal:58987},{icon_id:"22761375",name:"\u8FB9\u6846",font_class:"biankuang",unicode:"e6b7",unicode_decimal:59063},{icon_id:"22885432",name:"\u8FDB\u5EA6\u56FE",font_class:"jindutu",unicode:"f24b",unicode_decimal:62027},{icon_id:"124495",name:"\u8B66\u544A",font_class:"jinggao1",unicode:"e601",unicode_decimal:58881},{icon_id:"1846445",name:"\u9884\u8B66\u706F",font_class:"yujingdeng",unicode:"e67f",unicode_decimal:59007},{icon_id:"2239579",name:"\u81EA\u52A8\u7CFB\u7EDF\u8B66\u544A\u706F",font_class:"zidongxitongjinggaodeng1",unicode:"e605",unicode_decimal:58885},{icon_id:"4988542",name:"\u9884\u8B66",font_class:"yujing1",unicode:"e644",unicode_decimal:58948},{icon_id:"9974390",name:"\u9884\u8B66",font_class:"yujing3",unicode:"e6fe",unicode_decimal:59134},{icon_id:"10817515",name:"\u8B66\u544A\u706F",font_class:"jinggaodeng",unicode:"e64b",unicode_decimal:58955},{icon_id:"14151833",name:"\u62A5\u8B66",font_class:"baojing1",unicode:"e630",unicode_decimal:58928},{icon_id:"16965399",name:"\u8B66\u544A\u706F",font_class:"hong",unicode:"e60d",unicode_decimal:58893},{icon_id:"20379044",name:"\u9884\u8B66\u706F",font_class:"yujingdeng1",unicode:"e623",unicode_decimal:58915},{icon_id:"23819336",name:"\u62A5\u8B66 \u8B66\u544A \u9884\u8B66 \u8B66\u544A\u706F",font_class:"a-baojingjinggaoyujingjinggaodeng",unicode:"e628",unicode_decimal:58920},{icon_id:"24312218",name:"light",font_class:"light",unicode:"e63a",unicode_decimal:58938},{icon_id:"24614518",name:"\u544A\u8B66\u706F",font_class:"gaojingdeng9",unicode:"e664",unicode_decimal:58980},{icon_id:"25567211",name:"\u8B66\u544A\u706F",font_class:"jinggaodeng1",unicode:"e613",unicode_decimal:58899},{icon_id:"12041083",name:"\u9884\u8B66",font_class:"yujing5",unicode:"e671",unicode_decimal:58993},{icon_id:"577357",name:"\u5220\u9664",font_class:"shanchu",unicode:"e74b",unicode_decimal:59211},{icon_id:"1986988",name:"\u5220\u9664",font_class:"shanchu1",unicode:"e625",unicode_decimal:58917},{icon_id:"12795401",name:"\u9996\u9875",font_class:"shouye",unicode:"e62d",unicode_decimal:58925},{icon_id:"201556",name:"\u67E5\u770B",font_class:"chakan",unicode:"e600",unicode_decimal:58880},{icon_id:"201638",name:"\u7F16\u8F91",font_class:"bianji",unicode:"e602",unicode_decimal:58882},{icon_id:"11729723",name:"\u590D\u5236",font_class:"fuzhi",unicode:"e608",unicode_decimal:58888},{icon_id:"7269302",name:"\u9996\u9875-\u9ED8\u8BA4",font_class:"shouye-moren",unicode:"e619",unicode_decimal:58905},{icon_id:"658044",name:"\u89E3\u9501",font_class:"jiesuo",unicode:"e669",unicode_decimal:58985},{icon_id:"10097949",name:"\u65CB\u8F6C",font_class:"xuanzhuan",unicode:"e680",unicode_decimal:59008},{icon_id:"374774",name:"\u5F00\u5173",font_class:"kaiguan",unicode:"e61f",unicode_decimal:58911},{icon_id:"122162",name:"\u65F6\u949F",font_class:"clock",unicode:"e63e",unicode_decimal:58942},{icon_id:"1242185",name:"\u53CD\u9988\u4FE1\u606F",font_class:"fankuixinxi",unicode:"e660",unicode_decimal:58976},{icon_id:"2468505",name:"37\u7C7B\u5EFA\u7B51\u4FEE\u7406x16",font_class:"leijianzhuxiulix",unicode:"e695",unicode_decimal:59029},{icon_id:"11747267",name:"\u65F6\u95F4",font_class:"weibiaoti-",unicode:"e618",unicode_decimal:58904},{icon_id:"14794143",name:"sds_\u7B2C37\u7C7B \u5EFA\u7B51\u4FEE\u7406",font_class:"sds_di37leijianzhuxiuli",unicode:"e61e",unicode_decimal:58910},{icon_id:"17762035",name:"\u8054\u52A8\u63A7\u5236",font_class:"liandongkongzhi",unicode:"e624",unicode_decimal:58916},{icon_id:"18165278",name:"\u9501,\u5BC6\u7801,\u5F00\u9501,\u89E3\u9501",font_class:"unlock-full",unicode:"e882",unicode_decimal:59522},{icon_id:"288554",name:"ascend",font_class:"ascend",unicode:"e6b4",unicode_decimal:59060},{icon_id:"288556",name:"falling",font_class:"falling",unicode:"e6b6",unicode_decimal:59062},{icon_id:"815867",name:"\u6309\u94AE-\u5173",font_class:"buttonoff",unicode:"e614",unicode_decimal:58900},{icon_id:"815872",name:"\u6309\u94AE-\u5F00",font_class:"buttonon",unicode:"e615",unicode_decimal:58901},{icon_id:"2674878",name:"\u7BAD\u5934 \u4E0A",font_class:"jiantoushang",unicode:"e62c",unicode_decimal:58924},{icon_id:"2674928",name:"\u7BAD\u5934 \u53F3",font_class:"jiantouyou",unicode:"e632",unicode_decimal:58930},{icon_id:"2674929",name:"\u7BAD\u5934 \u4E0B",font_class:"jiantouxia",unicode:"e633",unicode_decimal:58931},{icon_id:"7594038",name:"24gl-next",font_class:"24gl-next",unicode:"ea6b",unicode_decimal:60011},{icon_id:"7594046",name:"24gl-pauseCircle",font_class:"24gl-pauseCircle",unicode:"ea6f",unicode_decimal:60015},{icon_id:"7594068",name:"24gl-previous",font_class:"24gl-previous",unicode:"ea73",unicode_decimal:60019},{icon_id:"7594086",name:"24gl-stopCircle",font_class:"24gl-stopCircle",unicode:"ea79",unicode_decimal:60025},{icon_id:"10268256",name:"\u6309\u94AE_\u5F00\u542F",font_class:"anniu_kaiqi",unicode:"e659",unicode_decimal:58969},{icon_id:"10268257",name:"\u6309\u94AE_\u5173\u95ED",font_class:"anniu_guanbi",unicode:"e65b",unicode_decimal:58971},{icon_id:"25807963",name:"\u7BAD\u5934 \u4E0A",font_class:"jiantoushangzuo-copy",unicode:"ec63",unicode_decimal:60515},{icon_id:"25808146",name:"\u5411\u53F32",font_class:"xiangzuo2-copy",unicode:"ec64",unicode_decimal:60516},{icon_id:"166602",name:"\u5173\u95ED\u64AD\u653E",font_class:"guanbibofang",unicode:"e61d",unicode_decimal:58909},{icon_id:"577396",name:"\u5411\u4E0A3",font_class:"xiangshang3",unicode:"e76f",unicode_decimal:59247},{icon_id:"577401",name:"\u5411\u4E0B5",font_class:"xiangxia5",unicode:"e774",unicode_decimal:59252},{icon_id:"577403",name:"\u5411\u53F32",font_class:"xiangyou2",unicode:"e776",unicode_decimal:59254},{icon_id:"1159910",name:"\u53F3\u64AD\u653E",font_class:"youbofang",unicode:"e62e",unicode_decimal:58926},{icon_id:"1159911",name:"\u5DE6\u64AD\u653E",font_class:"zuobofang",unicode:"e62f",unicode_decimal:58927},{icon_id:"1185945",name:"\u64AD\u653E",font_class:"bofang2",unicode:"e606",unicode_decimal:58886},{icon_id:"1488892",name:"\u64AD\u653E",font_class:"bofang5",unicode:"e607",unicode_decimal:58887},{icon_id:"1727559",name:"323\u5411\u5DE6\u4EA4\u6362",font_class:"xiangzuojiaohuan",unicode:"e8f8",unicode_decimal:59640},{icon_id:"1727561",name:"324\u5411\u53F3\u4EA4\u6362",font_class:"xiangyoujiaohuan",unicode:"e8f9",unicode_decimal:59641},{icon_id:"2076218",name:"\u64AD\u653E2",font_class:"bofang6",unicode:"e87c",unicode_decimal:59516},{icon_id:"7594051",name:"24gl-playCircle",font_class:"24gl-playCircle",unicode:"ea6e",unicode_decimal:60014},{icon_id:"11121478",name:"\u5411\u4E0A",font_class:"xiangshang7",unicode:"e63c",unicode_decimal:58940},{icon_id:"16388177",name:"\u64AD\u653E",font_class:"bofang26",unicode:"e60e",unicode_decimal:58894},{icon_id:"18176557",name:"\u64AD\u653E",font_class:"play1",unicode:"ea8d",unicode_decimal:60045},{icon_id:"24267227",name:"\u64AD\u653E-\u5FEB\u9000",font_class:"bofang-kuaitui",unicode:"e68a",unicode_decimal:59018},{icon_id:"24267260",name:"\u64AD\u653E09",font_class:"bofang09",unicode:"e690",unicode_decimal:59024},{icon_id:"24268374",name:"\u64AD\u653E-\u5FEB\u8FDB",font_class:"bofang-kuaijin",unicode:"e6d8",unicode_decimal:59096},{icon_id:"25807740",name:"\u5411\u4E0A",font_class:"xiangxia7",unicode:"ec62",unicode_decimal:60514}];var jl={id:Nl,name:Vl,font_family:Ll,css_prefix_text:Ul,description:Ml,glyphs:Ol};const Hl={class:"icon-list"},Wl=["onClick"],Xl=L({__name:"IconFont",setup(e){const t=V(()=>jl.glyphs.map(r=>`icon-${r.font_class}`)),n=B(!0),a=()=>{n.value=!1},o=r=>{It(r),Me.success(`\u590D\u5236\u56FE\u6807: ${r}`)};return(r,l)=>(R(),X(Jn,null,{default:U(()=>[P(v(Kn),{class:"show-card",show:n.value,preset:"card",onMaskClick:a,title:`\u56FE\u6807\u6570\u91CF${v(t).length}`,onClose:a,"onUpdate:show":l[0]||(l[0]=()=>n.value=!1),style:{width:"50%",maxWidth:"800px"}},{default:U(()=>[fe("ul",Hl,[(R(!0),J(Ce,null,ze(v(t),i=>(R(),J("li",{key:i,class:"dib",onClick:s=>o(i)},[fe("span",{class:Vt(`icon iconfont ${i}`)},null,2)],8,Wl))),128))])]),_:1},8,["show","title"])]),_:1}))}});var Gl=we(Xl,[["__scopeId","data-v-2f2da74d"]]);const ql=()=>{const e=P(Gl,{},null),t=document.createElement("div"),n=document.querySelector("#app");Zn(e,t),n==null||n.appendChild(t)},Yl={class:"dialog-footer"},Kl=Mt("\u53D6\u6D88"),Jl=Mt("\u65B0\u589E"),Zl=Mt("\u66F4\u65B0"),Ql=L({__name:"SavePage",props:{index:null},setup(e){const t=e,n=$e(),a=B(!0),o=Ie({name:"",thumbnail:""}),r=Ie({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0",trigger:"blur"}]}),l=i=>ke(this,null,function*(){const{name:s,thumbnail:u}=o;if(!s){Me.error("\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0");return}const f={name:s,thumbnail:u,canvasData:n.layoutData,canvasStyle:n.canvasStyleData};if(i==="update")try{(yield No(t.index,f)).status===200&&Me.success("\u4FEE\u6539\u6210\u529F")}catch(d){Me.error("\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u5BFC\u51FA\u5230\u672C\u5730\uFF0C\u5E76\u91CD\u65B0\u8FDB\u5165\u6B64\u9875\u9762")}finally{a.value=!1}else try{const d=yield Vo(f);d.status===201&&(Me.success("\u4FDD\u5B58\u6210\u529F"),ko.push({name:"Editor",params:{index:d.data.id}}))}catch(d){Me.error(`\u4FDD\u5B58\u5931\u8D25\uFF0C\u5931\u8D25\u4FE1\u606F:${(d==null?void 0:d.message)||d}`)}finally{a.value=!1}});return(i,s)=>(R(),X(Jn,null,{default:U(()=>[P(v(Kn),{show:a.value,"mask-closable":!1,preset:"card",center:"",title:"\u4FDD\u5B58\u5F53\u524D\u5E03\u5C40",style:{width:"30%",minWidth:"600px"},"onUpdate:show":s[5]||(s[5]=()=>a.value=!1),size:"medium"},{footer:U(()=>[fe("span",Yl,[P(v(et),{onClick:s[2]||(s[2]=u=>a.value=!1)},{default:U(()=>[Kl]),_:1}),e.index?(R(),X(v(et),{key:1,type:"primary",onClick:s[4]||(s[4]=u=>l("update"))},{default:U(()=>[Zl]),_:1})):(R(),X(v(et),{key:0,type:"primary",onClick:s[3]||(s[3]=u=>l("new"))},{default:U(()=>[Jl]),_:1}))])]),default:U(()=>[P(v(pn),{model:o,rules:r,onSubmit:s[1]||(s[1]=Lt(()=>{},["prevent"]))},{default:U(()=>[P(v(Ft),{label:"\u9875\u9762\u540D\u79F0",prop:"name"},{default:U(()=>[P(v(yt),{modelValue:o.name,"onUpdate:modelValue":s[0]||(s[0]=u=>o.name=u),placeholder:"\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["show"])]),_:1}))}}),ei=e=>{const t=P(Ql,{index:e},null),n=document.createElement("div");Zn(t,n)},Ln=L({__name:"ToolBarItem",props:{label:null,action:null,disable:{type:Function,default:()=>!1},icon:null,divider:{type:[Boolean,null]},children:null,otherShow:null},setup(e){const t=e,n=V(()=>typeof t.icon=="string"?h(Ue,{name:t.icon,size:"24"}):t.icon());return(a,o)=>(R(),J(Ce,null,[P(v(Ro),null,{trigger:U(()=>[P(v(et),{quaternary:"",size:"small",onClick:e.action,title:e.label},{default:U(()=>[P(v(n))]),_:1},8,["onClick","title"])]),default:U(()=>[fe("span",null,nt(e.label),1)]),_:1}),e.divider?(R(),X(v($o),{key:0,vertical:""})):zt("",!0)],64))}});const ti={class:"tool-bar"},ni={class:"tool-bar-item"},ai={class:"tool-bar-item"},oi=L({__name:"Toolbar",setup(e){const t=Do(),n=Qn(),a=[{label:"\u9996\u9875",action:l=>{t.push({name:"Pages"})},icon:"home",divider:!0,location:"left"},{label:"\u4FDD\u5B58",action:()=>ei(n.params.index),icon:"save-one",location:"left"},{label:"\u9884\u89C8",action:l=>{const{href:i}=t.resolve("/preview");window.open(i,"_blank")},icon:"computer",location:"left"},{label:"\u64A4\u9500",action:Il,icon:"back",location:"left"},{label:"\u6062\u590D",action:zl,icon:"next",location:"left"},{label:"\u5BFC\u51FA",action:Fl,icon:"download-one",location:"left"},{label:"\u5BFC\u5165",action:El,icon:"upload-one",location:"left"},{label:"\u5168\u5C4F",action:()=>{const l=document.querySelector("#editor");document.fullscreenEnabled&&l&&l.requestFullscreen()},icon:"full-screen",location:"left"},{label:"\u5750\u6807",action:Bl,icon:"cones",location:"left"},{label:"\u56FE\u6807",action:ql,icon:"game-ps",location:"right"},{label:"\u4E3B\u9898",action:Pl,icon:()=>h(Al),location:"right"}],o=a.filter(l=>l.location==="left"),r=a.filter(l=>l.location==="right");return(l,i)=>(R(),J("div",ti,[fe("div",ni,[(R(!0),J(Ce,null,ze(v(o),(s,u)=>(R(),X(Ln,{key:u,action:s.action,label:s.label,divider:s.divider,icon:s.icon},null,8,["action","label","divider","icon"]))),128))]),fe("div",ai,[(R(!0),J(Ce,null,ze(v(r),(s,u)=>(R(),X(Ln,{key:u,action:s.action,label:s.label,divider:s.divider,icon:s.icon},null,8,["action","label","divider","icon"]))),128))])]))}});var ri=we(oi,[["__scopeId","data-v-b1e3babe"]]);const li=["data-component"],ii=L({__name:"ComponentItem",props:{component:null,name:null},setup(e){return(t,n)=>(R(),J("div",{draggable:"true","data-component":e.component},[fe("div",null,nt(e.name),1)],8,li))}}),si={class:"components"},Un=L({__name:"ComponentList",setup(e){const t=V(()=>{const a={};Object.keys(tn).forEach(r=>{const l=new tn[r],i=l.group;!i||!l.show||(a[i]||(a[i]=[]),a[i].push(l))});const o=[];return ea.forEach(r=>{var l;o.push({label:()=>r.name,key:r.key,icon:()=>h(Ue,{name:`${r.icon}`}),children:(l=a[r.key])==null?void 0:l.map(i=>({label:()=>h(ii,{component:i.component,name:i.name,ondragstart:n}),key:i.component}))})}),o}),n=a=>{a.dataTransfer.setData("componentName",a.target.dataset.component)};return(a,o)=>(R(),J("div",si,[P(v(fn),{options:v(t),accordion:!1},null,8,["options"])]))}});const di={key:0,class:"layer"},ui={key:1,class:"layer"},ci=L({__name:"LayerItem",props:{component:null,index:null,activeKey:null,mode:{default:"expand"},contextmenus:null},emits:["select"],setup(e,{emit:t}){const n=e,a=$e(),o=(s,u)=>{var f;(f=s.dataTransfer)==null||f.setData("compomentIndex",u),s.stopPropagation()},r=(s,u,f=!1)=>{s.preventDefault(),s.stopPropagation(),f&&u!==n.activeKey&&Fe.emit("ActiveMenu",u)},l=(s,u)=>{var C;s.preventDefault(),s.stopPropagation();const f=(C=s.dataTransfer)==null?void 0:C.getData("compomentIndex"),d=i(f,u),p=f.split("-").map(b=>Number(b)),m=a.getComponentByIndex(p),w=a.cutComponent(p[p.length-1],m==null?void 0:m.parent);if(w&&d){const b=f.split("-").map($=>Number($)),S=a.getComponentByIndex(b);a.insertComponent(b[b.length-1],w,S),t("select",u)}},i=(s,u)=>{const f=s.split("-").map(m=>parseInt(m)),d=u.split("-").map(m=>parseInt(m)),p=f.length;for(let m=0;m<p;m++)if(f[m]!==d[m]){if(f[m]>d[m])return u;if(f[m]<d[m])return m+1==p?(d[m]=d[m]-1,d.join("-")):u}return u};return(s,u)=>{const f=Ut("icon-park"),d=at("contextmenu");return me((R(),J("div",{draggable:"true",onDragstart:u[0]||(u[0]=p=>o(p,e.index)),onDrop:u[1]||(u[1]=p=>l(p,e.index)),onDragover:u[2]||(u[2]=p=>r(p,e.index,!0))},[e.component.component==="Group"?(R(),J("div",di,[me(fe("span",null,nt(e.component.name||"\u5206\u7EC4"),513),[[De,e.mode==="expand"]]),e.component.display?(R(),X(f,{key:0,name:"preview-open",size:"15"})):(R(),X(f,{key:1,name:"preview-close-one",size:"15"}))])):(R(),J("div",ui,[me(fe("span",null,nt(e.component.name),513),[[De,e.mode==="expand"]]),e.component.display?(R(),X(f,{key:0,size:"15",name:"preview-open"})):(R(),X(f,{key:1,size:"15",name:"preview-close-one"}))]))],32)),[[d,e.contextmenus,void 0,{stop:!0}]])}}});var Mn=we(ci,[["__scopeId","data-v-ea8a3288"]]);const fi=L({__name:"SimpleLayerItem",props:{component:null,index:null,activeKey:null,mode:{default:"expand"},name:null,contextmenus:null},emits:["select"],setup(e,{emit:t}){const n=e,a=$e(),o=(s,u)=>{var f;(f=s.dataTransfer)==null||f.setData("compomentIndex",u),s.stopPropagation()},r=(s,u,f=!1)=>{s.preventDefault(),s.stopPropagation(),f&&u!==n.activeKey&&Fe.emit("ActiveMenu",u)},l=(s,u)=>{var C;s.preventDefault(),s.stopPropagation();const f=(C=s.dataTransfer)==null?void 0:C.getData("compomentIndex"),d=i(f,u),p=f.split("-").map(b=>Number(b)),m=a.getComponentByIndex(p),w=a.cutComponent(p[p.length-1],m==null?void 0:m.parent);if(w&&d){const b=f.split("-").map($=>Number($)),S=a.getComponentByIndex(b);a.insertComponent(b[b.length-1],w,S),t("select",u)}},i=(s,u)=>{const f=s.split("-").map(m=>parseInt(m)),d=u.split("-").map(m=>parseInt(m)),p=f.length;for(let m=0;m<p;m++)if(f[m]!==d[m]){if(f[m]>d[m])return u;if(f[m]<d[m])return m+1==p?(d[m]=d[m]-1,d.join("-")):u}return u};return(s,u)=>{const f=Ut("IconPark"),d=at("contextmenu");return me((R(),X(f,{draggable:"true",onDragstart:u[0]||(u[0]=p=>o(p,e.index)),onDrop:u[1]||(u[1]=p=>l(p,e.index)),onDragover:u[2]||(u[2]=p=>r(p,e.index,!0)),name:e.name},null,8,["name"])),[[d,e.contextmenus,void 0,{stop:!0}]])}}});var On=we(fi,[["__scopeId","data-v-4341fe0f"]]);const jn=L({__name:"Layer",setup(e){const t=$e(),n=aa(),a={};ea.map(g=>{a[g.key]=g.icon});const o=V(()=>t.componentData),r=B(null),l=B("");Bt("ActiveMenu",g=>{const x=g;l.value=x,r.value&&r.value.open&&r.value.open(x)});const s=g=>{l.value=g;const x=g.split("-").map(z=>Number(z)),_=t.getComponentByIndex(x);_&&t.setCurComponent(_,g)},u=B([]),f=(g,x,_)=>{for(let z=0;z<x.length;z++){const N=x[z],q=d(z,g);if(N.component==="Group"){const ie=[];_.push({label:()=>h(Mn,{component:N,index:q,contextmenus:()=>I(q),onclick:()=>s(q)}),key:q,icon:()=>h(On,{name:"branch-one",component:N,index:q,contextmenus:()=>I(q),onclick:()=>s(q)}),children:f(q,N.subComponents||[],ie)})}else _.push({label:()=>h(Mn,{component:N,index:q,contextmenus:()=>I(q)}),key:q,icon:()=>h(On,{name:`${a[N.group]}`,component:N,index:q,contextmenus:()=>I(q),onclick:()=>s(q)})})}return _},d=(g,x)=>x?`${x}-${g}`:g.toString(),p=g=>{const x=g.split("-").map(z=>Number(z)),_=t.getComponentByIndex(x);_&&(_.groupStyle=void 0,It(JSON.stringify(_.toJson())),n.copy())},m=g=>ke(this,null,function*(){var _;s(g);const x=g.split("-").map(z=>Number(z));t.removeComponent(x[x.length-1],(_=t.curComponent)==null?void 0:_.parent)}),w=g=>ke(this,null,function*(){var _;s(g);const x=g.split("-").map(z=>Number(z));t.upComponent(x[x.length-1],(_=t.curComponent)==null?void 0:_.parent)}),C=g=>ke(this,null,function*(){var _;s(g);const x=g.split("-").map(z=>Number(z));t.downComponent(x[x.length-1],(_=t.curComponent)==null?void 0:_.parent)}),b=g=>ke(this,null,function*(){var _;s(g);const x=g.split("-").map(z=>Number(z));t.topComponent(x[x.length-1],(_=t.curComponent)==null?void 0:_.parent)}),S=g=>ke(this,null,function*(){var _;s(g);const x=g.split("-").map(z=>Number(z));t.bottomComponent(x[x.length-1],(_=t.curComponent)==null?void 0:_.parent)}),$=g=>{s(g);const x=g.split("-").map(z=>Number(z)),_=t.getComponentByIndex(x);_&&_.hiddenComponent()},F=g=>{s(g);const x=g.split("-").map(z=>Number(z)),_=t.getComponentByIndex(x);_&&_.showComponent()},T=g=>{const x=g.split("-").map(N=>Number(N)),_=t.getComponentByIndex(x),z=t.cutComponent(x[x.length-1],_==null?void 0:_.parent);z&&(It(JSON.stringify(z.toJson())),n.copy())},j=g=>{const x=g.split("-").map(N=>Number(N)),_=n.copyData,z=t.getComponentByIndex(x);if(_){const N=zo(n.copyData);N.id=Bo(),t.insertComponent(x[x.length-1],N,z==null?void 0:z.parent)}},I=g=>{var _,z,N;const x=g.split("-").map(q=>parseInt(q));return[{text:"\u590D\u5236",subText:"Ctrl + C",handler:()=>p(g)},{text:"\u7C98\u8D34",subText:"Ctrl + V",handler:()=>j(g)},{text:"\u526A\u5207",subText:"Ctrl + V",handler:()=>T(g)},{text:"\u62C6\u5206",subText:"Ctrl + V",disable:((_=t.getComponentByIndex(g.split("-").map(q=>Number(q))))==null?void 0:_.component)!=="Group",handler:()=>t.decompose()},{text:"\u5220\u9664",subText:"",handler:()=>m(g)},{divider:!0},{text:"\u7F6E\u4E8E\u9876\u5C42",handler:()=>b(g),children:[{text:"\u7F6E\u4E8E\u9876\u5C42",handler:()=>b(g)},{text:"\u4E0A\u79FB\u4E00\u5C42",handler:()=>w(g)}]},{text:"\u7F6E\u4E8E\u5E95\u5C42",handler:()=>S(g),children:[{text:"\u7F6E\u4E8E\u5E95\u5C42",handler:()=>S(g)},{text:"\u4E0B\u79FB\u4E00\u5C42",handler:()=>C(g)}]},{divider:!0},{text:"\u663E\u793A",disable:(z=t.getComponentByIndex(x))==null?void 0:z.display,subText:"",handler:()=>F(g)},{text:"\u9690\u85CF",disable:!((N=t.getComponentByIndex(x))!=null&&N.display),subText:"",handler:()=>$(g)}]};return Pe(()=>t.componentData,()=>{const g=t.componentData;u.value=[],u.value=f("",g,[])},{deep:!0,immediate:!0}),(g,x)=>(R(),J("div",null,[v(o).length>0?(R(),X(v(fn),{key:0,options:u.value,"onUpdate:value":s},null,8,["options"])):(R(),X(v(Wr),{key:1,class:"placeholder"},{default:U(()=>[P(v(Gr),null,{default:U(()=>[P(v(Io),{description:"\u753B\u5E03\u4E3A\u7A7A"})]),_:1})]),_:1}))]))}}),pi=fe("span",null,"\u7EC4\u4EF6",-1),hi=fe("span",null,"\u56FE\u5C42",-1),mi=L({__name:"SideBar",props:{iscollapsed:{type:Boolean,default:!1}},emits:["update:iscollapsed"],setup(e,{emit:t}){const n=B("components"),a=r=>{t("update:iscollapsed",!1),n.value=r},o=r=>{n.value=r};return(r,l)=>{const i=Ut("IconPark");return e.iscollapsed?(R(),X(v(Et),{key:1,type:"line",animated:"","bar-width":48,"justify-content":"center","onUpdate:value":[a,l[4]||(l[4]=s=>n.value=s)],value:n.value},{default:U(()=>[n.value==="components"?(R(),X(v(Je),{key:0,name:"components","display-directive":"show:lazy"},{tab:U(()=>[P(i,{name:"components",onClick:l[2]||(l[2]=s=>o("layer"))})]),default:U(()=>[P(Un)]),_:1})):n.value==="layer"?(R(),X(v(Je),{key:1,name:"layer","display-directive":"show:lazy"},{tab:U(()=>[P(i,{name:"layers",onClick:l[3]||(l[3]=s=>o("components"))})]),default:U(()=>[P(jn)]),_:1})):zt("",!0)]),_:1},8,["value"])):(R(),X(v(Et),{key:0,type:"line",animated:"","bar-width":100,"justify-content":"center",value:n.value,"onUpdate:value":[l[0]||(l[0]=s=>n.value=s),l[1]||(l[1]=s=>n.value=s)]},{default:U(()=>[P(v(Je),{name:"components","display-directive":"show:lazy"},{tab:U(()=>[P(i,{name:"components"}),pi]),default:U(()=>[P(Un)]),_:1}),P(v(Je),{name:"layer","display-directive":"show:lazy"},{tab:U(()=>[P(i,{name:"layers"}),hi]),default:U(()=>[P(jn)]),_:1})]),_:1},8,["value"]))}}}),bi=[{label:"4K",value:"3840X2160"},{label:"2k",value:"2048X1080"},{label:"1080P",value:"1920X1080"},{label:"720P",value:"1366X768"},{label:"iPhoneXR",value:"414X896"},{label:"iPhoneSE",value:"375X667"},{label:"iPhone12Pro",value:"390X884"},{label:"GalaxyS8+",value:"360X740"},{label:"GalaxyS20Ultra+",value:"412X915"},{label:"iPadAir",value:"820X1180"},{label:"iPadMini",value:"768X1024"},{label:"SurfacePro7",value:"912X1368"},{label:"NestHub",value:"1024X600"},{label:"NestMax",value:"1028X800"}];const vi={class:"attr-list"},gi=L({__name:"Canvas",setup(e){const t=V(()=>[{label:"\u672C\u8BBE\u5907",value:`${window.screen.width}X${window.screen.height}`},...bi]),n=$e(),a=V(()=>n.canvasStyleData),o=B("\u672C\u8BBE\u5907"),r=[{key:"width",label:"\u5BBD\u5EA6",type:Re.NUMBER},{key:"height",label:"\u9AD8\u5EA6",type:Re.NUMBER},{key:"image",label:"\u80CC\u666F\u56FE",type:Re.TEXT}],l=i=>{const s=i.split("X"),u=parseInt(s[0]),f=parseInt(s[1]);n.setCanvasStyle(_t(ft({},a.value),{width:u,height:f}))};return(i,s)=>(R(),J("div",vi,[P(v(pa),null,{default:U(()=>[P(v(pn),{size:"small",onSubmit:s[1]||(s[1]=Lt(()=>{},["prevent"])),"label-placement":"left","label-align":"left"},{default:U(()=>[P(v(Ft),{label:"\u5206\u8FA8\u7387"},{default:U(()=>[P(v(Ot),{value:o.value,"onUpdate:value":[s[0]||(s[0]=u=>o.value=u),l],placeholder:"\u9009\u62E9\u5206\u8FA8\u7387",options:v(t)},null,8,["value","options"])]),_:1}),(R(),J(Ce,null,ze(r,({key:u,label:f,type:d},p)=>P(v(Ft),{key:p,label:f},{default:U(()=>[d==="number"?(R(),X(v(mn),{key:0,value:v(a)[u],"onUpdate:value":m=>v(a)[u]=m},null,8,["value","onUpdate:value"])):(R(),X(v(yt),{key:1,value:v(a)[u],"onUpdate:value":m=>v(a)[u]=m},null,8,["value","onUpdate:value"]))]),_:2},1032,["label"])),64))]),_:1})]),_:1})]))}});var xi=we(gi,[["__scopeId","data-v-c4e88632"]]);const yi=[{label:"Arial",value:"Arial"},{label:"\u5FAE\u8F6F\u96C5\u9ED1",value:"Microsoft Yahei"},{label:"\u5B8B\u4F53",value:"SimSun"},{label:"\u9ED1\u4F53",value:"SimHei"},{label:"\u6977\u4F53",value:"KaiTi"},{label:"\u65B0\u5B8B\u4F53",value:"NSimSun"},{label:"\u4EFF\u5B8B",value:"FangSong"},{label:"\u82F9\u65B9",value:"PingFang SC"},{label:"\u534E\u6587\u9ED1\u4F53",value:"STHeiti"},{label:"\u534E\u6587\u6977\u4F53",value:"STKaiti"},{label:"\u534E\u6587\u5B8B\u4F53",value:"STSong"},{label:"\u534E\u6587\u4EFF\u5B8B",value:"STFangSong"},{label:"\u534E\u6587\u4E2D\u5B8B",value:"STZhongSong"},{label:"\u534E\u6587\u7425\u73C0",value:"STHupo"},{label:"\u534E\u6587\u65B0\u9B4F",value:"STXinwei"},{label:"\u534E\u6587\u96B6\u4E66",value:"STLiti"},{label:"\u534E\u6587\u884C\u6977",value:"STXingkai"},{label:"\u51AC\u9752\u9ED1\u4F53",value:"Hiragino Sans GB"},{label:"\u5170\u4EAD\u9ED1",value:"Lantinghei SC"},{label:"\u504F\u504F\u4F53",value:"Hanzipen SC"},{label:"\u624B\u672D\u4F53",value:"Hannotate SC"},{label:"\u5B8B\u4F53",value:"Songti SC"},{label:"\u5A03\u5A03\u4F53",value:"Wawati SC"},{label:"\u884C\u6977",value:"Xingkai SC"},{label:"\u5706\u4F53",value:"Yuanti SC"},{label:"\u534E\u6587\u7EC6\u9ED1",value:"STXihei"},{label:"\u5E7C\u5706",value:"YouYuan"},{label:"\u96B6\u4E66",value:"LiSu"},{label:"LED",value:"LED"},{label:"LCD",value:"LCD"}],_i=[{label:"100 Thin",value:100},{label:"200 ExtraThin",value:200},{label:"300 Light",value:300},{label:"400 Normal",value:400},{label:"500 Medium",value:500},{label:"600 Semi Bold",value:600},{label:"700 Bold",value:700},{label:"Extra Bold",value:800},{label:"Black",value:900}],wi=L({__name:"FontStyle",props:{value:{default:""}},emits:["update:value","change"],setup(e,{emit:t}){const a=B(e.value),o=Ie(yi),r=l=>{a.value=l,t("update:value",a.value),t("change",a.value)};return(l,i)=>(R(),X(v(Ot),{clearable:"",value:a.value,"onUpdate:value":[i[0]||(i[0]=s=>a.value=s),r],placeholder:"\u8BF7\u9009\u62E9\u5B57\u4F53",options:o},null,8,["value","options"]))}}),Ci=L({__name:"FontWeight",props:{value:{default:400}},emits:["update:value","change"],setup(e,{emit:t}){const a=B(e.value),o=Ie(_i),r=l=>{a.value=l,t("update:value",a.value),t("change",a.value)};return(l,i)=>(R(),X(v(Ot),{clearable:"",value:a.value,"onUpdate:value":[i[0]||(i[0]=s=>a.value=s),r],placeholder:"\u8BF7\u9009\u62E9\u5B57\u91CD",options:o},null,8,["value","options"]))}}),Si={class:"linear-gradient"},ki=L({__name:"LinearGradient",props:{value:{default:()=>({angle:0,color1:"",color2:""})}},emits:["update:value","change"],setup(e,{emit:t}){const n=e,a=B({angle:n.value.angle||0,color1:n.value.color1||"",color2:n.value.color2||""}),o=(r,l)=>{a.value[r]=l,t("update:value",a.value),t("change",a.value)};return(r,l)=>(R(),J("div",Si,[P(v(mn),{modelValue:e.value.angle,"onUpdate:value":l[0]||(l[0]=i=>o("angle",i)),controls:!0,min:0,max:360,step:1},null,8,["modelValue"]),P(v(sn),{value:e.value.color1,"onUpdate:value":l[1]||(l[1]=i=>o("color1",i)),swatches:v(nn)},null,8,["value","swatches"]),P(v(sn),{value:e.value.color2,"onUpdate:value":l[2]||(l[2]=i=>o("color2",i)),swatches:v(nn)},null,8,["value","swatches"])]))}});var Ri=L({props:{args:{type:Object,default:()=>{}},component:{type:Object,default:()=>{}},value:{type:Object}},emits:["update:value","change"],setup(e,{emit:t}){const n=a=>{t("update:value",a),t("change",a)};return()=>[h(e.component,_t(ft({},e.args),{value:e.value,onChange:n}))]}});const ba=L({__name:"FormAttr",props:{data:null,children:null,name:null,uid:null,ukey:null},emits:["change"],setup(e,{emit:t}){const a=Ie(e.data),o=(r,l)=>{t("change",l,r)};return(r,l)=>(R(),X(v(pn),{size:"small",onSubmit:l[0]||(l[0]=Lt(()=>{},["prevent"])),"label-placement":"left","label-align":"left"},{default:U(()=>[(R(!0),J(Ce,null,ze(e.children,({prop:i,label:s,type:u,componentOptions:f})=>(R(),X(v(Ft),{key:`${e.ukey}${i}`,label:s},{default:U(()=>[u===v(Re).COLOR?(R(),X(v(sn),{key:0,value:a[i],"onUpdate:value":[d=>a[i]=d,d=>o(d,i)],swatches:v(nn),modes:["hex","rgb","hsl"]},null,8,["value","onUpdate:value","swatches"])):u===v(Re).SELECT?(R(),X(v(Ot),{key:1,modelValue:a[i],"onUpdate:modelValue":d=>a[i]=d,placeholder:s,"onUpdate:value":d=>o(d,i),options:(f==null?void 0:f.options)||[]},null,8,["modelValue","onUpdate:modelValue","placeholder","onUpdate:value","options"])):u===v(Re).RADIO?(R(),X(v(Mr),{key:2,value:a[i],"onUpdate:value":[d=>a[i]=d,d=>o(d,i)],placeholder:s},{default:U(()=>[(R(!0),J(Ce,null,ze((f==null?void 0:f.options)||[],d=>(R(),X(v(Nr),{label:d.value,key:d.value},{default:U(()=>[Mt(nt(d.label),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["value","onUpdate:value","placeholder"])):u===v(Re).NUMBER?(R(),X(v(mn),{key:3,value:a[i],"onUpdate:value":[d=>a[i]=d,d=>o(d,i)]},null,8,["value","onUpdate:value"])):u===v(Re).SWITCH?(R(),X(v(Fo),{key:4,value:a[i],"onUpdate:value":[d=>a[i]=d,d=>o(d,i)]},null,8,["value","onUpdate:value"])):u===v(Re).FONT_STYLE?(R(),X(v(wi),{key:5,value:a[i],"onUpdate:value":d=>a[i]=d,onChange:d=>o(d,i)},null,8,["value","onUpdate:value","onChange"])):u===v(Re).FONT_WEIGHT?(R(),X(v(Ci),{key:6,value:a[i],"onUpdate:value":d=>a[i]=d,onChange:d=>o(d,i)},null,8,["value","onUpdate:value","onChange"])):u===v(Re).LINEAR_GRADIENT?(R(),X(v(ki),{key:7,value:a[i],"onUpdate:value":d=>a[i]=d,onChange:d=>o(d,i)},null,8,["value","onUpdate:value","onChange"])):u===v(Re).CUSTOM?(R(),X(v(Ri),{key:8,value:a[i],"onUpdate:value":d=>a[i]=d,onChange:d=>o(d,i),component:f.componentType,args:f.args},null,8,["value","onUpdate:value","onChange","component","args"])):(R(),X(v(yt),{key:9,clearable:"",value:a[i],"onUpdate:value":[d=>a[i]=d,d=>o(d,i)],readonly:f.editable===!1,disabled:f.disabled},null,8,["value","onUpdate:value","readonly","disabled"]))]),_:2},1032,["label"]))),128))]),_:1}))}});const $i={class:"attr-list"},Di=L({__name:"StyleList",props:{curComponent:null},setup(e){const t=e,n=$e(),a=Ie({}),o=V(()=>t.curComponent?t.curComponent.styleFormValue:{}),r=ln((s,u)=>{if(t.curComponent)if(["top","left","width","height","rotate"].includes(s)){const d=t.curComponent.parent;n.syncComponentLoction({[s]:u},d,!0),d&&n.resizeAutoComponent(d)}else n.setCurComponentStyle(s,u)},300),l=ln(s=>{const u=Eo(s,a);u&&Object.keys(u).forEach(f=>{a[f]=u[f]})},200),i=()=>{t.curComponent&&(ta(a),l(t.curComponent.style))};return Pe(()=>[t.curComponent.id,t.curComponent.positionStyle],()=>{t.curComponent&&t.curComponent.id&&i()},{immediate:!0,deep:!0}),(s,u)=>(R(),J("div",$i,[P(v(da),{accordion:""},{default:U(()=>[(R(!0),J(Ce,null,ze(v(o),({label:f,prop:d,children:p})=>(R(),X(v(ua),{key:`${e.curComponent.id}${d}`,title:f,name:d},{default:U(()=>[P(ba,{children:p,data:a,onChange:v(r),name:f,uid:d,ukey:e.curComponent.id},null,8,["children","data","onChange","name","uid","ukey"])]),_:2},1032,["title","name"]))),128))]),_:1})]))}});var Ii=we(Di,[["__scopeId","data-v-2648b246"]]);const zi={class:"attr-list"},Bi=L({__name:"AttrList",props:{curComponent:null},setup(e){const t=e,n=$e(),a=Ie({common:{name:t.curComponent.name,component:t.curComponent.component,id:t.curComponent.id}}),o=V(()=>t.curComponent?t.curComponent.propFromValue:[]),r=(i,s,u)=>{n.setCurComponentPropValue(i,s,u)},l=()=>{ta(a,["common"]),a.common.name=t.curComponent.name,a.common.component=t.curComponent.component,a.common.id=t.curComponent.id,t.curComponent&&t.curComponent.propValue&&Object.keys(t.curComponent.propValue).forEach(i=>{a[i]=t.curComponent.propValue[i]})};return Pe(()=>t.curComponent.id,()=>{l()},{immediate:!0}),(i,s)=>(R(),J("div",zi,[P(v(da),{accordion:""},{default:U(()=>[(R(!0),J(Ce,null,ze(v(o),({label:u,prop:f,children:d})=>(R(),X(v(ua),{key:`${e.curComponent.id}${f}`,title:u,name:f},{default:U(()=>[P(ba,{children:d,data:a[f],onChange:(p,m)=>r(f,p,m),name:u,uid:f,ukey:e.curComponent.id},null,8,["children","data","onChange","name","uid","ukey"])]),_:2},1032,["title","name"]))),128))]),_:1})]))}});var Fi=we(Bi,[["__scopeId","data-v-1c2784db"]]);const Ei={key:0},Ti={key:1},Pi=L({__name:"SideBar",props:{iscollapsed:{type:Boolean,default:!1}},emits:["update:iscollapsed"],setup(e,{emit:t}){const n=B("attr"),a=$e(),o=V(()=>a.curComponent),r=V(()=>a.curComponent?[{label:"\u6837\u5F0F",key:"4",icon:()=>h(Ue,{name:"text-style",onClick:()=>l("style")})},{label:"\u5C5E\u6027",key:"2",icon:()=>h(Ue,{name:"internal-data",onClick:()=>l("attr")})}]:[{label:"\u753B\u5E03",key:"1",icon:()=>h(Ue,{name:"page"})}]),l=i=>{t("update:iscollapsed",!1),n.value=i};return(i,s)=>e.iscollapsed?(R(),J("div",Ti,[P(v(fn),{options:v(r)},null,8,["options"])])):(R(),J("div",Ei,[v(o)?(R(),X(v(Et),{key:0,type:"line",animated:"","justify-content":"center",value:n.value,"onUpdate:value":[s[0]||(s[0]=u=>n.value=u),s[1]||(s[1]=u=>n.value=u)]},{default:U(()=>[P(v(Je),{name:"style","display-directive":"show:lazy"},{tab:U(()=>[P(v(Ue),{name:"text-style"}),me(fe("span",null,"\u6837\u5F0F",512),[[De,!e.iscollapsed]])]),default:U(()=>[P(v(Ii),{curComponent:v(o)},null,8,["curComponent"])]),_:1}),P(v(Je),{name:"attr","display-directive":"show:lazy"},{tab:U(()=>[P(v(Ue),{name:"internal-data"}),me(fe("span",null,"\u5C5E\u6027",512),[[De,!e.iscollapsed]])]),default:U(()=>[P(v(Fi),{curComponent:v(o)},null,8,["curComponent"])]),_:1})]),_:1},8,["value"])):(R(),X(v(Et),{key:1,type:"line",animated:"","justify-content":"center"},{default:U(()=>[P(v(Je),{name:"canvas","display-directive":"show:lazy"},{tab:U(()=>[P(v(Ue),{name:"page"}),me(fe("span",null,"\u753B\u5E03",512),[[De,!e.iscollapsed]])]),default:U(()=>[P(xi)]),_:1})]),_:1}))]))}});const Ai=L({__name:"DesignerPage",setup(e){const t=$e(),n=B(!1),a=B(!1),o=Qn();Nt(()=>ke(this,null,function*(){const f=o.params.index;f&&(yield r(f))}));const r=f=>ke(this,null,function*(){const d=yield Lo(f);!d.data||t.setLayoutData(d.data)}),l=B(0),i=B(0),s=V(()=>({width:l.value+"px",height:i.value+"px"})),u=f=>{const d=f[0],{width:p,height:m}=d.contentRect;l.value=p,i.value=m};return qn(()=>{t.clearCanvas()}),(f,d)=>{const p=at("resize");return R(),X(v(jt),{class:"home"},{default:U(()=>[P(v(To),{class:"header"},{default:U(()=>[P(v(ri))]),_:1}),P(v(jt),{"has-sider":"",class:"main"},{default:U(()=>[P(v(kn),{class:"left",width:"200",collapsed:n.value,"native-scrollbar":!1,bordered:"","collapse-mode":"width","show-trigger":"",onCollapse:d[2]||(d[2]=()=>n.value=!0),onExpand:d[3]||(d[3]=()=>n.value=!1)},{default:U(()=>[P(v(mi),{iscollapsed:n.value,"onUpdate:iscollapsed":[d[0]||(d[0]=m=>n.value=m),d[1]||(d[1]=m=>n.value=m)]},null,8,["iscollapsed"])]),_:1},8,["collapsed"]),P(v(jt),{"has-sider":"","sider-placement":"right"},{default:U(()=>[me((R(),X(v(Po),{class:"content"},{default:U(()=>[P(v(pa),{"x-scrollable":"",style:Ve(v(s))},{default:U(()=>[P(Dl)]),_:1},8,["style"])]),_:1})),[[p,u]]),P(v(kn),{class:"right",width:"240",collapsed:a.value,"native-scrollbar":!1,bordered:"","collapsed-width":35,"collapse-mode":"width","show-trigger":"arrow-circle",onCollapse:d[6]||(d[6]=()=>a.value=!0),onExpand:d[7]||(d[7]=()=>a.value=!1)},{default:U(()=>[P(v(Pi),{iscollapsed:a.value,"onUpdate:iscollapsed":[d[4]||(d[4]=m=>a.value=m),d[5]||(d[5]=m=>a.value=m)]},null,8,["iscollapsed"])]),_:1},8,["collapsed"])]),_:1})]),_:1})]),_:1})}}});var Hi=we(Ai,[["__scopeId","data-v-6d28df9d"]]);export{Hi as default};
