parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2iMt":[function(require,module,exports) {

},{}],"6oLy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=e=>e?Array.isArray(e)?e:[e]:[],t=(e,t)=>e.type===t.type||typeof e.type==typeof t.type,n=(e,t)=>n=>"children"!==n&&"key"!==n&&e[n]!==t[n];function o(t){let n={},o=0;return e(t).forEach(e=>{let t=((e||{}).props||{}).key;t?n["."+t]=e:(n["."+o]=e)&&o++}),n}function r(e,t){let n={};for(var o in e)n[o]=e[o];for(var o in t)n[o]=t[o];return n}const s="function"==typeof Promise?e=>Promise.resolve().then(e):setTimeout;function i(e,t){let n=[],o=[],s=arguments.length;for(;s-- >2;)n.push(arguments[s]);for(;n.length;){let e=n.pop();if(e&&e.pop)for(s=e.length;s--;)n.push(e[s]);else null===e||!0===e||!1===e?e={type:()=>{}}:"function"==typeof e?o=e:o.push("object"==typeof e?e:{type:"text",props:{nodeValue:e}})}return{type:e,props:r(t,{children:o}),key:t&&t.key}}function c(e,t,n,o){if("style"===t)for(key in o){let n=o&&o[key]?o[key]:"";e[t][key]=n}else"o"===t[0]&&"n"===t[1]?(t=t.slice(2).toLowerCase(),n&&e.removeEventListener(t,n),e.addEventListener(t,o)):e.setAttribute(t,o)}function l(e,t,o){Object.keys(o).filter(n(t,o)).forEach(n=>{"value"===n||"nodeValue"===n?e[n]=o[n]:c(e,n,t[n],o[n])})}function p(e){const t="text"===e.type?document.createTextNode(""):document.createElement(e.type);return l(t,[],e.props),t}let u=0;function a(e,t,n){const o=this?this:D();n=t?t(o.state[e],n):n,o.state[e]=n,L(o)}function f(){u=0}function h(e){return d(null,e)}function d(e,t){let n=D();if(!n)return[t,r];let o="$"+u,r=a.bind(n,o,e);u++;let s=n.state||{};return o in s?[s[o],r]:(n.state[o]=t,[t,r])}function y(e,t){let n=D();n&&(n.effect=b(e,t))}function b(e,t){return()=>{let n=D();if(n){let o=!t||(n.oldInputs||[]).some((e,n)=>t[n]!==e);!t||t.length||n.isMounted||(o=!0,n.isMounted=!0),o&&e(),n.oldInputs=t}}}function g(e={}){let t=[];return{context:e,update:e=>t.forEach(t=>t(e)),subscribe:e=>t.push(e),unSubscribe:e=>t=t.filter(t=>t!==e)}}function x(e){const[t,n]=h(e.context);return e.subscribe(n),y(()=>e.unSubscribe(n)),[t,e.update]}const[m,k,v,E,T,P,C]=[0,1,2,3,4,5,6];let S={web:!0},w=[],M=null,V=null,j=null;function A(e,t){L({tag:v,base:t,props:{children:e}})}function L(e){w.push(e),s(W)}function W(){if(!M&&w.length){const e=w.shift();if(!e)return;M=e}for(;M;)M=I(M);V&&(S.commitWork?S.commitWork(V):q(V))}function I(e){if(e.tag==k?_(e):O(e),e.child)return e.child;for(;e;){if($(e),e.sibling)return e.sibling;e=e.parent}}function O(e){!e.base&&S.web&&(e.base=p(e));let t=e.parent||{};e.insertPoint=t.oldPoint,t.oldPoint=e,N(e,e.props.children)}function _(e){e.props=e.props||{},e.state=e.state||{},j=e,f();const t=e.type(e.props);N(e,t),j.patches=e.patches}function B(e,t){return t.children=o(e)}function N(e,n){const o=e.children,s=B(n,e);let i={};for(let r in o){let n=s[r],c=o[r];n&&t(n,c)?i[r]=c:(c.patchTag=C,e.patches.push(c))}let c=null,l=null;for(let p in s){let n=s[p],o=i[p];o?t(o,n)&&(l=R(o,{patchTag:P}),n.patchTag=P,(n=r(l,n)).alternate=l,o.key&&(n.patchTag=T)):n=R(n,{patchTag:E}),s[p]=n,n.parent=e,c?c.sibling=n:e.child=n,c=n}c&&(c.sibling=null)}function R(e,t){return t.tag="function"==typeof e.type?k:m,e.props=e.props||{nodeValue:e.nodeValue},r(e,t)}function $(e){S.web&&e.parent?e.parent.patches=(e.parent.patches||[]).concat(e.patches||[],e.patchTag?[e]:[]):V=e}function q(e){console.log(e),e.patches.forEach(e=>z(e)),j.effect&&j.effect(),M=V=null}function z(e){let t=e.parent;for(;t.tag==k;)t=t.parent;const n=t.base;let o=e.base||e.child.base;const{insertPoint:r,patchTag:s}=e;if(e.tag==k)s==C&&n.removeChild(o);else if(s==P)l(o,e.alternate.props,e.props);else if(s==C)n.removeChild(o);else{let e=r?s==E?r.base.nextSibling:r.base.nextSibling||n.firstChild:null;if(e==o)return;n.insertBefore(o,e)}t.patches=e.patches=[]}function D(){return j||null}exports.createContext=g,exports.createElement=i,exports.h=i,exports.options=S,exports.render=A,exports.scheduleWork=L,exports.useContext=x,exports.useEffect=y,exports.useMemo=b,exports.useReducer=d,exports.useState=h;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./style.css");var l=require("fre");function n(){return(0,l.h)("div",{class:"container"},(0,l.h)(h,null),(0,l.h)(u,null))}function h(){return(0,l.h)("div",{class:"left"},(0,l.h)("div",{class:"logo"},(0,l.h)("img",{src:"https://tvax4.sinaimg.cn/crop.0.78.1422.1422.180/0065Zy9ely8fve0dvwdwnj31401z4b29.jpg"}),(0,l.h)("div",{class:"name"},(0,l.h)("h1",null," 赵昌浩 "),(0,l.h)("h3",null,"求职意向：web 前端")),(0,l.h)("div",{class:"info"},(0,l.h)("ul",null,(0,l.h)("li",null,(0,l.h)("i",{class:"iconfont icon-rili"}),"生日：1998-11-22"),(0,l.h)("li",null,(0,l.h)("i",{class:"iconfont icon-weizhi"}),"籍贯：山东高密"),(0,l.h)("li",null,(0,l.h)("i",{class:"iconfont icon-dianhua"}),"电话：18593996744"),(0,l.h)("li",null,(0,l.h)("i",{class:"iconfont icon-youxiang"}),"邮箱：1533540012@qq.com"))),(0,l.h)("div",{class:"link"},(0,l.h)("h2",null,"作品链接"),(0,l.h)("ul",null,(0,l.h)("li",null,(0,l.h)("i",{class:"iconfont icon-github"}),(0,l.h)("a",{href:"https://github.com/132yse",target:"_blank"},"开源作品")),(0,l.h)("li",null,(0,l.h)("i",{class:"iconfont icon-lofter"}),(0,l.h)("a",{href:"http://caowoa.lofter.com",target:"_blank"},"设计作品"))))))}function u(){return(0,l.h)("div",{class:"right"},(0,l.h)("section",{class:"section"},(0,l.h)("h1",null,(0,l.h)("i",{class:"iconfont icon-jiaoyu"}),"校园实践"),(0,l.h)("p",null,(0,l.h)("h3",null,"2016.09——2020.06 北海艺术设计学院 动画专业 二本"),(0,l.h)("ul",null,(0,l.h)("li",null,"2016 年加入 ·平行世界工作室·"),(0,l.h)("li",null,"2017 年，参与制作的《琵琶行》、《离骚》等，多次热搜，荣登环球时报、人民日报等各大报刊"),(0,l.h)("li",null,"2018 年，《逍遥游》发布，《琵琶行》荣登央视，由方锦龙先生奏乐，任嘉伦翻唱")))),(0,l.h)("section",{class:"section"},(0,l.h)("h1",null,(0,l.h)("i",{class:"iconfont icon-gongzuoliu"}),"项目经验"),(0,l.h)("p",null,(0,l.h)("h3",null,"2019.06—— 搜狐体育小程序"),(0,l.h)("ul",null,(0,l.h)("li",null,"前端主程，fard / fre"),(0,l.h)("li",null,"使用 fard 开发体育小程序，同时完善 fard"),(0,l.h)("li",null,(0,l.h)("span",null,"难点：多端小程序 api 的抹平问题")))),(0,l.h)("p",null,(0,l.h)("h3",null,"2019.06—— 新版搜狐首页"),(0,l.h)("ul",null,(0,l.h)("li",null,"前端主程，react / ssr"),(0,l.h)("li",null,"主要是 react 开发新版搜狐首页，其中 slider 等原生组件被搜狐多个项目复用"),(0,l.h)("li",null,(0,l.h)("span",null,"难点：react ssr 和 ie8 兼容")))),(0,l.h)("p",null,(0,l.h)("h3",null,"2018.06—— clicli弹幕网（clicli.us）"),(0,l.h)("ul",null,(0,l.h)("li",null,"全栈，vue / react / ssr / node / golang"),(0,l.h)("li",null,"vue，主要是 vue ssr；react 主要是 smox；node 主要负责解析系统；golang 主要是后端 API"),(0,l.h)("li",null,(0,l.h)("span",null,"难点：前端主要是 vue ssr 和 播放器（+弹幕系统）"))))),(0,l.h)("section",{class:"section"},(0,l.h)("h1",null,(0,l.h)("i",{class:"iconfont icon-github"}),"开源项目"),(0,l.h)("p",null,(0,l.h)("h3",null,"fre.js - 1kb react16 like 框架"),(0,l.h)("ul",null,(0,l.h)("li",null,"使用 300 行复现了 react fiber 架构，同时拥有更精巧的抽象机制"),(0,l.h)("li",null,"你现在所看到的简历，就是基于 fre 构建的"),(0,l.h)("li",null,(0,l.h)("span",null,"难点：fiber 的实现和 hooks 是如何在 fiber 上运作的，以及如何设计抽象层，使跨端成为可能")))),(0,l.h)("p",null,(0,l.h)("h3",null,"fard.js - fre 转多端小程序框架"),(0,l.h)("ul",null,(0,l.h)("li",null,"类似于 RN 的原理，使得小程序中跑 fre 而不需要编译"),(0,l.h)("li",null,"在 seData 之前做一层 diff，保证每次 setData 的量都是最小的，从而大幅度优化性能"),(0,l.h)("li",null,(0,l.h)("span",null,"难点：整个架构设计的思路，性能优化的思路")))),(0,l.h)("p",null,(0,l.h)("h3",null,"smox - react 状态管理顶级设计"),(0,l.h)("ul",null,(0,l.h)("li",null,"smox 是 react 状态管理顶级设计，它的封装极为精巧却强大"),(0,l.h)("li",null,"独创 path 机制，能够精准、最小的更新状态"),(0,l.h)("li",null,(0,l.h)("span",null,"难点：path 机制和命中匹配的思路")))),(0,l.h)("p",null,(0,l.h)("h3",null,"eplayer - 面向未来的视频播放器"),(0,l.h)("ul",null,(0,l.h)("li",null,"基于 web-component 的 runtime，可以理解为浏览器自带的 vue"),(0,l.h)("li",null,"天生自带 shadow-dom 和 scoped css，可以使得播放器接入网站而不受外界环境干扰"),(0,l.h)("li",null,(0,l.h)("span",null,"难点：可能就是 web-component 的一些不为人知的，比如如何穿透 scoped css")))),(0,l.h)("p",null,(0,l.h)("h3",null,"use-routes - 适用于 fre 和 react 的 hooks 版本路由"),(0,l.h)("ul",null,(0,l.h)("li",null,"为 hooks 而生，同时适用于 fre 和 react"),(0,l.h)("li",null,"800 B ，但却提供了路由常见的 API，利用了一个巧妙的正则排位算法，去匹配 url"),(0,l.h)("li",null,(0,l.h)("span",null,"难点：可能是 hooks 中路由的设计思路"))))),(0,l.h)("section",{class:"section"},(0,l.h)("h1",null,(0,l.h)("i",{class:"iconfont icon-gongju"}),"专业技能"),(0,l.h)("ul",{class:"common"},(0,l.h)("li",null,(0,l.h)("span",null,"开发："),"熟练 vue、react、node、golang 等技术栈"),(0,l.h)("li",null,(0,l.h)("span",null,"设计："),"熟练使用 ps、ae、maya 等设计软件"),(0,l.h)("li",null,(0,l.h)("span",null,"源码："),"熟悉很多前端库的源码"),(0,l.h)("li",null,(0,l.h)("span",null,"开源："),"参与 Omi（腾讯前端框架）、gatsby（facebook）等开源项目"))),(0,l.h)("section",{class:"section"},(0,l.h)("h1",null,(0,l.h)("i",{class:"iconfont icon-pingjia"}),"自我评价"),(0,l.h)("ul",{class:"common"},(0,l.h)("li",null,(0,l.h)("span",null,"热爱开源"),"，喜欢将自己的脑洞通过代码实现出来，开源的每一个轮子都有设计上的独到之处"),(0,l.h)("li",null,"性格上比较脱线，不够严谨，仍需不断修炼。但对待技术认真，有靠谱的判断力，会",(0,l.h)("span",null,"按需"),"做出妥协与调整"))))}(0,l.render)((0,l.h)(n,null),document.getElementById("root"));
},{"./style.css":"2iMt","fre":"6oLy"}]},{},["Focm"], null)
//# sourceMappingURL=/resume.89a431b8.js.map