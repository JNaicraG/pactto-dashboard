import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContainerComponent } from "../container/container.component";
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatFormFieldModule,
    MatInput,
    //MatIconModule,
    //MatFormField,
    //MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ContainerComponent
],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Input() queryControl:FormControl = new FormControl('');

  //displayFn(query: string): string {
  //  return query && query ? query : '';
  //}

}
