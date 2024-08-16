import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  @Input() tag:string ='';
}
