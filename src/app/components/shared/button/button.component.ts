import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from "../container/container.component";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    MatIconModule,
    ContainerComponent
],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Input() colorCss: string = '';
  @Input() prefixIcon: string = '';
  @Input() suffixIcon:string = '';

  click = output();

  onClick():void{
    this.click.emit();
  }

}
