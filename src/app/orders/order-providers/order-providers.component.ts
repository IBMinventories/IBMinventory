import { Component, OnInit, } from '@angular/core';
import { FormProp } from 'src/app/models/form-prop.model';
import { ProviderService } from 'src/app/services/provider.service';
import { OrdersBuisnessService } from 'src/app/services/orders-buisness.service';
import { Router } from '@angular/router';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-order-providers',
  templateUrl: './order-providers.component.html',
  styleUrls: ['./order-providers.component.css']
})
export class OrderProvidersComponent implements OnInit {

  stock$:Subscription = new Subscription
  formObj:any
  materials:any[] = []
  reqMaterials:any[] = []
  providers:any[] = []
  orderProducts:any[] = []
  currentMaterial:any
  currentProvider:any
  currentIndex:any


  constructor(public orderBusiness:OrdersBuisnessService,  private provService: ProviderService, private router: Router) {
    this.formObj = [
      [new FormProp('Nombre' ,'name', 'text'), new FormProp('Lote Minimo' ,'minBatch', 'number')],
      [new FormProp('Descripcion' ,'description', 'text')],
      [new FormProp('Precio' ,'price', 'number')],
      [new FormProp('Cantidad en Inventario' ,'available', 'number')],
      [new FormProp('Tiempo de Entrega', 'deliveryTime', 'number')] ,
      [new FormProp('Area', 'area', 'text'),new FormProp('Zona', 'zone', 'text'), new FormProp('Posicion', 'position', 'text') ]
    ] 
   }

  ngOnInit(): void { 
    if(this.orderBusiness.materials.length == 0 || this.orderBusiness.orderProducts.length == 0) this.router.navigate(['/orders/add'])

    this.stock$ = this.orderBusiness.updateProviderMaterialStock().subscribe(data => {
      this.reqMaterials = data.filter((m:any) => m.requestMaterial)
      this.materials = data.filter((m:any) => !m.requestMaterial)
    })      
  }

  q = '';
  query = '';

  ngOnDestroy(){
    this.stock$.unsubscribe()
  }


  // updateProviderMaterialStock(materials:any[]){
  //   if(!materials) return []
  //   var matStock:any[] = [];
  //   Object.entries(materials).forEach( async (mat:any, index) => {
  //     const {id, ...stock} = await this.invrmService.getStock(mat[0]) || 0
  //     var stockUp:any;
  //     var request = false;
  //     var req = 0
      
  //     if(!(stock.available!=undefined && stock.commited!=undefined && stock.waiting!=undefined && stock.waitingCommited!=undefined)) return

  //     if(mat[1].quantity <= stock.available){
  //       stockUp = {commited: (+stock.commited) + mat[1].quantity, available: (+stock.available) - mat[1].quantity}
  //     }else {
        
  //       stockUp = {waitingCommited: (+stock.waitingCommited) +  mat[1].quantity - (+stock.available), commited: (+stock.commited) + (+stock.available), available: 0}

  //       if((mat[1].quantity - stock.available) <= stock.waiting){
  //           stockUp = {waiting: (+stock.waiting) + (+stock.available) - mat[1].quantity, ...stockUp}
  //       }else{
  //         req = mat[1].quantity - (+stock.available) - (+stock.waiting);      
  //         request = true;
  //       }
  //     }

  //     matStock.push( {matId:mat[0], name:mat[1].name, quantity: mat[1].quantity,  id, oldStock: stock, newStock: stockUp, requestMaterial: request, requested: req})
  //   })

  //   console.log(matStock)
  //   return matStock
  // } 



  initMaterialOrder(){
    this.reqMaterials.forEach(mat => {
      var amount = mat.requested < mat.minBatch ? mat.minBatch - mat.requested: 0;
      mat.newStock.waiting += amount
      mat.amount = amount
    })
  }


  filter(){
    this.q = this.query
  }


  async setActiveMaterial(mat:any, i:any){
    this.providers = []
    this.currentProvider = undefined
    this.currentMaterial = mat;
    this.currentIndex = i;

    this.providers = this.currentMaterial.providers
  }

  assignProvider(){
    this.reqMaterials[this.currentIndex].minBatch = this.currentProvider.minBatch
    this.reqMaterials[this.currentIndex].deliveryTime = this.currentProvider.deliveryTime
    this.reqMaterials[this.currentIndex].price = this.currentProvider.price
    this.reqMaterials[this.currentIndex].providerId = this.currentProvider.id
    this.reqMaterials[this.currentIndex].providerName = this.currentProvider.name
    alert('Provedor asignado satisfactoriamente')
  }

  
  getOrderWaitMaxTime() {
    return Math.max(...this.reqMaterials.map(e=>e.deliveryTime))
  }

  getSelectedElement(element: any){
    this.currentMaterial = element.element
  }

  getSelectedProvider(provider:any){
    this.currentProvider = provider
    this.assignProvider()
    this.currentMaterial = undefined
  }

  submit(prov:any){
    // if(!prov) return 



    var a:any[] = this.reqMaterials.filter((v:Object) => !(v.hasOwnProperty('minBatch') ))
    if(a.length != 0){
      alert('Aun hay materiales sin proveedor asignador, porfavor rectifique.')
      return
    }

    this.reqMaterials.forEach(m => {delete m.providers; delete m.requestMaterial})
    this.materials.forEach(m => {delete m.providers; delete m.requestMaterial})

    this.initMaterialOrder()
    
    
    this.orderBusiness.order.orderWaitMaxTime = this.getOrderWaitMaxTime()
    this.orderBusiness.order.orderProducts = this.orderProducts
    this.orderBusiness.materials = this.materials
    this.orderBusiness.reqMaterials = this.reqMaterials
  
    this.router.navigate(['orders/add/create']);
  }

}
