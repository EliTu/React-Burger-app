(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{119:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(16),i=a(120),l=a.n(i),o=a(11);t.a=Object(o.f)(function(e){var t=e.content,a=e.history,r=l.a.GoBackMessage;return n.a.createElement("div",{className:r},t,n.a.createElement(c.a,{handleClick:function(){return a.goBack()},type:"Danger"},"Go back"))})},120:function(e,t,a){e.exports={GoBackMessage:"GoBackMessage_GoBackMessage__2Qz-t"}},121:function(e,t,a){e.exports={DataHeader:"OrderData_DataHeader__270R7",Category:"OrderData_Category__3-RpM",Price:"OrderData_Price__1YunB"}},122:function(e,t,a){e.exports={OrderCard:"OrderCard_OrderCard__3Ny_V",dateStyle:"OrderCard_dateStyle__1N6ZK",toggleButton:"OrderCard_toggleButton__2OtgH",OrderId:"OrderCard_OrderId__1du2B",Order:"OrderCard_Order__2Vklf"}},123:function(e,t,a){e.exports={OrderPaginationPanel:"OrdersPaginationPanel_OrderPaginationPanel__1ulqA",pageContainer:"OrdersPaginationPanel_pageContainer__3FR8w",activePageStyle:"OrdersPaginationPanel_activePageStyle__1_SqV"}},124:function(e,t,a){e.exports={Orders:"Orders_Orders__2RKNz",OrdersContainer:"Orders_OrdersContainer__yJJxM",ControlsContainer:"Orders_ControlsContainer__3ls8s"}},131:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(5),c=a(0),i=a.n(c),l=a(4),o=a(59),s=a(121),u=a.n(s),d=function(e){var t=e.ingredients,a=e.contactData,r=e.delivery,n=e.price,c=u.a.Price,l=u.a.DataHeader,o=u.a.Category;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:l},"Ingredients:",i.a.createElement("ul",null,t.map(function(e){return e.quantity>0&&i.a.createElement("li",{key:e.ingredient},i.a.createElement("span",{className:o},e.ingredient),"x ",e.quantity)}))),i.a.createElement("div",{className:l},"Contact information:",i.a.createElement("ul",null,a.map(function(e){var t=Object.entries(e),a=t[0][0],r=t[0][1];return i.a.createElement("li",{key:a},i.a.createElement("span",{className:o},a,":"),""!==r?r:"n/a")}))),i.a.createElement("p",{className:l},i.a.createElement("span",{className:o},"Delivery method: "),r),i.a.createElement("p",{className:l},"Total price:",i.a.createElement("span",{className:c},"$",n)))};d.defaultProps={ingredients:[{ingredient:"N/A",quantity:"N/A"}],price:"N/A",orderId:"N/A"};var m=d,g=a(15),p=a(6),f=a(122),v=a.n(f),O=function(e){var t=e.ingredients,a=e.price,r=e.orderId,l=e.contact,s=e.delivery,u=e.date,d=Object(c.useState)(!1),f=Object(n.a)(d,2),O=f[0],E=f[1],y=v.a.OrderCard,b=v.a.dateStyle,C=v.a.toggleButton,_=[];for(var h in l)_.push(Object(o.a)({},h,l[h]));var k=r.replace(/[-!@#$ %^&* _(),.?":{}|<>]/g,"");return i.a.createElement("div",{className:y},i.a.createElement("p",null,"Order id: ",k),i.a.createElement("p",{className:b},u),i.a.createElement("button",{className:C,onClick:function(){return E(!O)}},i.a.createElement(g.a,{iconType:O?p.g:p.f,size:"2x"})),O&&i.a.createElement(m,{ingredients:t,contactData:_,delivery:s,price:a}))},E=a(123),y=a.n(E),b=function(e){var t=e.pages,a=e.pageNumberClick,r=e.nextPageClick,n=e.previousPageClick,c=e.firstPageClick,l=e.lastPageClick,o=e.currentPage,s=y.a.OrderPaginationPanel,u=y.a.pageContainer,d=y.a.activePageStyle;return i.a.createElement("div",{className:s},i.a.createElement("button",{onClick:c},i.a.createElement(g.a,{iconType:p.a,size:"2x"})),i.a.createElement("button",{onClick:n},i.a.createElement(g.a,{iconType:p.c,size:"2x"})),i.a.createElement("div",{className:u},t.map(function(e){return i.a.createElement("button",{className:e===o?d:null,key:e,id:e,onClick:function(e){return a(e)}},e)})),i.a.createElement("button",{onClick:r},i.a.createElement(g.a,{iconType:p.d,size:"2x"})),i.a.createElement("button",{onClick:l},i.a.createElement(g.a,{iconType:p.b,size:"2x"})))},C=a(21),_=a(55),h=a(119),k=[{data:"sortBy",elementType:"select",elementConfig:{options:[{value:"",displayValue:"Please select a sorting method",disabled:!0},{value:"NEWEST",displayValue:"Newest"},{value:"OLDEST",displayValue:"Oldest"},{value:"PRICE",displayValue:"Price"},{value:"DELIVERY",displayValue:"Delivery method"}],label:"Sort orders by:"},value:"",validation:{required:!1,valid:!0,errorMessage:""}},{data:"search",elementType:"input",elementConfig:{type:"text",placeholder:"Enter anything here",label:"Search an order ID:"},value:"",validation:{required:!1,hasUserInput:!1,valid:!0,errorMessage:""}}],P=a(19),j=a.n(P),N=a(25),T=a(35),x=a(40),D=function(e){return{type:x.c,orders:e}},S=a(124),I=a.n(S);a.d(t,"Orders",function(){return w});var w=function(e){var t=e.orders,a=e.isLoadingRequest,l=e.isLoggedIn,o=e.idToken,s=e.userId,u=e.onFetchOrders,d=I.a.Orders,m=I.a.OrdersContainer,g=I.a.ControlsContainer,p=Object(c.useState)(k[0]),f=Object(n.a)(p,2),v=f[0],E=f[1],y=Object(c.useState)(k[1]),P=Object(n.a)(y,2),j=P[0],N=P[1],T=Object(c.useState)(5),x=Object(n.a)(T,1)[0],D=Object(c.useState)(1),S=Object(n.a)(D,2),w=S[0],B=S[1],M=Object(c.useState)([]),R=Object(n.a)(M,2),q=R[0],L=R[1],V=Object(c.useState)([]),F=Object(n.a)(V,2),z=F[0],A=F[1];Object(c.useEffect)(function(){l&&u(o,s)},[o,u,s,l]);var G=function(e,t){switch(e){case"NEWEST":return t.sort(function(e,t){return new Date(t.date)-new Date(e.date)});case"OLDEST":return t.sort(function(e,t){return new Date(e.date)-new Date(t.date)});case"PRICE":return t.sort(function(e,t){return t.price-e.price});case"DELIVERY":return t.sort(function(e,t){return e.deliveryMethod.localeCompare(t.deliveryMethod)});default:return t}}(v.value,t);Object(c.useEffect)(function(){A(G)},[t,v.value,G]),Object(c.useEffect)(function(){var e=function(e){var a=new RegExp(e,"gi");return t.filter(function(e){return e.id?e.id.match(a):t})}(j.value);A(e)},[t,j.value]),Object(c.useEffect)(function(){!function(){var e=w*x,a=e-x;A(t.slice(a,e))}();!function(){for(var e=[],a=1;a<=Math.ceil(t.length/x);a++)e.push(a),L(e)}()},[w,t,t.length,x]);var H=l||a?"No previous orders found.":"The Orders area is for members only! in order to review your previous orders, please sign in as a member first";return i.a.createElement("div",{className:d},i.a.createElement("h1",null,"Your orders:"),a?i.a.createElement(C.a,null):!a&&t.length>0&&l?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:m},i.a.createElement("div",{className:g},i.a.createElement(_.a,{elementType:v.elementType,elementConfig:Object(r.a)({},v.elementConfig),value:v.value,key:v.data,validation:Object(r.a)({},v.validation),handleChange:function(e){return function(e){var t=Object(r.a)({},v);t.value=e.target.value,E(t)}(e)}}),i.a.createElement(_.a,{data:j.data,elementType:j.elementType,elementConfig:Object(r.a)({},j.elementConfig),value:j.value,key:j.data,validation:Object(r.a)({},j.validation),handleChange:function(e){return function(e){var t=Object(r.a)({},j);t.value=e.target.value,N(t)}(e)}})),i.a.createElement(b,{pages:q,currentPage:w,pageNumberClick:function(e){return B(+e.target.id)},nextPageClick:function(){return w<+q.length&&B(w+1)},previousPageClick:function(){return w>1&&B(w-1)},firstPageClick:function(){return B(1)},lastPageClick:function(){return B(q.length)}}),z.map(function(e){return e.id&&e.ingredients&&e.price&&i.a.createElement(O,{key:e.id,orderId:e.id,date:e.date,ingredients:e.ingredients,contact:e.customer,delivery:e.deliveryMethod,price:e.price.toFixed(2)})}))):i.a.createElement(h.a,{content:H}))};t.default=Object(l.b)(function(e){return{orders:e.orderForm.orders,isLoadingRequest:e.orderForm.isLoading,isLoggedIn:e.auth.isLoggedIn,idToken:e.auth.idToken,userId:e.auth.userId}},function(e){return{onFetchOrders:function(t,a){return e(function(e,t){return function(){var a=Object(N.a)(j.a.mark(function a(n){var c,i,l,o;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:x.b}),a.prev=1,c="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"'),a.next=5,T.a.get("/orders.json".concat(c));case 5:for(o in i=a.sent,l=[],i.data)l.push(Object(r.a)({},i.data[o],{id:o}));n(D(l)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),n({type:x.a});case 14:case"end":return a.stop()}},a,null,[[1,11]])}));return function(e){return a.apply(this,arguments)}}()}(t,a))}}})(Object(c.memo)(w))}}]);
//# sourceMappingURL=3.e695fc25.chunk.js.map