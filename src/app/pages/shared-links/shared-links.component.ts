import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';
import { TouchButtonComponent } from '../../components/shared/touch-button/touch-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-shared-links',
  standalone: true,
  imports: [
    ContainerComponent,
    TouchButtonComponent,
    SearchBarComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './shared-links.component.html',
  styleUrl: './shared-links.component.scss'
})
export class SharedLinksComponent implements OnInit{

  publicLinks:string[] = [];
  publicQueryControl:FormControl = new FormControl('');
  
  privateLinks:string[] = [];
  privateQueryControl:FormControl = new FormControl('');

  loading:boolean = true;

  ngOnInit(): void {
    setTimeout(
      ()=>this.loading=false,
      700
    );
  }
  
}
