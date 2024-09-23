import { Component, Input } from '@angular/core';
import { NavItem } from '../models/nav.type';
import { CommonModule } from '@angular/common';

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
  @Input() nav : NavItem[] = [];
}
