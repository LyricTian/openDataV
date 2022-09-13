import{X as R,d as X,A as B,C as tt,N as et,E as nt,o as rt,b as st,K as it,T as at,W as ot,L as ut,_ as ct}from"./index.00fb92ff.js";import{u as ft}from"./useProp.afe31ed3.js";var P={exports:{}};(function(N,V){(function(O,D){N.exports=D()})(R,function(){var O=1e3,D=6e4,L=36e5,Y="millisecond",v="second",y="minute",$="hour",m="day",g="week",p="month",F="quarter",_="year",T="date",J="Invalid Date",q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,K={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},j=function(a,n,t){var r=String(a);return!r||r.length>=n?a:""+Array(n+1-r.length).join(t)+a},Q={s:j,z:function(a){var n=-a.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+j(r,2,"0")+":"+j(e,2,"0")},m:function a(n,t){if(n.date()<t.date())return-a(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,p),i=t-e<0,s=n.clone().add(r+(i?-1:1),p);return+(-(r+(t-e)/(i?e-s:s-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:p,y:_,w:g,d:m,D:T,h:$,m:y,s:v,ms:Y,Q:F}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},b="en",x={};x[b]=K;var z=function(a){return a instanceof k},W=function a(n,t,r){var e;if(!n)return b;if(typeof n=="string"){var i=n.toLowerCase();x[i]&&(e=i),t&&(x[i]=t,e=i);var s=n.split("-");if(!e&&s.length>1)return a(s[0])}else{var o=n.name;x[o]=n,e=o}return!r&&e&&(b=e),e||!r&&b},h=function(a,n){if(z(a))return a.clone();var t=typeof n=="object"?n:{};return t.date=a,t.args=arguments,new k(t)},u=Q;u.l=W,u.i=z,u.w=function(a,n){return h(a,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var k=function(){function a(t){this.$L=W(t.locale,null,!0),this.parse(t)}var n=a.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(q);if(s){var o=s[2]-1||0,f=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],o,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)):new Date(s[1],o,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(t,r){var e=h(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return h(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<h(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!u.u(r)||r,s=u.p(t),o=function(H,l){var w=u.w(e.$u?Date.UTC(e.$y,l,H):new Date(e.$y,l,H),e);return i?w:w.endOf(m)},f=function(H,l){return u.w(e.toDate()[H].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},c=this.$W,d=this.$M,S=this.$D,M="set"+(this.$u?"UTC":"");switch(s){case _:return i?o(1,0):o(31,11);case p:return i?o(1,d):o(0,d+1);case g:var C=this.$locale().weekStart||0,I=(c<C?c+7:c)-C;return o(i?S-I:S+(6-I),d);case m:case T:return f(M+"Hours",0);case $:return f(M+"Minutes",1);case y:return f(M+"Seconds",2);case v:return f(M+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=u.p(t),s="set"+(this.$u?"UTC":""),o=(e={},e[m]=s+"Date",e[T]=s+"Date",e[p]=s+"Month",e[_]=s+"FullYear",e[$]=s+"Hours",e[y]=s+"Minutes",e[v]=s+"Seconds",e[Y]=s+"Milliseconds",e)[i],f=i===m?this.$D+(r-this.$W):r;if(i===p||i===_){var c=this.clone().set(T,1);c.$d[o](f),c.init(),this.$d=c.set(T,Math.min(this.$D,c.daysInMonth())).$d}else o&&this.$d[o](f);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var s=u.p(r),o=function(d){var S=h(i);return u.w(S.date(S.date()+Math.round(d*t)),i)};if(s===p)return this.set(p,this.$M+t);if(s===_)return this.set(_,this.$y+t);if(s===m)return o(1);if(s===g)return o(7);var f=(e={},e[y]=D,e[$]=L,e[v]=O,e)[s]||1,c=this.$d.getTime()+t*f;return u.w(c,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||J;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=u.z(this),o=this.$H,f=this.$m,c=this.$M,d=e.weekdays,S=e.months,M=function(l,w,U,A){return l&&(l[w]||l(r,i))||U[w].slice(0,A)},C=function(l){return u.s(o%12||12,l,"0")},I=e.meridiem||function(l,w,U){var A=l<12?"AM":"PM";return U?A.toLowerCase():A},H={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:u.s(c+1,2,"0"),MMM:M(e.monthsShort,c,S,3),MMMM:M(S,c),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:M(e.weekdaysMin,this.$W,d,2),ddd:M(e.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(o),HH:u.s(o,2,"0"),h:C(1),hh:C(2),a:I(o,f,!0),A:I(o,f,!1),m:String(f),mm:u.s(f,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:s};return i.replace(G,function(l,w){return w||H[l]||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,s=u.p(r),o=h(t),f=(o.utcOffset()-this.utcOffset())*D,c=this-o,d=u.m(this,o);return d=(i={},i[_]=d/12,i[p]=d,i[F]=d/3,i[g]=(c-f)/6048e5,i[m]=(c-f)/864e5,i[$]=c/L,i[y]=c/D,i[v]=c/O,i)[s]||c,e?d:u.a(d)},n.daysInMonth=function(){return this.endOf(p).$D},n.$locale=function(){return x[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=W(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},a}(),Z=k.prototype;return h.prototype=Z,[["$ms",Y],["$s",v],["$m",y],["$H",$],["$W",m],["$M",p],["$y",_],["$D",T]].forEach(function(a){Z[a[1]]=function(n){return this.$g(n,a[0],a[1])}}),h.extend=function(a,n){return a.$i||(a(n,k,h),a.$i=!0),h},h.locale=W,h.isDayjs=z,h.unix=function(a){return h(1e3*a)},h.en=x[b],h.Ls=x,h.p={},h})})(P);const E=P.exports,ht=X({__name:"DateText",props:{component:null},setup(N){const V=N;ot($=>({"4c8e51ee":D.value}));const{propValue:O}=ft(V.component),D=B("20px"),L=$=>{const m=$[0],{height:g}=m.contentRect;D.value=`${g}px`};let Y;const v=B(E().format(O.base.format||"YYYY-MM-DD HH:mm:ss")),y=()=>{const $=O.base.format;v.value=E().format($||"YYYY-MM-DD HH:mm:ss")};return tt(()=>{Y=setInterval(y,1e3)}),et(()=>{clearInterval(Y)}),($,m)=>{const g=ut("resize");return nt((rt(),st("span",null,[it(at(v.value),1)])),[[g,L]])}}});const $t=ct(ht,[["__scopeId","data-v-2659c613"]]);export{$t as default};
