"use strict";(self.webpackChunkInvFurniture=self.webpackChunkInvFurniture||[]).push([[596],{2596:(M,y,m)=>{m.r(y),m.d(y,{ProductModule:()=>$});var i=m(6895),P=m(1194),C=m(6535),e=m(4650),b=m(3651),s=m(4006),a=m(5748),n=m(4985),h=m(7915),_=m(727),p=m(8505),v=m(1350),d=m(33);let f=(()=>{class r{constructor(t){this.db=t,this.dbPath="/products",this.productsRef=t.collection(this.dbPath)}getById(t){return this.productsRef.doc(t).get()}getNextBatch(t,o){return this.db.collection(this.dbPath,o?c=>c.orderBy("timestamp","desc").startAfter(o.timestamp).limit(t):c=>c.orderBy("timestamp","desc").limit(t))}getPrevBatch(t,o,c){return this.db.collection(this.dbPath,u=>u.orderBy("timestamp","desc").startAt(o).endBefore(c).limit(t))}getBatch(t){return this.db.collection(this.dbPath,o=>o.limit(t).orderBy("timestamp","desc"))}getAll(){return this.productsRef}create(t){return this.productsRef.add({...t})}update(t,o){return this.productsRef.doc(t).update(o)}delete(t){return this.productsRef.doc(t).delete()}filterByNameBatch(t,o,c){return this.db.collection(this.dbPath,c?u=>u.where("name",">=",t).where("name","<=",t+"\uf8ff").orderBy("name","desc").startAfter(c.name).limit(o):u=>u.where("name",">=",t).where("name","<=",t+"\uf8ff").orderBy("name","desc").limit(o))}filterByCodeBatch(t,o,c){return this.db.collection(this.dbPath,c?u=>u.where("code",">=",t).where("code","<=",t+"\uf8ff").orderBy("code","desc").startAfter(c.code).limit(o):u=>u.where("code",">=",t).where("code","<=",t+"\uf8ff").orderBy("code","desc").limit(o))}filterByName(t){return this.db.collection(this.dbPath,o=>o.where("name",">=",t).where("name","<=",t+"\uf8ff"))}filterByCode(t){return this.db.collection(this.dbPath,o=>o.where("code",">=",t).where("code","<=",t+"\uf8ff"))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(d.ST))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var g=m(9898);function T(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.deleteProduct())}),e._uU(1," Eliminar "),e.qZA()}}function w(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",2)(1,"h4"),e._uU(2,"Producto"),e.qZA(),e.TgZ(3,"app-form",3),e.NdJ("formModel",function(c){e.CHM(t);const u=e.oxw();return e.KtG(u.submit(c))}),e.qZA(),e.YNc(4,T,2,0,"button",4),e.TgZ(5,"button",5),e._uU(6," Materiales "),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(3),e.Q6J("formObj",t.formObj)("mode",!t.userRole)("placeHolder",t.currentProduct),e.xp6(1),e.Q6J("ngIf",t.userRole),e.xp6(1),e.Q6J("state",t.currentProduct),e.xp6(3),e.Oqu(t.message)}}function Z(r,l){1&r&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"No fue posible acceder a este producto..."),e.qZA()())}let B=(()=>{class r{constructor(t,o,c){this.productService=t,this.auth=o,this.FpService=c,this.refreshList=new e.vpe,this.currentProduct={name:"",description:"",code:"",price:0,leadTime:0,stock:0,capacityByTurn:0},this.message="",this.onLeadTime$=new _.w0,this.round=u=>Math.round(100*u)/100,this.auth.user$.subscribe(u=>this.userRole=u?.userRole),this.formObj=[[new n.O("Nombre","name","text").setReadOnly(!0),new n.O("Codigo","code","text")],[new n.O("Descripcion","description","text")],[new n.O("Volumen","volume","number",[this.custom]),new n.O("Peso","weight","number",[this.custom]),new n.O("Unidad de Medida","units","text")],[new n.O("Precio","price","number",[this.custom]),new n.O("Tipo IVA","iva","number",[this.custom]),new n.O("Divisa","currency","select")],[new n.O("Cantidad en Inventario","stock","number"),new n.O("Unidad de CFDI","cfdiUnit","text"),new n.O("SKU","sku","text")],[new n.O("Capacidad por turno","capacityByTurn","number",[this.custom]),new n.O("Tiempo de Produccion","leadTime","number").setReadOnly(!0)]]}ngAfterViewInit(){this.onLeadTime$=this.formC.f.capacityByTurn.valueChanges.pipe((0,p.b)(t=>this.formC.f.leadTime.patchValue(this.round(1/t)))).subscribe()}ngOnInit(){this.message=""}custom(t){return t.value>0||null==t.value?null:{custom:"debe ser positivo"}}ngOnChanges(){this.message="",this.currentProduct={...this.product}}submit(t){this.currentProduct=t,this.updateProduct()}onNgDestory(){this.onLeadTime$.unsubscribe()}updateProduct(){const{stock:t,...o}=this.currentProduct;this.currentProduct.id&&(0,v.z)(this.productService.update(this.currentProduct.id,o),this.FpService.update(this.currentProduct.invId,{available:t})).subscribe({complete:()=>{this.refreshList.emit(),this.message="El producto fue actualizado satisfactoriamente!"},error:c=>alert("Ah ocurrido un error inesperado, intente de nuevo o recargue la p\xe1gina.")})}deleteProduct(){this.currentProduct.id&&this.productService.delete(this.currentProduct.id).then(()=>{this.refreshList.emit(),this.message="El producto fue eliminado satisfactoriamente!"}).catch(t=>console.log(t))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f),e.Y36(b.e),e.Y36(g.L))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-product-details"]],viewQuery:function(t,o){if(1&t&&e.Gf(h.U,5),2&t){let c;e.iGM(c=e.CRH())&&(o.formC=c.first)}},inputs:{product:"product"},outputs:{refreshList:"refreshList"},features:[e.TTD],decls:2,vars:2,consts:[["class","edit-form",4,"ngIf"],[4,"ngIf"],[1,"edit-form"],["btnMes","Editar Material","modalMessage","\xbfSeguro que desea editar el producto?",3,"formObj","mode","placeHolder","formModel"],["class","ms-2 btn btn-danger rounded-pill",3,"click",4,"ngIf"],["routerLink","material",1,"ms-2","btn","btn-secondary","rounded-pill",3,"state"],[1,"ms-2","btn","btn-danger","rounded-pill",3,"click"]],template:function(t,o){1&t&&(e.YNc(0,w,9,6,"div",0),e.YNc(1,Z,4,0,"div",1)),2&t&&(e.Q6J("ngIf",o.currentProduct),e.xp6(1),e.Q6J("ngIf",!o.currentProduct))},dependencies:[i.O5,P.rH,h.U]}),r})();function I(r,l){1&r&&(e.TgZ(0,"button",14),e.O4$(),e.TgZ(1,"svg",15),e._UZ(2,"g",16)(3,"g",17),e.TgZ(4,"g",18)(5,"g"),e._UZ(6,"path",19),e.qZA()()()())}function q(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div")(1,"app-product-details",20),e.NdJ("refreshList",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.refreshList())}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("product",t.currentProduct)}}function U(r,l){1&r&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"Seleccione un producto..."),e.qZA()())}let F=(()=>{class r{constructor(t){this.auth=t,this.title="",this.q="",this.query="",this.codeFilter=!1,this.userRole="a"}ngOnInit(){}refreshList(){this.currentProduct=void 0}filter(){this.q=this.codeFilter?{key:"code",value:this.query}:this.query,this.refreshList()}getSelectedElement(t){this.currentProduct=t.element}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(b.e))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-product-list"]],features:[e._Bn([C.U,{provide:"path",useValue:"/products"}])],decls:20,vars:7,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap"],[1,"ms-5","form-check"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","id","flexCheckDefault","name","codeFilter",1,"form-check-input",3,"ngModel","ngModelChange"],["id","query","type","search","name","query","placeholder","Buscar por Nombre o Codigo","aria-label","Search",1,"form-control","ms-2","me-2","float-end",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],[1,"position-fixed","bottom-0","end-0",2,"margin","6rem","z-index","1070"],["class","btn btn-success btn-lg rounded-pill","routerLink","add",4,"ngIf"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[3,"path","query","selectedElement"],[4,"ngIf"],["routerLink","add",1,"btn","btn-success","btn-lg","rounded-pill"],["fill","#ffffff","version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","4vh","height","4vh","viewBox","0 0 47 47",0,"xml","space","preserve","stroke","#ffffff"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"],[3,"product","refreshList"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Lista de Productos"),e.qZA(),e.TgZ(4,"div",3)(5,"label",4),e._uU(6," Filtro por Codigo "),e.qZA(),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(u){return o.codeFilter=u}),e.qZA()(),e.TgZ(8,"input",6),e.NdJ("ngModelChange",function(u){return o.query=u}),e.qZA(),e.TgZ(9,"button",7),e.NdJ("click",function(){return o.filter()}),e._uU(10,"Buscar"),e.qZA()(),e._UZ(11,"hr"),e.TgZ(12,"div",8),e.YNc(13,I,7,0,"button",9),e.qZA(),e.TgZ(14,"div",10)(15,"div",11)(16,"app-pagination",12),e.NdJ("selectedElement",function(u){return o.getSelectedElement(u)}),e.qZA()(),e.TgZ(17,"div",11),e.YNc(18,q,2,1,"div",13),e.YNc(19,U,4,0,"div",13),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("ngModel",o.codeFilter),e.xp6(1),e.Q6J("ngModel",o.query),e.xp6(5),e.Q6J("ngIf",o.userRole),e.xp6(3),e.Q6J("path","/products")("query",o.q),e.xp6(2),e.Q6J("ngIf",o.currentProduct),e.xp6(1),e.Q6J("ngIf",!o.currentProduct))},dependencies:[i.O5,P.rH,s._Y,s.Fj,s.Wl,s.JJ,s.JL,s.On,s.F,a.Q,B]}),r})();class A{}var O=m(8179),N=m(798);function E(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div")(1,"div",4)(2,"div",5)(3,"app-form",6),e.NdJ("formModel",function(c){e.CHM(t);const u=e.oxw();return e.KtG(u.submit(c))}),e.qZA()()()()}if(2&r){const t=e.oxw();e.xp6(3),e.Q6J("formObj",t.formObj)("mode",!t.userRole)}}function J(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",7)(1,"h4"),e._uU(2,"El producto a sido registrado Satisfactoriamente!"),e.qZA(),e.TgZ(3,"button",8),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.newProduct())}),e._uU(4,"A\xf1adir Otro"),e.qZA()()}}function D(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",14)(1,"select",15),e.NdJ("ngModelChange",function(c){e.CHM(t);const u=e.oxw();return e.KtG(u.q=c)}),e.TgZ(2,"option",16),e._uU(3,"Seleccione Inventario"),e.qZA(),e.TgZ(4,"option",17),e._uU(5,"CORTE Y ENSAMBLE"),e.qZA(),e.TgZ(6,"option",18),e._uU(7,"CONSUMIBLE"),e.qZA(),e.TgZ(8,"option",19),e._uU(9,"CARPINTERIA"),e.qZA()(),e.TgZ(10,"label",20),e._uU(11,"Inventario"),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.q),e.xp6(1),e.Q6J("ngValue",void 0)}}function S(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"input",21),e.NdJ("ngModelChange",function(c){e.CHM(t);const u=e.oxw();return e.KtG(u.q=c)}),e.qZA()}if(2&r){const t=e.oxw();e.Q6J("ngModel",t.q)}}function k(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",22)(1,"app-pagination",23),e.NdJ("selectedElement",function(c){e.CHM(t);const u=e.oxw();return e.KtG(u.getSelectedElement(c))}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("path","/materials")("query",t.queryChange)}}function L(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"li",29)(1,"div",30)(2,"span",31),e._uU(3),e.qZA(),e.TgZ(4,"div",32)(5,"input",33),e.NdJ("ngModelChange",function(c){const x=e.CHM(t).$implicit;return e.KtG(x.quantity=c)}),e.qZA(),e.TgZ(6,"span",34),e._uU(7,"U"),e.qZA()(),e.TgZ(8,"button",35),e.NdJ("click",function(){const u=e.CHM(t).index,x=e.oxw(2);return e.KtG(x.removeMaterialToProduct(u))}),e.qZA()()()}if(2&r){const t=l.$implicit;e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngModel",t.quantity)}}function Q(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"button",36),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.editMaterials())}),e._uU(1," Agregar Matriales "),e.qZA()}}function Y(r,l){if(1&r&&(e.TgZ(0,"div",24)(1,"h4"),e._uU(2,"Producto"),e.qZA(),e.TgZ(3,"h3",25),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Materiales del Producto: "),e.qZA(),e.TgZ(7,"ul",26),e.YNc(8,L,9,2,"li",27),e.qZA(),e.YNc(9,Q,2,0,"button",28),e.qZA()),2&r){const t=e.oxw();e.xp6(4),e.AsE("",t.product.name," - ",t.product.code,""),e.xp6(4),e.Q6J("ngForOf",t.productMaterials),e.xp6(1),e.Q6J("ngIf",t.userRole)}}function K(r,l){1&r&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"No fue posible acceder a este producto..."),e.qZA()())}function j(r,l){1&r&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"Seleccione un producto..."),e.qZA()())}const V=[{path:"",component:F},{path:"add",component:(()=>{class r{constructor(t,o,c,u){this.invFpService=t,this.auditService=o,this.fos=c,this.auth=u,this.product=new A,this.submitted=!1,this.username="anonimo",this.onLeadTime$=new _.w0,this.round=x=>Math.round(100*x)/100,this.auth.user$.subscribe(x=>{this.username=x?.displayName,this.userRole=x?.userRole}),this.formObj=[[new n.O("Nombre","name","text"),new n.O("Codigo","code","text")],[new n.O("Descripcion","description","text")],[new n.O("Volumen","volume","number",[this.custom]),new n.O("Peso","weight","number",[this.custom]),new n.O("Unidad de Medida","units","text")],[new n.O("Precio","price","number",[this.custom]),new n.O("Tipo IVA","iva","number",[this.custom]),new n.O("Divisa","currency","select",[],["MXN","USD"])],[new n.O("Cantidad en Inventario","stock","number"),new n.O("Unidad de CFDI","cfdiUnit","text"),new n.O("SKU","sku","text")],[new n.O("Capacidad por turno","capacityByTurn","number",[this.custom]),new n.O("Tiempo de Produccion","leadTime","number").setReadOnly(!0)]]}ngAfterViewInit(){this.onLeadTime$=this.formC.f.capacityByTurn.valueChanges.pipe((0,p.b)(t=>this.formC.f.leadTime.patchValue(this.round(1/t)))).subscribe()}custom(t){return t.value>0||null==t.value?null:{custom:"debe ser positivo"}}submit(t){this.product=t,this.saveProduct()}saveProduct(){if(this.product.timestamp=O.EK.fromDate(new Date),this.product.stock){if(this.product.stock<0)return void alert("El stock del producto debe ser un numero positivo.");var{stock:t,...o}=this.product;this.invFpService.create({available:t,commited:0,wating:0,timestamp:O.EK.fromDate(new Date)}).then(c=>{o.invId=c.id,this.fos.create(o),this.auditService.create(A.name,`Crear Producto: ${this.product.name}`,this.username,JSON.stringify(this.product)),this.submitted=!0})}}onNgDestory(){this.onLeadTime$.unsubscribe()}newProduct(){this.submitted=!1,this.product=new A}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(g.L),e.Y36(N.C),e.Y36(C.U),e.Y36(b.e))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-product"]],viewQuery:function(t,o){if(1&t&&e.Gf(h.U,5),2&t){let c;e.iGM(c=e.CRH())&&(o.formC=c.first)}},features:[e._Bn([C.U,{provide:"path",useValue:"/products"}])],decls:6,vars:2,consts:[[1,"container","vh-100"],[1,"text-muted","mt-5"],[4,"ngIf"],["class","mt-3",4,"ngIf"],[1,"card","mt-4","bg-light","shadow-lg","border-0"],[1,"card-body"],["btnMes","Crear Producto","modalMessage","\xbfDesea continuar con la creacion del producto?",3,"formObj","mode","formModel"],[1,"mt-3"],[1,"btn","btn-outline-success","mt-2",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2," Registro del Producto"),e.qZA(),e._UZ(3,"hr"),e.YNc(4,E,4,2,"div",2),e.YNc(5,J,5,0,"div",3),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngIf",!o.submitted),e.xp6(1),e.Q6J("ngIf",o.submitted))},dependencies:[i.O5,h.U]}),r})()},{path:"material",component:(()=>{class r{constructor(t,o,c){this.productService=t,this.router=o,this.auth=c,this.currentIndex=-1,this.title="",this.q="",this.queryChange=void 0,this.areaFilter="",this.productMaterials=[],this.auth.user$.subscribe(u=>this.userRole=u?.userRole)}ngOnInit(){history.state.id||this.router.navigate(["/products"]),this.product=history.state,this.product?.materials&&(this.productMaterials=this.product.materials)}filter(){this.queryChange=this.areaFilter?{key:"area",value:this.q,exact:!0}:this.q,this.currentMaterial=void 0,this.currentIndex=-1}onFilterChange(){this.q=void 0}getSelectedElement(t){this.currentMaterial=t.element,this.currentIndex=t.index,this.addMaterialToProduct(this.currentMaterial)}addMaterialToProduct(t){this.productMaterials.find(c=>c.id==t.id)||this.productMaterials.push({name:t.name,id:t.id})}removeMaterialToProduct(t){this.productMaterials.splice(t,1)}editMaterials(){this.product&&this.productMaterials&&this.productService.update(this.product?.id,{materials:this.productMaterials}).then(()=>{alert("Materiales Actualizados Satisfactoriamente"),this.router.navigate(["/products"])})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f),e.Y36(P.F0),e.Y36(b.e))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-product-materials"]],decls:19,vars:7,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap","my-auto"],[1,"ms-5","form-check"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","id","flexCheckDefault","name","areaFilter",1,"form-check-input",3,"ngModel","ngModelChange","change"],["class","form-floating ms-2 me-2 w-50",4,"ngIf"],["class","form-control ms-2 me-2 float-end","type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",3,"ngModel","ngModelChange",4,"ngIf"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],[1,"list","row","shadow-sm"],["class","col-md-6",4,"ngIf"],["ngClass","userRole ? ['col-md-6', 'col-md-12']",1,"col-md-6"],["class","edit-form",4,"ngIf"],[4,"ngIf"],[1,"form-floating","ms-2","me-2","w-50"],["name","Inventory","id","floatingSelect","aria-label","providers select",1,"form-select",3,"ngModel","ngModelChange"],["disabled","",3,"ngValue"],["ngValue","Corte y Ensamble"],["ngValue","Consumible"],["ngValue","Carpinteria"],["for","floatingSelect"],["type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",1,"form-control","ms-2","me-2","float-end",3,"ngModel","ngModelChange"],[1,"col-md-6"],[3,"path","query","selectedElement"],[1,"edit-form"],[1,"text-muted"],[1,"list-group","mt-3","mb-3"],["class","list-group-item",4,"ngFor","ngForOf"],["type","submit","class","btn btn-success mb-2 rounded-pill",3,"click",4,"ngIf"],[1,"list-group-item"],[1,"d-flex","flex-row","justify-content-between"],[1,"my-auto","mx-1"],[1,"input-group","mx-1"],["type","number","placeholder","Unidades por Producto","name","UP","aria-label","quantity",1,"form-control","input-sm",3,"ngModel","ngModelChange"],[1,"input-group-text"],[1,"btn-close","my-auto","btn-sm","rounded-pill","float-end",3,"click"],["type","submit",1,"btn","btn-success","mb-2","rounded-pill",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Lista de Materiales del Producto"),e.qZA(),e.TgZ(4,"div",3)(5,"label",4),e._uU(6," Filtro por Area "),e.qZA(),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(u){return o.areaFilter=u})("change",function(){return o.onFilterChange()}),e.qZA()(),e.YNc(8,D,12,2,"div",6),e.YNc(9,S,1,1,"input",7),e.TgZ(10,"button",8),e.NdJ("click",function(){return o.filter()}),e._uU(11,"Buscar"),e.qZA()(),e._UZ(12,"hr"),e.TgZ(13,"div",9),e.YNc(14,k,2,2,"div",10),e.TgZ(15,"div",11),e.YNc(16,Y,10,4,"div",12),e.YNc(17,K,4,0,"div",13),e.YNc(18,j,4,0,"div",13),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("ngModel",o.areaFilter),e.xp6(1),e.Q6J("ngIf",o.areaFilter),e.xp6(1),e.Q6J("ngIf",!o.areaFilter),e.xp6(5),e.Q6J("ngIf",o.userRole),e.xp6(2),e.Q6J("ngIf",o.product),e.xp6(1),e.Q6J("ngIf",!o.product),e.xp6(1),e.Q6J("ngIf",!o.product))},dependencies:[i.mk,i.sg,i.O5,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.Wl,s.EJ,s.JJ,s.JL,s.On,s.F,a.Q]}),r})()}];let G=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[P.Bz.forChild(V),P.Bz]}),r})();var H=m(4466);let $=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[i.ez,G,H.m]}),r})()},798:(M,y,m)=>{m.d(y,{C:()=>e});var i=m(8179),P=m(4650),C=m(33);let e=(()=>{class b{constructor(a){this.db=a,this.dbPath="/audit",this.objectsRef=a.collection(this.dbPath)}getNextBatch(a,n){return this.db.collection(this.dbPath,n?h=>h.orderBy("timestamp","desc").startAfter(n.timestamp).limit(a):h=>h.orderBy("timestamp","desc").limit(a))}create(a,n,h,_,p,v){var d={name:a,process:n,posterior:_,timestamp:i.EK.fromDate(new Date),user:h};return p&&(d.prior=p),v&&(d.itemId=v),this.objectsRef.add({...d})}update(a,n){return this.objectsRef.doc(a).update(n)}delete(a){return this.objectsRef.doc(a).delete()}filterByDateBatch(a,n,h,_,p){return console.log(h),this.db.collection(this.dbPath,v=>v.where("timestamp",">=",a).where("timestamp","<=",n).where("name","==",h).orderBy("timestamp","desc").limit(_))}filterByNameBatch(a,n,h){return this.db.collection(this.dbPath,h?_=>_.where("name",">=",a).where("name","<=",a+"\uf8ff").orderBy("name","desc").startAfter(h.name).limit(n):_=>_.where("name",">=",a).where("name","<=",a+"\uf8ff").orderBy("name","desc").limit(n))}filterByCodeBatch(a,n,h){return this.db.collection(this.dbPath,h?_=>_.where("code",">=",a).where("code","<=",a+"\uf8ff").orderBy("code","desc").startAfter(h.code).limit(n):_=>_.where("code",">=",a).where("code","<=",a+"\uf8ff").orderBy("code","desc").limit(n))}}return b.\u0275fac=function(a){return new(a||b)(P.LFG(C.ST))},b.\u0275prov=P.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},6535:(M,y,m)=>{m.d(y,{U:()=>C});var i=m(4650),P=m(33);let C=(()=>{class e{constructor(s,a){this.db=s,this.path=a,this.objectRef=s.collection(this.path)}pathSetter(s){this.path=s,this.objectRef=this.db.collection(this.path)}pathGetter(){return this.path}getNextBatch(s,a){return this.db.collection(this.path,a?n=>n.orderBy("timestamp","desc").startAfter(a.timestamp).limit(s):n=>n.orderBy("timestamp","desc").limit(s))}getAll(){return this.objectRef}getByKey(s,a){return this.db.collection(this.path,n=>n.where(s,"==",a))}create(s){return this.objectRef.add({...s})}update(s,a){return this.objectRef.doc(s).update(a)}delete(s){return this.objectRef.doc(s).delete()}filterByNameBatch(s,a,n){return this.db.collection(this.path,n?h=>h.where("name",">=",s).where("name","<=",s+"\uf8ff").orderBy("name","desc").startAfter(n.name).limit(a):h=>h.where("name",">=",s).where("name","<=",s+"\uf8ff").orderBy("name","desc").limit(a))}filterUrgent(s,a,n){return this.db.collection(this.path,n?h=>h.where("orderDeadline","<=",s).orderBy("orderDeadline","asc").startAfter(n.name).limit(a):h=>h.where("orderDeadline","<=",s).orderBy("orderDeadline","asc").limit(a))}filterByKeyBatch(s,a,n,h,_){return"orderDeadline"==s?this.filterUrgent(a,n,h):this.db.collection(this.path,h?_?p=>p.where(s,"==",a).orderBy("timestamp","desc").startAfter(h.timestamp).limit(n):p=>p.where(s,">=",a).where(s,"<=",a+"\uf8ff").orderBy(s,"desc").startAfter(h[s]).limit(n):_?p=>p.where(s,"==",a).orderBy("timestamp","desc").limit(n):p=>p.where(s,">=",a).where(s,"<=",a+"\uf8ff").orderBy(s,"desc").limit(n))}}return e.\u0275fac=function(s){return new(s||e)(i.LFG(P.ST),i.LFG("path"))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},5748:(M,y,m)=>{m.d(y,{Q:()=>_});var i=m(4650),P=m(4004),C=m(6535),e=m(6895);function b(p,v){if(1&p&&(i.TgZ(0,"div",15),i._uU(1),i.qZA()),2&p){const d=i.oxw().$implicit,f=i.oxw().$implicit,g=i.oxw(2);i.xp6(1),i.hij(" ",f[d].toDate().toLocaleDateString("es-MX",g.dateOptions)," ")}}function s(p,v){if(1&p&&(i.TgZ(0,"div"),i._uU(1),i.qZA()),2&p){const d=i.oxw().$implicit,f=i.oxw().$implicit;i.xp6(1),i.hij(" ",f[d]," ")}}function a(p,v){if(1&p&&(i.TgZ(0,"div"),i.YNc(1,b,2,1,"div",13),i.YNc(2,s,2,1,"div",14),i.qZA()),2&p){const d=v.$implicit;i.xp6(1),i.Q6J("ngIf","orderDeadline"==d),i.xp6(1),i.Q6J("ngIf","orderDeadline"!=d)}}function n(p,v){if(1&p){const d=i.EpF();i.TgZ(0,"li",10),i.NdJ("click",function(){const g=i.CHM(d),T=g.$implicit,w=g.index,Z=i.oxw(2);return i.KtG(Z.setActiveProduct(T,w))}),i.TgZ(1,"span",11),i.YNc(2,a,3,2,"div",12),i.qZA()()}if(2&p){const d=v.index,f=i.oxw(2);i.ekj("active",d==f.currentIndex),i.xp6(2),i.Q6J("ngForOf",f.showParams)}}function h(p,v){if(1&p&&(i.TgZ(0,"ul",8),i.YNc(1,n,3,3,"li",9),i.qZA()),2&p){const d=i.oxw();i.xp6(1),i.Q6J("ngForOf",d.elementArray)}}let _=(()=>{class p{constructor(d){this.fos=d,this.selectedElement=new i.vpe,this.fetchedArray=new i.vpe,this.showParams=["name"],this.mode=!1,this.key="name",this.dateOptions={weekday:"long",year:"numeric",month:"long",day:"numeric"},this.currentIndex=-1,this.isFetched=!1,this.firstCall=!0,this.disableNext=!1,this.disablePrev=!0,this.updateProducts=!1,this.elementArray=[],this.lastInResponses=[],this.cached=[],this.queryChange=void 0,this.filterKey="name",this.exact=!1,this.elementPerCall=2}ngOnInit(){this.path||(this.path="/products"),this.fos.pathSetter(this.path),this.nextPage(!0),this.filterKey=this.key,this.firstCall=!1}setActiveProduct(d,f){this.currentIndex=f,this.selectedElement.emit({element:d,index:f})}nextPage(d){var f;if(d){if(this.disableNext)return;f=this.elementArray.at(-1),this.lastInResponses.push(f)}else{if(this.disablePrev)return;this.lastInResponses?.pop(),f=this.lastInResponses?.at(-1)}this.req=this.queryChange?this.fos.filterByKeyBatch(this.key,this.queryChange,this.elementPerCall,f,this.exact):this.fos.getNextBatch(this.elementPerCall,f),this.req.get().pipe((0,P.U)(g=>g.docs.map(T=>({id:T.id,...T.data()})))).subscribe({next:g=>{if(!g.length)return this.disableNext=!0,void this.lastInResponses?.pop();this.elementArray=g,this.disableNext=g.length<this.elementPerCall,this.disablePrev=!f,this.isFetched=!0,this.mode&&this.fetchedArray.emit(this.elementArray)},error:g=>alert(g),complete:()=>console.log("SI completo")})}resetPagination(){this.disableNext=!1,this.disablePrev=!0,this.currentIndex=-1,this.currentElement=void 0,this.elementArray=[],this.lastInResponses=[]}ngOnChanges(d){this.firstCall||(this.isFetched=!1,d.path&&this.fos.pathSetter(d.path.currentValue),d.key&&console.log("Key Changed"),d.query&&(d.query.currentValue instanceof Object?(this.queryChange=d.query.currentValue.value,this.key=d.query.currentValue.key?d.query.currentValue.key:this.filterKey,this.exact=!!d.query.currentValue.exact):(this.queryChange=d.query.currentValue,this.key=this.filterKey,this.exact=!1),console.log(this.key,this.queryChange)),this.filterProducts())}filterProducts(){this.resetPagination(),this.nextPage(!0)}}return p.\u0275fac=function(d){return new(d||p)(i.Y36(C.U))},p.\u0275cmp=i.Xpm({type:p,selectors:[["app-pagination"]],inputs:{query:"query",path:"path",showParams:"showParams",mode:"mode",key:"key"},outputs:{selectedElement:"selectedElement",fetchedArray:"fetchedArray"},features:[i._Bn([C.U,{provide:"path",useValue:"/RMreport"}]),i.TTD],decls:14,vars:1,consts:[["aria-label","Page navigation",1,"my-3"],[1,"pagination"],[1,"page-item"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],[1,"page-link","text-black"],["aria-label","Next",1,"page-link",3,"click"],["class","list-group mt-3 mb-3",4,"ngIf"],[1,"list-group","mt-3","mb-3"],["class","list-group-item",3,"active","click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"d-flex"],[4,"ngFor","ngForOf"],["class","ms-2",4,"ngIf"],[4,"ngIf"],[1,"ms-2"]],template:function(d,f){1&d&&(i.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"button",3),i.NdJ("click",function(){return f.nextPage(!1)}),i.TgZ(4,"span",4),i._uU(5,"\xab"),i.qZA()()(),i.TgZ(6,"li",2)(7,"span",5),i._uU(8," Anterior/Siguiente Registro"),i.qZA()(),i.TgZ(9,"li",2)(10,"button",6),i.NdJ("click",function(){return f.nextPage(!0)}),i.TgZ(11,"span",4),i._uU(12,"\xbb"),i.qZA()()()()(),i.YNc(13,h,2,1,"ul",7)),2&d&&(i.xp6(13),i.Q6J("ngIf",!f.mode&&f.isFetched))},dependencies:[e.sg,e.O5]}),p})()}}]);