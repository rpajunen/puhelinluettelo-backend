(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(38)},18:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(11),c=t.n(r),o=(t(18),t(2)),l=function(e){var n=e.filter,t=e.handleFilterChange;return u.a.createElement("div",null,"rajaa naytettavia ",u.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.newName,t=e.newNumber,a=e.addPerson,r=e.handleNameChange,c=e.handleNumberChange;return u.a.createElement("form",{onSubmit:a},u.a.createElement("h2",null,"Lisaa uusi"),u.a.createElement("div",null,"nimi: ",u.a.createElement("input",{value:n,onChange:r})),u.a.createElement("div",null,"numero: ",u.a.createElement("input",{value:t,onChange:c})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},m=function(e){var n=e.rows;return u.a.createElement("div",null,u.a.createElement("h2",null,"Numerot"),u.a.createElement("ul",null,n()))},f=t(3),s=t.n(f),d="/api/persons",h=function(){return s.a.get(d).then(function(e){return e.data})},v=function(e){return s.a.post(d,e).then(function(e){return e.data})},p=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then(function(e){return e.data})},E=function(e){return s.a.delete("".concat(d,"/").concat(e)).then(function(e){return e.data})},b=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"error"},n)},g=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),f=Object(o.a)(c,2),s=f[0],d=f[1],g=Object(a.useState)(""),w=Object(o.a)(g,2),j=w[0],C=w[1],O=Object(a.useState)(""),k=Object(o.a)(O,2),N=k[0],y=k[1],S=Object(a.useState)(null),H=Object(o.a)(S,2),T=H[0],P=H[1];Object(a.useEffect)(function(){h().then(function(e){r(e)})},[]);var D=function(e){return t.every(function(n){return n.name!==e})},F=0===N.length?t:t.filter(function(e){return e.name.toUpperCase().includes(N.toUpperCase())});return u.a.createElement("div",null,u.a.createElement("h1",null,"Puhelinluettelo"),u.a.createElement(b,{message:T}),u.a.createElement(l,{filter:N,handleFilterChange:function(e){return y(e.target.value)}}),u.a.createElement(i,{newName:s,newNumber:j,addPerson:function(e){e.preventDefault();var n={name:s,number:j};if(D(s))v(n).then(function(e){r(t.concat(e)),P("Henkilo '".concat(e.name,"' lisatty")),setTimeout(function(){P(null)},5e3)}).catch(function(e){console.log(),P(e.response.data.error)});else if(window.confirm("".concat(s," on jo luettelossa, korvataanko numero uudella?"))){var a=t.find(function(e){return e.name===s});p(a.id,n).then(function(e){var n=t.filter(function(e){return e.id!==a.id});r(n.concat(e)),P("Henkilo '".concat(a.name,"' numero paivitetty")),setTimeout(function(){P(null)},5e3)}).catch(function(){P("Henkilo '".concat(a.name,"' oli jo poistettu")),r(t.filter(function(e){return e.id!==a.id})),setTimeout(function(){P(null)},5e3)})}d(""),C("")},handleNameChange:function(e){return d(e.target.value)},handleNumberChange:function(e){return C(e.target.value)}}),u.a.createElement(m,{rows:function(){return F.map(function(e){return u.a.createElement("li",{key:e.id},e.name," ",e.number," ",u.a.createElement("button",{onClick:function(){return function(e){window.confirm("Do you want to remove ".concat(e.name))&&E(e.id).then(function(){r(t.filter(function(n){return e.id!==n.id})),P("Henkilo '".concat(e.name,"' poistettu palvelimelta")),setTimeout(function(){P(null)},5e3)})}(e)}},"remove"))})}}))};c.a.render(u.a.createElement(g,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5bf50410.chunk.js.map