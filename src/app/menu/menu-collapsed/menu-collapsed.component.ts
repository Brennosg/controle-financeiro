import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';

@Component({
  selector: 'menu-collapsed',
  templateUrl: './menu-collapsed.component.html',
  styleUrls: ['./menu-collapsed.component.css']
})
export class MenuCollapsedComponent implements OnInit {

  menuCollapsedItens: string[];

  closeMenu() {
    const menu = document.getElementsByClassName('menu-collapsed')[0];
    menu.classList.add('hide');
  }

  constructor(private menuService: MenuService) {
    this.menuCollapsedItens = menuService.getMenuItensCollapsed();
  }

  ngOnInit() {
  }

}
