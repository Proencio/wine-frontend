import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-model',
  templateUrl: './produto-model.component.html',
  styleUrls: ['./produto-model.component.css']
})
export class ProdutoModelComponent implements OnInit {
  isOferta = true;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  visualizar() {
    this.router.navigate(['produto/perfil']);
  }

  comprar() {
    this.router.navigate(['produto/perfil']);
  }
}
