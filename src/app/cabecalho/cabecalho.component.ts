import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  title = 'Controle Financeiro';

  openMenu() {
    const menu = document.getElementsByClassName('menu-collapsed')[0];
    menu.classList.remove('hide');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
