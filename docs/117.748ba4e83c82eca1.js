"use strict";(self.webpackChunkInvFurniture=self.webpackChunkInvFurniture||[]).push([[117],{9117:(B,O,d)=>{d.r(O),d.d(O,{ShoppingModule:()=>V});var u=d(6895),p=d(9051),h=d(5861),c=d(4985),f=d(8179),e=d(4650),A=d(5561),_=d(490),T=d(8132),S=d(798),M=d(3651),y=d(2121),C=d(7915),s=d(433),x=d(5748);function b(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"input",22),e.NdJ("ngModelChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.query=o)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("ngModel",t.query)}}function J(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"select",23),e.NdJ("ngModelChange",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.orderStateFilter=o)}),e.TgZ(1,"option",24),e._uU(2,"TODAS"),e.qZA(),e.TgZ(3,"option",25),e._uU(4,"URGENTE"),e.qZA()()}if(2&n){const t=e.oxw();e.Q6J("ngModel",t.orderStateFilter),e.xp6(1),e.Q6J("ngValue",void 0)}}function q(n,a){1&n&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"Seleccione una orden..."),e.qZA()())}const w=function(){return["btn-outline-success"]},N=function(){return["btn-outline-primary"]};function F(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",26)(1,"h4"),e._uU(2,"Orden de Compra"),e.qZA(),e.TgZ(3,"app-form",27),e.NdJ("formModel",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.submit(o))}),e.qZA(),e.TgZ(4,"app-warn-modal",28),e.NdJ("continue",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.activateOrder(o))}),e.qZA(),e.TgZ(5,"app-warn-modal",29),e.NdJ("continue",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.completeOrder(o))}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("formObj",t.formObj)("mode",!0)("placeHolder",t.currentOrder),e.xp6(1),e.Q6J("classlist",e.DdM(5,w)),e.xp6(1),e.Q6J("classlist",e.DdM(6,N))}}const E=function(){return["name","orderDeadline"]};let U=(()=>{class n{constructor(t,r,o,i,v){this.OrderService=t,this.invrmService=r,this.sellOrderService=o,this.audit=i,this.auth=v,this.currentIndex=-1,this.username="anonimo",this.query="",this.queryChange=void 0,this.codeFilter=!1,this.filterKey="name",this.dateOptions={weekday:"long",year:"numeric",month:"long",day:"numeric"},this.auth.user$.subscribe(m=>this.username=m?.displayName),this.formObj=[[new c.O("Nombre del Material","name","text")],[new c.O("Fecha Limite del Material","orderDeadline","date"),new c.O("Fecha de Emision de Orden","emissionDate","date")],[new c.O("Cantidad Solicitada","requiredMaterial","number"),new c.O("Costo del Pedido","cost","number")]]}ngOnInit(){}refreshList(){this.currentOrder=void 0,this.currentIndex=-1}removeProductFromOrder(t){}submit(t){}getSelectedElement(t){console.log(this.currentOrder),this.currentOrder=t.element,this.currentIndex=t.index}editOrder(t){if(this.currentOrder&&this.currentOrder.requestedAmount){if(this.currentOrder.requestedAmount>t.requestedAmount)return void alert("No puede pedir menos material del requerido para una orden activa");this.OrderService.update(this.currentOrder?.id,{requiredMaterial:t.requiredMaterial}),this.audit.create("Editar",`Orden de Compra ${t.name}`,this.username,JSON.stringify(t),JSON.stringify(this.currentOrder),this.currentOrder.id)}}completeOrder(t){var r=this;!t||this.currentOrder&&this.OrderService.update(this.currentOrder.id,{fulfilled:!0}).then((0,h.Z)(function*(){r.refreshList();var o=yield r.invrmService.getStock(r.currentOrder?.materialId);if(r.currentOrder?.stockId&&null!=r.currentOrder?.requestedAmount&&null!=r.currentOrder?.requiredMaterial&&null!=o.watingCommited&&null!=o.commited&&null!=o.wating&&null!=o.available){var i={available:o.available+r.currentOrder.requestedAmount,waiting:o.wating-r.currentOrder?.requestedAmount,watingCommited:o.watingCommited-r.currentOrder.requiredMaterial+r.currentOrder.requestedAmount,commited:o.commited+r.currentOrder?.requiredMaterial-r.currentOrder.requestedAmount};r.invrmService.update(r.currentOrder.stockId,i).then(()=>{r.currentOrder?.orderId&&r.sellOrderService.update(r.currentOrder?.orderId,{state:"EN PRODUCCI\xd3N"}),r.audit.create("Editar",`Stock de Material: ${r.currentOrder?.name}`,r.username,JSON.stringify(i),JSON.stringify(o))})}})).catch(o=>console.log(o))}activateOrder(t){if(t&&this.currentOrder){const r=this.currentOrder.emissionDate;this.currentOrder.emissionDate=f.EK.fromDate(new Date),this.OrderService.update(this.currentOrder.id,{emissionDate:this.currentOrder.emissionDate}).then(()=>{this.audit.create("Editar",`Orden de Compra: ${this.currentOrder?.name}`,this.username,this.currentOrder?.emissionDate,r)})}}filter(){this.queryChange=this.codeFilter&&"URGENTE"==this.orderStateFilter?{key:"orderDeadline",value:f.EK.fromDate(new Date)}:{key:"name",value:this.query}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.l),e.Y36(_.y),e.Y36(T.p),e.Y36(S.C),e.Y36(M.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-shop-list"]],decls:27,vars:9,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap"],[1,"ms-5","form-check"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","id","flexCheckDefault","name","codeFilter",1,"form-check-input",3,"ngModel","ngModelChange"],["id","query","class","form-control mx-2 float-end","type","search","name","query","placeholder","Buscar por Nombre o Codigo","aria-label","Search",3,"ngModel","ngModelChange",4,"ngIf"],["class","form-select mx-2","name","state","aria-label","Default select example",3,"ngModel","ngModelChange",4,"ngIf"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],[1,"position-fixed","bottom-0","end-0",2,"margin","6rem","z-index","1070"],["routerLink","add",1,"btn","btn-success","btn-lg","rounded-pill"],["fill","#ffffff","version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","4vh","height","4vh","viewBox","0 0 47 47",0,"xml","space","preserve","stroke","#ffffff"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[3,"path","showParams","query","selectedElement"],[1,"col-lg-6"],[4,"ngIf"],["class","edit-form",4,"ngIf"],["id","query","type","search","name","query","placeholder","Buscar por Nombre o Codigo","aria-label","Search",1,"form-control","mx-2","float-end",3,"ngModel","ngModelChange"],["name","state","aria-label","Default select example",1,"form-select","mx-2",3,"ngModel","ngModelChange"],[3,"ngValue"],["ngValue","URGENTE"],[1,"edit-form"],["btnMes","Registar Orden","modalMessage","\xbfDesea continuar con el registro de la orden?",3,"formObj","mode","placeHolder","formModel"],["type","submit","btnMessage","Activar Orden","modalMessage","\xbfSeguro que desea activar la orden como lista?",3,"classlist","continue"],["type","submit","btnMessage","Completar Orden","modalMessage","\xbfSeguro que desea completar la orden?",3,"classlist","continue"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Lista de Ordenes"),e.qZA(),e.TgZ(4,"div",3)(5,"label",4),e._uU(6," Filtrar por Estado "),e.qZA(),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(i){return r.codeFilter=i}),e.qZA()(),e.YNc(8,b,1,1,"input",6),e.YNc(9,J,5,2,"select",7),e.TgZ(10,"button",8),e.NdJ("click",function(){return r.filter()}),e._uU(11,"Buscar"),e.qZA()(),e._UZ(12,"hr"),e.TgZ(13,"div",9)(14,"button",10),e.O4$(),e.TgZ(15,"svg",11),e._UZ(16,"g",12)(17,"g",13),e.TgZ(18,"g",14)(19,"g"),e._UZ(20,"path",15),e.qZA()()()()(),e.kcU(),e.TgZ(21,"div",16)(22,"div",17)(23,"app-pagination",18),e.NdJ("selectedElement",function(i){return r.getSelectedElement(i)}),e.qZA()(),e.TgZ(24,"div",19),e.YNc(25,q,4,0,"div",20),e.YNc(26,F,6,7,"div",21),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("ngModel",r.codeFilter),e.xp6(1),e.Q6J("ngIf",!r.codeFilter),e.xp6(1),e.Q6J("ngIf",r.codeFilter),e.xp6(14),e.Q6J("path","/shopOrder")("showParams",e.DdM(8,E))("query",r.queryChange),e.xp6(2),e.Q6J("ngIf",!r.currentOrder),e.xp6(1),e.Q6J("ngIf",r.currentOrder))},dependencies:[u.O5,p.rH,y.u,C.U,s._Y,s.YN,s.Kr,s.Fj,s.Wl,s.EJ,s.JJ,s.JL,s.On,s.F,x.Q]}),n})();class g{}var Z=d(6535),R=d(3602),D=d(5872);function I(n,a){if(1&n&&(e.TgZ(0,"option",15),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("ngValue",t),e.xp6(1),e.Oqu(t.name)}}function L(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",9)(1,"select",10),e.NdJ("ngModelChange",function(o){e.CHM(t);const i=e.oxw(2);return e.KtG(i.currentProvider=o)}),e.TgZ(2,"option",11),e._uU(3,"Seleccione Provedor"),e.qZA(),e.YNc(4,I,2,2,"option",12),e.qZA(),e.TgZ(5,"label",13),e._uU(6,"Provedores"),e.qZA(),e.TgZ(7,"app-form",14),e.NdJ("formModel",function(o){e.CHM(t);const i=e.oxw(2);return e.KtG(i.submit(o))}),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.currentProvider),e.xp6(1),e.Q6J("ngValue",void 0),e.xp6(2),e.Q6J("ngForOf",t.providers),e.xp6(3),e.Q6J("formObj",t.formObj)}}function Q(n,a){1&n&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"No se selecciono ningun producto..."),e.qZA()())}function Y(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",16)(1,"h4"),e._uU(2,"El producto a sido registrado Satisfactoriamente!"),e.qZA(),e.TgZ(3,"button",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.newShopRM())}),e._uU(4,"A\xf1adir Otro"),e.qZA()()}}function G(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h5",5),e._uU(4,"Lista de Materiales:"),e.qZA(),e.TgZ(5,"app-pagination",6),e.NdJ("selectedElement",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.getSelectedElement(o))}),e.qZA()(),e.TgZ(6,"div",4)(7,"h4"),e._uU(8,"Seleccione un Proovedor"),e.qZA(),e.YNc(9,L,8,4,"div",7),e.YNc(10,Q,4,0,"div",2),e.qZA(),e.YNc(11,Y,5,0,"div",8),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(5),e.Q6J("path","/materials")("query",t.queryChange),e.xp6(4),e.Q6J("ngIf",t.providers.length),e.xp6(1),e.Q6J("ngIf",!t.currentMaterial),e.xp6(1),e.Q6J("ngIf",t.submitted)}}const H=[{path:"",component:U},{path:"add",component:(()=>{class n{constructor(t,r,o,i,v){this.auditService=t,this.fos=r,this.auth=o,this.provider=i,this.invrmService=v,this.providers=[],this.ShopRM=new g,this.submitted=!1,this.username="anonimo",this.round=l=>Math.round(100*l)/100,this.auth.user$.subscribe(l=>this.username=l?.displayName);const m=new c.O("Cantidad Solicitada","requestedAmount","number");this.formObj=[[new c.O("Nombre del Material","MatName","text","",()=>this.currentMaterial?.name).setReadOnly(!0)],[new c.O("Fecha Limite del Material","orderDeadline","date"),new c.O("Fecha de Emision de Orden","emissionDate","date")],[m,new c.O("Costo del Pedido","cost","number","",l=>this.currentProvider?.price&&l?this.currentProvider?.price*l:0,[m])]]}getSelectedElement(t){var r=this;return(0,h.Z)(function*(){r.currentMaterial=t.element,r.currentMaterial&&(r.providers=yield r.provider.getProvidersByMaterial(r.currentMaterial.id))})()}submit(t){this.ShopRM=t,this.saveShopRM()}saveShopRM(){var t=this;this.ShopRM.timestamp=f.EK.fromDate(new Date),this.fos.create(this.ShopRM).then((0,h.Z)(function*(){var{wating:r,...o}=yield t.invrmService.getStock(t.currentMaterial?.id);if(r&&t.ShopRM.requestedAmount&&t.currentMaterial){var i={wating:r+t.ShopRM.requestedAmount,...o};t.invrmService.update(o.id,i),t.auditService.create(R.N.name,`Actualizacion Stock Material: ${t.currentMaterial.name}`,t.username,JSON.stringify(i),JSON.stringify(o))}t.auditService.create(g.name,`Crear Orden de Compra: ${t.ShopRM.name}`,t.username,JSON.stringify(t.ShopRM)),t.submitted=!0}))}newShopRM(){this.submitted=!1,this.ShopRM=new g}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(S.C),e.Y36(Z.U),e.Y36(M.e),e.Y36(D.H),e.Y36(_.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-shop-order"]],features:[e._Bn([Z.U,{provide:"path",useValue:"/shopOrder"}])],decls:5,vars:1,consts:[[1,"container","vh-100"],[1,"text-muted","mt-5"],[4,"ngIf"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[1,"text-muted","mt-1"],[3,"path","query","selectedElement"],["class","form-floating",4,"ngIf"],["class","mt-3",4,"ngIf"],[1,"form-floating"],["id","floatingSelect","aria-label","providers select",1,"form-select","mt-2","mb-2",3,"ngModel","ngModelChange"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["for","floatingSelect"],["btnMes","Registar Proveedor","modalMessage","\xbfDesea continuar con el registro del proveedor?",3,"formObj","formModel"],[3,"ngValue"],[1,"mt-3"],[1,"btn","btn-outline-success","mt-2",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2," Registro Orden de Compra de Material"),e.qZA(),e._UZ(3,"hr"),e.YNc(4,G,12,5,"div",2),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngIf",!r.submitted))},dependencies:[u.sg,u.O5,C.U,s.YN,s.Kr,s.EJ,s.JJ,s.On,x.Q]}),n})()}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(H),p.Bz]}),n})();var P=d(4466);let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,K,P.m]}),n})()}}]);