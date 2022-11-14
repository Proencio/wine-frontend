import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  dataSource = [
    {produto: 1, quantidade: 'Hydrogen', subtotal: 1.0079},
    {produto: 2, quantidade: 'Helium', subtotal: 4.0026},
  ];

  displayedColumns: string[] = ['produto', 'quantidade', 'subtotal'];
  constructor() { }

  ngOnInit(): void {
  }

}
