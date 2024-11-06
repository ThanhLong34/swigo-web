import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-circle',
  standalone: true,
  imports: [],
  templateUrl: './mouse-circle.component.html',
  styleUrl: './mouse-circle.component.scss'
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
