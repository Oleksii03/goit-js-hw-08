var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(t,e,n){var o,r,i,u,f,a,c=0,v=!1,y=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function j(t){return c=t,f=setTimeout(O,e),v?g(t):u}function h(t){var n=t-a;return void 0===a||n>=e||n<0||y&&t-c>=i}function O(){var t=d();if(h(t))return S(t);f=setTimeout(O,function(t){var n=e-(t-a);return y?s(n,i-(t-c)):n}(t))}function S(t){return f=void 0,b&&o?g(t):(o=r=void 0,u)}function T(){var t=d(),n=h(t);if(o=arguments,r=this,a=t,n){if(void 0===f)return j(a);if(y)return f=setTimeout(O,e),g(a)}return void 0===f&&(f=setTimeout(O,e)),u}return e=m(e)||0,p(n)&&(v=!!n.leading,i=(y="maxWait"in n)?l(m(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},T.flush=function(){return void 0===f?u:S(d())},T}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(p(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=p(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=o.test(t);return f||r.test(t)?i(t.slice(2),f?2:8):n.test(t)?NaN:+t}const y=document.querySelector(".feedback-form"),b={};(()=>{try{const t=JSON.parse(localStorage.getItem("userData"));if(null===t)return;for(const e in t)y.elements[e].value=t[e]}catch(t){console.log(t)}})();y.addEventListener("input",(t=>{const{target:e}=t,n=e.name,o=e.value;b[n]=o,localStorage.setItem("userData",JSON.stringify(b))})),y.addEventListener("submit",(t=>{t.preventDefault(),y.reset(),localStorage.removeItem("userData")}));
//# sourceMappingURL=03-feedback.c8033e58.js.map