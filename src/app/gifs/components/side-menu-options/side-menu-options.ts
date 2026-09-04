import { Component } from '@angular/core';

@Component({
  selector: 'gift-side-menu-options',
  imports: [],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs populares',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      sublabel: 'Buscar Gifs',
      route: '/dashboard/search'
    }
  ]

}
