(this["webpackJsonpdrink-menu"]=this["webpackJsonpdrink-menu"]||[]).push([[0],{57:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var r,a,c,i,s,o,j,d,l,u,p=t(2),f=t.n(p),b=t(44),x=t.n(b),O=(t(57),t(13)),h=t(6),m=t(4),g=t(9),k=t.n(g),v=t(16),y=t(7),F=t(17),w=t.n(F),S=t(5),C=t(45),z=t.n(C),D=(t(59),t(0)),I=function(e){var n=e.drink;return Object(p.useEffect)((function(){z.a.init({duration:1e3})}),[]),Object(D.jsxs)(E,{"data-aos":"zoom-in",children:[Object(D.jsxs)(M,{children:[Object(D.jsx)(A,{src:"https://drink-menu.adaptable.app/".concat(n.imageName),"data-aos":"fade-right"}),Object(D.jsxs)(T,{"data-aos":"fade-left",children:[n.price,"$"]})]}),Object(D.jsx)(L,{children:n.drinkName})]})},E=S.a.div(r||(r=Object(m.a)(["\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            margin: 20px 0 20px 0;\n            background: #FFFFFF;\n            border-radius: 100% 25% 25% 25%/ 80% 25% 25% 25% ;\n            width: 160px;\n"]))),M=S.a.div(a||(a=Object(m.a)(["\n            display: flex;\n"]))),T=S.a.div(c||(c=Object(m.a)(["\n            font-size: 25px;\n            margin: 20px 10px 0  0;\n"]))),A=S.a.img(i||(i=Object(m.a)(["\n            width: 100px;\n            height: 120px; \n"]))),L=S.a.h1(s||(s=Object(m.a)(["\n            font-size: 25px;\n            margin: 10px;\n            text-align: center;\n"]))),N=function(){var e=Object(p.useState)([]),n=Object(y.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(!0),c=Object(y.a)(a,2),i=c[0],s=c[1];return Object(p.useEffect)((function(){(function(){var e=Object(v.a)(k.a.mark((function e(){var n,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://drink-menu.adaptable.app/api/drink");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,r(t),s(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(D.jsx)(D.Fragment,{children:i?Object(D.jsx)(w.a,{color:"#ffff",size:100,"aria-label":"Loading Spinner","data-testid":"loader",style:{display:"grid",justifyItems:"center",alignItems:"center",gridTemplateColumns:"1fr 1fr 1fr",height:"90vh"}}):Object(D.jsx)(_,{children:t.map((function(e){return Object(D.jsx)(I,{drink:e},e._id)}))})})},_=S.a.div(o||(o=Object(m.a)(["\n            display:  grid;\n            justify-items: center;\n            align-content: center;\n            min-height: 80vh;\n            grid-template-columns: 1fr 1fr;\n            background: linear-gradient(95deg, rgba(159, 79, 67, 1) 5%, rgba(116, 46, 36, 1) 100%);\n\n            @media screen and (max-width: 330px) {\n                        grid-template-columns: 1fr;\n            }\n            @media screen and (min-width: 800px) {\n                        grid-template-columns: 1fr 1fr 1fr;\n            }\n            @media screen and (min-width: 1200px) {\n                        grid-template-columns: 1fr 1fr 1fr 1fr;\n            }\n\n"]))),B=S.a.div(j||(j=Object(m.a)(["\n            display: flex;\n            flex-direction: column;\n            width: 100%;\n            margin-top: 20px;\n"]))),J=S.a.div(d||(d=Object(m.a)(["\n            display: flex;\n            align-items: center;\n            justify-content: space-around;\n"]))),P=S.a.h1(l||(l=Object(m.a)(["\n            font-size: 18px;\n            color: #FFFFFF;\n            text-decoration: none;\n"]))),X=S.a.div(u||(u=Object(m.a)(["\n            display: flex;\n            align-self: center;\n            margin: 10px;\n            width: 90%;\n            height: 5px;\n            border-radius: 3px;\n            background: #FFFFFF;\n"])));var q,K,$,G,H,Q,R,U,V,W=function(){return Object(D.jsxs)(B,{children:[Object(D.jsxs)(J,{children:[Object(D.jsx)(O.b,{to:"coffee",style:{textDecoration:"none"},children:Object(D.jsx)(P,{children:"Coffee"})}),Object(D.jsx)(O.b,{to:"Cocktail",style:{textDecoration:"none"},children:Object(D.jsx)(P,{children:"Cocktail"})}),Object(D.jsx)(O.b,{to:"Mocktails",style:{textDecoration:"none"},children:Object(D.jsx)(P,{children:"Mocktails"})}),Object(D.jsx)(O.b,{to:"Shakes",style:{textDecoration:"none"},children:Object(D.jsx)(P,{children:"Shakes"})})]}),Object(D.jsx)(X,{})]})},Y=S.a.div(q||(q=Object(m.a)(["\n\n            display: flex;\n            justify-content: space-between;\n            margin:20px 10% 0 10%;\n            color: #FFFFFF;\n"]))),Z=S.a.h1(K||(K=Object(m.a)(["\n            font-family: 'Kolker Brush', cursive;\n            font-size: 42px;\n            color: #FFFFFF;\n            align-self: center;\n\n"]))),ee=t(25),ne=function(){return Object(D.jsxs)(Y,{children:[Object(D.jsx)(O.b,{to:"/",style:{textDecoration:"none"},children:Object(D.jsx)(Z,{children:"CAFE BOX"})}),Object(D.jsx)(O.b,{to:"/AddDrink",children:Object(D.jsx)(ee.c,{style:{color:"white",fontSize:"36"}})})]})},te=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ne,{}),Object(D.jsx)(W,{}),Object(D.jsx)(N,{})]})},re=S.a.div($||($=Object(m.a)(["\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n"]))),ae=S.a.div(G||(G=Object(m.a)(["\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 20px;\n"]))),ce=S.a.form(H||(H=Object(m.a)(["\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n"]))),ie=S.a.input(Q||(Q=Object(m.a)(["\n            width: 200px;\n            height: 30px;\n            border-radius: 25px;\n            border: none;\n            margin: 10px 0 20px 0;\n            text-align: center;\n            box-shadow: none;\n            outline: none;\n            &:focus{\n                        width:250px;\n                        transition: 0.25s;\n            }\n"]))),se=S.a.select(R||(R=Object(m.a)(["\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            -ms-appearance: none;\n            appearance: none;\n            outline: 0;\n            box-shadow: none;\n            border: 0 !important;\n            background: #FFFFFF;\n            background-image: none;\n            flex: 1;\n            width: 200px;\n            font-size: 24px;\n            border-radius: 25px;\n            text-align: center;\n            padding: 0 0.5em;\n            cursor: pointer;\n            margin: 10px 0 20px 0;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n"]))),oe=S.a.input(U||(U=Object(m.a)(["\n            width: 200px;\n            background: #FFFFFF;\n            border-radius: 25px;\n            border: none;\n            margin: 10px 0 20px 0;\n            text-align: center;\n            box-shadow: none;\n            outline: none;\n"]))),je=S.a.button(V||(V=Object(m.a)(["\n            box-sizing: none;\n            outline: none;\n            border: none;\n            font-size: 24px;\n            border-radius: 20px;\n            padding: 5px;\n"]))),de=t(52),le=t(37),ue=t.n(le);var pe=function(){var e=Object(p.useState)(""),n=Object(y.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(),c=Object(y.a)(a,2),i=c[0],s=c[1],o=Object(p.useState)(""),j=Object(y.a)(o,2),d=j[0],l=j[1],u=Object(p.useState)(),f=Object(y.a)(u,2),b=f[0],x=f[1];return Object(D.jsxs)(re,{children:[Object(D.jsxs)(ae,{children:[Object(D.jsx)(O.b,{to:"/",children:Object(D.jsx)(ee.a,{style:{color:"white",fontSize:"36"}})}),Object(D.jsx)(ee.b,{style:{color:"white",fontSize:"36"}})]}),Object(D.jsx)(Z,{style:{fontSize:"62px"},children:"CAFE BOX"}),Object(D.jsxs)(ce,{onSubmit:function(e){e.preventDefault();var n=new FormData;n.append("drinkName",t),n.append("price",i),n.append("typOfDrink",d),n.append("image",b),de.a.post("https://drink-menu.adaptable.app/api/drink",n).then((function(){ue.a.fire("Add drink","New Drink has been added.","success")})).catch((function(){ue.a.fire({icon:"error",title:"Oops...",text:"Please put all requirements in the form."})})),r(""),s(""),l(""),document.forms[0].reset()},encType:"multipart/form-data",children:[Object(D.jsx)(ie,{type:"text",placeholder:"Name the Drink",onChange:function(e){return r(e.target.value)},value:t}),Object(D.jsx)(ie,{type:"number",placeholder:"Price",onChange:function(e){return s(e.target.value)},value:i}),Object(D.jsxs)(se,{onChange:function(e){return l(e.target.value)},value:d,children:[Object(D.jsx)("option",{children:"Select Type:"}),Object(D.jsx)("option",{value:"Coffee",children:"Coffee"}),Object(D.jsx)("option",{value:"Cocktail",children:"Cocktail"}),Object(D.jsx)("option",{value:"Shakes",children:"Shakes"}),Object(D.jsx)("option",{value:"Mocltail",children:"Mocltail"})]}),Object(D.jsx)(oe,{type:"file",accept:"image/png, image/jpeg , image/gif",image:"image",onChange:function(e){x(e.target.files[0])}}),Object(D.jsx)(je,{children:"Add Drink"})]})]})};var fe=function(){return Object(D.jsx)(pe,{})};var be=function(){var e=Object(p.useState)([]),n=Object(y.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(!0),c=Object(y.a)(a,2),i=c[0],s=c[1];return Object(p.useEffect)((function(){(function(){var e=Object(v.a)(k.a.mark((function e(){var n,t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://drink-menu.adaptable.app/api/drink");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,a=t.filter((function(e){return"Coffee"===e.typOfDrink})),r(a),s(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(D.jsx)(D.Fragment,{children:i?Object(D.jsx)(w.a,{color:"#ffff",size:100,"aria-label":"Loading Spinner","data-testid":"loader",style:{display:"grid",justifyItems:"center",alignItems:"center",gridTemplateColumns:"1fr 1fr 1fr",height:"90vh"}}):Object(D.jsx)(_,{children:t.map((function(e){return Object(D.jsx)(I,{drink:e},e._id)}))})})};var xe=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ne,{}),Object(D.jsx)(W,{}),Object(D.jsx)(be,{})]})};var Oe=function(){var e=Object(p.useState)([]),n=Object(y.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(!0),c=Object(y.a)(a,2),i=c[0],s=c[1];return Object(p.useEffect)((function(){(function(){var e=Object(v.a)(k.a.mark((function e(){var n,t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://drink-menu.adaptable.app/api/drink");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,a=t.filter((function(e){return"Cocktail"===e.typOfDrink})),r(a),s(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(D.jsx)(D.Fragment,{children:i?Object(D.jsx)(w.a,{color:"#ffff",size:100,"aria-label":"Loading Spinner","data-testid":"loader",style:{display:"grid",justifyItems:"center",alignItems:"center",gridTemplateColumns:"1fr 1fr 1fr",height:"90vh"}}):Object(D.jsx)(_,{children:t.map((function(e){return Object(D.jsx)(I,{drink:e},e._id)}))})})};var he=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ne,{}),Object(D.jsx)(W,{}),Object(D.jsx)(Oe,{})]})};var me=function(){var e=Object(p.useState)([]),n=Object(y.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(!0),c=Object(y.a)(a,2),i=c[0],s=c[1];return Object(p.useEffect)((function(){(function(){var e=Object(v.a)(k.a.mark((function e(){var n,t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://drink-menu.adaptable.app/api/drink");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,a=t.filter((function(e){return"Shakes"===e.typOfDrink})),r(a),s(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(D.jsx)(D.Fragment,{children:i?Object(D.jsx)(w.a,{color:"#ffff",size:100,"aria-label":"Loading Spinner","data-testid":"loader",style:{display:"grid",justifyItems:"center",alignItems:"center",gridTemplateColumns:"1fr 1fr 1fr",height:"90vh"}}):Object(D.jsx)(_,{children:t.map((function(e){return Object(D.jsx)(I,{drink:e},e._id)}))})})};var ge=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ne,{}),Object(D.jsx)(W,{}),Object(D.jsx)(me,{})]})};var ke=function(){var e=Object(p.useState)([]),n=Object(y.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(!0),c=Object(y.a)(a,2),i=c[0],s=c[1];return Object(p.useEffect)((function(){(function(){var e=Object(v.a)(k.a.mark((function e(){var n,t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://drink-menu.adaptable.app/api/drink");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,a=t.filter((function(e){return"Mocltail"===e.typOfDrink})),r(a),s(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(D.jsx)(D.Fragment,{children:i?Object(D.jsx)(w.a,{color:"#ffff",size:100,"aria-label":"Loading Spinner","data-testid":"loader",style:{display:"grid",justifyItems:"center",alignItems:"center",gridTemplateColumns:"1fr 1fr 1fr",height:"90vh"}}):Object(D.jsx)(_,{children:t.map((function(e){return Object(D.jsx)(I,{drink:e},e._id)}))})})};var ve=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ne,{}),Object(D.jsx)(W,{}),Object(D.jsx)(ke,{})]})};var ye=function(){return Object(D.jsx)(O.a,{children:Object(D.jsxs)(h.c,{children:[Object(D.jsx)(h.a,{path:"/",component:te,exact:!0}),Object(D.jsx)(h.a,{path:"/AddDrink",component:fe,exact:!0}),Object(D.jsx)(h.a,{path:"/Coffee",component:xe,exact:!0}),Object(D.jsx)(h.a,{path:"/Cocktail",component:he,exact:!0}),Object(D.jsx)(h.a,{path:"/Shakes",component:ge,exact:!0}),Object(D.jsx)(h.a,{path:"/Mocktails",component:ve,exact:!0})]})})};x.a.render(Object(D.jsx)(f.a.StrictMode,{children:Object(D.jsx)(ye,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.e5fed1b0.chunk.js.map