(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{119:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(16),l=a(120),c=a.n(l),o=a(11);t.a=Object(o.f)(function(e){var t=e.content,a=e.history,n=c.a.GoBackMessage;return r.a.createElement("div",{className:n},r.a.createElement("p",null,t),r.a.createElement(i.a,{handleClick:function(){return a.goBack()},type:"Danger"},"Go back"))})},120:function(e,t,a){e.exports={GoBackMessage:"GoBackMessage_GoBackMessage__2Qz-t"}},126:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__2mwwu",BurgerDisplay:"CheckoutSummary_BurgerDisplay__1bRid",Price:"CheckoutSummary_Price__1Z8VQ"}},127:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__1i8t2"}},128:function(e,t,a){e.exports={Checkout:"Checkout_Checkout__1sKAQ",CheckoutHeader:"Checkout_CheckoutHeader__3JZxh"}},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a(4),c=a(72),o=a(16),u=a(119),s=function(e){return e?e.some(function(e){return e.quantity>0}):null},d=a(126),m=a.n(d),p=Object(l.b)(function(e){return{totalPrice:e.burgerBuilder.totalPrice,isLoggedIn:e.auth.isLoggedIn}})(Object(i.f)(function(e){var t=e.cancelClick,a=e.checkoutClick,n=e.ingredients,i=e.totalPrice,l=e.isLoggedIn,d=e.history,p=m.a.CheckoutSummary,h=m.a.BurgerDisplay,g=m.a.Price,v=s(n),f=d.location.pathname;return r.a.createElement("div",{className:p},v&&l?r.a.createElement("div",{className:h},r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Total price:",r.a.createElement("span",{className:g},"$",i.toFixed(2))),r.a.createElement(c.a,{ingredients:n}))):r.a.createElement(u.a,{content:"It seems like no ingredients were selected! Please select burger ingredients in order to checkout"}),v&&l&&r.a.createElement(r.a.Fragment,null,"/checkout/contact-data"!==f&&r.a.createElement(o.a,{handleClick:a,type:"Confirm"},"Continue"),r.a.createElement(o.a,{handleClick:t,type:"Danger"},"Cancel")))})),h=a(3),g=a(19),v=a.n(g),f=a(25),y=a(12),b=a(5),k=a(35),C=a(39),E=function(e){return{type:C.c,orderData:e}},O=a(21),_=a(55),j=[{data:"name",elementType:"input",elementConfig:{type:"text",placeholder:"Enter your name",label:"*Name:"},value:"",validation:{required:!0,hasUserInput:!1,valid:!1,errorMessage:"Please enter a name"}},{data:"phone",elementType:"input",elementConfig:{type:"number",min:0,placeholder:"Enter your phone number",label:"*Phone number:"},value:"",validation:{required:!0,hasUserInput:!1,valid:!1,errorMessage:"Please enter a valid phone number"}},{data:"email",elementType:"input",elementConfig:{type:"email",placeholder:"Enter your email",label:"*Email:"},value:"",validation:{required:!0,emailValidationRegExp:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,hasUserInput:!1,valid:!1,errorMessage:"Please enter a valid email address"}},{data:"address",elementType:"input",elementConfig:{type:"text",placeholder:"Enter your address",label:"*Address:"},value:"",validation:{required:!0,hasUserInput:!1,valid:!1,errorMessage:"Please enter a valid address"}},{data:"postal",elementType:"input",elementConfig:{type:"text",placeholder:"Enter your postal code",label:"*Postal code:"},value:"",validation:{required:!0,hasUserInput:!1,valid:!1,errorMessage:"Please enter a valid postal code"}},{data:"deliveryMethod",elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}],label:"Delivery Method:"},value:"fastest",validation:{required:!0,valid:!0}},{data:"requests",elementType:"textarea",elementConfig:{type:"textarea",placeholder:"Please specify any additional requests or comments you might have",label:"Additional requests:"},value:"",validation:{required:!1,valid:!0}}],P=a(69),x=a(56),I=a(57),D=a(127),w=a.n(D),T=Object(l.b)(function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,isLoadingRequest:e.orderForm.isLoading,idToken:e.auth.idToken,isLoggedIn:e.auth.isLoggedIn,email:e.auth.email,userId:e.auth.userId}},function(e){return{onOrderClick:function(t,a,n){return e(function(e,t,a){return function(){var n=Object(f.a)(v.a.mark(function n(r){return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:C.b}),n.prev=1,n.next=4,k.a.post("/orders.json?auth=".concat(a),e);case 4:r(E(e)),t("/"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),r((n.t0,{type:C.a}));case 11:case"end":return n.stop()}},n,null,[[1,8]])}));return function(e){return n.apply(this,arguments)}}()}(t,a,n))}}})(Object(P.a)(function(e){var t=e.ingredients,a=e.totalPrice,i=e.isLoadingRequest,l=e.email,c=e.isLoggedIn,u=e.userId,d=e.idToken,m=e.onOrderClick,p=e.history,g=Object(n.useState)(t),k=Object(b.a)(g,1)[0],C=Object(n.useState)(a),E=Object(b.a)(C,1)[0],P=Object(n.useState)(!1),D=Object(b.a)(P,2),T=D[0],q=D[1],B=Object(I.a)(j),M=Object(b.a)(B,5),S=M[0],L=M[2],F=M[4];!function(){if(c&&l){var e=Object(y.a)(S);e[2].value=l,e[2].validation.valid=!0,e[2].validation.hasUserInput=!0}}();var N=function(){var e=Object(f.a)(v.a.mark(function e(t){var a,n,r,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),L){e.next=4;break}return q(!0),e.abrupt("return");case 4:a=(new Date).toDateString(),n=(new Date).toLocaleTimeString(),r=Object(y.a)(S),i={date:"".concat(a,", ").concat(n),userId:u,ingredients:k,price:E,customer:{name:r[0].value,phone:r[1].value,email:r[2].value,address:r[3].value,postal:r[4].value,requests:r[6].value},deliveryMethod:r[5].value},m(i,p.replace,d);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),U=s(t),A=w.a.ContactData;return r.a.createElement(r.a.Fragment,null,c&&U&&r.a.createElement("div",{className:A},r.a.createElement("h3",null,"Enter your contact information:"),i&&L?r.a.createElement(O.a,null):r.a.createElement("form",{action:"post",onSubmit:N},S.map(function(e,t){return r.a.createElement(_.a,{key:e.data,focused:0===t,elementType:e.elementType,elementConfig:e.elementConfig,validation:Object(h.a)({},e.validation),value:e.value,handleChange:function(t){return F(t,e.data)},handleEnterPress:N})})),r.a.createElement(o.a,{type:T?"Danger":"Confirm",handleClick:N},"Confirm Order"),T&&r.a.createElement(x.a,{errorType:"emptyFields"})))},k.a)),q=a(128),B=a.n(q);a.d(t,"Checkout",function(){return M});var M=function(e){var t=e.ingredients,a=e.history,n=e.match,l=B.a.Checkout,c=B.a.CheckoutHeader;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:c},"Your burger:"),r.a.createElement("div",{className:l},r.a.createElement(p,{ingredients:t,cancelClick:function(){return a.goBack()},checkoutClick:function(){return a.replace("/checkout/contact-data")}}),r.a.createElement(i.a,{path:"".concat(n.path,"/contact-data"),component:T})))};t.default=Object(l.b)(function(e){return{ingredients:e.burgerBuilder.ingredients}})(M)}}]);
//# sourceMappingURL=4.3706ce71.chunk.js.map