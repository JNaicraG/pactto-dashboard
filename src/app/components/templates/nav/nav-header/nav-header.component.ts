import { Component, output, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from '../../../shared/container/container.component';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [
    MatButtonModule,
    ContainerComponent
  ],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss'
})
export class NavHeaderComponent {
  onCloseDrawer = output();

  closeDrawer(){
    this.onCloseDrawer.emit();
  }
}
