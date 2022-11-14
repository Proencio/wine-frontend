import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sacola',
  templateUrl: './sacola.component.html',
  styleUrls: ['./sacola.component.css']
})
export class SacolaComponent implements OnInit {

  dataSource = [
    {produto: 1, preco: 'Hydrogen', quantidade: 1.0079, subtotal: 'H'},
    {produto: 2, preco: 'Helium', quantidade: 4.0026, subtotal: 'He'},
  ];

  displayedColumns: string[] = ['produto', 'preco', 'quantidade', 'subtotal'];
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pedido() {
    this.router.navigate(['pedido']);
  }




  

}
