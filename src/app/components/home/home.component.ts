import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  openMenu = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reciverFeedback(respostaMenu: any) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaMenu);
    this.openMenu = respostaMenu;
  }

  usuarios() {
    this.router.navigate(['usuarios']);
  }
}
