import { CssColorsEnum } from './../../../core/types/enums/css-colors.enum';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { ListItemComponent } from '../../shared/list-item/list-item.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    MatButtonModule,
    MatListModule,
    ListItemComponent,
    NavHeaderComponent,
    ButtonComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  openDrawer=true;
  buttonColor:string = CssColorsEnum.ACCENT_RED;
  
  closeDrawer(){
    this.openDrawer = false;
  }

}
