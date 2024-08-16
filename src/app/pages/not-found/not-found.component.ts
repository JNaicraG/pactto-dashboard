import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/shared/container/container.component';
import { TouchButtonComponent } from '../../components/shared/touch-button/touch-button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    ContainerComponent,
    TouchButtonComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
