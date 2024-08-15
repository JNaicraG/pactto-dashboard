import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    MatChipsModule,
    ContainerComponent
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
  @Input() done:boolean = false;
}
