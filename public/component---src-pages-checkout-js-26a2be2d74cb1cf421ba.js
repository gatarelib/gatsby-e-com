(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},UxAK:function(e,t,n){"use strict";n.r(t);n("VRzm"),n("Btvt"),n("xfY5");var r=n("o0o1"),a=n.n(r),o=(n("ls82"),n("f3/d"),n("91GP"),n("q1tI")),c=n.n(o),l=n("9E3W"),s=n("XCaG"),i=n("ma3e"),u=n("Wbzz"),m=n("5Epl"),p=n("xk4V"),f=n.n(p),d=n("eWwy");n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("rE2o"),n("ioFf"),n("rGqo"),n("LK8F");function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h="https://js.stripe.com/v3",v=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,E="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",b=null,g=function(e){return null!==b?b:b=new Promise((function(t,n){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(E),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(h,'"]')),t=0;t<e.length;t++){var n=e[t];if(v.test(n.src))return n}return null}();r&&e?console.warn(E):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(h).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(a){return void n(a)}else t(null)}))},x=function(e,t){if(null===e)return null;var n=e.apply(void 0,y(t));return function(e){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.5.0"})}(n),n},w=Promise.resolve().then((function(){return g(null)})),j=!1;w.catch((function(e){j||console.warn(e)}));function N(e,t,n,r,a,o,c){try{var l=e[o](c),s=l.value}catch(i){return void n(i)}l.done?t(s):Promise.resolve(s).then(r,a)}var S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return j=!0,w.then((function(e){return x(e,t)}))}("pk_test_DvXwcKnVaaZUpWJIbh9cjgZr00IjIAjZAA");var C=function(e){var t=e.onChange,n=e.value,r=e.name,a=e.placeholder;return c.a.createElement("input",{onChange:t,value:n,className:"mt-2 text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:a,name:r})},O=function(e){var t,n,r=e.context,l=Object(o.useState)(null),p=l[0],y=l[1],h=Object(o.useState)(!1),v=h[0],E=h[1],b=Object(o.useState)({name:"",email:"",street:"",city:"",postal_code:"",state:""}),g=b[0],x=b[1],w=Object(d.useStripe)(),j=Object(d.useElements)(),S=function(e){var t;y(null),x(Object.assign(Object.assign({},g),{},((t={})[e.target.name]=e.target.value,t)))},O=function(){var e,t=(e=a.a.mark((function e(t){var n,o,c,l,s,i,u,m,p,h,v,b,x;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=g.name,o=g.email,c=g.street,l=g.city,s=g.postal_code,i=g.state,u=r.total,m=r.clearCart,w&&j){e.next=5;break}return e.abrupt("return");case 5:if(c&&l&&s&&i){e.next=8;break}return y("Please fill in the form!"),e.abrupt("return");case 8:return p=j.getElement(d.CardElement),e.next=11,w.createPaymentMethod({type:"card",card:p,billing_details:{name:n}});case 11:if(h=e.sent,v=h.error,b=h.paymentMethod,!v){e.next=17;break}return y(v.message),e.abrupt("return");case 17:x={email:o,amount:u,address:i,payment_method_id:b.id,receipt_email:"customer@example.com",id:f()()},console.log("order: ",x),E(!0),m();case 21:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){N(o,r,a,c,l,"next",e)}function l(e){N(o,r,a,c,l,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),k=r.numberOfItemsInCart,P=r.cart,_=r.total,R=k===Number(0);return v?c.a.createElement("div",null,c.a.createElement("h3",null,"Thanks! Your order has been successfully processed.")):c.a.createElement("div",{className:"flex flex-col items-center pb-10"},c.a.createElement("div",{className:" flex flex-col w-full c_large:w-c_large "},c.a.createElement("div",{className:"pt-10 pb-8"},c.a.createElement("h1",{className:"text-5xl font-light"},"Checkout"),c.a.createElement(u.Link,{to:"/cart"},c.a.createElement("div",{className:"cursor-pointer flex"},c.a.createElement(i.b,{className:"mr-2 text-gray-600 mt-1"}),c.a.createElement("p",{className:"text-gray-600 text-sm"},"Edit Cart")))),R?c.a.createElement("h3",null,"No items in cart."):c.a.createElement("div",{className:"flex flex-col"},c.a.createElement("div",{className:""},P.map((function(e,t){return c.a.createElement("div",{className:"border-b py-10",key:t},c.a.createElement("div",{className:"flex items-center"},c.a.createElement(m.a,{className:"w-32 m-0",src:e.image,alt:e.name}),c.a.createElement("p",{className:"m-0 pl-10 text-gray-600 text-sm"},e.name),c.a.createElement("div",{className:"flex flex-1 justify-end"},c.a.createElement("p",{className:"m-0 pl-10 text-gray-900 tracking-tighter font-semibold"},s.a+e.price))))}))),c.a.createElement("div",{className:"flex flex-1 flex-col md:flex-row"},c.a.createElement("div",{className:"flex flex-1 pt-8 flex-col"},c.a.createElement("div",{className:"mt-4 border-t pt-10"},c.a.createElement("form",{onSubmit:O},p?c.a.createElement("span",null,p):"",c.a.createElement(C,{onChange:S,value:g.name,name:"name",placeholder:"Cardholder name"}),c.a.createElement(d.CardElement,{className:"mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}),c.a.createElement(C,{onChange:S,value:g.email,name:"email",placeholder:"Email"}),c.a.createElement(C,{onChange:S,value:g.street,name:"street",placeholder:"Street"}),c.a.createElement(C,{onChange:S,value:g.city,name:"city",placeholder:"City"}),c.a.createElement(C,{onChange:S,value:g.state,name:"state",placeholder:"State"}),c.a.createElement(C,{onChange:S,value:g.postal_code,name:"postal_code",placeholder:"Postal Code"}),c.a.createElement("button",((t={type:"submit",disabled:!w,onClick:O,className:"hidden md:block bg-secondary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"}).type="button",t),"Confirm order")))),c.a.createElement("div",{className:"md:pt-20"},c.a.createElement("div",{className:"ml-4 pl-2 flex flex-1 justify-end pt-2 md:pt-8 pr-4"},c.a.createElement("p",{className:"text-sm pr-10"},"Subtotal"),c.a.createElement("p",{className:"tracking-tighter w-38 flex justify-end"},s.a+_)),c.a.createElement("div",{className:"ml-4 pl-2 flex flex-1 justify-end pr-4"},c.a.createElement("p",{className:"text-sm pr-10"},"Shipping"),c.a.createElement("p",{className:"tracking-tighter w-38 flex justify-end"},"FREE SHIPPING")),c.a.createElement("div",{className:"md:ml-4 pl-2 flex flex-1 justify-end bg-gray-200 pr-4 pt-6"},c.a.createElement("p",{className:"text-sm pr-10"},"Total"),c.a.createElement("p",{className:"font-semibold tracking-tighter w-38 flex justify-end"},s.a+(_+0))),c.a.createElement("button",((n={type:"submit",disabled:!w,onClick:O,className:"md:hidden bg-secondary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"}).type="button",n),"Confirm order"))))))};t.default=function(e){return c.a.createElement(l.a,null,c.a.createElement(l.b.Consumer,null,(function(t){return c.a.createElement(d.Elements,{stripe:S},c.a.createElement(O,Object.assign({},e,{context:t})))})))}},eWwy:function(e,t,n){n("HAE/"),n("VRzm"),n("f3/d"),n("a1Th"),n("h7Nl"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("rE2o"),n("ioFf"),function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(){}function c(){}t=t&&t.hasOwnProperty("default")?t.default:t,c.resetWarningCache=o;var l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,n,r,a,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return n.PropTypes=n,n}()})),s=function(e){return null!==e&&"object"===n(e)},i=function e(t,n){if(!s(t)||!s(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var a="[object Object]"===Object.prototype.toString.call(t);if(a!==("[object Object]"===Object.prototype.toString.call(n)))return!1;if(!a&&!r)return!1;var o=Object.keys(t),c=Object.keys(n);if(o.length!==c.length)return!1;for(var l={},i=0;i<o.length;i+=1)l[o[i]]=!0;for(var u=0;u<c.length;u+=1)l[c[u]]=!0;var m=Object.keys(l);if(m.length!==o.length)return!1;var p=t,f=n;return m.every((function(t){return e(p[t],f[t])}))},u=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},m=function(e){if(null===e||s(t=e)&&"function"==typeof t.elements&&"function"==typeof t.createToken&&"function"==typeof t.createPaymentMethod&&"function"==typeof t.confirmCardPayment)return e;var t;throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},p=function(e){if(function(e){return s(e)&&"function"==typeof e.then}(e))return{tag:"async",stripePromise:Promise.resolve(e).then(m)};var t=m(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},f=t.createContext(null);f.displayName="ElementsContext";var d=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(f),e)},y=function(e){return(0,e.children)(d("mounts <ElementsConsumer>"))};y.propTypes={children:l.func.isRequired};var h=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},v=function(e){return s(e)?(e.paymentRequest,r(e,["paymentRequest"])):{}},E=function(){},b=function(e,n){var r,a="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),o=n?function(e){d("mounts <".concat(a,">"));var n=e.id,r=e.className;return t.createElement("div",{id:n,className:r})}:function(n){var r=n.id,o=n.className,c=n.options,l=void 0===c?{}:c,s=n.onBlur,u=void 0===s?E:s,m=n.onFocus,p=void 0===m?E:m,f=n.onReady,y=void 0===f?E:f,b=n.onChange,g=void 0===b?E:b,x=n.onEscape,w=void 0===x?E:x,j=n.onClick,N=void 0===j?E:j,S=d("mounts <".concat(a,">")).elements,C=t.useRef(null),O=t.useRef(null),k=h(y),P=h(u),_=h(p),R=h(N),A=h(g),T=h(w);t.useLayoutEffect((function(){if(null==C.current&&S&&null!=O.current){var t=S.create(e,l);C.current=t,t.mount(O.current),t.on("ready",(function(){return k(t)})),t.on("change",A),t.on("blur",P),t.on("focus",_),t.on("escape",T),t.on("click",R)}}));var I=t.useRef(l);return t.useEffect((function(){I.current&&I.current.paymentRequest!==l.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=v(l);0===Object.keys(e).length||i(e,v(I.current))||C.current&&(C.current.update(e),I.current=l)}),[l]),t.useEffect((function(){return function(){C.current&&C.current.destroy()}}),[]),t.createElement("div",{id:r,className:o,ref:O})};return o.propTypes={id:l.string,className:l.string,onChange:l.func,onBlur:l.func,onFocus:l.func,onReady:l.func,onClick:l.func,options:l.object},o.displayName=a,o.__elementType=e,o},g="undefined"==typeof window,x=b("auBankAccount",g),w=b("card",g),j=b("cardNumber",g),N=b("cardExpiry",g),S=b("cardCvc",g),C=b("fpxBank",g),O=b("iban",g),k=b("idealBank",g),P=b("paymentRequestButton",g);e.AuBankAccountElement=x,e.CardCvcElement=S,e.CardElement=w,e.CardExpiryElement=N,e.CardNumberElement=j,e.Elements=function(e){var n=e.stripe,r=e.options,o=e.children,c=t.useRef(!1),l=t.useRef(!0),s=t.useMemo((function(){return p(n)}),[n]),m=a(t.useState((function(){return{stripe:null,elements:null}})),2),d=m[0],y=m[1],h=u(n),v=u(r);return null!==h&&(h!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),i(r,v)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),c.current||("sync"===s.tag&&(c.current=!0,y({stripe:s.stripe,elements:s.stripe.elements(r)})),"async"===s.tag&&(c.current=!0,s.stripePromise.then((function(e){e&&l.current&&y({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){l.current=!1}}),[]),t.useEffect((function(){var e=d.stripe;e&&e._registerWrapper&&e._registerWrapper({name:"react-stripe-js",version:"1.1.2"})}),[d.stripe]),t.createElement(f.Provider,{value:d},o)},e.ElementsConsumer=y,e.FpxBankElement=C,e.IbanElement=O,e.IdealBankElement=k,e.PaymentRequestButtonElement=P,e.useElements=function(){return d("calls useElements()").elements},e.useStripe=function(){return d("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,n("q1tI"))}}]);
//# sourceMappingURL=component---src-pages-checkout-js-26a2be2d74cb1cf421ba.js.map