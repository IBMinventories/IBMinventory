"use strict";(self.webpackChunkInvFurniture=self.webpackChunkInvFurniture||[]).push([[72],{2072:(J,p,a)=>{a.r(p),a.d(p,{HistoryModule:()=>U});var l=a(6895),d=a(2827),t=a(4650),c=a(798),s=a(4006),g=a(2121),m=a(5748);function h(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"input",15),t.NdJ("ngModelChange",function(u){t.CHM(e);const i=t.oxw();return t.KtG(i.query=u)}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("ngModel",e.query)}}function _(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"select",16),t.NdJ("ngModelChange",function(u){t.CHM(e);const i=t.oxw();return t.KtG(i.query=u)}),t.TgZ(2,"option",9),t._uU(3,"Todos"),t.qZA(),t.TgZ(4,"option",9),t._uU(5,"Materiales"),t.qZA(),t.TgZ(6,"option",9),t._uU(7,"Productos"),t.qZA(),t.TgZ(8,"option",9),t._uU(9,"Ordenes"),t.qZA()(),t.TgZ(10,"label",10),t._uU(11,"Inventario"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.query),t.xp6(1),t.Q6J("ngValue",void 0),t.xp6(2),t.Q6J("ngValue","InvRawMaterial"),t.xp6(2),t.Q6J("ngValue","invFinishedProduct"),t.xp6(2),t.Q6J("ngValue","Orders")}}function f(o,r){1&o&&(t.TgZ(0,"th",18),t._uU(1,"En espera Comprometido"),t.qZA())}function Z(o,r){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.watingCommited)}}function y(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"th",21),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.YNc(7,Z,2,1,"td",22),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA()()),2&o){const e=r.$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij("",e.available," "),t.xp6(2),t.Oqu(e.commited),t.xp6(1),t.Q6J("ngIf","/RMreport"==n.reportPath),t.xp6(2),t.hij(" ",e.wating,""),t.xp6(2),t.hij(" ",n.invTotal(e),"")}}function T(o,r){if(1&o&&(t.TgZ(0,"table",17)(1,"thead")(2,"tr")(3,"th",18),t._uU(4),t.qZA(),t.TgZ(5,"th",18),t._uU(6,"Disponible"),t.qZA(),t.TgZ(7,"th",18),t._uU(8,"Comprometido"),t.qZA(),t.YNc(9,f,2,0,"th",19),t.TgZ(10,"th",18),t._uU(11,"En espera"),t.qZA(),t.TgZ(12,"th",18),t._uU(13,"Total"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,y,12,6,"tr",20),t.qZA()()),2&o){const e=t.oxw();t.xp6(4),t.Oqu("/FPreport"==e.reportPath?"Producto":"Material"),t.xp6(5),t.Q6J("ngIf","/RMreport"==e.reportPath),t.xp6(6),t.Q6J("ngForOf",e.reports)}}function q(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"th",21),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&o){const e=r.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij("",e.process," "),t.xp6(2),t.Oqu(e.user),t.xp6(2),t.Oqu(e.prior),t.xp6(2),t.Oqu(e.posterior)}}function A(o,r){if(1&o&&(t.TgZ(0,"table",17)(1,"thead")(2,"tr")(3,"th",18),t._uU(4,"Operacion"),t.qZA(),t.TgZ(5,"th",18),t._uU(6,"Proceso"),t.qZA(),t.TgZ(7,"th",18),t._uU(8,"Autoriza"),t.qZA(),t.TgZ(9,"th",18),t._uU(10,"Estado Previo"),t.qZA(),t.TgZ(11,"th",18),t._uU(12,"Estado Posterior"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,q,11,5,"tr",20),t.qZA()()),2&o){const e=t.oxw();t.xp6(14),t.Q6J("ngForOf",e.reports)}}const C=function(){return["btn-outline-danger","float-end","btn-sm"]},x=[{path:"",component:(()=>{class o{constructor(e){this.audit=e,this.reportPath="/FPreport",this.reportPathChange="/FPreport",this.query=void 0,this.queryChange=void 0}ngOnInit(){}fetchedArray(e){this.reports=e}invTotal(e){return e.wating+e.commited+e.available+(e.watingCommited?e.watingCommited:0)}deleteAudit(e){!e||this.audit.deleteAll()}rootChanged(e){this.query=void 0,this.queryChange=void 0}filter(){this.queryChange=this.query}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.C))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-history-list"]],decls:26,vars:14,consts:[[1,"container","mt-5","vh-100"],["role","search",1,"d-flex"],[1,"text-muted","text-nowrap","my-auto"],["class","form-control ms-2 me-2 float-end","oninput","this.value = this.value.toLowerCase()","type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",3,"ngModel","ngModelChange",4,"ngIf"],[1,"input-group","ms-2"],["class","form-floating w-50",4,"ngIf"],[1,"form-floating","w-50"],["name","Inventory","id","floatingSelect","aria-label","providers select",1,"form-select",3,"ngModel","ngModelChange","change"],["disabled","",3,"ngValue"],[3,"ngValue"],["for","floatingSelect"],["type","submit",1,"btn","btn-outline-success","float-end","ms-2",3,"click"],["type","button","btnMessage","Eliminar Audiciones","modalMessage","Esta seguro de que desea descargar todas las ordenes terminadas?",3,"classlist","continue"],[3,"path","mode","query","fetchedArray"],["class","table",4,"ngIf"],["oninput","this.value = this.value.toLowerCase()","type","search","name","query","placeholder","Buscar por Nombre","aria-label","Search",1,"form-control","ms-2","me-2","float-end",3,"ngModel","ngModelChange"],["name","Inventory","id","floatingSelect","aria-label","providers select",1,"form-select",3,"ngModel","ngModelChange"],[1,"table"],["scope","col"],["scope","col",4,"ngIf"],[4,"ngFor","ngForOf"],["scope","row"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"form",1)(2,"h4",2),t._uU(3,"Historial Inventario"),t.qZA(),t.YNc(4,h,1,1,"input",3),t.TgZ(5,"div",4),t.YNc(6,_,12,5,"div",5),t.TgZ(7,"div",6)(8,"select",7),t.NdJ("ngModelChange",function(i){return n.reportPath=i})("change",function(i){return n.rootChanged(i)}),t.TgZ(9,"option",8),t._uU(10,"Seleccione Inventario"),t.qZA(),t.TgZ(11,"option",9),t._uU(12,"Inventario Productos"),t.qZA(),t.TgZ(13,"option",9),t._uU(14,"Inventario Materiales"),t.qZA(),t.TgZ(15,"option",9),t._uU(16,"Movimientos"),t.qZA()(),t.TgZ(17,"label",10),t._uU(18,"Inventario"),t.qZA()()(),t.TgZ(19,"button",11),t.NdJ("click",function(){return n.filter()}),t._uU(20,"Buscar"),t.qZA(),t.TgZ(21,"app-warn-modal",12),t.NdJ("continue",function(i){return n.deleteAudit(i)}),t.qZA()(),t._UZ(22,"hr"),t.TgZ(23,"app-pagination",13),t.NdJ("fetchedArray",function(i){return n.fetchedArray(i)}),t.qZA(),t.YNc(24,T,16,3,"table",14),t.YNc(25,A,15,1,"table",14),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf","/audit"!=n.reportPath),t.xp6(2),t.Q6J("ngIf","/audit"==n.reportPath),t.xp6(2),t.Q6J("ngModel",n.reportPath),t.xp6(1),t.Q6J("ngValue",void 0),t.xp6(2),t.Q6J("ngValue","/FPreport"),t.xp6(2),t.Q6J("ngValue","/RMreport"),t.xp6(2),t.Q6J("ngValue","/audit"),t.xp6(6),t.Q6J("classlist",t.DdM(13,C)),t.xp6(2),t.Q6J("path",n.reportPath)("mode",!0)("query",n.queryChange),t.xp6(1),t.Q6J("ngIf","/audit"!=n.reportPath),t.xp6(1),t.Q6J("ngIf","/audit"==n.reportPath))},dependencies:[l.sg,l.O5,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.On,s.F,g.u,m.Q]}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(x),d.Bz]}),o})();var M=a(4466);let U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,v,s.u5,M.m]}),o})()}}]);