(this.webpackJsonpMasonary=this.webpackJsonpMasonary||[]).push([[0],{36:function(n,e,t){n.exports=t(75)},74:function(n,e,t){},75:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(27),l=t.n(i),o=t(11),c=t(5),s=t(2),m=t(3),u=t(28),d=t.n(u);function p(){var n=Object(s.a)(['\n  font-family: "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";\n  margin-bottom: 1em;\n']);return p=function(){return n},n}function f(){var n=Object(s.a)(["\n  max-width: 50rem;\n  margin: 1rem auto;\n  text-align: center;\n"]);return f=function(){return n},n}var h=m.b.header(f()),g=m.b.h1(p()),b=function(){return r.a.createElement(d.a,{className:"lead"},r.a.createElement(h,null,r.a.createElement(g,null,"Unsplash Photo Feed"),r.a.createElement("p",null,"A website dedicated to sharing stock photography under the Unsplash license. The website generates more than 17 billion photo impressions per month on their growing library of over 2 million photos."),r.a.createElement("p",null,"Created For : Yellow Class")))};function v(){var n=Object(s.a)([""]);return v=function(){return n},n}var x=m.b.img(v()),E=function(n){var e=n.url,t=n.key;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{key:t,src:e,alt:""}))};function y(){var n=Object(s.a)(["\n\ntext-align: center;\n.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #222;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n"]);return y=function(){return n},n}var w=m.b.div(y()),j=function(){return r.a.createElement(w,null,r.a.createElement("div",{class:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},O=t(32),k=t.n(O),N=t(33),S=t(34),F=t.n(S),M=t(9),z=t.n(M),T=t(35),C=t(10),U=t.n(C);function H(){var n=Object(s.a)(["\n.label {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.container {\n  padding-top:5px;\n  margin: 0 auto;\n  max-width: 1000px;\n  padding: 10px;\n}\n.form {\n  display: grid;\n}\n\n.input {\n  font-size: 1.6rem;\n  padding: 0.5rem 2rem;\n  line-height: 2.2rem;\n  border-radius: 20px;\n  background-color: white;\n  margin-bottom: 1rem;\n}\n\n\n.button {\n  padding: 8px 20px;\n  font-size: 24px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border: none;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.75);\n}\n\n.button:hover {background-color: #3e8e41}\n\n.button:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n\n.card {\n  margin-bottom: 1rem;\n  display: flex;\n}\n\n.card--image {\n  flex: 100%;\n  margin-top: 1rem;\n  border-radius: 10px;\n}\n\n.card-list {\n  column-count: 3;\n}\n@media (min-width: 768px) {\n  .form {\n      grid-template-columns: auto 1fr auto;\n      grid-gap: 1rem;\n      align-items: center;\n  }\n  .input {\n      margin-bottom: 0;\n      padding-right: 20px;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .card-list {\n      column-count: 1;\n  }\n  .form {\n    grid-gap: 0rem;\n    align-items: left;\n}\n"]);return H=function(){return n},n}var P=Object(m.a)(H()),_=new U.a({accessKey:"Hrz02H4_PT7nMaw25FlMEUdFRjG07OBj8Y1zeK1PTfA"});function A(){var n=Object(a.useState)(""),e=Object(c.a)(n,2),t=e[0],i=e[1],l=Object(a.useState)([]),o=Object(c.a)(l,2),s=o[0],m=o[1],u=function(){var n=Object(T.a)(z.a.mark((function n(e){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),_.search.photos(t).then(C.toJson).then((function(n){m(n.results)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement("form",{className:"form",onSubmit:u}," ",r.a.createElement("label",{className:"label",htmlFor:"query"}," ","\ud83d\udcf7"),r.a.createElement("input",{type:"text",name:"query",className:"input",placeholder:'Try "dog" or "apple"',value:t,onChange:function(n){return i(n.target.value)}}),r.a.createElement("button",{type:"submit",className:"button"},"Search")),r.a.createElement("div",{className:"card-list"},s.map((function(n){return r.a.createElement("div",{className:"card",key:n.id},r.a.createElement("img",{className:"card--image",alt:n.alt_description,src:n.urls.full,width:"50%",height:"50%"}))}))," "))}function B(){var n=Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 8px;\n  }\n  .title {\n    font-size: 2rem;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\n    margin-top:0px;\n  }\n  \n"]);return B=function(){return n},n}var G=Object(m.a)(B());var Y=function(){var n=Object(a.useState)([]),e=Object(c.a)(n,2),t=e[0],i=e[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e="https://api.unsplash.com",a="Hrz02H4_PT7nMaw25FlMEUdFRjG07OBj8Y1zeK1PTfA";k.a.get("".concat(e,"/photos/random?client_id=").concat(a,"&count=").concat(n)).then((function(n){i([].concat(Object(o.a)(t),Object(o.a)(n.data)))}))};return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Search Images"),r.a.createElement(A,null),r.a.createElement(b,null),r.a.createElement(G,null))),r.a.createElement(N.a,{dataLength:t.length,next:l,hasMore:!0,loader:r.a.createElement(j,null)},r.a.createElement(F.a,{breakpointCols:{default:6,1250:5,1200:5,1100:5,1150:5,1e3:4,992:4,900:3,768:3,705:2,576:1,525:1,420:1},className:"masonry-grid",columnClassName:"masonry-grid_column"},t.map((function(n){return r.a.createElement(E,{url:n.urls.thumb,key:n.id})})))))};t(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(74);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.0ccd620d.chunk.js.map