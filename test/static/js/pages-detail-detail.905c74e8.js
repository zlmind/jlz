(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"13d5":function(t,e,a){"use strict";var n=a("23e7"),i=a("d58f").left,r=a("a640"),o=a("ae40"),s=r("reduce"),l=o("reduce",{1:0});n({target:"Array",proto:!0,forced:!s||!l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"257a":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"top-banner-container",attrs:{"auto-focus":!0}},[n("v-uni-image",{staticClass:"logo",attrs:{src:a("463a")}}),n("span",{staticClass:"slogan"},[t._v("约企来")]),n("v-uni-navigator",{staticStyle:{width:"100%",height:"50px:#2F85FC"},attrs:{url:"/pages/detail/download"}},[n("v-uni-button",{staticClass:"open",attrs:{type:"default"}},[t._v("打开")])],1)],1),n("v-uni-view",[n("v-uni-text",{staticClass:"title-text"},[t._v(t._s(t.banner.title))])],1),n("v-uni-view",{staticClass:"article-meta"},[n("v-uni-text",{staticClass:"article-meta-text article-author"},[t._v(t._s(t.banner.person.name))]),n("v-uni-text",{staticClass:"article-meta-text article-text"},[t._v("发表于")]),n("v-uni-text",{staticClass:"article-meta-text article-time"},[t._v(t._s(t.banner.createTime.substring(0,10)))])],1),n("v-uni-view",{staticClass:"article-content"},[n("v-uni-text",{staticClass:"article-meta-text content"},[t._v(t._s(t.banner.introduction))]),t._l(t.banner.files,(function(e,a){return n("v-uni-view",{key:a,staticClass:"padding-xl"},[n("br"),n("v-uni-image",{attrs:{src:t.$imageUrl+e.path}})],1)}))],2),n("v-uni-view",{staticClass:"comment-wrap"}),n("v-uni-view",{staticClass:"top-banner-container",attrs:{"auto-focus":!0}},[n("span",{staticClass:"slogan",staticStyle:{"margin-left":"-45px","margin-top":"-5px"}},[n("v-uni-navigator",{staticStyle:{width:"100%",height:"20px:#2F85FC"},attrs:{url:"/pages/detail/download"}},[n("v-uni-button",{staticStyle:{color:"red","font-size":"13px","background-color":"#FFF0F5",outline:"none",border:"0px"}},[t._v("打开“约企来”立即沟通")])],1)],1),n("v-uni-navigator",{staticStyle:{width:"50%",height:"50px:#2F85FC"},attrs:{url:"/pages/detail/download"}},[n("v-uni-button",{staticClass:"open",staticStyle:{"background-color":"#FFF0F5",color:"red"},attrs:{type:"default"}},[t._v("转发")])],1)],1)],1)},r=[]},"431b":function(t,e,a){"use strict";(function(t){a("c975"),a("13d5"),a("4d63"),a("ac1f"),a("25f0"),a("466d"),a("5319"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,i=/^<\/([-A-Za-z0-9_]+)[^>]*>/,r=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,o=p("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),s=p("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),l=p("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),c=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),d=p("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=p("script,style");function f(t,e){var a,f,p,h=[],b=t;h.last=function(){return this[this.length-1]};while(t){if(f=!0,h.last()&&u[h.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+h.last()+"[^>]*>"),(function(t,a){return a=a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(a),""})),x("",h.last());else if(0==t.indexOf("\x3c!--")?(a=t.indexOf("--\x3e"),a>=0&&(e.comment&&e.comment(t.substring(4,a)),t=t.substring(a+3),f=!1)):0==t.indexOf("</")?(p=t.match(i),p&&(t=t.substring(p[0].length),p[0].replace(i,x),f=!1)):0==t.indexOf("<")&&(p=t.match(n),p&&(t=t.substring(p[0].length),p[0].replace(n,g),f=!1)),f){a=t.indexOf("<");var v=a<0?t:t.substring(0,a);t=a<0?"":t.substring(a),e.chars&&e.chars(v)}if(t==b)throw"Parse Error: "+t;b=t}function g(t,a,n,i){if(a=a.toLowerCase(),s[a])while(h.last()&&l[h.last()])x("",h.last());if(c[a]&&h.last()==a&&x("",a),i=o[a]||!!i,i||h.push(a),e.start){var u=[];n.replace(r,(function(t,e){var a=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:d[e]?e:"";u.push({name:e,value:a,escaped:a.replace(/(^|[^\\])"/g,'$1\\"')})})),e.start&&e.start(a,u,i)}}function x(t,a){if(a){for(n=h.length-1;n>=0;n--)if(h[n]==a)break}else var n=0;if(n>=0){for(var i=h.length-1;i>=n;i--)e.end&&e.end(h[i]);h.length=n}}x()}function p(t){for(var e={},a=t.split(","),n=0;n<a.length;n++)e[a[n]]=!0;return e}function h(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function b(t){return t.reduce((function(t,e){var a=e.value,n=e.name;return t[n]?t[n]=t[n]+" "+a:t[n]=a,t}),{})}function v(e){e=h(e);var a=[],n={node:"root",children:[]};return f(e,{start:function(t,e,i){var r={name:t};if(0!==e.length&&(r.attrs=b(e)),i){var o=a[0]||n;o.children||(o.children=[]),o.children.push(r)}else a.unshift(r)},end:function(e){var i=a.shift();if(i.name!==e&&t("error","invalid state: mismatch end tag"," at common/html-parser.js:303"),0===a.length)n.children.push(i);else{var r=a[0];r.children||(r.children=[]),r.children.push(i)}},chars:function(t){var e={type:"text",text:t};if(0===a.length)n.children.push(e);else{var i=a[0];i.children||(i.children=[]),i.children.push(e)}},comment:function(t){var e={node:"comment",text:t},n=a[0];n.children||(n.children=[]),n.children.push(e)}}),n.children}var g=v;e.default=g}).call(this,a("0de9")["log"])},"463a":function(t,e,a){t.exports=a.p+"static/img/yueqilai.47714e31.png"},6193:function(t,e,a){var n=a("a14d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("65051588",n,!0,{sourceMap:!1,shadowMode:!1})},a14d:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"\nuni-page-body[data-v-42b31a2f]{min-height:100%}\n.top-banner-container[data-v-42b31a2f]{\n\t/* background-color: #fff; */height:60px;position:relative;z-index:99;margin-top:25px}.top-banner-container .logo[data-v-42b31a2f]{width:50px;height:50px;position:absolute;margin-top:-10px;left:15px;-webkit-border-radius:5px;border-radius:5px}.top-banner-container .slogan[data-v-42b31a2f]{font-size:20px;color:#222;position:absolute;top:5px;bottom:0;left:70px;line-height:20px}.top-banner-container .open[data-v-42b31a2f]{position:absolute;right:15px;width:80px;height:30px;line-height:30px;color:#fff;font-size:16px;text-align:center;-webkit-border-radius:5px;border-radius:5px;background:#f04142}.banner-img[data-v-42b31a2f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#007aff}.title-area1[data-v-42b31a2f]{position:absolute;left:15px;right:15px;bottom:15px;color:#222}.title-area-old[data-v-42b31a2f]{position:absolute;left:15px;right:15px;bottom:15px;z-index:11}.title-text[data-v-42b31a2f]{font-size:22px;font-weight:400;line-height:25px;margin-left:15px;font-weight:700;lines:3;color:#222;overflow:hidden}.title-text-old[data-v-42b31a2f]{font-size:22px;font-weight:400;line-height:20px;font-weight:700;lines:2;color:#fff;overflow:hidden}.article-meta[data-v-42b31a2f]{padding:10px 15px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.article-meta-text[data-v-42b31a2f]{color:grey}.content[data-v-42b31a2f]{font-size:17px;color:#222}.article-text[data-v-42b31a2f]{font-size:12px;line-height:25px;margin:0 10px}.article-author[data-v-42b31a2f]{font-size:15px}.article-time[data-v-42b31a2f]{font-size:15px}.article-content[data-v-42b31a2f]{font-size:17px;padding:0 15px;margin-bottom:15px;overflow:hidden}\n.article-content[data-v-42b31a2f]{line-height:1.8}.article-content img[data-v-42b31a2f]{max-width:100%}\n",""]),t.exports=e},a45d:function(t,e,a){"use strict";a.r(e);var n=a("257a"),i=a("d0cb");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c1ce");var o,s=a("f0c5"),l=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"42b31a2f",null,!1,n["a"],o);e["default"]=l.exports},b94a:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("99af"),a("4160"),a("e25e"),a("ac1f"),a("1276"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("431b"));var i="<p>获取信息失败1</p>";var r={data:function(){return{banner:{},content:[]}},mounted:function(){var t=document.getElementsByClassName("uni-page-head-hd")[0];t.style.display="none"},onLoad:function(t){this.load(t.query)},methods:{load:function(e){t("log","event.query"+e," at pages/detail/detail.nvue:117"),this.getDetail(e)},getDetail:function(e){var a=this;uni.request({url:"https://api.jializhuang.com/product/detail?id="+e,header:{authorization:""},success:function(e){t("log","result: "+JSON.stringify(e)," at pages/detail/detail.nvue:127");var n=i;200==e.statusCode&&(n=e.data.data),a.banner=n}})}}};e.default=r}).call(this,a("0de9")["log"])},c1ce:function(t,e,a){"use strict";var n=a("6193"),i=a.n(n);i.a},d0cb:function(t,e,a){"use strict";a.r(e);var n=a("b94a"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a}}]);