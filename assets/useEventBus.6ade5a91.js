import{E as c,S as l}from"./index.e04c72e0.js";function p(e){return{all:e=e||new Map,on:function(t,n){var s=e.get(t);s?s.push(n):e.set(t,[n])},off:function(t,n){var s=e.get(t);s&&(n?s.splice(s.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var s=e.get(t);s&&s.slice().map(function(i){i(n)}),(s=e.get("*"))&&s.slice().map(function(i){i(t,n)})}}}const u=p(),o=new Map;function v(e,t,n={isAppend:!1,isRegExp:!1}){c(()=>{const{isAppend:i}=n;if(i){const{value:a,isRegExp:f}=o.get(e)||{value:0,isRegExp:!1};o.set(e,{value:a+1,isRegExp:f})}u.on(e,t)}),l(()=>{if(o.has(e)){const{value:i,isRegExp:a}=o.get(e)||{value:0,isRegExp:!1};i===1?o.delete(e):o.set(e,{value:i-1,isRegExp:a})}u.off(e,t)});function s(i){u.emit(e,i)}return s}export{u as e,v as u};
