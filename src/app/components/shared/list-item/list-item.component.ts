import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule
  ], //icon poderia ser com mat-icon, também
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent implements OnInit{

  constructor(
    private router:Router,
  ){}

  @Input() routerLink:string = '';
  @Input() icon:string = '';
  @Input() text:string = '';
  @Input() isActive:boolean = false;
  
  itemClicked = output();

  ngOnInit(): void {
    setTimeout(
      () => this.router.url === this.routerLink ? this.isActive = true : '',
      1500
    )
  }
  
  onClick(){
    console.log('clicado');
    this.itemClicked.emit();
    console.log('emitido');
  }
}
