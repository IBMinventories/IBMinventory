"use strict";(self.webpackChunkInvFurniture=self.webpackChunkInvFurniture||[]).push([[592],{9898:(m,l,n)=>{n.d(l,{L:()=>f});var c=n(5861),u=n(4004),h=n(4650),d=n(33);let f=(()=>{class e{constructor(t){this.db=t,this.dbPath="/FPreport",this.invFinishedProductsRef=t.collection(this.dbPath)}getNextBatch(t,i){return this.db.collection(this.dbPath,i?o=>o.orderBy("timestamp","desc").startAfter(i.timestamp).limit(t):o=>o.orderBy("timestamp","desc").limit(t))}getStock(t){var i=this;return(0,c.Z)(function*(){return t?new Promise(function(){var s=(0,c.Z)(function*(_){i.invFinishedProductsRef.doc(t).get().pipe((0,u.U)(a=>({id:a.id,prod:a.data()}))).subscribe(a=>{!a||_({id:a.id,available:a.prod.available,wating:a.prod.wating,commited:a.prod.commited})})});return function(_){return s.apply(this,arguments)}}()):{}})()}getAll(){return this.invFinishedProductsRef}create(t){return this.invFinishedProductsRef.add({...t})}update(t,i){return this.invFinishedProductsRef.doc(t).update(i)}delete(t){return this.invFinishedProductsRef.doc(t).delete()}filterByNameBatch(t,i,o){return this.db.collection(this.dbPath,o?s=>s.where("name",">=",t).where("name","<=",t+"\uf8ff").orderBy("name","desc").startAfter(o.name).limit(i):s=>s.where("name",">=",t).where("name","<=",t+"\uf8ff").orderBy("name","desc").limit(i))}filterByCodeBatch(t,i,o){return this.db.collection(this.dbPath,o?s=>s.where("code",">=",t).where("code","<=",t+"\uf8ff").orderBy("code","desc").startAfter(o.code).limit(i):s=>s.where("code",">=",t).where("code","<=",t+"\uf8ff").orderBy("code","desc").limit(i))}}return e.\u0275fac=function(t){return new(t||e)(h.LFG(d.ST))},e.\u0275prov=h.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8132:(m,l,n)=>{n.d(l,{p:()=>h});var c=n(4650),u=n(33);let h=(()=>{class d{constructor(e){this.db=e,this.dbPath="/orders",this.ordersRef=e.collection(this.dbPath)}getNextBatch(e,r){return this.db.collection(this.dbPath,r?t=>t.orderBy("timestamp","desc").startAfter(r).limit(e):t=>t.orderBy("timestamp","desc").limit(e))}getPrevBatch(e,r,t){return this.db.collection(this.dbPath,i=>i.orderBy("timestamp","desc").startAt(r).endBefore(t).limit(e))}getBatch(e){return this.db.collection(this.dbPath,r=>r.limit(e).orderBy("timestamp","desc"))}getAll(){return this.ordersRef}getById(e){return this.db.collection(this.dbPath,r=>r.where("product_id","==",e))}create(e){return this.ordersRef.add({...e})}update(e,r){return this.ordersRef.doc(e).update(r)}delete(e){return this.ordersRef.doc(e).delete()}filterByName(e){return this.db.collection(this.dbPath,r=>r.where("name",">=",e).where("name","<=",e+"\uf8ff"))}filterByCode(e){return this.db.collection(this.dbPath,r=>r.where("code",">=",e).where("code","<=",e+"\uf8ff"))}}return d.\u0275fac=function(e){return new(e||d)(c.LFG(u.ST))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},5561:(m,l,n)=>{n.d(l,{l:()=>h});var c=n(4650),u=n(33);let h=(()=>{class d{constructor(e){this.db=e,this.dbPath="/shopOrder",this.InvRawMaterialsRef=e.collection(this.dbPath)}getNextBatch(e,r){return this.db.collection(this.dbPath,r?t=>t.orderBy("emissionDate","asc").startAfter(r).limit(e):t=>t.orderBy("emissionDate","asc").limit(e))}create(e,r,t,i,o,s,_,a){var P={materialId:e,price:_,name:r,stockId:s,requiredMaterial:t,requestedAmount:i,orderDeadline:o,emissionDate:new Date,timestamp:new Date};return a&&(P.orderId=a),this.InvRawMaterialsRef.add(P)}update(e,r){return this.InvRawMaterialsRef.doc(e).update(r)}delete(e){return this.InvRawMaterialsRef.doc(e).delete()}filterUrgentatch(e,r,t){return this.db.collection(this.dbPath,t?i=>i.where("orderDeadline","<=",e).orderBy("orderDeadline","asc").startAfter(t.name).limit(r):i=>i.where("orderDeadline","<=",e).orderBy("orderDeadline","asc").limit(r))}}return d.\u0275fac=function(e){return new(e||d)(c.LFG(u.ST))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);