(()=>{function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e,n,r,o,c,a){try{var i=t[c](a),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}console.log("Script Loaded");localStorage.setItem("APIDATA",JSON.stringify([]));var n=JSON.parse(localStorage.getItem("APIDATA")),r=[],o=function(){var t,o=(t=regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("/server/products/index.get.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:o=t.sent,n=o,console.log(n),d(n,localStorage.getItem("SHOWCATEGORY")),p(r),localStorage.setItem("APIDATA",JSON.stringify(n));case 11:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(o,c){var a=t.apply(n,r);function i(t){e(a,o,c,i,s,"next",t)}function s(t){e(a,o,c,i,s,"throw",t)}i(void 0)}))});return function(){return o.apply(this,arguments)}}(),c=document.querySelectorAll(".category-button"),a=document.querySelectorAll(".custom-option"),i=document.querySelector(".products-section"),s=Array.prototype.slice.call(c),l=Array.prototype.slice.call(a),u=function(t,e){t.map((function(t){t.value===e?t.classList.add("active"):t.classList.remove("active")}))};s.map((function(t){t.addEventListener("click",(function(){d(n,t.value),p(r),localStorage.setItem("SHOWCATEGORY",t.value),u(s,localStorage.getItem("SHOWCATEGORY"))}))})),l.map((function(t){t.addEventListener("click",(function(){d(n,t.getAttribute("data-value")),p(r),localStorage.setItem("SHOWCATEGORY",t.getAttribute("data-value")),u(s,localStorage.getItem("SHOWCATEGORY"))}))}));var d=function(t,e){r=[],t.filter((function(t){t.category===e&&r.push(t)}))},p=function(t){i.innerHTML="",t.map((function(t){var e=document.createElement("div");e.classList.add("product-card"),e.innerHTML='\n    <h3 class="product-category">'.concat(t.name,'</h3>\n    <div class="product-image-wp">\n      <img src="').concat(t.imageURL,'" alt="').concat(t.name,'" />\n    </div>\n    <div class="product-card-content">\n        <p class="product-description">').concat(t.description,'</p>\n    </div>\n    <div class="product-card-footer">\n        <div class="product-reviews-wrapper">\n            <div class="product-rating">\n                <span>MRP Rs.').concat(t.price,'</span>\n            </div>\n        </div>\n        <div class="button-wrapper">\n            <button type="button" class="product-button" onclick="addToCart(\'').concat(t.id,"')\">Buy Now</button>\n        </div>\n    </div>"),i.appendChild(e)}))};o(),d(n,"5b6899953d1a866534f516e2"),p(r);document.querySelector(".cart-items");JSON.parse(localStorage.getItem("cart"))||localStorage.setItem("cart",JSON.stringify([]));u(s,localStorage.getItem("SHOWCATEGORY")),document.querySelector(".custom-select-wrapper").addEventListener("click",(function(){this.querySelector(".custom-select").classList.toggle("open")}));var f,m=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,c=function(){};return{s:c,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}(document.querySelectorAll(".custom-option"));try{for(m.s();!(f=m.n()).done;){f.value.addEventListener("click",(function(){this.classList.contains("selected")||(this.parentNode.querySelector(".custom-option.selected").classList.remove("selected"),this.classList.add("selected"),this.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=this.textContent)}))}}catch(t){m.e(t)}finally{m.f()}window.addEventListener("click",(function(t){var e=document.querySelector(".custom-select");e.contains(t.target)||e.classList.remove("open")}))})();