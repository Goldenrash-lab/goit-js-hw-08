!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,y=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var r,i,f,a,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,u=setTimeout(E,t),s?b(e):a}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=f}function E(){var e=g();if(w(e))return O(e);u=setTimeout(E,function(e){var n=t-(e-l);return d?y(n,f-(e-c)):n}(e))}function O(e){return u=void 0,m&&r?b(e):(r=i=void 0,a)}function S(){var e=g(),n=w(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(d)return u=setTimeout(E,t),b(l)}return void 0===u&&(u=setTimeout(E,t)),a}return t=h(t)||0,p(n)&&(s=!!n.leading,f=(d="maxWait"in n)?v(h(n.maxWait)||0,t):f,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},S.flush=function(){return void 0===u?a:O(g())},S}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j={formElem:document.querySelector(".feedback-form")};function w(e){try{return JSON.parse(localStorage.getItem(e))||{}}catch(t){return console.log(t.message),localStorage.getItem(e)}}j.formElem.addEventListener("input",e(t)((function(e){var t={};new FormData(j.formElem).forEach((function(e,n){t[n]=e})),function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log(e.message)}}("feedback-form-state",t)}),500)),j.formElem.addEventListener("submit",(function(e){e.preventDefault();var t=w("feedback-form-state");localStorage.removeItem("feedback-form-state"),e.target.reset(),console.log(t)})),function(){var e=w("feedback-form-state");console.log(e);var t=!0,n=!1,r=void 0;try{for(var o,i=Object.keys(e)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var f=o.value;j.formElem.elements[f].value=e[f]}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}()}();
//# sourceMappingURL=03-feedback.175dcc84.js.map