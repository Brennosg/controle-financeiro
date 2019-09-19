import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuItens() {
    return ['Dashboard', 'Resumo', 'Configuração'];
  }

  getMenuItensCollapsed() {
    return ['Resumo', 'Dashboard', 'Configuração'];
  }
}
