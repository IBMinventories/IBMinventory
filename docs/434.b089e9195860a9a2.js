"use strict";(self.webpackChunkInvFurniture=self.webpackChunkInvFurniture||[]).push([[434],{2434:(j,v,d)=>{d.r(v),d.d(v,{MaterialModule:()=>Q});var c=d(6895),p=d(2827);class g{}var e=d(4650),C=d(33);let b=(()=>{class i{constructor(t){this.db=t,this.dbPath="/materials",this.materialsRef=t.collection(this.dbPath)}getAll(){return this.materialsRef}getNextBatch(t,r){return this.db.collection(this.dbPath,r?n=>n.orderBy("timestamp","desc").startAfter(r.timestamp).limit(t):n=>n.orderBy("timestamp","desc").limit(t))}create(t){return this.materialsRef.add({...t})}update(t,r){if(t)return this.materialsRef.doc(t).update(r)}delete(t){return this.materialsRef.doc(t).delete()}filterByNameBatchP(t,r,n){return this.db.collection("/products",n?a=>a.where("name",">=",t).where("name","<=",t+"\uf8ff").orderBy("name","desc").startAfter(n.name).limit(r):a=>a.where("name",">=",t).where("name","<=",t+"\uf8ff").orderBy("name","desc").limit(r))}filterByNameBatch(t,r,n){return this.db.collection(this.dbPath,n?a=>a.where("name",">=",t).where("name","<=",t+"\uf8ff").orderBy("name","desc").startAfter(n.name).limit(r):a=>a.where("name",">=",t).where("name","<=",t+"\uf8ff").orderBy("name","desc").limit(r))}filterByAreaBatch(t,r,n){return this.db.collection(this.dbPath,n?a=>a.where("area",">=",t).where("area","<=",t+"\uf8ff").orderBy("area","desc").startAfter(n.area).limit(r):a=>a.where("area",">=",t).where("area","<=",t+"\uf8ff").orderBy("area","desc").limit(r))}filterByName(t){return this.db.collection(this.dbPath,r=>r.where("name",">=",t).where("name","<=",t+"\uf8ff"))}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(C.ST))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var M=d(8179),m=d(6535),s=d(4985),x=d(3602);class u{}var _=d(798),y=d(490),A=d(5872),h=d(3651),f=d(7915);function Z(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",4)(2,"div",5)(3,"app-form",6),e.NdJ("formModel",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.submit(n))}),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("formObj",t.formObj)("mode",!t.userRole)}}function T(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"h4"),e._uU(2,"El material a sido registrado Satisfactoriamente!"),e.qZA(),e.TgZ(3,"button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.newMaterial())}),e._uU(4,"A\xf1adir Otro"),e.qZA()()}}let O=(()=>{class i{constructor(t,r,n,a,q){this.fos=t,this.auditService=r,this.invRMService=n,this.providerService=a,this.auth=q,this.material=new g,this.invMaterial=new x.N,this.provider=new u,this.submitted=!1,this.username="anonimo",this.Deps=["Corte y Ensamble","Carpinteria","Detallado y Pintura","Piel","Consumible","Almacen General","Empaque"],this.userRole="a",this.formObj=[[new s.O("Nombre","name","text"),new s.O("Cantidad en Inventario","available","number",[this.entero])],[new s.O("Descripcion","description","text")],[new s.O("Nombre del Proveedor","providerName","text"),new s.O("Precio","price","number",[this.positivo])],[new s.O("Lote Minimo","minBatch","number",[this.entero]),new s.O("Tiempo de Entrega","deliveryTime","number",[this.entero])],[new s.O("Area","area","text"),new s.O("Zona","zone","text"),new s.O("Posicion","position","text")]]}positivo(t){return+t.value>0||!t.value?null:{custom:"debe ser positivo"}}entero(t){return+t.value>0&&Number.isInteger(+t.value)||!t.value?null:{custom:"debe ser positivo y entero"}}submit(t){console.log(t),this.material={name:t.name,description:t.description,area:t.area,zone:t.zone,position:t.position},this.invMaterial={name:t.name,available:+t.available,commited:0,watingCommited:0,wating:0},this.provider={price:t.price,name:t.providerName,deliveryTime:t.deliveryTime,minBatch:t.minBatch}}saveMaterial(){this.material.timestamp=M.EK.fromDate(new Date),this.invMaterial.timestamp=M.EK.fromDate(new Date),this.fos.create(this.material).then(t=>{this.invRMService.create(this.invMaterial,t.id),this.providerService.create({materialId:t.id,...this.provider}),console.log("Created new material successfully!"),this.auditService.create(b.name,`Crear Material ${this.material.name}`,this.username,JSON.stringify(this.material)),this.submitted=!0})}newMaterial(){this.submitted=!1,this.material=new g}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.U),e.Y36(_.C),e.Y36(y.y),e.Y36(A.H),e.Y36(h.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-material"]],features:[e._Bn([m.U,{provide:"path",useValue:"/materials"}])],decls:6,vars:2,consts:[[1,"container","vh-100"],[1,"text-muted","mt-5"],[4,"ngIf"],["class","mt-3",4,"ngIf"],[1,"card","mt-4","bg-light","shadow-lg","border-0"],[1,"card-body"],["btnMes","Crear Material","modalMessage","\xbfDesea continuar con la creacion del material?",3,"formObj","mode","formModel"],[1,"mt-3"],[1,"btn","btn-outline-success","mt-2",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2," Registro del Material"),e.qZA(),e._UZ(3,"hr"),e.YNc(4,Z,4,2,"div",2),e.YNc(5,T,5,0,"div",3),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngIf",!r.submitted),e.xp6(1),e.Q6J("ngIf",r.submitted))},dependencies:[c.O5,f.U]}),i})();var w=d(5748),l=d(4006);function P(i,o){1&i&&(e.TgZ(0,"button",11),e.O4$(),e.TgZ(1,"svg",12),e._UZ(2,"g",13)(3,"g",14),e.TgZ(4,"g",15)(5,"g"),e._UZ(6,"path",16),e.qZA()()()())}function N(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.deleteMaterial())}),e._uU(1,"Eliminar"),e.qZA()}}const B=function(i){return{id:i}};function J(i,o){if(1&i&&(e.TgZ(0,"button",21),e._uU(1,"A\xf1adir Provedor"),e.qZA()),2&i){const t=e.oxw(2);e.Q6J("state",e.VKq(1,B,t.currentMaterial.id))}}function I(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"app-form",17),e.NdJ("formModel",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.submit(n))}),e.qZA(),e.YNc(2,N,2,0,"button",18),e.YNc(3,J,2,3,"button",19),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("formObj",t.formObj)("mode",!t.userRole)("placeHolder",t.currentMaterial),e.xp6(1),e.Q6J("ngIf",t.userRole),e.xp6(1),e.Q6J("ngIf",t.userRole)}}function R(i,o){1&i&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"p"),e._uU(3,"Seleccione un material..."),e.qZA()())}function S(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",4)(2,"div",5)(3,"app-form",6),e.NdJ("formModel",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.submit(n))}),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("formObj",t.formObj)("mode",!t.userRole)}}function U(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"h4"),e._uU(2,"El Provedor a sido registrado Satisfactoriamente!"),e.qZA(),e.TgZ(3,"button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.newProvider())}),e._uU(4,"A\xf1adir Otro"),e.qZA()()}}const E=[{path:"",component:(()=>{class i{constructor(t,r){this.materialService=t,this.auth=r,this.currentMaterial={},this.currentIndex=-1,this.q="",this.message="",this.auth.user$.subscribe(n=>this.userRole=n?.userRole),this.formObj=[[new s.O("Nombre","name","text").setReadOnly(!0)],[new s.O("Descripcion","description","text")],[new s.O("Area","area","text"),new s.O("Zona","zone","text"),new s.O("Posicion","position","text")]]}ngOnInit(){}isMaterial(){return 0!=Object.keys(this.currentMaterial).length}filter(){this.queryChange=this.q}refreshList(){this.paginator?.resetPagination(),this.currentMaterial={},this.currentIndex=-1}getSelectedElement(t){this.currentMaterial=t.element,this.currentIndex=t.index,this.message=""}submit(t){this.currentMaterial=t,this.updateMaterial()}updateMaterial(){const{name:t,...r}=this.currentMaterial;!this.currentMaterial||this.currentMaterial.id&&this.materialService.update(this.currentMaterial.id,r)?.then(()=>this.message="El material fue actualizado satisfactoriamente!").catch(n=>console.log(n))}deleteMaterial(){!this.currentMaterial||this.currentMaterial.id&&this.materialService.delete(this.currentMaterial.id).then(()=>{this.refreshList(),this.message="El material fue eliminado satisfactoriamente!"}).catch(t=>console.log(t))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b),e.Y36(h.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-material-list"]],viewQuery:function(t,r){if(1&t&&e.Gf(w.Q,5),2&t){let n;e.iGM(n=e.CRH())&&(r.paginator=n.first)}},decls:16,vars:6,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap"],["type","search","name","query","oninput","this.value = this.value.toLowerCase()","placeholder","Busqueda por Nombre","aria-label","Search",1,"form-control","ms-5","me-2","float-end",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-outline-success","float-end",3,"click"],[1,"position-fixed","bottom-0","end-0",2,"margin","6rem","z-index","1070"],["class","btn btn-success btn-lg rounded-pill","routerLink","add",4,"ngIf"],[1,"list","row","shadow-sm"],[1,"col-md-6"],[3,"path","query","selectedElement"],[4,"ngIf"],["routerLink","add",1,"btn","btn-success","btn-lg","rounded-pill"],["fill","#ffffff","version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","4vh","height","4vh","viewBox","0 0 47 47",0,"xml","space","preserve","stroke","#ffffff"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"],["btnMes","Editar Material","modalMessage","\xbfSeguro que desea editar el material?",3,"formObj","mode","placeHolder","formModel"],["type","button","class","ms-2 mb-2 btn btn-outline-danger rounded-pill",3,"click",4,"ngIf"],["class","btn btn-outline-secondary rounded-pill ms-2 mb-2","routerLink","provider",3,"state",4,"ngIf"],["type","button",1,"ms-2","mb-2","btn","btn-outline-danger","rounded-pill",3,"click"],["routerLink","provider",1,"btn","btn-outline-secondary","rounded-pill","ms-2","mb-2",3,"state"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Lista de Materiales"),e.qZA(),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(a){return r.q=a}),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return r.filter()}),e._uU(6,"Buscar"),e.qZA()(),e._UZ(7,"hr"),e.TgZ(8,"div",5),e.YNc(9,P,7,0,"button",6),e.qZA(),e.TgZ(10,"div",7)(11,"div",8)(12,"app-pagination",9),e.NdJ("selectedElement",function(a){return r.getSelectedElement(a)}),e.qZA()(),e.TgZ(13,"div",8),e.YNc(14,I,4,5,"div",10),e.YNc(15,R,4,0,"div",10),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("ngModel",r.q),e.xp6(5),e.Q6J("ngIf",r.userRole),e.xp6(3),e.Q6J("path","/materials")("query",r.queryChange),e.xp6(2),e.Q6J("ngIf",r.isMaterial()),e.xp6(1),e.Q6J("ngIf",!r.isMaterial()))},dependencies:[c.O5,p.rH,f.U,l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,w.Q]}),i})()},{path:"add",component:O},{path:"provider",component:(()=>{class i{constructor(t,r,n){this.fos=t,this.auth=r,this.audit=n,this.provider=new u,this.submitted=!1,this.username="anonimo",this.auth.user$.subscribe(a=>{this.username=a?.displayName,this.userRole=a?.userRole}),this.formObj=[[new s.O("Nombre del Proovedor","providerName","text"),new s.O("Precio","price","number")],[new s.O("Lote Minimo","minBatch","number"),new s.O("Tiempo de Entrega","deliveryTime","number")]]}submit(t){this.provider=t,this.saveProvider()}saveProvider(){!history.state.id||(this.provider.id=history.state.id,this.provider.materialId=history.state.id,this.fos.create(this.provider).then(()=>{this.audit.create(u.name,`Crear Provedor ${this.provider.name}`,this.username,JSON.stringify(this.provider)),alert("Proveedor creado correctamente!"),this.submitted=!0}))}newProvider(){this.submitted=!1,this.provider=new u}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.U),e.Y36(h.e),e.Y36(_.C))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-provider"]],features:[e._Bn([m.U,{provide:"path",useValue:"/providers"}])],decls:6,vars:2,consts:[[1,"container","vh-100"],[1,"text-muted","mt-5"],[4,"ngIf"],["class","mt-3",4,"ngIf"],[1,"card","mt-4","bg-light","shadow-lg","border-0"],[1,"card-body"],["btnMes","Crear Provedor","modalMessage","\xbfDesea continuar con la creacion del material?",3,"formObj","mode","formModel"],[1,"mt-3"],[1,"btn","btn-outline-success","mt-2",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2," Registro del Material"),e.qZA(),e._UZ(3,"hr"),e.YNc(4,S,4,2,"div",2),e.YNc(5,U,5,0,"div",3),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngIf",!r.submitted),e.xp6(1),e.Q6J("ngIf",r.submitted))},dependencies:[c.O5,f.U]}),i})()}];let F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz.forChild(E),p.Bz]}),i})();var Y=d(4466);let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,F,Y.m]}),i})()}}]);