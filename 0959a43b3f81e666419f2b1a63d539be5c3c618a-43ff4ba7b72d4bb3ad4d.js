(self.webpackChunkstaging=self.webpackChunkstaging||[]).push([[928],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!o(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},8514:function(e){e.exports={siteTitle:"Kai Paynter Advisory",manifestName:"Kai Paynter Advisory",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.svg",heading:"Kai Paynter",subHeading:"Kai Paynter Advisory",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/kaipaynter/staging"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/Kaipadvisory"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com"}]}},329:function(e,t,n){"use strict";n.d(t,{Z:function(){return je}});var r,i,o,a,c=n(6864),u=n(7294),l=n(5697),s=n.n(l),f=n(4839),m=n.n(f),p=n(2993),d=n.n(p),y=n(6494),h=n.n(y),T="bodyAttributes",g="htmlAttributes",b="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",M="href",N="http-equiv",C="innerHTML",j="itemprop",L="name",O="property",A="rel",S="src",I="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",x="defer",P="encodeSpecialCharacters",z="onChangeClientState",Y="titleTemplate",R=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),Q=[E.NOSCRIPT,E.SCRIPT,E.STYLE],B="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var t=$(e,E.TITLE),n=$(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,k);return t||r||void 0},q=function(e){return $(e,z)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==w&&c!==j||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=h()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,m=e.titleAttributes;le(E.BODY,r),le(E.HTML,i),ue(f,m);var p={baseTag:se(E.BASE,n),linkTags:se(E.LINK,o),metaTags:se(E.META,a),noscriptTags:se(E.NOSCRIPT,c),scriptTags:se(E.SCRIPT,l),styleTags:se(E.STYLE,s)},d={},y={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=p[e].oldTags)})),t&&t(),u(e,d,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),le(E.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,i=me(n,r),[u.createElement(E.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=fe(n),o=ce(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case T:case g:return{toComponent:function(){return me(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),u.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,m=e.titleAttributes;return{base:pe(E.BASE,t,r),bodyAttributes:pe(T,n,r),htmlAttributes:pe(g,i,r),link:pe(E.LINK,o,r),meta:pe(E.META,a,r),noscript:pe(E.NOSCRIPT,c,r),script:pe(E.SCRIPT,u,r),style:pe(E.STYLE,l,r),title:pe(E.TITLE,{title:f,titleAttributes:m},r)}},ye=m()((function(e){return{baseTag:J([M,I],e),bodyAttributes:V(T,e),defer:$(e,x),encode:$(e,P),htmlAttributes:V(g,e),linkTags:X(E.LINK,[A,M],e),metaTags:X(E.META,[L,v,N,O,j],e),noscriptTags:X(E.NOSCRIPT,[C],e),onChangeClientState:q(e),scriptTags:X(E.SCRIPT,[S,C],e),styleTags:X(E.STYLE,[w],e),title:_(e),titleAttributes:V(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=ne((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(i=ye,a=o=function(e){function t(){return H(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case E.TITLE:return Z({},i,((t={})[r.type]=a,t.titleAttributes=Z({},o),t));case E.BODY:return Z({},i,{bodyAttributes:Z({},o)});case E.HTML:return Z({},i,{htmlAttributes:Z({},o)})}return Z({},i,((n={})[r.type]=Z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(G(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=Z({},n);return t&&(r=this.mapChildrenToProps(t,r)),u.createElement(i,r)},F(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(u.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var Te=he,ge=n(5444);function be(){return u.createElement("section",null,u.createElement("h2",null,"Get in touch"),u.createElement("form",{method:"post",action:"#"},u.createElement("div",{className:"fields"},u.createElement("div",{className:"field half"},u.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),u.createElement("div",{className:"field half"},u.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),u.createElement("div",{className:"field"},u.createElement("textarea",{name:"message",id:"message",placeholder:"Message"}))),u.createElement("ul",{className:"actions"},u.createElement("li",null,u.createElement("input",{type:"submit",value:"Send",className:"primary"})))))}var Ee=n(8514),ve=n.n(Ee);function we(){return u.createElement("footer",{id:"footer"},u.createElement("div",{className:"inner"},u.createElement(be,null),u.createElement("section",null,u.createElement("h2",null,"Follow"),u.createElement("ul",{className:"icons"},ve().socialLinks.map((function(e){var t=e.icon,n=e.name,r=e.url;return u.createElement("li",{key:r},u.createElement("a",{href:r,className:"icon "+t},u.createElement("span",{className:"label"},n)))})))),u.createElement("ul",{className:"copyright"},u.createElement("li",null,"© Phantom. All rights reserved"),u.createElement("li",null,"Design: ",u.createElement("a",{href:"http://html5up.net"},"HTML5 UP")))))}function Me(e){var t=e.onClose,n=void 0===t?function(){}:t;return u.createElement("nav",{id:"menu"},u.createElement("div",{className:"inner"},u.createElement("h2",null,"Menu"),u.createElement("ul",null,u.createElement("li",null,u.createElement(ge.Link,{to:"/"},"Home")),u.createElement("li",null,u.createElement(ge.Link,{to:"/Generic"},"Generic Page")),u.createElement("li",null,u.createElement(ge.Link,{to:"/Elements"},"Elements")))),u.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),n()},href:"#menu"},"Close"))}function Ne(e){var t=e.onMenuClick,n=void 0===t?function(){}:t;return u.createElement("nav",null,u.createElement("ul",null,u.createElement("li",null,u.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),n()}},"Menu"))))}function Ce(e){e.sections;var t=(0,u.useState)(!1),n=t[0],r=t[1];return u.createElement(u.Fragment,null,u.createElement("header",{id:"header"},u.createElement("div",{className:"inner"},u.createElement(ge.Link,{to:"/",className:"logo"},u.createElement("span",{className:"symbol"},u.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQ5LjE2N3B4IiBoZWlnaHQ9IjE3Mi4yNDNweCIgdmlld0JveD0iMCAwIDE0OS4xNjcgMTcyLjI0MyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTQ5LjE2NyAxNzIuMjQzIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9IiM1ODU4NTgiIHBvaW50cz0iMTQ5LjE2NywxMjkuMTgzIDc0LjU4MywxNzIuMjQzIDAsMTI5LjE4MyAwLDQzLjA2MSA3NC41ODMsMCAxNDkuMTY3LDQzLjA2MSAiLz4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00MS44OCw4NC43NWwyNS4wOSwyNi43ODNMNTQuODg5LDg0Ljc1SDQxLjg4eiBNNzQuNTgzLDExNS44NDFMODguNjQsODQuNzVINjAuNTI3TDc0LjU4MywxMTUuODQxeg0KCSBNNTUuMDA5LDc5LjU5NGw4LjIxNy0xNS40NjZINTIuNjczbC0xMS42LDE1LjQ2Nkg1NS4wMDl6IE04Mi4xOTYsMTExLjUzM2wyNS4wOTEtMjYuNzgzaC0xMy4wMUw4Mi4xOTYsMTExLjUzM3ogTTYwLjg0OSw3OS41OTQNCgloMjcuNDY5bC04LjIxNy0xNS40NjZINjkuMDY1TDYwLjg0OSw3OS41OTR6IE05NC4xNTcsNzkuNTk0aDEzLjkzNkw5Ni40OTQsNjQuMTI4SDg1Ljk0Mkw5NC4xNTcsNzkuNTk0eiBNOTkuODM1LDYwLjAyDQoJbDE1LjQ2NywyMC42MjFjMC4zNzYsMC40ODMsMC41NSwxLjA0LDAuNTIzLDEuNjcxYy0wLjAyNywwLjYzMi0wLjI1NywxLjE3NC0wLjY4NiwxLjYzMmwtMzguNjY0LDQxLjI0Mw0KCWMtMC40ODMsMC41MzYtMS4xMTMsMC44MDQtMS44OTMsMC44MDRjLTAuNzc4LDAtMS40MDgtMC4yNjgtMS44OTItMC44MDRMMzQuMDI2LDgzLjk0NGMtMC40MjktMC40NTctMC42NTgtMS0wLjY4NS0xLjYzMg0KCWMtMC4wMjctMC42MzEsMC4xNDctMS4xODgsMC41MjMtMS42NzFMNDkuMzMxLDYwLjAyYzAuNDg0LTAuNjk5LDEuMTY4LTEuMDQ3LDIuMDU0LTEuMDQ3aDQ2LjM5OA0KCUM5OC42NjcsNTguOTczLDk5LjM1Myw1OS4zMjIsOTkuODM1LDYwLjAyeiIvPg0KPC9zdmc+DQo=",alt:""})),u.createElement("span",{className:"title"},"Phantom")),u.createElement(Ne,{onMenuClick:function(){return r(!n)}}))),u.createElement("div",{className:n?"is-menu-visible":" "},u.createElement(Me,{onClose:function(){return r(!n)}})))}var je=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}(0,c.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({isPreloaded:!1})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props.children,t=this.state.isPreloaded;return u.createElement(ge.StaticQuery,{query:"3649515864",render:function(n){return u.createElement(u.Fragment,null,u.createElement(Te,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Phantom"},{name:"keywords",content:"site, web"}]},u.createElement("html",{lang:"en"})),u.createElement("div",{className:t?"main-body is-preload":"main-body"},u.createElement("div",{id:"wrapper"},u.createElement(Ce,null),e,u.createElement(we,null))))}})},t}(u.Component)}}]);
//# sourceMappingURL=0959a43b3f81e666419f2b1a63d539be5c3c618a-43ff4ba7b72d4bb3ad4d.js.map