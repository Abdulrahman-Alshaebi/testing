(()=>{"use strict";var e,t,n,o,r,i={643:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(671),r=n(144),i=function(){function e(){(0,o.Z)(this,e)}return(0,r.Z)(e,[{key:"onReady",value:function(){}},{key:"registerEvents",value:function(){}},{key:"initiate",value:function(e){if(e&&!e.includes(salla.config.get("page.slug")))return app.log("The Class For (".concat(e.join(","),") Skipped."));this.onReady(),this.registerEvents(),app.log("The Class For (".concat((null==e?void 0:e.join(","))||"*",") Loaded🎉"))}}]),e}();i.initiateWhenReady=function(){var e,t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;"ready"===(null===(e=window.app)||void 0===e?void 0:e.status)?(new this).initiate(n):document.addEventListener("theme::ready",(function(){return(new t).initiate(n)}))};const a=i},326:(e,t,n)=>{function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>o})},671:(e,t,n)=>{function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:()=>o})},144:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(343);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(0,o.Z)(r.key),r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},120:(e,t,n)=>{function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}n.d(t,{Z:()=>o})},136:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(611);function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,o.Z)(e,t)}},963:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(2),r=n(326);function i(e,t){if(t&&("object"===(0,o.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(e)}},611:(e,t,n)=>{function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}n.d(t,{Z:()=>o})},512:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(2);function r(e,t){if("object"!==(0,o.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==(0,o.Z)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}},343:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(2),r=n(512);function i(e){var t=(0,r.Z)(e,"string");return"symbol"===(0,o.Z)(t)?t:String(t)}},2:(e,t,n)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}n.d(t,{Z:()=>o})}},a={};function p(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return i[e](n,n.exports,p),n.exports}p.d=(e,t)=>{for(var n in t)p.o(t,n)&&!p.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=p(671),t=p(144),n=p(136),o=p(963),r=p(120),function(i){(0,n.Z)(c,i);var a,p,u=(a=c,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,r.Z)(a);if(p){var n=(0,r.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,o.Z)(this,e)});function c(){return(0,e.Z)(this,c),u.apply(this,arguments)}return(0,t.Z)(c,[{key:"onReady",value:function(){var e=this;salla.event.cart.onUpdated((function(t){return e.updateCartPageInfo(t)})),app.watchElements({couponCodeInput:"#coupon-input",couponBtn:"#coupon-btn",couponError:"#coupon-error",subTotal:"#sub-total",totalDiscount:"#total-discount",shippingCost:"#shipping-cost",freeShipping:"#free-shipping",freeShippingBar:"#free-shipping-bar",freeShippingMsg:"#free-shipping-msg",freeShipApplied:"#free-shipping-applied"}),this.initiateCoupon(),this.initSubmitCart()}},{key:"initSubmitCart",value:function(){var e=document.querySelector("#cart-submit"),t=document.querySelectorAll('form[id^="item-"]');e&&app.onClick(e,(function(e){var n=!0;t.forEach((function(t){if(!(n=n&&t.reportValidity()))return e.preventDefault(),void salla.notify.error(salla.lang.get("common.messages.required_fields"))})),n&&e.currentTarget.load().then((function(){return salla.cart.submit()}))}))}},{key:"updateCartPageInfo",value:function(e){var t,n=this;if(!e.count)return window.location.reload();if(null===(t=e.items)||void 0===t||t.forEach((function(e){return n.updateItemInfo(e)})),app.subTotal.innerText=salla.money(e.sub_total),app.toggleElementClassIf(app.totalDiscount,"discounted","hidden",(function(){return!!e.discount})).toggleElementClassIf(app.shippingCost,"has_shipping","hidden",(function(){return!!e.real_shipping_cost})).toggleElementClassIf(app.freeShipping,"has_free","hidden",(function(){return!!e.free_shipping_bar})),app.totalDiscount.querySelector("b").innerText="- "+salla.money(e.discount),app.shippingCost.querySelector("b").innerText=salla.money(e.real_shipping_cost),e.free_shipping_bar){var o=e.free_shipping_bar.has_free_shipping;app.toggleElementClassIf(app.freeShippingBar,"active","hidden",(function(){return!o})).toggleElementClassIf(app.freeShipApplied,"active","hidden",(function(){return o})),app.freeShippingMsg.innerHTML=o?salla.lang.get("pages.cart.has_free_shipping"):salla.lang.get("pages.cart.free_shipping_alert",{amount:salla.money(e.free_shipping_bar.remaining)}),app.freeShippingBar.children[0].style.width=e.free_shipping_bar.percent+"%"}}},{key:"updateItemInfo",value:function(e){var t=document.querySelector("#item-"+e.id);if(t){var n=t.querySelector(".item-total"),o=t.querySelector(".item-price"),r=t.querySelector(".item-regular-price"),i=t.querySelector(".offer-name"),a=t.querySelector(".offer-icon"),p=e.offer||e.special_price>0,u=salla.money(e.total);u!==n.innerText&&(n.innerText=u,app.anime(n,{scale:[.88,1]})),app.toggleElementClassIf(i,"offer-applied","hidden",(function(){return p})).toggleElementClassIf(a,"offer-applied","hidden",(function(){return p})).toggleElementClassIf(r,"offer-applied","hidden",(function(){return p})).toggleElementClassIf(o,"text-red-400","text-sm text-gray-400",(function(){return p})),o.innerText=salla.money(e.price),p&&(i.innerText=e.offer.names,r.innerText=salla.money(e.product_price))}else salla.log("Can't get the cart item dom for ".concat(e.id,"!"))}},{key:"initiateCoupon",value:function(){var e=this;app.couponCodeInput&&(app.onKeyUp(app.couponCodeInput,(function(e){13===e.keyCode&&app.couponBtn.click(),app.couponError.value="",app.removeClass(app.couponCodeInput,"has-error")})),app.onClick(app.couponBtn,(function(t){var n=app.couponBtn.classList.contains("btn--danger"),o=t.currentTarget;n||app.couponCodeInput.value.length?o.load().then((function(){return n?salla.cart.deleteCoupon():salla.cart.addCoupon(app.couponCodeInput.value)})).then((function(t){return e.toggleCoupon(t,!n)})).catch((function(t){var o;return e.showCouponError(null===(o=t.response)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.error.message,!n)})).finally((function(){return o.stop()})):e.showCouponError("* "+salla.lang.get("pages.checkout.enter_coupon"))})))}},{key:"toggleCoupon",value:function(e,t){app.couponError.innerText="",app.couponCodeInput.value=t?app.couponCodeInput.value:"",app.couponCodeInput.toggleAttribute("disabled",t),app.toggleElementClassIf(app.couponBtn,["btn--danger","has-coupon"],["btn-default","has-not-coupon"],(function(){return t})).toggleElementClassIf(app.couponBtn,["btn-default","has-not-coupon"],["btn--danger","has-coupon"],(function(){return!t})).hideElement(app.couponBtn.querySelector(t?"span":"i")).showElement(app.couponBtn.querySelector(t?"i":"span")).removeClass(app.couponCodeInput,"has-error")}},{key:"showCouponError",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];app.couponError.innerText=e||salla.lang.get("pages.checkout.error_occurred"),t&&app.addClass(app.couponCodeInput,"has-error")}}]),c}(p(643).Z).initiateWhenReady(["cart"]),(()=>{var e=p(671),t=p(144),n=p(136),o=p(963),r=p(120);(function(i){(0,n.Z)(c,i);var a,p,u=(a=c,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,r.Z)(a);if(p){var n=(0,r.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,o.Z)(this,e)});function c(){return(0,e.Z)(this,c),u.apply(this,arguments)}return(0,t.Z)(c,[{key:"onReady",value:function(){app.anime(".thanks-item",{translateX:[20,0]});var e=document.querySelector("#invoice-form");salla.order.event.onInvoiceSent((function(t){e.innerHTML=t.data.message,e.classList.add("sent")}))}}]),c})(p(643).Z).initiateWhenReady(["thank-you"])})()})();