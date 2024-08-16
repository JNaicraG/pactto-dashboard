import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar.component';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { FormControl } from '@angular/forms';
import { TouchButtonComponent } from '../../components/shared/touch-button/touch-button.component';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-pacttos',
  standalone: true,
  imports: [
    SearchBarComponent,
    TouchButtonComponent,
    ContainerComponent,
    MatProgressBar
  ],
  templateUrl: './pacttos.component.html',
  styleUrl: './pacttos.component.scss'
})
export class PacttosComponent implements OnInit{
  comments:string[] = [];
  
  queryControl:FormControl = new FormControl('');
  
  loading:boolean = true;
  
  ngOnInit(): void {
    setTimeout(
      ()=>this.loading=false,
      700
    );
  }


}
