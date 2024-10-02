import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavItem } from './models/nav.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  subnav : NavItem[] = [{
    id: 1,
    name: 'Home',
    icon: ''
  },
  {
    id: 2,
    name: 'Pages',
    icon: 'pi-angle-down'
  },
  {
    id: 3,
    name: 'Shop',
    icon: 'pi-angle-down'
  },
  {
    id: 4,
    name: 'Blogs',
    icon: 'pi-angle-down'
  },
  {
    id: 5,
    name: 'Contact Us',
    icon: ''
  }
]}
