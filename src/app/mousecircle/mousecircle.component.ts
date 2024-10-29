import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-circle',
  standalone: true,
  imports: [],
  templateUrl: './mousecircle.component.html',
  styleUrl: './mousecircle.component.scss'
})
export class MouseCircleComponent {

  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
