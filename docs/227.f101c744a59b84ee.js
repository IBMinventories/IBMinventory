"use strict";(self.webpackChunkInvFurniture=self.webpackChunkInvFurniture||[]).push([[227],{4227:(ve,x,d)=>{d.r(x),d.d(x,{OrdersModule:()=>he});var p=d(6895),g=d(7486),A=d(1350),h=d(8996),f=d(5577),T=d(5698),C=d(3900),v=d(6451),y=d(8505),c=d(4985),e=d(4650),w=d(8132),_=d(9898),S=d(490),N=d(4004),k=d(7886),E=d(1402),J=d(33);let B=(()=>{class o{constructor(t){this.db=t,this.dbPath="/finishedOrders",this.productsRef=t.collection(this.dbPath)}getById(t){return this.productsRef.doc(t).get()}getAll(){return this.productsRef}create(t){return this.productsRef.add({...t})}downloadFile(t,r=`Ordenes Terminadas_${(new Date).toLocaleString("es-MX")}`){console.log(t);let i=this.ConvertToCSV(t,Object.keys(t[0]));console.log(i);let n=new Blob(["\ufeff"+i],{type:"text/csv;charset=utf-8;"}),s=document.createElement("a"),u=URL.createObjectURL(n);-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&s.setAttribute("target","_blank"),s.setAttribute("href",u),s.setAttribute("download",r+".csv"),s.style.visibility="hidden",document.body.appendChild(s),s.click(),document.body.removeChild(s)}ConvertToCSV(t,r){let i="object"!=typeof t?JSON.parse(t):t,n="",s="S.No,";for(let u in r)s+=r[u]+",";s=s.slice(0,-1),n+=s+"\r\n";for(let u=0;u<i.length;u++){let m=u+1+"";for(let ge in r)m+=","+i[u][r[ge]];n+=m+"\r\n"}return n}deleteAll(){return this.productsRef.get().pipe((0,N.U)(t=>t.docs),(0,y.b)(t=>this.downloadFile(t.map(r=>r.data()))),(0,k.u)(),(0,E.j)(500),(0,f.z)(t=>{var r=this.db.firestore.batch();return t.map(i=>r.delete(i.ref)),r.commit()}))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(J.ST))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var D=d(2121),q=d(7915),l=d(4006),Z=d(5748);function I(o,a){1&o&&(e.TgZ(0,"h6"),e._uU(1," El proceso puede ser tardado por favor espere."),e.qZA())}function L(o,a){1&o&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"Seleccione una orden..."),e.qZA()())}function R(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"li",32)(1,"div",33)(2,"div",34),e._uU(3),e.qZA(),e.TgZ(4,"div",35)(5,"input",36),e.NdJ("ngModelChange",function(i){const s=e.CHM(t).$implicit;return e.KtG(s.quantity=i)}),e.qZA(),e.TgZ(6,"span",37),e._uU(7,"U"),e.qZA()()()()}if(2&o){const t=a.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngModel",t.quantity)}}const Q=function(){return["btn-outline-success"]},j=function(){return["btn-outline-primary"]};function $(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",26)(1,"h4"),e._uU(2,"Orden"),e.qZA(),e.TgZ(3,"app-form",27),e.NdJ("formModel",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.submit(i))}),e.qZA(),e.TgZ(4,"p"),e._uU(5,"productos de la Orden: "),e.qZA(),e.TgZ(6,"ul",28),e.YNc(7,R,8,2,"li",29),e.qZA(),e.TgZ(8,"app-warn-modal",30),e.NdJ("continue",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.setOrderReady(i))}),e.qZA(),e.TgZ(9,"app-warn-modal",31),e.NdJ("continue",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.completeOrder(i))}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("mode",!0)("formObj",t.formObj)("placeHolder",t.currentOrder),e.xp6(4),e.Q6J("ngForOf",t.currentOrder.orderProducts),e.xp6(1),e.Q6J("classlist",e.DdM(6,Q)),e.xp6(1),e.Q6J("classlist",e.DdM(7,j))}}const Y=function(){return["btn-outline-danger","float-end"]};let G=(()=>{class o{constructor(t,r,i,n){this.OrderService=t,this.invFpService=r,this.invRmService=i,this.fo=n,this.title="",this.currentIndex=-1,this.q="",this.queryChange=void 0,this.codeFilter=!1,this.download=!1,this.formObj=[[new c.O("Numero de Orden de Pedido","name","text"),new c.O("Estado","state","text")],[new c.O("Nombre del Cliente","clientName","text")],[new c.O("Fecha de Embarque","shipDate","date")],[new c.O("Dias de Produccion","productionDays","number"),new c.O("Pedido de Insumos","orderInput","number")],[new c.O("Pedido Materia Prima","rmOrderDeadline","date"),new c.O("Limite inicio de Produccion","startProductionDeadline","date")],[new c.O("Notas","notes","text")]]}ngOnInit(){}submit(t){}getSelectedElement(t){this.currentOrder=t.element,this.currentIndex=t.index}filter(){this.queryChange={value:this.orderStateFilter,exact:!0},this.currentOrder=void 0}refreshList(){this.orderStateFilter=void 0,this.currentOrder=void 0}ngOnChanges(t){t.orderStateFilter&&(this.currentOrder=void 0)}editProducts(){}downloadFinishedOrders(t){!t||(this.download=!0,this.fo.deleteAll().subscribe({complete:()=>{this.download=!1,alert("Ordenes Terminadas Eliminadas correctamente")},error:()=>{this.download=!1,alert("Error inesperado, porfavor intente de nuevo")}}))}setOrderReady(t){if(t){if("ESPERANDO MATERIAL"==this.currentOrder?.state)return void alert('La orden NO puede establecerse como "LISTA" ya que est\xe1 "ESPERANDO MATERIAL".');(0,A.z)((0,h.D)(this.currentOrder?.orderProducts??[]).pipe((0,f.z)(r=>(0,h.D)(this.invFpService.getStock(r.invId)).pipe((0,T.q)(1),(0,C.w)(i=>this.invFpService.update(r.invId,{waiting:Math.max(0,+(i.waiting??0)-r.quantity),commited:Math.max(0,+(i.commited??0)+r.quantity)}))))),this.OrderService.update(this.currentOrder?.id,{state:"TERMINADA"})).subscribe({error:r=>alert("Error de conexion."),complete:()=>alert("La orden fue establecida como terminada satisfactoriamente")})}}completeOrder(t){if(t){if("EN PRODUCCION"==this.currentOrder?.state)return void alert('La orden NO puede establecerse como "TERMINADA" ya que est\xe1 "EN PRODUCCION".');var r=(0,h.D)(this.currentOrder?.orderProducts??[]).pipe((0,f.z)(n=>(0,h.D)(this.invFpService.getStock(n.invId)).pipe((0,T.q)(1),(0,C.w)(s=>this.invFpService.update(n.invId,{commited:Math.max(0,+(s.commited??0)-n.quantity)}))))),i=(0,h.D)(this.currentOrder?.orderMaterials??[]).pipe((0,f.z)(n=>this.invRmService.getStock(n.matId).pipe((0,T.q)(1),(0,C.w)(s=>this.invRmService.update(s.id,{commited:Math.max(0,+(s.commited??0)-+n.quantity)})))));(0,A.z)((0,v.T)(r,i),(0,v.T)(this.OrderService.delete(this.currentOrder?.id),this.fo.create({state:"ENTREGADA",...this.currentOrder}))).pipe((0,y.b)({complete:()=>alert("Orden Completada")})).subscribe(),this.refreshList()}}readableDate(t){var r=new Date(t);return r.getDate()+"/"+r.getMonth()+"/"+r.getFullYear()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(w.p),e.Y36(_.L),e.Y36(S.y),e.Y36(B))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-orders-list"]],features:[e.TTD],decls:37,vars:10,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex","form-inline"],[1,"text-muted","text-nowrap","my-auto"],[1,"form-floating","flex-fill","ms-5","me-2"],["name","state","id","floatingSelect","aria-label","providers select",1,"form-select",3,"ngModel","ngModelChange"],[3,"ngValue"],["ngValue","ESPERANDO MATERIAL"],["ngValue","EN PRODUCCION"],["ngValue","TERMINADA"],["ngValue","ENTREGADA"],["for","floatingSelect"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],["type","button","btnMessage","Descargar Ordenes Terminadas","modalMessage","Esta seguro de que desea descargar todas las ordenes terminadas?",3,"classlist","continue"],[4,"ngIf"],[1,"position-fixed","bottom-0","end-0",2,"margin","6rem","z-index","1070"],["routerLink","add",1,"btn","btn-success","btn-lg","rounded-pill"],["fill","#ffffff","version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","4vh","height","4vh","viewBox","0 0 47 47",0,"xml","space","preserve","stroke","#ffffff"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[3,"path","key","query","selectedElement"],[1,"col-lg-6"],["class","edit-form",4,"ngIf"],[1,"edit-form"],["btnMes","Crear Orden","modalMessage","\xbfDesea continuar con la creacion de la Orden?",3,"mode","formObj","placeHolder","formModel"],[1,"list-group","mt-1","mb-3"],["class","list-group-item",4,"ngFor","ngForOf"],["type","submit","btnMessage","Orden Lista","modalMessage","\xbfSeguro que desea marcar la orden como lista?",3,"classlist","continue"],["type","submit","btnMessage","Completar Orden","modalMessage","\xbfSeguro que desea completar la orden?",3,"classlist","continue"],[1,"list-group-item"],[1,"d-flex","flex-row","mx-auto"],[1,"my-auto","text-nowrap"],[1,"input-group","h-25","my-auto","ms-2"],["type","number","placeholder","Unidades","readonly","","name","UP","readonly","","aria-label","quantity",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"input-group-text"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Lista de Ordenes"),e.qZA(),e.TgZ(4,"div",3)(5,"select",4),e.NdJ("ngModelChange",function(n){return r.orderStateFilter=n}),e.TgZ(6,"option",5),e._uU(7,"TODAS"),e.qZA(),e.TgZ(8,"option",6),e._uU(9,"ESPERANDO MATERIAL"),e.qZA(),e.TgZ(10,"option",7),e._uU(11,"EN PRODUCCION"),e.qZA(),e.TgZ(12,"option",8),e._uU(13,"TERMINADA"),e.qZA(),e.TgZ(14,"option",9),e._uU(15,"ENTREGADA"),e.qZA()(),e.TgZ(16,"label",10),e._uU(17,"Buscar por Estado"),e.qZA()(),e.TgZ(18,"button",11),e.NdJ("click",function(){return r.filter()}),e._uU(19,"Buscar"),e.qZA(),e.TgZ(20,"app-warn-modal",12),e.NdJ("continue",function(n){return r.downloadFinishedOrders(n)}),e.qZA()(),e._UZ(21,"hr"),e.YNc(22,I,2,0,"h6",13),e.TgZ(23,"div",14)(24,"button",15),e.O4$(),e.TgZ(25,"svg",16),e._UZ(26,"g",17)(27,"g",18),e.TgZ(28,"g",19)(29,"g"),e._UZ(30,"path",20),e.qZA()()()()(),e.kcU(),e.TgZ(31,"div",21)(32,"div",22)(33,"app-pagination",23),e.NdJ("selectedElement",function(n){return r.getSelectedElement(n)}),e.qZA()(),e.TgZ(34,"div",24),e.YNc(35,L,4,0,"div",13),e.YNc(36,$,10,8,"div",25),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("ngModel",r.orderStateFilter),e.xp6(1),e.Q6J("ngValue",void 0),e.xp6(14),e.Q6J("classlist",e.DdM(9,Y)),e.xp6(2),e.Q6J("ngIf",r.download),e.xp6(11),e.Q6J("path","/orders")("key","state")("query",r.queryChange),e.xp6(2),e.Q6J("ngIf",!r.currentOrder),e.xp6(1),e.Q6J("ngIf",r.currentOrder))},dependencies:[p.sg,p.O5,g.rH,D.u,q.U,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.On,l.F,Z.Q]}),o})();var O=d(5861);class V{}var H=d(3602);class z{}var P=d(8179),K=d(9646),M=d(4128),W=d(5561),X=d(798),F=d(3651);let b=(()=>{class o{constructor(t,r,i,n,s,u,m){this.invFP=t,this.invrmService=r,this.orderService=i,this.router=n,this.shopService=s,this.auditService=u,this.auth=m,this.reqMaterials=[],this.materials=[],this.orderProducts=[],this.order=new z}updateProviderMaterialStock(){return this.materials?(0,M.D)(Array.from(Object.entries(this.materials)).map(t=>this.invrmService.getStock(t[0]).pipe((0,N.U)(r=>{if(null==r.available||null==r.commited||null==r.waiting||null==r.waitingCommited)return{};var i=Math.max(0,t[1].quantity-r.available),n=i>0,s={commited:+r.commited+Math.min(r.available,t[1].quantity),available:Math.max(0,+r.available-t[1].quantity),waiting:+r.waiting,waitingCommited:+r.waitingCommited+Math.max(0,t[1].quantity-r.available)};return{id:t[0],name:t[1].name,quantity:t[1].quantity,providers:t[1].providers,oldStock:r,newStock:s,requestMaterial:n,requested:i}})))):(0,K.of)([])}initMaterialOrder(){this.reqMaterials.forEach(t=>{var r=t.requested<t.minBatch?t.minBatch-t.requested:0;t.newStock.waiting+=+r,t.amount=r})}assignProvider(t,r){this.reqMaterials[t].minBatch=r.minBatch,this.reqMaterials[t].deliveryTime=r.deliveryTime,this.reqMaterials[t].price=r.price,alert("Provedor asignado satisfactoriamente")}getOrderWaitMaxTime(){return Math.max(...this.reqMaterials.map(t=>t.deliveryTime))}getTotalPrice(){console.log("AAAA");var t=this.orderProducts.reduce((r,i)=>("mxn"==i.currency?r.mxn=r.mxn?r.mxn+i.price*i.quantity:i.price*i.quantity:r.usd=r.usd?r.usd+i.price*i.quantity:i.price*i.quantity,r),[]);this.order.total=t}getTotalMaterials(){this.orderProducts?(this.orderProducts.forEach(t=>t.materials.forEach(r=>r.quantity*=t.quantity)),this.materials=this.orderProducts.flatMap(t=>t.materials).reduce((t,r)=>(t[r.id]=t[r.id]?{name:r.name,quantity:t[r.id].quantity+r.quantity,providers:r.providers}:{name:r.name,quantity:r.quantity,providers:r.providers},t),{})):this.materials=[]}useFP(t,r){var i=this;return(0,O.Z)(function*(){if(i.orderProducts[r].stock)i.orderProducts[r].available=i.orderProducts[r].available?void 0:i.orderProducts[r].stock.available;else{var n=(yield i.invFP.getStock(t))||0;i.orderProducts[r].available=n.available,i.orderProducts[r].stock=n}})()}updateOrderProductStock(){var t=this;this.orderProducts.forEach(function(){var r=(0,O.Z)(function*(i){var n;i.useFP?n={available:Math.max(0,i.stock.available-i.quantity),commited:+i.stock.commited+Math.min(i.quantity,i.stock.available),waiting:+i.stock.waiting+Math.max(0,i.quantity-i.stock.available)}:(i.stock||(i.stock=(yield t.invFP.getStock(i.id))||0),n={waiting:+i.stock.waiting+ +i.quantity}),i.newStock=n});return function(i){return r.apply(this,arguments)}}())}updateProductStock(){return(0,h.D)(this.orderProducts).pipe((0,f.z)(t=>(0,M.D)([this.invFP.update(t.id,t.newStock),this.makeProdStockReport(t.id,t.name,t.stock,t.newStock)])))}updateMaterialStock(t,r){console.log(t);var i=(0,h.D)(this.reqMaterials).pipe((0,f.z)(s=>(0,M.D)([this.shopService.create(s.id,s.name,s.requested+s.amount,s.amount,P.EK.fromDate(new Date(this.order?.rmOrderDeadline)),(s.requested+s.amount)*s.price,t),this.invrmService.update(s.id,s.newStock)]))),n=(0,h.D)(this.materials).pipe((0,f.z)(s=>(0,M.D)([this.invrmService.update(s.id,s.newStock)])));return(0,v.T)(i,n)}makeProdStockReport(t,r,i,n){return this.auditService.create(V.name,`Actualizacion Stock de Producto: ${r}`,this.auth.username,JSON.stringify(n),JSON.stringify(i),t)}makeMatStockReport(t,r,i,n){return this.auditService.create(H.N.name,`Actualizacion Stock de Material: ${r}`,this.auth.username,JSON.stringify(n),JSON.stringify(i),t)}editProducts(){var t=this.orderProducts.map(i=>({id:i.id,name:i.name,quantity:i.quantity})),r=0==this.reqMaterials.length?"EN PRODUCCION":"ESPERANDO MATERIAL";return console.log({orderProducts:t,state:r,orderMaterials:this.materials.concat(this.reqMaterials).map(i=>({matId:i.id,quantity:i.quantity})),timestamp:P.EK.fromDate(new Date),...this.order}),this.orderService.create({orderProducts:t,state:r,orderMaterials:this.materials.concat(this.reqMaterials).map(i=>({matId:i.id,quantity:i.quantity})),timestamp:P.EK.fromDate(new Date),...this.order}).then(i=>{(0,v.T)(this.updateMaterialStock(i.id,this.order.name??""),this.updateProductStock()).subscribe()}).finally(()=>alert("Orden Creada correctamente"))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(_.L),e.LFG(S.y),e.LFG(w.p),e.LFG(g.F0),e.LFG(W.l),e.LFG(X.C),e.LFG(F.e))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function ee(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"li",14)(1,"div",15)(2,"span",16),e._uU(3),e.qZA(),e.TgZ(4,"div",17)(5,"input",18),e.NdJ("ngModelChange",function(i){const s=e.CHM(t).$implicit;return e.KtG(s.quantity=i)}),e.qZA(),e.TgZ(6,"span",19),e._uU(7,"U"),e.qZA(),e.TgZ(8,"input",20),e.NdJ("ngModelChange",function(i){const s=e.CHM(t).$implicit;return e.KtG(s.available=i)}),e.qZA(),e.TgZ(9,"span",19),e._uU(10,"U"),e.qZA(),e.TgZ(11,"div",21)(12,"label",22),e._uU(13," Usar PT"),e.qZA(),e.TgZ(14,"input",23),e.NdJ("change",function(){const i=e.CHM(t),n=i.$implicit,s=i.index,u=e.oxw();return e.KtG(u.orderBuisness.useFP(n.invId,s))}),e.qZA()()(),e.TgZ(15,"button",24),e.NdJ("click",function(){const n=e.CHM(t).index,s=e.oxw();return e.KtG(s.removeProductFromOrder(n))}),e.qZA()()()}if(2&o){const t=a.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(3),e.Q6J("ngModel",t.available),e.xp6(6),e.Q6J("ngModel",t.useFP)}}let te=(()=>{class o{constructor(t,r,i){this.router=t,this.invFP=r,this.orderBuisness=i,this.orderProducts=[],this.materials=[],this.q="",this.query="",this.codeFilter=!1,this.continueDisabled=!0}ngOnInit(){}filter(){this.q=this.query}createOrder(){0==this.orderBuisness.orderProducts.filter(t=>!t.quantity||t.quantity<0||!Number.isInteger(t.quantity)).length?(console.log(this.orderBuisness.orderProducts),this.orderBuisness.getTotalMaterials(),this.orderBuisness.updateOrderProductStock(),this.orderBuisness.getTotalPrice(),this.orderBuisness.orderProducts.forEach(t=>{delete t.materials,delete t.available}),this.router.navigate(["orders/add/providers"])):alert("Hay productos sin cantidad asignada o menor a 0, porfavor rectifique.")}useFP(t,r){var i=this;return(0,O.Z)(function*(){if(console.log(t),i.orderProducts[r].stock)i.orderProducts[r].available=i.orderProducts[r].available?void 0:i.orderProducts[r].stock.available;else{var n=(yield i.invFP.getStock(t))||0;i.orderProducts[r].available=n.available,i.orderProducts[r].stock=n}})()}addProductToOrder(t){this.continueDisabled=!1,this.orderBuisness.orderProducts.find(i=>i.id==t.id)||this.orderBuisness.orderProducts.push({name:t.name,id:t.id,invId:t.invId,leadTime:t.leadTime,materials:t.materials,price:t.price,currency:t.currency})}validate(){}removeProductFromOrder(t){this.orderBuisness.orderProducts.splice(t,1),this.continueDisabled=!!this.orderBuisness.orderProducts.length}getSelectedElement(t){this.continueDisabled=!!this.orderBuisness.orderProducts.length,this.addProductToOrder(t.element)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.F0),e.Y36(_.L),e.Y36(b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-order-products"]],decls:22,vars:4,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap","my-auto"],["type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",1,"form-control","ms-2","me-2","float-end",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],[1,"list","row","shadow-sm"],[1,"col-md-3"],[1,"text-muted","mt-1"],[3,"path","query","selectedElement"],[1,"col-md-9"],[1,"edit-form"],[1,"mt-4","rounded-pill","btn","btn-outline-success","float-end",3,"click"],[1,"list-group","mt-3","mb-3"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"d-flex","flex-row","justify-content-between"],[1,"my-auto"],[1,"input-group"],["type","number","placeholder","Unidades","name","UP","min","1","step","1","oninput","validity.valid||(value='') || Number.isInteger(value);","aria-label","quantity",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"input-group-text"],["type","number","readonly","","placeholder","Disponible en PT","name","stock","aria-label","stock",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"form-check","input-group-append","mx-2","my-auto"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","id","flexCheckDefault","name","codeFilter",1,"form-check-input",3,"ngModel","change"],[1,"btn-close","my-auto","btn-sm","rounded-pill","float-end",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h3",2),e._uU(3,"Registrar orden"),e.qZA(),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(n){return r.query=n}),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return r.filter()}),e._uU(6,"Buscar"),e.qZA()(),e._UZ(7,"hr"),e.TgZ(8,"div",5)(9,"div",6)(10,"h5",7),e._uU(11,"Productos disponibles:"),e.qZA(),e.TgZ(12,"app-pagination",8),e.NdJ("selectedElement",function(n){return r.getSelectedElement(n)}),e.qZA()(),e.TgZ(13,"div",9)(14,"div",10)(15,"div")(16,"p"),e._uU(17,"productos de la Orden: "),e.qZA(),e.TgZ(18,"button",11),e.NdJ("click",function(){return r.createOrder()}),e._uU(19,"Continuar"),e.qZA()(),e.TgZ(20,"ul",12),e.YNc(21,ee,16,4,"li",13),e.qZA()()()()()),2&t&&(e.xp6(4),e.Q6J("ngModel",r.query),e.xp6(8),e.Q6J("path","/products")("query",r.q),e.xp6(9),e.Q6J("ngForOf",r.orderBuisness.orderProducts))},dependencies:[p.sg,l._Y,l.Fj,l.wV,l.Wl,l.JJ,l.JL,l.qQ,l.On,l.F,Z.Q]}),o})();var re=d(1135),U=d(727);function ie(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"li",15)(1,"div",16)(2,"span",17),e._uU(3),e.qZA(),e.TgZ(4,"div",18)(5,"input",19),e.NdJ("ngModelChange",function(i){const s=e.CHM(t).$implicit;return e.KtG(s.quantity=i)}),e.qZA(),e.TgZ(6,"span",20),e._uU(7,"U"),e.qZA(),e.TgZ(8,"input",21),e.NdJ("ngModelChange",function(i){const s=e.CHM(t).$implicit;return e.KtG(s.stock=i)}),e.qZA(),e.TgZ(9,"span",20),e._uU(10,"U"),e.qZA(),e.TgZ(11,"div",22)(12,"label",23),e._uU(13," Usar PT"),e.qZA(),e._UZ(14,"input",24),e.qZA()()()()}if(2&o){const t=a.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngModel",t.quantity),e.xp6(3),e.Q6J("ngModel",t.stock),e.xp6(6),e.Q6J("ngModel",t.useFP)}}function ne(o,a){1&o&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"No se selecciono ningun producto..."),e.qZA()())}let oe=(()=>{class o{constructor(t,r,i){this.router=t,this.auth=r,this.orderBusiness=i,this.submitted=!1,this.q="",this.queryChange=void 0,this.orderProducts=[],this.reqMaterials=[],this.materials=[],this.clientName="",this.clientName$=new re.X(this.clientName),this.create$=new U.w0,this.getClientName=()=>this.clientName,this.getProductionDays=()=>Math.ceil(this.orderBusiness.orderProducts.map(n=>n.leadTime*n.quantity).reduce((n,s)=>n+s,0)),this.getOrderInput=()=>this.order.orderWaitMaxTime,this.getRmOrderDeadline=(n,s,u)=>{if(!(n&&s&&u))return;const m=new Date(n);return m.setDate(new Date(n).getDate()-u-s),this.formatDateString(m)},this.getStartProductionDeadline=(n,s,u)=>{if(!(n&&s&&u))return;const m=new Date(n);return m.setDate(new Date(n).getDate()-s),this.formatDateString(m)},console.log(this.orderBusiness.order),0==Object.keys(this.orderBusiness.order).length&&this.router.navigate(["/orders/add"]),this.order=this.orderBusiness.order,console.log(this.order,this.orderBusiness.order),this.formObj=[[new c.O("Numero de Orden de Pedido","name","text")],[new c.O("Nombre del Client","clientName","text")],[new c.O("Fecha de Embarque","shipDate","date")],[new c.O("Dias de Produccion","productionDays","number"),new c.O("Pedido de Insumos","orderInput","number")],[new c.O("Pedido Materia Prima","rmOrderDeadline","date",[this.custom]),new c.O("Limite inicio de Produccion","startProductionDeadline","date")]]}ngAfterViewInit(){this.clientName$.subscribe(i=>this.formC.f.clientName.patchValue(i));var t=this.getProductionDays();this.formC.f.productionDays.patchValue(t),this.formC.f.productionDays.markAsTouched(),this.formC.f.orderInput.patchValue(this.order.orderWaitMaxTime),this.formC.f.orderInput.markAsTouched(),this.formC.f.shipDate.valueChanges.pipe((0,y.b)(i=>{this.formC.f.rmOrderDeadline.patchValue(this.getRmOrderDeadline(i,t,this.order.orderWaitMaxTime)),this.formC.f.rmOrderDeadline.markAsTouched(),this.formC.f.startProductionDeadline.patchValue(this.getStartProductionDeadline(i,t,this.order.orderWaitMaxTime)),this.formC.f.startProductionDeadline.markAsTouched()})).subscribe()}ngOnInit(){}filterProducts(){this.queryChange=this.q}getSelectedElement(t){this.order&&(this.clientName=t.element.name,this.clientName$.next(this.clientName),this.orderBusiness.order.clientId=t.element.id)}formatDateString(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}custom(t){return new Date(t.value)>new Date||null==t.value?null:{custom:"La fecha de Limite del Pedido de material debe ser almenos 2 dias despu\xe9s del dia actual"}}submit(t){this.orderBusiness.order=t,console.log(this.orderBusiness.order),this.orderBusiness.editProducts()}ngOnDestroy(){this.create$.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.F0),e.Y36(F.e),e.Y36(b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-order"]],viewQuery:function(t,r){if(1&t&&e.Gf(q.U,5),2&t){let i;e.iGM(i=e.CRH())&&(r.formC=i.first)}},decls:30,vars:14,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap","my-auto"],["type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",1,"form-control","ms-2","me-2","float-end",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[1,"text-muted","mt-1"],[3,"path","query","selectedElement"],["btnMes","Crear Orden","modalMessage","\xbfDesea continuar con la creacion de la Orden?",3,"formObj","formModel"],[1,"text-muted"],[1,"bold"],[1,"list-group","mt-3","mb-3"],["class","list-group-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"list-group-item"],[1,"d-flex","flex-row","justify-content-between"],[1,"my-auto"],[1,"input-group"],["type","number","placeholder","Unidades","name","UP","readonly","","aria-label","quantity",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"input-group-text"],["type","number","readonly","","placeholder","Disponible en PT","name","stock","aria-label","stock",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"form-check","input-group-append","mx-2","my-auto"],["for","flexCheckDefault",1,"form-check-label"],["readonly","","type","checkbox","id","flexCheckDefault","name","codeFilter",1,"form-check-input",3,"ngModel"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h3",2),e._uU(3,"Registrar orden"),e.qZA(),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(n){return r.q=n}),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return r.filterProducts()}),e._uU(6,"Buscar"),e.qZA()(),e._UZ(7,"hr"),e.TgZ(8,"div",5)(9,"div",6)(10,"h5",7),e._uU(11,"Lista de Clientes:"),e.qZA(),e.TgZ(12,"app-pagination",8),e.NdJ("selectedElement",function(n){return r.getSelectedElement(n)}),e.qZA()(),e.TgZ(13,"div",6)(14,"h4"),e._uU(15,"Nueva Orden"),e.qZA(),e.TgZ(16,"app-form",9),e.NdJ("formModel",function(n){return r.submit(n)}),e.qZA(),e.TgZ(17,"h4",10),e._uU(18,"Total: "),e.qZA(),e.TgZ(19,"h5",11),e._uU(20),e.ALo(21,"currency"),e.qZA(),e.TgZ(22,"h5",11),e._uU(23),e.ALo(24,"currency"),e.qZA(),e.TgZ(25,"p"),e._uU(26,"productos de la Orden: "),e.qZA(),e.TgZ(27,"ul",12),e.YNc(28,ie,15,4,"li",13),e.qZA()(),e.YNc(29,ne,4,0,"div",14),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("ngModel",r.q),e.xp6(8),e.Q6J("path","/clients")("query",r.queryChange),e.xp6(4),e.Q6J("formObj",r.formObj),e.xp6(4),e.Oqu(e.xi3(21,8,r.order.total.mxn,"MXN")),e.xp6(3),e.hij(" ",e.xi3(24,11,r.order.total.usd,"USD"),""),e.xp6(5),e.Q6J("ngForOf",r.orderBusiness.orderProducts),e.xp6(1),e.Q6J("ngIf",!r.orderProducts))},dependencies:[p.sg,p.O5,q.U,l._Y,l.Fj,l.wV,l.Wl,l.JJ,l.JL,l.On,l.F,Z.Q,p.H9]}),o})();var se=d(5872);function ae(o,a){1&o&&(e.TgZ(0,"span"),e.O4$(),e.TgZ(1,"svg",11),e._UZ(2,"path",12),e.qZA()())}function de(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"li",10),e.NdJ("click",function(){const i=e.CHM(t),n=i.$implicit,s=i.index,u=e.oxw();return e.KtG(u.setActiveMaterial(n,s))}),e._uU(1),e.YNc(2,ae,3,0,"span",9),e.qZA()}if(2&o){const t=a.$implicit,r=a.index,i=e.oxw();e.ekj("active",r==i.currentIndex),e.xp6(1),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("ngIf",t.minBatch)}}function le(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"li",10),e.NdJ("click",function(){const n=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.getSelectedProvider(n))}),e._uU(1),e.qZA()}if(2&o){const t=a.$implicit,r=a.index,i=e.oxw();e.ekj("active",r==i.currentIndex),e.xp6(1),e.hij(" ",t.name," ")}}function ce(o,a){1&o&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"No se selecciono ningun producto..."),e.qZA()())}const ue=[{path:"",component:G},{path:"add",component:te},{path:"add/create",component:oe},{path:"add/providers",component:(()=>{class o{constructor(t,r,i){this.orderBusiness=t,this.provService=r,this.router=i,this.stock$=new U.w0,this.materials=[],this.reqMaterials=[],this.providers=[],this.orderProducts=[],this.q="",this.query="",this.formObj=[[new c.O("Nombre","name","text"),new c.O("Lote Minimo","minBatch","number")],[new c.O("Descripcion","description","text")],[new c.O("Precio","price","number")],[new c.O("Cantidad en Inventario","available","number")],[new c.O("Tiempo de Entrega","deliveryTime","number")],[new c.O("Area","area","text"),new c.O("Zona","zone","text"),new c.O("Posicion","position","text")]]}ngOnInit(){(0==this.orderBusiness.materials.length||0==this.orderBusiness.orderProducts.length)&&this.router.navigate(["/orders/add"]),this.stock$=this.orderBusiness.updateProviderMaterialStock().subscribe(t=>{this.reqMaterials=t.filter(r=>r.requestMaterial),this.materials=t.filter(r=>!r.requestMaterial)})}ngOnDestroy(){this.stock$.unsubscribe()}initMaterialOrder(){this.reqMaterials.forEach(t=>{var r=t.requested<t.minBatch?t.minBatch-t.requested:0;t.newStock.waiting+=r,t.amount=r})}filter(){this.q=this.query}setActiveMaterial(t,r){var i=this;return(0,O.Z)(function*(){i.providers=[],i.currentProvider=void 0,i.currentMaterial=t,i.currentIndex=r,i.providers=i.currentMaterial.providers})()}assignProvider(){this.reqMaterials[this.currentIndex].minBatch=this.currentProvider.minBatch,this.reqMaterials[this.currentIndex].deliveryTime=this.currentProvider.deliveryTime,this.reqMaterials[this.currentIndex].price=this.currentProvider.price,this.reqMaterials[this.currentIndex].providerId=this.currentProvider.id,this.reqMaterials[this.currentIndex].providerName=this.currentProvider.name,alert("Provedor asignado satisfactoriamente")}getOrderWaitMaxTime(){return Math.max(...this.reqMaterials.map(t=>t.deliveryTime))}getSelectedElement(t){this.currentMaterial=t.element}getSelectedProvider(t){this.currentProvider=t,this.assignProvider(),this.currentMaterial=void 0}submit(t){0==this.reqMaterials.filter(i=>!i.hasOwnProperty("minBatch")).length?(this.reqMaterials.forEach(i=>{delete i.providers,delete i.requestMaterial}),this.materials.forEach(i=>{delete i.providers,delete i.requestMaterial}),this.initMaterialOrder(),this.orderBusiness.order.orderWaitMaxTime=this.getOrderWaitMaxTime(),this.orderBusiness.order.orderProducts=this.orderProducts,this.orderBusiness.materials=this.materials,this.orderBusiness.reqMaterials=this.reqMaterials,this.router.navigate(["orders/add/create"])):alert("Aun hay materiales sin proveedor asignador, porfavor rectifique.")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b),e.Y36(se.H),e.Y36(g.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-order-providers"]],decls:18,vars:4,consts:[[1,"container","mt-5","vh-100"],[1,"text-muted","text-nowrap","my-auto"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[1,"text-muted","mt-1"],[1,"list-group","mt-3","mb-3"],["class","list-group-item d-flex justify-content-between align-items-center",3,"active","click",4,"ngFor","ngForOf"],[1,"d-flex","d-inline"],["type","submit","modalMessage","\xbfSeguro que desea continuar a crear una nueva orden?",3,"btnMessage","continue"],[4,"ngIf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","25","height","25","fill","green","viewBox","0 0 16 16",1,"bi","bi-check"],["d","M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Registrar orden"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"div",2)(5,"div",3)(6,"h5",4),e._uU(7,"Lista de Materiales:"),e.qZA(),e.TgZ(8,"ul",5),e.YNc(9,de,3,4,"li",6),e.qZA()(),e.TgZ(10,"div",3)(11,"div",7)(12,"h4"),e._uU(13,"Seleccione un Proveedor"),e.qZA(),e.TgZ(14,"app-warn-modal",8),e.NdJ("continue",function(n){return r.submit(n)}),e.qZA()(),e.TgZ(15,"ul",5),e.YNc(16,le,2,3,"li",6),e.qZA(),e.YNc(17,ce,4,0,"div",9),e.qZA()()()),2&t&&(e.xp6(9),e.Q6J("ngForOf",r.reqMaterials),e.xp6(5),e.Q6J("btnMessage","Continuar"),e.xp6(2),e.Q6J("ngForOf",r.providers),e.xp6(1),e.Q6J("ngIf",!r.materials))},dependencies:[p.sg,p.O5,D.u]}),o})()}];let me=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(ue),g.Bz]}),o})();var pe=d(4466);let he=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,me,pe.m]}),o})()}}]);