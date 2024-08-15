import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-review-videos',
  standalone: true,
  imports: [
    ContainerComponent,
    SearchBarComponent
  ],
  templateUrl: './review-videos.component.html',
  styleUrl: './review-videos.component.scss'
})
export class ReviewVideosComponent {

  queryControl:FormControl = new FormControl('');
  videos:any[] = [];

}
