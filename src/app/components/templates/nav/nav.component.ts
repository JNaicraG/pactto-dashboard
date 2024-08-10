import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { ListItemComponent } from '../../shared/list-item/list-item.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    MatButtonModule,
    MatListModule,
    ListItemComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  openDrawer=true;

}
