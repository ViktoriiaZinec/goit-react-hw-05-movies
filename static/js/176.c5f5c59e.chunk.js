"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[176],{176:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),o=r(689),i=r(87),l={search_form_button:"Searching_search_form_button__yWFGp",search_form_input:"Searching_search_form_input__eWk2F"},_=r(184),f=function(e){var t=e.query,r=e.onSearch,n=(0,u.useState)(null!==t&&void 0!==t?t:""),c=(0,a.Z)(n,2),s=c[0],o=c[1];return(0,_.jsxs)("div",{className:l.form_control,children:[(0,_.jsx)("input",{value:s,onChange:function(e){var t=e.target.value;o(t)},type:"text",className:l.search_form_input,placeholder:"Type to search..."}),(0,_.jsx)("button",{className:l.search_form_button,type:"submit",onClick:function(){r(s),o("")},children:"Search"})]})},h=r(180),p=r(126),m="idle",v="loading",d="success",g="error",x=function(e){e.onChangeState;var t=(0,u.useState)([]),r=(0,a.Z)(t,2),c=r[0],l=r[1],x=(0,u.useState)(m),b=(0,a.Z)(x,2),k=b[0],y=b[1],S=(0,o.TH)(),w=(0,i.lr)(),j=(0,a.Z)(w,2),C=j[0],Z=j[1],q=C.get("query"),F=(0,u.useCallback)((0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q){e.next=2;break}return e.abrupt("return");case 2:return y(v),e.prev=3,e.next=6,(0,h.Op)(q);case 6:t=e.sent,l(t.data.results),y(d),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),y(g);case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))),[q]);(0,u.useEffect)((function(){F()}),[F]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f,{query:q,onSearch:function(e){if(!e.trim())return alert("Please type text");Z({query:e})}}),k===v&&"Loading, wait",k===g&&"Error fetching",k===d&&(0,_.jsx)(p.e,{movies:c,location:S})]})}}}]);
//# sourceMappingURL=176.c5f5c59e.chunk.js.map