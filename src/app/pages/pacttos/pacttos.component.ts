import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pacttos',
  standalone: true,
  imports: [
    SearchBarComponent,
    ContainerComponent
  ],
  templateUrl: './pacttos.component.html',
  styleUrl: './pacttos.component.scss'
})
export class PacttosComponent {
  comments:string[] = [];

  queryControl:FormControl = new FormControl('');

}
