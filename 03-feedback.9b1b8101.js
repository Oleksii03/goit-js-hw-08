var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(e,t,n){var o,r,i,f,u,a,c=0,v=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(O,t),v?g(e):f}function h(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=i}function O(){var e=d();if(h(e))return S(e);u=setTimeout(O,function(e){var n=t-(e-a);return b?s(n,i-(e-c)):n}(e))}function S(e){return u=void 0,y&&o?g(e):(o=r=void 0,f)}function T(){var e=d(),n=h(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return j(a);if(b)return u=setTimeout(O,t),g(a)}return void 0===u&&(u=setTimeout(O,t)),f}return t=p(t)||0,m(n)&&(v=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},T.flush=function(){return void 0===u?f:S(d())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=m(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),y={};(()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===e)return;for(const t in e)b.elements[t].value=e[t]}catch(e){console.log(e)}})();b.addEventListener("input",(e=>{const{target:t}=e,n=t.name,o=t.value;y[n]=o,localStorage.setItem("feedback-form-state",JSON.stringify(y))})),b.addEventListener("submit",(e=>{e.preventDefault(),b.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.9b1b8101.js.map
