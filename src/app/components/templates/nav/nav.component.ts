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
  items = [
    { routerLink: '/home', icon: 'house', text: 'Home' },
    { routerLink: '/pacttos', icon: 'forum', text: 'Pacttos (Chats)' },
    { routerLink: '/videos-to-review', icon: 'video_library', text: 'Items to review' },
    { routerLink: '/shared-links', icon: 'link', text: 'Web links you created' },
    { routerLink: '/personal-info', icon: 'manage_accounts', text: 'Personal information' },
    { routerLink: '/packages', icon: 'redeem', text: 'Review package for sale' },
    { routerLink: '/profile', icon: 'view_carousel', text: 'Pactto website' },
    { routerLink: '/library ', icon: 'ondemand_video', text: 'Reference video library' },
    { routerLink: '/subscription', icon: 'subscriptions', text: 'Subscription' },
    { routerLink: '/review-settings', icon: 'link', text: 'Review Settings' },
  ];

  openDrawer=true;
  buttonColor:string = CssColorsEnum.SECONDARY_DARK;
  selectedIndex:number | null = null;


  setActiveItem(index: number) {
    console.log('EXISTIMOS FAMILÍA?')
    this.selectedIndex = index;
    console.log('index: ', this.selectedIndex)
  }
  
  closeDrawer(){
    this.openDrawer = false;
  }

}
