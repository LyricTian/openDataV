var kt=Object.defineProperty;var it=Object.getOwnPropertySymbols;var zt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var at=(o,t,e)=>t in o?kt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,H=(o,t)=>{for(var e in t||(t={}))zt.call(t,e)&&at(o,e,t[e]);if(it)for(var e of it(t))Lt.call(t,e)&&at(o,e,t[e]);return o};import{u as J,l as yt,m as ct,p as Pt,q as Bt,s as G,t as Ct,v as lt,x as At,y as Rt,z as C,_ as It,d as Yt,A as Ft,c as K,B as X,C as U,D as Xt,E as Tt,G as Wt,H as Ht,I as Gt,J as y,o as pt,b as ut,K as E,L as N,M as g,N as ft,O as x,a as c,n as S,P as dt,Q as mt,R as ht}from"./index.7ae9ab08.js";import{e as Nt}from"./useEventBus.fd7bcfd1.js";const L=J(),Ot=yt({id:"compose",state:()=>({style:{top:0,left:0,width:0,height:0},components:[]}),getters:{canCompose(){return this.components.length>1}},actions:{isActived(o){return this.components.findIndex(t=>t.id===o.id)!==-1},setAreaData(o,t){this.style=o||{},this.components=t||[]},appendComponent(o){this.components.findIndex(t=>t.id===o.id)===-1&&(this.components.push(o),this.components.length>1&&(this.style=H(H({},this.style),ct(this.components))))},compose(){this.style.width===0&&(this.style=H(H({},this.style),ct(this.components)));const o=Pt.Group,t=new o;for(const r in this.style)t.change(r,this.style[r]);t.addComponent(this.components,!0),Bt(t),this.batchDeleteComponent(this.components),L.appendComponent(t);const e=L.componentData.length-1;L.setCurComponent(L.componentData[e],e.toString()),this.components=[]},batchDeleteComponent(o){o.forEach(t=>{for(let e=0,r=L.componentData.length;e<r;e++)if(t.id===L.componentData[e].id){L.componentData.splice(e,1);break}})},flushRight(){const{right:o,items:t}=G(this.components);t.forEach(e=>{const r=o-e.right;e.component.change("left",e.component.positionStyle.left+r)}),L.saveComponentData()},flushLeft(){const{left:o,items:t}=G(this.components);t.forEach(e=>{const r=e.left-o;e.component.change("left",e.component.positionStyle.left-r)}),L.saveComponentData()},flushTop(){const{top:o,items:t}=G(this.components);t.forEach(e=>{const r=e.top-o;e.component.change("top",e.component.positionStyle.top-r)}),L.saveComponentData()},flushBottom(){const{bottom:o,items:t}=G(this.components);t.forEach(e=>{const r=o-e.bottom;e.component.change("top",e.component.positionStyle.top+r)}),L.saveComponentData()},flushRow(){const{top:o,bottom:t,items:e}=G(this.components);e.forEach(r=>{const i=(t+o)/2-r.center.y;r.component.change("top",r.component.positionStyle.top+i)}),L.saveComponentData()},flushColumn(){const{left:o,right:t,items:e}=G(this.components);e.forEach(r=>{const i=(o+t)/2-r.center.x;r.component.change("left",r.component.positionStyle.left+i)}),L.saveComponentData()}}}),qt=()=>Ot(Ct),Jt=yt({id:"copy",state:()=>({copyData:void 0,isCut:!1}),actions:{copy(){const t=J().curComponent;!t||(this.copyData=lt(t))},paste(o,t,e){if(!this.copyData){At.info("\u8BF7\u9009\u62E9\u7EC4\u4EF6");return}const r=J();o?(this.copyData.change("top",e),this.copyData.change("left",t)):(this.copyData.change("top",this.copyData.style.top+10),this.copyData.change("left",this.copyData.style.left+10));const i=lt(this.copyData);i.id=Rt(),r.appendComponent(i)}}});function $t(){return Jt(Ct)}const Kt={lt:Ut,t:Zt,rt:_t,r:ee,rb:te,b:jt,lb:Qt,l:Vt};function I(o){const{top:t,left:e,height:r,width:i}=o;return{y:t+r/2,x:e+i/2}}function xt(o,t,e){return o*(e-t.x)+t.y}function vt(o,t,e){return t.x-(t.y-e)/o}function Ut(o,t){const{top:e,left:r,rotate:i,width:d,height:m}=o,h=I(o),u={x:r+d,y:e+m},l=C(u,h,i),p={x:(l.x+t.x)/2,y:(l.y+t.y)/2},f=C(t,p,-i),D=C(l,p,-i),b=D.y-f.y,P=D.x-f.x;return{top:f.y,left:f.x,width:P,height:b}}function Vt(o,t){const{left:e,rotate:r,width:i,height:d,top:m}=o,h=I(o),u={x:e+i,y:m+d/2},l=C(u,h,r);if(r%180!=90){const P=(h.y-l.y)/(h.x-l.x),R=xt(P,h,t.x);t.y=R}else t.x=h.x;const p={x:(l.x+t.x)/2,y:(l.y+t.y)/2},f=C(t,p,-r),b=C(l,p,-r).x-f.x;return{top:p.y-d/2,left:f.x,width:b,height:d}}function Qt(o,t){const{top:e,left:r,rotate:i,width:d}=o,m=I(o),h={x:r+d,y:e},u=C(h,m,i),l={x:(u.x+t.x)/2,y:(u.y+t.y)/2},p=C(t,l,-i),f=C(u,l,-i),D=p.y-f.y,b=f.x-p.x;return{top:p.y-D,left:p.x,width:b,height:D}}function jt(o,t){const{top:e,left:r,rotate:i,width:d}=o,m=I(o),h={x:r+d/2,y:e},u=C(h,m,i);if(i%180!=90){const b=(m.y-u.y)/(m.x-u.x),P=vt(b,m,t.y);t.x=P}else t.y=m.y;const l={x:(u.x+t.x)/2,y:(u.y+t.y)/2},p=C(t,l,-i),f=C(u,l,-i),D=p.y-f.y;return{top:p.y-D,left:l.x-d/2,width:d,height:D}}function Zt(o,t){const{top:e,left:r,rotate:i,width:d,height:m}=o,h=I(o),u={x:r+d/2,y:e+m},l=C(u,h,i);if(i%180!=90){const P=(h.y-l.y)/(h.x-l.x),R=vt(P,h,t.y);t.x=R}else t.y=h.y;const p={x:(l.x+t.x)/2,y:(l.y+t.y)/2},f=C(t,p,-i),b=C(l,p,-i).y-f.y;return{top:f.y,left:p.x-d/2,width:d,height:b}}function _t(o,t){const{top:e,left:r,rotate:i,height:d}=o,m=I(o),h={x:r,y:e+d},u=C(h,m,i),l={x:(u.x+t.x)/2,y:(u.y+t.y)/2},p=C(t,l,-i),f=C(u,l,-i),D=f.y-p.y,b=p.x-f.x;return{top:p.y,left:f.x,width:b,height:D}}function te(o,t){const{top:e,left:r,rotate:i}=o,d=I(o),h=C({x:r,y:e},d,i),u={x:(h.x+t.x)/2,y:(h.y+t.y)/2},l=C(t,u,-i),p=C(h,u,-i),f=l.y-p.y,D=l.x-p.x;return{top:p.y,left:p.x,width:D,height:f}}function ee(o,t){const{top:e,left:r,rotate:i,height:d}=o,m=I(o),h={x:r,y:e+d/2},u=C(h,m,i);if(i%180!=90){const b=(m.y-u.y)/(m.x-u.x),P=xt(b,m,t.x);t.y=P}else t.x=m.x;const l={x:(u.x+t.x)/2,y:(u.y+t.y)/2},p=C(t,l,-i),f=C(u,l,-i),D=p.x-f.x;return{top:f.y-d/2,left:f.x,width:D,height:d}}function ne(o,t,e){const{top:r,left:i,width:d,height:m}=Kt[o](t,e);return{top:Math.round(r),left:Math.round(i),width:Math.round(d),height:Math.round(m)}}const oe=["onDblclick","onClick"],se=["onClick","onMousedown"],re=Yt({__name:"Shape",props:{active:{type:Boolean,default:!1},info:null,defaultStyle:null,index:null,isInner:{type:Boolean,default:!1}},setup(o){const t=o;Ft(s=>({"51c12dbc":j.value,"50aa2f59":Z.value,"518e1da7":_.value}));const e=J(),r=qt(),i=$t(),d=()=>{var s;i.copy(),ht(JSON.stringify((s=e.curComponent)==null?void 0:s.toJson()))},m=()=>{e.removeComponent(t.index,t.info.parent)},h=()=>{e.upComponent(t.index,t.info.parent)},u=()=>{e.downComponent(t.index,t.info.parent)},l=()=>{e.topComponent(t.index,t.info.parent)},p=()=>{let s=e.curComponent.id;ht(s)},f=()=>{e.bottomComponent(t.index,t.info.parent)},D=()=>{e.decompose()},b=(s,n)=>{var v;if(e.curComponent&&e.curComponent.id===t.info.id)n.stopPropagation();else if(!e.curComponent&&!t.info.parent)e.setCurComponent(t.info,t.index.toString()),n.stopPropagation();else return;return[{text:"\u62C6\u5206",subText:"",disable:((v=e.curComponent)==null?void 0:v.component)!=="Group",handler:D},{divider:!0},{text:"\u590D\u5236",subText:"Ctrl + C",handler:d},{text:"\u590D\u5236ID",subText:"",handler:p},{text:"\u5220\u9664",subText:"Ctr + Delete",handler:m},{divider:!0},{text:"\u7F6E\u4E8E\u9876\u5C42",handler:l,children:[{text:"\u7F6E\u4E8E\u9876\u5C42",handler:l},{text:"\u4E0A\u79FB\u4E00\u5C42",handler:h}]},{text:"\u7F6E\u4E8E\u5E95\u5C42",handler:f,children:[{text:"\u7F6E\u4E8E\u5E95\u5C42",handler:f},{text:"\u4E0B\u79FB\u4E00\u5C42",handler:u}]}]},P=K(()=>e.isShowEm),R=X(null),gt=U(["lt","t","rt","r","rb","b","lb","l"]),wt=U({lt:0,t:45,rt:90,r:135,rb:180,b:225,lb:270,l:315}),V=U([{start:338,end:23,cursor:"nw"},{start:23,end:68,cursor:"n"},{start:68,end:113,cursor:"ne"},{start:113,end:158,cursor:"e"},{start:158,end:203,cursor:"se"},{start:203,end:248,cursor:"s"},{start:248,end:293,cursor:"sw"},{start:293,end:338,cursor:"w"}]),Q=X({}),j=X("0px"),Z=X("#fff0"),_=X("none"),$=X(!1),q=X("");Xt((s,n,v)=>{if(console.log(s),v==="render function"){if(e.isEditMode){if(n){const{name:z}=n.component||{};q.value=`\u7EC4\u4EF6[${z}]\u6E32\u67D3\u5F02\u5E38`}else q.value="\u7EC4\u4EF6\u6E32\u67D3\u5F02\u5E38";j.value="5px",Z.value="red",_.value="dashed",$.value=!0}return!1}else return!0});const w=K(()=>t.active&&!t.info.locked||r.isActived(t.info)),Et=()=>{r.appendComponent(t.info)},tt=s=>{if(s.preventDefault(),t.info.parent||s.stopPropagation(),!e.curComponent||t.info.id!==e.curComponent.id||t.info.locked)return;s.stopPropagation(),Q.value=ot();let{top:n,left:v}=t.defaultStyle;const z=s.clientY,a=s.clientX,B=n,A=v,Y=F=>{const W=F.clientX;n=F.clientY-z+B,v=W-a+A,e.syncComponentLoction({top:n,left:v},t.info.parent,!1)},T=()=>{Nt.emit("unmove"),document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",T),t.info&&t.info.parent&&e.resizeAutoComponent(t.info.parent),e.saveComponentData()};document.addEventListener("mousemove",Y),document.addEventListener("mouseup",T)},et=s=>{var n,v;s.preventDefault(),t.isInner?((n=t.info.parent)==null?void 0:n.id)===((v=e.benchmarkComponent)==null?void 0:v.id)&&(s.stopPropagation(),e.setCurComponent(t.info,t.index.toString())):(s.stopPropagation(),e.setCurComponent(t.info,t.index.toString()))},Dt=s=>{var n;s.preventDefault(),(!t.info.parent||((n=t.info.parent)==null?void 0:n.active))&&(s.stopPropagation(),e.setCurComponent(t.info,t.index.toString()))},M=(s,n)=>{if(!(e.curComponent&&t.info.id===e.curComponent.id))return;n.stopPropagation(),n.preventDefault();const v={top:t.defaultStyle.top,left:t.defaultStyle.left,height:t.defaultStyle.height,width:t.defaultStyle.width,rotate:t.defaultStyle.rotate},z=document.querySelector("#editor").getBoundingClientRect(),a=A=>{const Y={x:A.clientX-z.left,y:A.clientY-z.top},{top:T,left:F,width:W,height:O}=ne(s,v,Y);e.syncComponentLoction({top:T,left:F,width:W,height:O},t.info.parent,!1)},B=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",B),t.info&&e.resizeAutoComponent(t.info.parent),e.saveComponentData()};document.addEventListener("mousemove",a),document.addEventListener("mouseup",B)},nt=s=>{if(!R.value||(s.preventDefault(),s.stopPropagation(),!(e.curComponent&&t.info.id===e.curComponent.id))||t.info.locked)return;let{rotate:n}=H({},t.defaultStyle);const v=s.clientY,z=s.clientX,a=n,B=R.value.getBoundingClientRect(),A=B.left+B.width/2,Y=B.top+B.height/2,T=Math.atan2(v-Y,z-A)/(Math.PI/180),F=O=>{const St=O.clientX,bt=O.clientY,Mt=Math.atan2(bt-Y,St-A)/(Math.PI/180);n=a+Mt-T,e.syncComponentLoction({rotate:n},t.info.parent,!1)},W=()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",W),t.info&&e.resizeAutoComponent(t.info.parent),e.saveComponentData()};document.addEventListener("mousemove",F),document.addEventListener("mouseup",W)},ot=()=>{if(!e.curComponent)return{};const s=mt(e.curComponent.style.rotate),n={};let v=-1;return gt.forEach(z=>{const a=mt(wt[z]+s),B=V.length;for(;;){v=(v+1)%B;const A=V[v];if(a<23||a>=338){n[z]="nw-resize";return}if(A.start<=a&&a<A.end){n[z]=A.cursor+"-resize";return}}}),n},k=K(()=>{const s="rotate-",n=t.defaultStyle.rotate;return n>-22.5&&n<=22.5?s+0:n>22.5&&n<=67.5?s+45:n>67.5&&n<=112.5?s+90:n>112.5&&n<=157.5?s+135:n>157.5||n<=-157.5?s+0:n>-157.5&&n<=-112.5?s+45:n>-112.5&&n<=-67.5?s+90:n>-67.5&&n<=-22.5?s+135:s+0}),st=s=>{if(document.addEventListener("keyup",rt),!!(e.curComponent&&t.info.id===e.curComponent.id)&&(s.stopPropagation(),t.info&&s.ctrlKey))switch(s.key){case"ArrowLeft":s.preventDefault(),e.syncComponentLoction({left:t.info.positionStyle.left-1},t.info.parent,!1);break;case"ArrowUp":s.preventDefault(),e.syncComponentLoction({top:t.info.positionStyle.top-1},t.info.parent,!1);break;case"ArrowRight":s.preventDefault(),e.syncComponentLoction({left:t.info.positionStyle.left+1},t.info.parent,!1);break;case"ArrowDown":s.preventDefault(),e.syncComponentLoction({top:t.info.positionStyle.top+1},t.info.parent,!1);break;case"Delete":s.preventDefault(),m();break;default:return}},rt=s=>{!(e.curComponent&&t.info.id===e.curComponent.id)||(s.stopPropagation(),t.info&&e.resizeAutoComponent(t.info.parent),e.saveComponentData(),document.removeEventListener("keyup",rt))};return Tt(()=>{Q.value=ot()}),Wt(()=>e.curComponent,s=>{s&&t.info.id===s.id?document.addEventListener("keydown",st):document.removeEventListener("keydown",st)}),(s,n)=>{const v=Ht("icon-park"),z=Gt("contextmenu");return o.isInner?y((pt(),ut("div",{key:0,ref_key:"shape",ref:R,class:S(["shape",{active:c(w)||o.active}]),onDblclick:x(Dt,["exact"]),onClick:x(et,["exact"]),onMousedown:tt},[y(E("span",{class:"error-info"},N(q.value),513),[[g,$.value]]),y(ft(v,{class:"rotation",name:"one-third-rotation",color:"#fff",onMousedown:x(nt,["left"])},null,8,["onMousedown"]),[[g,c(w)]]),y(E("em",null,"("+N(o.defaultStyle.left)+","+N(o.defaultStyle.top)+")",513),[[g,c(P)]]),y(E("div",{class:S(["shape-point","lt",c(k)]),style:{top:"0%",left:"0%"},onMousedown:n[0]||(n[0]=x(a=>M("lt",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","t",c(k)]),style:{top:"0%",left:"50%"},onMousedown:n[1]||(n[1]=x(a=>M("t",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","rt",c(k)]),style:{top:"0%",left:"100%"},onMousedown:n[2]||(n[2]=x(a=>M("rt",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","r",c(k)]),style:{top:"50%",left:"100%"},onMousedown:n[3]||(n[3]=x(a=>M("r",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","rb",c(k)]),style:{top:"100%",left:"100%"},onMousedown:n[4]||(n[4]=x(a=>M("rb",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","b",c(k)]),style:{top:"100%",left:"50%"},onMousedown:n[5]||(n[5]=x(a=>M("b",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point",["shape-point","lb",c(k)]]),style:{top:"100%",left:"0%"},onMousedown:n[6]||(n[6]=x(a=>M("lb",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","l",c(k)]),style:{top:"50%",left:"0%"},onMousedown:n[7]||(n[7]=x(a=>M("l",a),["left"]))},null,34),[[g,c(w)]]),dt(s.$slots,"default",{},void 0,!0)],42,oe)),[[z,b]]):y((pt(),ut("div",{key:1,ref_key:"shape",ref:R,class:S(["shape",{active:c(w)||o.active}]),onClick:[x(Et,["ctrl","exact"]),x(et,["exact"])],onMousedown:x(tt,["left"])},[y(E("span",{class:"error-info"},N(q.value),513),[[g,$.value]]),y(ft(v,{class:"rotation",name:"one-third-rotation",color:"#fff",onMousedown:x(nt,["left"])},null,8,["onMousedown"]),[[g,c(w)]]),y(E("em",null,"("+N(o.defaultStyle.left)+","+N(o.defaultStyle.top)+")",513),[[g,c(P)]]),y(E("div",{class:S(["shape-point","lt",c(k)]),style:{top:"0%",left:"0%"},onMousedown:n[8]||(n[8]=x(a=>M("lt",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","t",c(k)]),style:{top:"0%",left:"50%"},onMousedown:n[9]||(n[9]=x(a=>M("t",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","rt",c(k)]),style:{top:"0%",left:"100%"},onMousedown:n[10]||(n[10]=x(a=>M("rt",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","r",c(k)]),style:{top:"50%",left:"100%"},onMousedown:n[11]||(n[11]=x(a=>M("r",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","rb",c(k)]),style:{top:"100%",left:"100%"},onMousedown:n[12]||(n[12]=x(a=>M("rb",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","b",c(k)]),style:{top:"100%",left:"50%"},onMousedown:n[13]||(n[13]=x(a=>M("b",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point",["shape-point","lb",c(k)]]),style:{top:"100%",left:"0%"},onMousedown:n[14]||(n[14]=x(a=>M("lb",a),["left"]))},null,34),[[g,c(w)]]),y(E("div",{class:S(["shape-point","l",c(k)]),style:{top:"50%",left:"0%"},onMousedown:n[15]||(n[15]=x(a=>M("l",a),["left"]))},null,34),[[g,c(w)]]),dt(s.$slots,"default",{},void 0,!0)],42,se)),[[z,b]])}}});var le=It(re,[["__scopeId","data-v-9c29abb8"]]);export{le as S,$t as a,qt as u};
