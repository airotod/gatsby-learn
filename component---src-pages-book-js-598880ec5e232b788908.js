(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"10Zl":function(e,a,t){e.exports={head:"header-module--head--1EuFo",inner_head:"header-module--inner_head--Qb1Zq",wrap_head:"header-module--wrap_head--2AB4u",head_logo:"header-module--head_logo--1PEod",head_title:"header-module--head_title--1xJtZ",head_nav:"header-module--head_nav--ih-yY"}},Bl7J:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),r=t.n(n),o=t("Wbzz"),l=t("10Zl"),c=t.n(l);function u(){return r.a.createElement("header",{className:c.a.head},r.a.createElement("div",{className:c.a.inner_head},r.a.createElement("div",{className:c.a.wrap_head},r.a.createElement("div",{className:c.a.head_logo},r.a.createElement(o.a,{to:"/"},r.a.createElement("img",{src:"/eyes.png",alt:"logo"}))),r.a.createElement("div",{className:c.a.head_title},r.a.createElement(o.a,{to:"/"},"My Blog")),r.a.createElement("ul",{className:c.a.head_nav},r.a.createElement("li",null,r.a.createElement(o.a,{to:"/music/"},"Music")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/book/"},"Book"))))))}var i=t("UNbL"),m=t.n(i);function s(){return r.a.createElement("footer",{className:m.a.foot},r.a.createElement("div",{className:m.a.inner_foot},r.a.createElement("div",{className:m.a.wrap_info},r.a.createElement("div",{className:m.a.copyright},r.a.createElement("span",null,"© 2020 Sngiii")),r.a.createElement("ul",{className:m.a.f_r},r.a.createElement("li",null,r.a.createElement(o.a,{to:"/about/"},"About")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/contact/"},"Contact"))))))}var d=t("fcpr"),f=t.n(d);function p(e){var a=e.children;return r.a.createElement("div",{className:f.a.wrap_body},r.a.createElement(u,null),a,r.a.createElement(s,null))}},JQ6S:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i})),t.d(a,"query",(function(){return m}));var n=t("q1tI"),r=t.n(n),o=t("Wbzz"),l=t("Bl7J"),c=t("ldln"),u=t.n(c);function i(e){var a=e.data;return r.a.createElement(l.a,null,r.a.createElement("div",{className:u.a.body},r.a.createElement("div",{className:u.a.wrap_body},r.a.createElement(o.a,{className:u.a.title,to:"/book/"},r.a.createElement("h1",null,"Books")),r.a.createElement("div",{className:u.a.post_num},a.allMarkdownRemark.totalCount," Posts"),a.allMarkdownRemark.edges.map((function(e){var a=e.node;return r.a.createElement("div",{key:a.id,className:u.a.wrap_item},r.a.createElement(o.a,{to:a.fields.slug},r.a.createElement("h3",null,a.frontmatter.title),r.a.createElement("p",{className:u.a.date},a.frontmatter.date),r.a.createElement("p",{className:u.a.content},a.excerpt)))})))))}var m="1384771410"},UNbL:function(e,a,t){e.exports={foot:"footer-module--foot--fF-gW",inner_foot:"footer-module--inner_foot--SGOXA",wrap_info:"footer-module--wrap_info--1CB4-",f_r:"footer-module--f_r--ba2Nr",copyright:"footer-module--copyright--3kkbL"}},Wbzz:function(e,a,t){"use strict";t("xfY5");var n=t("q1tI"),r=t.n(n),o=t("+ZDr"),l=t.n(o);t.d(a,"a",(function(){return l.a}));t("lw3w"),t("emEt").default.enqueue,r.a.createContext({})},fcpr:function(e,a,t){e.exports={wrap_body:"layout-module--wrap_body--qf8_q"}},ldln:function(e,a,t){e.exports={body:"book-module--body--1ijCs",wrap_body:"book-module--wrap_body--ie5hc",title:"book-module--title--2unI1",post_num:"book-module--post_num--227K-",wrap_item:"book-module--wrap_item--1x8Xr",date:"book-module--date--3Iqmw",content:"book-module--content--340Cw"}},lw3w:function(e,a,t){var n;e.exports=(n=t("rzlk"))&&n.default||n},qncB:function(e,a,t){var n=t("XKFU"),r=t("vhPU"),o=t("eeVq"),l=t("/e88"),c="["+l+"]",u=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),m=function(e,a,t){var r={},c=o((function(){return!!l[e]()||"​"!="​"[e]()})),u=r[e]=c?a(s):l[e];t&&(r[t]=u),n(n.P+n.F*c,"String",r)},s=m.trim=function(e,a){return e=String(r(e)),1&a&&(e=e.replace(u,"")),2&a&&(e=e.replace(i,"")),e};e.exports=m},rzlk:function(e,a,t){"use strict";t.r(a);t("91GP");var n=t("q1tI"),r=t.n(n),o=t("IOVJ");a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null}},xfY5:function(e,a,t){"use strict";var n=t("dyZX"),r=t("aagx"),o=t("LZWt"),l=t("Xbzi"),c=t("apmT"),u=t("eeVq"),i=t("kJMx").f,m=t("EemH").f,s=t("hswa").f,d=t("qncB").trim,f=n.Number,p=f,E=f.prototype,h="Number"==o(t("Kuth")(E)),_="trim"in String.prototype,N=function(e){var a=c(e,!1);if("string"==typeof a&&a.length>2){var t,n,r,o=(a=_?a.trim():d(a,3)).charCodeAt(0);if(43===o||45===o){if(88===(t=a.charCodeAt(2))||120===t)return NaN}else if(48===o){switch(a.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+a}for(var l,u=a.slice(2),i=0,m=u.length;i<m;i++)if((l=u.charCodeAt(i))<48||l>r)return NaN;return parseInt(u,n)}}return+a};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var a=arguments.length<1?0:e,t=this;return t instanceof f&&(h?u((function(){E.valueOf.call(t)})):"Number"!=o(t))?l(new p(N(a)),t,f):N(a)};for(var b,v=t("nh4g")?i(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;v.length>g;g++)r(p,b=v[g])&&!r(f,b)&&s(f,b,m(p,b));f.prototype=E,E.constructor=f,t("KroJ")(n,"Number",f)}}}]);
//# sourceMappingURL=component---src-pages-book-js-598880ec5e232b788908.js.map