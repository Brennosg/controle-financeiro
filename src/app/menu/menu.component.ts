import { Component, OnInit } from '@angular/core';

import { MenuService } from './menu.service';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItens: string[];

  constructor(private menuService: MenuService) {
    this.menuItens = menuService.getMenuItens();
  }

  ngOnInit() {
  }

}
