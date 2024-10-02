import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from '../../models/nav.type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems: NavItem[] = [
    {
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
  ]
}
