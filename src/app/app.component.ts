import { Component } from '@angular/core';
import { NavComponent } from './components/templates/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pactto-dashboard';
}
