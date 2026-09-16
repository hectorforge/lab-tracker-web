import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

interface Food{
  valor: string;
  valorAMostrar: string;
}


@Component({
  imports: [MatTabsModule],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  comidas: Food[] = [
    {valor: 'steak-0', valorAMostrar: 'Steak'},
    {valor: 'pizza-1', valorAMostrar: 'Pizza'},
    {valor: 'tacos-2', valorAMostrar: 'Tacos'},
  ];
}
