import{u as $}from"./useProp.afe31ed3.js";import{_ as d,d as h,B as i,J as f,o as r,b as c,K as s,a as l,L as k,I as b}from"./index.e04c72e0.js";const g={class:"dv-decoration-11"},y=["width","height"],m=["fill","stroke"],D=["fill","stroke","points"],w=["fill","stroke","points"],x=["fill","stroke","points"],B=["fill","stroke","points"],z=["stroke","points"],I=["stroke","points"],V={class:"decoration-content"},C=h({__name:"Decoration",props:{component:null},setup(u){const v=u,{propValue:t}=$(v.component),o=i(200),e=i(60),p=n=>{const a=n[0].contentRect;o.value=a.width,e.value=a.height};return(n,_)=>{const a=b("resize");return f((r(),c("div",g,[(r(),c("svg",{width:o.value,height:e.value},[s("polygon",{fill:l(t).base.color2,stroke:l(t).base.color2,points:"20 10, 25 4, 55 4 60 10"},null,8,m),s("polygon",{fill:l(t).base.color2,stroke:l(t).base.color2,points:`20 ${e.value-10}, 25 ${e.value-4}, 55 ${e.value-4} 60 ${e.value-10}`},null,8,D),s("polygon",{fill:l(t).base.color2,stroke:l(t).base.color2,points:`${o.value-20} 10, ${o.value-25} 4, ${o.value-55} 4 ${o.value-60} 10`},null,8,w),s("polygon",{fill:l(t).base.color2,stroke:l(t).base.color2,points:`${o.value-20} ${e.value-10}, ${o.value-25} ${e.value-4}, ${o.value-55} ${e.value-4} ${o.value-60} ${e.value-10}`},null,8,x),s("polygon",{fill:l(t).base.color1,stroke:l(t).base.color1,points:`
          20 10, 5 ${e.value/2} 20 ${e.value-10}
          ${o.value-20} ${e.value-10} ${o.value-5} ${e.value/2} ${o.value-20} 10
        `},null,8,B),s("polyline",{fill:"transparent",stroke:l(t).base.color1,points:`25 18, 15 ${e.value/2} 25 ${e.value-18}`},null,8,z),s("polyline",{fill:"transparent",stroke:l(t).base.color1,points:`${o.value-25} 18, ${o.value-15} ${e.value/2} ${o.value-25} ${e.value-18}`},null,8,I)],8,y)),s("div",V,k(l(t).base.text),1)])),[[a,p]])}}});var J=d(C,[["__scopeId","data-v-3fe13ac1"]]);export{J as default};
