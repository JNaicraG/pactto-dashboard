import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [MatListModule], //icon poderia ser com mat-icon, também
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() routerLink:string = '';
  @Input() icon:string = '';
  @Input() texto:string = '';
}
