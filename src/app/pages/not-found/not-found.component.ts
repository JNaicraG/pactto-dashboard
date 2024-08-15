import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/shared/container/container.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
