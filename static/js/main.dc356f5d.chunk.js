(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(5),i=a(7),l=a(6),o=a(8),s=a(0),c=a.n(s),u=a(14),m=function(e){e.name;return c.a.createElement("button",{class:"btn btn-primary"}," Duda")},b=a(18),d=a(2),h=new(function(){function e(){Object(r.a)(this,e)}return Object(n.a)(e,[{key:"getAll",value:function(){var e=JSON.parse(localStorage.getItem("GENRES"));return null==e&&(e=[]),e}},{key:"getById",value:function(e){var t=JSON.parse(localStorage.getItem("GENRES"));return null==t||0===t.length?null:t.find(function(t){return t.id===e})}},{key:"deleteById",value:function(e){var t=this.getAll();return void 0==t.find(function(t){return t.id===e})?{isOk:!1,message:"Error. No se ha encontrado el g\xe9nero."}:(t=t.filter(function(t){return t.id!=e}),localStorage.setItem("GENRES",JSON.stringify(t)),{isOk:!0,message:"El g\xe9nero se ha eliminado correctamente"})}},{key:"edit",value:function(e){if(this.existGender(e))return{isOk:!1,message:"El g\xe9nero ya existe"};var t=this.getAll(),a=t.find(function(t){return t.id==e.id});return void 0==a?{isOk:!1,message:"Error. No se ha encontrado el g\xe9nero."}:(a.name=e.name,localStorage.setItem("GENRES",JSON.stringify(t)),{isOk:!0,message:"El g\xe9nero se ha actualizado correctamente."})}},{key:"add",value:function(e){if(this.existGender(e))return{isOk:!1,message:"El g\xe9nero ya existe"};var t=this.getAll();return e.id=this.getGUID(),t.push(e),localStorage.setItem("GENRES",JSON.stringify(t)),{isOk:!0,message:"El g\xe9nero se ha a\xf1adido correctamente"}}},{key:"existGender",value:function(e){var t=JSON.parse(localStorage.getItem("GENRES")),a=!1;return null!=t&&(a=t.some(function(t){return t.name==e.name})),a}},{key:"S4",value:function(){return(65536*(1+Math.random())|0).toString(16).substring(1)}},{key:"getGUID",value:function(){return(this.S4()+this.S4()+"-"+this.S4()+"-4"+this.S4().substr(0,3)+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4()).toLowerCase()}}]),e}()),g=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(i.a)(this,Object(l.a)(t).call(this,e)),console.log(e.match.params.id,"constructor"),a.state={name:"",id:e.match.params.id},a.guardarGenero=a.guardarGenero.bind(Object(d.a)(Object(d.a)(a))),a.changeHandler=a.changeHandler.bind(Object(d.a)(Object(d.a)(a))),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"changeHandler",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(b.a)({},t,a))}},{key:"guardarGenero",value:function(){var e={name:this.state.name},t=null;if(void 0==this.state.id?t=h.add(e):(e.id=this.state.id,t=h.edit(e)),0==t.isOk)return alert(t.message),!1;alert(t.message),this.props.history.push("/Generos"),this.setState({name:""})}},{key:"render",value:function(){return c.a.createElement("form",{class:"col-sm-12"},c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"exampleInputEmail1"},"Genero"),c.a.createElement("input",{name:"name",value:this.state.name,type:"text",class:"form-control",id:"genero","aria-describedby":"emailHelp",onChange:this.changeHandler})),c.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:this.guardarGenero},"Guardar"))}}]),t}(s.Component),p=a(20),v=a(35),E=[],f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){a.setState({selectedOption:e}),console.log("Option selected:",e)},a.state={titulo:"",precio:0,selectedOption:null},a.guardar=a.guardar.bind(Object(d.a)(Object(d.a)(a))),a.changeHandler=a.changeHandler.bind(Object(d.a)(Object(d.a)(a))),Object(p.a)("options"),E=a.obtenerGeneros(),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"S4",value:function(){return(65536*(1+Math.random())|0).toString(16).substring(1)}},{key:"obtenerGUID",value:function(){return(this.S4()+this.S4()+"-"+this.S4()+"-4"+this.S4().substr(0,3)+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4()).toLowerCase()}},{key:"obtenerGeneros",value:function(){var e=JSON.parse(localStorage.getItem("Generos"));return null==e&&(Object(p.a)("listaGeneros"),e=[]),e.map(function(e){return{value:e.id,label:e.name}})}},{key:"existeLibro",value:function(e,t){return e.some(function(e){return e.titulo===t})}},{key:"guardar",value:function(){var e=JSON.parse(localStorage.getItem("LIBROS"));if(null==e&&(e=[]),this.existeLibro(e,this.state.titulo))return alert("Ya existe el libroa"),!1;e.push({id:this.obtenerGUID(),titulo:this.state.titulo,precio:this.state.precio}),localStorage.setItem("LIBROS",JSON.stringify(e)),alert("Se ha a\xf1adido el libro correctamente"),this.props.history.push("/Libros")}},{key:"changeHandler",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(b.a)({},t,a))}},{key:"render",value:function(){var e=this.state.selectedOption;return c.a.createElement("form",{class:"col-sm-12"},c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"titulo"},"Libro"),c.a.createElement("input",{name:"titulo",value:this.state.titulo,type:"text",class:"form-control","aria-describedby":"emailHelp",onChange:this.changeHandler})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"precio"},"Precio"),c.a.createElement("input",{name:"precio",value:this.state.precio,type:"numeric",class:"form-control",onChange:this.changeHandler})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"precio"},"Genero"),c.a.createElement(v.a,{isMulti:!0,name:"colors",value:e,onChange:this.handleChange,options:E,className:"basic-multi-select",classNamePrefix:"select"})),c.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:this.guardar},"Guardar"))}}]),t}(s.Component),O=a(10),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).eliminarFila=a.eliminarFila.bind(Object(d.a)(Object(d.a)(a))),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"eliminarFila",value:function(e){(0,this.props.eliminar)(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.lista,r=t.cabecera;return c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,r.map(function(e){return c.a.createElement("th",{scope:"col"}," ",e.titulo)}))),c.a.createElement("tbody",null,a.map(function(t,a){return c.a.createElement("tr",{key:a},r.map(function(e,r){return c.a.createElement("td",{key:a+r},t[e.propiedad])}),c.a.createElement("td",{key:a},c.a.createElement(O.b,{to:"/EditarGenero/"+t.id,className:"btn btn-success"},"  Editar "),c.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.eliminarFila(t)}}," Eliminar ")))})))}}]),t}(s.Component),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={generos:h.getAll()},a.eliminarGenero=a.eliminarGenero.bind(Object(d.a)(Object(d.a)(a))),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"eliminarGenero",value:function(e){var t=h.deleteById(e.id);if(!t.isOk)return alert(t.message),!1;alert(t.message),this.setState({generos:h.getAll()})}},{key:"render",value:function(){return c.a.createElement("div",{class:"col-sm-12"},c.a.createElement("div",{class:"row"},c.a.createElement("h2",null," G\xe9neros ")),c.a.createElement("div",{class:"row"},c.a.createElement(O.b,{className:"btn btn-primary",to:"/CrearGeneros"},"Crear G\xe9nero")),c.a.createElement("div",{class:"row"},c.a.createElement(y,{lista:this.state.generos,cabecera:[{titulo:"Id",propiedad:"id"},{titulo:"Nombre",propiedad:"name"}],eliminar:this.eliminarGenero})))}}]),t}(s.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={libros:a.obtenerLibros()},a.eliminarLibro=a.eliminarLibro.bind(Object(d.a)(Object(d.a)(a))),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"eliminarLibro",value:function(e){var t=JSON.parse(localStorage.getItem("LIBROS"));if(null==t)return alert("Error. No existe el libro"),!1;t=t.filter(function(t){return t.titulo!==e.titulo}),localStorage.setItem("LIBROS",JSON.stringify(t)),this.setState({libros:this.obtenerLibros()})}},{key:"obtenerLibros",value:function(){var e=JSON.parse(localStorage.getItem("LIBROS"));return null==e&&(e=[]),e}},{key:"render",value:function(){return console.log("cuantas veces entra"),c.a.createElement("div",{class:"col-sm-12"},c.a.createElement("div",{class:"row"},c.a.createElement("h2",null," Libros ")),c.a.createElement("div",{class:"row"},c.a.createElement(O.b,{className:"btn btn-primary",to:"/CrearLibros"},"Crear Libro")),c.a.createElement("div",{class:"row"},c.a.createElement(y,{lista:this.state.libros,cabecera:[{titulo:"Id",propiedad:"id"},{titulo:"Titulo",propiedad:"titulo"},{titulo:"Precio",propiedad:"precio"}],eliminar:this.eliminarLibro})))}}]),t}(s.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"col-sm-12"},c.a.createElement("nav",{class:"navbar navbar-expand-sm navbar-light fixed-top py-3",id:"mainNav"},c.a.createElement("div",{class:"container"},c.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"#page-top"},"LIBRERIA REACT"),c.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{class:"navbar-toggler-icon"})),c.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},c.a.createElement("ul",{class:"navbar-nav ml-auto my-2 my-lg-0"},c.a.createElement("li",{class:"nav-item"},c.a.createElement(O.b,{class:"nav-link js-scroll-trigger",to:"/"}," Home ")),c.a.createElement("li",{class:"nav-item"},c.a.createElement(O.b,{class:"nav-link js-scroll-trigger",to:"/Generos"}," Generos ")),c.a.createElement("li",{class:"nav-item"},c.a.createElement(O.b,{class:"nav-link js-scroll-trigger",to:"/Libros"}," Libros ")),c.a.createElement("li",{class:"nav-item"},c.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#contact"},"Contact")))))))}}]),t}(s.Component),G=(a(58),a(15)),I={"margin-top":"70px"},N=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).state={name:"React"},e}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(O.a,null,c.a.createElement("div",{class:"row"},c.a.createElement(k,null)),c.a.createElement("div",{class:"row",style:I},c.a.createElement(G.a,{path:"/",exact:!0,component:m}),c.a.createElement(G.a,{path:"/Generos/",component:S}),c.a.createElement(G.a,{path:"/Libros",component:j}),c.a.createElement(G.a,{path:"/CrearGeneros",component:g}),c.a.createElement(G.a,{path:"/EditarGenero/:id",component:g}),c.a.createElement(G.a,{path:"/CrearLibros",component:f})))}}]),t}(s.Component);Object(u.render)(c.a.createElement(N,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.dc356f5d.chunk.js.map