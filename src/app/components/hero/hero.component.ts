import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Mouse trail effect
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = event.clientX + 'px';
    trail.style.top = event.clientY + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
      document.body.removeChild(trail);
    }, 500);

    // Interactive gradient
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--x', `${x}%`);
    document.documentElement.style.setProperty('--y', `${y}%`);
  }
}