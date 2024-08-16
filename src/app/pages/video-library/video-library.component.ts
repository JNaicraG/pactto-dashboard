import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';
import { FileUploadComponent } from '../../components/shared/file-upload/file-upload.component';
import { TouchButtonComponent } from '../../components/shared/touch-button/touch-button.component';

@Component({
  selector: 'app-video-library',
  standalone: true,
  imports: [
    ContainerComponent,
    SearchBarComponent,
    FileUploadComponent,
    TouchButtonComponent
  ],
  templateUrl: './video-library.component.html',
  styleUrl: './video-library.component.scss'
})
export class VideoLibraryComponent {

  
  queryControl:FormControl = new FormControl('');
  query: any = '';

  ngOnInit(): void {
    this._updateFilter()
      .subscribe(cardsAtualizados => {
        //this.query = queryAtual;
        //this.cardsFiltrados = cardsAtualizados;
      });
  }


  private _updateFilter(): Observable<any> {
    return this.queryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value as string || ''))
    );
  }


  private _filter(query: string): any[] {
    //if (query === '') {
    //  return this.cards;
    //}
    //const filteredValue = query.toLowerCase();
    //const cardsFiltrados = this.cards.filter(card => card.titulo.toLowerCase().includes(filteredValue));
    //return cardsFiltrados;
    return [''];
  }


}
