!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function m(e,t,n){var o,i,u,f,a,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function O(e){return l=e,a=setTimeout(S,t),s?j(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function S(){var e=b();if(h(e))return T(e);a=setTimeout(S,function(e){var n=t-(e-c);return d?p(n,u-(e-l)):n}(e))}function T(e){return a=void 0,m&&o?j(e):(o=i=void 0,f)}function w(){var e=b(),n=h(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return O(c);if(d)return a=setTimeout(S,t),j(c)}return void 0===a&&(a=setTimeout(S,t)),f}return t=g(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(g(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},w.flush=function(){return void 0===a?f:T(b())},w}function y(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),O={};!function(){try{var e=JSON.parse(localStorage.getItem("userData"));if(null===e)return;for(var t in e)j.elements[t].value=e[t]}catch(e){console.log(e)}}();j.addEventListener("input",(function(e){var t=e.target,n=t.name,r=t.value;O[n]=r,localStorage.setItem("userData",JSON.stringify(O))})),j.addEventListener("submit",(function(e){e.preventDefault(),j.reset(),localStorage.removeItem("userData")}))}();
//# sourceMappingURL=03-feedback.18d223ba.js.map