import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/catalogue/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormProp } from 'src/app/models/form-prop.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormComponent } from 'src/app/core/form/form.component';
import { Subscription, concat, tap } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { InvFPService } from 'src/app/services/inv-fp.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product?: Product;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  formObj: FormProp[][];

  currentProduct: Product = {
    name: '',
    description: '',
    code: '',
    price: 0,
    leadTime: 0,
    stock: 0,
    capacityByTurn: 0,
  };
  userRole?:string;
  message = '';
  onLeadTime$:Subscription = new Subscription
  
  constructor(private productService: ProductService, private auth: AuthService, private FpService: InvFPService) { 
    this.auth.user$.subscribe(data => this.userRole = data?.userRole)

    this.formObj = [
      [new FormProp('Nombre' ,'name', 'text')],
      [new FormProp('Descripcion' ,'description', 'text')],
      [new FormProp('Precio' ,'price', 'number', [this.custom]),new FormProp('Divisa' ,'currency', 'select', [], ['MXN', 'USD']),],
      [new FormProp('Capacidad por turno' ,'capacityByTurn', 'number', [this.custom]),new FormProp('Tiempo de Fabricacion' ,'leadTime','number', undefined, 0, undefined, undefined, undefined, true),],
      [new FormProp('Se puede Vender' ,'sellable', 'select', [], ['SI', 'NO']), new FormProp('Tipo' ,'type', 'text'), new FormProp('Unidad de medida' ,'units', 'text')],
    ]
  }

  @ViewChild(FormComponent) formC!:FormComponent;

  ngAfterViewInit() {
    this.onLeadTime$ = this.formC.f['capacityByTurn'].valueChanges.pipe(
      tap(v => this.formC.f['leadTime'].patchValue(this.round(1/v)))
    ).subscribe()
  }


  round = (num:number) => Math.round(num*100) /100

  ngOnInit(): void {
    this.message = '';
  }

  custom(control: AbstractControl){
    return control.value > 0 || control.value == null ? null : { 'custom': 'debe ser positivo' } 
  }


  ngOnChanges(): void {
    this.message = '';
    this.currentProduct = { ...this.product };
  }

  submit(product:Product){
    product.capacityByTurn = +(product.capacityByTurn ?? 0)
    this.updateProduct(product)
  }

  onNgDestory(){
    this.onLeadTime$.unsubscribe()
  }


  updateProduct(product:any): void {
    

    if (this.currentProduct.id) {
      concat(this.productService.update(this.currentProduct.id, product)).subscribe(
        {
          complete: ()=> {
          this.refreshList.emit(); 
          this.message = 'El producto fue actualizado satisfactoriamente!'; 
        },
        error: e => alert('Ah ocurrido un error inesperado, intente de nuevo o recargue la página.')
      })
    }
  }

  deleteProduct(): void {
    if (this.currentProduct.id) {
      this.productService.delete(this.currentProduct.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'El producto fue eliminado satisfactoriamente!';
        })
        .catch(err => console.log(err));
    }
  }

}
