import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';
import { FormControl, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { ToDoComponent } from '../../components/shared/to-do/to-do.component';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { FileUploadComponent } from '../../components/shared/file-upload/file-upload.component';
import { Video } from '../../core/types/video';
import { TouchButtonComponent } from '../../components/shared/touch-button/touch-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchBarComponent,
    ToDoComponent,
    ContainerComponent,
    FileUploadComponent,
    TouchButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  
  queryControl:FormControl = new FormControl('');
  query: any = '';

  videos:Video[] = [];
  filteredVideos:Video[] = [];

  ngOnInit(): void {
    this._updateFilter()
      .subscribe(cardsAtualizados => {
        //this.query = queryAtual;
        this.filteredVideos = cardsAtualizados;
      });
  }


  private _updateFilter(): Observable<any> {
    return this.queryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value as string || ''))
    );
  }


  private _filter(query: string): any[] {
    if (query === '') {
      return this.videos;
    }
    const filteredValue = query.toLowerCase();
    const filteredVideos = this.videos.filter(video => video.name.toLowerCase().includes(filteredValue));
    return filteredVideos;
  }

}
