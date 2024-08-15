import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';

@Component({
  selector: 'app-shared-links',
  standalone: true,
  imports: [
    ContainerComponent,
    SearchBarComponent
  ],
  templateUrl: './shared-links.component.html',
  styleUrl: './shared-links.component.scss'
})
export class SharedLinksComponent {

  publicLinks:string[] = [];
  publicQueryControl:FormControl = new FormControl('');
  
  privateLinks:string[] = [];
  privateQueryControl:FormControl = new FormControl('');
  
}
