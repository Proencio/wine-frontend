import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  dataSource = [
    {nome: "Peso", descricao: '1,200 kg'},
    {nome: "Dimensões", descricao: '7 X 7 X 20'},
  ];

  displayedColumns: string[] = ['nome', 'descricao'];

  constructor() { }

  ngOnInit(): void {
  }

}
