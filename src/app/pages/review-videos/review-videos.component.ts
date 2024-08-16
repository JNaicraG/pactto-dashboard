import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';
import { FormControl } from '@angular/forms';
import { TouchButtonComponent } from '../../components/shared/touch-button/touch-button.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-review-videos',
  standalone: true,
  imports: [
    ContainerComponent,
    TouchButtonComponent,
    SearchBarComponent,
    MatProgressBarModule
  ],
  templateUrl: './review-videos.component.html',
  styleUrl: './review-videos.component.scss'
})
export class ReviewVideosComponent implements OnInit{

  queryControl:FormControl = new FormControl('');
  videos:any[] = [];

  loading:boolean = true;

  ngOnInit(): void {
    setTimeout(
      ()=>this.loading=false,
      700
    );
  }

}
