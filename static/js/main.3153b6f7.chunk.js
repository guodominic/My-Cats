(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(20),a=n.n(r),o=n(4),s=n(2),i=n(3);var l=function(e){var t=e.name,n=e.email,c=e.id,r=Object(s.m)();return Object(i.jsxs)("div",{onClick:function(){!function(e){r("/My-Cats/".concat(e))}(c)},className:"tc grow bg-yellow br3 pa3 ma2 dib bw2 shadow-5 pointer",children:[Object(i.jsx)("img",{alt:"cats",src:"https://robohash.org/".concat(c+200,"?set=set4"),width:"200",height:"200"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{className:"gray",children:t}),Object(i.jsx)("p",{className:"gray underline",children:n})]})]})};var h=function(e){var t=e.cats;return Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(l,{id:e.id,name:e.name.substring(0,14),email:e.email.substring(0,22)},e.id)}))})};var j=function(e){var t=e.searchChange;return Object(i.jsx)("div",{children:Object(i.jsx)("input",{className:"pa2 br3 ba b--yellow",type:"search",placeholder:"Find Cats",onChange:t})})};var u=function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"0px solid white",height:"900px"},children:e.children})};n(28);var b=function(e){var t=e.clickChange,n=e.colorOneChange,c=e.colorTwoChange,r=e.colorOne,a=e.colorTwo;return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{className:"color1 br3 b--white dim pointer measure-wide",type:"color",value:r,onChange:n}),Object(i.jsx)("input",{className:"button1 pt2 br3 ba b--white purple grow pointer",type:"button",value:"Random Background",onClick:t}),Object(i.jsx)("input",{className:"color2 br3 b--white dim pointer",type:"color",value:a,onChange:c}),Object(i.jsx)("h3",{className:"white f6"})]})},d=n(8),f=n(10),O=n(11),m=n(12),g=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).setState={hasError:!1},c}return Object(f.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.setState.hasError?Object(i.jsx)("h1",{children:"Oooops. something went wrong"}):this.props.children}}]),n}(c.Component),p=n(17),x=n(21),v=function(e){var t=e.cats,n=Object(s.o)().id,r=Object(s.m)(),a=Object(c.useState)([]),l=Object(o.a)(a,2),h=l[0],j=l[1],u=Object(c.useState)([]),b=Object(o.a)(u,2),d=b[0],f=b[1],O=Object(c.useState)(!0),m=Object(o.a)(O,2),g=m[0],p=m[1],v=Math.floor(241*Math.random()),y="his";y=g?"his":"her";Object(c.useEffect)((function(){var e=n-1;n>97&&(e=Math.floor(98*Math.random())),fetch("https://catfact.ninja/breeds?limit=100").then((function(e){return e.json()})).then((function(t){j(t.data[e])}))}),[n]);var w=function(){fetch("https://catfact.ninja/facts?limit=241&max_length=140").then((function(e){return e.json()})).then((function(e){f(e.data[v])}))};return Object(c.useEffect)((function(){w()}),[n]),Object(i.jsxs)("div",{children:[Object(i.jsxs)(x.a,{sizes:[50,50],direction:"horizontal",style:{display:"flex"},children:[Object(i.jsx)("div",{onClick:function(){return r("/My-Cats")},className:"bg-green br4 pa3 mt4 mb3 ml3 mr2 shadow-5 pointer",children:Object(i.jsx)("img",{alt:"cats",src:"https://robohash.org/".concat(n,"?set=set4"),width:"200",height:"200"})}),Object(i.jsxs)("div",{className:"f7 bg-orange purple tc catInfo shadow-5 pointer",onClick:function(){p(!g)},children:[Object(i.jsxs)("h1",{children:["About ",t[n-1].name.substring(0,14)]}),Object(i.jsxs)("h2",{children:["The breed of ",t[n-1].name.substring(0,14)," is ",h.breed,", ",y," country is ",h.country,"and and ",y," oringin is ",h.origin,";  ",y," coat is ",h.coat," with pattern of ",h.pattern,"."]})]})]}),Object(i.jsxs)("div",{className:"f7 bg-blue yellow tc catInfo grow ma5 shadow-5 pointer",onClick:w,children:[Object(i.jsx)("h1",{children:"Fun Fact about Cats"}),Object(i.jsxs)("h2",{children:["Random Cat Fact: ",d.fact]})]})]})};var y=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),l=Object(o.a)(a,2),d=l[0],f=l[1],O=Object(c.useState)("#f6f948"),m=Object(o.a)(O,2),x=m[0],y=m[1],w=Object(c.useState)("#be47f5"),C=Object(o.a)(w,2),k=C[0],S=C[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/comments").then((function(e){return e.json()})).then((function(e){r(e)}))}),[x,k]);var N=function(){var e=document.querySelector("h3");document.querySelector("body").style.background="linear-gradient(to right top, "+x+", "+k+")",e.textContent=x+" \ud83d\udc48\ud83c\udffb ColorCode \ud83d\udc49\ud83c\udffb "+k},M=n.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));document.querySelector("body").style.background="linear-gradient(to right, "+x+", "+k+")";var E=(new Date).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"});return n.length?Object(i.jsx)(p.a,{children:Object(i.jsxs)("div",{className:"tc pa1",children:[Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(i.jsxs)("h2",{className:"white f4",style:{position:"absolute",right:"10px"},children:[E," "]}),Object(i.jsx)("h1",{className:"f1 white",children:"MY CATS"})]}),Object(i.jsx)(j,{searchChange:function(e){f(e.target.value)}}),Object(i.jsx)("div",{className:"br3 shadow-5 pt3",style:{display:"inline-block",justifyContent:"center"},children:Object(i.jsx)(b,{clickChange:function(){for(var e="0123456789ABCDEF",t="#",n="#",c=0;c<6;c++)t+=e[Math.floor(16*Math.random())],n+=e[Math.floor(16*Math.random())];y(t),S(n),document.querySelector(".color1").style.background=n,document.querySelector(".color2").style.background=t,N()},colorOneChange:function(e){y(e.target.value),document.querySelector(".color2").style.background=x,N()},colorTwoChange:function(e){S(e.target.value),document.querySelector(".color1").style.background=k,N()},colorOne:x,colorTwo:k})}),Object(i.jsx)(u,{children:Object(i.jsx)(g,{children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{path:"/My-Cats",element:Object(i.jsx)(h,{cats:M})}),Object(i.jsx)(s.a,{path:"/My-Cats/:id",element:Object(i.jsx)(v,{cats:n})})]})})})]})}):Object(i.jsx)("p",{children:"..."})},w=(n(31),document.getElementById("root"));a.a.render(Object(i.jsx)(y,{}),w),setInterval((function(){a.a.render(Object(i.jsx)(y,{}),w)}),6e4)}},[[32,1,2]]]);
//# sourceMappingURL=main.3153b6f7.chunk.js.map