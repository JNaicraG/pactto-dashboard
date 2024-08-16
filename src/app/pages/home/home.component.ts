import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { map, Observable, startWith } from 'rxjs';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { FileUploadComponent } from '../../components/shared/file-upload/file-upload.component';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';
import { ToDoComponent } from '../../components/shared/to-do/to-do.component';
import { TouchButtonComponent } from '../../components/shared/touch-button/touch-button.component';
import { VideoCardComponent } from '../../components/shared/video-card/video-card.component';
import { Video } from '../../core/types/video';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchBarComponent,
    ToDoComponent,
    ContainerComponent,
    FileUploadComponent,
    TouchButtonComponent,
    VideoCardComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  queryControl: FormControl = new FormControl('');
  query: any = '';

  //for implementation of file uploader and thumbnail
  //videos: Video[] = [];
  //filteredVideos: Video[] = [];

  //for tests
  filteredVideos: Video[] = [];
  videos: Video[] = [
    {
      name: 'Name Test',
      tags: [
        'tag 1',
        'tag 2'
      ],
      date: '05/10/2024',
      hour: '2:14am',
    },
    {
      name: 'Test Name',
      tags: [
        'tag 1',
        'tag 2'
      ],
      date: '31/05/2024',
      hour: '12:28am',
    },
    {
      name: 'Jebb Test',
      tags: [
        'tag 1',
        'tag 2'
      ],
      date: '10/10/2024',
      hour: '5:14am',
    },
  ]

  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => this.loading = false,
      1500
    );

    this._updateFilter()
      .subscribe(updatedVideos => {
        //this.query = queryAtual;
        this.filteredVideos = updatedVideos;
      });
  }


  private _updateFilter(): Observable<any> {
    return this.queryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value as string || ''))
    );
  }


  private _filter(query: string): any[] {
    console.log('query: ', query)
    if (query === '') {
      return this.videos;
    }
    const filteredValue = query.toLowerCase();
    const filteredVideos = this.videos.filter((video) => video.name.toLowerCase().includes(filteredValue));
    return filteredVideos;
  }

}
