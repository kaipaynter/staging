/*! For license information please see 66c72337e167b4a57e8bf3e49f555f953c703e3a-688a4ecdcbcf446cc254.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+22N":function(e,t,o){"use strict";var n=o("dI71"),r=o("dwco"),i=o.n(r),l=o("q1tI"),a=o.n(l),s=function(e){return e.children},c=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(n.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){i.a.polyfill()},o.handleClick=function(e){e.preventDefault();var t=0,o=!0,n=this.props,r=n.type,i=n.element,l=n.offset,a=n.timeout;if(r&&i)switch(r){case"class":o=!!(t=document.getElementsByClassName(i)[0]);break;case"id":o=!!(t=document.getElementById(i))}o?this.scrollTo(t,l,a):console.log("Element not found: "+i)},o.scrollTo=function(e,t,o){void 0===t&&(t=0),void 0===o&&(o=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;o?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),o):window.scroll({top:n+t,left:0,behavior:"smooth"})},o.render=function(){return a.a.createElement(s,null,"object"==typeof this.props.children?a.a.cloneElement(this.props.children,{onClick:this.handleClick}):a.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(a.a.Component);t.a=c},"1TsT":function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=!("undefined"==typeof window||!window.document||!window.document.createElement);var r=void 0;function i(){return void 0===r&&(r=function(){if(!n)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),o=function(){};window.addEventListener("testPassiveEventSupport",o,t),window.removeEventListener("testPassiveEventSupport",o,t)}catch(r){}return e}()),r}function l(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function a(e){this.target=e,this.events={}}a.prototype.getEventHandlers=function(e,t){var o,n=String(e)+" "+String((o=t)?!0===o?100:(o.capture<<0)+(o.passive<<1)+(o.once<<2):0);return this.events[n]||(this.events[n]={handlers:[],handleEvent:void 0},this.events[n].nextHandlers=this.events[n].handlers),this.events[n]},a.prototype.handleEvent=function(e,t,o){var n=this.getEventHandlers(e,t);n.handlers=n.nextHandlers,n.handlers.forEach((function(e){e&&e(o)}))},a.prototype.add=function(e,t,o){var n=this,r=this.getEventHandlers(e,o);l(r),0===r.nextHandlers.length&&(r.handleEvent=this.handleEvent.bind(this,e,o),this.target.addEventListener(e,r.handleEvent,o)),r.nextHandlers.push(t);var i=!0;return function(){if(i){i=!1,l(r);var a=r.nextHandlers.indexOf(t);r.nextHandlers.splice(a,1),0===r.nextHandlers.length&&(n.target&&n.target.removeEventListener(e,r.handleEvent,o),r.handleEvent=void 0)}}};function s(e,t,o,n){e.__consolidated_events_handlers__||(e.__consolidated_events_handlers__=new a(e));var r=function(e){if(e)return i()?e:!!e.capture}(n);return e.__consolidated_events_handlers__.add(t,o,r)}},"7W2i":function(e,t,o){var n=o("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},Bl7J:function(e,t,o){"use strict";var n=o("dI71"),r=o("q1tI"),i=o.n(r),l=(o("wcMv"),o("Wbzz"),function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("section",null,i.a.createElement("h2",null,"Los Angeles"),i.a.createElement("dl",{className:"alt"},i.a.createElement("dt",null,"Address"),i.a.createElement("dd",null,"Occidental Blvd • Los Angeles, CA 90057 • USA"),i.a.createElement("dt",null,"Email"),i.a.createElement("dd",null,i.a.createElement("a",{href:"info@kaipaynter.com"},"info@kaipaynter.com"))),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/Kaipadvisory",className:"icon fa-twitter alt"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.facebook.com/kaipaynteradvisory",className:"icon fa-facebook alt"},i.a.createElement("span",{className:"label"},"Facebook"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.instagram.com/kaipaynteradvisory",className:"icon fa-instagram alt"},i.a.createElement("span",{className:"label"},"Instagram"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/company/kaipayneradvisory",className:"icon fa-linkedin alt"},i.a.createElement("span",{className:"label"},"LinkedIn"))))),i.a.createElement("section",null,i.a.createElement("h2",null,"Sydney"),i.a.createElement("dl",{className:"alt"},i.a.createElement("dt",null,"Address"),i.a.createElement("dd",null,"Carlton Crescent • Sydney, NSW 2130 • AU"))),i.a.createElement("p",{className:"copyright"},"© 2021. Design: ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),"."))}),a=function(e){function t(t){var o;return(o=e.call(this,t)||this).state={loading:"is-loading"},o}Object(n.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100)},o.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},o.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"body "+this.state.loading},i.a.createElement("div",{id:"wrapper"},e,i.a.createElement(l,null)))},t}(i.a.Component);t.a=a},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,o,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(o),o=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};t.default=n},Ijbi:function(e,t,o){var n=o("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(t)}e.exports=o},RIqP:function(e,t,o){var n=o("Ijbi"),r=o("EbDI"),i=o("ZhPi"),l=o("Bnag");e.exports=function(e){return n(e)||r(e)||i(e)||l()}},SksO:function(e,t){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,n)}e.exports=o},TOwV:function(e,t,o){"use strict";e.exports=o("qT12")},TSYQ:function(e,t,o){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===i)for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},W8MJ:function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}},YIkO:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("pVnL")),i=n(o("lSNA")),l=n(o("RIqP")),a=n(o("lwsE")),s=n(o("a1gu")),c=n(o("Nsbk")),u=n(o("PJYZ")),f=n(o("W8MJ")),p=n(o("7W2i")),d=n(o("17x9")),h=n(o("q1tI")),v=n(o("TSYQ")),m=n(o("Fxm3"));var y=function(e){function t(e){var o;return(0,a.default)(this,t),(o=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},o._handleSpy=o._handleSpy.bind((0,u.default)(o)),o}return(0,p.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var o=[],n=0,r=e.length;n<r;n++)o[n]=t;return o}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],o=[],n=[],r=e||this.state.targetItems,i=!1,a=0,s=r.length;a<s;a++){var c=r[a],u=!i&&this._isInView(c);u?(i=!0,t.push(c)):o.push(c);var f=a===s-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&p&&(o.pop(),o.push.apply(o,(0,l.default)(t)),t=[c],n=this._fillArray(n,!1),u=!0),n.push(u)}return{inView:t,outView:o,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,o=this.props,n=o.rootEl,r=o.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var i=e.getBoundingClientRect(),l=n?t.height:window.innerHeight,a=this._getScrollDimension().scrollTop,s=a+l,c=n?i.top+a-t.top+r:i.top+a+r,u=c+e.offsetHeight;return c<s&&u>a}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),o=t.scrollTop,n=t.scrollHeight;return o+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,o=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:o.viewStatusList,isScrolledPast:o.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,o;(t=this.state.inViewState,o=e,t.length===o.length&&t.every((function(e,t){return e===o[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,m.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,o=this.props,n=o.children,l=o.className,a=o.scrolledPastClassName,s=o.style,c=0,u=h.default.Children.map(n,(function(t,o){var n;if(!t)return null;var l=t.type,s=a&&e.state.isScrolledPast[o],u=(0,v.default)((n={},(0,i.default)(n,"".concat(t.props.className),t.props.className),(0,i.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[o]),(0,i.default)(n,"".concat(e.props.scrolledPastClassName),s),n));return h.default.createElement(l,(0,r.default)({},t.props,{className:u,key:c++}),t.props.children)})),f=(0,v.default)((0,i.default)({},"".concat(l),l));return h.default.createElement(t,{className:f,style:s},u)}}]),t}(h.default.Component);t.default=y},ZhPi:function(e,t,o){var n=o("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}},a1gu:function(e,t,o){var n=o("cDf5"),r=o("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},dwco:function(e,t,o){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var o,n=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||a,scrollIntoView:n.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var o=p(this),n=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==t.body?(h.call(this,o,o.scrollLeft+i.left-n.left,o.scrollTop+i.top-n.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function u(t,o){var n=e.getComputedStyle(t,null)["overflow"+o];return"auto"===n||"scroll"===n}function f(e){var t=c(e,"Y")&&u(e,"Y"),o=c(e,"X")&&u(e,"X");return t||o}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function d(t){var o,n,r,l,a=(i()-t.startTime)/468;l=a=a>1?1:a,o=.5*(1-Math.cos(Math.PI*l)),n=t.startX+(t.x-t.startX)*o,r=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(d.bind(e,t))}function h(o,n,l){var s,c,u,f,p=i();o===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=r.scroll):(s=o,c=o.scrollLeft,u=o.scrollTop,f=a),d({scrollable:s,method:f,startTime:p,startX:c,startY:u,x:n,y:l})}}}}()},lSNA:function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},qT12:function(e,t,o){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,v=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,w=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,E=n?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case p:case l:case s:case a:case h:return e;default:switch(e=e&&e.$$typeof){case u:case d:case y:case m:case c:return e;default:return t}}case i:return t}}}function _(e){return S(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=r,t.ForwardRef=d,t.Fragment=l,t.Lazy=y,t.Memo=m,t.Portal=i,t.Profiler=s,t.StrictMode=a,t.Suspense=h,t.isAsyncMode=function(e){return _(e)||S(e)===f},t.isConcurrentMode=_,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===l},t.isLazy=function(e){return S(e)===y},t.isMemo=function(e){return S(e)===m},t.isPortal=function(e){return S(e)===i},t.isProfiler=function(e){return S(e)===s},t.isStrictMode=function(e){return S(e)===a},t.isSuspense=function(e){return S(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===p||e===s||e===a||e===h||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===c||e.$$typeof===u||e.$$typeof===d||e.$$typeof===b||e.$$typeof===g||e.$$typeof===E||e.$$typeof===w)},t.typeOf=S},uuth:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return w}));var n=o("1TsT"),r=o("q1tI"),i=o.n(r),l=o("TOwV");function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=s(e);if(t){var r=s(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return u(this,o)}}function p(e,t){var o,n=(o=e,!isNaN(parseFloat(o))&&isFinite(o)?parseFloat(o):"px"===o.slice(-2)?parseFloat(o.slice(0,-2)):void 0);if("number"==typeof n)return n;var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof r?r*t:void 0}function d(e){return"string"==typeof e.type}var h;var v=[];function m(e){v.push(e),h||(h=setTimeout((function(){var e;for(h=null;e=v.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var o=v.indexOf(e);-1!==o&&(v.splice(o,1),!v.length&&h&&(clearTimeout(h),h=null))}}}var y={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},w=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(h,t);var o,r,s,u=f(h);function h(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(t=u.call(this,e)).refElement=function(e){t._ref=e},t}return o=h,(r=[{key:"componentDidMount",value:function(){var e=this;h.getWindow()&&(this.cancelOnNextTick=m((function(){e.cancelOnNextTick=null;var t=e.props,o=t.children;t.debug,function(e,t){if(e&&!d(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(o,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(n.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(n.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var e=this;h.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=m((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){h.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var t=this.props,o=t.horizontal,n=t.scrollableAncestor;if(n)return function(t){return"window"===t?e.window:t}(n);for(var r=this._ref;r.parentNode;){if((r=r.parentNode)===document.body)return window;var i=window.getComputedStyle(r),l=(o?i.getPropertyValue("overflow-x"):i.getPropertyValue("overflow-y"))||i.getPropertyValue("overflow");if("auto"===l||"scroll"===l||"overlay"===l)return r}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),o=function(e){return e.viewportBottom-e.viewportTop==0?"invisible":e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?"inside":e.viewportBottom<e.waypointTop?"below":e.waypointTop<e.viewportTop?"above":"invisible"}(t),n=this._previousPosition,r=this.props,i=(r.debug,r.onPositionChange),l=r.onEnter,a=r.onLeave,s=r.fireOnRapidScroll;if(this._previousPosition=o,n!==o){var c={currentPosition:o,previousPosition:n,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};i.call(this,c),"inside"===o?l.call(this,c):"inside"===n&&a.call(this,c),s&&("below"===n&&"above"===o||"above"===n&&"below"===o)&&(l.call(this,{currentPosition:"inside",previousPosition:n,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),a.call(this,{currentPosition:o,previousPosition:"inside",event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,o=this.props,n=o.horizontal,r=(o.debug,this._ref.getBoundingClientRect()),i=r.left,l=r.top,a=r.right,s=r.bottom,c=n?i:l,u=n?a:s;this.scrollableAncestor===window?(e=n?window.innerWidth:window.innerHeight,t=0):(e=n?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=n?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var f=this.props,d=f.bottomOffset;return{waypointTop:c,waypointBottom:u,viewportTop:t+p(f.topOffset,e),viewportBottom:t+e-p(d,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;return t?d(t)||Object(l.isForwardRef)(t)?i.a.cloneElement(t,{ref:function(o){e.refElement(o),t.ref&&("function"==typeof t.ref?t.ref(o):t.ref.current=o)}}):i.a.cloneElement(t,{innerRef:this.refElement}):i.a.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&a(o.prototype,r),s&&a(o,s),h}(i.a.PureComponent);w.above="above",w.below="below",w.inside="inside",w.invisible="invisible",w.getWindow=function(){if("undefined"!=typeof window)return window},w.defaultProps=y,w.displayName="Waypoint"}).call(this,o("yLpj"))},wcMv:function(e,t,o){}}]);
//# sourceMappingURL=66c72337e167b4a57e8bf3e49f555f953c703e3a-688a4ecdcbcf446cc254.js.map