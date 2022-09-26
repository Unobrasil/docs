"use strict";(self.webpackChunk_betterdiscord_docs=self.webpackChunk_betterdiscord_docs||[]).push([[799],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=s(r),k=a,f=d["".concat(o,".").concat(k)]||d[k]||m[k]||l;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8904:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},i="Filters",p={unversionedId:"api/filters",id:"api/filters",title:"Filters",description:"Series of Filters to be used for finding webpack modules.",source:"@site/docs/api/filters.md",sourceDirName:"api",slug:"/api/filters",permalink:"/api/filters",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"BdApi",permalink:"/api/bdapi"},next:{title:"Patcher",permalink:"/api/patcher"}},o={},s=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"byDisplayName",id:"bydisplayname",level:3},{value:"byProps",id:"byprops",level:3},{value:"byPrototypeFields",id:"byprototypefields",level:3},{value:"byRegex",id:"byregex",level:3},{value:"byStrings",id:"bystrings",level:3},{value:"combine",id:"combine",level:3}],c={toc:s};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"filters"},"Filters"),(0,a.kt)("p",null,"Series of ",(0,a.kt)("a",{parentName:"p",href:"./filters"},"Filters")," to be used for finding webpack modules."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"bydisplayname"},"byDisplayName"),(0,a.kt)("p",null,"Generates a function that filters by the ",(0,a.kt)("inlineCode",{parentName:"p"},"displayName")," property."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"name"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Name the module should have")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," - A filter that checks for a ",(0,a.kt)("inlineCode",{parentName:"p"},"displayName")," match"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"byprops"},"byProps"),(0,a.kt)("p",null,"Generates a function that filters by a set of properties."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"props"),(0,a.kt)("td",{parentName:"tr",align:"center"},"...string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"List of property names")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," - A filter that checks for a set of properties"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"byprototypefields"},"byPrototypeFields"),(0,a.kt)("p",null,"Generates a function that filters by a set of properties on the object's prototype."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"props"),(0,a.kt)("td",{parentName:"tr",align:"center"},"...string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"List of property names")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," - A filter that checks for a set of properties on the object's prototype."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"byregex"},"byRegex"),(0,a.kt)("p",null,"Generates a function that filters by a regex."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"search"),(0,a.kt)("td",{parentName:"tr",align:"center"},"RegExp"),(0,a.kt)("td",{parentName:"tr",align:"center"},"A RegExp to check on the module")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"function"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Additional filter")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," - A filter that checks for a regex match"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bystrings"},"byStrings"),(0,a.kt)("p",null,"Generates a function that filters by strings."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"strings"),(0,a.kt)("td",{parentName:"tr",align:"center"},"...String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"A list of strings")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," - A filter that checks for a set of strings"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"combine"},"combine"),(0,a.kt)("p",null,"Generates a combined function from a list of filters."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filters"),(0,a.kt)("td",{parentName:"tr",align:"center"},"...function"),(0,a.kt)("td",{parentName:"tr",align:"center"},"A list of filters")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," - Combinatory filter of all arguments"),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);