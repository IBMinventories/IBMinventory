"use strict";(self.webpackChunkInvFurniture=self.webpackChunkInvFurniture||[]).push([[72],{2072:(P,Z,p)=>{p.r(Z),p.d(Z,{HistoryModule:()=>v});var e=p(6895),x=p(1194),t=p(4650),u=p(4006),C=p(5748);function r(n,m){if(1&n){const i=t.EpF();t.TgZ(0,"input",14),t.NdJ("ngModelChange",function(y){t.CHM(i);const f=t.oxw();return t.KtG(f.query=y)}),t.qZA()}if(2&n){const i=t.oxw();t.Q6J("ngModel",i.query)}}function a(n,m){if(1&n){const i=t.EpF();t.TgZ(0,"div",6)(1,"select",15),t.NdJ("ngModelChange",function(y){t.CHM(i);const f=t.oxw();return t.KtG(f.query=y)}),t.TgZ(2,"option",8),t._uU(3,"Todos"),t.qZA(),t.TgZ(4,"option",9),t._uU(5,"Materiales"),t.qZA(),t.TgZ(6,"option",9),t._uU(7,"Productos"),t.qZA(),t.TgZ(8,"option",9),t._uU(9,"Ordenes"),t.qZA()(),t.TgZ(10,"label",10),t._uU(11,"Inventario"),t.qZA()()}if(2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngModel",i.query),t.xp6(1),t.Q6J("ngValue",void 0),t.xp6(2),t.Q6J("ngValue","InvRawMaterial"),t.xp6(2),t.Q6J("ngValue","invFinishedProduct"),t.xp6(2),t.Q6J("ngValue","Orders")}}function c(n,m){1&n&&(t.TgZ(0,"th",17),t._uU(1,"En espera Comprometido"),t.qZA())}function h(n,m){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Oqu(i.watingCommited)}}function T(n,m){if(1&n&&(t.TgZ(0,"tr")(1,"th",20),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.YNc(7,h,2,1,"td",21),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA()()),2&n){const i=m.$implicit,g=t.oxw(2);t.xp6(2),t.Oqu(i.name),t.xp6(2),t.hij("",i.available," "),t.xp6(2),t.Oqu(i.commited),t.xp6(1),t.Q6J("ngIf","/RMreport"==g.reportPath),t.xp6(2),t.hij(" ",i.wating,""),t.xp6(2),t.hij(" ",g.invTotal(i),"")}}function s(n,m){if(1&n&&(t.TgZ(0,"table",16)(1,"thead")(2,"tr")(3,"th",17),t._uU(4,"Material"),t.qZA(),t.TgZ(5,"th",17),t._uU(6,"Disponible"),t.qZA(),t.TgZ(7,"th",17),t._uU(8,"Comprometido"),t.qZA(),t.YNc(9,c,2,0,"th",18),t.TgZ(10,"th",17),t._uU(11,"En espera"),t.qZA(),t.TgZ(12,"th",17),t._uU(13,"Total"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,T,12,6,"tr",19),t.qZA()()),2&n){const i=t.oxw();t.xp6(9),t.Q6J("ngIf","/RMreport"==i.reportPath),t.xp6(6),t.Q6J("ngForOf",i.reports)}}function _(n,m){if(1&n&&(t.TgZ(0,"tr")(1,"th",20),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&n){const i=m.$implicit;t.xp6(2),t.Oqu(i.name),t.xp6(2),t.hij("",i.process," "),t.xp6(2),t.Oqu(i.user),t.xp6(2),t.Oqu(i.prior),t.xp6(2),t.Oqu(i.posterior)}}function o(n,m){if(1&n&&(t.TgZ(0,"table",16)(1,"thead")(2,"tr")(3,"th",17),t._uU(4,"Operacion"),t.qZA(),t.TgZ(5,"th",17),t._uU(6,"Proceso"),t.qZA(),t.TgZ(7,"th",17),t._uU(8,"Autoriza"),t.qZA(),t.TgZ(9,"th",17),t._uU(10,"Estado Previo"),t.qZA(),t.TgZ(11,"th",17),t._uU(12,"Estado Posterior"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,_,11,5,"tr",19),t.qZA()()),2&n){const i=t.oxw();t.xp6(14),t.Q6J("ngForOf",i.reports)}}const d=[{path:"",component:(()=>{class n{constructor(){this.reportPath="/FPreport",this.reportPathChange="/FPreport",this.query=void 0,this.queryChange=void 0}ngOnInit(){}fetchedArray(i){this.reports=i}invTotal(i){return i.wating+i.commited+i.available+(i.watingCommited?i.watingCommited:0)}rootChanged(i){this.query=void 0,this.queryChange=void 0}filter(){this.queryChange=this.query}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-history-list"]],decls:25,vars:12,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap","my-auto"],["class","form-control ms-2 me-2 float-end","type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",3,"ngModel","ngModelChange",4,"ngIf"],[1,"input-group","ms-2"],["class","form-floating w-50",4,"ngIf"],[1,"form-floating","w-50"],["name","Inventory","id","floatingSelect","aria-label","providers select",1,"form-select",3,"ngModel","ngModelChange","change"],["disabled","",3,"ngValue"],[3,"ngValue"],["for","floatingSelect"],["type","submit",1,"btn","btn-outline-success","float-end","ms-2",3,"click"],[3,"path","mode","query","fetchedArray"],["class","table",4,"ngIf"],["type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",1,"form-control","ms-2","me-2","float-end",3,"ngModel","ngModelChange"],["name","Inventory","id","floatingSelect","aria-label","providers select",1,"form-select",3,"ngModel","ngModelChange"],[1,"table"],["scope","col"],["scope","col",4,"ngIf"],[4,"ngFor","ngForOf"],["scope","row"],[4,"ngIf"]],template:function(i,g){1&i&&(t.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),t._uU(3,"Historial Inventario"),t.qZA(),t.YNc(4,r,1,1,"input",3),t.TgZ(5,"div",4),t.YNc(6,a,12,5,"div",5),t.TgZ(7,"div",6)(8,"select",7),t.NdJ("ngModelChange",function(f){return g.reportPath=f})("change",function(f){return g.rootChanged(f)}),t.TgZ(9,"option",8),t._uU(10,"Seleccione Inventario"),t.qZA(),t.TgZ(11,"option",9),t._uU(12,"Inventario Productos"),t.qZA(),t.TgZ(13,"option",9),t._uU(14,"Inventario Materiales"),t.qZA(),t.TgZ(15,"option",9),t._uU(16,"Movimientos"),t.qZA()(),t.TgZ(17,"label",10),t._uU(18,"Inventario"),t.qZA()()(),t.TgZ(19,"button",11),t.NdJ("click",function(){return g.filter()}),t._uU(20,"Buscar"),t.qZA()(),t._UZ(21,"hr"),t.TgZ(22,"app-pagination",12),t.NdJ("fetchedArray",function(f){return g.fetchedArray(f)}),t.qZA(),t.YNc(23,s,16,2,"table",13),t.YNc(24,o,15,1,"table",13),t.qZA()),2&i&&(t.xp6(4),t.Q6J("ngIf","/audit"!=g.reportPath),t.xp6(2),t.Q6J("ngIf","/audit"==g.reportPath),t.xp6(2),t.Q6J("ngModel",g.reportPath),t.xp6(1),t.Q6J("ngValue",void 0),t.xp6(2),t.Q6J("ngValue","/FPreport"),t.xp6(2),t.Q6J("ngValue","/RMreport"),t.xp6(2),t.Q6J("ngValue","/audit"),t.xp6(7),t.Q6J("path",g.reportPath)("mode",!0)("query",g.queryChange),t.xp6(1),t.Q6J("ngIf","/audit"!=g.reportPath),t.xp6(1),t.Q6J("ngIf","/audit"==g.reportPath))},dependencies:[e.sg,e.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.F,C.Q]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[x.Bz.forChild(d),x.Bz]}),n})();var q=p(4466);let v=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.ez,A,u.u5,q.m]}),n})()},6535:(P,Z,p)=>{p.d(Z,{U:()=>t});var e=p(4650),x=p(33);let t=(()=>{class u{constructor(r,a){this.db=r,this.path=a,this.objectRef=r.collection(this.path)}pathSetter(r){this.path=r,this.objectRef=this.db.collection(this.path)}pathGetter(){return this.path}getNextBatch(r,a){return this.db.collection(this.path,a?c=>c.orderBy("timestamp","desc").startAfter(a.timestamp).limit(r):c=>c.orderBy("timestamp","desc").limit(r))}getAll(){return this.objectRef}getByKey(r,a){return this.db.collection(this.path,c=>c.where(r,"==",a))}create(r){return this.objectRef.add({...r})}update(r,a){return this.objectRef.doc(r).update(a)}delete(r){return this.objectRef.doc(r).delete()}filterByNameBatch(r,a,c){return this.db.collection(this.path,c?h=>h.where("name",">=",r).where("name","<=",r+"\uf8ff").orderBy("name","desc").startAfter(c.name).limit(a):h=>h.where("name",">=",r).where("name","<=",r+"\uf8ff").orderBy("name","desc").limit(a))}filterUrgent(r,a,c){return this.db.collection(this.path,c?h=>h.where("orderDeadline","<=",r).orderBy("orderDeadline","asc").startAfter(c.name).limit(a):h=>h.where("orderDeadline","<=",r).orderBy("orderDeadline","asc").limit(a))}filterByKeyBatch(r,a,c,h,T){return"orderDeadline"==r?this.filterUrgent(a,c,h):this.db.collection(this.path,h?T?s=>s.where(r,"==",a).orderBy("timestamp","desc").startAfter(h.timestamp).limit(c):s=>s.where(r,">=",a).where(r,"<=",a+"\uf8ff").orderBy(r,"desc").startAfter(h[r]).limit(c):T?s=>s.where(r,"==",a).orderBy("timestamp","desc").limit(c):s=>s.where(r,">=",a).where(r,"<=",a+"\uf8ff").orderBy(r,"desc").limit(c))}}return u.\u0275fac=function(r){return new(r||u)(e.LFG(x.ST),e.LFG("path"))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},5748:(P,Z,p)=>{p.d(Z,{Q:()=>T});var e=p(4650),x=p(4004),t=p(6535),u=p(6895);function C(s,_){if(1&s&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&s){const o=e.oxw().$implicit,l=e.oxw().$implicit,d=e.oxw(2);e.xp6(1),e.hij(" ",l[o].toDate().toLocaleDateString("es-MX",d.dateOptions)," ")}}function r(s,_){if(1&s&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&s){const o=e.oxw().$implicit,l=e.oxw().$implicit;e.xp6(1),e.hij(" ",l[o]," ")}}function a(s,_){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,C,2,1,"div",13),e.YNc(2,r,2,1,"div",14),e.qZA()),2&s){const o=_.$implicit;e.xp6(1),e.Q6J("ngIf","orderDeadline"==o),e.xp6(1),e.Q6J("ngIf","orderDeadline"!=o)}}function c(s,_){if(1&s){const o=e.EpF();e.TgZ(0,"li",10),e.NdJ("click",function(){const d=e.CHM(o),A=d.$implicit,q=d.index,v=e.oxw(2);return e.KtG(v.setActiveProduct(A,q))}),e.TgZ(1,"span",11),e.YNc(2,a,3,2,"div",12),e.qZA()()}if(2&s){const o=_.index,l=e.oxw(2);e.ekj("active",o==l.currentIndex),e.xp6(2),e.Q6J("ngForOf",l.showParams)}}function h(s,_){if(1&s&&(e.TgZ(0,"ul",8),e.YNc(1,c,3,3,"li",9),e.qZA()),2&s){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.elementArray)}}let T=(()=>{class s{constructor(o){this.fos=o,this.selectedElement=new e.vpe,this.fetchedArray=new e.vpe,this.showParams=["name"],this.mode=!1,this.key="name",this.dateOptions={weekday:"long",year:"numeric",month:"long",day:"numeric"},this.currentIndex=-1,this.isFetched=!1,this.firstCall=!0,this.disableNext=!1,this.disablePrev=!0,this.updateProducts=!1,this.elementArray=[],this.lastInResponses=[],this.cached=[],this.queryChange=void 0,this.filterKey="name",this.exact=!1,this.elementPerCall=2}ngOnInit(){this.path||(this.path="/products"),this.fos.pathSetter(this.path),this.nextPage(!0),this.filterKey=this.key,this.firstCall=!1}setActiveProduct(o,l){this.currentIndex=l,this.selectedElement.emit({element:o,index:l})}nextPage(o){var l;if(o){if(this.disableNext)return;l=this.elementArray.at(-1),this.lastInResponses.push(l)}else{if(this.disablePrev)return;this.lastInResponses?.pop(),l=this.lastInResponses?.at(-1)}this.req=this.queryChange?this.fos.filterByKeyBatch(this.key,this.queryChange,this.elementPerCall,l,this.exact):this.fos.getNextBatch(this.elementPerCall,l),this.req.get().pipe((0,x.U)(d=>d.docs.map(A=>({id:A.id,...A.data()})))).subscribe({next:d=>{if(!d.length)return this.disableNext=!0,void this.lastInResponses?.pop();this.elementArray=d,this.disableNext=d.length<this.elementPerCall,this.disablePrev=!l,this.isFetched=!0,this.mode&&this.fetchedArray.emit(this.elementArray)},error:d=>alert(d),complete:()=>console.log("SI completo")})}resetPagination(){this.disableNext=!1,this.disablePrev=!0,this.currentIndex=-1,this.currentElement=void 0,this.elementArray=[],this.lastInResponses=[]}ngOnChanges(o){this.firstCall||(this.isFetched=!1,o.path&&this.fos.pathSetter(o.path.currentValue),o.key&&console.log("Key Changed"),o.query&&(o.query.currentValue instanceof Object?(this.queryChange=o.query.currentValue.value,this.key=o.query.currentValue.key?o.query.currentValue.key:this.filterKey,this.exact=!!o.query.currentValue.exact):(this.queryChange=o.query.currentValue,this.key=this.filterKey,this.exact=!1),console.log(this.key,this.queryChange)),this.filterProducts())}filterProducts(){this.resetPagination(),this.nextPage(!0)}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(t.U))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-pagination"]],inputs:{query:"query",path:"path",showParams:"showParams",mode:"mode",key:"key"},outputs:{selectedElement:"selectedElement",fetchedArray:"fetchedArray"},features:[e._Bn([t.U,{provide:"path",useValue:"/RMreport"}]),e.TTD],decls:14,vars:1,consts:[["aria-label","Page navigation",1,"my-3"],[1,"pagination"],[1,"page-item"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],[1,"page-link","text-black"],["aria-label","Next",1,"page-link",3,"click"],["class","list-group mt-3 mb-3",4,"ngIf"],[1,"list-group","mt-3","mb-3"],["class","list-group-item",3,"active","click",4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"d-flex"],[4,"ngFor","ngForOf"],["class","ms-2",4,"ngIf"],[4,"ngIf"],[1,"ms-2"]],template:function(o,l){1&o&&(e.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"button",3),e.NdJ("click",function(){return l.nextPage(!1)}),e.TgZ(4,"span",4),e._uU(5,"\xab"),e.qZA()()(),e.TgZ(6,"li",2)(7,"span",5),e._uU(8," Anterior/Siguiente Registro"),e.qZA()(),e.TgZ(9,"li",2)(10,"button",6),e.NdJ("click",function(){return l.nextPage(!0)}),e.TgZ(11,"span",4),e._uU(12,"\xbb"),e.qZA()()()()(),e.YNc(13,h,2,1,"ul",7)),2&o&&(e.xp6(13),e.Q6J("ngIf",!l.mode&&l.isFetched))},dependencies:[u.sg,u.O5]}),s})()}}]);