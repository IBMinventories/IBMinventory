"use strict";(self.webpackChunkInvFurniture=self.webpackChunkInvFurniture||[]).push([[72],{2072:(Z,u,o)=>{o.r(u),o.d(u,{HistoryModule:()=>C});var h=o(6895),d=o(9051),g=o(4004),p=o(8179),e=o(4650),m=o(798),f=o(3651),a=o(433);function y(s,l){if(1&s&&(e.TgZ(0,"div",24)(1,"div",25)(2,"h6",26),e._uU(3),e.qZA(),e._UZ(4,"hr"),e.TgZ(5,"span",27),e._uU(6,"Operacion Ejecutada: "),e.qZA(),e._uU(7),e.TgZ(8,"span",28),e._uU(9,"Usuario: "),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"div",29),e._uU(12),e.qZA()()),2&s){const i=l.$implicit,t=e.oxw();e.xp6(3),e.hij("",i.process," "),e.xp6(4),e.hij(" ",i.operation," "),e.xp6(3),e.hij(" ",t.UserName," "),e.xp6(2),e.hij(" ",i.timestamp.toDate()," ")}}const v=[{path:"",component:(()=>{class s{constructor(i,t){this.auditService=i,this.authService=t,this.showReportFP=!1,this.showAudit=!1,this.currentIndex=-1,this.title="",this.query=void 0,this.filter=!1,this.queryChange=void 0,this.areaFilter="",this.id="",this.productsPerCall=2,this.lastInResponses=[],this.disableNext=!1,this.disablePrev=!0,this.productMaterials=[]}ngOnInit(){this.nextPage(!0),this.changeService(),this.authService.user$.subscribe(i=>this.UserName=i?.displayName)}nextPage(i){var t;if(i){if(this.disableNext)return;this.reportsRM?.length&&this.lastInResponses?.push(this.reportsRM[this.reportsRM.length-1]),t=this.lastInResponses?.length?this.lastInResponses[this.lastInResponses?.length-1]:void 0}else{if(this.disablePrev)return;this.lastInResponses?.pop(),t=this.lastInResponses?.pop()}console.log(this.queryChange),(this.queryChange?this.auditService.filterByDateBatch(p.EK.fromDate(new Date(this.sDate)),p.EK.fromDate(new Date(this.nDate)),this.queryChange,this.productsPerCall,t):this.auditService.getNextBatch(this.productsPerCall,t)).snapshotChanges().pipe((0,g.U)(n=>n.map(c=>({id:c.payload.doc.id,...c.payload.doc.data()})))).subscribe(n=>{console.log(n),n.length?(this.reportsRM=n,this.disableNext=n.length<this.productsPerCall,this.disablePrev=!t):this.disableNext=!0},n=>{this.disableNext=!1})}changeService(){this.reportsRM=[],this.lastInResponses=[],this.disableNext=!1,this.disablePrev=!0,this.nextPage(!0)}filterMaterials(){this.filter=!0,this.queryChange=this.query,this.reportsRM=[],this.disableNext=!1,this.disablePrev=!0,this.lastInResponses=[],this.nextPage(!0)}setActiveMaterial(i,t){this.currentRM=i,this.currentIndex=t}removeMaterialToProduct(i){this.productMaterials.splice(i,1)}}return s.\u0275fac=function(i){return new(i||s)(e.Y36(m.C),e.Y36(f.e))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-history-list"]],decls:37,vars:5,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap","my-auto"],[1,"ms-5","form-check","mx-auto"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","id","flexCheckDefault","name","codeFilter",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"row","mx-auto","w-100"],[1,"col-sm-6"],["for","startDate",1,"ms-1"],["id","startDate","name","sDate","type","date",1,"form-control",3,"ngModel","ngModelChange"],["for","endDate",1,"ms-1"],["id","endDate","name","nDate","type","date",1,"form-control",3,"ngModel","ngModelChange"],["type","search","placeholder","Nombre del Producto","aria-label","Search","name","query",1,"form-control","mx-auto","w-50",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-outline-success","float-end","ms-2",3,"click"],["aria-label","Page navigation",1,"my-3"],[1,"pagination"],[1,"page-item"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],[1,"page-link","text-black"],["aria-label","Next",1,"page-link",3,"click"],[1,"list","row","shadow-sm"],[1,"col-md-12","my-3"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-body"],[1,"card-title","text-muted"],[1,"fw-bold"],[1,"fw-bold","ms-3"],[1,"card-footer"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),e._uU(3,"Historial Inventario"),e.qZA(),e.TgZ(4,"div",3)(5,"label",4),e._uU(6," Mostrar Reportes PT "),e.qZA(),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(n){return t.showReportFP=n}),e.qZA()(),e.TgZ(8,"div",6)(9,"div",7)(10,"label",8),e._uU(11,"Inicio"),e.qZA(),e.TgZ(12,"input",9),e.NdJ("ngModelChange",function(n){return t.sDate=n}),e.qZA()(),e.TgZ(13,"div",7)(14,"label",10),e._uU(15,"Fin"),e.qZA(),e.TgZ(16,"input",11),e.NdJ("ngModelChange",function(n){return t.nDate=n}),e.qZA()()(),e.TgZ(17,"input",12),e.NdJ("ngModelChange",function(n){return t.query=n}),e.qZA(),e.TgZ(18,"button",13),e.NdJ("click",function(){return t.filterMaterials()}),e._uU(19,"Buscar"),e.qZA()(),e._UZ(20,"hr"),e.TgZ(21,"nav",14)(22,"ul",15)(23,"li",16)(24,"button",17),e.NdJ("click",function(){return t.nextPage(!1)}),e.TgZ(25,"span",18),e._uU(26,"\xab"),e.qZA()()(),e.TgZ(27,"li",16)(28,"span",19),e._uU(29," Anterior/Siguiente Registro"),e.qZA()(),e.TgZ(30,"li",16)(31,"button",20),e.NdJ("click",function(){return t.nextPage(!0)}),e.TgZ(32,"span",18),e._uU(33,"\xbb"),e.qZA()()()()(),e.TgZ(34,"div",21)(35,"div",22),e.YNc(36,y,13,4,"div",23),e.qZA()()()),2&i&&(e.xp6(7),e.Q6J("ngModel",t.showReportFP),e.xp6(5),e.Q6J("ngModel",t.sDate),e.xp6(4),e.Q6J("ngModel",t.nDate),e.xp6(1),e.Q6J("ngModel",t.query),e.xp6(19),e.Q6J("ngForOf",t.reportsRM))},dependencies:[h.sg,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.On,a.F]}),s})()}];let M=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.Bz.forChild(v),d.Bz]}),s})(),C=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[h.ez,M,a.u5]}),s})()}}]);