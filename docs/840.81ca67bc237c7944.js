"use strict";(self.webpackChunkInvFurniture=self.webpackChunkInvFurniture||[]).push([[840],{9840:(ne,x,u)=>{u.r(x),u.d(x,{OrdersModule:()=>re});var g=u(6895),_=u(9051),v=u(5861),c=u(4985),e=u(4650),T=u(8132),q=u(9898),y=u(7915),d=u(433),M=u(5748);function A(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"input",22),e.NdJ("ngModelChange",function(n){e.CHM(t);const o=e.oxw();return e.KtG(o.q=n)}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngModel",t.q)}}function w(i,a){1&i&&(e.TgZ(0,"select",23)(1,"option",24),e._uU(2,"ESPRANDO MATERIAL"),e.qZA(),e.TgZ(3,"option",25),e._uU(4,"INACTIVA"),e.qZA(),e.TgZ(5,"option",26),e._uU(6,"ACTIVA"),e.qZA(),e.TgZ(7,"option",27),e._uU(8,"TERMINADA"),e.qZA()())}function S(i,a){1&i&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"Seleccione una orden..."),e.qZA()())}function J(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"li",34)(1,"div",35)(2,"div",36),e._uU(3),e.qZA(),e.TgZ(4,"div",37)(5,"input",38),e.NdJ("ngModelChange",function(n){const s=e.CHM(t).$implicit;return e.KtG(s.quantity=n)}),e.qZA(),e.TgZ(6,"span",39),e._uU(7,"U"),e.qZA()()()()}if(2&i){const t=a.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngModel",t.quantity)}}function F(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",28)(1,"h4"),e._uU(2,"Orden"),e.qZA(),e.TgZ(3,"app-form",29),e.NdJ("formModel",function(n){e.CHM(t);const o=e.oxw();return e.KtG(o.submit(n))}),e.qZA(),e.TgZ(4,"p"),e._uU(5,"productos de la Orden: "),e.qZA(),e.TgZ(6,"ul",30),e.YNc(7,J,8,2,"li",31),e.qZA(),e.TgZ(8,"button",32),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.setOrderReady())}),e._uU(9,"Orden Lista"),e.qZA(),e.TgZ(10,"button",33),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.completeOrder())}),e._uU(11,"Completar Orden"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("mode",!0)("formObj",t.formObj)("placeHolder",t.currentOrder),e.xp6(4),e.Q6J("ngForOf",t.currentOrder.orderProducts)}}let N=(()=>{class i{constructor(t,r){this.OrderService=t,this.invFpService=r,this.currentIndex=-1,this.title="",this.q="",this.queryChange=void 0,this.codeFilter=!1,this.formObj=[[new c.O("Numero de Orden de Pedido","name","text"),new c.O("Estado","state","text")],[new c.O("Nombre del Cliente","clientName","text")],[new c.O("Fecha de Embarque","shipDate","date")],[new c.O("Dias de Produccion","productionDays","number"),new c.O("Pedido de Insumos","orderInput","number")],[new c.O("Pedido Materia Prima","rmOrderDeadline","date"),new c.O("Limite inicio de Produccion","startProductionDeadline","date")],[new c.O("Notas","notes","text")]]}ngOnInit(){}submit(t){}getSelectedElement(t){this.currentOrder=t.element,this.currentIndex=t.index}filter(){this.queryChange=this.q}editProducts(){}setOrderReady(){var t=this;this.currentOrder?.orderProducts?.forEach(function(){var r=(0,v.Z)(function*(n){var o=yield t.invFpService.getStock(n.invId);null!=o.wating&&null!=o.commited&&t.invFpService.update(n.invId,{wating:+o.wating-n.quantity,commited:+o.commited+n.quantity})});return function(n){return r.apply(this,arguments)}}()),this.OrderService.update(this.currentOrder?.id,{state:"TERMINADO"}),alert("La orden fue establecida como terminada satisfactoriamente")}completeOrder(){var t=this;this.currentOrder?.orderProducts?.forEach(function(){var r=(0,v.Z)(function*(n){var o=yield t.invFpService.getStock(n.invId);null!=o.commited&&t.invFpService.update(n.invId,{commited:o.commited-n.quantity})});return function(n){return r.apply(this,arguments)}}())}readableDate(t){var r=new Date(t);return r.getDate()+"/"+r.getMonth()+"/"+r.getFullYear()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.p),e.Y36(q.L))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-orders-list"]],decls:27,vars:7,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap"],[1,"ms-5","form-check"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","id","flexCheckDefault","name","codeFilter",1,"form-check-input",3,"ngModel","ngModelChange"],["id","query","class","form-control mx-2 float-end","type","search","name","query","placeholder","Buscar por Nombre o Codigo","aria-label","Search",3,"ngModel","ngModelChange",4,"ngIf"],["class","form-select mx-2","aria-label","Default select example",4,"ngIf"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],[1,"position-fixed","bottom-0","end-0",2,"margin","6rem","z-index","1070"],["routerLink","add",1,"btn","btn-success","btn-lg","rounded-pill"],["fill","#ffffff","version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","4vh","height","4vh","viewBox","0 0 47 47",0,"xml","space","preserve","stroke","#ffffff"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[3,"path","query","selectedElement"],[1,"col-lg-6"],[4,"ngIf"],["class","edit-form",4,"ngIf"],["id","query","type","search","name","query","placeholder","Buscar por Nombre o Codigo","aria-label","Search",1,"form-control","mx-2","float-end",3,"ngModel","ngModelChange"],["aria-label","Default select example",1,"form-select","mx-2"],["selected","","value","1"],["value","2"],["value","3"],["value","4"],[1,"edit-form"],["btnMes","Crear Orden","modalMessage","\xbfDesea continuar con la creacion de la Orden?",3,"mode","formObj","placeHolder","formModel"],[1,"list-group","mt-1","mb-3"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"btn","btn-outline-success","mx-auto","mb-3",3,"click"],[1,"btn","btn-outline-primary","ms-2","mb-3",3,"click"],[1,"list-group-item"],[1,"d-flex","flex-row","mx-auto"],[1,"my-auto","text-nowrap"],[1,"input-group","h-25","my-auto","ms-2"],["type","number","placeholder","Unidades","readonly","","name","UP","readonly","","aria-label","quantity",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"input-group-text"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Lista de Ordenes"),e.qZA(),e.TgZ(4,"div",3)(5,"label",4),e._uU(6," Filtrar por Estado "),e.qZA(),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(o){return r.codeFilter=o}),e.qZA()(),e.YNc(8,A,1,1,"input",6),e.YNc(9,w,9,0,"select",7),e.TgZ(10,"button",8),e.NdJ("click",function(){return r.filter()}),e._uU(11,"Buscar"),e.qZA()(),e._UZ(12,"hr"),e.TgZ(13,"div",9)(14,"button",10),e.O4$(),e.TgZ(15,"svg",11),e._UZ(16,"g",12)(17,"g",13),e.TgZ(18,"g",14)(19,"g"),e._UZ(20,"path",15),e.qZA()()()()(),e.kcU(),e.TgZ(21,"div",16)(22,"div",17)(23,"app-pagination",18),e.NdJ("selectedElement",function(o){return r.getSelectedElement(o)}),e.qZA()(),e.TgZ(24,"div",19),e.YNc(25,S,4,0,"div",20),e.YNc(26,F,12,4,"div",21),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("ngModel",r.codeFilter),e.xp6(1),e.Q6J("ngIf",!r.codeFilter),e.xp6(1),e.Q6J("ngIf",r.codeFilter),e.xp6(14),e.Q6J("path","/orders")("query",r.queryChange),e.xp6(2),e.Q6J("ngIf",!r.currentOrder),e.xp6(1),e.Q6J("ngIf",r.currentOrder))},dependencies:[g.sg,g.O5,_.rH,y.U,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.JJ,d.JL,d.On,d.F,M.Q]}),i})();function U(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"li",13)(1,"div",14)(2,"span",15),e._uU(3),e.qZA(),e.TgZ(4,"div",16)(5,"input",17),e.NdJ("ngModelChange",function(n){const s=e.CHM(t).$implicit;return e.KtG(s.quantity=n)}),e.qZA(),e.TgZ(6,"span",18),e._uU(7,"U"),e.qZA(),e.TgZ(8,"input",19),e.NdJ("ngModelChange",function(n){const s=e.CHM(t).$implicit;return e.KtG(s.available=n)}),e.qZA(),e.TgZ(9,"span",18),e._uU(10,"U"),e.qZA(),e.TgZ(11,"div",20)(12,"label",21),e._uU(13," Usar PT"),e.qZA(),e.TgZ(14,"input",22),e.NdJ("change",function(){const n=e.CHM(t),o=n.$implicit,s=n.index,h=e.oxw();return e.KtG(h.useFP(o.invId,s))}),e.qZA()()(),e.TgZ(15,"button",23),e.NdJ("click",function(){const o=e.CHM(t).index,s=e.oxw();return e.KtG(s.removeProductFromOrder(o))}),e.qZA()()()}if(2&i){const t=a.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(3),e.Q6J("ngModel",t.available),e.xp6(6),e.Q6J("ngModel",t.useFP)}}let I=(()=>{class i{constructor(t,r){this.router=t,this.invFP=r,this.orderProducts=[],this.materials=[],this.q="",this.query="",this.codeFilter=!1,this.continueDisabled=!0}ngOnInit(){}filter(){this.q=this.query}createOrder(){var t=this.getTotalMaterials();this.updateProductStock(),this.orderProducts.forEach(r=>{delete r.materials,delete r.available}),this.router.navigate(["orders/add/providers"],{state:{materials:t,products:this.orderProducts}})}getTotalMaterials(){return this.orderProducts?(this.orderProducts.forEach(t=>t.materials.forEach(r=>r.quantity*=t.quantity)),this.orderProducts.flatMap(t=>t.materials).reduce((t,r)=>(t[r.id]=t[r.id]?{name:r.name,quantity:t[r.id].quantity+r.quantity}:{name:r.name,quantity:r.quantity},t),{})):[]}useFP(t,r){var n=this;return(0,v.Z)(function*(){if(n.orderProducts[r].stock)n.orderProducts[r].available=n.orderProducts[r].available?void 0:n.orderProducts[r].stock.available;else{var o=(yield n.invFP.getStock(t))||0;n.orderProducts[r].available=o.available,n.orderProducts[r].stock=o}})()}updateProductStock(){var t=this;this.orderProducts.forEach(function(){var r=(0,v.Z)(function*(n){var o;if(n.available){if(null==n.stock.available||null==n.stock.commited||null==n.stock.wating)return;o=n.quantity<=n.stock.available?{commited:+n.stock.commited+n.quantity,available:+n.stock.available-n.quantity}:{wating:+n.stock.wating+n.quantity-+n.stock.available,commited:+n.stock.commited+ +n.stock.available,available:0}}else n.stock||(n.stock=(yield t.invFP.getStock(n.id))||0),o={wating:n.stock.wating+ +n.quantity};n.newStock=o});return function(n){return r.apply(this,arguments)}}())}addProductToOrder(t){this.continueDisabled=!1,this.orderProducts.find(n=>n.id==t.id)||this.orderProducts.push({name:t.name,id:t.id,invId:t.invId,leadTime:t.leadTime,materials:t.materials})}validate(){}removeProductFromOrder(t){this.orderProducts.splice(t,1),this.continueDisabled=!!this.orderProducts.length}getSelectedElement(t){this.addProductToOrder(t.element)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_.F0),e.Y36(q.L))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-order-products"]],decls:21,vars:4,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap","my-auto"],["type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",1,"form-control","ms-2","me-2","float-end",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[1,"text-muted","mt-1"],[3,"path","query","selectedElement"],[1,"edit-form"],[1,"mt-4","rounded-pill","btn","btn-outline-success",3,"click"],[1,"list-group","mt-3","mb-3"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"d-flex","flex-row","justify-content-between"],[1,"my-auto"],[1,"input-group"],["type","number","placeholder","Unidades","name","UP","aria-label","quantity",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"input-group-text"],["type","number","readonly","","placeholder","Disponible en PT","name","stock","aria-label","stock",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"form-check","input-group-append","mx-2","my-auto"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","id","flexCheckDefault","name","codeFilter",1,"form-check-input",3,"ngModel","change"],[1,"btn-close","my-auto","btn-sm","rounded-pill","float-end",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h3",2),e._uU(3,"Registrar orden"),e.qZA(),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(o){return r.query=o}),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return r.filter()}),e._uU(6,"Buscar"),e.qZA()(),e._UZ(7,"hr"),e.TgZ(8,"div",5)(9,"div",6)(10,"h5",7),e._uU(11,"Productos disponibles:"),e.qZA(),e.TgZ(12,"app-pagination",8),e.NdJ("selectedElement",function(o){return r.getSelectedElement(o)}),e.qZA()(),e.TgZ(13,"div",6)(14,"div",9)(15,"button",10),e.NdJ("click",function(){return r.createOrder()}),e._uU(16,"Continuar"),e.qZA(),e.TgZ(17,"p"),e._uU(18,"productos de la Orden: "),e.qZA(),e.TgZ(19,"ul",11),e.YNc(20,U,16,4,"li",12),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("ngModel",r.query),e.xp6(8),e.Q6J("path","/products")("query",r.q),e.xp6(8),e.Q6J("ngForOf",r.orderProducts))},dependencies:[g.sg,d._Y,d.Fj,d.wV,d.Wl,d.JJ,d.JL,d.On,d.F,M.Q]}),i})();var P=u(8179);class D{}var E=u(5561),k=u(490),L=u(798),Q=u(3651);function Y(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"li",15)(1,"div",16)(2,"span",17),e._uU(3),e.qZA(),e.TgZ(4,"div",18)(5,"input",19),e.NdJ("ngModelChange",function(n){const s=e.CHM(t).$implicit;return e.KtG(s.quantity=n)}),e.qZA(),e.TgZ(6,"span",20),e._uU(7,"U"),e.qZA(),e.TgZ(8,"input",21),e.NdJ("ngModelChange",function(n){const s=e.CHM(t).$implicit;return e.KtG(s.stock=n)}),e.qZA(),e.TgZ(9,"span",20),e._uU(10,"U"),e.qZA(),e.TgZ(11,"div",22)(12,"label",23),e._uU(13," Usar PT"),e.qZA(),e._UZ(14,"input",24),e.qZA()()()()}if(2&i){const t=a.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(3),e.Q6J("ngModel",t.stock),e.xp6(6),e.Q6J("ngModel",t.useFP)}}function j(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",11)(1,"h4"),e._uU(2,"Nueva Orden"),e.qZA(),e.TgZ(3,"app-form",12),e.NdJ("formModel",function(n){e.CHM(t);const o=e.oxw();return e.KtG(o.submit(n))}),e.qZA(),e.TgZ(4,"p"),e._uU(5,"productos de la Orden: "),e.qZA(),e.TgZ(6,"ul",13),e.YNc(7,Y,15,4,"li",14),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("formObj",t.formObj),e.xp6(4),e.Q6J("ngForOf",t.orderProducts)}}function R(i,a){1&i&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"No se selecciono ningun producto..."),e.qZA()())}let B=(()=>{class i{constructor(t,r,n,o,s,h,b){this.shopService=t,this.invFP=r,this.invrmService=n,this.orderService=o,this.router=s,this.auditService=h,this.auth=b,this.order=new D,this.submitted=!1,this.q="",this.queryChange=void 0,this.clientName="",this.orderProducts=[],this.reqMaterials=[],this.materials=[],this.getClientName=()=>this.clientName,this.getProductionDays=()=>Math.ceil(this.orderProducts.map(m=>m.leadTime*m.quantity).reduce((m,f)=>m+f,0)),this.getOrderInput=()=>history.state.order.orderWaitMaxTime,this.getRmOrderDeadline=(m,f,Z)=>{if(!(m&&f&&Z))return;const C=new Date(m);return C.setDate(new Date(m).getDate()-Z-f),this.formatDateString(C.toLocaleDateString())},this.getStartProductionDeadline=(m,f,Z)=>{if(!(m&&f&&Z))return;const C=new Date(m);return C.setDate(new Date(m).getDate()-f),this.formatDateString(C.toLocaleDateString())},this.orderProducts=history.state.order.orderProducts,this.reqMaterials=history.state.order.reqMaterials,this.materials=history.state.order.materials,this.auth.user$.subscribe(m=>this.username=m?.displayName);var l=new c.O("Fecha de Embarque","shipDate","date"),p=new c.O("Dias de Produccion","productionDays","number",void 0,this.getProductionDays),O=new c.O("Pedido de Insumos","orderInput","number",void 0,this.getOrderInput);this.formObj=[[new c.O("Numero de Orden de Pedido","name","text")],[new c.O("Nombre del Client","clientName","text",void 0,this.getClientName)],[l],[p,O],[new c.O("Pedido Materia Prima","rmOrderDeadline","date",void 0,this.getRmOrderDeadline,[l,p,O]),new c.O("Limite inicio de Produccion","startProductionDeadline","date",void 0,this.getStartProductionDeadline,[l,p,O])]]}ngOnInit(){}filterProducts(){this.queryChange=this.q}getSelectedElement(t){this.order&&(this.clientName=t.element.name,this.order.clientId=t.element.id)}validateForm(){return new Date(this.order?.rmOrderDeadline)>new Date}submit(t){this.order=t,this.editProducts()}updateMaterialStock(t){this.reqMaterials.forEach(r=>{this.shopService.create(r.matId,r.name,r.requested+r.amount,r.amount,P.EK.fromDate(new Date(this.order?.rmOrderDeadline)),r.stockId,(r.requested+r.amount)*r.price,t),this.invrmService.update(r.stockId,r.newStock),this.makeMatStockReport(r.matId,r.name,r.oldStock,r.newStock)}),this.materials.forEach(r=>{this.invrmService.update(r.stockId,r.newStock),this.makeMatStockReport(r.matId,r.name,r.oldStock,r.newStock)}),alert("Orden Creada satisfactoriamente"),this.router.navigate(["/orders"])}updateProductStock(t){this.orderProducts.forEach(r=>{this.invFP.update(r.stock.id,r.newStock),this.makeProdStockReport(r.id,r.name,r.stock,r.newStock)}),this.updateMaterialStock(t)}makeProdStockReport(t,r,n,o){this.auditService.create("Actualizacion",`Stock de Producto: ${r}`,this.username,JSON.stringify(o),JSON.stringify(n),t)}makeMatStockReport(t,r,n,o){this.auditService.create("Actualizacion",`Stock de Material: ${r}`,this.username,JSON.stringify(o),JSON.stringify(n),t)}editProducts(){if(this.validateForm()){var t=this.orderProducts.map(n=>({id:n.id,invId:n.invId,name:n.name,quantity:n.quantity}));this.orderService.create({orderProducts:t,state:0==this.reqMaterials.length?"EN PRODUCCION":"ESPERANDO MATERIAL",timestamp:P.EK.fromDate(new Date),...this.order}).then(n=>{this.updateProductStock(n.id),this.auditService.create("Crear",`Orden de Compra: ${n.name}`,this.username,JSON.stringify(n))})}else alert("La fecha de Limite del Pedido de material debe ser almenos 2 dias despu\xe9s del dia actual")}formatDateString(t){return t.split("/").reverse().join("/").replace(/\//g,"-")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(E.l),e.Y36(q.L),e.Y36(k.y),e.Y36(T.p),e.Y36(_.F0),e.Y36(L.C),e.Y36(Q.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-order"]],decls:16,vars:5,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap","my-auto"],["type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",1,"form-control","ms-2","me-2","float-end",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[1,"text-muted","mt-1"],[3,"path","query","selectedElement"],["class","edit-form",4,"ngIf"],[4,"ngIf"],[1,"edit-form"],["btnMes","Crear Orden","modalMessage","\xbfDesea continuar con la creacion de la Orden?",3,"formObj","formModel"],[1,"list-group","mt-3","mb-3"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"d-flex","flex-row","justify-content-between"],[1,"my-auto"],[1,"input-group"],["type","number","placeholder","Unidades","name","UP","readonly","","aria-label","quantity",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"input-group-text"],["type","number","readonly","","placeholder","Disponible en PT","name","stock","aria-label","stock",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"form-check","input-group-append","mx-2","my-auto"],["for","flexCheckDefault",1,"form-check-label"],["readonlys","","type","checkbox","id","flexCheckDefault","name","codeFilter",1,"form-check-input",3,"ngModel"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h3",2),e._uU(3,"Registrar orden"),e.qZA(),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(o){return r.q=o}),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return r.filterProducts()}),e._uU(6,"Buscar"),e.qZA()(),e._UZ(7,"hr"),e.TgZ(8,"div",5)(9,"div",6)(10,"h5",7),e._uU(11,"Lista de Clientes:"),e.qZA(),e.TgZ(12,"app-pagination",8),e.NdJ("selectedElement",function(o){return r.getSelectedElement(o)}),e.qZA()(),e.TgZ(13,"div",6),e.YNc(14,j,8,2,"div",9),e.YNc(15,R,4,0,"div",10),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("ngModel",r.q),e.xp6(8),e.Q6J("path","/clients")("query",r.queryChange),e.xp6(2),e.Q6J("ngIf",r.orderProducts),e.xp6(1),e.Q6J("ngIf",!r.orderProducts))},dependencies:[g.sg,g.O5,y.U,d._Y,d.Fj,d.wV,d.Wl,d.JJ,d.JL,d.On,d.F,M.Q]}),i})();var H=u(5872),G=u(2121);function K(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"li",11),e.NdJ("click",function(){const n=e.CHM(t),o=n.$implicit,s=n.index,h=e.oxw();return e.KtG(h.setActiveMaterial(o,s))}),e.TgZ(1,"span"),e._uU(2),e.qZA()()}if(2&i){const t=a.$implicit,r=a.index,n=e.oxw();e.ekj("active",r==n.currentIndex),e.xp6(2),e.hij(" ",t.name," ")}}function $(i,a){if(1&i&&(e.TgZ(0,"option",17),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.Q6J("ngValue",t),e.xp6(1),e.Oqu(t.name)}}function V(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",12)(1,"select",13),e.NdJ("ngModelChange",function(n){e.CHM(t);const o=e.oxw();return e.KtG(o.currentProvider=n)}),e.TgZ(2,"option",14),e._uU(3,"Seleccione Provedor"),e.qZA(),e.YNc(4,$,2,2,"option",15),e.qZA(),e.TgZ(5,"label",16),e._uU(6,"Provedores"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.currentProvider),e.xp6(1),e.Q6J("ngValue",void 0),e.xp6(2),e.Q6J("ngForOf",t.providers)}}function z(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.assignProvider())}),e._uU(1," Asignar Provedores"),e.qZA()}}function W(i,a){1&i&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"No se selecciono ningun producto..."),e.qZA()())}const X=[{path:"",component:N},{path:"add",component:I},{path:"add/create",component:B},{path:"add/providers",component:(()=>{class i{constructor(t,r,n){this.invrmService=t,this.provService=r,this.router=n,this.materials=[],this.reqMaterials=[],this.providers=[],this.orderProducts=[],this.q="",this.query="",this.formObj=[[new c.O("Nombre","name","text"),new c.O("Lote Minimo","minBatch","number")],[new c.O("Descripcion","description","text")],[new c.O("Precio","price","number")],[new c.O("Cantidad en Inventario","available","number")],[new c.O("Tiempo de Entrega","deliveryTime","number")],[new c.O("Area","area","text"),new c.O("Zona","zone","text"),new c.O("Posicion","position","text")]]}ngOnInit(){this.orderProducts=history.state.products,history.state.materials||this.router.navigate(["/orders/add"]),this.materials=this.updateMaterialStock(history.state.materials),this.reqMaterials=this.materials,this.reqMaterials.filter(t=>1==t.requestMaterial),this.materials.filter(t=>0==t.requestMaterial)}updateMaterialStock(t){var r=this;if(!t)return[];var n=[];return Object.entries(t).forEach(function(){var o=(0,v.Z)(function*(s,h){const{id:b,...l}=(yield r.invrmService.getStock(s[0]))||0;var p,O=!1,m=0;null!=l.available&&null!=l.commited&&null!=l.wating&&null!=l.watingCommited&&(s[1].quantity<=l.available?p={commited:+l.commited+s[1].quantity,available:+l.available-s[1].quantity}:(p={watingCommited:+l.watingCommited+s[1].quantity-+l.available,commited:+l.commited+ +l.available,available:0},s[1].quantity-l.available<=l.wating?p={wating:+l.wating+ +l.available-s[1].quantity,...p}:(m=s[1].quantity-+l.available-+l.wating,O=!0)),n.push({matId:s[0],name:s[1].name,stockId:b,oldStock:l,newStock:p,requestMaterial:O,requested:m}))});return function(s,h){return o.apply(this,arguments)}}()),console.log(n),n}initMaterialOrder(){this.reqMaterials.forEach(t=>{var r=t.requested<t.minBatch?t[1].minBatch-t.requested:0;t.newStock.wating+=r,t.amount=r})}filter(){this.q=this.query}setActiveMaterial(t,r){var n=this;return(0,v.Z)(function*(){n.providers=[],n.currentProvider=void 0,n.currentMaterial=t,n.currentIndex=r,n.providers=yield n.provService.getProvidersByMaterial(n.currentMaterial.matId)})()}assignProvider(){this.reqMaterials[this.currentIndex].minBatch=this.currentProvider.minBatch,this.reqMaterials[this.currentIndex].deliveryTime=this.currentProvider.deliveryTime,this.reqMaterials[this.currentIndex].price=this.currentProvider.price,alert("Provedor asignado satisfactoriamente")}getOrderWaitMaxTime(){return Math.max(...this.reqMaterials.map(t=>t.deliveryTime))}getSelectedElement(t){this.currentMaterial=t.element}submit(t){if(!t)return;this.initMaterialOrder();const r={orderWaitMaxTime:this.getOrderWaitMaxTime(),materials:this.materials,reqMaterials:this.reqMaterials,orderProducts:this.orderProducts};this.router.navigate(["orders/add/create"],{state:{order:r}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(k.y),e.Y36(H.H),e.Y36(_.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-order-providers"]],decls:17,vars:5,consts:[[1,"container","mt-5","vh-100"],[1,"text-muted","text-nowrap","my-auto"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[1,"text-muted","mt-1"],[1,"list-group","mt-3","mb-3"],["class","list-group-item",3,"active","click",4,"ngFor","ngForOf"],["class","form-floating",4,"ngIf"],["class","btn-outline-primary btn rounded-pill",3,"click",4,"ngIf"],["type","submit","modalMessage","\xbfSeguro que desea continuar crear una nueva orden?",3,"btnMessage","continue"],[4,"ngIf"],[1,"list-group-item",3,"click"],[1,"form-floating"],["id","floatingSelect","aria-label","providers select",1,"form-select",3,"ngModel","ngModelChange"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["for","floatingSelect"],[3,"ngValue"],[1,"btn-outline-primary","btn","rounded-pill",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Registrar orden"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"div",2)(5,"div",3)(6,"h5",4),e._uU(7,"Lista de Materiales:"),e.qZA(),e.TgZ(8,"ul",5),e.YNc(9,K,3,3,"li",6),e.qZA()(),e.TgZ(10,"div",3)(11,"h4"),e._uU(12,"Seleccione un Proovedor"),e.qZA(),e.YNc(13,V,7,3,"div",7),e.YNc(14,z,2,0,"button",8),e.TgZ(15,"app-warn-modal",9),e.NdJ("continue",function(o){return r.submit(o)}),e.qZA(),e.YNc(16,W,4,0,"div",10),e.qZA()()()),2&t&&(e.xp6(9),e.Q6J("ngForOf",r.reqMaterials),e.xp6(4),e.Q6J("ngIf",r.providers.length),e.xp6(1),e.Q6J("ngIf",r.reqMaterials),e.xp6(1),e.Q6J("btnMessage","Continuar"),e.xp6(1),e.Q6J("ngIf",!r.materials))},dependencies:[g.sg,g.O5,G.u,d.YN,d.Kr,d.EJ,d.JJ,d.On]}),i})()}];let ee=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.Bz.forChild(X),_.Bz]}),i})();var te=u(4466);let re=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,ee,te.m]}),i})()}}]);