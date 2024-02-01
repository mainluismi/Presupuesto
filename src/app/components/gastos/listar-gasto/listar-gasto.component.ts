import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-gasto',
  standalone: true,
  imports: [],
  templateUrl: './listar-gasto.component.html',
  styleUrl: './listar-gasto.component.css'
})
export class ListarGastoComponent implements OnInit, OnDestroy{
  subscription: Subscription;

  constructor(private _presupuestoService: PresupuestoService){
    this.subscription = this._presupuestoService.getGastos().subscribe(data => {
      console.log(data);
    })
  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  }

}
