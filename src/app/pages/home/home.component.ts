import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';
import { FormControl, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { ToDoComponent } from '../../components/shared/to-do/to-do.component';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { FileUploadComponent } from '../../components/shared/file-upload/file-upload.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchBarComponent,
    ToDoComponent,
    ContainerComponent,
    FileUploadComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  
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
