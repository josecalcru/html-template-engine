var HTMLTemplateEngine=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t){let o=function(){var e={};return e.settings={basePath:"",logRequests:!1,windowExport:!1,loadProperty:function(e,t){let o=null;"false"===(o=void 0!==t?t[e]:e)&&(o=!1),void 0!==typeof o&&o&&(this[e]=o)}},e.loadPieces=function(t,o){!function(t){e.settings.loadProperty("basePath",t),e.settings.loadProperty("logRequests",t),e.settings.loadProperty("windowExport",t)}(o),e.settings.logRequests&&0===t.length&&console.warn("No template parts were found or loaded, make sure you are using <span> tags with the 'require-file' attribute"),t.forEach(t=>{!function(t,o){t=e.settings.basePath+t;var n=new XMLHttpRequest;n.open("GET",t,!0),n.addEventListener("load",r=>{4==n.readyState&&200==n.status?(e.settings.logRequests&&console.log("The following path was successfully loaded: "+t),o(n.responseText)):404==n.status?console.error("The following template path was not found: "+t):200!=n.status&&console.warn("There was an issue loading the following template path: "+t)}),n.addEventListener("error",()=>{console.error("The following template path was imposible to load: "+t)}),n.send()}(t.filePath,function(e){void 0!==t.elementId?document.querySelector(t.elementId).innerHTML=e:void 0!==t.element?t.element.innerHTML=e:console.error("Error loading the template part: ",t)})})},e.start=function(){let t=[];document.querySelectorAll("span[require-file]").forEach(function(e){t.push({element:e,filePath:e.getAttribute("require-file")})});const o=document.querySelector("body"),n={basePath:o.getAttribute("base-template-path"),logRequests:o.getAttribute("log-template-requests")};e.loadPieces(t,n)},e}();const n=(r=!1,a=!1,document.querySelectorAll("script").forEach(function(e){-1!==e.src.indexOf("html-template-engine")&&(a=!0,-1!==e.src.indexOf("?autoload")&&(r=!0))}),{autoload:r,includedViaScriptTag:a});var r,a;n.autoload?window.onload=o.start:n.includedViaScriptTag&&console.warn('Include ?autoload at the end of the script url if you want to autoload the template parts without using any javascript \n For example: <script type="text/javascript" src="html-template-engine.js?autoload"><\/script>'),e.exports=o}]);
//# sourceMappingURL=html-template-engine.js.map