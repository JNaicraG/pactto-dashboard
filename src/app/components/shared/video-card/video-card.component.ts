import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [
    MatCardModule,
    TagComponent
  ],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input() tags:string[] = [];
  @Input() name:string = ''
  @Input() date:string = ''
  @Input() hour:string = ''

}
