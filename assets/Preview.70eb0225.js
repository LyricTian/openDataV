var f=Object.defineProperty,w=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var p=(n,a,e)=>a in n?f(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,v=(n,a)=>{for(var e in a||(a={}))k.call(a,e)&&p(n,e,a[e]);if(d)for(var e of d(a))D.call(a,e)&&p(n,e,a[e]);return n},m=(n,a)=>w(n,b(a));var _=(n,a,e)=>new Promise((i,o)=>{var l=s=>{try{t(e.next(s))}catch(c){o(c)}},r=s=>{try{t(e.throw(s))}catch(c){o(c)}},t=s=>s.done?i(s.value):Promise.resolve(s.value).then(l,r);t((e=e.apply(n,a)).next())});import{C as z}from"./ComponentWrapper.2103f6c1.js";import{_ as B,d as E,bo as x,u as L,c as S,B as W,k as C,E as I,S as P,$ as F,o as u,b as g,F as O,r as q,e as H,a as h,f as M}from"./index.e04c72e0.js";const R=E({__name:"Preview",setup(n){const a=x(),e=L(),i=S(()=>e.componentData),o=W({width:0,height:0,scale:0,image:""}),l=S(()=>{const t=m(v({},o.value),{backgroundImage:o.value.image,backgroundSize:"cover"});return C(t,["width","height","backgroundImage","backgroundSize"])});I(()=>_(this,null,function*(){const t=yield a.latestRecord();t&&e.setLayoutData({canvasData:t.canvasData,canvasStyle:t.canvasStyle}),o.value=e.canvasStyleData,r(),window.addEventListener("resize",r)})),P(()=>{window.removeEventListener("resize",r)});const r=()=>{const t=document.querySelector(".screen");if(t){const s=o.value.width,c=o.value.height;F(t,s,c)}};return(t,s)=>(u(),g("div",{class:"bg",style:M(h(l))},[(u(!0),g(O,null,q(h(i),(c,y)=>(u(),H(z,{key:y,component:c},null,8,["component"]))),128))],4))}});var A=B(R,[["__scopeId","data-v-3a2e73f0"]]);export{A as default};
