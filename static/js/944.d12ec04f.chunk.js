"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[944],{233:function(e,t,r){r.d(t,{$w:function(){return v},IR:function(){return p},Pg:function(){return f},XT:function(){return s},Xj:function(){return l}});var n=r(861),a=r(687),c=r.n(a),u=r(243);function s(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.baseURL="https://api.themoviedb.org/3/",t={params:{api_key:"148118ff38ec61bf8d4b2aa895c3f69e"},headers:{accept:"application/json"}},e.next=4,u.Z.get("trending/movie/day",t);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.baseURL="https://api.themoviedb.org/3/",r={params:{api_key:"148118ff38ec61bf8d4b2aa895c3f69e"},headers:{accept:"application/json"}},e.next=4,u.Z.get("search/movie?query=".concat(t.replace(/ /g,"+")),r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.baseURL="https://api.themoviedb.org/3/",r={params:{api_key:"148118ff38ec61bf8d4b2aa895c3f69e"},headers:{accept:"application/json"}},e.next=4,u.Z.get("movie/".concat(t),r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.baseURL="https://api.themoviedb.org/3/",r={params:{api_key:"148118ff38ec61bf8d4b2aa895c3f69e"},headers:{accept:"application/json"}},e.next=4,u.Z.get("movie/".concat(t,"/reviews"),r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.baseURL="https://api.themoviedb.org/3/",r={params:{api_key:"148118ff38ec61bf8d4b2aa895c3f69e"},headers:{accept:"application/json"}},e.next=4,u.Z.get("movie/".concat(t,"/credits"),r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},944:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(687),u=r.n(c),s=r(791),i=r(87),p=r(689),o=r(233),f=r(184);t.default=function(){var e,t=(0,i.lr)(),r=(0,a.Z)(t,2),c=r[0],h=r[1],l=null!==(e=c.get("movieName"))&&void 0!==e?e:"",d=(0,s.useState)([]),v=(0,a.Z)(d,2),m=v[0],b=v[1],w=(0,p.TH)();return(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.IR)(l);case 3:t=e.sent,b(t.data.results),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]),(0,f.jsxs)("div",{children:[(0,f.jsx)("input",{value:l,onChange:function(e){var t=""!==e.target.value?{movieName:e.target.value}:{};h(t)}}),(0,f.jsx)("ul",{children:m.map((function(e){var t=e.id,r=e.title;return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:w},children:r})},t)}))})]})}}}]);
//# sourceMappingURL=944.d12ec04f.chunk.js.map