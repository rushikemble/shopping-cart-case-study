(()=>{function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),console.log("Change Products on click loaded"),localStorage.setItem("SHOWCATEGORY","5b6899953d1a866534f516e2")}var o,n,r;return o=t,(n=[{key:"changeCategory",value:function(e){localStorage.setItem("SHOWCATEGORY",e)}},{key:"renderProductPage",value:function(e){this.changeCategory(e),window.location="/products.html"}},{key:"changeProductCategoryButton",value:function(){var e=this,t=document.querySelectorAll(".product-category-button"),o=Array.prototype.slice.call(t);console.log("🚇",o),o.map((function(t){t.addEventListener("click",(function(){e.renderProductPage(t.value)}))}))}}])&&e(o.prototype,n),r&&e(o,r),Object.defineProperty(o,"prototype",{writable:!1}),t}())).changeProductCategoryButton()})();