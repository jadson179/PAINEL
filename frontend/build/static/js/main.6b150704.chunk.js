(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(47),l=a.n(c),s=a(51),o=a(123),u=a(6),i=Object(u.a)(),m=a(2),d=a.n(m),f=a(1),p=a(48),E={backend:{url:"http://192.168.0.21:3333"}},b=a.n(p).a.create({baseURL:E.backend.url});a(74);var v=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(f.a)(l,2),o=s[0],u=s[1],m=Object(n.useState)(""),p=Object(f.a)(m,2),E=p[0],v=p[1];return sessionStorage.setItem("username",a),sessionStorage.setItem("password",o),Object(n.useEffect)((function(){!function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(b.get("https://raw.githubusercontent.com/jadson179/PAINEL/master/frontend/package.json"));case 2:e=t.sent,v(e.data);case 4:case"end":return t.stop()}}))}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"containerLogin"},r.a.createElement("div",{id:"box-login"},r.a.createElement("header",null,r.a.createElement("h2",{className:"primary-text-color"},"Login")),r.a.createElement("main",null,r.a.createElement("input",{type:"text",placeholder:"Usuario",onChange:function(e){return c(e.target.value)},autoFocus:!0,required:!0}),r.a.createElement("input",{type:"password",placeholder:"Senha",onChange:function(e){return u(e.target.value)},required:!0})),r.a.createElement("div",{id:"area-buttons"},r.a.createElement("button",{className:"buttons",onClick:function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===a||""===o){n.next=6;break}return n.next=3,d.a.awrap(b.post("/user/auth",{username:a,password:o}));case 3:e=n.sent,(t=e.data).token?(sessionStorage.setItem("token",t.token),i.push("/admin")):console.log(t);case 6:case"end":return n.stop()}}))}},"Acessar"))),r.a.createElement("span",{className:"primary-text-color"},"Nova Vers\xe3o : ",E.version," ",r.a.createElement("i",{className:"fas fa-star"}),"  Data ",E.date)))},h=a(7),g=a.n(h);var N=function(e){var t=e.floor;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("li",{key:e.RoomID,className:"containerRoom"},r.a.createElement("label",{className:"numberCostumer"},e.NumberRoom),r.a.createElement("img",{className:"imageCostumer",src:"".concat(E.backend.url,"/").concat(e.NameImage),alt:"".concat(e.NumberRoom)}))})))},S=(a(106),g()("".concat(E.backend.url)));var x=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(f.a)(l,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){!function(){var e,t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(b.get("/floors"));case 2:e=a.sent,t=e.data,c(t.results),u(t.query);case 6:case"end":return a.stop()}}))}()}),[]),Object(n.useEffect)((function(){S.on("update",(function(e){"update-window"===e.action&&window.location.reload()}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"container"},o.map((function(e){return r.a.createElement("ul",{className:"floors"},r.a.createElement("h2",{className:"title darkblue"},e.NumberFloor,"\xba ANDAR"),r.a.createElement(N,{floor:a.filter((function(t){return t.NumberFloor===e.NumberFloor}))}))}))))};a(107);var j=function(e,t,a){document.documentElement.style.setProperty("--actionalert-background-color",a),document.getElementById("MsgActionAlert").innerText=e,document.getElementById("ActionAlert").style.display=t,setTimeout((function(){document.getElementById("ActionAlert").style.display="none"}),2500)};a(108);var O=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(f.a)(l,2),o=s[0],u=s[1],i=Object(n.useState)(""),m=Object(f.a)(i,2),p=m[0],E=m[1],v=Object(n.useState)(""),h=Object(f.a)(v,2),g=h[0],N=h[1];return r.a.createElement("div",{className:"contianerCreateUser"},r.a.createElement("h2",{className:"primary-text-color"},"Criar Usuario"),r.a.createElement("input",{className:"inputs",placeholder:"Nome de usu\xe1rio",type:"text",onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("input",{className:"inputs",placeholder:"Senha",type:"password",onChange:function(e){return u(e.target.value)},required:!0}),r.a.createElement("input",{className:"inputs",placeholder:"Confirme sua senha",type:"password",onChange:function(e){return E(e.target.value)},required:!0}),o===p&&""!==o&&""!==p||""!==g?r.a.createElement("p",{id:"verify"},"Senha correta"):r.a.createElement("p",{id:"incorret"},"Senha Incorreta"),r.a.createElement("select",{className:"options-admin inputs",required:!0,onChange:function(e){return N(e.target.value)}},r.a.createElement("option",{value:"void"},"Selecione o tipo da conta"),r.a.createElement("option",{value:"admin"},"Admin"),r.a.createElement("option",{value:"comum"},"Comum")),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",id:"submit",onClick:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===a||""===o||""===g||"void"===g){t.next=6;break}return t.next=3,d.a.awrap(b.post("/user",{username:a,password:o,usertype:g},{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}));case 3:e=t.sent,"Success in create user"===e.data.status?j("Sucesso em Criar Usu\xe1rio","flex","green"):j("Falha em Criar Usu\xe1rio","flex","red");case 6:case"end":return t.stop()}}))}},"Enviar")))};a(109);var y=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(f.a)(l,2),o=s[0],u=s[1];return r.a.createElement("div",{className:"contianerAlterPassword"},r.a.createElement("h2",{className:"primary-text-color"},"Alterar Senha"),r.a.createElement("input",{className:"inputs",placeholder:"Nova senha",type:"password",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"inputs",placeholder:"Confirme Nova senha",type:"password",onChange:function(e){return u(e.target.value)}}),a===o&&""!==a&&""!==o?r.a.createElement("p",{id:"verify"},"Senha correta"):r.a.createElement("p",{id:"incorret"},"Senha Incorreta"),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===a||""===o){t.next=6;break}return t.next=3,d.a.awrap(b.put("/user",{username:sessionStorage.getItem("username"),oldPassword:sessionStorage.getItem("password"),password:a},{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}));case 3:e=t.sent,1===e.data?j("Sucesso em Atualizar Usu\xe1rio","flex","green"):j("Falha em Atualizar Usu\xe1rio","flex","red");case 6:case"end":return t.stop()}}))}},"Enviar")))};a(110);var w=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){!function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(b.get("/users",{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}));case 2:e=t.sent,c(e.data);case 4:case"end":return t.stop()}}))}()}),[]),r.a.createElement("div",{className:"contianerListUsers"},r.a.createElement("ul",{id:"list"},r.a.createElement("h2",{className:"primary-text-color"},"Lista de Usuarios"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"USU\xc1RIO"),r.a.createElement("th",null,"SENHA"),r.a.createElement("th",null,"TIPO")),a.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.UserName),r.a.createElement("td",null,e.UserPassword),r.a.createElement("td",null,e.UserType))})))))},k=(a(111),g()("".concat(E.backend.url)));var C=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(f.a)(l,2),o=s[0],u=s[1],i=Object(n.useState)(""),m=Object(f.a)(i,2),p=m[0],E=m[1];return r.a.createElement("div",{id:"contianerAddRoom"},r.a.createElement("h2",{className:"primary-text-color"},"Adicionar Sala"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfambero da sala",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfamero do andar",onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{type:"file",name:"file",onChange:function(e){return E(e.target.files[0])}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===a||""===o||""===p){n.next=10;break}return(e=new FormData).append("file",p,p.name),e.append("room",a),e.append("numberfloor",o),n.next=7,d.a.awrap(b.post("/room",e,{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}));case 7:t=n.sent,"Success in create room"===t.data.status?(k.emit("send-image",{data:"send-image"}),j("Sucesso em Criar Sala","flex","green")):j("Falha em Criar Sala","flex","red");case 10:case"end":return n.stop()}}))}},"Enviar")))},A=(a(112),g()("".concat(E.backend.url)));var I=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(f.a)(l,2),o=s[0],u=s[1];return r.a.createElement("div",{className:"contianerUpdateRoom"},r.a.createElement("h2",{className:"primary-text-color"},"Atualizar Sala"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfamero da sala",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"file",name:"file",onChange:function(e){return u(e.target.files[0])}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===a||""===o){n.next=10;break}return(e=new FormData).append("file",o,o.name),e.append("room",a),console.log(o),n.next=7,d.a.awrap(b.put("/room",e,{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}));case 7:t=n.sent,1===t.data?(A.emit("send-image",{data:"send-image"}),j("Sucesso em Atualizar Sala","flex","green")):j("Falha em Atualizar Sala","flex","red");case 10:case"end":return n.stop()}}))}},"Enviar")))};var U=function(){sessionStorage.clear(),window.location.assign("/")},F=(a(113),g()("".concat(E.backend.url)));var D=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"contianerDeleteRoom"},r.a.createElement("h2",{className:"primary-text-color"},"Deletar Sala"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfamero da sala",onChange:function(e){return c(e.target.value)}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===a){t.next=6;break}return t.next=3,d.a.awrap(b.delete("/room",{data:{room:a},headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}));case 3:e=t.sent,1===e.data?(F.emit("send-image",{data:"send-image"}),j("Sucesso em Deletar Sala","flex","green")):j("Falha em Deletar Sala","flex","red");case 6:case"end":return t.stop()}}))}},"Enviar")))};a(114);var z=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"contianerDeleteUser"},r.a.createElement("h2",{className:"primary-text-color"},"Deletar Usuario"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"Nome do usu\xe1rio",onChange:function(e){return c(e.target.value)}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===a){t.next=6;break}return t.next=3,d.a.awrap(b.delete("/user",{data:{username:a},headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}));case 3:e=t.sent,1===e.data?j("Sucesso em Deletar Usu\xe1rio","flex","green"):j("Falha em Deletar Usu\xe1rio","flex","red");case 6:case"end":return t.stop()}}))}},"Enviar")))};a(115);var B=function(){return r.a.createElement("div",{id:"ActionAlert",className:"containerActionAlert"},r.a.createElement("p",{id:"MsgActionAlert"}))};var R=function(){var e=[r.a.createElement(O,null),r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(C,null),r.a.createElement(I,null),r.a.createElement(D,null),r.a.createElement(z,null)],t=Object(n.useState)(0),a=Object(f.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(0),o=Object(f.a)(s,2),u=o[0],i=o[1],m=Object(n.useState)(0),d=Object(f.a)(m,2),p=d[0],E=d[1],b=Object(n.useState)(0),v=Object(f.a)(b,2),h=v[0],g=v[1];function N(e){"user"===e?(l(0),i(0),E(6),g(1)):"hall"===e&&(l(3),i(3),E(5),g(4))}return Object(n.useEffect)((function(){i(0),E(6),g(1)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("div",{className:"container-administration"},r.a.createElement("div",{className:"container-sidebar"},r.a.createElement("header",null,r.a.createElement("h2",null,"PAINEL DE SALAS")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return N("user")}},r.a.createElement("i",{className:"fas fa-user"}),r.a.createElement("ul",null,r.a.createElement("span",null,"Usuario"))),r.a.createElement("li",{onClick:function(){return N("hall")}},r.a.createElement("i",{className:"fas fa-door-closed"}),r.a.createElement("ul",null,r.a.createElement("span",null,"Sala"))),r.a.createElement("a",{href:"/view"},r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-solar-panel"}),r.a.createElement("ul",null,r.a.createElement("span",null,"Painel")))),r.a.createElement("li",{onClick:function(){return l(2)}},r.a.createElement("i",{className:"fas fa-users"}),r.a.createElement("ul",null,r.a.createElement("span",null,"Usuarios")))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("li",{onClick:function(){return U()}},r.a.createElement("span",null,"Sair")))))),r.a.createElement("main",{className:"container-main"},r.a.createElement("nav",{className:"container-navbar"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return l(u)}},r.a.createElement("i",{className:"fas fa-plus"})),r.a.createElement("li",{onClick:function(){return l(p)}},r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement("li",{onClick:function(){return l(h)}},r.a.createElement("i",{className:"fas fa-pen"})))),r.a.createElement("div",{className:"main"},e[c]))))};var L=function(){return sessionStorage.getItem("token")},P=function(e){var t=e.component,a=Object(s.a)(e,["component"]);return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return L()?r.a.createElement(t,e):r.a.createElement(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))},q=function(){return r.a.createElement(o.c,{history:i},r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:v}),r.a.createElement(o.b,{exact:!0,path:"/view",component:x}),r.a.createElement(P,{exact:!0,path:"/admin",component:R})))},T=(a(120),function(){return r.a.createElement(q,null)});l.a.render(r.a.createElement(T,null),document.getElementById("root"))},52:function(e,t,a){e.exports=a(121)},74:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.6b150704.chunk.js.map