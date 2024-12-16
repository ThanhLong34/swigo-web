import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mousecircle',
  standalone: true,
  imports: [],
  templateUrl: './mousecircle.component.html',
  styleUrl: './mousecircle.component.scss'
})
export class MousecircleComponent {

  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
