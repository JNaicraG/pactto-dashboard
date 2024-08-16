import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from '../container/container.component';
import { NavService } from '../../../core/services/nav.service';

@Component({
  selector: 'app-touch-button',
  standalone: true,
  imports: [
    MatButtonModule,
    ContainerComponent
  ],
  templateUrl: './touch-button.component.html',
  styleUrl: './touch-button.component.scss'
})
export class TouchButtonComponent implements OnInit{
  constructor(
    private navService:NavService,
  ){}
  
  drawerOpen:boolean = false;
  

  ngOnInit(): void {
    this.navService.getDrawerStatus().subscribe((value)=>{
      this.drawerOpen = value
    })
  }

  onClick(){
    this.navService.toggleDrawer(true);
  }

}
